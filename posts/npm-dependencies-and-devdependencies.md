---
card: "/images/default.jpg"
tags: [Node]
author: "Milad E. Fahmy"
title: "npm dependencies and devDependencies"
created: "2021-08-20T13:40:39+02:00"
modified: "2021-08-20T13:40:39+02:00"
---
<div id="___gatsby"><div style="outline:none" tabindex="-1" id="gatsby-focus-wrapper"><div class="layout-container"><main class="grid-container"><article class="article-reader"><h1 class="article-reader__headline">npm dependencies and devDependencies</h1><div><p>When you install an npm package using <code class="language-text">npm install &lt;package-name&gt;</code>, you are installing it as a <strong>dependency</strong>.</p><p>The package is automatically listed in the package.json file, under the <code class="language-text">dependencies</code> list (as of npm 5: before you had to manually specify <code class="language-text">--save</code>).</p><p>When you add the <code class="language-text">-D</code> flag, or <code class="language-text">--save-dev</code>, you are installing it as a development dependency, which adds it to the <code class="language-text">devDependencies</code> list.</p><p>Development dependencies are intended as development-only packages, that are unneeded in production. For example testing packages, webpack or Babel.</p><p>When you go in production, if you type <code class="language-text">npm install</code> and the folder contains a <code class="language-text">package.json</code> file, they are installed, as npm assumes this is a development deploy.</p><p>You need to set the <code class="language-text">--production</code> flag (<code class="language-text">npm install --production</code>) to avoid installing those development dependencies.</p></div></article></main></div></div><div id="gatsby-announcer" style="position:absolute;top:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0" aria-live="assertive" aria-atomic="true"></div></div>