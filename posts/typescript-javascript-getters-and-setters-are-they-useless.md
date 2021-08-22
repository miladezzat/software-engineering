---
card: "/images/default.jpg"
tags: [Typescript]
description: Getters and setters (also known as accessors) were introduced
author: "Milad E. Fahmy"
title: "No, Getters and Setters in TypeScript & JavaScript aren't useless"
created: "2021-08-15T19:33:26+02:00"
modified: "2021-08-15T19:33:26+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-typescript tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">No, Getters and Setters in TypeScript &amp; JavaScript aren't useless</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/07/typescript-blog-banner-1.png 300w,
/news/content/images/size/w600/2019/07/typescript-blog-banner-1.png 600w,
/news/content/images/size/w1000/2019/07/typescript-blog-banner-1.png 1000w,
/news/content/images/size/w2000/2019/07/typescript-blog-banner-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/07/typescript-blog-banner-1.png" alt="No, Getters and Setters in TypeScript &amp; JavaScript aren't useless">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<blockquote>In this blog post, we talk about the utility of getters and setters in modern web development. Are they useless? When does it make sense to use them?</blockquote>
<p>Getters and setters (also known as accessors) were introduced to JavaScript when ECMAScript 5 (2009) was released.</p>
<p>The thing is, there's a lot of confusion about their utility and why you would ever even want to use them.</p>
<p>I came across this <a href="https://www.reddit.com/r/typescript/comments/87t1h7/are_getters_and_setters_an_antipattern/">reddit thread</a> where the discussion was about if they were an anti-pattern.</p>
<p>Unfortunately, the general consensus of the thread was "yes". I think that's because the majority of your front-end programming on a daily basis doesn't call for the utility that getters and setters offer.</p>
<p>Though I disagree with getters and setters being an anti-pattern <em>overall</em>. They have a lot of utility in several different cases.</p>
<h2 id="whataretheyfor">What are they <em>for</em>?</h2>
<p>Getters and setters are another way for you to provide access to the properties of an object.</p>
<p>Trivial usage might look like this:</p>
<pre><code class="language-typescript">interface ITrackProps {
name: string;
artist: string;
}
class Track {
private props: ITrackProps;
get name (): string {
return this.props.name;
}
set name (name: string) {
this.props.name = name;
}
get artist (): string {
return this.props.artist;
}
set artist (artist: string) {
this.props.artist = artist;
}
constructor (props: ITrackProps) {
this.props = props;
}
public play (): void {
console.log(`Playing ${this.name} by ${this.artist}`);
}
}
</code></pre>
<p>The question becomes: "why not just use regular class attributes?"</p>
<p>Well, in this case, <em>we could</em>.</p>
<pre><code class="language-typescript">interface ITrackProps {
name: string;
artist: string;
}
class Track {
public name: string;
public artist: string;
constructor (name: string, artist: string;) {
this.name = name;
this.artist = artist;
}
public play (): void {
console.log(`Playing ${this.name} by ${this.artist}`);
}
}
</code></pre>
<p>That's much simpler. And that's also a really simple use case. Let's look at scenarios that better describe why we might care about using getters and settters vs regular class attributes.</p>
<h2 id="preventinganemicdomainmodels">Preventing Anemic Domain models</h2>
<p>Do you remember what an <a href="https://khalilstemmler.com/wiki/anemic-domain-model/">anemic domain model</a> is? One of the earliest ways to sniff out an anemic domain model is if there are getters and setters for <strong>every single attribute</strong> of your domain entities (ie: <em>set</em> operations that don't make sense to the domain-specific language are exposed).</p>
<p>And if you don't explicitly use the <code>get</code> or <code>set</code> keywords, making everything <code>public</code> also has the same negative effect.</p>
<p>Consider this example:</p>
<pre><code class="language-javascript">class User {
// Bad. You can now `set` the user id.
// When would you ever need to mutate a user's id to a
// different identifier? Is that safe? Should you be able to?
public id: UserId;
constuctor (id: UserId) {
this.id = id;
}
}
</code></pre>
<p>In Domain-Driven Design, to prevent an anemic domain model and push forward the creation of a domain-specific language it's <u>really</u> important for us to <em>only expose operations that are valid to the domain</em>.</p>
<p>That means <a href="https://khalilstemmler.com/articles/solid-principles/single-responsibility/">understanding the domain that you're working in</a>.</p>
<p>I'll put myself up for scrutiny. Let's take a look at the <code>Vinyl</code> class from <a href="https://github.com/stemmlerjs/white-label">White Label</a>, an open-source vinyl-trading app built with TypeScript using Domain-Driven Design.</p>
<pre><code class="language-typescript">import { AggregateRoot } from "../../core/domain/AggregateRoot";
import { UniqueEntityID } from "../../core/domain/UniqueEntityID";
import { Result } from "../../core/Result";
import { Artist } from "./artist";
import { Genre } from "./genre";
import { TraderId } from "../../trading/domain/traderId";
import { Guard } from "../../core/Guard";
import { VinylCreatedEvent } from "./events/vinylCreatedEvent";
import { VinylId } from "./vinylId";
interface VinylProps {
traderId: TraderId;
title: string;
artist: Artist;
genres: Genre[];
dateAdded?: Date;
}
export type VinylCollection = Vinyl[];
export class Vinyl extends AggregateRoot&lt;VinylProps&gt; {
public static MAX_NUMBER_GENRES_PER_VINYL = 3;
// ? 1. Facade. The VinylId key doesn't actually exist
// as a property of VinylProps, yet- we still need
// to provide access to it.
get vinylId(): VinylId {
return VinylId.create(this.id)
}
get title (): string {
return this.props.title;
}
// ? 2. All of these properties are nested one layer
// deep as props so that we can control access
// and mutations to the ACTUAL values.
get artist (): Artist {
return this.props.artist
}
get genres (): Genre[] {
return this.props.genres;
}
get dateAdded (): Date {
return this.props.dateAdded;
}
// ? 3. You'll notice that there are no setters so far because
// it doesn't make sense for us to be able to change any of these
// things after it has been created
get traderId (): TraderId {
return this.props.traderId;
}
// ? 4. This approach is called "Encapsulate Collection". We
// will need to add genres, yes. But we still don't expose the
// setter because there's some invariant logic here that we want to
// ensure is enforced.
// Invariants:
// https://khalilstemmler.com/wiki/invariant/
public addGenre (genre: Genre): void {
const maxLengthExceeded = this.props.genres
.length &gt;= Vinyl.MAX_NUMBER_GENRES_PER_VINYL;
const alreadyAdded = this.props.genres
.find((g) =&gt; g.id.equals(genre.id));
if (!alreadyAdded &amp;&amp; !maxLengthExceeded) {
this.props.genres.push(genre);
}
}
// ? 5. Provide a way to remove as well.
public removeGenre (genre: Genre): void {
this.props.genres = this.props.genres
.filter((g) =&gt; !g.id.equals(genre.id));
}
private constructor (props: VinylProps, id?: UniqueEntityID) {
super(props, id);
}
// ? 6. This is how we create Vinyl. After it's created, all properties
// effectively become "read only", except for Genre because that's all that
// makes sense to enabled to be mutated.
public static create (props: VinylProps, id?: UniqueEntityID): Result&lt;Vinyl&gt; {
const propsResult = Guard.againstNullOrUndefinedBulk([
{ argument: props.title, argumentName: 'title' },
{ argument: props.artist, argumentName: 'artist' },
{ argument: props.genres, argumentName: 'genres' },
{ argument: props.traderId, argumentName: 'traderId' }
]);
if (!propsResult.succeeded) {
return Result.fail&lt;Vinyl&gt;(propsResult.message)
}
const vinyl = new Vinyl({
...props,
dateAdded: props.dateAdded ? props.dateAdded : new Date(),
genres: Array.isArray(props.genres) ? props.genres : [],
}, id);
const isNewlyCreated = !!id === false;
if (isNewlyCreated) {
// ? 7. This is why we need VinylId. To provide the identifier
// for any subscribers to this domain event.
vinyl.addDomainEvent(new VinylCreatedEvent(vinyl.vinylId))
}
return Result.ok&lt;Vinyl&gt;(vinyl);
}
}
</code></pre>
<p>Acting as a facade, maintaining readonly values, enforcing model expressiveness, encapsulating collections, AND <a href="https://khalilstemmler.com/blogs/domain-driven-design/where-do-domain-events-get-dispatched/">creating domain events</a> are some very solid use cases for getters and setters in <a href="https://khalilstemmler.com/articles/domain-driven-design-intro/">Domain-Driven Design</a>.</p>
<h2 id="changedetectioninvuejs">Change detection in Vue.js</h2>
<p><a href="https://vuejs.org/v2/guide/reactivity.html">Vue.js</a>, one of the newer front-end frameworks, prides itself with being very fast and reactive.</p>
<p>The reason why Vue.js does change detection so efficiently is because they use the <code>Object.defineProperty()</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">API</a> to <em>watch</em> for changes to your View Models!</p>
<p>From the Vue.js docs on Reactivity,</p>
<blockquote>
<p>When you pass a plain JavaScript object to a Vue instance as its data option, Vue will walk through all of its properties and convert them to getter/setters using Object.defineProperty. The getter/setters are invisible to the user, but under the hood they enable Vue to perform dependency-tracking and change-notification when properties are accessed or modified. - <a href="https://vuejs.org/v2/guide/reactivity.html">Vue.js Docs: Reactivity</a></p>
</blockquote>
<hr>
<p>In conclusion, getters and setters <em>do</em> have a lot of utility for a lot of different problems. Those problems just don't occur a whole lot in modern front-end web development.</p>
<p>--</p>
<h2 id="advancedtypescriptnodejsblog">Advanced TypeScript &amp; Node.js blog</h2>
<p>If you enjoyed this article, you should <a href="https://khalilstemmler.com">check out my blog</a>. I write about <strong>Advanced TypeScript &amp; Node.js best practices for large-scale applications</strong> and teach developers how to write flexible, maintainable software.</p>
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
