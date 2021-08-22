---
card: "https://cdn-media-1.freecodecamp.org/images/1*lJOurCBMozvgBjmxG-Ljiw.jpeg"
tags: [React]
description: "If you are thinking of building a static site with React and "
author: "Milad E. Fahmy"
title: "How I made my portfolio website blazing fast with Gatsby"
created: "2021-08-16T10:11:58+02:00"
modified: "2021-08-16T10:11:58+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-web-development tag-gatsbyjs tag-tech tag-web-hosting ">
<header class="post-full-header">
<h1 class="post-full-title">How I made my portfolio website blazing fast with Gatsby</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*lJOurCBMozvgBjmxG-Ljiw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*lJOurCBMozvgBjmxG-Ljiw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*lJOurCBMozvgBjmxG-Ljiw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*lJOurCBMozvgBjmxG-Ljiw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*lJOurCBMozvgBjmxG-Ljiw.jpeg" alt="How I made my portfolio website blazing fast with Gatsby">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
const HomePage = ({ data }) =&gt; {
const siteTitle = data.site.siteMetadata.title;
console.log(data.ProjectImgs);
const { edges: projectImgData } = data.ProjectImgs;
const { edges: iconImgData } = data.iconImgs;
return (
&lt;div&gt;
&lt;Helmet
title={siteTitle}
link={[{ rel: "icon", type: "image/png", href: `${favicon}`}]}
/&gt;
&lt;Cover coverImg={data.coverImg} /&gt;
&lt;div className="container-fluid main"&gt;
&lt;Navigation /&gt;
&lt;AboutMe profileImg={data.profileImg} iconImgs={iconImgData}
/&gt;
&lt;Projects projectImgs={projectImgData} /&gt;
&lt;Contacts /&gt;
&lt;Footer /&gt;
&lt;/div&gt;
&lt;/div&gt;
);
};
export const query = graphql`
query allImgsQuery {
//additional queries
...
ProjectImgs: allFile(
sort: { order: ASC, fields: [absolutePath] }
filter: { relativePath: { regex: "/projects/.*.png/" } }
) {
edges {
node {
relativePath
name
childImageSharp {
sizes(maxWidth: 320) {
...GatsbyImageSharpSizes
}
}
}
}
}
//additional queries
...
}
`;</code></pre><blockquote>Note: I had some trouble getting my graphQL queries to work and had to do a little digging around to figure out how to query for multiple images within a folder. What helped me was looking at other portfolio sites made with Gatsby.</blockquote><p>Using the console, we can see what <code>data.ProjectImgs</code> returns to give you a better idea of what I am receiving from the query and what I am passing to my Projects component:</p><p><code>Console.log(data.ProjectImgs)</code> returns an array of edges:</p><pre><code>{edges: Array(17)}
edges
:
(17) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
__proto__
:
Object{edges: Array(17)}</code></pre><p>Extending one of the edges shows a node object that contains a <strong><strong>childImageSharp</strong></strong> property. This contains a sizes object which holds the image’s thumbnail sources. This sizes object is what we ultimately want to pass to our gatsby-image’s <code>&lt;Img /&gt;</code> component.</p><p>Extending an edge to show the information in a node:</p><pre><code>{edges: Array(17)}
edges: Array(17)
0:
node:
childImageSharp: {sizes: {…}}
name: "CamperLeaderboard"
relativePath:"projects/CamperLeaderboard.png"
__proto__:Object
__proto__:Object
1:{node: {…}}
//more nodes
...</code></pre><p>In my <code>&lt;Projects /&gt;</code> component, I receive the node list of project images as a prop and for each project, I extract the <strong><strong>childImageSharp.sizes</strong></strong> object (which is renamed to <strong><strong>imageSizes</strong></strong>), and pass it into the gatsby-image’s <code>&lt;Img /&gt;</code> component:</p><pre><code>import React, { Component } from "react";
import Img from "gatsby-image";
//more imports
...
class Projects extends Component {
constructor(props) {
super(props);
this.state = {
selectedType: "front-end"
};
this.onSelectChange = this.onSelectChange.bind(this);
}
onSelectChange(e) {
this.setState({ selectedType: e.target.value });
}
render() {
const projectImgs = this.props.projectImgs;
const { selectedType } = this.state;
return (
&lt;section id="projects" className="section projects"&gt;
&lt;h2 className="text-center"&gt;PROJECTS&lt;/h2&gt;
&lt;div className="section-content"&gt;
&lt;div className="subheader"&gt;
&lt;FormGroup controlId="formControlsSelect"&gt;
...
&lt;/FormGroup&gt;
&lt;/div&gt;
&lt;div className="project-list"&gt;
{projectList.map(project =&gt; {
const isSelectedType = selectedType === project.type;
hide: !isSelectedType
});
const image = projectImgs.find(n =&gt; {
return n.node.relativePath ===
`projects/${project.img}`;
});
const imageSizes = image.node.childImageSharp.sizes;
return (
&lt;a
href={project.url}
key={project.url}
className={singleCardClass}
target="_blank"
&gt;
&lt;Img
title={project.name}
alt="Screenshot of Project"
sizes={imageSizes}
/&gt;
&lt;/div&gt;
&lt;div className="blue-divider" /&gt;
&lt;p&gt;{project.description}&lt;/p&gt;
&lt;/div&gt;
&lt;/a&gt;
);
})}
&lt;/div&gt;
&lt;/div&gt;
&lt;/section&gt;
);
}
}
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
