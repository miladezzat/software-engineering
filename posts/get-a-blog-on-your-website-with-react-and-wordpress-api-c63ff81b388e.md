---
card: "https://cdn-media-1.freecodecamp.org/images/1*ElZM2hjwYLDE29GCAmYxoA.jpeg"
tags: [React]
description: I’ve read a lot of articles in the last few months, and have
author: "Milad E. Fahmy"
title: "Get a blog on your website with React and WordPress API"
created: "2021-08-15T19:49:22+02:00"
modified: "2021-08-15T19:49:22+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-wordpress tag-blog tag-javascript tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Get a blog on your website with React and WordPress API</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*ElZM2hjwYLDE29GCAmYxoA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*ElZM2hjwYLDE29GCAmYxoA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*ElZM2hjwYLDE29GCAmYxoA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*ElZM2hjwYLDE29GCAmYxoA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*ElZM2hjwYLDE29GCAmYxoA.jpeg" alt="Get a blog on your website with React and WordPress API">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I’ve read a lot of articles in the last few months, and have noticed that many had disclaimers saying that the post was originally posted on a personal blog. I’ve written a few articles and wanted to increase my exposure, so I decided that I wanted to have a blog on my site as well. But how to do it?</p>
<h3 id="options">Options</h3>
<p>There were a few options for incorporating a blog into my site. The main two were a custom content management system (CMS) or WordPress. I wanted to get it set up quickly, so I went with WordPress.</p>
<h3 id="wordpress-api">WordPress API</h3>
<p>I’d heard a few things about the WordPress API over the last few weeks so started to Google. I set up a free blog at <a href="http://wordpress.com" rel="noopener">WordPress.com</a> and imported my articles from Medium. This was super simple with Medium’s export facility and WordPress’s “import from Medium” facility.</p>
<p>Now that I had my articles on WordPress, I had to figure out how to access them. I found <a href="https://developer.wordpress.com/docs/api/" rel="noopener">this page</a> in the documentation and I built a very basic web page to test with.</p>
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"&gt;&lt;/script&gt;
&lt;script src="getWordpress.js"&gt;&lt;/script&gt;</code></pre>
<figcaption>getWordpress.html</figcaption>
</figure>
$.get(
"https://public-api.wordpress.com/rest/v1/sites/YourSite.wordpress.com/posts",
function(response) {
console.log(response);
}
);</code></pre>
<figcaption>getWordpress.js</figcaption>
</figure>
<p>This does the very simple task of calling the WordPress API and asking for all of the posts from “YourSite.wordpress.com.” From this, I got a response object containing the number of posts and an array of each of the posts.</p>
<h3 id="routing">Routing</h3>
<p>Now that I was going to add a blog section to my site, I had to change from the single page that I had. I installed react-router-dom and imported <code>BrowserRouter</code> and <code>Route</code> into my layout file.</p><pre><code class="language-html">&lt;BrowserRouter&gt;
&lt;div id="center-stripe"&gt;
&lt;Nav /&gt;
&lt;Route exact path="/" component={main} /&gt;
&lt;Route exact path="/blog" component={Blog} /&gt;
&lt;/div&gt;
&lt;/BrowserRouter&gt;</code></pre>
<h3 id="creating-the-blog-in-react">Creating the Blog in React</h3>
<p>My personal website is built using create-react-app and has a very basic structure. The next thing that I needed to do was to add a new “blog” page that would show previews of all the articles.</p>
constructor(props) {
super(props);
this.state = {
posts: []
};
}
componentDidMount() {
axios
.get(
"http://public-api.wordpress.com/rest/v1/sites/samwcoding.wordpress.com/posts"
)
.then(res =&gt; {
this.setState({ posts: res.data.posts });
console.log(this.state.posts);
})
.catch(error =&gt; console.log(error));
}
render() {
return (
&lt;div className="blog"&gt;
&lt;h1 className="sectionTitle"&gt;Articles&lt;/h1&gt;
{this.state.posts.map(post =&gt; &lt;ArticlePreview post={post} /&gt;)}
&lt;/div&gt;
);
}
}</code></pre>
<figcaption>blog.js</figcaption>
</figure>
<p>I’ll talk you through this code. The top section sets the state of the component with an empty array of posts. Then I use the <code>componentDidMount</code> function to execute the call to the WordPress API with axios. When the API call returns, I set this.state.posts to be the array of posts. This then causes line 24 to render an <code>ArticlePreview</code> component for each of the posts.</p>
if (this.props.post) {
return (
&lt;div className="article"&gt;
&lt;a href={"/blog/" + this.props.post.ID} className="blackLink"&gt;
{this.props.post.featured_image ? (
&lt;img
className="img-responsive webpic"
alt="article header"
src={this.props.post.featured_image}
/&gt;
) : (
""
)}
&lt;h1 className="text-center"&gt;{this.props.post.title}&lt;/h1&gt;
&lt;div className="content"&gt;{excerpt}&lt;/div&gt;
&lt;/a&gt;
&lt;Link to={"/blog/" + this.props.post.ID}&gt;
&lt;button className="btn"&gt;Read More&lt;/button&gt;
&lt;/Link&gt;
&lt;/div&gt;
);
} else {
return null;
}
}</code></pre>
<figcaption>articlePreview.js</figcaption>
</figure>
<p>ArticlePreview takes each post and renders the preview with a title and excerpt, which are both provided by the WordPress API. If the post also has a featured image, it includes that too.</p>
<figcaption>Previews from the WordPress API</figcaption>
</figure>
<p>I reused a lot of the CSS from the rest of the website to style the article previews, and it looks quite good. One major error is the “&lt;p&gt;I&amp;#8217;” and similar bits dotted throughout the excerpt. To solve this, I set the excerpt to run though a <code>removeUnicode() </code>function before being rendered to the screen. It simply replaced all <code>&amp;#8217 </code>with just a comma and removed the <code>&lt;p&gt; and [&amp;hellip;]</code>tags. It’s not elegant, but it works.</p>
<p>I then had to create a component for whole articles. I added another route for <code>/blog/:id </code>and started on the new component. It was almost identical to the <code>ArticlePreview </code>component, except that instead of rendering just the excerpt, it would render one article. Getting the article from WordPress was very simple, just adding the article ID onto the end of the previous API call.</p><pre><code class="language-js">axios.get(
"http://public-api.wordpress.com/rest/v1/sites/samwcoding.wordpress.com/posts/" +
this.props.match.params.id
)</code></pre>
<p>Getting the article response was where I hit my first stumbling block. The body of the article was in stringified HTML format. I found a solution with the <code>dangerouslySetInnerHTML </code>function. <em><em>(If anyone has any suggestions on how to implement this better, please let me know.)</em></em></p>
<figcaption>Working article</figcaption>
</figure>
<p>I had a few more changes to make. The nav buttons at the top just connected to anchor tags. That worked fine on a single page website, but now they were sending users to <code>/blog#about</code>, which doesn’t work. This was solved by defining the link specifically as <code>/#about </code>and <code>/#projects</code> .</p>
<p>The blog works well with the number of articles I currently have written, but how will it cope when there are 50 or 100 articles? In the future I may have to render a few of the article previews at a time, rendering more if the user scrolls to the bottom. Another feature I could add is searching.</p>
<p>Check out the blog at <a href="https://samwsoftware.herokuapp.com/blog">SamWSoftware blog</a> and view my whole <a href="https://github.com/SamWSoftware/NodePortfolio">code here</a>.</p>
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
