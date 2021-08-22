---
card: "https://cdn-media-1.freecodecamp.org/images/0*4xIsUwu1lTMXm0IZ"
tags: [JavaScript]
description: "Before we begin: This article uses JavaScript / Node.js examp"
author: "Milad E. Fahmy"
title: "How to create files automatically and save time with magic scaffolding"
created: "2021-08-16T11:39:57+02:00"
modified: "2021-08-16T11:39:57+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-react tag-functional-programming tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to create files automatically and save time with magic scaffolding</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*4xIsUwu1lTMXm0IZ 300w,
https://cdn-media-1.freecodecamp.org/images/0*4xIsUwu1lTMXm0IZ 600w,
https://cdn-media-1.freecodecamp.org/images/0*4xIsUwu1lTMXm0IZ 1000w,
https://cdn-media-1.freecodecamp.org/images/0*4xIsUwu1lTMXm0IZ 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*4xIsUwu1lTMXm0IZ" alt="How to create files automatically and save time with magic scaffolding">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
index: name =&gt; `// @flow
import React from 'react';
import './${name}.css';
// TODO: write rest of ${name} component
const ${name} = () =&gt; (
&lt;div className="${name.toLowerCase()}"&gt;
&lt;span&gt;rest of component&lt;/span&gt;
&lt;/div&gt;
);
export default ${name};`,
test: name =&gt; `// TODO: TDD
import { shallow, render } from 'enzyme';
import renderer from 'react-test-renderer';
import React from 'react';
import ${name} from '.';
const component = &lt;${name} /&gt;;
describe('The ${name} component', () =&gt; {
it('renders correctly', () =&gt; {
const wrapper = render(component);
expect(wrapper.hasClass('${name.toLowerCase()}')).toBeTruthy();
const tree = renderer.create(component).toJSON();
expect(tree).toMatchSnapshot();
});
});`,
sass: name =&gt; `.${name.toLowerCase()}
background: initial`,
};</code></pre><p>That’s the messiest piece of code you’ll see here — pinky promise.</p><p>So, we have an object with three properties: index, test, and sass. Each hosts a function which takes a name and returns a template with that name interpolated. Seems legit.</p><h4 id="step-2-let-s-make-some-functions-">Step 2: Let’s make some functions!</h4><p>We’re using the <a href="https://nodejs.org/api/fs.html#fs_file_system" rel="noopener">fs module</a> packaged with Node. It’s fab. It does many things.</p><p>We’re going to use some <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions" rel="noopener">arrow functions</a> and a little <a href="https://mostly-adequate.gitbooks.io/mostly-adequate-guide/" rel="noopener">functional programming</a>. Don’t be scared — just go with it.</p><p>The double arrow function syntax is called <a href="https://stackoverflow.com/questions/32782922/what-do-multiple-arrow-functions-mean-in-javascript" rel="noopener">currying</a>. It’s okay if it looks weird. I was freaked out when I first saw it, but it allows for <a href="https://mostly-adequate.gitbooks.io/mostly-adequate-guide/ch04.html#cant-live-if-livin-is-without-you" rel="noopener">super cool stuff</a>. In fact, here’s a quick demo:</p><pre><code class="language-js">const fs = require('fs');
const fileExists = path =&gt; file =&gt; fs.existsSync(`${path}/${file}`);
const fileExistsInSrc = fileExists('/src'); // file =&gt; fs.existsSync(`${path}/${file}`)
fileExistsInSrc('index.js') // true || false</code></pre><p>So that’s <a href="https://mostly-adequate.gitbooks.io/mostly-adequate-guide/ch04.html#cant-live-if-livin-is-without-you" rel="noopener">currying</a> with <a href="https://stackoverflow.com/questions/218025/what-is-the-difference-between-currying-and-partial-application" rel="noopener">partial application</a> — it’s also a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures" rel="noopener">closure</a>.</p><p><strong>Sidebar</strong>: Hopefully nobody calls me out here on some technicality, but please do harass me in the comments if you feel the need.</p><p>Let’s carry on:</p><pre><code class="language-js">const fs = require('fs');
const fileExists = path =&gt; file =&gt; fs.existsSync(`${path}/${file}`);
const writeToPath = path =&gt; (file, content) =&gt; {
const filePath = `${path}/${file}`;
fs.writeFile(filePath, content, err =&gt; {
if (err) throw err;
console.log("Created file: ", filePath);
return true;
});
};</code></pre><p>First we require <a href="https://nodejs.org/api/fs.html#fs_file_system" rel="noopener"><strong>fs</strong></a>. We need it in our life.</p><p>Then we declare <strong>fileExists</strong> as a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function" rel="noopener">function expression</a>.</p><p>Finally we have another <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function" rel="noopener">function expression</a> called <strong>writeToPath.</strong> It takes the <strong>path</strong> and returns another function which accepts a <strong>file</strong> string and the <strong>content</strong> of that file. It then writes the file or throws an error (worst case scenario).</p><p>You get it right? We’re creating some files.</p><h4 id="step-3-meet-chokidar"><strong>Step 3: Meet Chokidar</strong></h4><p>Fun fact: It’s a <a href="https://en.wiktionary.org/wiki/chowkidar#English" rel="noopener">Hindi word</a>.</p><blockquote><strong>Chowkidar </strong>— (<em>India</em>) watchman, caretaker, gatekeeper; one who inhabits a “chowki”, police station or guard house.</blockquote><p>We’re talking about the <a href="https://github.com/paulmillr/chokidar" rel="noopener">npm package</a> though. It’s based on our new friend <a href="https://nodejs.org/api/fs.html#fs_class_fs_fswatcher" rel="noopener">fs</a> and you could use it for so many delightful things.</p><p>It watches our files for us <a href="https://idioms.thefreedictionary.com/watch+like+a+hawk" rel="noopener">like a hawk</a>.</p><p>Well not exactly like a hawk.</p><p>It is not a bird.</p><p>Like at all.</p><p>Anyway, here’s the code…</p><pre><code class="language-js">const chokidar = require("chokidar");
const watcher = chokidar
.watch("src/components/**", { ignored: /node_modules/ })
.on("addDir", (path, event) =&gt; {
const name = path.replace(/.*\/components\//, "");
const goodToGo = /^[^\/_]*$/.test(name);
if (goodToGo) createFiles(path, name);
});</code></pre><p>First we require it.</p><p>Next we define what we want to watch. I’m watching the <strong>src/components</strong> directory, but you can watch any set of paths. You can even pass an <a href="https://github.com/paulmillr/chokidar#api" rel="noopener">array of paths</a>. If you don’t recognize the <strong>** </strong>part in <strong>src/components/**</strong> — it’s called a <a href="https://en.wikipedia.org/wiki/Glob_%28programming%29" rel="noopener">glob pattern</a>.</p><p>After that, we define what events we want to listen for. I’m only listening for adding a directory with <strong>.on(“addDir”)</strong> but you can listen for <a href="https://github.com/paulmillr/chokidar#methods--events" rel="noopener">other events</a> too.</p><p>Next let’s extract the name of the component by replacing anything before the component name:</p><pre><code>src/components/Header/components/Title</code></pre><p>becomes</p><pre><code>Title</code></pre><p>Finally we will check that the component name passes this regex:</p><pre><code>/^[^\/_]*$/</code></pre><p>So as long as it doesn’t have a forward slash or underscore — it’s good to go. This avoids polluting __tests__ folders or nested/directories by mistake.</p><h4 id="step-4-time-to-make-some-files-">Step 4: Time to make some files!</h4><p>You reached the last step. Congratulations! It’s been pretty great.</p><p>This next function is aptly named <strong>createFiles</strong>.</p><p>It’s a bit messy — it could be refactored.</p><p>I apologize in advance if the code below offends you.</p><p>Let’s dig in:</p><pre><code class="language-js">function createFiles(path, name) {
const files = {
index: "index.jsx",
test: `${name}.test.js`,
sass: `${name}.sass`
};
if (name !== "components") {
const writeFile = writeToPath(path);
const toFileMissingBool = file =&gt; !fileExists(path)(file);
const checkAllMissing = (acc, cur) =&gt; acc &amp;&amp; cur;
const noneExist = Object.values(files)
.map(toFileMissingBool)
.reduce(checkAllMissing);
if (noneExist) {
console.log(`Detected new component: ${name}, ${path}`);
Object.entries(files).forEach(([type, fileName]) =&gt; {
writeFile(fileName, templates[type](name));
});
}
}
}</code></pre><p>So at the top, we declare the <strong>files</strong> object — it’s a list of file name strings which we’re injecting the <strong>name</strong> parameter into. You might have noticed that it has the same keys as the <strong>templates</strong> object. That’s important.</p><p>The <strong>if</strong> statement is very specific to my setup. I don’t want to create my files <strong>if</strong> the new folder is called components. I am only creating components <strong>within</strong> a components sub-folder.</p><ul><li><strong>writeFile</strong> is our function <strong>writeToPath </strong><a href="https://stackoverflow.com/questions/218025/what-is-the-difference-between-currying-and-partial-application" rel="noopener">partially applied</a>. It’s a function that creates a file in the given path when called with a filename and some content.</li><li><strong>toFileMissingBool</strong> takes a file name and returns true if that file doesn’t exist in the given path. I know the function names are weird, but I promise it kind of makes more sense in a few lines.</li><li><strong>checkAllMissing</strong> is a function that we are going to pass to <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" rel="noopener"><strong>reduce</strong></a>. It takes two booleans and returns true if both are true. This is <a href="https://benmccormick.org/2018/03/27/cs-basics-boolean/" rel="noopener">boolean algebra</a>. We are also using the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" rel="noopener"><strong>reduce</strong></a> method of <strong>Array</strong>. Don’t be afraid of reduce. It’s super cool and really useful in this kind of situation.</li></ul><p>Let’s talk about the variable <strong>noneExist</strong>. If it’s true, then none of the files we want to create exist in the new folder. The idea is that you don’t mess with a folder just because it doesn’t have a test file or a sass file. Maybe that folder doesn’t need one.</p><pre><code class="language-js">const noneExist = Object.values(files)
.map(toFileMissingBool)
.reduce(checkAllMissing);</code></pre><p>That’s why I created those strangely named functions above.</p><p>We <strong>map</strong> the values in <strong>files</strong> to a <strong>boolean</strong> which represents if that file is missing or not. Then we take that <strong>array of booleans</strong> and <strong>reduce</strong> them to a single <strong>boolean</strong> value which represents whether all the files exist or not.</p><p>So if they’re all <strong>true,</strong> then <strong>noneExist</strong> is also <strong>true.</strong> But if even one is <strong>false,</strong> then <strong>noneExist</strong> will be <strong>false</strong>.</p><p>I hope you got all that. It’s a <a href="https://www.ldoceonline.com/dictionary/a-bit-of-a-mouthful" rel="noopener">bit of a mouthful</a>.</p><p>Last bit of code:</p><pre><code class="language-js">Object.entries(files).forEach(([type, fileName]) =&gt; {
writeFile(fileName, templates[type](name));
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
