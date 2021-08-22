---
card: "https://cdn-media-1.freecodecamp.org/images/1*1LSHpbDThueykKQQeCkAug.png"
tags: [JavaScript]
description: "There is ever-increasing interest in and demand for Decentral"
author: "Milad E. Fahmy"
title: "How to architect a DApp using Nuxt.js and Nebulas"
created: "2021-08-16T11:40:42+02:00"
modified: "2021-08-16T11:40:42+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-blockchain tag-decentralized-apps tag-technology tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to architect a DApp using Nuxt.js and Nebulas</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*1LSHpbDThueykKQQeCkAug.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*1LSHpbDThueykKQQeCkAug.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*1LSHpbDThueykKQQeCkAug.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*1LSHpbDThueykKQQeCkAug.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*1LSHpbDThueykKQQeCkAug.png" alt="How to architect a DApp using Nuxt.js and Nebulas">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
/*
Story Constructor which will create the story by providing the necessary field fetched from the frontend using nebpay API explained at the end of this blog:
*/
var Story = function(text, image_url) {
this.title = text;
this.address = Blockchain.transaction.from;
this.hash = Blockchain.transaction.hash;
this.image_url = image_url;
this.lines = [];
this.votes = [];
};
/*
Init function is used once while deploying the smart contract to
initialize the parameters if required:
*/
Story.prototype = {
init: function() {
}
};</code></pre><p>As mentioned above, every story will have the following fields, out of which text and image_url need to be provided as an argument from the user. For the Address field, the hash can be obtained using the BlockChain APIs explained in depth <a href="https://medium.com/nebulasio/how-to-build-a-dapp-on-nebulas-part-2-5424789f7417" rel="noopener"><strong>here</strong></a>.</p><h4 id="data-structure-and-storage-used-in-the-dapp"><strong>Data Structure</strong> and <strong>Storage</strong> used in the DApp</h4><p>The storage module enables the data storage on Nebulas. It enables the permanent storage of data variables on Nebulas when a payment is made. You can read in depth about it <a href="https://medium.com/nebulasio/how-to-build-a-dapp-on-nebulas-part-2-5424789f7417" rel="noopener">here</a>.</p><pre><code>/*
With the help of the Storage Module, we are defining following maps and index property, which will help us to keep track of multidimensional data obtained from users. Nebulas recommend the capturing of multiple data points, which may help in improving Nebulas Rank and Search Feature.
*/
var Data = function() {
LocalContractStorage.defineMapProperty(this, "favourite_stories");
LocalContractStorage.defineMapProperty(this, "my_stories");
LocalContractStorage.defineProperty(this, "s_index");
LocalContractStorage.defineMapProperty(this, "stories_data");
};</code></pre><h4 id="saving-and-retrieving-story"><strong>Saving</strong> and <strong>Retrieving</strong> Story</h4><p>Now we’ll look at two of the most important functions used for writing and getting the story on the Platform with the help of Story Constructor and Storage declared in the Data constructor above.</p><pre><code>/*
stories_data hash map will contain every story stored against its unique index on the Platform storage module.
Every story index added by a particular user will be stored in a hash map my_stories, in the form of an array.
*/
Data.prototype = {
/*
Initializing the index on Smart Contract. As soon as people will keep on adding a new story, s_index will keep on increasing.
*/
init: function () {
this.s_index = new BigNumber(1);
},
save_story: function (name, image_url) {
var id = this.s_index;
if (name.length &gt; 25) {
throw new Error("Story Length error");
}
if (name == "") {
throw new Error("empty story title");
}
var story = new Story(name, image_url);
this.stories_data.put(new BigNumber(id).toNumber(), JSON.stringify(story));
var my_stories_local = this.my_stories.get(Blockchain.transaction.from) || [];
my_stories_local.push(this.s_index);
this.my_stories.put(Blockchain.transaction.from, my_stories_local);
this.s_index = new BigNumber(id).plus(1);
},
/*
get_stories method will be used to retrieve all the stories stored on the platform.
*/
get_stories: function () {
var stories = [];
var total = new BigNumber(this.s_index).toNumber();
for (let i = 1; i &lt; total; i++) {
stories.push(JSON.parse(this.stories_data.get(i)));
}
return stories;
},
/*
Remaining Functions can be found out in the Smart Contract Code here.
*/
};
module.exports = Data;</code></pre><p>This completes the major parts of the Smart Contract. In the next section, I will be explaining the structure of the Frontend Code in Nuxt.js.</p><h3 id="frontend-architecture-design"><strong>Frontend Architecture Design</strong></h3><p>As the project grows, and more functionalities get added, a proper architecture set up from the beginning can help us achieve our goal by making debugging easier.</p><p>The below approach is a good way to go about it:</p><pre><code>/*
Go to the root directory in the source code here and find out the below-mentioned files. This Architecture helps in creating a big modular App/Dapp.
*/
pages/
about / index.vue  : Static About us PAge
contact / index.vue : Static Contact us Page
create / index.vue : Page to Create the Story.
favourite / index.vue : Stories Liked by you will be here.
mystory / index.vue : My Stories Page.
index.vue / index.vue : All Stories Page
store/
index.js : Vuex code used to make API calls to Smart Contract
neb_init.js : Importing nebpay and initializing Smart Contract
Address here, which gets used throughout the app.
layouts/
default.vue: Every page follows an architecture where Header and
Footer are same. So setting up the default
architecture here.
components/
Header.vue: Header component which is getting used in default.vue
Footer.cue: Footer component which is getting used in default.vue
....</code></pre><h4 id="making-api-calls-to-the-smart-contract">Making API calls to the Smart Contract</h4><p>I will be explaining one of the API call using <strong>nebpay</strong> to interact with the Smart Contract and get all the stories’ data for the landing page.</p><p>Initialize Nebpay, to be used across the app in <strong>store/neb_init.js</strong>:</p><pre><code>import * as NebPay from 'nebpay.js';
/*
Contract Address can be obtained after deploying the code on Nebulas Platform using their Web Wallet.
It needs to be the Mainnet Address.
*/
var contractAddress = "n1pQHv...................Pm1";
var nebPay = new NebPay();
export { contractAddress, nebPay, result,NebPay };</code></pre><p>The below <strong>API call</strong> code can be found in the <strong>store/index.js</strong> file:</p><pre><code>/*
nebPay API's can be used to interact with the Smart Contract and Chrome extension to perform read and write operations. More details about nebpay API's can be found out here.
*/
call: (store) =&gt; {
// args needs to be sent in below format.
var args = "[]";
nebPay.simulateCall(contractAddress, 0, "get_stories", args, {
listener: function (data) {
if (data.result != null) {
store.commit("all_data", JSON.parse(data.result));
}
}
});
}</code></pre><p>The above code is getting called from<strong> component/Allstories.vue</strong>.</p><pre><code>/*
As soon as the Allstories component gets mounted, it dispatches the call action mentioned in the above lines, which then fills the Vuex Store all_data array and gets rendered in the All Stories Component.
*/
mounted() {
this.$store.dispatch("call");
}</code></pre><p>Like this, you can go around every section in the source code and understand the complete architecture of the DApp.</p><p>I hope this tutorial helped you in getting started with DApp development. For any queries, feel free to reach out to me.</p>
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
