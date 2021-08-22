---
card: "https://cdn-media-1.freecodecamp.org/images/1*PGxaa-3OODqO9Qxz0qnQzA.png"
tags: [JavaScript]
description: "One of the major challenges when building a web-app is how qu"
author: "Milad E. Fahmy"
title: "A Practical guide to ES6 modules"
created: "2021-08-16T11:35:17+02:00"
modified: "2021-08-16T11:35:17+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-es6 tag-modules tag-technology tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">A Practical guide to ES6 modules</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*PGxaa-3OODqO9Qxz0qnQzA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*PGxaa-3OODqO9Qxz0qnQzA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*PGxaa-3OODqO9Qxz0qnQzA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*PGxaa-3OODqO9Qxz0qnQzA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*PGxaa-3OODqO9Qxz0qnQzA.png" alt="A Practical guide to ES6 modules">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>One of the major challenges when building a web-app is how quickly you can scale and respond to the market needs. When the demand (requirements) increases, the capabilities (features) increase too. It is therefore important to have a solid architectural structure so that the app grows organically. We don’t want to end up in situations where the app can’t scale because everything in the app is deeply entangled.</p><blockquote>Write code that is easy to delete, not easy to extend.<br>- Tef, Programming is Terrible</blockquote><p>In this article, we’ll create a simple dashboard using ES6 modules, and then present optimization techniques for improving the folder structure and ease write less code. Let’s see dive into why ES6 modules are important, and how to effectively apply it.</p><blockquote>JavaScript has had modules for a long time. However, they were implemented via libraries, not built into the language. ES6 is the first time that JavaScript has built-in modules (<a href="http://exploringjs.com/es6/ch_modules.html" rel="noopener">source</a>).</blockquote><p>TL;DR — If you want to see a practical example where we create a dashboard using ES6 modules from an architectural design layout, jump to section 4.</p><h3 id="here-s-what-we-ll-address">Here’s what we’ll address</h3><ol><li>Why ES6 modules are needed</li><li>Back in the days when scripts were loaded manually</li><li>How ES6 modules work (<code>import</code> vs <code>export</code> )</li><li>Let’s build a dashboard with modules</li><li>Optimization techniques for dashboard example</li></ol><blockquote>If you want to become a better web developer, start your own business, teach others, or improve your development skills, I’ll be posting weekly tips and tricks on the latest web languages.</blockquote><h3 id="1-why-es6-modules-are-needed">1. Why ES6 modules are needed</h3><p>Let’s view a couple of scenarios as to why modules are relevant.</p><h4 id="scenario-1-don-t-reinvent-the-wheel">Scenario 1 — Don’t reinvent the wheel</h4><p>As developers, we often recreate things that has already been created without even being aware, or copy and paste stuff to reduce time. In the end, it adds up, and we are left with x number of identical copies scattered throughout the app. And for each time we need to change something, we must do it x times depending on how many copies we have.</p><p><strong>Example</strong><br>For instance, imagine a car factory trying to reinvent the engine every time it produced a new car, or an architect starting from scratch after each drawing. It’s not impossible to do this, but then what is the point of knowledge if you cannot reuse the experience you’ve acquired.</p><h4 id="scenario-2-knowledge-barrier">Scenario 2— Knowledge barrier</h4><p>If the system is deeply entangled, and lack of documentation, its difficult for old/new developers to learn how the app works, and how things are connected.</p><p><strong>Example</strong><br>For instance, a developer should be able to see what the outcome of a change is without guessing, otherwise we end up with lots of errors without knowing where to start. A solution is to use modules for encapsulating behaviour, we can easily narrow down the debug process and quickly identify the root of the problem.</p><blockquote>I’ve recently written an article about <a href="https://codeburst.io/developers-that-constantly-want-to-learn-new-things-heres-a-tip-7a16e42302e4" rel="noopener">“Developers that constantly want to learn new things”</a>, with tips on how to improve knowledge.</blockquote><h4 id="scenario-3-unexpected-behavior">Scenario 3— Unexpected behavior</h4><p>By avoiding separation-of-concerns (design principle), it can lead to unexpected behaviour.</p><p><strong>Example</strong><br>For instance, let’s say someone increases the volume in the car, and that starts the windshield wipers. That is an example of an unexpected behaviour, and not something we want in our application.</p><p>In short, we need ES6 modules in order to effectively reuse, maintain, separate and encapsulate internal behaviour from external behaviour. It’s not about making the system complex, but having the ability to easily scale and delete stuff without breaking the system.</p><h3 id="2-back-in-the-days-when-scripts-were-loaded-manually">2. Back in the days when scripts were loaded manually</h3><p>If you’ve done web development for a couple of years, then you’ve definitely encountered dependency conflicts such as scripts not loading in the right order, or that the elements of the DOM tree cannot be accessed by JS.</p><p>The reason is that the HTML on a page is loaded in the order in which it appears, which means we cannot load scripts before the content inside the <code>&lt;bo</code>dy&gt; element has finished loading.</p><p>For instance, if you try to access an element within the <code>&lt;body&gt;</code> tag <code>using document.getElementById("id-name")</code> and the element is not loaded yet, then you get an undefined error. To make sure that scripts are loaded properly we can use and defer async. The former will make sure that each script loads in the order it appears, while the latter loads the script whenever it becomes available.</p><p>The old fashioned way of solving such issue was to load the scripts right before the <code>&lt;/body&gt;</code> element.</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;head&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;!--HTML content goes here--&gt;
&lt;script src="js/jquery.js"&gt;&lt;/script&gt;
&lt;script src="js/script2.js"&gt;&lt;/script&gt;
&lt;script src="js/script3.js"&gt;&lt;/script&gt;
&lt;script src="js/script4.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>But in the long run, the number of scripts adds up and we may end up with 10+ scripts while trying to maintain version and dependency conflicts.</p><h4 id="separation-of-concerns">Separation-of-concerns</h4><p>In general, loading scripts as shown above is not a good idea in terms of performance, dependencies and maintainability. We don’t want the <code>index.html</code> file to have the responsibility of loading all the scripts — we need some sort of structure and separation of logic.</p><p>The solution is to utilize ES6’s syntax, <code>import</code> and <code>export</code> statements, an elegant and maintainable approach that allows us to keep things separated, and only available when we need it.</p><h4 id="the-import-and-export-statements">The <code>import</code> and <code>export statements</code></h4><p>The <code>export</code> keyword is used when we want to make something available somewhere, and the <code>import</code> is used to access what <code>export</code> has made available.</p><blockquote>The thumb rule is, in order to <code>import</code> something, you first need to <code>export</code> it.</blockquote><p>And what can we actually <code>export</code>?</p><ul><li>A variable</li><li>An object literal</li><li>A class</li><li>A function</li><li>++</li></ul><p>To simplify the example as shown above, we can wrap all scripts one file.</p><pre><code class="language-js">import { jquery } from './js/jquery.js';
import { script2 } from './js/script2.js';
import { script3 } from './js/script3.js';
import { script4 } from './js/script4.js';</code></pre><p>And then just load <code>app.js</code> script in our <code>index.html</code>. But first, in order to make it work, we need to use <code>type="module"</code> (<a href="https://caniuse.com/#search=modules" rel="noopener">source</a>) so that we can use the <code>import</code> and <code>export</code> for working with modules.</p><pre><code class="language-js">&lt;!DOCTYPE html&gt;
&lt;head&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;!--HTML content goes here--&gt;
&lt;script type="module" src="js/app.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
- components
- layouts
index.html
index.js ( entry point ) </code></pre><p>And in each file inside the folder, we <code>export</code> a <code>class</code>.</p><pre><code>- dashboard
dashboard.js
- components
issues.js
user-profile.js
users.js
- layouts
header.js
sidebar.js
index.html
index.js ( entry point )</code></pre><h4 id="step-3-implementation">Step 3 — Implementation</h4><p>The folder structure is all set, so the next thing to do is to create the component (a <code>class</code>) in each file and then <code>export</code> it. The code convention is the same for the rest of the files: every component is simply a <code>class</code>, and a <code>method</code> that consoles “x component is loaded” where x is the name of the component in order to indicate that the component has been loaded.</p><p>Let’s create a user <code>class</code> and then <code>export</code> it as shown below.</p><pre><code class="language-js">class Users {
loadUsers() {
console.log('Users component is loaded...')
}
}
export { Users };  </code></pre><p>Notice, we have various <a href="https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export" rel="noopener">options</a> when dealing with the <code>export</code> statement. So the idea is that you can either <code>export</code> individual components, or a collection of components. For instance if we <code>export</code> the <code>class</code>, we can access the methods declared within by creating a new instance of the <code>class</code>.</p><pre><code class="language-js">export { name1, name2, …, nameN };
export function FunctionName(){...}
export class ClassName {...}
...
export * from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
export { default } from …;
...</code></pre><p>Alright, so if you look at the architectural diagram in step 1, you’ll notice that the <code>user-profile</code> component is encapsulated by the <code>header</code> layout. This means that when we load the <code>header</code> layout, it will also load the <code>user-profile</code> component.</p><pre><code class="language-js">import { UserProfile } from '../components/users-profile.js';
class Header {
loadHeader() {
// Creata a new instance
const userProfile = new UserProfile();
// Invoke the method (component)
userProfile.loadUserProfile();
// Output loading status
console.log('Header component is loaded...')
}
}
export { Header };</code></pre><p>Now that each component and layout has an exported <code>class</code>, we then <code>import</code> it in our <code>dashboard</code> file like this:</p><pre><code class="language-js">// From component folder
import { Users } from '../components/users.js';
import { Issues } from '../components/issues.js';
// From layout folder
import { Header } from '../layouts/header.js';
import { Sidebar } from '../layouts/sidebar.js';
class Dashboard {
loadDashboard(){
// Create new instances
const users = new Users();
const issues = new Issues();
const header = new Header();
const sidebar = new Sidebar();
console.log('Dashboard component is loaded');
}
}
export { Dashboard } </code></pre><p>In order to understand what is really going on in the <code>dashboard</code> file, we need to revisit the drawing in step 1. In short, since each component is a <code>class</code>, we must create a new instance and then assign it to an object. Then we use the object to execute the methods as shown in method <code>loadDashboard()</code>.</p><p>Currently, the app doesn’t output anything because we haven’t executed the method <code>loadDashboard()</code>. In order to make it work we need to <code>import</code> the <code>dashboard</code> module in file <code>index.js</code> like this:</p><pre><code class="language-js">import { Dashboard } from './dashboard/dashboard.js';
const dashboard = new Dashboard();
const dashboard_1 = new Dashboard();
const dashboard_2 = new Dashboard();
dashboard_1.loadDashboard();
// From component folder
import { users, issues } from '../components';
// From layout folder
import { header, sidebar } from '../layouts';
class Dashboard {
loadDashboard(){
// Invoke methods
users.loadUsers();
issues.loadIssues();
header.loadHeader();
sidebar.loadSidebar();
console.log('Dashboard component is loaded');
}
}
export let dashboard = new Dashboard(); </code></pre><p>As shown, we have less lines of code, and we made it declarative without losing the context. Let’s see what changes we’ve made.</p><h4 id="create-a-dynamic-interface-also-known-as-a-barrels-">Create a dynamic interface (also known as a barrels)</h4><p>A dynamic interface allows us to create a collection of things we need. It’s like creating a toolbox with our favorite tools. One thing that is important to mention is that a dynamic interface should not be added in every single folder, but to folders that consist of many components.</p><blockquote>They greatly simplify the imports and make them look clearer. We just don’t want to have too many barrel files since that is counter productive and usually leads to <em>circular dependency </em>issues which sometimes can be quite tricky to resolve. <br>- <a href="/news/how-to-use-es6-modules-and-why-theyre-important-a9b20b480773/undefined" rel="noopener">Adrian Fâciu</a></blockquote><p>In order to create a dynamic interface, we create a file named <code>index.js</code> which is located in the root of each folder to re-export a subset of files or components we need. The same concept works in TypeScript, you just change the type from <code>.js</code> to <code>.ts</code> like <code>index.ts</code>.</p><p>The <code>index.js</code> is the first file that loads when we access the root folder space — it’s the same concept as <code>index.html</code> that boots our HTML content. This means we don’t have to explicitly write <code>import { component } from './components<strong>/index.js</strong>'</code><strong> , </strong>but instead <code>import { component } from './components</code>.</p><p>Here’s how a dynamic interface looks.</p><pre><code class="language-js">// Root space -&gt; components folder
// Dynamic interface
export { users } from './users';
export { issues } from './issues';
export { userProfile } from './user-profile';</code></pre><p>By using a dynamic interface, we end up with one less root level to access, and also less code.</p><pre><code class="language-js">// Before
import { Users } from '../components/users.js';
import { Issues } from '../components/issues.js';
import { Header } from '../layouts/header.js';
import { Sidebar } from '../layouts/sidebar.js';
// After (with dynamic interface)
import { users, issues } from '../components';
import { header, sidebar } from '../layouts'; </code></pre><h4 id="create-a-new-instance-at-runtime">Create a new instance at runtime</h4><p>We removed the four instances in our <code>dashboard.js</code>, and instead created an instance at runtime when every component is exported. If you want to decide the name of the object, you can do <code>export default new Dashboard()</code>, and then <code>import dashView</code> without the curly braces.</p><pre><code class="language-js">// Before
export class { dashboard };
const dashboard = new Dashboard();
dashboard.loadDashboard();
// After
export const dashboard = new Dashboard();
dashboard.loadDashboard()</code></pre><p>As shown, we can directly invoke the method without needing to create a new instance, and also write less code. However, this is a personal preference and you can freely decide what is a practical use case for your app and requirements.</p><p>And finally, we load all components and layouts with one method.</p><pre><code class="language-js">import { dashboard } from './dashboard/dashboard';
dashboard.loadDashboard();</code></pre><h3 id="conclusion">Conclusion</h3><p>I started with the intention of just showing a short example of how you can <code>import</code> and <code>export</code> a component, but then felt the need to share everything I know (almost). I hope this article provides you some insight into how to deal with ES6 modules effectively when building apps, and the things that are important in terms of separation-of-concerns (design principle).</p><h4 id="the-takeaways-"><strong>The takeaways:</strong></h4><ul><li>With ES6 modules we can easily reuse, maintain, separate and encapsulate components from being changed by external behavior</li><li>A module is a collection of components</li><li>A component is an individual block</li><li>Don’t try to make every everything reusable as it requires time and resources, and most often we don’t reuse it</li><li>Create an architectural diagram before diving into the code</li><li>In order to make components available in other files, we must first <code>export</code> and then <code>import</code></li><li>By using <code>index.js</code> (same concept for TypeScript <code>index.ts</code>) we can create dynamic interfaces (barrels) to quickly access the things we need with less code and fewer hierarchical paths</li><li>You can <code>export</code> a new instance at runtime by using <code>export let objectName = new ClassName()</code></li></ul><p>The good news is that things have changed and we are moving towards a component-based and reusable paradigm. The question is how can we reuse not only plain JS code, but HTML elements too in a practical and intuitive way. It looks like that ES6 modules combined with <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" rel="noopener">web components</a> may just give us what we need to build performant and scalable apps.</p><p>Here are a few articles I’ve written about the web-ecosystem along with personal programming tips and tricks.</p><ul><li><a href="https://medium.freecodecamp.org/a-comparison-between-angular-and-react-and-their-core-languages-9de52f485a76" rel="noopener">A comparison between Angular and React</a></li><li><a href="https://medium.freecodecamp.org/a-chaotic-mind-leads-to-chaotic-code-e7d6962777c0" rel="noopener">A chaotic mind leads to chaotic code</a></li><li><a href="https://codeburst.io/developers-that-constantly-want-to-learn-new-things-heres-a-tip-7a16e42302e4" rel="noopener">Developers that constantly want to learn new things</a></li><li><a href="https://medium.freecodecamp.org/learn-these-core-javascript-concepts-in-just-a-few-minutes-f7a16f42c1b0?gi=6274e9c4d599" rel="noopener">Learn these core Web Concepts</a></li><li><a href="https://medium.freecodecamp.org/7-javascript-methods-that-will-boost-your-skills-in-less-than-8-minutes-4cc4c3dca03f" rel="noopener">Boost your skills with these important JavaScript methods</a></li><li><a href="https://codeburst.io/learn-how-to-create-custom-bash-commands-in-less-than-4-minutes-6d4ceadd9590" rel="noopener">Program faster by creating custom bash commands</a></li></ul><p>You can find me on Medium where I publish on a weekly basis. Or you can follow me on <a href="http://twitter.com/dleroari" rel="noopener">Twitter</a>, where I post relevant web development tips and tricks along with personal dev stories.</p>
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
