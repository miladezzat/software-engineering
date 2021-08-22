---
card: "https://cdn-media-1.freecodecamp.org/images/1*Ov4vHlZxjYYJ_QigtwzXdQ.jpeg"
tags: [JavaScript]
description: In this article, we will learn how to make our Angular app av
author: "Milad E. Fahmy"
title: "How to implement localization in Angular using i18n tools"
created: "2021-08-15T19:37:17+02:00"
modified: "2021-08-15T19:37:17+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-angular tag-i18n tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to implement localization in Angular using i18n tools</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Ov4vHlZxjYYJ_QigtwzXdQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*Ov4vHlZxjYYJ_QigtwzXdQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*Ov4vHlZxjYYJ_QigtwzXdQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Ov4vHlZxjYYJ_QigtwzXdQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Ov4vHlZxjYYJ_QigtwzXdQ.jpeg" alt="How to implement localization in Angular using i18n tools">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h3 id="introduction">Introduction</h3>
<p>In this article, we will learn how to make our Angular app available in different languages using i18n and localization. We will create an Angular application and configure it to serve the content in three different languages. We will also deploy our app to Google Firebase and see how localization works in real time.</p>
<p>We will use Angular 7 and VS Code to develop our application. Take a look at the application output.</p>
<h3 id="source-code">Source Code</h3>
<p>Get the source code for this application from <a href="https://github.com/AnkitSharma-007/angular-i18n-localization" rel="noopener">GitHub</a>.</p>
<h3 id="what-is-i18n">What is i18n?</h3>
<p><code>I18n</code> , also known as internationalization, is the process of making our app support various languages to extend the reach to a worldwide audience.</p>
<h3 id="what-is-localization">What is Localization?</h3>
<p>Localization is the process for translating the app to a particular language. We need to apply internationalization to the application and after that we can localize it. Localization allows us to serve our application in different languages.</p>
<h3 id="creating-an-angular-7-app">Creating an Angular 7 app</h3>
<p>The first step is to create an Angular 7 app. If you are new to Angular, I would suggest you to read my article <a href="https://ankitsharmablogs.com/getting-started-with-angular-7-0/" rel="noopener">Getting Started With Angular 7.0</a> to learn how to set up Angular development environment in your machine.</p>
<p>Run the following command to create the app.</p><pre><code>ng new i18nDemo</code></pre>
<p>Open the i18nDemo app using VS code.</p>
<h3 id="setting-up-the-app-component">Setting up the app component</h3>
<p>Open <code>app.component.html</code> file. Replace the already existing text with the following code.</p><pre><code>&lt;h1 i18n&gt;  Localization Demo in Angular using i18n&lt;/h1&gt;&lt;h3 i18n="@@myName"&gt;  Hello, My name is Ankit&lt;/h3&gt;&lt;p&gt;This text will remain same in all languages&lt;/p&gt;&lt;hr /&gt;</code></pre>
<p>You can observe that we have marked <code>&lt;</code>h1&gt;<code>; an</code>d &lt;h3&gt; tags with i18n attribute. This is a way to tell the Angular to consider this text as translatable content. We will explore i18n attribute in detail in the next section.</p>
<h3 id="creating-a-translation-source-file">Creating a translation source file</h3>
<p>Run the following command in the CLI to create a translation source file.</p><pre><code>ng xi18n --output-path translate</code></pre>
<p>It will create a folder called translate and create a <code>messages.xlf</code> file inside it. Open the file and you can observe the following XML code inside it.</p><pre><code>&lt;?xml version="1.0" encoding="UTF-8" ?&gt;&lt;xliff version="1.2" xmlns="urn:oasis:names:tc:xliff:document:1.2"&gt;  &lt;file source-language="en" datatype="plaintext" original="ng2.template"&gt;    &lt;body&gt;      &lt;trans-unit id="3f2feb6d5fb690628177afa3ade2519db69ba838" datatype="html"&gt;        &lt;source&gt;Localization Demo in Angular using i18n&lt;/source&gt;        &lt;context-group purpose="location"&gt;          &lt;context context-type="sourcefile"&gt;app/app.component.html&lt;/context&gt;          &lt;context context-type="linenumber"&gt;1&lt;/context&gt;        &lt;/context-group&gt;      &lt;/trans-unit&gt;      &lt;trans-unit id="myName" datatype="html"&gt;        &lt;source&gt;Hello, My name is Ankit&lt;/source&gt;        &lt;context-group purpose="location"&gt;          &lt;context context-type="sourcefile"&gt;app/app.component.html&lt;/context&gt;          &lt;context context-type="linenumber"&gt;5&lt;/context&gt;        &lt;/context-group&gt;      &lt;/trans-unit&gt;    &lt;/body&gt;  &lt;/file&gt;&lt;/xliff&gt;</code></pre>
<p>This file contains a list of <code>&lt;trans-un</code>it&gt; tags. These tags will have all the content that was marked for translation using i18n attribute. You can also observe that<code> each &lt;tr</code>ans-unit&gt; tag has an id property associated with it. This unique id will be generated by default for each tag that was marked with i18n attribute. We can also customize the id by providing a name pr<code>ef</code>ixed with @@ as we hav<code>e do</code>ne with &lt;h3&gt; tag in previous section. <code>Henc</code>e, the id for &lt;h3&gt; tag is “myName” as we defined it.</p>
<p>There is no entry for the <code>&lt;</code>;p&gt; tag in translation file because we have not marked it with i18n attribute. Angular translation tool will not consider it for translations.</p>
<p>If you change the text for any tag in your HTML file, you need to regenerate the translation file. Regenerating the file will override the default id of <code>&lt;trans-un</code>it&gt; tags. Hence, it is advisable to provide custom ids to each translatable tag to maintain consistency.</p>
<p>Hence, we have successfully implemented i18n to our app. In the next section, we will extend it to make it available to different languages.</p>
<h3 id="translating-the-content">Translating the content</h3>
<p>We will translate our application into two new languages apart from English, which are Spanish and Hindi. Make three copies of the messages.xlf file and rename them to <code>messages.en.xlf</code>, <code>messages.es.xlf</code> and <code>messages.hi.xlf</code>. These file names can be customized as per your choice, but the extension should be <code>.xlf</code>.</p>
<p>Open messages.es.xlf and put in the following content in it.</p><pre><code>&lt;?xml version="1.0" encoding="UTF-8" ?&gt;&lt;xliff version="1.2" xmlns="urn:oasis:names:tc:xliff:document:1.2"&gt;  &lt;file source-language="en" datatype="plaintext" original="ng2.template"&gt;    &lt;body&gt;      &lt;trans-unit id="3f2feb6d5fb690628177afa3ade2519db69ba838" datatype="html"&gt;        &lt;source&gt;Localization Demo in Angular using i18n&lt;/source&gt;        &lt;target&gt;Demostración de localización en angular usando i18n&lt;/target&gt;        &lt;context-group purpose="location"&gt;          &lt;context context-type="sourcefile"&gt;app/app.component.html&lt;/context&gt;          &lt;context context-type="linenumber"&gt;1&lt;/context&gt;        &lt;/context-group&gt;      &lt;/trans-unit&gt;      &lt;trans-unit id="myName" datatype="html"&gt;        &lt;source&gt;Hello, My name is Ankit&lt;/source&gt;        &lt;target&gt;Hola, mi nombre es Ankit&lt;/target&gt;        &lt;context-group purpose="location"&gt;          &lt;context context-type="sourcefile"&gt;app/app.component.html&lt;/context&gt;          &lt;context context-type="linenumber"&gt;5&lt;/context&gt;        &lt;/context-group&gt;      &lt;/trans-unit&gt;    &lt;/body&gt;  &lt;/file&gt;&lt;/xliff&gt;</code></pre>
<p>This is the same content as the original messages.xlf file, but we have added a <code>&lt;targ</code>et&gt; tag corresponding to<code> each &amp;l</code>t;source&amp;g<code>t; tag. </code>The &lt;target&gt; tag contains the translated text for the c<code>ontent i</code>nside the &lt;source&gt; tag. Here I am using Google translate for the translation, but in real time applications, a language expert will tran<code>slate the co</code>ntents from messages.xlf file.</p>
<p>Similarly, open the messages.hi.xlf and put in the following content in it.</p><pre><code>&lt;?xml version="1.0" encoding="UTF-8" ?&gt;&lt;xliff version="1.2" xmlns="urn:oasis:names:tc:xliff:document:1.2"&gt;  &lt;file source-language="en" datatype="plaintext" original="ng2.template"&gt;    &lt;body&gt;      &lt;trans-unit id="3f2feb6d5fb690628177afa3ade2519db69ba838" datatype="html"&gt;        &lt;source&gt;Localization Demo in Angular using i18n&lt;/source&gt;        &lt;target&gt;I18n का उपयोग कर कोणीय में स्थानीयकरण डेमो&lt;/target&gt;        &lt;context-group purpose="location"&gt;          &lt;context context-type="sourcefile"&gt;app/app.component.html&lt;/context&gt;          &lt;context context-type="linenumber"&gt;1&lt;/context&gt;        &lt;/context-group&gt;      &lt;/trans-unit&gt;      &lt;trans-unit id="myName" datatype="html"&gt;        &lt;source&gt;Hello, My name is Ankit&lt;/source&gt;        &lt;target&gt;हेलो, मेरा नाम अंकित है&lt;/target&gt;        &lt;context-group purpose="location"&gt;          &lt;context context-type="sourcefile"&gt;app/app.component.html&lt;/context&gt;          &lt;context context-type="linenumber"&gt;5&lt;/context&gt;        &lt;/context-group&gt;      &lt;/trans-unit&gt;    &lt;/body&gt;  &lt;/file&gt;&lt;/xliff&gt;</code></pre>
<p>Finally, we will make the English translation file. Open messages.en.xlf and put in the following content in it.</p><pre><code>&lt;?xml version="1.0" encoding="UTF-8" ?&gt;&lt;xliff version="1.2" xmlns="urn:oasis:names:tc:xliff:document:1.2"&gt;  &lt;file source-language="en" datatype="plaintext" original="ng2.template"&gt;    &lt;body&gt;      &lt;trans-unit id="3f2feb6d5fb690628177afa3ade2519db69ba838" datatype="html"&gt;        &lt;source&gt;Localization Demo in Angular using i18n&lt;/source&gt;        &lt;target&gt;Localization Demo in Angular using i18n&lt;/target&gt;        &lt;context-group purpose="location"&gt;          &lt;context context-type="sourcefile"&gt;app/app.component.html&lt;/context&gt;          &lt;context context-type="linenumber"&gt;1&lt;/context&gt;        &lt;/context-group&gt;      &lt;/trans-unit&gt;      &lt;trans-unit id="myName" datatype="html"&gt;        &lt;source&gt;Hello, My name is Ankit&lt;/source&gt;        &lt;target&gt;Hello, My name is Ankit&lt;/target&gt;        &lt;context-group purpose="location"&gt;          &lt;context context-type="sourcefile"&gt;app/app.component.html&lt;/context&gt;          &lt;context context-type="linenumber"&gt;5&lt;/context&gt;        &lt;/context-group&gt;      &lt;/trans-unit&gt;    &lt;/body&gt;  &lt;/file&gt;&lt;/xliff&gt;</code></pre>
<h3 id="configure-the-app-to-serve-in-multiple-languages">Configure the app to serve in multiple languages</h3>
<p>Open <code>angular.json</code> file and add the following configuration.</p><pre><code>"build": {  ...  "configurations": {    ...    "es": {      "aot": true,      "i18nFile": "src/translate/messages.es.xlf",      "i18nFormat": "xlf",      "i18nLocale": "es",      "i18nMissingTranslation": "error"    }  }},"serve": {  ...  "configurations": {    ...    "es": {      "browserTarget": "i18nDemo:build:es"    }  }}</code></pre>
<p>Here we have added the configuration for the Spanish language. We have provided the path and format for i18n file and set the locale to “es”. When we execute the application, the app’s content will be served from the i18n file path provided.</p>
<p>Similarly you can add configuration for other languages.</p>
<h3 id="execution-demo">Execution Demo</h3>
<p>Once you have added the configuration for all the languages in angular.json file, run the following command to start the server.</p><pre><code>ng serve --configuration=es</code></pre>
<p>This will launch the application in “es” configuration and our app will show the Spanish language translations.</p>
<p>Refer to the output screen as shown below:</p>
<p>The configurations that we have defined will only help the app run in the local machine. We cannot change the configuration once the app is launched.</p>
<p>A production app will need the application to serve for different languages just by changing the URL. For example, <code>mywebsite.com/es</code> will provide the Spanish version of site, and <code>mywebsite.com/en</code> will provide the English version. In this case, the app will be served from different virtual directories for different languages. We will explore how to do this in next section.</p>
<h3 id="modify-the-app-component-for-production">Modify the app component for production</h3>
<p>Open <code>app.component.ts</code> and put in the following code.</p><pre><code>import { Component, LOCALE_ID, Inject } from '@angular/core';@Component({  selector: 'app-root',  templateUrl: './app.component.html',  styleUrls: ['./app.component.css']})export class AppComponent {  title = 'i18nDemo';  languageList = [    { code: 'en', label: 'English' },    { code: 'hi', label: 'हिंदी' },    { code: 'es', label: 'Espanol' }  ];  constructor(@Inject(LOCALE_ID) protected localeId: string) { }}</code></pre>
<p>Here we have defined a list of languages and their locale codes. These locale codes are standard codes. You can easily get a list of languages and the corresponding locale codes by a simple Google search.</p>
<p>Add the following codes in <code>app.component.html</code> file.</p><pre><code>&lt;ng-container *ngFor="let language of languageList"&gt; &lt;a href="/{{language.code}}/"&gt; &lt;button class="button"&gt;{{language.label}}&lt;/button&gt; &lt;/a&gt;&lt;/ng-container&gt;</code></pre>
<p>Here we have defined three buttons for three languages. On each button click, the locale id will change and the locale id will be appended to the URL also. This will allow us to serve the application from a different directory.</p>
<p>Put the following code in <code>app.component.css</code> file to apply styles to these buttons.</p><pre><code>.button {  background-color: darkslateblue;  border-radius: 5px;  color: white;  padding: 5px;  width: 10%;  margin: 5px;  text-decoration: none;  cursor: pointer;}</code></pre>
<h3 id="script-to-compile-the-app-for-production">Script to compile the app for production</h3>
<p>We need to have three different serving locations for three different languages. To build the application package for one language for production, we will use the following command:</p><pre><code>ng build --prod --i18n-locale es --i18n-format xlf --i18n-file src/translate/messages.es.xlf --output-path=dist/es --baseHref /es/</code></pre>
<p>Let us understand this command. We provided the locale id for the package, which is “es” for Spanish. We also provide the i18n file path and format. The output path property is required to provide the location for the application package. The baseHref property specifies the base URL from which this package will be served.</p>
<p>We need to run this command for every language we will provide by changing the i18n file path and <code>baseHref</code> attribute values. However, this will be a cumbersome task if we have a lot of languages. Therefore, we will write a script to generate a package for all languages. Open <code>package.json</code> file and add the following scripts inside the “scripts” section.</p><pre><code>"build-locale:en": "ng build --prod --i18n-locale en --i18n-format xlf --i18n-file src/translate/messages.en.xlf --output-path=dist/en --baseHref /en/","build-locale:es": "ng build --prod --i18n-locale es --i18n-format xlf --i18n-file src/translate/messages.es.xlf --output-path=dist/es --baseHref /es/","build-locale:hi": " ng build --prod --i18n-locale hi --i18n-format xlf --i18n-file src/translate/messages.hi.xlf --output-path=dist/hi --baseHref /hi/","build-locale": "npm run build-locale:en &amp;&amp; npm run build-locale:es &amp;&amp; npm run build-locale:hi"</code></pre>
<p>Here we have created three scripts for the three languages we are using. The “build-locale” script will execute all of them at once. All these scripts are key-value pairs. The key names we are using here are customizable and you can use any name of your choice. To create the application package for all the languages, run the following command:</p><pre><code>npm run build-locale</code></pre>
<p>On successful execution, it will create a “dist” folder in the application’s root folder. The dist folder has three sub-folders to serve our application in three different languages. Refer to the image shown below:</p>
<h3 id="deploying-the-application-on-firebase">Deploying the application on Firebase</h3>
<p>We will deploy this application on Firebase to see the language change in real time. Refer to my article <a href="https://ankitsharmablogs.com/hosting-a-blazor-application-on-firebase/" rel="noopener">Hosting A Blazor Application on Firebase</a> and follow the steps mentioned to deploy this Angular app on Firebase.</p>
<p>Once the application is deployed, you will get the hosting URL. Open the URL and append the baseHref attribute as we defined earlier, to the URL. Hence, the URL will be <code>yoursite.com/es/</code> for the Spanish language and so on.</p>
<p>The application, which we built here, is hosted at <a href="https://i18ndemo-415ef.firebaseapp.com/en/" rel="noopener">https://i18ndemo-415ef.firebaseapp.com/en/</a>. If you open this URL, you will see the output as shown below:</p>
<p>Click on the links provided. The URL will change and the application will reload in the new language.</p>
<h3 id="conclusion">Conclusion</h3>
<p>In this post, we learned how to internationalize our Angular app using i18n tools. We also applied localization to our Angular application. Localization allows us to serve our app in different languages, which helps in extending the reach to a worldwide audience. We also learned how localization works in a production environment by deploying our application on Firebase.</p>
<p>Get the source code from <a href="https://github.com/AnkitSharma-007/angular-i18n-localization" rel="noopener">GitHub</a> and play around for a better understanding.</p>
<p>Are you preparing for interviews?! Read my article on <a href="https://ankitsharmablogs.com/csharp-coding-questions-for-technical-interviews/" rel="noopener">C# Coding Questions For Technical Interviews</a></p>
<h3 id="see-also">See Also</h3>
<ul>
<li><a href="https://ankitsharmablogs.com/understanding-server-side-blazor/" rel="noopener">Understanding Server-side Blazor</a></li>
<li><a href="https://ankitsharmablogs.com/understanding-angular-6-animations/" rel="noopener">Understanding Angular 6 Animations</a></li>
<li><a href="https://ankitsharmablogs.com/asp-net-core-using-highcharts-with-angular-5/" rel="noopener">ASP.NET Core — Using Highcharts With Angular 5</a></li>
<li><a href="https://ankitsharmablogs.com/asp-net-core-crud-using-angular-5-and-entity-framework-core/" rel="noopener">ASP.NET Core — CRUD Using Angular 5 And Entity Framework Core</a></li>
<li><a href="https://ankitsharmablogs.com/crud-operations-asp-net-core-using-angular-5-ado-net/" rel="noopener">CRUD Operations With ASP.NET Core Using Angular 5 and ADO.NET</a></li>
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
