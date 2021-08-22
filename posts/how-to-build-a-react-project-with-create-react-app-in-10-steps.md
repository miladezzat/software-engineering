---
card: "/images/default.jpg"
tags: [React]
description: The package Create React App makes creating and developing Re
author: "Milad E. Fahmy"
title: "How to Build a React Project with Create React App in 10 Steps"
created: "2021-08-15T19:27:18+02:00"
modified: "2021-08-15T19:27:18+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-create-react-app tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build a React Project with Create React App in 10 Steps</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/02/how-to-build-a-react-project-with-create-react-app-in-10-steps.png 300w,
/news/content/images/size/w600/2021/02/how-to-build-a-react-project-with-create-react-app-in-10-steps.png 600w,
/news/content/images/size/w1000/2021/02/how-to-build-a-react-project-with-create-react-app-in-10-steps.png 1000w,
/news/content/images/size/w2000/2021/02/how-to-build-a-react-project-with-create-react-app-in-10-steps.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/02/how-to-build-a-react-project-with-create-react-app-in-10-steps.png" alt="How to Build a React Project with Create React App in 10 Steps">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>The package Create React App makes creating and developing React apps a breeze.</p>
<p>It is one of the easiest ways to spin up a new React project and is an ideal choice to use for your own personal projects as well as for serious, large-scale applications.</p>
<p>We're going to cover, step-by-step, how to use all of the major features of Create React App to quickly and easily build your own React projects.</p>
<p>Throughout this guide, I've also included a lot of helpful tips I've learned through building apps with Create React App to make your workflow even easier.</p>
<p>Let's get started.</p>
<blockquote>Want to learn how to create impressive, production-ready apps with React using Create React App? Check out <a href="https://bit.ly/the-react-bootcamp">The React Bootcamp</a>.</blockquote>
<h3 id="tools-you-will-need-">Tools You Will Need:</h3>
<ul>
<li>Node installed on your computer. You can download Node at <a href="https://nodejs.org">nodejs.org</a>. Create React App requires a Node version of at least 10.</li>
<li>A package manager called npm. It is automatically included in your installation of Node. You need to have an npm version of at least 5.2.</li>
<li>A good code editor to work with our project files. I highly recommend using the editor Visual Studio Code. You can grab it at <a href="https://code.visualstudio.com">code.visualstudio.com</a>.</li>
</ul>
<h2 id="step-1-how-to-install-create-react-app">Step 1. How to Install Create React App</h2>
<p>To use Create React App, we first need to open our terminal or command line on our computer.</p>
<p>To create a new React project, we can use the tool <code>npx</code>, provided you have an npm version of at least 5.2.</p>
<blockquote>Note: You can check what npm version you have by running in your terminal <code>npm -v</code></blockquote>
<p>npx gives us the ability to use the <code>create-react-app</code> package without having to first install it on our computer, which is very convenient.</p>
<p>Using npx also ensures that we are using latest version of Create React App to create our project:</p><pre><code class="language-bash">npx create-react-app my-react-app</code></pre>
<p>Once we run this command, a folder named "my-react-app" will be created where we specified on our computer and all of the packages it requires will be automatically installed.</p>
<blockquote>Note: Creating a new React app with create-react-app will usually take 2-3 minutes, sometimes more.</blockquote>
<p>Create React App also gives us some templates to use for specific types of React projects.</p>
<p>For example, if we wanted to create a React project that used the tool TypeScript, we could use a template for that instead of having to install TypeScript manually.</p>
<p>To create a React app that uses TypeScript, we can use the Create React App TypeScript template:</p><pre><code class="language-bash">npx create-react-app my-react-app --template typescript</code></pre>
<h2 id="step-2-reviewing-the-project-structure">Step 2. Reviewing the Project Structure</h2>
<p>Once our project files have been created and our dependencies have been installed, our project structure should look like this:</p><pre><code>my-react-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
└── src</code></pre>
<p>What are each of these files and folders for?</p>
<ul>
<li><code>README.md</code> is a markdown file that includes a lot of helpful tips and links that can help you while learning to use Create React App. </li>
<li><code>node_modules</code> is a folder that includes all of the dependency-related code that Create React App has installed. You will never need to go into this folder.</li>
<li><code>package.json</code> that manages our app dependencies and what is included in our node_modules folder for our project, plus the scripts we need to run our app.</li>
<li><code>.gitignore</code> is a file that is used to exclude files and folders from being tracked by Git. We don't want to include large folders such as the node_modules folder </li>
<li><code>public</code> is a folder that we can use to store our static assets, such as images, svgs, and fonts for our React app.</li>
<li><code>src</code> is a folder that contains our source code. It is where all of our React-related code will live and is what we will primarily work in to build our app.</li>
</ul>
<blockquote>Note: A new Git repository is created whenever you make a new project with Create React App. You can start saving changes to your app right away using <code>git add .</code> and <code>git commit -m "your commit message"</code>.</blockquote>
<h2 id="step-3-how-to-run-your-react-project">Step 3. How to Run your React Project</h2>
<p>Once you have dragged your project into your code editor, you can open up your terminal (in VSCode, go to View &gt; Terminal).</p>
<p>To start your React project, you can simply run:</p><pre><code class="language-bash">npm start</code></pre>
<p>When we run our project, a new browser tab will automatically open on our computer's default browser to view our app.</p>
<p>The development server will start up on localhost:3000 and, right away, we can see the starting home page for our app.</p>
<p>Where is our app content coming from? </p>
<p>It's coming from the App.js file within the src folder. If we head over to that file, we can start making changes to our app code.</p><pre><code class="language-js">// src/App.js
import logo from "./logo.svg";
import "./App.css";
function App() {
return (
&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
&lt;img src={logo} className="App-logo" alt="logo" /&gt;
&lt;p&gt;
Edit &lt;code&gt;src/App.js&lt;/code&gt; and save to reload.
&lt;/p&gt;
&lt;a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
&gt;
Learn React
&lt;/a&gt;
&lt;/header&gt;
&lt;/div&gt;
);
}
export default App;</code></pre>
<p>In particular, let's remove the <code>p</code> and <code>a</code> tags, and add an <code>h1</code> element with the name of our app, "React Posts Sharer":</p><pre><code class="language-js">// src/App.js
import logo from "./logo.svg";
import "./App.css";
function App() {
return (
&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
&lt;img src={logo} className="App-logo" alt="logo" /&gt;
&lt;h1&gt;React Posts Sharer&lt;/h1&gt;
&lt;/header&gt;
&lt;/div&gt;
);
}
export default App;</code></pre>
<p>When you save by using Command/Ctrl + S, you will see our page immediately update to look like this:</p>
<p>What is great about the development server is that it automatically refreshes to reflect our changes. There is no need to manually refresh the browser.</p>
<blockquote>Note: The only time you may need to refresh the browser when working with Create React App is when you have an error.</blockquote>
<h2 id="step-4-how-to-run-tests-with-the-react-testing-library">Step 4. How to Run Tests with the React Testing Library</h2>
<p>Create React App makes it very simple to test your React app. </p>
<p>It includes all of the packages you need to run tests using the React Testing Library (<code>@testing-library/react</code>).</p>
<p>A basic test is included in the file App.test.js in src. It tests that our App component successfully displays a link with the text "learn react".</p>
<p>We can run our tests with the command:</p><pre><code class="language-bash">npm run test</code></pre>
<blockquote>Note: Tests will be run in all files that end in .test.js when you run the command <code>npm run test</code></blockquote>
<p>If we run this, however, our test will fail. </p>
<p>This is because we no longer have a link element, but a title element. To make our test pass we want to get a title element with the text "React Posts Sharer". </p><pre><code class="language-js">// src/App.test.js
import { render, screen } from "@testing-library/react";
import App from "./App";
test("renders app title element", () =&gt; {
render(&lt;App /&gt;);
const titleElement = screen.getByText(/React Posts Sharer/i);
expect(titleElement).toBeInTheDocument();
});</code></pre>
<p>Once we run our test again, we see that it passes:</p><pre><code class="language-bash">PASS  src/App.test.js
✓ renders app title element (54 ms)
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.776 s, estimated 3 s
Ran all test suites related to changed files.</code></pre>
<blockquote>Note: When run the test command, you do not need to start and stop it manually. If you have a failing test, you can jump into your app code, fix your error, and once you hit save, all tests will automatically re-run.</blockquote>
<h2 id="step-5-how-to-change-the-app-s-meta-data">Step 5. How to Change the App's Meta Data</h2>
<p>How does our project work? We can see how by going to the index.js file.</p><pre><code class="language-js">// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
&lt;React.StrictMode&gt;
&lt;App /&gt;
&lt;/React.StrictMode&gt;,
document.getElementById('root')
);</code></pre>
<p>The package ReactDOM renders our application (specifically the App component and every component within it), by attaching it to a HTML element with an id value of 'root'.</p>
<p>This element can be found within <code>public/index.html</code>.</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="utf-8" /&gt;
&lt;link rel="icon" href="%PUBLIC_URL%/favicon.ico" /&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1" /&gt;
&lt;meta name="theme-color" content="#000000" /&gt;
&lt;meta
name="description"
content="Web site created using create-react-app"
/&gt;
&lt;link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" /&gt;
&lt;link rel="manifest" href="%PUBLIC_URL%/manifest.json" /&gt;
&lt;title&gt;React App&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;noscript&gt;You need to enable JavaScript to run this app.&lt;/noscript&gt;
&lt;div id="root"&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<p>The entire React app is attached to this HTML page using the div with the id of root you see above.</p>
<p>We don't need to change anything within the <code>body</code> tags. However, it is useful to change the metadata in the <code>head</code> tags, to tell users and search engines about our specific app.</p>
<p>We can see that it includes meta tags for a title, description, and favicon image (the little icon in the browser tab).</p>
<p>You'll also see several other tags like theme-color, apple-touch-icon and manifest. These are useful if users want to add your application to their device or computer's home screen.</p>
<p>In our case, we can change the title to our app name and the description to suit the app we're making:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="utf-8" /&gt;
&lt;link rel="icon" href="%PUBLIC_URL%/favicon.ico" /&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1" /&gt;
&lt;meta name="theme-color" content="#000000" /&gt;
&lt;meta
name="description"
content="App for sharing peoples' posts from around the web"
/&gt;
&lt;link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" /&gt;
&lt;link rel="manifest" href="%PUBLIC_URL%/manifest.json" /&gt;
&lt;title&gt;React Posts Sharer&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;noscript&gt;You need to enable JavaScript to run this app.&lt;/noscript&gt;
&lt;div id="root"&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<h2 id="step-6-how-to-work-with-images-and-other-assets">Step 6. How to Work with Images and Other Assets</h2>
<p>If we look at our App component, we see that we are using an <code>img</code> element. </p>
<p>What's interesting is that we are importing a file from our src folder, as if it was a variable being exported from that file.</p><pre><code class="language-js">// src/App.js
import "./App.css";
import logo from "./logo.svg";
function App() {
return (
&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
&lt;img src={logo} className="App-logo" alt="logo" /&gt;
&lt;h1&gt;React Posts Sharer&lt;/h1&gt;
&lt;/header&gt;
&lt;/div&gt;
);
}
export default App;</code></pre>
<p>We can import image files and other static assets directly into our React components. This feature comes from Create React App's webpack configuration.</p>
<p>Instead of including static assets directly within our src folder, we also have the option to include them in our public folder.</p>
<p>If we move our logo.svg file from src to public, instead of importing our file by using the import syntax, we can write the following:</p><pre><code class="language-js">// src/App.js
import "./App.css";
function App() {
return (
&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
&lt;img src="/logo.svg" className="App-logo" alt="logo" /&gt;
&lt;h1&gt;React Posts Sharer&lt;/h1&gt;
&lt;/header&gt;
&lt;/div&gt;
);
}
export default App;</code></pre>
<p>Any file that's placed in the public folder can be used in .js or .css files with the syntax: <code>/filename.extension</code>.</p>
<p>What is convenient about Create React App is that we do not need to use an <code>img</code> element at all to display this svg. </p>
<p>We can import this svg as a component using the following syntax:</p><pre><code class="language-js">// src/App.js
import { ReactComponent as Logo } from "./logo.svg";
import "./App.css";
function App() {
return (
&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
&lt;Logo style={{ height: 200 }} /&gt;
&lt;h1&gt;React Posts Sharer&lt;/h1&gt;
&lt;/header&gt;
&lt;/div&gt;
);
}
export default App;</code></pre>
<p>What is happening here? We can import the svg file as a ReactComponent and then rename it to whatever name we like using the <code>as</code> keyword.</p>
<p><em>In other words, we can use our imported svg just like we would a regular component.</em></p>
<p>Svg files have traditionally been challenging to use in React. This component syntax makes it very easy and allows us to do things such as use inline styles (like you see above, where we set the logo's height to 200px).</p>
<h2 id="step-7-how-to-install-dependencies">Step 7. How to Install Dependencies</h2>
<p>For our post sharing app that we're making, let's grab some post data to display in our app from the JSON Placeholder API.</p>
<p>We can use a dependency called <code>axios</code> to make a request to get our posts.</p>
<p>To install axios, run:</p><pre><code class="language-bash">npm install axios</code></pre>
<blockquote>Note: You can more easily install packages using the shorthand command <code>npm i axios</code> instead of <code>npm install</code></blockquote>
<p>When we install axios, it will be added to our <code>node_modules</code> folder. </p>
<p>We can review all dependencies we have installed directly within our package.json file and see that axios has been added to the "dependencies" section:</p><pre><code class="language-json">{
"name": "my-react-app",
"version": "0.1.0",
"private": true,
"dependencies": {
"@testing-library/jest-dom": "^5.11.4",
"@testing-library/react": "^11.1.0",
"@testing-library/user-event": "^12.1.10",
"axios": "^0.21.1",
"react": "^17.0.1",
"react-dom": "^17.0.1",
"react-scripts": "4.0.2",
"web-vitals": "^1.0.1"
}
}</code></pre>
<p>We will not include it in this project, but if you are interested in using TypeScript with your existing Create React App project, the process is very simple.</p>
<p>You simply need to install the <code>typescript</code> dependency and the appropriate type definitions to use for React development and testing:</p><pre><code class="language-bash">npm install typescript @types/node @types/react @types/react-dom @types/jest
</code></pre>
<p>After that, you can simply restart your development server and rename any React file that ends with .js to .tsx and you have a working React and TypeScript project.</p>
<h2 id="step-8-how-to-import-components">Step 8. How to Import Components</h2>
<p>Instead of writing all of our code within the App component, let's create a separate component to fetch our data and display it.</p>
<p>We'll call this component Posts, so let's create a folder within src to hold all of our components and put a file within it: Posts.js.</p>
<p>The complete path for our component file is <code>src/components/Posts.js</code>.</p>
<p>To fetch our posts, we will request them from JSON Placeholder, put them in a state variable called posts, and then map over them to display their title and body:</p><pre><code class="language-js">// src/components/Posts.js
import React from "react";
import axios from "axios";
function Posts() {
const [posts, setPosts] = React.useState([]);
React.useEffect(() =&gt; {
axios
.get("http://jsonplaceholder.typicode.com/posts")
.then((response) =&gt; setPosts(response.data));
}, []);
return (
&lt;ul className="posts"&gt;
{posts.map((post) =&gt; (
&lt;li className="post" key={post.id}&gt;
&lt;h4&gt;{post.title}&lt;/h4&gt;
&lt;p&gt;{post.body}&lt;/p&gt;
&lt;/li&gt;
))}
&lt;/ul&gt;
);
}
export default Posts;
</code></pre>
<p>We are fetching and returning our post data from the Posts component, but to see it in our app, we need to import it into the App component.</p>
<p>Let's head back to App.js and import it by going into the components folder and getting the Posts component from Posts.js.</p>
<p>After that, we can place our Posts component under our <code>header</code>:</p><pre><code class="language-js">// src/App.js
import Posts from "./components/Posts";
import "./App.css";
function App() {
return (
&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
&lt;img src="/logo.svg" className="App-logo" alt="logo" /&gt;
&lt;h1&gt;React Posts Sharer&lt;/h1&gt;
&lt;/header&gt;
&lt;Posts /&gt;
&lt;/div&gt;
);
}
export default App;</code></pre>
<p>And we can see all of our fetched posts on our home page below our header:</p>
<h2 id="step-9-how-to-style-our-app-with-css">Step 9: How to Style our App with CSS</h2>
<p>Our app could benefit from some improved styles.</p>
<p>Create React App comes with CSS support out of the box. If you head to App.js, you can see at the top that we are importing an App.css file from src.</p>
<blockquote>Note: You can import .css files into any component you like, however these styles will be applied globally to our app. They are not scoped to the component into which the .css file is imported.</blockquote>
<p>Within App.css, we can add some styles to improve our app's appearance:</p><pre><code class="language-css">/* src/App.css */
.App {
text-align: center;
margin: 0 auto;
max-width: 1000px;
}
.App-logo {
height: 40vmin;
pointer-events: none;
}
.App-header {
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
}
li {
list-style-type: none;
}
.post {
margin-bottom: 4em;
}
.post h4 {
font-size: 2rem;
}</code></pre>
<p>There is also another global stylesheet called index.css that has more general style rules.</p>
<p>In it, we can add some additional properties for the body element to make our background dark and our text white:</p><pre><code class="language-css">/* src/index.css */
body {
background-color: #282c34;
color: white;
margin: 0;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}</code></pre>
<p>After adding these styles, we have a much better looking app:</p>
<p>Be aware that it is also very easy to add a more advanced CSS configurations, such as if you want to add CSS modules or SASS to your React app. </p>
<p>More helpful resources for CSS styling are included in your README.md file.</p>
<h2 id="step-10-how-to-build-the-app-and-publish-it">Step 10. How to Build the App and Publish It</h2>
<p>Once we are happy with our app and are ready to publish it, we can build it with the following command:</p><pre><code class="language-bash">npm run build</code></pre>
<p>This command will create an optimized production build for our project and will output what files it has generated and how large each file is:</p><pre><code class="language-bash">Compiled successfully.
File sizes after gzip:
46.62 KB  build/static/js/2.1500c654.chunk.js
1.59 KB   build/static/js/3.8022f77f.chunk.js
1.17 KB   build/static/js/runtime-main.86c7b7c2.js
649 B     build/static/js/main.ef6580eb.chunk.js
430 B     build/static/css/main.5ae9c609.chunk.css</code></pre>
<p>The output is coming from the build tool Webpack. </p>
<p>It helps to give us an idea of the size of our app files because the size of our .js files in particular can make a large impact on our app's performance.</p>
<p>Each chunk includes a unique string or hash, which will change on every build to make sure any new deployment is not saved (cached) by the browser. </p>
<p>If we did not have this cache-busting hash for each of our files, we likely couldn't see any changes we made to our app.</p>
<p>Finally, we can run our built React project locally with the help of the npm package <code>serve</code>. </p>
<p>This is helpful to detect any errors we might have with the final version of our project before pushing live to the web.</p>
<p>Like create-react-app, we can use npx to run <code>serve</code> without installing it globally on our computer.</p><pre><code class="language-bash">npx serve</code></pre>
<p>Using <code>serve</code>, our app will start up on a different development port instead of 3000. In this case, localhost:5000.</p>
<p>And with that, we have a completed React application ready to publish live to the web on any deployment service, such as Netlify, Github Pages, or Heroku!</p>
<h2 id="enjoythispostjointhereactbootcamp">Enjoy this post? Join The React Bootcamp</h2>
<p><strong><a href="http://bit.ly/join-react-bootcamp">The React Bootcamp</a></strong> takes everything you should know about learning React and bundles it into one comprehensive package, including videos, cheatsheets, plus special bonuses.</p>
<p>Join thousands of developers learning how to become a React pro in record time:</p>
<p><a href="http://bit.ly/join-react-bootcamp"><img src="https://reedbarger.nyc3.digitaloceanspaces.com/react-bootcamp-banner.png" alt="The React Bootcamp"></a><br>
<em>Click here to be notified when it opens</em>
</p>
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
