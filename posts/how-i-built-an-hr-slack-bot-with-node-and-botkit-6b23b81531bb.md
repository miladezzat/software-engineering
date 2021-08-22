---
card: "https://cdn-media-1.freecodecamp.org/images/1*3qx-9q-OBdf0zcge4Ca8yw.jpeg"
tags: [Slack]
description: "I am an HR professional. More specifically I am a Human Resou"
author: "Milad E. Fahmy"
title: "How I built an HR Slack Bot with Node and Botkit"
created: "2021-08-16T10:11:10+02:00"
modified: "2021-08-16T10:11:10+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-slack tag-bots tag-human-resources tag-tech tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">How I built an HR Slack Bot with Node and Botkit</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*3qx-9q-OBdf0zcge4Ca8yw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*3qx-9q-OBdf0zcge4Ca8yw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*3qx-9q-OBdf0zcge4Ca8yw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*3qx-9q-OBdf0zcge4Ca8yw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*3qx-9q-OBdf0zcge4Ca8yw.jpeg" alt="How I built an HR Slack Bot with Node and Botkit">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
var app = express();
var http = require('http').Server(app);
var dotenv = require('dotenv');
// configuration ===========================================
//load environment variables,
dotenv.load();
// public folder for images, css,...
app.use(express.static(__dirname + '/public'))
//parsing
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
extended: true
})); //for parsing url encoded
// view engine ejs
app.set('view engine', 'ejs');
// routes
require('./routes/routes')(app);
//botkit
require('./controllers/botkit')
//START ===================================================
http.listen(app.get('port'), function() {
console.log('listening on port ' + app.get('port'));
});</code></pre><p>This port must be public and accessible, not just on a localhost.</p><p>For the moment, this server is a blank page, showing and processing nothing.</p><p>You’ll then need a Slack App: just follow this <a href="https://api.slack.com/apps" rel="noopener">link</a> to create one.</p><p>Then, you’ll have to configure your controller. The controller is the brain of your bot. It contains every skill and configuration. Below is my botkit.js file. It has almost the same content found in Botkit’s Starter kit available here: <a href="https://github.com/howdyai/botkit-starter-slack" rel="noopener">https://github.com/howdyai/botkit-starter-slack</a></p><pre><code class="language-javascript">var mongoUri = 'mongodb://localhost:27017/nameofyourDB'
var database = require('../config/database')({
mongoUri: mongoUri
})
var request = require('request')
if (!process.env.SLACK_ID || !process.env.SLACK_SECRET || !process.env.PORT) {
console.log('Error: Specify SLACK_ID SLACK_SECRET and PORT in environment');
process.exit(1);
}
var controller = Botkit.slackbot({
storage: database,
clientVerificationToken: process.env.SLACK_TOKEN
})
exports.controller = controller
//CONNECTION FUNCTIONS=====================================================
exports.connect = function(team_config) {
var bot = controller.spawn(team_config);
controller.trigger('create_bot', [bot, team_config]);
}
// just a simple way to make sure we don't
// connect to the RTM twice for the same team
var _bots = {};
function trackBot(bot) {
_bots[bot.config.token] = bot;
}
controller.on('create_bot', function(bot, team) {
if (_bots[bot.config.token]) {
// already online! do nothing.
console.log("already online! do nothing.")
} else {
bot.startRTM(function(err) {
if (!err) {
trackBot(bot);
console.log("RTM ok")
controller.saveTeam(team, function(err, id) {
if (err) {
console.log("Error saving team")
} else {
console.log("Team " + team.name + " saved")
}
})
} else {
console.log("RTM failed")
}
bot.startPrivateConversation({
user: team.createdBy
}, function(err, convo) {
if (err) {
console.log(err);
} else {
convo.say('I am a bot that has just joined your team');
convo.say('You must now /invite me to a channel so that I can be of use!');
}
});
});
}
});
//REACTIONS TO EVENTS==========================================================
// Handle events related to the websocket connection to Slack
controller.on('rtm_open', function(bot) {
console.log('** The RTM api just connected!')
});
controller.on('rtm_close', function(bot) {
console.log('** The RTM api just closed');
// you may want to attempt to re-open
var slack = require('../controllers/botkit')
module.exports = function(app) {
app.post('/slack/receive', function(req,res){
//respond to Slack that the webhook has been received.
res.status(200);
// Now, pass the webhook into be processed
slack.controller.handleWebhookPayload(req, res)
})
controller.storage.users.get(message.user, function(err, user) {
if (user &amp;&amp; user.name) {
bot.reply(message, 'Hello ' + user.name + '!!');
} else {
bot.reply(message, 'Hello.');
}
});
/*
* Runs every weekday (Monday through Friday)
* at 09:00:00 AM. It does not run on Saturday
* or Sunday.
*/
console.log(`DailyCheck triggered ${new Date()}`)
//Gets today's date
let d = new Date()
d.setUTCHours(0, 0, 0, 0)
let threeMonthsAgo = new Date()
threeMonthsAgo.setUTCMonth(d.getUTCMonth() - 3)
threeMonthsAgo.setUTCHours(0, 0, 0, 0)
let sevenDaysAgo = new Date()
sevenDaysAgo.setUTCDate(d.getUTCDate() - 7)
sevenDaysAgo.setUTCHours(0, 0, 0, 0)
controller.storage.users.find({
"joinedDate": {
"$eq": +sevenDaysAgo
}
}, function(err, user) {
user.forEach(function(member) {
console.log(`Message was sent to ${member.name}(${member.id})`)
bot.startPrivateConversation({
user: member.id
}, Conversations.sendSurvey7)
})
})
}, function() {
/* This function is executed when the job stops */
}, true,
/* Start the job right now */
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
