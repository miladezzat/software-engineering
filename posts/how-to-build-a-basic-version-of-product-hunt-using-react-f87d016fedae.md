---
card: "https://cdn-media-1.freecodecamp.org/images/1*OcJzrdQWZSd07hYpHnBf2A.png"
tags: [Web Development]
description: "by Emmanuel Yusufu"
author: "Milad E. Fahmy"
title: "How to build a basic version of Product Hunt using React"
created: "2021-08-16T10:21:30+02:00"
modified: "2021-08-16T10:21:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-react tag-javascript tag-startup tag-product-hunt ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a basic version of Product Hunt using React</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*OcJzrdQWZSd07hYpHnBf2A.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*OcJzrdQWZSd07hYpHnBf2A.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*OcJzrdQWZSd07hYpHnBf2A.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*OcJzrdQWZSd07hYpHnBf2A.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*OcJzrdQWZSd07hYpHnBf2A.png" alt="How to build a basic version of Product Hunt using React">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
|    ├───app.js
|    ├───seed.js
|    ├───style.css
└───vendor
├───bootstrap-3.3.7-dist
├───font-awesome-4.7.0
├───react.js
├───react-dom.js
└───babel-standalone.js</code></pre><p><strong>Note:</strong> Your code editor should have a live server. This allows us to serve the files to our browser to view our work. Make sure to install the extension for your preferred code editor.</p><p>Under the src folder there are <strong>app.js</strong> and <strong>seed.js</strong> files. The app.js file is where we will write most of the code for our application. The seed.js file already contains the data collection of the products to be displayed.</p><p>Our seed.js file contains the following code</p><pre><code class="language-js">window.Seed = (function () {
function generateVoteCount() {
return Math.floor((Math.random() * 50) + 15);
}
const products = [
{
id: 1,
title: 'Yellow Pail',
description: 'On-demand sand castle construction expertise.',
url: '#',
votes: generateVoteCount(),
submitterAvatarUrl: 'images/avatars/daniel.jpg',
productImageUrl: 'images/products/image-aqua.png',
},
...
];
return { products: products };
}());</code></pre><p>This code creates a function <code>generateVoteCount()</code> which we will explain later and a <code>products</code> array that contains the data of our products. They are wrapped as a self-invoking function, and are attached to the <code>window</code> object of our browser. This way we can access them anywhere we want them.</p><p>The <code>Seed</code> function eventually returns an object with a property of products and a value of <code>products</code>. This means that, if we execute <code>Seed.products</code>, we should have every product object returned to us.</p><p>The <strong>react.js</strong> file is the code containing the React core itself. Also, <strong>react-dom.js</strong> is the code that helps us render out React components we’ve created in HTML DOM. Finally, <strong>babel-standalone.js</strong> is the Babel code that transpiles the advanced JSX and ES6 code we will be working with into ES5 code (the most common JavaScript specification that most old and current browsers support today).</p><h4 id="step-2-create-components">Step 2: create components</h4><p>We need to create two React components. We will call the parent component <code>ProductList</code> , and the collection of children components it houses will be <code>Procuct</code> .</p><p>Inside the app.js file, create the parent component by doing this:</p><pre><code class="language-jsx">class ProductList extends React.Component {
render() {
const products = Seed.products.map((product) =&gt; (
&lt;Product
id={product.id}
title={product.title}
description={product.description}
url={product.url}
votes={product.votes}
submitterAvatarUrl={product.submitterAvatarUrl}
productImageUrl={product.productImageUrl}
/&gt;
));
return (
&lt;div className="container"&gt;
&lt;h1&gt;Popular products&lt;/h1&gt;
&lt;hr /&gt;
{products}
&lt;/div&gt;
);
}
}
ReactDOM.render(&lt;ProductList /&gt;, document.getElementById('content'));</code></pre><p>In the parent component, we intend to create a child component based on each object accessible from <code>Seed.products</code> . So we set up some props. Now let’s actually declare the child component still in the same file called <code>Product</code> :</p><pre><code class="language-jsx">class Product extends React.Component {
render() {
return (
&lt;div className='container'&gt;
&lt;div className="row"&gt;
&lt;div className='col-md-12'&gt;
&lt;div className="main"&gt;
&lt;div className="image"&gt;
&lt;img src={this.props.productImageUrl} /&gt;
&lt;/div&gt;
&lt;div className='header'&gt;
&lt;a&gt;
&lt;i className='fa fa-2x fa-caret-up' /&gt;
&lt;/a&gt;
{this.props.votes}
&lt;/div&gt;
&lt;div className='description'&gt;
&lt;a href={this.props.url}&gt;
{this.props.title}
&lt;/a&gt;
&lt;p&gt;{this.props.description}
&lt;/p&gt;
&lt;/div&gt;
&lt;div className='extra'&gt;
&lt;span&gt;Submitted by:&lt;/span&gt;
&lt;img
className='avatar'
src={this.props.submitterAvatarUrl}
/&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
);
}
super();
this.state = {
products: []
}
}</code></pre><p>When initializing state in a component, we try to define what it should look like while keeping it empty. Our products are an array, so we use an empty array. We initialize it inside <code>constructor() {}</code> , because that's the piece of code that runs when our component is created.</p><p>Lets make our component read <code>products</code> from its own state instead of from a file. Add:</p><pre><code class="language-jsx"> componentDidMount() {
this.setState({ products: Seed.products })
}</code></pre><p>to set the state to use. Also update <code>const products = Seed.products</code> to <code>const products = this.state.products</code>. To make JavaScript sort it according to the highest number of votes, write this instead:</p><pre><code class="language-jsx">const products = this.state.products.sort((a, b) {
b.votes - a.votes
});</code></pre><p>The JavaScript <code>sort();</code> uses a <strong>compare function</strong> inside. You could find out about this in a documentation.</p><h4 id="step-4-handle-upvoting">Step 4: handle upvoting</h4><p>Let’s head over to the hyperlink surrounding the font-awesome, caret-up icon and create a function using onClick.</p><pre><code class="language-jsx">&lt;a onClick={passTheId}&gt;
&lt;i className='fa fa-2x fa-caret-up' /&gt;
&lt;/a&gt;</code></pre><p>After we’ve defined the function, lets actually create it. Inside the Product component, create a <code>passTheId();</code> function:</p><pre><code class="language-jsx">constructor() {
super();
this.passTheId = this.passTheId.bind(this);
}
passTheId() {
console.log('Id will be passed');
}</code></pre><p>We bound the function to the <code>this</code> keyword, because only in-built functions like render() have access to use that word.</p><p>Lets create another function in the ProductList component. This one will update the state working with the <code>handleUpVote</code> function of the Product component.</p><pre><code class="language-jsx">handleProductUpVote = (productId) =&gt; {
const nextProducts = this.state.products.map((product) =&gt; {
if (product.id === productId) {
return Object.assign({}, product, {
votes: product.votes + 1,
});
} else {
return product;
}
});
this.setState({
products: nextProducts,
});
}</code></pre><p>States in React should be treated as immutable. That is, they should not be modified directly. The above function will do that using JavaScript’s <code>Object.assign();</code>by creating a seemingly new array called <code>nextProducts</code> . This is similar to the existing state, but has a change in the number of votes. <code>nextProducts</code>is then set as the new state. It seems weird to do things this way, but this is what the React team recommends to improve performance.</p><p>We want to pass the ID of the product from the child <code>Product</code> component to the parent <code>ProductList</code> component, so lets make <code>handleProductUpVote</code> available to the child as props:</p><pre><code class="language-jsx">const productComponents = products.map((product) =&gt; (
&lt;Product
key={'product-' + product.id}
id={product.id}
title={product.title}
description={product.description}
url={product.url}
votes={product.votes}
submitterAvatarUrl={product.submitterAvatarUrl}
productImageUrl={product.productImageUrl}
onVote={this.handleProductUpVote}
/&gt;
));</code></pre><p>We added <code>onVote={this.handleProductUpVote}</code>. So at the child level, we can access it through <code>this.props</code></p><pre><code class="language-jsx">passTheId() {
console.log('Id will be passed');
this.props.onVote(this.props.id)
}</code></pre><p>Your entire <code>app.js</code> file should look like this:</p><pre><code class="language-jsx">class ProductList extends React.Component {
state = {
products: [],
};
componentDidMount() {
this.setState({ products: Seed.products });
}
handleProductUpVote = (productId) =&gt; {
const nextProducts = this.state.products.map((product) =&gt; {
if (product.id === productId) {
return Object.assign({}, product, {
votes: product.votes + 1,
});
} else {
return product;
}
});
this.setState({
products: nextProducts,
});
}
render() {
const products = this.state.products.sort((a, b) =&gt; (
b.votes - a.votes
));
const productComponents = products.map((product) =&gt; (
&lt;Product
key={'product-' + product.id}
id={product.id}
title={product.title}
description={product.description}
url={product.url}
votes={product.votes}
submitterAvatarUrl={product.submitterAvatarUrl}
productImageUrl={product.productImageUrl}
onVote={this.handleProductUpVote}
/&gt;
));
return (
&lt;div className="container"&gt;
&lt;h1&gt;Popular products&lt;/h1&gt;
&lt;hr /&gt;
{productComponents}
&lt;/div&gt;
);
}
}
class Product extends React.Component {
constructor() {
super();
this.passTheId = this.passTheId.bind(this);
}
passTheId() {
console.log('Id will be passed');
this.props.onVote(this.props.id);
}
render() {
return (
&lt;div className='container'&gt;
&lt;div className="row"&gt;
&lt;div className='col-md-12'&gt;
&lt;div className="main"&gt;
&lt;div className="image"&gt;
&lt;img src={this.props.productImageUrl} /&gt;
&lt;/div&gt;
&lt;div className='header'&gt;
&lt;a onClick={this.passTheId}&gt;
&lt;i className='fa fa-2x fa-caret-up' /&gt;
&lt;/a&gt;
{this.props.votes}
&lt;/div&gt;
&lt;div className='description'&gt;
&lt;a href={this.props.url}&gt;
{this.props.title}
&lt;/a&gt;
&lt;p&gt;
{this.props.description}
&lt;/p&gt;
&lt;/div&gt;
&lt;div className='extra'&gt;
&lt;span&gt;Submitted by:&lt;/span&gt;
&lt;img
className='avatar'
src={this.props.submitterAvatarUrl}
/&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
);
}
}
ReactDOM.render(&lt;ProductList /&gt;, document.getElementById('content'));</code></pre><p>Refresh your browser and you should see the working app. <a href="http://reactdemo.emmanuelyusufu.com" rel="noopener"><strong>View demo</strong></a>.</p><p>Feel free to share, comment or ask questions. For the final code, visit this <a href="https://github.com/emmyyusufu/react-product-voting-app-with-bootstrap" rel="noopener">github link</a> and clone to your computer.</p><p>If you enjoyed this article, give me some claps so more people see it. Thank you for reading.</p><p>You can read more of my writing on my blog: <a href="http://stellarcode.co/build-a-product-hunt-inspired-app-with-react-2/" rel="noopener">Stellar Code</a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
