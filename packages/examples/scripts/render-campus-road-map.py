"""Draw six buildable campus plots and the roads in the supplied aerial views.

All pixels are original: no satellite imagery, roofs, labels or tree crowns.
"""
from pathlib import Path
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

SIZE, PLAN = 2048, 1254
SCALE = SIZE / PLAN
OUT = Path(__file__).resolve().parents[1] / 'assets/campus/campus-ground.png'
rng = np.random.default_rng(4728)

def xy(point):
    return tuple(round(v * SCALE) for v in point)

def line(draw, points, color, width):
    draw.line([xy(p) for p in points], fill=color,
              width=max(1, round(width * SCALE)), joint='curve')

def poly(draw, points, fill, edge=None, width=1):
    coords = [xy(p) for p in points]
    draw.polygon(coords, fill=fill)
    if edge:
        draw.line(coords + [coords[0]], fill=edge,
                  width=max(1, round(width * SCALE)), joint='curve')

def rect(draw, box, fill, edge=None, width=1):
    draw.rectangle([xy(box[:2]), xy(box[2:])], fill=fill, outline=edge,
                   width=max(1, round(width * SCALE)))

def curve(points, samples=8):
    out = []
    ext = [points[0], *points, points[-1]]
    for i in range(1, len(ext) - 2):
        p0, p1, p2, p3 = [np.array(p, dtype=float) for p in ext[i - 1:i + 3]]
        for j in range(samples):
            t = j / samples
            v = .5 * (2*p1 + (-p0+p2)*t + (2*p0-5*p1+4*p2-p3)*t*t
                      + (-p0+3*p1-3*p2+p3)*t*t*t)
            out.append(tuple(v))
    return [*out, points[-1]]

def dashed(draw, points, color='#c8c9c0'):
    path = curve(points, 4)
    distance = 0.
    for a, b in zip(path, path[1:]):
        a, b = np.array(a), np.array(b)
        length = np.linalg.norm(b-a)
        if length == 0: continue
        direction, offset = (b-a)/length, 0.
        while offset < length:
            phase = distance % 29
            used = min((13-phase) if phase < 13 else (29-phase), length-offset)
            if phase < 13 and used > 0:
                line(draw, [a+direction*offset, a+direction*(offset+used)], color, 1.5)
            offset += used
            distance += used

def road(draw, points, width):
    for color, w in (('#8d9b8c', width+34), ('#d3d5c8', width+19),
                     ('#89908a', width+5), ('#565d5d', width)):
        line(draw, points, color, w)
    dashed(draw, points)

def planted(draw, x1, y1, x2, y2):
    rect(draw, (x1,y1,x2,y2), '#7e9a70', '#bec6ad', 2)
    if x2-x1 > y2-y1:
        for x in np.arange(x1+17, x2-9, 26):
            rect(draw, (x-4,y1+3,x+4,y2-3), '#718d66')
    else:
        for y in np.arange(y1+17, y2-9, 26):
            rect(draw, (x1+3,y-4,x2-3,y+4), '#718d66')

grain = rng.normal(0, 2.4, (SIZE,SIZE,1))
large = rng.normal(0, 1, (120,120)).astype(np.float32)
large = np.asarray(Image.fromarray(large,'F').resize((SIZE,SIZE), Image.Resampling.BILINEAR))[:,:,None]
pixels = np.clip(np.array([139,156,126]) + grain + large*3.5, 0, 255).astype(np.uint8)
image = Image.fromarray(pixels, 'RGB')
draw = ImageDraw.Draw(image)

# West canal and its dense landscaped buffer follow the reference boundary.
bank = curve([(93,0),(99,120),(82,245),(105,375),(79,518),(105,660),(90,820),(120,985),(155,1254)])
water = curve([(43,0),(53,120),(34,245),(52,375),(32,518),(57,660),(48,820),(70,985),(99,1254)])
poly(draw, [(0,0),*bank,(0,1254)], '#6f896c')
poly(draw, [(0,0),*water,(0,1254)], '#526e72')
line(draw, bank, '#9eb28c', 8)
line(draw, curve([(125,68),(136,254),(124,461),(140,710),(153,964),(186,1190)]), '#b4baa3', 9)

# Three columns by two rows, all clear for independently placed 3D buildings.
plots = [((166,189,411,552),'#8fa77d'), ((478,189,779,552),'#a3b292'),
         ((846,189,1127,552),'#8fa780'), ((166,650,411,1040),'#98ad89'),
         ((478,650,779,1040),'#9eaf8d'), ((846,650,1127,1040),'#94a983')]
for box, fill in plots:
    rect(draw, box, fill, '#cbd0bb', 4)
    x1,y1,x2,y2 = box
    rect(draw, (x1+9,y1+9,x2-9,y2-9), None, '#b9c2a8', 2)

