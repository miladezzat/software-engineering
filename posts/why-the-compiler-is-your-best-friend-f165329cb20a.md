---
card: "https://cdn-media-1.freecodecamp.org/images/1*C9CScad4P6wtLj8H_3AhqA.jpeg"
tags: [Technology]
description: "Between projects I spent time researching the root causes of "
author: "Milad E. Fahmy"
title: "Why the compiler is your best friend"
created: "2021-08-16T11:32:37+02:00"
modified: "2021-08-16T11:32:37+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-technology tag-software-engineering tag-software-development tag-game-development tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Why the compiler is your best friend</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*C9CScad4P6wtLj8H_3AhqA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*C9CScad4P6wtLj8H_3AhqA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*C9CScad4P6wtLj8H_3AhqA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*C9CScad4P6wtLj8H_3AhqA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*C9CScad4P6wtLj8H_3AhqA.jpeg" alt="Why the compiler is your best friend">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Between projects I spent time researching the root causes of high-cost bugs in large game teams. The findings lead us to question basic C++ language features and patterns. This post covers obfuscation issues from a technical leadership POV. The background research to these ideas is covered in <a href="https://medium.freecodecamp.org/how-to-write-fewer-bugs-tips-for-game-developers-82e3d742f6f7" rel="noopener">“How to write fewer bugs”</a>.</p><h3 id="coding-tenets">Coding Tenets</h3><p>What do your team’s Coding Standards look like? Maybe they are based on a common or open standard? Maybe they define camelCase variable names for readability? Maybe they define source code doxy-mentation formatting for maintenance? Maybe none of this matters? Do they actually help? Do you have fewer bugs or less misunderstanding? Your coding standards might tick all of your OCD coding boxes but do they actually help the team function in a demonstrably better way?</p><p>When I wrote the coding standard for Onrush we had a clean sheet. No prior code to worry about. The standard did not include anything about where our brackets should be. Nothing about camelCase or underscore naming conventions. Nothing about documentation formatting. In fact, we didn’t even call it a coding standard. We sat down and we discuss what we really cared about in our code. We wanted higher quality. For us and our games, this meant more time on iteration, less time on rectification. Higher performance and lower bug count.</p><blockquote>We wrote our <strong>Coding Tenets</strong>.<em> The coding principals we care most deeply about.</em></blockquote><p>The Coding Tenets contained statements like: Compile times and link times are a function of code quality. Write assertive code and not defensive code. Overloading is obfuscation. Name functions and classes so that high-level code reads like pseudocode. Given readable code documentation is largely useless. Document concepts, ideas and reasoning, do not document the code. The compiler is a tool for validating assumptions.</p><p>We allowed people to have their own coding style as long as it didn’t contradict any of the Coding Tenets. This resulted in a code base that was highly uniform in functional approach and flexible in styling. This flexible styling didn’t matter. It didn’t affect readability or understanding because the core tenets underpinned everything.</p><p>If you haven’t tried, stop writing Physics::Simulation.Update(dt) and start writing updateThePhysicsSimulationForThisTimeStep(dt). When I started writing descriptive function names I started thinking about the data and the transformations being applied. The former is obtusely object oriented. The latter is choosing a function name which describes operations and data names which describe information. Aim for high-level code which clearly describes the functional operations. That clearly shows the data dependencies. Aim for high-level code which does not need documentation.</p><h3 id="the-compiler-is-a-tool-for-verifying-assumptions">The compiler is a tool for verifying assumptions</h3><p><em>When coding C++ the compiler is my best friend. She scrutinises every line of code. She encodes my thoughts into executable code. She shows me my assumptions and misunderstandings. She lays out my human shortcomings. But, the compiler is not a mind reader. She does not possess psychic powers. Only unwavering diligence to produce correct code.</em></p><p>The compiler applies the strict rules of the C++ language to verify the correctness of my code. Although in this respect the C++ language is not exact. C++ has many ways to be inexact. Many ways to ask the compiler to make assumptions. If I have learnt one thing over the years it is this: making assumptions will always get you into trouble.</p><p>As C++ continues to grow and bloat to the size of a dwarf star, it easy to overlook the fundamentals. Are these basic programming concepts working for or against your team? The examples and comments below are specifically about C++ but apply to many modern languages.</p><h3 id="the-true-cost-of-polymorphism">The &lt;true&gt; cost of Polymorphism</h3><p>So let’s start at the beginning with polymorphism. Introduced in 1983 when ‘C with classes’ was renamed to C++. Polymorphism allows many function or methods to have the same name. The compiler will select the correct function using the types of the parameters. There is however a fundamental issue here. When is it ever good to have different things with the same name?</p><p>Consider this typical C++ 101 example where we have variants of a FileWrite function or method.</p><pre><code class="language-h">// Simple polymorphic file write functions for int, short and char
bool FileWrite(int i);
bool FileWrite(short f);
bool FileWrite(char c);</code></pre><p>This seems convenient. I just call FileWrite with any type and the compiler will sort it out. The compiler has perfect knowledge of the code and will pick the functions needed to compile without errors. The process is deterministic and foolproof.</p><p>Unfortunately not. The compiler may have perfect knowledge of the code, but the compiler has zero knowledge of intent. I am telling the compiler to assume the code I type correctly implements my intent. Now I know for a fact that I am not always correct, 20 years of programming has taught me this. With this convenience, I have lost an important opportunity for the compiler to find errors in my code and this will eventually lead to a difficult to find runtime error.</p><p>As a Technical Director or Technical Lead, my primary concern is getting the programming team to work efficiently together. The larger the team the harder a problem this becomes. Here is a typical development situation using the simple code above.</p><pre><code class="language-h">// Simple example structure with three int members.
struct Brain
{
int humor;
int intelligence;
int empathy;
}</code></pre><p>ai_brain.cpp:</p><pre><code class="language-h">
// Example usecase using polymorphic file functions
void SaveGame(Brain&amp; brain)
{
FileWrite(brain.humor);
FileWrite(brain.intelligence);
FileWrite(brain.empathy);
}
void LoadGame(Brain&amp; brain)
{
FileRead(brain.humor);
FileRead(brain.intelligence);
FileRead(brain.empathy);
}</code></pre><p></p><p>Ok still C++ 101. In the programming team, Tom is working on the AI and Jerry is working on the Save Game. Everyone on the team is busy working for the next milestone build. Suddenly the game is crashing during the Loading Phase and the team a blocked. The milestone is looming and everyone looks at Jerry to fix the crash.</p><p>The problem is Jerry has not submitted code today. Jerry starts to investigate the problem. Source control shows that no changes have been made to the Save Game module files today. The debugger shows the crash in the Pickup code. Another search of the SCM shows no changes in the Pickup module today. The input file stream for the saved game data appears to be corrupt. Jerry sighs and takes a sip of coffee and continues to investigate.</p><p>After some time the Jerry finds the change which caused the problems in the AI code and goes to talk to Tom.</p><pre><code class="language-h">// Breaking changes causing **action at a distance**
struct Brain
{
&lt;&lt; old
int humor;
int intelligence;
int empathy;
&gt;&gt;&gt; new
short humor;
short intelligence;
short empathy;
=====
}</code></pre><p>Jerry explains to Tom that the change above caused the game to crash creating pickups! The change in the size of the members caused the input stream to become misaligned. The first code to fatal error due to bad data was the Pickup module.</p><p>It turnouts out that Tom did get a once only crash in the Loading phase. Tom deleted the save game and the errors when away. As Tom was not working anywhere near the loading code he assumed it was a pre-existing error and continued to work. Tom fully tested his code before submitting and all test passed.</p><h3 id="how-could-this-situation-have-been-avoided"><strong>How could this situation have been avoided?</strong></h3><blockquote>Polymorphism enables “Action At A Distance” in code.</blockquote><p>In the simple example above the compiler started generating different executable code in the LoadGame and SaveGame functions. The code in the LoadGame and SaveGame functions has not changed. None of the code in the Save Game module has changed. The code change in the AI module caused the code in the LoadGame function to mean something different. Then the compiler silently compiled the new LoadGame and SaveGame code without error. The code is technically correct but no longer satisfies the original intent.</p><p><strong>Consider this alternative.</strong></p><pre><code class="language-h">// Strong naming and type safe file write functions
bool FileWriteInt(int i);
bool FileWriteShort(float s);
bool FileWriteChar(char c);</code></pre><pre><code class="language-h">// Example usecase using strong name and typesafe functions
void SaveGame(Brain&amp; brain)
{
FileWriteInt(brain.humor);
FileWriteInt(brain.intelligence);
FileWriteInt(brain.empathy);
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
