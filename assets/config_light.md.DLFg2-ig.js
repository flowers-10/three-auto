import{_ as e,c as o,a1 as t,o as h}from"./chunks/framework.DiRI4YF-.js";const g=JSON.parse('{"title":"Light","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"config/light.md","filePath":"zh/config/light.md","lastUpdated":1734419204000}'),i={name:"config/light.md"};function l(d,a,r,c,n,s){return h(),o("div",null,a[0]||(a[0]=[t('<h1 id="light" tabindex="-1">Light <a class="header-anchor" href="#light" aria-label="Permalink to &quot;Light&quot;">​</a></h1><p><code>array</code></p><p>灯光组件。定义了灯光对象的各种可配置选项，包括灯光类型、颜色、强度、阴影设置等。以下是每个属性的详细说明。</p><h2 id="light-castshadow" tabindex="-1">light-castShadow <a class="header-anchor" href="#light-castshadow" aria-label="Permalink to &quot;light-castShadow&quot;">​</a></h2><p><code>boolean</code></p><p>是否启用阴影投射。设置为 <code>true</code> 时，灯光会投射阴影。需要确保场景中的对象和接收阴影的表面都能支持阴影渲染。</p><h2 id="light-shadow" tabindex="-1">light-shadow <a class="header-anchor" href="#light-shadow" aria-label="Permalink to &quot;light-shadow&quot;">​</a></h2><p><code>object</code></p><p>配置灯光的阴影属性。<code>shadow</code> 配置项是一个可选的部分配置，允许进一步调整阴影的细节，如阴影的大小、深度等。具体配置项见下文的 <code>LightShadowConfig</code>。</p><h3 id="light-shadow-mapsizewidth" tabindex="-1">light-shadow.mapSizeWidth <a class="header-anchor" href="#light-shadow-mapsizewidth" aria-label="Permalink to &quot;light-shadow.mapSizeWidth&quot;">​</a></h3><p><code>number</code></p><p>阴影贴图的宽度。影响阴影的分辨率，较大的值可以提高阴影的细节。</p><h3 id="light-shadow-mapsizeheight" tabindex="-1">light-shadow.mapSizeHeight <a class="header-anchor" href="#light-shadow-mapsizeheight" aria-label="Permalink to &quot;light-shadow.mapSizeHeight&quot;">​</a></h3><p><code>number</code></p><p>阴影贴图的高度，类似 mapSizeWidth，控制阴影的细节。</p><h3 id="light-shadow-cameraleft" tabindex="-1">light-shadow.cameraLeft <a class="header-anchor" href="#light-shadow-cameraleft" aria-label="Permalink to &quot;light-shadow.cameraLeft&quot;">​</a></h3><p><code>number</code></p><p>阴影摄像机的左边界，控制阴影摄像机的视锥范围。</p><h3 id="light-shadow-cameraleft-1" tabindex="-1">light-shadow.cameraLeft <a class="header-anchor" href="#light-shadow-cameraleft-1" aria-label="Permalink to &quot;light-shadow.cameraLeft&quot;">​</a></h3><p><code>number</code></p><p>阴影摄像机的左边界，控制阴影摄像机的视锥范围。</p><h3 id="light-shadow-cameraright" tabindex="-1">light-shadow.cameraRight <a class="header-anchor" href="#light-shadow-cameraright" aria-label="Permalink to &quot;light-shadow.cameraRight&quot;">​</a></h3><p><code>number</code></p><p>阴影摄像机的右边界。</p><h3 id="light-shadow-cameratop" tabindex="-1">light-shadow.cameraTop <a class="header-anchor" href="#light-shadow-cameratop" aria-label="Permalink to &quot;light-shadow.cameraTop&quot;">​</a></h3><p><code>number</code></p><p>阴影摄像机的上边界。</p><h3 id="light-shadow-camerabottom" tabindex="-1">light-shadow.cameraBottom <a class="header-anchor" href="#light-shadow-camerabottom" aria-label="Permalink to &quot;light-shadow.cameraBottom&quot;">​</a></h3><p><code>number</code></p><p>阴影摄像机的下边界。</p><h3 id="light-shadow-cameranear" tabindex="-1">light-shadow.cameraNear <a class="header-anchor" href="#light-shadow-cameranear" aria-label="Permalink to &quot;light-shadow.cameraNear&quot;">​</a></h3><p><code>number</code></p><p>阴影摄像机的近裁剪面。</p><h3 id="light-shadow-camerafar" tabindex="-1">light-shadow.cameraFar <a class="header-anchor" href="#light-shadow-camerafar" aria-label="Permalink to &quot;light-shadow.cameraFar&quot;">​</a></h3><p><code>number</code></p><p>阴影摄像机的远裁剪面。</p><h3 id="light-shadow-radius" tabindex="-1">light-shadow.radius <a class="header-anchor" href="#light-shadow-radius" aria-label="Permalink to &quot;light-shadow.radius&quot;">​</a></h3><p><code>number</code></p><p>阴影的衰减半径，影响阴影的柔和程度。</p><h3 id="light-shadow-normalbias" tabindex="-1">light-shadow.normalBias <a class="header-anchor" href="#light-shadow-normalbias" aria-label="Permalink to &quot;light-shadow.normalBias&quot;">​</a></h3><p><code>number</code></p><p>用于调整阴影偏移，避免接缝处的阴影出现不自然的现象。</p><h3 id="light-shadow-bias" tabindex="-1">light-shadow.bias <a class="header-anchor" href="#light-shadow-bias" aria-label="Permalink to &quot;light-shadow.bias&quot;">​</a></h3><p><code>number</code></p><p>阴影的偏移量，通常用于解决阴影贴图中可能出现的 &quot;shadow acne&quot; 问题。</p><h2 id="light-target" tabindex="-1">light-target <a class="header-anchor" href="#light-target" aria-label="Permalink to &quot;light-target&quot;">​</a></h2><p><code>THREE.Object3D</code></p><p>灯光的目标对象，只有当灯光类型为聚光灯（<code>spot</code>）或方向光（<code>directional</code>）时，才需要设置目标对象。目标对象是灯光的照射方向，默认情况下，灯光会照射场景的原点。</p><h2 id="light-type" tabindex="-1">light-type <a class="header-anchor" href="#light-type" aria-label="Permalink to &quot;light-type&quot;">​</a></h2><p><code>string</code></p><p>灯光的类型。可以是以下之一：</p><ul><li><code>&quot;point&quot;</code>：点光源，光线从一个点向四面八方发散。</li><li><code>&quot;ambient&quot;</code>：环境光，均匀地照亮场景，不产生阴影。</li><li><code>&quot;hemisphere&quot;</code>：半球光，提供从上方和底部的两种不同的光源。</li><li><code>&quot;spot&quot;</code>：聚光灯，发出定向的光束，常用于聚焦某个区域。</li><li><code>&quot;directional&quot;</code>：方向光，光线从一个特定方向照射场景中的所有对象。</li></ul><h2 id="light-color" tabindex="-1">light-color <a class="header-anchor" href="#light-color" aria-label="Permalink to &quot;light-color&quot;">​</a></h2><p><code>string</code></p><p>灯光的颜色，可以使用标准的 <code>CSS</code> 颜色表示法，如 <code>HEX</code>、<code>RGB</code> 或 <code>RGBA</code> 值。</p><h2 id="light-intensity" tabindex="-1">light-intensity <a class="header-anchor" href="#light-intensity" aria-label="Permalink to &quot;light-intensity&quot;">​</a></h2><p><code>number</code></p><p>灯光的强度，决定光源的亮度。值越大，光源越亮。</p><h2 id="light-distance" tabindex="-1">light-distance <a class="header-anchor" href="#light-distance" aria-label="Permalink to &quot;light-distance&quot;">​</a></h2><p><code>number</code></p><p>对于点光源或聚光灯，distance 表示光源的最大作用距离。超出该距离后，光源不再照亮对象。</p><h2 id="light-helper" tabindex="-1">light-helper <a class="header-anchor" href="#light-helper" aria-label="Permalink to &quot;light-helper&quot;">​</a></h2><p><code>boolean</code></p><p>是否启用灯光的调试助手。调试助手可以帮助在场景中可视化灯光的位置和范围。</p><h2 id="light-helpersize" tabindex="-1">light-helperSize <a class="header-anchor" href="#light-helpersize" aria-label="Permalink to &quot;light-helperSize&quot;">​</a></h2><p><code>number</code></p><p>调试助手的大小。对于启用了 helper 的灯光，设置该属性来调整调试助手的尺寸。</p><h2 id="light-lightname" tabindex="-1">light-lightName <a class="header-anchor" href="#light-lightname" aria-label="Permalink to &quot;light-lightName&quot;">​</a></h2><p><code>string</code></p><p>为灯光指定一个名称，方便在调试或其他操作中引用。</p><h2 id="light-position" tabindex="-1">light-position <a class="header-anchor" href="#light-position" aria-label="Permalink to &quot;light-position&quot;">​</a></h2><p><code>object</code></p><p>设置灯光的位置。是一个包含 <code>x</code>、<code>y</code> 和 <code>z</code> 坐标的类型，表示光源在场景中的位置。</p><h3 id="light-position-x" tabindex="-1">light-position.x <a class="header-anchor" href="#light-position-x" aria-label="Permalink to &quot;light-position.x&quot;">​</a></h3><p><code>number</code></p><p>灯光水平偏移</p><h3 id="light-position-y" tabindex="-1">light-position.y <a class="header-anchor" href="#light-position-y" aria-label="Permalink to &quot;light-position.y&quot;">​</a></h3><p><code>number</code></p><p>灯光垂直偏移</p><h3 id="light-position-z" tabindex="-1">light-position.z <a class="header-anchor" href="#light-position-z" aria-label="Permalink to &quot;light-position.z&quot;">​</a></h3><p><code>number</code></p><p>灯光前后偏移</p><h2 id="light-groundcolor" tabindex="-1">light-groundColor <a class="header-anchor" href="#light-groundcolor" aria-label="Permalink to &quot;light-groundColor&quot;">​</a></h2><p><code>string</code></p><p>半球光源 (<code>hemisphere</code>) 使用此属性设置地面的颜色。它定义了场景下方的光线颜色。</p><h2 id="light-angle" tabindex="-1">light-angle <a class="header-anchor" href="#light-angle" aria-label="Permalink to &quot;light-angle&quot;">​</a></h2><p><code>number</code></p><p>对于聚光灯 (<code>spot</code>)，<code>angle</code> 定义光束的角度（以弧度为单位）。它控制聚光灯的光束范围。</p><h2 id="light-penumbra" tabindex="-1">light-penumbra <a class="header-anchor" href="#light-penumbra" aria-label="Permalink to &quot;light-penumbra&quot;">​</a></h2><p><code>number</code></p><p>对于聚光灯 (<code>spot</code>)<code>，penumbra</code> 控制光束的过渡区（阴影的边缘）。值为 <code>0</code> 时，光束边缘完全硬边，值为 <code>1</code> 时，边缘过渡平滑。</p><h2 id="light-angle-1" tabindex="-1">light-angle <a class="header-anchor" href="#light-angle-1" aria-label="Permalink to &quot;light-angle&quot;">​</a></h2><p><code>number</code></p><p>对于点光源或聚光灯，<code>decay</code> 控制光源衰减的速度。大于 <code>1</code> 时，光强随着距离的增加逐渐衰减。</p>',94)]))}const m=e(i,[["render",l]]);export{g as __pageData,m as default};