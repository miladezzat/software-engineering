---
card: "/images/default.jpg"
tags: [JavaScript]
description: When you're starting out as a beginner JavaScript developer,
author: "Milad E. Fahmy"
title: "How to make your first JavaScript chart with JSCharting"
created: "2021-08-15T19:31:30+02:00"
modified: "2021-08-15T19:31:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-charts ">
<header class="post-full-header">
<h1 class="post-full-title">How to make your first JavaScript chart with JSCharting</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/01/first-javascript-chart-using-csv-jscharting-fit.jpg 300w,
/news/content/images/size/w600/2020/01/first-javascript-chart-using-csv-jscharting-fit.jpg 600w,
/news/content/images/size/w1000/2020/01/first-javascript-chart-using-csv-jscharting-fit.jpg 1000w,
/news/content/images/size/w2000/2020/01/first-javascript-chart-using-csv-jscharting-fit.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/01/first-javascript-chart-using-csv-jscharting-fit.jpg" alt="How to make your first JavaScript chart with JSCharting">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>When you're starting out as a beginner JavaScript developer, I think it is important to pursue interesting projects. That way you can make sure you have fun as you learn, and you'll likely find an area of specialization that you enjoy. </p>
<p>As they say, <em>"If you love what you do, you'll never work a day in your life"</em>. </p>
<figcaption>Source: giphy.com</figcaption>
</figure>
<p>In this article, I will introduce you to front-end data visualization, which is my personal passion. Perhaps it will become your passion as well!</p>
<p>The most rewarding moments for me as a developer are when I can see or experience the results of what I've made. It’s highly satisfying to create a chart that reveals interesting insights about its data, or an interactive experience that helps explore details of a unique data set. The more significant the result, the more rewarding it feels. </p>
<p>However, I have realized that the amount of work you put into a project does not necessarily correlate with the sense of accomplishment – sometimes it feels great even when it was relatively easy. </p>
<p>Over time, you will find tools that will help make you more efficient, and sometimes you will move mountains with little effort. There are many chart libraries and tools available in the data visualization field. With the right tools, you will create new charts with little effort, regardless of the type of chart you need. Personally, I think that datavis yields a great reward on your investment of time and effort.</p>
<p>In this tutorial you will use a number of tools to get data over the internet, process it, and draw a beautiful chart that can be viewed in any modern browser. You can click the links below to download example code for each step individually, view them all on <strong><a href="https://github.com/arthurPuszynski/first-chart-article">GitHub</a></strong>, or download all steps at once here: <strong><a href="https://github.com/arthurPuszynski/first-chart-article/raw/master/zips/all-steps.zip">all-steps.zip</a>.</strong></p>
<h2 id="the-result">The Result</h2>
<p>By the end of this tutorial you will create this interactive data-driven chart. You will learn how to get data over the internet, process it, and make a chart with that data. You will also be able to make your own charts from scratch.</p>
<figcaption>Interactive JavaScript line chart</figcaption>
</figure>
<p>After processing the data and charting it, you will also learn how to make adjustments to the chart including modifying the default legend, enabling x axis crosshairs with tooltips, and applying text annotations to add context and other information to the chart.</p>
<h2 id="the-tools">The Tools</h2>
<p>To get started, use an internet browser like the one you're probably using to read this article. I recommend Chrome as it offers a great experience and built in tools for developers.</p>
<p>Next you will need a text editor. Something as simple as notepad will work. But, I suggest using a more advanced code editor such as VS Code, as this is an environment you will spend a lot of time with. It will give you a more convenient and pleasant coding experience, and it makes writing HTML5, CSS, and JavaScript easier on the eyes. Most important, if you forget a quote or comma somewhere, a code editor can help you find the error.</p>
<p>This article can help you <a href="/news/how-to-choose-a-javascript-code-editor/">choose the best JavaScript code editor for web development</a>.</p>
<p>You will use the JSCharting chart library to automatically draw and add interactive functionality for this chart. No other JavaScript libraries such as jQuery, or front-end platforms including React and Angular (commonly used for website projects) will be required.</p>
<h3 id="why-jscharting">Why JSCharting?</h3>
<p><a href="https://jscharting.com/">JSCharting</a> is a JavaScript charting library that can draw many different types of charts using SVG. It is easy to use and get started with, so it's a good fit for this tutorial. The API (Application Programming Interface, aka the options and settings necessary to create charts) makes difficult things simpler and it is a good option when experimenting with data visualizations. </p>
<p>You can use JSCharting for free for personal and commercial use with the included branding.</p>
<p>You can create responsive charts with JSCharting through a couple simple steps:</p>
<ul>
<li>Define a <code>&lt;div&gt;</code> tag in the HTML file with a unique id.</li>
<li>Provide this id, data, and any other options when calling <code>JSC.Chart()</code> in the JavaScript file.</li>
</ul>
<p>That's it. JSC will draw a professional looking chart populating this div tag with SVG element visuals. The chart will be responsive and interactive without any extra effort.</p>
<h2 id="the-data">The Data</h2>
<p>You will use a data file provided by the NCHS (National Center for Health Statistics) listing historical life expectancy of males and females in the US.</p>
<p>You can find it here: <a href="https://data.cdc.gov/resource/w9j2-ggv5.csv">https://data.cdc.gov/resource/w9j2-ggv5.csv</a>. </p>
<p>This CSV file contains data that categorizes the life expectancies by year, race, and sex. You will use some of this data to draw a simple male/female trend line over the last 100 years.</p>
<p>CSV (Comma Separated Values) is a great format for transmitting data over the internet. It is compact, human readable and you can open it directly excel, which is also nice.</p>
<p>So without further ado, let's get started.</p>
<figcaption>Source: giphy.com</figcaption>
</figure>
<h2 id="step-1-add-a-blank-chart">Step 1 - Add a blank chart</h2>
<p>The first zip file contains a blank starting point you can fill in as we go. If you get lost or confused, or want to skip ahead, the zip file at the end or throughout each section will bring you up to speed. &nbsp;</p>
<p>If you wish to download all the files at once, see <strong><a href="https://github.com/arthurPuszynski/first-chart-article/raw/master/zips/all-steps.zip">all-steps.zip</a></strong><em> </em>instead<em>.</em></p>
<h3 id="step1-a-zip"><a href="https://github.com/arthurPuszynski/first-chart-article/raw/master/zips/step1-a.zip">step1-a.zip</a></h3>
<p>This zip file contains the following files.</p>
<ul>
<li><code>index.html</code></li>
<li><code>js/index.js</code></li>
</ul>
<p>The <code>.html</code> file is empty except for some standard code that makes it a valid file and the <code>.js</code> file is completely blank.</p>
<p>The first step is to add some scripts to the HTML web page file. Normally people suggest adding <code>&lt;script&gt;</code> tags inside the <code>&lt;head&gt;</code> tags. However, for scripts that affect the HTML content it is often better to add them after the closing <code>&lt;/body&gt;</code> tag.</p>
<p>This technique loads all the HTML into the DOM before executing any JavaScript. The chart needs the HTML loaded before it can draw in it. The DOM (Document Object Model) is a representation of your HTML code in the browser memory. Once HTML is loaded into the DOM the browser can display it and JavaScript can interact with it.</p>
<p>Start by adding the JSCharting library to the HTML file. Open the <code>index.html</code> file in your editor of choice. Then add a script tag to include JSCharting after the closing <code>&lt;/body&gt;</code> tag. The resulting code at the bottom of the file should look like this:</p>
&lt;script src="https://code.jscharting.com/2.9.0/jscharting.js"&gt;&lt;/script&gt;
&lt;/html&gt;</code></pre>
<p>This library URL points to a CDN (Content Delivery Network). It hosts the chart code and makes it convenient to quickly add the library to any HTML page for prototyping charts and experimenting. You can also <a href="https://jscharting.com/download/">download</a> and use the library locally or use the npm package in your project, but the CDN does not require any extra steps.</p>
<p>Next, using the same technique, add another script tag referencing your blank JavaScript file. Add this script after the <code>jscharting.js</code> script so it looks like this:</p>
&lt;script src="https://code.jscharting.com/2.9.0/jscharting.js"&gt;&lt;/script&gt;
&lt;script src="js/index.js"&gt;&lt;/script&gt;
&lt;/html&gt;</code></pre>
<p>Great. We are almost ready to draw a blank chart. The last thing you need to do is add a <code>&lt;div&gt;</code> placeholder inside the HTML file to define where we want this chart to draw.</p>
<p>Add this HTML code inside the <code>&lt;body&gt;</code> tags.</p>
&lt;div id="chartDiv" style="width:50%; height:300px; margin:0 auto;"&gt;&lt;/div&gt;
&lt;/body&gt;</code></pre>
<p>The div must have an id so you can tell the chart which div to draw in. In this case the id is <code>chartDiv</code>.</p>
<p>You may notice the style attribute of the <code>&lt;div&gt;</code> tag. It makes the div 50% of the window width, and 300 pixels tall. The margin style <code>margin:0 auto;</code> centers the div on the page. The chart will fill whatever size the div is, so changing the div size is a good way to control the chart size.</p>
<p>You're all set with the HTML file. Open the <code>index.js</code> file and add a blank chart to this page by writing the following code which includes the div id <code>chartDiv</code>:</p>
<p>Open the <code>index.html</code> file in a browser (drag and drop the file into a web browser like chrome).</p>
<p>Not much to see yet, but you might notice a small JSC logo on this page. That indicates a chart is wired up and drawing.</p>
<figcaption>JSCharting logo shows the chart is working</figcaption>
</figure>
<p><strong><strong><a href="https://github.com/arthurPuszynski/first-chart-article/raw/master/zips/step1-b.zip">step1-b.zip</a></strong></strong></p>
<h2 id="step-2-play-with-the-chart-a-little-bit">Step 2 - Play with the chart a little bit</h2>
<p>Ok, as a test, let's add a couple values for the chart to visualize to see how it works.</p>
<p>Going back to the <code>index.js</code> file, replace the content with the following code which adds more options to the chart.</p>
type: 'horizontal column',
series: [
{
points: [
{x: 'Apples', y: 50},
{x: 'Oranges', y: 42}
]
}
]
});</code></pre>
<p>Now refresh (F5) the browser window where the <code>index.html</code> page is loaded.</p>
<figcaption>Horizontal column chart with one series and two points</figcaption>
</figure>
<p>Nice! You just made your first chart using JavaScript.</p>
<figcaption>Source: giphy.com</figcaption>
</figure>
<p>You made a bar chart by setting the chart type option to <code>'horizontal column'</code>. If you prefer a vertical column, set the value to <code>'column'</code>. You also added a series with two points to the chart for Apples and Oranges.</p>
<p>All chart data is made up of series and points. A series is simply a group of data points. Charts can contain one or more data series. Data points consist of values that map to the x and y axes. Points can also include many other descriptive variables and values.</p>
<p>The example above contains only one series. Now let's look at the options for a chart with two series. Replace the content of the JavaScript file with this code.</p><pre><code class="language-JavaScript">JSC.Chart('chartDiv', {
type: 'horizontal column',
series: [
{
name:'Andy',
points: [
{x: 'Apples', y: 50},
{x: 'Oranges', y: 32}
]
},{
name:'Anna',
points: [
{x: 'Apples', y: 30},
{x: 'Oranges', y: 22}
]
}
]
});</code></pre>
<p>Refreshing the browser window will show this chart.</p>
<figcaption>Horizontal column chart with two series</figcaption>
</figure>
<p>The chart options look similar. Still a bar chart, but this time there is an extra object in the series array. &nbsp;We also added name properties for each series so the chart can identify them in the legend.</p>
<p>If you are interested in making different charts like radar charts, area charts, pie charts, gantt charts, or even calendar heatmap charts, take a look at the <a href="https://jscharting.com/examples/chart-types/">JSCharting examples gallery</a> and the source code (chart options) used to create those charts. You can quickly learn how to use other chart features by copying the available examples.</p>
<p><strong><strong><a href="https://github.com/arthurPuszynski/first-chart-article/raw/master/zips/step2.zip">step2.zip</a></strong></strong></p>
<h2 id="step-3-prepare-the-data">Step 3 - Prepare the data</h2>
<figcaption>Source: giphy.com</figcaption>
</figure>
<p>The CSV data format is exactly that – Comma Separated Values. The file contains rows (lines) and each row represents a record or entry. Normally the first row of values contains the names of each comma separated value (column). Subsequent rows contain the values themselves. </p><pre><code>name,age
chris,26
mike,34</code></pre>
<p>CSV is human readable, but there are variations of this format. Sometimes if values contain commas (e.g. mailing addresses) the format doesn't work as-is so each value is also wrapped in quotes. That way the commas inside quotes are ignored and the format can still work by using only the commas outside of quotes to separate the values. </p><pre><code>"name","age","parents"
"Chris","26","Gregory, Mary"
"Mike","34","David, Sarah"</code></pre>
<p>Values can also be separated using a different character like tabs in place of commas.</p>
<p>But let's not get bogged down in minutia. JSCharting provides a number of tools that help with this process and we will use one of them to skip worrying about the CSV file format and convert it to JSON (JavaScript Object Notation). The result will be an array of objects. Each object represents a row with named properties. The first row in the CSV file is used to define the names of those properties.</p>
<p>This is the url of the data we are interested in: <a href="https://data.cdc.gov/resource/w9j2-ggv5.csv">https://data.cdc.gov/resource/w9j2-ggv5.csv</a>.</p>
<p>You can click to download and open it in excel.</p>
<figcaption>CSV file opened in Excel</figcaption>
</figure>
<p>However, you will download and access this CSV data in real-time using JavaScript code. The code below may be slightly confusing at first, but it's short and you can reuse it to get any CSV, text, or JSON files over the internet programmatically. It is similar to the older AJAX technology but much simpler to use.</p>
<p>Once again, replace the content of the <code>index.js</code> file with the following:</p>
.then(function (response) {
return response.text();
})
.then(function (text) {
csvToSeries(text);
})
.catch(function (error) {
//Something went wrong
console.log(error);
});
function csvToSeries(text) {
console.log(text);
}</code></pre>
<p>Why so complicated? It is because when you request a file, it does not immediately become available. There is a delay and you have to wait for the file to arrive. So first you request the file from another website using <code>fetch()</code>.</p>
<p>Then the code inside the <code>then(...)</code> argument function gets called with the response when it arrives. This function converts the response into text and returns it, which passes the result to the following <code>then()</code> argument function.</p>
return response.text();
})</code></pre>
<p>The next <code>then(...)</code> argument function calls the <code>csvToSeries()</code> function, and passes the text as an argument.</p>
csvToSeries(text);
})</code></pre>
<p>In the <code>catch()</code> function, you can specify what to do if anything goes wrong. For example maybe the internet is down, or the URL is not correct.</p>
//Something went wrong
console.log(error);
});</code></pre>
<p>In this case, the error is sent to the console.</p>
<p>In the <code>csvToSeries()</code> function we pass this text to the console for inspection.</p>
console.log(text);
}</code></pre>
<p>? <strong>Note:</strong> The native <code>fetch()</code> function is not supported in Internet Explorer 11. If you want to support this browser as well, you can use the <code>JSC.fetch()</code> function which comes with JSCharting. It provides the same functionality, but adds additional support for IE11.</p>
<p>Drag the <code>index.html</code> file into a browser window (or refresh the page if already open) and press F12. This will open the DevTools window of the chrome browser. By default, the bottom half of the DevTools window will show the console output. This is where the text is sent when you run code like:</p>
<figcaption>Console window output</figcaption>
</figure>
<p>You can also paste or write code into this console window to execute it. Try pasting the entire code snippet above into the console window (next to the &gt; character) and press enter. You will notice you get the same result in the console window output. This can be useful for testing a line of code and experimenting.</p>
<p><strong><strong><a href="https://github.com/arthurPuszynski/first-chart-article/raw/master/zips/step3-a.zip">step3-a.zip</a></strong></strong></p>
<p>At this point you have retrieved the text of the CSV file over the internet and sent it to the console to prove that it works. Now we can start to work with it.</p>
<p>Let's take a look at this data file to get an idea of what's inside: <a href="https://data.cdc.gov/resource/w9j2-ggv5.csv">https://data.cdc.gov/resource/w9j2-ggv5.csv</a></p>
<p>I used excel to sort the rows by the year column to analyze the rows of data for a single year. </p>
<figcaption>The CSV data sorted by year.</figcaption>
</figure>
<p>Each year contains 9 rows with data based on race and sex. We are only interested in the highlighted male and female values of all races for each year. You will create two series based on the highlighted rows. A series for female and one for male values. </p>
<p>Now that you have an idea of what needs to happen, let's get started.</p>
<p>First, let's use the <code>JSC.csv2Json()</code> function to convert the text into JSON format and pass it to the console to see what it does.</p>
<p>Update the <code>csvToSeries()</code> function with the following code:</p>
let dataAsJson = JSC.csv2Json(text);
console.log(dataAsJson)
}</code></pre>
<p>Refresh the browser to see the updated console output. <br></p>
<figcaption>CSV data converted to JSON using JSC.csv2Json() utility function</figcaption>
</figure>
<p>The console shows an array of 1062 records. And this is one of these records:</p><pre><code class="language-JSON">{year: 1900, race: "All Races", sex: "Both Sexes", average_life_expectancy: 47.3, mortality: 2518}</code></pre>
<p>? <strong>Note:</strong> The console can display arrays, and objects for inspection and you can expand and collapse sections in the console to explore details.</p>
<p>The property name <code>average_life_expectancy</code> is a little long, but you will need to use it. To avoid typing it more than once, define a constant variable to store this name. When you need to use this property, you can just write the variable name <code>lifeExp</code>. It will look like this <code>row[lifeExp]</code> instead of <code>row.average_life_expectancy</code>.</p>
<p>Add this line at the top of the <code>csvToSeries()</code> function.</p>
const lifeExp = 'average_life_expectancy';
...</code></pre>
<p>You can process this data using simple vanilla JavaScript. The end result we want is two series with data points that include a year and life expectancy for each point.</p>
<p>Update the <code>csvToSeries()</code> with the following code:</p>
const lifeExp = 'average_life_expectancy';
let dataAsJson = JSC.csv2Json(text);
let male = [], female = [];
dataAsJson.forEach(function (row) {
console.log(row);
});
}</code></pre>
<p>It defines arrays for male and female data points. Then it calls the array <code>dataAsJson.forEach()</code> function passing a callback <code>function(row){...}</code> function as the argument. The <code>forEach()</code> function will execute the callback function for each item in the <code>dataAsJson</code> array. For now we will just call <code>console.log(row)</code> on each row that the callback function encounters.</p>
<p>Refresh the browser and inspect the console output.</p>
<figcaption>Each row object the callback function encountered</figcaption>
</figure>
<p>Let's add some logic to filter the data we want and log the result in the console window. Replace the <code>csvToSeries()</code> function with this code.</p>
const lifeExp = 'average_life_expectancy';
let dataAsJson = JSC.csv2Json(text);
let male = [], female = [];
dataAsJson.forEach(function (row) {
if (row.race === 'All Races') {
if (row.sex === 'Male') {
male.push({x: row.year, y: row[lifeExp]});
} else if (row.sex === 'Female') {
female.push({x: row.year, y: row[lifeExp]});
}
}
});
console.log([male, female]);
}</code></pre>
if (row.sex === 'Male') {
//add data to male array
male.push({x: row.year, y: row[lifeExp]});
} else if (row.sex === 'Female') {
//add data to female array
female.push({x: row.year, y: row[lifeExp]});
}
}</code></pre>
<p>The logic checks to see if the <code>row.race</code> value equals 'All Races'. If so, then it checks to see if the <code>row.sex</code> property equals either 'Male' or 'Female'. If the row equals either, it adds the data to either the <code>male</code> or <code>female</code> arrays as a <code>{x, y}</code> point object. Notice the use of the <code>lifeExp</code> variable defined above which helps shorten this code.</p>
<p>At the end, you used <code>console.log([male, female])</code> to pass the male and female variables to the console for inspection and to make sure your code worked as expected.</p>
<p>After refreshing the browser, the console shows the result which is two arrays, each with 118 data points spanning the years 1900 to 2017.</p>
<figcaption>The male and female point arrays</figcaption>
</figure>
<p>Lastly, instead of passing the result to the console, wrap these data points within an array of two series that the chart can use directly and return them.</p>
<p>Add this code at the end of the <code>csvToSeries()</code> function:</p>
{name: 'Male', points: male},
{name: 'Female', points: female}
];</code></pre>
<p>If the returned value was sent to the console, it would produce this result.<br></p>
<figcaption>Two series objects the chart can consume directly</figcaption>
</figure>
<p>As you can see, the logic for filtering rows is fairly simple and you can adjust it to get other details from this data set. </p>
<p>To learn more about handling CSV files using JSCharting utilities, see this <a href="https://jscharting.com/tutorials/js-chart-data/client-side/fetch-csv-and-json/">tutorial</a>. When you are ready for more advanced data handling, the <a href="https://jscharting.com/tutorials/js-chart-data/client-side/data-nesting/">JSC.nest() utility</a> can be used to create series and points from JSON data with with very little code. </p>
<p><a href="https://github.com/arthurPuszynski/first-chart-article/raw/master/zips/step3-b.zip"><strong>step3-b.zip</strong></a></p>
<h2 id="step-4-putting-it-all-together">Step 4 - Putting it all together</h2>
<p>The data handling section was the most difficult step, but that alone will enable you to manipulate and extract data of interest from any CSV file. This is where it all comes together and where you will feel a sense of accomplishment.</p>
<p>Start by adding a <code>renderChart()</code> function to the end of the <code>index.js</code> file. You will pass the series data to this function as an argument.</p>
JSC.Chart('chartDiv', {
series: series
});
}</code></pre>
<p>In the <code>then()</code> argument function that calls <code>csvToSeries()</code>, pass the series result to the <code>renderChart()</code> function to see what it draws in the browser.</p>
let series = csvToSeries(text);
renderChart(series);
})</code></pre>
<p><strong><a href="https://github.com/arthurPuszynski/first-chart-article/raw/master/zips/step4-a.zip">step4-a.zip</a></strong></p>
<p>Now, refresh the browser. You should see this chart that uses the CSV data you processed in the previous section. Sweet! ?</p>
<figcaption>Line chart showing filtered CSV data</figcaption>
</figure>
<p>Whoa, what happened in 1918? Life expectancy dropped significantly there. According to Wikipedia there was a <a href="https://en.wikipedia.org/wiki/Spanish_flu">flu pandemic</a> involving H1N1 virus that wiped out a portion of the world population. This unfortunate event shows how visualizing data provides insights you would not normally get from just looking at the numbers.</p>
<p>You created a chart using the default line series type and it looks good, but you can make a few adjustments and tweaks to further improve it.</p>
<p>First, add a title at the top to explain what the viewer is looking at and an annotation at the bottom of the chart to credit the data source. Update the <code>JSC.Chart()</code> constructor function to pass the following options:</p>
JSC.Chart('chartDiv', {
title_label_text: 'Life Expectancy in the United States',
annotations: [{
label_text: 'Source: National Center for Health Statistics',
position: 'bottom left'
}],
series: series
});
}
</code></pre>
<p>When you refresh the browser you can see the updated chart.</p>
<figcaption>Line chart with title and annotation for attribution</figcaption>
</figure>
<p>You added an annotation with label text, and a position setting. We can use another annotation for the title as well, but it was easier to use the title label in this example.</p>
<p>It is easy to control the annotation position using values such as <code>'top right'</code> or <code>'inside bottom right'</code>. The <code>'inside'</code> value means the annotation is placed inside the chart area where data is drawn. This <a href="https://jscharting.com/examples/chart-features/annotation/box-positions/">box positions chart example</a> demonstrates all the position setting options.</p>
<p>The legend shows the sum of point values for each series, but the sum is not important for this data set. You can reduce the legend columns to only show the icon and series name by using this setting:</p><pre><code class="language-javascript">legend_template: '%icon,%name'</code></pre>
<p>But you don't really need to use a legend at all. It will be cleaner to simply label the lines themselves. You can disable the legend, and tell the chart to write the series name on the last point of each line series with these chart options:</p><pre><code class="language-javascript">legend_visible: false,
defaultSeries_lastPoint_label_text: '&lt;b&gt;%seriesName&lt;/b&gt;',
</code></pre>
<figcaption>Line chart using point labels instead of a legend</figcaption>
</figure>
<p>The <code>'%seriesname'</code> token is one of many <a href="https://jscharting.com/tutorials/js-chart-labels/token-reference/#point-tokens">point related tokens</a> that can be used in any point label text to show point details and calculations.</p>
<p>Finally, let’s enable the x axis crosshair combined tooltip to show the male and female life expectancy for any given year. On mobile devices, you can tap the chart to see the crosshair tooltip. When using a PC, tooltips display when hovering over the chart with your mouse pointer.</p><pre><code class="language-javascript">xAxis_crosshair_enabled: true,</code></pre>
<p>You may be wondering, what's with all those underscores in property names? This is not the actual property name. It's a shorthand way to write:</p><pre><code class="language-javascript">xAxis: {crosshair: {enabled: true}},</code></pre>
<p>You may find it more convenient to specify a setting with underscores and JSCharting will understand what you mean.</p>
<p>The default tooltip text is clear, but let's customize it slightly to make it our own.</p>
<figcaption>Default combined tooltip</figcaption>
</figure>
<p>Since the crosshair tooltip shows information about each point it crosses, the tooltip text is defined within the point options. The <code>defaultPoint</code> property defines point options that all points will inherit automatically.</p>
<figcaption>Customized combined tooltip</figcaption>
</figure>
<p>For more information about this feature, check out the <a href="https://jscharting.com/tutorials/js-chart-interactivity/crosshair-combined-tooltip/">crosshair and combined tooltip tutorial</a>.</p>
<p>When you apply all these options, your code will look similar to the following snippet. Replace the entire <code>renderChart()</code> function with this code.</p>
JSC.Chart('chartDiv', {
title_label_text: 'Life Expectancy in the United States',
annotations: [{
label_text: 'Source: National Center for Health Statistics',
position: 'bottom left'
}],
legend_visible: false,
defaultSeries_lastPoint_label_text: '&lt;b&gt;%seriesName&lt;/b&gt;',
defaultPoint_tooltip: '%seriesName &lt;b&gt;%yValue&lt;/b&gt; years',
xAxis_crosshair_enabled: true,
series: series
});
}
</code></pre>
<p>Refresh the browser window once more.</p>
<figcaption>Line chart with crosshairs and customized combined tooltips</figcaption>
</figure>
<p>You did it! </p>
<figcaption>Source: giphy.com</figcaption>
</figure>
<p>First you fetched CSV data using native JavaScript. You then converted it into JSON format and filtered the data into two series. With those series you created a beautiful interactive line chart using JSCharting and configured it to look professional. </p>
<p>You can customize and adjusted the charts further to meet your specific needs. Visit the JSCharting <a href="https://jscharting.com/tutorials/">tutorials</a> section to learn more about a specific topic, or find charts similar to what you want to make in the <a href="https://jscharting.com/examples/chart-types/">examples gallery</a> and copy them to continue your data visualization journey.</p>
<p>If you run into problems working with JSCharting, feel free to <a href="https://jscharting.com/support.htm">contact</a> the support team. They will be happy to guide you or help resolve any issues you may encounter.</p>
<p><strong><strong><a href="https://github.com/arthurPuszynski/first-chart-article/raw/master/zips/step4-b.zip">step4-b.zip</a></strong></strong></p>
<h2 id="bonus-challenge">Bonus Challenge</h2>
<p>We did not use all the data available in in that CSV file. Let's experiment with it for fun and practice.</p>
<p>Create this chart using what you have learned.</p>
<figcaption>Challenge: Replicate this chart on your own</figcaption>
</figure>
<p>This zip file contains the answer:</p>
<p><strong><a href="https://github.com/arthurPuszynski/first-chart-article/raw/master/zips/step5-bonus.zip">step5-bonus.zip</a></strong></p>
<p>Can you think of other charts you can make with this data? Keep experimenting and enjoy every minute of it!</p>
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
