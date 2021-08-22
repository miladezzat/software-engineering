---
card: "https://cdn-media-1.freecodecamp.org/images/0*2mHsgB-JH_yxlRev.png"
tags: [JavaScript]
description: "by Timber.io"
author: "Milad E. Fahmy"
title: "How to create a real-world Node CLI app with Node"
created: "2021-08-16T11:43:06+02:00"
modified: "2021-08-16T11:43:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-programming tag-technology tag-apps-tag ">
<header class="post-full-header">
<h1 class="post-full-title">How to create a real-world Node CLI app with Node</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*2mHsgB-JH_yxlRev.png 300w,
https://cdn-media-1.freecodecamp.org/images/0*2mHsgB-JH_yxlRev.png 600w,
https://cdn-media-1.freecodecamp.org/images/0*2mHsgB-JH_yxlRev.png 1000w,
https://cdn-media-1.freecodecamp.org/images/0*2mHsgB-JH_yxlRev.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*2mHsgB-JH_yxlRev.png" alt="How to create a real-world Node CLI app with Node">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
"name": "outside-cli",
"version": "1.0.0",
"license": "MIT",
"scripts": {},
"devDependencies": {},
"dependencies": {}
console.log('Welcome to the outside!')
"name": "outside-cli",
"version": "1.0.0",
"license": "MIT",
"bin": {
"outside": "bin/outside"
},
"scripts": {},
"devDependencies": {},
"dependencies": {}
module.exports = () =&gt; {
const args = minimist(process.argv.slice(2))
console.log(args)
module.exports = () =&gt; {
const args = minimist(process.argv.slice(2))
const cmd = args._[0]
switch (cmd) {
case 'today':
require('./cmds/today')(args)
break
default:
console.error(`"${cmd}" is not a valid command!`)
break
}
console.log('today is sunny')
}</code></pre><figcaption>cmds/today.js</figcaption></figure><p>Now if you run <code>outside today</code>, you'll see the message "today is sunny", and if you run <code>outside foobar</code>, it will tell you that "foobar" is not a valid command. We do still need to query a weather API to get real data, but this is a good start.</p><p>There are a few commands and arguments that are expected to be in every CLI: <code>help</code>, <code>--help</code> and <code>-h</code>, which should show help menus, and <code>version</code>, <code>--version</code> and <code>-v</code> which should output the current app version. We should also default to a main help menu if no command is specified.</p><p>This can be easily implemented in our current setup by adding two cases to our switch statement, a default value for the <code>cmd</code> variable, and implementing some if statements for the help and version argument flags. Minimist automatically parses arguments to key/values, so running <code>outside --version</code> will make <code>args.version</code> equal true.</p><pre><code class="language-js">const minimist = require('minimist')
module.exports = () =&gt; {
const args = minimist(process.argv.slice(2))
let cmd = args._[0] || 'help'
if (args.version || args.v) {
cmd = 'version'
}
if (args.help || args.h) {
cmd = 'help'
}
switch (cmd) {
case 'today':
require('./cmds/today')(args)
break
case 'version':
require('./cmds/version')(args)
break
case 'help':
require('./cmds/help')(args)
break
default:
console.error(`"${cmd}" is not a valid command!`)
break
}
module.exports = (args) =&gt; {
console.log(`v${version}`)
main: `
outside [command] &lt;options&gt;
today .............. show weather for today
version ............ show package version
help ............... show help menu for a command`,
today: `
outside today &lt;options&gt;
--location, -l ..... the location to use`,
}
module.exports = (args) =&gt; {
const subCmd = args._[0] === 'help'
? args._[1]
: args._[0]
console.log(menus[subCmd] || menus.main)
console.log('tomorrow is rainy')
case 'forecast':
require('./cmds/forecast')(args)
break
main: `
outside [command] &lt;options&gt;
today .............. show weather for today
forecast ........... show 10-day weather forecast
version ............ show package version
help ............... show help menu for a command`,
today: `
outside today &lt;options&gt;
--location, -l ..... the location to use`,
forecast: `
outside forecast &lt;options&gt;
--location, -l ..... the location to use`,
}
module.exports = async (location) =&gt; {
const results = await axios({
method: 'get',
url: 'https://query.yahooapis.com/v1/public/yql',
params: {
format: 'json',
q: `select item from weather.forecast where woeid in
(select woeid from geo.places(1) where text="${location}")`,
},
})
return results.data.query.results.channel.item
const getWeather = require('../utils/weather')
module.exports = async (args) =&gt; {
const spinner = ora().start()
try {
const location = args.location || args.l
const weather = await getWeather(location)
spinner.stop()
console.log(`Current conditions in ${location}:`)
console.log(`\t${weather.condition.temp}° ${weather.condition.text}`)
} catch (err) {
spinner.stop()
console.error(err)
}
const getWeather = require('../utils/weather')
module.exports = async (args) =&gt; {
const spinner = ora().start()
try {
const location = args.location || args.l
const weather = await getWeather(location)
spinner.stop()
console.log(`Forecast for ${location}:`)
weather.forecast.forEach(item =&gt;
console.log(`\t${item.date} - Low: ${item.low}° | High: ${item.high}° | ${item.text}`))
} catch (err) {
spinner.stop()
console.error(err)
}
module.exports = async () =&gt; {
const results = await axios({
method: 'get',
url: 'https://api.ipdata.co',
})
const { city, region } = results.data
return `${city}, ${region}`
const getLocation = require('../utils/location')
module.exports = async (args) =&gt; {
// ...
const location = args.location || args.l || await getLocation()
const weather = await getWeather(location)
// ...
console.error(message)
exit &amp;&amp; process.exit(1)
const error = require('./utils/error')
module.exports = () =&gt; {
// ...
default:
error(`"${cmd}" is not a valid command!`, true)
break
// ...
}</code></pre><figcaption><em>index.js</em></figcaption></figure><h3 id="finishing-up">Finishing up</h3><p>The last step to getting our library out into the wild is to publish it to a package manager. Since our app is written in JavaScript, it makes sense to publish to NPM. Let’s fill out our <code>package.json</code> a bit more:</p><pre><code class="language-json">{
"name": "outside-cli",
"version": "1.0.0",
"description": "A CLI app that gives you the weather forecast",
"license": "MIT",
"homepage": "https://github.com/timberio/outside-cli#readme",
"repository": {
"type": "git",
"url": "git+https://github.com/timberio/outside-cli.git"
},
"engines": {
"node": "&gt;=8"
},
"keywords": [
"weather",
"forecast",
"rain"
],
"preferGlobal": true,
"bin": {
"outside": "bin/outside"
},
"scripts": {},
"devDependencies": {},
"dependencies": {
"axios": "^0.18.0",
"minimist": "^1.2.0",
"ora": "^2.0.0"
}
}</code></pre><ul><li>Setting <code>engine</code> will ensure anyone installing our app has an updated version of Node. Since we are using async/await syntax without transpilation, we are requiring Node 8.0 or above.</li><li>Setting <code>preferGlobal</code> will warn the user if installing with <code>npm install --save</code> rather than <code>npm install --global</code>.</li></ul><p>That’s it! You can now run <code>npm publish</code> and your app will be available for download. If you want to take this a step further and release on other package managers (such as Homebrew), you can check out <a href="https://github.com/zeit/pkg" rel="noopener">pkg</a> or <a href="https://github.com/nexe/nexe" rel="noopener">nexe</a>, which help you bundle your app into a self-contained binary.</p><h3 id="summary">Summary</h3><p>This is the structure we follow for all of our CLI apps here at <a href="https://timber.io/" rel="noopener">Timber</a>, and it helps keep things organized and modular.</p><p>Some <strong>key takeaways</strong> from this tutorial for those who only skimmed it:</p><ul><li>Bin files are the entry point for any CLI app, and should only invoke the main function</li><li>Command files shouldn’t be required until they are needed</li><li>Always include <code>help</code> and <code>version</code> commands</li><li>Keep command files slim — their main purpose is to call functions and show user messages</li><li>Always show some kind of activity indicator</li><li>Exit with the correct error codes</li></ul><p>I hope you now have a better understanding of how to create and organize CLI apps in Node. This is the first part of a series of tutorials, so come back later as we go more in-depth on adding design, ascii art and color, accepting user input, writing integration tests, and more. You can see all the source code we wrote today <a href="https://github.com/timberio/outside-cli" rel="noopener">on GitHub</a>.</p><p><em>We’re a cloud-based logging company here @ <a href="http://timber.io" rel="noopener">Timber</a>. We’d love it if you tried out our product (it’s seriously great! — you can create a free account <a href="http://timber.io" rel="noopener">here</a>), but that’s all we’re going to advertise our product … you guys came here to learn about building a CLI App in Node and hopefully this guide helped you get started.</em></p><p><em>Originally published at <a href="https://timber.io/blog/creating-a-real-world-cli-app-with-node" rel="noopener">timber.io</a>.</em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
