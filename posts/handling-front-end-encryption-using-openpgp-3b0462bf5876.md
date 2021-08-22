---
card: "https://cdn-media-1.freecodecamp.org/images/1*HMRjFON6A7nGDlvrf7auIw.png"
tags: [Security]
description: "by Mateja Trifunovski"
author: "Milad E. Fahmy"
title: "Handling front-end encryption using OpenPGP"
created: "2021-08-16T11:50:00+02:00"
modified: "2021-08-16T11:50:00+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-security tag-programming tag-web-development tag-technology tag-startup ">
<header class="post-full-header">
<h1 class="post-full-title">Handling front-end encryption using OpenPGP</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*HMRjFON6A7nGDlvrf7auIw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*HMRjFON6A7nGDlvrf7auIw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*HMRjFON6A7nGDlvrf7auIw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*HMRjFON6A7nGDlvrf7auIw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*HMRjFON6A7nGDlvrf7auIw.png" alt="Handling front-end encryption using OpenPGP">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
numBits: 2048,
passphrase: "secret-passphrase"
//you would get the passphrase from an input field normally
};
let user = {};
openpgp.generateKey(keyOptions)
.then((key) =&gt; {
user.privateKey = key.privateKeyArmored;
user.publicKey = key.publicKeyArmored;
});</code></pre><p>The <strong>passphrase</strong> is very important since the private key can’t be used without it. It’s the only thing preventing other people from using the private key. This is useful because we usually store our private key in persistent storage, such as a database, where someone can see it. The passphrase should be only remembered on the client side, in the user’s memory.</p><h4 id="encrypting-a-message">Encrypting a message</h4><p>After creating our keys, in order for users to exchange messages, well we need at least two users. So for simplicity sake let’s say another user created his keys somewhere and we now have two users.</p><p>In this scenario a user named Bob is sending a message to John. If we want only John to be able to read the message, we get John’s <strong>public key </strong>and use it to encrypt the full message. Later John will be able to read the message using his <strong>private key.</strong></p><pre><code class="language-js">// Bob{} (User 1), John{} (User 2)
const email = {
subject: "Hello John, I'm Bob!",
body: "Secret message"
}
const options = {
data: JSON.stringify(email),
// Here we use John's public key for encryption
publicKeys:  openpgp.key.readArmored(John.publicKey).keys
};
let messageForJohn = "";
openpgp.encrypt(options)
.then((cipherText)=&gt;{
messageForJohn = cipherText.data;
});</code></pre><p>The variable <code>messageForJohn</code> which holds the encrypted value of the email which now looks like the snippet below.</p><pre><code class="language-js">-----BEGIN PGP MESSAGE-----
Version: OpenPGP.js v2.5.4
Comment: http://openpgpjs.org
0mgBCFDGPx2Bz+cETU+PtCjKSzgB+U4pVvEakBlEdBHFnccqfSBI8+A1DCns
s1cOKrMtJ5SfZaYSlxdO+982UqgH8NEV5/+ZLn8OCx+/ppff4EIuN0ZuN4ps
LkbeHL93oA8Ja/rKGJp+kg==
=bf0/
-----END PGP MESSAGE-----</code></pre><h4 id="decrypting-a-message"><strong>Decrypting a message</strong></h4><p>Now that we have the contents of the message encrypted, we should decrypt it so John can finally see his message. Now all we need is John’s <strong>passphrase</strong> (“john-passphrase”) and his <strong>private key</strong>.</p><pre><code class="language-js">// John {} (User 2)
let privateKey = openpgp.key.readArmored(John.privateKey).keys[0];
if (privateKey.decrypt("john-passphrase")) {
openpgp.decrypt({
privateKey: privateKey,
message: openpgp.message.readArmored(messageForJohn)
})
.then((decryptedData) =&gt; {
decryptedData = JSON.parse(decryptedData.data);
console.log(decryptedData);
})
}</code></pre><p>John’s message has been decrypted and he can read it now. If everything went well it should look like this.</p><pre><code class="language-json">{
"subject": "Hello John, I'm Bob!",
"body": "Secret message"
}</code></pre><h4 id="further-steps">Further steps</h4><p>This was a brief demonstration of how two users can communicate privately. You can expand it according to your wishes. Try storing the public and private keys in a database, and create a login system that requires a user to enter a passphrase along the usual username and password. You could also try using other encryption libraries like <a href="https://github.com/brix/crypto-js" rel="noopener">crypto-js</a>, just play with it!</p><h3 id="caveats">Caveats</h3><p>At first, might you think,<em> </em>“why isn’t everything encrypted?” Well, there are some drawbacks that come with encryption.</p><p>Clients like browsers are becoming more and more performant. Having only one main thread, the screen can freeze when doing intensive work like generating keys, or decrypting large data. Of course with web workers and future performance updates, this could become a standard.</p><p>Also, some features like search can become quite tricky, because you can’t easily search through encrypted data. But with new technologies like <a href="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API" rel="noopener">IndexedDB</a> we might even see fully front-end search soon.</p><h3 id="conclusion"><strong>Conclusion</strong></h3><p>I’ve made an example showing basic encryption of a dummy email at this <a href="https://github.com/Matko95/front-end-encryption-example" rel="noopener">Github Link</a>. So feel free to take a look at the code and play around with it!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
