---
card: "https://cdn-media-1.freecodecamp.org/images/1*3OpyAlDBIinyME_ro6wq3A.jpeg"
tags: [JavaScript]
description: Learning to write good code, but you don’t know where to star
author: "Milad E. Fahmy"
title: "These tools will help you write clean code"
created: "2021-08-15T19:40:52+02:00"
modified: "2021-08-15T19:40:52+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-tech tag-programming tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">These tools will help you write clean code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*3OpyAlDBIinyME_ro6wq3A.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*3OpyAlDBIinyME_ro6wq3A.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*3OpyAlDBIinyME_ro6wq3A.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*3OpyAlDBIinyME_ro6wq3A.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*3OpyAlDBIinyME_ro6wq3A.jpeg" alt="These tools will help you write clean code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h4 id="a-look-at-prettier-eslint-husky-lint-staged-and-editorconfig">A look at Prettier, ESLint, Husky, Lint-Staged and EditorConfig</h4>
<p>Learning to write good code, but you don’t know where to start… Going through style-guides like <a href="https://github.com/airbnb/javascript" rel="noopener">Airbnb’s Javascript Style Guide</a>… Trying to write code with best practices...</p>
<p>Removing dead code? Finding unused variables in the code base? Trying to find problematic patterns in your code? Like, does it <code>return</code> or not?</p>
<p>Any of this sound familiar?</p>
<p>With so much to learn and do all at the same time, it is just so hectic.</p>
<p>Are you a Team Lead managing a diverse team? Do you have new developers on the team? Do you worry that they’ll write code not up to standards? Does it take all of your day in code reviews, where the review is more on the code standards rather then the actual logic implementation?</p>
<p>I have been there and done that, and it just is so tiring and hectic.</p>
<p>Let’s promise to never worry again about how the code should look or getting your entire team to write code in a certain way that is linted and formatted properly.</p>
<p>Throughout this tutorial, if you get stuck, here is the <a href="https://github.com/adeelibr/react-starter-kit" rel="noopener">code repository</a>. Pull requests are welcome, if you have suggestions for improvements.</p>
<p>This tutorial is catered more towards React applications, but the same can be applied on any web project.</p>
<p>Also the editor I am using for this tutorial is <a href="https://code.visualstudio.com/" rel="noopener">VS Code</a>. It’s by <a href="https://www.microsoft.com/en-us/" rel="noopener">Microsoft</a> and ever since they have been into open source, I have been in ❤ with this company (although there was a time when I wasn’t).</p>
<h3 id="agenda">Agenda</h3>
<ul>
<li>Prettier</li>
<li>ESLint</li>
<li>Automate Format and Lint on Save</li>
<li>Husky</li>
<li>Lint-staged</li>
<li>With Husky and Lint-staged Combined</li>
<li>EditorConfig</li>
</ul>
<h3 id="let-s-start-with-prettier">Let’s start with Prettier</h3>
<h4 id="what-is-prettier"><strong><em>What is Prettier?</em></strong></h4>
<p><a href="https://prettier.io/" rel="noopener">Prettier</a> is an opinionated code formatter. It formats code for you in a specific way.</p>
<p>This GIF pretty much explains it:</p>
<figcaption>Prettier formatting my code, like a boss!</figcaption>
</figure>
<h4 id="why-do-we-need-it"><strong><em>Why do we need it?</em></strong></h4>
<ul>
<li><strong>Cleans up existing code base</strong>: on a single command line. Imagine cleaning a code base with over 20,000 lines of code.</li>
<li><strong>Easy to adopt</strong>: Prettier uses the least controversial coding style while formatting your code. Since it’s open source, many folks have worked on several iterations of it in fixing some edge cases and polishing the experience.</li>
<li><strong>Writing code</strong>: What people don’t realize is that they spend a lot of time formatting code and wasting their mental energy doing so. Let Prettier handle it while <em>you </em>focus on the core business logic. On a personal note, Prettier has increased my efficiency by 10%.</li>
<li><strong>Helping Newbie Developers</strong>:<strong> </strong>If you are a new developer working side by side with great engineers and you want to look <em>cool </em>writing clean code, be smart! Use Prettier.</li>
</ul>
<h4 id="how-do-i-set-it-up"><strong><em>How do I set it up?</em></strong></h4>
<p>Create a folder called <code>app</code> and inside that folder type on the command line:</p><pre><code>npm init -y</code></pre>
<p>This will create a <code>package.json</code> file for you inside the <code>app</code> folder.</p>
<p>Now, I am going to use <code>yarn</code> throughout this tutorial, but you can use <code>npm</code> as well.</p>
<p>Let’s install our first dependency:</p><pre><code>yarn add --dev prettier</code></pre>
<p>This will install a dev dependency in your <code>package.json</code> which will look like this:</p>
"name": "react-boiler-plate",
"version": "1.0.0",
"description": "A react boiler plate",
"main": "src/index.js",
"author": "Adeel Imran",
"license": "MIT",
"scripts": {
"prettier": "prettier --write src/**/*.js"
},
"devDependencies": {
"prettier": "^1.14.3"
}
}</code></pre>
<figcaption>package.json - Adding prettier to out devDependencies</figcaption>
</figure>
<p>I’ll talk in a second what this <code>“prettier”: “prettier — write src/**/*.js”</code> does, but first let’s create a <code>src/</code> folder inside our <code>app</code> folder. And inside the <code>src/</code> folder let’s create a file called <code>index.js</code> — you can call it whatever you want.</p>
<p>In the <code>index.js</code> file, paste this code as it is:</p>
name: "Yoda",
designation: 'Jedi Master '
};
function trainJedi (jediWarrion) {
if (jediWarrion.name === 'Yoda') {
console.log('No need! already trained');
}
console.log(`Training ${jediWarrion.name} complete`)
}
trainJedi(person)
trainJedi({ name: 'Adeel',
designation: 'padawan'
});</code></pre>
<figcaption>index.js - I know this is ugly! Super ugly. But there is sanity in the midst of chaos. Bear with me.</figcaption>
</figure>
<p>So up till now we have a <code>src/app/index.js</code> file with some ugly code written in it.</p>
<p>There are 3 things we can do about it:</p>
<ul>
<li>Manually indent and format this code</li>
<li>Use an automated tool</li>
<li>Let things go and move on (Please don’t choose this option)</li>
</ul>
<p>I am going to go for the second option. So now we have a dependency installed and a Prettier script written in our <code>package.json</code>.</p>
<p>Let’s create a <code>prettier.config.js</code> file in our root <code>app</code> folder, and add some prettier rules to it:</p>
printWidth: 100,
singleQuote: true,
trailingComma: 'all',
bracketSpacing: true,
jsxBracketSameLine: false,
tabWidth: 2,
semi: true,
};</code></pre>
<figcaption>prettier.config.js</figcaption>
</figure>
<p><code>printWidth</code> will ensure that your code does not exceed more then 100 characters.</p>
<p><code>singleQuote</code><strong> </strong>will convert all your double quotes into single quotes. <br>Read more in the Airbnb JavaScript Style Guide <a href="https://github.com/airbnb/javascript" rel="noopener">here</a>. This guide is my playbook for writing good code and impressing my colleagues.</p>
<p><code>trailingComma</code><strong> </strong>will ensure there is a dangling comma at the end of last object property. <a href="https://twitter.com/nikgraf" rel="noopener">Nik Graf</a> explains this in such a cool way <a href="https://medium.com/@nikgraf/why-you-should-enforce-dangling-commas-for-multiline-statements-d034c98e36f8" rel="noopener">here</a><em>.</em></p>
<p><code>bracketSpacing</code><strong> </strong>prints spaces between object literals:</p><pre><code>If bracketSpacing is true - Example: { foo: bar }If bracketSpacing is false - Example: {foo: bar}</code></pre>
<p><code>jsxBracketSameLine</code><strong> </strong>will put <code>&amp;</code>gt; of a multi line JSX element on the last line:</p>
&lt;button
className="prettier-class"
id="prettier-id"
onClick={this.handleClick}&gt;
Click Here
&lt;/button&gt;
// false example
&lt;button
className="prettier-class"
id="prettier-id"
onClick={this.handleClick}
&gt;
Click Here
&lt;/button&gt;</code></pre>
<figcaption>jsxBracketSameLine.example.js</figcaption>
</figure>
<p><code>tabWidth</code><strong> </strong>specifies the number of spaces per indentation level.</p>
<p><code>semi</code><strong> </strong>if true will print <code>;</code> at the end statements.</p>
<p>Here is a list of all the <a href="https://prettier.io/docs/en/options.html" rel="noopener">options</a> that you can give Prettier.</p>
<p>Now that we have the configuration set up, let’s talk about this script:</p><pre><code>“prettier”: “prettier  — write src/**/*.js”</code></pre>
<p>In the script above, I am running <code>prettier</code> and telling it to find all <code>.js</code> files in my <code>src/</code> folder. The <code>--write</code> flag tells <code>prettier</code> to save the formatted files as it goes through each file and finds any anomaly in the code formation.</p>
<p>Let’s run this script in your terminal:</p><pre><code>yarn prettier</code></pre>
<p>This is what happens to my code when I run it:</p>
<figcaption>Cool, right?</figcaption>
</figure>
<p>If you got stuck, feel free to have a look at the <a href="https://github.com/adeelibr/react-starter" rel="noopener">repository</a><strong> </strong>for this.</p>
<p>This pretty much concludes our Prettier<strong> </strong>discussion. Let’s talk about linters.</p>
<h3 id="eslint">ESLint</h3>
<h4 id="what-is-a-code-linter"><strong><em>What is a code linter?</em></strong></h4>
<blockquote>Code <a href="https://en.wikipedia.org/wiki/Lint_(software)" rel="noopener">linting</a> is a type of static analysis that is frequently used to find problematic patterns or code that doesn’t adhere to certain style guidelines. There are code linters for most programming languages, and compilers sometimes incorporate linting into the compilation process. — <a href="https://eslint.org/docs/about/" rel="noopener">ESLint</a></blockquote>
<h4 id="why-do-we-need-one-for-javascript"><strong><em>Why do we need one for JavaScript?</em></strong></h4>
<p>Since JavaScript is dynamic and a loosely typed <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures" rel="noopener">language</a>, it is prone to developer errors. Without the benefit of a compilation process, <code>.js</code> files are typically executed in order to find syntax or other errors.</p>
<p>Linting tools like <a href="https://eslint.org/" rel="noopener">ESLint</a><strong><em> </em></strong>allow developers to find problems with their JavaScript code without executing it.</p>
<h4 id="what-makes-eslint-so-special"><strong><em>What makes ESLint so special?</em></strong></h4>
<p>Good question! Everything in ESLint is pluggable. You can add rules on run time — the rules and formatter don’t have to be bundled to be used. Every linting rule you add is stand alone, any rule can be turned on or off. Each rule can be set to a warning or an error. Your choice.</p>
<p>Using ESLint, you get complete customization of how you want your style guide to look.</p>
<p>Now there are 2 popular style guides out there at the moment:</p>
<ul>
<li><a href="https://google.github.io/styleguide/jsguide.html" rel="noopener">Google JavaScript Style Guide</a></li>
<li><a href="https://github.com/airbnb/javascript#table-of-contents" rel="noopener">Airbnb JavaScript Style Guide</a></li>
</ul>
<p>I have personally been using Airbnb’s Style Guide. This was recommended to me by my head of engineering in my last firm when I was starting out in my professional career, and this has been the most valuable asset at my disposal.</p>
<p>This style guide is actively maintained — check out their <a href="https://github.com/airbnb/javascript" rel="noopener">GitHub repo</a>. I’ll be using the rule sets inspired by Airbnb’s Style Guide throughout this tutorial. So let’s begin.</p>
<p>Let’s first update our <code>package.json</code> file:</p>
"name": "react-boiler-plate",
"version": "1.0.0",
"description": "A react boiler plate",
"main": "src/index.js",
"author": "Adeel Imran",
"license": "MIT",
"scripts": {
"lint": "eslint --debug src/",
"lint:write": "eslint --debug src/ --fix",
"prettier": "prettier --write src/**/*.js"
},
"husky": {
"hooks": {
"pre-commit": "lint-staged"
}
},
"lint-staged": {
"*.(js|jsx)": ["npm run lint:write", "git add"]
},
"devDependencies": {
"babel-eslint": "^8.2.3",
"eslint": "^4.19.1",
"eslint-config-airbnb": "^17.0.0",
"eslint-config-jest-enzyme": "^6.0.2",
"eslint-plugin-babel": "^5.1.0",
"eslint-plugin-import": "^2.12.0",
"eslint-plugin-jest": "^21.18.0",
"eslint-plugin-jsx-a11y": "^6.0.3",
"eslint-plugin-prettier": "^2.6.0",
"eslint-plugin-react": "^7.9.1",
"husky": "^1.1.2",
"lint-staged": "^7.3.0",
"prettier": "^1.14.3"
}
}</code></pre>
<figcaption>package.json</figcaption>
</figure>
<p>Before heading forward with the configuration, I strongly believe that people should know what goes into their dependencies. So let’s talk about what each of these package does and then we can move forward with the configurations.</p>
<p><code>babel-eslint</code>:<strong> </strong>this package allows you to use lint on all <a href="https://babeljs.io/" rel="noopener">Babel</a> goodness easily. You don’t necessarily need this plugin if you are not using <a href="https://flow.org/" rel="noopener">Flow</a> or experimental features that are not yet supported by ESLint.</p>
<p><code>eslint</code>:<strong> </strong>this is the main tool that is needed for linting your code.</p>
<p><code>eslint-config-airbnb</code>: this package provides all the Airbnb’s ESLint configuration as an extensible shared configuration, which you can modify.</p>
<p><code>eslint-plugin-babel</code>:<strong> </strong>An <code>eslint</code> plugin companion to <code>babel-eslint</code>. <br><code>babel-eslint</code> does a great job at adapting <code>eslint</code> for use with Babel.</p>
<p><code>eslint-plugin-import</code>:<strong> </strong>This plugin intends to support linting of <code>ES2015+ (ES6+)</code> <code>import/export syntax,</code> and prevent issues with misspelling of file paths and import names. <a href="https://github.com/benmosher/eslint-plugin-import" rel="noopener">Read more</a><em>.</em></p>
<p><code>eslint-plugin-jsx-a11y</code>:<strong> </strong>linting rules in place for accessibility rules on JSX elements. Because <strong>accessibility is important!</strong></p>
<p><code>eslint-plugin-prettier</code>:<strong> </strong>This helps ESLint work smoothly with Prettier. So when Prettier formats code, it does it keeping our ESLint rules in mind.</p>
<p><code>eslint-plugin-react</code>:<strong> </strong>React-specific linting rules for ESLint.</p>
<p>Now this tutorial doesn’t talk much about unit testing for <a href="https://airbnb.io/enzyme/docs/guides/jest.html" rel="noopener">Jest/Enzyme</a>. But if you are using it, let’s add linting rules for them as well:</p>
<p><code>eslint-config-jest-enzyme</code>:<strong> </strong>This helps with React- and Enzyme-specific variables which are globalized. This lint config lets ESLint know about those globals and not warn about them — like the assertions <code>it</code> and <code>describe</code>.</p>
<p><code>eslint-plugin-jest</code>:<strong> </strong>ESLint plugin for Jest.</p>
<p><code>husky</code>:<strong> </strong>More on this later when in the automation section.</p>
<p><code>lint-staged:</code><strong> </strong>More on this later when in the automation section.</p>
<p>Now that we have a basic understanding, let’s begin;</p>
<p>Create a <code>.eslintrc.js</code> file in your root <code>app/</code> folder:</p>
env: {
es6: true,
browser: true,
node: true,
},
extends: ['airbnb', 'plugin:jest/recommended', 'jest-enzyme'],
plugins: [
'babel',
'import',
'jsx-a11y',
'react',
'prettier',
],
parser: 'babel-eslint',
parserOptions: {
ecmaVersion: 6,
sourceType: 'module',
ecmaFeatures: {
jsx: true
}
},
rules: {
'linebreak-style': 'off', // Don't play nicely with Windows.
'arrow-parens': 'off', // Incompatible with prettier
'object-curly-newline': 'off', // Incompatible with prettier
'no-mixed-operators': 'off', // Incompatible with prettier
'arrow-body-style': 'off', // Not our taste?
'function-paren-newline': 'off', // Incompatible with prettier
'no-plusplus': 'off',
'space-before-function-paren': 0, // Incompatible with prettier
'max-len': ['error', 100, 2, { ignoreUrls: true, }], // airbnb is allowing some edge cases
'no-console': 'error', // airbnb is using warn
'no-alert': 'error', // airbnb is using warn
'no-param-reassign': 'off', // Not our taste?
"radix": "off", // parseInt, parseFloat radix turned off. Not my taste.
'react/require-default-props': 'off', // airbnb use error
'react/forbid-prop-types': 'off', // airbnb use error
'react/jsx-filename-extension': ['error', { extensions: ['.js'] }], // airbnb is using .jsx
'prefer-destructuring': 'off',
'react/no-find-dom-node': 'off', // I don't know
'react/no-did-mount-set-state': 'off',
'react/no-unused-prop-types': 'off', // Is still buggy
'react/jsx-one-expression-per-line': 'off',
"jsx-a11y/anchor-is-valid": ["error", { "components": ["Link"], "specialLink": ["to"] }],
"jsx-a11y/label-has-for": [2, {
"required": {
"every": ["id"]
}
}], // for nested label htmlFor error
'prettier/prettier': ['error'],
},
};</code></pre>
<figcaption>.eslintrc.js</figcaption>
</figure>
<p>Also add a <code>.eslintignore</code> file in your root <code>app/</code> directory:</p><pre><code>/.git
/.vscode
node_modules</code></pre>
<p>Let’s start by discussing what a <code>.eslintrc.js</code> file does.</p>
<p>Let’s break it down:</p><pre><code class="language-javascript">module.exports = {
env:{},
extends: {},
plugin: {},
parser: {},
parserOptions: {},
rules: {},
};</code></pre>
<ul>
<li><code>env:</code><strong> </strong>An environment defines global variables that are predefined. The available environments — in our case it is <code>es6</code>, <code>browser</code> and <code>node</code>. <br><code>es6</code><strong> </strong>will enable all ECMAScript 6 features except for modules (this automatically sets the <code>ecmaVersion</code> parser option to 6). <br><code>browser</code><strong> </strong>will add all browser global variables such as <code>Windows</code>.<br><em> </em><code>node</code><strong> </strong>will add Node global variables and Node scoping, such as <code>global</code>. You can<a href="https://eslint.org/docs/user-guide/configuring#specifying-environments" rel="noopener"> read more</a> on specifying environments.</li>
<li><code>extends:</code><strong> </strong>An array of strings — each additional configuration extends the preceding configurations. <br>Right now we are using the linting rules by <code>airbnb</code> which are extended to <code>jest</code> and then extended to <code>jest-enzyme</code>.</li>
<li><code>plugins:</code><strong> </strong>plugins are basically linting rules that we want to use. <br>Right now we are using <code>babel, import, jsx-a11y, react, prettier</code>, all of which I have explained above.</li>
<li><code>parser:</code><strong> </strong>By default ESLint uses <a href="https://github.com/eslint/espree" rel="noopener">Espree</a>, but since we are using <code>babel</code>, we need to use <a href="https://www.npmjs.com/package/babel-eslint" rel="noopener">Babel-ESLint</a>.</li>
<li><code>parserOptions:</code><strong> </strong>When we change the default parser for <code>Espree</code> to <code>babel-eslint</code> , we need to specify <code>parserOptions</code> — it is required. <br>In the options I tell ESLint that <code>ecmaVersion</code> is going to lint version <code>6</code>. Since we are writing our code in an EcmaScript <code>module</code> and not a <code>script</code> we specify <code>sourceType</code> as <code>module</code>. <br>Since we are using React which brings in JSX, in <code>ecmaFeatures</code> I pass it an option of <code>jsx</code> and set it to <code>true</code>.</li>
<li><code>rules:</code><strong> </strong>This is the part which I love the most about ESLint, the customization. <br>All the rules that we have extended and added with our plugins, we can change or override. <code>rules</code> is the place where you do it. I have already put comments in the Gist against each rule and for your understanding.</li>
</ul>
<p>Now that’s cleared up, let’s talk about <code>.eslintignore</code></p>
<p><code>.eslintignore</code><strong> </strong>takes a list of paths that we want ESLint to not lint. Here I specify only three:</p>
<ul>
<li><code>/.git</code> I don’t want my Git-related files to be linted.</li>
<li><code>/.vscode</code> Since I am using VS Code, this editor comes in with it’s own configuration that you can set for each project. I don’t want my configuration(s) to be linted. I use VS Code because it is lightweight and open source.</li>
<li><code>node_modules</code> I don’t want my dependencies to get linted. So I have added this to the list.</li>
</ul>
<p>Now that we are done with that, let’s talk about the newly added scripts to our <code>package.json</code></p><pre><code>"lint": "eslint --debug src/"
"lint:write": "eslint --debug src/ --fix"</code></pre>
<ul>
<li><code>$ yarn lint</code> running this command, it will go through all of your files in <code>src/</code> and will give you a detail log in each file where it finds errors, which you can then go in manually and correct them out.</li>
</ul>
<figcaption>running<strong> yarn lint | npm run lint</strong></figcaption>
</figure>
<ul>
<li><code>$ yarn lint:write</code> running the command, it will do the same as what the above command does. The only addition is that if it can correct any of the errors it sees, it is going to correct them and try to remove as much code smell from your code as it can.</li>
</ul>
<p>If you get stuck, feel free to have a look at the <a href="https://github.com/adeelibr/react-starter" rel="noopener"><strong>repository</strong></a><strong> </strong>for this.</p>
<p>That was a bit hectic and if you have followed along so far:</p>
<figcaption>Professor Snape is proud of you. Good job.</figcaption>
</figure>
<h3 id="let-s-automate-a-bit-more">Let’s Automate A Bit More</h3>
<p>So far we have <code>prettier</code> and <code>eslint</code> setup, but every time we have to run a script. Let’s do something about it.</p>
<ul>
<li>Format and Lint Code on hitting <code>ctrl+s</code> in your editor.</li>
<li>Every time you commit your code, execute a pre-command automatically that lints and formats your code.</li>
</ul>
<h4 id="format-and-lint-code-on-save">Format and Lint Code On Save</h4>
<p>For this you need to use an editor like <a href="https://code.visualstudio.com/" rel="noopener">VS Code</a>:</p>
<ul>
<li>Install a plugin called ESLint extension.<br><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" rel="noopener">Download here</a> or press <code>ctrl+shift+x</code> in your VS Code editor. This will open up the extensions module. There, search type <code>eslint</code>. A list of plugins will appear. Install the one by <code>Dirk Baeumer</code>. Once that is installed hit the <code>reload</code> button to restart your editor.</li>
</ul>
<p>Once you have this plugin installed, in your root <code>app/</code> folder create a folder called <code>.vscode/</code> — the (dot) is important in the filename.</p>
<p>Inside the folder create a <code>settings.json</code> file like below:</p>
"editor.formatOnSave": false,
"eslint.autoFixOnSave": true,
}</code></pre>
<figcaption>settings.json</figcaption>
</figure>
<ul>
<li><code>editor.formatOnSave</code> I have set the value to <code>false</code> here because I don’t want the default editor configuration for file format to conflict with ESLint and Prettier.</li>
<li><code>eslint.autoFixOnSave</code> I have set the value to <code>true</code><strong> </strong>here because I want the installed plugin to work every time I hit save. Since ESLint<strong><em> </em></strong>is configured with Prettier<strong><em> </em></strong>configurations, every time you hit <code>save</code> it will format and lint your code.</li>
</ul>
<p>Also important thing to note here is that when you run the script<br><code>yarn lint:write</code> now it will lint and prettify your code on the same go.</p>
<p>Just imagine if you where handed a code base of 20k lines of code to audit and improve. Now imagine doing it manually. Improving unknown code. Now imagine doing it with a single command. The manual approach might take 30 days...while the automatic approach will take you 30 seconds.</p>
<p>So the scripts are set up, and every time you hit <code>save</code><strong> </strong>the editor will do the magic for you for that specific file. But not everyone in your team will opt for VS Code and that’s okay. So let’s automate a bit more.</p>
<h3 id="husky">Husky</h3>
<h4 id="what-is-husky">What is husky?</h4>
<p><a href="https://github.com/typicode/husky" rel="noopener">Husky</a> basically let’s you Git hook. That means you can perform some certain actions when you are about to commit or when you are about to push code to a branch.</p>
<p>All you have to do is install Husky:</p><pre><code>yarn add --dev husky</code></pre>
<p>and in your <code>package.json</code> file add the snippet:</p><pre><code>"husky": {
"hooks": {
"pre-commit": "YOUR_COMMAND_HERE",
"pre-push": "YOUR_COMMAND_HERE"
}
},</code></pre>
<p>So every time you commit or push, it will execute a certain script or command — like run test cases or format your code.</p>
<p>You can read more on Husky <a href="https://github.com/typicode/husky#install" rel="noopener">here</a>.</p>
<h3 id="lint-staged">Lint-staged</h3>
<h4 id="what-is-lint-staged"><strong><em>What is Lint-staged?</em></strong></h4>
<p><a href="https://github.com/okonet/lint-staged" rel="noopener">Lint-staged</a> helps you run linters on staged files, so that bad code doesn’t get pushed to your branch.</p>
<h4 id="why-lint-staged"><strong><em>Why Lint-staged?</em></strong></h4>
<p>Linting makes more sense when run before committing your code. By doing so you can ensure no errors go into the repository and enforce code style. But running a lint process on a whole project is slow and linting results can be irrelevant. Ultimately you only want to lint files that will be committed.</p>
<p>This project contains a script that will run arbitrary shell tasks with a list of staged files as an argument, filtered by a specified glob pattern. You can <a href="https://github.com/okonet/lint-staged#why" rel="noopener">read more here</a>.</p>
<p>All you have to is install Lint-staged:</p><pre><code>yarn add --dev lint-staged</code></pre>
<p>then in your <code>package.json</code> file add this:</p><pre><code>"lint-staged": {
"*.(js|jsx)": ["npm run lint:write", "git add"]
},</code></pre>
<p>What this command will do is run the <code>lint:write</code> command first and then add it in the staging area. It will run this command for only <code>.js</code> &amp; <code>.jsx</code> files, but you can do the same for other files as well if you want.</p>
<h4 id="with-husky-and-lint-staged-combined">With H<code>usky</code> and L<code>int-staged</code> combined</h4>
<p>Every time your commit your code, before committing your code, it will run a script called <code>lint-staged</code> which will run <code>npm run lint:write</code> which will lint and format your code — then add it to the staging area and then commit. Cool right?!</p>
<p>Your final <code>package.json </code>file should look like this. This is the same snippet I shared above:</p>
"name": "react-boiler-plate",
"version": "1.0.0",
"description": "A react boiler plate",
"main": "src/index.js",
"author": "Adeel Imran",
"license": "MIT",
"scripts": {
"lint": "eslint --debug src/",
"lint:write": "eslint --debug src/ --fix",
"prettier": "prettier --write src/**/*.js"
},
"husky": {
"hooks": {
"pre-commit": "lint-staged"
}
},
"lint-staged": {
"*.(js|jsx)": ["npm run lint:write", "git add"]
},
"devDependencies": {
"babel-eslint": "^8.2.3",
"eslint": "^4.19.1",
"eslint-config-airbnb": "^17.0.0",
"eslint-config-jest-enzyme": "^6.0.2",
"eslint-plugin-babel": "^5.1.0",
"eslint-plugin-import": "^2.12.0",
"eslint-plugin-jest": "^21.18.0",
"eslint-plugin-jsx-a11y": "^6.0.3",
"eslint-plugin-prettier": "^2.6.0",
"eslint-plugin-react": "^7.9.1",
"husky": "^1.1.2",
"lint-staged": "^7.3.0",
"prettier": "^1.14.3"
}
}</code></pre>
<figcaption>package.json</figcaption>
</figure>
<p>Now every time you do this:</p><pre><code>$ git add .$ git commit -m "some descriptive message here"</code></pre>
<p>It will lint and format your code based on all the rules put in the<br><code>.eslintrc.js</code> file. With this you can be sure that no bad code ever gets pushed to production.</p>
<p>With this section concluded, you now have <code>prettier</code>, <code>eslint</code> and <code>husky</code> integrated in your code base.</p>
<h3 id="let-s-talk-about-editorconfig">Let’s talk about EditorConfig</h3>
<p>First create a <code>.editorconfig</code> file in your root <code>app/</code> folder, and in that file paste the code below:</p>
# top-most EditorConfig file
root = true
[*.md]
trim_trailing_whitespace = false
[*.js]
trim_trailing_whitespace = true
# Unix-style newlines with a newline ending every file
[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
insert_final_newline = true
max_line_length = 100</code></pre>
<figcaption>.editorconfig</figcaption>
</figure>
<h4 id="so-what-is-editorconfig"><strong><em>So what is EditorConfig?</em></strong></h4>
<p>So not everyone is going to use VS Code — and you can’t enforce it, nor should you. In order to keep everyone on the same page in terms of what the defaults, such as <code>tab space </code>or <code>line ending</code> should be, we use<br><code>.editorconfig</code>. This actually helps enforce some certain rule sets.</p>
<p>Here is the list of all the editors that support <a href="https://editorconfig.org/" rel="noopener">EditorConfig</a>. The list of editors includes Web storm, App code, Atom, eclipse, emacs, bbedit and so many more.</p>
<p>The above configuration will do the following:</p>
<ul>
<li>trim trailing white spaces from <code>.md</code> &amp; <code>.js</code> files</li>
<li>set indent style to <code>space</code> instead of <code>tab</code></li>
<li>indent size to <code>2</code></li>
<li>end of line to be <code>lf</code> so that everyone, irrespective of their OS, has the same end of line. <a href="https://stackoverflow.com/questions/1552749/difference-between-cr-lf-lf-and-cr-line-break-types" rel="noopener">Read more here</a>.</li>
<li>there should be a new line at end of file</li>
<li>and the max line length should be <code>100</code> chars</li>
</ul>
<p>With all this configuration done and in place, you are now ready. If you want to see the <a href="https://github.com/adeelibr/react-starter-kit/" rel="noopener"><strong>source code</strong></a><strong> </strong>here it is<strong>.</strong></p>
<p>Also pull requests are welcome if you feel like you can improve anything in this repository.</p>
<p>If you liked my article, you should also check out my other article: <a href="https://medium.freecodecamp.org/how-to-combine-webpack-4-and-babel-7-to-create-a-fantastic-react-app-845797e036ff" rel="noopener"><strong>How to combine Webpack 4 and Babel 7 to create a fantastic React app</strong></a><strong> </strong>in which I talk about setting up Webpack and Babel for React.</p>
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
