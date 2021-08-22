---
card: "https://cdn-media-1.freecodecamp.org/images/1*0HNQmPw5yXva6powvVwn5Q.jpeg"
tags: [Webhooks]
description: "by Stefan Doorn"
author: "Milad E. Fahmy"
title: "How to test Webhooks when you’re developing locally"
created: "2021-08-16T11:47:25+02:00"
modified: "2021-08-16T11:47:25+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-webhooks tag-vagrant tag-technology tag-development tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to test Webhooks when you’re developing locally</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*0HNQmPw5yXva6powvVwn5Q.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*0HNQmPw5yXva6powvVwn5Q.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*0HNQmPw5yXva6powvVwn5Q.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*0HNQmPw5yXva6powvVwn5Q.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*0HNQmPw5yXva6powvVwn5Q.jpeg" alt="How to test Webhooks when you’re developing locally">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
/*
* This file creates a payment and tells the PSP what webhook URL to use for updates
* After creating the payment, we get a URL to send the customer to in order to pay at the PSP
*/
$payment = [
'order_id' =&gt; 123,
'amount' =&gt; 25.00,
'description' =&gt; 'Test payment',
'redirect_url' =&gt; 'http://webhook.example.vagrant/redirect.php',
'webhook_url' =&gt; 'http://webhook.example.vagrant/webhook.php',
];
$payment = $paymentProvider-&gt;createPayment($payment);
header("Location: " . $payment-&gt;getPaymentUrl());</code></pre><p>Second file: <em>webhook.php</em>. This file waits to be called by the PSP to get notified about updates.</p><pre><code class="language-php">&lt;?php
/*
* This file gets called by the PSP and in the $_POST they submit an 'id'
* We can use this ID to get the latest status from the PSP and update our internal systems afterward
*/
$paymentId = $_POST['id'];
$paymentInfo = $paymentProvider-&gt;getPayment($paymentId);
$status = $paymentInfo-&gt;getStatus();
// Perform actions in here to update your system
if ($status === 'paid') {
..
}
elseif ($status === 'cancelled') {
..
/*
* This file creates a payment and tells the PSP what webhook URL to use for updates
* After creating the payment, we get a URL to send the customer to in order to pay at the PSP
*/
$payment = [
'order_id' =&gt; 123,
'amount' =&gt; 25.00,
'description' =&gt; 'Test payment',
'redirect_url' =&gt; 'http://webhook.example.vagrant/redirect.php',
'webhook_url' =&gt; 'https://39741ffc.ngrok.io/webhook.php',
];
$payment = $paymentProvider-&gt;createPayment($payment);
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
