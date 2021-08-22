---
card: "https://cdn-media-1.freecodecamp.org/images/1*mbiAnHlVRgaTRr8tgNU5zg.jpeg"
tags: [Webpack]
description: by Amin Mohamed Ajani
author: "Milad E. Fahmy"
title: "The brain-fatigued JavaScripter’s guide to modern frontend tooling in 2018"
created: "2021-08-15T19:44:12+02:00"
modified: "2021-08-15T19:44:12+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-webpack tag-tech tag-javascript tag-angularjs tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">The brain-fatigued JavaScripter’s guide to modern frontend tooling in 2018</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*mbiAnHlVRgaTRr8tgNU5zg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*mbiAnHlVRgaTRr8tgNU5zg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*mbiAnHlVRgaTRr8tgNU5zg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*mbiAnHlVRgaTRr8tgNU5zg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*mbiAnHlVRgaTRr8tgNU5zg.jpeg" alt="The brain-fatigued JavaScripter’s guide to modern frontend tooling in 2018">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Amin Mohamed Ajani</p>
<h1 id="the-brain-fatigued-javascripter-s-guide-to-modern-frontend-tooling-in-2018">The brain-fatigued JavaScripter’s guide to modern frontend tooling in 2018</h1>
<figcaption>Photo by <a href="https://unsplash.com/photos/yVdN3xagPQk?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Adi Goldstein</a> on <a href="https://unsplash.com/search/photos/fatigue?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>From package managers to ESLint, CommonJS to AMD, and ES6 Modules to Babel and Webpack — that’s a lot of tools! In this article, we’ll migrate an old AngularJS app where we’ll decode the tools NOW.</p>
<h3 id="i-m-tired-">I’m tired…</h3>
<p>Yes, I got <a href="https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4" rel="noopener">the fatigue</a> today.</p>
<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">How will your project die? <a href="https://twitter.com/hashtag/javascript?src=hash&amp;ref_src=twsrc%5Etfw">#javascript</a> <a href="https://t.co/zhSlmrAEZU">pic.twitter.com/zhSlmrAEZU</a></p>— David Neal ?? (@reverentgeek) <a href="https://twitter.com/reverentgeek/status/1006942235366223872?ref_src=twsrc%5Etfw">June 13, 2018</a>
</blockquote>
</figure>
<p>Which got me thinking, I could have stayed working in sales and not taken a detour to front end web development. But then I realized that front end development is for the brave hearts, and brave hearts don’t quit. They win.</p>
<p>So I’m choosing to win by writing something worthwhile for fatigued victims of front end development and its tooling. I’ll be writing on how I transformed beginner code to a full-blown production level application, and the tools I configured in the process.</p>
<p>Let’s get started!</p>
<h3 id="what-we-re-building">What we’re building</h3>
<p>Nothing fancy. We’re building a web application that fetches some random users from an API and displays it on the front-end. It will have <strong>no routing extraordinare</strong><em>. </em>The end goal of the article is to equip you to get used to frontend tooling.</p>
<p>I’m using AngularJS with no boilerplate, so we that aren’t abstracted away from CLIs that leaves us breathless and in the awe of black magic funnery. Note: I’m using AngularJS and not Angular. AngularJS because I couldn’t find any posts related to AngularJS tooling and bundling.</p>
<p>Let’s start by creating an index file on our root directory.</p><pre><code class="language-html">&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Random User!&lt;/title&gt;
&lt;link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div class="container"&gt;
&lt;h1 class="text-center"&gt;Random User!&lt;/h1&gt;
&lt;/div&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.0/angular.min.js"&gt;&lt;/script&gt;
&lt;/body&gt;</code></pre>
<p>Good old days of yore. Got an Angularjs file and a minimal CSS framework from the CDN, and then we start cooking our JavaScript code and keep attaching it to the index line by line.</p>
<p>But as your app will grow, it will be necessary to keep track of all your dependencies (in this case, Angular).</p>
<h4 id="enter-package-managers">Enter Package Managers</h4>
<p>So a lot of people resort to having a package manager which keeps track of the versions of dependencies they use on their project. A package manager’s single most USP is to goto the GitHub of the dependency, download it in your folder, and keep track of the version downloaded. This helps you not break your code if you move your repo and later download another version.</p>
<p>There was <a href="http://github.com/duojs/duo" rel="noopener">duojs</a>, <a href="https://github.com/jspm/jspm-cli" rel="noopener">jspm</a>, <a href="https://github.com/bower/bower" rel="noopener">bower</a>, <a href="https://github.com/npm/npm" rel="noopener">npm</a> and now, there is:</p>
<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">Introducing Yarn: a new package manager for JavaScript from <a href="https://twitter.com/fbOpenSource?ref_src=twsrc%5Etfw">@fbOpenSource</a>, <a href="https://twitter.com/tildeio?ref_src=twsrc%5Etfw">@tildeio</a>, <a href="https://twitter.com/googledevs?ref_src=twsrc%5Etfw">@googledevs</a> &amp; <a href="https://twitter.com/exponentjs?ref_src=twsrc%5Etfw">@exponentjs</a>. <a href="https://t.co/2LfN5OXjOv">https://t.co/2LfN5OXjOv</a></p>— Yarn (@yarnpkg) <a href="https://twitter.com/yarnpkg/status/785857780838232064?ref_src=twsrc%5Etfw">October 11, 2016</a>
</blockquote>
</figure>
<p>Go ahead, <a href="https://yarnpkg.com/en/docs/install" rel="noopener">install</a> it. We’re gonna need it. When we <strong>add</strong><em> </em>a dependency in our application, yarn will download the stuff and keep it inside the node_modules folder. From then on, if you need the file, you can src-reference into your index.</p><pre><code>yarn add angular</code></pre>
<p>While we’re doing this, let’s also add app.js, userController.js, and userFactory.js files in our root directory and link them up into our index file.</p>
<p>App.js:</p><pre><code class="language-js">/**
* /app.js
*/
var app = angular.module("RandomApp", []);</code></pre>
<p>userFactory.js:</p><pre><code class="language-js">// /userFactory.js
app.factory("UserF", function($http) {
var UserF = {};
UserF.getUsers = function(){
return $http({
method: 'GET',
url: 'https://www.reqres.in/api/users',
})
};
return UserF;
});</code></pre>
<p>userController.js:</p><pre><code class="language-js">// /userController.js
app.controller("userController", function($scope, UserF){
$scope.users = [];
UserF.getUsers()
.then(function(res) {
$scope.users = res.data.data;
})
});</code></pre>
<p>index.html:</p><pre><code class="language-html">&lt;!doctype html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport"
content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"&gt;
&lt;meta http-equiv="X-UA-Compatible" content="ie=edge"&gt;
&lt;title&gt;Random User!&lt;/title&gt;
&lt;link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div class="container" ng-app="RandomApp"&gt;
&lt;h1 class="text-center"&gt;Random User!&lt;/h1&gt;
&lt;div ng-controller="userController"&gt;
&lt;div ng-repeat="user in users"&gt;
&lt;img ng-src="{{user.avatar}}" class="img-responsive"&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;script src="node_modules/angular/angular.min.js"&gt;&lt;/script&gt;
&lt;script src="app.js"&gt;&lt;/script&gt;
&lt;script src="userController.js"&gt;&lt;/script&gt;
&lt;script src="userFactory.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<h4 id="problems-with-this-approach">Problems with this approach</h4>
<p>The order of our script tag must be in that specific order. app.js makes the variable app and then attaches it to the global window object. This app variable is then used by the rest of the script files. This is often called global namespace pollution, and if you are still using this approach, don’t. Further, if we open any one JS file in any given moment, we will have no idea what the app variable holds.</p>
<p>Another semantic problem with this code is that this code uses anonymous functions. Anonynous functions are both a boon and bane to JavaScript. Always name your anonymous function. It will make stack traces easier to debug.</p>
<p>Now wouldn’t it be cool if we could have a JS police that pointed out this stuff to us while we wrote?</p>
<h4 id="eslint">ESLint</h4>
<p>ESLint is a linter. Kind of like code-pairing with a stricter version of you. Linters save time for you by debugging your code before you even run your application. Also it forces you and your team to follow clean code practices. Who says no to such an awesome teacher?</p>
<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">We ❤️ the <a href="https://twitter.com/geteslint?ref_src=twsrc%5Etfw">@geteslint</a> `--fix` option. It speeds up the process of integrating such a cool tool to existing projects . <a href="https://twitter.com/hashtag/software?src=hash&amp;ref_src=twsrc%5Etfw">#software</a> <a href="https://twitter.com/hashtag/devtools?src=hash&amp;ref_src=twsrc%5Etfw">#devtools</a> <a href="https://twitter.com/hashtag/javascript?src=hash&amp;ref_src=twsrc%5Etfw">#javascript</a> <a href="https://twitter.com/hashtag/eslint?src=hash&amp;ref_src=twsrc%5Etfw">#eslint</a> <a href="https://twitter.com/hashtag/superpowers?src=hash&amp;ref_src=twsrc%5Etfw">#superpowers</a> <a href="https://t.co/l0lrskSzUJ">pic.twitter.com/l0lrskSzUJ</a></p>— Origen Studio (@TheOrigenStudio) <a href="https://twitter.com/TheOrigenStudio/status/1009391662135513088?ref_src=twsrc%5Etfw">June 20, 2018</a>
</blockquote>
</figure>
<h4 id="configuring-eslint">Configuring ESLint</h4><pre><code>yarn add eslint eslint-config-airbnb eslint-config-airbnb-base -D</code></pre>
<p>We’ll be using <a href="https://github.com/airbnb/javascript/tree/es5-deprecated/es5" rel="noopener">Airbnb’s style configuration</a> that runs through our code and tells us wherever we’re writing the code in a non-standard way. The above command will install the configurations in the node_modules folder, but we will need to tell ESLint to use these. Make a file called .eslintrc.json and fill it up with:</p><pre><code class="language-js">// .eslintrc.json
{
"extends": [
"airbnb/legacy"
],
"env": {
"browser": true
}
}</code></pre>
<p>Let’s run ESLint on our files and see what happens.</p>
<p>These are all rules defined in the Airbnb style guide. I’ll leave it up to you to fix your files. It’s always better to have a linter from the beginning. Of course, you can also switch off a particular rule. For example, if you prefer no-semicolon, or the double-quote style to single quote, you can switch them off. ESLint will give you that flexibility.</p>
<h4 id="modules">Modules</h4>
<p>Now let’s talk about modularity. When making large scale applications, we need to have our code well-structured so that it’s easier to scale. We put in place a separation of concerns by grouping code pieces in separate modules. JavaScript didn’t support modules until ES6 came along. But the concept of modularity came long before ES6.</p>
<h4 id="commonjs">CommonJS</h4>
<p>Before ES6, this standard was adopted as a pattern where you write your piece of code and tell the environment to export that piece. And then you’d use a library like <a href="http://requirejs.org/" rel="noopener">RequireJS</a> to import the module.</p><pre><code class="language-js">// util.js
module.export = {
noop: function(){},
validateUrl: function(s){
return s.matches(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&amp;//=]*)/)
}
};
</code></pre><pre><code class="language-js">// postController.js
var validateUrl = require('./util').validateUrl;
var handleSubmit = function handleSubmit(e) {
if(!validateUrl(e.target.value)) {
return;
}
submitUrl(e.target.value);
}</code></pre>
<p>If you’ve tinkered around with Node, you may find that piece of code very familiar. But there are downsides to this standard, because it’s synchronous. Which means that unless validateUrl is <strong>required</strong><em>, </em>handleSubmit on Line 3 of postController above isn’t executed. The code halts.</p>
<p>This ideology works fine in Node.js. In Node, we can have a lot of dependencies before starting a server. For example, configuring log files, connecting to the DB on cloud, configuring secret keys. But on the front end, it is not always required.</p>
<h4 id="asynchronous-module-definition-amd-">Asynchronous Module Definition (AMD)</h4>
<p>Like the name suggests, it asynchronously loads modules and <a href="http://2ality.com/2012/04/declaring-module-exports.html" rel="noopener">has a few more advantages over CommonJS patterns</a>. Here’s how the code looks like in AMD (I added a couple of functions). Do you see something familiar?</p><pre><code class="language-js">define(['validateSpam', 'blockUser', function(validateSpam, blockUser){
return {
noop: function(){},
validateUrl: function(s) {
return s.matches(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&amp;//=]*)/)
},
validateSpammyComment: function validateSpammyComment(comment, userID) {
if(validateSpam(comment)) {
blockUser(userID);
return false;
}
return true;
}</code></pre>
<p>It kind of feels like the way we Inject Dependencies in AngularJS on Line 1.</p>
<h4 id="es6-modules">ES6 Modules</h4>
<p>Since the committee at TC39 saw developers using external libraries, they clearly felt the need for JavaScript to support modules. So they introduced them in ES6. Let’s use them!</p>
<p>utils.js:</p><pre><code class="language-js">function noop(){};
function validateUrl(s) {
return s.matches(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&amp;//=]*)/)
}
export {
noop,
validateUrl
}</code></pre>
<p>postController:js</p><pre><code class="language-js">
import { validateUrl } from './util';
var handleSubmit = function handleSubmit(e) {
if(!validateUrl(e.target.value)) {
return;
}
submitUrl(e.target.value);
}</code></pre>
<p>No external library to call. Import/export natively supported. But there are still versions of browsers <a href="http://kangax.github.io/compat-table/es6/" rel="noopener">which do not completely support all the features of ES6</a>. This inconsistency of browser support didn’t stop programmers from writing the next generation of JavaScript. Tools like <a href="https://babeljs.io/" rel="noopener">babel</a> are available that scan through the JavaScript and <strong>transpile</strong> it down to browser compatible code. And just like that, your code supports older browsers like IE (oh IE die already!).</p>
<p><strong>Babel and ES6</strong></p>
<p>Okay, so let’s convert our old JavaScript to newer JavaScript. A little bit so that we can add some modularity. All this while, let’s keep our linter from yelling.</p><pre><code class="language-js">// /userFactory.js
let angular = window.angular;
let app = angular.module('RandomApp');
/**
* A User factory which gets the user list
* @param $http
*/
let userFactory = $http =&gt; {
let UserF = {};
UserF.getUsers = () =&gt; $http({
method: 'GET',
url: 'https://www.reqres.in/api/users'
});
return UserF;
};
app.factory('UserF', userFactory);</code></pre><pre><code class="language-js">// /userController.js
let angular = window.angular;
let app = angular.module('RandomApp');
/**
* Controls the user
* @param $scope
* @param UserF
*/
let userController = ($scope, UserF) =&gt; {
$scope.users = [];
UserF.getUsers().then(res =&gt; $scope.users = res.data.data);
};
userController.$inject = ['$scope', 'UserFactory'];
app.controller('userController', userController);</code></pre>
<h4 id="problem-with-this-code">Problem with this code</h4>
<p>This code won’t work. Because the let keyword of ES6 creates block scoped variables, and we can’t redefine a block scoped variable inside it’s own scope again. Remember: we’re still sitting on the global scope. We’ll fix this.</p>
<p>The reason why I asked you to refactor the code is because I want you to use babel on this and see the magic yourself. Time to fire up that terminal.</p><pre><code>yarn add babel-cli babel-preset-env</code></pre>
<p>This will add babel-cli and babel-preset-env.</p>
<h4 id="babel-plugins-and-presets">Babel plugins and presets</h4>
<p>The code goes through a series of transformations, and you can choose what kinds of transformations you want. You can have it convert arrow functions to anonymous, transform spread operators, transform for…of loops and a lot more. These transformations are what we call plugins.</p>
<p>You can pick and choose what kinds of transformations you want. Groups of plugins are called presets. Babel-preset-env creates a moving target for your babel. You are not pin-pointing the actual version of JavaScript, but you are asking babel to track the last <em>n</em> versions of all browsers.</p>
<p>Now make a babel configuration file: .babelrc and place it in the root folder.</p><pre><code class="language-js">{
"presets": [
["env", {
"targets": {
"browsers": "last 2 versions"
}
}]
]
}</code></pre>
<p>Now, if you run the following command on your terminal, babel will do its job. Go ahead, try it out:</p><pre><code>node_modules/.bin/babel *.js</code></pre>
<figcaption>there’s only so much I can screencap. But you get the drill..</figcaption>
</figure>
<p>Nifty stuff, right? Babel gave a preview of how the files will look if it were to convert the files for us.</p>
<p>Now let’s take a breather and think about what all we’ve accomplished so far. We’ve broken down a JavaScript file into many files. We’ve added a linter so that it yells at us if we write funny code. We’re writing JavaScript in the future and making it available to the browser in a version it understands. We’ve polluted the global namespace, but we’ve done it awesomely which we will fix soon.</p>
<p>If only there was a tool that does all that automatically. We’d tell it to take our code, run the linter for any errors before the code hits production, and transpile it to browser compatible code. Yes, there is such a tool.</p>
<p>Let’s automate the hell out of this.</p>
<h3 id="bundling-with-webpack">Bundling with Webpack</h3>
<p>First, move all JS files into a folder. And let’s use standard mnemonics and name the folder <strong>build</strong>. Also, let’s refactor our JavaScript files so that we can have all our files built up in a single file.</p><pre><code class="language-js">
// /build/userController.js
/**
* Controls the user
* @param $scope
* @param UserF
*/
let userController = ($scope, UserF) =&gt; {
$scope.users = [];
UserF.getUsers().then(res =&gt; $scope.users = res.data.data);
};
userController.$inject = ['$scope', 'userFactory'];
export default userController;</code></pre><pre><code class="language-js">// /build/userFactory.js
/**
* A User factory which gets the user list
* @param $http
*/
let userFactory = $http =&gt; {
let UserF = {};
UserF.getUsers = () =&gt; $http({
method: 'GET',
url: 'https://www.reqres.in/api/users'
});
return UserF;
};
userFactory.$inject = ['$http'];
export default userFactory;</code></pre><pre><code class="language-js">// /build/app.js
import angular from 'angular';
import userController from './userController';
import userFactory from './userFactory';
angular.module('RandomApp', [])
.factory('userFactory', userFactory)
.controller('userController', userController);</code></pre><pre><code>yarn add webpack webpack-dev-server babel-loader eslint-loader -D</code></pre>
<p>And now, create a webpack.config.js file:</p><pre><code class="language-js">var path = require('path');
module.exports = {
mode: 'development', // tells webpack that this is a development build. the 'production' switch will minify the code among other things
devtool: 'cheap-eval-source-map', // generate source maps for better debugging and dont take much time.
context: __dirname, // since this runs in a node environment, webpack will need the current directory name
entry: './build/app.js', // take this file and add to the bundled file whatever this file imports
output: {
path: path.join(__dirname, 'dist'), // output this in a dist folder
filename: 'bundle.js' // and name it bundle.js
},
// read medium post to know what's module and devServer because I dont have much room for comments
module: {
rules: [{
enforce: 'pre',
loader: 'eslint-loader',
test: /\.js$/
}, {
loader: 'babel-loader',
test: /\.js$/
}]
},
devServer: {
publicPath: '/dist/',
filename: 'bundle.js',
historyApiFallback: true,
overlay: true
}
};</code></pre>
<p>If you now fire up Webpack, you will see all files bundled up in a single file in a dist folder.</p><pre><code>webpack</code></pre>
<p>Bliss.</p>
<h4 id="dissecting-webpack-configuration">Dissecting Webpack Configuration</h4>
<p>Congratulations. Give yourself a pat on the back. You bundled your files so that they’re almost production ready. Now let’s talk about the configuration. I’ll break it down and tell you exactly what each key is. For more, <a href="https://webpack.js.org/" rel="noopener">you can always read the manual</a>.</p>
<p>I’ve commented most of the stuff. Here, I talk about the left out stuff:</p>
<h4 id="webpack-loaders-module-object-">Webpack Loaders (module object)</h4>
<p>Think of this as a chain of code-loading units in a pipeline. The last one in the stack (babel-loader in our case) is the first one which Webpack uses for loading the code chunks. We’re asking Webpack to go through our code and transpile it first into ES5 using the babel-loader.</p>
<p>A loader object will also need a test key. It uses this key to find all files it needs to pick up (in our case, a regex that matches files ending with the extension dot JS). Once transpiled, proceed to the next loader (eslint-loader in our case). And in the end, write the changes from memory to a file and dump it in the file which we’ve specified in the output object.</p>
<p>But that’s not what our config does. We’ve added an enforce-pre on our ESLint loader because we want the linting first. Because the output will be a single file. And that file will be in a barely human readable format if we use <a href="https://webpack.js.org/guides/production/" rel="noopener">minification and obfuscation</a> (which is often the case in production). The Linter will go crazy looking at our end code. We don’t want that. So Webpack will lint first and <strong>then</strong> transpile.</p>
<p>Apart from these, there are many loaders you can use, be it to load your style files, your SVGs, or fonts. One loader that I almost always end up using at work is the html-loader.</p>
<h4 id="html-loader">HTML loader</h4>
<p>In the case of Angular, when we have templates in directives/components, we can use an html-loader in Webpack.</p><pre><code>templateUrl: './users/partial/user.tpl.html' // instead of this,
templateUrl: require('./users/partial/user.tpl.html')</code></pre>
<p>Webpack thrives on a <a href="https://github.com/webpack-contrib" rel="noopener">super huge community</a> which comes up with awesome loaders with great documentation. For all your needs, chances are, there is at least one loader written.</p>
<h4 id="webpack-dev-server-devserver-">Webpack Dev Server (devServer)</h4>
<p>Webpack dev server is a module that comes separate from Webpack. It spins up its own server and watches the files we change. If you make any changes, the WDS will bundle it again and refresh the page. If there are errors, it will refresh the page to an overlay screen (configured by the overlay key) and show you the error right on the browser. And it’s super fast because it does all that in the memory and not on the hard storage.</p>
<p>Of course, to get it to work, you first need to have a base build file (that is, run Webpack at least once to have a build file). Once you have that, you can fire up this command. It will start the server and serve the static files, open the browser for you on port 8080 by default, and keep watching the changes.</p><pre><code>webpack-dev-server --open</code></pre>
<p>That’s it!</p>
<p>But this is not the end of it if you think about it. There are still so many things you can do. At work, we use <a href="https://flow.org/en/" rel="noopener">Flow</a> for static type check while we code. A static type checker looks at your code and warns you if you’re, say, calling functions with the wrong type of arguments. You can integrate that as well in Webpack.</p>
<p>We also use <a href="https://prettier.io/" rel="noopener">Prettier</a> to format our code automatically as we type. It just makes the code more readable.</p>
<blockquote>Any fool can write code that a computer can understand. Good programmers write code that humans can understand — Martin Fowler.</blockquote>
<p>I’m going to put that up as a poster on my desk soon.</p>
<h3 id="conclusion">Conclusion</h3>
<p>Congratulations! You did it!</p>
<p>If you survived reading this larger than life article, let me give you an over-the-internet-hi-five and tell you that today, you won. Surviving JavaScript is not easy for me. I wish I could have known all this while working on my first project as a UI guy. But I guess that’s how front-end development is for me. Keep learning, keep evolving.</p>
<p>I’m tinkering with React for now, and I soon may come up with another article if you liked this one. Maybe include <a href="https://reasonml.github.io/" rel="noopener">ReasonML</a>, <a href="https://graphql.org/" rel="noopener">GraphQL</a> or <a href="https://redux.js.org/" rel="noopener">Redux</a>. If you liked this article or hated it or have some feedback, please do tell me.</p>
<p>I live on twitter as <a href="https://www.twitter.com/AminSpeaks" rel="noopener">@AminSpeaks</a> and everywhere else as @binarybaba.</p>
<p>Cheers and Godspeed.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
