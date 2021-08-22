---
card: "https://cdn-media-1.freecodecamp.org/images/1*UILpgckM9QDwSXuy6l1WTg.jpeg"
tags: [JavaScript]
description: I’ve been programming for five years and, honestly, I have av
author: "Milad E. Fahmy"
title: "An Introduction to Test-Driven Development"
created: "2021-08-15T19:37:28+02:00"
modified: "2021-08-15T19:37:28+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-unit-testing tag-tdd tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">An Introduction to Test-Driven Development</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*UILpgckM9QDwSXuy6l1WTg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*UILpgckM9QDwSXuy6l1WTg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*UILpgckM9QDwSXuy6l1WTg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*UILpgckM9QDwSXuy6l1WTg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*UILpgckM9QDwSXuy6l1WTg.jpeg" alt="An Introduction to Test-Driven Development">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I’ve been programming for five years and, honestly, I have avoided test-driven development. I haven’t avoided it because I didn’t think it was important. In fact, it seemed very important–but rather because I was too comfortable not doing it. That’s changed.</p>
<h3 id="what-is-testing">What is Testing?</h3>
<p>Testing is the process of ensuring a program receives the correct input and generates the correct output and intended side-effects. We define these correct inputs, outputs, and side-effects with <em>specifications</em>. You may have seen testing files with the naming convention <code>filename.spec.js</code>. The <code>spec</code> stands for specification. It is the file where we specify or <em>assert </em>what our code should do and then test it to verify it does it.</p>
<p>You have two choices when it comes to testing: manual testing and automated testing.</p>
<h4 id="manual-testing">Manual Testing</h4>
<p>Manual testing is the process of checking your application or code from the user’s perspective. Opening up the browser or program and navigating around in an attempt to test functionality and find bugs.</p>
<h4 id="automated-testing">Automated Testing</h4>
<p>Automated testing, on the other hand, is writing code that checks to see if other code works. Contrary to manual testing, the specifications remain constant from test to test. The biggest advantage is being able to test <em>many</em> things much faster.</p>
<p>It’s the combination of these two testing techniques that will flush out as many bugs and unintended side-effects as possible, and ensure your program does what you say it will. The focus of this article is on automated testing, and in particular, unit testing.</p>
<blockquote>There are two main types of automated tests: Unit and End-to-End (E2E). E2E tests test an application as a whole. Unit tests test the smallest pieces of code, or units. What is a unit? Well, we define what a unit is, but in general, it’s a relatively small piece of application functionality.</blockquote>
<h4 id="recap-">Recap:</h4>
<ol>
<li>Testing is verifying our application does what it should.</li>
<li>There are two types of tests: manual and automated</li>
<li>Tests <em>assert</em> that your program will behave a certain way. Then the test itself proves or disproves that assertion.</li>
</ol>
<h3 id="test-driven-development">Test-Driven Development</h3>
<p>Test-driven development is the act of first deciding what you want your program to do (the specifications), formulating a failing test, <em>then</em> writing the code to make that test pass. It is most often associated with automated testing. Although you could apply the principals to manual testing as well.</p>
<p>Let’s look at a simple example: Building a wooden table. Traditionally, we would make a table, then once the table is made, test it to make sure it does, well, what a table should do. TDD, on the other hand, would have us first define what the table should do. Then when it isn’t doing those things, add the minimum amount of “table” to make each unit work.</p>
<p>Here an example of TDD for building a wooden table:</p><pre><code>I expect the table to be four feet in diameter.
The test fails because I have no table.
I cut a circular piece of wood four feet in diameter.
The test passes.
__________
I expect the table to be three feet high.
The test fails because it is sitting on the ground.
I add one leg in the middle of the table.
The test passes.
__________
I expect the table to hold a 20-pound object.
The test fails because when I place the object on the edge, it makes the table fall over since there is only one leg in the middle.
I move the one leg to the outer edge of the table and add two more legs to create a tripod structure.
The test passes.</code></pre>
<p>This would continue on and on until the table is complete.</p>
<h4 id="recap">Recap</h4>
<ol>
<li>With TDD, test logic precedes application logic.</li>
</ol>
<h3 id="a-practical-example">A Practical Example</h3>
<p>Imagine we have a program that manages users and their blog posts. We need a way to keep track of the posts a user writes in our database with more precision. Right now, the user is an object with a name and email property:</p><pre><code class="language-js">user = {
name: 'John Smith',
email: 'js@somePretendEmail.com'
}</code></pre>
<p>We will track the posts a user creates in the same user object.</p><pre><code class="language-js">user = {
name: 'John Smith',
email: 'js@someFakeEmailServer.com'
posts: [Array Of Posts] // &lt;-----
}</code></pre>
<p>Each post has a title and content. Instead of storing the entire post with each user, we’d like to store something unique that could be used to reference the post. We first thought we would store the title. But, if the user ever changes the title, or if–although somewhat unlikely–two titles are exactly the same, we’d have some issues referencing that blog post. Instead, we will create a unique ID for each blog post that we will store in the <code>user</code>Object.</p><pre><code class="language-js">user = {
name: 'John Smith',
email: 'js@someFakeEmailServer.com'
posts: [Array Of Post IDs]
}</code></pre>
<h4 id="set-up-our-testing-environment">Set up our testing environment</h4>
<p>For this example, we will be using Jest. Jest is a testing suite. Often, you’ll need a testing library and a separate assertion library, but Jest is an all-in-one solution.</p>
<blockquote>An assertion library allows us to make assertions about our code. So in our wooden table example, our assertion is: “I expect the table to hold a 20-pound object.” In other words, I am asserting something about what the table should do.</blockquote>
<h4 id="project-setup">Project setup</h4>
<ol>
<li>Create an NPM project: <code>npm init</code>.</li>
<li>Create <code>id.js</code> and add it to the project’s root.</li>
<li>Install Jest: <code>npm install jest --D</code></li>
<li>Update the package.json <code>test</code> script</li>
</ol><pre><code class="language-json">// package.json
{
...other package.json stuff
"scripts": {
"test": "jest" // this will run jest with "npm run test"
}
}</code></pre>
<p>That’s it for the project setup! We aren’t going to have any HTML or any styling. We are approaching this purely from a unit-testing standpoint. And, believe it or not, we have enough to run Jest right now.</p>
<p>In the command line, run our test script: <code>npm run test</code>.</p>
<p>You should have received an error:</p><pre><code class="language-bash">No tests found
In /****/
3 files checked.
testMatch: **/__tests__/**/*.js?(x),**/?(*.)+(spec|test).js?(x) - 0 matches
testPathIgnorePatterns: /node_modules/ - 3 matches</code></pre>
<p>Jest is looking for a file name with some specific characteristics such as a <code>.spec</code> or <code>.test</code> contained within the file name.</p>
<p>Let’s update <code>id.js</code> to be <code>id.spec.js</code>.</p>
<p>Run the test again</p>
<p>You should receive another error:</p><pre><code class="language-bash">FAIL  ./id.spec.js
● Test suite failed to run
Your test suite must contain at least one test.</code></pre>
<p>A little bit better, it found the file, but not a test. That makes sense; it’s an empty file.</p>
<h4 id="how-do-we-write-a-test">How Do We Write a Test?</h4>
<p>Tests are just functions that receive a couple of arguments. We can call our test with either <code>it()</code> or <code>test()</code>.</p>
<blockquote><code>it()</code>is an alias of <code>test()</code>.</blockquote>
<p>Let’s write a very basic test just to make sure Jest is working.</p><pre><code class="language-js">// id.spec.js
test('Jest is working', () =&gt; {
expect(1).toBe(1);
});</code></pre>
<p>Run the test again.</p><pre><code class="language-bash">PASS  ./id.spec.js
✓ Jest is working (3ms)
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.254s
Ran all test suites.</code></pre>
<p>We passed our first test! Let’s analyze the test and results output.</p>
<p>We pass a title or description as the first argument.</p>
<p><code>test('Jest is Working')</code></p>
<p>The second argument we pass is a function where we actually assert something about our code. Although, in this case, we aren’t asserting something about our code, but rather something truthy in general that will pass, a sort of sanity check.</p>
<p><code>...() =&gt; { expect(1).toBe(1) </code>});</p>
<p>This assertion is mathematically true, so it’s a simple test to ensure we’ve wired up Jest correctly.</p>
<p>The results tell us whether the test passes or fails. It also tells us the number of tests and test suites.</p>
<h4 id="a-side-note-about-organizing-our-tests">A side note about organizing our tests</h4>
<p>There is another way we could organize our code. We could wrap each test in a <code>describe</code> function.</p><pre><code class="language-js">describe('First group of tests', () =&gt; {
test('Jest is working', () =&gt; {
expect(1).toBe(1);
});
});
describe('Another group of tests', () =&gt; {
// ...more tests here
});</code></pre>
<p><code>describe()</code> allows us to divide up our tests into sections:</p><pre><code class="language-bash">PASS  ./id.spec.js
First group of tests
✓ Jest is working(4ms)
✓ Some other test (1ms)
Another group of tests
✓ And another test
✓ One more test (12ms)
✓ And yes, one more test</code></pre>
<p>We won’t use <code>describe</code>, but <em>it is</em> more common than not to see a <code>describe</code> function that wraps tests. Or even a couple of <code>describes</code>–maybe one for each file we are testing. For our purposes, we will just focus on <code>test</code> and keep the files fairly simple.</p>
<h4 id="testing-based-on-specifications">Testing Based on Specifications</h4>
<p>As tempting as it is to just sit down and start typing application logic, a well-formulated plan will make development easier. We need to define what our program will do. We define these goals with specifications.</p>
<p>Our high-level specification for this project is to create a unique ID, although we should break that down into smaller units that we will test. For our small project we will use the following specifications:</p>
<ol>
<li>Create a random number</li>
<li>The number is an integer.</li>
<li>The number created is within a specified range.</li>
<li>The number is unique.</li>
</ol>
<h4 id="recap-1">Recap</h4>
<ol>
<li>Jest is a testing suite and has a built-in assertion library.</li>
<li>A test is just a function whose arguments define the test.</li>
<li>Specifications define what our code should do and are ultimately what we test.</li>
</ol>
<h3 id="specification-1-create-a-random-number">Specification 1: Create a Random Number</h3>
<p>JavaScript has a built-in function to create random numbers–<code>Math.random()</code>. Our first unit test will look to see that a random number was created and returned. What we want to do is use <code>math.random()</code> to create a number and then ensure that is the number that gets returned.</p>
<p>So you might think we would do something like the following:</p>
<p><code>expect(our-functions-output).toBe(some-expected-value)</code>. The problem with our return value being random, is we have no way to know what to expect. We need to re-assign the <code>Math.random()</code> function to some constant value. This way, when our function runs, Jest replaces <code>Math.random()</code>with something constant. This process is called <em>mocking. </em>So, what we are really testing for is that <code>Math.random()</code>gets called and returns some expected value that we can plan for.</p>
<p>Now, Jest also provides a way to prove a function is called. However, in our example, that assertion alone only assures us <code>Math.random()</code>was called somewhere in our code. It won’t tell us that the result of <code>Math.random()</code>was also the return value.</p>
<blockquote>Why would you want to mock a function? Isn’t the point to test the real code? Yes and no. Many functions contain things we cannot control, for example an HTTP request. We aren’t trying to test this code. We assume those dependencies will do what they are supposed or make pretend functions that simulate their behavior. And, in the event those are dependencies we’ve written, we will likely write separate tests for them.</blockquote>
<p>Add the following test to <code>id.spec.js</code></p><pre><code class="language-js">test('returns a random number', () =&gt; {
const mockMath = Object.create(global.Math);
mockMath.random = jest.fn(() =&gt; 0.75);
global.Math = mockMath;
const id = getNewId();
expect(id).toBe(0.75);
});</code></pre>
<h4 id="breaking-the-above-test-down">Breaking the above test down</h4>
<p>First, we copy the global Math object. Then we change the <code>random</code> method to return a constant value, something we can <em>expect</em>. Finally, we replace the global <code>Math</code> object with our mocked <code>Math</code> object.</p>
<p>We should get an ID back from a function (that we haven't created yet–remember this TDD). Then, we expect that ID to equal 0.75–our mocked return value.</p>
<blockquote>Notice I’ve chosen to use a built-in method that Jest provides for mocking functions: <code>jest.fn()</code>. We could have also passed in a anonymous function instead. However, I wanted to show you this method, since there will be times that a Jest-mocked function will be required for other functionality in our tests to work .</blockquote>
<p>Run the test: <code>npm run test</code></p><pre><code class="language-bash">FAIL  ./id.spec.js
✕ returns a random number (4ms)
● returns a random number
ReferenceError: getNewId is not defined</code></pre>
<p>Notice we get a reference error just like we should. Our test can’t find our <code>getNewId()</code>.</p>
<p>Add the following code above the test.</p><pre><code class="language-js">function getNewId() {
Math.random()
}</code></pre>
<blockquote>I am keeping the code and testing in the same file for simplicity. Normally, the test would be written in a separate file, with any dependencies imported as they are needed.</blockquote><pre><code class="language-bash">FAIL  ./id.spec.js
✕ returns a random number (4ms)
● returns a random number
expect(received).toBe(expected) // Object.is equality
Expected: 0.75
Received: undefined</code></pre>
<p>We failed again with what is called an <em>assertion error</em>. Our first error was a reference error. This second error tells us it received <code>undefined</code>. But we called <code>Math.random()</code>so what happened? Remember, functions that don’t explicitly return something will implicitly return <code>undefined</code>. This error is a good hint that something wasn’t defined such as a variable, or, like in our case, our function isn’t returning anything.</p>
<p>Update the code to the following:</p><pre><code class="language-js">function getNewId() {
return Math.random()
}</code></pre>
<p>Run the test</p><pre><code class="language-bash">PASS  ./id.spec.js
✓ returns a random number (1ms)
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total</code></pre>
<p>Congratulations! We passed our first test.</p>
<blockquote>Ideally, we want to get to our assertion errors as quickly as possible. Assertion errors–specifically <em>value assertion errors</em> like this one, although we will touch on <em>boolean assertions errors</em> in a bit–give us hints to what is wrong.</blockquote>
<h3 id="specification-2-the-number-we-return-is-an-integer-">Specification 2: The number we return is an integer.</h3>
<p><code>Math.random()</code> generates a number between 0 and 1 (not inclusive). The code we have will never generate such an integer. That’s ok though, this is TDD. We will check for an integer and then write the logic to transform our number to an integer.</p>
<p>So, how do we check if a number is an integer? We have a few options. Recall, we mocked <code>Math.random()</code> above, and we are returning a constant value. In fact, we are creating a real value as well since we are returning a number between 0 and 1 (not inclusive). If we were returning a string, for example, we couldn’t get this test to pass. Or if on the other hand, we were returning an integer for our mocked value, the test would always (falsely) pass.</p>
<p>So a key takeaway is if you going to use mocked return values, they should be realistic so our tests return meaningful information with those values.</p>
<p>Another option would be to use the <code>Number.isInteger()</code>, passing our ID as the argument and seeing if that returns true.</p>
<p>Finally, without using the mocked values, we could compare the ID we get back with its integer version.</p>
<p>Let’s look at option 2 and 3.</p>
<p><strong>Option 2: Using Number.isInteger()</strong></p><pre><code class="language-js">test('returns an integer', () =&gt; {
const id = getRandomId();
expect(Number.isInteger(id)).toBe(true);
});</code></pre>
<p>The test fails as it should.</p><pre><code class="language-bash">FAIL  ./id.spec.js
✓ returns a random number (1ms)
✕ returns an integer (3ms)
● returns an integer
expect(received).toBe(expected) // Object.is equality
Expected: true
Received: false</code></pre>
<p>The test fails with a <em>boolean assertion error</em>. Recall, there are multiple ways a test might fail. We want them to fail with assertion errors. In other words, our assertion isn’t what we say it is. But even more so, we want our test to fail with <em>value assertion errors</em>.</p>
<p>Boolean assertion errors (true/false errors) don’t give us very much information, but a value assertion error does.</p>
<p>Let’s return to our wooden table example. Now bear with me, the following two statements might seem awkward and difficult to read, but they’re here to highlight a point:</p>
<p>First, you might assert that <strong>the table is blue [to be] true</strong>. In another assertion, you might assert <strong>the table color [to be] blue</strong>. I know, these are awkward to say and might even look like identical assertions but they're not. Take a look at this:</p>
<p><code>expect(table.isBlue).toBe(true)</code></p>
<p>vs</p>
<p><code>expect(table.color).toBe(blue)</code></p>
<p>Assuming the table isn’t blue, the first examples error will tell us it expected true but received false. You have no idea what color the table is. We very well may have forgotten to paint it altogether. The second examples error, however, might tell us it expected blue but received red. The second example is much more informative. It points to the root of the problem much quicker.</p>
<p>Let’s rewrite the test, using option 2, to receive a value assertion error instead.</p><pre><code class="language-js">test('returns an integer', () =&gt; {
const id = getRandomId();
expect(id).toBe(Math.floor(id));
});</code></pre>
<p>We are saying we expect the ID we get from our function to be equal to the floor of that ID. In other words, if we are getting an integer back, then the floor of that integer is equal to the integer itself.</p><pre><code class="language-bash">FAIL  ./id.spec.js
✓ returns a random number (1ms)
✕ returns an integer (4ms)
● returns an integer
expect(received).toBe(expected) // Object.is equality
Expected: 0
Received: 0.75</code></pre>
<p>Wow, what are the chances this function just happened to return the mocked value! Well, they are 100% actually. Even though our mocked value seems to be scoped to only the first test, we are actually reassigning the global value. So no matter how nested that re-assignment takes place, we are changing the global <code>Math</code> object.</p>
<p>If we want to change something before each test, there is a better place to put it. Jest offers us a <code>beforeEach()</code> method. We pass in a function that runs any code we want to run before each of our tests. For example:</p><pre><code class="language-js">beforeEach(() =&gt; {
someVariable = someNewValue;
});
test(...)</code></pre>
<p>For our purposes, we won’t use this. But let's change our code a bit so that we reset the global <code>Math</code> object back to the default. Go back into the first test and update the code as follows:</p><pre><code class="language-js">test('returns a random number', () =&gt; {
const originalMath = Object.create(global.Math);
const mockMath = Object.create(global.Math);
mockMath.random = () =&gt; 0.75;
global.Math = mockMath;
const id = getNewId();
expect(id).toBe(0.75);
global.Math = originalMath;
});</code></pre>
<p>What we do here is save the default <code>Math</code> object before we overwrite any of it, then reassign it after our test is complete.</p>
<p>Let’s run our tests again, specifically focusing back on our second test.</p><pre><code class="language-bash">✓ returns a random number (1ms)
✕ returns an integer (3ms)
● returns an integer
expect(received).toBe(expected) // Object.is equality
Expected: 0
Received: 0.9080890805713182</code></pre>
<p>Since we’ve updated our first test to go back to the default <code>Math</code> object, we are truly getting a random number now. And just like the test before, we are expecting to receive an integer, or in other words, the floor of the number generated.</p>
<p>Update our application logic.</p><pre><code class="language-js">function getRandomId() {
return Math.floor(Math.random()); // convert to integer
}
FAIL  ./id.spec.js
✕ returns a random number (5ms)
✓ returns an integer
● returns a random number
expect(received).toBe(expected) // Object.is equality
Expected: 0.75
Received: 0</code></pre>
<p>Uh oh, our first test failed. So what happened?</p>
<p>Well, because we are mocking our return value. Our first test returns 0.75, no matter what. We expect, however, to get 0 (the floor of 0.75). Maybe it would be better to check if <code>Math.random()</code> gets called. Although, that is somewhat meaningless, because we could call <code>Math.random()</code>anywhere in our code, never use it, and the test still passes. Maybe, we should test whether our function returns a number. After all, our ID must be a number. Yet again, we are already testing if we are receiving an integer. And all integers are numbers; that test would be redundant. But there is one more test we could try.</p>
<p>When it is all said and done, we expect to get an integer back. We know we will use <code>Math.floor()</code> to do so. So maybe we can check if <code>Math.floor()</code> gets called with <code>Math.random()</code> as an argument.</p><pre><code class="language-js">test('returns a random number', () =&gt; {
jest.spyOn(Math, 'floor'); // &lt;--------------------changed
const mockMath = Object.create(global.Math);
const globalMath = Object.create(global.Math);
mockMath.random = () =&gt; 0.75;
global.Math = mockMath;
const id = getNewId();
getNewId(); //&lt;------------------------------------changed
expect(Math.floor).toHaveBeenCalledWith(0.75); //&lt;-changed
global.Math = globalMath;
});</code></pre>
<p>I’ve commented the lines we changed. First, move your attention towards the end of the snippet. We are asserting that a function was called. Now, go back to the first change: <code>jest.spyOn()</code>. In order to watch if a function has been called, jest requires us to either mock that function, or spy on it. We’ve already seen how to mock a function, so here we spy on <code>Math.floor()</code>. Finally, the other change we’ve made was to simply call <code>getNewId()</code> without assigning its return value to a variable. We are not using the ID, we are simply asserting it calls some function with some argument.</p>
<p>Run our tests</p><pre><code class="language-bash">PASS  ./id.spec.js
✓ returns a random number (1ms)
✓ returns an integer
Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total</code></pre>
<p>Congratulations on a second successful test.</p>
<h3 id="specification-3-the-number-is-within-a-specified-range-">Specification 3: The number is within a specified range.</h3>
<p>We know <code>Math.random()</code> returns a random number between 0 and 1 (not inclusive). If the developer wants to return a number between 3 and 10, what could she do?</p>
<p>Here is the answer:</p>
<p><code>Math.floor(Math.random() * (max — min + 1))) + min;</code></p>
<p>The above code will produce a random number in a range. Let’s look at two examples to show how it works. I’ll simulate two random numbers being created and then apply the remainder of the formula.</p>
<p><strong>Example:</strong> A number between 3 and 10. Our random numbers will be .001 and .999. I’ve chosen the extreme values as the random numbers so you could see the final result stays within the range.</p>
<p><code>0.001 * (10-3+1) + 3 = 3.008</code> the floor of that is <code>3</code></p>
<p><code>0.999 * (10-3+1) + 3 = 10.992</code> the floor of that is <code>10</code></p>
<p>Let’s write a test</p><pre><code class="language-js">test('generates a number within a specified range', () =&gt; {
const id = getRandomId(10, 100);
expect(id).toBeLessThanOrEqual(100);
expect(id).toBeGreaterThanOrEqual(10);
});
FAIL  ./id.spec.js
✓ returns a random number (1ms)
✓ returns an integer (1ms)
✕ generates a number within a specified range (19ms)
● generates a number within a specified range
expect(received).toBeGreaterThanOrEqual(expected)
Expected: 10
Received: 0</code></pre>
<p>The floor of <code>Math.random()</code> will always be 0 until we update our code. Update the code.</p><pre><code class="language-js">function getRandomId(min, max) {
return Math.floor(Math.random() * (max - min + 1) + min);
}
FAIL  ./id.spec.js
✕ returns a random number (5ms)
✓ returns an integer (1ms)
✓ generates a number within a specified range (1ms)
● returns a random number
expect(jest.fn()).toHaveBeenCalledWith(expected)
Expected mock function to have been called with:
0.75 as argument 1, but it was called with NaN.</code></pre>
<p>Oh no, our first test failed again! What happened?</p>
<p>Simple, our test is asserting that we are calling <code>Math.floor()</code> with <code>0.75</code>. However, we actually call it with 0.75 plus and minus a max and min value that isn’t yet defined. Here we will re-write the first test to include some of our new knowledge.</p><pre><code class="language-js">test('returns a random number', () =&gt; {
jest.spyOn(Math, 'floor');
const mockMath = Object.create(global.Math);
const originalMath = Object.create(global.Math);
mockMath.random = () =&gt; 0.75;
global.Math = mockMath;
const id = getNewId(10, 100);
expect(id).toBe(78);
global.Math = originalMath;
});
PASS  ./id.spec.js
✓ returns a random number (1ms)
✓ returns an integer
✓ generates a number within a specified range (1ms)
Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total</code></pre>
<p>We’ve made some pretty big changes. We’ve passed some sample numbers into our function (10, and 100 as minimum and maximum values), and we’ve changed our assertion once again to check for a certain return value. We can do this because we know if <code>Math.random()</code> gets called, the value is set to 0.75. And, when we apply our min and max calculations to <code>0.75</code> we will get the same number each time, which in our case is 78.</p>
<p>Now we have to start wondering if this is even a good test. We’ve had to go back in and mold our test to fit our code. That goes against the spirit of TDD a bit. TDD says to change your code to make the test pass, not to change the test to make the test pass. If you find yourself trying to fix tests so they pass, that may be a sign of a bad test. Yet, I’d like to leave the test in here, as there are a couple of good concepts. However, I urge you to consider the efficacy of a test such as this, as well as a better way to write it, or if it’s even critical to include at all.</p>
<p>Let’s return to our third test which was generating a number within a range.</p>
<p>We see it has passed, but we have a problem. Can you think of it?</p>
<p>The question I am wondering is whether we just get lucky? We only generated a single random number. What are the chances that number just happened to be in the range and pass the test?</p>
<p>Fortunately here, we can mathematically prove our code works. However, for fun (if you can call it fun), we will wrap our code in a <code>for loop</code> that runs 100 times.</p><pre><code class="language-js">test('generates a number within a defined range', () =&gt; {
for (let i = 0; i &lt; 100; i ++) {
const id = getRandomId(10, 100);
expect(id).toBeLessThanOrEqual(100);
expect(id).toBeGreaterThanOrEqual(10);
expect(id).not.toBeLessThan(10);
expect(id).not.toBeGreaterThan(100);
}
});</code></pre>
<p>I added a few new assertions. I use the <code>.not</code> only to demonstrate other Jest API’s available.</p><pre><code class="language-bash">PASS  ./id.spec.js
✓ is working (2ms)
✓ Math.random() is called within the function (3ms)
✓ receives an integer from our function (1ms)
✓ generates a number within a defined range (24ms)
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        1.806s</code></pre>
<p>With 100 iterations, we can feel fairly confident our code keeps our ID within the specified range. You could also purposely try to fail the test for added confirmation. For example, you could change one of the assertions to <em>not</em> expect a value greater than 50 but still pass in 100 as the maximum argument.</p>
<h4 id="is-it-ok-to-use-multiple-assertions-in-one-test">Is it ok to use multiple assertions in one test?</h4>
<p>Yes. That isn’t to say you shouldn’t attempt to reduce those multiple assertions to a single assertion that is more robust. For example, we could rewrite our test to be more robust and reduce our assertions to just one.</p><pre><code class="language-js">test('generates a number within a defined range', () =&gt; {
const min = 10;
const max = 100;
const range = [];
for (let i = min; i &lt; max+1; i ++) {
range.push(i);
}
for (let i = 0; i &lt; 100; i ++) {
const id = getRandomId(min, max);
expect(range).toContain(id);
}
});</code></pre>
<p>Here, we created an array that contains all the numbers in our range. We then check to see if the ID is in the array.</p>
<h3 id="specification-4-the-number-is-unique">Specification 4: The number is unique</h3>
<p>How can we check if a number is unique? First, we need to define what unique to us means. Most likely, somewhere in our application, we would have access to all ID’s being used already. Our test should assert that the number that is generated is not in the list of current IDs. There are a few different ways to solve this. We could use the <code>.not.toContain()</code> we saw earlier, or we could use something with <code>index</code>.</p>
<h4 id="indexof-"><strong>indexOf()</strong></h4><pre><code class="language-js">test('generates a unique number', () =&gt; {
const id = getRandomId();
const index = currentIds.indexOf(id);
expect(index).toBe(-1);
});</code></pre>
<p><code>array.indexOf()</code> returns the position in the array of the element you pass in. It returns <code>-1</code> if the array doesn’t contain the element.</p><pre><code class="language-bash">FAIL  ./id.spec.js
✓ returns a random number (1ms)
✓ returns an integer
✓ generates a number within a defined range (25ms)
✕ generates a unique number (10ms)
● generates a unique number
ReferenceError: currentIds is not defined</code></pre>
<p>The test fails with a reference error. <code>currentIds</code> is not defined. Let's add an array to simulate some ID’s that might already exist.</p><pre><code class="language-js">const currentIds = [1, 3, 2, 4];</code></pre>
<p>Re-run the test.</p><pre><code class="language-bash">PASS  ./id.spec.js
✓ returns a random number (1ms)
✓ returns an integer
✓ generates a number within a defined range (27ms)
✓ generates a unique number
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total</code></pre>
<p>While the test passes, this should once again raise a red flag. We have absolutely <em>nothing</em> that ensures the number is unique. So, what happened?</p>
<p>Again, we are getting lucky. In fact, <em>your</em> test may have failed. Although if you ran it over and over, you’d likely get a mix of both with far more passes than failures due to the size of <code>currentIds</code>.</p>
<p>One thing we could try is to wrap this in a <code>for loop</code>. A large enough <code>for loop</code> would likely cause us to fail, although it would be possible they all pass. What we could do is check to see that our <code>getNewId()</code> function could somehow be self-aware when a number is or is not unique.</p>
<p>For example. we could set <code>currentIds = [1, 2, 3, 4, 5]</code>. Then call <code>getRandomId(1, 5)</code> . Our function should realize there is no value it can generate due to the constraints and pass back some sort of error message. We could test for that error message.</p><pre><code class="language-js">test('generates a unique number', () =&gt; {
mockIds = [1, 2, 3, 4, 5];
let id = getRandomId(1, 5, mockIds);
expect(id).toBe('failed');
id = getRandomId(1, 6, mockIds);
expect(id).toBe(6);
});</code></pre>
<p>There are a few things to notice. There are two assertions. In the first assertion, we expect our function to fail since we constrain it in a way that it shouldn’t return any number. In the second example, we constrain it in a way where it should only be able to return <code>6</code>.</p><pre><code class="language-bash">FAIL  ./id.spec.js
✓ returns a random number (1ms)
✓ returns an integer (1ms)
✓ generates a number within a defined range (24ms)
✕ generates a unique number (6ms)
● generates a unique number
expect(received).toBe(expected) // Object.is equality
Expected: "failed"
Received: 1</code></pre>
<p>Our test fails. Since our code isn’t checking for anything or returning <code>failed</code>, this is expected. Although, it is possible your code received a 2 through 6.</p>
<p>How can we check if our function <em>can’t</em> find a unique number?</p>
<p>First, we need to do some sort of loop that will continue creating numbers until it finds one that’s valid. At some point though, if there are no valid numbers, we need to exit the loop so we avoid an infinite loop situation.</p>
<p>What we will do is keep track of each number we’ve created, and when we’ve created every number we can, and none of those numbers pass our unique check, we will break out of the loop and provide some feedback.</p><pre><code class="language-js">function getNewId(min = 0, max = 100, ids =[]) {
let id;
do {
id = Math.floor(Math.random() * (max - min + 1)) + min;
} while (ids.indexOf(id) &gt; -1);
return id;
}</code></pre>
<p>First, we refactored <code>getNewId()</code> to include a parameter that is a list of current ID’s. In addition, we updated our parameters to provide default values in the event they aren’t specified.</p>
<p>Second, we use a <code>do-while</code> loop since we don’t know how many times it will take to create a random number that is unique. For example, we could specify a number from 1to 1000 with the <em>only</em> number unavailable being 7. In other words, our current ID’s only has a single 7 in it. Although our function has 999 other numbers to choose from, it could theoretically produce the number 7 over and over again. While this is very unlikely, we use a <code>do-while</code> loop since we are not sure how many times it will run.</p>
<p>Additionally, notice we break out of the loop when our ID <em>is</em> unique. We determine this with <code>indexOf()</code>.</p>
<p>We still have a problem, with the code currently how it is, if there are no numbers available, the loop will continue to run and we will be in an infinite loop. We need to keep track of all the numbers we create, so we know when we’ve run out of numbers.</p><pre><code class="language-js">function getRandomId(min = 0, max = 0, ids =[]) {
let id;
let a = [];
do {
id = Math.floor(Math.random() * (max - min + 1)) + min;
if (a.indexOf(id) === -1) {
a.push(id);
}
if (a.length === max - min + 1) {
if (ids.indexOf(id) &gt; -1) {
return 'failed';
}
}
} while (ids.indexOf(id) &gt; -1);
return id;
}</code></pre>
<p>Here is what we did. We solve this problem by creating an array. And every time we create a number, add it to the array (unless it already in there). We know we’ve tried every number at least once when the length of that array is equal to the range we’ve chosen plus one. If we get to that point, we’ve created the last number. However, we still want to make sure the last number we created doesn’t pass the unique test. Because if it does, although we want the loop to be over, we still want to return that number. If not, we return “failed”.</p><pre><code class="language-bash">PASS  ./id.spec.js
✓ returns a random number (1ms)
✓ returns an integer (1ms)
✓ generates a number within a defined range (24ms)
✓ generates a unique number (1ms)
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total</code></pre>
<p>Congratulations, we can ship our ID generator and make our millions!</p>
<h3 id="conclusion">Conclusion</h3>
<p>Some of what we did was for demonstration purposes. Testing whether our number was within a specified range is fun, but that formula can be mathematically proven. So a better test might be to make sure the formula is called.</p>
<p>Also, you could get more creative with the random ID generator. For example, if it can’t find a unique number, the function could automatically increase the range by one.</p>
<p>One other thing we saw was how our tests and even specifications might crystalize a bit as we test and refactor. In other words, it would be silly to think nothing will change throughout the process.</p>
<p>Ultimately, test-driven development provides us with a framework to think about our code at a more granular level. It is up to you, the developer, to determine how granular you should define your tests and assertions. Keep in mind, the more tests you have, and the more narrowly focused your tests are, the more tightly coupled they become with your code. This might cause a reluctance to refactor because now you must also update your tests. There is certainly a balance in the number and granularity of your tests. The balance is up to you, the developer, to figure out.</p>
<p>Thanks for reading!</p>
<p>woz</p>
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
