---
card: "https://cdn-media-1.freecodecamp.org/images/1*wOeV-wURvl_DeuBPreGGcg.jpeg"
tags: [JavaScript]
description: by IObert
author: "Milad E. Fahmy"
title: "This is why your read-eval-print-loop is so amazing"
created: "2021-08-15T19:38:16+02:00"
modified: "2021-08-15T19:38:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-programming tag-productivity tag-psychology ">
<header class="post-full-header">
<h1 class="post-full-title">This is why your read-eval-print-loop is so amazing</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*wOeV-wURvl_DeuBPreGGcg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*wOeV-wURvl_DeuBPreGGcg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*wOeV-wURvl_DeuBPreGGcg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*wOeV-wURvl_DeuBPreGGcg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*wOeV-wURvl_DeuBPreGGcg.jpeg" alt="This is why your read-eval-print-loop is so amazing">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by IObert</p>
<h1 id="this-is-why-your-read-eval-print-loop-is-so-amazing">This is why your read-eval-print-loop is so amazing</h1>
<p>One of the things that makes the tech community so special is that we are always looking for ways to work more efficiently. Everyone has their favorite set of tools which makes them run better. As a professional UI dev, the Chrome DevTools and the Node.js read-eval-print-loop (REPL) became my favorite tools early on. I noticed that they enabled me to work more efficiently and allowed me to learn new things more quickly.</p>
<figcaption>The three phases of the REPL process</figcaption>
</figure>
<p>This actually made me curious to investigate why this tool is so useful. I could easily find plenty of blog posts which explained <strong>what</strong> REPLs are and <strong>how</strong> to use them, for example <a href="https://clojure.org/guides/repl/introduction" rel="noopener">here</a> or <a href="http://blogish.nomistech.com/repl-based-development/" rel="noopener">here</a>. But this post here is dedicated to the <strong>why</strong> (as in why are REPLs such a great tool for developers).</p>
<blockquote>“The number one reason that schools move away from Java as a teaching language is the high bars to Hello-world programs.”</blockquote>
<blockquote>— Stuart Halloway</blockquote>
<h3 id="what-is-a-repl">What is a REPL?</h3>
<p>REPL stands for <em>read-evaluate-print-loop</em> and this is basically all there is to it.</p>
<p>Your application runtime is in a specific state and the REPL helps you to interact with it. The REPL will <em>read</em> and <em>evaluate</em> the commands and <em>print</em> the result and then go back to the start to read your next input. The <em>evaluate</em> step might change your runtime. This process can be seen as an interview with your application to query its current state.</p>
<p>In other words, the REPL makes your <strong>runtime more tangible</strong> and allows you to <strong>test hypotheses</strong> about it.</p>
<p><a href="https://vimeo.com/223309989" rel="noopener">According to Stuart Halloway,</a> the absence of a REPL in Java is the most significant reason why schools started to move to other languages to teach programming. Some people even use the REPL to <a href="https://danlebrero.com/2018/11/26/repl-driven-development-immediate-feedback-for-you-backend/" rel="noopener">write better unit tests</a>.</p>
<h3 id="do-i-already-use-a-repl-like-tool-today">Do I already use a REPL (-like tool) today?</h3>
<p>This basic explanation might have reminded you of some tools which you use every day. If you know and use one of the following tools, the answer is “yes”:</p>
<ul>
<li>The dev tools of your browser (like <a href="https://developers.google.com/web/tools/chrome-devtools/" rel="noopener">Chrome DevTools</a>)</li>
<li>Your terminal/shell</li>
<li>Jupyter Notebooks</li>
<li>The REPL process in Clojure</li>
<li>Repl.it, jsfiddle.net, or jsbin.com</li>
<li>Online regex validators</li>
</ul>
<h3 id="why-is-the-repl-so-helpful">Why is the REPL so helpful?</h3>
<p>This question kept me up at night because I didn’t understand what makes us inefficient in the first place. I started to research some common psychological effects and tried to link them to my daily interactions with the REPL. Here are my top three hypotheses:</p>
<h4 id="being-in-the-flow">Being in the flow</h4>
<blockquote>Flow is the mental state of operation in which a person performing an activity is fully immersed in a feeling of energized focus, full involvement, and enjoyment in the process of the activity. (<a href="https://en.wikipedia.org/wiki/Flow_(psychology)" rel="noopener">source</a>)</blockquote>
<p>I think all of us are familiar with this state, it makes us extremely productive and <a href="https://www.verywellmind.com/what-is-flow-2794768" rel="noopener">time flies</a> basically. Unfortunately, it’s fairly easy to “lose” the flow, for example when you get interrupted or when you have to wait for some period. I learned this can happen very fast: <a href="https://psychology.stackexchange.com/questions/1664/what-is-the-threshold-where-actions-are-perceived-as-instant" rel="noopener">Researchers found out</a> that one second is about the limit for the user’s flow of thought to stay uninterrupted.</p>
<p>The REPL doesn’t need to compile or deploy your code. This leads to a very short response time (&lt;100ms). Thus, you are able to test your hypotheses without losing the flow.</p>
<figcaption>This is what we want to avoid (source: <a href="https://xkcd.com/303/" rel="noopener" target="_blank" title="">XKCD</a>)</figcaption>
</figure>
<h4 id="positive-reinforcement">Positive Reinforcement</h4>
<blockquote>Positive reinforcement involves the addition of a reinforcing stimulus following a behavior that makes it more likely that the behavior will occur again. (<a href="https://www.verywellmind.com/what-is-positive-reinforcement-2795412" rel="noopener">source</a>)</blockquote>
<p>This is the effect that appeals the most to me. Your brain learns to favor certain actions when they were rewarded in the past. This reward could be a bonus from your boss after an outstanding month or a simple “Great job!” from your skiing instructor.</p>
<p>Every time your REPL experiment succeeds and you solved a puzzle/problem, your brain feels rewarded as well! This also takes place when you code in a common IDE. But the REPL responds way faster and allows you to iterate more often. So, more experiments lead to more reinforcement. This effect makes you use the REPL more often and keeps your eye on the ball (instead of distracting yourself by checking for emails).</p>
<h4 id="digital-amnesia">Digital Amnesia</h4>
<blockquote>The tendency to forget information that can be found readily online by using Internet search engines. (<a href="https://en.wikipedia.org/wiki/Google_effect" rel="noopener">source</a>)</blockquote>
<p>I have to admit, I often mix Java, Python and JavaScript syntax, because that information can be found all over the internet. I would ask myself “Do I need to use <em>add()</em>, <em>append() </em>or <em>push()</em> to add a new element to an array in JavaScript?”. Thus for me, an example of this effect is recalling method names of API and language references.</p>
<p>In the REPL, I can see the available functions immediately with autocomplete:</p>
<figcaption>The code-completion feature of the Node.js REPL</figcaption>
</figure>
<p>The great thing is, this works beyond the standard objects of programming languages. This works <strong>for all frameworks and modules</strong>, which makes the REPL more mighty than your IDE! There’s no need to compare the version numbers of modules and API references anymore:</p>
<blockquote>“Truth can only be found in one place: the code.”</blockquote>
<blockquote>– Robert C. Martin, Clean Code</blockquote>
<figcaption>source: <a href="http://blog.arungupta.me/jdk9-repl-getting-started/" rel="noopener" target="_blank" title="">arungupta.me</a></figcaption>
</figure>
<p>I hope this article helped you to understand how your brain works and how the REPL can help you to be more productive.</p>
<p>I’m curious to see if you agree with my hypotheses or if you know more tools to be a more efficient developer.</p>
<p>Update 2/13/2019:</p>
<p>I’ve also written <a href="https://blogs.sap.com/2019/02/04/cloudfoundryfun-upgrade-cloud-foundry-with-a-new-repl-feature/" rel="noopener">a blog post</a> about the usage of REPLs in Cloud Foundry Environments.</p>
<p>Check out <a href="https://www.twitch.tv/videos/379997882" rel="noopener">this video</a> by <a href="https://people.sap.com/dj.adams.sap" rel="noopener">DJ Adams</a> if you’d like to see the REPL in action :)</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
