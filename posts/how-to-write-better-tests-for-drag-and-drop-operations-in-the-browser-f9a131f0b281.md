---
card: "https://cdn-media-1.freecodecamp.org/images/1*0QbvXqleQASAZ0oaAfY66w.jpeg"
tags: [JavaScript]
description: "by Ronald Rey"
author: "Milad E. Fahmy"
title: "How to write better tests for drag-and-drop operations in the browser"
created: "2021-08-16T10:11:43+02:00"
modified: "2021-08-16T10:11:43+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-reactjs tag-front-end-development tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to write better tests for drag-and-drop operations in the browser</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*0QbvXqleQASAZ0oaAfY66w.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*0QbvXqleQASAZ0oaAfY66w.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*0QbvXqleQASAZ0oaAfY66w.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*0QbvXqleQASAZ0oaAfY66w.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*0QbvXqleQASAZ0oaAfY66w.jpeg" alt="How to write better tests for drag-and-drop operations in the browser">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
Array.from(mountNode.querySelectorAll("tr td:nth-of-type(1)"));
const createBubbledEvent = (type, props = {}) =&gt; {
const event = new Event(type, { bubbles: true });
Object.assign(event, props);
return event;
};
const tableCells = getTableCells();
const startingNode = tableCells[0];
const endingNode = tableCells[2];
startingNode.dispatchEvent(
createBubbledEvent("dragstart", { clientX: 0, clientY: 0 })
);
endingNode.dispatchEvent(
createBubbledEvent("drop", { clientX: 0, clientY: 1 })
);
expect(getTableCells().map(cell =&gt; cell.textContent)).toEqual([
"Bob",
"Clark",
"Alice",
</figure><h3 id="bonus-some-tips-on-how-to-figure-out-how-to-emulate-browser-behavior">Bonus: Some tips on how to figure out how to emulate browser behavior</h3><p>If there’s some other functionality that you want to test in this way, but you are not sure exactly how the browser behaves when making it happen, I suggest you look into <a href="https://developers.google.com/web/tools/chrome-devtools/console/events" rel="noopener">Google Chrome’s <code>monitorEvents</code> API</a>. It’s insanely helpful in these scenarios, specially when you are not sure what’s going on. I myself used it like this to explore the shape of the events fired when drag-and-dropping:</p><pre><code>monitorEvents(document.body, [
'mousedown',
'mousemove',
'dragstart',
'dragenter',
'dragover',
'drop',
'dragend',
'mouseup',
// …
])</code></pre><p>In general, it would be extremely beneficial if you just whip out a browser developer console, and start playing around with the event system until you feel confident you know how it works. Create elements, trigger events, move them around, attach them to the DOM, detach them, etc.… anything it takes! Investing one or a few hours with this will serve you for the rest of your career as a web developer. Pretty sweet deal in my eyes :)</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