# Three east-west and three north-south streets make all six lots legible.
roads = [(curve([(122,146),(368,145),(640,143),(915,145),(1254,153)]),37),
         (curve([(120,601),(350,602),(638,601),(910,603),(1254,610)]),42),
         (curve([(139,1091),(368,1092),(641,1088),(919,1083),(1254,1071)]),36),
         (curve([(444,0),(443,307),(445,602),(449,847),(458,1254)]),37),
         (curve([(812,0),(813,293),(815,603),(819,877),(834,1254)]),42),
         (curve([(1176,0),(1175,322),(1179,610),(1187,890),(1200,1254)]),41)]
for path,width in roads: road(draw,path,width)
for x in (445,815,1180):
    for y in (145,602,1086):
        for offset in range(-16,17,7):
            line(draw,[(x+offset,y-36),(x+offset,y-23)],'#d8d9cf',3)
            line(draw,[(x+offset,y+23),(x+offset,y+36)],'#d8d9cf',3)

# Upper left: riverside setbacks, an offset entrance and smaller internal areas.
poly(draw,[(178,209),(254,209),(286,268),(265,321),(191,336),(173,296)],'#7f9b71','#b4c1a6',2)
rect(draw,(288,224,390,339),'#b4baa7','#d4d5c6',3)
rect(draw,(184,377,392,508),'#abb8a0','#ced1be',3)
line(draw,curve([(171,359),(241,362),(319,357),(412,360)]),'#c2c8b5',9)
line(draw,curve([(287,206),(283,303),(279,444),(292,532)]),'#c7cbb8',9)
for x in (204,230,256): planted(draw,x,397,x+9,488)

# Upper middle: paved main-building footprint, garden setbacks and entry walk.
rect(draw,(494,259,763,456),'#b8bbb0','#e0e0d3',5)
for y in range(274,451,31): line(draw,[(500,y),(757,y)],'#afb3a8',1)
for x1,x2 in ((502,605),(651,755)):
    rect(draw,(x1,205,x2,247),'#83a477','#bfcbb3',2)
line(draw,[(628,181),(628,259)],'#c8cbbb',20)
rect(draw,(499,468,758,526),'#87a779','#becbb1',3)
line(draw,[(628,458),(628,551)],'#c9cbbc',16)
planted(draw,481,213,491,524)
planted(draw,766,213,776,524)

# Two garden courts between the front main building and the rear glass towers.
# Use the same world coordinates as campus.ts, leaving the entrance axis open.
for x1,x2 in ((-55,-5),(5,55)):
    corner1 = ((x1+250)/500*PLAN, (-85.5+230)/460*PLAN)
    corner2 = ((x2+250)/500*PLAN, (-69.5+230)/460*PLAN)
    rect(draw, (*corner1,*corner2), '#88a678', '#c7ceb9', 2)

# Upper right: roadside frontage, court, short service lanes and planting.
rect(draw,(859,211,1109,298),'#b6bfae','#d4d7c8',3)
rect(draw,(859,319,972,530),'#93a984','#c5cdb6',2)
rect(draw,(992,319,1109,417),'#a9b79b','#ccd1bd',2)
rect(draw,(992,438,1109,530),'#a5b697','#ccd1bd',2)
line(draw,[(850,308),(1120,308)],'#c8cabc',12)
line(draw,[(983,309),(983,539)],'#c8cabc',11)
line(draw,[(1118,362),(1160,362)],'#c8cabc',10)
planted(draw,1131,203,1144,542)

# Lower row is intentionally empty but has three distinct access patterns.
poly(draw,[(186,673),(300,668),(386,724),(373,833),(320,892),(194,864)],'#9daf8f','#c4cbb5',2)
line(draw,curve([(405,1009),(320,938),(224,826),(172,752)]),'#c3c7b5',10)
rect(draw,(506,681,752,1004),'#a6b69a','#cbd0bc',3)
line(draw,[(628,651),(628,1005)],'#c8cbbc',11)
line(draw,[(503,837),(752,837)],'#bec6b4',8)
for y in (718,785,908,971): planted(draw,857,y,1115,y+16)
line(draw,[(975,654),(975,1031)],'#c1c6b4',9)
for y1,y2 in ((171,182),(563,574),(628,639),(1051,1062)):
    for x1,x2 in ((167,411),(478,779),(846,1125)):
        planted(draw,x1,y1,x2,y2)

# Clip the rectangular texture to a visibly irregular perimeter.
outline = [(34,69),(277,49),(441,66),(622,81),(820,61),(1025,78),
           (1178,53),(1216,186),(1211,360),(1240,522),(1225,715),
           (1244,903),(1218,1080),(1174,1217),(975,1192),(774,1234),
           (573,1208),(340,1230),(49,1199),(33,1082),(16,939),
           (42,786),(21,635),(11,499),(40,364),(17,221)]
alpha = Image.new('L',(SIZE,SIZE),0)
poly(ImageDraw.Draw(alpha),outline,255)
image = image.filter(ImageFilter.GaussianBlur(.25)).convert('RGBA')
image.putalpha(alpha)
OUT.parent.mkdir(parents=True,exist_ok=True)
image.save(OUT,optimize=True)
print(f'Rendered {OUT}: {SIZE} x {SIZE}')
