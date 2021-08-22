---
card: "https://cdn-media-1.freecodecamp.org/images/1*TzObK_L_fue2CAxYOG-CnA.jpeg"
tags: [JavaScript]
description: Angular has released its latest version, Angular 7.0. In this
author: "Milad E. Fahmy"
title: "What’s new in Angular 7.0 and how you can upgrade"
created: "2021-08-15T19:40:38+02:00"
modified: "2021-08-15T19:40:38+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-angularjs tag-tech tag-programming tag-learning ">
<header class="post-full-header">
<h1 class="post-full-title">What’s new in Angular 7.0 and how you can upgrade</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*TzObK_L_fue2CAxYOG-CnA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*TzObK_L_fue2CAxYOG-CnA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*TzObK_L_fue2CAxYOG-CnA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*TzObK_L_fue2CAxYOG-CnA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*TzObK_L_fue2CAxYOG-CnA.jpeg" alt="What’s new in Angular 7.0 and how you can upgrade">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h3 id="introduction">Introduction</h3>
<p>Angular has released its latest version, Angular 7.0. In this article, we will explore the following points:</p>
<ul>
<li>What is new in Angular 7.0</li>
<li>Creating your first Angular 7.0 application using Angular CLI</li>
<li>How to update your existing Angular application to Angular 7.0</li>
</ul>
<h3 id="what-s-new-in-angular-7-0">What’s new in Angular 7.0?</h3>
<ol>
<li>While creating a new Angular application, the Angular CLI will prompt the user to select if they want to add features like Angular routing or the format of the stylesheet they want to use in their application</li>
<li>Angular 7.0 applications will use the Bundle Budget feature of Angular CLI. This will warn developers if the application bundle size exceeds the predefined limit. The default value for the warning is set to 2MB, and for errors it is 5MB. This value is configurable and can be changed from the <code>angular.json</code> file. This feature enhances the application’s performance considerably.</li>
<li>The Component Dev Kit (CDK) of Angular Material also receives some new features as part of this update. The two newly added feature of the CDK are:</li>
</ol>
<ul>
<li><strong><strong>Virtual Scrolling </strong></strong>If you are trying to load a large list of elements, then it can affect the application’s performance. The <code>&lt;cdk-virtual-scroll-viewport&gt;</code> tag can be used to load only the visible part of the list on the screen. It will render only the items that can fit on the screen. When a user scrolls through the list then the DOM will load and unload the elements dynamically based on the display size. This feature is not to be confused with infinite scrolling which is altogether a different strategy to load elements. You can read more about Virtual Scrolling <a href="https://material.angular.io/cdk/scrolling/overview">here</a>.</li>
<li><strong>Drag and Drop</strong><br>We can easily add the drag and drop feature to an item. It supports features such as free dragging of an element, reordering items of a list, moving items between list, animation, adding a custom drag handle, and restricted dragging along X or Y axis. You can read more about Drag and Drop <a href="https://material.angular.io/cdk/drag-drop/overview" rel="noopener">here</a>.</li>
</ul>
<p>4. The <code>mat-form-field</code> will now support the use of the native select element. This will provide enhanced performance and usability to the application. Read more about this feature <a href="https://material.angular.io/components/select/overview" rel="noopener">here</a>.</p>
<p>5. Angular 7.0 has updated its dependencies to support Typescript 3.1, RxJS 6.3 and Node 10.</p>
<p>Now we will proceed to create our first Angular 7 application.</p>
<h3 id="prerequisites">Prerequisites</h3>
<ul>
<li>Install the latest version of Node.js from <a href="https://nodejs.org/en/download/" rel="noopener">here</a></li>
<li>Install Visual Studio Code from <a href="https://code.visualstudio.com/" rel="noopener">here</a></li>
</ul>
<p>Installing Node.js will also install npm on your machine. After installing Node.js, open the command prompt. Run the following set of commands to check the version of node and npm installed on your machine.</p>
<ul>
<li>node -v</li>
<li>npm -v</li>
</ul>
<p>Refer to the image below:</p>
<h3 id="installing-angular-cli"><strong>Installing Angular CLI</strong></h3>
<p>Angular CLI is the Command Line interface for Angular. It helps us to initialize, develop and maintain Angular applications easily.</p>
<p>To install Angular CLI, run the following command in the command window:</p><pre><code class="language-bash">npm i -g @angular/cli</code></pre>
<p>This will install Angular CLI 7.0 globally in your machine. Refer to the image below:</p>
<p>To check the version of angular CLI installed in your machine, run the following command:</p>
<p>Refer to the image below:</p>
<h3 id="create-the-angular-7-app"><strong>Create the Angular 7 app</strong></h3>
<p>Open Visual Studio Code and navigate to <code>View &gt;&gt; Te</code>rminal. This will open the VS code terminal window. Alternatively, you can also use the keyboard sho<code>rtcut </code>ctrl+` to open the terminal window.</p>
<p>Type the following sequence of commands in the terminal window. These commands will create a directory named “ng7Demo”. Then create an Angular application with the name “ng7App” inside that directory.</p>
<ul>
<li>mkdir ng7Demo</li>
<li>cd ng7Demo</li>
<li>ng new ng7App</li>
</ul>
<p>As you run the ng new command, the Angular CLI will ask you to make selections in the following two options:</p>
<ol>
<li>Would you like to add Angular routing? (y/N)</li>
<li>Which stylesheet format would you like to use?</li>
</ol>
<p>Once you select the options and hit enter, the Angular 7.0 application will be created.</p>
<p>Refer to the below Gif for better understanding.</p>
<p>Once the application is created successfully, run the following command to open the project:</p>
<ul>
<li>code .</li>
</ul>
<p>Refer to the image below:</p>
<p>This will open the code file of our application in a new VS Code window. You can see the following file structure in Solution Explorer.</p>
<p>Open the package.json file and you can observe that we have the latest Angular 7.0.0 packages installed in our project.</p><pre><code class="language-json">{
"name": "ng7-app",
"version": "0.0.0",
"scripts": {
"ng": "ng",
"start": "ng serve",
"build": "ng build",
"test": "ng test",
"lint": "ng lint",
"e2e": "ng e2e"
},
"private": true,
"dependencies": {
"@angular/animations": "~7.0.0",
"@angular/common": "~7.0.0",
"@angular/compiler": "~7.0.0",
"@angular/core": "~7.0.0",
"@angular/forms": "~7.0.0",
"@angular/http": "~7.0.0",
"@angular/platform-browser": "~7.0.0",
"@angular/platform-browser-dynamic": "~7.0.0",
"@angular/router": "~7.0.0",
"core-js": "^2.5.4",
"rxjs": "~6.3.3",
"zone.js": "~0.8.26"
},
"devDependencies": {
"@angular-devkit/build-angular": "~0.10.0",
"@angular/cli": "~7.0.1",
"@angular/compiler-cli": "~7.0.0",
"@angular/language-service": "~7.0.0",
"@types/node": "~8.9.4",
"@types/jasmine": "~2.8.8",
"@types/jasminewd2": "~2.0.3",
"codelyzer": "~4.5.0",
"jasmine-core": "~2.99.1",
"jasmine-spec-reporter": "~4.2.1",
"karma": "~3.0.0",
"karma-chrome-launcher": "~2.2.0",
"karma-coverage-istanbul-reporter": "~2.0.1",
"karma-jasmine": "~1.1.2",
"karma-jasmine-html-reporter": "^0.2.2",
"protractor": "~5.4.0",
"ts-node": "~7.0.0",
"tslint": "~5.11.0",
"typescript": "~3.1.1"
}
}</code></pre>
<h3 id="execution-demo">Execution Demo</h3>
<p>The name of our Angular application is <em>ng7App</em> which is inside the <em>ng7Demo</em> directory.</p>
<p>So, we will first navigate to our application using the below commands.</p>
<ul>
<li>cd ng7Demo</li>
<li>cd ng7App</li>
</ul>
<p>Now, we use the following command to start the web server.</p>
<ul>
<li>ng serve</li>
</ul>
<p>Refer to the image below:</p>
<p>After running this command, you can see that it is asking to open <code><em>http://localhost:4200</em></code> in your browser. So, open any browser on your machine and navigate to this URL. Now, you can see the following page.</p>
<h3 id="how-to-upgrade-to-angular-7">How to upgrade to Angular 7</h3>
<p>The angular team has provided an Angular Update Guide to ensure the smooth upgrade of angular versions. Navigate to <a href="https://update.angular.io/" rel="noopener">https://update.angular.io/</a> to access it. It is a self-explanatory and easy to use application. It will show you the steps that you need to follow before updating, during the update and after the update. Refer to the image below:</p>
<p>If you want to update your application from Angular 6 to Angular 7 then run the following command in the project folder:</p><pre><code class="language-bash">ng update @angular/cli @angular/core</code></pre>
<h3 id="conclusion">Conclusion</h3>
<p>We have learned about the new features of Angular 7.0. We also installed Angular CLI 7.0. To create and execute an Angular 7.0 app we have used Angular CLI and VS Code. We also explored the method to upgrade an existing application to Angular 7.0.</p>
<h3 id="see-also">See Also</h3>
<ul>
<li><a href="https://ankitsharmablogs.com/getting-started-with-angular-6-0/" rel="noopener">Getting Started With Angular 6.0</a></li>
<li><a href="https://ankitsharmablogs.com/understanding-angular-6-animations/" rel="noopener">Understanding Angular 6 Animations</a></li>
<li><a href="https://ankitsharmablogs.com/getting-started-with-angular-5-using-visual-studio-code/" rel="noopener">Getting Started With Angular 5 Using Visual Studio Code</a></li>
<li><a href="https://ankitsharmablogs.com/crud-operations-asp-net-core-using-angular-5-ado-net/" rel="noopener">CRUD Operations With ASP.NET Core Using Angular 5 And ADO.NET</a></li>
<li><a href="https://ankitsharmablogs.com/asp-net-core-crud-using-angular-5-and-entity-framework-core/" rel="noopener">ASP.NET Core — CRUD Using Angular 5 And Entity Framework Core</a></li>
<li><a href="https://ankitsharmablogs.com/asp-net-core-using-highcharts-with-angular-5/" rel="noopener">ASP.NET Core — Using Highcharts With Angular 5</a></li>
</ul>
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
