---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca02c740569d1a4ca4706.jpg"
tags: [JavaScript]
description: Growing up, I spent my spare time doing what most programmers
author: "Milad E. Fahmy"
title: "How to create a Borderlands-style skill tree in 5 minutes"
created: "2021-08-15T19:32:41+02:00"
modified: "2021-08-15T19:32:41+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-user-interface tag-react tag-typescript tag-video-games ">
<header class="post-full-header">
<h1 class="post-full-title">How to create a Borderlands-style skill tree in 5 minutes</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca02c740569d1a4ca4706.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca02c740569d1a4ca4706.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca02c740569d1a4ca4706.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca02c740569d1a4ca4706.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca02c740569d1a4ca4706.jpg" alt="How to create a Borderlands-style skill tree in 5 minutes">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Growing up, I spent my spare time doing what most programmers did: played video games every waking moment. I loved Adventure games and what a time sink they were. If time was the Mary Rose, and I was the French, my artillery were games like Kingdom Hearts, Ōkami, and Borderlands.</p>
<p>Why did I, and others, spend so much of our spare time exploring, surviving, dying, and (so, so much) grinding? Hundreds of factors contribute toward making an engaging experience, but the one I’m going to focus on is the notion of progression.</p>
<p>The idea of gamification isn’t new. Many popular applications (like <a href="https://todoist.com/?lang=en" rel="noopener">todoist</a>, or <a href="https://productivitychallengetimer.com/" rel="noopener">challenge timer</a>) have incorporated some sort of progression scheme to make us, the consumers, use their app, give them money, and hand over our personal data. So I decided to go about my way of enabling others to do just that, through beautiful skill trees! Note: I expect neither money nor data from those using my skill trees.</p>
<p>The last few weeks have seen me toil away to create what I hope to be a pleasant plug’n’play React package to help you create exciting skill trees. You can test it yourself by following the tutorial. I hope it will be a frictionless experience.</p>
<p>We hope to have something resembling the skill tree below:</p>
<figcaption>“A dying puppy. A baby in tears. If the previous statements elicited any emotional reaction report to your supervisor for summary destruction.”</figcaption>
</figure>
<h1 id="beautiful-skill-tree-0-7-5">beautiful-skill-tree@0.7.5</h1>
<p>Grab the starter repo by using <code>git clone git@github.com:andrico1234/borderlands-skill-tree.git</code></p>
<p>Move into the directory and run the starting script, <code>yarn start</code>. Give the site a whirl, you'll see nothing but the Borderlands logo and environment.</p>
<p><code>beautiful-skill-tree</code> exposes three components: the <code>SkillProvider</code>, <code>SkillTreeGroup</code>, and the <code>SkillTree</code> components.</p>
<p><code>SkillProvider</code>: This takes in no props and supplies the children with the skill tree's context. This puppy handles all of the global data related to the skill tree.</p>
<p><code>SkillTreeGroup</code>: Is more involved in that it can take an optional <code>theme</code> property, where we can pass in some custom styling, to make our skill tree feel very Borderlands. The <code>SkillTreeGroup</code> also uses the children-as-a-function pattern to give us access to some imperative api functionality, such as skill tree reset, selected skills counter, etc. We don't need to worry about any of those for the scope of this article.</p>
<p><code>SkillTree</code>: This is the most exciting of the package's exports, unless you're a sucker for typings (which are also exported, for all you TS fans). The <code>SkillTree</code> doesn't take any children but requires 3 props: <code>treeId</code>, <code>title</code>, and <code>data</code>. The <code>treeId</code> should be an id that's unique to each skill tree, but should be persistent across user sessions as this is used as the key for getting and setting the data to local storage. I'm not going to explain what the <code>title</code> prop does, I'll leave you to experiment. The <code>data</code> is the mixing pot of the application. You'll pass in your skill tree data structure which the app will use to render a <code>beautiful-skill-tree</code>. Let's get a real basic tree going before we move on to our multi-tree, multi-branch Borderlands spectacular.</p>
<p>In App.tsx, import the 3 components like so:</p>
<p><code>import { SkillProvider, SkillTreeGroup, SkillTree } from 'beautiful-skill-tree';</code></p>
<p>Place it underneath your <code>img</code> tag, outside of the image's container div, but within the outer div. Add the <code>SkillProvider</code>, passing the <code>SkillTreeGroup</code> as a child. Before you do the same with the <code>SkillTree</code>, remember that as <code>SkillTreeGroup</code> uses function-as-a-child pattern, you'll need to render a function that returns the child components. Return a single <code>SkillTree</code> and give it a <code>treeId</code> and a <code>title</code> prop. Pass an empty array into the <code>data</code> prop so your <code>App.tsx</code> looks like this:</p><pre><code class="language-js">function App() {
return (
&lt;div&gt;
// &lt;div headercontent /&gt;
&lt;SkillProvider&gt;
&lt;SkillTreeGroup&gt;
{() =&gt; {
return (
&lt;SkillTree treeId="basic-birch" title="First Skill Tree" data={[]} /&gt;
)
}}
&lt;/SkillTreeGroup&gt;
&lt;/SkillProvider&gt;
&lt;/div&gt;
);
}</code></pre>
<p>Go to <a href="http://localhost:3000/" rel="noopener">localhost:3000</a> to see the application running. You should see the logo, background, and a grey rectangle. If you’re running into any errors, go through the introduction again and check to see if there any syntax error or incorrect imports.</p>
<p>Next, let’s create a real basic tree. Just 3 items that move in a linear line. The data structure for <code>data</code> looks like this:</p><pre><code class="language-ts">type Skill = {
id: string;
icon?: string;
title: string;
tooltip: {
description : string;
},
children: Skill[];
}</code></pre>
<p>Each skill requires four properties, with one being optional. You should also notice that the <code>children</code> property is a recursive type, meaning that it takes an array of the same data structure, which it uses to render the children of the skill. This can go on infinitely, and make for some real complicated, winding trees. I'll create the first skill for you, and I'll trust you with carrying on for the next two items.</p><pre><code class="language-js">const data = [{
id: 'first-skill',
title: 'The root node',
tooltip: {
description : "The parent node, all of the descendants will be locked until it's selected",
},
children: [
// rinse and repeat; always repeat.
]}</code></pre>
<p>Add the above snippet to the <code>App.tsx</code> file, and replace the empty array inside of the <code>SkillTree</code>'s <code>data</code> property with our <code>data</code> definition. Load your page, and you should have an interactive node. Give it a hover and a click and it should be reacting to your actions. If things are working, then I'll task you with creating two (or more) child nodes. Experiment with children and sibling lengths, to see what you can come up with. (If you also happen to break my precious package, leave me a GitHub issue so I can patch things up).</p>
<p>Once you’re comfortable with creating a skill tree, let’s go ahead and create our Borderlands skill tree. Fortunately, I’ve done all of the tedious work for you and have already created the data structures and accumulated the images.</p>
<p>You’ll need to import the three trees from the <code>data</code> file, which can be done via</p>
<p><code>import { motion, harmony, cataclysm } from "./data/data";</code></p>
<p>The next step is creating two additional <code>SkillTrees</code> alongside the current one. You'll need to wrap them in a <code>React.Fragment</code> as your <code>SkillTreeGroup</code> will now be trying to render 3 top level components. Pass in the data accordingly, and if you're unsure, I've posted the code snippet below.</p><pre><code class="language-js">&lt;React.Fragment&gt;
&lt;SkillTree treeId="motion" title="Motion" data={motion} /&gt;
&lt;SkillTree treeId="harmony" title="Harmony" data={harmony} /&gt;
&lt;SkillTree treeId="cataclysm" title="Cataclysm" data={cataclysm} /&gt;
&lt;/React.Fragment&gt;</code></pre>
<p>Go ahead and check your web browser, it should be <strong><strong>aaallmoost</strong></strong> ready. We’ve got the skills rendered, but the styling feels a little lackluster. It doesn’t feel very Borderlands. Fortunately for you, I’m a regular <a href="https://www.youtube.com/watch?v=0evlWSY8kTc" rel="noopener">Neil Buchanan</a> and prepared a custom theme. Import the theme and pass it through to the <code>SkillTreeGroup</code>'s <code>theme</code> prop. The theme object is export via <code>import theme from './data/theme';</code>. Easy!</p>
<figcaption>“I HAVE ONE QUESTION FOR YOU. EXPLOSIONS?”</figcaption>
</figure>
<p>Once you’ve done the above, check out the finished product. If you’re still not satisfied with the styles, check out the theme object and customise it yourself, there are a bunch of additional attributes whose styles can be adjusted, so just peek into the typings of the package.</p>
<p>I mentioned earlier that there are a few additional properties and values that can be used to tweak the skill tree, so have a mess around yourself, and link me to any cool trees you create. I’d love to add it to the growing list of trees found <a href="https://github.com/andrico1234/beautiful-skill-tree#examples" rel="noopener">here</a>. <a href="https://calisthenicsskills.com/" rel="noopener">Here’s</a> an example of the skill tree that kickstarted this obsession.</p>
<p>I hope you’ve enjoyed tinkering with the <code>beautiful-skill-tree</code> package. I'm always adding new features and updating, so give it a star on github! You can find an online demo of the borderlands skill tree <a href="http://borderlands-skill-tree.s3-website.eu-west-2.amazonaws.com/" rel="noopener">here</a></p>
<p>You can find me on Instagram or GitHub if you want to chat code, music, or fitness!</p>
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
