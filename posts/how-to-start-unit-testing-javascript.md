---
card: "/images/default.jpg"
tags: [Unit Testing]
description: We all know we should write unit tests. But, it's hard to kno
author: "Milad E. Fahmy"
title: "How to Start Unit Testing Your JavaScript Code"
created: "2021-08-15T19:30:20+02:00"
modified: "2021-08-15T19:30:20+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-unit-testing tag-software-testing tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Start Unit Testing Your JavaScript Code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/03/ferenc-almasi-EWLHA4T-mso-unsplash-1.jpg 300w,
/news/content/images/size/w600/2020/03/ferenc-almasi-EWLHA4T-mso-unsplash-1.jpg 600w,
/news/content/images/size/w1000/2020/03/ferenc-almasi-EWLHA4T-mso-unsplash-1.jpg 1000w,
/news/content/images/size/w2000/2020/03/ferenc-almasi-EWLHA4T-mso-unsplash-1.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/03/ferenc-almasi-EWLHA4T-mso-unsplash-1.jpg" alt="How to Start Unit Testing Your JavaScript Code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>We all know we should write unit tests. But, it's hard to know where to start and how much time to devote to tests compared to actual implementation. So, where to start? And is it just about testing code or do unit tests have other benefits?</p>
<p>In this article, I will explain the different types of tests, and which benefits unit testing brings to development teams. I'll showcase Jest - a JavaScript testing framework.</p>
<h2 id="different-types-of-testing">Different types of testing</h2>
<p>Before we dive into unit testing specifics, I want to do a quick run through of the different types of tests. There is often some confusion around them and I'm not surprised. Sometimes the line between them is quite thin.</p>
<h3 id="unit-tests">Unit tests</h3>
<p>Unit tests only test a single part of your implementation. A unit. No dependencies or integrations, no framework specifics. They're like a method that returns a link in a specific language:</p>
switch (language.toLowerCase()){
case englishCode.toLowerCase():
return '/about-us';
case spanishCode.toLowerCase():
return '/acerca-de';
}
return '';
}</code></pre>
<h3 id="integration-tests">Integration tests</h3>
<p>At some point, your code communicates with a database, file system or another third party. It could even be another module in your app. </p>
<p>That piece of implementation should be tested by integration tests. They typically have a more complicated setup that involves preparing testing environments, initializing dependencies, and so on. <br></p>
<h3 id="functional-tests">Functional tests</h3>
<p>Unit tests and integration tests give you confidence that your app works. Functional tests look at the app from the user's point of view and test that the system works as expected.</p>
<p>In the diagram above, you see that unit tests form the large base of your application's testing suite. Typically, they are small, there are a lot of them, and they are executed automatically.</p>
<p>So now let's get into unit tests in a bit more detail.</p>
<h2 id="why-should-i-bother-writing-unit-tests">Why Should I Bother Writing Unit Tests?</h2>
<p>Whenever I ask developers whether they wrote tests for their application, they always tell me: "I did not have time for them" or "I don't need them, I know it works."</p>
<p>So I smile politely and tell them what I want to tell you. Unit tests are not only about testing. They help you in other ways, too, so you can:</p>
<p><strong>Be confident that your code works. </strong>When was the last time you committed a code change, your build failed, and half of your app stopped working? Mine was last week. </p>
<p>But that's still OK. The real problem is when the build succeeds, the change is deployed, and your app starts being unstable. </p>
<p>When that happens, you start losing confidence in your code and eventually just pray for the app to work. Unit tests will help you discover issues much sooner and gain confidence.<br></p>
<p><strong>Make better architectural decisions. </strong>Code changes, but some decisions about platform, modules, structure, and others need to be made during the early stages of a project. </p>
<p>When you start thinking about unit testing right at the start, it will help you structure your code better and achieve proper separation of concerns. You won't be tempted to assign multiple responsibilities to single code blocks as those would be a nightmare to unit-test.<br></p>
<p><strong>Pinpoint functionality before coding. </strong>You write the method's signature and start implementing it right away. Oh, but what should happen in case a parameter is null? What if its value is outside of the expected range or contains too many characters? Do you throw an exception or return null? </p>
<p>Unit tests will help you discover all these cases. Look at the questions again and you'll find it's exactly what defines your unit test cases.</p>
<p>I'm sure there are many more benefits to writing unit tests. These are just the ones that I recall from my experience. Those that I learned the hard way.</p>
<h2 id="how-to-write-your-first-javascript-unit-test">How to Write Your First JavaScript Unit Test</h2>
<p>But let's get back to JavaScript. We will start with <a href="https://jestjs.io/">Jest</a>, which is a JavaScript testing framework. It's a tool that enables automatic unit testing, provides code coverage, and lets us easily mock objects. Jest also has an extension for Visual Studio Code <a href="https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest">available here</a>. </p>
<p>There are also other frameworks, if you're interested, you can check them in <a href="https://www.browserstack.com/guide/top-javascript-testing-frameworks">this article</a>.</p>
</code></pre>
<p>Let's use the previously mentioned method <code>getAboutUsLink</code> as an implementation we want to test:</p>
const spanishCode = "es-ES";
function getAboutUsLink(language){
switch (language.toLowerCase()){
case englishCode.toLowerCase():
return '/about-us';
case spanishCode.toLowerCase():
return '/acerca-de';
}
return '';
}
module.exports = getAboutUsLink;
</code></pre>
<p>I put this into the <code>index.js</code> file. We can write tests in the same file, but a good practice is to separate unit tests into a dedicated file. </p>
<p>The common naming patterns include <code>{filename}.test.js</code> and <code>{filename}.spec.js</code>. I used the first, <code>index.test.js</code>:</p>
test("Returns about-us for english language", () =&gt; {
expect(getAboutUsLink("en-US")).toBe("/about-us");
});
</code></pre>
<p>First, we need to import the function we want to test. Every test is defined as an invocation of the <code>test</code> function. The first parameter is the name of the test for your reference. The other is an arrow function where we call the function we want to test and specify which result we expect. I</p>
<p>n this case, we call <code>getAboutUsLink</code> function with <code>en-US</code> as the language parameter. We expect the result to be <code>/about-us</code>.</p>
<p>Now we can install the Jest CLI globally and run the test:</p>
jest
</code></pre>
<p>If you see a configuration-related error, make sure you have your <code>package.json</code> file present. In case you don't, generate one using <code>npm init</code>.</p>
<p>You should see something like this:</p>
√ Returns about-us for english language (4ms)
console.log index.js:15
/about-us
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.389s
</code></pre>
<p>Great job! This was the first simple JavaScript unit test from start to end. If you installed the Visual Studio Code extension, it will run tests automatically once you save a file. Let's try it by extending the test with this line:</p>
</code></pre>
<p>Once you save the file, Jest will inform you that the test failed. That helps you discover potential issues even before committing your changes.</p>
<h2 id="testing-advanced-functionality-and-mocking-services">Testing Advanced Functionality and Mocking Services</h2>
<p>In real life, the language codes for the getAboutUsLink method would not be constants in the same file. Their value is typically used throughout the project so they would be defined in their own module and imported into all functions that use them.</p>
</code></pre>
<p>You can import these constants into the test the same way. But the situation will get more complicated if you're working with objects instead of simple constants. Take a look at this method:</p>
function getUserDisplayName(){
const user = UserStore.getUser(userId);
return `${user.LastName}, ${user.FirstName}`;
}
</code></pre>
<p>This method uses imported <code>UserStore</code>:</p>
getUser(userId){
// logic to get data from a database
}
setUser(user){
// logic to store data in a database
}
}
let UserStore = new User();
export { UserStore }
</code></pre>
<p>In order to properly unit test this method, we need to mock <code>UserStore</code>. A mock is a substitute for the original object. It allows us to separate dependencies and real data from the tested method's implementation just like dummies help with crash tests of cars instead of real people. </p>
<p>If we didn't use the mock, we'd be testing both this function and the store. That would be an integration test and we would likely need to mock the used database.</p>
<h3 id="mocking-a-service">Mocking a Service</h3>
<p>To mock objects, you can either provide a mocking function or a manual mock. I will focus on the latter as I have a plain and simple use-case. But feel free to <a href="https://jestjs.io/docs/en/mock-functions.html">check out other mocking possibilities Jest provides</a>.</p>
&nbsp;&nbsp;&nbsp;&nbsp;UserStore:&nbsp;({
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;getUser:&nbsp;jest.fn().mockImplementation(arg&nbsp;=&gt;&nbsp;({
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FirstName:&nbsp;'Ondrej',
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LastName:&nbsp;'Polesny'
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})),
setUser: jest.fn()
&nbsp;&nbsp;&nbsp;&nbsp;})
}));
</code></pre>
<p>First, we need to specify what are we mocking - the <code>./UserStore</code> module. Next, we need to return the mock that contains all exported objects from that module. </p>
<p>In this sample, it's only the <code>User</code> object named <code>UserStore</code> with the function <code>getUser</code>. But with real implementations, the mock may be much longer. Any functions you don't really care about in the scope of unit testing can be easily mocked with <code>jest.fn()</code>.</p>
<p>The unit test for the <code>getUserDisplayName</code> function is similar to the one we created before:</p>
&nbsp;&nbsp;&nbsp;&nbsp;expect(getUserDisplayName(1)).toBe("Polesny,&nbsp;Ondrej");
})
</code></pre>
<p>As soon as I save the file, Jest tells me I have 2 passing tests. If you're executing tests manually, do so now and make sure you see the same result.</p>
<h3 id="code-coverage-report">Code Coverage Report</h3>
<p>Now that we know how to test JavaScript code, it's good to cover as much code as possible with tests. And that is hard to do. In the end, we're just people. We want to get our tasks done and unit tests usually yield an unwanted workload that we tend to overlook. Code coverage is a tool that helps us fight that.</p>
<p>Code coverage will tell you how big a portion of your code is covered by unit tests. Take for example my first unit test checking the <code>getAboutUsLink</code> function:</p>
&nbsp;&nbsp;&nbsp;expect(getAboutUsLink("en-US")).toBe("/about-us");
});
</code></pre>
<p>It checks the English link, but the Spanish version stays untested. The code coverage is 50%. The other unit test is checking the <code>getDisplayName</code> function thoroughly and its code coverage is 100%. Together, the total code coverage is 67%. We had 3 use cases to test, but our tests only cover 2 of them.</p>
<p>To see the code coverage report, type the following command into the terminal:</p>
</code></pre>
<p>Or, if you're using Visual Studio Code with the Jest extension, you can run the command (CTRL+SHIFT+P) <em>Jest: Toggle Coverage Overlay</em>. It will show you right in the implementation which lines of code are not covered with tests.</p>
<p>By running the coverage check, Jest will also create an HTML report. Find it in your project folder under <code>coverage/lcov-report/index.html</code>.</p>
<p>Now, I don't have to mention that you should strive for 100% code coverage, right? :-)</p>
<h2 id="summary">Summary</h2>
<p>In this article, I showed you how to start with unit testing in JavaScript. While it's nice to have your code coverage shine at 100% in the report, in reality, it's not always possible to (meaningfully) get there. The goal is to let unit tests help you maintain your code and ensure it always works as intended. They enable you to:</p>
<ul>
<li>clearly define implementation requirements,</li>
<li>better design your code and separate concerns,</li>
<li>discover issues you may introduce with your newer commits,</li>
<li>and give you confidence that your code works.</li>
</ul>
<p>The best place to start is the <a href="https://jestjs.io/docs/en/getting-started">Getting started</a> page in the Jest documentation so you can try out these practices for yourself.</p>
<p>Do you have your own experience with testing code? I'd love to hear it, let me know on <a href="https://twitter.com/ondrabus">Twitter</a> or join one of my <a href="https://twitch.tv/ondrabus">Twitch streams</a>.</p>
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
