---
card: "/images/default.jpg"
tags: [CSS]
description: "CSS is a technology that can be your best or worst friend. Wh"
author: "Milad E. Fahmy"
title: "What is Tailwind CSS and How Can I Add it to my Website or React App?"
created: "2021-08-16T10:05:04+02:00"
modified: "2021-08-16T10:05:04+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-tailwind tag-css-framework tag-css3 tag-postcss tag-frontend tag-front-end tag-front-end-development tag-html tag-web-development tag-web-design tag-developer-tools tag-tools tag-framework ">
<header class="post-full-header">
<h1 class="post-full-title">What is Tailwind CSS and How Can I Add it to my Website or React App?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/05/tailwind-1.jpg 300w,
/news/content/images/size/w600/2020/05/tailwind-1.jpg 600w,
/news/content/images/size/w1000/2020/05/tailwind-1.jpg 1000w,
/news/content/images/size/w2000/2020/05/tailwind-1.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/05/tailwind-1.jpg" alt="What is Tailwind CSS and How Can I Add it to my Website or React App?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
Bender, quit destroying the universe! Yeah, I do that with my stupidness. I never loved you. Moving along…
Belligerent and numerous.
&lt;/p&gt;
</code></pre><p>Here's what we're adding:</p><ul><li><code>list-disc</code>: set the list-style-stype to disc (the markers on each line item)</li><li><code>list-inside</code>: sets the position of the list markers using &nbsp;relative to the list items and the list itself with list-style-position to inside</li><li><code>my-5</code>: set the margin of the y axis to 5rem</li><li><code>pl-2</code>: set the left padding to 2rem</li></ul><p>Then we can apply the exact same classes to our ordered list (<code>&lt;ol&gt;</code>), except instead of <code>list-disc</code>, we want to change our style type to <code>list-decimal</code>, so that we can see numbers given it's an ordered list.</p><pre><code class="language-html">&lt;ol class="list-decimal list-inside my-5 pl-2"&gt;
Party with Slurm!
&lt;/button&gt;
# or
npm install tailwindcss postcss-cli autoprefixer
</code></pre><p><a href="https://tailwindcss.com/docs/installation#4-process-your-css-with-tailwind">Per Tailwind's documentation</a>, we need to be able to process our styles so that they can be properly added to our pipeline. So in the above, we're adding:</p><ul><li><a href="https://tailwindcss.com/">tailwindcss</a>: the core Tailwind package</li><li><a href="https://github.com/postcss/postcss">postcss-cli</a>: Create React App already uses postcss, but we need to configure Tailwind to be part of that build process and run it's own processing</li><li><a href="https://github.com/postcss/autoprefixer">autoprefixer</a>: Tailwind doesn't include vendor prefixes, so we want to add autoprefixer to handle this for us. This runs as part of our postcss configuration</li></ul><p>We're also going to add two dev dependencies that make it easier to work with our code:</p><pre><code>yarn add concurrently chokidar-cli -D
# or
npm install concurrently chokidar-cli --save-dev
</code></pre><ul><li><a href="https://github.com/kimmobrunfeldt/concurrently">concurrently</a>: a package that lets us set up the ability to run multiple commands at once. This is helpful since we'll need to watch both the styles and React app itself.</li><li><a href="https://github.com/kimmobrunfeldt/chokidar-cli">chokidar-cli</a>: let's us watch files and run a command when changed. We'll use this to watch our CSS file and run the build process of the CSS on cahnge</li></ul><p>Next, let's configure postcss, so create a new file in the root of your project called <code>postcss.config.js</code> and include the following:</p><pre><code class="language-js">// Inside postcss.config.js
module.exports = {
plugins: [
require('tailwindcss'),
require('autoprefixer')
],
};
</code></pre><p>This will add the Tailwindcss and Autoprefixer plugins to our postcss config.</p><p>With our configuration, we need to include it as part of the build and watch processes. Inside <code>package.json</code>, add the following to definitions to your <code>scripts</code> property:</p><pre><code class="language-json">"build:css": "tailwind build src/App.css -o src/index.css",
"watch:css": "chokidar 'src/App.css' -c 'npm run build:css'",
</code></pre><p>Additionally, modify the <code>start</code> and <code>build</code> scripts to now include those commands:</p><pre><code class="language-json">"start": "concurrently -n Tailwind,React 'npm run watch:css' 'react-scripts start'",
"build": "npm run build:css &amp;&amp; react-scripts build",
</code></pre><p>With our configuration ready to go, let's try our styles back to where they were when we left off from the static example.</p><p>Inside the <code>App.css</code> file, replace the entire content with:</p><pre><code class="language-css">@tailwind base;
@tailwind components;
@tailwind utilities;
</code></pre><p>This is going to import Tailwind's base styles, components, and utility classes that allow Tailwind to work as you would expect it to.</p><p>We can also remove the <code>App.css</code> import from our <code>App.js</code> file because it's now getting injected directly into our <code>index.css</code> file. So remove this line:</p><pre><code class="language-js">import './App.css';
@apply font-bold py-2 px-4 rounded;
}
</code></pre><p>If you remember from our HTML, we're already including those same classes to our <code>&lt;button&gt;</code> element. &nbsp;Tailwind let's us "apply" or include the styles that make up these utility classes to another class, in this case, the <code>.btn</code> class.</p><p>And now that we're creating that class, let's apply it to our button:</p><pre><code class="language-html">&lt;button className="btn text-white bg-purple-700 hover:bg-purple-800"&gt;
Party with Slurm!
&lt;/button&gt;
@apply bg-purple-700 text-white;
}
.btn-purple:hover {
@apply bg-purple-800;
}
</code></pre><p>Here, we're adding our background color and our text color to our button class. We're also applying a darker button color when someone hovers over the button.</p><p>We'll also want to update our HTML button to include our new class and remove the ones we just applied:</p><pre><code class="language-html">&lt;button className="btn btn-purple"&gt;
Party with Slurm!
&lt;/button&gt;
<p style="margin: 0;">
<a href="https://twitter.com/colbyfayock" style="display: block;">
</a>
</p>
<ul style="display:flex;justify-content:center;list-style:none;padding:0;margin: .5em 0 0;font-size: .8em;">
<li style="margin: 0 .6em;padding: 0;">
<a href="https://twitter.com/colbyfayock" style="text-decoration: none;">? Follow Me On Twitter</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://youtube.com/colbyfayock" style="text-decoration: none;">?️ Subscribe To My Youtube</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://www.colbyfayock.com/newsletter/" style="text-decoration: none;">✉️ Sign Up For My Newsletter</a>
</li>
</ul>
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
