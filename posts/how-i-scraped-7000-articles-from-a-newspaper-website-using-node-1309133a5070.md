---
card: "https://cdn-media-1.freecodecamp.org/images/1*dCcidN-uNelWP_fMYvC_jA.jpeg"
tags: [JavaScript]
description: "My girlfriend is writing a paper about the perception of Fren"
author: "Milad E. Fahmy"
title: "How I Scraped 7000 Articles From a Newspaper Website Using Node"
created: "2021-08-16T10:19:09+02:00"
modified: "2021-08-16T10:19:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-web-development tag-data-science tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How I Scraped 7000 Articles From a Newspaper Website Using Node</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*dCcidN-uNelWP_fMYvC_jA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*dCcidN-uNelWP_fMYvC_jA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*dCcidN-uNelWP_fMYvC_jA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*dCcidN-uNelWP_fMYvC_jA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*dCcidN-uNelWP_fMYvC_jA.jpeg" alt="How I Scraped 7000 Articles From a Newspaper Website Using Node">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
{
‎ date:,
title:,
description:,
‎ text:,
‎ url:,
‎},
]</code></pre><h4 id="first-step-get-all-articles-urls">First step: get all articles’ URLs</h4><p>The first step was quite easy. Thanks to the advanced search feature, I just had to get the URL link of the result page and tell my code how to:</p><ul><li>Look for the number of results</li><li>Calculate the number of pages, knowing that there are 30 articles per page</li><li>Get the title, the description, the date, and the URL of the 30 articles for each page</li></ul><p>Here is the code to do so:</p><pre><code class="language-javascript">const fs = require("fs");
const request = require("request");
const cheerio = require("cheerio");
const jsonTab = []; // We create our table
function writeFile() {
// Will write the json file
fs.writeFile("output.json", JSON.stringify(jsonTab, null, 4), (err) =&gt; {
console.log("File successfully written!");
});
}
// The URL of the advanced search feature with our keywords
const url = 'http://www.lemonde.fr/recherche/?keywords="Rap+"+"hip-hop"+"hip%20hop"+"rappeur"+"rappeurs"+"raps"+"rappers"&amp;page_num=1&amp;operator=or&amp;exclude_keywords=&amp;qt=recherche_texte_title&amp;author=&amp;period=custom_date&amp;start_day=01&amp;start_month=01&amp;start_year=1970&amp;end_day=20&amp;end_month=09&amp;end_year=2017&amp;sort=asc';
/* The first request call, our goal here is to get the number of results and then
to calculate the number of pages */
request(url, (error, response, html) =&gt; {
const $ = cheerio.load(html);
// All the variables we will use later
let number;
let description;
let date;
let title;
let link;
if (!error) {
$(".bg_gris_clair").filter(() =&gt; {
/* We want to select all the HTML
elements with the class ".bg_gris_clair" (and we already know there is
only one) */
const data = $(this);
const str = data.children("strong").text().trim();
number = parseInt(str.substring(0, str.indexOf("e")).replace(/\s/g, ""), 10);
});
}
let count = 1;
for (let i = 1; i &lt;= number / 10; i++) {
const urlPerPage = 'http://www.lemonde.fr/recherche/?keywords="Rap+"+"hip-hop"+"hip%20hop"+"rappeur"+"rappeurs"+"raps"+"rappers"&amp;page_num=' + i + "&amp;operator=or&amp;exclude_keywords=&amp;qt=recherche_texte_title&amp;author=&amp;period=custom_date&amp;start_day=01&amp;start_month=01&amp;start_year=1970&amp;end_day=20&amp;end_month=09&amp;end_year=2017&amp;sort=asc";
request(urlPerPage, (err, response2, html2) =&gt; {
if (!err) {
const $ = cheerio.load(html2);
$(".grid_11.omega.resultat").filter(() =&gt; {
const json = {
date: "",
title: "",
description: "",
url: ""
};
const data = $(this);
title = data.children("h3").children("a").text().trim();
link = "http://lemonde.fr" + data.children("h3").children("a").attr("href").trim();
description = data.children("p").text().trim();
const dateStr = data.children("span").text();
date = dateStr.replace(/.+?(?=\d)/, "");
json.title = title;
json.url = link;
json.description = description;
json.date = date;
jsonTab.push(json);
});
} else if (err) {
console.log(err);
}
count += 1;
// Write the file once we iterated through all the pages.
if (count === parseInt(number / 10, 10)) {
writeFile();
}
});
}
const request = require("request");
const cheerio = require("cheerio");
// Prepare all the variables needed later
let count = 0;
let timeout = 0;
const id = "myusername";
const mdp = "mypassword";
let obj;
// The URLs we will scrape from
const connexionUrl = "https://secure.lemonde.fr/sfuser/connexion";
// Will write an "output.json" file
function writeFile() {
fs.writeFile("output.json", JSON.stringify(obj, null, 4), (err) =&gt; {
console.log(
"File successfully written! - Check your project directory for the output.json file"
);
});
}
// creating a clean jar to store the cookies
const j = request.jar();
// First Get Request Call
request(
{
url: connexionUrl,
jar: j
},
(err, httpResponse, html) =&gt; {
const $ = cheerio.load(html);
// We use Cheerio to load the HTML and be able to find the connection__token
const token = $("#connection__token")[0].attribs.value; // here is the connection__token
// Construction of the form required in the POST request to login
const form = {
"connection[mail]": id,
"connection[password]": mdp,
"connection[stay_connected]": 1,
"connection[save]": "",
"connection[_token]": token
};
// POST REQUEST to Log IN. Same url with "request headers" and the complete form.
request.post(
{
url: connexionUrl,
jar: j,
headers: {
Accept:
"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
"Accept-Encoding": "gzip, deflate, br",
"Accept-Language": "fr-FR,fr;q=0.8,en-US;q=0.6,en;q=0.4",
"Cache-Control": "no-cache",
"Content-Type": "application/x-www-form-urlencoded",
Origin: "http://secure.lemonde.fr/",
Host: "secure.lemonde.fr",
"Upgrade-Insecure-Requests": 1,
"User-Agents":
"Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0",
Connection: "keep-alive",
Pragma: "no-cache",
Referer: "https://secure.lemonde.fr/sfuser/connexion"
},
form: form
},
(error, response, body) =&gt; {
// WE ARE CONNECTED :D
/* Second GET request call : this time, we use the response of the POST
request to request the right URL */
request(
{
url: response.headers.location,
jar: j
},
(err, httpResponse, html2) =&gt; {
const json = fs.readFileSync("./firstStep.json"); // Load the JSON created in step one
obj = JSON.parse(json); // We create our JSON in a usable javascript object
// forEach loop to iterate through all the object and request each link
obj.forEach((e) =&gt; {
let articleUrl = e.url;
/* We use a setTimeout to be sure that all the requests are performed
one by one and not all at the same time */
setTimeout(() =&gt; {
request(
{
url: articleUrl,
jar: j
},
(error1, httpResponse, html3) =&gt; {
if (!error1) {
const $ = cheerio.load(html3); // load the HTML of the article page
$(".contenu_article.js_article_body").filter(() =&gt; {
const data = $(this);
// get the content, remove all the new lines (better for Excel)
let text = data
.text()
.trim()
.replace(/\n/g, "\t");
e.text = text; // push the content in the table
});
$(".txt3.description-article").filter(() =&gt; {
const data = $(this);
const description = data
.text()
.trim()
.replace(/\n/g, "\t");
e.description = description;
});
}
}
);
count += 1;
// Write a new JSON file once we get the content of all the articles
if (count === obj.length) {
writeFile();
}
}, timeout);
timeout += 50; // increase the timeout length each time
});
}
);
}
);
}
);
</code></pre><p>I have now a JSON file with all the articles and their content. The last step is to convert it into an actual Excel table.</p><h4 id="bonus-step-four-from-json-to-csv">Bonus Step Four : From .JSON to .CSV</h4><p>Here is a simple code to convert your “output.json” file to “output.csv” (You can thank my friend <a href="https://github.com/jvdsande" rel="noopener">@jvdsande</a>):</p><pre><code class="language-javascript">const fs = require('fs');
let jsonstring = fs.readFileSync('output.json') // load the output.json file
let json = JSON.parse(jsonstring)
function JSONtoCSV(JSON) {
let CSV = ''
Object.keys(JSON[0]).forEach((key) =&gt; {
CSV += key + '§'
})
CSV += '\r\n'
JSON.forEach((obj) =&gt; {
Object.keys(obj).forEach((key) =&gt; {
CSV += obj[key] + '§'
})
CSV += '\r\n'
})
return CSV
}
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
