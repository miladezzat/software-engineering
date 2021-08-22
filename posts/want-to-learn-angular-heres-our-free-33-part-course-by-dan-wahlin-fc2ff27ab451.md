---
card: "https://cdn-media-1.freecodecamp.org/images/1*SaVwtG8cWgCh1WFYsIa2Fw.png"
tags: [Angular]
description: "According to the Stack Overflow developer survey 2018, Angula"
author: "Milad E. Fahmy"
title: "Learn Angular in this free 33-part course by Angular-expert Dan Wahlin"
created: "2021-08-16T10:10:37+02:00"
modified: "2021-08-16T10:10:37+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-angular tag-angularjs tag-javascript tag-front-end-development tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">Learn Angular in this free 33-part course by Angular-expert Dan Wahlin</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*SaVwtG8cWgCh1WFYsIa2Fw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*SaVwtG8cWgCh1WFYsIa2Fw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*SaVwtG8cWgCh1WFYsIa2Fw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*SaVwtG8cWgCh1WFYsIa2Fw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*SaVwtG8cWgCh1WFYsIa2Fw.png" alt="Learn Angular in this free 33-part course by Angular-expert Dan Wahlin">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
ng --help
ng new my-app-name
ng generate [component | directive | pipe | service | class | interface | enum | guard]
ng build
ng serve
ng lint
ng tests
id: number;
name: string;
city: string;
orderTotal?: number;
customerSince: any;
}
</code></pre><p>And to bind DOM events such as click:</p><pre><code class="language-html">&lt;button (click)="changeVisibility()"&gt;Show/Hide&lt;/button&gt;
// A sorter service will handle the sorting
}
</code></pre><p>Add binding in <code>customers-list.component.html</code>:</p><pre><code class="language-html">&lt;tr&gt;
&lt;th (click)="sort('name')"&gt;Name&lt;/th&gt;
&lt;th (click)="sort('city')"&gt;City&lt;/th&gt;
&lt;th (click)="sort('orderTotal')"&gt;Order Total&lt;/th&gt;
&lt;/tr&gt;
</code></pre><h3 id="part-17-data-binding-input-properties">Part #17: Data Binding — Input Properties</h3><p>We have some data in a <code>people</code> array in our <code>customers.component</code> and we need to pass it into our <code>filteredCustomers</code> array in <code>customers-list.component</code>, effectively passing data from a parent component to a child.</p><p>For that we will use Angular’s <code>Input</code> property which relies on a decorator named Input():</p><pre><code class="language-ts">@Input() get customers(): ICustomer[] {
return this._customers
}
set customers(value: ICustomer[]) {
if (value) {
this.filteredCustomers = this._customers = value;
this.calculateOrders();
}
}
</code></pre><p>And bind to it in our parent component template to pass data from parent to child (app-customers-list in this case):</p><pre><code class="language-html">&lt;app-customers-list [customers]="people"&gt;&lt;/app-customers-list&gt;
{{ cust.name | titlecase }} // renders John
</code></pre><p>But sometimes you might want to have your own custom pipe and Dan shows us how to build a custom <code>capitalize</code> pipe (note that Angular includes one called <code>titlecase</code> — but we’re learning here!) and how to wire it up to use in our application.</p><h3 id="part-19-data-binding-adding-filtering">Part #19: Data Binding — Adding Filtering</h3><p>In this cast, Dan walks us through adding functionality to our <code>filter-textbox.component</code> from Part #11</p><p>We learn more about Angular <code>Output</code> and <code>EventEmitter</code> properties, create our filter event handler and bind it to our filter textbox:</p><pre><code class="language-html">&lt;filter-textbox (changed)="filter($event)"&gt;&lt;/filter-textbox&gt;
</code></pre><p>Now we can inject our <code>DataService</code> straight into our component’s constructor:</p><pre><code class="language-ts">constructor(private dataService: DataService) {}
</code></pre><h3 id="part-24-services-and-http-subscribing-to-an-observable">Part #24: Services and Http — Subscribing to an Observable</h3><p>Now we can use our injected <code>dataService</code>, call <code>getCustomers()</code> and subscribe to our <code>Observable&lt;ICustomer[]&gt;</code> to get the data.</p><p>Which is pretty straightforward:</p><pre><code class="language-ts">ngOnInit() {
this.title = 'Customers';
this.dataService.getCustomers()
.subscribe((customers: ICustomer[]) =&gt;
this.people = customers);
</code></pre><p>Now we have one last service to look at — <code>SorterService</code></p><h3 id="part-25-services-and-http-using-a-sorterservice">Part #25: Services and Http — Using a SorterService</h3><p>Currently, if we click on our column headers nothing would happen.</p><p>Dan handily provided a prewritten service for us, which we can use, so in this chapter, we will practice bringing in service into our components, in this case, <code>customers-list.component</code>.</p><p>As with other services we need to import it:</p><pre><code class="language-ts">import { SorterService } from '../../core/sorter.service';
</code></pre><p>Then we inject <code>SorterService</code> into our constructor:</p><pre><code class="language-ts">constructor(private sorterService: SorterService) {}
</code></pre><p>Dependency injection makes it extremely easy to access reusable code such as the sorter or data services.</p><p>Lastly, we use it in our <code>sort()</code> function:</p><pre><code class="language-ts">sort(prop: string) {
this.sorterService.sort(this.filteredCustomers, prop);
}
{ path: '', pathMatch: 'full', redirectTo: '/customers'},
{ path: '**', redirectTo: '/customers' }
];
{ path: 'customers', component: CustomersComponent }
];
{ path: 'orders/:id', component: OrdersComponent}
];
</code></pre><p>Note the <code>/:id</code> syntax. In routing the <code>:</code> symbol indicates that the value after it will be dynamically replaced and <code>id</code> is just a variable, so it can be anything like <code>:country</code> or <code>:book</code>.</p><h3 id="part-31-routing-accessing-route-parameters">Part #31: Routing — Accessing Route Parameters</h3><p>In the previous screencast we saw how to create <code>orders/:id</code> route and now <code>orders.component</code> needs to somehow grab that <code>id</code> and display customer related orders. To do that we need to access the <code>id</code> route parameter.</p><p>One way of doing it would be:</p><pre><code class="language-ts">let id = this.route.paramMap.get('id');
</code></pre><p>The benefit of this way is that we can subscribe to <code>paramMap</code> and get notified when any of the data in <code>id</code> changes. But we only need it once.</p><p>We can use <code>snapshot</code> for that:</p><pre><code class="language-ts">let id = this.route.snapshot.paramMap.get('id')
</code></pre><p><code>snapshot</code> just takes a kind of an instant picture of your URL and gives it to you, which perfect as that’s what we need in this situation.</p><p>But now we have a problem. Our <code>id</code> is a string, but to get an order from our <code>DataService</code> it needs to be a number. We can convert it with <code>parseInt()</code>, but Dan teaches us a neat <code>+</code> trick:</p><pre><code class="language-ts">let id = +this.route.snapshot.paramMap.get('id')
</code></pre><p>Now we can call <code>DataService</code> to get the order and render it to <code>orders.component</code>.</p><h3 id="part-32-routing-linking-to-routes-with-the-routerlink-directive">Part #32: Routing — Linking to Routes with the routerLink Directive</h3><p>The last thing we want to do is to add a link on a customer’s name, so we can click it to see their orders.</p><p>In part #28 we’ve added <code>&lt;router-outlet&gt;&lt;/router-outlet</code> and now we just need to tell our app that we want to display <code>orders.component</code> when we navigate to <code>/orders/:id</code>.</p><p>We can do it by adding a link to our customer’s name in <code>customers-list.component.html</code> in a row where we’re mapping all the data to be displayed. We already have our customer object there, so we can just pass <code>id</code> to our route.</p><pre><code class="language-html">&lt;a [routerLink]="['/orders', cust.id]"&gt;
{{ cust.name | capitalize }}
&lt;/a&gt;
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
