---
card: "https://cdn-media-1.freecodecamp.org/images/0*H0zOGll9hkDgaraV"
tags: [JavaScript]
description: "The heart of every application is displaying data to users. S"
author: "Milad E. Fahmy"
title: "How to Add Charts and Graphs to a Vue.js Application"
created: "2021-08-16T11:30:43+02:00"
modified: "2021-08-16T11:30:43+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-software-engineering tag-programming tag-vuejs tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to Add Charts and Graphs to a Vue.js Application</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*H0zOGll9hkDgaraV 300w,
https://cdn-media-1.freecodecamp.org/images/0*H0zOGll9hkDgaraV 600w,
https://cdn-media-1.freecodecamp.org/images/0*H0zOGll9hkDgaraV 1000w,
https://cdn-media-1.freecodecamp.org/images/0*H0zOGll9hkDgaraV 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*H0zOGll9hkDgaraV" alt="How to Add Charts and Graphs to a Vue.js Application">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h3 id="quick-guide-to-using-echarts-and-vue-echarts">Quick Guide to using echarts and vue-echarts</h3><p>The heart of every application is displaying data to users. Sometimes it is very challenging to display that data using text. Charts and graphs are a great way to provide a visual representation of that data. In this article, I will show you how easy it is to create visually appealing charts in your Vue.js application.</p><h3 id="getting-started">Getting Started</h3><p>I will be using the Vue CLI to scaffold out a starter application quickly. I will use both echarts and vue-echarts to add charts to our starter application. So let’s get started.</p><p>Install the Vue CLI with this command:</p><pre><code class="language-bash">npm install @vue/cli</code></pre><p>Next, we will use the Vue CLI to scaffold out a Vue application that we will use. We will create the application using this command:</p><pre><code class="language-bash">vue create vue-echarts-demo</code></pre><p>The Vue CLI will ask you if you want to use the default preset or manually select features. Select <code>default</code>.</p><p>This will create our application in a folder called <code>vue-echarts-demo</code>. Change into this directory with this command:</p><pre><code class="language-bash">cd vue-echarts-demo</code></pre><h4 id="installing-the-chart-packages">Installing the chart packages</h4><p><strong>eCharts</strong> is one of the largest and most widely used chart programs. We will be using this in our vue application. To allow it to be used in Vue, we will also be using a product called <strong>vue-echarts</strong>. Vue-echarts is a wrapper for eCharts to allow it to work in the Vue environment.</p><p>You can install them both with this command:</p><pre><code class="language-bash">npm install echarts vue-echarts</code></pre><h4 id="configuring-the-chart-packages">Configuring the chart packages</h4><p>Now that we have the chart packages installed we need to install them in our application. Open up the <code>src</code> directory and create a new directory called <code>plugins</code>. Inside the new plugins directory create a file called <code>echarts.js</code>.</p><p>We will create a Vue component for eCharts in this file. The component will be globally available in our application. The steps we need to take is to import both vue and vue-echarts. Next, we will import the parts of eCharts that we will be using. Our first chart will be a bar chart so we will need to import that too. Finally, we create a global component called <code>chart</code>. Here is what your echarts.js file should look like:</p><pre><code class="language-js">import Vue from 'vue';
import Echarts from 'vue-echarts';
import 'echarts/lib/chart/bar';
Vue.component('chart', Echarts);</code></pre><h4 id="importing-our-plugin-file">Importing our plugin file</h4><p>We have to make Vue aware of the file we just created. We do that by importing it in the <code>main.js</code> file. Open up the main.js file and add the following line after the last import statement:</p><pre><code class="language-js">import "@/plugins/echarts";</code></pre><p>Now we are ready to create our first chart.</p><h3 id="creating-a-bar-chart">Creating a Bar Chart</h3><p>We will be creating all our charts in the HelloWorld component. This component was created automatically when we used the Vue CLI to create our application.</p><p>Open up the file <code>HelloWorld.vue</code> and do the following:</p><ul><li>delete all the html inside the template tags</li><li>delete the props in the script tags</li><li>delete all the CSS in the style tags</li></ul><p>Your file should look like this:</p><pre><code class="language-html">&lt;template&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
name: 'HelloWorld',
}
&lt;/script&gt;
&lt;style scoped&gt;
&lt;/style&gt;</code></pre><p>In our plugin, we called our component <code>chart</code>. Vue-echarts builds charts by using the data you pass into it using a prop called <code>options</code>. Let’s use that to create the html for our first chart. Add the following code inside the template tags:</p><pre><code class="language-js">&lt;chart :options="chartOptionsBar"&gt;&lt;/chart&gt;</code></pre><h4 id="defining-our-chart">Defining our chart</h4><p>Next, we need to define the data that will be used to create our chart. Inside the script tags create a new data object with an entry for chartOptionsBar. Your script tag should look like this:</p><pre><code class="language-html">&lt;script&gt;
export default {
name: 'HelloWorld',
data: () =&gt; ({
chartOptionsBar: {}
})
}
&lt;/script&gt;</code></pre><h4 id="creating-chart-data">Creating chart data</h4><p>Our first bar chart will contain quarterly sales data for a fictional company. Each quarter will be displayed on the x-axis of the chart. The sales amount will be displayed on the y-axis of the chart.</p><p>Let’s define our xAxis first. We will provide a data array which will contain entries for each quarter of the year. Add the following to our <code>chartOptionsBar</code> object:</p><pre><code class="language-js">chartOptionsBar: {
xAxis: {
data: ['Q1', 'Q2', 'Q3', 'Q4']
}
}</code></pre><p>Our yAxis will only display the value of sales for each quarter. For that reason, we do not need to create a data array for it. Instead, we tell it that it will display the <code>value</code>. Add the following to our chartOptionsBar object:</p><pre><code class="language-js">chartOptionsBar: {
xAxis: {
data: ['Q1', 'Q2', 'Q3', 'Q4']
},
yAxis: {
type: 'value'
}
}</code></pre><p>The last step is to provide the data that will be displayed in our bar chart. You do this by adding a series array. Series is an array of objects. Each object defines the type of chart to be created and will have a data array of values to be plotted on the graph. You can add it with this:</p><pre><code class="language-js">chartOptionsBar: {
xAxis: {
data: ['Q1', 'Q2', 'Q3', 'Q4']
},
yAxis: {
type: 'value'
},
series: [
{
type: 'bar',
data: [63, 75, 24, 92]
}
]
&lt;div class="chart-wrapper"&gt;
&lt;chart :options="chartOptionsBar"&gt;&lt;/chart&gt;
&lt;/div&gt;
&lt;/template&gt;</code></pre><p>Next, I want to add some styling to the new <code>chart-wrapper</code> class. I will make this class have a width equal to the screen size and have a height of 700px. Here is the style I have added:</p><pre><code class="language-css">.chart-wrapper {
width: 100%;
height: 700px;
}</code></pre><p>Vue-echarts adds a class called <code>echarts</code> to all its charts. We will also style that in our CSS. We will tell this class to take up 100% of the height and width of its container which is <code>chart-wrapper</code>. Here is the CSS I have added:</p><pre><code class="language-css">.echarts {
width: 100%;
height: 100%;
xAxis: {
data: ['Q1', 'Q2', 'Q3', 'Q4']
},
yAxis: {
type: 'value'
},
series: [
{
type: 'bar',
data: [63, 75, 24, 92]
}
],
title: {
text: 'Quarterly Sales Results'
}
xAxis: {
data: ['Q1', 'Q2', 'Q3', 'Q4']
},
yAxis: {
type: 'value'
},
series: [
{
type: 'bar',
data: [63, 75, 24, 92]
}
],
title: {
text: 'Quarterly Sales Results',
x: 'center',
textStyle: {
fontSize: 24
}
},
color: ['#127ac2']
&lt;div class="chart-wrapper"&gt;
&lt;chart :options="chartOptionsBar"&gt;&lt;/chart&gt;
&lt;/div&gt;
&lt;hr /&gt;
&lt;div class="chart-wrapper"&gt;
&lt;chart :options="chartOptionsLine"&gt;&lt;/chart&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre><p>Next, in our data object create a new chartOptionsLine object. Instead of creating a new object copy the existing chartOptionsBar object. Rename the copy to <code>chartOptionsLine</code>. For right now we only need to change the type in series from bar to line. Here is what our <code>chartOptionsLine</code> object looks like:</p><pre><code class="language-js">chartOptionsLine: {
xAxis: {
data: ["Q1", "Q2", "Q3", "Q4"]
},
yAxis: {
type: "value"
},
series: [
{
type: "line",
data: [63, 75, 24, 92]
}
],
title: {
text: "Quarterly Sales Results",
x: "center",
textStyle: {
fontSize: 24
}
},
color: ["#127ac2"]
xAxis: {
data: [
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun",
"Jul",
"Aug",
"Sep",
"Oct",
"Nov",
"Dec"
]
},
yAxis: {
type: "value"
},
series: [
{
type: "line",
data: [55, 72, 84, 48, 59, 62, 87, 75, 94, 101, 127, 118]
}
],
title: {
text: "Monthly Stock Prices",
x: "center",
textStyle: {
fontSize: 24
}
},
color: ["#127ac2"]
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
