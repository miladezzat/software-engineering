---
card: "https://cdn-media-1.freecodecamp.org/images/0*rFQhPUqebJY9N4Ue"
tags: [JavaScript]
description: "The discord API provides you with an easy tool to create and "
author: "Milad E. Fahmy"
title: "How to Create a Music Bot Using Discord.js"
created: "2021-08-16T11:29:48+02:00"
modified: "2021-08-16T11:29:48+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-web-development tag-technology tag-bots ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create a Music Bot Using Discord.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*rFQhPUqebJY9N4Ue 300w,
https://cdn-media-1.freecodecamp.org/images/0*rFQhPUqebJY9N4Ue 600w,
https://cdn-media-1.freecodecamp.org/images/0*rFQhPUqebJY9N4Ue 1000w,
https://cdn-media-1.freecodecamp.org/images/0*rFQhPUqebJY9N4Ue 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*rFQhPUqebJY9N4Ue" alt="How to Create a Music Bot Using Discord.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
"prefix": "!",
"token": "your-token"
const {
prefix,
token,
} = require('./config.json');
const ytdl = require('ytdl-core');</code></pre><p>After that, we can create our client and login using our token.</p><pre><code class="language-javascript">const client = new Discord.Client();
client.login(token);</code></pre><p>Now let’s add some basic listeners that console.log when they get executed.</p><pre><code class="language-javascript">client.once('ready', () =&gt; {
console.log('Ready!');
});
client.once('reconnecting', () =&gt; {
console.log('Reconnecting!');
});
client.once('disconnect', () =&gt; {
console.log('Disconnect!');
});</code></pre><p>After that, we can start our bot using the node command and he should be online on discord and print “Ready!” in the console.</p><pre><code class="language-bash">node index.js</code></pre><h3 id="reading-messages">Reading messages</h3><p>Now that our bot is on our server and able to go online, we can start reading chat messages and responding to them.</p><p>To read messages we only need to write one simple function.</p><pre><code class="language-javascript">client.on('message', async message =&gt; {
}</code></pre><p>Here we create a listener for the message event and get the message and save it into a message object if it is triggered.</p><p>Now we need to check if the message is from our own bot and ignore it if it is.</p><pre><code class="language-javascript">if (message.author.bot) return;</code></pre><p>In this line, we check if the author of the message is our bot and return if it is.</p><p>After that, we check if the message starts with the prefix we defined earlier and return if it doesn’t.</p><pre><code class="language-javascript">if (!message.content.startsWith(prefix)) return;</code></pre><p>After that, we can check which command we need to execute. We can do so using some simple if statements.</p><pre><code class="language-javascript">const serverQueue = queue.get(message.guild.id);
if (message.content.startsWith(`${prefix}play`)) {
execute(message, serverQueue);
return;
} else if (message.content.startsWith(`${prefix}skip`)) {
skip(message, serverQueue);
return;
} else if (message.content.startsWith(`${prefix}stop`)) {
stop(message, serverQueue);
return;
} else {
message.channel.send("You need to enter a valid command!");
}</code></pre><p>In this code block, we check which command to execute and call the command. If the input command isn’t valid we write an error message into the chat using the <em><em><em><em>send()</em></em></em></em> function.</p><p>Now that we know which command we need to execute we can start implementing these commands.</p><h3 id="adding-songs">Adding songs</h3><p>Let's start by adding the play command. For that, we need a song and a guild (A guild represent an isolated collection of users and channels and is often referred to as a server). We also need the ytdl library we installed earlier.</p><p>First, we need to create a map with the name of the queue where we save all the songs we type in the chat.</p><pre><code class="language-javascript">const queue = new Map();</code></pre><p>After that, we create an async function called execute and check if the user is in a voice chat and if the bot has the right permission. If not we write an error message and return.</p><pre><code class="language-javascript">async function execute(message, serverQueue) {
const args = message.content.split(" ");
const voiceChannel = message.member.voice.channel;
if (!voiceChannel)
return message.channel.send(
"You need to be in a voice channel to play music!"
);
const permissions = voiceChannel.permissionsFor(message.client.user);
if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
return message.channel.send(
"I need the permissions to join and speak in your voice channel!"
);
}
}</code></pre><p>Now we can continue with getting the song info and saving it into a song object. For that, we use our ytdl library which gets the song information from the youtube link.</p><pre><code class="language-javascript">const songInfo = await ytdl.getInfo(args[1]);
const song = {
title: songInfo.title,
url: songInfo.video_url,
};</code></pre><p>This will get the information of the song using the <em><em><em><em>ytdl </em></em></em></em>library we installed earlier. Then we save the information we need into a song object.</p><p>After saving the song info we just need to create a contract we can add to our queue. To do so we first need to check if our serverQueue is already defined which means that music is already playing. If so we just need to add the song to our existing serverQueue and send a success message. If not we need to create it and try to join the voice channel and start playing music.</p><pre><code class="language-javascript">if (!serverQueue) {
}else {
serverQueue.songs.push(song);
console.log(serverQueue.songs);
return message.channel.send(`${song.title} has been added to the queue!`);
}</code></pre><p>Here we check if the <em><em><em><em>serverQueue </em></em></em></em>is empty and add the song to it if it’s not. Now we just need to create our contract if the <em><em><em><em>serverQueue </em></em></em></em>is null.</p><pre><code class="language-javascript">// Creating the contract for our queue
const queueContruct = {
textChannel: message.channel,
voiceChannel: voiceChannel,
connection: null,
songs: [],
volume: 5,
playing: true,
};
// Setting the queue using our contract
queue.set(message.guild.id, queueContruct);
// Pushing the song to our songs array
queueContruct.songs.push(song);
try {
// Here we try to join the voicechat and save our connection into our object.
var connection = await voiceChannel.join();
queueContruct.connection = connection;
// Calling the play function to start a song
play(message.guild, queueContruct.songs[0]);
} catch (err) {
// Printing the error message if the bot fails to join the voicechat
console.log(err);
queue.delete(message.guild.id);
return message.channel.send(err);
}</code></pre><p>In this code block, we create a contract and add our song to the songs array. After that, we try to join the voice chat of the user and call our <em><em><em><em>play()</em></em></em></em> function we will implement after that.</p><h3 id="playing-songs">Playing songs</h3><p>Now that we can add our songs to our queue and create a contract if there isn’t one yet we can start implementing our play functionality.</p><p>First, we will create a function called play which takes two parameters (the guild and the song we want to play) and checks if the song is empty. If so we will just leave the voice channel and delete the queue.</p><pre><code class="language-javascript">function play(guild, song) {
const serverQueue = queue.get(guild.id);
if (!song) {
serverQueue.voiceChannel.leave();
queue.delete(guild.id);
return;
}
}</code></pre><p>After that, we will start playing our song using the play() function of the connection and passing the URL of our song.</p><pre><code class="language-javascript">const dispatcher = serverQueue.connection
.play(ytdl(song.url))
.on("finish", () =&gt; {
serverQueue.songs.shift();
play(guild, serverQueue.songs[0]);
})
.on("error", error =&gt; console.error(error));
dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
serverQueue.textChannel.send(`Start playing: **${song.title}**`);</code></pre><p>Here we create a stream and pass it the URL of our song. We also add two listeners that handle the end and error event.</p><p><strong><strong><strong><strong>Note:</strong></strong></strong></strong> This is a recursive function which means that it calls itself over and over again. We use recursion so it plays the next song when the song is finished.</p><p>Now we are ready to play a song by just typing !play URL in the chat.</p><h3 id="skipping-songs">Skipping songs</h3><p>Now we can start implementing the skipping functionality. For that, we just need to end the dispatcher we created in our <em><em><em><em>play()</em></em></em></em> function so it starts the next song.</p><pre><code class="language-javascript">function skip(message, serverQueue) {
if (!message.member.voice.channel)
return message.channel.send(
"You have to be in a voice channel to stop the music!"
);
if (!serverQueue)
return message.channel.send("There is no song that I could skip!");
serverQueue.connection.dispatcher.end();
}
</code></pre><p>Here we check if the user that typed the command is in a voice channel and if there is a song to skip.</p><h3 id="stoping-songs">Stoping songs</h3><p>The <em><em><em><em>stop()</em></em></em></em> function is almost the same as the <em><em><em><em>skip()</em></em></em></em> except that we clear the songs array which will make our bot delete the queue and leave the voice chat.</p><pre><code class="language-javascript">function stop(message, serverQueue) {
if (!message.member.voice.channel)
return message.channel.send(
"You have to be in a voice channel to stop the music!"
);
serverQueue.songs = [];
serverQueue.connection.dispatcher.end();
}</code></pre><h3 id="complete-source-code-for-the-index-js-">Complete source code for the index.js:</h3><p>Here you can get the complete source code for our music bot:</p><pre><code class="language-javascript">const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
const ytdl = require("ytdl-core");
const client = new Discord.Client();
const queue = new Map();
client.once("ready", () =&gt; {
console.log("Ready!");
});
client.once("reconnecting", () =&gt; {
console.log("Reconnecting!");
});
client.once("disconnect", () =&gt; {
console.log("Disconnect!");
});
client.on("message", async message =&gt; {
if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;
const serverQueue = queue.get(message.guild.id);
if (message.content.startsWith(`${prefix}play`)) {
execute(message, serverQueue);
return;
} else if (message.content.startsWith(`${prefix}skip`)) {
skip(message, serverQueue);
return;
} else if (message.content.startsWith(`${prefix}stop`)) {
stop(message, serverQueue);
return;
} else {
message.channel.send("You need to enter a valid command!");
}
});
async function execute(message, serverQueue) {
const args = message.content.split(" ");
const voiceChannel = message.member.voice.channel;
if (!voiceChannel)
return message.channel.send(
"You need to be in a voice channel to play music!"
);
const permissions = voiceChannel.permissionsFor(message.client.user);
if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
return message.channel.send(
"I need the permissions to join and speak in your voice channel!"
);
}
const songInfo = await ytdl.getInfo(args[1]);
const song = {
title: songInfo.title,
url: songInfo.video_url
};
if (!serverQueue) {
const queueContruct = {
textChannel: message.channel,
voiceChannel: voiceChannel,
connection: null,
songs: [],
volume: 5,
playing: true
};
queue.set(message.guild.id, queueContruct);
queueContruct.songs.push(song);
try {
var connection = await voiceChannel.join();
queueContruct.connection = connection;
play(message.guild, queueContruct.songs[0]);
} catch (err) {
console.log(err);
queue.delete(message.guild.id);
return message.channel.send(err);
}
} else {
serverQueue.songs.push(song);
return message.channel.send(`${song.title} has been added to the queue!`);
}
}
function skip(message, serverQueue) {
if (!message.member.voice.channel)
return message.channel.send(
"You have to be in a voice channel to stop the music!"
);
if (!serverQueue)
return message.channel.send("There is no song that I could skip!");
serverQueue.connection.dispatcher.end();
}
function stop(message, serverQueue) {
if (!message.member.voice.channel)
return message.channel.send(
"You have to be in a voice channel to stop the music!"
);
serverQueue.songs = [];
serverQueue.connection.dispatcher.end();
}
function play(guild, song) {
const serverQueue = queue.get(guild.id);
if (!song) {
serverQueue.voiceChannel.leave();
queue.delete(guild.id);
return;
}
const dispatcher = serverQueue.connection
.play(ytdl(song.url))
.on("finish", () =&gt; {
serverQueue.songs.shift();
play(guild, serverQueue.songs[0]);
})
.on("error", error =&gt; console.error(error));
dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
serverQueue.textChannel.send(`Start playing: **${song.title}**`);
}
client.login(token);
</code></pre><h2 id="conclusion">Conclusion</h2><p>You made it all the way until the end! Hope that this article helped you understand the Discord API and how you can use it to create a simple bot. If you want to see an example of a more advanced discord bot you can visit my <a href="https://github.com/TannerGabriel/discord-bot">Github repository</a>.</p><p>If you have found this useful, please consider recommending and sharing it with other fellow developers.</p><p>If you have any questions or feedback, let me know in the comments down below.</p>
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
