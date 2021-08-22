---
card: "https://cdn-media-1.freecodecamp.org/images/1*MUpijMKC5wC_Ged6o_ZJPA.png"
tags: [JavaScript]
description: "Hi, dev community!"
author: "Milad E. Fahmy"
title: "How I analyzed developer trends with a JavaScript pivot table and charting library"
created: "2021-08-16T10:07:13+02:00"
modified: "2021-08-16T10:07:13+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-data-visualization tag-programming tag-web-development tag-data-analysis ">
<header class="post-full-header">
<h1 class="post-full-title">How I analyzed developer trends with a JavaScript pivot table and charting library</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*MUpijMKC5wC_Ged6o_ZJPA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*MUpijMKC5wC_Ged6o_ZJPA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*MUpijMKC5wC_Ged6o_ZJPA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*MUpijMKC5wC_Ged6o_ZJPA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*MUpijMKC5wC_Ged6o_ZJPA.png" alt="How I analyzed developer trends with a JavaScript pivot table and charting library">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Hi, dev community!</p><p>Today I’d like to share my experience of analyzing developers’ preferences based on <a href="https://insights.stackoverflow.com/survey/?r=fr3" rel="noopener">StackOverflow’s Developer Survey Results</a>. Of course, there are plenty of ready <strong>analytical reports</strong> but it’s always much more exciting to create a personal project from scratch and improve our skills of data analysis. And that’s exactly what I’m going to do. :)</p><h3 id="challenges"><strong>Challenges</strong></h3><p>Right from the start, I faced a challenge of finding a tool that could handle the processing of 100k text records. Since it’s an enormous dataset, the tool needs to be powerful and use as little of browser memory as possible. It should be simple-to-use at the same time. Luckily, I found a <strong>web pivot table</strong> component. It looked promising at first sight and helped me accomplish all my intentions related to reporting.</p><p>Beyond its reporting capabilities, I noticed that it supported integration with charting libraries. I chose <strong>FusionCharts. </strong>It also integrates with different JavaScript frameworks and provides sophisticated charts. Using a combination of a pivot table and chart, I managed to create a tiny pet project on data analysis and visualization.</p><h3 id="goals-objectives"><strong>Goals &amp; objectives</strong></h3><p>My analytical purposes included <em>creating a report</em> and <em>visualizing the survey results</em>. I decided to focus on developers’ profiles, their employment statuses, the most loved technologies, languages, frameworks, and libraries and unite this information to gain new insights.</p><p>For example, it was interesting for me to discover the backgrounds of developers who love specific technologies. As the next step forward, I’d like to analyze relationships between choosing different technologies.</p><p>This article will be in the form of a <strong>step-by-step tutorial </strong>where I’ll try to cover the most important aspects of working with both tools.</p><p>I’m excited to share with you the process of creating an interactive dashboard featured with drill-through, drag-and-drop and charting functionality.</p><p>Let’s start!</p><h4 id="install-the-libraries-into-your-project"><strong>Install the libraries into your project</strong></h4><p>As a first step, you need to add the library scripts, Flexmonster connector for FusionCharts, and containers where the components will be rendered.</p><pre><code class="language-html">&lt;script src="https://cdn.flexmonster.com/flexmonster.js"&gt;&lt;/script&gt;
&lt;script src="https://cdn.flexmonster.com/lib/flexmonster.fusioncharts.js"&gt;&lt;/script&gt;
&lt;script src="https://static.fusioncharts.com/code/latest/fusioncharts.js"&gt;&lt;/script&gt;
&lt;div id="pivotContainer"&gt;&lt;/div&gt;
&lt;div id="fusionchartContainer"&gt;&lt;/div&gt;</code></pre><p>If you want to create multiple charts, add more containers for them.</p><h4 id="integrate-a-pivot-table"><strong>Integrate a pivot table</strong></h4><p>Add a reporting tool to your project and set its basic configuration:</p><pre><code class="language-js">var pivot = new Flexmonster({
container: "pivotContainer",
toolbar: true
});</code></pre><p>To find out how to extend the possibilities of the pivot table with various properties, you can check the article about <a href="https://www.flexmonster.com/api/new-flexmonster/?r=fr3" rel="noopener">init API call</a>.</p><h4 id="prepare-and-import-the-data"><strong>Prepare and import the data</strong></h4><p>As a dataset, I’ve chosen the Developer’s Survey Results. It contains 195 MB of raw text data.</p><p>One way to load the data into a pivot table is by defining the function that returns JSON data. But as I can’t show the whole data in a CodePen demo due to its limitations on code size. So as not to clutter my code, I’ve loaded a file on CDN and set a path to my data source:</p><pre><code class="language-js">dataSource: {
filename: "surveyresults.csv"
}</code></pre><h4 id="set-a-slice"><strong>Set a slice</strong></h4><p>Arrange the hierarchies on the grid — put them into rows, columns, and measures. Also, you can add report filters to keep your grid neat and sort the data to see the most relevant records first.</p><pre><code class="language-js">"slice": {
"reportFilters": [{
"uniqueName": "Country"
},
{
"uniqueName": "Gender"
}
],
"rows": [{
"uniqueName": "DevType"
}],
"columns": [{
"uniqueName": "[Measures]"
}],
"measures": [{
"uniqueName": "Salary",
"aggregation": "average"
}],
"sorting": {
"column": {
"type": "desc",
"tuple": [],
"measure": {
"uniqueName": "Salary",
"aggregation": "average"
}
}
}
pivot.off("reportcomplete");
createFusionChart();
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
