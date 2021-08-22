---
card: "https://cdn-media-1.freecodecamp.org/images/1*jwBhYQ_c_HZ_OOCE4pwbwQ.jpeg"
tags: [JavaScript]
description: by Illia Kolodiazhnyi
author: "Milad E. Fahmy"
title: "How to build complex user interfaces without going completely insane"
created: "2021-08-15T19:52:19+02:00"
modified: "2021-08-15T19:52:19+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-ui tag-tech tag-front-end-development tag-react ">
<header class="post-full-header">
<h1 class="post-full-title">How to build complex user interfaces without going completely insane</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*jwBhYQ_c_HZ_OOCE4pwbwQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*jwBhYQ_c_HZ_OOCE4pwbwQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*jwBhYQ_c_HZ_OOCE4pwbwQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*jwBhYQ_c_HZ_OOCE4pwbwQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*jwBhYQ_c_HZ_OOCE4pwbwQ.jpeg" alt="How to build complex user interfaces without going completely insane">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Illia Kolodiazhnyi</p>
<h1 id="how-to-build-complex-user-interfaces-without-going-completely-insane">How to build complex user interfaces without going completely insane</h1>
<p>I recently built a web application with a complex, dynamic User Interface (UI). Along the way, I learned several valuable lessons.</p>
<p>Here are a few tips I wish someone had told me before I embarked on such an ambitious project. These would have saved me so much time and sanity.</p>
<h3 id="sanity-tip-1-use-a-component-s-internal-state-for-storing-temporary-data">Sanity Tip #1: Use a component’s internal state for storing temporary data</h3>
<p>A complex UI usually requires you to maintain some sort of application state. This tells the UI what to display and how to display it. One option is to access that state as soon as the user triggers an action on the page. However, I’ve learned there are situations where it’s beneficial to postpone the change in the application state and save this change temporarily in the current component’s internal state.</p>
<p>An example to illustrate this is a dialog window for the user to edit some record, such as his or her name:</p>
<p>In this case, you might want to trigger a change every time the user edits a field in this dialog window. But I encourage you to maintain an internal state of this dialog with all the data displayed. Wait until the user presses the Save button. At this point, you can safely change the application state that holds the data of those records.</p>
<blockquote>Your UI behavior should match the user’s mental model</blockquote>
<p>When users work with a dialog box, they won’t consider the record completed until they finish editing it. The component’s functionality should work exactly like this.</p>
<p><em>Note to those working with React/Redux: </em>this behavior is achievable if you keep the general data in the Redux Store and use React Component state to store temporary pieces of data.</p>
<h3 id="sanity-tip-2-separate-model-data-from-ui-state">Sanity Tip #2: Separate model data from UI state</h3>
<p><em>I’m using the term <strong>model</strong> here referring to the classic entity from the MVC pattern.</em></p>
<p>Modern UI in web applications can be complex in structure and behavior. This generally leads you to store the purely UI-related data in your application state. I recommend that you keep UI-related data and business data separate.</p>
<blockquote>Store models with business data and logic separately from the UI state</blockquote>
<p>This approach is easier to follow and understand since it separates business logic from everything else. Your models can hold both the data as well as the methods (functions, means) to handle this data. Otherwise, your application will probably end up with business logic spread across multiple places, most likely <em>View</em> components.</p>
<p>For example, you have a list of to-do tasks in your application and you implement a page to add a new task to that list. You want the Save button to be disabled until there’s both a description explaining the task and a properly formatted date for the task:</p>
<p>The naive way would be to store the needed data somewhere in the application state and have code like <code>const saveButtonDisabled = !description &amp;&amp; !date &amp;&amp; !dateIsValid(date)</code> right in your <em>View</em> component. But the problem is that the Save button is disabled because there is a <em>business requirement</em> to have all records with descriptions and proper dates.</p>
<p>So in this case the logic for disabling the button should be put in the <em>model</em> for the to-do task. That model can look like this:</p><pre><code>{    description: 'Save Gotham',    date: 'NOW',    notes: 'Speak with deep voice',    dateIsValid: () =&gt; this.date === 'NOW',    isValid: () =&gt; this.description !== '' &amp;&amp; this.dateIsValid()}</code></pre>
<p>And now you can use this for your UI logic <code>const saveButtonDisabled = !task.isValid()</code> in the <em>View</em> component.</p>
<p>As you can see, this tip is basically about keeping your <em>Models</em> separate from <em>Views</em> in the MVC pattern.</p>
<h3 id="sanity-tip-3-prioritize-integration-testing-over-unit-testing">Sanity Tip #3: Prioritize integration testing over unit testing</h3>
<p>This is not an issue if you’re lucky enough to work in an environment where you have time to write multiple tests for every feature. But I’m sure this is not the case for most of us. Usually you have to decide which kind of testing to use. <strong>The majority of time I would consider integration testing more valuable than unit testing</strong>.</p>
<p>In my experience, I’ve learned that the codebase with good unit test coverage is generally more error-prone than the one with good integration test coverage. I noticed that the majority of bugs introduced with developing work are <a href="https://en.wikipedia.org/wiki/Software_regression" rel="noopener">regression bugs</a>. And unit tests are usually not very good in catching those.</p>
<p>When you are fixing a problem in the code, I would encourage you to follow these simple steps:</p>
<ol>
<li>Write a test that fails due to the existing problem. If it can be done with a unit test, great. Otherwise, make the test touch as many code modules as necessary.</li>
<li>Fix the problem in the codebase.</li>
<li>Verify that the test is not failing anymore.</li>
</ol>
<p>This simple practice ensures that the problem is fixed and it won’t occur again, as the test will verify it.</p>
<p>Modern web applications present many challenges to developers and UI development is one of them. I hope this article helps you to avoid mistakes or give you a good topic to think about and discuss.</p>
<p>I would highly appreciate reading your thoughts and discoveries in the comments.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
