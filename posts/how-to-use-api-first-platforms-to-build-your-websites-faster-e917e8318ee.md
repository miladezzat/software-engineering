---
card: "https://cdn-media-1.freecodecamp.org/images/1*6T2sSRtPdHIgyrUCeOnVoA.jpeg"
tags: [Web Development]
description: "by Mike Sedzielewski"
author: "Milad E. Fahmy"
title: "How to use API-first platforms to build your websites faster"
created: "2021-08-16T10:18:36+02:00"
modified: "2021-08-16T10:18:36+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-api tag-software-development tag-software-architecture tag-developer-tools ">
<header class="post-full-header">
<h1 class="post-full-title">How to use API-first platforms to build your websites faster</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*6T2sSRtPdHIgyrUCeOnVoA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*6T2sSRtPdHIgyrUCeOnVoA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*6T2sSRtPdHIgyrUCeOnVoA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*6T2sSRtPdHIgyrUCeOnVoA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*6T2sSRtPdHIgyrUCeOnVoA.jpeg" alt="How to use API-first platforms to build your websites faster">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
space: SPACE_ID,
accessToken: ACCESS_TOKEN
})
function fetchTechnologies () {
return client.getEntries({
content_type: "technology"
})
.then((response) =&gt; response.items)
.catch((error) =&gt; {
console.log(`\nError occurred while fetching Entries for Technology:`)
console.error(error)
})
}
fetchTechnologies().then((technologies) =&gt; {
techCards.innerHTML += technologies.map(technology =&gt;
`&lt;div class="col-md-4"&gt;
&lt;a href="${technology.fields.link}"&gt;&lt;img src="${technology.fields.logo.fields.file.url}"/&gt;&lt;/a&gt;
&lt;h2&gt;&lt;a href="/experts.html?t=${technology.fields.name}"&gt;${technology.fields.name}&lt;/a&gt;&lt;/h2&gt;
&lt;p&gt;${technology.fields.description}&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;`).join('')
{
"sys":{
"space":{
"sys":{
"type":"Link",
"linkType":"Space",
"id":"n763nxcwuf4y"
}
},
"id":"1mn1mwlwAcQWqgQamsIEmW",
"type":"Entry",
"createdAt":"2017-12-05T11:29:35.202Z",
"updatedAt":"2017-12-13T10:04:52.381Z",
"revision":7,
"contentType":{
"sys":{
"type":"Link",
"linkType":"ContentType",
"id":"expert"
}
},
"locale":"en-US"
},
"fields":{
"name":"Javier Hernandez",
"technologies":[
{
"sys":{
"type":"Link",
"linkType":"Entry",
"id":"5oKmKwfdjGO2cCaCkwamKW"
}
},
{
"sys":{
"type":"Link",
"linkType":"Entry",
"id":"7Dtej0GnXqw6cSIMmA6Cko"
}
}
],
"image":{
"sys":{
"type":"Link",
"linkType":"Asset",
"id":"4RZoQOCwvCMEWMMCuqA0ey"
}
},
"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed faucibus turpis in eu mi bibendum. Mauris in aliquam sem fringilla ut. Tincidunt nunc pulvinar sapien et ligula. ",
"projects":53,
"price":40,
"city":{
"lon":2.2247314453125,
"lat":41.36933709640475
}
}
}</code></pre><figcaption>expert.json</figcaption></figure><p>Let’s upload our experts to Algolia. Sign up for a free account, go to the Indices section and run <code>NEW INDEX.</code></p><p>Now we need to transfer our entities from Contentful to Algolia. We could’ve used a dedicated <a href="https://github.com/drublic/contentful-to-algolia" rel="noopener">migrator</a>. This is a fantastic tool that automatically loads your content. It then removes, in this case redundant, the Contentful system information (see the gist above) from effective JSONs. It can also resolve relationships. For example instead of IDs, you’ll send the actual names when it comes to the “technologies” field. Finally it syncs with the Algolia index.</p><p>But we’ll deliberately do it manually. We need a small improvement in the way we build our index. Therefore, syncing one-to-one with the migrator isn’t an option in our case.</p><p>When we use search input in a technology site, naturally we want to include only the experts of chosen technology in the search results. As you can see in the Expert JSON example, technologies are represented as an array of objects. The problem is that you can’t build a facet which filters the data based on a nested array of objects with Algolia.</p><p>What they suggest is to split the expert object into as many sub-objects as the number of technologies. So, in the case of Javier Hernandez, who knows 2 frameworks, we should add 2 objects:</p><pre><code class="language-json">{
name: "Javier Hernandez",
technologies: {
name: “Google Web Toolkit”
… // other properties
}
… // other properties
}
{
name: "Javier Hernandez"
technologies: {
name: “Apache Struts 1”
… // other properties
}
… // other properties
.then((response) =&gt; {
const denormalized = [].concat(...response.items.map(item =&gt; {
let arr = []
item.fields.contentfulID = item.sys.id
delete item.sys
item.fields.technologies.forEach(tech =&gt; {
const i = JSON.parse(JSON.stringify(item))
i.fields.technologies = tech.fields
i.fields.image = item.fields.image.fields
arr.push(i.fields)
})
return arr
}))
console.log(JSON.stringify(denormalized))
})
.catch((error) =&gt; {
console.log(`\nError occurred while fetching Entries for Expert:`)
console.error(error)
appId: 'N675AF3ESI',
apiKey: '14b65c352deb9a505131d3d00cba2f6c',
indexName: 'experts',
urlSync: false
}
isConfig.searchParameters = {
filters: `technologies.name:"${selectedTechnology}"`
}
const search = instantsearch(isConfig)
search.addWidget(
instantsearch.widgets.searchBox({
container: '#search-input'
})
)
search.addWidget(
instantsearch.widgets.hits({
container: '#hits',
hitsPerPage: 10,
templates: {
item: document.getElementById('hit-template').innerHTML,
empty: "We didn't find any results for the search &lt;em&gt;\"{{query}}\"&lt;/em&gt;"
},
cssClasses: {
root: 'row',
item: 'col-md-4'
}
})
)
search.addWidget(
instantsearch.widgets.rangeSlider({
container: '#price-refinement',
attributeName: 'price',
tooltips: {
format: function(rawValue) {
return '$' + Math.round(rawValue).toLocaleString();
}
}
})
)
const client = contentful.createClient({
space: SPACE_ID,
accessToken: ACCESS_TOKEN
})
client.getEntries({'sys.id': expertId}).then((response) =&gt; {
const e = response.items[0].fields
expertWidget.innerHTML=
`
&lt;div class="col-md-4"&gt;
&lt;div class="hit-image"&gt;
&lt;img style="height: 5em" src="${e.image.fields.file.url}" alt="${e.name}"&gt;
&lt;h2 class="hit-name"&gt;${e.name}&lt;/h2&gt;
&lt;h2 class="hit-price"&gt;$&lt;span id="priceTag"&gt;${e.price}&lt;/span&gt;&lt;/h2&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="col-md-8 start-xs"&gt;
&lt;div class="hit-content"&gt;
&lt;h4 class="hit-price"&gt;projects: ${e.projects} &lt;/h4&gt;
&lt;p class="hit-description"&gt;${e.description}&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
`
const timekitConf = e.timekit
widget.init({
targetEl: '#bookingjs',
app:      'nostalgia-4592',
apiToken: timekitConf.apiToken,
email:    timekitConf.email,
calendar: timekitConf.calendar,
name:     'Jane Doe',
timekitFindTime: {
length: '3 hours',
start: 'tomorrow',
filters: {
and: [
{ specific_time: { start: '8', end: '17' }}
]
}
},
fullCalendar: {
defaultView: 'month'
}
})
})
.catch((error) =&gt; {
console.log(`\nError occurred while fetching Entries for Expert:`)
console.error(error)
"4dde7477-d8d1-4057-8f91-8a9e7137acee",
"404c6c0b-4445-4f14-84b1-f4a58f1da2f6"
)
Voucherify.render("#voucher-widget", {
textPlaceholder: "Your coupon...",
onValidated: function(response) {
if (response) {
const priceTag = document.querySelector('#priceTag')
priceTag.innerHTML = Voucherify.utils.calculatePrice(parseInt(priceTag.innerHTML), response)
}
}
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
