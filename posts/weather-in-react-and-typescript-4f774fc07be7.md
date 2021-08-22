---
card: "https://cdn-media-1.freecodecamp.org/images/1*c_otGxMhQQYeAODaylsf5A.png"
tags: [JavaScript]
description: by Kelvin Mai
author: "Milad E. Fahmy"
title: "How I built the weather app in freeCodeCamp using React and Typescript"
created: "2021-08-15T19:47:13+02:00"
modified: "2021-08-15T19:47:13+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-software-development tag-react tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How I built the weather app in freeCodeCamp using React and Typescript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*c_otGxMhQQYeAODaylsf5A.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*c_otGxMhQQYeAODaylsf5A.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*c_otGxMhQQYeAODaylsf5A.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*c_otGxMhQQYeAODaylsf5A.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*c_otGxMhQQYeAODaylsf5A.png" alt="How I built the weather app in freeCodeCamp using React and Typescript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Kelvin Mai</p>
<h1 id="how-i-built-the-weather-app-in-freecodecamp-using-react-and-typescript">How I built the weather app in freeCodeCamp using React and Typescript</h1>
<figcaption>React and Typescript</figcaption>
</figure>
<p>So I finally decided to come back to <a href="https://www.freecodecamp.org" rel="noopener">freeCodeCamp</a> and try to finish out my Front End Development Certificate. I had already finished all the algorithms and tutorials earlier last year, and the only thing missing was the projects.</p>
<p>But now that I have more experience as a Full Stack Developer, most of the projects are a bit easy for my current level. So I had two choices. I could either go back to the basics and finish them all in a day, or I could kill two birds with one stone: have some fun and experiment with technology while working on these projects. I opted for the latter.</p>
<figcaption>So Close…</figcaption>
</figure>
<p>But let’s make that three birds — because I have been wanting to write a tutorial/guide thing for a while. Today, what we’re going to tackle is the <a href="https://www.freecodecamp.org/challenges/show-the-local-weather" rel="noopener">Show The Local Weather</a> project. But this time, it’s going to combine React and Typescript! You can take a look at the finished code in this <a href="https://github.com/kelvin-mai/tsx-weather" rel="noopener">GitHub repo</a>, as well as a live demo <a href="https://kelvin-mai.github.io/tsx-weather/" rel="noopener">here</a>.</p>
<h3 id="background"><strong>Background</strong></h3>
<p>So first thing’s first: why would I want to do this? Well here’s the thing: I have been jumping back and forth with Angular 5 and React for a while now. And I like React more as a framework. It’s small and concise, but has all the features you need to create a fully functional Single Page Application. As for Angular, it is far too large for me to enjoy for an app as small as this…but it uses Typescript!</p>
<p>TypeScript is a super set of JavaScript that adds a lot of features that are just missing from JavaScript, even with the enhancements from ES6/7. It’s mostly known for it’s static typing. So I wondered if I could get the best of both worlds. The answer was a resounding YES!… Redux not included. (I mean you <em>can</em> include Redux, but so far it’s been a pain to set up, so I won’t be doing it for this guide.)</p>
<figcaption>The User Stories</figcaption>
</figure>
<p>For this project, we’re going to focus on the bare minimum of the User Stories, because my focus is the technology rather than any extra features. As such, the API we’ll be using for this app is going to be <a href="https://www.wunderground.com/weather/api/" rel="noopener">Wunderround</a>. It’s perfect for what we’re building, because they offer temperatures in both Fahrenheit and Celsius and also provide icons for the different weather conditions. This means less programmatic work on our end.</p>
<h3 id="step-0-set-up">Step 0: Set Up</h3>
<p>I’ll be using <code>create-react-app</code> for this project, with the custom React script for Typescript, so that we can keep the zero configuration and ease of use. A good article on setting up a React app with TypeScript was written by <a href="https://levelup.gitconnected.com/@treyhuffine" rel="noopener">Trey Huffine</a> and can be found <a href="https://levelup.gitconnected.com/typescript-and-react-using-create-react-app-a-step-by-step-guide-to-setting-up-your-first-app-6deda70843a4" rel="noopener">here</a>.</p>
<p>I definitely suggest looking at that post for some more in depth set up. But without further ado, we are going to run the following line in the terminal.</p><pre><code>create-react-app weather --scripts-version=react-scripts-tsnpm install --save core-decorators</code></pre>
<p>I’ll get to the decorators a little later. Just know that it’s a neat little feature that I was really excited to try out. But to be able to use it, we’ll have to edit our <code>tsconfig.json</code> file to include experimental decorators. To do this, just add the bold line of code.</p><pre><code>{   "compilerOptions": {// ...code hidden...    "noUnusedLocals": true,    "experimentalDecorators": true   } // ...more code hidden...}</code></pre>
<p>And since I have <a href="https://github.com/prettier/prettier-vscode" rel="noopener">Prettier</a> installed on my development environment, I had to change my <code>tslint.json</code> file because the lint conflicted with the formatter. If you have a similar development set up, I suggest just deleting all the tslint rules so that you don’t have to get bogged down on configuration. The file should look like this after you’re done.</p>
<p>The folder structure that I will be using will look like the following. You can create, delete, and move files accordingly.</p><pre><code>weather-app/├─ .gitignore├─ node_modules/├─ public/├─ src/   └─ assets/     | - - loader.svg     | - - logo.svg   └─ components/     | - - Weather.tsx     | - - WeatherDisplay.tsx  └─ styles/     | - - App.css     | - - WeatherDisplay.css  | — — index.tsx   | — — registerServiceWorker.ts  | — — App.tsx  | — — index.css   | - - config.ts   | - - types.ts├─ package.json├─ tsconfig.json├─ tsconfig.test.json└─ tslint.json</code></pre>
<p>Okay, the worst is over! We have finally set up our app. Let’s dive into the code.</p>
<h3 id="step-1-styling">Step 1: Styling</h3>
<p>I want to get the styling out of the way first. I’m not much of a designer, so all I really did was re-skin the <code>create-react-app</code> default styles to have the freeCodeCamp green theme. Additionally I made the button more button-like and of course, more green. You are free to go wild with this if you happen to be a CSS master. You can also download image files <a href="https://github.com/kelvin-mai/tsx-weather/tree/master/src/assets" rel="noopener">here</a> and place them in your <code>assets/</code> folder.</p>
<h3 id="step-2-okay-i-lied-more-set-up">Step 2: Okay, I lied… More Set Up</h3>
<p>But don’t worry, it’s actual code this time. First let’s start with the easy part: adding your API and API keys. Nothing new here — it looks exactly like normal JavaScript so far.</p>
<p>Now for the TypeScript specific thing, we have to specify types. Well, we don’t have to, but we definitely should. The reason behind static typing is that it gives us security. Unlike normal JavaScript, our code won’t run if things are of the wrong type. Essentially this means that the compiler just flat out won’t let us write bad code.</p>
<p>As you can see, it’s not too scary. Just add the type after a colon. The primitive types (string, number, boolean) are supported out of the gate. With objects, it is a good idea to create a new type specific to that particular object as seen in <code>WeatherData</code> with <code>DisplayLocation</code> .</p>
<h3 id="step-3-react-the-fun-part">Step 3: React — The Fun Part</h3>
<p>I’m going to skip over the <code><a href="https://github.com/kelvin-mai/tsx-weather/blob/master/src/index.tsx" rel="noopener">index.tsx</a></code> and <code><a href="https://github.com/kelvin-mai/tsx-weather/blob/master/src/components/App.tsx" rel="noopener">App.tsx</a></code> files because there’s really nothing really new there. Just know that the imports are different because of how strict TypeScript is about modules. Instead, we’re going to go over the presentational component first.</p>
<p>I still prefer to destructure <code>Component</code> and <code>Fragment</code> from React, instead of calling <code>React.Component</code> , as it reduces redundancy. And for Fragments, if you’ve never played with them before, it’s basically a div that doesn’t show up in the HTML markup.</p>
<p>You will also notice that I have added interfaces at the top. An interface specifies what our props and state should look like. And if you haven’t noticed, TypeScript’s gimmick is adding types to everything, so that is what’s happening above within the angle brackets <code>&lt;Props, Sta</code>te&gt;. If you are familiar with prop types, it does the same thing, but I feel like this is much cleaner.</p>
<p>The next thing is the weird <code>@</code> symbol. Well, that’s a decorator! I originally wanted to hook up Redux and connect so that I can show a much more complicated version, but the <code>autobind</code> will do for now.</p>
<p>A decorator is basically a function that wraps around the class and applies necessary attributes. It also allows us to use <code>export default</code> at the top, which is just a personal preference of mine.</p><pre><code>@decorateexport default Class {}</code></pre><pre><code>// is the same as</code></pre><pre><code>export default decorate(Class)</code></pre>
<p>In this case autobind will, as the name entails, automatically bind <code>this</code> to everything so we don’t have to worry about binding issues. And coming from a more Object Oriented language, these class methods will look a lot cleaner than the JavaScript work-around with the arrow functions.</p><pre><code>classMethod = () =&gt; {   console.log('when you use arrows, you don't have to worry about   the keyword "this"');}</code></pre><pre><code>classMethod () {   console.log('because of javascript, you have to   worry about the keyword "this" here');}</code></pre>
<p>And now finally we move to the bulk of our logic, which is going to be living in the <code>Weather.tsx</code> component.</p>
<p>The first thing you’ll notice is the <code>?</code> in the interface. I mentioned that we definitely should define types for our props, but what happens when you know for certain it won’t be defined until after the API call? Well we can define optional types with a question mark.</p>
<p>What is happening in the background is that the variable <code>weatherData</code> is only allowed to be a <code>WeatherData</code> type or undefined. Also, remember that our <code>WeatherData</code> type is only a subsection of what wunderground offers. Earlier I mentioned that we are only going to take the data that we needed from the API — well, that’s what that huge destructuring on line 55 is doing.</p>
<p>Did I mention you can specify expected return types of functions? That’s what is happening here with <code>getCurrentPosition</code> , because I wanted to make sure that it returns a promise.</p>
<p>The reasoning here is that I didn’t want to call <code>getCurrentWeather</code> until after we had the correct geolocation, which means we’re dealing with asynchronous events. Async always means Promises, so that’s what’s going to happen.</p>
<p>A word of warning: the native geolocation API does take a long time to get a result without passing in any options. I opted to not add options to it as it was giving me errors at the time.</p>
<p>And I believe that is all the new things happening in this app because of TypeScript. Everything else should be familiar if you know React. But hopefully you can see the benefits of this superset, as it adds both security to our code as well as some nice super powers.</p>
<h3 id="step-4-complete-">Step 4: Complete!</h3>
<figcaption>The Finished Product</figcaption>
</figure>
<p>You did it! You finished an app that shows the weather at your current position. And in doing so, you’ve covered a good chunk of TypeScript as well as incorporating it into React.</p>
<p>Of course, there can definitely be improvements on this, like an option to search and show other locations. And the UI can definitely be worked on. But if you haven’t already finished the weather app on freeCodeCamp, you have already gone above and beyond on this assignment.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
