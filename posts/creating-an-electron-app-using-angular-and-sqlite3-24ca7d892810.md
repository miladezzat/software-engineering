---
card: "https://cdn-media-1.freecodecamp.org/images/0*fYvEL90t63nfj3Nb"
tags: [JavaScript]
description: by William Boxx
author: "Milad E. Fahmy"
title: "How to create an Electron app using Angular and SQLite3."
created: "2021-08-15T19:37:03+02:00"
modified: "2021-08-15T19:37:03+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-angular tag-typescript tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to create an Electron app using Angular and SQLite3.</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*fYvEL90t63nfj3Nb 300w,
https://cdn-media-1.freecodecamp.org/images/0*fYvEL90t63nfj3Nb 600w,
https://cdn-media-1.freecodecamp.org/images/0*fYvEL90t63nfj3Nb 1000w,
https://cdn-media-1.freecodecamp.org/images/0*fYvEL90t63nfj3Nb 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*fYvEL90t63nfj3Nb" alt="How to create an Electron app using Angular and SQLite3.">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by William Boxx</p>
<h1 id="how-to-create-an-electron-app-using-angular-and-sqlite3-">How to create an Electron app using Angular and SQLite3.</h1>
<figcaption>Photo by <a href="https://unsplash.com/@casparrubin?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Caspar Camille Rubin</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>I was recently experimenting with converting one of my Angular web apps into a desktop application using Electron. I encountered a few hurdles along the way, and decided to put my experience in writing so that it may help others. If you have similar plans for your project, I hope this may be of use. The source code for this guide can be found <a href="https://github.com/wboxx1/typescript-electron-angular6-sqlite3" rel="noopener">here</a>.</p>
<h3 id="part-i-angular">Part I: Angular</h3>
<h4 id="create-the-boilerplate-">Create the Boilerplate.</h4>
<p>For the sake of this guide, we will be creating a new Angular app from scratch. I will be using <a href="https://electronforge.io/" rel="noopener">Electron-Forge</a> to create the boilerplate. Electron-Forge offers several <a href="https://electronforge.io/templates" rel="noopener">templates</a> for creating boilerplate code, including one for Angular 2. First install the Electron-Forge CLI.</p><pre><code>$ npm i -g electron-forge</code></pre>
<p>Now use the CLI to create the Angular app boilerplate.</p><pre><code>$ electron-forge init electron-angular-sqlite3 --template=angular2
$ cd electron-angular-sqlite3</code></pre>
<p>The forge CLI will add the bare essentials we need to run our app. Let’s add a few additional directories to house our database files. Add an assets directory under src, and put data and model directories under it.</p><pre><code>$ mkdir ./src/assets/data ./src/assets/model</code></pre>
<p>The directory tree should now look like this:</p><pre><code>.
+-node_modules
+-src
|  |
|  +-assets
|  |  |
|  |  +-data
|  |  +-model
|  |
|  +-app.component.ts
|  +-bootstrap.ts
|  +-index.html
|  +-index.ts
|
+-.compilerc
+-.gitignore
+-package-lock.json
+-package.json
+-tsconfig.json
+-tslint.json</code></pre>
<h4 id="write-some-code-">Write Some Code.</h4>
<p>As our first step, let’s add a model file that we will match our database schema. For this simple example, let’s create a class called Item. Each item will contain an id and a name property. Save the file in your project at <code>src/assets/model/item.schema.ts</code>.</p>
<p>We will be using T<a href="http://typeorm.io/#/" rel="noopener">ypeORM </a>for our object relational mapping. First install TypeORM.</p><pre><code>$ npm install typeorm --save</code></pre>
<p>We will be following the TypeORM <a href="http://typeorm.io/#/undefined/step-by-step-guide" rel="noopener">guide</a> for creating schema here. When finished the file should look like this:</p><pre><code class="language-ts">import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Item
{
@PrimaryGeneratedColumn()
id: number;
@Column()
name: string;
}</code></pre>
<p>TypeORM makes use of typescript <a href="https://www.typescriptlang.org/docs/handbook/decorators.html" rel="noopener">decorators</a>. We use the Entity decorator to declare our Item class a table. The <code>@PrimaryGeneratedColumn()</code> decorator declares <code>id</code> as our unique identification and tells the database to automatically generate it. We will worry about linking to a database later on.</p>
<h4 id="create-the-service-">Create the Service.</h4>
<p>Our next likely action would be to create an app service that handles communication from the front to the back end. Electron makes available the <code>IpcRenderer</code> class for just this thing. <code>IpcRenderer</code> is Electron’s <a href="https://electronjs.org/docs/api/ipc-main" rel="noopener">inter process communication class</a> that is used in the renderer process. Basically, we want to use the <code>IpcRenderer</code> to send messages to Electron’s main process. These messages will pass information to the main process so that it can handle the database interactions.</p>
<p>Implementing the <code>IpcRenderer</code> is where we come across our first hurdle. Electron is relying on the window.require() method, which is only available inside of Electron’s renderer process. This is a well documented <a href="https://github.com/electron/electron/issues/7300" rel="noopener">issue</a>. To get around this, we can use <a href="https://github.com/ThorstenHans/ngx-electron" rel="noopener">ThornstonHans’ ngx-electron</a> package, which wraps all the Electron API’s exposed to the renderer process into a single Electron Service. You can read more about this <a href="https://thorsten-hans.com/integrating-angular-and-electron-using-ngx-electron-9c36affca25e" rel="noopener">here</a>.</p>
<p>Before we can use <code>ngx-electron</code>, we need to install it.</p><pre><code>$ npm install ngx-electron --save</code></pre>
<p>Now let’s create a service to handle our <code>IpcRenderer</code> communication. Create <code>src/app.service.ts</code> .</p><pre><code class="language-ts">import { Injectable } from '@angular/core';
import { Item } from './assets/model/item.schema';
import { ElectronService } from 'ngx-electron';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
@Injectable()
export class AppService {
constructor(private _electronService: ElectronService) {}
getItems(): Observable&lt;Item[]&gt; {
return of(this._electronService.ipcRenderer.sendSync('get-items')).pipe(
catchError((error: any) =&gt; Observable.throw(error.json))
);
}
addItem(item: Item): Observable&lt;Item[]&gt; {
return of(
this._electronService.ipcRenderer.sendSync('add-item', item)
).pipe(catchError((error: any) =&gt; Observable.throw(error.json)));
}
deleteItem(item: Item): Observable&lt;Item[]&gt; {
return of(
this._electronService.ipcRenderer.sendSync('delete-item', item)
).pipe(catchError((error: any) =&gt; Observable.throw(error.json)));
}
}</code></pre>
<p>In <code>app.service.ts</code> we create a class called<code>AppService</code> and add the <code>@Injectable()</code> decorator. This allows us to use angular’s built in dependency injection (DI). In our constructor, we create a local variable <code>_electronService</code> of type <code>ElectronService</code> . The <code>ElectronService</code> class is provided to us by <code>ngrx-electron</code> . It allows us to use Electron’s <code>IpcRender</code> class without any of the aforementioned issues.</p>
<p>We create three functions: one that get’s all Items in the database, one to add an Item to the database, and one to delete an Item. Each function will return an Observable.</p>
<p>Observables are part of the <a href="https://angular.io/guide/rx-library" rel="noopener">RxJs Library</a> and provide a good way of handling our database interactions asynchronously. You can read more about Observables <a href="https://angular.io/guide/observables" rel="noopener">here</a>. Note the use of the Observable operator <code>of</code> to denote that we are wrapping our response from <code>this._electronService.ipcRenderer.sendSync()</code> as an Observable value.</p>
<h4 id="registering-services-and-writing-component-">Registering Services and Writing Component.</h4>
<p>With our service complete, let’s go into <code>src/app.component.ts</code> and register it for DI. While in there, we will add a simple html template and functions to handle our button events.</p><pre><code class="language-ts">import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Item } from './assets/model/item.schema';
import { AppService } from './app.service';
import { ElectronService } from 'ngx-electron';
@Component({
selector: 'App',
template: `&lt;div style="text-align:center"&gt;
&lt;h1&gt;
Welcome to {{ title }}!
&lt;/h1&gt;
&lt;button (click)="addItem()" mat-raised-button&gt;Add Item&lt;/button&gt;
&lt;button (click)="deleteItem()" mat-raised-button&gt;Delete Item&lt;/button&gt;
&lt;h2&gt;Here is the contents of the database: &lt;/h2&gt;
&lt;div&gt;
&lt;ul style="list-style: none"&gt;
&lt;li *ngFor="let item of itemList"&gt;
{{ item.name }}
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;/div&gt;`,
})
export class AppComponent implements OnInit {
public readonly title = 'my app';
itemList: Item[];
constructor(private appservice: AppService) {}
ngOnInit(): void {
console.log('component initialized');
this.appservice.getItems().subscribe((items) =&gt; (this.itemList = items));
}
addItem(): void {
let item = new Item();
item.name = 'Item ' + this.itemList.length;
this.appservice.addItem(item).subscribe((items) =&gt; (this.itemList = items));
}
deleteItem(): void {
const item = this.itemList[this.itemList.length - 1];
this.appservice
.deleteItem(item)
.subscribe((items) =&gt; (this.itemList = items));
}
}
@NgModule({
imports: [ BrowserModule ],
declarations: [ AppComponent ],
bootstrap: [ AppComponent ],
providers: [ AppService, ElectronService ],
})
export class AppModule {}</code></pre>
<p>Make sure to add <code>AppService</code> as a provider in the <code>@NgModule</code> decorator arguments and also as a private variable in the <code>AppComponent</code> constructor. We also need to add <code>ElectronService</code> as a provider.</p>
<p>On initialization of our component, we want to load all contents of our database and display it. To do this, we subscribe to the <code>addItem()</code> function of the service we created. If you remember, all of our service functions return Observables. To get data from our observable, we subscribe to it, passing a callback function that runs when the data is received. In the example above, <code>(items) =&gt; (this.itemList = ite</code>ms) will populate our class variab<code>le itemL</code>ist with the contents of the database once it is retrieved.</p>
<p>We follow similar tactics for adding and deleting items from the database. Each time repopulating <code>itemList</code> with the updated contents of the database.</p>
<h3 id="part-ii-electron">Part II: Electron</h3>
<h4 id="installing-sqlite3-">Installing SQLite3.</h4>
<p>Now that we finished up our front end, we need to create the Electron backend. The Electron backend will handle and process messages sent from the front and manage the sqlite3 database.</p>
<p>We will be using sqlite3 for our database and need to install it.</p><pre><code>$ npm install sqlite3 --save</code></pre>
<p>A hurdle I ran into while working with sqlite3 and Electron initially, was that sqlite’s native binaries need to be recompiled for use with Electron. Electron-Forge should take care of this for you. One thing to note, Electron-Forge will use <a href="https://www.npmjs.com/package/node-gyp" rel="noopener">node-gyp</a> to compile the binaries. You may need to have it properly installed and configured prior to use, which includes installing Python. As of <a href="https://github.com/nodejs/node-gyp/issues/1337" rel="noopener">now</a>, node-gyp uses python 2. If you have multiple versions on your machine, you must ensure that current build is using the proper one.</p>
<h4 id="connecting-to-the-database-">Connecting to the Database.</h4>
<p>Now let’s open our <code>src/index.ts</code> file and add some code to connect to the database. The two things we need to do are, connect to the database, and add functions to handle our requests from the renderer process. The finished file looks like this:</p><pre><code class="language-ts">import { app, BrowserWindow, ipcMain } from 'electron';
import { enableLiveReload } from 'electron-compile';
import { createConnection } from 'typeorm';
import { Item } from './assets/model/item.schema';
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow: Electron.BrowserWindow | null;
const isDevMode = process.execPath.match(/[\\/]electron/);
if (isDevMode) enableLiveReload();
const createWindow = async () =&gt; {
const connection = await createConnection({
type: 'sqlite',
synchronize: true,
logging: true,
logger: 'simple-console',
database: './src/assets/data/database.sqlite',
entities: [ Item ],
});
const itemRepo = connection.getRepository(Item);
// Create the browser window.
mainWindow = new BrowserWindow({
width: 800,
height: 600,
});
// and load the index.html of the app.
mainWindow.loadURL(`file://${__dirname}/index.html`);
// Open the DevTools.
if (isDevMode) {
mainWindow.webContents.openDevTools();
}
// Emitted when the window is closed.
mainWindow.on('closed', () =&gt; {
// Dereference the window object, usually you would store windows
// in an array if your app supports multi windows, this is the time
// when you should delete the corresponding element.
mainWindow = null;
});
ipcMain.on('get-items', async (event: any, ...args: any[]) =&gt; {
try {
event.returnValue = await itemRepo.find();
} catch (err) {
throw err;
}
});
ipcMain.on('add-item', async (event: any, _item: Item) =&gt; {
try {
const item = await itemRepo.create(_item);
await itemRepo.save(item);
event.returnValue = await itemRepo.find();
} catch (err) {
throw err;
}
});
ipcMain.on('delete-item', async (event: any, _item: Item) =&gt; {
try {
const item = await itemRepo.create(_item);
await itemRepo.remove(item);
event.returnValue = await itemRepo.find();
} catch (err) {
throw err;
}
});
};
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);
// Quit when all windows are closed.
app.on('window-all-closed', () =&gt; {
// On OS X it is common for applications and their menu bar
// to stay active until the user quits explicitly with Cmd + Q
if (process.platform !== 'darwin') {
app.quit();
}
});
app.on('activate', () =&gt; {
// On OS X it's common to re-create a window in the app when the
// dock icon is clicked and there are no other windows open.
if (mainWindow === null) {
createWindow();
}
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.</code></pre>
<p>An in depth explanation of TypeORM and Electron is beyond the scope of this <br>guide, so I will only briefly discuss the above file. First we need to import the <code>createConnection</code> class from the TypeORM library. We also need to import or Item schema.</p>
<p>As expected, the <code>createConnection</code> class will create a connection to our database. We pass it a constructor with parameters such as type, database, and entities. Type is a string that describes what type of database we are using. Database is a string that points to the database location. Entities is where we tell TypeORM what schemas to expect. For our purpose: type is ‘sqlite’, Database is ‘./src/assets/data/database.sqlite’, and Entities is our imported Item class.</p>
<p>TypeORM allows you two options when working with database transactions: <a href="http://typeorm.io/#/working-with-entity-manager" rel="noopener">EntityManager</a> and <a href="http://typeorm.io/#/working-with-repository" rel="noopener">Repository</a>. Both will give you access to functions for querying the database, without writing the SQL. We create a Repository object with the line <code>itemRepo = connection.getRepository(Item)</code> . This gives us access to transaction methods for our Item table.</p>
<p>The last step is to create functions to handle the messages being sent from the <code>IpcRenderer</code>. Each function will use the <code>itemRepo</code> object we created to access the database. After successful completion of each transaction, the functions will pass the new state of the database back to the renderer.</p>
<h3 id="part-iii-run-it-">Part III: Run it!</h3>
<p>With everything complete, we can now run the app. Electron-Forge handles this process for us. All we need to do is run the command:</p><pre><code>$ npm run start</code></pre>
<p>If everything is correct, Electron will open your app and you can test it out.</p>
<p>Thanks for reading!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
