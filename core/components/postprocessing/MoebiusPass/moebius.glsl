uniform sampler2D uDepth;
uniform sampler2D uNormal;
uniform sampler2D uNoise;
uniform float cameraNear;
uniform float cameraFar;
uniform vec2 uResolution;
uniform float uFrequency;
uniform float uAmplitude;
uniform float uMod;
uniform float uTickness;

const mat3 Sx = mat3(-1, -2, -1, 0, 0, 0, 1, 2, 1);
const mat3 Sy = mat3(-1, 0, 1, -2, 0, 2, -1, 0, 1);

float readDepth(sampler2D depthTexture, vec2 coord) {
  float fragCoordZ = texture2D(depthTexture, coord).x;
  float viewZ = perspectiveDepthToViewZ(fragCoordZ, cameraNear, cameraFar);
  return viewZToOrthographicDepth(viewZ, cameraNear, cameraFar);
}

float luminance(vec3 color) {
  const vec3 magic = vec3(0.2125, 0.7154, 0.0721);
  return dot(magic, color);
}

float getgradientValue(float value00, float value01, float value02, float value10, float value11, float value12, float value20, float value21, float value22) {

  float xSobelValue = Sx[0][0] * value00 + Sx[1][0] * value01 + Sx[2][0] * value02 +
    Sx[0][1] * value10 + Sx[1][1] * value11 + Sx[2][1] * value12 +
    Sx[0][2] * value20 + Sx[1][2] * value21 + Sx[2][2] * value22;

  float ySobelValue = Sy[0][0] * value00 + Sy[1][0] * value01 + Sy[2][0] * value02 +
    Sy[0][1] * value10 + Sy[1][1] * value11 + Sy[2][1] * value12 +
    Sy[0][2] * value20 + Sy[1][2] * value21 + Sy[2][2] * value22;

   /* 在图像边缘检测中，边缘强度 通常被定义为图像梯度的大小。梯度的大小可以通过 X 方向和 Y 方向梯度的平方和的平方根来计算 */

  return sqrt(pow(xSobelValue, 2.0) + pow(ySobelValue, 2.0));

}

float getgradientDepth(sampler2D tex, vec2 uv, vec2 texel, float tickness) {
  float depth00 = readDepth(tex, uv + tickness * texel * vec2(-1, 1));
  float depth01 = readDepth(tex, uv + tickness * texel * vec2(-1, 0));
  float depth02 = readDepth(tex, uv + tickness * texel * vec2(-1, -1));

  float depth10 = readDepth(tex, uv + tickness * texel * vec2(0, -1));
  float depth11 = readDepth(tex, uv + tickness * texel * vec2(0, 0));
  float depth12 = readDepth(tex, uv + tickness * texel * vec2(0, 1));

  float depth20 = readDepth(tex, uv + tickness * texel * vec2(1, -1));
  float depth21 = readDepth(tex, uv + tickness * texel * vec2(1, 0));
  float depth22 = readDepth(tex, uv + tickness * texel * vec2(1, 1));

  float gradientDepth = getgradientValue(depth00, depth01, depth02, depth10, depth11, depth12, depth20, depth21, depth22);

  return gradientDepth;
}

float getgradientNormal(sampler2D tex, vec2 uv, vec2 texel, float tickness) {
  float normal00 = luminance(texture2D(tex, uv + tickness * texel * vec2(-1, 1)).rgb);
  float normal01 = luminance(texture2D(tex, uv + tickness * texel * vec2(-1, 0)).rgb);
  float normal02 = luminance(texture2D(tex, uv + tickness * texel * vec2(-1, -1)).rgb);

  float normal10 = luminance(texture2D(tex, uv + tickness * texel * vec2(0, -1)).rgb);
  float normal11 = luminance(texture2D(tex, uv + tickness * texel * vec2(0, 0)).rgb);
  float normal12 = luminance(texture2D(tex, uv + tickness * texel * vec2(0, 1)).rgb);

  float normal20 = luminance(texture2D(tex, uv + tickness * texel * vec2(1, -1)).rgb);
  float normal21 = luminance(texture2D(tex, uv + tickness * texel * vec2(1, 0)).rgb);
  float normal22 = luminance(texture2D(tex, uv + tickness * texel * vec2(1, 1)).rgb);

  float gradientDepth = getgradientValue(normal00, normal01, normal02, normal10, normal11, normal12, normal20, normal21, normal22);

  return gradientDepth;
}

float hash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * .1031);
  p3 += dot(p3, p3.yzx + 33.33);

  return fract((p3.x + p3.y) * p3.z);
}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {

  float depth = readDepth(uDepth, uv);

  vec3 normal = texture2D(uNormal, uv).rgb;

  vec2 texel = vec2(1.0 / uResolution.x, 1.0 / uResolution.y);

  float outlineThickness = uTickness;

  vec4 outlineColor = vec4(0.0, 0.0, 0.0, 1.0);

  vec4 diffuse = texture2D(inputBuffer, uv);

  vec4 color = inputColor;

  // vec2 displacement = vec2((hash(gl_FragCoord.xy) * sin(gl_FragCoord.y * uFrequency)), (hash(gl_FragCoord.xy) * cos(gl_FragCoord.x * uFrequency))) * uAmplitude / resolution.xy;
  vec2 displacement = vec2(sin(gl_FragCoord.y * uFrequency), cos(gl_FragCoord.x * uFrequency)) * uAmplitude / uResolution.xy;

  float gradientDepth = getgradientDepth(uDepth, uv + displacement, texel, outlineThickness);

  float gradientNormal = getgradientNormal(uNormal, uv + displacement, texel, outlineThickness);

  float outline = gradientDepth * 30. + gradientNormal * 2.;

  // outline = smoothstep(0.0, 1.0, outline);

  float diffuseluma = luminance(diffuse.rgb);

  float modVal = uMod;

  if(diffuseluma <= 0.25 && depth <= 0.99) {
    if(mod((uv.y + displacement.y) * uResolution.y, modVal) < outlineThickness) {
      color = outlineColor;
    };
  }
  if(diffuseluma <= 0.45 && depth <= 0.99) {
    if(mod((uv.x + displacement.x) * uResolution.x, modVal) < outlineThickness) {
      color = outlineColor;
    };

  }
  if(diffuseluma <= 0.5 && depth <= 0.99) {
    if(mod((uv.x + displacement.x) * uResolution.y + (uv.y + displacement.y) * uResolution.x, modVal) <= outlineThickness) {
      color = outlineColor;
    };
  }

  color = mix(color, outlineColor, outline);

  outputColor = color;
  outputColor = vec4(vec3(color), 1.);
}