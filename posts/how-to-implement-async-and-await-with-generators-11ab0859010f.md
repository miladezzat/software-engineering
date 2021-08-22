---
card: "https://cdn-media-1.freecodecamp.org/images/1*9wHrewC1Dyf2Au_qEqwWcg.jpeg"
tags: [JavaScript]
description: "Nowadays we can write our asynchronous code in a synchronous "
author: "Milad E. Fahmy"
title: "Implementing Async And Await With Generators"
created: "2021-08-16T11:39:29+02:00"
modified: "2021-08-16T11:39:29+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-programming tag-technology tag-tutorial ">
<header class="post-full-header">
<h1 class="post-full-title">Implementing Async And Await With Generators</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*9wHrewC1Dyf2Au_qEqwWcg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*9wHrewC1Dyf2Au_qEqwWcg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*9wHrewC1Dyf2Au_qEqwWcg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*9wHrewC1Dyf2Au_qEqwWcg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*9wHrewC1Dyf2Au_qEqwWcg.jpeg" alt="Implementing Async And Await With Generators">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Nowadays we can write our asynchronous code in a synchronous way thanks to the <strong>async</strong> and <strong>await</strong> keywords. This makes it easier to read and understand. Recently I wondered, however, how the same effect could be achieved without using these keywords.</p><p>It turns out to be quite simple, since the behavior of <strong>async</strong> and <strong>await</strong> can easily be emulated using generators. Let’s have a look!</p><p>Go ahead, clone the <a href="https://github.com/maciejcieslar/asynq" rel="noopener">repository</a> and let’s get started.</p><h3 id="generators">Generators</h3><p>I am going to assume you have little to no experience with generators since, honestly, most of the time they aren’t particularly useful and you can easily manage without them. So don’t worry — we’ll start with a quick reminder.</p><p>Generators are objects created by <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*" rel="noopener">generator functions</a> — functions with an <em>*</em> (asterisk) next to their name.</p><p>These generators have an amazing ability that lets us stop the execution of code — whenever we want — by using the keyword <strong>yield</strong>.</p><p>Consider this example:</p><pre><code class="language-javascript">const generator = (function*() {
// waiting for .next()
const a = yield 5;
// waiting for .next()
console.log(a); // =&gt; 15
})();
console.log(generator.next()); // =&gt; { done: false, value: 5 }
console.log(generator.next(15)); // =&gt; { done: true, value: undefined }</code></pre><p>Given that these are absolute basics, I would recommend that, before you scroll any further, you read <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators" rel="noopener">this article</a> to get a grasp on what is really going on here.</p><p>If you feel like you have a strong understanding of the underlying ideas, we can move on.</p><h3 id="hold-on-await-a-minute">Hold on, await a minute</h3><p>Haven’t you ever wondered how <strong>await</strong> really works?</p><p>Somehow it just waits for our promise to return a value and proceed with the execution. For me, that seems like something a generator would be able to do after a little tweaking.</p><p>What we could do is just take every yielded value, put it into a promise, and then wait for the promise to be resolved. Afterwards, we just return it to the generator by calling <em>generator.next(resolvedValue).</em></p><p>Sounds like a plan. But first, let’s write some tests just to be sure that everything is working as expected.</p><p>What our <strong>asynq</strong> function should do:</p><ul><li>wait for asynchronous code before continuing the execution</li><li>return a <strong>promise</strong> with the returned value from the function</li><li>make <strong>try/catch</strong> work on asynchronous code</li></ul><p>Note: because we are using generators, our <strong>await</strong> becomes <strong>yield</strong>.</p><pre><code class="language-typescript">import { asynq } from '../src';
describe('asynq core', () =&gt; {
test('Waits for values (like await does)', () =&gt; {
return asynq(function*() {
const a = yield Promise.resolve('a');
expect(a).toBe('a');
});
});
test('Catches the errors', () =&gt; {
return asynq(function*() {
const err = new Error('Hello there');
try {
const a = yield Promise.resolve('a');
expect(a).toBe('a');
const b = yield Promise.resolve('b');
expect(b).toBe('b');
const c = yield Promise.reject(err);
} catch (error) {
expect(error).toBe(err);
}
const a = yield Promise.resolve(123);
expect(a).toBe(123);
});
});
test('Ends the function if the error is not captured', () =&gt; {
const err = new Error('General Kenobi!');
return asynq(function*() {
const a = yield Promise.reject(err);
const b = yield Promise.resolve('b');
}).catch((error) =&gt; {
expect(error).toBe(err);
});
});
test('Returns a promise with the returned value', () =&gt; {
return asynq(function*() {
const value = yield Promise.resolve(5);
expect(value).toBe(5);
return value;
}).then((value) =&gt; {
expect(value).toBe(5);
});
});
});</code></pre><p>Alright, great! Now we can talk about the implementation.</p><p>Our <strong>asynq</strong> function takes as a parameter a function generator — by calling it, we create a generator.</p><p>Just to be sure, we call <a href="https://github.com/maciejcieslar/asynq/blob/master/src/utils.ts" rel="noopener"><em>isGeneratorLike</em></a> which checks if the received value is an object and has methods <strong>next</strong> and <strong>throw</strong>.</p><p>Then, recursively, we consume each <strong>yield</strong><em> </em>keyword by calling <em>generator.next(ensuredValue).</em> We wait for the returned promise to be settled, and then return its result back to the generator by repeating the whole process.</p><p>We must also attach the<em> </em><strong>catch</strong> handler, so that, should the function throw an exception, we can catch it and return the exception inside the function by calling <em>generator.throw(error)</em>.</p><p>Now, any potential errors will be handled by <strong>catch</strong>. If there wasn’t a <strong>try/catch</strong> block in place, an error<strong> </strong>would simply stop the execution altogether — like any unhandled exception would — and our function would return a rejected promise.</p><p>When the generator is done, we return the generator’s return value in a promise.</p><pre><code class="language-typescript">import { isGeneratorLike } from './utils';
type GeneratorFactory = () =&gt; IterableIterator&lt;any&gt;;
function asynq(generatorFactory: GeneratorFactory): Promise&lt;any&gt; {
const generator = generatorFactory();
if (!isGeneratorLike(generator)) {
return Promise.reject(
new Error('Provided function must return a generator.'),
);
}
return (function resolve(result) {
if (result.done) {
return Promise.resolve(result.value);
}
return Promise.resolve(result.value)
.then((ensuredValue) =&gt; resolve(generator.next(ensuredValue)))
.catch((error) =&gt; resolve(generator.throw(error)));
})(generator.next());
}</code></pre><p>Now, having run our tests, we can see that everything is working as expected.</p><h3 id="wrapping-up">Wrapping up</h3><p>While this implementation is probably not the one used inside the JavaScript engines, it sure feels good to be able to do something like this on our own.</p><p>Feel free to go over the code again. The better your understanding of the underlying ideas, the more you will be able to appreciate the brilliance of the creators of the <strong>async</strong> and <strong>await</strong> keywords.</p><p>Thank you very much for reading! I hope you found this article informative. I also hope it helped you see there is no magic involved in the <strong>async</strong> and <strong>await</strong> keywords, and that they can be easily replaced with generators.</p><p>If you have any questions or comments, feel free to put them in the comments section below or send me a <a href="https://www.mcieslar.com/contact" rel="noopener">message</a>.</p><p>Check out my <a href="https://www.maciejcieslar.com/about/" rel="noopener">social media</a>!</p><p><a href="http://eepurl.com/dAKhxb" rel="noopener">Join my newsletter</a>!</p><p><em>Originally published at <a href="https://www.mcieslar.com/implementing-async-and-await-with-generators" rel="noopener">www.mcieslar.com</a> on August 6, 2018.</em></p>
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
