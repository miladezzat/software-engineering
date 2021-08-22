---
card: "/images/default.jpg"
tags: [React]
description: Hooks are a handy addition to the React API that allow us to
author: "Milad E. Fahmy"
title: "How to Create a Custom React Hook and Publish it to npm"
created: "2021-08-15T19:30:08+02:00"
modified: "2021-08-15T19:30:08+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-reactjs tag-hooks tag-react-hooks tag-frontend tag-front-end tag-front-end-development tag-npm tag-npm-scripts tag-yarn ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create a Custom React Hook and Publish it to npm</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/04/custom-hook.jpg 300w,
/news/content/images/size/w600/2020/04/custom-hook.jpg 600w,
/news/content/images/size/w1000/2020/04/custom-hook.jpg 1000w,
/news/content/images/size/w2000/2020/04/custom-hook.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/04/custom-hook.jpg" alt="How to Create a Custom React Hook and Publish it to npm">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Hooks are a handy addition to the React API that allow us to organize some of our logic and state in function components. How can we build a custom hook and share it with the rest of the world?</p>
<ul>
<li><a href="#what-are-hooks">What are hooks?</a></li>
<li><a href="#why-are-custom-hooks-cool">Why are custom hooks cool?</a></li>
<li><a href="#what-are-we-going-to-make">What are we going to make?</a></li>
<li><a href="#step-0-naming-your-hook">Step 0: Naming your hook</a></li>
<li><a href="#step-1-setting-up-your-project">Step 1: Setting up your project</a></li>
<li><a href="#step-2-writing-your-new-react-hook">Step 2: Writing your new React Hook</a></li>
<li><a href="#step-3-using-your-react-hook-in-an-example">Step 3: Using your React hook in an example</a></li>
<li><a href="#step-4-compiling-your-react-hook-and-example">Step 4: Compiling your React hook and Example</a></li>
<li><a href="#step-5-publishing-your-react-hook-to-npm">Step 5: Publishing your React hook to npm</a></li>
<li><a href="#more-resources-about-hooks">More resources about hooks</a></li>
</ul>
<h2 id="what-are-hooks">What are hooks?</h2>
<p>React <a href="https://reactjs.org/docs/hooks-intro.html">hooks</a> in simple terms are functions. When you include them in your component or within another hook, they allow you to make use of React internals and parts of the React lifecycle with native hooks like <code>useState</code> and <code>useEffect</code>.</p>
<p>I don’t plan on doing a deep dive about hooks, but you can <a href="/news/how-to-destructure-the-fundamentals-of-react-hooks-d13ff6ea6871/">check out a quick introduction</a> with an example of <code>useState</code> as well as <a href="https://reactjs.org/docs/hooks-intro.html">the intro from the React team</a>.</p>
<h2 id="why-are-custom-hooks-cool">Why are custom hooks cool?</h2>
<p>The great thing about creating custom hooks is they allow you to abstract logic for your components making it easier to reuse across multiple components in your app.</p>
<figcaption>Hook diagram example for useCounter</figcaption>
</figure>
<p>For instance, if you wanted to create a simple counter where you use React’s state to manage the current count. Instead of having the same <code>useState</code> hook in each component file, you can create that logic once in a <code>useCounter</code> hook, making it easier to maintain, extend, and squash bugs if they come up.</p>
<h2 id="what-are-we-going-to-make">What are we going to make?</h2>
<p>For the purposes of this article, we’re going to keep it simple with a basic hook. Typically, you might use a hook because rather than a typical function, you use other native hooks that are required to be used within React function components. We’re going to stick with some basic input and output to keep things simple.</p>
<p>We’re going to recreate this custom <a href="https://github.com/colbyfayock/use-placecage">Placecage hook</a> I made, that allows you to easily generate image URLs that you can use as placeholder images.</p>
<figcaption>Nic Cage excited</figcaption>
</figure>
<p>If you’re not familiar, <a href="https://www.placecage.com/">Placecage</a> is an API that allows you to generate pictures of Nic Cage as placeholder images for your website. Silly? Yes. Fun? Absolutely!</p>
<p>But if you’re not a fan of Nic's work, you can just as easily swap in the URL for <a href="https://placeholder.com/">Fill Murray</a> which uses pictures of Bill Murray or <a href="https://placeholder.com/">placeholder.com</a> which generates simple solid color background with text that shows the size of the image.</p>
<h2 id="step-0-naming-your-hook">Step 0: Naming your hook</h2>
<p>Before we jump in to our actual code, our ultimate goal is to publish this hook. If that’s not your goal, you can skip this step, but for publishing, we’ll want to create a name for our hook.</p>
<p>In our case, our hook name will be <code>usePlaceCage</code>. Now with that in mind, we have 2 formats of our name — one in camelCase format and one in snake-case format.</p>
<ul>
<li><strong>camelCase:</strong> usePlaceCage</li>
<li><strong>snake-case:</strong> use-placecage</li>
</ul>
<p>The camelCase format will be used for the actual hook function, where the snake-case name will be used for the package name and some of the folders. When creating the name, keep in mind that the package name must be unique. If a package with the same name exists on <a href="https://www.npmjs.com/">npmjs.com</a> already, you won't be able to use it.</p>
<p>If you don’t already have a name, it's okay! You can just use your own name or something you can think of, it doesn’t really matter too much as really we're just trying to learn how to do this. If it were me for instance, I would use:</p>
<ul>
<li><strong>camelCase:</strong> useColbysCoolHook</li>
<li><strong>snake-case:</strong> use-colbyscoolhook</li>
</ul>
<p>But just to clarify, for the rest of our example, we’re going to stick with <code>usePlaceCage</code> and <code>use-placecage</code>.</p>
<h2 id="step-1-setting-up-your-project">Step 1: Setting up your project</h2>
<p>Though you can set up your project however you’d like, we’re going to walk through building a new hook from <a href="https://github.com/colbyfayock/use-custom-hook">this template</a> I created.</p>
<p>The hope here, is that we can take out some of the painful bits of the process and immediately get productive with our custom hook. Don’t worry though, I’ll explain what’s going on along the way.</p>
<p>The requirements here are <a href="https://git-scm.com/">git</a> and <a href="https://yarnpkg.com/">yarn</a> as it helps provide tools that make it easy to scaffold this template, such as using the workspaces feature to allow easy npm scripts to manage the code from the root of the project. If either of those are a dealbreaker, you can try downloading the repo via the download link and update it as needed.</p>
<h3 id="cloning-the-hook-template-from-git">Cloning the hook template from git</h3>
<p>To start, let’s clone the repository from Github. In the command below, you should replace <code>use-my-custom-hook</code> with the name of your hook, such as <code>use-cookies</code> or <code>use-mooncake</code>.</p><pre><code class="language-shell">git clone https://github.com/colbyfayock/use-custom-hook use-my-custom-hook
cd use-my-custom-hook
</code></pre>
<p>Once you clone and navigate to that folder, you should now see 2 directories – an <code>example</code> directory and a <code>use-custom-hook</code> directory.</p>
<figcaption>Cloning use-custom-hook</figcaption>
</figure>
<p>This will give you a few things to get started:</p>
<ul>
<li>A hook directory that will include the source for our hook</li>
<li>Build scripts that compile our hook with <a href="https://babeljs.io/">babel</a></li>
<li>An example page that imports our hook and creates a simple demo page with <a href="https://nextjs.org/">next.js</a></li>
</ul>
<h3 id="running-the-hook-setup-scripts">Running the hook setup scripts</h3>
<p>After we successfully clone the repo, we want to run the setup scripts which install dependencies and update the hook to the name we want.</p><pre><code class="language-shell">yarn install &amp;&amp; yarn setup
</code></pre>
<figcaption>Setting up a new hook from the use-custom-hook template</figcaption>
</figure>
<p>When the setup script runs, it will do a few things:</p>
<ul>
<li>It will ask you for your name – this is used to update the LICENSE and the package's author name</li>
<li>It will ask you for your hook's name in 2 variations – camelCase and snake-case - this will be used to update the name of the hook throughout the template and move files with that name to the correct location</li>
<li>It will reset git – it will first remove the local .git folder, which contains the history from my template and reinitialize git with a fresh commit to start your new history in</li>
<li>Finally, it will remove the setup script directory and remove the package dependencies that were only being used by those scripts</li>
</ul>
<h3 id="starting-the-development-server">Starting the development server</h3>
<p>Once the setup scripts finish running, you'll want to run:</p><pre><code class="language-shell">yarn develop
</code></pre>
<p>This runs a watch process on the hook source, building the hook locally each time a source file is changed, and running the example app server, where you can test the hook and make changes to the example pages.</p>
<figcaption>Starting up the use-custom-hook development server</figcaption>
</figure>
<p>With this all ready, we can get started!</p>
<p><a href="https://github.com/colbyfayock/use-my-custom-hook/commits/master">Follow along with the commit!</a></p>
<h2 id="step-2-writing-your-new-react-hook">Step 2: Writing your new React Hook</h2>
<p>At this point, you should now have a new custom hook where you can make it do whatever you'd like. But since we're going to walk through rebuilding the <a href="https://github.com/colbyfayock/use-placecage">usePlaceCage</a> hook, let's start there.</p>
<p>The usePlaceCage hook does 1 simple thing from a high level view – it takes in a configuration object and returns a number of image URLs that you can then use for your app.</p>
<p>Just as a reminder, any time I mention <code>usePlaceCage</code> or <code>use-placecage</code>, you should use the hook name that you set up before.</p>
<h3 id="a-little-bit-about-placecage-com">A little bit about placecage.com</h3>
<p>Placecage.com is a placeholder image service that does 1 thing. It takes a URL with a simple configuration and returns an image... of Nic Cage.</p>
<figcaption>placecage.com</figcaption>
</figure>
<p>From the simplest use, the service uses a URL pattern as follows:</p><pre><code>https://www.placecage.com/200/300
</code></pre>
<p>This would return an image with a width of 200 and height of 300.</p>
<p>Optionally, you can pass an additional URL parameter that defines the type of image:</p><pre><code>https://www.placecage.com/gif/200/300
</code></pre>
<p>In this particular instance, our type is <code>gif</code>, so we'll receive a gif.</p>
<p>The different types available to use are:</p>
<ul>
<li>Nothing: calm</li>
<li><code>g</code>: gray</li>
<li><code>c</code>: crazy</li>
<li><code>gif</code>: gif</li>
</ul>
<p>We'll use this to define how we set up configuration for our hook.</p>
<h3 id="defining-our-core-generator-function">Defining our core generator function</h3>
<p>To get started, we're going to copy over a function at the bottom of our <code>use-placecage/src/usePlaceCage.js</code> file, which allows us to generate an image URL, as well as a few constant definitions that we'll use in that function.</p>
<p>First, let's copy over our constants to the top of our <code>usePlaceCage.js</code> file:</p><pre><code class="language-js">const PLACECAGE_HOST = 'https://www.placecage.com/';
const TYPES = {
calm: null,
gray: 'g',
crazy: 'c',
gif: 'gif'
};
const DEFAULT_TYPE = 'calm';
const ERROR_BASE = 'Failed to place Nick';
</code></pre>
<p>Here we:</p>
<ul>
<li>Define a host, which is the base URL of our image service.</li>
<li>Define the available types, which we'll use in the configuration API. We set <code>calm</code> to <code>null</code>, because it's the default value which you get by not including it at all</li>
<li>Our default type will be <code>calm</code></li>
<li>And we set an error base which is a consistent message when throwing an error</li>
</ul>
<p>Then for our function, let's copy this at the bottom of our <code>usePlaceCage.js</code> file:</p><pre><code class="language-js">function generateCage(settings) {
const { type = DEFAULT_TYPE, width = 200, height = 200, count = 1 } = settings;
const config = [];
if ( type !== DEFAULT_TYPE &amp;&amp; TYPES[type] ) {
config.push(TYPES[type]);
}
config.push(width, height);
if ( isNaN(count) ) {
throw new Error(`${ERROR_BASE}: Invalid count ${count}`);
}
return [...new Array(count)].map(() =&gt; `${PLACECAGE_HOST}${config.join('/')}`);
}
</code></pre>
<p>Walking through this code:</p>
<ul>
<li>We define a <code>generateCage</code> function which we'll use to generate our image URL</li>
<li>We take in a settings object as an argument, which defines the configuration of our image URL. We'll be using the same parameters as we saw in our placecage.com URL</li>
<li>We destructure those settings to make them available for us to use</li>
<li>We have a few defaults here just to make it easier. Our default <code>type</code> will be defined by <code>DEFAULT_TYPE</code> along with a default width, height, and number of results we want to return</li>
<li>We create a <code>config</code> array. We'll use this &nbsp;to append all of the different configuration objects in our URL and finally join them together with a <code>/</code> essentially making a URL</li>
<li>Before we push our config to that array, we check if it's a valid argument, by using the <code>TYPES</code> object to check against it. If it's valid, we push it to our config array</li>
<li>We then push our width and height</li>
<li>We do some type checking, if we don't have a valid number as the <code>count</code>, we throw an error, otherwise we'll get incorrect results</li>
<li>Finally, we return a new array with the number of results requested, mapped to a URL creator, which uses <code>PLACECAGE_HOST</code> as our defined base URL, and with our config array joined by <code>/</code></li>
</ul>
<p>And if we were to test this function, it would look like this:</p><pre><code class="language-js">const cage = generateCage({
type: 'gif',
width: 500,
height: 500,
count: 2
});
console.log(cage); // ['https://www.placecage.com/gif/500/500', 'https://www.placecage.com/gif/500/500']</code></pre>
<h3 id="using-our-function-in-the-hook">Using our function in the hook</h3>
<p>So now that we have our generator function, let's actually use it in our hook!</p>
<p>Inside of the <code>usePlaceCage</code> function in the <code>use-placecage/src/usePlaceCage.js</code> file, we can add:</p><pre><code class="language-js">export default function usePlaceCage (settings = {}) {
return generateCage(settings);
}
</code></pre>
<p>What this does it uses our generator function, takes in the settings that were passed into the hook, and returns that value from the hook.</p>
<p>Similar to our previous use example, if we were to use our hook, it would look like this:</p><pre><code class="language-js">const cage = usePlaceCage({
type: 'gif',
width: 500,
height: 500,
count: 2
});
console.log(cage); // ['https://www.placecage.com/gif/500/500', 'https://www.placecage.com/gif/500/500']
</code></pre>
<p>At this point, it does the same thing!</p>
<p>So now we have our hook, it serves as a function to generate image URLs for the placecage.com service. How can we actually use it?</p>
<p><a href="https://github.com/colbyfayock/use-my-custom-hook/commit/a4d4d3c3565759031c29d00faf731ac4c236a1fd">Follow along with the commit!</a></p>
<h2 id="step-3-using-your-react-hook-in-an-example">Step 3: Using your React hook in an example</h2>
<p>The good news about our template, is it already includes an example app that we can update to easily make use of our hook to both test and provide documentation for those who want to use it.</p>
<h3 id="setting-up-the-hook">Setting up the hook</h3>
<p>To get started, let's open up our <code>example/pages/index.js</code> file. Inside of this file you'll see the following:</p><pre><code class="language-js">const hookSettings = {
message: 'Hello, custom hook!'
}
const { message } = usePlaceCage(hookSettings);
</code></pre>
<p>This snippet is what was used by default in the template just for a proof of concept, so let's update that. We're going to use the same exact configuration as we did in Step 2:</p><pre><code class="language-js">const hookSettings = {
type: 'gif',
width: 500,
height: 500,
count: 2
}
const cage = usePlaceCage(hookSettings);
</code></pre>
<p>Again, we set up our settings object with the configuration for our hook and invoke our hook and set the value to the <code>cage</code> constant.</p>
<p>If we now console log that value our to our dev tools, we can see it working!</p><pre><code class="language-js">console.log('cage', cage);
</code></pre>
<figcaption>Using console.log to show the cage value</figcaption>
</figure>
<p><em>Note: If you get an error here about <code>message</code>, you &nbsp;can comment that our or remove it under the Examples section.</em></p>
<h3 id="updating-the-example-with-our-new-hook-configuration">Updating the example with our new hook configuration</h3>
<p>If you scroll down to the Examples section, you'll notice that we have the same default <code>hookSettings</code> as above, so let's update that again to make sure our example is accurate.</p><pre><code class="language-jsx">{`const hookSettings = {
type: 'gif',
width: 500,
height: 500,
count: 2
}
const cage = usePlaceCage(hookSettings);`}
</code></pre>
<p>You'll also notice that we're no longer using the <code>message</code> variable. If you didn't remove it in the last step, we can now replace it under the Output heading with:</p><pre><code class="language-jsx">&lt;p&gt;
{ JSON.stringify(cage) }
&lt;/p&gt;
&lt;p&gt;
{ cage.map((img, i) =&gt; &lt;img key={`img-${i}`} width={200} src={img} /&gt;)}
&lt;/p&gt;
</code></pre>
<p>We're doing 2 things here:</p>
<ul>
<li>Instead of showing the variable itself, we wrap it with <code>JSON.stringify</code> so that we can show the contents of the array</li>
<li>We also use the <code>map</code> function to loop over our image URLs in the <code>cage</code> constant and create a new image element for each. This let's us preview the output instead of just seeing the values</li>
</ul>
<p>And once you save and open your browser, you should now see your updated examples and output!</p>
<figcaption>Custom hook example page</figcaption>
</figure>
<h3 id="other-things-you-can-do-on-that-page">Other things you can do on that page</h3>
<p>Before moving on, you can also update a few other things that will be important for your hooks page:</p>
<ul>
<li>Update the <strong>How to use</strong> section with instructions</li>
<li>Add additional examples to make it easier for people to know what to do</li>
</ul>
<p>A &nbsp;few things are also automatically pulled in from the <code>use-placecage/package.json</code> file. You can either update them there to make it easier to maintain or you can replace them in the example page:</p>
<ul>
<li><code>name</code>: Is used at the <code>&lt;h1&gt;</code> of the page</li>
<li><code>description</code>: Is used at the description under the <code>&lt;h1&gt;</code></li>
<li><code>repository.url</code>: Used to include a link to the repository</li>
<li><code>author</code>: The <code>name</code> and <code>url</code> are used to include a link at the bottom of the page</li>
</ul>
<p><a href="https://github.com/colbyfayock/use-my-custom-hook/commit/71ae57b562ad814d0ce862c22e247aa8c450b6cf">Follow along with the commit!</a></p>
<h2 id="step-4-compiling-your-react-hook-and-example">Step 4: Compiling your React hook and Example</h2>
<p>The way we can make our hook work easily as an npm module is to compile it for others to use. We're using babel to do this.</p>
<p>Though the publish process already does this for us automatically with the <code>prepublishOnly</code> script in <code>use-placecage/package.json</code>, we can manually compile our hook using the <code>yarn build</code> command from the root of the project.</p>
<p>Along with compiling the hook, running <code>yarn build</code> will also compile the example page, allowing you to upload it wherever you'd like. After running that command, you should see an output of static HTML files in the <code>example/out</code> directory.</p>
<p>If you're looking for a recommendation, <a href="https://www.netlify.com/">Netlify</a> makes it easy to connect your <a href="https://github.com/">Github</a> account and deploy the static site.</p>
<figcaption>Deployment setup in Netlify</figcaption>
</figure>
<p><a href="https://use-my-custom-hook.netlify.com/">See the demo site deployed to Netlify!</a></p>
<h2 id="step-5-publishing-your-react-hook-to-npm">Step 5: Publishing your React hook to npm</h2>
<p>Finally, if you're happy with your hook, it's time to publish!</p>
<p>npm makes this part really easy. The only prerequisite you need to have an npm account. With that account, let's log in:</p><pre><code class="language-shell">npm login
</code></pre>
<p>Which will prompt you for your login credentials.</p>
<p>Next, let's navigate to our hook's directory, as our package configuration is there under <code>use-placecage/package.json</code>:</p><pre><code class="language-shell">cd use-placecage
</code></pre>
<p>Then, we can simply publish!</p><pre><code class="language-shell">npm publish
</code></pre>
<p>Keep in mind, that each package name needs to be unique. If you used <code>use-placecage</code>, it's already taken... by me. ?</p>
<p>But if you're successful, npm should build your hook and upload it to the package registry!</p>
<figcaption>Publishing an npm package</figcaption>
</figure>
<p>It will then be available on npm with the following pattern:</p><pre><code>https://www.npmjs.com/package/[package-name]
</code></pre>
<p>So for <code>use-placeage</code>, it's available here: <a href="https://www.npmjs.com/package/use-placecage">https://www.npmjs.com/package/use-placecage</a></p>
<h2 id="we-now-have-a-custom-hook-">We now have a custom hook!</h2>
<p>Yay ? if you followed along, you should now have created a custom hook and published it to npm.</p>
<p>Though this was a silly example using placecage.com, it gives us a good idea of how we can easily set this up.</p>
<p>You'll also notice that this specific example wasn't the best use case for a hooks, where we could have simply used a function. Typically, we'll want to use custom hooks to wrap functionality that can only live inside a React component, such as <code>useState</code>. To learn more about that, you can read one of my other <a href="/news/how-to-destructure-the-fundamentals-of-react-hooks-d13ff6ea6871/">articles about custom hooks</a>.</p>
<p>However, this gave us a good basis to talk through the creation and configuration of our new hook!</p>
<h2 id="more-resources-about-hooks">More resources about hooks</h2>
<ul>
<li><a href="/news/how-to-destructure-the-fundamentals-of-react-hooks-d13ff6ea6871/">How to destructure the fundamentals of React Hooks</a> (freecodecamp.org)</li>
<li><a href="https://reactjs.org/docs/hooks-intro.html">Introducing Hooks</a> (reactjs.org)</li>
<li><a href="https://reactjs.org/docs/hooks-reference.html">Hooks API Reference</a> (reactjs.org)</li>
</ul>
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
