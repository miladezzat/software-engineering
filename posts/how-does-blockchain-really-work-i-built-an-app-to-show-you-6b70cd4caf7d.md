---
card: "https://cdn-media-1.freecodecamp.org/images/1*Y3c_hIqCuiDH4x-8dObVyg.png"
tags: [Blockchain]
description: by Sean Han
author: "Milad E. Fahmy"
title: "How does blockchain really work? I built an app to show you."
created: "2021-08-15T19:50:45+02:00"
modified: "2021-08-15T19:50:45+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-blockchain tag-cryptocurrency tag-javascript tag-tech tag-startup ">
<header class="post-full-header">
<h1 class="post-full-title">How does blockchain really work? I built an app to show you.</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Y3c_hIqCuiDH4x-8dObVyg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*Y3c_hIqCuiDH4x-8dObVyg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*Y3c_hIqCuiDH4x-8dObVyg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Y3c_hIqCuiDH4x-8dObVyg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Y3c_hIqCuiDH4x-8dObVyg.png" alt="How does blockchain really work? I built an app to show you.">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Sean Han</p>
<h1 id="how-does-blockchain-really-work-i-built-an-app-to-show-you-">How does blockchain really work? I built an app to show you.</h1>
<p>According to Wikipedia, a blockchain is:</p>
<blockquote>A distributed database that is used to maintain a continuously growing list of records, called <em>blocks</em>.</blockquote>
<p>That sounds nice, but how does it work?</p>
<p>To illustrate a blockchain, we will use an open source command-line interface called <a href="https://github.com/seanseany/blockchain-cli" rel="noopener">Blockchain CLI</a>.</p>
<p>I also built a <a href="http://blockchaindemo.io/" rel="noopener">browser-based version of this here</a>.</p>
<h3 id="installing-the-command-line-interface-version">Installing the Command-Line Interface version</h3>
<p>If you haven’t already, install <a href="https://nodejs.org/download/" rel="noopener">Node.js</a>.</p>
<p>Then run the following in your terminal:</p><pre><code class="language-bash"># Clone this repository
$ git clone https://github.com/seanseany/blockchain-cli
# Go into the repository
$ cd blockchain-cli
# Install dependencies
$ npm install
# Run the app
$ npm start</code></pre>
<p>You should see <code>? Welcome to Blockchain CLI!a</code>nd a b<code>lockchain → </code>prompt ready to take commands.</p>
<h3 id="what-does-a-block-look-like">What does a block look like?</h3>
<p>To see your current blockchain, enter <code>blockchain</code> or <code>bc</code> into the command prompt. You should see a block like the image below.</p>
<figcaption>A block on the blockchain</figcaption>
</figure>
<ul>
<li><strong>Index (Block #):</strong> Which block is it? (Genesis block has index 0)</li>
<li><strong>Hash:</strong> Is the block valid?</li>
<li><strong>Previous Hash: </strong>Is the previous block valid?</li>
<li><strong>Timestamp: </strong>When was the block added?</li>
<li><strong>Data: </strong>What information is stored on the block?</li>
<li><strong>Nonce: </strong>How many iterations did we go through before we found a valid block?</li>
</ul>
<h4 id="genesis-block">Genesis Block</h4>
<p>Every blockchain will start with the<code>? Genesis Block.</code> As you will see later, each block on the blockchain is dependent on the previous block. So, the Genesis block is needed to mine our first block.</p>
<h3 id="what-happens-when-a-new-block-is-mined">What happens when a new block is mined?</h3>
<p>Let’s mine our first block. Enter <code>mine freeCodeCamp♥︎</code> into the prompt.</p>
<p>The blockchain looks at the latest block on the blockchain for the index and previous hash. In this case Genesis block is the latest block.</p>
<ul>
<li><strong>Index:</strong> o+1 = 1</li>
<li><strong>Previous Hash: </strong>0000018035a828da0…</li>
<li><strong>Timestamp: </strong>When the block is added</li>
<li><strong>Data: </strong>freeCodeCamp❤</li>
<li><strong>Hash:</strong> ??</li>
<li><strong>Nonce:</strong> ??</li>
</ul>
<h3 id="how-is-the-hash-calculated">How is the hash calculated?</h3>
<p>A <strong>hash value</strong> is a numeric <strong>value</strong> of a fixed length that uniquely identifies data.</p>
<p>The hash is calculated by taking the index, previous block hash, timestamp, block data, and nonce as input.</p><pre><code class="language-js">CryptoJS.SHA256(index + previousHash + timestamp + data + nonce)</code></pre>
<p>The SHA256 algorithm will calculate a unique hash, given those inputs. The same inputs will always return the same hash.</p>
<h4 id="did-you-notice-the-four-leading-0-s-in-the-block-hash">Did you notice the four leading 0’s in the block hash?</h4>
<p>The four leading 0’s is a minimum requirement for a valid hash. The number of leading 0’s required is called <strong>difficulty</strong>.</p><pre><code class="language-js">function isValidHashDifficulty(hash, difficulty) {
for (var i = 0, b = hash.length; i &lt; b; i ++) {
if (hash[i] !== '0') {
break;
}
}
return i &gt;= difficulty;
}</code></pre>
<p>This is also known as the <a href="https://en.wikipedia.org/wiki/Proof-of-work_system" rel="noopener">Proof-of-Work system</a>.</p>
<h3 id="what-s-a-nonce">What’s a nonce?</h3>
<p>A nonce is a number used to find a valid hash.</p><pre><code class="language-js">let nonce = 0;
let hash;
let input;
while(!isValidHashDifficulty(hash)) {
nonce = nonce + 1;
input = index + previousHash + timestamp + data + nonce;
hash = CryptoJS.SHA256(input)
}</code></pre>
<p>The nonce iterates until the hash is valid. In our case, a valid hash has at least four leading 0’s. The process of finding a nonce that corresponds to a valid hash is <strong>mining</strong>.</p>
<p>As the difficulty <strong>increases</strong>, the number of possible valid hashes <strong>decreases</strong><em>.</em> With less possible valid hashes, it takes more processing power to find a valid hash.</p>
<h3 id="why-does-this-matter">Why does this matter?</h3>
<p>It matters because it keeps the blockchain immutable.</p>
<p>If we have the following blockchain A → B → C, and someone wants to change data on Block A. This is what happens:</p>
<ol>
<li>Data changes on Block A.</li>
<li>Block A’s hash changes because data is used to calculate the hash.</li>
<li>Block A becomes invalid because its hash no longer has four leading 0’s.</li>
<li>Block B’s hash changes because Block A’s hash was used to calculate Block B’s hash.</li>
<li>Block B becomes invalid because its hash no longer has four leading 0's.</li>
<li>Block C’s hash changes because Block B’s hash was used to calculate Block C’s hash.</li>
<li>Block C becomes invalid because its hash no longer has four leading 0's.</li>
</ol>
<p>The only way to mutate a block would be to mine the block again, and all the blocks after. Since new blocks are always being added, it’s nearly impossible to mutate the blockchain.</p>
<p>I hope this tutorial was helpful for you!</p>
<p>If you would like to checkout a web version of the demo, head on over to <a href="http://blockchaindemo.io" rel="noopener">http://blockchaindemo.io</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
