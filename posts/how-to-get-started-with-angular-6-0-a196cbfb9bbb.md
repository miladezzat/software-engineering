---
card: "https://cdn-media-1.freecodecamp.org/images/1*mmxWHaqZZtNMs_ggYnx8hg.jpeg"
tags: [JavaScript]
description: Angular has released its latest version, Angular 6.0. In this
author: "Milad E. Fahmy"
title: "How to get started with Angular 6.0"
created: "2021-08-15T19:45:58+02:00"
modified: "2021-08-15T19:45:58+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-visual-studio-code tag-angularjs tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to get started with Angular 6.0</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*mmxWHaqZZtNMs_ggYnx8hg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*mmxWHaqZZtNMs_ggYnx8hg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*mmxWHaqZZtNMs_ggYnx8hg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*mmxWHaqZZtNMs_ggYnx8hg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*mmxWHaqZZtNMs_ggYnx8hg.jpeg" alt="How to get started with Angular 6.0">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h4 id="learn-what-s-new-and-build-an-app">Learn what’s new and build an app</h4>
<p>Angular has released its latest version, Angular 6.0. In this article, we will understand the new features of Angular 6.0 and also set up a new project with the help of Angular CLI 6.0 and Visual Studio Code.</p>
<h3 id="what-s-new-in-angular-6-0">What’s new in Angular 6.0?</h3>
<h4 id="ng-update">ng update</h4>
<p>A new CLI command that will update your project dependencies to their latest versions.</p>
<h4 id="ng-add">ng add</h4>
<p>Another new CLI command that makes adding new capabilities to your project easier.</p>
<h4 id="angular-elements">Angular Elements</h4>
<p>This is a new feature that allows us to compile Angular components to native web components which we can use in our Angular app.</p>
<h4 id="template-element-is-deprecated">&lt;template&gt; element is deprecated</h4>
<p>You can’t use &lt;template&gt; anymore inside of your component templates. You need to use &lt;ng-template&gt; instead.</p>
<h4 id="library-support">Library support</h4>
<p>Angular CLI now has the support for creating and building libraries. To create a library project within your CLI workspace, run the following command: ng generate library &lt;name&gt; (for example: ng generate library my-demo-lib)</p>
<h4 id="angular-material-starter-components">Angular Material Starter Components</h4>
<p>If you run “ng add @angular/material” to add material to an existing application, you will also be able to generate 3 new starter components:</p>
<ul>
<li><strong>Material Sidenav</strong><br> A starter component including a toolbar with the app name and the side navigation</li>
<li><strong>Material Data Table</strong><br> A starter data table component that is pre-configured with a datasource for sorting and pagination</li>
</ul>
<h4 id="workspace-support">Workspace support</h4>
<p>Angular CLI now has support for workspaces containing multiple projects, such as multiple applications and/or libraries.</p>
<h4 id="the-angular-cli-json-file-has-been-deprecated">The “.angular-cli.json” file has been deprecated</h4>
<p>Angular projects will now use “angular.json” instead of “.angular-cli.json” for build and project configuration.</p>
<h4 id="use-rxjs-v6">Use RxJS V6</h4>
<p>Angular 6 will also allow us to use RxJS V6 with our application.</p>
<h4 id="tree-shakable-providers">Tree Shakable Providers</h4>
<p>Angular 6.0 allows us to bundle services into the code base in modules where they are injected. This will help us to make our application smaller.</p>
<p>For example: Earlier, we used to reference our services as below.</p><pre><code>// In app.module.ts    @NgModule({    ...    providers: [MyService]  })  export class AppModule {}    // In myservice.ts     import { Injectable } from '@angular/core';    @Injectable()  export class MyService {    constructor() { }  }</code></pre>
<p>This approach will still work, but Angular 6.0 provides a new and easier alternative to this. We no longer need to add references in our NgModule. We can inject the reference directly into the service. Therefore, we can use the service as below:</p><pre><code>// In myservice.ts    import { Injectable } from '@angular/core';    @Injectable({    providedIn: 'root',  })  export class MyService {    constructor() { }  }</code></pre>
<p>Those are the new features/improvements in the latest release of Angular. Let’s move on and create our first application using Angular 6.0.</p>
<h3 id="prerequisites">Prerequisites</h3>
<ul>
<li>Install the latest version of Node.js from <a href="https://nodejs.org/en/download/" rel="noopener">here</a></li>
<li>Install Visual Studio Code from <a href="https://code.visualstudio.com/" rel="noopener">here</a></li>
</ul>
<p>Installing Node.js will also install npm on your machine. After installing Node.js, open the command prompt and run the following set of commands to check the version of Node and npm installed on your machine.</p>
<p>Refer to the below image:</p>
<p>Now that we’ve installed Node and npm, the next step is to install Angular CLI. Run the following command in a command window. This will install Angular 6.0 CLI globally on your machine.</p>
<p>Open VS Code and navigate to View &gt;&gt; Integrated Terminal.</p>
<p>This will open a terminal window in VS Code.</p>
<p>Type the following sequence of commands in the terminal window. These commands will create a directory with the name “<em>ng6Demo</em>” and then create an Angular application with the name “<em>ng6App</em>” inside that directory.</p>
<ul>
<li>mkdir ng6Demo</li>
<li>cd ng6Demo</li>
<li>ng new ng6App</li>
</ul>
<p>There we go — we have created our first Angular 6 application using VS Code and Angular CLI. Now run the following command to open the project.</p>
<p>Refer to the image below:</p>
<p>This will open the code file of our application in a new VS Code window. You can see the following file structure in Solution Explorer.</p>
<p>Notice that the folder structure is a little bit different from the older version of Angular. We have a new “angular.json” file instead of the old “.angular-cli.json” file. This config file will still serve the same task as before, but the schema has changed a bit.</p>
<p>Open the package.json file and you can observe that we have the latest Angular 6.0.0 packages installed in our project.</p><pre><code>{    "name": "ng6-app",    "version": "0.0.0",    "scripts": {      "ng": "ng",      "start": "ng serve",      "build": "ng build",      "test": "ng test",      "lint": "ng lint",      "e2e": "ng e2e"    },    "private": true,    "dependencies": {      "@angular/animations": "^6.0.0",      "@angular/common": "^6.0.0",      "@angular/compiler": "^6.0.0",      "@angular/core": "^6.0.0",      "@angular/forms": "^6.0.0",      "@angular/http": "^6.0.0",      "@angular/platform-browser": "^6.0.0",      "@angular/platform-browser-dynamic": "^6.0.0",      "@angular/router": "^6.0.0",      "core-js": "^2.5.4",      "rxjs": "^6.0.0",      "zone.js": "^0.8.26"    },    "devDependencies": {      "@angular/compiler-cli": "^6.0.0",      "@angular-devkit/build-angular": "~0.6.0",      "typescript": "~2.7.2",      "@angular/cli": "~6.0.0",      "@angular/language-service": "^6.0.0",      "@types/jasmine": "~2.8.6",      "@types/jasminewd2": "~2.0.3",      "@types/node": "~8.9.4",      "codelyzer": "~4.2.1",      "jasmine-core": "~2.99.1",      "jasmine-spec-reporter": "~4.2.1",      "karma": "~1.7.1",      "karma-chrome-launcher": "~2.2.0",      "karma-coverage-istanbul-reporter": "~1.4.2",      "karma-jasmine": "~1.1.1",      "karma-jasmine-html-reporter": "^0.2.2",      "protractor": "~5.3.0",      "ts-node": "~5.0.1",      "tslint": "~5.9.1"    }  }</code></pre>
<p>The name of our Angular application is <em>ng6app</em> which is inside <em>ng6demo</em> directory.</p>
<p>So, we will first navigate to our application using the below commands.</p>
<p>And then we use the following command to start the web server.</p>
<p>After running this command, you can see that it is asking to open <a href="http://localhost:4200" rel="noopener"><em>http://localhost:4200</em></a> in your browser. So, open any browser on your machine and navigate to this URL. Now, you can see the following page.</p>
<p>Now we will try to change the welcome text on the screen. Navigate to <em>/src/app/app.component.ts</em> file and replace the code with the below code.</p><pre><code>import { Component } from '@angular/core';    @Component({    selector: 'app-root',    templateUrl: './app.component.html',    styleUrls: ['./app.component.css']  })  export class AppComponent {    title = 'Csharp Corner';  }</code></pre>
<p>Now open the browser, you can see that the web page has been updated with new welcome message “Welcome to Csharp Corner!”</p>
<p>In this article we learned about the new features of Angular 6.0. We have installed the Angular 6.0 CLI and created our first Angular 6.0 application with the help of Visual Studio Code. We have also customized the welcome message on the webpage.</p>
<p>You can also find this article at <a href="https://www.c-sharpcorner.com/article/getting-started-with-angular-6/" rel="noopener">C# Corner</a>.</p>
<p>You can check my other articles on Angular <a href="http://ankitsharmablogs.com/category/angular/" rel="noopener">here</a></p>
<p>Originally published at <a href="https://ankitsharmablogs.com/" rel="noopener">https://ankitsharmablogs.com/</a></p>
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
