---
card: "https://cdn-media-1.freecodecamp.org/images/1*rvRslS4L3DF-46j0LVBQ4w.png"
tags: [JavaScript]
description: "Flow is a static type checker for Javascript. This post is in"
author: "Milad E. Fahmy"
title: "How to incrementally add Flow to an existing React app"
created: "2021-08-16T11:35:13+02:00"
modified: "2021-08-16T11:35:13+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-technology tag-flow tag-react tag-software-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to incrementally add Flow to an existing React app</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*rvRslS4L3DF-46j0LVBQ4w.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*rvRslS4L3DF-46j0LVBQ4w.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*rvRslS4L3DF-46j0LVBQ4w.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*rvRslS4L3DF-46j0LVBQ4w.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*rvRslS4L3DF-46j0LVBQ4w.png" alt="How to incrementally add Flow to an existing React app">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><a href="https://flow.org/" rel="noopener">Flow</a> is a static type checker for Javascript. This post is intended for those who have <em>heard </em>of Flow, but have not yet tried to use it within a React app. If this is the first time you have heard of Flow then I can recommend <a href="https://medium.freecodecamp.org/why-use-static-types-in-javascript-part-1-8382da1e0adb" rel="noopener">these four posts</a> by Preethi Kasireddy as a great introduction.</p><p>One great thing about Flow is that it is possible use it incrementally. You do not have to completely refactor an existing project to start using it. It can be added only to new files, or slowly tried in existing files to see if it provides benefits to your specific project before committing fully.</p><p>As the setup of a new tool can often be the most challenging, in this post we are going to take an existing project and walk through the setup of adding Flow. A general introduction to syntax is covered in the second of Preethi’s posts, and the <a href="https://flow.org/en/docs/" rel="noopener">Flow docs</a> are also very readable.</p><p>We will be using this <a href="https://github.com/dominicfraser/FlowExamples" rel="noopener">example repo</a>, with two directories for pre- and post- Flow. It uses <a href="https://github.com/Skyscanner/backpack-react-scripts" rel="noopener">Skyscanner’s</a> custom Create React App script <code>backpack-react-scripts</code>, paired with their custom <a href="https://backpack.github.io/" rel="noopener">Backpack components</a>. This is aimed at creating examples more complex than single snippets, yet still readable even if you are unfamiliar with them.</p><p>The exact nature of the app is unimportant compared to seeing the difference between it’s implementation <a href="https://github.com/dominicfraser/FlowExamples/tree/master/without_flow" rel="noopener">without</a> and <a href="https://github.com/dominicfraser/FlowExamples/tree/master/with_flow" rel="noopener">with</a> Flow. Very few files change here, but they are often the most frustrating to get right!</p><p>Let’s walk through each step, and then take a look at converting the example components.</p><h3 id="install-the-main-dependencies">Install the main dependencies</h3><p>Alongside Flow itself install babel-cli and babel-preset-flow so that babel can remove the type annotations on compile.</p><pre><code>npm install flow-bin babel-cli babel-preset-flow --save-dev</code></pre><h4 id="setup-babel">Setup Babel</h4><p>In order for these to take effect create a <code>.babelrc</code> file, or add to your existing <code>.babelrc</code> the <a href="https://github.com/dominicfraser/FlowExamples/blob/master/with_flow/.babelrc" rel="noopener">following config</a>:</p><pre><code class="language-js">{
"presets": ["flow"]
}</code></pre><h4 id="setup-scripts">Setup scripts</h4><p>If you use any hooks, such as a pretest script, you may want to update these as well as adding the basic Flow <a href="https://github.com/dominicfraser/FlowExamples/blob/master/with_flow/package.json#L11" rel="noopener">script</a> to your <code>package.json</code>:</p><pre><code class="language-js">"scripts": {
"flow": "flow",
"pretest": "npm run flow &amp;&amp; npm run lint"
./src/types/global.js  // this can be any path and filename you wish
[options]
module.name_mapper='^\(.*\)\.scss$' -&gt; 'CSSModule'
module.system=haste</code></pre><p>And secondly a CSS Module type is created in <a href="https://github.com/dominicfraser/FlowExamples/blob/master/with_flow/src/types/global.js" rel="noopener">the file referenced</a> in <code>[libs]</code>.</p><pre><code class="language-js">// @flow
declare module CSSModule {
declare var exports: { [key: string]: string };
declare export default typeof exports;
}</code></pre><h3 id="sync-with-other-linters-being-used">Sync with other linters being used</h3><p>In the example project ESLint is already used to provide standard linting. There are some initial configuration steps needed to get ESLint to play nicely with Flow, and some later ones due to the specific types used in this project.</p><p>For general setup the following is <a href="https://github.com/dominicfraser/FlowExamples/blob/master/with_flow/.eslintrc" rel="noopener">added</a> to our <code>.eslintrc</code>:</p><pre><code class="language-js">"extends": [
"plugin:flowtype/recommended"
],
"plugins": [
"flowtype"
strings: { [string_key: string]: string },
onClose: Function,
isOpen: boolean,
target: Function,
strings: { [string_key: string]: string },
hideBannerClick: Function,
};
type State = {
popoverIsOpen: boolean,
};</code></pre><p>and specify that the component will use them:</p><pre><code>class Banner extends Component&lt;Props, State&gt; {
constructor(props: Props) {
super(props);
this.state = {
popoverIsOpen: false,
};
...
};
...
};</code></pre><p>Next we hit our first difference between Function and Stateful components, <code>defaultProps</code>. In a Function component these were declared as we are used to, in Stateful components the external <code>Banner.defaultProps</code> syntax is removed, and instead the defaults are declared within the class:</p><pre><code class="language-js">class Banner extends Component&lt;Props, State&gt; {
static defaultProps = {
strings: defaultStrings,
};
constructor(props: Props) {
...
// the below is removed
// Banner.defaultProps = {
//  strings: defaultStrings,
// };</code></pre><p><strong>Constructor declarations</strong></p><p><code>stringWithPlaceholder</code> is declared within the constructor. Here we are not looking at <em>why</em> it is declared there (we will assume there is good reason), but rather to see whether flow can be added without any changes to the existing code.</p><p>If run in its existing state we would encounter the error <code>Cannot get this.stringWithPlaceholder because property stringWithPlaceholder is missing in Banner [1]</code>.</p><p>To fix this we must add a single line inside the Banner class block, just beneath and outside of the constructor:</p><pre><code class="language-js">class Banner extends Component&lt;Props, State&gt; {
constructor(props: Props) {
super(props);
this.state = {
popoverIsOpen: false,
};
this.stringWithPlaceholder = ...
};
stringWithPlaceholder: string;
...
};</code></pre><p>This variable is created in the constructor but not passed in as props. As we are using Flow for type checking the props passed into the constructor, it requires <strong>everything within the constructor</strong> be type checked. It is <a href="https://github.com/facebook/flow/issues/4376" rel="noopener">known</a> that Flow requires this, and this can be done by specifying their type in the class block.</p><p>At this point Props and State are complete. Let’s look at some quick additional examples of type checking within this component. <em>*See the closing ESLint comments for any errors reported at this point.</em></p><p><strong>Return, Event, and Node types</strong></p><p><code>togglePopover</code> takes no arguments, so a simple example of specifying no return value can be seen:</p><pre><code class="language-js">togglePopover = (): void =&gt; {
...
};</code></pre><p><code>keyboardOnlyTogglePopover</code> returns nothing, but has a single parameter. This is an event, specifically a keypress event. <code>SyntheticKeyboardEvent</code> is used <a href="https://flow.org/en/docs/react/events/" rel="noopener">as</a></p><blockquote><em>React uses its own event system so it is important to use the SyntheticEvent types instead of the DOM types such as Event, KeyboardEvent, and MouseEvent.</em></blockquote><pre><code class="language-js">keyboardOnlyTogglePopover = (e: SyntheticKeyboardEvent&lt;&gt;): void =&gt; {
...
};</code></pre><p><code>Popover</code> is defined in <code>render()</code> and returns an instance of the <code>ListPopover</code> Function component we looked a previously. We can specify its return type as a React <code>Node</code>. However, to be able to do so, we must first import it, as it is <a href="https://flow.org/en/docs/react/types/" rel="noopener">not accessible by default</a>. There is more than one way to import it, one of which shown below:</p><pre><code>import React, { Component } from 'react';
import type { Node } from 'react';
...
const Popover: Node = (
&lt;ListPopover
onClose={this.togglePopover}
isOpen={this.state.popoverIsOpen}
strings={this.props.strings}
target={() =&gt; document.getElementById('ListPopoverLink')}
/&gt;
);</code></pre><h3 id="type-checking-imported-react-components"><strong>Type checking imported React components</strong></h3><p>When Prop types have been declared in a component, they can be used when using that component within another. However, if you are using an <code>index.js</code> to export the first component then the flow, <code>// @flow</code> will need to be added to the index.</p><p><a href="https://github.com/dominicfraser/FlowExamples/blob/master/with_flow/src/components/ListPopover/index.js" rel="noopener">For example</a>:</p><pre><code>// @flow
import ListPopover from './ListPopover';
export default ListPopover;</code></pre><h3 id="marking-props-as-optional">Marking props as optional</h3><p>A prop can be marked as optional using the <code>prop?: type</code> syntax, for example:</p><pre><code>type Props = {
strings: { [string_key: string]: string },
hideBannerClick?: Function,
};</code></pre><p>This is supported, but no longer recommended by Flow. Instead all props should be left as required, with no <code>?</code> , even if optional, as Flow <a href="https://github.com/facebook/flow/issues/1660#issuecomment-434549520" rel="noopener">automatically detects</a> defaultProps and marks props with a default as optional internally.</p><p>In the section below we can see how manually marking props as optional can cause conflicts with other tools in some cases.</p><h3 id="eslint-extensions-default-props-and-props-validation-error-solutions">ESLint extensions, default props, and props validation error solutions</h3><p>Two additions are made to our <code>.eslintrc</code>. For this project specifically you can simply accept their use, or read the detail below if you see any of the three errors:</p><ul><li><code>x missing in props validation</code></li><li><code>error defaultProp "x" defined for isRequired propType</code></li><li><code>Cannot get strings.xxx because property xxx is missing in undefined</code></li></ul><p>The rules added, with reasoning, are:</p><pre><code class="language-js">"react/default-props-match-prop-types": [
"error", { "allowRequiredDefaults": true }
]</code></pre><p>When using objects as maps (in this case for the 'strings' prop) a <code>missing in props validation</code> error occurs. This is <a href="https://github.com/yannickcr/eslint-plugin-react/issues/1280" rel="noopener">a bug</a> and so is explicitly <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md" rel="noopener">ignored</a> here.</p><pre><code>"react/default-props-match-prop-types": [  "error", { "allowRequiredDefaults": true }]</code></pre><p>When using objects as maps complexities between ESLint, flow, and prop-types come into play.</p><p><code>strings</code> is a required prop, passed as an object of strings. The flow type checks that for each entry in the object the string key is a string, and the value is a string. This is far more maintainable than having to list out the prop type of each specific key.</p><p>If the prop is marked as required in Flow then ESLint would error stating: <code>error defaultProp "strings" defined for isRequired propType</code>.</p><p>If the prop is manually marked as optional then Flow will error with <code>Cannot get strings.xxx because property xxx is missing in undefined [1]</code>.</p><p>This is <a href="https://github.com/facebook/flow/issues/6350" rel="noopener">known</a> and is due to <a href="https://flow.org/en/docs/lang/refinements/#toc-refinement-invalidations" rel="noopener">refinement invalidation</a> as JSX can transform method calls so Flow cannot be sure that xxx has not been redefined.</p><p>This leaves us with fixing the ESLint error. The rules above allows defaultProps to be defined while the Flow type is <em>not</em> marked as optional. Flow will understand this and convert it to optional. ESLint is marked to <code>"allowRequiredDefaults": true</code>, meaning that although ESLint sees the prop as required it will not error.</p><h3 id="final-thoughts">Final thoughts</h3><p>Once over the initial hurdle of installation, Flow is fairly straightforward to use. The ability to add it incrementally definitely helps, rather than having to refactor an entire project in one go.</p><p>Hopefully the setup instructions and examples here prove useful if you are looking to try Flow out yourself.</p><p>Thanks for reading ?</p><p>You may also enjoy:</p><ul><li><a href="https://medium.com/@dfrase/testing-react-with-jest-and-enzyme-20505fec4675" rel="noopener">Testing React with Jest and Enzyme I</a></li><li><a href="https://medium.com/p/807d8c4960fd?source=user_profile---------11------------------" rel="noopener">A beginner’s guide to Amazon’s Elastic Container Service</a></li><li><a href="https://medium.com/p/a8b5a3415227?source=user_profile---------7------------------" rel="noopener">Using Pa11y CI and Drone as accessibility testing gatekeepers</a></li></ul>
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
