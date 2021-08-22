---
card: "https://cdn-media-1.freecodecamp.org/images/0*1iaTVIFNnW0CVKg4.png"
tags: [Ssl]
description: "by Alex Nadalin"
author: "Milad E. Fahmy"
title: "How to get valid SSL certificates for local development"
created: "2021-08-16T11:37:01+02:00"
modified: "2021-08-16T11:37:01+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-ssl tag-technology tag-programming tag-web-development tag-security ">
<header class="post-full-header">
<h1 class="post-full-title">How to get valid SSL certificates for local development</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*1iaTVIFNnW0CVKg4.png 300w,
https://cdn-media-1.freecodecamp.org/images/0*1iaTVIFNnW0CVKg4.png 600w,
https://cdn-media-1.freecodecamp.org/images/0*1iaTVIFNnW0CVKg4.png 1000w,
https://cdn-media-1.freecodecamp.org/images/0*1iaTVIFNnW0CVKg4.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*1iaTVIFNnW0CVKg4.png" alt="How to get valid SSL certificates for local development">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
Using the local CA at "/home/alex/.local/share/mkcert" ✨
Created a new certificate valid for the following names ?
- "somedomain.local"
The certificate is at "./somedomain.local.pem" and the key at "./somedomain.local-key.pem" ✅</code></pre><p>For example, here’s how it would look like if you had to boot a Node server with SSL support:</p><pre><code class="language-js">const fs = require('fs')
const options = {
key: fs.readFileSync(__dirname + '/somedomain.local-key.pem'),
cert: fs.readFileSync(__dirname + '/somedomain.local.pem')
};
require('https').createServer(options, (req, res) =&gt; {
res.writeHead(200)
res.end(`Got SSL?`)
}).listen(443)</code></pre><p>Pretty neat, eh?</p><p>What <code>mkcert</code> does is to simply add another CA file in your system.(I guess under <code>/etc/ssl/certs/ca-certificates.crt</code>, but I’m not entirely sure). Browsers consider these certificates trusted — a nice workaround to trick any HTTP client.</p><p>That’s it for today! Adios!</p><p><em>Originally published at <a href="https://odino.org/valid-ssl-certificates-for-local-development/" rel="noopener">odino.org</a> (</em>1st September 2018<em>).</em><br><em>You can follow me on <a href="https://twitter.com/_odino_" rel="noopener">Twitter</a> — rants are welcome! </em>?</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
