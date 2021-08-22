---
card: "https://cdn-media-1.freecodecamp.org/images/1*LpbDW-kW6Jh85WFAFEKwlQ.jpeg"
tags: [JavaScript]
description: "In this post, I will walk through the process of adding Cypre"
author: "Milad E. Fahmy"
title: "How to add end to end tests to your project with Cypress"
created: "2021-08-16T11:34:54+02:00"
modified: "2021-08-16T11:34:54+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development tag-software-development tag-software-testing tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to add end to end tests to your project with Cypress</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*LpbDW-kW6Jh85WFAFEKwlQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*LpbDW-kW6Jh85WFAFEKwlQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*LpbDW-kW6Jh85WFAFEKwlQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*LpbDW-kW6Jh85WFAFEKwlQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*LpbDW-kW6Jh85WFAFEKwlQ.jpeg" alt="How to add end to end tests to your project with Cypress">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
if (err) {
return console.log(err);
}
if (isInteractive) {
clearConsole();
}
console.log(chalk.cyan('Starting the development server...\n'));
return cypress
.run({
spec: './cypress/integration/ydkjs/*.js',
})
.then(results =&gt; {
devServer.close();
});
});</code></pre><p>It does just what we said it would do. It starts the dev server, runs all the test files in <code>cypress/integration/ydkjs</code>, and then it stops the dev server.</p><p>Now in <code>cypress.json</code> we can add our <code>baseUrl</code>:</p><pre><code class="language-js">{
"baseUrl": "http://localhost:3000"
}</code></pre><p>Now we can write our first test! Let’s call it <code>cypress/integration/ydkjs/sidebar.js</code>, and we will use it to test sidebar functionality. For now, let’s just write a dummy test:</p><pre><code class="language-js">/* globals context cy */
/// &lt;reference types="Cypress" /&gt;
context('Sidebar', () =&gt; {
beforeEach(() =&gt; {
cy.visit('/');
});
it('does something', () =&gt; {
cy.contains('YDKJS Exercises');
});
});</code></pre><p>All we are doing here is visiting the base url and finding an element that contains “YDKJS Exercises”. Note that I only added the comment on the first line so that <code>eslint</code> doesn’t complain about undefined Cypress variables.</p><p>I also added a new script in my <code>package.json</code> :</p><pre><code class="language-js">"scripts": {
...
"cypress": "node scripts/cypress.js",
...
},</code></pre><p>So now I can call <code>npm run cypress</code> when I want to run my end to end Cypress tests. Now, when I execute that command in the terminal, I see that my server starts, the test runs and passes, and then the server stops. Woohoo!</p><p><a href="https://github.com/austintackaberry/ydkjs-exercises/tree/cypress-2" rel="noopener">Here is the code up to this point.</a></p><h3 id="let-s-write-some-real-tests-">Let’s write some real tests!</h3><p>Now that we have our Cypress script set up to start the server, run the tests, and stop the server, we can start to write some tests!</p><p>We already created a <code>sidebar.js</code> test file, so let’s write some tests around our sidebar feature. Perhaps, our first test should be testing to make sure that the sidebar closes when we click the X button and reopens when we click the hamburger.</p><p>Before we find the X button and click it, let’s make sure that the sidebar is visible upon loading the home page. I can put this in the <code>beforeEach</code> method right after I navigate to the home page because I will always want to make sure that the sidebar is visible when I first go to the home page.</p><pre><code class="language-js">beforeEach(() =&gt; {
cy.visit('/');
cy.contains('Progress').should('exist');
});</code></pre><p>Now let’s start writing the test. Because the X is actually an SVG, we can’t easily tell Cypress to go find it. So we will find it using a <code>data-testid</code> attribute, or <code>cy.get("[data-testid=closeSidebar]").click()</code> . I know what you are thinking…</p><blockquote>Ok, I understand that you can’t use text in this case. But why use a data attribute? Why not just use a class name or an id?</blockquote><p>The best practice is to use a data attribute. You could use class names but they are subject to change and best optimized for styling.</p><p>As for ids, the main issue there is that you can only have one per page which could be annoying. What if you want to get all X buttons on the page and assert that there should be 2 of them? You can’t do that easily using ids.</p><p>Our completed test might look something like this:</p><pre><code class="language-js">it('closes when X is clicked and reopens when hamburger is clicked', () =&gt; {
cy.get('[data-testid=closeSidebar]').click();
cy.contains('Progress').should('not.exist');
cy.get('[data-testid=openSidebar]').click();
cy.contains('Progress').should('exist');
});</code></pre><p>I go to the home page, make sure the sidebar is open, then click the X button and make sure it is closed, then click the hamburger and make sure the sidebar is reopened. When we run it, it passes!</p><p>And you can see a video of the test in <code>cypress/ydkjs/sidebar.js.mp4</code>! Pretty neat. This is super helpful when your tests are failing, and you don’t know why.</p><p>One thing you need to be careful about is that Cypress is a promise-based system. When you execute <code>cy.contains('Progress').should('not.exist')</code> , Cypress will not move on to the next line of code until that line is true. If it sees a DOM element that contains ‘Progress’, it will wait until it disappears or until it times out and the test fails.</p><p>This system is nice because it makes writing these tests very quick and easy. It can bite you sometimes, though, when you are dealing with asynchronous actions. Maybe you want to make sure that a DOM element doesn’t show up as a result of clicking a button. You could just click the button and then check to see if that DOM element exists right? But what if the DOM element is created a second after clicking the button? Your test would pass when it should have failed.</p><p>Let’s write another test.</p><p>When we click on a book on the sidebar, we want to navigate to the page associated with that book.</p><pre><code class="language-js">it('navigates to /up-going when Up &amp; Going is picked', () =&gt; {
cy.contains(/Up &amp; Going \(/).click({ force: true });
cy.url().should('include', '/up-going');
cy.contains('Chapter 1: Into Programming').should('exist');
cy.contains('Chapter 2: Into JavaScript').should('exist');
});</code></pre><p>There are a couple things to note regarding this test. On the ydkjs-exercises homepage, the text “Up &amp; Going” is in two locations. Once in the sidebar and once in the middle of the page. On the sidebar, the full text is “Up &amp; Going (0/41)” which means that the user has answered 0 questions out of 41 possible. On the main page, the text is just “Up &amp; Going”. So to make sure that we click on the Up &amp; Going from the sidebar, I use regex to click the element that contains “Up &amp; Going (”. I don’t want it to include the 0 or the 41 because those numbers could change. This might be one of those cases where using a data attribute might be better than using the text like I did in the code snippet above.</p><p>I need to force the click event because the anchor tag has the text but it is wrapped by a list item element. After this, I test to make sure that the url is correct, and the content on the page is correct.</p><p><a href="https://github.com/austintackaberry/ydkjs-exercises/tree/cypress-4" rel="noopener">This is the final state of the code.</a></p><h3 id="conclusion">Conclusion</h3><p>As you can see, once you have Cypress installed, you have the proper script set up to start your dev server, and you get to writing the tests, working with Cypress is pretty quick and painless.</p><p>Once you get comfortable with it, you can even make your test code reusable by making your own custom Cypress commands!</p><p>You could run these tests pre-commit or in a CI environment to ensure that no regressions make their way into production.</p><p>Overall, Cypress is a perfectly solid choice if you want to take your testing to the next level with some end to end tests!</p><p>Happy coding!</p>
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
