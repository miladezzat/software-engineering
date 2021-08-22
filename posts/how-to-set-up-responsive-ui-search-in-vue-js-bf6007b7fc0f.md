---
card: "https://cdn-media-1.freecodecamp.org/images/1*557yKFY9udPu1QV2_bW9Kw.jpeg"
tags: [Web Development]
description: "Are you thinking of building something awesome with one of th"
author: "Milad E. Fahmy"
title: "How to set up responsive UI search in Vue.js"
created: "2021-08-16T10:07:35+02:00"
modified: "2021-08-16T10:07:35+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-vue tag-front-end-development tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to set up responsive UI search in Vue.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*557yKFY9udPu1QV2_bW9Kw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*557yKFY9udPu1QV2_bW9Kw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*557yKFY9udPu1QV2_bW9Kw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*557yKFY9udPu1QV2_bW9Kw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*557yKFY9udPu1QV2_bW9Kw.jpeg" alt="How to set up responsive UI search in Vue.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
vue create project-name</code></pre><p>For the remaining things like BootstrapVue, vue-star-rating, etc, we can use the npm install command.</p><p>The default project created using vuecli has the following structure:</p><pre><code>/Root Folder
Public/
src/
assets/  /* Static assets like images goes here */
components/ /* Small part of a view */
views/  /* View represents a page composed of several components*/
App.vue /* The main view inside which the routing logic goes */
main.js  /* App initialisation happens here  */
router.js /* Router logic is defined here */
store.js /* Optional state management library Vuex */
package.json /* It consist of all the dependencies of the project. */
......</code></pre><p>The above things are there to explain the project architecture to you and the way to initialise it.</p><p>We can get started by cloning the <a href="https://github.com/honey93/VueSearchExample" rel="noopener"><strong>repository</strong></a> and writing the following commands:</p><pre><code>npm install
npm run serve </code></pre><p>Some important components explained:</p><p><strong>components/Header.vue</strong></p><p>The header has been created in the form of a single independent component so that it can be reused across pages, avoiding duplication of the code.</p><pre><code>/* Vue style of writing component: template, script and style*/
&lt;template&gt;
&lt;div class="pad-15-hor pad-15-ver header"&gt;
&lt;div&gt;
&lt;img src="@/assets/logo.png" width="25px"&gt; Responsive Search
&lt;/div&gt;
&lt;div&gt;
&lt;i class="fas fa-bars"&gt;&lt;/i&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
name: "Header"
};
&lt;/script&gt;
&lt;style scoped&gt;
.header {
display: flex;
flex-flow: row wrap;
justify-content: space-between;
}
&lt;/style&gt;</code></pre><p><strong>components/Main.vue</strong></p><p>This component consist of the entire logic of search / filters and display of results fetched from the API.</p><p>This component is using the above Header by importing it in the script.</p><pre><code>&lt;template&gt;
&lt;div&gt;
&lt;Header/&gt;
&lt;div class="pad-15-hor pad-15-ver search-parent"&gt;
&lt;div class="search-bar"&gt;
&lt;b-form-input
@input="search_text()"
v-model="search.text"
type="text"
placeholder="Search by Name"
&gt;&lt;/b-form-input&gt;
&lt;span class="search-icon"&gt;
&lt;i class="fas fa-search"&gt;&lt;/i&gt;
&lt;/span&gt;
&lt;/div&gt;
&lt;div&gt;
&lt;span class="bold"&gt;Total Likes:&lt;/span&gt;
{{likes.count}}
&lt;span class="bold"&gt;Hits:&lt;/span&gt;
{{likes.hit}}
&lt;/div&gt;
&lt;div&gt;
&lt;b-form-select @input="sort()" v-model="search.filter" :options="options"/&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="container-fluid"&gt;
&lt;div class="row"&gt;
&lt;div class="col-md-6 pad-15-ver" v-for="wonder in wonders_data" :key="wonder.id"&gt;
&lt;div
@mouseover="show_hover(true,wonder.id)"
@mouseout="show_hover(false,0)"
&gt;
&lt;div class="min-width-160"&gt;
&lt;span class="bold"&gt;Ratings:&lt;/span&gt;
&lt;star-rating
:rating="wonder.ratings"
:show-rating="false"
:inline="true"
:star-size="15"
&gt;&lt;/star-rating&gt;
&lt;/div&gt;
&lt;div class="max-width-160"&gt;
&lt;span class="bold"&gt;{{wonder.place}}&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;span
@click="make_active(wonder.id)"
:class="{'fas':1, 'fa-heart':1, 'absolute-star':1, 'green':check_active(wonder.id)}"
&gt;{{wonder.likes}}&lt;/span&gt;
&lt;h5&gt;{{wonder.place}}&lt;/h5&gt;
&lt;p&gt;{{wonder.description}}&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
/* Importing Header to use in this component */
import Header from "@/components/Header.vue";
/* Importing axios for async REST calls */
import axios from "axios";
export default {
name: "Main",
/* mounted gets called when the component gets mounted. AJAX calls are preferred in mounted lifecycle method */
mounted() {
this.hover_flag = false;
var inside = this;
axios
.get("https://www.mocky.io/v2/5c7b98562f0000c013e59f07")
.then(function(response) {
//console.log(response);
inside.wonders_data_actual = response.data.data;
response.data.data.map(function(wonder) {
inside.likes.count += wonder.likes;
});
inside.wonders_data_actual = inside.wonders_data_actual.map(function(
wonder
) {
wonder.active_like = false;
return wonder;
});
inside.wonders_data = response.data.data;
})
.catch(function(error) {
// console.log(error);
});
},
/* All the data variable declaration are done here:  */
data() {
return {
hover_flag: false,
wonders_data_actual: [],
wonders_data: [],
active_id: 0,
options: [
{ value: null, text: "Sort By" },
{ value: "a", text: "Ratings" },
{ value: "b", text: "Likes" }
],
search: { filter: null, text: "" },
likes: { count: 0, hit: 0 }
};
},
/* Methods are defined here */
methods: {
show_hover(flag, active_id) {
this.hover_flag = flag;
this.active_id = active_id;
},
sort() {
//console.log(this.search.filter);
this.search.filter == "b"
? this.wonders_data.sort(function(a, b) {
return b.likes - a.likes;
})
: this.wonders_data.sort(function(a, b) {
return b.ratings - a.ratings;
});
},
search_text() {
//console.log(this.search.text);
var inside = this;
this.wonders_data = this.wonders_data_actual.filter(function(wonder) {
if (
wonder.place
.toLowerCase()
.indexOf(inside.search.text.toLowerCase()) != "-1"
) {
return wonder;
}
});
},
check_active(id) {
var flag = false;
this.wonders_data_actual.map(function(wonder) {
if (wonder.id == id) {
flag = wonder.active_like;
}
});
return flag;
},
make_active(id) {
this.likes.hit++;
this.wonders_data_actual = this.wonders_data_actual.map(function(wonder) {
if (wonder.id == id) {
wonder.active_like = !wonder.active_like;
wonder.active_like ? wonder.likes++ : wonder.likes--;
}
return wonder;
});
var inside = this;
inside.likes.count = 0;
this.wonders_data_actual.map(function(wonder) {
inside.likes.count += wonder.likes;
});
}
},
components: {
Header
}
};
&lt;/script&gt;
&lt;style scoped&gt; /* Styles are scoped to this component only.*/
/* Style for Desktop/Tablet  */
.search-parent {
display: flex;
flex-flow: row wrap;
justify-content: space-between;
background-color: lightgray;
}
position: relative;
overflow: hidden;
box-shadow: 2px 2px 8px grey;
}
width: 100%;
}
position: absolute;
bottom: 0;
left: 0;
height: 30px;
width: 100%;
background-color: white;
opacity: 0.7;
display: flex;
justify-content: space-between;
}
position: absolute;
right: 15px;
left: 15px;
top: 15px;
bottom: 15px;
background-color: white;
opacity: 0.7;
display: flex;
flex-flow: column wrap;
justify-content: center;
align-items: center;
}
.absolute-star {
position: absolute;
top: 10px;
right: 10px;
}
font-size: 10px;
text-align: center;
}
.bold {
font-weight: 500;
}
.rating-div {
width: 200px;
}
.search-bar {
position: relative;
}
.search-bar input {
padding-left: 30px;
}
.search-icon {
position: absolute;
top: 8px;
left: 8px;
}
/* For Mobile Device, we will be going with column wrap approach */
@media screen and (max-width: 550px) {
.search-parent {
display: flex;
flex-flow: column wrap;
justify-content: center;
align-items: center;
background-color: lightgray;
}
.search-parent div {
width: 100%;
text-align: center;
}
}
&lt;/style&gt;</code></pre><p>I hope you have a better understanding of how to get started with Vue and create something awesome.</p><p>If you found this helpful, <strong>clap </strong>below, give <strong>stars </strong>to the project <a href="https://github.com/honey93/VueSearchExample" rel="noopener"><strong>repo</strong></a> and share with your friends too.</p>
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
