---
card: "https://cdn-media-1.freecodecamp.org/images/1*jtOmHUt-CfaFwspj81N6kA.jpeg"
tags: [Redux]
description: by Andrey Goncharov
author: "Milad E. Fahmy"
title: "Yet another guide to reduce boilerplate in your Redux (NGRX) app"
created: "2021-08-15T19:38:50+02:00"
modified: "2021-08-15T19:38:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-redux tag-javascript tag-react tag-tech tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">Yet another guide to reduce boilerplate in your Redux (NGRX) app</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*jtOmHUt-CfaFwspj81N6kA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*jtOmHUt-CfaFwspj81N6kA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*jtOmHUt-CfaFwspj81N6kA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*jtOmHUt-CfaFwspj81N6kA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*jtOmHUt-CfaFwspj81N6kA.jpeg" alt="Yet another guide to reduce boilerplate in your Redux (NGRX) app">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Andrey Goncharov</p>
<h1 id="yet-another-guide-to-reduce-boilerplate-in-your-redux-ngrx-app"><strong>Yet another guide to reduce boilerplate in your Redux (NGRX) app</strong></h1>
<h3 id="what-are-we-gonna-cover-here"><strong>What are we gonna cover here?</strong></h3>
<p>In this article, we’re gonna discuss several ways/tips/tricks/ancient black magic rituals to reduce boilerplate in our overwhelmed-with-boilerplate Redux (and NGRX!) apps. I’ve come up with these over the years from first-hand production experience.</p>
<p>Let me be honest with you all. I wanted to speak just about my new micro-library <a href="https://github.com/keenondrums/flux-action-class" rel="noopener">flux-action-class</a> at first. But it seems like sometimes tech blogs look more and more like Twitter lately…and maybe you want some more meaningful long read. So I thought: “What the heck? I got some experience and best practices of my own which I spilled some sweat and blood over. Maybe, it could help some people out there. Maybe, people out there could help me to improve some of it.”</p>
<h3 id="identifying-boilerplate">Identifying boilerplate</h3>
<p>Let’s take a look at a typical example of how to make AJAX requests in Redux. In this particular case let’s imagine we wanna get a list of cats from the server.</p>
<p><em>If you’re wondering why I have selector factories (makeSelector…) take a look <a href="https://redux.js.org/recipes/computing-derived-data#computing-derived-data" rel="noopener">here</a></em></p>
<p>I’m leaving out side effect handling on purpose. It’s a topic for a whole different article full of teenager’s anger and criticism for the existing ecosystem :D</p>
<p>This code has several weak spots:</p>
<ul>
<li>Action creators are unique objects themselves but we still need action types for serialization purposes. Could we do better?</li>
<li>As we add entities we keep duplicating the same logic for flipping <code>loading</code> flag. Actual server data and the way we want to handle it may change, but logic for <code>loading</code> is always the same. Could we get rid of it?</li>
<li>Switch statement is O(n) (which is not a solid argument by itself because Redux is not very performant anyway). Redux requires a couple extra lines of code for each case and switches can not be easily combined. Could we figure out something more performant and readable?</li>
<li>Do we really need to keep an error for each entity separately?</li>
<li>Using selectors is a good idea. This way we have an abstraction over our store and can change its shape without breaking the whole app by just adjusting our selectors. Yet we have to create a factory for each selector due to how memoizaion works. Is there any other way?</li>
</ul>
<h3 id="tip-1-get-rid-of-action-types">Tip 1: Get rid of action types</h3>
<p>Well, not really. But we can make JS generate them for us!</p>
<p>Let’s take a minute here to think why we even need action types. Of course, to help the reducer somehow differentiate between incoming actions and change our state accordingly. But does it really have to be a string? If only we had a way to create objects (actions) of certain types… Classes to the rescue! We most definitely could use classes as action creators and do <code>switch</code> by type. Like this:</p>
<p>All good, but here’s a thing… We can no longer serialize and deserialize our actions. They are no longer simple objects with a prototype of Object. All have unique prototypes which actually makes switching over <code>action.constructor</code> work. Dang, I liked the idea of serializing my actions to a string and attaching it to bug reports. So could we do even better?</p>
<p>Actually, yes! Luckily each class has a name, which is a string, and we could utilize them. So for the purposes of serialization, each action needs to be a simple object with field <code>type</code> (please, take a look <a href="https://github.com/redux-utilities/flux-standard-action" rel="noopener">here</a> to learn what else any self-respecting action should have). We could add getter <code>type</code> to each one of our classes which would use class's name.</p>
<p>It would work, but this way we can not prefix our action types as <a href="https://github.com/erikras/ducks-modular-redux" rel="noopener">this</a> great proposal suggests (actually, I like its <a href="https://github.com/alexnm/re-ducks" rel="noopener">successor</a> even more). To work around prefixing we should stop using class’ name directly and create another getter for it. This time a static one.</p>
<p>Let’s polish it a little to avoid code duplication and add one more assumption to reduce boilerplate even further. If action is an error action <code>payload</code> must be an instance of <code>Error</code>.</p>
<p>At this point, it works perfectly with NGRX. Redux is complaining about dispatching non-plain objects (it validates the prototype chain). Fortunately, JS allows us to return an arbitrary value from the constructor and we do not really need our actions to have a prototype.</p>
<p>Not to make you guys copy-paste <code>ActionStandard</code> class and worry about its reliability, I created a <a href="https://github.com/keenondrums/flux-action-class" rel="noopener">small library called flux-action-class</a>, which already has all that code covered with tests with 100% code coverage, written in TypeScript for TypeScript and JavaScript projects.</p>
<h3 id="tip-2-combine-your-reducers">Tip 2: Combine your reducers</h3>
<p>The idea is simple: use <a href="https://redux.js.org/api/combinereducers" rel="noopener">combineReducers</a> not only for top level reducers, but for combining reducers for <code>loading</code> and other stuff. Let the code speak for itself:</p>
<h3 id="tip-3-switch-away-from-switch">Tip 3: Switch away from switch</h3>
<p>Use objects and pick from them by key instead! Picking a property of an object by key is O(1) and it looks much cleaner if you ask me. Like this:</p>
<p>I suggest we refactor <code>reducerLoading</code> a little bit. With the introduction of reducer maps, it makes sense to return a reducer map from <code>reducerLoading</code>. We could extend it if needed (unlike switches).</p>
<p><a href="https://redux.js.org/recipes/reducing-boilerplate#generating-reducers" rel="noopener">Redux’s official documentation mentions this</a>, but for some reason, I saw lots of people still using switch-cases. There’s already a <a href="https://github.com/kolodny/redux-create-reducer" rel="noopener">library</a> for <code>createReducer</code>. Do not hesitate to use it.</p>
<h3 id="tip-4-have-a-global-error-handler">Tip 4: Have a global error handler</h3>
<p>It’s not necessary to keep an error for each entity. In most cases, we need to display an error dialog or something. The same error dialog for all them!</p>
<p>Create a global error handler. In the most simple case it could look like this:</p>
<p>Then in your side-effect’s <code>catch</code> block dispatch <code>ErrorInit</code>. It could look like this with <a href="https://github.com/reduxjs/redux-thunk" rel="noopener">redux-thunk</a>:</p>
<p>Then you could stop providing a reducer for <code>error</code> part of cats' state and <code>CatsGetError</code> just to flip <code>loading</code> flag.</p>
<h3 id="tip-5-stop-memoizing-everything">Tip 5: Stop memoizing everything</h3>
<p>Let’s take a look at a mess we have with selectors one more time.<br> <em>I omitted <code>makeSelectorCatsError</code> because of what we discovered in the previous section.</em></p>
<p>Why would we create memoized selectors for everything? What’s there to memoize? Picking an object’s field by key (which is exactly what’s happening here) is O(1). Just write a regular non-memoized function. Use memoization only when you want to change the shape of the data in your store in a way that requires non-constant time before returning it to your component.</p>
<p>Memoization could make sense only if computed some derived data. For this example let’s imagine that each cat is an object with field <code>name</code> and we need a string containing names of all cats.</p>
<h3 id="conclusion">Conclusion</h3>
<p>Let’s take a look at what we started with:</p>
<p>And what the result is:</p>
<p>Hopefully, you found something useful for your project. Feel free to communicate your feedback to me! I most certainly appreciate any criticism and questions.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
