---
card: "/images/default.jpg"
tags: [Web Development]
description: "A static site seems like a good fit for a small and steady pr"
author: "Milad E. Fahmy"
title: "How to Make Your Static Site Dynamic"
created: "2021-08-16T10:05:25+02:00"
modified: "2021-08-16T10:05:25+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">How to Make Your Static Site Dynamic</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/03/article-cover.jpg 300w,
/news/content/images/size/w600/2020/03/article-cover.jpg 600w,
/news/content/images/size/w1000/2020/03/article-cover.jpg 1000w,
/news/content/images/size/w2000/2020/03/article-cover.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/03/article-cover.jpg" alt="How to Make Your Static Site Dynamic">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
</code></pre>
</code></pre>
...
&lt;input type="radio" name="option" value="not_interested" id="none" v-model="option" /&gt;
&lt;label for="none"&gt;Děkuji, nepotřebuji&lt;/label&gt;
&lt;input type="radio" name="option" value="interested_in_booking_a_room" id="hotel" v-model="option" /&gt;
&lt;label for="hotel"&gt;Mám zájem o ubytování v okolí&lt;/label&gt;
&lt;input type="radio" name="option" value="sleep_in_a_tent" id="tent" v-model="option" /&gt;&lt;label for="tent"&gt;Mám zájem o přespání ve vlastním stanu&lt;/label&gt;
...
&lt;/template&gt;
&lt;script&gt;
export default {
props: {
salutation: String,
inviteeId: String,
howManyInvited: Number,
salutation: String,
optionSelected: String
},
data: function(){
option: this.optionSelected
},
...
&lt;/script&gt;
</code></pre>
&lt;script&gt;
export default {
...
watch: {
option: function(newVal, oldVal) {
let url = `{remote base URL}/action?id=${this.inviteeId}`;
fetch(url, {
method: 'POST',
body: JSON.stringify({
option: this.option,
})
})
.then(response =&gt; {
if (response.status !== 200) {
alert("Unable to save, please try again.");
}
});
}
}
}
&lt;/script&gt;
</code></pre>
KONTENT_CM_KEY={management API key}
</code></pre>
npm i @kentico/kontent-delivery --save
npm i @kentico/kontent-management --save
</code></pre>
const KontentDelivery = require('@kentico/kontent-delivery')
const KontentManagement = require('@kentico/kontent-management')
</code></pre>
const { KONTENT_PROJECT_ID, KONTENT_CM_KEY } = process.env;
const deliveryClient = new KontentDelivery.DeliveryClient({ projectId: KONTENT_PROJECT_ID });
let id = event.queryStringParameters.id;
const invitee = await deliveryClient.items()
.type('invitee')
.elementsParameter(['accommodation'])
.equalsFilter('system.id', id)
.toPromise();
if (invitee.items == null || invitee.items.length == 0)
{
return {
statusCode: 404,
body: `Invitee not found`
};
}
</code></pre>
const client = new KontentManagement.ManagementClient({ projectId: KONTENT_PROJECT_ID, apiKey: KONTENT_CM_KEY });
</code></pre>
.byItemId(accommodationId)
.byLanguageCodename('default')
.toPromise();
</code></pre>
await client.upsertLanguageVariant()
.byItemId(accommodationId)
.byLanguageCodename('default')
.withElements([{
element: { codename: 'option' },
value: [{ codename: accommodation.option }]
}])
.toPromise();
</code></pre>
.byItemId(accommodationId)
.byLanguageCodename('default')
.withData()
.toPromise();
return { statusCode: 200, body: `OK` }
</code></pre>
Functions = "lambda"
[[headers]]
for = "/*"
[headers.values]
Access-Control-Allow-Origin = "*"
</code></pre>
...
mounted: function () {
let url = `${baseUrl}/delivery?id=${this.inviteeId}`;
let response = fetch(`{remote base URL}/delivery?id=${this.inviteeId}`, { method: 'GET', mode: 'cors' })
.then(response =&gt; response.json())
.then(accommodationObj =&gt; {
this.option = accommodationObj.option;
});
},
...
&lt;/script&gt;
</code></pre>
const { KONTENT_PROJECT_ID } = process.env;
let id = event.queryStringParameters.id;
const deliveryClient = new KontentDelivery.DeliveryClient({ projectId: KONTENT_PROJECT_ID });
const invitee = await deliveryClient.items()
.queryConfig({ waitForLoadingNewContent: true })
.type('invitee')
.elementsParameter(['accommodation', 'option'])
.equalsFilter('system.id', id)
.toPromise();
if (invitee.items == null || invitee.items[0] == null)
{
return {
statusCode: 404,
body: `Invitee not found`
};
}
return {
statusCode: 200,
body: JSON.stringify({
option: invitee.items[0].accommodation.value[0].codename
})
};
};
</code></pre>
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
