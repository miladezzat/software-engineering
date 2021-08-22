---
card: "https://cdn-media-1.freecodecamp.org/images/1*CXNQW2ZhXOKhjBHMqxPT0A.jpeg"
tags: [Web Development]
description: "by Ankit Sharma"
author: "Milad E. Fahmy"
title: "Authentication Using Google In ASP.NET Core 2.0"
created: "2021-08-16T11:40:53+02:00"
modified: "2021-08-16T11:40:53+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-authentication tag-technology tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Authentication Using Google In ASP.NET Core 2.0</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*CXNQW2ZhXOKhjBHMqxPT0A.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*CXNQW2ZhXOKhjBHMqxPT0A.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*CXNQW2ZhXOKhjBHMqxPT0A.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*CXNQW2ZhXOKhjBHMqxPT0A.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*CXNQW2ZhXOKhjBHMqxPT0A.jpeg" alt="Authentication Using Google In ASP.NET Core 2.0">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
"Authentication:Google:ClientId": "Your Google ClientId here",
"Authentication:Google:ClientSecret": "Your Google ClientSecret here"
}</code></pre><p>Now open the <strong>Startup.cs</strong> file and put the following code into the <strong>ConfigureServices</strong> method:</p><pre><code class="language-cs">services.AddAuthentication().AddGoogle(googleOptions =&gt;
{
googleOptions.ClientId = Configuration["Authentication:Google:ClientId"];
googleOptions.ClientSecret = Configuration["Authentication:Google:ClientSecret"];
});</code></pre><p>In this code section, we are reading ClientId and ClientSecret for authentication purposes. So finally, <strong>Startup.cs</strong><em> </em>will look like this:</p><pre><code class="language-cs">using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using GoogleAuth.Data;
using GoogleAuth.Models;
using GoogleAuth.Services;
namespace GoogleAuth
{
public class Startup
{
public Startup(IConfiguration configuration)
{
Configuration = configuration;
}
public IConfiguration Configuration { get; }
// This method gets called by the runtime. Use this method to add services to the container.
public void ConfigureServices(IServiceCollection services)
{
services.AddDbContext&lt;ApplicationDbContext&gt;(options =&gt;
options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
services.AddIdentity&lt;ApplicationUser, IdentityRole&gt;()
.AddEntityFrameworkStores&lt;ApplicationDbContext&gt;()
.AddDefaultTokenProviders();
services.AddAuthentication().AddGoogle(googleOptions =&gt;
{
googleOptions.ClientId = Configuration["Authentication:Google:ClientId"];
googleOptions.ClientSecret = Configuration["Authentication:Google:ClientSecret"];
});
// Add application services.
services.AddTransient&lt;IEmailSender, EmailSender&gt;();
services.AddMvc();
}
// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
public void Configure(IApplicationBuilder app, IHostingEnvironment env)
{
if (env.IsDevelopment())
{
app.UseBrowserLink();
app.UseDeveloperExceptionPage();
app.UseDatabaseErrorPage();
}
else
{
app.UseExceptionHandler("/Home/Error");
}
app.UseStaticFiles();
app.UseAuthentication();
app.UseMvc(routes =&gt;
{
routes.MapRoute(
name: "default",
template: "{controller=Home}/{action=Index}/{id?}");
});
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
