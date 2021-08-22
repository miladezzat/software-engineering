---
card: "https://cdn-media-1.freecodecamp.org/images/0*5P2Krzh734kVxaQJ."
tags: [JavaScript]
description: by Jake Lumetta
author: "Milad E. Fahmy"
title: "How to build a serverless CMS-powered Angular app"
created: "2021-08-15T19:45:21+02:00"
modified: "2021-08-15T19:45:21+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-angular tag-tech tag-tutorial tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a serverless CMS-powered Angular app</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*5P2Krzh734kVxaQJ. 300w,
https://cdn-media-1.freecodecamp.org/images/0*5P2Krzh734kVxaQJ. 600w,
https://cdn-media-1.freecodecamp.org/images/0*5P2Krzh734kVxaQJ. 1000w,
https://cdn-media-1.freecodecamp.org/images/0*5P2Krzh734kVxaQJ. 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*5P2Krzh734kVxaQJ." alt="How to build a serverless CMS-powered Angular app">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Jake Lumetta</p>
<h1 id="how-to-build-a-serverless-cms-powered-angular-app">How to build a serverless CMS-powered Angular app</h1>
<p>This tutorial is a follow-up to my <a href="https://medium.freecodecamp.org/how-to-build-a-serverless-cms-powered-vue-js-application-ee17f5957538" rel="noopener">previous tutorial</a> on how to build a serverless CMS-powered Vue.js application, and shows you how to build a serverless CMS-powered Angular app.</p>
<figcaption><a href="https://unsplash.com/@helloquence?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Helloquence</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>Angular, developed and maintained by Google engineers, has found a place across dynamic web applications and is an increasingly in-demand language. It’s a robust and comprehensive language for front-end development that is unit-testing ready, making it the language of choice for many developers. Angular simplifies the front-end development experience by extending HTML’s syntax to allow you to quickly create content management capability.</p>
<p>Because of Angular’s simplicity, developers are increasingly taking advantage of it to add CMS capability to websites.</p>
<p>For Wordpress users, one popular way to integrate content management capability is to work with the wp-api-angular library that allows you to interact with the Wordpress API and Angular applications. If you’re using Wordpress as a CMS platform, using Angular and the Wordpress API can decrease load times for content on your page.</p>
<p>For those not using Wordpress, there’s a new breed of API-based CMSs that greatly simplify things. We’ll discuss one example here.</p>
<p>In this article, we’ll use <a href="https://buttercms.com/" rel="noopener">ButterCMS</a> as an alternative to Wordpress and an example of a SaaS-based headless CMS that provides a hosted CMS dashboard and content API that you query from your Angular application. This means you don’t need to spin up any new infrastructure to add CMS to your Angular app.</p>
<p>This tutorial will demonstrate how to build a CMS-powered Angular application that has marketing pages (customer case studies), a blog, and FAQ, all powered via API. No servers needed!</p>
<h3 id="installation">Installation</h3>
<p>First, you’ll get started by installing the Angular cli.</p><pre><code>npm install -g @angular/cli</code></pre>
<p>Setup a new Angular project using Angular cli. By default, angular-cli uses CSS style, so adding the <code>—-style=scss</code> flag tells Angular CLI to use SCSS instead.</p><pre><code>ng new hello-buttercms-project --style=scsscd hello-buttercms-project</code></pre>
<p>Install Angular Material and Angular Material related packages.</p><pre><code>npm install --save @angular/material @angular/cdknpm install --save @angular/animations</code></pre>
<p>Install ButterCMS. Run this in your command line:</p><pre><code>npm install buttercms --save</code></pre>
<p>Butter can also be loaded using a CDN:</p><pre><code>&amp;lt;script src="https://cdnjs.buttercms.com/buttercms-1.1.1.min.js"&gt;&amp;lt;/script&gt;</code></pre>
<h3 id="quickly-get-started">Quickly get started</h3>
<p>Open the project in your code editor of choice. Under src/app, create a directory called <code>_services</code></p>
<p>We’ll create a file called <code>butterCMS.service.js</code>. This allows you to have your API Token in one place and not accidentally alter it.</p><pre><code>import * as Butter from 'buttercms';</code></pre><pre><code>export const butterService = Butter('b60a008584313ed21803780bc9208557b3b49fbb');</code></pre>
<p>You’ll import this file into any component where you want to use ButterCMS.</p>
<p>For a Quickstart, go to <code>src/app/hello-you/hello-you.component.ts</code> and import <code>butterService</code></p><pre><code>import {butterService} from '../_services';</code></pre>
<p>Inside the <code>HelloYouComponent</code>, create methods:</p><pre><code>fetchPosts() {  butter.post.list({    page: 1,    page_size: 10  })  .then((res) =&gt; {    console.log(‘Content from ButterCMS’)    console.log(res)  })}</code></pre>
<p>Now call this method when the component is loaded by adding it to the <code>OnInit</code> lifecycle hook:</p><pre><code>ngOnInit() {  this.fetchPosts();}</code></pre>
<p>This API request fetches a sample blog post. Your account comes with one example post which you’ll see in the response. If you get a response, it means you’re now able to connect to the API.</p>
<h3 id="add-marketing-pages">Add marketing pages</h3>
<p>Setting up CMS-powered Pages is a three-step process:</p>
<ol>
<li>Define the Page Type</li>
<li>Create a page</li>
<li>Integrate into your applicaton</li>
</ol>
<h4 id="define-page"><strong>Define Page</strong></h4>
<p>First, create a Page Type to represent your Customer Case Study pages. Next, define the fields you want for your customer case studies. With your Page Type defined, you can now create the first case study page. Specify the name and URL of the page, and then populate the content of the page.</p>
<p>With your page defined, the ButterCMS API will return it in JSON format like this:</p><pre><code>{    "data": {      "slug": "acme-co",      "fields": {        "facebook_open_graph_title": "Acme Co loves ButterCMS",        "seo_title": "Acme Co Customer Case Study",        "headline": "Acme Co saved 200% on Anvil costs with ButterCMS",        "testimonial": "&lt;p&gt;We’ve been able to make anvils faster than ever before! — &lt;em&gt;Chief Anvil Maker&lt;/em&gt;&lt;/p&gt;\r\n&lt;p&gt;&lt;img src=\"https://cdn.buttercms.com/NiA3IIP3Ssurz5eNJ15a\" alt=\"\" caption=\"false\" width=\"249\" height=\"249\" /&gt;&lt;/p&gt;",        "customer_logo": "https://cdn.buttercms.com/c8oSTGcwQDC5I58km5WV",        }     }  }</code></pre>
<p>This guide uses the Angular framework and Angular CLI to generate all the components and package our application.</p>
<p>Let’s get to the code.</p>
<h4 id="create-new-project">Create new project</h4><pre><code>ng new buttercms-project --style=scsscd buttercms-projectnpm install --save @angular/material @angular/cdknpm install --save @angular/animationsnpm install -S buttercmsng serve</code></pre>
<p>Your localhost:4200 should be ready to serve your Angular page.</p>
<h4 id="create-typescript-to-export-buttercms-service">Create typescript to export ButterCMS service</h4>
<p>Under <code>src/app</code> create a directory called <code>_services</code>. Create a file called <code>butterCMS.service.js</code>.</p><pre><code>import * as Butter from 'buttercms';export const butterService = Butter('your_api_token');</code></pre>
<h4 id="update-the-component-routes">Update the component routes</h4>
<p>These components are generated by Angular CLI using:</p>
<p><code>ng g component &lt;my-new-compone</code>nt&gt;</p>
<p>Under <code>src/app</code> create a file called <code>app-routing.module.ts</code></p><pre><code>import {NgModule} from '@angular/core';import {RouterModule, Routes} from '@angular/router';import {CustomerComponent} from './customer/listing/customer.listing.component';import {FaqComponent} from './faq/faq.component';import {BlogPostComponent} from './blog-post/listing/blog-post.component';import {HomeComponent} from './home/home.component';import {CustomerDetailsComponent} from './customer/details/customer.details.component';import {BlogPostDetailsComponent} from './blog-post/details/blog-post.details.component';import {FeedComponent} from './feed/feed.component';import {HelloYouComponent} from './hello-you/hello-you.component';</code></pre><pre><code>const appRoutes: Routes = [    {path: 'customer', component: CustomerComponent},    {path: 'customer/:slug', component: CustomerDetailsComponent},    {path: 'faq', component: FaqComponent},    {path: 'blog', component: BlogPostComponent},    {path: 'blog/:slug', component: BlogPostDetailsComponent},    {path: 'rss', component: FeedComponent},    {path: 'hello-you', component: HelloYouComponent},    {path: 'home', component: HomeComponent},    {path: '**', redirectTo: 'home'}];</code></pre><pre><code>@NgModule({    imports: [RouterModule.forRoot(appRoutes)],    exports: [RouterModule]})export class AppRoutingModule {}</code></pre>
<h3 id="set-up-the-customer-list-page">Set up the Customer List page</h3>
<p>Under <code>apps/customer</code> type: <code>ng g component</code></p>
<p>In the file <code>apps/customer/listing/customer.listing.component.ts</code> :</p>
<ol>
<li>Import <code>butterService</code></li>
<li>In <code>OnInit</code> hook, use <code>butterService</code> to get the list of customers</li>
<li>Store results in pages variable and markup (HTML) will be updated with the data</li>
</ol><pre><code>import {Component, OnInit} from '@angular/core';import {butterService} from '../../_services';</code></pre><pre><code>@Component({    selector: 'app-customer',    templateUrl: './customer.listing.component.html',    styleUrls: ['./customer.listing.component.scss']})</code></pre><pre><code>export class CustomerComponent implements OnInit {  public pages: any[];  constructor() { }</code></pre><pre><code>ngOnInit() {  butterService.page.list(‘customer_case_study’)    .then((res) =&gt; {      this.pages = res.data.data;  }); }}</code></pre>
<h3 id="set-up-the-customer-detail-page">Set up the Customer Detail page</h3>
<p>Under <code>apps/customer</code>, type <code>ng g component details</code> .</p><pre><code>apps/customer/details/customer.details.component.ts</code></pre>
<h4 id="create-customer-page">Create customer page</h4>
<ol>
<li>Import <code>butterService</code></li>
<li>In <code>OnInit</code> hook, use <code>butterService</code> to get the customer page given the slug in the URL path</li>
<li>Store results in page variable and markup (HTML) will be updated with the customer data</li>
</ol><pre><code>import {Component, OnInit} from '@angular/core';import {Observable} from 'rxjs/Observable';import {ActivatedRoute} from '@angular/router';import {butterService} from '../../_services';import {map, take} from 'rxjs/operators';</code></pre><pre><code>@Component({  selector: 'app-customer-details',  templateUrl: './customer.details.component.html',  styleUrls: ['./customer.details.component.scss']})</code></pre><pre><code>export class CustomerDetailsComponent implements OnInit {  constructor(protected route: ActivatedRoute) { }</code></pre><pre><code>  protected slug$: Observable&lt;string&gt;;  public page: any;</code></pre><pre><code>  ngOnInit() {    this.slug$ = this.route.paramMap    .pipe(      map(params =&gt; (params.get('slug')))   );</code></pre><pre><code>    this.slug$.pipe(      take(1))        .subscribe(slug =&gt; {          butterService.page.retrieve('customer_case_study', slug)            .then((res) =&gt; {              this.page = res.data.data;            }).catch((res) =&gt; {            console.log(res);          });        });      }    }</code></pre>
<p>You can now navigate to the Customer Page via the list of all Customer Pages or directly via URL.</p>
<h3 id="add-a-knowledge-base">Add a knowledge base</h3>
<h4 id="set-up-content-fields">Set up content fields</h4>
<p>Let’s suppose you want to add a CMS to a static FAQ page with a title and a list of questions with answers.</p>
<p>Making your content dynamic with Butter is a two-step process:</p>
<ol>
<li>Setup custom content fields in Butter</li>
<li>Integrate the fields into your application</li>
</ol>
<p>To setup custom content fields, first sign in to the Butter dashboard.</p>
<p>Create a new workspace or click on an existing one. Workspaces let you organize content fields in a friendly way for content editors and have no effect on development or the API. For example, a real-estate website might have a workspace called “Properties” and another called “About Page”.</p>
<p>Once you’re in a workspace click the button to create a new content field. Choose the “Object” type and name the field “FAQ Headline.”</p>
<p>After saving, add another field, but this time choose the “Collection” type and name the field <code>FAQ Items</code> .</p>
<p>On the next screen, setup two properties for items in the collection.</p>
<p>Now go back to your workspace and update your heading and FAQ items.</p>
<h3 id="integrate-your-app">Integrate your app</h3>
<h4 id="create-faq-component">Create FAQ Component</h4>
<p>Under <code>apps</code> type: <code>ng g component faq</code></p><pre><code>apps/faq/faq.component.ts</code></pre>
<h4 id="set-up-oninit-hook-to-load-faq">Set up onInit hook to load FAQ</h4><pre><code>import {Component, OnInit} from '@angular/core';import {butterService} from '../_services';</code></pre><pre><code>@Component({  selector: 'app-faq',  templateUrl: './faq.component.html',  styleUrls: ['./faq.component.scss']})</code></pre><pre><code>export class FaqComponent implements OnInit {  constructor() {}</code></pre><pre><code>  public faq: any = {      items: [],      title: 'FAQ' };</code></pre><pre><code>ngOnInit() {  butterService.content.retrieve(['faq_headline', 'faq_items'])    .then((res) =&gt; {      console.log(res.data.data);      this.faq.title = res.data.data.faq_headline;      this.faq.items = res.data.data.faq_items;    });  }}</code></pre>
<p>The values entered in the Butter dashboard will immediately update the content in our app.</p>
<h3 id="blogging">Blogging</h3>
<p>To display posts, you need to create a <code>/blog</code> route in your app and fetch blog posts from the Butter API, as well as a <code>/blog/:slug</code> route to handle individual posts.</p>
<p>See the API reference for additional options such as filtering by category or author. The response also includes some metadata we’ll use for pagination.</p>
<h4 id="set-up-blog-homepage">Set up Blog Homepage</h4>
<p>Under <code>apps/blog-post</code>, type: <code>ng g component listing</code> .</p><pre><code>apps/blog-post/listing/blog-post.listing.component.ts</code></pre>
<p>Update component to get all posts:</p>
<ol>
<li>Import <code>butterService</code></li>
<li>Get all post <code>onInit</code></li>
</ol><pre><code>import {Component, OnInit} from '@angular/core';import {butterService} from '../../_services';</code></pre><pre><code>@Component({  selector: 'app-blog-post',  templateUrl: './blog-post.component.html',  styleUrls: ['./blog-post.component.scss']})export class BlogPostComponent implements OnInit { public posts: any[];</code></pre><pre><code> constructor() { }</code></pre><pre><code>ngOnInit() {  butterService.post.list({  page: 1,  page_size: 10}).then((res) =&gt; {  console.log(res.data)  this.posts = res.data.data;  }); }}</code></pre>
<h4 id="set-up-blog-post-page">Set up Blog Post page</h4>
<p>Under <code>apps/blog-post</code>, type: <code>ng g component details</code></p><pre><code>apps/blog-post/details/blog-post.details.component.ts</code></pre>
<p>To show a single post:</p>
<ol>
<li>Import <code>butterService</code></li>
<li>In <code>OnInit</code> hook, use <code>butterService</code> to get the blog-post post given the slug in the URL path</li>
<li>Store results in post variable and markup (HTML) will be updated with the customer data</li>
</ol><pre><code>import {Component, OnInit, ViewEncapsulation} from '@angular/core';import {Observable} from 'rxjs/Observable';import {ActivatedRoute} from '@angular/router';import {butterService} from '../../_services';import {map, take} from 'rxjs/operators';</code></pre><pre><code>@Component({  selector: 'app-blog-post-details',  templateUrl: './blog-post.details.component.html',  styleUrls: ['./blog-post.details.component.scss'],  encapsulation: ViewEncapsulation.None})</code></pre><pre><code>export class BlogPostDetailsComponent implements OnInit {</code></pre><pre><code>    constructor(protected route: ActivatedRoute) {    }</code></pre><pre><code>    protected slug$: Observable&lt;string&gt;;    public post = {      meta: null,      data: null};</code></pre><pre><code>ngOnInit() {  this.slug$ = this.route.paramMap      .pipe(        map(params =&gt; (params.get('slug')))      );</code></pre><pre><code>  this.slug$.pipe(      take(1))      .subscribe(slug =&gt; {        butterService.post.retrieve(slug)          .then((res) =&gt; {            this.post = res.data;          }).catch((res) =&gt; {          console.log(res);       });   }); }}</code></pre>
<p>Now your app has a working blog that can be updated easily in the ButterCMS dashboard.</p>
<h3 id="categories-tags-and-authors">Categories, tags, and authors</h3>
<p>Use Butter’s APIs for categories, tags, and authors to feature and filter content on your blog.</p>
<h4 id="list-all-categories-and-get-posts-by-category">List all categories and get posts by category</h4>
<p>Call these methods on the <code>onInit()</code> lifecycle hook:</p><pre><code>methods: { ... getCategories() {   butter.category.list()     .then((res) =&gt; {       console.log('List of Categories:')       console.log(res.data.data)     }) }, getPostsByCategory() {   butter.category.retrieve('example-category', {       include: 'recent_posts'     })     .then((res) =&gt; {       console.log('Posts with specific category:')       console.log(res)     })   } }, created() { ... this.getCategories() this.getPostsByCategory()}</code></pre><pre><code> getCategories() {  butter.category.list()  .then((res) =&gt; {   console.log(‘List of Categories:’)   console.log(res.data.data)  }) }, getPostsByCategory() {  butter.category.retrieve(‘example-category’, {   include: ‘recent_posts’  })  .then((res) =&gt; {   console.log(‘Posts with specific category:’)   console.log(res)  }) }},created() { … this.getCategories() this.getPostsByCategory()}</code></pre>
<h3 id="wrap-up">Wrap up</h3>
<p>Congrats, you’ve successfully turned your static Angular application into a CMS-powered app using content APIs and thereby maintaining a serverless architecture. Your development team can take advantage of the time-saving aspects of Angular, and you’ve saved even more time by using a serverless CMS.</p>
<p><em>If you’ve enjoyed this article, please help it spread by clapping below! For more content like this, follow us on<a href="https://twitter.com/ButterCMS" rel="noopener"> Twitter</a> and<a href="https://buttercms.com/blog/" rel="noopener"> subscribe</a> to our blog.</em></p>
<p><em>And if you want to add a blog or <a href="https://buttercms.com/angular-cms/" rel="noopener">Angular CMS</a> to your website without messing around with Wordpress,<a href="https://buttercms.com/" rel="noopener"> you should try Butter CMS</a>.</em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
