---
card: "/images/default.jpg"
tags: [Game Development]
description: "I'm a tabletop game developer, and am continually looking for"
author: "Milad E. Fahmy"
title: "How to Build a Multiplayer Card Game with Phaser 3, Express, and Socket.IO"
created: "2021-08-15T19:30:19+02:00"
modified: "2021-08-15T19:30:19+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-game-development tag-phaser-3 tag-javascript tag-gamedev tag-es6 tag-express tag-express-js tag-expressjs tag-socketio ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build a Multiplayer Card Game with Phaser 3, Express, and Socket.IO</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/03/Client-2-2.PNG 300w,
/news/content/images/size/w600/2020/03/Client-2-2.PNG 600w,
/news/content/images/size/w1000/2020/03/Client-2-2.PNG 1000w,
/news/content/images/size/w2000/2020/03/Client-2-2.PNG 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/03/Client-2-2.PNG" alt="How to Build a Multiplayer Card Game with Phaser 3, Express, and Socket.IO">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In terms of prerequisites, you'll want to make sure that you have <a href="https://nodejs.org/en/">Node</a>/<a href="https://www.npmjs.com/">NPM</a> and <a href="https://github.com/">Git</a> installed and configured on your machine. &nbsp;Some experience with JavaScript would be helpful, and you may want to run through the <a href="http://phaser.io/tutorials/making-your-first-phaser-3-game">basic Phaser tutorial</a> before tackling this one.</p>
<p>Major kudos to Scott Westover for <a href="https://gamedevacademy.org/create-a-basic-multiplayer-game-in-phaser-3-with-socket-io-part-1/">his tutorial on the topic</a>, Kal_Torak and the Phaser community for answering all my questions, and my good friend Mike for helping me conceptualize the architecture of this project.</p>
<p>If you'd prefer a more visual tutorial, you can also follow along with the companion video to this article:</p>
<p>Let's get started!</p>
<h2 id="the-game">The Game</h2>
<p>First, let's tackle the client!</p>
<h2 id="the-client">The Client</h2>
<p>To scaffold our client, we're going to clone the semi-official Phaser 3 Webpack Project Template on <a href="https://github.com/photonstorm/phaser3-project-template">GitHub</a>.</p>
<p>Clone the git project:</p><pre><code class="language-cli">git clone https://github.com/photonstorm/phaser3-project-template.git</code></pre>
<p>Navigate into that new directory and install all dependencies:</p><pre><code class="language-cli">cd client
npm install</code></pre>
<p>Your project folder structure should look something like this:</p>
<p>Before we muck with the files, let's go back to our CLI and enter the following command in the /client folder:</p><pre><code class="language-cli">npm start</code></pre>
<p>Our Phaser template utilizes Webpack to spin up a local server that in turn serves up a simple game app in our browser (usually at http://localhost:8080). &nbsp;Neat!</p>
<p>In the /client/src directory, add a folder called "scenes" and another called "helpers."</p>
<p>In /client/src/scenes, add an empty file called "game.js".</p>
<p>Your project structure should now look like this:</p>
<p>Cool! &nbsp;Your client might be throwing you errors because we deleted some things, but not to worry. &nbsp;Open /src/index.js, which is the main entry point to our front end app. Enter the following code:</p><pre><code class="language-javascript">import Phaser from "phaser";
import Game from "./scenes/game";
const config = {
type: Phaser.AUTO,
parent: "phaser-example",
width: 1280,
height: 780,
scene: [
Game
]
};
const game = new Phaser.Game(config);</code></pre>
<p>All we've done here is restructure the boilerplate to utilize Phaser's "scene" system so that we can separate our game scenes rather than try to cram everything in one file. &nbsp;Scenes can be useful if you're creating multiple game worlds, building things like instruction screens, or generally trying to keep things tidy.</p>
<p>Let's move to /src/scenes/game.js and write some code:</p><pre><code class="language-javascript">export default class Game extends Phaser.Scene {
constructor() {
super({
key: 'Game'
});
}
preload() {
this.load.image('cyanCardFront', 'src/assets/CyanCardFront.png');
this.load.image('cyanCardBack', 'src/assets/CyanCardBack.png');
this.load.image('magentaCardFront', 'src/assets/MagentaCardFront.png');
this.load.image('magentaCardBack', 'src/assets/MagentaCardBack.png');
}
create() {
this.dealText = this.add.text(75, 350, ['DEAL CARDS']).setFontSize(18).setFontFamily('Trebuchet MS').setColor('#00ffff').setInteractive();
}
update() {
}
}</code></pre>
<p>We're taking advantage of <a href="/news/how-to-use-github-and-es6-features-to-create-and-structure-your-code/">ES6 classes</a> to create a new Game scene, which incorporates preload(), create() and update() functions.</p>
<p>preload() is used to...well...preload any assets that we'll be using for our game.</p>
<p>create() is run when the game starts up, and where we'll be establishing much of our user interface and game logic.</p>
<p>update() is called once per frame, and we won't be making use of it in our tutorial (but it may be useful in your own game depending on its requirements).</p>
<p>Within the create() function, we've created a bit of text that says "DEAL CARDS" and set it to be interactive:</p>
<p>Very cool. &nbsp;Let's create a bit of placeholder code to understand how we want this whole thing to work once it's up and running. &nbsp;Add the following to your create() function:</p><pre><code class="language-javascript">		let self = this;
this.dealCards = () =&gt; {
}
this.dealText.on('pointerdown', function () {
self.dealCards();
})
this.dealText.on('pointerover', function () {
self.dealText.setColor('#ff69b4');
})
this.dealText.on('pointerout', function () {
self.dealText.setColor('#00ffff');
})
this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
gameObject.x = dragX;
gameObject.y = dragY;
})</code></pre>
<p>We've placed the image at the (x, y) coordinates of (300, 300), set its scale to be a bit smaller, and made it interactive and draggable. &nbsp;We've also added a little bit of logic to determine what should happen when dragged: it should follow the (x, y) coordinates of our mouse.</p>
<p>We've also created an empty dealCards() function that will be called when we click on our "DEAL CARDS" text. &nbsp;Additionally, we've saved "this" - meaning the scene in which we're currently working - into a variable called "self" so that we can use it throughout our functions without worrying about scope.</p>
constructor(scene) {
this.render = (x, y, sprite) =&gt; {
}
}
}</code></pre>
<p> And enter the following code within our empty dealCards() function:</p><pre><code class="language-javascript">		this.dealCards = () =&gt; {
for (let i = 0; i &lt; 5; i++) {
let playerCard = new Card(this);
playerCard.render(475 + (i * 100), 650, 'cyanCardFront');
}
}</code></pre>
<p>Let's move over to /src/helpers/zone.js and add a new class:</p><pre><code class="language-javascript">export default class Zone {
constructor(scene) {
this.renderZone = () =&gt; {
let dropZone = scene.add.zone(700, 375, 900, 250).setRectangleDropZone(900, 250);
return dropZone;
};
this.renderOutline = (dropZone) =&gt; {
let dropZoneOutline = scene.add.graphics();
dropZoneOutline.lineStyle(4, 0xff69b4);
dropZoneOutline.strokeRect(dropZone.x - dropZone.input.hitArea.width / 2, dropZone.y - dropZone.input.hitArea.height / 2, dropZone.input.hitArea.width, dropZone.input.hitArea.height)
}
}
}</code></pre>
<p>Let's import our new zone into the Game scene:</p><pre><code class="language-javascript">import Zone from '../helpers/zone';</code></pre>
<p> And call it in within the create() function:</p><pre><code class="language-javascript">        this.zone = new Zone(this);
this.dropZone = this.zone.renderZone();
this.outline = this.zone.renderOutline(this.dropZone);</code></pre>
<p>Not too shabby!</p>
gameObject.setTint(0xff69b4);
self.children.bringToTop(gameObject);
})
this.input.on('dragend', function (pointer, gameObject, dropped) {
gameObject.setTint();
if (!dropped) {
gameObject.x = gameObject.input.dragStartX;
gameObject.y = gameObject.input.dragStartY;
}
})
this.input.on('drop', function (pointer, gameObject, dropZone) {
gameObject.y = dropZone.y;
gameObject.disableInteractive();
})</code></pre>
<h2 id="the-server">The Server</h2>
<p>Let's open up a new command line at our root directory (above /client) and type:</p><pre><code class="language-cli">npm init
npm install --save express socket.io nodemon</code></pre>
<p>We've initialized a new package.json and installed Express, Socket.IO, and <a href="https://nodemon.io/">Nodemon</a> (which will watch our server and restart it upon changes).</p>
<p>In our code editor, let's change the "scripts" section of our package.json to say:</p><pre><code class="language-javascript">  "scripts": {
"start": "nodemon server.js"
},</code></pre>
<p>Excellent. &nbsp;We're ready to put our server together! &nbsp;Create an empty file called "server.js" in our root directory and enter the following code:</p><pre><code class="language-javascript">const server = require('express')();
const http = require('http').createServer(server);
const io = require('socket.io')(http);
io.on('connection', function (socket) {
console.log('A user connected: ' + socket.id);
socket.on('disconnect', function () {
console.log('A user disconnected: ' + socket.id);
});
});
http.listen(3000, function () {
console.log('Server started!');
});</code></pre>
<p>We're importing Express and Socket.IO, asking for the server to listen on port 3000. When a client connects to or disconnects from that port, we'll log the event to the console with the client's socket id.</p>
<p>Open a new command line interface and start the server:</p><pre><code class="language-cli">npm run start</code></pre>
<p>Our server should now be running on localhost:3000, and Nodemon will watch our back end files for any changes. &nbsp;Not much else will happen except for the console log that the "Server started!"</p>
<p>In our other open command line interface, let's navigate back to our /client directory and install the client version of Socket.IO:</p><pre><code class="language-cli">cd client
npm install --save socket.io-client</code></pre>
<p>We can now import it in our Game scene:</p><pre><code class="language-javascript">import io from 'socket.io-client';</code></pre>
<p>Great! &nbsp;We've just about wired up our front and back ends. &nbsp;All we need to do is write some code in the create() function:</p><pre><code class="language-javascript">		this.socket = io('http://localhost:3000');
this.socket.on('connect', function () {
console.log('Connected!');
});
</code></pre>
<p>We're initializing a new "socket" variable that points to our local port 3000 and logs to the browser console upon connection.</p>
<p>Open and close a couple of browsers at http://localhost:8080 (where our Phaser client is being served) and you should see the following in your command line interface:</p>
const http = require('http').createServer(server);
const io = require('socket.io')(http);
let players = [];
io.on('connection', function (socket) {
console.log('A user connected: ' + socket.id);
players.push(socket.id);
if (players.length === 1) {
io.emit('isPlayerA');
};
socket.on('dealCards', function () {
io.emit('dealCards');
});
});
socket.on('disconnect', function () {
console.log('A user disconnected: ' + socket.id);
players = players.filter(player =&gt; player !== socket.id);
});
});
http.listen(3000, function () {
console.log('Server started!');
});</code></pre>
<p>We've initialized an empty array called "players" and add a socket id to it every time a client connects to the server, while also deleting the socket id upon disconnection.</p>
<p>Believe it or not, that's all the code we need to get our server working! &nbsp;Let's turn our attention back to the Game scene. &nbsp;Right at the top of the create() function, type the following:</p><pre><code class="language-javascript">		this.isPlayerA = false;
this.opponentCards = [];</code></pre>
<p>Under the code block that starts with "this.socket.on(connect)", write:</p><pre><code class="language-javascript">		this.socket.on('isPlayerA', function () {
self.isPlayerA = true;
})</code></pre>
<p>Now, if our client is the first to connect to the server, the server will emit an event that tells the client that it will be Player A. &nbsp;The client socket receives that event and turns our "isPlayerA" boolean from false to true.</p>
<p>Note: from this point forward, you may need to reload your browser page (set to http://localhost:8080), rather than having Webpack do it automatically for you, for the client to correctly disconnect from and reconnect to the server.</p>
export default class Dealer {
constructor(scene) {
this.dealCards = () =&gt; {
let playerSprite;
let opponentSprite;
if (scene.isPlayerA) {
playerSprite = 'cyanCardFront';
opponentSprite = 'magentaCardBack';
} else {
playerSprite = 'magentaCardFront';
opponentSprite = 'cyanCardBack';
};
for (let i = 0; i &lt; 5; i++) {
let playerCard = new Card(scene);
playerCard.render(475 + (i * 100), 650, playerSprite);
let opponentCard = new Card(scene);
scene.opponentCards.push(opponentCard.render(475 + (i * 100), 125, opponentSprite).disableInteractive());
}
}
}
}</code></pre>
<p>With this new class, we're checking whether the client is Player A, and determining what sprites should be used in either case.</p>
<p>In /src/scenes/game.js, import the Dealer:</p><pre><code class="language-javascript">import Dealer from '../helpers/dealer';</code></pre>
<p>Then replace our dealCards() function with:</p><pre><code class="language-javascript">		this.dealer = new Dealer(this);</code></pre>
<p>Under code block that begins with "this.socket.on('isPlayerA')", add the following:</p><pre><code class="language-javascript">		this.socket.on('dealCards', function () {
self.dealer.dealCards();
self.dealText.disableInteractive();
})</code></pre>
<p>We also need to update our dealText function to match these changes:</p><pre><code class="language-javascript">        this.dealText.on('pointerdown', function () {
self.socket.emit("dealCards");
})</code></pre>
<p>Fire up two separate browsers pointed to http://localhost:8080 and hit "DEAL CARDS" on one of them. &nbsp;You should see different sprites on either screen:</p>
<p>Note again that if you're having issues with this step, you may have to close one of your browsers and reload the first one to ensure that both clients have disconnected from the server, which should be logged to your command line console.</p>
gameObject.y = dropZone.y;
gameObject.disableInteractive();
})</code></pre>
if (isPlayerA !== self.isPlayerA) {
let sprite = gameObject.textureKey;
self.opponentCards.shift().destroy();
}
})</code></pre>
<p>The code block first compares the isPlayerA boolean it receives from the server against the client's own isPlayerA, which is a check to determine whether the client that is receiving the event is the same one that generated it.</p>
<p>Let's think that through a bit further, as it exposes a key component to how our client - server relationship works, using Socket.IO as the connector.</p>
<p>Client A receives that event from the server, and notes that the isPlayerA boolean from the server is <strong>true</strong>, which means that the event was generated by Client A itself. Nothing special happens.</p>
<p>Client B receives the same event from the server, and notes that the isPlayerA boolean from the server is <strong>true</strong>, although Client B's own isPlayerA is <strong>false</strong>. &nbsp;Because of this difference, it executes the rest of the code block. &nbsp;</p>
<p>Your final /src/scenes/game.js code should look like this:</p><pre><code class="language-javascript">import io from 'socket.io-client';
import Dealer from "../helpers/dealer";
import Zone from '../helpers/zone';
export default class Game extends Phaser.Scene {
constructor() {
super({
key: 'Game'
});
}
preload() {
this.load.image('cyanCardFront', 'src/assets/CyanCardFront.png');
this.load.image('cyanCardBack', 'src/assets/CyanCardBack.png');
this.load.image('magentaCardFront', 'src/assets/magentaCardFront.png');
this.load.image('magentaCardBack', 'src/assets/magentaCardBack.png');
}
create() {
this.isPlayerA = false;
this.opponentCards = [];
this.zone = new Zone(this);
this.dropZone = this.zone.renderZone();
this.outline = this.zone.renderOutline(this.dropZone);
this.dealer = new Dealer(this);
let self = this;
this.socket = io('http://localhost:3000');
this.socket.on('connect', function () {
console.log('Connected!');
});
this.socket.on('isPlayerA', function () {
self.isPlayerA = true;
})
this.socket.on('dealCards', function () {
self.dealer.dealCards();
self.dealText.disableInteractive();
})
if (isPlayerA !== self.isPlayerA) {
let sprite = gameObject.textureKey;
self.opponentCards.shift().destroy();
}
})
this.dealText = this.add.text(75, 350, ['DEAL CARDS']).setFontSize(18).setFontFamily('Trebuchet MS').setColor('#00ffff').setInteractive();
this.dealText.on('pointerdown', function () {
self.socket.emit("dealCards");
})
this.dealText.on('pointerover', function () {
self.dealText.setColor('#ff69b4');
})
this.dealText.on('pointerout', function () {
self.dealText.setColor('#00ffff');
})
this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
gameObject.x = dragX;
gameObject.y = dragY;
})
this.input.on('dragstart', function (pointer, gameObject) {
gameObject.setTint(0xff69b4);
self.children.bringToTop(gameObject);
})
this.input.on('dragend', function (pointer, gameObject, dropped) {
gameObject.setTint();
if (!dropped) {
gameObject.x = gameObject.input.dragStartX;
gameObject.y = gameObject.input.dragStartY;
}
})
this.input.on('drop', function (pointer, gameObject, dropZone) {
gameObject.y = dropZone.y;
gameObject.disableInteractive();
})
}
update() {
}
}</code></pre>
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
