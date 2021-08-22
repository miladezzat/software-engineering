---
card: "https://cdn-media-1.freecodecamp.org/images/1*uNX5QUpeczuU_CjXouZxnA.jpeg"
tags: [JavaScript]
description: by Samuel Teboul
author: "Milad E. Fahmy"
title: "How to configure Webpack 4 with Angular 7: a complete guide"
created: "2021-08-15T19:38:18+02:00"
modified: "2021-08-15T19:38:18+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-typescript tag-webpack tag-angular tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to configure Webpack 4 with Angular 7: a complete guide</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*uNX5QUpeczuU_CjXouZxnA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*uNX5QUpeczuU_CjXouZxnA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*uNX5QUpeczuU_CjXouZxnA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*uNX5QUpeczuU_CjXouZxnA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*uNX5QUpeczuU_CjXouZxnA.jpeg" alt="How to configure Webpack 4 with Angular 7: a complete guide">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Samuel Teboul</p>
<h1 id="how-to-configure-webpack-4-with-angular-7-a-complete-guide">How to configure Webpack 4 with Angular 7: a complete guide</h1>
<figcaption>Angular &amp; webpack logos</figcaption>
</figure>
<p>The Angular CLI makes it easy to create an application that already works, right out of the box. It is a great tool, but have you never thought: <em>"How does it work? How can I build an application without the CLI?"</em></p>
<p>Those questions came to my mind when Angular 7 was released. I started to look for answers on the web and what I found was not up-to-date for my purpose. Indeed, as Angular and webpack are always evolving, so dependencies and configurations.</p>
<p>In this article you are about to learn:</p>
<ul>
<li>How to setup an Angular 7 basic application, from scratch</li>
<li>How to configure webpack for development mode (Just-in-Time compilation)</li>
<li>How to configure webpack for production mode (Ahead-of-Time compilation)</li>
</ul>
<h3 id="angular-7-setup-a-basic-app">Angular 7: setup a basic app</h3>
<p>Create a new <code>package.json</code> file and add the following lines to install Angular and its dependencies.</p><pre><code class="language-json">"dependencies":
"@angular/animations": "~7.0",
"@angular/common": "~7.0",
"@angular/compiler": "~7.0",
"@angular/compiler-cli": "~7.0",
"@angular/core": "~7.0",
"@angular/forms": "~7.0",
"@angular/http": "~7.0",
"@angular/platform-browser": "~7.0",
"@angular/platform-browser-dynamic": "~7.0",
"@angular/platform-server": "~7.0",
"@angular/router": "~7.0",
"@angular/upgrade": "~7.0",
"core-js": "~2.5",
"rxjs": "~6.3",
"zone.js": "~0.8"
}</code></pre>
<p>I have struggled for a long time to find the best folder structure that fits every Angular project, especially when the application grows in size. This <a href="https://medium.com/@motcowley/angular-folder-structure-d1809be95542" rel="noopener">article</a> has taught me a lot on the subject.</p>
<p>Create a new <code>src</code> folder and the following folders/files inside it. All our Angular app business logic will be in this folder.</p><pre><code class="language-bash">src
|__ app
|__ modules
|__ menu
|__ components
|__ menu
|__ menu.component.html
|__ menu.component.scss
|__ menu.component.ts
|__ menu.module.ts
|__ menu-routing.module.ts
|__ shared
|__ components
|__ home
|__ home.component.html
|__ home.component.scss
|__ home.component.ts
|__ app.component.html
|__ app.component.scss
|__ app.component.ts
|__ app.module.ts
|__ app-routing.module.ts
|__ index.html
|__ main.ts</code></pre>
<p>Every application has at least one Angular module, the <em>root</em> module that you bootstrap to launch the application. By convention, it is usually called <code>AppModule</code>. I create another module, the <code>MenuModule </code>to show you how you can use lazy loading in your project, especially for production.</p>
<p>Some important points :</p>
<ul>
<li><code>index.html</code></li>
</ul>
<p>Add <code>&lt;base href=”/”&gt;</code> tells our Angular router how to compose navigation URLs . This line means that your app will start from root folder i.e locally it would consider <code>localhost:3000/</code> and on server it would consider root folder.</p>
<ul>
<li><code>app-routing.module.ts</code></li>
</ul>
<p>There are three main steps to setting up a lazy loaded feature module:</p>
<ol>
<li>Create the feature module</li>
<li>Create the feature module’s routing module</li>
<li>Configure the routes</li>
</ol>
<p><code>{path: ‘menu’, loadChildren:’./modules/menu/menu.module#MenuModule’}</code> tells Angular to lazy load our feature module <code>MenuModule</code> by the time the user visit the <code>/menu</code> route.</p>
<h3 id="typescript-configuration">TypeScript configuration</h3>
<p>Add the following lines to your <code>package.json</code> file:</p><pre><code class="language-json">"devDependencies": {
"@types/core-js": "~2.5",
"@types/node": "~10.12",
"typescript": "~3.1"
}</code></pre>
<p>Create in your root project folder a <code>tsconfig.json</code> file:</p><pre><code class="language-json">{
"compilerOptions": {
"target": "es5",
"module": "commonjs",
"moduleResolution": "node",
"sourceMap": true,
"emitDecoratorMetadata": true,
"experimentalDecorators": true,
"noImplicitAny": true,
"suppressImplicitAnyIndexErrors": true,
"lib": ["es6", "dom"],
"typeRoots": ["node_modules/@types"]
},
"exclude": ["node_modules"]
}</code></pre>
<p>This is a basic TypeScript configuration file. It’s essential to install <code>node</code> and <code>core-js</code> types definition. Without it, TypeScript won’t be able to compile our Angular application to JavaScript.</p>
<h3 id="webpack-configuration-for-development-mode-just-in-time-compilation-">Webpack configuration for development mode (Just-in-Time compilation)</h3>
<p>First of all, what does <em>compilation</em> means ? It doesn’t mean compiling TypeScript files to JavaScript, this is not related to Angular. Angular itself needs to compile your HTML templates into JavaScript and this can occurred at 2 different points of time:</p>
<ul>
<li>After your app is downloaded in the Browser (JiT)</li>
</ul>
<figcaption>JiT compilation</figcaption>
</figure>
<ul>
<li>Right after development, at build time, before your app is downloaded in the Browser (AoT)</li>
</ul>
<h4 id="what-is-webpack">What is webpack?</h4>
<p>According to Wikipedia:</p>
<blockquote>Webpack is an open source JavaScript module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset. Webpack takes modules with dependencies and generates static assets representing those modules. It’s a module bundler primarily for JavaScript, but it can transform front-end assets like HTML, CSS, even images if the corresponding plugins are included.</blockquote>
<p>To tell webpack how to bundle our application we have to configure what we call the<em> <a href="https://webpack.js.org/concepts/" rel="noopener">Core Concepts</a></em>:</p>
<p><strong>Entry — </strong>An entry point indicates which module webpack should use to begin building out its internal <a href="https://webpack.js.org/concepts/dependency-graph/" rel="noopener">dependency graph</a>. Webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly).</p>
<p><strong>Output — </strong>The output property tells webpack where to emit the bundles it creates and how to name these files. It defaults to <code>./dist/main.js</code> for the main output file and to the <code>./dist</code> folder for any other generated file.</p>
<p><strong>Loaders — </strong>At a high level, loaders have two properties in your webpack configuration:</p>
<ul>
<li>The test property identifies which file or files should be transformed.</li>
<li>The use property indicates which loader should be used to do the transforming.</li>
</ul>
<p><strong>Plugins — </strong>While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management, and injection of environment variables.</p>
<p>All of these must be set up in the webpack configuration file <code>webpack.config.js.</code></p>
<h4 id="configuring-webpack">Configuring webpack</h4>
<p>In the <code>src</code> folder we need to create 2 more files:</p>
<ul>
<li><code>vendor.ts</code> that only imports the application's third-party modules.</li>
<li><code>polyfills.ts</code> we need polyfills to run an Angular application in most browsers as explained in the <a href="https://v5.angular.io/guide/browser-support" rel="noopener">Browser Support</a> guide. This bundle file will load first so this is a good place to configure the browser environment for production or development.</li>
</ul>
<p>Create a new <code>config</code> folder and the following files inside:</p>
<ul>
<li><code>webpack.config.common.js</code> : configuration that we will use for development and production.</li>
</ul>
<p><strong>Entry — </strong>For this application (and for most of them actually) we have 3 different entry points : <code>vendor.ts</code> <code>polyfills.ts</code> and <code>main.ts.</code></p><pre><code class="language-json">entry: {
vendor: './src/vendor.ts',
polyfills: './src/polyfills.ts',
main: './src/main.ts'
}</code></pre>
<p><strong>Loaders — </strong>We load <code>.html</code> files with <code>html-loader</code> which is pretty standard. Loading <code>.scss</code> files is a bit tricky for an Angular app and I struggled for many hours to figure out how to do it.</p>
<p>First of all, we must load sass files by using two loaders <code>sass-loader </code>and <code>css-loader.</code> If you want to make debugging easy, especially in development mode, it’s really important to add <code>sourceMap: <strong>true</strong></code><strong> </strong>as options. In an Angular application we add styles to component by passing a file path to <code>styleUrls</code> array as follow <code>styleUrls: ["./path/styles.scss"]</code> but we need to have style as a string and <code>to-string-loader</code> will do it for us and cast the output to a string.</p><pre><code class="language-json">{
test: /\.html$/,
loader: 'html-loader'
},
{
test: /\.(scss|sass)$/,
use: [
'to-string-loader',
{
loader: 'css-loader',
options: {
sourceMap: true
}
},
{
loader: 'sass-loader',
options: {
sourceMap: true
}
}
],
include: helpers.root('src', 'app')
}</code></pre>
<p><strong>Plugins — </strong><code>CleanWebpackPlugin</code> will remove/clean your build folder(s) before building again. <code>HtmlWebpackPlugin</code> plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags. It only requires path to the template.</p><pre><code class="language-js">new CleanWebpackPlugin(
helpers.root('dist'),
{
root: helpers.root(),
verbose: true
}
),
new HtmlWebpackPlugin({
template: 'src/index.html'
})</code></pre>
<ul>
<li><code>webpack.config.dev.js </code>is our webpack configuration that we will use for development mode only.</li>
</ul><pre><code class="language-js">mode: "development"</code></pre>
<p>In webpack 4, chosen mode tells webpack to use its built-in optimizations accordingly.</p><pre><code>devtool: 'cheap-module-eval-source-map'</code></pre>
<p>This option controls if and how source maps are generated. By using <code>cheap-module-eval-source-map</code> Source Maps from loaders are processed for better results. However, loader Source Maps are simplified to a single mapping per line.</p><pre><code class="language-js">output: {
path: helpers.root('dist'),
publicPath: '/',
filename: '[name].bundle.js',
chunkFilename: '[id].chunk.js'
}</code></pre>
<p>The <code>output</code> key contains a set of options instructing webpack on how and where it should output your bundles, assets and anything else you bundle or load with webpack. Here we tell webpack to output our bundles to the <code>dist</code> folder.</p><pre><code class="language-js">optimization: {
noEmitOnErrors: true
}</code></pre>
<p>Skips the emitting phase whenever there are errors while compiling. This ensures that no erroring assets are emitted. The <code>optimization</code> key has many others options that are set by default depending on your webpack configuration mode (development/production). You can read more about it <a href="https://webpack.js.org/configuration/optimization/#optimization-noemitonerrors" rel="noopener">here</a>.</p><pre><code class="language-json">{
test: /\.ts$/,
loaders: [
'babel-loader',
{
loader: 'awesome-typescript-loader',
options: {
configFileName: helpers.root('tsconfig.json')
}
},
'angular2-template-loader',
'angular-router-loader'
],
exclude: [/node_modules/]
}</code></pre>
<p><code>angular-router-loader</code> is a webpack loader that enables string-based module loading with the Angular Router.</p>
<p><code>angular2-template-loader</code> is a chain-to loader that inlines all html and styles in Angular components.</p>
<p><code>awesome-typescript-loader</code> is currently the faster webpack TypeScript loader. It uses dependency resolution to build modules dependency graph. This relatively speeds up the build process.</p>
<p><code>babel-loader</code> allows transpiling JavaScript files.</p><pre><code class="language-js">devServer: {
historyApiFallback: true,
stats: 'minimal'
}</code></pre>
<p>When using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/History" rel="noopener">HTML5 History API</a>, the <code>index.html</code> page will likely have to be served in place of any <code>404</code> responses. For that we need to enable <code>historyApiFallback.</code></p>
<p><code>stats</code> option lets you precisely control what bundle information gets displayed. This can be a nice middle ground if you want some bundle information, but not all of it.</p>
<h4 id="adding-scripts">Adding scripts</h4>
<p>Add the following lines to your <code>package.json</code> file:</p><pre><code class="language-json">"scripts": {
"build:dev": "webpack-dev-server --inline --hot --progress --port 8080"
}</code></pre>
<p><code>--hot</code> enables webpack Hot Module Replacement (HMR). It exchanges, adds, or removes <a href="https://webpack.js.org/concepts/modules/" rel="noopener">modules</a> while an application is running, without a full reload. This can significantly speed up development in a few ways:</p>
<ul>
<li>Retain application state which is lost during a full reload.</li>
<li>Save valuable development time by only updating what’s changed.</li>
<li>Modifications made to CSS/JS in the source code results in an instant browser update which is almost comparable to changing styles directly in the browser’s dev tools.</li>
</ul>
<p>Now you are all setup! You can run <code>npm run build:dev </code>open your browser and navigate to <code>localhost:8080.</code></p>
<h3 id="webpack-configuration-for-production-mode-ahead-of-time-compilation-">Webpack configuration for production mode (Ahead-of-Time compilation)</h3>
<h4 id="advantages-of-aot-compilation">Advantages of AoT compilation</h4>
<ul>
<li>With AoT, the browser downloads a pre-compiled version of the application. The browser loads executable code so it can render the application immediately, without waiting to compile the app first.</li>
<li>The compiler inlines external HTML templates and CSS style sheets within the application JavaScript, eliminating separate AJAX requests for those source files.</li>
<li>There’s no need to download the Angular compiler if the app is already compiled. The compiler is roughly half of Angular itself, so omitting it dramatically reduces the application payload.</li>
<li>The AoT compiler detects and reports template binding errors during the build step before users can see them.</li>
<li>AoT compiles HTML templates and components into JavaScript files long before they are served to the client. With no templates to read and no risky client-side HTML or JavaScript evaluation, there are fewer opportunities for injection attacks.</li>
</ul>
<h4 id="configuring-webpack-1">Configuring webpack</h4>
<p>In your <code>config</code> folder create a new file <code>webpack.config.prod.js</code></p><pre><code class="language-js">mode: 'production'</code></pre>
<p>We usually proceed to AoT compilation in production mode and, as I wrote previously, in webpack 4, chosen mode tells webpack to use its built-in optimizations accordingly.</p><pre><code class="language-js">output: {
path: helpers.root('dist'),
publicPath: '/',
filename: '[hash].js',
chunkFilename: '[id].[hash].chunk.js'
}</code></pre>
<p>We also tell webpack to output our bundles to the <code>dist </code>folder. We include a hash to the file names to leverage client level cache efficiently. This way webpack knows whether or not a file has changed. Webpack provides <strong>placeholders</strong> for this purpose. These strings are used to attach specific information to outputs. The most valuable ones are:</p>
<ul>
<li><code>[id]</code> returns the chunk id.</li>
<li><code>[path]</code> returns the file path.</li>
<li><code>[name]</code> returns the file name.</li>
<li><code>[ext]</code> returns the extension. <code>[ext]</code> works for most available fields.</li>
<li><code>[hash]</code> returns the build hash. If any portion of the build changes, this changes as well.</li>
<li><code>[chunkhash]</code> returns an entry chunk-specific hash. Each <code>entry</code> defined in the configuration receives a hash of its own. If any portion of the entry changes, the hash will change as well. <code>[chunkhash]</code> is more granular than <code>[hash]</code> by definition.</li>
<li><code>[contenthash]</code> returns a hash generated based on content.</li>
</ul>
<p>It’s preferable to use particularly <code>hash</code> and <code>chunkhash</code> only for production as hashing is not essential during development.</p><pre><code class="language-js">optimization: {
noEmitOnErrors: true,
splitChunks: {
chunks: 'all'
},
runtimeChunk: 'single',
minimizer: [
new UglifyJsPlugin({
cache: true,
parallel: true
}),
new OptimizeCSSAssetsPlugin({
cssProcessor: cssnano,
cssProcessorOptions: {
removeAll: true
}
},
canPrint: false
})
]
}</code></pre>
<ul>
<li>As in development mode, we want to skip the emitting phase whenever there are errors while compiling. This ensures that no erroring assets are emitted.</li>
<li><code>chunks: ‘all’</code> indicates which chunks will be selected for optimization. Providing <code>all</code> can be particularly powerful, because it means that chunks can be shared even between async and non-async chunks.</li>
<li>Imported modules are initialized for each runtime chunk separately. As <a href="https://webpack.js.org/configuration/optimization/#optimization-runtimechunk" rel="noopener">webpack</a> suggests, while working on a project with <strong>multiple entry points</strong> you want to have only one runtime instance. For that you need to set it to <code>‘single’</code>.</li>
<li><code>UglifyJsPlugin</code> uses <a href="https://github.com/mishoo/UglifyJS2" rel="noopener">uglify-js</a> to minify your JavaScript files. We set <code>cache</code> and <code>parallel</code> properties to <code>true</code> in order to enable file caching and to use multi-process parallel running to improve the build speed. There are more options available and I invite you to learn more about <a href="https://webpack.js.org/plugins/uglifyjs-webpack-plugin/" rel="noopener">this plugin</a>.</li>
<li><code>OptimizeCSSAssetsPlugin</code> will search for CSS assets during the webpack build and will optimize and minimize it. The CSS processor used for optimization is <code>cssnano.</code> All comments will be removed from our minified CSS and no messages will be print to the console.</li>
</ul><pre><code class="language-js">module: {
rules: [
{
test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
loader: '@ngtools/webpack'
}
]
}
plugins: [
new ngw.AngularCompilerPlugin({
tsConfigPath: helpers.root('tsconfig.aot.json'),
entryModule: helpers.root('src', 'app', 'modules', 'app', 'app.module#AppModule')
})
]</code></pre>
<p><code>@ngtools/webpack</code> is the official plugin that AoT compiles your Angular components and modules. The loader works with webpack plugin to compile your TypeScript. It’s important to include both, and to not include any other TypeScript compiler loader.</p>
<h4 id="adding-main-aot-ts-file">Adding main.aot.ts file</h4>
<p>In the <code>src</code> folder add <code>main.aot.ts</code> file:</p><pre><code class="language-ts">import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from './app/app.module.ngfactory';
enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);</code></pre>
<p>Your <code>main</code> entry is a bit different in production mode and AoT compilation:</p>
<ul>
<li>Import <code>enableProdMode</code> to disable Angular’s development mode, which turns off assertions and other checks within the framework.</li>
<li>Import <code>platformBrowser</code> <strong>AND NOT</strong> <code>platformBrowserDynamic</code> because in AoT compilation your application is shipped to the browser already compiled whereas in JiT compilation it occurs at the browser level.</li>
<li>Instead of importing <code>AppModule</code> you need to import <code>AppModuleFactory</code> which is your compiled application generated by our Angular compiler.</li>
</ul>
<h4 id="adding-scripts-1">Adding scripts</h4>
<p>Add the following scripts to your <code>package.json</code> file :</p><pre><code class="language-json">"webpack-prod": "cross-env NODE_ENV=production webpack --mode production"
"build:prod": "npm run build:clean &amp;&amp; ngc &amp;&amp; npm run webpack-prod &amp;&amp; npm run build:clean"
"build:clean": "del-cli 'src/**/*.js' 'src/**/*.js.map' 'src/**/*.ngsummary.json' 'src/**/*.metadata.json' 'src/**/**/*.ngfactory.ts' 'src/**/*.ngstyle.ts' 'src/**/*.shim.ts'"
"serve": "lite-server"</code></pre>
<ul>
<li><code>build:clean</code>: the Angular compiler generates many files in order to compile your application. To stay clean in our project, we delete all these files before compilation and after generating bundles.</li>
<li><code>build:prod</code>: run the Angular compiler with <code>ngc</code> command and then run webpack in production mode to generate your bundles.</li>
<li><code>serve</code>: I use lite-server to serve our application and see what it looks like. Of course, you won’t need it in a real world project because your app will be serve by the cloud.</li>
</ul>
<p>Now, you can run <code>npm run build:prod</code> to compile your Angular application and build your bundles. Then, run <code>npm run serve</code> to serve your app to the browser.</p>
<figcaption>Hugh Jackman enjoying the article</figcaption>
</figure>
<p>I hope you enjoyed this article! If you have any questions/suggestions, let me know in the comments below.</p>
<p>The project files are on my GitHub:</p>
<p><a href="https://github.com/samteb/Angular-7-Webpack-4" rel="noopener"><strong>samteb/Angular-7-Webpack-4</strong></a><br><a href="https://github.com/samteb/Angular-7-Webpack-4" rel="noopener"><em>Contribute to samteb/Angular-7-Webpack-4 development by creating an account on GitHub.</em>github.co</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
