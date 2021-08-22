---
card: "/images/default.jpg"
tags: [Game Development]
description: Putting together all of the pieces of a full stack JavaScript
author: "Milad E. Fahmy"
title: "How to Build a Multiplayer Tabletop Game Simulator with Vue, Phaser, Node, Express, and Socket.IO"
created: "2021-08-15T19:28:59+02:00"
modified: "2021-08-15T19:28:59+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-game-development tag-phaser-3 tag-javascript tag-gamedev tag-es6 tag-express tag-express-js tag-expressjs tag-socketio ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build a Multiplayer Tabletop Game Simulator with Vue, Phaser, Node, Express, and Socket.IO</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/07/How-to-Tabletop-Game-Simulator---Thumb.png 300w,
/news/content/images/size/w600/2020/07/How-to-Tabletop-Game-Simulator---Thumb.png 600w,
/news/content/images/size/w1000/2020/07/How-to-Tabletop-Game-Simulator---Thumb.png 1000w,
/news/content/images/size/w2000/2020/07/How-to-Tabletop-Game-Simulator---Thumb.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/07/How-to-Tabletop-Game-Simulator---Thumb.png" alt="How to Build a Multiplayer Tabletop Game Simulator with Vue, Phaser, Node, Express, and Socket.IO">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Putting together all of the pieces of a full stack JavaScript application can be a complex endeavor. &nbsp;</p>
<p>In this tutorial, we're going to build a multiplayer tabletop game simulator using <a href="https://vuejs.org/">Vue</a>, <a href="http://phaser.io/">Phaser</a>, <a href="https://nodejs.org/">Node</a>/<a href="https://expressjs.com/">Express</a>, and <a href="https://socket.io/">Socket.IO</a> to learn several concepts that will be useful in any full stack app.</p>
<p>You can follow along with this video tutorial as well (1 hour 16 minute watch):</p>
<p>All of the project files for this tutorial are available on <a href="https://github.com/sominator/tabletop-project">GitHub</a>.</p>
<h2 id="project-overview">Project Overview</h2>
<p>The Phaser instance will be wrapped in a Vue component that will handle things like multiplayer chat and commands. &nbsp;Together, Phaser and Vue will comprise our front end (referred to from here on as the "client"), and we'll use Socket.IO to communicate with other players and tie together the front and back ends of our app.</p>
<p>The back end (referred to from here on as the "server") will be a simple Express server that receives Socket.IO events from the client and acts accordingly. &nbsp;The whole application will run on Node as its runtime.</p>
<p>You don't need to be an expert in any of the above frameworks to complete this project, but it would be a good idea to have a solid foundation in basic JavaScript and HTML/CSS before trying to tackle the specifics. You can also follow along with my series on <a href="/news/learn-javascript-by-making-digital-tabletop-games-and-web-apps/">Learning JavaScript by Making Digital Tabletop Games and Web Apps</a>. &nbsp;</p>
<p>You'll also want to make sure that you have Node and <a href="https://github.com/">Git</a> installed, along with your favorite code editor and a command line interface (you can follow my tutorial on setting up an IDE <a href="/news/how-to-set-up-an-integrated-development-environment-ide/">here</a> if you need help).</p>
<p>Let's get started!</p>
<h2 id="part-1-client-basics">Part 1: Client Basics</h2>
<p>We'll begin building our client by installing the <a href="https://cli.vuejs.org/">Vue CLI</a>, which will help us with some tooling and allow us to make changes to our files without having to reload our web browser.</p>
<p>In a command line, type in the following to install the Vue CLI globally:</p><pre><code class="language-cli">npm install -g @vue/cli</code></pre>
<p>Navigate to a desired directory and create a new folder for our project:</p><pre><code class="language-cli">mkdir tabletop-project
cd tabletop-project</code></pre>
<p>Now we can use the Vue CLI to template a front end project for us:</p><pre><code class="language-cli">vue create client</code></pre>
<p>You can just hit "enter" at the ensuing prompts unless you have specific preferences.</p>
<p>The Vue CLI has helpfully templated a front end project for us, which we can view in our code editor:</p>
<p>Let's navigate to our new client folder in our CLI and run the template app:</p><pre><code class="language-cli">cd client
npm run serve</code></pre>
<p>After a little work, the Vue CLI should begin displaying our app in a web browser at the default http://localhost:8080:</p>
<p>Cool! &nbsp;We have the basic structure of our client. &nbsp;Let's break it by creating two new components in the /components folder, called Game.vue and Chat.vue (you can go ahead and delete HelloWorld.vue and anything in the assets folder if you're obsessed with tidiness like I am).</p>
<p>Replace the code in App.vue with the following:</p><pre><code class="language-html">&lt;template&gt;
&lt;div id="app"&gt;
&lt;div id="game"&gt;
&lt;Game /&gt;
&lt;/div&gt;
&lt;div id="border" /&gt;
&lt;div id="input"&gt;
&lt;Chat /&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
import Chat from './components/Chat.vue';
import Game from './components/Game.vue';
export default {
name: 'App',
components: {
Chat,
Game
}
}
&lt;/script&gt;
&lt;style&gt;
#app {
font-family: 'Trebuchet MS';
text-align: left;
background-color: black;
color: cyan;
display: flex;
}
#game {
width: 50vw;
height: 100vh;
}
#input {
width: 50vw;
height: 100vh;
}
#border {
border-right: 2px solid cyan;
}
@media (max-width: 1000px) {
#app {
flex-direction: column;
}
#game {
width: 100vw;
height: 50vh;
}
#input {
width: 100vw;
height: 50vh;
}
}
&lt;/style&gt;
</code></pre>
<p>As you can see, a Vue component ordinarily has three sections: Template, Script, and Style, which contain any HTML, JavaScript, and CSS for that component, respectively. &nbsp;We've just imported our Game and Chat components here and added a little styling to give it a cyberpunk feel when it's all up and running.</p>
<p>That's actually all that we need to do to set up our App.vue component, which will house everything else in our client. &nbsp;Before we can actually do anything with it, we'll need to get our server working!</p>
<h2 id="part-2-server-basics">Part 2: Server Basics</h2>
<p>At our root directory (tabletop-project, above /client), initialize a new project in a new command line interface by typing:</p><pre><code class="language-cli">npm init</code></pre>
<p>Like with our client, you can go ahead and press "enter" at the prompts unless there are specifics that you'd like to designate at this time.</p>
<p>We'll need to install Express and Socket.IO, along with <a href="https://nodemon.io/">Nodemon</a> to watch our server files for us and reboot as necessary:</p><pre><code class="language-cli">npm install --save express socket.io nodemon</code></pre>
<p>Let's open up the new package.json file in that root directory and add a "start" command in the "scripts" section:</p><pre><code class="language-javascript">  "scripts": {
"start": "nodemon server.js"
},</code></pre>
<p>Create a new file called server.js in this directory, and enter the following code:</p><pre><code class="language-javascript">const server = require('express')();
const http = require('http').createServer(server);
const io = require('socket.io')(http);
io.on('connection', function (socket) {
console.log('A user connected: ' + socket.id);
socket.on('send', function (text) {
let newText = "&lt;" + socket.id + "&gt; " + text;
io.emit('receive', newText);
});
socket.on('disconnect', function () {
console.log('A user disconnected: ' + socket.id);
});
});
http.listen(3000, function () {
console.log('Server started!');
});</code></pre>
<p>Excellent! &nbsp;Our simple server will now listen at http://localhost:3000, and use Socket.IO to log to the console when a user connects and disconnects, with their socket ID.</p>
<p>When the server receives a "send" event from a client, it will create a new text string that includes the socket ID of the client that emitted the event, and emit its own "receive" event to all clients with the text that it received, interpolated with the socket ID.</p>
<p>We can test the server by returning to our command line and starting it up :</p><pre><code class="language-cli">npm run start</code></pre>
<p>The command console should now display:</p>
<p>Cool! Let's return to the Chat component of our client to start building out our front end functionality.</p>
<h2 id="part-3-chat">Part 3: Chat</h2>
<p>Let's open a separate command line interface and navigate to the /client directory. Within that directory, install the client version of Socket.IO:</p><pre><code class="language-cli">npm install --save socket.io-client</code></pre>
<p>In /client/src/components/Chat.vue, add the following code:</p><pre><code class="language-html">&lt;template&gt;
&lt;div id="container"&gt;
&lt;div id="output"&gt;
&lt;h1&gt;STRUCT&lt;/h1&gt;
&lt;p v-for="(text, index) in textOutput" :key="index"&gt;{{text}}&lt;/p&gt;
&lt;/div&gt;
&lt;div id="input"&gt;
&lt;form&gt;
&lt;input type="text" v-model="textInput" :placeholder="textInput" /&gt;
&lt;input type="submit" value="Send" v-on:click="submitText" /&gt;
&lt;/form&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
import io from 'socket.io-client';
let socket = io('http://localhost:3000');
export default {
name: 'Chat',
data: function () {
return {
textInput: null,
textOutput: []
}
},
methods: {
submitText: function (event) {
event.preventDefault();
socket.emit('send', this.textInput);
}
},
created: function () {
socket.on('connect', () =&gt; {
console.log('Connected!');
});
socket.on('receive', (text) =&gt; {
this.textOutput.push(text);
this.textInput = null;
});
}
}
&lt;/script&gt;
&lt;style scoped&gt;
#container {
text-align: left;
display: flex;
flex-direction: column;
margin-left: 1vw;
min-height: 100vh;
}
h1 {
text-align: center;
}
.hotpink {
color: hotpink;
}
#input {
position: fixed;
margin-top: 95vh;
}
input[type=text] {
height: 20px;
width:  40vw;
border: 2px solid cyan;
background-color: black;
color: hotpink;
padding-left: 1em;
}
input[type=submit]{
height: 25px;
width: 5vw;
background-color: black;
color: cyan;
border: 2px solid cyan;
margin-right: 2vw;
}
input[type=submit]:focus{
outline: none;
}
input[type=submit]:hover{
color: hotpink;
}
@media (max-width: 1000px) {
#container {
border-left: none;
border-top: 2px solid cyan;
min-height: 50vh;
}
#input {
margin-top: 43vh;
}
#output {
margin-right: 10vw;
}
input[type=text] {
width: 60vw;
}
input[type=submit] {
min-width: 10vw;
}
}
&lt;/style&gt;
</code></pre>
<p>Let's examine the above from bottom to top before moving forward. &nbsp;Between the &lt;style&gt; tags, we've added some CSS to punch-up the cyberpunkiness of our chat. You can style this however you'd like!</p>
<p>Between the &lt;script&gt; tags, we've imported the client version of Socket.IO and stored it in a variable called "socket" that communicates through http://localhost:3000, where the server is listening.</p>
<p>We've then given the component a name ("Chat"), and utilized the data, methods, and created objects that Vue uses to handle interactivity for us.</p>
<p>In the data object, we store two variables: textInput, which starts out as null, and textOutput, which is an empty array.</p>
<p>In the methods object, we create a simple function, submitText, that emits a "send" event through Socket.IO along with the textInput and prevents the default behavior of such an event (such as sending data through an HTML form).</p>
<p>In the created object, which is triggered when the component is initialized, we have two references to the socket. The first indicates that when it receives a "connect" event from the server, the socket should log to the console that it has "Connected!" The second indicates that when the socket receives a "receive" event, it should push the text from that event to the textOutput array and clear the textInput variable.</p>
<p>Between our &lt;template&gt; tags, we have our HTML that includes input and output sections. &nbsp;The output section has a header named "Struct" (which is the programming language in <a href="https://www.nightpathpub.com/entromancy">my books and games</a>), and utilizes Vue's <a href="https://vuejs.org/v2/guide/list.html">list rendering</a> to display a &lt;p&gt; element for each piece of text in the textOutput array.</p>
<p>The input section has a simple form with Vue <a href="https://vuejs.org/v2/guide/forms.html">form input bindings</a> and an <a href="https://vuejs.org/v2/guide/events.html">event handler</a> to receive text input, store it in our textInput variable, and trigger the "send" Socket.IO event when the "Send" button is clicked.</p>
<p>Phew! Our chat is now functional. Save everything and navigate to your browser tab that is running the client at http://localhost:8080:</p>
<p>Note that you can open up <em>another</em> browser tab, which will connect to the server with a new socket ID, and the chat should begin populating among both clients:</p>
<p>Meanwhile, your command line console should also be indicating when clients connect to and disconnect from the server (with different socket IDs, of course):</p>
<p>Awesome. &nbsp;Let's move to building our tabletop simulator in Phaser!</p>
<h2 id="part-4-tabletop-simulator">Part 4: Tabletop Simulator</h2>
<p>We'll need a Vue component to house our Phaser instance, and to do so, we'll borrow from <a href="https://github.com/Sun0fABeach">Sun0fABeach</a>'s <a href="https://github.com/Sun0fABeach/vue-phaser3">Vue - Phaser 3 Webpack boilerplate</a> (you could probably even use this boilerplate to create your client if you so desired).</p>
<p>In our /client/src/components/Game.vue file, add the following code:</p><pre><code class="language-html">&lt;template&gt;
&lt;div :id="containerId" v-if="downloaded" /&gt;
&lt;div class="placeholder" v-else&gt;
Downloading...
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
name: 'Game',
data: function () {
return {
downloaded: false,
gameInstance: null,
containerId: 'game-container'
}
},
async mounted() {
const game = await import(../game/game');
this.downloaded = true;
this.$nextTick(() =&gt; {
this.gameInstance = game.launch(this.containerId)
})
},
destroyed() {
this.gameInstance.destroy(false);
}
}
&lt;/script&gt;
&lt;style scoped&gt;
&lt;/style&gt;
</code></pre>
<p>This component will render our game instance when it's ready, and keep a placeholder until that time (usually just a few seconds). &nbsp;It won't work just yet, as we haven't created a game instance with which to work.</p>
<p>In a command line interface at the /client directory, type the following</p><pre><code class="language-cli">npm install --save phaser</code></pre>
<p>Within the /client/src folder, add a new folder called "game", and a subfolder within that folder called "scenes".</p>
<p>Within the /client/src/game folder, add a file called game.js, and within /client/src/game/scenes, add a file called gamescene.js. Your file structure should now look like:</p>
<p>Our game.js file will handle the initial setup for our Phaser instance, importing our gamescene.js and launching our game into the containerId of our Vue component (it also scales the instance to the size of the container). &nbsp;Here's what it should look like:</p><pre><code class="language-javascript">import Phaser from "phaser";
import GameScene from "./scenes/gamescene";
function launch(containerId) {
return new Phaser.Game({
type: Phaser.AUTO,
parent: containerId,
scene: [
GameScene
],
scale: {
mode: Phaser.Scale.FIT,
width: '100%',
height: '100%'
}
});
}
export default launch;
export { launch }</code></pre>
<p>The main functionality of our simulator will be in the gamescene.js file, where we'll write:</p><pre><code class="language-javascript">import Phaser from 'phaser';
import io from 'socket.io-client';
export default class GameScene extends Phaser.Scene {
constructor() {
super({
key: 'GameScene'
});
}
preload() {
}
create() {
this.socket = io('http://localhost:3000');
this.socket.on('struct create', (width, height) =&gt; {
let token = this.add.rectangle(300, 300, width, height, 0x00ffff).setInteractive();
this.input.setDraggable(token);
});
this.input.on('drag', (pointer, gameObject, dragX, dragY) =&gt; {
gameObject.x = dragX;
gameObject.y = dragY;
});
}
update() {
}
}</code></pre>
<p>Our Phaser architecture utilizes JavaScript <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">classes</a> to create <a href="https://photonstorm.github.io/phaser3-docs/Phaser.Scene.html">scenes</a>, and has three main functions: preload, create, and update.</p>
<p>The preload function is used for prepping assets like sprites for use within a scene.</p>
<p>The update function is called once per frame, and we're not making use of it in our project.</p>
<p>The create function is called when a scene is created, and where all of our work is being done here. We initialize a socket variable and store the Socket.IO connection at http://localhost:3000 within it, then reference a "struct create" event that we expect to receive from the server.</p>
<p>When the client receives a "struct create" event, our Phaser instance should create a rectangle at the (x, y) coordinates of (300, 300), using the width and height parameters that are designated by that event, and a fun cyberpunk color that we've chosen. Phaser will then set that rectangle to be interactive, and alert the input system that it should also be draggable.</p>
<p>We've also written a little bit of logic that tells Phaser what it should do when the rectangle is dragged; namely, it should follow the direction of the mouse pointer.</p>
<p>All we have to do now is to jump back into our server.js and add logic for our "struct create" event:</p><pre><code class="language-javascript">const server = require('express')();
const http = require('http').createServer(server);
const io = require('socket.io')(http);
io.on('connection', function (socket) {
console.log('A user connected: ' + socket.id);
socket.on('send', function (text) {
let newText = "&lt;" + socket.id + "&gt; " + text;
io.emit('struct create', 130, 180)
};
if (text === 'struct token') {
io.emit('struct create', 100, 100)
};
io.emit('receive', newText);
});
socket.on('disconnect', function () {
console.log('A user disconnected: ' + socket.id);
});
});
http.listen(3000, function () {
console.log('Server started!');
});</code></pre>
<p>If the client sends the text "struct token", the server will instead emit our "struct create" event with arguments of 100 x 100 pixels for the width and height of a token.</p>
<p>Try it! Save everything, make sure the server is running, and open a couple of tabs in a web browser pointed to http://localhost:8080. &nbsp;When you chat in one tab, it should appear in the other with your client's socket ID, and vice versa. &nbsp;</p>
<p>Neat!</p>
<h2 id="wrap-up">Wrap Up</h2>
<p>You can continue to build on this simple full stack app by enhancing the styling, adding a scroll bar to the chat, or allowing players to chose usernames and log into specific chat instances by using <a href="https://socket.io/docs/rooms/">Socket.IO rooms</a>.</p>
<p>Of course, there's no reason that you'd need to use chat commands to create game objects. You could do all of that from within the Phaser instance if you'd like, but you'll need to create your own buttons or some other input interactivity (in my experience, Vue is far better at handling text, hence our chat commands). </p>
<p>The current functionality, could, however, be useful in the case that you'd want to be able to render, say, dice on screen by running a chat command.</p>
<p>Additionally, if you'd like to deploy your new app, you can first read my article on <a href="/news/3-things-to-consider-before-deploying-your-first-full-stack-app/">Three Things to Consider Before Deploying Your First Full Stack App</a>, then follow along with my tutorial to <a href="/news/how-to-deploy-a-full-stack-web-app-with-heroku/">Learn How to Deploy a Full Stack Web App with Heroku</a>.</p>
<p>Happy coding!</p>
<p>If you enjoyed this article, please consider <a href="https://www.nightpathpub.com/">checking out my games and books</a>, <a href="https://www.youtube.com/msfarzan?sub_confirmation=1">subscribing to my YouTube channel</a>, or <a href="https://discord.gg/RF6k3nB">joining the <em>Entromancy </em>Discord</a>.</p>
<p>M. S. Farzan, Ph.D. has written and worked for high-profile video game companies and editorial websites such as Electronic Arts, Perfect World Entertainment, Modus Games, and MMORPG.com, and has served as the Community Manager for games like <em>Dungeons &amp; Dragons Neverwinter</em> and <em>Mass Effect: Andromeda</em>. He is the Creative Director and Lead Game Designer of <em><a href="https://www.nightpathpub.com/rpg">Entromancy: A Cyberpunk Fantasy RPG</a></em> and author of <em><a href="http://nightpathpub.com/books">The Nightpath Trilogy</a></em>. Find M. S. Farzan on Twitter <a href="https://twitter.com/sominator">@sominator</a>.</p>
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
