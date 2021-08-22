---
card: "https://cdn-media-1.freecodecamp.org/images/1*qWiAHdbuyJspr67HahgDYw.png"
tags: [Ethereum]
description: "In the first article of this series, we generated a bitcoin p"
author: "Milad E. Fahmy"
title: "How to create an Ethereum wallet address from a private key"
created: "2021-08-16T15:40:43+02:00"
modified: "2021-08-16T15:40:43+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-ethereum tag-cryptocurrency tag-python tag-technology tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to create an Ethereum wallet address from a private key</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*qWiAHdbuyJspr67HahgDYw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*qWiAHdbuyJspr67HahgDYw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*qWiAHdbuyJspr67HahgDYw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*qWiAHdbuyJspr67HahgDYw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*qWiAHdbuyJspr67HahgDYw.png" alt="How to create an Ethereum wallet address from a private key">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In <a href="/news/how-to-generate-your-very-own-bitcoin-private-key-7ad0f4936e6c/">the first article</a> of this series, we generated a bitcoin private key: <code>60cf347dbc59d31c1358c8e5cf5e45b822ab85b79cb32a9f3d98184779a9efc2</code>.</p><p>Here, we’ll use that key to get the public address and then the Ethereum wallet address of that private key.</p><p>Creating the Bitcoin wallet address from the private key is a bit complicated. Here, the process will be much simpler. We need to apply one hash function to get the public key and another one to get the address.</p><p>So let’s get started.</p><h3 id="public-key">Public key</h3><p>This part is almost identical to what we discussed in the <a href="/news/how-to-create-a-bitcoin-wallet-address-from-a-private-key-eca3ddd9c05f/">Bitcoin article</a>, so if you read that one, you can skip it (unless you need a refresher).</p><p>The first thing we need to go is to apply the ECDSA, or Elliptic Curve Digital Signature Algorithm, to our private key. An elliptic curve is a curve defined by the equation <code>y² = x³ + ax + b</code> with chosen <code>a</code> and <code>b</code>. There is a whole family of such curves that are widely known and used. Bitcoin uses the <strong>secp256k1</strong> curve. If you want to learn more about Elliptic Curve Cryptography, I’ll refer you to <a href="https://hackernoon.com/what-is-the-math-behind-elliptic-curve-cryptography-f61b25253da3" rel="noopener">this article</a>.</p><p>Ethereum uses the same elliptic curve, <strong>secp256k1</strong>, so the process to get the public key is identical in both cryptocurrencies.</p><p>By applying the ECDSA to the private key, we get a 64-byte integer, which is two 32-byte integers that represent X and Y of the point on the elliptic curve, concatenated together.</p><p>For our example, we got <code>1e7bcc70c72770dbb72fea022e8a6d07f814d2ebe4de9ae3f7af75bf706902a7b73ff919898c836396a6b0c96812c3213b99372050853bd1678da0ead14487d7</code>.</p><p>In Python, it would look like this:</p><pre><code class="language-python">private_key_bytes = codecs.decode(private_key, ‘hex’)
# Get ECDSA public key
key = ecdsa.SigningKey.from_string(private_key_bytes, curve=ecdsa.SECP256k1).verifying_key
key_bytes = key.to_string()
key_hex = codecs.encode(key_bytes, ‘hex’)</code></pre><p>Note: as you can see from the code above, I used a method from the <code>ecdsa</code> module and I decoded the private key using <code>codecs</code>. This is relevant more to the Python and less to the algorithm itself, but I will explain what are we doing here to remove possible confusion.</p><p>In Python, there are at least two classes that can keep the private and public keys: “str” and “bytes”. The first is a string and the second is a byte array. Cryptographic methods in Python work with a “bytes” class, taking it as input and returning it as the result.</p><p>Now, there’s a little catch: a string, say, <code>4f3c</code> does not equal the byte array <code>4f3c</code>. Rather, it equals the byte array with two elements, <code>O&amp;</code>lt;. And that’s what t<code>he codecs.dec</code>ode method does: it converts a string into a byte array. This will be the same for all cryptographic manipulations that we’ll do in this article.</p><h3 id="wallet-address">Wallet address</h3><p>Once we’ve gotten the public key, we can calculate the address. Now, unlike Bitcoin, Ethereum has the same addresses on both the main and all test networks. Users specify the network that they want to use later in the process when they make and sign a transaction.</p><p>To make an address from the public key, all we need to do is to apply Keccak-256 to the key and then take the last 20 bytes of the result. And that’s it. No other hash functions, no Base58 or any other conversion. The only thing you need is to add ‘0x’ at the start of the address.</p><p>Here’s the Python code:</p><pre><code class="language-python">public_key_bytes = codecs.decode(public_key, ‘hex’)
keccak_hash = keccak.new(digest_bits=256)
keccak_hash.update(public_key_bytes)
keccak_digest = keccak_hash.hexdigest()
# Take the last 20 bytes
wallet_len = 40
wallet = ‘0x’ + keccak_digest[-wallet_len:]</code></pre><h3 id="checksum">Checksum</h3><p>Now, as you may remember, Bitcoin creates the checksum by hashing the public key and taking the first 4 bytes of the result. This is true for all Bitcoin addresses, so you can’t get the valid address without adding the checksum bytes.</p><p>In Ethereum, that’s not how things work. Initially, there were no checksum mechanisms to validate the integrity of the key. However, in 2016, Vitalik Buterin <a href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-55.md" rel="noopener">introduced</a> a checksum mechanism, which has since been adopted by wallets and exchanges.</p><p>Adding a checksum to the Ethereum wallet address makes it case-sensitive.</p><p>First, you need to get the Keccak-256 hash of the address. Note that this address should be passed to the hash function without the <code>0x</code> part.</p><p>Second, you iterate over the characters of the initial address. If the <em>i</em>th byte of the hash is greater than or equal to 8, you convert the <em>i</em>th address’s character to uppercase, otherwise you leave it lowercase.</p><p>Finally, you add <code>0x</code> back at the start of the resulting string. The checksum address is the same as the initial one if you ignore the case. But the uppercase letters let anyone check that the address is indeed valid. You can find the algorithm of the checksum validation at the <a href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-55.md" rel="noopener">page linked here</a>.</p><p>As you’ll read in the proposal, for this checksum scheme,</p><blockquote>“on average there will be 15 check bits per address, and the net probability that a randomly generated address if mistyped will accidentally pass a check is 0.0247%.”</blockquote><p>And here’s the code to add checksum to the Ethereum address:</p><pre><code>checksum = ‘0x’
# Remove ‘0x’ from the address
address = address[2:]
address_byte_array = address.encode(‘utf-8’)
keccak_hash = keccak.new(digest_bits=256)
keccak_hash.update(address_byte_array)
keccak_digest = keccak_hash.hexdigest()
for i in range(len(address)):
address_char = address[i]
keccak_char = keccak_digest[i]
if int(keccak_char, 16) &gt;= 8:
checksum += address_char.upper()
else:
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
