---
card: "https://cdn-media-1.freecodecamp.org/images/1*INENIFhB5lJNvVrYuxXX4w.png"
tags: [JavaScript]
description: We all know that the Blazor framework is a client-side web fr
author: "Milad E. Fahmy"
title: "A quick introduction to Server-side Blazor apps"
created: "2021-08-15T19:42:55+02:00"
modified: "2021-08-15T19:42:55+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-programming tag-learning tag-ui ">
<header class="post-full-header">
<h1 class="post-full-title">A quick introduction to Server-side Blazor apps</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*INENIFhB5lJNvVrYuxXX4w.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*INENIFhB5lJNvVrYuxXX4w.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*INENIFhB5lJNvVrYuxXX4w.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*INENIFhB5lJNvVrYuxXX4w.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*INENIFhB5lJNvVrYuxXX4w.png" alt="A quick introduction to Server-side Blazor apps">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h3 id="introduction">Introduction</h3>
<p>We all know that the Blazor framework is a client-side web framework. But is it possible to run a Blazor application separate from a UI thread? The latest version 0.5.0 of Blazor gives us the flexibility to run it in a separate process from the rendering process. We are going to explore server-side Blazor in this article.</p>
<h3 id="what-is-server-side-blazor">What is Server-Side Blazor?</h3>
<p>Since Blazor is a client-side web framework, the component logic and DOM interaction both happens in the same process.</p>
<p>However, the design of the Blazor framework is smart and flexible enough to run the application separate from the rendering process. For example, we can run Blazor in a web worker thread separately from the UI thread.</p>
<p>In this scenario, the UI thread will push the events to the Blazor worker thread, and Blazor will push UI updates to the UI thread as needed. Although Blazor does not support this functionality yet, but the Blazor framework is designed to handle such scenarios and is expected to support it in future releases.</p>
<p>Starting from Blazor 0.5.0, we can run a Blazor application on the server. This means that we can run a Blazor component server-side on .NET Core while other functionalities, such as the UI, update. Event handling and JavaScript interop calls are handled by a SignalR connection over the network. The .NET part runs under CoreCLR instead of WebAssembly, which provides us the access to the complete .NET ecosystem, debugging, JIT compilation, and so on. This adds extensibility to the Blazor framework, as the server-side Blazor uses the same component model as running a client-side Blazor app.</p>
<p>Let us create our first server-side Blazor app and explore it to get a better understanding of this new feature.</p>
<h3 id="prerequisites">Prerequisites</h3>
<ul>
<li>Install the .NET Core 2.1 or above SDK from <a href="https://www.microsoft.com/net/learn/get-started-with-dotnet-tutorial#windowscmd" rel="noopener">here</a></li>
<li>Install Visual Studio 2017 v15.7 or above from <a href="https://visualstudio.microsoft.com/downloads/" rel="noopener">here</a></li>
<li>Install ASP.NET Core Blazor Language Services extension from <a href="https://marketplace.visualstudio.com/items?itemName=aspnet.blazor" rel="noopener">here</a></li>
</ul>
<p>Visual Studio 2017 versions below v15.7 does not support the Blazor framework.</p>
<h3 id="creating-a-server-side-blazor-application">Creating a server-side Blazor application</h3>
<p>Open Visual Studio and select File &gt;&gt; New &gt;&gt; Project.</p>
<p>After selecting the project, a “New Project” dialog will open. Select .NET Core inside the Visual C# menu from the left panel. Then, select “ASP.NET Core Web Application” from the available project types. Name the project <strong>ServerSideBlazor</strong><em> </em>and press OK.</p>
<p>After clicking on OK, a new dialog will open asking you to select the project template. You can see two drop-down menus at the top left of the template window. Select “.NET Core” and “ASP.NET Core 2.1” from these dropdowns. Then, select the “Blazor (Server-side in ASP.NET Core)” template and press OK.</p>
<p>This will create our server-side Blazor solution. You can see the folder structure in Solution Explorer, as shown in the below image:</p>
<p>The solution has two project files:</p>
<ol>
<li>ServerSideBlazor.App: this is our ASP.NET core hosted project.</li>
<li>ServerSideBlazor.Server: this contains our server-side Blazor app.</li>
</ol>
<p>All of our component logic lies in the server-side Blazor app. However, this logic does not run on the client-side in browser — instead, it runs server-side in the ASP.NET Core host application. This application uses <strong>blazor.server.js</strong> for bootstrapping instead of blazor.webassembly.js which is used by normal Blazor apps. This allows the app to establish a SignalR connection over the network to handle UI updates and event forwarding. The <strong>blazor.server.js</strong><em> </em>is present in the “\ServerSideBlazor.App\bin\Debug\netstandard2.0\dist\_framework” folder, and the &lt;script&gt; tag to include it in the project is present i<strong>n the wwwroot/inde</strong>x.html file.</p>
<p>The <strong>blazor.server.js</strong> is the only component that separates a server-side Blazor app from a client-side Blazor app. If we provide a reference of <strong>blazor.webassembly.js</strong> instead of <strong>blazor.server.js</strong> inside the index.html file, then this application will behave like a client-side Blazor app.</p>
<p>The Blazor app is hosted by the ASP.NET Core app, which also sets up the SignalR endpoint. Since the Blazor app is running on the server, the event handling logic can directly access the server resources and services.</p>
<p>For example, if we want to fetch any data, we no longer need to issue an HTTP request. Instead, we can configure a service on the server and use it to retrieve the data.</p>
<p>In the sample application that we have created, the <strong>WeatherForecastService</strong> is defined inside the “ServerSideBlazor.App/Services” folder.</p><pre><code>using System;using System.Linq;using System.Threading.Tasks;namespace ServerSideBlazor.App.Services{    public class WeatherForecastService    {        private static string[] Summaries = new[]        {            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"        };        public Task&lt;WeatherForecast[]&gt; GetForecastAsync(DateTime startDate)        {            var rng = new Random();            return Task.FromResult(Enumerable.Range(1, 5).Select(index =&gt; new WeatherForecast            {                Date = startDate.AddDays(index),                TemperatureC = rng.Next(-20, 55),                Summary = Summaries[rng.Next(Summaries.Length)]            }).ToArray());        }    }}</code></pre>
<p>Further, we need to configure the service inside the <strong>ConfigureServices</strong> method in the ServerSideBlazor.App/startup.cs” file.</p><pre><code>public void ConfigureServices(IServiceCollection services){    services.AddSingleton&lt;WeatherForecastService&gt;();}</code></pre>
<p>We will then inject the service into the <strong>FetchData.cshtml</strong> view page, where the method<strong> GetForecastAsync</strong> is invoked to fetch the data.</p><pre><code>@using ServerSideBlazor.App.Services@page "/fetchdata"@inject WeatherForecastService ForecastService// HTML DOM here.@functions {    WeatherForecast[] forecasts;    protected override async Task OnInitAsync()    {        forecasts = await ForecastService.GetForecastAsync(DateTime.Now);    }}</code></pre>
<p>Go ahead and launch the application in Google Chrome. It will open a browser window and the app will look like a normal Blazor app. Open Chrome DevTools. Navigate to the “Network” tab and you can see that the application has not downloaded any .NET runtime or the app assembly.</p>
<p>This is because the app is running sever-side on .NET Core. Since the dependencies are not downloaded on application boot up, the size of the app is smaller. It will also load faster compared to a normal Blazor app.</p>
<h3 id="advantages-of-server-side-blazor">Advantages of server-side Blazor</h3>
<p>Server-side Blazor applications provide us many benefits:</p>
<ol>
<li>Since the UI update is handled over a SignalR connection, we can avoid the unnecessary page refreshes.</li>
<li>The app download size is smaller and the initial app load is faster.</li>
<li>The Blazor component can take full advantage of server capabilities such as using .NET Core compatible APIs.</li>
<li>It will also support existing .NET tooling like debugging the application and JIT compilation.</li>
<li>Since server-side Blazor runs under a native .NET Core process and not under Mono WebAssembly, it is also supported on the browsers that have no WebAssembly support.</li>
</ol>
<p>But there are also few drawbacks for server-side blazor apps:</p>
<ol>
<li>Since UI interaction involves SignalR communication, it adds one extra step in network calls which results in some latency.</li>
<li>Scalability of the apps (handling multiple client connections) is also a challenge.</li>
</ol>
<h3 id="conclusion">Conclusion</h3>
<p>We have learned about the latest server-side Blazor application introduced with the Blazor 0.5.0 release, and we now understand how it is different from the normal client-side Blazor app. We’ve also discussed the pros and cons of using a server-side Blazor app over a client-side blazor app.</p>
<p>Get my book <a href="https://www.amazon.com/Blazor-Quick-Start-Guide-applications/dp/178934414X/ref=sr_1_1?ie=UTF8&amp;qid=1542438251&amp;sr=8-1&amp;keywords=Blazor-Quick-Start-Guide" rel="noopener">Blazor Quick Start Guide</a> to learn more about Blazor.</p>
<p>You can check out my other articles on Blazor <a href="http://ankitsharmablogs.com/category/blazor/" rel="noopener">here</a>.</p>
<p>Preparing for interviews? Read my article on <a href="http://ankitsharmablogs.com/csharp-coding-questions-for-technical-interviews/" rel="noopener">C# Coding Questions For Technical Interviews</a></p>
<h3 id="see-also">See Also</h3>
<ul>
<li><a href="http://ankitsharmablogs.com/asp-net-core-getting-started-with-blazor/" rel="noopener">ASP.NET Core — Getting Started With Blazor</a></li>
<li><a href="http://ankitsharmablogs.com/asp-net-core-crud-using-blazor-and-entity-framework-core/" rel="noopener">ASP.NET Core — CRUD Using Blazor And Entity Framework Core</a></li>
<li><a href="http://ankitsharmablogs.com/cascading-dropdownlist-in-blazor-using-ef-core/" rel="noopener">Cascading DropDownList In Blazor Using EF Core</a></li>
<li><a href="http://ankitsharmablogs.com/creating-a-spa-using-razor-pages-with-blazor/" rel="noopener">Creating a SPA Using Razor Pages With Blazor</a></li>
<li><a href="http://ankitsharmablogs.com/deploying-a-blazor-application-on-iis/" rel="noopener">Deploying a Blazor Application on IIS</a></li>
<li><a href="http://ankitsharmablogs.com/javascript-interop-in-blazor/" rel="noopener">JavaScript Interop in Blazor</a></li>
</ul>
<p>Originally published at <a href="https://ankitsharmablogs.com/" rel="noopener">https://ankitsharmablogs.com/</a></p>
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
