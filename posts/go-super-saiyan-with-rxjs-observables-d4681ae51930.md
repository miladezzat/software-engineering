---
card: "https://cdn-media-1.freecodecamp.org/images/0*qE2wxzg_yiFOIN-Q"
tags: [JavaScript]
description: I loved DragonBall Z as a kid, and still love it as an adult.
author: "Milad E. Fahmy"
title: "Go SUPER SAIYAN with RxJS Observables"
created: "2021-08-15T19:43:47+02:00"
modified: "2021-08-15T19:43:47+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-reactive-programming tag-rxjs tag-functional-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Go SUPER SAIYAN with RxJS Observables</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*qE2wxzg_yiFOIN-Q 300w,
https://cdn-media-1.freecodecamp.org/images/0*qE2wxzg_yiFOIN-Q 600w,
https://cdn-media-1.freecodecamp.org/images/0*qE2wxzg_yiFOIN-Q 1000w,
https://cdn-media-1.freecodecamp.org/images/0*qE2wxzg_yiFOIN-Q 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*qE2wxzg_yiFOIN-Q" alt="Go SUPER SAIYAN with RxJS Observables">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I loved DragonBall Z as a kid, and still love it as an adult.</p>
<p>Among the ludicrous number of transformations, the original Super Saiyan remains my favorite.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/0*qE2wxzg_yiFOIN-Q" alt=""></p>
<blockquote>
<p>Nothing quite like the original</p>
</blockquote>
<p>I’m also loving RxJS the more I level up with it, so why not combine these two for the ultimate showdown?</p>
<h3 id="letsgosupersaiyan">Let’s Go Super Saiyan</h3>
<p>With four sprite sheets and a bit of HTML, CSS, and RxJS, we can recreate this legendary transformation!</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*qgex4ns9jPE_tpCy_OTfWA.gif" alt=""></p>
<p>This is what we’ll be making. Exciting, right?! ?</p>
<h3 id="setup">Setup</h3>
<p>Everything’s on <a href="https://github.com/yazeedb/dbz-rxjs">my GitHub</a>.</p>
<pre><code>cd ./wherever-you-want
git clone [https://github.com/yazeedb/dbz-rxjs](https://github.com/yazeedb/dbz-rxjs)
cd dbz-rxjs
</code></pre>
<p>Open <code>index.html</code> in your favorite browser, and the project in your favorite text editor, and you’re ready to go!</p>
<p>No <code>npm install</code>s today ?</p>
<p>And going forward, I’ll use the acronym “SSJ” instead of “Super Saiyan” for brevity.</p>
<h3 id="firstdayoftraining">First Day of Training</h3>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*FpxB4WdbNMmldqZDnpVp1g.png" alt=""></p>
<p>You’ll notice that Goku’s already moving. Since we’re focusing on RxJS, we’ll just skim the project’s starting point.</p>
<p>Here’s the main HTML:</p>
<pre><code class="language-html">&lt;div id="root"&gt;
&lt;div id="meter-container"&gt;
&lt;span&gt;Hold any key to POWER UP!&lt;/span&gt;
&lt;div id="meter"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div id="sprite" class="base"&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre>
<p>The bottom <code>div</code> has <code>class="base"</code>, which corresponds to this CSS:</p>
<pre><code class="language-css">.base,
.ssj {
width: 120px;
height: 250px;
animation: stand 0.8s steps(2) infinite;
}
.base {
background-image: url('img/goku-standing-sheet.png');
}
</code></pre>
<p>This sets Goku’s width, height, and standing animation.</p>
<p>If you look at his base/ssj sprite sheets, it’s two different positions and we’re switching between them every 0.8 seconds.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*Cy1fArcSxNJwGDc98YMHEA.png" alt=""><img src="https://cdn-media-1.freecodecamp.org/images/1*mNVDs7NKfcfkA8l86IxOTA.png" alt=""></p>
<p>The switching’s handled towards the bottom of <code>style.css</code>:</p>
<pre><code class="language-css">@keyframes stand {
from {
background-position: 0px;
}
to {
background-position: -255px;
}
}
</code></pre>
<p>Same thing for power up:</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*sSTHMTvkazP0BaZPubo4kg.png" alt=""><img src="https://cdn-media-1.freecodecamp.org/images/1*xkI3tsGLGRpVoH2RjaFK9w.png" alt=""></p>
<pre><code class="language-css">@keyframes powerup {
from {
background-position: 0px;
}
to {
background-position: -513px;
}
}
</code></pre>
<p>We’ll cover the power up meter when we manipulate it.</p>
<h3 id="masteringthedomelements">Mastering the DOM Elements</h3>
<p><code>index.html</code> already includes <code>RxJS@6.2.1</code> via CDN, so you’re covered.</p>
<p>In <code>app.js</code>, let’s capture the DOM elements we’re interested in:</p>
<pre><code class="language-js">const sprite = document.querySelector('#sprite');
const meterContainer = document.querySelector('#meter-container');
const meter = document.querySelector('#meter');
</code></pre>
<p>I prefer to alias <code>document.querySelector</code> so using it doesn’t cause me wrist pain.</p>
<pre><code class="language-js">const $ = document.querySelector.bind(document);**
const sprite = $('#sprite');
const meterContainer = $('#meter-container');
const meter = $('#meter');
</code></pre>
<p>Next, we’ll create a <code>main</code> function and immediately call it.</p>
<pre><code class="language-js">// ...
const main = () =&gt; {
// do something
};
main();
</code></pre>
<h3 id="poweringup">Powering Up</h3>
<p>Here is <code>main</code>’s first code snippet:</p>
<pre><code class="language-js">const main = () =&gt; {
const { fromEvent } = rxjs;
const begin = fromEvent(document, 'keydown');
const end = fromEvent(document, 'keyup');
};
</code></pre>
<p>Goku should power up when a key is held down, and stop when that key is let go. We can use the <code>fromEvent</code> operator to create two observables:</p>
<ul>
<li><code>begin</code>: Notifies when the user presses a key <strong>down</strong>.</li>
<li><code>end</code>: Notifies whenever the user <strong>lets go</strong> of a key.</li>
</ul>
<p>Then we can <strong>subscribe</strong> to these emissions and act upon them. To get the power up animation, give <code>sprite</code> the <code>powerup</code> class name.</p>
<pre><code class="language-js">begin.subscribe(() =&gt; {
sprite.classList.add('powerup');
});
</code></pre>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*6-GLDooG9dTyGqNQ2XP0ww.png" alt=""></p>
<p>It works, but pressing a key causes him to power up forever…</p>
<p>We must also subscribe to the <code>end</code> observable, so we know when the key has been let go.</p>
<pre><code class="language-js">end.subscribe(() =&gt; {
sprite.classList.remove('powerup');
});
</code></pre>
<p>Now he powers up and down at your command.</p>
<h3 id="buildingascouter">Building a Scouter</h3>
<p>Any DBZ fan has seen a scouter, the little eyewear used to track power levels (until like episode 20…).</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/0*8H9CSUZbfDPxmdgR.png" alt=""></p>
<blockquote>
<p>Obligatory &gt; 9000 joke</p>
</blockquote>
<p>As Saiyans power up, their power level grows. Inconceivable, right?</p>
<p>We need a way to track Goku’s power level as he ascends, and trigger the SSJ transformation after say, 100 points.</p>
<p>We can start his power off at 1, and increase it while the user holds a key down.</p>
<h4 id="rxjsoperators">RxJS Operators</h4>
<p>Operators are where RxJS really shines. We can use pure functions to describe how data should transform through the stream.</p>
<p>When the user holds a key down, let’s transform those emissions into a number that increases over time.</p>
<h4 id="scan">Scan</h4>
<p>The <a href="https://www.learnrxjs.io/operators/transformation/scan.html">scan operator</a> is perfect for this. It’s like <code>Array.reduce</code>, but it emits <strong>as it’s reducing</strong>.</p>
<p>For example, if you have an array of numbers:</p>
<pre><code class="language-js">nums = [1, 2, 3, 4, 5];
</code></pre>
<p>And wish to add them up, <code>reduce</code> is a great choice.</p>
<pre><code class="language-js">nums.reduce((a, b) =&gt; a + b, 0);
// 15
</code></pre>
<p>What if you want to see each addition as it happens?</p>
<p>Enter <code>scan</code>. You can run this in our app’s console.</p>
<pre><code class="language-js">const { from } = rxjs;
const { scan } = rxjs.operators;
from([1, 2, 3, 4, 5])
.pipe(scan((a, b) =&gt; a + b, 0))
.subscribe(console.log);
// 1 (0 + 1)
// 3 (1 + 2)
// 6 (3 + 3)
// 10 (6 + 4)
// 15 (10 + 5)
</code></pre>
<p>See how the emissions increase over time? We can do that with Goku as he powers up!</p>
<pre><code class="language-js">const { fromEvent } = rxjs;
const { scan, tap } = rxjs.operators;
const begin = fromEvent(document, 'keydown');
const end = fromEvent(document, 'keyup');
begin
.pipe(
scan((level) =&gt; level + 1, 1),
tap((level) =&gt; {
console.log({ level });
})
)
.subscribe(() =&gt; {
sprite.classList.add('powerup');
});
</code></pre>
<p>We start his level at <code>1</code> and increase it by 1 every time the <code>keydown</code> event fires.</p>
<p>And the <a href="https://www.learnrxjs.io/operators/utility/do.html">tap operator</a> operator lets us quickly log the value without disturbing the pipeline.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*CviOotpl-fpRm5qrI7INhQ.png" alt=""></p>
<blockquote>
<p>My power infinitely approaches MAXIMUM!</p>
</blockquote>
<h3 id="goingsupersaiyan">Going Super Saiyan</h3>
<p>We’ve trained hard, it’s time to transform.</p>
<p>The <code>scan</code> operator tracks Goku’s power level. Now we need to go SSJ when it emits 100.</p>
<p>I built a map of <code>levels: transformations</code>. You can put it right above <code>main</code>.</p>
<pre><code class="language-js">const powerLevels = {
100: {
current: 'base',
next: 'ssj'
}
};
const main = () =&gt; {
// ...
};
</code></pre>
<p>It’s overkill, but should simplify adding future transformations.</p>
<p>When the power level reaches a number in that <code>powerLevels</code> map, we’ll remove its <code>current</code> class from <code>sprite</code> and add the <code>next</code> class.</p>
<p>This lets us smoothly go from one transformation to the next.</p>
<p>Here’s the code.</p>
<pre><code class="language-js">const { fromEvent } = rxjs;
const { filter, map, scan, tap } = rxjs.operators;
const begin = fromEvent(document, 'keydown');
const end = fromEvent(document, 'keyup');
begin
.pipe(
scan((level) =&gt; level + 1, 1),
tap((level) =&gt; {
console.log({ level });
sprite.classList.add('powerup');
}),
map((level) =&gt; powerLevels[level]),
filter((level) =&gt; level &amp;&amp; level.next)
)
.subscribe(({ current, next }) =&gt; {
sprite.classList.remove(current);
sprite.classList.add(next);
});
</code></pre>
<h4 id="mapandfilter">Map and Filter</h4>
<p>Adding the <code>powerup</code> class now happens inside of <code>tap</code>, because it should always happen. The SSJ transformation however, <strong>shouldn’t</strong> always happen.</p>
<p>Using <code>map</code>, the latest power level becomes an entry in the <code>powerLevels</code> map. We use <code>filter</code> to check if the entry exists <strong>and</strong> has a <code>.next</code> property.</p>
<p>If it does, that means Goku can go even further beyond! Our <code>.subscribe</code> will swap <code>current</code> and <code>next</code> as class names on <code>sprite</code>.</p>
<p>The end result?</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*q-ifHhrr8byMWPENjBpNyQ.gif" alt=""></p>
<h3 id="powermeter">Power Meter</h3>
<p>You’re having as much fun as I am, right? Unfortunately, our user won’t.</p>
<p>They can’t see how high Goku’s power level is! They won’t know how to open the DevTools console. We must remedy this!</p>
<p>Let’s improve our UX by filling the power meter. You can put this above <code>main</code>.</p>
<pre><code class="language-js">const fillMeter = (level) =&gt; {
const limit = 100;
if (level &gt;= limit) {
return;
}
const containerWidth = meterContainer.offsetWidth;
const newWidth = (level / limit) * containerWidth;
meter.style.width = `${newWidth}px`;
};
</code></pre>
<p>And call it inside <code>tap</code>.</p>
<pre><code class="language-js">tap((level) =&gt; {
console.log({ level });
sprite.classList.add('powerup');
fillMeter(level);
});
</code></pre>
<p>And here we go:</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*qvr0L_5cmXzMI4g8sYtoyg.gif" alt=""></p>
<h3 id="goingevenfurtherbeyond">Going Even Further Beyond</h3>
<p>Unlocking more transformations is just a matter of adding sprites, and updating our <code>powerLevels</code> map. If you’re interested, submit a PR on <a href="https://github.com/yazeedb/dbz-rxjs">the repo</a> and we’ll definitely talk.</p>
<p>Here’s the <a href="https://www.deviantart.com/bruguii/art/goku-fin-jus-268665173">original sprite sheet</a>. Enjoy!</p>
</div>
<hr>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
