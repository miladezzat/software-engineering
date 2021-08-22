---
card: "https://cdn-media-1.freecodecamp.org/images/1*4ZdfWIIB1rwY8wjXMkfb0g.jpeg"
tags: [Programming]
description: "When we design software, we constantly think about error case"
author: "Milad E. Fahmy"
title: "How to build a rock solid app"
created: "2021-08-16T11:37:49+02:00"
modified: "2021-08-16T11:37:49+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-apps-tag tag-technology tag-design tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a rock solid app</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*4ZdfWIIB1rwY8wjXMkfb0g.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*4ZdfWIIB1rwY8wjXMkfb0g.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*4ZdfWIIB1rwY8wjXMkfb0g.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*4ZdfWIIB1rwY8wjXMkfb0g.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*4ZdfWIIB1rwY8wjXMkfb0g.jpeg" alt="How to build a rock solid app">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
/**
* Assume that we're using a message bus which is able to
* retry failed messages with a custom retry delay.
*/
class FetchCarMessageHandler
{
public function handle(Message $msg)
{
try {
$id = (int)$msg-&gt;getContent();
$cars = $client-&gt;get('/car/'.$id);
return Result::success($cars);
} catch (TimeoutException $e) {
$lastBackoff = $msg-&gt;getLastBackoff();
// The infrastructure layer will automagically retry the message after XYZ seconds
return Result::retryAfter($lastBackoff * 2, $msg);
}
}
class CircuitBreaker
{
private $maxFailures;
private $service;
private $redisClient;
public function __construct(int $maxFailures, callable $service)
{
$this-&gt;maxFailures = $maxFailures;
$this-&gt;service = $service;
$this-&gt;redisClient = new RedisClient();
}
private function isUp(string $key)
{
return (int)$this-&gt;redisClient-&gt;get($key) &lt; $this-&gt;maxFailures;
}
private function fail(string $key, int $ttl)
{
$this-&gt;redisClient-&gt;incr($key, 1);
$this-&gt;redisClient-&gt;expire($key, $ttl);
}
public function __invoke()
{
[$arguments, $defaultResponse] = func_get_args();
$key = md5($arguments);
if (!$this-&gt;isUp($key)) {
return $defaultResponse;
}
try {
$result = call_user_func_array($this-&gt;service, $arguments);
return $result;
} catch (\Throwable $e) {
$this-&gt;fail($key, 10);
return $defaultResponse;
}
}
}</code></pre><p>The circuit breaker will transparently handle all errors and show the default response in case of an API call failure. It also allows defining a max number of retries to avoid too many failed calls.</p><p>In this case, protecting a third party service API call is a very simple task: we just need to provide the callback and number of max failures allowed, after which the <strong>circuit breaker</strong> will be opened for 10 seconds and the default response is given back to the client, as in the example below.</p><pre><code class="language-php">&lt;?php
$productListing = new CircuitBreaker(
10,
function($searchKey) {
// $result is given from the api call
return $result;
}
);
$productsToShow = $productListing(['t-shirt'], []);</code></pre><h4 id="conclusion">Conclusion</h4><p>Whether you’re designing a SOA, micro services or a cloud native application, you should be ready to tackle the failure case in the right way. Errors and failures are in the same room from the day you launch your app.</p><p>Here some of the well known tactics to build a real rock solid app:</p><ul><li><a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/retry" rel="noopener">https://docs.microsoft.com/en-us/azure/architecture/patterns/retry</a></li><li><a href="https://en.m.wikipedia.org/wiki/Exponential_backoff" rel="noopener">https://en.m.wikipedia.org/wiki/Exponential_backoff</a></li><li><a href="https://martinfowler.com/bliki/CircuitBreaker.html" rel="noopener">https://martinfowler.com/bliki/CircuitBreaker.html</a></li></ul>
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
