---
card: "https://cdn-media-1.freecodecamp.org/images/1*TzOKAf_ykKIz8qC0VrJHGA.png"
tags: [Ethereum]
description: by Paul Laux
author: "Milad E. Fahmy"
title: "How to build an Ethereum Wallet web app"
created: "2021-08-15T19:41:31+02:00"
modified: "2021-08-15T19:41:31+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-ethereum tag-react tag-javascript tag-tech tag-blockchain ">
<header class="post-full-header">
<h1 class="post-full-title">How to build an Ethereum Wallet web app</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*TzOKAf_ykKIz8qC0VrJHGA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*TzOKAf_ykKIz8qC0VrJHGA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*TzOKAf_ykKIz8qC0VrJHGA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*TzOKAf_ykKIz8qC0VrJHGA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*TzOKAf_ykKIz8qC0VrJHGA.png" alt="How to build an Ethereum Wallet web app">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Paul Laux</p>
<h1 id="how-to-build-an-ethereum-wallet-web-app">How to build an Ethereum Wallet web app</h1>
<h4 id="a-review-of-the-coolest-parts-of-eth-hot-wallet">A review of the coolest parts of eth-hot-wallet</h4>
<p>This article is a technical review of the interesting parts of <strong>eth-hot-wallet</strong>, an <a href="http://eth-hot-wallet.com" rel="noopener">Ethereum wallet</a> web app with erc20 token native support. The source code can be found on <a href="https://github.com/PaulLaux/eth-hot-wallet" rel="noopener">GitHub</a> (MIT License).</p>
<figcaption>eth-hot-wallet preview</figcaption>
</figure>
<p><strong>Table of contents:</strong></p>
<ul>
<li>Ethereum wallet as a web app</li>
<li>The stack</li>
<li>The containers of eth-hot-wallet</li>
<li>Unified Design for Ethereum Wallet</li>
<li>Redux and Redux-Saga</li>
<li><em>Secure </em>password generator</li>
<li>eth-lightwallet and SignerProvider</li>
<li>Encrypted offline storage</li>
<li>Sending Ethereum using Web3.js</li>
<li>Sending erc20 tokens using Web3.js</li>
<li>Subscribing to Ethereum transaction life-cycle using Web3.js V1 and Redux-Saga channels</li>
<li>Polling Ethereum blockchain and price data using Redux-Saga</li>
<li>Keeping an eye on the bundle size</li>
<li>Conclusion</li>
</ul>
<h3 id="ethereum-wallet-as-a-web-app">Ethereum wallet as a web app</h3>
<p>When software is deployed as a web app, wide accessibility is the first thing that comes to mind. After all, the web is the most widely accessible cross device platform. Eth-hot-wallet is a PWA (progressive web app) that can be used from any modern web-browser.</p>
<p>Moreover, <a href="https://medium.com/appscope/designing-native-like-progressive-web-apps-for-ios-1b3cdda1d0e8" rel="noopener">recent improvements in PWA support</a> significantly improve the user experience on mobile.</p>
<p>Pros:</p>
<ul>
<li>No additional software is required</li>
<li>No installation of any kind is necessary</li>
<li>Ability to use modern web development tools.</li>
<li>Easy to deploy and to upgrade</li>
</ul>
<p>Cons:</p>
<ul>
<li>More prone to phishing attacks.</li>
<li>Browser plugins might inject malicious code into the page.</li>
<li>High loading time on slow internet connections</li>
<li>Limited access to device storage</li>
</ul>
<p>The fact that malicious browser extensions might inject JavaScript code in an attempt to extract the keys is significant. To migrate this risk, the user should be encouraged to turn off extensions (i.e. by using in incognito mode) or integrate the web with an external web3 provider such as MetaMask or Trust browser. Converting the web app into a desktop app is also a viable option.</p>
<p>As for phishing, the user should be encouraged to bookmark the page and access it via google search. It is highly unlikely for a phishing site to rank above the real site in search results.</p>
<p><strong>Bottom line: a web app will allow you to reach the widest audience with minimum friction</strong>. In my opinion, the web is the best target platform for new apps.</p>
<figcaption>eth-hot-wallet logo</figcaption>
</figure>
<h3 id="the-stack">The stack</h3>
<p>Most of the code is dedicated to the <strong>front-end:</strong></p>
<p>The final package consists of many packages as can be seen in <a href="https://github.com/PaulLaux/eth-hot-wallet/blob/master/package.json" rel="noopener">package.json</a>.</p>
<p>Top level components include:</p>
<ul>
<li><a href="https://github.com/ConsenSys/eth-lightwallet" rel="noopener">Eth-lightwallet</a> — Lightweight JS Wallet for Node and the browser for keystore management</li>
<li>React, Redux, saga.js, immutableJS and reselect wrapped by the offline-first <a href="https://github.com/react-boilerplate/react-boilerplate" rel="noopener">react-boilerplate</a></li>
<li><a href="https://github.com/ant-design/ant-design" rel="noopener">Ant design </a>— excellent set of UI components for react</li>
<li><a href="https://webpack.github.io/" rel="noopener">Webpack</a> — A bundler for JavaScript and friends.</li>
</ul>
<p>And for the<strong> back-end:</strong></p>
<p>The final bundle is deployed directly to GitHub pages from a dedicated branch in the repository. There is no need for a back-end in the traditional scene.</p>
<p>To create the Testnet Ethereum faucet, we’ll use a <a href="https://serverless.com/framework/docs/getting-started/" rel="noopener">Serverless framework</a>. It significantly improves the developer experience when using AWS Lambda. It is a very cost-effective solution that obliterates the need to maintain infrastructure, especially on low volume applications.</p>
<h3 id="the-containers-of-eth-hot-wallet">The containers of eth-hot-wallet</h3>
<figcaption>eth-hot-wallet homepage container</figcaption>
</figure>
<p>When using the combination of React, Redux, Saga.js and Reselect, each container (may) consist of the following ingredients:</p>
<ul>
<li>index.js — for rendering the GUI</li>
<li>actions.js</li>
<li>reducer.js</li>
<li>saga.js</li>
<li>selectors.js</li>
<li>constants.js</li>
</ul>
<p>As <a href="undefined" rel="noopener">Dan Abramov</a> stated, there is <a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0" rel="noopener">more than one approach</a> for whether to use a component or a container. From my experience, if a component has more then ~8 attributes inside the application state, it should be separated into a new container. This is just a rule of thumb. The number of attributes may bloat over time. With complex components, it’s better to have a unique container than to cluster the state of the main Container.</p>
<p>Not every container needs to have all the ingredients. In eth-hot-wallet, the <code><a href="https://github.com/PaulLaux/eth-hot-wallet/tree/master/app/containers/SendToken" rel="noopener">sendToken</a></code><a href="https://github.com/PaulLaux/eth-hot-wallet/tree/master/app/containers/SendToken" rel="noopener">container</a> does not use its own Saga.js. We separated it so as not to burden the state of the homepage component.</p>
<h4 id="the-homepage-container">The Homepage container</h4>
<figcaption>eth-hot-wallet homepage container</figcaption>
</figure>
<p>The primary container, where most of the action takes place, is the <a href="https://github.com/PaulLaux/eth-hot-wallet/tree/master/app/containers/HomePage" rel="noopener">homepage container</a>. In the homepage container, Saga.js is responsible for dealing with side effects. Besides GUI, its main responsibility will be dealing with <strong>keystore operations</strong>.</p>
<p>The ETH-Lightwallet package provides the keystore. All related operations including keys, seeds, encryption, importing, exporting are done in this section.</p>
<h4 id="the-header-container">The Header container</h4>
<p><a href="https://github.com/PaulLaux/eth-hot-wallet/tree/master/app/containers/Header" rel="noopener">The header</a> demonstrates the fact that a container is much more than just a GUI component:</p>
<figcaption>eth-hot-wallet header container</figcaption>
</figure>
<p>This container might look simple at first with only a logo and a network selector. Does it even need to be in its own container? The answer is that in eth-hot-wallet <strong>every network communication-related action and state management is done inside the header container</strong>. More than enough for any container.</p>
<h4 id="the-sendtoken-container">The SendToken container</h4>
<p><a href="https://github.com/PaulLaux/eth-hot-wallet/tree/master/app/containers/SendToken" rel="noopener">SendToken </a>is a modal that appears while the user selects to send Ether/ tokens.</p>
<figcaption>eth-hot-wallet SendToken container</figcaption>
</figure>
<p>The modal includes some basic input verification, like amount and Ethereum address check. It does not use Saga.js to initiate side effects, but instead uses actions provided by the homepage and header containers.</p>
<p><strong>We separated it into a new container to reduce clustering the state of the homepage container.</strong></p>
<h4 id="tokenchooser-container">TokenChooser container</h4>
<p><a href="https://github.com/PaulLaux/eth-hot-wallet/tree/master/app/containers/TokenChooser" rel="noopener">Token Chooser</a> appears when the user wants to select what token the wallet will manage.</p>
<figcaption>eth-hot-wallet TokenChooser container</figcaption>
</figure>
<p>The <code>TokenChooser</code> name was selected in order not to be confused with the term “selector” which appears many times through the wallet code in a different context (<a href="https://github.com/reduxjs/reselect" rel="noopener">reduxjs/reselect: Selector library for Redux</a>).</p>
<p>Same as with the <code>SendToken</code> container, <code>TokenChooser</code> does not use its own Saga.js file but calls actions from the homepage container when needed.</p>
<h3 id="a-unified-design-for-ethereum-wallet">A Unified design for Ethereum Wallet</h3>
<p>Since the appearance of the ERC20 standard (<a href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20-token-standard.md" rel="noopener">EIP20</a>), it was obvious that tokens were going to be an important part of the Ethereum ecosystem. The Ethereum wallet was designed with a unified design approach in mind. <strong>Ether and token should be treated equally from the user’s perspective.</strong></p>
<p>Under the hood, the API for sending Ether and sending tokens is quite different. So is checking the balance, but they will appear the same on the GUI.</p>
<figcaption><a href="https://eth-hot-wallet.com" rel="noopener" target="_blank" title="">A Unified design for Ethereum Wallet</a></figcaption>
</figure>
<p>To send Ether, we need to use native functions provided by the web3.js library, while sending tokens and checking balances involves interaction with a smart contract. More on this issue later.</p>
<h3 id="redux-and-redux-saga">Redux and Redux-Saga</h3>
<p>Using Redux store as a single source of truth greatly benefits the wallet. GUI actions and user-triggered flows can be relatively easily managed by actions and reducers provided by Redux.</p>
<p>Aside from keeping the UI state, the Redux store also holds the key-store object (a partially encrypted JavaScript object supplied by eth-lightwallet). This makes the keystore accessible throughout the app by using a selector.</p>
<p><a href="https://github.com/redux-saga/redux-saga" rel="noopener">Redux-Saga</a> is what makes the entire setup shine.</p>
<blockquote><code>redux-saga</code> is a library that aims to make application side effects (i.e., asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.</blockquote>
<p>Saga.js uses Generators to make <strong>asynchronous flows easy to read and write</strong>. By doing so, these asynchronous flows look like your standard synchronous JavaScript code (kind of like <code>async</code>/<code>await</code> but with more customization options).</p>
<p>In the case of Ethereum wallet, by using Saga we get a comfortable way to handle asynchronous actions such as rest API calls, keystore actions, Ethereum blockchain calls via web3.js, and more. All the requests are cleanly managed in one place, no callback hell, and very intuitive API.</p>
<p><strong>Example usage for redux-saga:</strong></p>
<h3 id="secure-password-generator"><em>Secure </em>password generator</h3>
<figcaption>A seed and a secure password is auto-generated for the user</figcaption>
</figure>
<p>To adequately secure the user’s keystore, we need to encrypt it with a strong password. When using eth-lightwallet, the password needs to be provided during the initiation of the <a href="https://www.google.com/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=3&amp;cad=rja&amp;uact=8&amp;ved=2ahUKEwiV_JvMw4_dAhWMDcAKHfGpANYQFjACegQICBAB&amp;url=https%3A%2F%2Fethereum.stackexchange.com%2Fquestions%2F33395%2Fwhat-is-a-hd-wallet-for-ether-and-how-to-create-one-using-nodejs%3Frq%3D1&amp;usg=AOvVaw2P31H_vW_U9Dc8tZHEcrNA" rel="noopener">hd-wallet</a>.</p>
<p>Let’s assume that we have a function called <code>generateString</code>, which can provide genuinely random strings at any length.</p>
<p>If the user wants to generate a new wallet, we will produce the following parameters:</p>
<p>We can ask the user to confirm the password and the seed or generate a new set on its behalf. Alternatively, we can ask the user for their own existing seed and password.</p>
<p><code>generateString</code> implementation: We will use the relatively new <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/crypto" rel="noopener"><strong>window.crypto API</strong></a> to get random values (currently <a href="https://caniuse.com/#feat=getrandomvalues" rel="noopener">supported by all major browsers</a>).</p>
<p><a href="https://github.com/PaulLaux/eth-hot-wallet/blob/master/app/utils/crypto.js" rel="noopener">Eth-hot-wallet implementation</a> is based on the following code to generate <strong>random but human-readable strings</strong>:</p>
<p>After the user has accepted the password and the seed, we can use the values and generate the new wallet.</p>
<h3 id="eth-lightwallet-and-signerprovider">eth-lightwallet and SignerProvider</h3>
<ol>
<li>LightWallet is intended to be a signing provider for the <a href="https://github.com/ConsenSys/hooked-web3-provider" rel="noopener">Hooked Web3 provider</a>.</li>
<li>Hooked Web3 provider has been deprecated, and currently the author recommends the package <a href="https://github.com/ethjs/ethjs-provider-signer/" rel="noopener">ethjs-provider-signer</a> as an alternative.</li>
<li>At the moment of writing, there is a bug in ethjs-provider-signer that prevents the display of error messages. The bug was fixed but didn’t merge back into the main branch. Those error messages are critical for this setup to function correctly.</li>
</ol>
<p><strong>Bottom line</strong>: Use eth-lightwallet with this version of ethjs-provider-signer: <a href="https://github.com/ethjs/ethjs-provider-signer/pull/3" rel="noopener">https://github.com/ethjs/ethjs-provider-signer/pull/3</a> to save time on trial and error.</p>
<h3 id="encrypted-offline-storage"><strong>Encrypted offline storage</strong></h3>
<p>The lightwallet keystore vault JSON object is encrypted, and it requires from us an external <code>passwordProvider</code> to safely keep the encryption key. The keystrore object is always encrypted. The app is responsible for safekeeping the password and provides it with any action.</p>
<p>eth-hot-wallet uses <a href="https://github.com/marcuswestin/store.js" rel="noopener">Store.js</a> — <em>Cross-browser storage for all use cases, used across the web</em>. Store.js allows us to store the encrypted keystore easily and extract it back from storage when the webpage is accessed.</p>
<p>When the wallet is loaded for the first time, it will check if there is a keystore in local storage and will auto load it to Redux state if so.</p>
<p>At this point, we can read the public data of the keystore but not the keys. To display public data before the user enters the encryption password, we need an additional operation mode: <strong>loaded and locked. </strong>In this mode, the wallet will display the addresses and fetch the balances but will not be able to perform operations such as sending transactions or even generating new addresses. Triggering any of those actions will prompt for the user’s password.</p>
<figcaption>locked wallet after loading from local storage</figcaption>
</figure>
<h3 id="sending-ethereum-using-web3-js">Sending Ethereum using Web3.js</h3>
<p>When using Web3.js@0.2.x, the function <code>sendTransaction</code> is provided in the following form:</p>
<p><code>web3.eth.sendTransaction(transactionObject [, callback])</code></p>
<p>The callback will return the TX as a result in case of success.</p>
<p>However, to properly integrate it into our saga.js flow, we need to wrap <code><a href="https://github.com/PaulLaux/eth-hot-wallet/blob/master/app/containers/Header/saga.js#L203" rel="noopener">sendTransaction</a></code><a href="https://github.com/PaulLaux/eth-hot-wallet/blob/master/app/containers/Header/saga.js#L203" rel="noopener"> function with a promise</a>:</p>
<p>This way we continue regular Saga.js execution after <code>sendTransaction</code> is called.</p>
<h3 id="sending-erc20-tokens-using-web3-js">Sending erc20 tokens using Web3.js</h3>
<p>The Ethereum blockchain does not provide primitives that encapsulate token functionality, nor should it. Every token deployed on Ethereum is, in fact, a program that corresponds to the <a href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md" rel="noopener"><strong>eip20 specification</strong></a>. Since the Ethereum virtual machine (EVM) is Turing complete (with some restrictions), every token might have a different implementation (even for the same functionality). What unifies all those programs under the term “token” is that they provide the same API as defined by the specification.</p>
<p><strong>When we are sending a token on Ethereum, we are interacting with a smart contract.</strong> To communicate with a smart contract we need to know its API, the format for sharing contract’s API called <a href="https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI" rel="noopener">Ethereum Contract ABI</a>.</p>
<p>We will store the <a href="https://github.com/PaulLaux/eth-hot-wallet/blob/master/app/utils/contracts/abi.js" rel="noopener">erc20 ABI</a> as part of our JavaScript bundle and instantiate a contract during the program run-time:</p>
<p><code>const erc20Contract = web3.eth.contract(erc20Abi);</code></p>
<p>After contract setup, we can easily interact with it programmatically using the <a href="https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethcontract" rel="noopener">Web3.js contract API</a>.</p>
<p>For each token we will need a dedicated contract instance:</p>
<p><code>const tokenContract = erc20Contract.at(tokenContractAddress);</code></p>
<p>After the creation of contract instance, we can access the contract functions by calling the desired function straight from JavaScript:</p>
<p>See <a href="https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethcontract" rel="noopener">Web3.js contract API</a> for the full details.</p>
<p>We will promisify the <code>tokenContract.transfer.sendTransaction</code> to use it with our redux-saga flow:</p>
<p>It is possible to use <a href="https://github.com/digitaldesignlabs/es6-promisify" rel="noopener">es6-promisify</a> or similar instead of writing the promise directly, but I prefer the direct approach in this case.</p>
<h3 id="subscribing-to-ethereum-transaction-life-cycle-using-web3-js-v1-and-redux-saga-channels">Subscribing to Ethereum transaction life-cycle using Web3.js V1 and redux-saga channels</h3>
<p><em>eth-hot-wallet uses web3.js v0.2.x and does not support this feature at the moment</em>. <em>The example is provided by another project. It is an important feature and should be used extensively.</em></p>
<p>The new version of Web3.js (V1.0.0) is shipped with a <a href="https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html#methods-mymethod-send" rel="noopener">new contract API</a> that can inform us about transaction life-cycle changes.</p>
<p>Enter the <code>PromiEvent</code>: A <a href="https://web3js.readthedocs.io/en/1.0/callbacks-promises-events.html#promievent" rel="noopener">promise combined event emitter</a>.</p><pre><code>web3.eth.sendTransaction({...}).once('transactionHash', function(hash){ ... }).once('receipt', function(receipt){ ... }).on('confirmation', function(number, receipt){ ... }).on('error', function(error){ ... }).then(function(receipt){    //fired once the receipt is mined});</code></pre>
<p><code>web3.eth.sendTransaction()</code> will return an object (a promise) that will resolve once the transaction is mined. The same object will allow us to subscribe to <code>‘transactionHash’</code>, <code>‘receipt’</code>, <code>‘confirmation’</code> and <code>‘error’</code> events.</p>
<p><strong>This API is far more informative and elegant than the one provided with 0.2.x version of Web3.js</strong>. We will see how we can integrate it into our web app with the help of <a href="https://redux-saga.js.org/docs/advanced/Channels.html" rel="noopener">Saga.js channels</a>. The motivation is to update the application state (Redux store) once a change to the transaction state is detected.</p>
<p>In the following example, we will create a ‘commit’ transaction to an arbitrary smart contract and update app state when we get <code>‘transactionHash’</code>, <code>‘receipt’</code> and <code>‘error’</code> events.</p>
<p>We need to initialize the new channel and fork a handler:</p>
<p>The handler will catch all channel events and will call the appropriate Redux action creator.</p>
<p>Once the channel and the handler are both ready and the user initiates the transaction, we need to register to the generated events:</p>
<p>In fact, we don't need a new channel for each transaction and can <strong>use the same channel for all types of transactions.</strong></p>
<p><a href="https://github.com/Monetary-Foundation/PreDistribution-DApp/blob/1003631ad6a7ca53e6ed02772f6fec6a36b7628c/app/containers/Dashboard/saga.js#L412" rel="noopener">The full source code of this example</a> can be found here.</p>
<h3 id="polling-ethereum-blockchain-and-price-data-using-redux-saga">Polling Ethereum blockchain and price data using redux-saga</h3>
<p>There are several ways to watch for blockchain changes. It is possible to use Web3.js to <a href="https://web3js.readthedocs.io/en/1.0/web3-eth-subscribe.html" rel="noopener">subscribe to events</a> or we can poll the blockchain by ourselves and have more control over some aspects of polling.</p>
<p>In eth-hot-wallet, the wallet is polling the blockchain periodically for balance changes and <a href="https://api.coinmarketcap.com/v1/ticker/?convert=EUR" rel="noopener">Coinmarketcap API</a> for price changes.</p>
<p>This redux-saga pattern will allow us to poll any data source or API:</p>
<p>After the <code>CHECK_BALANCES</code> action is seen by the default saga, the <code>checkAllBalances</code> function is called. It can end with one of two possible outcomes: <code>CHECK_BALANCES_SUCCESS</code> or <code>CHECK_BALANCES_ERROR</code> . Each one of them will be caught by <code>watchPollData()</code> to wait X seconds and call <code>checkAllBalance</code> again. This routine will continue until <code>STOP_POLL_BALANCES</code> is caught by <code>watchPollData</code> . After that, it is possible to resume the polling by submitting <code>CHECK_BALANCES</code> action again.</p>
<h3 id="keeping-an-eye-on-the-bundle-size">Keeping an eye on the bundle size</h3>
<p>When building web apps using JavaScript and npm, it might be tempting to add new packages without analyzing the footprint increase. Eth-hot-wallet uses <a href="http://webpackmonitor.com/" rel="noopener">webpack-monitor</a> to display a chart of all the dependencies and <strong>the differences between each build</strong>. It allows the developer to see the bundle size change clearly after each new package is added.</p>
<figcaption>webpack-monitor example chart</figcaption>
</figure>
<p>Webpack monitor also can help in finding the most demanding dependencies and might even surprise the developer by <strong>highlighting the dependencies that do little for the app but contribute a lot to the bundle size.</strong></p>
<p>Webpack-monitor is easy to integrate and is definitely worth including in any webpack based web app.</p>
<h3 id="conclusion">Conclusion</h3>
<p>The issues presented in this article are only part of the challenges that need to be solved when building an Ethereum wallet. However, overcoming those issues will create a solid foundation and will allow us to continue and create a successful wallet.</p>
<p>Building a wallet can also be a great introduction to the world of Ethereum since most <a href="https://github.com/ethereum/wiki/wiki/Decentralized-apps-(dapps)" rel="noopener">distributed applications</a> (DApps) require a similar set of capabilities both from the front-end and blockchain perspective.</p>
<p><a href="https://eth-hot-wallet.com" rel="noopener"><strong>ETH Hot Wallet - Ethereum Wallet with ERC20 support</strong></a><br><a href="https://eth-hot-wallet.com" rel="noopener"><em>ETH Hot wallet is an Ethereum wallet with ERC20 Support. The keys are generated inside the browser and never sent…</em>eth-hot-wallet.com</a></p>
<p>In case you have any questions regarding eth-hot-wallet or any related subject, feel free to contact me via <a href="https://twitter.com/dr_laux" rel="noopener">Twitter</a> or open an <a href="https://github.com/PaulLaux/eth-hot-wallet" rel="noopener">issue on GitHub</a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
