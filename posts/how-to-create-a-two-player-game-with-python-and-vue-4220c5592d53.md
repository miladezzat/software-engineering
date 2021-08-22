---
card: "https://cdn-media-1.freecodecamp.org/images/0*nvqAP0AgGAWA6-vu.gif"
tags: [Web Development]
description: "by Neo Ighodaro"
author: "Milad E. Fahmy"
title: "How to create a two-player game with Python and Vue"
created: "2021-08-16T11:37:54+02:00"
modified: "2021-08-16T11:37:54+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-gaming tag-programming tag-technology tag-learning ">
<header class="post-full-header">
<h1 class="post-full-title">How to create a two-player game with Python and Vue</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*nvqAP0AgGAWA6-vu.gif 300w,
https://cdn-media-1.freecodecamp.org/images/0*nvqAP0AgGAWA6-vu.gif 600w,
https://cdn-media-1.freecodecamp.org/images/0*nvqAP0AgGAWA6-vu.gif 1000w,
https://cdn-media-1.freecodecamp.org/images/0*nvqAP0AgGAWA6-vu.gif 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*nvqAP0AgGAWA6-vu.gif" alt="How to create a two-player game with Python and Vue">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
$ cd python-pusher-mutiplayer-game
$ virtualenv .venv
$ source .venv/bin/activate # Linux based systems
$ \path\to\env\Scripts\activate # Windows users</code></pre><p>We will install <a href="http://flask.pocoo.org/" rel="noopener">Flask</a> using this command:</p><pre><code class="language-bash">$ pip install flask</code></pre><h3 id="setting-up-pusher">Setting up Pusher</h3><p>To integrate Pusher into the multiplayer game, we need to create a Pusher channels application from the Pusher dashboard. If you don’t already have a Pusher account, head over to the <a href="https://pusher.com/" rel="noopener">Pusher website</a> and create one.</p><p>After creating an account, create a new channels application and enable client events from the application dashboard. To enable client events, click on <strong>App settings</strong> and scroll to the bottom of the page then select the option that says <strong>Enable client events,</strong> and update the <strong>App settings.</strong></p><h3 id="building-the-backend-server">Building the backend server</h3><p>Back in the project directory, let’s install the <a href="https://github.com/pusher/pusher-http-python" rel="noopener">Python Pusher library</a> with this command:</p><pre><code class="language-bash">$ pip install pusher</code></pre><p>We will create a new file and call it <code>app.py</code>, this is where we will write all the code for the Flask backend server. We will also create a folder and call it <code>templates</code>, this folder will hold the markup files for this application.</p><p>Let’s write some code to register the endpoints for the game and serve the view, open the <code>app.py</code> file and paste the following code:</p><pre><code class="language-py">// File: ./app.py
from flask import Flask, render_template, request, jsonify, make_response, json
from pusher import pusher
app = Flask(__name__)
pusher = pusher_client = pusher.Pusher(
app_id='PUSHER_APP_ID',
key='PUSHER_APP_KEY',
secret='PUSHER_APP_SECRET',
cluster='PUSHER_APP_CLUSTER',
ssl=True
)
name = ''
@app.route('/')
def index():
return render_template('index.html')
@app.route('/play')
def play():
global name
name = request.args.get('username')
return render_template('play.html')
@app.route("/pusher/auth", methods=['POST'])
def pusher_authentication():
auth = pusher.authenticate(
channel=request.form['channel_name'],
socket_id=request.form['socket_id'],
custom_data={
u'user_id': name,
u'user_info': {
u'role': u'player'
}
}
)
return json.dumps(auth)
if __name__ == '__main__':
app.run(host='0.0.0.0', port=5000, debug=True)
name = ''</code></pre><blockquote><em>Replace the <code>PUSHER_APP_*</code> keys with the values on your Pusher dashboard.</em></blockquote><p>In the code above, we defined three endpoints, here’s what they do:</p><ul><li><code>/</code> - renders the front page that asks a player to connect with a username.</li><li><code>/play</code> - renders the game view.</li><li><code>/pusher/auth</code> - authenticates Pusher’s presence and private channels for connected players.</li></ul><h3 id="building-the-frontend">Building the frontend</h3><p>In the <code>templates</code> folder, we will create two files:</p><ol><li><code>index.html</code></li><li><code>play.html</code></li></ol><p>The <code>index.html</code> file will render the connection page, so open the <code>templates/index.html</code> file and paste the following code:</p><pre><code class="language-html">&lt;!-- File: ./templates/index.html --&gt;
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"&gt;
&lt;meta name="description" content=""&gt;
&lt;meta name="author" content="Neo Ighodaro"&gt;
&lt;title&gt;TIC-TAC-TOE&lt;/title&gt;
&lt;link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"&gt;
&lt;style&gt;
:root {
--input-padding-x: .75rem;
--input-padding-y: .75rem;
}
html,
body, body &gt; div {
height: 100%;
}
body &gt; div {
display: -ms-flexbox;
display: flex;
-ms-flex-align: center;
align-items: center;
padding-top: 40px;
padding-bottom: 40px;
background-color: #f5f5f5;
}
.form-signin {
width: 100%;
max-width: 420px;
padding: 15px;
margin: auto;
}
.form-label-group {
position: relative;
margin-bottom: 1rem;
}
.form-label-group &gt; input,
.form-label-group &gt; label {
padding: var(--input-padding-y) var(--input-padding-x);
}
.form-label-group &gt; label {
position: absolute;
top: 0;
left: 0;
display: block;
width: 100%;
margin-bottom: 0; /* Override default `&lt;label&gt;` margin */
line-height: 1.5;
color: #495057;
cursor: text; /* Match the input under the label */
border: 1px solid transparent;
border-radius: .25rem;
transition: all .1s ease-in-out;
}
.form-label-group input::-webkit-input-placeholder {
color: transparent;
}
.form-label-group input:-ms-input-placeholder {
color: transparent;
}
.form-label-group input::-ms-input-placeholder {
color: transparent;
}
.form-label-group input::-moz-placeholder {
color: transparent;
}
.form-label-group input::placeholder {
color: transparent;
}
.form-label-group input:not(:placeholder-shown) {
padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
padding-bottom: calc(var(--input-padding-y) / 3);
}
.form-label-group input:not(:placeholder-shown) ~ label {
padding-top: calc(var(--input-padding-y) / 3);
padding-bottom: calc(var(--input-padding-y) / 3);
font-size: 12px;
color: #777;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="app"&gt;
&lt;form class="form-signin"&gt;
&lt;div class="text-center mb-4"&gt;
&lt;img class="mb-4" src="https://thestore.gameops.com/v/vspfiles/photos/Tic-Tac-Go-14.gif" alt="" width="72" height="72"&gt;
&lt;h1 class="h3 mb-3 font-weight-normal"&gt;TIC-TAC-TOE&lt;/h1&gt;
&lt;p&gt;PUT IN YOUR DETAILS TO PLAY&lt;/p&gt;
&lt;/div&gt;
&lt;div class="form-label-group"&gt;
&lt;input type="name" id="inputUsername" ref="username" class="form-control" placeholder="Username" required="" autofocus=""&gt;
&lt;label for="inputUsername"&gt;Username&lt;/label&gt;
&lt;/div&gt;
&lt;div class="form-label-group"&gt;
&lt;input type="email" id="inputEmail" ref="email" class="form-control" placeholder="Email address" autofocus="" required&gt;
&lt;label for="inputEmail"&gt;Email address&lt;/label&gt;
&lt;/div&gt;
&lt;button class="btn btn-lg btn-primary btn-block" type="submit" @click.prevent="login"&gt;Connect&lt;/button&gt;
&lt;p class="mt-5 mb-3 text-muted text-center"&gt;© 2017-2018&lt;/p&gt;
&lt;/form&gt;
&lt;/div&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"&gt;&lt;/script&gt;
&lt;script&gt;
var app = new Vue({
el: '#app',
methods: {
login: function () {
let username = this.$refs.username.value
let email = this.$refs.email.value
window.location.replace(`/play?username=${username}&amp;email=${email}`);
}
}
})
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>When a player visits the connection page and puts in a username and email, the browser window will be redirected to the game view.</p><p>Let’s write the markup for the game view. Open the <code>play.html</code> file and paste the following code:</p><pre><code class="language-html">&lt;!-- file: ./templates/play.html --&gt;
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"&gt;
&lt;link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"&gt;
&lt;title&gt;TIC-TAC-TOE&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="app" class="container-fluid"&gt;
&lt;div class="container-fluid clearfix mb-3 shadow"&gt;
&lt;img class="float-left my-3" src="https://thestore.gameops.com/v/vspfiles/photos/Tic-Tac-Go-14.gif" height="62px" width="62px"
/&gt;
&lt;div class="float-right w-25 py-3"&gt;
&lt;img class="my-3 mx-3 rounded-circle border" src="http://dfsanonymous.club/wp-content/uploads/2017/11/DFSAnonymous-NewLogo.png"
height="62px" width="62px" /&gt;
&lt;p class="d-inline"&gt; {% raw %} {{ username }} {% endraw %} &lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="row mx-5" style="height: 50vh"&gt;
&lt;div class="col-8 h-50 align-self-center"&gt;
&lt;div class="row border rounded invisible h-50 w-75 m-auto" style="font-size: 3.6rem" ref="gameboard" @click="playerAction"&gt;
&lt;div class="h-100 pr-2 col border border-dark" data-id="1" ref="1"&gt;&lt;/div&gt;
&lt;div class="col pr-2 border border-dark" data-id="2" ref="2"&gt;&lt;/div&gt;
&lt;div class="col pr-2 border border-dark" data-id="3" ref="3"&gt;&lt;/div&gt;
&lt;div class="w-100"&gt;&lt;/div&gt;
&lt;div class="h-100 pr-2 col border border-dark" data-id="4" ref="4"&gt;&lt;/div&gt;
&lt;div class="col pr-2 border border-dark" data-id="5" ref="5"&gt;&lt;/div&gt;
&lt;div class="col pr-2 border border-dark" data-id="6" ref="6"&gt;&lt;/div&gt;
&lt;div class="w-100"&gt;&lt;/div&gt;
&lt;div class="h-100 pr-2 col border border-dark" data-id="7" ref="7"&gt;&lt;/div&gt;
&lt;div class="col pr-2 border border-dark" data-id="8" ref="8"&gt;&lt;/div&gt;
&lt;div class="col pr-2 border border-dark" data-id="9" ref="9"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="col-4 pl-3"&gt;
&lt;div class="row h-100"&gt;
&lt;div class="col border h-75 text-center" style="background: rgb(114, 230, 147);"&gt;
&lt;p class="my-3"&gt; {% raw %} {{ players }} {% endraw %} online player(s) &lt;/p&gt;
&lt;hr/&gt;
&lt;li class="m-auto py-3 text-dark" style="cursor: pointer;" v-for="member in connectedPlayers" @click="choosePlayer"&gt;
{% raw %} {{ member }} {% endraw %}
&lt;/li&gt;
&lt;/div&gt;
&lt;div class="w-100"&gt;&lt;/div&gt;
&lt;div class="col text-center py-3 border h-25" style="background: #b6c0ca; font-size: 1em; font-weight: bold"&gt;
{% raw %} {{ status }} {% endraw %}
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"&gt;&lt;/script&gt;
&lt;script src="https://js.pusher.com/4.2/pusher.min.js"&gt;&lt;/script&gt;
&lt;script&gt;
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>The code above defines the layout of the game view but does not contain any interactivity or realtime features. In the scripts section, before the closing <code>body</code> tag, we included the Vue and Pusher libraries because they are required for the game to work.</p><p>Let’s include the JavaScript code that will drive the entire game process and define its logic.</p><p>In the same file, add the code below in between the <code>script</code> tag that is just before the closing <code>body</code> tag:</p><pre><code class="language-js">var app = new Vue({
el: '#app',
data: {
username: '',
players: 0,
connectedPlayers: [],
status: '',
pusher: new Pusher('PUSHER_APP_KEY', {
authEndpoint: '/pusher/auth',
cluster: 'PUSHER_APP_CLUSTER',
encrypted: true
}),
otherPlayerName: '',
mychannel: {},
otherPlayerChannel: {},
firstPlayer: 0,
turn: 0,
boxes: [0, 0, 0, 0, 0, 0, 0, 0, 0]
},
created () {
let url = new URL(window.location.href);
let name = url.searchParams.get("username");
if (name) {
this.username = name
this.subscribe();
this.listeners();
} else {
this.username = this.generateRandomName();
location.assign("/play?username=" + this.username);
}
},
methods: {
// We will add methods here
}
});</code></pre><blockquote><em>Replace the <code>PUSHER_APP_*</code> keys with the keys on your Pusher dashboard.</em></blockquote><p>Above, we create a new instance of Vue and we target the <code>#app</code> selector. We define all the defaults in the <code>data</code>object and then in the <code>create()</code> function which is called automatically when the Vue component is created, we check for a user and assign the user to the username if one was supplied.</p><p>We also make calls to the <code>subscribe</code> and <code>listeners</code> methods. Let’s define those inside the <code>methods</code> object. Inside the <code>methods</code> object, paste the following functions:</p><pre><code class="language-js">// [...]
subscribe: function () {
let channel = this.pusher.subscribe('presence-channel');
this.myChannel = this.pusher.subscribe('private-' + this.username)
channel.bind('pusher:subscription_succeeded', (player) =&gt; {
this.players = player.count - 1
player.each((player) =&gt; {
if (player.id != this.username)
this.connectedPlayers.push(player.id)
});
});
channel.bind('pusher:member_added', (player) =&gt; {
this.players++;
this.connectedPlayers.push(player.id)
});
channel.bind('pusher:member_removed', (player) =&gt; {
this.players--;
var index = this.connectedPlayers.indexOf(player.id);
if (index &gt; -1) {
this.connectedPlayers.splice(index, 1)
}
});
},
listeners: function () {
this.pusher.bind('client-' + this.username, (message) =&gt; {
if (confirm('Do you want to start a game of Tic Tac Toe with ' + message)) {
this.otherPlayerName = message
this.otherPlayerChannel = this.pusher.subscribe('private-' + this.otherPlayerName)
this.otherPlayerChannel.bind('pusher:subscription_succeeded', () =&gt; {
this.otherPlayerChannel.trigger('client-game-started', this.username)
})
this.startGame(message)
} else {
this.otherPlayerChannel = this.pusher.subscribe('private-' + message)
this.otherPlayerChannel.bind('pusher:subscription_succeeded', () =&gt; {
this.otherPlayerChannel.trigger('client-game-declined', "")
})
this.gameDeclined()
}
}),
this.myChannel.bind('client-game-started', (message) =&gt; {
this.status = "Game started with " + message
this.$refs.gameboard.classList.remove('invisible');
this.firstPlayer = 1;
this.turn = 1;
})
this.myChannel.bind('client-game-declined', () =&gt; {
this.status = "Game declined"
})
this.myChannel.bind('client-new-move', (position) =&gt; {
this.$refs[position].innerText = this.firstPlayer ? 'O' : 'X'
})
this.myChannel.bind('client-your-turn', () =&gt; {
this.turn = 1;
})
this.myChannel.bind('client-box-update', (update) =&gt; {
this.boxes = update;
})
this.myChannel.bind('client-you-lost', () =&gt; {
this.gameLost();
})
},
// [...]</code></pre><p>In the <code>subscribe</code> method, we subscribe to our Pusher presence channel, and then subscribe to the private channel for the current user. In the <code>listeners</code> method we register the listeners for all the events we are expecting to be triggered on the private channel we subscribed to.</p><p>Next, we will add other helper methods to our methods class. Inside the methods class, add the following functions to the bottom after the <code>listeners</code> method:</p><pre><code class="language-js">// Generates a random string we use as a name for a guest user
generateRandomName: function () {
let text = '';
let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (var i = 0; i &lt; 6; i++) {
text += possible.charAt(Math.floor(Math.random() * possible.length));
}
return text;
},
// Lets you choose a player to play as.
choosePlayer: function (e) {
this.otherPlayerName = e.target.innerText
this.otherPlayerChannel = this.pusher.subscribe('private-' + this.otherPlayerName)
this.otherPlayerChannel.bind('pusher:subscription_succeeded', () =&gt; {
this.otherPlayerChannel.trigger('client-' + this.otherPlayerName, this.username)
});
},
// Begins the game
startGame: function (name) {
this.status = "Game started with " + name
this.$refs.gameboard.classList.remove('invisible');
},
// User declined to play
gameDeclined: function () {
this.status = "Game declined"
},
// Game has ended with current user winning
gameWon: function () {
this.status = "You WON!"
this.$refs.gameboard.classList.add('invisible');
this.restartGame()
},
// Game has ended with current user losing
gameLost: function () {
this.turn = 1;
this.boxes = [0, 0, 0, 0, 0, 0, 0, 0, 0]
this.status = "You LOST!"
this.$refs.gameboard.classList.add('invisible');
this.restartGame()
},
// Restarts a game
restartGame: function () {
for (i = 1; i &lt; 10; i++) {
this.$refs[i].innerText = ""
}
this.$refs.gameboard.classList.remove('invisible');
},
// Checks tiles to see if the tiles passed are a match
compare: function () {
for (var i = 1; i &lt; arguments.length; i++) {
if (arguments[i] === 0 || arguments[i] !== arguments[i - 1]) {
return false
}
}
return true;
},
// Checks the tiles and returns true if theres a winning play
theresAMatch: function () {
return this.compare(this.boxes[0], this.boxes[1], this.boxes[2]) ||
this.compare(this.boxes[3], this.boxes[4], this.boxes[5]) ||
this.compare(this.boxes[6], this.boxes[7], this.boxes[8]) ||
this.compare(this.boxes[0], this.boxes[3], this.boxes[6]) ||
this.compare(this.boxes[1], this.boxes[4], this.boxes[7]) ||
this.compare(this.boxes[2], this.boxes[5], this.boxes[8]) ||
this.compare(this.boxes[2], this.boxes[4], this.boxes[6]) ||
this.compare(this.boxes[0], this.boxes[4], this.boxes[8])
},
// Checks to see if the play was a winning play
playerAction: function (e) {
let index = e.target.dataset.id - 1
let tile = this.firstPlayer ? 'X' : 'O'
if (this.turn &amp;&amp; this.boxes[index] == 0) {
this.turn = 0
this.boxes[index] = tile
e.target.innerText = tile
this.otherPlayerChannel.trigger('client-your-turn', "")
this.otherPlayerChannel.trigger('client-box-update', this.boxes)
this.otherPlayerChannel.trigger('client-new-move', e.target.dataset.id)
if (this.theresAMatch()) {
this.gameWon()
this.boxes = [0, 0, 0, 0, 0, 0, 0, 0, 0]
this.otherPlayerChannel.trigger('client-you-lost', '')
}
}
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
