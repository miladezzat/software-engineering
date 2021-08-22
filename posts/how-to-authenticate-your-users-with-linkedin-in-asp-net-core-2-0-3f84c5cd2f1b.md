---
card: "https://cdn-media-1.freecodecamp.org/images/1*RRYg2jQ-11JV9ToXthgI5Q.png"
tags: [JavaScript]
description: by Ankit Sharma
author: "Milad E. Fahmy"
title: "How to authenticate your users with LinkedIn in ASP.NET Core 2.0"
created: "2021-08-15T19:43:59+02:00"
modified: "2021-08-15T19:43:59+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-linkedin tag-authentication tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to authenticate your users with LinkedIn in ASP.NET Core 2.0</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*RRYg2jQ-11JV9ToXthgI5Q.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*RRYg2jQ-11JV9ToXthgI5Q.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*RRYg2jQ-11JV9ToXthgI5Q.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*RRYg2jQ-11JV9ToXthgI5Q.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*RRYg2jQ-11JV9ToXthgI5Q.png" alt="How to authenticate your users with LinkedIn in ASP.NET Core 2.0">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Ankit Sharma</p>
<h1 id="how-to-authenticate-your-users-with-linkedin-in-asp-net-core-2-0">How to authenticate your users with LinkedIn in ASP.NET Core 2.0</h1>
<figcaption>Image <a href="https://fontmeme.com/linkedin-font/" rel="noopener" target="_blank" title="">source</a></figcaption>
</figure>
<h3 id="introduction">Introduction</h3>
<p>Sometimes, we want our users to log in using their existing credentials from third-party applications, such as Facebook, Twitter, Google, LinkedIn, and so on. In this article, we are going to look into the authentication of an ASP.NET Core app using a LinkedIn account.</p>
<h3 id="prerequisites">Prerequisites</h3>
<ul>
<li>Install .NET Core 2.0.0 or above SDK from <a href="https://www.microsoft.com/net/core#windowscmd" rel="noopener">here</a>.</li>
<li>Install the latest version of Visual Studio 2017 from <a href="https://www.visualstudio.com/downloads/" rel="noopener">here</a>.</li>
</ul>
<h3 id="create-mvc-web-application">Create MVC Web Application</h3>
<p>Open Visual Studio and select File &gt;&gt; New &gt;&gt; Project. After selecting the project, a “New Project” dialog will open.</p>
<p>Select .NET Core inside the Visual C# menu from the left panel. Then, select “ASP.NET Core Web Application” from the available project types.</p>
<p>Name the project <strong>LinkdinAuth</strong><em> </em>and press OK.</p>
<p>After clicking on OK, a new dialog will open asking you to select the project template. You can see two drop-down menus at the top left of the template window. Select “.NET Core” and “ASP.NET Core 2.0” from these dropdowns.</p>
<p>Then, select “Web application(Model-View-Controller)” template.</p>
<p>Click on Change Authentication button, and a “Change Authentication” dialog box will open.</p>
<p>Select “Individual User Account” and click OK. Now click OK again to create our web app.</p>
<p>Before running the application, we need to apply migrations to our app.</p>
<p>Navigate to Tools &gt;&gt; Nuget Package Manager &gt;&gt; Package Manager Console.</p>
<p>It will open the Package Manager Console. Put in the <strong>Update-Database</strong> command and hit enter. This will update the database using Entity Framework Code First Migrations.</p>
<p>Press F5 to run the application. You can see a Home page as shown below.</p>
<h3 id="create-the-linkedin-app">Create the LinkedIn app</h3>
<p>Navigate to <a href="https://www.linkedin.com/developer/apps" rel="noopener">https://www.linkedin.com/developer/apps</a> and sign in using your LinkedIn account. If you do not have a LinkedIn account, you need to create one, as you cannot proceed without one.</p>
<p>Once you have logged in, you will be redirected to the <strong>My Applications</strong> page similar to the one shown below.</p>
<p>Click on the <strong>Create Application</strong> button to navigate to the <strong>Create a New Application</strong> page. Here you need to fill in the details to create a new LinkedIn application.</p>
<ul>
<li>Company Name: — Give an appropriate name. Here we are using the name <strong>DemoCompany</strong>.</li>
<li>Application Name: — This is the name of your LinkedIn application. Give a proper name of your choice.</li>
</ul>
<p>Note: <strong>Do not use the word ” LinkedIn ” in your product name</strong>. You will be prompted with an error “<em>The application name cannot contain LinkedIn</em>” and you won’t be allowed to create the app. This means “LinkedinAuthDemo” is an invalid name. Refer to the below image.</p>
<ul>
<li>Application Description: Give a proper description of your application.</li>
<li>Application Logo: you need to upload a logo for your application. If you do not have a logo, just upload any image. Please provide your application’s logo image in PNG or JPEG format. The image must be square and at least 80 x 80 pixels, and no larger than 5 MB in size.</li>
<li>Application Use: Select an appropriate value from the drop-down.</li>
<li>Website URL: Provide the URL for your public website. For this tutorial, we will use a dummy URL <a href="http://demopage.com." rel="noopener">http://demopage.com.</a></li>
</ul>
<p>Note: If you use the URL format <a href="http://www.demopage.com," rel="noopener"><em>www.demopage.com</em>,</a> you will get an error “<em>Please enter a</em> <em>valid URL</em>.” Always use a URL format such as <a href="http://demopage.com." rel="noopener"><em>http://demopage.com</em>.</a></p>
<ul>
<li>Business Email: Give your email id. If you do not want to provide your personal email id, then you can also use any dummy email id such as <em>xyz@gmail.com</em></li>
<li>Business Phone: Provide your contact number. For this tutorial, I am using a dummy phone number 123456789.</li>
</ul>
<p>Do keep in mind that all the fields in this form are required, so you need to provide appropriate values to all of them. Once you have furnished all the details, click on the <strong>Submit</strong> button. If there is no error in the form, your LinkedIn app will be created successfully and you will be redirected to the application homepage.</p>
<p>Here you see the <strong>Client ID</strong> and <strong>Client Secret</strong> fields in Authentication Keys section. Take note of these values, as we will need them to configure LinkedIn authentication in our web app.</p>
<p>In the Authorized Redirect URLs field, provide the base URL of your application with <strong>/signin-linkedin</strong> appended to it. For this tutorial, the URL will be <a href="http://localhost:52676/signin-linkedin." rel="noopener"><em>http://localhost:52676/signin-linkedin</em>.</a> After entering the URL, Press the <strong>Add</strong><em> </em>button adjacent to it to add the value. Refer to the image below:</p>
<h3 id="configure-your-web-wpp-to-use-linkedin-authentication">Configure your web wpp to use LinkedIn authentication</h3>
<p>We will be using a third party Nuget package <strong>AspNet.Security.OAuth.LinkedIn</strong> to implement LinkedIn authentication in our Web app. Open NuGet package manager (Tools &gt;&gt; NuGet Package Manager &gt;&gt; Package Manager Console) and put in the following command. Hit enter to install it.</p><pre><code>Install-Package AspNet.Security.OAuth.LinkedIn -Version 2.0.0-rc2-final</code></pre>
<p>This NuGet package is maintained by aspnet-contrib. You can read more about this package <a href="https://www.nuget.org/packages/AspNet.Security.OAuth.LinkedIn/2.0.0-rc2-final" rel="noopener">here</a>.</p>
<p>We need to store the <strong>Client ID</strong> and <strong>Client Secret</strong> field values in our application. We will use the Secret Manager tool for this purpose. The Secret Manager tool is a project tool that can be used to store secrets such as password, API Key, etc. for a .NET Core project during the development process. With the Secret Manager tool, we can associate app secrets with a specific project and can share them across multiple projects.</p>
<p>Open our web application once again and Right-click the project in Solution Explorer. Select “Manage User Secrets” from the context menu.</p>
<p>A <strong>secrets.json</strong> file will open. Put the following code in it.</p><pre><code>{    "Authentication:LinkedIn:ClientId": "Your ClientId here",    "Authentication:LinkedIn:ClientSecret": "Your ClientSecret here"  }</code></pre>
<p>Now, open the <strong>Startup.cs</strong> file and put the following code into the <strong>ConfigureServices</strong> method.</p><pre><code>services.AddAuthentication().AddLinkedIn(options =&gt;{    options.ClientId = Configuration["Authentication:LinkedIn:ClientId"];    options.ClientSecret = Configuration["Authentication:LinkedIn:ClientSecret"];    options.Events= new OAuthEvents()    {        OnRemoteFailure = loginFailureHandler =&gt;        {            var authProperties = options.StateDataFormat.Unprotect(loginFailureHandler.Request.Query["state"]);            loginFailureHandler.Response.Redirect("/Account/login");            loginFailureHandler.HandleResponse();            return Task.FromResult(0);        }    };});</code></pre>
<p>In this code section, we are reading the <strong>Client ID</strong> and <strong>Client Secret</strong> values from the <strong>secrets.json</strong> file for authentication purposes. We are also handling the event of “OnRemoteFailure” in this code section. Hence, if the user denies the access to their LinkedIn account, then they will be redirected back to the Login page.</p>
<p>So finally, <strong>Startup.cs</strong><em> </em>will look like this.</p><pre><code>using System;using System.Collections.Generic;using System.Linq;using System.Threading.Tasks;using Microsoft.AspNetCore.Builder;using Microsoft.AspNetCore.Identity;using Microsoft.EntityFrameworkCore;using Microsoft.AspNetCore.Hosting;using Microsoft.Extensions.Configuration;using Microsoft.Extensions.DependencyInjection;using LinkdinAuth.Data;using LinkdinAuth.Models;using LinkdinAuth.Services;using Microsoft.AspNetCore.Http;using Microsoft.AspNetCore.Authentication.OAuth;  namespace LinkdinAuth{    public class Startup    {        public Startup(IConfiguration configuration)        {            Configuration = configuration;        }          public IConfiguration Configuration { get; }          // This method gets called by the runtime. Use this method to add services to the container.        public void ConfigureServices(IServiceCollection services)        {            services.AddDbContext&lt;ApplicationDbContext&gt;(options =&gt;                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));              services.AddIdentity&lt;ApplicationUser, IdentityRole&gt;()                .AddEntityFrameworkStores&lt;ApplicationDbContext&gt;()                .AddDefaultTokenProviders();              services.AddAuthentication().AddLinkedIn(options =&gt;            {                options.ClientId = Configuration["Authentication:LinkedIn:ClientId"];                options.ClientSecret = Configuration["Authentication:LinkedIn:ClientSecret"];                  options.Events= new OAuthEvents()                {                    OnRemoteFailure = loginFailureHandler =&gt;                    {                        var authProperties = options.StateDataFormat.Unprotect(loginFailureHandler.Request.Query["state"]);                        loginFailureHandler.Response.Redirect("/Account/login");                        loginFailureHandler.HandleResponse();                        return Task.FromResult(0);                    }                };              });               // Add application services.            services.AddTransient&lt;IEmailSender, EmailSender&gt;();              services.AddMvc();        }          // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.        public void Configure(IApplicationBuilder app, IHostingEnvironment env)        {            if (env.IsDevelopment())            {                app.UseBrowserLink();                app.UseDeveloperExceptionPage();                app.UseDatabaseErrorPage();            }            else            {                app.UseExceptionHandler("/Home/Error");            }                          app.UseStaticFiles();              app.UseAuthentication();              app.UseMvc(routes =&gt;            {                routes.MapRoute(                    name: "default",                    template: "{controller=Home}/{action=Index}/{id?}");            });        }    }}</code></pre>
<p>And with this, our application is ready.</p>
<h3 id="execution-demo">Execution Demo</h3>
<p>Launch the application and click Login in the top right corner of the homepage.</p>
<p>You will be redirected to <a href="http://localhost:52676/Account/Login" rel="noopener"><em>http://localhost:52676/Account/Login</em></a>, where you can see the option to login using LinkedIn on the right side of page.</p>
<p>Clicking on the <strong>LinkedIn</strong> button will take you to the LinkedIn authorization page. There, you will be asked to fill in your LinkedIn credentials and authorize the LinkedIn app to use your LinkedIn account.</p>
<p>Put in your LinkedIn credentials and click on the <strong>Allow access</strong> button. The application will take few moments to authenticate your LinkedIn account. Upon successful authentication with LinkedIn, you will be redirected to a registration page inside your application where you need to fill in an email id to tag with your account.</p>
<p>Give an email id and click register, and you will be redirected to the homepage again. But this time, you can also see your registered email id at the top right corner. Hence, we have successfully logged in to our ASP .NET Core application using LinkedIn.</p>
<h3 id="conclusion">Conclusion</h3>
<p>We have successfully created a LinkedIn app and used it to authenticate our ASP.NET Core application.</p>
<p>You can get the source code from <a href="https://github.com/AnkitSharma-007/ASPCore.LinkedInAuth" rel="noopener">GitHub</a>.</p>
<p>Please note that <strong>secrets.json</strong> file contains dummy values. You’ll need to replace the values with the keys of your LinkedIn app before executing it.</p>
<p>You can also find this article at <a href="http://www.c-sharpcorner.com/article/authentication-using-linkedin-in-asp-net-core-2-0/" rel="noopener">C# Corner</a>.</p>
<p>You can check out my other articles on ASP .NET Core <a href="http://ankitsharmablogs.com/category/asp-net-core/" rel="noopener">here</a>.</p>
<h3 id="see-also">See Also</h3>
<ul>
<li><a href="http://ankitsharmablogs.com/authentication-using-google-asp-net-core-2-0/" rel="noopener">Authentication Using Google In ASP.NET Core 2.0</a></li>
<li><a href="http://ankitsharmablogs.com/authentication-using-twitter-in-asp-net-core-2-0/" rel="noopener">Authentication Using Twitter In ASP.NET Core 2.0</a></li>
<li><a href="http://ankitsharmablogs.com/authentication-using-facebook-in-asp-net-core-2-0/" rel="noopener">Authentication Using Facebook In ASP.NET Core 2.0</a></li>
<li><a href="http://ankitsharmablogs.com/cookie-authentication-with-asp-net-core-2-0/" rel="noopener">Cookie Authentication With ASP.NET Core 2.0</a></li>
<li><a href="http://ankitsharmablogs.com/asp-net-core-two-factor-authentication-using-google-authenticator/" rel="noopener">ASP.NET Core — Two Factor Authentication Using Google Authenticator</a></li>
</ul>
<p>Originally published at<em> <a href="http://ankitsharmablogs.com/asp-net-core-crud-using-angular-5-and-entity-framework-core/" rel="noopener">ankitsharmablogs.com</a></em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
