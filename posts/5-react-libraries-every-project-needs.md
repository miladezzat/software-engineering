---
card: "/images/default.jpg"
tags: [React]
description: "There are literally 100s of great React libraries to choose f"
author: "Milad E. Fahmy"
title: "5 React Libraries Every Project Should Use in 2021"
created: "2021-08-16T10:03:27+02:00"
modified: "2021-08-16T10:03:27+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-react-hooks tag-libraries tag-web-development tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">5 React Libraries Every Project Should Use in 2021</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/07/5-libraries-every-react-project-needs.png 300w,
/news/content/images/size/w600/2021/07/5-libraries-every-react-project-needs.png 600w,
/news/content/images/size/w1000/2021/07/5-libraries-every-react-project-needs.png 1000w,
/news/content/images/size/w2000/2021/07/5-libraries-every-react-project-needs.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/07/5-libraries-every-react-project-needs.png" alt="5 React Libraries Every Project Should Use in 2021">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<source src="https://reedbarger.nyc3.digitaloceanspaces.com/vite-react.mp4" type="video/mp4">
Sorry, your browser doesn't support embedded videos.
import { useFormik } from 'formik';
const SignupForm = () =&gt; {
const formik = useFormik({
initialValues: {
username: '',
email: '',
},
onSubmit: values =&gt; {
alert(JSON.stringify(values, null, 2));
},
});
return (
&lt;form onSubmit={formik.handleSubmit}&gt;
&lt;label htmlFor="name"&gt;Username&lt;/label&gt;
&lt;input
id="username"
name="username"
type="text"
onChange={formik.handleChange}
value={formik.values.username}
/&gt;
&lt;label htmlFor="email"&gt;Email Address&lt;/label&gt;
&lt;input
id="email"
name="email"
type="email"
onChange={formik.handleChange}
value={formik.values.email}
/&gt;
&lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
);
};
<p><strong><a href="http://bit.ly/join-react-bootcamp">The React Bootcamp</a></strong> takes everything you should know about learning React and bundles it into one comprehensive package, including videos, cheatsheets, plus special bonuses.</p>
<p>Gain the insider information <strong>100s of developers</strong> have already used to become a React pro, find their dream job, and take control of their future:</p>
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
