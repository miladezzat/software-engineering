---
card: "/images/default.jpg"
tags: [GraphQL]
description: "The GraphQL schema language is great! It is certainly the bes"
author: "Milad E. Fahmy"
title: "The API I wish JavaScript GraphQL implementations supported"
created: "2021-08-15T23:43:50+02:00"
modified: "2021-08-15T23:43:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-graphql tag-javascript tag-coding tag-api ">
<header class="post-full-header">
<h1 class="post-full-title">The API I wish JavaScript GraphQL implementations supported</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/06/Screen-Shot-2019-06-10-at-11.27.12-AM.png 300w,
/news/content/images/size/w600/2019/06/Screen-Shot-2019-06-10-at-11.27.12-AM.png 600w,
/news/content/images/size/w1000/2019/06/Screen-Shot-2019-06-10-at-11.27.12-AM.png 1000w,
/news/content/images/size/w2000/2019/06/Screen-Shot-2019-06-10-at-11.27.12-AM.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/06/Screen-Shot-2019-06-10-at-11.27.12-AM.png" alt="The API I wish JavaScript GraphQL implementations supported">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
articleList: [Article!]!
}
type Article {
id: ID!
title: String!
subTitle: String
featuredImageUrl: String
readingMinutes: Int!
publishedAt: String!
author: Author!
}
type Author {
name: String!
}
</code></pre>
# ...
article(id: String!): Article!
}
enum ContentFormat {
HTML
MARKDOWN
}
type Article {
# ...
content(format: ContentFormat): String!
likes: Int!
}
</code></pre>
# ...
commentList: [Comment!]!
}
type Comment {
id: ID!
content: String!
author: Author!
}
</code></pre>
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
