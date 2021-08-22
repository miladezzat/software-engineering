---
card: "/images/default.jpg"
tags: [React]
description: "Today you re going to create one of the most important apps y"
author: "Milad E. Fahmy"
title: "How to Build a Portfolio Website with React"
created: "2021-08-16T10:03:32+02:00"
modified: "2021-08-16T10:03:32+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-portfolio tag-tailwind tag-netlify tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build a Portfolio Website with React</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/06/react-portfolio-2021.png 300w,
/news/content/images/size/w600/2021/06/react-portfolio-2021.png 600w,
/news/content/images/size/w1000/2021/06/react-portfolio-2021.png 1000w,
/news/content/images/size/w2000/2021/06/react-portfolio-2021.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/06/react-portfolio-2021.png" alt="How to Build a Portfolio Website with React">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
import React from "react";
export default function App() {
return (
&lt;main&gt;
&lt;Navbar /&gt;
&lt;About /&gt;
&lt;Projects /&gt;
&lt;Skills /&gt;
&lt;Testimonials /&gt;
&lt;Contact /&gt;
&lt;/main&gt;
);
}</code></pre><h2 id="how-to-create-our-components">How to Create our Components</h2><p>Now that we have all these components listed out we need to go ahead and create them. </p><p>Within our source (src) folder, we're going to create a folder called components with all of the files that we need:</p><pre><code>my-portfolio
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
├── App.js
├── data.js
├── index.css
├── index.js
└── components
├── About.js
├── Contact.js
├── Navbar.js
├── Projects.js
├── Skills.js
└── Testimonials.js</code></pre><p>Then we will create the basic structure of each React component and export it from that file with <code>export default</code>:</p><pre><code class="language-js">// src/components/About.js
export default function About() {}
// repeat the same basic structure for all 6 components</code></pre><p>And finally make sure to import it back in App.js:</p><pre><code class="language-js">// src/App.js
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
export default function App() {
return (
&lt;main&gt;
&lt;Navbar /&gt;
&lt;About /&gt;
&lt;Projects /&gt;
&lt;Skills /&gt;
&lt;Testimonials /&gt;
&lt;Contact /&gt;
&lt;/main&gt;
);
}</code></pre><p><em>Note that there should be six components in total. </em></p><h2 id="intro-to-tailwind-css">Intro to Tailwind CSS</h2><p>Once that's done, we can start working with Tailwind CSS, in order to start to give our app a basic appearance. </p><p>The benefit of using Tailwind CSS is that we don't have to write any styles manually in a CSS stylesheet. All we have to do is combine multiple classes to create the appearance that we want. </p><p>For example, to give our portfolio a dark background with gray text applied to all of our child components, you can add the following classes to our <code>main</code> element:</p><pre><code class="language-js">// src/App.js
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
export default function App() {
return (
&lt;main className="text-gray-400 bg-gray-900 body-font"&gt;
&lt;Navbar /&gt;
&lt;About /&gt;
&lt;Projects /&gt;
&lt;Skills /&gt;
&lt;Testimonials /&gt;
&lt;Contact /&gt;
&lt;/main&gt;
);
}</code></pre><h2 id="how-to-build-the-about-component">How to Build the About Component</h2><p>Let's start on our first section, the about section. This will consist of a basic introduction to ourselves and what skills we specialize in. </p><p>It's also going to include some links to the contact form as well as our past projects. Since these links will be to different parts of the same page, we can use the hashes: "/#projects" and "/#contact".</p><p>To make these links work and to be able to jump to each section, we will set the <code>id</code> attribute of the projects section to "projects" and those of the contact section to "contact".</p><pre><code class="language-js">// src/components/About.js
import React from "react";
export default function About() {
return (
&lt;section id="about"&gt;
&lt;div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center"&gt;
&lt;div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"&gt;
&lt;h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"&gt;
Hi, I'm Reed.
&lt;br className="hidden lg:inline-block" /&gt;I love to build amazing
apps.
&lt;/h1&gt;
&lt;p className="mb-8 leading-relaxed"&gt;
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
Laborum, voluptas natus?
&lt;/p&gt;
&lt;div className="flex justify-center"&gt;
&lt;a
href="#contact"
className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"&gt;
Work With Me
&lt;/a&gt;
&lt;a
href="#projects"
className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"&gt;
See My Past Work
&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"&gt;
&lt;img
className="object-cover object-center rounded"
alt="hero"
src="./coding.svg"
/&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/section&gt;
);
}</code></pre><p>For the image on the righthand side of the section, I am using an svg file from the <code>public</code> folder, coding.svg.</p><p>This image serves merely as a temporary placeholder. I would highly recommend using an actual image of yourself.</p><h2 id="how-to-build-the-projects-component">How to Build the Projects Component</h2><p>Our projects section will consist of a <code>section</code> element with an <code>id</code> of "projects". This will feature a gallery of all the projects that we've built, which will include images.</p><p>It'll have the title of the project, along with the technologies we use to make it, and a link to it (if it is deployed). </p><pre><code class="language-js">// src/components/Projects.js
import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
export default function Projects() {
return (
&lt;section id="projects" className="text-gray-400 bg-gray-900 body-font"&gt;
&lt;div className="container px-5 py-10 mx-auto text-center lg:px-40"&gt;
&lt;div className="flex flex-col w-full mb-20"&gt;
&lt;CodeIcon className="mx-auto inline-block w-10 mb-4" /&gt;
&lt;h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white"&gt;
Apps I've Built
&lt;/h1&gt;
&lt;p className="lg:w-2/3 mx-auto leading-relaxed text-base"&gt;
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
fuga dolore.
&lt;/p&gt;
&lt;/div&gt;
&lt;div className="flex flex-wrap -m-4"&gt;
{projects.map((project) =&gt; (
&lt;a
href={project.link}
key={project.image}
className="sm:w-1/2 w-100 p-4"&gt;
&lt;div className="flex relative"&gt;
&lt;img
alt="gallery"
className="absolute inset-0 w-full h-full object-cover object-center"
src={project.image}
/&gt;
&lt;div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100"&gt;
&lt;h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1"&gt;
{project.subtitle}
&lt;/h2&gt;
&lt;h1 className="title-font text-lg font-medium text-white mb-3"&gt;
{project.title}
&lt;/h1&gt;
&lt;p className="leading-relaxed"&gt;{project.description}&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/a&gt;
))}
&lt;/div&gt;
&lt;/div&gt;
&lt;/section&gt;
);
}</code></pre><p>Note that we are also going to use the library <code>@heroicons/react</code> in order to be able to write some SVG icons as React components. </p><p>We are importing an array of projects from a data.js file in the same folder. There we are exporting an array of objects which each include an individual project's data:</p><pre><code class="language-js">// src/data.js
export const projects = [
{
title: "React Reserve",
subtitle: "MERN Stack",
description:
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
image: "./project-1.gif",
link: "https://reactbootcamp.com",
},
{
title: "React Tracks",
subtitle: "React and Python",
description:
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
image: "./project-2.gif",
link: "https://reedbarger.com",
},
{
title: "DevChat",
subtitle: "React and Firebase",
description:
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
image: "./project-3.gif",
link: "https://jsbootcamp.com",
},
{
title: "Epic Todo App",
subtitle: "React Hooks",
description:
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
image: "./project-4.gif",
link: "https://pythonbootcamp.com",
},
];</code></pre><h2 id="how-to-build-the-skills-component">How to Build the Skills Component</h2><p>Let's fill out the section for all the skills and technologies that we know. </p><p>This will consist of a simple list of all of the major tools that we're familiar with and can use in our employers or clients projects. </p><p>Once again, we are going to import an array from our data folder. But this array consists of number of strings which represent each of the skills that we know such as JavaScript, React, and Node:</p><pre><code class="language-js">// src/components/Skills.js
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
export default function Skills() {
return (
&lt;section id="skills"&gt;
&lt;div className="container px-5 py-10 mx-auto"&gt;
&lt;div className="text-center mb-20"&gt;
&lt;ChipIcon className="w-10 inline-block mb-4" /&gt;
&lt;h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4"&gt;
Skills &amp;amp; Technologies
&lt;/h1&gt;
&lt;p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"&gt;
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
ipsa delectus eum quo voluptas aspernatur accusantium distinctio
possimus est.
&lt;/p&gt;
&lt;/div&gt;
&lt;div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"&gt;
{skills.map((skill) =&gt; (
&lt;div key={skill} className="p-2 sm:w-1/2 w-full"&gt;
&lt;div className="bg-gray-800 rounded flex p-4 h-full items-center"&gt;
&lt;BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" /&gt;
&lt;span className="title-font font-medium text-white"&gt;
{skill}
&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;
))}
&lt;/div&gt;
&lt;/div&gt;
&lt;/section&gt;
);
import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";
export default function Testimonials() {
return (
&lt;section id="testimonials"&gt;
&lt;div className="container px-5 py-10 mx-auto text-center"&gt;
&lt;UsersIcon className="w-10 inline-block mb-4" /&gt;
&lt;h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12"&gt;
Client Testimonials
&lt;/h1&gt;
&lt;div className="flex flex-wrap m-4"&gt;
{testimonials.map((testimonial) =&gt; (
&lt;div className="p-4 md:w-1/2 w-full"&gt;
&lt;div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded"&gt;
&lt;TerminalIcon className="block w-8 text-gray-500 mb-4" /&gt;
&lt;p className="leading-relaxed mb-6"&gt;{testimonial.quote}&lt;/p&gt;
&lt;div className="inline-flex items-center"&gt;
&lt;img
alt="testimonial"
src={testimonial.image}
className="w-12 rounded-full flex-shrink-0 object-cover object-center"
/&gt;
&lt;span className="flex-grow flex flex-col pl-4"&gt;
&lt;span className="title-font font-medium text-white"&gt;
{testimonial.name}
&lt;/span&gt;
&lt;span className="text-gray-500 text-sm uppercase"&gt;
{testimonial.company}
&lt;/span&gt;
&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
))}
&lt;/div&gt;
&lt;/div&gt;
&lt;/section&gt;
);
}</code></pre><h2 id="how-to-build-the-contact-component">How to Build the Contact Component</h2><p>At the end of our landing page, we're going to include our contact form to allow potential employers to reach out to us. </p><p>This form will have 3 inputs: a name, email, and message input. </p><p>To receive these form submissions, we will use the tool Netlify Forms to very easily take care of saving those messages.</p><pre><code class="language-js">// src/components/Contact.js
import React from "react";
export default function Contact() {
return (
&lt;section id="contact" className="relative"&gt;
&lt;div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap"&gt;
&lt;div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"&gt;
&lt;iframe
width="100%"
height="100%"
title="map"
className="absolute inset-0"
frameBorder={0}
marginHeight={0}
marginWidth={0}
style={{ filter: "opacity(0.7)" }}
src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&amp;key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
/&gt;
&lt;div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md"&gt;
&lt;div className="lg:w-1/2 px-6"&gt;
&lt;h2 className="title-font font-semibold text-white tracking-widest text-xs"&gt;
ADDRESS
&lt;/h2&gt;
&lt;p className="mt-1"&gt;
97 Warren St. &lt;br /&gt;
New York, NY 10007
&lt;/p&gt;
&lt;/div&gt;
&lt;div className="lg:w-1/2 px-6 mt-4 lg:mt-0"&gt;
&lt;h2 className="title-font font-semibold text-white tracking-widest text-xs"&gt;
EMAIL
&lt;/h2&gt;
&lt;a className="text-indigo-400 leading-relaxed"&gt;
reedbarger@email.com
&lt;/a&gt;
&lt;h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4"&gt;
PHONE
&lt;/h2&gt;
&lt;p className="leading-relaxed"&gt;123-456-7890&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;form
netlify
name="contact"
className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"&gt;
&lt;h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font"&gt;
Hire Me
&lt;/h2&gt;
&lt;p className="leading-relaxed mb-5"&gt;
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
suscipit officia aspernatur veritatis. Asperiores, aliquid?
&lt;/p&gt;
&lt;div className="relative mb-4"&gt;
&lt;label htmlFor="name" className="leading-7 text-sm text-gray-400"&gt;
Name
&lt;/label&gt;
&lt;input
type="text"
id="name"
name="name"
className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
/&gt;
&lt;/div&gt;
&lt;div className="relative mb-4"&gt;
&lt;label htmlFor="email" className="leading-7 text-sm text-gray-400"&gt;
Email
&lt;/label&gt;
&lt;input
type="email"
id="email"
name="email"
className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
/&gt;
&lt;/div&gt;
&lt;div className="relative mb-4"&gt;
&lt;label
htmlFor="message"
className="leading-7 text-sm text-gray-400"&gt;
Message
&lt;/label&gt;
&lt;textarea
id="message"
name="message"
className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
/&gt;
&lt;/div&gt;
&lt;button
type="submit"
className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"&gt;
Submit
&lt;/button&gt;
&lt;/form&gt;
&lt;/div&gt;
&lt;/section&gt;
);
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;!-- head content skipped --&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form name="contact" netlify netlify-honeypot="bot-field" hidden&gt;
&lt;input type="text" name="name" /&gt;
&lt;input type="email" name="email" /&gt;
&lt;textarea name="message"&gt;&lt;/textarea&gt;
&lt;/form&gt;
&lt;noscript&gt;You need to enable JavaScript to run this app.&lt;/noscript&gt;
&lt;div id="root"&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>We need to hide this form, because it doesn't need to be seen by the user, just Netlify. </p><p>We'll give it the attribute of <code>hidden</code> as well as a <code>name</code> attribute that matches the JSX form in Contact.js. We also need to give it the <code>netlify</code> attribute so that Netlify Forms recognizes it. Finally, we need to include all of the same inputs as our JSX form: for name, email, message.</p><h2 id="how-to-submit-the-contact-form">How to Submit the Contact Form</h2><p>Once that's done, we'll head back to Contact.js. We're going to use JavaScript in order to submit this form. </p><p>First of all, we're going to create some dedicated state for each of the values that are typed in the form for name, email, and message:</p><pre><code class="language-js">const [name, setName] = React.useState("");
const [email, setEmail] = React.useState("");
const [message, setMessage] = React.useState("");</code></pre><p>We will store what the user types in to each of the inputs in state with the help of the <code>onChange</code> handler.</p><p>To handle submission of the form, we will add the <code>onSubmit</code> prop to it. The function that will be called, <code>handleSubmit</code>, will make a post request to the endpoint "/" with all of our form data.</p><p>We will set the headers of the request to indicate that we are sending over form data. For the request body, we will include the form name as well as all of the form data from the <code>name</code>, <code>email</code>, and <code>message</code> state variables.</p><pre><code class="language-js">// src/components/Contact.js
import React from "react";
export default function Contact() {
const [name, setName] = React.useState("");
const [email, setEmail] = React.useState("");
const [message, setMessage] = React.useState("");
function encode(data) {
return Object.keys(data)
.map(
(key) =&gt; encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
)
.join("&amp;");
}
function handleSubmit(e) {
e.preventDefault();
fetch("/", {
method: "POST",
headers: { "Content-Type": "application/x-www-form-urlencoded" },
body: encode({ "form-name": "contact", name, email, message }),
})
.then(() =&gt; alert("Message sent!"))
.catch((error) =&gt; alert(error));
}
return (
&lt;section id="contact" className="relative"&gt;
&lt;div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap"&gt;
&lt;div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"&gt;
&lt;iframe
width="100%"
height="100%"
title="map"
className="absolute inset-0"
frameBorder={0}
marginHeight={0}
marginWidth={0}
style={{ filter: "opacity(0.7)" }}
src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&amp;key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
/&gt;
&lt;div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md"&gt;
&lt;div className="lg:w-1/2 px-6"&gt;
&lt;h2 className="title-font font-semibold text-white tracking-widest text-xs"&gt;
ADDRESS
&lt;/h2&gt;
&lt;p className="mt-1"&gt;
97 Warren St. &lt;br /&gt;
New York, NY 10007
&lt;/p&gt;
&lt;/div&gt;
&lt;div className="lg:w-1/2 px-6 mt-4 lg:mt-0"&gt;
&lt;h2 className="title-font font-semibold text-white tracking-widest text-xs"&gt;
EMAIL
&lt;/h2&gt;
&lt;a className="text-indigo-400 leading-relaxed"&gt;
reedbarger@email.com
&lt;/a&gt;
&lt;h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4"&gt;
PHONE
&lt;/h2&gt;
&lt;p className="leading-relaxed"&gt;123-456-7890&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;form
netlify
name="contact"
onSubmit={handleSubmit}
className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"&gt;
&lt;h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font"&gt;
Hire Me
&lt;/h2&gt;
&lt;p className="leading-relaxed mb-5"&gt;
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
suscipit officia aspernatur veritatis. Asperiores, aliquid?
&lt;/p&gt;
&lt;div className="relative mb-4"&gt;
&lt;label htmlFor="name" className="leading-7 text-sm text-gray-400"&gt;
Name
&lt;/label&gt;
&lt;input
type="text"
id="name"
name="name"
className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
onChange={(e) =&gt; setName(e.target.value)}
/&gt;
&lt;/div&gt;
&lt;div className="relative mb-4"&gt;
&lt;label htmlFor="email" className="leading-7 text-sm text-gray-400"&gt;
Email
&lt;/label&gt;
&lt;input
type="email"
id="email"
name="email"
className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
onChange={(e) =&gt; setEmail(e.target.value)}
/&gt;
&lt;/div&gt;
&lt;div className="relative mb-4"&gt;
&lt;label
htmlFor="message"
className="leading-7 text-sm text-gray-400"&gt;
Message
&lt;/label&gt;
&lt;textarea
id="message"
name="message"
className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
onChange={(e) =&gt; setMessage(e.target.value)}
/&gt;
&lt;/div&gt;
&lt;button
type="submit"
className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"&gt;
Submit
&lt;/button&gt;
&lt;/form&gt;
&lt;/div&gt;
&lt;/section&gt;
);
}</code></pre><p>As you can see above, we are encoding the form data with a special <code>encode</code> function that you see here. </p><p>If the message is sent correctly, we will display an alert that says "Message sent". Otherwise if there is an error, we are going to alert the user of that error.</p><h2 id="how-to-build-the-navbar-component">How to Build the Navbar Component</h2><p>The last step is to build out our Navbar component. </p><p>We want this navbar to stick to the top of our app on large devices and not be sticky on mobile devices. </p><p>Additionally, we want to include links to each of our relevant sections for our project skills testimonials and our contact form:</p><pre><code class="language-js">// src/components/Navbar.js
import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
export default function Navbar() {
return (
&lt;header className="bg-gray-800 md:sticky top-0 z-10"&gt;
&lt;div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"&gt;
&lt;a className="title-font font-medium text-white mb-4 md:mb-0"&gt;
&lt;a href="#about" className="ml-3 text-xl"&gt;
Reed Barger
&lt;/a&gt;
&lt;/a&gt;
&lt;nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center"&gt;
&lt;a href="#projects" className="mr-5 hover:text-white"&gt;
Past Work
&lt;/a&gt;
&lt;a href="#skills" className="mr-5 hover:text-white"&gt;
Skills
&lt;/a&gt;
&lt;a href="#testimonials" className="mr-5 hover:text-white"&gt;
Testimonials
&lt;/a&gt;
&lt;/nav&gt;
&lt;a
href="#contact"
className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"&gt;
Hire Me
&lt;ArrowRightIcon className="w-4 h-4 ml-1" /&gt;
&lt;/a&gt;
&lt;/div&gt;
&lt;/header&gt;
);
<p><strong><a href="http://bit.ly/join-react-bootcamp">The React Bootcamp</a></strong> takes everything you should know about learning React and bundles it into one comprehensive package, including videos, cheatsheets, plus special bonuses.</p>
<p>Gain the insider information <strong>100s</strong> of developers have already used to master React, find their dream jobs, and take control of their future:</p>
<p><a href="http://bit.ly/join-react-bootcamp"><img src="https://reedbarger.nyc3.digitaloceanspaces.com/react-bootcamp-banner.png" alt="The React Bootcamp"></a><br>
<em>Click here to be notified when it opens</em></p>
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
