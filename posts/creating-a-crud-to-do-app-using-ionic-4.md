---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca144740569d1a4ca4d9e.jpg"
tags: [Ionic]
description: Hey all! This is a post on an up and coming tech topic — Ioni
author: "Milad E. Fahmy"
title: "How to Create a CRUD To-do App Using Ionic 3"
created: "2021-08-15T19:33:12+02:00"
modified: "2021-08-15T19:33:12+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-ionic tag-typescript tag-javascript tag-mobile-app-development tag-firebase ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create a CRUD To-do App Using Ionic 3</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca144740569d1a4ca4d9e.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca144740569d1a4ca4d9e.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca144740569d1a4ca4d9e.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca144740569d1a4ca4d9e.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca144740569d1a4ca4d9e.jpg" alt="How to Create a CRUD To-do App Using Ionic 3">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Hey all! This is a post on an up and coming tech topic — Ionic! By the end of this post you would learn how to create a simple CRUD (Create, Read, Update and Delete) to-do list app, which is also connected to Firebase.</p>
<h1 id="hybrid-mobile-applications-what-are-they">Hybrid Mobile Applications — What are they?</h1>
<p>Simply put, they are mobile apps created by the easier to learn languages; HTML, CSS, and JavaScript. The beauty of developing a hybrid mobile app is the fact that they can be compiled to work with any platform. If you are lazy, like yours truly, you’ll find it easier to use one code to build many apps, instead of developing separate apps for each platform.</p>
<p>Ionic is one of the popular frameworks to make your own hybrid mobile app. It can be built into an Android, iOS, Windows phone, Progressive Web or Desktop application. And testing the app is so much easier since it can be live reloaded right onto your browser.</p>
<h2 id="step-1-setting-it-all-up">Step 1 — Setting it all up</h2>
<p>Initially, sign up for an Ionic Pro account, <a href="https://ionicframework.com/pro?source=post_page---------------------------">here</a>. That will make building and shipping the app easier. You might have to sign in sometime during the process of project creation.</p>
<p>To start coding your first Ionic App, there are a bunch of things you need;</p>
<ol>
<li>Node.js — This is pretty easy. Simply go to the Node.js <a href="https://nodejs.org/en/?source=post_page---------------------------">website </a>and download the ideal installer for you. We need the Node Package Manager, aptly named npm, to install all the dependencies for the many modules you would want to use in your app. If you develop on a Mac and have Homebrew installed, simply type in the command <code>brew install npm</code> on the console.</li>
<li>TypeScript — TypeScript, a superset of JavaScript, is used instead of JS for the majority of the code. After installing Node.js, on the console, type in <code>npm install -g typescript</code> .</li>
<li>Cordova — Cordova is a framework that builds the HTML, CSS and JS/TS code into an app. To install, type <code>npm install -g cordova</code></li>
<li>And finally, Ionic — Type in <code>npm install -g ionic</code> .</li>
</ol>
<p>Bonus — You can download all three in one go with this command too! <code>npm install -g typescript cordova ionic</code>.</p>
<p>Now that you have set up the environment, let's get this party started!! ??</p>
<h3 id="creating-your-first-app">Creating your first app</h3>
<p>From within the console, move to the folder in which you want to store the app. My personal preference is to have a dedicated folder for all my Ionic projects in my Documents.</p>
<p>Then, type in <code>ionic start</code> . The console then prompts you for a name for the project, like so, <code>Project name: Tasks</code>.</p>
<p>It then prompts you to specify the type of application.</p><pre><code>? Starter template: (Use arrow keys)
tabs     | A starting project with a simple tabbed interface
&gt; blank    | A blank starter project
sidemenu | A starting project with a side menu with navigation in the content area
super    | A starting project complete with pre-built pages, providers and best practices for Ionic development.
tutorial | A tutorial based project that goes along with the Ionic documentation
aws      | AWS Mobile Hub Starter</code></pre>
<p>For now, let's make it a blank project, a to-do list with all CRUD functions in one page. It will then prompt you for permission to add the Android and iOS platforms.</p><pre><code>? Integrate your new app with Cordova to target native iOS and Android? (y/N) y</code></pre>
<p>It will proceed to download extra dependencies that will allow you to live reload the app in emulators and devices. Once the native SDK’s are downloaded you are prompted to add the Ionic Pro SDK, if you wish to do so.</p><pre><code>? Install the free Ionic Pro SDK and connect your app? y</code></pre>
<p>If you do pick yes, the console will then prompt you for your Ionic Pro email and password, set up at the beginning of this post.</p><pre><code>? Email:
? Password:</code></pre>
<p>Thereafter, you have the option to either link this app to an existing one, to create a new one entirely.</p><pre><code>? What would you like to do? (Use arrow keys)
Link an existing app on Ionic Pro
&gt; Create a new app on Ionic Pro</code></pre>
<p>The console then proceeds to ask your preferred git host, to store your repository. I prefer GitHub, as it’s something I’m more familiar with.</p><pre><code>? Which git host would you like to use? (Use arrow keys)
&gt; GitHub
Ionic Pro</code></pre>
<p>Depending on your choice above, if you picked GitHub as I have, you may require to open your browser to give your credentials and sign in. Once done, return back to the console. You then need to link this app to the repository or create a new one. If you don’t have a repository, go back to GitHub and create one now. Once the new repository is created, come back to the console and type <code>y</code> .</p><pre><code>? Does the repository exist on GitHub? y</code></pre>
<p>Afterward, pick the correct repository from the list displayed on the console. I will be using only the master branch for now and will go with the former option.</p><pre><code>? Which would you like to do? (Use arrow keys)
&gt; Link to master branch only
Link to specific branches</code></pre>
<p>And FINALLY, we’re done creating the app!! ??</p>
<p>But, If you picked Ionic Pro as a git host, pick the option to generate an SSH key pair.</p><pre><code>? How would you like to connect to Ionic Pro? (Use arrow keys)
&gt; Automatically setup new a SSH key pair for Ionic Pro
Use an existing SSH key pair
Skip for now
Ignore this prompt forever</code></pre>
<p>And we’re done here too! Now to have a look at the app</p>
<p>There are two different commands to view the app on the browser.</p>
<ol>
<li><code>ionic serve</code></li>
<li><code>ionic serve -l</code></li>
</ol>
<p><code>ionic serve </code>displays the app in the view of a web application.</p>
<figcaption>Web Application View</figcaption>
</figure>
<p><code>ionic serve -l </code>displays the app in the many mobile device platforms. You will need to download it from within the console, when prompted, to get this view.</p>
<figcaption>Mobile Platforms View</figcaption>
</figure>
<p>And that’s a wrap for today! We successfully created and linked an Ionic 4 app to a version control host. </p>
<h3 id="the-project-structure">The Project Structure</h3>
<figcaption>Folder directory</figcaption>
</figure>
<ol>
<li>app.module.ts — The entry point of the app. Any and all components, pages, modules, and providers need to be added to this file, as it keeps track and controls the many resources used by the app.</li>
<li>app.components.ts — The first page that is loaded as the app starts running, with all the code you wish to execute first. Pages that you might wish the user to view first, like the login screen, are put in this component.</li>
<li>app.html — The template of the app, where the other UI pages will mount onto.</li>
<li>app.scss — The page that holds all the Sass variables and styles to be used globally within the app.</li>
</ol>
<p>Let’s head on over to the main component that we will be amending for this application, home.</p>
<p>As seen above, the home component has three pages;</p>
<ol>
<li>home.html — The view/UI of the page is coded here, using HTML.</li>
<li>home.scss — Any page-specific styling is to be added here, along with Sass variables to be used within the page.</li>
<li>home.ts — The operational logic, in our case adding new tasks to the list, is coded in TypeScript here.</li>
</ol>
<h2 id="step-2-implementing-the-crud-operations">Step 2 - Implementing the CRUD operations</h2>
<figcaption>Wireframe of the app</figcaption>
</figure>
<p>What I hope to implement as seen above, is a very simple design; a text input to type the tasks, a button to add it to the list, a list view to view the items and finally a delete button to remove the items from the list. I might change up the design later.</p>
<p>Go ahead and open your editor. Let's take a quick run through all the pages and components found in the current directory.</p>
<h3 id="creating-the-ui-for-c-and-r">Creating the UI for C and R</h3>
<p>To begin, let’s tackle the UI first. When you open up home.html, this is the current code in the page.</p><pre><code class="language-js">&lt;ion-header&gt;
&lt;ion-navbar&gt;
&lt;ion-title&gt;Ionic Blank&lt;/ion-title&gt;
&lt;/ion-navbar&gt;
&lt;/ion-header&gt;
&lt;ion-content padding&gt;
The world is your oyster.
&lt;p&gt;If you get lost, the
&lt;a href="http://ionicframework.com/docs/v2"&gt;docs&lt;/a&gt;
will be your guide.
&lt;/p&gt;
&lt;/ion-content&gt;</code></pre>
<p>You can then remove everything within the <code>&lt;ion-content&gt;</code> tags. This is the body of the page and elements within those tags will be seen.</p>
<p>Now add an input tag in the body, so we can enter in the task, followed by a button, to call a method to add the task to the list.</p><pre><code class="language-js">&lt;ion-content padding&gt;
&lt;input type="text" placeholder="Enter task"&gt;
&lt;button&gt;Add Task&lt;/button&gt;
&lt;/ion-content&gt;</code></pre>
<figcaption>Boring and basic</figcaption>
</figure>
<p>Not pretty, right? Let’s add some styling now!</p>
<p>Ionic has a special input tag <code>&lt;ion-input&gt;</code> , that comes with some styling coded within it, so go ahead and switch boring old <code>&lt;input&gt;</code> to <code>&lt;ion-input&gt;</code> !</p>
<p>Ionic also comes with certain special classes which have styling, like the <code>ion-button</code>. I also want to have the button to the end of the input, and not right below. The final changes look like this;</p><pre><code class="language-js">&lt;ion-content padding&gt;
&lt;ion-item&gt;
&lt;ion-input type="text" placeholder="Enter task" [(ngModel)]="taskName"/&gt;
&lt;div class="item-note" item-end&gt;
&lt;button ion-button&gt;Add Task&lt;/button&gt;
&lt;/div&gt;
&lt;/ion-item&gt;
&lt;/ion-content&gt;</code></pre>
<figcaption>Seamless and sleek</figcaption>
</figure>
<p>So much better, right!? And all this without writing any CSS! Let’s have another look at the code above.</p>
<p><code>&lt;ion-item&gt;</code> tag is normally used with the <code>&lt;ion-list&gt;</code> element. But, using this here, with the input within this element, gives it an added style on focus or use. Using the class <code>item-note</code> for a div element allows the button to be in line with the input tag. Doing so, gives a more seamless and sleek design, compared to the first one. Since Angular is also integrated into Ionic, we can use ngModel to easily link values in the views to that in the TypeScript files.</p>
<p>Ionic also comes with a built-in pack of icons, Ionicons. Its very simple to use, and a quick example would be substituting the Add task text with <code>&lt;ion-icon name="add"&gt;&lt;/ion-icon&gt;</code> . Find more on Ionicons, <a href="https://ionicons.com/?source=post_page---------------------------">here</a>.</p>
<figcaption>Final input tag</figcaption>
</figure>
<p>The final result! I’m quite happy with what it looks like now, but feel free to play around more with colors and styling.</p>
<h3 id="implementing-create-and-read-functionality">Implementing create and read functionality</h3>
<p>Now that the UI has been done, let's move on to giving this a function. It’s time to look at home.ts. You start off with code that looks like this;</p><pre><code class="language-js">import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
selector: 'page-home',
templateUrl: 'home.html'
})
export class HomePage {
constructor(public navCtrl: NavController) {  }
}</code></pre>
<p>Let’s get a quick look at what we have here. You import any components or external modules, that you may need to use in this page at the very top. The next few lines describe the template to which the many functions you may write belong to and manipulate. And lastly, all the logic you may code. Any code you wish to execute before viewing or interacting with the page must be written within the constructor.</p>
<p>Since we will be adding new to-dos each time, we need a place to store it. The simplest way to do this is to initialize an array. If you have had experience with JavaScript previously, coding with TypeScript will be a piece of cake! </p>
<p>Let’s call our list taskList, but since we need the list to be accessed from more than one method of the code, we need to initialize it outside the constructor <code>taskList = [];</code>. Now to write code to handle the Add Task button click, let's call it <code>addTask</code>. All we need to do is capture the text in the input, and push it onto the array. Since we have used <code>ngModel</code> for the input tag, we can easily get the value inside it by using <code>this.taskName</code>. And adding values to an array is as easy as <code>taskList.push(task)</code>. We also need to ensure that no empty string is being added to the list, so wrap the above statement in an if condition, checking if the taskName truly exists. The final home.ts code;</p><pre><code class="language-js">import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
selector: 'page-home',
templateUrl: 'home.html'
})
export class HomePage {
taskList = [];
constructor(public navCtrl: NavController) {}
addTask() {
if (this.taskName.length &gt; 0) {
let task = this.taskName;
this.taskList.push(task);
this.taskName = "";
}
}
}</code></pre>
<blockquote>Note: Using the keyword <code>let</code> in TypeScript is the equivalent of using <code>var</code>, for variable declaration.</blockquote>
<p>Now we can begin adding new tasks!</p>
<p>But how do we know something is being added???</p>
<p>Easy Peasy, ?Squeezy! That’s what the R in CRUD is there for!</p>
<h3 id="run-the-code-and-have-a-look">Run the code and have a look</h3>
<p>Time to C(reate) a way for us to R(ead) what we type! (See what I did there?)?</p>
<p>Let’s roll back to the home.html. So far, we have put an input tag and a button to add tasks; now to put a list to view it. We now need to link the method <code>addTask()</code> to the button in the <code>(click)</code> property, so that a list item is added to the array with each click.</p>
<p><code>&lt;ion-list&gt;</code> is a special Ionic element for list views. The <code>&lt;ion-item&gt;</code> tag is used within it to generate each item in said list. <code>*ngFor</code> is an easy method of showing all elements within a list, by setting a standard view for each list item.</p>
<p>The final home.html code;</p><pre><code class="language-js">&lt;ion-header&gt;
&lt;ion-navbar&gt;
&lt;ion-title&gt;To-do List&lt;/ion-title&gt;
&lt;/ion-navbar&gt;
&lt;/ion-header&gt;
&lt;ion-content padding&gt;
&lt;ion-item&gt;
&lt;ion-input type="text" [(ngModel)]="taskName" placeholder="Enter task"/&gt;
&lt;div class="item-note" item-end&gt;
&lt;button ion-button (click)="addTask()"&gt;&lt;ion-icon name="add"&gt;&lt;/ion-icon&gt;&lt;/button&gt;
&lt;/div&gt;
&lt;/ion-item&gt;
&lt;div padding&gt;
&lt;ion-list&gt;
&lt;ion-item *ngFor="let todo of taskList"&gt;
{{todo}}
&lt;/ion-item&gt;
&lt;/ion-list&gt;
&lt;/div&gt;
&lt;/ion-content&gt;</code></pre>
<p>The variable <code>todo</code> is a temporary store for the element in the current index of the for loop (ngFor) within the list <code>taskList</code>, as declared in the home.ts.</p>
<p>Ready to see our app so far?</p>
<p>We did it!! It works!!????</p>
<p>But that was just Create and Read. Will still have to implement Update and Delete.</p>
<p>We will first begin with changing the GUI so that it can fit both the update and delete features. Thereafter move onto the TypeScript code, to show its functionality.</p>
<h3 id="change-that-look-to-include-handlers-for-u-and-d">Change that look to include handlers for U and D</h3>
<p>Whoops! Little forgetful ole me! I didn’t change the app name on the home page… ???</p>
<p>Go ahead and call it whatever you wish (I’ll be basic with ‘To-do List’).</p>
<p>The first step, to be done in the home.html, is to add the delete button to the left side of each list item. That’s easy! Reuse the very same code I used to include the <code>addTask</code> button next to the input in the <code>&lt;ion-item&gt;</code>, nesting this button within the div with the class item-note, but change that + into an ?️icon (don’t want to get confused now, do we?). Since this is a button, give the event handler the name <code>deleteTask()</code>. The button will also have another style class <code>clear</code>, which gives it a clear background. Since this button will be within the <code>&lt;ion-item&gt;</code> that is in the <code>&lt;ion-list&gt;</code>, it will be generated for all items in the list.</p>
<p>We need to add another button to the list to edit each task. Luckily more copying of code! Copy the whole button tag, but replace the icon ?️ to a ✏️ and the click handler to <code>updateTask()</code>.</p>
<p>The code for each <code>&lt;ion-item&gt;</code> tag now looks like this</p><pre><code>&lt;ion-item *ngFor="let todo of taskList; let i = index"&gt;
{{todo}}
&lt;div class="item-note" item-end&gt;
&lt;button ion-button clear (click)="updateTask(i)"&gt;
&lt;ion-icon name="create"&gt;&lt;/ion-icon&gt;
&lt;/button&gt;
&lt;button ion-button clear (click)="deleteTask(i)"&gt;
&lt;ion-icon name="trash"&gt;&lt;/ion-icon&gt;
&lt;/button&gt;
&lt;/div&gt;
&lt;/ion-item&gt;</code></pre>
<p>The statement <code>let i = index</code> takes the index of the specific element in the list, so that we can pass it over to the method, so only the element to be deleted would be affected.</p>
<p>Pretty neat, huh??</p>
<p>I quite like it and it looks so much better than the wireframe I originally designed.</p>
<h3 id="implementing-update-and-delete-functionality">Implementing update and delete functionality</h3>
<p>Now to add functionality to our ?️ and ✏️.</p>
<p>We need to create a new method within the home.ts called <code>deleteTask()</code>, as specified in home.html above. We pass the index of the array from within the <code>ngFor</code> loop, so we know the exact position of the task to be deleted. Hop on over to home.html, and pass the parameter <code>i</code>, which is the index of the element in the array, within the <code>deleteTask</code> method, like so <code>deleteTask(i)</code>. As you have passed the index through to the home.ts, you simply need to use the <code>splice()</code> method on the array to remove the desired task, passing the index of the item to be removed as a parameter, like so <code>this.taskList.splice(index, 1);</code>.</p>
<p>The code for the <code>deleteTask</code> method is;</p><pre><code class="language-js">deleteTask(index){
this.taskList.splice(index, 1);
}</code></pre>
<p>Short and sweet! ? That’s all the coding we need to delete tasks!</p>
<p>Now to update, it will take a bit more typing (bear with me)!</p>
<p>My plan is to open up an alert asking the user to enter the update text of the task. To do that, we need to import the <code>AlertController</code>, a module found in <code>ionic-angular</code>. You import it using this line of code.</p><pre><code class="language-js">import { NavController, AlertController } from 'ionic-angular';</code></pre>
<p>You then need to initialize it in the constructor, like so;</p><pre><code class="language-js">constructor(public navCtrl: NavController, public alertCtrl: AlertController)</code></pre>
<p>You will then need to create an alert in the <code>updateTask</code> method to capture the new task name. To do so, you will need to pass the following into the create method of the AlertController;</p>
<ol>
<li>title — The title of the message.</li>
<li>message — A longer message (if required).</li>
<li>inputs — Input field with their name and placeholder (if any).</li>
<li>buttons — Buttons along with their role or handler (if any).</li>
</ol>
<p>The alert can be displayed afterward with the simple <code>alert.present()</code>command. I will be having two buttons, one is a cancel button, the second is to edit and the handler code will simply take the entered task and switch it with the previous value in the array. The code for the <code>updateTask()</code> method;</p><pre><code class="language-js">updateTask(index) {
let alert = this.alertCtrl.create({
title: 'Update Task?',
message: 'Type in your new task to update.',
inputs: [{ name: 'editTask', placeholder: 'Task' }],
buttons: [{ text: 'Cancel', role: 'cancel' },
{ text: 'Update', handler: data =&gt; {
this.taskList[index] = data.editTask; }
}
]
});
alert.present();
}</code></pre>
<p>It should all work perfectly now!</p>
<p>Want to see the final CRUD app?</p>
<p>And there you have it! ??</p>
<p>A fully operational CRUD to-do list, with minimal coding! That’s how easy Ionic can be.</p>
<p>I still believe we can make it a bit more user-friendly. Scroll down for more add-on functionality.</p>
<h3 id="bonus-auto-focus">Bonus!! — Auto-focus</h3>
<figcaption>Input without autofocus</figcaption>
</figure>
<p>Do you know what I find annoying? I need to click on the input each time I want to add a new task, even at the beginning. Why not auto-focus the input after clicking the button?</p>
<p>That’s exactly what we will do!</p>
<p>Auto-focus on Ionic is not as easy as it is in classic HTML/JavaScript interactions. You need to import an extra component called <code>ViewChild</code>. You can then easily connect the input from the view (home.html) to the controller (home.ts), and manipulate it as well. You import it, like so;</p><pre><code class="language-js">import { Component, ViewChild } from '@angular/core';</code></pre>
<p>You can then connect the input tag to the component, outside the constructor, using this line of code,</p><pre><code class="language-js">@ViewChild('taskInput') input;</code></pre>
<p><code>taskInput</code> is the id of the input tag on the home.html page. Go ahead and add<code>#taskInput</code> to the input tag. The input tag can now directly be handled from within the TypeScript file.</p>
<p>Ionic comes with a few methods that can be invoked on certain app events, such as when a page loads onto the view, unloads and so on. These are called lifecycle events, and more about then can be found <a href="https://ionicframework.com/docs/api/navigation/NavController/?source=post_page---------------------------">here</a>. We can cause the app to auto-focus on the input from within the <code>ionViewDidLoad()</code>, by setting a timeout. The code would be;</p><pre><code class="language-js">ionViewDidLoad(){
setTimeout(() =&gt; {
this.input.setFocus();
},350);
}</code></pre>
<p>For the auto-focus to work after you add the line <code>this.input.setFocus();</code> as the last statement in the <code>addTask()</code> handler. Lets head on out to see the changes we made!</p>
<figcaption>Input with autofocus</figcaption>
</figure>
<p>Now that’s what you call seamless…?</p>
<h2 id="step-3-integrating-firebase-authentication">Step 3 - Integrating Firebase Authentication</h2>
<p>Firebase has everything, from authorization to a database to file storage, one of the many reasons it’s a good choice to add to mobile apps. In this post, we will explore Firebase, create a project and make a handler component for Firebase in the app.</p>
<h3 id="setting-up-the-firebase-console">Setting up the Firebase console</h3>
<p>But first step’s first, you need to create a project on the Firebase console. All you need is a Google account to access Firebase. So head on over <a href="https://console.firebase.google.com/?source=post_page---------------------------">here </a>to get started. Add a new project and give it a name (I just called mine ‘Tasks’), agree to everything they ask and hit Create Project.</p>
<p>Now to set up the project to fit our needs.</p>
<p>All the areas of Firebase that we will be accessing will be found under Develop.</p>
<p>Namely;</p>
<ol>
<li>Authentication</li>
<li>And Database.</li>
</ol>
<p>Let’s have a look at Authentication.</p>
<p>As you can see, all methods of authentication have been disabled. For now enable the very basic of types, Email/Password, so we can begin using it to register an account.</p>
<p>Under templates, the many email templates for verification of email address to forget password are can be found. If you wish, you can change a few of the details, like the project name to be displayed and the name of the sender.</p>
<p>Now, onward to the Database section. Firebase has two types of databases;</p>
<ol>
<li>Realtime Database — a NoSQL database, that looks like one big JSON Object.</li>
<li>Cloud Firestore — A collection of documents, which are essentially JSON Objects.</li>
</ol>
<p>Firestore is the better option as it has a better structure compared to the normal Realtime Database. In the Realtime Database, anybody can write data anywhere, if they have the reference to the database, greatly affecting all the data stored. And for that reason, I picked Firestore and created the database in test mode, so we can assess the database.</p>
<p>Firestore in test mode does allow anyone to read and write into it, so let’s make it that only users who have registered to the app have access to the database. To do so, switch <code>allow read, write: if false;</code> for <code>allow read, write:if request.auth.uid!=null;</code>. Only registered users have a unique uid, with which to distinguish them. Most often, the uid is used as the ID to the users' object. I will be implementing the same for this project.</p>
<p>Once the rules are changed, we need to create a collection, so all our user documents can be put into it. Since we cannot have a collection without at least one document, make a fake user. You can delete it from the dashboard later.</p>
<p>As we have set up the Firebase dashboard, let’s move on the integrating Firebase into the app.</p>
<h3 id="linking-firebase-to-the-app">Linking Firebase to the app</h3>
<p>There is a special module <code>AngularFire</code> you can download using npm to incorporate Firebase into the Ionic app. To download, type <code>npm install firebase angularfire2 --save</code>.</p>
<p>To use this module, you need to import it into the app.module.ts page, like so</p><pre><code class="language-js">import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';</code></pre>
<p>We also need to add the necessary config data for the app to access and use the correct database. This can be found in the Project Overview section, ‘Add Firebase to your web app’. You are required to call the JSON object firebaseConfig and initialize it after the imports.</p><pre><code class="language-js">export const firebaseConfig = {
apiKey: "#######################################",
authDomain: "###########.firebaseapp.com",
databaseURL: "https://###########.firebaseio.com",
projectId: "###########",
storageBucket: "###########.appspot.com",
messagingSenderId: "############"
};</code></pre>
<p>One last step! You need to include the imported modules above, into the import array of <code>@NgModule</code> that contains all the components used in the app, initializing the AngularFireModule as well with the config object above.</p><pre><code class="language-js">@NgModule({
...
imports: [
...
AngularFireModule.initializeApp(firebaseConfig),
AngularFireAuthModule,
AngularFirestoreModule
]
})</code></pre>
<p>AngularFireAuthModule comes with many methods pertaining to authorization, like signup, sign in, forgot password, etc. All the methods we will be using will be found in the auth property of AngularFireAuth. The methods being used are;</p>
<ol>
<li><code>signInWithEmailAndPassword()</code> — Login</li>
<li><code>createUserWithEmailAndPassword()</code> — Register</li>
<li><code>sendPasswordResetEmail()</code> — Reset Password</li>
<li><code>signOut()</code> — Logout</li>
</ol>
<h3 id="implementing-all-the-authentication-logic">Implementing all the authentication logic</h3>
<p>We need to add a listener, to check if the user has logged in or not, and to display the correct response for either. We need to add the listener in the app.component.ts, as it’s the first page of the app that is loaded.</p><pre><code class="language-js">const authObserver = afAuth.authState.subscribe(user =&gt; {
if (user) {
this.rootPage = HomePage;
authObserver.unsubscribe();
} else {
this.rootPage = LoginPage;
authObserver.unsubscribe();
}
});</code></pre>
<p>Import the necessary other modules, like the HomePage, LoginPage, and AngularFireAuth.</p>
<p>Let’s start coding the Register page first.</p>
<p>First, to add a new page to the app. There are two ways to do this;</p>
<ol>
<li>Create a new folder within the pages folder inside src and create separate .scss, .ts and .html files.</li>
<li>Or, be lazy (like me ?) and just type <code>ionic g page &lt;name of page&gt;</code> in the console. All three files will be auto-generated!</li>
</ol>
<p>Since we need to conduct many validations on the data entered in the login, register and forgot password pages, we need to utilize a form group to have a track of all the fields in the form and to add any and all validation to each field, such as checking if the email looks like an actual email, password lengths, the works. We’ll first design the view of the page. In register.html, the form tag looks like so;</p><pre><code class="language-js">&lt;form [formGroup]="signupForm" (submit)="signupUser()" novalidate&gt;</code></pre>
<p><code>novalidate</code> is used as the actual validation is being added in the .ts file to the form group <code>signupForm</code>.</p>
<p>Then copy the exact item tag that we have been using to add task names in the home page (but remove that button, id and <code>[(ngModule)]</code> this time!). Add a tag for the users’ full name, email, password and confirm password. The type of input tag for the latter two is password and email for the email tag. You will also need to add a <code>formControlName</code> to each input tag. Add in a button as well of the type submit, to submit the form. The body of your register page must now look like this;</p><pre><code class="language-js">&lt;form [formGroup]="signupForm" (submit)="signupUser()" novalidate&gt;
&lt;ion-item&gt;
&lt;ion-input formControlName="firstName" type="text" placeholder="First Name"&gt;&lt;/ion-input&gt;
&lt;/ion-item&gt;
&lt;ion-item&gt;
&lt;ion-input formControlName="lastName" type="text" placeholder="Last Name"&gt;&lt;/ion-input&gt;
&lt;/ion-item&gt;
&lt;ion-item&gt;
&lt;ion-input formControlName="email" type="email" placeholder="Email"&gt;&lt;/ion-input&gt;
&lt;/ion-item&gt;
&lt;ion-item&gt;
&lt;ion-input formControlName="password" type="password" placeholder="Password"&gt;&lt;/ion-input&gt;
&lt;/ion-item&gt;
&lt;ion-item&gt;
&lt;ion-input formControlName="retype" type="password" placeholder="Confirm Password"&gt;&lt;/ion-input&gt;
&lt;/ion-item&gt;
&lt;ion-grid&gt;
&lt;ion-row&gt;
&lt;ion-col style="text-align: center"&gt;
&lt;button ion-button center-all type="submit" [disabled]="!signupForm.valid"&gt;Create an Account&lt;/button&gt;
&lt;/ion-col&gt;
&lt;/ion-row&gt;
&lt;/ion-grid&gt;
&lt;form&gt;</code></pre>
<p>The Register button is disabled until the Lets now add validators to each input, in the register.ts page. We will need to import the following modules to the top of the page,</p><pre><code class="language-js">import { FormBuilder, FormGroup, Validators } from '@angular/forms';</code></pre>
<p>initialize the form group outside of the constructor, so it can be accessed from anywhere in the component; <code>public signupForm: FormGroup</code> and initialize the form builder inside the parameters passed to the constructor, like so;</p><pre><code class="language-js">constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder){}</code></pre>
<p>Validators will be added to the form within the constructor like so;</p><pre><code class="language-js">this.signupForm = formBuilder.group({
email: ['', Validators.compose([Validators.required])],
password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
retype: ['', Validators.compose([Validators.minLength(6), Validators.required])],
firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
});</code></pre>
<p><code>Validators.compose</code> creates a validation check for the value, according to the validations passed in its parameters. Most of these Validators are self-explanatory. The pattern Validator checks if the value fits a specific regex. But one question remains, how to validate if an email looks like an email? Apparently, we need to make one….</p>
<p>But don’t worry! It’s quite simple and the only logic to it is to see if it fits a certain regex.</p>
<p>We need to make a new folder ‘validators’ in the src folder and a file ‘<code>email.ts</code>’ within it. We will be declaring a static method to check the email. When validating the email, we send the <code>formControl</code> to the Validator, so in that case, we will need to import <code>FormControl</code>. Once the email is tested against the regex, we need to return a value to convey if the email is valid or not. The final code for the email validator is;</p><pre><code class="language-js">import { FormControl } from '@angular/forms';
export class EmailValidator {
static isValid(control: FormControl) {
const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(control.value);
if (re) {
return null;
}
return {
"invalidEmail": true
};
}
}</code></pre>
<p>Now import the <code>EmailValidator</code> into the register.ts and add it to the array within the <code>Validators.compose</code> method for the email input.</p><pre><code class="language-js">this.signupForm = formBuilder.group({
email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
...
});</code></pre>
<p>That’s it on the validation side.</p>
<p>Another added feature you can do is show an error message right below the input, or even have the input tag turn red if the validation returns a false. The code for the error message;</p><pre><code class="language-js">&lt;ion-item class="error-message" *ngIf="!signupForm.controls.email.valid  &amp;&amp; signupForm.controls.email.dirty"&gt;
&lt;p&gt;Please enter a valid email.&lt;/p&gt;
&lt;/ion-item&gt;</code></pre>
<p><code>*ngIf</code> allows you to display the error only if the validation is false. The errors should be put right below each tag, altering the message and input name (in the above example ‘email’) accordingly.</p>
<p>The code for a red input on validation error;</p><pre><code class="language-js">[class.invalid]="!signupForm.controls.email.valid &amp;&amp; signupForm.controls.email.dirty"</code></pre>
<p>Add this inside each input, again changing the inputs’ name accordingly.</p>
<p>Now to handle the button click!</p>
<p>Create the method <code>signupUser()</code>. We will be using the AngularFireAuth modules’ method <code>createUserWithEmailAndPassword()</code>. This returns a promise, that we need to capture and according to the result, handle either the sign in of the user or display an error message. To make it more user-friendly, also show a loading carousel to the user as signup takes place.</p>
<p>As the button is only enabled when the whole form is valid, we do not need to recheck on that fact. We will first check if the password and the retyped password are the same, and if they are, create the new user and add their information to the Firestore. If the two are different, display an error message in the alert, stating that they are different.</p><pre><code class="language-js">signupUser() {
if (this.signupForm.value.password == this.signupForm.value.retype) {
this.afAuth.auth.createUserWithEmailAndPassword(this.signupForm.value.email, this.signupForm.value.password)
.then(() =&gt; {
let userId = this.afAuth.auth.currentUser.uid;
let userDoc = this.firestore.doc&lt;any&gt;('users/' + userId);
userDoc.set({
firstName: this.signupForm.value.firstName,
lastName: this.signupForm.value.lastName,
email: this.signupForm.value.email
});
this.navCtrl.setRoot(HomePage);
}, (error) =&gt; {
this.loading.dismiss().then(() =&gt; {
let alert = this.alertCtrl.create({
message: error.message,
buttons: [{ text: "Ok", role: 'cancel' }]
});
alert.present();
});
});
this.loading = this.loadingCtrl.create({
dismissOnPageChange: true,
content: "Signing up.."
});
this.loading.present();
} else {
let alert = this.alertCtrl.create({
message: "The passwords do not match.",
buttons: [{ text: "Ok", role: 'cancel' }]
});
alert.present();
}
}</code></pre>
<p>You will need to additionally import <code>AlertController</code>, <code>Loading</code>, <code>LoadingController</code>, <code>AngularFirestore</code> and <code>HomePage</code>.</p>
<p><code>loading</code> needs to be declared outside the constructor, so that it can be accessed by all the methods. <code>AlertController</code>, <code>LoadingController </code>and <code>AngularFirestore</code> needs to be initialized in the constructor parameters.</p>
<p>And (finally) the register page is done!</p>
<p>Whew! ?? This is the longest post I’ve ever written. And there’s still more to go…..</p>
<p>But don’t worry! The rest is all just copy + paste.</p>
<p>The next page to tackle is the Login page. Copy the entire Register page form to login.html, coz its time to make some changes for it to fit Login. Remove the first name, last name and retyped passwords’ input tags and error messages. On the form tag, change all instances of <code>signupForm</code> to <code>loginForm</code>.</p>
<p>Change the submit buttons’ text to ‘Login’ and the <code>onSubmit</code> method to <code>loginUser()</code>. Add two buttons as well, outside the form, to navigate to the register and reset password pages. The final body of <code>login.html</code>;</p><pre><code class="language-js">&lt;form [formGroup]="loginForm" (submit)="loginUser()" novalidate&gt;
&lt;ion-item&gt;
&lt;ion-input formControlName="email" type="email" placeholder="Email" [class.invalid]="!loginForm.controls.email.valid &amp;&amp; loginForm.controls.email.dirty"&gt;&lt;/ion-input&gt;
&lt;/ion-item&gt;
&lt;ion-item class="error-message" *ngIf="!loginForm.controls.email.valid  &amp;&amp; loginForm.controls.email.dirty"&gt;
&lt;p&gt;Please enter a valid email.&lt;/p&gt;
&lt;/ion-item&gt;
&lt;ion-item&gt;
&lt;ion-input formControlName="password" type="password" placeholder="Password" [class.invalid]="!loginForm.controls.password.valid &amp;&amp; loginForm.controls.password.dirty"&gt;&lt;/ion-input&gt;
&lt;/ion-item&gt;
&lt;ion-item class="error-message" *ngIf="!loginForm.controls.password.valid  &amp;&amp; loginForm.controls.password.dirty"&gt;
&lt;p&gt;Your password must be more than 6 characters long&lt;/p&gt;
&lt;/ion-item&gt;
&lt;ion-grid&gt;
&lt;ion-row&gt;
&lt;ion-col style="text-align: center"&gt;
&lt;button ion-button center-all type="submit" [disabled]="!loginForm.valid"&gt;Login&lt;/button&gt;
&lt;/ion-col&gt;
&lt;/ion-row&gt;
&lt;/ion-grid&gt;
&lt;/form&gt;
&lt;button ion-button block clear color="danger" (click)="resetPwd()"&gt;
I forgot my password
&lt;/button&gt;
&lt;button ion-button block clear (click)="createAccount()"&gt;
Create a new account
&lt;/button&gt;</code></pre>
<p>There you have it! The UI is done.</p>
<p>The <code>loginForm </code>has the same Validators for the email and password fields. So, proceed to copy the same <code>formBuilder</code>, omitting the first name, last name and retyped password fields.</p><pre><code class="language-js">this.loginForm = formBuilder.group({
email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
});</code></pre>
<p>The <code>loginUser()</code> method has similar code to that of the <code>signupUser</code> method. So copy that on to the login.ts as well. The change to be made, is to remove the password comparison and accessing the database.</p><pre><code class="language-js">loginUser() {
this.afAuth.auth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password).then(() =&gt; {
this.navCtrl.setRoot(HomePage);
}, (error) =&gt; {
this.loading.dismiss().then(() =&gt; {
let alert = this.alertCtrl.create({
message: error.message,
buttons: [{ text: "Ok", role: 'cancel' }]
});
alert.present();
});
});
this.loading = this.loadingCtrl.create({
dismissOnPageChange: true,
content: "Logging in.."
});
this.loading.present();
}</code></pre>
<p>You will need to import the exact extra modules to the login.ts as well, with the exception of the AngularFirestore, as you will not be accessing the database now.</p>
<p>Now to handle the buttons to the reset password and the registration page;</p><pre><code class="language-js">resetPwd() {
this.navCtrl.push(ResetPasswordPage);
}
createAccount() {
this.navCtrl.push(RegisterPage);
}</code></pre>
<p>The pages work like a stack; you push the next page to the top of the stack and pop from the top as well.</p>
<p>Bear with me, we have one more page to go. Yay! More copy+paste!</p>
<p>For the reset password, we only require the email field, but still, need a form to validate the email entered. Much like for the Login page, copy the entire login.html form, remove all fields except the email input tag and error message, change all instances of <code>loginForm </code>to resetPwdForm. You are left with;</p><pre><code class="language-js">&lt;form [formGroup]="resetPwdForm" (submit)="resetUserPwd()" novalidate&gt;
&lt;ion-item&gt;
&lt;ion-input formControlName="email" type="email" placeholder="Email" [class.invalid]="!resetPwdForm.controls.email.valid &amp;&amp; resetPwdForm.controls.email.dirty"&gt;&lt;/ion-input&gt;
&lt;/ion-item&gt;
&lt;ion-item class="error-message" *ngIf="!resetPwdForm.controls.email.valid  &amp;&amp; resetPwdForm.controls.email.dirty"&gt;
&lt;p&gt;Please enter a valid email.&lt;/p&gt;
&lt;/ion-item&gt;
&lt;ion-grid&gt;
&lt;ion-row&gt;
&lt;ion-col style="text-align: center"&gt;
&lt;button ion-button center-all type="submit" color="danger" [disabled]="!resetPwdForm.valid"&gt;Reset Password&lt;/button&gt;
&lt;/ion-col&gt;
&lt;/ion-row&gt;
&lt;/ion-grid&gt;
&lt;/form&gt;</code></pre>
<p>The same is to be done for the reset-password.ts file. The form builder looks like this;</p><pre><code class="language-js">this.resetPwdForm = formBuilder.group({
email: ['', Validators.compose([Validators.required, EmailValidator.isValid])]
});</code></pre>
<p>while the <code>resetUserPwd()</code> method looks like so;</p><pre><code class="language-js">resetUserPwd() {
this.afAuth.auth.sendPasswordResetEmail(this.resetPwdForm.value.email).then((user) =&gt; {
let alert = this.alertCtrl.create({
message: "We just sent a link to reset your password to your email.",
buttons: [{ text: "Ok", role: 'cancel',
handler: () =&gt; {
this.navCtrl.pop();
}}]
});
alert.present();
}, (error) =&gt; {
let errorAlert = this.alertCtrl.create({
message: error.message,
buttons: [{ text: "Ok", role: 'cancel' }]
});
errorAlert.present();
});
}</code></pre>
<p>The handler code above pops the reset password page to show the login page once the request for the link is sent.</p>
<p>One last part (I’m so sorry! I’m tired too)…??</p>
<p>The logout button, the easiest and smallest code!</p>
<p>You need to put a button at the end of the header on the home page as shown below;</p><pre><code class="language-js">&lt;ion-header&gt;
&lt;ion-navbar&gt;
&lt;ion-title&gt;To-do List&lt;/ion-title&gt;
&lt;ion-buttons end&gt;
&lt;button ion-button (click)="logout()"&gt;Logout&lt;/button&gt;
&lt;/ion-buttons&gt;
&lt;/ion-navbar&gt;
&lt;/ion-header&gt;</code></pre>
<p>The code to handle the logout in home.ts;</p><pre><code class="language-js">logout() {
return this.afAuth.auth.signOut().then(authData =&gt; {
this.app.getRootNav().setRoot(LoginPage);
});
}</code></pre>
<p>The code after the ‘then’ takes the user back to the login page.</p>
<p>And that’s it! Finally! ??</p>
<p>To allow the app to use these pages, you need to include them in the app.module.ts page, in both the declarations and <code>entryComponents </code>arrays, like so;</p><pre><code class="language-js">@NgModule({
...
declarations: [
...
LoginPage,
RegisterPage,
ResetPasswordPage
],
...
entryComponents: [
...
LoginPage,
RegisterPage,
ResetPasswordPage
]
})</code></pre>
<p>Let’s have a look at all we have achieved so far.</p>
<figcaption>App with Authentication</figcaption>
</figure>
<p>And there you have it! ?? It’s not so easy on the eyes, but it is definitely functional.</p>
<p>As you can see, when a particular fields’ validation returns false, the input turns red, and the error message shows as well. The buttons stay disabled until all fields of the form are valid!</p>
<p>Below, the user object has also been stored in Firestore, with the current users’ uid as the key to the document. It all works!</p>
<figcaption>Firestore Document</figcaption>
</figure>
<p>Now that authentication and by extension user objects has been implemented, we now go on to syncing up the CRUD operations with Firebase Cloud Firestore.</p>
<h2 id="step-4-syncing-crud-actions-with-cloud-firestore">Step 4 - Syncing CRUD actions with Cloud Firestore</h2>
<p>The coding will be quite simple, as we have already integrated AngularFire into our app. The major changes will be made only to the back-end logic in the home.ts file, and one simple addition to the home.html to handle lists we get from Firestore.</p>
<h3 id="the-c-in-crud-to-firestore">The C in CRUD to Firestore</h3>
<p>We’ll first start with adding functionality to the <code>addTask()</code> method. But first we need to import AngularFirestore to the home.ts and initialize it in the constructor, like so;</p><pre><code class="language-js">constructor(...public firestore: AngularFirestore) {}</code></pre>
<p>As mentioned in the previous post, Firestore is not like its predecessor, it is not one big JSON structure. Instead, it works with something called documents. Each document is one uniquely JSON object that holds only one type of data, for example, the user object will only hold user data, such as their name, date of birth and other personal information, but not any other data.</p>
<p>Many documents of the same type make up a collection. And sometimes an object can have a collection of different objects inside it, and that’s what we are doing today; making a collection of task objects for each user.</p>
<p>If you can remember, in the previous post, we took the user’s uid, a unique ID that Firebase assigns all its users that sign up as the ID for the users’ JSON object. We will be requiring it heavily today as well, so the first thing to do is capture the uid from AngularFireAuth. As many methods will be using this value, it will be best to declare this variable outside the constructor, then initializing it inside <code>ionViewDidLoad</code>.</p>
<p>We put it in <code>ionViewdidLoad()</code>, because sometimes the user details from AngularFireAuth is not ready by the constructor. And since we will be accessing only that collection within the users' object, go ahead and grab that as well, similar to the register page. All this is added within the call to get the userId.</p><pre><code class="language-js">this.afAuth.authState.subscribe(user =&gt; {
if (user) {
this.userId = user.uid;
this.fireStoreTaskList = this.firestore.doc&lt;any&gt;('users/' + this.userId).collection('tasks').valueChanges();
this.fireStoreList = this.firestore.doc&lt;any&gt;('users/' + this.userId).collection('tasks');
}
});</code></pre>
<p>The reason why we have two lists is the <code>fireStoreTaskList</code> holds the list that we view, while the <code>fireStoreList</code> is the reference to the collection where we directly add the new tasks. The method <code>valueChanges()</code> returns an Observable List, which we can display in the view.</p>
<p>We can now use this reference anywhere in the page. Using it to add a task in the <code>addTask</code> method is very simple. There is a need to have a specific ID for each task, as we will require it when attempting to update the taskName, so we need to generate the ID and use the <code>set()</code> method of the firestore collection, to create a new task object, inside the if condition, replacing the previous code that pushes the task name into <code>taskList</code>.</p><pre><code class="language-js">let id = this.firestore.createId();
this.fireStoreList.doc(id).set({
id: id,
taskName: task
});</code></pre>
<h3 id="the-r-in-crud-in-the-app">The R in CRUD in the App</h3>
<p>Now to set up viewing the firestore list. The main part, getting the collection was done above. So the changes now need to be made to the home.html to view the <code>fireStoreTaskList</code>.</p>
<p>The first change is to be in the <code>*ngFor</code>, the name of the list. Since the list will be a response back by firebase, its asynchronous. The normal <code>*ngFor</code>, will cause errors. We need to add an async pipe as well, like so;</p><pre><code class="language-js">&lt;ion-item *ngFor="let todo of fireStoreTaskList | async"&gt;</code></pre>
<p>We no longer need to keep track of the index, as we will be using the task ID to either delete or update its value. And the second change is the value that we will view since todo will now be an object, we need to display todo.taskName, as that’s what we have named the task variable in the task object.</p><pre><code class="language-js">{{todo.taskName}}</code></pre>
<p>And that’s it! Lets now have a look at both the app and Firestore, to see if it gets saved.</p>
<figcaption>Create and Read tasks</figcaption>
</figure>
<figcaption>Newly created task</figcaption>
</figure>
<p>It’s got saved!</p>
<p>There’s nothing much to it for the C and R in CRUD. Now to update then delete.</p>
<h3 id="the-u-in-crud-to-firestore">The U in CRUD to Firestore</h3>
<p>Luckily, AngularFirestore has its own update function, which, given the documents’ ID as well as the values to be updated, can be done in one single line. But first, a small change in the home.html file, to allow this to happen. As said earlier, you don’t need the index of the task in the list to update or delete, but instead the document ID, which we have simply stored in the variable id of a task object.</p>
<p>Our first order of business is to send the tasks’ id to the method from the button, like so;</p><pre><code class="language-js">&lt;button ion-button clear (click)="updateTask(todo.id)"&gt;</code></pre>
<p>Move over to home.ts and replace the code in the handler of the alert to;</p><pre><code class="language-js">this.fireStoreList.doc(index).update({ taskName: data.editTask });</code></pre>
<p>We first create a reference to the specific object that the user wishes to update using the <code>doc()</code> method, then sending the relevant data we wish to update into the <code>update()</code> method.</p>
<p>Now to see this functionality in action!</p>
<figcaption>Update task name</figcaption>
</figure>
<figcaption>Updated task name</figcaption>
</figure>
<p>This one works too!</p>
<p>Now onto the last change, delete.</p>
<h3 id="the-d-in-crud-to-firestore">The D in CRUD to Firestore</h3>
<p>Deleting is just as easy (or easier, really) than updating.</p>
<p>You will again, need to pass the tasks’ ID onto the delete button;</p><pre><code class="language-js">&lt;button ion-button clear (click)=”deleteTask(todo.id)”&gt;</code></pre>
<p>Again like for update, AngularFirestore has a function <code>delete()</code>, that is run on the reference of the document to be deleted, like so;</p><pre><code class="language-js">this.fireStoreList.doc(index).delete();</code></pre>
<p>And now to watch the last functionality….</p>
<figcaption>Delete task</figcaption>
</figure>
<figcaption>Task deleted in Firestore</figcaption>
</figure>
<p>This one is functional too!</p>
<p>As you can see, the ‘Fold Clothes’ task with an ID of ‘NSskIVHEg4gKsT3U0xAV’ is no longer there, as it has been successfully deleted</p>
<p>There you have it! Firebase integrated into all the CRUD operations.</p>
<h2 id="step-5-bonus-content-styling">Step 5 - Bonus content styling</h2>
<p>This is a short checklist of basic things that weren’t covered in the previous posts;</p>
<ol>
<li>Custom styles ?</li>
<li>Images ?️</li>
<li>Custom fonts ?</li>
</ol>
<h3 id="prettify-the-ui">Prettify the UI</h3>
<p>Going through my app, I was able to see a few things I wanted to change.</p>
<p>Remember those little messages below the input fields in the login, register and reset password pages?</p>
<figcaption>Error message with underline</figcaption>
</figure>
<p>I just realized that, since they are essentially <code>&lt;ion-item&gt;</code>, they have a line at the bottom. Not that great.</p>
<p>Thankfully, it’s a simple fix! There’s a global property called <code>no-lines</code>, that you need to add to the <code>&lt;ion-item&gt;</code> like so;</p><pre><code class="language-js">&lt;ion-item ... no-lines&gt;</code></pre>
<p>So go ahead and add this to all the error message <code>&lt;ion-item&gt;</code> tags.</p>
<figcaption>Error message without underline</figcaption>
</figure>
<p>Your error message now looks like this.</p>
<p>Let’s move on to colors!</p>
<p>If you snooped around the project structure, you would have seen a folder called theme. The variables.scss file within has a color variable with 5 set colors. Keep the colors light and dark as they are, as well as danger, as we are using it for the reset password button and page. I will be only changing the primary and secondary color. I normally use <a href="https://coolors.co/1d1e18-6b8f71-aad2ba-d9fff5-b9f5d8?source=post_page---------------------------">coolors.co</a> to find complementary colors for all the projects I’ve ever done.</p>
<blockquote><em><em>Disclaimer: Do not add more than those 5 colors to the object, as this causes multiple copies of components to be made for each of these colors. It will eventually add unwanted bulk to the project, as not all components with all colors are used. If you need to use more colors, add a new variable to hold only that color literal.</em></em></blockquote>
<p>The colors I will be using are;</p><pre><code class="language-scss">$colors: (
primary:    #32B596,
secondary:  #fff350,
danger:     #f53d3d,
light:      #f4f4f4,
dark:       #222
);</code></pre>
<p>The first place to splash some color is the top navbar.</p>
<figcaption>Boring…</figcaption>
</figure>
<p>Looked so bland right??</p>
<figcaption>Ooh la la!</figcaption>
</figure>
<p>Not any more.??</p>
<p>All you need to do is add the color primary to the ion-navbar tag, like so;</p><pre><code class="language-js">&lt;ion-navbar color='primary'&gt;</code></pre>
<p>You can add the color property similarly to other components. Such as, give the delete icon the color stored in danger, or the add and logout button the color in secondary;</p>
<figcaption>Adding colors everywhere!</figcaption>
</figure>
<p>I still hate the way that the logout button looks… To make it a proper button, simply add the property solid to the tag, like so;</p><pre><code class="language-js">&lt;button ion-button solid color='secondary' (click)="logout()"&gt;Logout&lt;/button&gt;</code></pre>
<figcaption>Buttons must look like buttons!</figcaption>
</figure>
<p>Another cool UI design I saw previously, had icons before each input tag on the login, register and reset password pages, so I decided to give that a try as well! It’s a pretty simple code, that you need to add within the <code>&lt;ion-item&gt;</code> tag but before the <code>&lt;ion-input&gt;</code> tag, like so;</p><pre><code class="language-js">&lt;ion-item&gt;
&lt;div class="item-note" item-start&gt;
&lt;ion-icon name="at" color='primary'&gt;&lt;/ion-icon&gt;
&lt;/div&gt;
&lt;ion-input formControlName="email" ...&gt;&lt;/ion-input&gt;
&lt;/ion-item&gt;</code></pre>
<p>There is no icon that screams password, so I decided to use ? just like in the UI design I had a look at; and ? for the users’ names</p>
<figcaption>Input icons of the register page</figcaption>
</figure>
<h3 id="adding-images">Adding images</h3>
<p>A picture says a thousand words… But we have no need for such pictures…. ?No matter!</p>
<p>Adding pictures are not necessarily tough, but the path may get a bit confusing sometimes. You would assume that you need to add the actual path from the page to the image folder, which is <code>../../assets/imgs/imagename.png</code>. The path you really need to add is the path from the app.html to the image in the image folder, and that path looks like <code>assets/imgs/imagename.png</code>.</p>
<p>Any and all images you wish to use needs to be added to the folder <code>src/assets/imgs</code>. You can then use the image as if this was HTML;</p><pre><code class="language-js">&lt;img src="assets/imgs/imagename.png"/&gt;</code></pre>
<p>I want to add an image, kinda like a logo, to the login, register and reset password pages.</p>
<p>So that the image doesn’t exceed the page, we will also need to code some styling, and as this image will be in more than one page, we are required to write the styling in the app.scss page like so;</p><pre><code class="language-css">.imageTop {
height: 200px;
padding: 20px;
margin: auto;
display: block;
}</code></pre>
<p>All you need to do now is simply add the class to the <code>img</code> tag, <code>class='imageTop'</code>.</p>
<p>Another image (or two) that you might want to change, is the splash page and app icon. You will first need to add either (or both) Android and iOS platforms, to use this feature. The command to add a platform is</p><pre><code>ionic cordova platform add android</code></pre>
<p>Or <code>ios</code>, if that’s your cup of ☕.</p>
<p>Ionic can easily generate different sized splash pages and icons according to different phones when you run the command <code>ionic cordova resources</code> in the terminal. You will need internet for this, as ionic uploads both images to be analyzed to generate the other splash pages and icons.</p>
<p>Before that you need to add both the images, named <code>splash.png</code> and <code>icon.png</code> to the resources folder. The sizes of both images should be 2732*2732 and 1024*1024 respectively, for the many splash pages and app icons to be generated.</p>
<p>That’s all for images!</p>
<h3 id="typography-rox-cks-">Typography Rox(cks)!</h3>
<p>First, find a font that speaks to you. The latest trends stick to sans serif fonts that are pretty easy to read. As pretty as many handwritten flowy fonts are, they are just a fail waiting to happen, like this one….</p>
<figcaption>I love ?too!</figcaption>
</figure>
<p>Or this one,</p>
<figcaption>Hope has never looked so bleak!</figcaption>
</figure>
<p>???</p>
<p>Jokes aside, I picked the font ‘Alegreya Sans’ to use for this app. It can be found, <a href="https://www.fontsquirrel.com/fonts/alegreya-sans?source=post_page---------------------------">here</a>.</p>
<p>Unpack all the fonts to the folder <code>assets/fonts</code>.</p>
<p>All you need to do now is add the code below to the variables.scss found in the <code>src/theme</code> folder.</p><pre><code class="language-scss">@font-face {
font-family: 'Alegreya Sans Regular';
src: url("../assets/fonts/AlegreyaSans-Regular.otf");
}
$font-family-base: 'Alegreya Sans Regular';
$font-family-ios-base: 'Alegreya Sans Regular';
$font-family-md-base: 'Alegreya Sans Regular';
$font-family-wp-base: 'Alegreya Sans Regular';</code></pre>
<p>The <code>@font-face</code> imports your font and gives it a name, so it can be used throughout the application.</p>
<p>The variable <code>$font-family-base</code> assigns the default font.</p>
<p>The app now looks like this;</p>
<figcaption>No one needs to see that password!</figcaption>
</figure>
<p>As you can only view the splash page and icon on a real device, I have brought in my trusty phone into the mix (Sadly it ain’t an Apple to fit with the rest of the gifs/pics).</p>
<p>And that’s it for this series!!!!!??</p>
<p>Find the repo for this post, <a href="https://github.com/samsam-026/Tasks/commit/f54bf2d7e534d31a9ae4962a173053a0044e235e?source=post_page---------------------------">here</a>.</p>
<p>I hope you all had fun and learned a lot on this journey with me!</p>
<p>Thank you for the read, and see you soon!??</p>
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
