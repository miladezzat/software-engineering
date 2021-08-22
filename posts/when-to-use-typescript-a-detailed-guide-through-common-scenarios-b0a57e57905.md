---
card: "https://cdn-media-1.freecodecamp.org/images/1*ygOV4sntqZDN8t7u9n-MGw.jpeg"
tags: [JavaScript]
description: Strap yourself in. In this guide, we compare when it’s absolu
author: "Milad E. Fahmy"
title: "When to use TypeScript: a detailed guide through common scenarios"
created: "2021-08-15T19:34:35+02:00"
modified: "2021-08-15T19:34:35+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-typescript tag-software-design tag-tech tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">When to use TypeScript: a detailed guide through common scenarios</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*ygOV4sntqZDN8t7u9n-MGw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*ygOV4sntqZDN8t7u9n-MGw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*ygOV4sntqZDN8t7u9n-MGw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*ygOV4sntqZDN8t7u9n-MGw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*ygOV4sntqZDN8t7u9n-MGw.jpeg" alt="When to use TypeScript: a detailed guide through common scenarios">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><em>Strap yourself in. In this guide, we compare when it’s absolutely vital to be using TypeScript, the strictly-typed programming language, and when it makes sense to stick to vanilla JavaScript</em></p>
<p>Have you heard of that little programming language called <strong>TypeScript</strong>? You know, the one that Microsoft made? The one that’s kinda <a href="https://redmonk.com/sogrady/2019/03/20/language-rankings-1-19" rel="noopener">blowing up</a>?</p>
<p>Maybe you were like me, a true JavaScript purist. I was doing <em>just fine </em>building things with React and Node without types. Prop types and <a href="https://github.com/hapijs/joi" rel="noopener">Joi validation</a> have been treating me just nicely, thank you.</p>
<p>Maybe you caved at some point and gave it a shot. Started playing with it. Maybe you hated it because it reminded you of Java. Maybe you got annoyed with how you couldn’t be super productive right away.</p>
<p>These were some of <strong>my own initial sentiments</strong> when I first started with TypeScript.</p>
<p>I certainly didn’t see the benefit… up until I started experiencing some really annoying stuff. Things like builds not failing when they should, buggy code and typos finding their way into production code somehow in addition to finding it increasingly challenging to express my designs in a really clean object-oriented way.</p>
<p>9 months later into using TypeScript, I’ve built new features in Angular apps for clients, I began compiling <a href="https://univjobs.ca" rel="noopener">Univjobs</a>'s React / Redux front-end with TypeScript and ported all of our backend services to TypeScript from vanilla Node.js, refactoring mass amounts of code along the way.</p>
<p>In this article, we’ll take a look at some of the most common scenarios and identify when it might be vital to use TypeScript, and when we could probably just do without it and stick to <em>vanilla</em> JS.</p>
<h3 id="why-this-discussion-matters-today-more-than-ever">Why this discussion matters today more than ever</h3>
<p>I’ve come to the very important conclusion that depending on your situation, context, project, skill level, and other factors, that it’s actually <strong>dangerous</strong> for your project to <strong>NOT</strong> be using TypeScript today.</p>
<p>The front-end space, for one, is getting more and more complex. Certain features that were once considered bleeding-edge, are now very much standard user experience assumptions.</p>
<p>For example, it’s almost always expected that your app is still going to work offline in some capacity. And when users ARE online, it’s also usually expected that they’re going to get real-time notifications without having to refresh the page.</p>
<p>These are some pretty steep (but definitely not unrealistic in 2019) demands.</p>
<p>Before we dive into different scenarios, we should actually talk about the three categories of really hard software problems to be solved.</p>
<h3 id="3-categories-of-hard-software-problems">3 Categories of Hard Software Problems</h3>
<p>Generally speaking, there are three of these. The Performant System Problem, the Embedded System Problem, and the Complex Domain Problem.</p>
<h4 id="1-the-performant-system-problem">1. The Performant System Problem</h4>
<p>Let’s talk about Twitter for a sec.</p>
<p>Twitter is actually a really simple concept.</p>
<p>You sign up, you make tweets, you like other people’s tweets and that’s pretty much it.</p>
<p>If Twitter is that simple, why couldn’t someone else do it?</p>
<p>It’s apparent that the real challenge for Twitter is not actually so much as <strong>what it does</strong>, but it’s <strong>how it’s able to do what it does</strong>.</p>
<p>Twitter has the unique challenge of serving requests from approximately <strong>500 million users every single day</strong>.</p>
<p>The hard problem that Twitter solves is actually a <em>performance problem</em>.</p>
<p>When the challenge is performance, whether or not we use a strictly typed language is much less important.</p>
<h4 id="2-the-embedded-system-problem">2. The Embedded System Problem</h4>
<p>An embedded system is a combination of computer hardware and software, with the purpose of enabling control over the mechanical or electrical aspects of a system.</p>
<p>Most systems we use today are built on a very complex layer of code that, if not initially written in, compiles down to C or C++ usually.</p>
<p>Coding in these languages is not for the faint of heart.</p>
<p>In C, there is no such thing as objects; and we as humans like objects because we can easily understand them. C is procedural and this makes the code that we have to write in this language more challenging to keep clean. These problems also require knowledge of the lower-level details.</p>
<p>C++ does make life a whole lot better because it has object orientation, but the challenge is still fundamentally interacting with lower-level hardware details.</p>
<p>Because we don’t really have that much of a choice on the languages we use for these problems, so it’s irrelevant to consider TypeScript here.</p>
<h4 id="3-the-complex-domain-problem">3. The Complex Domain Problem</h4>
<p>For some problems, that challenge is less about scaling in terms of handling more requests, but scaling in terms of <strong>the codebase’s size</strong>.</p>
<p>Enterprise companies have <strong>complex real-life problems</strong> to be solved. In these companies, the biggest engineering challenges are usually:</p>
<ul>
<li>Being able to <strong>logically</strong> (domains) separate parts of that monolith into smaller apps. And then, <strong>physically </strong>(microservices for bounded contexts) splitting them up so that teams can be assigned to maintain them</li>
<li>Handling integration and synchronization between these apps</li>
<li>Modeling the domain concepts and actually solving the problems of the domain</li>
<li>Creating a <em>ubiquitous</em> (all-encompassing) language to be shared by developers and domain experts</li>
<li>Not getting lost in the mass amounts of code written and slowing down to the point where it becomes impossible to add new features without breaking existing ones</li>
</ul>
<p>I’ve essentially described the types of problems that <a href="https://khalilstemmler.com/articles/domain-driven-design-intro/" rel="noopener">Domain-Driven Design</a> solves. For these types of projects, you wouldn’t even think about not using a strictly-typed language like TypeScript.</p>
<h4 id="object-oriented-javascript">Object-oriented JavaScript</h4>
<p>For <strong>Complex Domain</strong> problems, if you don’t choose TypeScript and instead, choose JavaScript, it will require some extra effort to be successful. Not only will you have to be <strong>extra comfortable</strong> with your object modeling abilities in vanilla JavaScript, but you’ll also have to know how to utilize the 4 principles of object-oriented programming (encapsulation, abstraction, inheritance, and polymorphism).</p>
<p>This can be <strong>hard to do</strong>. JavaScript doesn’t naturally come with concepts of interfaces and abstract classes.</p>
<p>“Interface Segregation” from the SOLID design principles isn’t easily achievable with vanilla JavaScript.</p>
<p>Using JavaScript alone would also require a certain level of discipline as a developer in order to keep the code clean, and this is vital once the codebase is sufficiently large. You’re also left to ensure that your team shares the same discipline, experience and knowledge level on how to implement common design patterns in JavaScript. If not, you’ll need to guide them.</p>
<p>In Domain-Driven projects like this, the strong benefit from using a strictly typed language is <strong><em>less</em></strong> about expressing <strong><em>what can be done</em></strong>, but more about using encapsulation and information hiding <strong>to reduce the surface area of bugs </strong>by limiting what domain objects are <strong><em>actually allowed to do</em></strong>.</p>
<p>We can live without this on the front-end, but it’s a <strong>hard language requirement for the</strong> <strong>backend</strong> in my books. It’s also the reason why I moved my Node.js backend services to TypeScript.</p>
<p>There’s a reason why TypeScript is called “<strong>JavaScript that scales</strong>”.</p>
<p>Out of all three categories of hard software problems, only the Complex Domain Problem is the one where TypeScript is an absolute necessity.</p>
<p>Besides this, there are other factors that might determine when it’s best to use TypeScript for your JavaScript project.</p>
<h3 id="code-size">Code size</h3>
<p>Code size usually ties back to the <strong>Complex Domain Problem</strong>, where a large codebase means a complex domain, but that’s not always the case.</p>
<p>When the amount of code a project has gets to a certain size, it becomes <strong>harder</strong> to keep track of everything that exists and becomes <strong>easier</strong> to end up re-implementing something already coded.</p>
<p><strong>Duplication is the enemy to well-designed and stable software.</strong></p>
<p>This is especially heightened when new developers start coding on an already large codebase.</p>
<p>Visual Studio Code’s autocompletion and Intellisense helps to navigate through huge projects. It works really well with TypeScript, but it’s somewhat limited with JavaScript.</p>
<p>For projects that I know will stay simple and small, or if I know that it will be thrown away eventually, I would be less pressed to recommend TypeScript as a necessity.</p>
<h3 id="production-software-vs-pet-projects">Production software vs. pet projects</h3>
<p><strong>Production software</strong> is code that you care about or code that you’ll get in trouble for if it doesn’t work. This is also code that you’ve written tests for. The general rule of thumb is that “if you care about the code, you need to have unit tests for it”.</p>
<p>If you don’t care, don’t have tests.</p>
<p><strong>Pet projects</strong> are self-explanatory. Do whatever you like. You have no professional commitment to uphold any standards of craftsmanship whatsoever.</p>
<p>Go on and make things! Make small things, make big things.</p>
<p>Maybe someday you’ll experience the pain when your pet project turns into your main project which turns into production software, which is buggy because it didn’t have tests or types ? not like I’ve been there or anything…</p>
<h4 id="lack-of-unit-tests">Lack of Unit Tests</h4>
<p>It’s not always possible to have tests for everything, because, well — <strong>life</strong>.</p>
<p>In that case, I’d say that if you don’t have Unit Tests, the next best thing you could have is compile-time checking with TypeScript. After that, if you’re using React, the next best is thing is to use runtime checking with Prop types.</p>
<p>However, compile-time checking is <strong>not a substitute</strong> for having unit tests. The good thing is that unit tests can be written in any language — so the argument for TypeScript here is irrelevant. What’s important is that tests are written and we are confident about our code.</p>
<h3 id="startups">Startups</h3>
<p>Definitely use whatever helps you be most productive.</p>
<p>At this time, the language you choose matters a lot less.</p>
<p>The most important thing for you to do is to <strong>validate your product</strong>.</p>
<p>Choosing a language (Java, for example) or a tool (like Kubernetes) that you heard would help you scale in the future (while being totally unfamiliar with it) may or may not be the best option in the case of a startup.</p>
<p>Depending on how early you are, the most important thing for you to do is to be productive.</p>
<p>In Paul Graham’s famous article, <a href="http://www.paulgraham.com/pypar.html" rel="noopener">The Python Paradox</a>, his main point is that startup engineers should just use the technology that maximizes their productivity.</p>
<p>Overall, in this case, use whatever you’re most comfortable with: types or no types. You can always refactor towards a better design once you know you’ve built something people actually want.</p>
<h3 id="working-on-teams">Working on Teams</h3>
<p>Depending on the size of your team and the frameworks you’re using, using TypeScript might be a make or break kind-of-thing.</p>
<h4 id="large-teams">Large teams</h4>
<p>When teams are sufficiently large (because the problems are sufficiently large), it’s a good reason to use an opinionated framework, like Angular for the front-end, and TypeScript for the backend.</p>
<p>The reason why using an opinionated framework is beneficial is because you limit the number of possible ways for people to accomplish something. In Angular, there’s pretty much one main way to add a Route Guard, use Dependency Injection, hook up Routing, Lazy-Loading, and Reactive Forms.</p>
<p>The huge benefit here is that the API is well specified.</p>
<p>With TypeScript, we also save massive amounts of time and make communication efficient.</p>
<p>The ability to quickly determine the required arguments and its return type for any method, or the ability to explicitly describe program intent through public, private, and protected variables alone is incredibly useful.</p>
<p>Yes, some of this is possible with JavaScript, but it’s hacky.</p>
<h4 id="communicating-patterns-implementing-design-principles">Communicating patterns &amp; implementing design principles</h4>
<p>Not only that, but <strong>design patterns</strong>, the solutions to commonly occurring problems in software, are more easily communicated through explicit strictly-typed languages.</p>
<p>Here’s a JavaScript example of a common pattern. See if you can identify what it is.</p><pre><code class="language-js">
class AudioDevice {
constructor () {
this.isPlaying = false;
this.currentTrack = null;
}
play (track) {
this.currentTrack = track;
this.isPlaying = true;
this.handlePlayCurrentAudioTrack();
}
handlePlayCurrentAudioTrack () {
throw new Error(`Subclasss responsibility error`)
}
}
class Boombox extends AudioDevice {
constructor () {
super()
}
handlePlayCurrentAudioTrack () {
// Play through the boombox speakers
}
}
class IPod extends AudioDevice {
constructor () {
super()
}
handlePlayCurrentAudioTrack () {
// Ensure headphones are plugged in
// Play through the ipod
}
}
const AudioDeviceType = {
Boombox: 'Boombox',
IPod: 'Ipod'
}
const AudioDeviceFactory = {
create: (deviceType) =&gt; {
switch (deviceType) {
case AudioDeviceType.Boombox:
return new Boombox();
case AudioDeviceType.IPod:
return new IPod();
default:
return null;
}
}
}
const boombox = AudioDeviceFactory
.create(AudioDeviceType.Boombox);
const ipod = AudioDeviceFactory
.create(AudioDeviceType.IPod);</code></pre>
<p>If you guessed <strong>Factory Pattern</strong>, you’re right. Depending on your familiarity with the pattern, it might not have been that obvious to you.</p>
<p>Let’s look at it in TypeScript now. Look at how much more intent we can signify about <strong>AudioDevice</strong> in TypeScript.</p><pre><code class="language-js">abstract class AudioDevice {
protected isPlaying: boolean = false;
protected currentTrack: ITrack = null;
constructor () {
}
play (track: ITrack) : void {
this.currentTrack = track;
this.isPlaying = true;
this.handlePlayCurrentAudioTrack();
}
abstract handlePlayCurrentAudioTrack () : void;
}</code></pre>
<p><strong>Immediate improvements</strong></p>
<ul>
<li>We know the class is abstract <strong>right away</strong>. We needed to sniff around in the JavaScript example.</li>
<li><strong>AudioDevice</strong> can be instantiated in the JavaScript example. This is bad, we intended <strong>AudioDevice</strong> to be an abstract class. And abstract classes shouldn’t be able to be instantiated, they’re only meant to be subclassed and implemented by <a href="https://khalilstemmler.com/wiki/concrete-class/" rel="noopener">concrete classes</a>. This limitation is set in place correctly in the TypeScript example.</li>
<li>We’ve signaled the scope of the variables.</li>
<li>In this example, <strong>currentTrack</strong> refers to an interface. As per the <a href="https://khalilstemmler.com/wiki/dependency-inversion/" rel="noopener">Dependency Inversion</a> <strong>design principle, </strong>we should always depend on abstractions, not concretions. This isn’t possible in the JavaScript implementation.</li>
<li>We’ve also signaled that any subclasses of <strong>AudioDevice</strong> will need to implement the <strong>handlePlayCurrentAudioTrack</strong> themselves. In the JavaScript example, we exposed the possibility for someone to introduce runtime errors trying to execute the method from either the illegal abstract class or the non-complete concrete class implementation.</li>
</ul>
<p>Takeaway: If you work on a large team and you need to minimize the potential ways someone could misuse your code, TypeScript is a good way to help fix that.</p>
<h3 id="smaller-teams-coding-styles">Smaller teams &amp; coding styles</h3>
<p>Smaller teams are a lot easier to manage coding styles and communication. Paired with linting tools, frequent discussions about how things will get done and pre-commit hooks, I think small teams can be really successful without TypeScript.</p>
<p>I think that success is an equation involving the size of the codebase and the size of the team.</p>
<p><strong>As the codebase grows</strong>, the team might find that they need to rely on some help from the language itself to remember where things are and how they should be.</p>
<p><strong>As the team grows</strong>, they might find they need more rules and restrictions to keep the style consistent and prevent duplicate code.</p>
<h3 id="frameworks">Frameworks</h3>
<h4 id="react-angular">React &amp; Angular</h4>
<p>Much of what draws me and other developers to React is the ability to write code however you want and in an elegant/clever way.</p>
<p>It’s true that React makes you a better JavaScript developer because it forces you to approach problems differently, it forces you to be aware of how <strong>this binding </strong>in JavaScript works and enables you to compose large components out of small ones.</p>
<p>React also allows you to have a bit of your own style. And because of the number of ways I can implement any given task, I will most often write vanilla React.js apps when:</p>
<ul>
<li>the codebase is small</li>
<li>it’s just me coding it</li>
</ul>
<p>And I will compile it with TypeScript when:</p>
<ul>
<li>more than 3 people are coding it, or</li>
<li>the codebase is expected to be very large</li>
</ul>
<p>I will also optionally use Angular for the same reason I will compile React with TypeScript.</p>
<h3 id="conclusion">Conclusion</h3>
<p>In conclusion, these are my personal opinions on when TypeScript is absolutely necessary and I welcome you to disagree with any of it.</p>
<p>This is what has worked for me in the past when deciding whether or not to use TypeScript. However, today, since I’ve seen the light, it’s not much more effort for me to use TypeScript over vanilla JavaScript as I’m equally comfortable with both and would prefer the type safety.</p>
<p>My final points here are:</p>
<h4 id="you-can-always-gradually-start-using-typescript">You can always gradually start using TypeScript</h4>
<p>Start gradually by adding TypeScript and ts-node to your package.json and utilizing the <strong>allowjs: true</strong>, option in your tsconfig file.</p>
<p>This is how I migrated all of my Node.js apps over time to TypeScript.</p>
<h4 id="compile-time-errors-are-better-than-runtime-ones">Compile time errors are better than runtime ones</h4>
<p>You can’t argue with that. If catching bugs in production code is especially important to you, TypeScript will help you minimize a lot of these.</p>
<h4 id="if-you-are-in-a-position-to-learn-it-learn-it-it-does-wonders-for-your-software-design-skills">If you are in a position to learn it, learn it. It does wonders for your software design skills</h4>
<p>Depending on where you are in your life and your career, you might not have the time to learn it. If you do have the time, I’d recommend you start learning it and start learning about<strong> SOLID design principles</strong> and <strong>software design patterns</strong>. This is the <strong>fastest way to level up as a Junior Developer</strong> in my honest opinion.</p>
<p>I hope this article was useful to you! Are you considering using TypeScript on your next project? Let me know if you agree/disagree in the comments.</p>
<h4 id="learn-enterprise-typescript-javascript"><a href="https://khalilstemler.com" rel="noopener">Learn Enterprise TypeScript &amp; JavaScript</a></h4>
<p>Essential software development patterns, principles, and tutorials with modern JavaScript and TypeScript.</p>
<blockquote>Originally published <a href="http://khalilstemmler.com" rel="noopener">April 6th</a> @ <a href="https://khalilstemmler.com" rel="noopener"><strong>khalilstemmler.com</strong></a><strong>.</strong></blockquote>
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
