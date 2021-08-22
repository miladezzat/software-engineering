---
card: "https://cdn-media-1.freecodecamp.org/images/1*cun5ECRCb1_QS4BcQI-r7A.png"
tags: [JavaScript]
description: by Simon Grimm
author: "Milad E. Fahmy"
title: "How to Build Your First Ionic 4 App with API Calls"
created: "2021-08-15T19:37:29+02:00"
modified: "2021-08-15T19:37:29+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-ionic tag-angular tag-tech tag-apps-tag ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build Your First Ionic 4 App with API Calls</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*cun5ECRCb1_QS4BcQI-r7A.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*cun5ECRCb1_QS4BcQI-r7A.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*cun5ECRCb1_QS4BcQI-r7A.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*cun5ECRCb1_QS4BcQI-r7A.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*cun5ECRCb1_QS4BcQI-r7A.png" alt="How to Build Your First Ionic 4 App with API Calls">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Simon Grimm</p>
<h1 id="how-to-build-your-first-ionic-4-app-with-api-calls">How to Build Your First Ionic 4 App with API Calls</h1>
<p>So you just noticed that Ionic 4 was released and you finally want to get started with cross-platform app development? Well, today is your day! We’ll go through building your first Ionic 4 application with HTTP Calls to the <a href="http://www.omdbapi.com/" rel="noopener">Open Movie Database</a>!</p>
<p>Whether you are completely new to Ionic or have used previous versions, we go through all the basics. We will cover how to set up<strong> a new app</strong>, <strong>routing</strong> and even <strong>API calls to display async data</strong> inside our app.</p>
<p>If you want to learn Ionic even faster you can also <a href="https://ionicacademy.com/" rel="noopener">check out my Ionic Academy</a> which was made for developers just like you!</p>
<p><em>Ready</em>? <strong>Go</strong>!</p>
<h3 id="setting-up-our-ionic-4-app">Setting up Our Ionic 4 App</h3>
<p>If you are new to Ionic you need to make sure you have the <a href="https://www.npmjs.com/get-npm" rel="noopener">Node Package Manager installed</a>. If you have worked with other web technologies before chances are pretty good you already got everything you need.</p>
<p>If you also haven’t used Ionic before, you need to install it through npm. Once installed you are finally ready to create your Ionic 4 project!</p>
<p>To set up a blank project you can use the <strong>Ionic CLI </strong>so we end up with a fresh Ionic 4 project with Angular support (<em>you could also use React or Vue, better support coming later this year</em>).</p>
<p>Once the project is created we <strong>cd</strong> into the folder. We use the CLI, which uses the <a href="https://cli.angular.io/" rel="noopener">Angular CLI</a> under the hood, to create new pages for our app that we want to display.</p><pre><code class="language-bash"># Install Ionic if you haven't before
npm install -g ionic
# Create a blank new Ionic 4 app with Angular support
ionic start movieApp blank --type=angular
cd movieApp
# Use the CLI to generate some pages and a service
ionic g page pages/movies
ionic g page pages/movieDetails
ionic g service services/movie</code></pre>
<p>You can now directly bring up your app by running the following command inside your project:</p><pre><code class="language-bash">ionic serve</code></pre>
<p>This will open the browser with the preview of your app which will <strong>reload automatically</strong> once you change anything inside your project.</p>
<p>Speaking of the project, we got a bunch of files and folders in here, let’s see what all this means. We will focus on the <strong>src</strong> folder of our app since we don’t have to worry about the rest for now.</p>
<figcaption>Your Ionic 4 Project</figcaption>
</figure>
<h3 id="app">App</h3>
<p>This is the folder where we will make all the code changes that follow later in this tutorial. It already contains a <strong>home</strong> folder that’s basically a page like we created before. I like to have all pages in their own <strong>pages </strong>folder so you can remove the home folder as well for now.</p>
<p>The <strong>pages</strong> folder contains the actual views/pages of our app, which means the element we will see on the screen. Right now we already got 2 pages in here, and each page you create with the CLI comes with 4 files:</p>
<ul>
<li>*.module.ts: The <strong>Angular module</strong> for a page. Each page is basically their own module (related to the Angular architecture) with imports and styling</li>
<li>*.page.html: The <strong>HTML</strong> markup for a page</li>
<li>*.page.scss: The <strong>styling</strong> for the specific page (more on global styling later)</li>
<li>*.page.spec.ts: An automatically added <strong>testing</strong> file for your page. Good if you want to set up automated unit tests</li>
<li>*.page.ts: The <strong>controller</strong> for a page that contains the Javascript code that manages the functionality</li>
</ul>
<p>The <strong>services</strong> folder contains our previously created service — this is about structuring your app according to best practices and separating concerns between the view and the actual data of your app. The service will take care of handling the API calls and simply return the data to our view later!</p>
<h3 id="assets">Assets</h3>
<p>This folder contains all the images, fonts or whatever assets you need for your app later down the road.</p>
<h3 id="environments">Environments</h3>
<p>From time to time your project might have a development, staging and production environment with different servers that your app targets. The environment folder helps to set up information for different environments. We can later build our Ionic app with a <strong>command line flag</strong> and it automatically takes the right values. Very handy!</p>
<h3 id="theme">Theme</h3>
<p>This folder only contains the <strong>variables.scss</strong> that contains predefined color information from Ionic. We can always change this file and even use a tool like the <a href="https://beta.ionicframework.com/docs/theming/color-generator" rel="noopener">Ionic Color Generator</a> to create our own flavored version of this file!</p>
<p>Outside of the folder we also have the <strong>global.scss. </strong>Here we can write some SCSS that will be globally applied to our app. We can also define it just for one page in their own styling files.</p>
<h3 id="other-files">Other Files</h3>
<p>The most relevant of the other files might be the <strong>index.html</strong> because just like with every other website, this file marks the entry point to our app! For now, though we don’t need to change a thing in here so let’s now start to get into the actual code.</p>
<h3 id="prerequisite-routing-http-calls">Prerequisite Routing &amp; HTTP Calls</h3>
<p>With Ionic 4 we move on from a proprietary routing concept to the standard <a href="https://angular.io/guide/router" rel="noopener">Angular Router</a>. The markup might look a bit more difficult in the beginning, but it actually makes totally sense.</p>
<p>For all the connections inside your app, you set up <strong>routing information</strong> upfront — just like you navigate around on a website!</p>
<p>In our app we need 2 routes:</p>
<ul>
<li><strong>/movies</strong> — Navigate to our first page which should display a list of movies</li>
<li><strong>/movies/:id</strong> — We want to be able to show the details for one movie so we add a param <strong>:id</strong> to the route that we can dynamically resolve</li>
</ul>
<p>We also need to connect the according page (<em>more specific</em>: the module of the page) to the route so Angular knows how to resolve a specific route. We supply this information using <strong>loadChildren</strong> which actually only gets a <strong>string to the module path</strong>.</p>
<p>This means we are not really importing another module here, therefore, the pages are using <strong>lazy loading. </strong>That means they will only be loaded once we navigate there!</p>
<p>To setup our routing information open our <strong>app/app-routing.module.ts</strong> and change it to:</p>
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
{ path: '', redirectTo: 'movies', pathMatch: 'full' },
{ path: 'movies', loadChildren: './pages/movies/movies.module#MoviesPageModule' },
{ path: 'movies/:id', loadChildren: './pages/movie-details/movie-details.module#MovieDetailsPageModule' }
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }</code></pre>
<figcaption>app-routing.module.ts</figcaption>
</figure>
<p>By making this change we have also disconnected the home page which was initially in the project (and which you might have deleted already at this point).</p>
<p>Now the app will load our movies page as the first page, great! You should also notice this change in your running <code>ionic serve</code> instance already.</p>
<p><strong>Tip:</strong> If you want to get a better feeling for how your app will look on a real device you can also run <code>ionic lab</code> instead of serve but you have to install the package upfront:</p><pre><code class="language-bash"># Install the Lab Package
npm i @ionic/lab
# Run your app with device preview and platform styles
ionic lab</code></pre>
<p>This package was previously bundled with every new app but needs to be installed for Ionic 4 now.</p>
<p><strong>/Tip End</strong></p>
<p>We also need to apply another change to our app as we want to make <strong>HTTP calls. </strong>Therefore we need to import another Angular module for making those requests.</p>
<p>The way of doing this is the same as with Ionic 3. We just need to add the <code>HttpClientModule</code> to our main module file and add it to the <strong>array of imports</strong> like this inside our <strong>app/app.module.ts</strong>:</p>
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
declarations: [AppComponent],
entryComponents: [],
imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
providers: [
StatusBar,
SplashScreen,
{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
],
bootstrap: [AppComponent]
})
export class AppModule {}</code></pre>
<figcaption>app.module.ts</figcaption>
</figure>
<p>Before we dive into more Ionic 4 code we first have to set up the service that powers our app and handles all the HTTP requests that we later want to call.</p>
<h3 id="making-http-requests">Making HTTP Requests</h3>
<p>A service is the same as in previous versions a provider and can be injected into our controller in order to call its functions.</p>
<p>In order to use the Open Movie Database you need to <a href="http://www.omdbapi.com/apikey.aspx" rel="noopener">request an API key</a> and insert it into our service — the process is free so go ahead right now.</p>
<p>With the API we can now search for strings and get results in form of movies, episodes or even games. Also, we can get detailed information for one specific object of those results so a perfect use case for our first Ionic 4 app!</p>
<p>Our service only needs 2 functions:</p>
<ul>
<li><code>searchData()</code>: This function searches for results to a specific title and search type – an enum we defined upfront to represent the types that we can pass to the API using TypeScript!</li>
<li><code>getDetails()</code>: This function returns the detailed information for one specific element, will be used on our details page</li>
</ul>
<p>Both functions will return an <code>Observable</code> which is like a Promise on steroids. No serious, it’s like a stream of events that we can <strong>subscribe</strong> to. Explaining this concept would take another post. For now, let’s use it and keep in mind that both of our functions are <strong>async</strong> — they will return the API data not immediately.</p>
<p>Now go ahead and change your <strong>services/movie.service.ts</strong> to:</p>
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// Typescript custom enum for search types (optional)
export enum SearchType {
all = '',
movie = 'movie',
series = 'series',
episode = 'episode'
}
@Injectable({
providedIn: 'root'
})
export class MovieService {
url = 'http://www.omdbapi.com/';
apiKey = ''; // &lt;-- Enter your own key here!
/**
* Constructor of the Service with Dependency Injection
* @param http The standard Angular HttpClient to make requests
*/
constructor(private http: HttpClient) { }
/**
* Get data from the OmdbApi
* map the result to return only the results that we need
*
* @param {string} title Search Term
* @param {SearchType} type movie, series, episode or empty
* @returns Observable with the search results
*/
searchData(title: string, type: SearchType): Observable&lt;any&gt; {
return this.http.get(`${this.url}?s=${encodeURI(title)}&amp;type=${type}&amp;apikey=${this.apiKey}`).pipe(
map(results =&gt; results['Search'])
);
}
/**
* Get the detailed information for an ID using the "i" parameter
*
* @param {string} id imdbID to retrieve information
* @returns Observable with detailed information
*/
getDetails(id) {
return this.http.get(`${this.url}?i=${id}&amp;plot=full&amp;apikey=${this.apiKey}`);
}
}</code></pre>
<figcaption>movie.service.ts</figcaption>
</figure>
<p>I’ve also added some documentation to the functions — <a href="https://ionicacademy.com/ionic-code-documentation/" rel="noopener">with a tool like Compodoc</a> you could now create nice documentation!</p>
<p>Alright, now we are finally ready for some more Ionic 4 code!</p>
<h3 id="searching-for-movies">Searching for Movies</h3>
<p>We start our apps functionality with the things that happen in the background and then build the view on top of it.</p>
<p>So right now we need to implement the logic to submit a search term and type to our service and receive the results. Therefore, we <strong>inject</strong> the service through our constructor so it’s available to the class.</p>
<p>In another function that we call <code>searchChanged()</code> we will now simply call the according function of our service and set the result to a local variable b&gt;results. Our view will later handle the data that comes from the API and display it using this variable.</p>
<p>We also keep 2 more variables for the searchTerm and type inside our class that we pass to the service. We will connect with them from the view as well so we can change them.</p>
<p>Now go ahead with the code for your controller inside the <strong>pages/movies/movies.page.ts</strong>:</p>
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
selector: 'app-movies',
templateUrl: './movies.page.html',
styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
results: Observable&lt;any&gt;;
searchTerm: string = '';
type: SearchType = SearchType.all;
/**
* Constructor of our first page
* @param movieService The movie Service to get data
*/
constructor(private movieService: MovieService) { }
ngOnInit() { }
searchChanged() {
// Call our service function which returns an Observable
this.results = this.movieService.searchData(this.searchTerm, this.type);
}
}</code></pre>
<figcaption>movies.page.ts</figcaption>
</figure>
<p>Now the view which looks a lot like Ionic 3 code, just a few of the elements changed their names and properties. For everyone new to Ionic in general: <strong>Welcome to your first Ionic components</strong>!</p>
<p>A page can be separated into 3 areas: Header, content, footer. In our case, we don’t want a footer so we only define the header area with a title and the content with our actual elements for the search.</p>
<p>The first element that affects the search is the <code>ion-searchbar</code> which is a simple input you have seen in many apps before to search for a term.</p>
<p>We always want to call our search functionality when the type or searchTerm changes. We can do this by catching the (ionChange) event of some of our elements.</p>
<p>Below we got a select drop down with options and the according value for the different types that we could pass back to the API.</p>
<p>You should have also noticed the [(ngModel)] syntax through which both elements are connected to our controller properties. If one side changes, the other will automatically get the new value as well (also known as <em>2-way data binding</em>).</p>
<p>So we got the search in place and now add another list with elements below our previous components.</p>
<p>For the list, we use an iteration over our results variable. Because this variable is an Observable (remember the implementation in our service) we need to add an Angular Pipe “| async” to it. The view subscribes to the Observable and handles the changes accordingly.</p>
<p>We also add the routing directly to this element by using <strong>[routerLink].</strong> We construct the path that we want to open when we click on the element. We use the <strong>imdbID</strong> property of the item so we can resolve the information on our details page later.</p>
<p>Besides that, we create the markup for one item using the <strong>Poster</strong> which is an image, the title, year and finally also a cool icon at the and based on the type of the item. Yes, those cool icons are already bundled with your app and are called <a href="https://ionicons.com/" rel="noopener">Ionicons</a>!</p>
<p>With all of that in mind change your <strong>pages/movies/movies.page.html</strong> to:</p>
&lt;ion-toolbar color="primary"&gt;
&lt;ion-title&gt;My Movie Search&lt;/ion-title&gt;
&lt;/ion-toolbar&gt;
&lt;/ion-header&gt;
&lt;ion-content&gt;
&lt;ion-searchbar [(ngModel)]="searchTerm" (ionChange)="searchChanged($event)"&gt;&lt;/ion-searchbar&gt;
&lt;ion-item&gt;
&lt;ion-label&gt;Select Searchtype&lt;/ion-label&gt;
&lt;ion-select [(ngModel)]="type" (ionChange)="searchChanged($event)"&gt;
&lt;ion-select-option value=""&gt;All&lt;/ion-select-option&gt;
&lt;ion-select-option value="movie"&gt;Movie&lt;/ion-select-option&gt;
&lt;ion-select-option value="series"&gt;Series&lt;/ion-select-option&gt;
&lt;ion-select-option value="episode"&gt;Episode&lt;/ion-select-option&gt;
&lt;/ion-select&gt;
&lt;/ion-item&gt;
&lt;ion-list&gt;
&lt;ion-item button *ngFor="let item of (results | async)" [routerLink]="['/', 'movies', item.imdbID]"&gt;
&lt;ion-avatar slot="start"&gt;
&lt;img [src]="item.Poster" *ngIf="item.Poster != 'N/A'"&gt;
&lt;/ion-avatar&gt;
&lt;ion-label text-wrap&gt;
&lt;h3&gt;{{ item.Title }}&lt;/h3&gt;
{{ item.Year }}
&lt;/ion-label&gt;
&lt;ion-icon slot="end" *ngIf="item.Type == 'movie'" name="videocam"&gt;&lt;/ion-icon&gt;
&lt;ion-icon slot="end" *ngIf="item.Type == 'series'" name="tv"&gt;&lt;/ion-icon&gt;
&lt;ion-icon slot="end" *ngIf="item.Type == 'game'" name="logo-game-controller-b"&gt;&lt;/ion-icon&gt;
&lt;/ion-item&gt;
&lt;/ion-list&gt;
&lt;/ion-content&gt;</code></pre>
<figcaption>movies.page.html</figcaption>
</figure>
<p>By now you should be able to search for a specific term inside your app and get a list of results — <strong>that’s already a big win</strong>!</p>
<figcaption>Searching for movie title works!</figcaption>
</figure>
<p>If you are coming form Ionic 3 you might have also noted another new property called <strong>slot</strong> so here’s some info on that:</p>
<p>Ionic 4 components are built using <a href="https://stenciljs.com/" rel="noopener">Stencil</a> (yeah, they actually created that tool as well!) so they are standard <strong>web components</strong> — you could import them basically everywhere on the web! These components also use the <a href="https://blog.ionicframework.com/shadow-dom-in-ionic-and-why-its-awesome/" rel="noopener">Shadow DOM API</a> and are basically living outside of the scope of your regular DOM elements.</p>
<p><strong>That means also standard styling will sometimes not affect these components like it was possible in previous versions</strong>!</p>
<p>In order to get information into these components, we can inject certain parts of HTML into their <strong>slots</strong> that are defined on these elements. You can <a href="https://github.com/ionic-team/ionic/blob/caa2c1e980f3e17a9e62911a330fca785ffbc9c9/core/src/components/item/item.tsx#L160-L165" rel="noopener">see how their implementation looks like</a> on the example of the ion-item we used here.</p>
<h3 id="presenting-detailed-information">Presenting Detailed Information</h3>
<p>Ok enough of background information, let’s put some more work into the details page of our app. We have implemented a route and we also created a button that passed an ID with that route so the details page will be open, but we need to get access to the ID!</p>
<p>With previous Ionic versions we could easily pass whole objects to new pages, this is now not a best practice anymore. Instead, we <strong>pass only small chunks of information</strong> (like an ID) with the URL. Otherwise, you would end up with a huge JSON stringified term inside the URL. This isn’t really something we want to have.</p>
<p>To get access to this ID field (that we already defined inside our routing in the beginning) we can use the <code>ActivatedRoute</code> and its properties.</p>
<p>So after we extract the ID from the params we can make another call to our service (that we injected through the constructor again) and get the detailed information for whatever ID we got.</p>
<p>Nothing really new so let’s add the following code to our <strong>pages/movie-details/movie-details.page.ts</strong>:</p>
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
selector: 'app-movie-details',
templateUrl: './movie-details.page.html',
styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
information = null;
/**
* Constructor of our details page
* @param activatedRoute Information about the route we are on
* @param movieService The movie Service to get data
*/
constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }
ngOnInit() {
// Get the ID that was passed with the URL
let id = this.activatedRoute.snapshot.paramMap.get('id');
// Get the information from the API
this.movieService.getDetails(id).subscribe(result =&gt; {
this.information = result;
});
}
openWebsite() {
window.open(this.information.Website, '_blank');
}
}</code></pre>
<figcaption>movie-details.page.ts</figcaption>
</figure>
<p>We also added another function to open a website using the window object and the information from the data of the API that we stored in the local <code>information</code> variable.</p>
<p>Now we just need to create a view based on the JSON information of the API. It always helps to log() out the info you got so you see keys that you can use to display some values.</p>
<p>On another note, we also have to add an <code>ion-back-button</code> to the header of that page in order to get a nice little back arrow to our previous movie list page. This was automatically done in v3 but needs to implemented manually as of v4!</p>
<p>Now finish your details view by changing your <strong>pages/movie-details/movie-details.page.html</strong> to:</p>
&lt;ion-toolbar color="primary"&gt;
&lt;ion-buttons slot="start"&gt;
&lt;ion-back-button defaultHref="/"&gt;&lt;/ion-back-button&gt;
&lt;/ion-buttons&gt;
&lt;ion-title&gt;{{ information?.Genre }}&lt;/ion-title&gt;
&lt;/ion-toolbar&gt;
&lt;/ion-header&gt;
&lt;ion-content padding&gt;
{{ information.Title }}
{{ information.Year }}
&lt;img [src]="information.Poster" class="info-img"&gt;
{{ information.Plot }}
&lt;ion-item lines="none"&gt;
&lt;ion-icon name="star-half" slot="start"&gt;&lt;/ion-icon&gt;
&lt;ion-label&gt;{{ information.imdbRating }}&lt;/ion-label&gt;
&lt;/ion-item&gt;
&lt;ion-item lines="none"&gt;
&lt;ion-icon name="clipboard" slot="start"&gt;&lt;/ion-icon&gt;
&lt;ion-label text-wrap&gt;{{ information.Director }}&lt;/ion-label&gt;
&lt;/ion-item&gt;
&lt;ion-item lines="none"&gt;
&lt;ion-icon name="contacts" slot="start"&gt;&lt;/ion-icon&gt;
&lt;ion-label text-wrap&gt;{{ information.Actors }}&lt;/ion-label&gt;
&lt;/ion-item&gt;
&lt;ion-button expand="full" (click)="openWebsite()" *ngIf="information.Website &amp;&amp; information.Website != 'N/A'"&gt;
&lt;ion-icon name="open" slot="start"&gt;&lt;/ion-icon&gt;
Open Website
&lt;/ion-button&gt;
&lt;/ion-content&gt;</code></pre>
<figcaption>movie-details.page.html</figcaption>
</figure>
<p>If you now take a look at your browser you might notice that the image looks waaaay to big as its taking all the space available. Let’s change this through some good old CSS so open your <strong>pages/movie-details/movie-details.page.scss</strong> and insert:</p>
max-height: 30vh;
object-fit: contain;
padding: 10px;
}</code></pre>
<figcaption>movie-details.page.scss</figcaption>
</figure>
<p>Now our results look a lot more appealing.</p>
<figcaption>Our finished Ionic 4 App</figcaption>
</figure>
<p>We can search, select a movie type, dive into a search result and have a fully functional Ionic 4 app with HTTP calls finished!</p>
<h3 id="conclusion">Conclusion</h3>
<p>While it was a straight forward experience to build our first Ionic 4 app there are so many things we haven’t talked enough about.</p>
<p>UI patterns like Tabs and side menu, CSS variables, responsive layout and PWA to just name a few on the side of Ionic and Angular.</p>
<p>And we haven’t even touched the Cordova side of things to actually build this app into a <strong>real native mobile app</strong>!</p>
<p>If you want to learn how to <strong>develop Ionic 4 apps as fast as possible</strong> and get them to the iOS &amp; Android app stores quickly you can <a href="https://ionicacademy.com/" rel="noopener">join the Ionic Academy today</a> and enjoy expert screencasts, a library of quick wins and a community to support you on your journey!</p>
<p>And of course, I (Simon) am also present inside to answer all your questions all the time</p>
<p>You can also find a video version of this guide below!</p>
<p><em>Originally published at <a href="https://ionicacademy.com/ionic-4-app-api-calls/" rel="noopener">ionicacademy.com</a> on January 24, 2019.</em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
