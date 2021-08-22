---
card: "https://cdn-media-1.freecodecamp.org/images/1*yrGW1KubP_JKLR1CVg074g.png"
tags: [Bitcoin]
description: "In the previous article, we looked at different methods to ge"
author: "Milad E. Fahmy"
title: "How to create a Bitcoin wallet address from a private key"
created: "2021-08-16T15:40:48+02:00"
modified: "2021-08-16T15:40:48+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-bitcoin tag-cryptocurrency tag-python tag-technology tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to create a Bitcoin wallet address from a private key</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*yrGW1KubP_JKLR1CVg074g.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*yrGW1KubP_JKLR1CVg074g.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*yrGW1KubP_JKLR1CVg074g.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*yrGW1KubP_JKLR1CVg074g.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*yrGW1KubP_JKLR1CVg074g.png" alt="How to create a Bitcoin wallet address from a private key">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In <a href="/news/how-to-generate-your-very-own-bitcoin-private-key-7ad0f4936e6c/">the previous article</a>, we looked at different methods to generate a private key. Whatever method you choose, you’ll end up with 32 bytes of data. Here’s the one that we got at the end of that article:</p><p><code>60cf347dbc59d31c1358c8e5cf5e45b822ab85b79cb32a9f3d98184779a9efc2</code></p><p>We’ll use this private key throughout the article to derive both a public key and the address for the Bitcoin wallet.</p><p>What we want to do is to apply a series of conversions to the private key to get a public key and then a wallet address. Most of these conversions are called hash functions. These hash functions are one-way conversions that can’t be reversed. We won’t go to the mechanics of the functions themselves — there are plenty of great articles that cover that. Instead, we will look at how using these functions in the correct order can lead you to the Bitcoin wallet address that you can use.</p><h3 id="elliptic-curve-cryptography">Elliptic Curve Cryptography</h3><p>The first thing we need to do is to apply the ECDSA or Elliptic Curve Digital Signature Algorithm to our private key. An elliptic curve is a curve defined by the equation <code>y² = x³ + ax + b</code> with a chosen <code>a</code> and <code>b</code>. There is a whole family of such curves that are widely known and used. Bitcoin uses the <strong>secp256k1</strong> curve. If you want to learn more about Elliptic Curve Cryptography, I’ll refer you to <a href="https://hackernoon.com/what-is-the-math-behind-elliptic-curve-cryptography-f61b25253da3" rel="noopener">this article</a>.</p><p>By applying the ECDSA to the private key, we get a 64-byte integer. This consists of two 32-byte integers that represent the X and Y of the point on the elliptic curve, concatenated together.</p><p>For our example, we got: <code>1e7bcc70c72770dbb72fea022e8a6d07f814d2ebe4de9ae3f7af75bf706902a7b73ff919898c836396a6b0c96812c3213b99372050853bd1678da0ead14487d7</code>.</p><p>In Python, it would look like this:</p><pre><code class="language-python">public_key_bytes = codecs.decode(public_key, ‘hex’)
# Run SHA-256 for the public key
sha256_bpk = hashlib.sha256(public_key_bytes)
sha256_bpk_digest = sha256_bpk.digest()
# Run RIPEMD-160 for the SHA-256
ripemd160_bpk = hashlib.new(‘ripemd160’)
ripemd160_bpk.update(sha256_bpk_digest)
ripemd160_bpk_digest = ripemd160_bpk.digest()
sha256_nbpk = hashlib.sha256(network_bitcoin_public_key_bytes)
sha256_nbpk_digest = sha256_nbpk.digest()
sha256_2_nbpk = hashlib.sha256(sha256_nbpk_digest)
sha256_2_nbpk_digest = sha256_2_nbpk.digest()
sha256_2_hex = codecs.encode(sha256_2_nbpk_digest, ‘hex’)
checksum = sha256_2_hex[:8]</code></pre><h3 id="getting-the-address">Getting the address</h3><p>Finally, to make an address, we just concatenate the mainnet key and the checksum. That makes it <code>00453233600a96384bb8d73d400984117ac84d7e8b512f43c4</code> for our example.</p><p>That’s it! That’s the wallet address for the private key at the start of the article.</p><p>But you may notice that something is off. You’ve probably seen a handful of Bitcoin addresses and they didn’t look like that. Well, the reason is that they are encoded with <a href="https://en.wikipedia.org/wiki/Base58" rel="noopener">Base58</a>. It’s a little bit odd.</p><p>Here’s the algorithm to convert a hex address to the Base58 address:</p><pre><code class="language-python">def base58(address_hex):
alphabet = ‘123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz’
b58_string = ‘’
# Get the number of leading zeros
leading_zeros = len(address_hex) — len(address_hex.lstrip(‘0’))
# Convert hex to decimal
address_int = int(address_hex, 16)
# Append digits to the start of string
while address_int &gt; 0:
digit = address_int % 58
digit_char = alphabet[digit]
b58_string = digit_char + b58_string
address_int //= 58
# Add ‘1’ for each 2 leading zeros
ones = leading_zeros // 2
for one in range(ones):
b58_string = ‘1’ + b58_string
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
