---
card: "https://cdn-media-1.freecodecamp.org/images/1*YNkO-BfTsVJYxslNrNn8LA.jpeg"
tags: [Tech]
description: "This post will use the above question to explore DNS, dig, A "
author: "Milad E. Fahmy"
title: "Why a domain’s root can’t be a CNAME — and other tidbits about the DNS"
created: "2021-08-16T11:44:23+02:00"
modified: "2021-08-16T11:44:23+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-tech tag-technology tag-programing tag-dns tag-internet ">
<header class="post-full-header">
<h1 class="post-full-title">Why a domain’s root can’t be a CNAME — and other tidbits about the DNS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*YNkO-BfTsVJYxslNrNn8LA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*YNkO-BfTsVJYxslNrNn8LA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*YNkO-BfTsVJYxslNrNn8LA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*YNkO-BfTsVJYxslNrNn8LA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*YNkO-BfTsVJYxslNrNn8LA.jpeg" alt="Why a domain’s root can’t be a CNAME — and other tidbits about the DNS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
example.com. 72703      IN     A       93.184.216.34</code></pre><p>And there we go, we can see that <code>example.com</code> returns an <code>A</code> record of <code>93.184.216.34</code>. Sometimes domains will have more than one <code>A</code> record, if more than one web server can provide the information needed.</p><p>There’s more! If we try out some other examples, we can soon see that another common record appears: <code>CNAME</code>.</p><p><code>$ dig www.skyscanner.net</code>:</p><pre><code>;; ANSWER SECTION:
www.skyscanner.net. 169 IN CNAME www.skyscanner.net.edgekey.net.
www.skyscanner.net.edgekey.net. 5639 IN CNAME e11316.a.akamaiedge.net.
e11316.a.akamaiedge.net. 20 IN A 23.217.6.192</code></pre><pre><code>www.skyscanner.net.edgekey.net. 5639 IN CNAME e11316.a.akamaiedge.net.</code></pre><pre><code>e11316.a.akamaiedge.net. 20 IN A 23.217.6.192</code></pre><p>Using the <code>+short</code> flag allows us to clearly see the path formed:</p><p><code>$ dig <a href="http://www.skyscanner.net" rel="noopener">www.skyscanner.net</a> +short</code></p><pre><code>www.skyscanner.net.edgekey.net.
e11316.a.akamaiedge.net.
23.217.6.192</code></pre><h3 id="cname">CNAME</h3><p>A <code>CNAME</code> record allows a domain name to be used as an alias for another canonical (true) domain.</p><p>When the DNS server returns a <code>CNAME</code> record, it will not return that to the client. Rather it will again look up the returned domain name, and in turn return the <code>A</code> record’s IP address. This chain can continue many <code>CNAME</code> levels deep, but then suffers minor performance hits from multiple lookups before caching takes place.</p><p>A simple example of this could be if you have a server where you keep all your photos. You may normally access it through <code>photos.example.com</code>. However, you might also want it to allow access via <code>photographs.example.com</code>. One way to make this possible is to add a <code>CNAME</code> record that points <code>photographs</code> to <code>photos</code>. This means that when someone visits <code>photographs.example.com</code> they would be given the same content as <code>photos.example.com</code>.</p><p>Using the query <code>$ dig photographs.example.com</code> we would see:</p><pre><code>photographs.example.com    IN   CNAME photos.example.com
photos.example.com   IN   A     xx.xxx.x.xxx</code></pre><p>It’s important to note that the <code>CNAME</code> is that piece to the right hand side. The left hand side is the alias name, or label.</p><p>Another common use is for the <code>www</code> subdomain. Having purchased <code>example.com</code> you likely also want users who type in <code>www.example.com</code> to see the same content.</p><p>It is worth noting here that <code>example.com</code> can be called the apex, root, or naked domain name.</p><p>One option would be to set up another <code>A</code> record, pointing to the same IP address as for <code>example.com</code>. This is completely valid, and is what the real <code>example.com</code> does, but it does not scale well. What happens if you need to update the IP address that <code>example.com</code> points to? You would also need to update it for the <code>www</code> subdomain, and any others you may use.</p><p>If a <code>CNAME</code> record was used to alias <code>www.example.com</code> to point to <code>example.com</code> then only the root domain would have to be updated, as all other nodes point to it.</p><h3 id="cname-limitations">CNAME limitations</h3><p>At the time when the DNS standards were written, some rules were set out to govern their use. <a href="https://tools.ietf.org/html/rfc1912" rel="noopener">RFC 1912</a> and <a href="https://tools.ietf.org/html/rfc2181" rel="noopener">RFC 2181</a> set out that:</p><ul><li><code>SOA</code> and <code>NS</code> records are mandatory to be present at the root domain</li><li><code>CNAME</code> records can only exist as single records and can not be combined with any other resource record ( DNSSEC <code>SIG</code>, <code>NXT</code>, and <code>KEY RR</code> records excepted)</li></ul><p>This excludes a <code>CNAME</code> being used on the root domain, as the two rules would contradict each other.</p><p>What’s important here is that this is a contractual limitation, not a technical one. It is possible to use a <code>CNAME</code> at the root, but it can result in unexpected errors, as it is breaking the expected contract of behavior.</p><p>An example of this is <a href="https://blog.cloudflare.com/introducing-cname-flattening-rfc-compliant-cnames-at-a-domains-root/" rel="noopener">told by Cloudflare</a>, describing problems they encountered with Microsoft Exchange mail servers after having used a <code>CNAME</code> on their root domain:</p><blockquote>Domains generally designate the servers that handle their email through what’s known as a MX Record. The problem was that Exchange servers … could pick up the CNAME at the root record and then not properly respect the CNAME set at the MX record. You can’t really blame Exchange. <strong>They were operating under the assumptions laid out by the DNS specification.</strong></blockquote><p>Here you see the downside that can appear in several server softwares or libraries. Because a standard is in place for a <code>CNAME</code> to be the <strong>only</strong> record at a node, <strong>no other records are looked for. </strong>All other records will be silently ignored, without warning or error messages. Even if an <code>MX</code> record was set to receive email, the <code>MX</code> will be ignored as if it doesn’t exist because the <code>CNAME</code> is evaluated first. The same is true if there were an <code>A</code> record: the <code>CNAME</code> would take precedence and the <code>A</code> record would not be read.</p><h3 id="the-modern-internet">The modern internet</h3><p>So why is this a problem? Why would you ever want to use a <code>CNAME</code> for your root domain anyway? Surely that is the end of the path when looking for the IP address of the web server hosting your content?</p><p>In the modern internet landscape, that is no longer the case. The world is very different from when the DNS standards were written.</p><p>You may choose to use a Platform as a Service (PaaS) provider like <a href="https://www.heroku.com/" rel="noopener">Heroku</a> and store content on their web servers. You control the content, but not the infrastructure, and the PaaS provider does the heavy lifting of the network maintenance. They typically provide you with a URL (<code>my-app.herokuapp.com</code>) that is a subdomain of their root domain, and you can view the IP addresses for the web server(s) your content is on. But these are entirely under the PaaS provider’s control, and will change without warning.</p><p>The scale and frequency of backend changes made by the PaaS provider can make it hard to maintain your root domain <code>A</code> record pointing at a single IP address. Ideally you would wish to do this:</p><pre><code>example.com      IN   CNAME    my-app.herokuapp.com.www.example.com  IN   CNAME    my-app.herokuapp.com.example.com      IN   CNAME    my-app.herokuapp.com.
www.example.com  IN   CNAME    my-app.herokuapp.com.</code></pre><p>to allow Heroku (or your chosen host provider) to manage updating the <code>A</code> record that the <code>CNAME</code> points to without any changes made on your side. However, as we now know, this breaks the DNS specification, so is a very bad idea.</p><p>It is possible to simply implement a <a href="https://www.namecheap.com/support/knowledgebase/article.aspx/9604/2237/types-of-domain-redirects--301-302-url-redirects-url-frame-and-cname" rel="noopener">301/302</a> redirect from <code>example.com</code> to <code>www.example.com.</code> However, that instruction takes place either on the web server (so still having the problem of needing to use a fixed <code>A</code> record in DNS to point to that web server), or a custom DNS provider redirect (that <a href="https://support.dnsimple.com/articles/url-record/" rel="noopener">suffers complications with HTTPS</a>).</p><p>This also has the side effect of changing the domain that you see in the URL bar, which you may not want. This method is intended for when your website has permanently moved, or when you’re trying to <a href="https://support.google.com/webmasters/answer/93633?hl=en" rel="noopener">preserve SEO rankings</a>, rather than solving our problem of pointing to a complex changing backend in a scaleable way.</p><h3 id="the-solution">The solution</h3><p>Several DNS providers have now developed custom solutions to work around this problem, including:</p><ul><li><code>ALIAS</code> at DNSimple</li><li><code>ANAME</code> at DNS Made Easy</li><li><code>ANAME</code> at easyDNS</li><li><code>CNAME</code> (virtual) at CloudFlare</li></ul><p>These are all virtual record types that provide <code>CNAME</code> like behaviour, with none of the downsides. The exact implementation can differ, but at a high level when the DNS server sees one of these virtual record types, it acts as a DNS resolver. It follows the chain created by the alias until it resolves at an <code>A</code> record (or records) and returns these <code>A</code> records to the DNS server. This ‘flattens’ the <code>CNAME</code> chain into the <code>A</code> record(s) returned, and is indistinguishable to the sent query. The query sees only a pure <code>A</code> record, which doesn’t break the DNS specification, and doesn’t have any of the disadvantages of a <code>CNAME</code>.</p><p>These virtual records can sit alongside other records at the root without any fear of unintended behaviours. Depending on the provider’s method of DNS resolution when following the <code>CNAME</code> chain, they may also have performance benefits from caching previous lookups.</p><p>For a DNSimple setup, we would then configure as below. This solution has all the advantages of domain name aliasing, and none of the risks of using it at root level.</p><pre><code>example.comIN   ALIAS    my-app.herokuapp.com.www.example.com  IN   CNAME    my-app.herokuapp.com.</code></pre><p>Thanks for reading! ?</p><p><em>As always, open to any corrections or additional points.</em></p><h3 id="resources">Resources</h3><ul><li><a href="http://www.itpro.co.uk/domain-name-system-dns/30232/what-is-a-dns-server" rel="noopener">What is a DNS Server</a></li><li><a href="https://www.wired.com/2010/02/Set_Up_a_DNS_Name_Server/" rel="noopener">Set Up a DNS Name Server</a></li><li><a href="https://support.dnsimple.com/categories/dns/" rel="noopener">DNSimple support pages</a> and <a href="https://blog.dnsimple.com/2014/01/why-alias-record/" rel="noopener">ALIAS blog</a></li><li><a href="https://support.cloudflare.com/hc/en-us/articles/200169056-CNAME-Flattening-RFC-compliant-support-for-CNAME-at-the-root" rel="noopener">Cloudflare support</a> and <a href="https://blog.cloudflare.com/introducing-cname-flattening-rfc-compliant-cnames-at-a-domains-root/" rel="noopener">CNAME blog</a></li><li><code><a href="https://www.madboa.com/geek/dig/" rel="noopener">dig</a></code><a href="https://www.madboa.com/geek/dig/" rel="noopener"> HowTo</a></li><li><a href="https://stackoverflow.com/questions/656009/how-to-overcome-root-domain-cname-restrictions/22659895#22659895" rel="noopener">Several</a> <a href="https://stackoverflow.com/questions/16022324/how-to-setup-dns-for-an-apex-domain-no-www-pointing-to-a-heroku-app" rel="noopener">great</a> <a href="https://stackoverflow.com/questions/655235/is-root-domain-cname-to-other-domain-allowed-by-dns-rfc" rel="noopener">Stack Overflow</a> or <a href="https://serverfault.com/questions/170194/why-cant-a-domains-root-be-a-cname?noredirect=1&amp;lq=1" rel="noopener">StackExchange</a> <a href="https://serverfault.com/questions/613829/why-cant-a-cname-record-be-used-at-the-apex-aka-root-of-a-domain/613830#613830" rel="noopener">posts</a></li><li><a href="https://en.wikipedia.org/wiki/CNAME_record" rel="noopener">Well written</a> Wikipedia entries</li><li><a href="https://www.netlify.com/blog/2017/02/28/to-www-or-not-www/" rel="noopener">Netlify blog</a> ‘To www or not www’</li></ul>
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