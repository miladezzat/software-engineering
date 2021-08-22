---
card: "https://cdn-media-1.freecodecamp.org/images/1*A3cp3Q48OLI3FxfafhbbvQ.png"
tags: [JavaScript]
description: "by Bruno Krebs"
author: "Milad E. Fahmy"
title: "Let’s Build a Serverless REST API with Angular, Persistence, and Security"
created: "2021-08-16T10:24:58+02:00"
modified: "2021-08-16T10:24:58+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-serverless tag-angularjs tag-programming tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">Let’s Build a Serverless REST API with Angular, Persistence, and Security</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*A3cp3Q48OLI3FxfafhbbvQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*A3cp3Q48OLI3FxfafhbbvQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*A3cp3Q48OLI3FxfafhbbvQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*A3cp3Q48OLI3FxfafhbbvQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*A3cp3Q48OLI3FxfafhbbvQ.png" alt="Let’s Build a Serverless REST API with Angular, Persistence, and Security">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
npm install -g @angular/cli
# create skeleton
ng new task-list &amp;&amp; cd task-list
# serve the skeleton on our dev env
npm install --save auth0-lock angular2-jwt @angular/material
# Types definitions for Auth0 Lock
npm install --save-dev @types/auth0-lock</code></pre><p>Let’s use Angular CLI to create a <code>NavBarComponent</code>. This component will have <em>Sign in</em> and <em>Sign out</em> buttons. We will also create a <code>AuthService</code> that will be responsible for <code>sign in</code>, <code>sign out</code> and to validate if the user is <code>authenticated</code> or not.</p><pre><code class="language-bash"># generates NavBarComponent files under src/app/nav-bar
ng g component nav-bar
# generates AuthService under src/app/auth.service.ts
ng g service auth</code></pre><p>After executing these commands, Angular CLI will have created the following file structure:</p><pre><code>src
|-app
|-nav-bar
|-nav-bar.component.ts
|-nav-bar.component.html
|-nav-bar.component.css
import Auth0Lock from 'auth0-lock';
import { tokenNotExpired } from 'angular2-jwt';
// FIXME: replace these with your own Auth0 'Client ID' and 'Domain'
const AUTH0_CLIENT_ID = 'YOUR_AUTH0_CLIENT_ID';
const AUTH0_DOMAIN = 'YOUR_AUTH0_DOMAIN';
// this is the key to the JWT in the browser localStorage
const ID_TOKEN = 'id_token';
@Injectable()
export class AuthService {
lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN, {});
constructor() {
// listening to 'authenticated' events
this.lock.on('authenticated', (authResult) =&gt; {
localStorage.setItem(ID_TOKEN, authResult.idToken);
});
}
signIn() { this.lock.show(); }
signOut() { localStorage.removeItem(ID_TOKEN); }
authenticated() { return tokenNotExpired(); }
import { AuthService } from './auth.service';
import { MaterialModule } from '@angular/material';
@NgModule({
// ... other properties
imports: [
// ... other imports
MaterialModule.forRoot(),
],
providers: [ AuthService ],
// ... other properties
})
import { AuthService } from '../auth.service';
@Component({
selector: 'app-nav-bar',
templateUrl: './nav-bar.component.html',
styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
constructor(private authService: AuthService) { }
&lt;span&gt;Task List&lt;/span&gt;
&lt;span class="fill-space"&gt;&lt;/span&gt;
&lt;button md-button (click)="authService.signIn()" *ngIf="!authService.authenticated()"&gt;Sign In&lt;/button&gt;
&lt;button md-button (click)="authService.signOut()" *ngIf="authService.authenticated()"&gt;Sign Out&lt;/button&gt;
flex: 1 1 auto;
body {
margin: 0;
import { AuthService } from './auth.service';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private authService: AuthService) { }
&lt;div class="app-container"&gt;
Please &lt;a (click)="authService.signIn()"&gt;sign in&lt;/a&gt; to manage your task list.
padding: 20px;
// imports node modules
const express = require('express');
const mongojs = require('mongojs');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
// creates Express app with JSON body parser
const app = new express();
app.use(bodyParser.json());
// defines REST API (HTTP methods)
app.get('/', getTasks);
app.post('/', addTask);
app.delete('/', deleteTask);
// exports REST API
module.exports = app;
function addTask(req, res) {
let userCollection = loadUserCollection(req.webtaskContext);
// save new task to user collection
userCollection.save({
createdAt: new Date(),
description: req.body.description
}, () =&gt; res.end())
}
function getTasks(req, res) {
let userCollection = loadUserCollection(req.webtaskContext);
// retrieves all tasks sorting by descending creation date
userCollection.find().sort({ createdAt: -1 }, (err, data) =&gt; {
res.status(err ? 500 : 200).send(err || data);
});
}
function deleteTask(req, res) {
let userCollection = loadUserCollection(req.webtaskContext);
// removes a task based on its id
userCollection.remove({ _id: mongojs.ObjectId(req.query.id) }, () =&gt; res.end());
}
function loadUserCollection(webtaskContext) {
// this secrets are configured when creating the Webtask
const AUTH0_SECRET = webtaskContext.secrets.AUTH0_SECRET;
const MONGO_USER = webtaskContext.secrets.MONGO_USER;
const MONGO_PASSWORD = webtaskContext.secrets.MONGO_PASSWORD;
const MONGO_URL = webtaskContext.secrets.MONGO_URL;
// removes the 'Bearer ' prefix that comes in the authorization header,
let authorizationHeader = webtaskContext.headers.authorization;
authorizationHeader = authorizationHeader.replace('Bearer ', '');
// verifies token authenticity
let token = jwt.verify(authorizationHeader, AUTH0_SECRET);
// connects to MongoDB and returns the user collection
let mongodb = mongojs(`${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_URL}`);
return mongodb.collection(token.sub);
npm install wt-cli -g
# initialize it with our email address
wt init me@somewhere.com</code></pre><p>You will be asked to enter the verification code that was sent to your email address. This is the final step in the Webtask account configuration.</p><h3 id="deploying-our-serverless-rest-api">Deploying Our Serverless REST API</h3><p>With mLab and Webtask accounts created and having Webtask CLI tool correctly configured, we can now deploy our serverless REST API to production. This is done with the following code:</p><pre><code class="language-bash">wt create webtask/tasks.js \
--meta wt-compiler=webtask-tools/express \
-s AUTH0_SECRET=secret-from-auth0.com \
-s MONGO_USER=task-list-user \
-s MONGO_PASSWORD=111222 \
-s MONGO_URL=ds147069.mlab.com:47069/task-list \
ng g component task-list
# creates a component to hold a form to add tasks
ng g component task-list/task-form
# creates a service to handle all interaction with our REST API
import { Observable } from 'rxjs';
import { AuthHttp } from 'angular2-jwt';
@Injectable()
export class TaskListService {
private static TASKS_ENDPOINT =
'https://wt-e1870b8a73b27cdee73c468b8c8e3bc4-0.run.webtask.io/tasks';
constructor(private authHttp: AuthHttp) { }
loadTasks$(): Observable&lt;any&gt; {
return this.authHttp.get(TaskListService.TASKS_ENDPOINT);
}
addTask$(task) : Observable&lt;any&gt; {
return this.authHttp.post(TaskListService.TASKS_ENDPOINT,
{ description: task });
}
deleteTask$(task): Observable&lt;any&gt; {
return this.authHttp.delete(TaskListService.TASKS_ENDPOINT +
'?id=' + task._id);
}
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { TaskListService } from './task-list/task-list.service';
// creates a factory to AuthHttp
export function authHttpFactory(http: Http, options: RequestOptions) {
return new AuthHttp(new AuthConfig(), http, options);
}
@NgModule({
// ... other properties
providers: [
AuthService,
TaskListService, // adds new service
{
provide: AuthHttp,
useFactory: authHttpFactory, // defines how to provide AuthHttp
deps: [ Http, RequestOptions ]
}
],
bootstrap: [AppComponent]
import { TaskListService } from './task-list.service';
@Component({
selector: 'app-task-list',
templateUrl: './task-list.component.html',
styleUrls: [ './task-list.component.css' ]
})
export class TaskListComponent implements OnInit {
private tasks: String[];
constructor(private taskListService: TaskListService) { }
ngOnInit() { this.loadTasks(); }
private loadTasks() {
this.taskListService.loadTasks$().subscribe(
response =&gt; this.tasks = response.json(),
error =&gt; console.log(error)
);
}
taskAddedHandler(task) {
this.taskListService.addTask$(task).subscribe(
response =&gt; this.loadTasks(),
error =&gt; console.log()
);
}
deleteTask(task) {
this.taskListService.deleteTask$(task).subscribe(
response =&gt; this.loadTasks(),
error =&gt; console.log()
);
}
&lt;md-list&gt;
&lt;div class="task-item" *ngFor="let task of tasks; trackBy: $index"&gt;
&lt;p&gt;&lt;small&gt;&lt;strong&gt;{{ task.createdAt | date: 'short' }}&lt;/strong&gt;&lt;/small&gt;&lt;/p&gt;
&lt;p&gt;{{ task.description }}&lt;/p&gt;
&lt;button class="delete" md-button md-raised-button
color="accent" (click)="deleteTask(task)"&gt;Delete&lt;/button&gt;
&lt;/div&gt;
&lt;div class="task-item" *ngIf="tasks?.length == 0"&gt;
&lt;p&gt;You have no pending tasks.&lt;/p&gt;
&lt;/div&gt;
&lt;/md-list&gt;
padding: 10px;
margin-bottom: 10px;
background-color: #eee;
}
button.delete {
float: right;
top: -60px;
&lt;div class="app-container"&gt;
&lt;app-task-list *ngIf="authService.authenticated()"&gt;&lt;/app-task-list&gt;
@Component({
selector: 'app-task-form',
templateUrl: './task-form.component.html',
styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
@Output()
taskAdded = new EventEmitter();
public task: String = null;
addTask() {
this.taskAdded.emit(this.task);
this.task = null;
}
&lt;md-input-container&gt;
&lt;input mdInput [(ngModel)]="task" placeholder="New task"&gt;
&lt;/md-input-container&gt;
&lt;button md-button md-raised-button color="primary" (click)="addTask()"&gt;Add&lt;/button&gt;
&lt;app-task-form (taskAdded)="taskAddedHandler($event)"&gt;&lt;/app-task-form&gt;
&lt;!-- ... md-list --&gt;
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
@NgModule({
// ... declarations
imports: [
// ... other imports
SlimLoadingBarModule.forRoot()
],
// ... providers and bootstrap
})
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
// ... component definition
export class AppComponent {
constructor(private authService: AuthService, private slimLoading: SlimLoadingBarService) { }
// ... method definitions
&lt;div class="app-container"&gt;
&lt;!-- ... welcome message ... --&gt;
&lt;app-task-list *ngIf="authService.authenticated()"
(startAjaxRequest)="slimLoading.start()"
(completeAjaxRequest)="slimLoading.complete()"&gt;
&lt;/app-task-list&gt;
&lt;/div&gt;
&lt;!-- adds the slim loading bar to our app --&gt;
import { EventEmitter, Output } from '@angular/core';
// ... component definition
export class TaskListComponent implements OnInit {
@Output()
startAjaxRequest = new EventEmitter&lt;void&gt;();
@Output()
completeAjaxRequest = new EventEmitter&lt;void&gt;();
// ... properties, constructor and ngOnInit definitions
private loadTasks() {
this.startAjaxRequest.emit();
this.taskListService.loadTasks$().subscribe(
response =&gt; this.tasks = response.json(),
error =&gt; console.log(error),
() =&gt; this.completeAjaxRequest.emit()
);
}
taskAddedHandler(task) {
this.startAjaxRequest.emit();
this.taskListService.addTask$(task).subscribe(
response =&gt; this.loadTasks(),
error =&gt; console.log()
);
}
deleteTask(task) {
this.startAjaxRequest.emit();
this.taskListService.deleteTask$(task).subscribe(
response =&gt; this.loadTasks(),
error =&gt; console.log()
);
}
git remote add origin git@github.com:YOUR-USERNAME/YOUR-REPO.git
# commits our code
git add .
git commit -m "Task List Angular app with a secure serverless REST API."
# push work to new repo
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
