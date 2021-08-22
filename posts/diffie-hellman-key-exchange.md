---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9b21740569d1a4ca29e4.jpg"
tags: [Cybersecurity]
description: Let's start with a quick thought experiment.
author: "Milad E. Fahmy"
title: "Diffie-Hellman: The Genius Algorithm Behind Secure Network Communication"
created: "2021-08-15T19:29:53+02:00"
modified: "2021-08-15T19:29:53+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-cybersecurity tag-computer-network tag-cryptography tag-algorithms tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">Diffie-Hellman: The Genius Algorithm Behind Secure Network Communication</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9b21740569d1a4ca29e4.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9b21740569d1a4ca29e4.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9b21740569d1a4ca29e4.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9b21740569d1a4ca29e4.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9b21740569d1a4ca29e4.jpg" alt="Diffie-Hellman: The Genius Algorithm Behind Secure Network Communication">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Let's start with a quick thought experiment.</p>
<p>You have a network of 3 computers, used by Alice, Bob, and Charlie. All 3 participants can send messages, but just in a way that all other clients who connected to the network can read it. This is the only possible communication form between participants.</p>
<p>If Alice sends a message through the wires, both Bob and Charlie get it. In other words, Alice cannot send a direct message to Bob without Charlie receiving it as well.</p>
<p>But Alice wants to send a confidential message to Bob and doesn't want Charlie to be able to read it.</p>
<p>Seems impossible with these strict rules, right? The beautiful thing that this problem is solved in 1976 by Whitfield Diffie and Martin Hellman.</p>
<p>This is a simplified version of the real world, but we face the same problem when communicating through the biggest network that's ever existed.</p>
<p>Usually, you are not directly connected to the internet, but you are part of a local smaller network, called Ethernet. </p>
<p>This smaller network can be wired or wireless (Wi-Fi), but the base concept remains. If you send a signal through the network this signal can be read by all other clients connected to the same network.</p>
<p>But what if there is a malicious client in the network who won't ignore your confidential messages, but read them instead? How is it possible you still have money on your bank account?</p>
<h2 id="encryption">Encryption</h2>
<p>It's kind of clear at this point that we need to use some kind of encryption to make sure that the message is readable for Alice and Bob, but complete gibberish for Charlie.</p>
<p>Encrypting information is done by an encryption algorithm, which takes a key (for example a string) and gives back an encrypted value, called ciphertext. The ciphertext is just a completely random-looking string.</p>
<p>It's important that the encrypted value (ciphertext) can be decrypted only with the original key. This is called a symmetric-key algorithm because you need the same key for decrypting the message as it was encrypted with. There are also asymmetric-key algorithms, but we don't need them right now.</p>
<p>To make it easier to understand this, here is a dummy encryption algorithm implemented in JavaScript:</p>
return message.split("").map(character =&gt; {
const characterAsciiCode = character.charCodeAt(0)
return String.fromCharCode(characterAsciiCode+key.length)
}).join("");
}</code></pre>
<figcaption>Encrypting</figcaption>
</figure>
<p>In this function, I mapped each character into another character based on the length of the given key.</p>
<p>Every character has an integer representation, called ASCII code. There is a dictionary that contains all characters with its code, called the ASCII table. So we incremented this integer by the length of the key:</p>
<figcaption>Character mapping</figcaption>
</figure>
<p>Decrypting the ciphertext is pretty similar. But instead of addition, we subtract the key length from every character in the ciphertext, so we get back the original message.</p>
return cipher.split("").map(character =&gt; {
const characterAsciiCode = character.charCodeAt(0)
return String.fromCharCode(characterAsciiCode-key.length)
}).join("");
}</code></pre>
<figcaption>Decrypting</figcaption>
</figure>
<p>Finally here is the dummy encryption in action:</p>
const key = "password";
const cipher = encrypt(message, key);
console.log("Encrypted message:", cipher);
// Encrypted message: Pq(Jwj4(pmzm(q{(i(kwvnqlmv|qit(um{{iom)
const decryptedMessage = decrypt(cipher, key);
console.log("Decrypted message:", decryptedMessage);
// Decrypted message: Hi Bob, here is a confidential message!</code></pre>
<figcaption>Using our algorithm</figcaption>
</figure>
<p>We applied some degree of encryption to the message, but this algorithm was only useful for demonstration purposes, to get a sense of how symmetric-key encryption algorithms behave. </p>
<p>There are a couple of problems with this implementation besides handling corner cases and parameter types poorly.</p>
<p>First of all every 8 character-long key can decrypt the message which was encrypted with the key "password". We want an encryption algorithm to only be able to decrypt a message if we give it the same key that the message was encrypted with. A door lock that can be opened by every other key isn't that useful.</p>
<p>Secondly, the logic is too simple – every character is shifted the same amount in the ASCII table, which is too predictable. We need something more complex to make it harder to find out the message without the key.</p>
<p>Thirdly, there isn't a minimal key length. Modern algorithms work with at least 128 bit long keys (~16 characters). This significantly increases the number of possible keys, and with this the secureness of encryption.</p>
<p>Lastly, it takes too little time to encrypt or decrypt the message. This is a problem because it doesn't take too much time to try out all possible keys and crack the encrypted message. </p>
<p>This is hand in hand with the key length: An algorithm is secure if I as an attacker want to find the key, then I need to try a large number of key combinations and it takes a relatively long time to try a single combination.</p>
<p>There is a wide range of symmetric encryption algorithms that addressed all of these claims, often used together to find a good ratio of speed and secureness for every situation.</p>
<p>The more popular symmetric-key algorithms are <a href="http://en.wikipedia.org/wiki/Twofish">Twofish</a>, <a href="http://en.wikipedia.org/wiki/Serpent_%28cipher%29">Serpent</a>, <a href="http://en.wikipedia.org/wiki/Advanced_Encryption_Standard">AES</a> (<a href="http://en.wikipedia.org/wiki/Rijndael">Rijndael</a>), <a href="http://en.wikipedia.org/wiki/Blowfish_%28cipher%29">Blowfish</a>, <a href="http://en.wikipedia.org/wiki/CAST5">CAST5</a>, <a href="http://en.wikipedia.org/wiki/RC4">RC4</a>, <a href="http://en.wikipedia.org/wiki/Triple_DES">TDES</a>, and <a href="http://en.wikipedia.org/wiki/International_Data_Encryption_Algorithm">IDEA</a>.</p>
<p>If you want to learn more about cryptography in general check out <a href="https://www.youtube.com/watch?v=cqgtdkURzTE">this talk</a>.</p>
<h2 id="key-exchange">Key exchange</h2>
<p>It looks like we reduced the original problem space. With encryption, we can create a message which is meaningful for parties who are eligible to read the information, but which is unreadable for others.</p>
<p>When Alice wants to write a confidential message, she would pick a key and encrypt her message with it and send the ciphertext through the wires. Both Bob and Charlie would receive the encrypted message, but none of them could interpret it without Alice's key.</p>
<p>Now the only question to answer is how Alice and Bob can find a common key just by communicating through the network and prevent Charlie from finding out that same key.</p>
<p>If Alice sends her key directly through the wires Charlie would intercept it and would be able to decrypt all Alice's messages. So this is not a solution. This is called the key exchange problem in computer science.</p>
<h3 id="diffie-hellman-key-exchange">Diffie–Hellman key exchange</h3>
<p>This cool algorithm provides a way of generating a shared key between two people in such a way that the key can't be seen by observing the communication.</p>
<p>As a first step, we'll say that there is a huge prime number, known to all participants, it's public information. We call it <strong>"p" or modulus</strong>. </p>
<p>There is also another public number called <strong>"g" or base</strong>,<strong> </strong>which is less than <strong>p</strong>. </p>
<p>Don't worry about how these numbers are generated. For the sake of simplicity let's just say Alice picks a very big prime number (<strong>p</strong>) and a number which is considerably less than <strong>p</strong>. She then sends them through the wires without any encryption, so all participants will know these numbers.</p>
<p><strong>Example:</strong> To understand this through an example, we'll use small numbers. Let's say <strong>p=23 </strong>and<strong> g=5</strong>.</p>
<p>As a second step both Alice (<strong>a</strong>) and Bob (<strong>b</strong>) will pick a secret number, which they won't tell anybody, it's just locally living in their computers.</p>
<p><strong>Example:<em> </em></strong>Let's say Alice picked 4 (<strong>a=4</strong>), and Bob picked 3 (<strong>b=3</strong>).</p>
<p>As a next step, they will do some math on their secret numbers, they will calculate:</p>
<ol>
<li>the base (<strong>g</strong>) in the power of their secret number,</li>
<li>and take the calculated number's modulo to <strong>p</strong>.</li>
<li>Call the result <strong>A </strong>(for Alice) and <strong>B </strong>(for Bob).</li>
</ol>
<p>Modulo is a simple mathematical statement, and we use it to find the remainder after dividing one number by another. Here is an example: <strong>23 mod 4 = 3</strong>, because 23/4 is 5 and 3 remains.</p>
<p>Maybe it's easier to see all of this in code:</p><pre><code class="language-javascript">// base
const g = 5;
// modulus
const p = 23;
// Alice's randomly picked number
const a = 4;
// Alice's calculated value
const A = Math.pow(g, a)%p;
// Do the same for Bob
const b = 3;
const B = Math.pow(g, b)%p;
console.log("Alice's calculated value (A):", A);
// Alice's calculated value (A): 4
console.log("Bob's calculated value (B):", B);
// Bob's calculated value (B): 10</code></pre>
<p>Now both Alice and Bob will send their calculated values (<strong>A</strong>, <strong>B</strong>) through the network, so all participants will know them.</p>
<p>As a last step Alice and Bob will take each other's calculated values and do the following:</p>
<ol>
<li>Alice will take Bob's calculated value (<strong>B</strong>) in the power of his secret number (<strong>a</strong>),</li>
<li>and calculate this number's modulo to <strong>p</strong> and will call the result <strong>s </strong>(secret).</li>
<li>Bob will do the same but with Alice's calculated value (<strong>A</strong>), and his secret number (<strong>b</strong>).</li>
</ol>
<p>At this point, they successfully generated a common secret (<strong>s</strong>), even if it's hard to see right now. We will explore this in more detail in a second.</p>
<p>In code:</p>
const secretOfAlice = Math.pow(B, a)%p;
console.log("Alice's calculated secret:", secretOfAlice);
// Alice's calculated secret: 18
// Bob will calculate
const secretOfBob = Math.pow(A, b)%p;
console.log("Bob's calculated secret:", secretOfBob);
// Bob's calculated secret: 18</code></pre>
<figcaption>Calculating common secret</figcaption>
</figure>
<p>As you can see both Alice and Bob got the number 18, which they can use as a key to encrypt messages. It seems magic at this point, but it's just some math. </p>
<p>Let's see why they got the same number by splitting up the calculations into elementary pieces:</p>
<figcaption>The process as an equation</figcaption>
</figure>
<p>In the last step, we used a <a href="https://en.wikipedia.org/wiki/Modulo_operation#Properties_(identities)">modulo arithmetic identity</a> and its distributive properties to simplify nested modulo statements.</p>
<p>So Alice and Bob have the same key, but let's see what Charlie saw from all of this. We know that <strong>p</strong> and <strong>g</strong> are public numbers, available for everyone. </p>
<p>We also know that Alice and Bob sent their calculated values (<strong>A</strong>, <strong>B</strong>) through the network, so that can be also caught by Charlie.</p>
<figcaption>Charlie's perspective</figcaption>
</figure>
<p>Charlie knows almost all parameters of this equation, just <strong>a</strong> and <strong>b</strong> remain hidden. To stay with the example, if he knows that <strong>A</strong> is 4 and <strong>p</strong> is 23, <strong>g</strong> to the power of <strong>a</strong> can be 4, 27, 50, 73, ... and infinite other numbers which result in 4 in the modulo space.</p>
<p>He also knows that only the subset of these numbers are possible options because not all numbers are an exponent of 5 (<strong>g</strong>), but this is still an infinite number of options to try.</p>
<p>This doesn't seem too secure with small numbers. But at the beginning I said that <strong>p</strong> is a really large number, often 2000 or 4000 bits long. This makes it almost impossible to guess the value of <strong>a</strong> or <strong>b </strong>in the real world.</p>
<p>The common key Alice and Bob both possess only can be generated by knowing <strong>a</strong> or <strong>b</strong>, besides the information that traveled through the network.</p>
<p>If you're more visual, here is a great diagram shows this whole process by mixing buckets of paint instead of numbers.</p>
<figcaption>source: <a href="https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange">Wikipedia</a></figcaption>
</figure>
<p>Here <strong>p </strong>and<strong> g</strong> shared constants represented by the yellow "Common paint". Secret numbers of Alice and Bob (<strong>a</strong>, <strong>b</strong>) is "Secret colours", and "Common secret" is what we called <strong>s</strong>.</p>
<p>This is a great analogy because it's representing the irreversibility of the modulo operation. As mixed paints can't be unmixed to their original components, the result of a modulo operation can't be reversed.</p>
<h2 id="summary">Summary</h2>
<p>Now the original problem can be solved by encrypting messages using a shared key, which was exchanged with the Diffie-Hellman algorithm. </p>
<p>With this Alice and Bob can communicate securely, and Charlie cannot read their messages even if he is part of the same network.</p>
<p>Thanks for reading this far! I hope you got some value from this post and understood some parts of this interesting communication flow.</p>
<p>If it was hard to follow the math of this explanation, <a href="https://www.youtube.com/watch?v=NmM9HA2MQGI">here</a> is a great video to help you understand the algorithm without math, from a higher level.</p>
<p>If you liked this post, you may want to follow me on <a href="https://twitter.com/karolyidav">Twitter</a> to find some more exciting resources about programming and software development.</p>
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
