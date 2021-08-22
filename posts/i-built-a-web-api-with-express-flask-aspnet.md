---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9c5c740569d1a4ca31ac.jpg"
tags: [Rest Api]
description: "I ve been shopping around for a back end framework to support"
author: "Milad E. Fahmy"
title: "I rebuilt the same web API using Express, Flask, and ASP.NET. Here s what I found."
created: "2021-08-16T15:37:14+02:00"
modified: "2021-08-16T15:37:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-rest-api tag-backend-development tag-backend tag-back-end-development tag-full-stack tag-web-development tag-javascript tag-python tag-csharp tag-express tag-flask tag-aspnetcore ">
<header class="post-full-header">
<h1 class="post-full-title">I rebuilt the same web API using Express, Flask, and ASP.NET. Here's what I found.</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9c5c740569d1a4ca31ac.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c5c740569d1a4ca31ac.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c5c740569d1a4ca31ac.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c5c740569d1a4ca31ac.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9c5c740569d1a4ca31ac.jpg" alt="I rebuilt the same web API using Express, Flask, and ASP.NET. Here's what I found.">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;div id="app"&gt;
&lt;h1&gt;RPG Quests&lt;/h1&gt;
&lt;p v-for="(quest, index) in quests" v-bind:key="index"&gt;{{quest.name}}: {{quest.description}}&lt;/p&gt;
&lt;input type="text" v-model="newQuestName" placeholder="Quest Name" /&gt; &lt;br /&gt;
&lt;input type="text" v-model="newQuestDescription" placeholder="Quest Description" /&gt;&lt;br /&gt;&lt;br /&gt;
&lt;button v-on:click="postQuest"&gt;Add Quest&lt;/button&gt;
&lt;/div&gt;
&lt;/template&gt;</code></pre><p>And the corresponding Vue code:</p><pre><code class="language-javascript">import axios from 'axios';
export default {
name: 'App',
data: function () {
return {
quests: null,
newQuestName: null,
newQuestDescription: null
}
},
methods: {
getQuests: function () {
axios
.get('http://localhost:3000/quests')
.then(response =&gt; (this.quests = response.data));
},
addQuest: function () {
axios
.post('http://localhost:3000/quests', {
name: this.newQuestName,
description: this.newQuestDescription
});
},
postQuest: function () {
axios.all([this.addQuest(), this.getQuests()]);
this.$forceUpdate();
}
},
mounted: function () {
this.getQuests();
}
try {
const quests = await Quest.find();
res.json(quests);
} catch (err) {
res.status(500).json({ message: err.message });
}
});
router.post('/', async (req, res) =&gt; {
const quest = new Quest({
name: req.body.name,
description: req.body.description
});
try {
const newQuest = await quest.save();
res.status(201).json(newQuest);
} catch (err) {
res.status(400).json({ message: err.message });
}
});</code></pre><p>The general theme of the code is to receive a request, attempt to contact the database to do work, and then send a response back to whoever's asking. The specifics can be quite complex, particularly if you're writing your own <a href="https://expressjs.com/en/guide/using-middleware.html">middleware</a> that does things in between the request and response, but the code is at least readable.</p><p>I found MongoDB to be painless to work with as a <a href="https://www.mongodb.com/nosql-explained">NoSQL</a> database. &nbsp;If you're working with Express, you'll most likely use <a href="https://mongoosejs.com/">Mongoose</a> as an <a href="https://en.wikipedia.org/wiki/Object-relational_mapping#Object-oriented_databases">ODM</a> - basically like a "middle person" that translates a model of what your data looks like to the database.</p><p>The model in this app (called a "schema" in Mongoose terms) is really simple, located in /models/quests.js:</p><pre><code class="language-language">const questSchema = new mongoose.Schema({
name: {
type: String,
required: true
},
description: {
type: String,
required: true
}
def get_quests():
questQuery = Quest.query.all()
quests = {}
for quest in questQuery:
quests[quest.name] = quest.description
return jsonify(quests)
@app.route('/quests', methods=['POST'])
def post_quest():
newQuest = Quest(name=request.json['name'], description=request.json['description'])
db.session.add(newQuest)
db.session.commit()
return "Quest Added!"</code></pre><p>Similarly, the database model (akin to the Mongoose "schema") is in /app/models.py:</p><pre><code class="language-python">class Quest(db.Model):
name = db.Column(db.String(256), primary_key=True, index=True, unique=True)
{
[Route("quests/")]
[ApiController]
public class QuestsController : ControllerBase
{
private readonly QuestService _questService;
public QuestsController(QuestService questService)
{
_questService = questService;
}
[HttpGet]
public ActionResult&lt;List&lt;Quest&gt;&gt; Get() =&gt;
_questService.Get();
[HttpPost]
public ActionResult&lt;Quest&gt; Create(Quest quest)
{
_questService.Create(quest);
return CreatedAtRoute("GetQuest", new { id = quest.Id.ToString() }, quest);
}
}
}</code></pre><p>Not too terrible, almost kind of readable, in a C# sort of way. The data model in /Models/Quest.cs is even easier:</p><pre><code class="language-c#">namespace QuestAPI.Models{
public class Quest
{
[BsonId]
[BsonRepresentation(BsonType.ObjectId)]
public string Id { get; set; }
[BsonElement("Name")]
public string Name { get; set; }
public string Description { get; set; }
}
}</code></pre><p>These two snippets essentially do the same things as the previous examples that we've seen: take requests from the front end, process them to get or modify data in the database, and send a response back to the client. &nbsp;</p><p>Yet, as you can probably tell from the complex file structure, there's so much code that surrounds these snippets, along with <a href="https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/interfaces/">Interfaces</a>, <a href="https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-3.1">Dependency Injection</a>, and other abstractions, that it can be challenging to understand how it all works together.</p><p>Consider the following configuration code in /Startup.cs:</p><pre><code class="language-c#">  public void ConfigureServices(IServiceCollection services)
{
services.Configure&lt;QuestDatabaseSettings&gt;(Configuration.GetSection(nameof(QuestDatabaseSettings)));
services.AddSingleton&lt;IQuestDatabaseSettings&gt;(sp =&gt; sp.GetRequiredService&lt;IOptions&lt;QuestDatabaseSettings&gt;&gt;().Value);
services.AddSingleton&lt;QuestService&gt;();
services.AddCors(options =&gt;
{
options.AddPolicy(MyAllowSpecificOrigins, builder =&gt;
{
builder.WithOrigins("http://localhost:3000/quests", "http://localhost:8080").AllowAnyHeader().AllowAnyMethod();
});
});
services.AddControllers();
}</code></pre><p>Or this particularly nested bit from a separate <a href="https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-3.1&amp;tabs=visual-studio">SQL Server web API tutorial</a>:</p><pre><code class="language-c#">    [HttpGet]
public async Task&lt;ActionResult&lt;IEnumerable&lt;TodoItemDTO&gt;&gt;&gt; GetTodoItems()
{
return await _context.TodoItems
.Select(x =&gt; ItemToDTO(x))
.ToListAsync();
}</code></pre><p>Lol. What?? As a new user, even familiar as I am with C#, I can go line-by-line to understand each abstraction, or I can just trust that the framework is handling everything for me and forget about it.</p><p>I tend to want to know exactly how my code works so that I can fix or alter it if necessary. But I certainly feel like my time spent learning the ins-and-outs of ASP.NET could be better utilized towards mastering another framework.</p><p>To be fair, ASP.NET appears to be similar to Django in being more opinionated and providing you with a ton of stuff out of the box, including an authentication solution, database management, and the lot. If these things are important to you, it's certainly worth considering. &nbsp;</p><p>It also has the full support of Microsoft and an open source community. So if you're looking at developing enterprise-level applications that need to scale, you might want to take a longer look at ASP.NET as a potential solution.</p><h3 id="c-asp-net-resources">C#/ASP.Net Resources</h3><p>To build the ASP.Net API, I used the following resources:</p><ul><li><a href="https://visualstudio.microsoft.com/downloads/">Visual Studio Community</a> as my code editor and IDE, with the ASP.NET and web development workload installed (I already had MongoDB running from the Express API)</li><li>Microsoft's <a href="https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-mongo-app?view=aspnetcore-3.1&amp;tabs=visual-studio">official tutorial</a> for building web APIs with ASP.NET and MongoDB</li></ul><h2 id="tl-dr">TL;DR</h2><p>In all, with some slight variations and hiccups among them, I've gotten each of the web APIs to work with the Vue client, with the ability to view quests from and add quests to the database. Hopefully, my explanation of the process has been helpful in your own search for a back end framework, but here are some additional recommendations just in case:</p><ul><li>If you're a JavaScript developer and/or want to manage everything that your application does, including its architecture, consider using Express.</li><li>If you're a Python developer and/or want a pleasant experience in developing small projects, try Flask, but consider using Django if you need more out-of-the-box support and don't mind conforming to an opinionated framework.</li><li>If you're a C# developer and willing to spend the time to learn the most arcane details of C# coding best practices, consider using ASP.NET. Alternatively, if you need enterprise-level support right out of the box, you'd be hard-pressed to find better.</li><li>If you don't know what to use and just want to learn back end development, take a look at Flask. &nbsp;It's easy to work with and will teach you the basics that you'll need to know for building web apps in any coding language.</li><li>If you don't know what to use and want an adventure, choose Express. There's a rabbit hole of package management and Stack Overflow questions waiting that may make you tear your hair out, but you'll learn a lot about the JavaScript ecosystem and web development in general.</li></ul><p>Additionally, two things bear mentioning that threw me for a spin in this process: CORS and environment variables. The former I've mentioned in this article a couple of times already, but it's worth discussing again to understand the scope of building a full stack app on your machine.</p><p>Unless you have an integrated development environment that's handling the whole stack for you, you'll likely have a client, a server, and a database that are all running independently of one another. &nbsp;</p><p>In the Express API section above, for example, I was running </p><ol><li>the Vue CLI server, which rendered my front end app on port 8080; </li><li>an NPM script to spin up the Express API server on port 3000; and</li><li>a separate instance of the Mongo database to get everything working together. That's three command prompts open and a general mess!</li></ol><p>If you dig into the Vue code above (or on GitHub), you'll see that the requests made on behalf of the client, running on http://localhost:8080, are to the server on http://localhost:3000, which is where the Express API is listening. This is called "cross-origin resource sharing," or <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">CORS</a>, and it's blocked by the browser for security concerns. Most frameworks require you to install an additional package to get the whole thing running in your local environment.</p><p>Second, you'll want to become comfortable with <a href="https://en.wikipedia.org/wiki/Environment_variable">environment variables</a>, which can really help smooth some rough pathing edges at runtime. I used <a href="https://www.npmjs.com/package/dotenv">dotenv</a> and <a href="https://pypi.org/project/Flask-Env/">Flask-Env</a> for the Express and Flask projects, respectively. </p><p>Both packages allow you to configure things like where your database lives, or what default port your application should be using, in one document. Your application then uses that document at runtime to figure out where to find everything, without any further configuration needed from you.</p><p>One final note that may be helpful if you're just working on a back end project and don't want to go through the trouble of building a front end client: consider using a third-party app like <a href="https://www.postman.com/">Postman</a>. I used it to make HTTP requests to each of the APIs to make sure they were working properly before layering on the Vue client and trying to get the whole stack running altogether. </p><p>I hope this article has been helpful for you in your own process of looking for a back end framework. &nbsp;Let me know what you find! </p><p>If you enjoyed this article, please consider <a href="https://www.nightpathpub.com/">checking out my games and books</a>, <a href="https://www.youtube.com/msfarzan?sub_confirmation=1">subscribing to my YouTube channel</a>, or <a href="https://discord.gg/RF6k3nB">joining the <em>Entromancy </em>Discord</a>.</p><p>M. S. Farzan, Ph.D. has written and worked for high-profile video game companies and editorial websites such as Electronic Arts, Perfect World Entertainment, Modus Games, and MMORPG.com, and has served as the Community Manager for games like <em>Dungeons &amp; Dragons Neverwinter</em> and <em>Mass Effect: Andromeda</em>. He is the Creative Director and Lead Game Designer of <em><a href="https://www.nightpathpub.com/rpg">Entromancy: A Cyberpunk Fantasy RPG</a></em> and author of <em><a href="http://nightpathpub.com/books">The Nightpath Trilogy</a></em>. Find M. S. Farzan on Twitter <a href="https://twitter.com/sominator">@sominator</a>.</p>
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
