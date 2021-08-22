---
card: "https://cdn-media-1.freecodecamp.org/images/1*FPTVBGFH--t0AHelBsBX2g.png"
tags: [JavaScript]
description: by Ryan Gordon
author: "Milad E. Fahmy"
title: "How to dynamically theme your Ionic application and make your users happy"
created: "2021-08-15T19:45:46+02:00"
modified: "2021-08-15T19:45:46+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-ionic tag-typescript tag-ux tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to dynamically theme your Ionic application and make your users happy</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*FPTVBGFH--t0AHelBsBX2g.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*FPTVBGFH--t0AHelBsBX2g.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*FPTVBGFH--t0AHelBsBX2g.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*FPTVBGFH--t0AHelBsBX2g.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*FPTVBGFH--t0AHelBsBX2g.png" alt="How to dynamically theme your Ionic application and make your users happy">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Ryan Gordon</p>
<h1 id="how-to-dynamically-theme-your-ionic-application-and-make-your-users-happy">How to dynamically theme your Ionic application and make your users happy</h1>
<p>Designing a sleek color scheme for your mobile application can be time consuming. Why not let the user choose their own favourite theme?</p>
<p>This is one of my favorite features in apps. It provides a great experience for users who don’t want to be tied down to one primary accent color scheme or want to personalize the theme to suit their own style.</p>
<figcaption>A great example of dynamic themes in the ToDoist app</figcaption>
</figure>
<p>In this Medium post, we will work through a project which will have a number of themes the user can select at run-time just like above. When a theme is selected by the user, ideally this change should happen in real-time rather than requiring the user to reopen the app.</p>
<h3 id="installation-and-getting-started">Installation and getting started</h3>
<p>Ionic, if you haven’t used it before, is a mobile application framework which lets you write mobile apps in HTML, CSS, and Typescript. With one shared codebase, you can develop an application for iOS or Android or you can deploy it as a web app.</p>
<p>To install Ionic, open a terminal and enter :</p>
<p><code>npm install -g ionic@latest</code></p>
<blockquote>Note: you must have <a href="https://nodejs.org/en/download/" rel="noopener">Node JS and npm</a> installed. If you get an error with code ‘EACCES,’ then you may need sudo or admin privileges.</blockquote>
<p>For this tutorial, the sidemenu template provides a good starting point. To generate a project with this template, enter this command into the terminal:</p>
<p><code>ionic start &lt;name of your app&gt; si</code>demenu</p>
<figcaption>Example terminal output from the CLI</figcaption>
</figure>
<p>After the project has generated, change into the directory with:</p>
<p><code>cd &lt;name of your a</code>pp&gt;</p>
<p>Now you have an Ionic project with a sidemenu and two pages ready to go! To see your creation, enter <code>ionic serve</code> in your terminal.</p>
<h4 id="setting-up-the-first-2-themes-todoist-red-vs-noir">Setting up the first 2 themes: Todoist Red vs Noir</h4>
<p>In order to set up the first two themes, we’ll need to complete a number of steps. Pretty much all of these steps need to be followed in order to get the themes working.</p>
<p>First, we need to denote an SCSS file which will be used when the theme is applied. In the <code>src/theme</code> directory of your project, you’ll find a <code>variables.scss</code> . The respective theme files are located here, too. Create a new file called:</p><pre><code>red.theme.scss</code></pre>
<p>This file will be used to apply the first theme. From this file, any of the default Ionic styling can be overridden. There are two options for how we can apply the themes:</p>
<p>Option 1: Styling just the navbar and certain elements</p>
<p>Option 2: Applying the theme to all background content</p>
<p>Here is an example of both options applied. The code has a checkpoint halfway down. If you don’t want to style the whole app, comment out the rest of the code below it:</p>
<p>That’s the first SCSS file created! Next will be for dark mode. Create another new file called:</p><pre><code>noir.theme.scss</code></pre>
<p>This file will be used to apply the second theme. We won’t need to change much for the second theme to work other than changing the hexcode values to a colour such as <code>#33333</code> .</p>
<p>It’s important to note, though, that <strong>we will need to rename</strong> <strong>the SCSS class from <code>theme-red</code> to something unique</strong> for this theme. I’ll call mine <code>theme-noir</code> .</p>
<p>The next step is to import the SCSS files into the app itself. This is important, otherwise the theme won’t be loaded into the app. Head to the <code>app.scss</code> file located at <code>src/app/app.scss</code> where you can import the theme like so:</p><pre><code>@import '../theme/red.theme';@import '../theme/noir.theme';</code></pre>
<p>Now that we’ve created and imported the theme files into the project, the SCSS side of things is taken care of! Now onto the Typescript and HTML.</p>
<h3 id="programmatically-changing-the-theme">Programmatically changing the theme</h3>
<p>Changing the theme itself will only require three more steps for a simple setup:</p>
<ul>
<li>a wrapper around the app</li>
<li>a function to change the theme at run-time</li>
<li>something to hold the state of the current theme</li>
</ul>
<h4 id="the-appstate-class">The AppState class</h4>
<p>The AppState class will be an injectable Angular component that holds what the current theme, and that can also be used to update the theme.</p>
<p>There isn’t much to how it works, other than that it has an internal state variable. When a Get operation is called, a clone of the state is returned. When a Set happens, a property of the state is updated with a new value, in this case the theme.</p>
<p>The AppState will hold the current theme and allow modification, but it will need to be imported into the component you want to use it with.</p>
<p>When an Ionic app is first setup using the CLI, you’ll find the following code in the <code>app.component.ts</code> :</p><pre><code>// used for an example of ngFor and navigation</code></pre><pre><code>this.pages = [</code></pre><pre><code>{ title: 'Default Red Theme', component: HomePage },</code></pre><pre><code>{ title: 'List', component: ListPage }</code></pre><pre><code>];</code></pre>
<p>The array that’s displayed is used to provide content for the sidemenu. This sidemenu will serve as our theme switcher in this project rather than a navigation menu.</p>
<p>Change the values in <strong>this.pages</strong> to reflect the names of the themes you want the user to see (like the theme file that will be applied, and any other assets like images files).</p>
<p>In this example, the ‘theme file’ is going to be the name of the CSS class that we want to use. We’ve already imported the SCSS files by the time the app is running. So rather than accessing the file itself, we access the root class in that file. In the case of the red theme, the ‘theme-noir’ class will be applied.</p>
<h4 id="displaying-available-themes-and-applying-the-wrapper">Displaying available themes and applying the wrapper</h4>
<p>The last step we need to take will be to add a wrapper div. This will be the top level element in the <code>app.html</code> file. This wrapper will have the chosen theme applied to it, allowing children elements to receive style updates also. An example of this in <code>app.html</code> would look like this:</p><pre><code>&lt;!-- Wrapper over the app which will use the theming--&gt;</code></pre><pre><code>&lt;div class="{{global.state['theme']}}"&gt;</code></pre><pre><code>    //in here you will have the rest of app.html </code></pre><pre><code>&lt;/div&gt;</code></pre>
<p>In terms of display, if you followed above and renamed the <code>this.pages</code> array to <code>this.themes</code> so it holds your available themes, then you don’t need to change anything else to display!</p>
<p>The sidemenu originally was used to push to available pages in the app, but now it’s a great theme switcher. The names of each available theme are displayed using NgFor and some databinding with the <code>this.themes</code> array. The result will be a very simple list which will have the name of the theme for each entry. When an entry is clicked, that theme will be applied.</p>
<p>On the <a href="https://github.com/Ryan-Gordon/ionic-dynamic-themes" rel="noopener">Github repo</a> you can find a better example with a color indicator next to each entry.</p>
<h3 id="recap">Recap</h3>
<p>Okay time for a quick review of what we have done here. So far we have implemented the following changes to get the theming working:</p>
<ul>
<li>Created theme SCSS files for each desired theme</li>
<li>Imported the created theme files in the main Sass file located at <code>src/app/app.scss</code></li>
<li>Setup an AppState class to hold which theme is currently applied</li>
<li>Setup a very small changeTheme function which will set a new theme into AppState</li>
<li>Added a wrapper element over the <code>app.html</code> which will have the theme applied to it</li>
</ul>
<p>To create more themes from here, copy one of the theme files you already created, rename it, and change the hex colour values in this new file. You can make as many as you want! Just make sure that you also import this new theme file in <code>app.scss</code> like you did with the first ones, otherwise it won’t work.</p>
<p>With these five steps you can have dynamic theming in any Ionic application. The beauty of the solution is that it works well on all platforms since it uses no native plugins — everything is in HTML,CSS and TS.</p>
<p>As a bonus, on the <a href="https://github.com/Ryan-Gordon/ionic-dynamic-themes" rel="noopener">GitHub repo</a>, I have implemented two other ways to present the available themes.</p>
<figcaption>Option 2 on the left and a model option on the right</figcaption>
</figure>
<h3 id="conclusion-">Conclusion:</h3>
<p>Dynamic theming saves us from worrying whether our chosen colour scheme will suit all audiences. Instead of doing numerous mockups with different schemes to evaluate, we can simply implement all of the colour schemes and let the user choose which one they prefer at runtime.</p>
<p>A hidden benefit of this is that we can collect analytics from our users on which theme suits them best. In the <code>changeTheme</code> function discussed, a webhook or some event could be sent specifying the user’s choice. Through this, developers could gather real user feedback on which themes ‘work’ and which don’t.</p>
<p>All the source code for this tutorial can be found in this <a href="https://github.com/Ryan-Gordon/ionic-dynamic-themes" rel="noopener">Github repo</a>.</p>
<figcaption>One last look</figcaption>
</figure>
<p>Please consider leaving a star on the repo. I welcome any and all additions.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
