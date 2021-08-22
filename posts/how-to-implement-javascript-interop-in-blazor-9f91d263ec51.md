---
card: "https://cdn-media-1.freecodecamp.org/images/1*RijhIwu_gn98_W_QnYcGAA.jpeg"
tags: [Web Development]
description: "In this article, we will learn about JavaScript Interop in Bl"
author: "Milad E. Fahmy"
title: "How to implement JavaScript Interop in Blazor"
created: "2021-08-16T10:12:41+02:00"
modified: "2021-08-16T10:12:41+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-javascript tag-programming tag-tutorial tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to implement JavaScript Interop in Blazor</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*RijhIwu_gn98_W_QnYcGAA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*RijhIwu_gn98_W_QnYcGAA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*RijhIwu_gn98_W_QnYcGAA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*RijhIwu_gn98_W_QnYcGAA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*RijhIwu_gn98_W_QnYcGAA.jpeg" alt="How to implement JavaScript Interop in Blazor">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;html&gt;
&lt;head&gt;
&lt;meta charset="utf-8" /&gt;
&lt;meta name="viewport" content="width=device-width"&gt;
&lt;title&gt;BlazorJSDemo&lt;/title&gt;
&lt;base href="/" /&gt;
&lt;link href="css/bootstrap/bootstrap.min.css" rel="stylesheet" /&gt;
&lt;link href="css/site.css" rel="stylesheet" /&gt;
&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;app&gt;Loading...&lt;/app&gt;
&lt;script src="_framework/blazor.webassembly.js"&gt;&lt;/script&gt;
&lt;script&gt;
function JSMethod() {
$("#demop").text("JavaScript Method invoked");
}
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>Here we have included the CDN reference to JQuery library inside &lt;head&gt; section so that we can handle the DOM manipulation.</p><p>Inside the &lt;body&gt; section, we have defined our JS function. The function na<em>me is JS</em>Method and it is not accepting any arguments. When triggered it will set the text of a &lt;p&gt; tag having id “demop” to “JavaScript Method invoked”.</p><p><strong>Important Note</strong></p><ol><li>Do not write your JS code in the <strong>.cshtml</strong> file. This is not allowed in Blazor and the compiler will throw an error. Always put your JS code in the <strong>wwwroot/index.html</strong> file.</li><li>Always add your custom &lt;script&gt; tag after “ &lt;script src=”_framework/blazor.webassembly.js”&gt;&lt;/script&gt;” in the <strong>&lt;body&amp;g</strong>t; section of index.html file. This is to ensure that your custom script will execute after loading the “ blazor.webassembly.js” script.</li></ol><p>Open <strong>JSDemo.cshtml.cs</strong><em> </em>and put in the following code:</p><pre><code class="language-cs">using Microsoft.AspNetCore.Blazor.Components;
using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace BlazorJSDemo.Pages
{
public class JSDemoModel : BlazorComponent
{
protected static string message { get; set; }
protected void CallJSMethod()
{
JSRuntime.Current.InvokeAsync&lt;bool&gt;("JSMethod");
}
}
}</code></pre><p>The method <strong>CallJSMethod</strong> will call our JS function “JSMethod” by using “JSRuntime.Current.InvokeAsync” method. This method can take two parameters — the JS function name and any parameter that needed to be supplied to theJS function. In this case, we are not passing any parameter to JS function.</p><p>Open <strong>JSDemo.cshtml</strong><em> </em>and put in the following code:</p><pre><code class="language-cs">@page "/demo"
@using BlazorJSDemo.Pages
@inherits JSDemoModel
&lt;h1&gt;JavaScript Interop Demo&lt;/h1&gt;
&lt;hr /&gt;
&lt;button class="btn btn-primary" onclick="@CallJSMethod"&gt;Call JS Method&lt;/button&gt;
&lt;br /&gt;
&lt;p id="demop"&gt;&lt;/p&gt;</code></pre><p>Here we have defined the route of the page at the top. So, in this application, if we append “/demo” to the base URL, then we will be redirected to this page. We are also inheriting the <strong>JSDemoModel</strong> class, which is defined in the <strong>JSDemo.cshtml.cs</strong> file. This will allow us to use the methods defined in the <strong>JSDemoModel</strong> class.</p><p>After this, we have defined a button. This button will invoke the “CallJSMethod” method when clicked. The &lt;p&gt; element with id “demop” is also defined, and its value will be set by the JS function “JSMethod”.</p><h3 id="calling-a-c-net-method-from-javascript">Calling a C#/.NET method from JavaScript</h3><p>Now we will define our JS Method in the <strong>wwwroot/index.html</strong> file, which will call our C# method in the <strong>JSDemo.cshtml.cs</strong><em> </em>file.</p><p>The syntax of calling a C# method from JavaScript is as follows:</p><pre><code class="language-cs">DotNet.invokeMethodAsync('C# method assembly name', 'C# Method Name');</code></pre><p>Therefore, we will follow the same method calling syntax. Open the <strong>wwwroot/index.html</strong> file and add the following script section to it:</p><pre><code class="language-cs">&lt;script&gt;
function CSMethod() {
DotNet.invokeMethodAsync('BlazorJSDemo', 'CSCallBackMethod');
}
&lt;/script&gt;</code></pre><p>Here we are defining a JS function “CSMethod”. This function will have a call back to our C# method “CSCallBackMethod” which is defined in <strong>JSDemoModel</strong> class.</p><p>To invoke a C#/.NET method from JavaScript, the target .NET method must meet the following criterias:</p><ol><li>The method needs to be Static.</li><li>It must be Non-generic.</li><li>The method should have no overloads.</li><li>It has concrete JSON serializable parameter types.</li><li>It must be decorated with [JSInvokable] attribute.</li></ol><p>Open <strong>JSDemo.cshtml.cs</strong><em> </em>file and add the following code inside the <strong>JSDemoModel</strong> class.</p><pre><code class="language-cs">protected static string message { get; set; }
[JSInvokable]
public static void CSCallBackMethod()
{
message = "C# Method invoked";
}
protected void CallCSMethod()
{
JSRuntime.Current.InvokeAsync&lt;bool&gt;("CSMethod");
}</code></pre><p>Here we have defined two methods:</p><ol><li><strong>CallCSMethod</strong>: This will call our JS function “CSMethod”</li><li><strong>CSCallBackMethod</strong>: This is a static method and it will be invoked from the JavaScript function “CSMethod”. Hence it is decorated with[JSInvokable] attribute. This method will set the value of a string variable <strong>message</strong>, which will be displayed on the UI.</li></ol><p>Open the <strong>JSDemo.cshtml</strong><em> </em>file and add the following code to it:</p><pre><code class="language-html">&lt;button class="btn btn-primary" onclick="@CallCSMethod"&gt;Call C# Method&lt;/button&gt;
&lt;br /&gt;
&lt;p&gt;@message&lt;/p&gt;</code></pre><p>Here we have defined a button which will call the “CallCSMethod” method on the “onclick” event. The value of the variable message is set on the button click.</p><h3 id="adding-link-to-navigation-menu">Adding Link to Navigation menu</h3><p>Open <strong>\BlazorJSDemo\Shared\NavMenu.cshtml</strong><em> </em>page and put the following code into it. This will include a link to our <strong>JSDemo.cshtml</strong><em> </em>page in the navigation menu.</p><pre><code class="language-html">&lt;div class="top-row pl-4 navbar navbar-dark"&gt;
&lt;a class="navbar-brand" href=""&gt;BlazorJSDemo&lt;/a&gt;
&lt;button class="navbar-toggler" onclick=@ToggleNavMenu&gt;
&lt;span class="navbar-toggler-icon"&gt;&lt;/span&gt;
&lt;/button&gt;
&lt;/div&gt;
&lt;div class=@(collapseNavMenu ? "collapse" : null) onclick=@ToggleNavMenu&gt;
&lt;ul class="nav flex-column"&gt;
&lt;li class="nav-item px-3"&gt;
&lt;NavLink class="nav-link" href="" Match=NavLinkMatch.All&gt;
&lt;span class="oi oi-home" aria-hidden="true"&gt;&lt;/span&gt; Home
&lt;/NavLink&gt;
&lt;/li&gt;
&lt;li class="nav-item px-3"&gt;
&lt;NavLink class="nav-link" href="counter"&gt;
&lt;span class="oi oi-plus" aria-hidden="true"&gt;&lt;/span&gt; Counter
&lt;/NavLink&gt;
&lt;/li&gt;
&lt;li class="nav-item px-3"&gt;
&lt;NavLink class="nav-link" href="fetchdata"&gt;
&lt;span class="oi oi-list-rich" aria-hidden="true"&gt;&lt;/span&gt; Fetch data
&lt;/NavLink&gt;
&lt;/li&gt;
&lt;li class="nav-item px-3"&gt;
&lt;NavLink class="nav-link" href="demo"&gt;
&lt;span class="oi oi-list-rich" aria-hidden="true"&gt;&lt;/span&gt; JS Demo
&lt;/NavLink&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
@functions {
bool collapseNavMenu = true;
void ToggleNavMenu()
{
collapseNavMenu = !collapseNavMenu;
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
