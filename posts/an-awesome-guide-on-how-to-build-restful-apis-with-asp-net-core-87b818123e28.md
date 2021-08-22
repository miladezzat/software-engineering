---
card: "https://cdn-media-1.freecodecamp.org/images/0*DptwthtMZHQ1fi4x"
tags: [Tech]
description: "by Evandro Gomes"
author: "Milad E. Fahmy"
title: "An awesome guide on how to build RESTful APIs with ASP.NET Core"
created: "2021-08-16T11:32:32+02:00"
modified: "2021-08-16T11:32:32+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-tech tag-api tag-programming tag-csharp tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">An awesome guide on how to build RESTful APIs with ASP.NET Core</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*DptwthtMZHQ1fi4x 300w,
https://cdn-media-1.freecodecamp.org/images/0*DptwthtMZHQ1fi4x 600w,
https://cdn-media-1.freecodecamp.org/images/0*DptwthtMZHQ1fi4x 1000w,
https://cdn-media-1.freecodecamp.org/images/0*DptwthtMZHQ1fi4x 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*DptwthtMZHQ1fi4x" alt="An awesome guide on how to build RESTful APIs with ASP.NET Core">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Evandro Gomes</p><p>This article will serve as a step by step guide on how to implement clean, maintainable RESTful APIs.</p><h2 id="overview">Overview</h2><p>RESTful is not a new term. It refers to an architectural style where web services receive and send data from and to client apps. The goal of these applications is to centralize data that different client apps will use.</p><p>Choosing the right tools to write RESTful services is crucial since we need to care about scalability, maintenance, documentation, and all other relevant aspects. The <a href="https://docs.microsoft.com/en-us/aspnet/" rel="noopener">ASP.NET Core</a> gives us a powerful, easy to use API that is great to achieve these goals.</p><p>In this article, I’ll show you how to write a well structured RESTful API for an “almost” real world scenario, using the ASP.NET Core framework. I’m going to detail common patterns and strategies to simplify the development process.</p><p>I’ll also show you how to integrate common frameworks and libraries, such as <a href="https://docs.microsoft.com/en-us/ef/core/" rel="noopener">Entity Framework Core</a> and <a href="https://automapper.org/" rel="noopener">AutoMapper</a>, to deliver the necessary functionalities.</p><h2 id="prerequisites">Prerequisites</h2><p>I expect you to have knowledge of object-oriented programming concepts.</p><p>Even though I’m going to cover many details of the <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" rel="noopener">C# programming language</a>, I recommend you to have basic knowledge of this subject.</p><p>I also assume you know what REST is, how the <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" rel="noopener">HTTP protocol</a> works, what are API endpoints and what is <a href="https://www.json.org/" rel="noopener">JSON</a>. <a href="https://medium.freecodecamp.org/restful-services-part-i-http-in-a-nutshell-aab3bfedd131" rel="noopener">Here is a great introductory tutorial</a> on this subject. The final requirement is that you understand how relational databases work.</p><p>To code along with me, you will have to install the <a href="https://dotnet.microsoft.com/download" rel="noopener">.NET Core 2.2</a>, as well as <a href="https://www.getpostman.com/" rel="noopener">Postman</a>, the tool I’m going to use to test the API. I recommend you to use a code editor such as <a href="https://code.visualstudio.com/" rel="noopener">Visual Studio Code</a> to develop the API. Choose the code editor you prefer. If you choose this code editor, I recommend you to install the <a href="https://code.visualstudio.com/docs/languages/csharp" rel="noopener">C# extension</a> to have better code highlighting.</p><p>You can find a link to the Github repository of the API at the end of this article, to check the final result.</p><h2 id="the-scope">The Scope</h2><p>Let’s write a fictional web API for a supermarket. Let’s imagine we have to implement the following scope:</p><ul><li><em>Create a RESTful service that allows client applications to manage the supermarket’s product catalog. It needs to expose endpoints to create, read, edit and delete products categories, such as dairy products and cosmetics, and also to manage products of these categories.</em></li><li><em>For categories, we need to store their names. For products, we need to store their names, unit of measurement (for example, KG for products measured by weight), quantity in the package (for example, 10 if the product is a pack of biscuits) and their respective categories.</em></li></ul><p>To simplify the example, I won’t handle products in stock, product shipping, security and any other functionality. The given scope is enough to show you how ASP.NET Core works.</p><p>To develop this service, we basically need two API endpoints: one to manage categories and one to manage products. In terms of JSON communication, we can think of responses as follow:</p><p><strong>API endpoint: </strong><code>/api/categories</code></p><p><strong>JSON Response (for GET requests):</strong></p><pre><code class="language-json">{
[
{ "id": 1, "name": "Fruits and Vegetables" },
{ "id": 2, "name": "Breads" },
… // Other categories
]
}</code></pre><p><strong>API endpoint:</strong> <code>/api/products</code></p><p><strong>JSON Response (for GET requests):</strong></p><pre><code class="language-json">{
[
{
"id": 1,
"name": "Sugar",
"quantityInPackage": 1,
"unitOfMeasurement": "KG"
"category": {
"id": 3,
"name": "Sugar"
}
},
… // Other products
]
}</code></pre><p>Let’s get started writing the application.</p><h2 id="step-1-creating-the-api">Step 1 — Creating the API</h2><p>First of all, we have to create the folders structure for the web service, and then we have to use the <a href="https://docs.microsoft.com/en-us/dotnet/core/tools/?tabs=netcore2x" rel="noopener">.NET CLI tools</a> to scaffold a basic web API. Open the terminal or command prompt (it depends on the operating system you are using) and type the following commands, in sequence:</p><pre><code class="language-bash">mkdir src/Supermarket.API
cd src/Supermarket.API
.HasMany(p =&gt; p.Products)
.WithOne(p =&gt; p.Category)
.HasForeignKey(p =&gt; p.CategoryId);</code></pre><p>Here we’re specifying a relationship between tables. We say that a category has many products, and we set the properties that will map this relationship (<code>Products</code>, from <code>Category</code> class, and <code>Category</code>, from <code>Product</code> class). We also set the foreign key (<code>CategoryId</code>).</p><p>Take a look at <a href="https://www.learnentityframeworkcore.com/relationships" rel="noopener">this tutorial</a> if you want to learn how to configure one-to-one and many-to-many relationships using EF Core, as well as how to use it as a whole.</p><p>There is also a configuration for seeding data, through the method <code>HasData</code>:</p><pre><code>builder.Entity&lt;Category&gt;().HasData
(
new Category { Id = 100, Name = "Fruits and Vegetables" },
new Category { Id = 101, Name = "Dairy" }
options.UseInMemoryDatabase("supermarket-api-in-memory");
});</code></pre><p>Here we configure the database context. We tell ASP.NET Core to use our <code>AppDbContext</code> with an in-memory database implementation, that is identified by the string passed as an argument to our method. Usually, the in-memory provider is used when we write <a href="https://docs.microsoft.com/en-us/aspnet/core/test/integration-tests?view=aspnetcore-2.2" rel="noopener">integration tests</a>, but I’m using it here for simplicity. This way we don’t need to connect to a real database to test the application.</p><p>The configuration of these lines internally configures our database context for dependency injection using a <a href="https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-2.2#service-lifetimes-and-registration-options" rel="noopener">scoped lifetime</a>.</p><p>The scoped lifetime tells the ASP.NET Core pipeline that every time it needs to resolve a class that receives an instance of <code>AppDbContext</code> as a constructor argument, it should use the same instance of the class. If there is no instance in memory, the pipeline will create a new instance, and reuse it throughout all classes that need it, during a given request. This way, you don’t need to manually create the class instance when you need to use it.</p><p>There are other lifetime scopes that you can check reading the <a href="https://docs.microsoft.com/pt-br/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-2.2" rel="noopener">official documentation</a>.</p><p>The dependency injection technique gives us many advantages, such as:</p><ul><li>Code reusability;</li><li>Better productivity, since when we have to change implementation, we don’t need to bother to change a hundred places where you use that feature;</li><li>You can easily test the application since we can isolate what we have to test using <strong>mocks</strong> (fake implementation of classes) where we have to pass interfaces as constructor arguments;</li><li>When a class needs to receive more dependencies via a constructor, you don’t have to manually change all places where the instances are being created (<strong>that’s awesome!</strong>).</li></ul><p>After configuring the database context, we also bind our service and repository to the respective classes.</p><pre><code class="language-cs">services.AddScoped&lt;ICategoryRepository, CategoryRepository&gt;();
Entity Framework Core 2.2.0-rtm-35687 initialized ‘AppDbContext’ using provider ‘Microsoft.EntityFrameworkCore.InMemory’ with options: StoreName=supermarket-api-in-memory
info: Microsoft.EntityFrameworkCore.Update[30100]
Saved 2 entities to in-memory store.
info: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[0]
User profile is available. Using ‘C:\Users\evgomes\AppData\Local\ASP.NET\DataProtection-Keys’ as key repository and Windows DPAPI to encrypt keys at rest.
Hosting environment: Development
Content root path: C:\Users\evgomes\Desktop\Tutorials\src\Supermarket.API
Now listening on: https://localhost:5001
Now listening on: http://localhost:5000
Application started. Press Ctrl+C to shut down.</code></pre><p>You can see that EF Core was called to initialize the database. The last lines show in which ports the application is running.</p><p>Open a browser and navigate to <a href="http://localhost:5000/api/categories" rel="noopener">http://localhost:5000/api/categories</a> (or to the URL displayed on the console output). If you see a security error because of HTTPS, just add an exception for the application.</p><p>The browser is going to show the following JSON data as output:</p><pre><code class="language-json">[
{
"id": 100,
"name": "Fruits and Vegetables",
"products": []
},
{
"id": 101,
"name": "Dairy",
"products": []
}
]</code></pre><p>Here we see the data we added to the database when we configured the database context. This output confirms that our code is working.</p><p>You created a GET API endpoint with really few lines of code, and you have a code structure that is really easy to change due to the architecture of the API.</p><p>Now, it’s time to show you how easy is to change this code when you have to adjust it due to business needs.</p><h2 id="step-8-creating-a-category-resource">Step 8 — Creating a Category Resource</h2><p>If you remember the specification of the API endpoint, you have noticed that our actual JSON response has one extra property: <strong>an array of products</strong>. Take a look at the example of the desired response:</p><pre><code class="language-json">{
[
{ "id": 1, "name": "Fruits and Vegetables" },
{ "id": 2, "name": "Breads" },
… // Other categories
]
"name": ""
[
{
"id": 1,
"name": "Sugar",
"quantityInPackage": 1,
"unitOfMeasurement": "KG"
"category": {
"id": 3,
"name": "Sugar"
}
},
… // Other products
]
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
