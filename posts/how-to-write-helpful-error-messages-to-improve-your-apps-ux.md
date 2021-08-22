---
card: "https://cdn-media-2.freecodecamp.org/w1280/60622fcb9618b008528a924c.jpg"
tags: [User Experience]
description: Gone are the days of useless and generic error messaging.
author: "Milad E. Fahmy"
title: "How to Write Helpful Error Messages to Improve Your App's User Experience"
created: "2021-08-15T19:26:43+02:00"
modified: "2021-08-15T19:26:43+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-user-experience tag-ux-design tag-error-handling tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Write Helpful Error Messages to Improve Your App's User Experience</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/60622fcb9618b008528a924c.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/60622fcb9618b008528a924c.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/60622fcb9618b008528a924c.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/60622fcb9618b008528a924c.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/60622fcb9618b008528a924c.jpg" alt="How to Write Helpful Error Messages to Improve Your App's User Experience">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Gone are the days of useless and generic error messaging.</p>
<figcaption><em>Screenshot taken moments before a rage-quit</em></figcaption>
</figure>
<p>If you're here, you're likely concerned with making your user-facing products as delightful as possible. And error messaging plays an important role in that. </p>
<p>Having useful error messages can go a long way toward making a frustrating scenario for an end-user as pleasant as possible.</p>
<p>This article is split into two parts. The first builds context around error messages and why they're important. This section should be useful, regardless of whether you're a JavaScript developer or not.</p>
<p>The second part is a short follow-along to help get you started managing your own error messages.</p>
<h2 id="the-current-state-of-error-messaging"><strong>The current state of error messaging</strong></h2>
<p>In a perfect world, error messages would be redundant and users would be able to use anything you've built a-okay, no problem-o. But errors will happen, and your end-users will run into them. </p>
<p>These errors can stem from:</p>
<ul>
<li>Failing validation</li>
<li>Server-side failures</li>
<li>Rate limiting</li>
<li>Borked code</li>
<li>Acts of god</li>
</ul>
<p>And when things go wrong, often the client-facing error messaging takes shape in one of two ways:</p>
<ul>
<li>Generic errors with no meaningful information, e.g. <code>Something went wrong, please try again later</code></li>
<li>Hyper specific messages from the stack trace sent by the server, e.g.<em><em> </em></em><code>Error 10x29183: line 26: error mapping Object -&gt; Int32</code></li>
</ul>
<p>Neither are helpful for our end-users.</p>
<p>For our users, the generic error can create a feeling of helplessness and frustration. If they get such a message, they can't complete an action, and have no way of knowing why the error happened and how (or if) they can resolve it. This can result in loss of end-user trust, loss of customer, or an angry review.</p>
<p>On the other hand, hyper-specific error messages are a leaky abstraction and shouldn't be seen by our end-user's eyes.</p>
<p>For one, these kind of errors provide implementation information about our server-side logic. Is this a security concern? probably? I'm no pen-tester.</p>
<p>Secondly, if we're in the business of crafting engaging user experiences, (and why wouldn't you be?) our error messages should feel human and be service-oriented. This is a sentiment shared in a number of resource I've come across, many of which of I've included in a further reading section at the end.</p>
<h2 id="why-should-i-create-sane-error-messaging"><strong>Why should I create sane error messaging?</strong></h2>
<h3 id="to-help-maintain-developer-sanity">To help maintain developer sanity</h3>
<p>Hunting bugs is hard, and scanning logs is tedious. Sometimes we're provided with context about why things failed, and other times we aren't. If an end-user reports a bug it's important they can present to us as much useful information as possible.</p>
<p>A report from a user that says:</p>
<p><code>Hi, I was using the app sometime last night updating my profile and all of a sudden it stopped working. The error said something about a validation error, but I don't know what that means</code></p>
<p>is much less useful than:</p>
<p><code>Hi, I was using the app sometime last night updating my profile and all of a sudden it stopped working. The error said "We had trouble updating your details. Your address must be located within the EU" but I live in England</code></p>
<p>This saves us time and cuts down on red herrings. A clear and specific error message may also help an end-user understand what they themselves have done wrong, and can allow them to fix their mistake.</p>
<h3 id="to-help-maintain-organisation-sanity">To help maintain organisation sanity</h3>
<p>Sane error messages also yield benefits on an organisation level. For those working in larger companies, copy/messaging may be the responsibility of an entirely separate department. The more places in the code that require copy changes, the easier it is for the copy to get out of sync with your company's brand guidelines. </p>
<p>Conversely, keeping all of your error messages in a single source makes it much easier for those owning copy to adhere to those brand guidelines.</p>
<p>Other departments, like the support team, may be inundated with support tickets from users. If you're an engineer, why not reach out to your support team to see how many support tickets could be avoided with improved error messaging. </p>
<p>Fixing the problems with your messaging when a user incorrectly fills out a form, has missing data, or doesn't have permissions for a specific action could positively impact the lives of the support team.</p>
<h3 id="to-help-maintain-end-user-sanity">To help maintain end-user sanity</h3>
<p>By providing sane error messaging we hope to not leave our end users feeling helpless. </p>
<p>As described earlier, our messaging should be <em><em>service</em>-<em>oriented</em></em>. They should guide our user on how to complete their process, or at least let them know where they can go and get help if the problem is beyond their control.</p>
<p>In Jon Yablonski's book, the Laws of UX, he describes a psychological concept called the Peak-end Rule:</p>
<blockquote><em><em>People judge an experience largely based on how they felt at its peak and at its end rather than the total sum or average of every moment of the experience</em></em></blockquote>
<p>In the context of this article, if people become so frustrated that they rage quit your site, their lasting memory of your application is of how frustrating it is to use. </p>
<p>Error messages play a large part in preventing this, as they can act as the final gatekeeper preventing a user who is simply stuck from turning to one so frustrated they quit your app.</p>
<p>If someone is using your product for a transactional purpose like buying an airplane ticket or shopping online, and they've been stopped dead in their tracks during a task with no way to continue, the likelihood of them leaving your site for another skyrockets. Another lost customer.</p>
<p>While this is wholly anecdotal, I've rage quit sites often from not knowing how to complete a process – either nothing happened when I clicked a button, or I just kept getting vague error messages. </p>
<p>Unless these sites/apps are one of those few ubiquitous platforms (like Google, Instagram, Apple), I likely haven't have used them since. I'm sure you can even remember a time this happened to you. In fact, I'll openly welcome pictures of awful error messages via <a href="https://twitter.com/andricokaroulla?lang=en">Twitter</a></p>
<p>Using sane error messaging can help offset this frustration if something doesn't go right. Surprisingly, creating a useful error message only requires a handful of qualities.</p>
<h2 id="what-makes-a-good-error-message">What makes a good error message?</h2>
<p>Taken from <a href="https://www.microcopybook.com/">Microcopy: A complete guide</a>. A useful error message should satisfy these qualities:</p>
<ul>
<li>Explain clearly that there is a problem</li>
<li>Explain what the problem is</li>
<li>If possible, provide a solution so that the user can complete the process, or</li>
<li>Point them to where they can go for help</li>
<li>Make a frustrating scenario as pleasant as possible</li>
</ul>
<p>This might sound like a lot to cover with just a couple of sentences, but here are some examples of what I deem to be good error messages:</p>
<ul>
<li>We've limited how many times you can reset your password every hour. You can try again later.</li>
<li>Please log in to view this profile</li>
<li>We couldn't create your profile, only UK residents can use our app.</li>
</ul>
<p>It's worth noting that I'm not a UX researcher/designer, just a frontend developer with a keen interest in UX. It may be that my above examples miss the mark on what's required within your project or organisation. </p>
<p>Saying that, if you're a frontend engineer, improving your organisation's error messaging makes for an excellent opportunity to upskill and collaborate with your UXer colleagues.</p>
<h2 id="how-can-i-start-writing-sane-error-messages">How can I start writing sane error messages?</h2>
<p>I've open-sourced a simple tool called <code>sane-error-messages</code>. Running the tool will generate a brand new repo designed to house your default error messaging. You can tweak the default values, add or remove messages, and then publish it to consume within your client facing apps.</p>
<p><code>sane-error-messages</code> works by aggregating all of your messaging in to a single JavaScript object. The key is an error code, and the value is a corresponding message. </p>
<p>The error codes should be the same codes you receive from your server, such as &nbsp;<code>POSTS_NOT_FOUND</code> or <code>CONFLICTING_USER_RECORD</code>. Your error messaging repo exposes a function to get your error message from an error code. </p>
<p>This approach was inspired by how tools like <a href="/news/p/009d4c55-b3e6-4e48-b186-541f5959af8c/*https://github.com/cypress-io/cypress/blob/develop/packages/server/lib/errors.js*">Cypress</a> handle their error messaging.</p>
<p>As long as your server returns predictable error codes, the server-side implementation doesn't matter. The following sequence is just one way of implementing <em><em><code>sane-error-messages</code></em></em></p>
<figcaption>Having a separate repo becomes more important the more user-facing apps you have.</figcaption>
</figure>
<p>In short:</p>
<ul>
<li>The user "views all products"</li>
<li>The frontend makes a network request</li>
<li>The network request fails and returns an error code "USER_NOT FOUND"</li>
<li>The frontend requests the corresponding error message from your <code>error-messages</code> package.</li>
<li>The frontend applies any relevant contextual information</li>
<li>The frontend displays this information to the end user.</li>
</ul>
<p>If you want to try something hands on, you can play with this <a href="https://codesandbox.io/s/amazing-platform-dxtjc?file=/src/App.js">CodeSandbox</a>. The CodeSandbox fires off a request to a mock server which returns 1 of 12 error codes at random. </p>
<p>The client side will use the error code to retrieve a sane error message from the error messages repo. The client side then displays the error message to the user. If the code doesn't have a specified message, the generic fallback gets shown (and it sucks).</p>
<figcaption>Some sane error messages in the wild</figcaption>
</figure>
<h2 id="how-to-set-up-your-error-messages">How to set up your error messages</h2>
<p>Note: You can find the <a href="https://github.com/andrico1234/sane-error-messages#readme">repo here</a>. If you come across any problems during the tutorial process you can file a GitHub issue.</p>
<p>Begin by running</p>
<p><code>yarn global add sane-error-message</code></p>
<p>then</p>
<p><code>sane-error-messages create &lt;dirName&gt;</code></p>
<p>to scaffold your project. Doing so will create a brand new module for you to customise with your default error messages. </p>
<p>Your new module uses <code>tsdx</code> under-the-hood to handle all of the module management scripts, such as running, building, and testing.</p>
<p>You can learn more about <a href="/news/p/009d4c55-b3e6-4e48-b186-541f5959af8c/*https://tsdx.io/*">tsdx here</a>.</p>
<p>In short, the contents of your new package will look like this:</p><pre><code class="language-typescript">/* errorCodes.ts: The file that defines each error code like */
const USER_NOT_ADMIN = '403_USER_NOT_ADMIN'
/* defaultErrorMessages.ts: Maps each code to a default message */
const errorCodes {
// your codes and messages go here...
[USER_NOT_ADMIN]: "We're afraid only administrators have access to "
}
/* ErrorMessages.ts: The class you'll use to instantiate your error messages object in the consuming project */
class ErrorMessages {
// You can override default messages with more specific ones
constructor: (customErrorMessages: Partial&lt;Record&lt;string | number, string&gt;&gt;): ErrorMessages;
// Pass through an error code to get your custom message
getErrorMessage: (code: string | number, fallbackMessage?: string): string;
// Checks to see if the argument is a valid error code and acts as a guard for non-ErrorCode values
isErrorCode(code: string | number): boolean;
// Returns the errorCodes object with your custom messages
messages: Record&lt;ErrorCode, string&gt;
}
type ErrorCode = ValueOf&lt;errorCodes&gt;</code></pre>
<h2 id="how-to-consume-your-error-messages">How to consume your error messages</h2>
<p>If you created a repo with the name <code>custom-error-messages</code> and published it to npm, you'd be able to consume it within your apps by doing the following:</p><pre><code class="language-typescript">import { ErrorMessages } from 'custom-error-messages';
const customErrorMessages = {
'400_validation': 'Please enter the fields in your form correctly',
};
// Initialise your errorMessages object with your custom messages
const errorMessages = new ErrorMessages(customErrorMessages);
function riskyFunction() {
try {
// Throws an error
await boom();
} catch (err) {
// Get the error code our server sent over
const { code } = err;
// Get the code's corresponding message
const message = errorMessages.getErrorMessage(code);
// Display the message to the client
displayNotification(message);
}
}</code></pre>
<p>You can then take all of the error codes that your server-side returns and apply corresponding messages to them.</p>
<p>Once you're ready, you can publish your tool to NPM, and then consume it from your client-facing apps.</p>
<h2 id="conclusion"><strong>Conclusion</strong></h2>
<p>I hope you've enjoyed learning about an often overlooked aspect of web development. </p>
<p>I've done a bunch of reading to learn about error messaging and I've shared some of my favourite resources below. Some are books and others are short articles, but they're all worth your time.</p>
<p>You can also reach out if any part of the tutorial wasn't clear, or if you feel I can streamline things. Thanks for reading.</p>
<h2 id="faqs">FAQs</h2>
<h3 id="why-can-t-the-server-side-just-return-these-messages">Why can't the server-side just return these messages?</h3>
<p>The server shouldn't be concerned with any client-facing logic. But if you're fortunate enough to work with an API that gives useful error codes with each failed request, then you're nearly there.</p>
<h3 id="will-i-need-to-create-an-instance-of-error-messages-for-every-api-consumer">Will I need to create an instance of error-messages for every API consumer?</h3>
<p>Not necessarily. Because this package can take a list of default messages and codes, as long as it's in sync with the APIs, your frontends will be able to consume the same package. </p>
<p>In each client-side instance, you can pass through additional error codes, or override existing messages to tailor your frontend messaging.</p>
<h3 id="i-think-this-package-should-have-x-or-do-y-differently">I think this package should have X or do Y differently</h3>
<p>I'm dogfooding this internally at my job, and this is a problem space I'm very new to. I would love to hear of any suggestions, or improvements to the overall architecture or feature-set of <em><em><code>sane-error-messages</code>.</em></em></p>
<h2 id="further-reading"><strong>Further Reading</strong></h2>
<p><strong><strong>Microcopy: A Complete Guide</strong></strong><br>I mentioned this book a little earlier, and it's one of my favourites when it comes to making my user-facing products a lot more personable.</p>
<p>The book's author Kinneret Yifrah, has graciously provided a coupon for 10% off, you can purchase it <a href="https://www.microcopybook.com/">here</a>.</p>
<p>Coupon code for the eBook: andrico-ebook</p>
<p>Coupon code for the bundle: andrico-bundle</p>
<p><strong><strong>Error messaging guidelines: NN Group</strong></strong><br>A <a href="https://www.nngroup.com/articles/error-message-guidelines/">short article</a> on the importance of sane error messaging which shares some very useful tips on how to create sane error messaging.</p>
<p>In short:</p>
<ul>
<li>Errors should be expressed in plain language</li>
<li>Indicate what the problem is</li>
<li>Suggest a solution</li>
</ul>
<p><strong><strong>Error Messages (Design basics): Microsoft</strong></strong><br>An <a href="https://docs.microsoft.com/en-us/windows/win32/uxguide/mess-error">in-depth article</a> that covers both design guidelines messaging practices</p>
<p><strong><strong>Laws of UX</strong></strong><br>A <a href="https://www.amazon.co.uk/gp/product/149205531X/ref=as_li_tl?ie=UTF8&amp;camp=1634&amp;creative=6738&amp;creativeASIN=149205531X&amp;linkCode=as2&amp;tag=calistheni02b-21&amp;linkId=3f089ce27d59c4eeb48522be9ac52fb2">short book</a> that introduces how a handful of psychology concepts can be used to improve your products UX.</p>
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
