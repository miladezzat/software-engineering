---
card: "https://cdn-media-1.freecodecamp.org/images/1*DAg4N0DRKpVri7bwj42WyA.jpeg"
tags: [Writing]
description: "I know sentences. In my decade as a print journalist, I’ve wr"
author: "Milad E. Fahmy"
title: "How I built an app that showcases the first and last sentences of great novels"
created: "2021-08-16T14:43:51+02:00"
modified: "2021-08-16T14:43:51+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-writing tag-tech tag-javascript tag-writing-tips tag-life-lessons ">
<header class="post-full-header">
<h1 class="post-full-title">How I built an app that showcases the first and last sentences of great novels</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*DAg4N0DRKpVri7bwj42WyA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*DAg4N0DRKpVri7bwj42WyA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*DAg4N0DRKpVri7bwj42WyA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*DAg4N0DRKpVri7bwj42WyA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*DAg4N0DRKpVri7bwj42WyA.jpeg" alt="How I built an app that showcases the first and last sentences of great novels">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
sentences: [Object];
</code></pre><p>That worked fine. Later, I decided to allow users to “like” and comment on sentences. So I had to update, in the back end, the data schema that told MongoDB what type of information to store. I declared a like counter as a number and an array of strings called “likedBy,” where I put the usernames of users who had liked a particular pair of sentences.</p><pre><code class="language-js">const SentenceSchema = mongoose.Schema({
likes: {
type: Number, default: 0
},
likedBy: {
type: [String]
}</code></pre><p>Again, no problems. Finally, I added comments. Each comment object would contain a username and the body of the comment. I added an array of objects to my data schema, declaring it the same way I had done for my “sentences” array in Angular.</p><pre><code class="language-js">const SentenceSchema = mongoose.Schema({
likes: {
type: Number, default: 0
},
likedBy: {
type: [String]
},
comments: {
type: [Object]
} </code></pre><p>When I tested commenting, though, it didn’t work. There were no obvious errors on the front end, no red text screaming at me in the console of Chrome DevTools. When I peeked in the database, however, the comments I had submitted in the browser were nowhere to be found.</p><p>After a bit of try-this-try-that and some quiet late-night cursing, I figured out the problem. MongoDB, it turned out, wanted me to be more specific than Angular. I had to tell it the data types of each element in a comment object in my “comments” array. Just stating that the array contained objects wasn’t good enough.</p><pre><code class="language-js">comments: [{
username: String,
body: String
const isInArray = sentence.likedBy.includes(this.username);
if(!isInArray) {
sentence.likedBy.push(this.username);
this.authService.incrementLikes(sentence).subscribe(data =&gt; {
this.sentences[index] = data;</code></pre><p>Users could “like” a pair of sentences only if they were logged in and hadn’t already “liked” that entry. When those conditions were met, a local array of the users who had liked that pair of sentences was updated.</p><p>Then a call was made to update the like counter and “likedBy” array in the database. The entire sentence object was sent to the back end and, when the updated sentence object was returned, the like counter displayed in the browser increased by one.</p><p>In my data model in the back end, I had this, sadly.</p><pre><code class="language-js">module.exports.incrementLikes = function(sentence, callback) {
const query = {_id:sentence._id};
sentence.likes++;
const likesPlus = sentence.likes;
const likesUserArray = sentence.likedBy;
const newLikeUser = likesUserArray[likesUserArray.length - 1];
Sentences.findOneAndUpdate(query,
{likes: likesPlus, $push:{likedBy: newLikeUser}},
{new: true}, callback
);
}</code></pre><p>This function incremented the counter passed in as a parameter and assigned it to a local variable, which replaced the like counter in the database.</p><p>If that weren’t round-a-bout enough, I copied the entire “likedBy” array from the sentence object passed to the function, then made ANOTHER local variable to hold the last username in that array before, finally, pushing that username into the database’s “likedBy” array.</p><p>It worked, but still. Ridiculous.</p><p>The only information MongoDB needed from Angular was the unique ID of the sentence object to update and the username of the user who clicked the thumbs-up icon. Not the whole sentence object.</p><p>So, instead, I created a new object with only those two elements in Angular to pass to the back-end.</p><pre><code class="language-js">onLikeClick(sentence, index) {
if(this.authService.loggedIn()) {
const isInArray = sentence.likedBy.includes(this.username);
if(!isInArray) {
const updateLikes = {
likeID: sentence._id,
likeUsername: this.username
}
this.authService.incrementLikes(updateLikes).subscribe(data =&gt;
this.sentences[index] = data;</code></pre><p>Then I simply incremented the like counter inside the database (rather than incrementing outside and overwriting the database value) and pushed the username passed to the function into the database’s “likedBy” array.</p><pre><code class="language-js">module.exports.incrementLikes = function(updateLikes, callback) {
const query = {_id:updateLikes.likeID};
const newLikeUser = updateLikes.likeUsername;
Sentences.findOneAndUpdate(query,
{$inc: {likes: 1}, $push: {likedBy: newLikeUser}},
{new: true}, callback
);
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
