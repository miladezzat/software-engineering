---
card: "https://cdn-media-1.freecodecamp.org/images/1*DxOICjfEReAFqCeC5V0oNA.png"
tags: [JavaScript]
description: by Flavio De Stefano
author: "Milad E. Fahmy"
title: "How I built the SiriWaveJS library: a look at the math and the code"
created: "2021-08-15T19:40:48+02:00"
modified: "2021-08-15T19:40:48+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-siri tag-math tag-tech tag-music ">
<header class="post-full-header">
<h1 class="post-full-title">How I built the SiriWaveJS library: a look at the math and the code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*DxOICjfEReAFqCeC5V0oNA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*DxOICjfEReAFqCeC5V0oNA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*DxOICjfEReAFqCeC5V0oNA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*DxOICjfEReAFqCeC5V0oNA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*DxOICjfEReAFqCeC5V0oNA.png" alt="How I built the SiriWaveJS library: a look at the math and the code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Flavio De Stefano</p>
<h1 id="how-i-built-the-siriwavejs-library-a-look-at-the-math-and-the-code">How I built the SiriWaveJS library: a look at the math and the code</h1>
<p>It was 4 years ago when I had the idea to replicate the <strong>Apple® Siri</strong> <strong>wave-form</strong> (introduced with the iPhone 4S) in the browser using pure Javascript.</p>
<p>During the last month, I updated this library by doing a lot of refactoring using ES6 features and reviewed the build process using <strong>RollupJS.</strong> Now I’ve decided to share what I've learned during this process and the math behind this library.</p>
<p>To get an idea what the output will be, visit the <a href="http://kopiro.github.io/siriwave/" rel="noopener"><strong>live example</strong></a><strong>; </strong>the whole codebase is <a href="https://github.com/kopiro/siriwave" rel="noopener"><strong>here</strong></a>.</p>
<p>Additionally, you can download all plots drawn in this article in GCX (OSX Grapher format): <a href="https://github.com/kopiro/siriwave/raw/master/default.gcx" rel="noopener"><strong>default.gcx</strong></a> and <a href="https://github.com/kopiro/siriwave/raw/master/ios9.gcx" rel="noopener"><strong>ios9.gcx</strong></a><strong>.</strong></p>
<h3 id="the-classic-wave-style"><strong>The classic wave style</strong></h3>
<figcaption>Classic style</figcaption>
</figure>
<p>Initially, this library only had the classic wave-form style that all of you remember using in iOS 7 and iOS 8.</p>
<p>It’s no hard task to replicate this simple wave-form, only a bit of math and basic concepts of the Canvas API.</p>
<figcaption>Siri wave-form in iOS 7/8</figcaption>
</figure>
<p>You’re probably thinking that the wave-form is a modification of the <strong>Sine</strong> math equation, and you're right…well, almost right.</p>
<p>Before starting to code, we’ve got to find our linear equation that will be simply applied afterwards. My favourite plot editor is <strong>Grapher;</strong> you can find it in any OSX installation under <em>Applications &gt; Utilities &gt; Graphe</em>r.app.</p>
<p>We start by drawing the well known:</p>
<figcaption>Plot for y = sin(x)</figcaption>
</figure>
<p>Perfecto! Now, let’s add some parameters (Amplitude <strong>[A]</strong>, Time coordinate<strong>[t] </strong>and Spatial frequency <strong>[k]</strong>) that will be useful later (Read more here: <a href="https://en.wikipedia.org/wiki/Wave" rel="noopener">https://en.wikipedia.org/wiki/Wave</a>).</p>
<p>Now we have to “attenuate” this function on plot boundaries, so that for <strong>|x| &gt;</strong>; 2, t<strong>he</strong> y values tends to 0. Let’s draw separately an equati<strong>on g(</strong>x) that has these characteristics.</p>
<p>This seems to be a good equation to start with. Let’s add some parameters here too to smooth the curve for our purposes:</p>
<p>Now, by multiplying our <strong>f(x, …) </strong>and <strong>g(x, …)<em>, </em></strong>and by setting precise parameters to the other static values, we obtain something like this.</p>
<ul>
<li><strong>A = 0.9</strong> set the amplitude of the wave to max Y = A</li>
<li><strong>k = 8</strong> set the spatial frequency and we obtain “more peaks” in the range [-2, 2]</li>
<li><strong>t = -π/2</strong> set the phase translation so that <strong>f(0, …) = 1</strong></li>
<li><strong>K = 4</strong> set the factor for the “attenuation equation” so that the final equation is y = 0 when<strong> |x| ≥ 2</strong></li>
</ul>
<p>It looks good! ?</p>
<p>Now, if you notice on the original wave we have other sub-waves that will give a lower value for the amplitude. Let’s draw them for <strong>A = {0.8, 0.6, 0.4, 0.2, -0.2, -0.4, -0.6, -0.8}</strong></p>
<p>In the final canvas composition the sub-waves will be drawn with a decreasing opacity tending to 0.</p>
<h4 id="basic-code-concepts">Basic code concepts</h4>
<p>What do we do now with this equation?</p>
<p>We use the equation to obtain the <strong>Y value</strong> for an <strong>input X</strong>.</p>
<p>Basically, by using a simple <strong>for loop</strong> from <strong>-2 to 2, </strong>(the <em>plot boundaries in this case)</em>, we have to draw <strong>point by point</strong> the equation on the canvas using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath" rel="noopener"><strong>beginPath</strong></a><strong> </strong>and<strong> <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo" rel="noopener">lineTo</a> </strong>API.</p><pre><code>const ctx = canvas.getContext('2d');</code></pre><pre><code>ctx.beginPath();ctx.strokeStyle = 'white';</code></pre><pre><code>for (let i = -2; i &lt;= 2; i += 0.01) {   const x = _xpos(i);   const y = _ypos(i);   ctx.lineTo(x, y);}</code></pre><pre><code>ctx.stroke();</code></pre>
<p>Probably this pseudo-code will clear up these ideas. We still have to implement our <strong>_xpos </strong>and<strong> _ypos </strong>functions.</p>
<p>But… hey, what is <strong>0.01⁉️ </strong>That value represents <strong>how many pixels</strong> you move forward in each iteration before reaching the right plot boundary… but what is the correct value?</p>
<p>If you use a really small value (<strong>&lt;0.</strong>01), you’ll get an insanely precise rendering of the graph but your performance will decrease because you’ll get too many iterations.</p>
<p>Instead, if you use a really big value (<strong>&gt; 0.</strong>1) your graph will lose precision and you’ll notice this instantly.</p>
<figcaption>Plot drawn with precision = 0.2</figcaption>
</figure>
<p>You can see that the final code is actually similar to the pseudo-code: <a href="https://github.com/kopiro/siriwave/blob/master/src/curve.js#L25" rel="noopener">https://github.com/kopiro/siriwave/blob/master/src/curve.js#L25</a></p>
<h4 id="implement-_xpos-i-">Implement _xpos(i)</h4>
<p>You may argue that if we’re drawing the plot by incrementing the <strong><em>x</em></strong>, then <strong><em>_xpos</em></strong><em> </em>may simply return the input argument.</p>
<p>This is almost correct, but our plot is always drawn from <strong>-B </strong>to<strong> B </strong><em>(B = Boundary = 2).</em></p>
<p>So, to draw on the canvas via <strong>pixel coordinates</strong>, we must translate <strong>-B to 0, </strong>and <strong>B to 1 </strong>(simple transposition of [-B, B] to [0,1]); then multiply [0,1] and the <strong>canvas width (w).</strong></p>
<blockquote>_xpos(i) = w * [ (i + B) / 2B ]</blockquote>
<p><a href="https://github.com/kopiro/siriwave/blob/master/src/curve.js#L19" rel="noopener">https://github.com/kopiro/siriwave/blob/master/src/curve.js#L19</a></p>
<h4 id="implement-_ypos"><strong>Implement _ypos</strong></h4>
<p>To implement <strong>_ypos</strong>, we should simply write our equation obtained before (closely).</p><pre><code>const K = 4;const FREQ = 6;</code></pre><pre><code>function _attFn(x) {   return Math.pow(K / (K + Math.pow(x, K)), K);}</code></pre><pre><code>function _ypos(i) {   return Math.sin(FREQ * i - phase) *       _attFn(i) *       canvasHeight *      globalAmplitude *       (1 / attenuation);}</code></pre>
<p>Let’s clarify some parameters.</p>
<ul>
<li><strong>canvasHeight</strong> is Canvas height expressed in PX</li>
<li><strong>i </strong>is our input value (the <strong>x</strong>)</li>
<li><strong>phase </strong>is the most important parameter, let’s discuss it later</li>
<li><strong>globalAmplitude</strong> is a static parameter that represents the amplitude of the total wave (composed by sub-waves)</li>
<li><strong>attenuation </strong>is a static parameter that changes for each line and represents the amplitude of a wave</li>
</ul>
<p><a href="https://github.com/kopiro/siriwave/blob/master/src/curve.js#L24" rel="noopener">https://github.com/kopiro/siriwave/blob/master/src/curve.js#L24</a></p>
<h4 id="phase"><strong>Phase</strong></h4>
<p>Now let’s discuss about the <strong>phase variable: </strong>it is the <strong>first changing variable</strong> over time, because it simulates the wave movement.</p>
<p>What does it mean? It means that <strong>for each <em>animation frame, </em></strong>our base controller should <strong>increment</strong> this value. But to avoid this value throwing a buffer overflow, let’s modulo it with 2π (since <strong>Math.sin</strong> dominio is already modulo 2π).</p><pre><code>phase = (phase + (Math.PI / 2) * speed) % (2 * Math.PI);</code></pre>
<p>We multiply <strong>speed </strong>and <strong>Math.PI</strong> so that with <strong>speed = 1</strong> we have the maximum speed (why? because <strong>sin(0) = 0, sin(π/2) = 1, sin(π) = 0, … ?)</strong></p>
<h4 id="finalizing">Finalizing</h4>
<p>Now that we have all code to draw a single line, we define a configuration array to draw all sub-waves, and then cycle over them.</p><pre><code>return [   { attenuation: -2, lineWidth: 1.0, opacity: 0.1 },   { attenuation: -6, lineWidth: 1.0, opacity: 0.2 },   { attenuation: 4, lineWidth: 1.0, opacity: 0.4 },   { attenuation: 2, lineWidth: 1.0, opacity: 0.6},</code></pre><pre><code>   // basic line   { attenuation: 1, lineWidth: 1.5, opacity: 1.0},];</code></pre>
<p><a href="https://github.com/kopiro/siriwave/blob/master/src/siriwave.js#L190" rel="noopener">https://github.com/kopiro/siriwave/blob/master/src/siriwave.js#L190</a></p>
<h3 id="the-ios-9-style">The iOS 9+ style</h3>
<figcaption>GIF of SiriwaveJS iOS9+</figcaption>
</figure>
<p>Now things start to get complicated. The style introduced with iOS 9 is really complex and the reverse engineering to simulate it<strong> it’s not easy at all</strong>! I’m not fully satisfied of the final result, but I’ll continue to improve it until I get the desired result.</p>
<p>As previously done, let’s start to obtain the linear equations of the waves.</p>
<figcaption>Original Siri iOS 9+ wave-form</figcaption>
</figure>
<p>As you can notice:</p>
<ul>
<li>we have three <strong>different specular equations</strong> with different colours (<strong>green, blue, red</strong>)</li>
<li>a single wave seems to be a <strong>sum of sine equations</strong> with <strong>different parameters</strong></li>
<li>all other colours are a <strong>composition</strong> of these three base colours</li>
<li>there is a <strong>straight line </strong>at the plot boundaries</li>
</ul>
<p>By picking again our previous equations, let’s define a more complex equation that <strong>involves translation. </strong>We start by defining again our attenuation equation:</p>
<p>Now, define <strong>h(x, A, k, t)</strong> function, that is the <strong>sine function </strong>multiplied for <strong>attenuation function,</strong> in its absolute value:</p>
<p>We now have a powerful tool.</p>
<p>With <strong>h(x)</strong>, we can now create the final wave-form by summing different <strong>h(x)</strong> with different parameters involving different amplitudes, frequency and translations. For example, let’s define the <strong>red curve </strong>by putting random values.</p>
<p>If we do the same with a <strong>green</strong> and <strong>blue</strong> curve, this is the result:</p>
<p>This is not quite perfect, but it could work.</p>
<p>To obtain the specular version, just multiply everything by <strong>-1.</strong></p>
<p>In the coding side, the approach is the same, we have only a more complex equation for <strong>_ypos.</strong></p><pre><code>const K = 4;const NO_OF_CURVES = 3;</code></pre><pre><code>// This parameters should be generated randomlyconst widths = [ 0.4, 0.6, 0.3 ];const offsets = [ 1, 4, -3 ];const amplitudes = [ 0.5, 0.7, 0.2 ];const phases = [ 0, 0, 0 ];</code></pre><pre><code>function _globalAttFn(x) {   return Math.pow(K / (K + Math.pow(x, 2)), K);}</code></pre><pre><code>function _ypos(i) {   let y = 0;   for (let ci = 0; ci &lt; NO_OF_CURVES; ci++) {      const t = offsets[ci];      const k = 1 / widths[ci];      const x = (i * k) - t;            y += Math.abs(         amplitudes[ci] *          Math.sin(x - phases[ci]) *          _globalAttFn(x)      );   }</code></pre><pre><code>   y = y / NO_OF_CURVES;   return canvasHeightMax * globalAmplitude * y;}</code></pre>
<p>There’s nothing complex here. The only thing that changed is that we cycle <strong>NO_OF_CURVES</strong> times over all pseudo-random parameters and we <strong>sum</strong> all <strong>y values.</strong></p>
<p>Before multiplying it for <strong>canvasHeightMax </strong>and<strong> globalAmplitude </strong>that give us the absolute PX coordinate of the canvas, we divide it for NO_OF_CURVES so that <strong>y is always ≤ 1.</strong></p>
<p><a href="https://github.com/kopiro/siriwave/blob/master/src/ios9curve.js#L103" rel="noopener">https://github.com/kopiro/siriwave/blob/master/src/ios9curve.js#L103</a></p>
<h4 id="composite-operation"><strong>Composite operation</strong></h4>
<p>One thing that actually matters here is the <strong>globalCompositeOperation </strong>mode to set in the Canvas. If you notice, in the original controller, when there’s a overlap of 2+ colors, they’re actually mixed in a standard way.</p>
<p>The default is set to <strong>source-over</strong>, but the result is poor, even with an opacity set.</p>
<figcaption>composite operation: source-over</figcaption>
</figure>
<p>You can see all examples of vary <strong>globalCompositeOperation </strong>here: <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation" rel="noopener">https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation</a></p>
<p>By setting <strong>globalCompositeOperation</strong> to<strong> “ligther”</strong>, you notice that the intersection of the colours is nearest to the original.</p>
<figcaption>Composite operation: lighter</figcaption>
</figure>
<h3 id="build-with-rollupjs">Build with RollupJS</h3>
<p>Before refactoring everything, I wasn’t satisfied at all with the codebase: old prototype-like classes, a single Javascript file for everything, no uglify/minify and <strong>no build at all.</strong></p>
<p>Using the new ES6 feature like <strong>native classes, spread operators </strong>and<strong> lambda functions</strong>, I was able to clean everything, split files, and decrease lines of unnecessary code.</p>
<p>Furthermore, I used <a href="https://rollupjs.org/" rel="noopener">RollupJS</a> to create a transpiled and minified build in various formats.</p>
<p>Since this is a browser-only library, I decided to create two builds: an <strong>UMD (Universal Module Definition) </strong>build that you can use directly by importing the script or by using CDN, and another one as an <strong>ESM module.</strong></p>
<p>The UMD module is built with this configuration:</p><pre><code>{   input: 'src/siriwave.js',   output: {      file: pkg.unpkg,      name: pkg.amdName,      format: 'umd'    },    plugins: [       resolve(),       commonjs(),       babel({ exclude: 'node_modules/**' }),    ]}</code></pre>
<p>An additional <strong>minified UMD module </strong>is built with this configuration:</p><pre><code>{   input: 'src/siriwave.js',   output: {      file: pkg.unpkg.replace('.js', '.min.js'),      name: pkg.amdName,      format: 'umd'    },    plugins: [       resolve(),       commonjs(),       babel({ exclude: 'node_modules/**' }),       uglify()]}</code></pre>
<p>Benefiting of UnPKG service, you can find the final build on this URL served by a CDN: <a href="https://unpkg.com/siriwave/dist/siriwave.min.js" rel="noopener">https://unpkg.com/siriwave/dist/siriwave.min.js</a></p>
<p>This is the “old style Javascript way” — you can just import your script and then refer in your code by using <strong>SiriWave</strong> global object.</p>
<p>To provide a more elegant and modern way, I also built an ESM module with this configuration:</p><pre><code>{    input: ‘src/siriwave.js’,   output: {       file: pkg.module,       format: ‘esm’   },    plugins: [       babel({ exclude: ‘node_modules/**’ })   ]}</code></pre>
<p>We clearly don’t want the <strong>resolve </strong>or<strong> commonjs </strong>RollupJS plugins because the developer transplier will resolve dependencies for us.</p>
<p>You can find the final RollupJS configuration here: <a href="https://github.com/kopiro/siriwave/blob/master/rollup.config.js" rel="noopener">https://github.com/kopiro/siriwave/blob/master/rollup.config.js</a></p>
<h4 id="watch-and-hot-code-reload"><strong>Watch and Hot code reload</strong></h4>
<p>Using RollupJS, you can also take advantage of <strong>rollup-plugin-livereload </strong>and<strong> rollup-plugin-serve </strong>plugins to provide a better way to work on scripts.</p>
<p>Basically, you just add these plugins when you’re in “developer” mode:</p><pre><code>import livereload from 'rollup-plugin-livereload';import serve from 'rollup-plugin-serve';</code></pre><pre><code>if (process.env.NODE_ENV !== 'production') { additional_plugins.push(  serve({   open: true,   contentBase: '.'  }) ); additional_plugins.push(  livereload({   watch: 'dist'  }) );}</code></pre>
<p>We finish by adding these lines into the <strong>package.json:</strong></p><pre><code>"module": "dist/siriwave.m.js","jsnext:main": "dist/siriwave.m.js","unpkg": "dist/siriwave.js","amdName": "SiriWave","scripts": {   "build": "NODE_ENV=production rollup -c",   "dev": "rollup -c -w"},</code></pre>
<p>Let’s clarify some parameters:</p>
<ul>
<li><strong>module / jsnext:main: </strong>path of dist ESM module</li>
<li><strong>unpkg: </strong>path of dist UMD module</li>
<li><strong>amdName: </strong>name of the global object in UMD module</li>
</ul>
<p>Thanks a lot <strong>RollupJS!</strong></p>
<p>Hope that you find this article interesting, see you soon! ?</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
