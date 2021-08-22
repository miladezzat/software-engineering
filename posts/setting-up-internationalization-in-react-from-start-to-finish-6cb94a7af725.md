---
card: "https://cdn-media-1.freecodecamp.org/images/1*6lJJiXiCnX2peIeLG3oIZg.jpeg"
tags: [JavaScript]
description: "This post will use react-intl to help you go from create-reac"
author: "Milad E. Fahmy"
title: "How to set up Internationalization in React from start to finish"
created: "2021-08-16T10:14:17+02:00"
modified: "2021-08-16T10:14:17+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-web-development tag-tech tag-software-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to set up Internationalization in React from start to finish</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*6lJJiXiCnX2peIeLG3oIZg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*6lJJiXiCnX2peIeLG3oIZg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*6lJJiXiCnX2peIeLG3oIZg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*6lJJiXiCnX2peIeLG3oIZg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*6lJJiXiCnX2peIeLG3oIZg.jpeg" alt="How to set up Internationalization in React from start to finish">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
/components
Weather.js
/pages
Home.js
&lt;App /&gt;
&lt;/IntlProvider&gt;</code></pre><p>Now, you need to identify the content for <code>react-intl</code> that will eventually be translated. On the home page of my app, I have the following paragraph:</p><pre><code>&lt;p&gt;It is a beautiful day outside.&lt;/p&gt;</code></pre><p>I need to tell <code>react-intl</code> that this is content that I want to translate and give it an id, so that it can keep track of this content and its original location:</p><pre><code>&lt;FormattedMessage
id="Home.dayMessage"
defaultMessage="It's a beautiful day outside."
/&gt;</code></pre><p>By default, the text will be outputted in a <code>&lt;sp</code>an&gt; , so we will need to wrap this in the original <code>&lt;p&gt;</code> if we want it to remain a paragraph.</p><pre><code>&lt;p&gt;
&lt;FormattedMessage
id="Home.dayMessage"
defaultMessage="It's a beautiful day outside."
/&gt;
&lt;/p&gt;
</code></pre><p>I will now do this for all the content in my web app.</p><p>The state of the project up until now can be found <a href="https://github.com/austintackaberry/i18n-example/commit/f85d4d4f6c029a2fa9b29beaf25fcae3de5e6d12" rel="noopener">here</a>.</p><h3 id="adding-babel-plugin-react-intl">Adding babel-plugin-react-intl</h3><p>Now that we have everything set up, you might be wondering how we can easily aggregate all of that content into one file. However, for debugging purposes, it could be helpful to have individual JSON files for each React component. Guess what, there’s a babel plugin for that!</p><pre><code>$ npm install babel-plugin-react-intl</code></pre><p>This plugin will make a copy of your <code>src</code> directory, but instead of having your React component files, it will have json files with the message content and id. One for each component file in your <code>src</code> directory. It will do this when you run <code>npm run build</code> .</p><p>Now we need to eject from create-react-app, so that we can add our new plugin into our babel configuration. Make sure to commit any changes and then execute:</p><pre><code>$ npm run eject</code></pre><p>Now, we will need to add a <code>.babelrc</code> file in our project root with the following contents:</p><pre><code class="language-json">{
"presets":["react-app"],
"plugins": [
["react-intl", {
"messagesDir": "./public/messages/"
}]
]
}</code></pre><p>Now that babel can use our fancy new plugin that we just added, we can move onto our next step: generating those JSON files.</p><pre><code>$ npm run build</code></pre><p>Once you run this, you should notice that you have a <code>public/messages/src</code> directory that appears to be a clone of your original <code>src</code> directory, except all your component files are actually JSON files.</p><pre><code>/messages
/src
/components
Weather.json
/pages
Home.json
Day.json</code></pre><p>Now, let’s see the contents of one of them, Home.json:</p><pre><code class="language-json">[
{
"id": "Home.header",
"defaultMessage": "Hello, world!"
},
{
"id": "Home.dayMessage",
"defaultMessage": "It's a beautiful day outside."
},
{
"id": "Home.dayLink",
"defaultMessage": "Click here to find out why!"
}
]</code></pre><p>The state of the project up until now can be found <a href="https://github.com/austintackaberry/i18n-example/commit/5eec540f62ace18e3b34a48ef94599c6f1820470" rel="noopener">here</a>.</p><h3 id="combining-the-json-files">Combining the JSON files</h3><p>It did just what we thought it would. It can be helpful to have our content organized in this structure, but ultimately we will want it to be in one file, and we need it to include any translations that we will make.</p><p>Now we need to make a script that does this for us. Thankfully, the folks at <code>react-intl</code> gave us a good starting point with <a href="https://github.com/yahoo/react-intl/blob/master/examples/translations/scripts/translate.js" rel="noopener">this script</a>.</p><pre><code class="language-js">import * as fs from "fs";
import { sync as globSync } from "glob";
import { sync as mkdirpSync } from "mkdirp";
import last from "lodash/last";
const MESSAGES_PATTERN = "./public/messages/**/*.json";
const LANG_DIR = "./public/locales/";
const LANG_PATTERN = "./public/locales/*.json";
// Try to delete current json files from public/locales
try {
fs.unlinkSync("./public/locales/data.json");
} catch (error) {
console.log(error);
}
// Merge translated json files (es.json, fr.json, etc) into one object
// so that they can be merged with the eggregated "en" object below
const mergedTranslations = globSync(LANG_PATTERN)
.map(filename =&gt; {
const locale = last(filename.split("/")).split(".json")[0];
return { [locale]: JSON.parse(fs.readFileSync(filename, "utf8")) };
})
.reduce((acc, localeObj) =&gt; {
return { ...acc, ...localeObj };
}, {});
// Aggregates the default messages that were extracted from the example app's
// React components via the React Intl Babel plugin. An error will be thrown if
// there are messages in different components that use the same `id`. The result
// is a flat collection of `id: message` pairs for the app's default locale.
const defaultMessages = globSync(MESSAGES_PATTERN)
.map(filename =&gt; fs.readFileSync(filename, "utf8"))
.map(file =&gt; JSON.parse(file))
.reduce((collection, descriptors) =&gt; {
descriptors.forEach(({ id, defaultMessage }) =&gt; {
if (collection.hasOwnProperty(id)) {
throw new Error(`Duplicate message id: ${id}`);
}
collection[id] = defaultMessage;
});
return collection;
}, {});
// Create a new directory that we want to write the aggregate messages to
mkdirpSync(LANG_DIR);
// Merge aggregated default messages with the translated json files and
// write the messages to this directory
fs.writeFileSync(
`${LANG_DIR}data.json`,
JSON.stringify({ en: defaultMessages, ...mergedTranslations }, null, 2)
);</code></pre><p>We will need to modify it a little bit because, as it stands, that script will generate a fake translation. We don’t want this because it is not practical.</p><p>We are better than that! We want it to read a real translation!</p><p>The script we will use to do this is below:</p><p>We will need to save this file in our <code>scripts</code> directory and then edit <code>package.json</code> so that it actually runs the script.</p><p>Before we do that, we will need to do a couple things, so that our ESNext code can be understood. First we will need to add <code>babel-cli</code> to make sure that the script gets transpiled.</p><pre><code>$ npm install --save-dev babel-cli</code></pre><p>Next, we need to add the <code>env</code> preset to our <code>.babelrc</code> so that it looks like this:</p><pre><code class="language-json">{
"presets":["react-app", "env"],
"plugins": [
["react-intl", {
"messagesDir": "./public/messages/"
}]
]
}</code></pre><p>Lastly, we need to edit our <code>package.json</code> so that it runs our script:</p><pre><code class="language-json">{...
"scripts": {
"build:langs": "NODE_ENV='production' babel-node
scripts/mergeMessages.js",
"build": "npm run build:langs &amp;&amp; node scripts/build.js",
...
},
...
}</code></pre><p>Note that we are running the mergeMessages script before <code>npm run build</code> . This is because we want to generate our final <code>data.json</code> file in the <code>/public</code> directory before our build script copies it over to <code>/build</code> .</p><p>Alright, now when we run <code>npm run build</code> we should see <code>build/locales/data.json</code> which combines all of our JSON files into one.</p><p>The state of the project up until now can be found <a href="https://github.com/austintackaberry/i18n-example/commit/47fe4a87b74f1318337ee13f459725cb45124149" rel="noopener">here</a>.</p><h3 id="time-to-start-translating">Time to start translating</h3><p>Now that we have made a script that will aggregate our default messages and our translations into one file, let’s make some translations! For this example, we will translate to Spanish. Our script that we just created will read all <code>*.json</code> files from <code>/public/locales</code> so we will need to name our new translation file <code>/public/locales/es.json</code> and add the content below:</p><pre><code class="language-json">{
"Weather.message": "¡Porque es soleado!",
"Day.homeLink": "Regresar a inicio",
"Home.header": "¡Hola Mundo!",
"Home.dayMessage": "Es un hermoso día afuera.",
"Home.dayLink": "¡Haz clic aquí para averiguar por qué!"
}</code></pre><p>Now when we run <code>npm run build</code>, our mergeMessages script will create a <code>data.json</code> file in <code>/public/locales</code> , and then it will be copied over to <code>/build/locales</code>. Our final <code>data.json</code> file will look like this:</p><pre><code class="language-json">{
"en": {
"Weather.message": "Because it is sunny!",
"Day.homeLink": "Go back home",
"Home.header": "Hello, world!",
"Home.dayMessage": "It's a beautiful day outside.",
"Home.dayLink": "Click here to find out why!"
},
"es": {
"Weather.message": "¡Porque es soleado!",
"Day.homeLink": "Regresar a inicio",
"Home.header": "¡Hola Mundo!",
"Home.dayMessage": "Es un hermoso día afuera.",
"Home.dayLink": "¡Haz clic aquí para averiguar por qué!"
}
}</code></pre><p>We’re almost there! The last step is to dynamically load the Spanish version of the text if the user’s browser settings are Spanish. We need to edit <code>index.js</code> to read the browser language settings and then give that information along with the correct translations to <code>&lt;IntlProvider</code> /&gt; and ultimately our app.</p><p>Our final <code>index.js</code> looks like this:</p><pre><code class="language-js">import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";
import localeData from "./../build/locales/data.json";
addLocaleData([...en, ...es]);
// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const language =
(navigator.languages &amp;&amp; navigator.languages[0]) ||
navigator.language ||
navigator.userLanguage;
// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
// Try full locale, try locale without region code, fallback to 'en'
const messages =
localeData[languageWithoutRegionCode] ||
localeData[language] ||
localeData.en;
ReactDOM.render(
&lt;IntlProvider locale={language} messages={messages}&gt;
&lt;BrowserRouter&gt;
&lt;App /&gt;
&lt;/BrowserRouter&gt;
&lt;/IntlProvider&gt;,
document.getElementById("root")
);
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
