---
card: "https://cdn-media-1.freecodecamp.org/images/1*6pWGbFF9kCmlGSra6Kmh-w.png"
tags: [Bitcoin]
description: "In cryptocurrencies, a private key allows a user to gain acce"
author: "Milad E. Fahmy"
title: "How to generate your very own Bitcoin private key"
created: "2021-08-16T15:40:56+02:00"
modified: "2021-08-16T15:40:56+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-bitcoin tag-cryptocurrency tag-python tag-technology tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to generate your very own Bitcoin private key</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*6pWGbFF9kCmlGSra6Kmh-w.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*6pWGbFF9kCmlGSra6Kmh-w.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*6pWGbFF9kCmlGSra6Kmh-w.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*6pWGbFF9kCmlGSra6Kmh-w.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*6pWGbFF9kCmlGSra6Kmh-w.png" alt="How to generate your very own Bitcoin private key">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
bits = random.getrandbits(256)
# 30848827712021293731208415302456569301499384654877289245795786476741155372082
bits_hex = hex(bits)
# 0x4433d156e8c53bf5b50af07aa95a29436f29a94e0ccc5d58df8e57bdc8583c32
private_key = bits_hex[2:]
# 4433d156e8c53bf5b50af07aa95a29436f29a94e0ccc5d58df8e57bdc8583c32</code></pre><p>Looks good, but actually, it’s not. You see, normal RNG libraries are not intended for cryptography, as they are not very secure. They generate numbers based on a seed, and by default, the seed is the current time. That way, if you know approximately when I generated the bits above, all you need to do is brute-force a few variants.</p><p>When you generate a private key, you want to be extremely secure. Remember, if anyone learns the private key, they can easily steal all the coins from the corresponding wallet, and you have no chance of ever getting them back.</p><p>So let’s try to do it more securely.</p><h3 id="cryptographically-strong-rng">Cryptographically strong RNG</h3><p>Along with a standard RNG method, programming languages usually provide a RNG specifically designed for cryptographic operations. This method is usually much more secure, because it draws entropy straight from the operating system. The result of such RNG is much harder to reproduce. You can’t do it by knowing the time of generation or having the seed, because there is no seed. Well, at least the user doesn’t enter a seed — rather, it’s created by the program.</p><p>In Python, cryptographically strong RNG is implemented in the <code>secrets</code> module. Let’s modify the code above to make the private key generation secure!</p><pre><code class="language-python">import secrets
bits = secrets.randbits(256)
# 46518555179467323509970270980993648640987722172281263586388328188640792550961
bits_hex = hex(bits)
# 0x66d891b5ed7f51e5044be6a7ebe4e2eae32b960f5aa0883f7cc0ce4fd6921e31
private_key = bits_hex[2:]
for i in range(self.POOL_SIZE):
random_byte = secrets.randbits(8)
self.__seed_byte(random_byte)
time_int = int(time.time())
self.__seed_int(time_int)
def __seed_int(self, n):
self.__seed_byte(n)
self.__seed_byte(n &gt;&gt; 8)
self.__seed_byte(n &gt;&gt; 16)
self.__seed_byte(n &gt;&gt; 24)
def __seed_byte(self, n):
self.pool[self.pool_pointer] ^= n &amp; 255
self.pool_pointer += 1
if self.pool_pointer &gt;= self.POOL_SIZE:
self.pool_pointer = 0</code></pre><h4 id="seeding-with-input">Seeding with input</h4><p>Here we first put a timestamp and then the input string, character by character.</p><pre><code>def seed_input(self, str_input):
time_int = int(time.time())
self.__seed_int(time_int)
for char in str_input:
char_code = ord(char)
self.__seed_byte(char_code)</code></pre><h4 id="generating-the-private-key">Generating the private key</h4><p>This part might look hard, but it’s actually very simple.</p><p>First, we need to generate 32-byte number using our pool. Unfortunately, we can’t just create our own <code>random</code> object and use it only for the key generation. Instead, there is a shared object that is used by any code that is running in one script.</p><p>What does that mean for us? It means that at each moment, anywhere in the code, one simple <code>random.seed(0)</code> can destroy all our collected entropy. We don’t want that. Thankfully, Python provides <code>getstate</code> and <code>setstate</code> methods. So, to save our entropy each time we generate a key, we remember the state we stopped at and set it next time we want to make a key.</p><p>Second, we just make sure that our key is in range (1, <code>CURVE_ORDER</code>). This is a requirement for all ECDSA private keys. The <code>CURVE_ORDER</code> is the order of the secp256k1 curve, which is <code>FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141</code>.</p><p>Finally, for convenience, we convert to hex, and strip the ‘0x’ part.</p><pre><code class="language-python">def generate_key(self):
big_int = self.__generate_big_int()
big_int = big_int % (self.CURVE_ORDER — 1) # key &lt; curve order
big_int = big_int + 1 # key &gt; 0
key = hex(big_int)[2:]
return key
def __generate_big_int(self):
if self.prng_state is None:
seed = int.from_bytes(self.pool, byteorder=’big’, signed=False)
random.seed(seed)
self.prng_state = random.getstate()
random.setstate(self.prng_state)
big_int = random.getrandbits(self.KEY_BYTES * 8)
self.prng_state = random.getstate()
return big_int</code></pre><h4 id="in-action">In action</h4><p>Let’s try to use the library. Actually, it’s really simple: you can generate a private key in three lines of code!</p><pre><code>kg = KeyGenerator()
kg.seed_input(‘Truly random string. I rolled a dice and got 4.’)
kg.generate_key()
# 60cf347dbc59d31c1358c8e5cf5e45b822ab85b79cb32a9f3d98184779a9efc2</code></pre><p>You can see it yourself. The key is random and totally valid. Moreover, each time you run this code, you get different results.</p><h3 id="conclusion">Conclusion</h3><p>As you can see, there are a lot of ways to generate private keys. They differ in simplicity and security.</p><p>Generating a private key is only a first step. The next step is extracting a public key and a wallet address that you can use to receive payments. The process of generating a wallet differs for Bitcoin and Ethereum, and I plan to write two more articles on that topic.</p><p>If you want to play with the code, I published it to this <a href="https://github.com/Destiner/blocksmith" rel="noopener">Github repository</a>.</p><p><em>I am making a course on cryptocurrencies here on freeCodeCamp News. The <a href="https://medium.com/longcaller/blockchain-explained-2b26b28657ca" rel="noopener">first part</a> is a detailed description of the blockchain.</em></p><p><em>I also post random thoughts about crypto on <a href="https://twitter.com/DestinerX" rel="noopener">Twitter</a>, so you might want to check it out.</em></p>
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
