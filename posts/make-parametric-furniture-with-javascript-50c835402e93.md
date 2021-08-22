---
card: "https://cdn-media-1.freecodecamp.org/images/1*JQqo3bzhfEBTxs8bvu1qrw.png"
tags: [Github]
description: by O-LAP
author: "Milad E. Fahmy"
title: "How you can make parametric furniture with JavaScript"
created: "2021-08-15T19:45:08+02:00"
modified: "2021-08-15T19:45:08+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-github tag-javascript tag-design tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How you can make parametric furniture with JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*JQqo3bzhfEBTxs8bvu1qrw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*JQqo3bzhfEBTxs8bvu1qrw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*JQqo3bzhfEBTxs8bvu1qrw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*JQqo3bzhfEBTxs8bvu1qrw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*JQqo3bzhfEBTxs8bvu1qrw.png" alt="How you can make parametric furniture with JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by O-LAP</p>
<h1 id="how-you-can-make-parametric-furniture-with-javascript">How you can make parametric furniture with JavaScript</h1>
<figcaption><a href="https://o-lap.org/app.html?a=amitlzkpa&amp;r=o-lap_plato" rel="noopener" target="_blank" title="">Source</a></figcaption>
</figure>
<p>This guide will help you create a piece of parametric furniture. <a href="https://o-lap.org/app.html?a=amitlzkpa&amp;r=o-lap_plato" rel="noopener">Check out</a> one of the designs from our gallery to find one you like. You can read more about the project <a href="https://o-lap.github.io/home" rel="noopener">here</a>.</p>
<p>This tutorial assumes that you have an understanding of Javascript, Git (basics) and <a href="https://threejs.org/" rel="noopener">ThreeJS</a>. (It’s good enough if you have just about worked with them once).</p>
<p>Let’s get started.</p>
<h3 id="getting-set-up">Getting set up</h3>
<p>Get the starter project by cloning <code><a href="https://github.com/O-LAP/starter_project.git." rel="noopener">https://github.com/O-LAP/starter_project.git</a></code>. The <code>starter_project</code> has files in place to let you run and test your design in a development environment. Once you push it and register it with the main app, it runs smoothly with the framework as well.</p>
<p>The starter project is configured to show a simple cube which can be controlled using parameters in the browser. This exercise will replace that cube with our own design.</p>
<p>You can open up the <code>dev.html</code> file in a browser to see what it currently looks like.</p>
<p>You can change the sliders on the right hand side which change the proportions of the cube. You will see a group of controls under “Environment” on the bottom right. Try enabling the “Show Section” switch. It shows sections of the cube which can be fabricated.</p>
<p>We can use those sections to make the cube with real wood.</p>
<p>When you click the “Download” button, it will give you a CAD file (.obj) which you can feed into a CNC machine to get it fabricated. You can read more about this process <a href="https://github.com/O-LAP/home/blob/master/faq.md" rel="noopener">here</a>.</p>
<p>Here’s an example of a chair made using this technique:</p>
<h3 id="going-through-the-code">Going through the code</h3>
<p>Let’s start by making a parametric cylinder (which you can imagine as a small stool) to replace the cube. The <code>designs</code> folder contains all the files you need for the design.</p>
<p>The <code>Design.js</code> file contains some sample code showing a cube which can be parametrically modified.</p>
<p>The <code>dev.html</code> file is the development harness which emulates the OLAP web app. (This file would later have to be manually copied on updates.)</p>
<p>The framework requires the design logic to be captured in a JavaScript object called <code>Design</code> in <code>Design.js</code> file.</p><pre><code>Design.info = { ... };Design.inputs = { ... };Design.inputState = { ... };Design.init = async function() { ... };Design.updateGeom = async function(group, sliceManager) { ... };</code></pre>
<p><code>Design.inputs</code> is where you specify the parameters for your design. It is configured for the cube. Let's modify it to make it suitable for our sphere.</p>
<p>We will keep things very simple and only use <code>height</code> and <code>weight</code> for our cylinder.</p>
<p>Update <code>Design.inputs</code> so it looks like this.</p><pre><code>Design.inputs = {    "width": {         "type": "slider",        "label": "Width",        "default": 150,        "min": 100,        "max": 200    },    "height": {         "type": "slider",                               "label": "Height",        "default": 150,        "min": 100,        "max": 200    }}</code></pre>
<p>Now if you open <code>dev.html</code> it should look something like:</p>
<h3 id="adding-in-geometry">Adding in geometry</h3>
<p>Now we will create a cylinder instead of a cube.</p>
<p>Let’s look at what the <code>updateGeometry</code> method looks like for the cube.</p><pre><code>Design.updateGeom = async function(group, sliceManager) {  var geometry = new THREE.BoxGeometry( 200, Design.inputState.height, Design.inputState.width * ((Design.inputState.doubleWidth) ? 2 : 1) );  var material = getMaterial(Design.inputState.colour, Design.inputState.finish);  var cube = new THREE.Mesh( geometry, material );  sliceManager.addSliceSet({uDir: true, start: -80, end: 80, cuts: 3});  sliceManager.addSliceSet({uDir: false, start: -90, end: 90, cuts: 4});  group.add( cube );}</code></pre>
<p>You can use <code>Design.inputState</code> to access the current value set by the user for the parameters at all times.</p>
<p>For example, to access the value for <code>height</code> parameter, you can use <code>Design.inputState.height</code>.</p>
<p>The first 4 lines are pure <a href="https://threejs.org/" rel="noopener">threeJS</a> code, where it creates a simple <code>BoxGeometry</code> based on the parameter values.<br>This is the main part of your design which you will modify in the following step to create a design using the parameter values.<br>The part after that with the <code>sliceManager</code>s manage how the section profiles are created for your design.<br>More information about slicing further below.</p>
<p>We will modify this method so it ends up looking like this:</p><pre><code>Design.updateGeom = function(group, sliceManager) {  var geometry = new THREE.CylinderGeometry( Design.inputState.width -100, Design.inputState.width, Design.inputState.height, 32 );  var material = new THREE.MeshStandardMaterial( {color: 0x00BFFF } );  var cylinder = new THREE.Mesh( geometry, material );  sliceManager.addSliceSet({uDir: true, start: -80, end: 80, cuts: 3});  sliceManager.addSliceSet({uDir: false, start: -90, end: 90, cuts: 4});  group.add( cylinder );}</code></pre>
<p>We replace the 3 lines which created the cube with 3 lines which create a cylinder. We use the width and height from the design parameters and a fixed color.</p>
<p>We retain the same slicing settings as before and update the last line to add the cylinder instead of the cube.</p>
<p>Hit save and try refreshing the page to see the change. You should see something like this.</p>
<p>Trying playing with the parameters and check how the sections look for this design. You can work with any threeJS mesh to define the geometry of your design.</p>
<p>All geometry passed into the <code>group</code> is “sliced” by the slicing configuration as per the supplied settings.</p>
<p>This quick walk through demonstrated how you can paarmetrically build basic geometries. You can adapt this logic to create any kind of parametric geometry which can be fabricated to furniture.</p>
<p>Check out <a href="https://medium.com/@olapdesign/design-for-a-rocking-chair-8a1a1e109d7f" rel="noopener">this</a> article to understand the use of computational techniques for furniture design.</p>
<h3 id="submit-your-design">Submit Your Design</h3>
<p>Once you have a design you are happy with, you can progress to submitting your design if you wish.</p>
<p>For this quick start, we will submit our design to a test gallery we maintain. All designs registered in the test gallery is periodically cleared.</p>
<p>Designs will be accepted into the main/test repo via pull requests. This will allow for a meaningful discussion in the add/publish process.</p>
<p>Go to:</p>
<p><code><a href="https://github.com/O-LAP/home/edit/master/data/TEST_DesignCollection.js." rel="noopener">https://github.com/O-LAP/home/edit/master/data/TEST_DesignCollection.js</a></code><a href="https://github.com/O-LAP/home/edit/master/data/TEST_DesignCollection.js." rel="noopener">.</a></p>
<p>If it is your first time adding a design, you will be requested to fork the repo. Do it.</p>
<p>Add the link to your repository (eg <code>https://github.com/amitlzkpa/o-lap_plato</code>) to the list inside <code>TEST_DesignCollection</code> . Make sure to check that you have the commas at the right place.</p>
<p>Make only one change at a time. Any proposals with more than one change will be rejected, even if everything else is in place. Click to propose the change. It will be moderated by one of the maintainers, and if any further discussion is required, it will happen on this page.</p>
<p>If your design is accepted…hooray! We have a Michelangelo in the making! You can check your design by going to the link: <code>http://o-lap.org/test.html?a=&lt;github-user-name&gt;&amp;r=&lt;olap-r</code>epo-name&gt;</p>
<p><em>Most submittals to the test repo will be accepted.</em><br>As a community we hope the same process will be used to moderate designs which fail the requirements.</p>
<p>Submission Link (Main): <code>https://github.com/O-LAP/home/edit/master/data/OLAP_DesignCollection.js</code><br> Submission Link (Test): <code>https://github.com/O-LAP/home/edit/master/data/TEST_DesignCollection.js</code><br> Design Gallery (Main): <code>https://O-LAP.github.io/home/designs.html</code><br> Design Gallery (Test): <code>https://O-LAP.github.io/home/test.html</code><br> App: <code>http://o-lap.org/app.html?a=&lt;github-user-name&gt;&amp;r=&lt;olap-repo-nam</code>e&gt;&amp;m=test</p>
<h3 id="how-to-publish-an-update-for-your-design">How to Publish An Update For Your Design</h3>
<p>To make updates to the design file, you don’t have to update your file at the same time. In fact, it’s better to make your changes in small steps as separate commits. With each commit, include a meaningful description of what changes you made, as well as how and why you made the changes.</p>
<p>Update the <code>Design.js</code> file to make only the version update change.</p>
<p><strong>Modify the version number in at <code>"version": "x.y.z",</code>(line 11) inside <code>Design.js</code></strong><br> <em>x.y.z (x: major changes; y: minor changes; z: tweaks) (more details)[<a href="https://semver.org/" rel="noopener">https://semver.org/</a>]</em></p>
<h3 id="how-to-fork-another-design">How to Fork Another Design</h3>
<p>Open up bash/terminal/command prompt to a folder. Run <code>git clone &lt;repo you want to fo</code>rk&gt;.<code> Open Des</code>ign.js and make your changes.</p>
<p><em>You might want to rename the folder to whatever you would like to name your design</em>.</p>
<p>After you are done making changes, reset the design version to <code>1.0.0</code> by modifying <code>"version": "x.y.z"</code>, (line 11) inside <code>Design.js</code> . Update other information like <code>name, short_desc, long_desc, message</code> etc.</p>
<p><em>Start thinking of this design as a new design from now on.</em></p>
<p>If you want to continue pulling changes from the parent repo, follow this <a href="https://gist.github.com/CristinaSolana/1885435" rel="noopener">page</a>. Submit your forked design as a new design by following the <code>Submit Your Design</code> process.</p>
<p>You are set!</p>
<h3 id="a-little-more-in-depth">A Little More in Depth</h3>
<p>Up to this point, we’ve quickly glanced over a few things. Now that you have a better understanding, we will look a bit more in depth.</p>
<h4 id="design-info">Design Info</h4>
<p>At the top, you will see the design meta information which looks like this:</p><pre><code>Design.info = {  "name": "Boxy",  "designer": "Roxy",  "version": "1.0.0",  "license": "MIT",  "short_desc": "Template design file demoing project setup.",  "long_desc": "",  "url": null,  "message": "Control the parameters of the cube using these controls.",  "tags": [ "", "" ]}</code></pre>
<p>This is used to show information about the design in the gallery.</p>
<h4 id="input-types">Input Types</h4>
<p>To give you control over your input parameters, you can specify different types of input.</p><pre><code>Design.inputs = { ... };</code></pre>
<p>There are 4 types of paramaters you can provide — <code>slider</code>, <code>bool</code>, <code>select</code> and <code>text</code>.<br> <code>slider</code> is used to allow the user to pick a numercial value from a continuous range. The values are in integers.<br> <code>bool</code> allows the user to pick from a yes/no value.<br> <code>select</code> allows the user to select one from a list of values.<br> <code>text</code> takes input for text values.<br>To add a parameters to your design you need to register it by adding a key-value pair to <code>Design.input</code>.</p>
<h4 id="slicing">Slicing</h4>
<p>Slicing is the process of extracting straight sections from your design which we can use to fabricate the design.</p>
<p>Read the <a href="https://github.com/O-LAP/home/blob/master/faq.md" rel="noopener">FAQ</a> to understand the process.</p>
<p>Use the <code>sliceManager</code> to communicate to the framework how you want the design to be sliced.</p>
<p>We do this by passing a <code>config</code> object to the SliceManager. If we want to create slices along the X-axis at -80 and go up +80 with 3 slices equally distributed in that range (all distances are in millimeters), we pass in an object that looks like this:</p>
<p><code>{uDir: true, start: -80, end: 80, cuts: 3}</code></p>
<p>To create another set of slices along the Y-axis which start at -90 and go up to +90 with 4 cuts, we pass in an object like this:</p>
<p><code>{uDir: true, start: -90, end: 90, cuts: 4}</code></p>
<p><em>Make sure to specify the slicing configuration right before adding the geometry.</em> Generally, with two sets of slices in the opposite directions, you should have designs which can be fabricated. But you need to be careful about how you think of this in your design.</p>
<p>Read the <a href="https://github.com/O-LAP/home/blob/master/guidelines.md" rel="noopener">design guidelines</a> to get a better understanding of this.</p>
<h3 id="next-steps">Next Steps</h3>
<p>This guide walked you through the steps involved in getting the right files, making a design from scratch, and submitting it.</p>
<p>To understand more about parametric furniture design, check out the <a href="https://medium.com/@olapdesign/design-for-a-rocking-chair-8a1a1e109d7f" rel="noopener">design article</a>. Experiment with the concept and its creative potential (constrained to the physical production limitations).</p>
<p>To submit designs to the main gallery make sure to read the <a href="https://github.com/O-LAP/home/blob/master/guidelines.md" rel="noopener">design guidelines</a>.</p>
<p><em>Article by Amit Nambiar for O-lap</em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
