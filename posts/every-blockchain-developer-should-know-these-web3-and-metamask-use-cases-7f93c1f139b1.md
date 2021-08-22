---
card: "https://cdn-media-1.freecodecamp.org/images/0*JVmq6javfae3gzTA.jpg"
tags: [Web3]
description: by Igor Yalovoy
author: "Milad E. Fahmy"
title: "Every blockchain developer should know these Web3 and Metamask use cases"
created: "2021-08-15T19:41:03+02:00"
modified: "2021-08-15T19:41:03+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web3 tag-javascript tag-blockchain tag-tech tag-cryptocurrency ">
<header class="post-full-header">
<h1 class="post-full-title">Every blockchain developer should know these Web3 and Metamask use cases</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*JVmq6javfae3gzTA.jpg 300w,
https://cdn-media-1.freecodecamp.org/images/0*JVmq6javfae3gzTA.jpg 600w,
https://cdn-media-1.freecodecamp.org/images/0*JVmq6javfae3gzTA.jpg 1000w,
https://cdn-media-1.freecodecamp.org/images/0*JVmq6javfae3gzTA.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*JVmq6javfae3gzTA.jpg" alt="Every blockchain developer should know these Web3 and Metamask use cases">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Igor Yalovoy</p>
<h1 id="every-blockchain-developer-should-know-these-web3-and-metamask-use-cases">Every blockchain developer should know these Web3 and Metamask use cases</h1>
<h3 id="update">Update</h3>
<p>On <a href="https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8" rel="noopener">November 2nd</a> MetaMask and other dapp browsers will stop exposing user accounts by default. This will make some code from this paper to break. I will publish updated version with web3 1.0 and new MetaMask interface.</p>
<p><a href="https://ylv.io/10-web3-metamask-use-cases-ever-blockchain-developer-needs/Metamask.io" rel="noopener">Metamask</a> is the de facto standard for dApps on the web. It injects a Web3 instance into a window object making it available for JavaScript code.</p>
<p>We are going to use Web3 0.20 version, not Web3 1.0. The code for Web3 1.0 would be different.</p>
<p>Every dApp has its mission, but the way they interact with Metamask is similar. In this article, we’ll cover the ten most common practices to handle Web3/Metamask interactions.</p>
<h3 id="-1-detect-metamask-and-instantiate-web3">#1. Detect Metamask and instantiate Web3</h3>
<p>According to <a href="https://github.com/MetaMask/faq/blob/master/DEVELOPERS.md#partly_sunny-web3---ethereum-browser-environment-check" rel="noopener">docs</a>, here’s the best way to do it.</p>
<p>What is going on here? First, we check if Web3 was injected. If it is injected we create a new instance using the injected provider. Why is that? Because we want to use our library version, not the one injected by Metamask.</p>
<p>If Web3 is not present, we try to connect to a localhost provider, like <a href="https://truffleframework.com/ganache" rel="noopener">ganache</a>.</p>
<h3 id="-2-check-if-metamask-is-locked">#2. Check if Metamask is locked</h3>
<p>Metamask can be installed but locked. In order to interact with a user account and send transactions, the user has to unlock Metamask.</p>
<h3 id="-3-check-the-current-network">#3. Check the current network</h3>
<p>There are many test networks beyond the main network. Typically your contract is deployed to a certain network. You want to be sure that the user runs Metamask on the same network.</p>
<h3 id="-4-get-the-current-account">#4. Get the current account</h3>
<p>A user may have multiple accounts at Metamask, but they expect the dApp to interact with the current one.</p>
<p>You should always grab the account from the Web3 instance. Do not keep and reuse it, because the user may change their account at any time.</p>
<h3 id="-5-get-the-balance-on-the-current-account">#5. Get the balance on the current account</h3>
<p>Here we use the function <code>getAccount</code> from #4 and call <code>getBalance</code>. Easy.</p>
<h3 id="-6-detect-that-the-current-account-has-changed">#6. Detect that the current account has changed</h3>
<p>A user may change their account at any time. You dApp should be ready for that and react properly.</p>
<h3 id="-7-detect-whether-metamask-is-locked-unlocked">#7. Detect whether Metamask is locked/unlocked</h3>
<p>Similar to #6. A user may lock/unlock anytime. Your dApp should handle it correctly.</p>
<h3 id="-8-handle-cancel-confirm">#8. Handle cancel/confirm</h3>
<p>Once a user interacts with your dApp, you have to send a transaction using the Web3 API. A user may press the cancel or confirm button on the Metamask popup. This may lead to UI inconsistency if not handled correctly.</p>
<p>In order to return instantly with the transaction hash, call <code>contract.methodName.sendTransaction</code>.</p>
<h3 id="-9-get-the-transaction-receipt">#9. Get the transaction receipt</h3>
<p>Once your dApp transaction is mined, a transaction receipt becomes available. Yet there is no event/notification, so we have to implement a poll mechanism.</p>
<h3 id="-10-listen-for-web3-events">#10. Listen for Web3 events</h3>
<p>Solidity events are great. They allow switching from ugly polling to just a push mechanism, assuming your contract implements all necessary events. You can completely avoid polling and just react to events. Event callback <a href="https://github.com/ethereum/wiki/wiki/JavaScript-API#callback-return" rel="noopener">returns</a> a lot of data, but we are mostly interested in <code>args</code>.</p>
<h3 id="summary">Summary</h3>
<p>Whatever your dApp is about, it still has to perform common tasks, such as detecting Web3, getting the account state and balance, recognizing the current network, and handling transactions and events. We’ve gone over how it can be done using ten code snippets.</p>
<h3 id="p-s-">P.S.</h3>
<p>A lot of examples here use methods which might throw an error because of Metamask’s state or some variables being undefined at the moment of a call. You should wrap them in <code>try/catch</code> in a production environment.<br> Async/await has been used here for simplicity. It can be replaced with Promise then/catch.</p>
<h3 id="social">Social</h3>
<ul>
<li>Connect with me on <a href="https://www.linkedin.com/in/ylv-io/" rel="noopener">LinkedIn</a>.</li>
<li>Follow me on <a href="https://twitter.com/ylv_io" rel="noopener">twitter</a>.</li>
</ul>
<h3 id="want-more">Want More?</h3>
<p><a href="https://hackernoon.com/how-to-create-and-deploy-your-own-eos-token-1f4c9cc0eca1" rel="noopener"><strong>How to Create and Deploy Your Own EOS Token</strong></a><br><a href="https://hackernoon.com/how-to-create-and-deploy-your-own-eos-token-1f4c9cc0eca1" rel="noopener"><em>We are going to figure out what is EOS token and how you can create and deploy one yourself.</em>hackernoon.com</a><a href="https://hackernoon.com/how-much-does-it-costs-to-run-dapp-in-2018-87ee11fe1d5d" rel="noopener"><strong>How Much Does It Cost to Run DApp in 2018</strong></a><br><a href="https://hackernoon.com/how-much-does-it-costs-to-run-dapp-in-2018-87ee11fe1d5d" rel="noopener"><em>You think your AWS or Digital Ocean bill for your website is killing you?</em>hackernoon.com</a><a href="https://medium.com/coinmonks/difference-between-ethereum-and-eos-tokens-f2399051c0b6" rel="noopener"><strong>Difference Between Ethereum and EOS Tokens</strong></a><br><a href="https://medium.com/coinmonks/difference-between-ethereum-and-eos-tokens-f2399051c0b6" rel="noopener"><em>Ethereum has ERC-20 token and EOS has EOSIO.Token. They serve the same purpose, but are they the same?</em>medium.com</a></p>
<p><em>Originally published at <a href="https://ylv.io/10-web3-metamask-use-cases-ever-blockchain-developer-needs/" rel="noopener">ylv.io</a> on October 15, 2018.</em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
