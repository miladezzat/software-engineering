---
card: "https://cdn-media-1.freecodecamp.org/images/1*X0yjvqfSbtopiKwuOiUAsw.png"
tags: [Nodejs]
description: by Zell Liew
author: "Milad E. Fahmy"
title: "Building a CRUD Application with Express and MongoDB — Part 2"
created: "2021-08-15T19:55:52+02:00"
modified: "2021-08-15T19:55:52+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nodejs tag-mongodb tag-javascript tag-learning-to-code tag-learning ">
<header class="post-full-header">
<h1 class="post-full-title">Building a CRUD Application with Express and MongoDB — Part 2</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*X0yjvqfSbtopiKwuOiUAsw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*X0yjvqfSbtopiKwuOiUAsw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*X0yjvqfSbtopiKwuOiUAsw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*X0yjvqfSbtopiKwuOiUAsw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*X0yjvqfSbtopiKwuOiUAsw.png" alt="Building a CRUD Application with Express and MongoDB — Part 2">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Zell Liew</p>
<h1 id="building-a-crud-application-with-express-and-mongodb-part-2">Building a CRUD Application with Express and MongoDB — Part 2</h1>
<p>This article is the second part on creating a CRUD application with Express and MongoDB. We’re going to venture deep into the last two operations that were not covered in the <a href="http://www.zell-weekeat.com/crud-express-mongodb/" rel="noopener">first part</a> — <strong>UPDATE</strong> and <strong>DELETE</strong>.</p>
<p>Without further ado, let’s start the second part.</p>
<h3 id="crud-update">CRUD — UPDATE</h3>
<p>The <strong>UPDATE</strong> operation is used when you want to change something. It can only be triggered by browsers through a <strong>PUT</strong> request. Like the <strong>POST</strong> request, the <strong>PUT</strong> request can either be triggered through JavaScript or through a &lt;form&gt;element.</p>
<p>Let’s try triggering a <strong>PUT</strong> request through JavaScript this time since we’ve already learned how to trigger a request through a &lt;form&gt; element while going throug<strong>h th</strong>e POST request in the previous article.</p>
<p>For the purpose of this tutorial, we’re going to create a button that, when clicked on, will replace the last quote written by Master Yoda with a quote written by Darth Vader.</p>
<p>To do so, we first add a button into the index.ejs file:</p><pre><code>&lt;div&gt;  &lt;h2&gt;Replace last quote written by Master Yoda with a quote written by Darth Vadar&lt;/h2&gt;  &lt;button id="update"&gt; Darth Vadar invades! &lt;/button&gt;&lt;/div&gt;</code></pre>
<p>We’re also going to create an external JavaScript file to execute the <strong>PUT</strong> request when the button is clicked. According to Express conventions, this file is placed in a folder called public</p><pre><code>$ mkdir public$ touch public/main.js</code></pre>
<p>Then, we have to tell Express to make this public folder accessible to the public by using a built-in middleware called express.static</p><pre><code>app.use(express.static('public'))</code></pre>
<p>Once this is done, we can add the main.js file to the index.ejs file:</p><pre><code>&lt;!-- ... --&gt;&lt;script src="main.js"&gt;&lt;/script&gt;&lt;/body&gt;</code></pre>
<p>Next, we’re going to send the <strong>PUT</strong> request when the button is clicked:</p><pre><code>// main.jsvar update = document.getElementById('update')</code></pre><pre><code>update.addEventListener('click', function () {  // Send PUT Request here})</code></pre>
<p>The easiest way to trigger a <strong>PUT</strong> request in modern browsers is to use the <a href="https://developer.mozilla.org/en/docs/Web/API/Fetch_API" rel="noopener">Fetch API</a>. It is only supported on <a href="http://caniuse.com/#search=fetch" rel="noopener">Firefox, Chrome and Opera</a>, so you might want to use a <a href="https://github.com/github/fetch" rel="noopener">polyfill</a> if you want to use Fetch on an actual project.</p>
<p>We’re going to send the following fetch request to the server. Have a quick look at it and I’ll explain what it all means:</p><pre><code>fetch('quotes', {  method: 'put',  headers: {'Content-Type': 'application/json'},  body: JSON.stringify({    'name': 'Darth Vader',    'quote': 'I find your lack of faith disturbing.'  })})</code></pre>
<p>Ready to understand why the Fetch request is written this way? :)</p>
<p>Fetch takes in two parameters. <strong>The first parameter</strong> is a path. In this case, we’re sending the request to /quote, which will be handled on our server.</p>
<p><strong>The second parameter, options,</strong> is an optional object that allows you to control a number of different settings. The ones we used above are method, headers and body.</p>
<p>We set the “method” to “put” because we’re sending a PUT request.</p>
<p>“Headers” here refers to <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers" rel="noopener">HTTP Headers</a> you want to send to the server. It is an object with multiple key-value pairs.</p>
<p>“Body” refers to the content you send to the server.</p>
<p>One thing you may notice is that we’ve set the Content-Type to application/json. We’ve also converted Darth Vader’s quote into JSON in the body with JSON.stringify. We’re making these steps because we’re sending Darth Vadar’s quote in the JSON format (a standard format for sending information on the web) to the server.</p>
<p>Unfortunately, our server doesn’t read JSON data yet. We can teach it to read JSON data by using the bodyparser.json() middleware:</p><pre><code>app.use(bodyParser.json())</code></pre>
<p>Once we’ve done everything above, we will be able to handle this <strong>PUT</strong> request by using the put method:</p><pre><code>app.put('/quotes', (req, res) =&gt; {  // Handle put request })</code></pre>
<p>The next step, then, is to learn how to look for the last quote by Master Yoda and change it to a quote by Darth Vader in MongoDB.</p>
<h3 id="updating-a-collection-in-mongodb">Updating a Collection in MongoDB</h3>
<p>MongoDB Collections come with a method called findOneAndUpdate that allows us to change one item from the database. It takes in four parameters — query, update, options and a callback.</p><pre><code>db.collections('quotes').findOneAndUpdate(  query,   update,   options,  callback)</code></pre>
<p><strong>The first parameter, query</strong>, allows us to filter the collection through key-value pairs given to it. We can filter the quotes collection for Master Yoda’s quotes by setting the name to Yoda.</p><pre><code>{  name: 'Yoda'}</code></pre>
<p><strong>The second parameter, update,</strong> tells MongoDB what to do with the update request. It uses MongoDB’s <a href="https://docs.mongodb.org/manual/reference/operator/update/" rel="noopener">update operators</a> like $set, $inc and $push. We will use the $set operator since we’re changing Yoda’s quotes into Darth Vader’s quotes:</p><pre><code>{  $set: {    name: req.body.name,    quote: req.body.quote  }}</code></pre>
<p><strong>The third parameter, options,</strong> is an optional parameter that allows you to define additional stuff. Since we’re looking for the last quote by Yoda, we will set sort within options to {_id: -1}. This allows MongoDB to search through the database, starting from the newest entry.</p><pre><code>{  sort: {_id:-1}}</code></pre>
<p>There’s a possibility that there aren’t any quotes by Master Yoda in our database. MongoDB does nothing by default when this happens. We can force it to create a new entry if we set the upsert option, which means insert (or save) if no entries are found, to true:</p><pre><code>{  sort: {_id: -1},  upsert: true}</code></pre>
<p><strong>The final parameter is a callback function</strong> that allows you to do something once MongoDB has replaced the final quote by Yoda with a quote by Darth Vadar. In this case, we can send the results back to the fetch request.</p><pre><code>(err, result) =&gt; {  if (err) return res.send(err)  res.send(result)}</code></pre>
<p>Here’s the entire findOneAndUpdate command we’ve written over the previous few steps:</p><pre><code>app.put('/quotes', (req, res) =&gt; {  db.collection('quotes')  .findOneAndUpdate({name: 'Yoda'}, {    $set: {      name: req.body.name,      quote: req.body.quote    }  }, {    sort: {_id: -1},    upsert: true  }, (err, result) =&gt; {    if (err) return res.send(err)    res.send(result)  })})</code></pre>
<p>Now, whenever someone clicks on the update button, the browser will send a <em>PUT</em> request through Fetch to our Express server. Then, the server responds by sending the changed quote back to fetch. We can then handle the response within by chaining fetch with a then method. This is possible because Fetch returns a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" rel="noopener">Promise</a> object.</p>
<p>The proper way to <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Checking_that_the_fetch_was_successful" rel="noopener">check if fetch resolved successfully</a> is to use the okmethod on the response object. You can then return res.json() if you want to read the data that was sent from the server:</p><pre><code>fetch({ /* request */ }).then(res =&gt; {  if (res.ok) return res.json()}).then(data =&gt; {  console.log(data)})</code></pre>
<p>If you are working on a fancy webapp, this is the part where you use JavaScript to update the DOM so users can see the new changes immediately. Updating the DOM is out of the scope of this article, so we’re just going to refresh the browser to see the changes.</p><pre><code>fetch({ /* request */ }).then(res =&gt; {  if (res.ok) return res.json()}).then(data =&gt; {  console.log(data)  window.location.reload(true)})</code></pre>
<p>That’s it for the <strong>CREATE</strong> operation! Let’s move on to the final one — <strong>DELETE</strong>.</p>
<h3 id="crud-delete">CRUD — DELETE</h3>
<p>The <strong>DELETE</strong> operation can only be triggered through a <strong>DELETE</strong> request. It’s similar to the <strong>UPDATE</strong> request so it’s simple if you understand what we’ve done earlier.</p>
<p>For this part, let’s learn to delete the first quote by Darth Vader. To do so, we first have to add a button to the index.ejs file.</p><pre><code>&lt;div&gt;  &lt;h2&gt;Delete Darth Vader's first quote&lt;/h2&gt;  &lt;button id="delete"&gt; Delete first Darth Vader quote &lt;/button&gt;&lt;/div&gt;</code></pre>
<p>Then, we’ll trigger a <strong>DELETE</strong> request through Fetch whenever the delete button is clicked:</p><pre><code>var del = document.getElementById('delete')</code></pre><pre><code>del.addEventListener('click', function () {  fetch('quotes', {    method: 'delete',    headers: {      'Content-Type': 'application/json'    },    body: JSON.stringify({      'name': 'Darth Vader'    })  })  .then(res =&gt; {    if (res.ok) return res.json()  }).  then(data =&gt; {    console.log(data)    window.location.reload()  })})</code></pre>
<p>We can then handle the event on our server side with the delete method:</p><pre><code>app.delete('/quotes', (req, res) =&gt; {  // Handle delete event here})</code></pre>
<h3 id="deleting-an-entry-in-mongodb">Deleting an entry in MongoDB</h3>
<p>MongoDB Collections come with a method called findOneAndDelete that allows us to remove one item from the database. It takes in three parameters — query, options and a callback. These parameters are exactly the same as the ones we used in findOneAndUpdate when updating an entry in MongoDB. The only difference here is that there’s no upsert within options.</p><pre><code>db.collections('quotes').findOneAndDelete(  query,   options,  callback)</code></pre>
<p>Remember, we are trying to delete the first quote by Darth Vader. To do so, we filter the quotes collection by the name, “Darth Vader”. The query parameter is hence:</p><pre><code>{  name: req.body.name}</code></pre>
<p>We can skip the options parameter since we don’t have to reverse the sorting order. Then, we can send a response back to the Fetch request in the callback function.</p><pre><code>(err, result) =&gt; {  if (err) return res.send(500, err)  res.send('A darth vader quote got deleted')})</code></pre>
<p>The complete code for the delete handler is as follows:</p><pre><code>app.delete('/quotes', (req, res) =&gt; {  db.collection('quotes').findOneAndDelete({name: req.body.name},   (err, result) =&gt; {    if (err) return res.send(500, err)    res.send('A darth vader quote got deleted')  })})</code></pre>
<p>Now, whenever somebody clicks on the delete button, the browser will send a <em>DELETE</em> request through Fetch to our Express server. Then, the server responds by sending either an error or a message back.</p>
<p>As before, we can reload the website when the fetch is successfully completed.</p><pre><code>fetch({ /* request */ }).then(res =&gt; {  if (res.ok) return res.json()}).then(data =&gt; {  console.log(data)  window.location.reload(true)})</code></pre>
<p>That’s it for the <strong>DELETE</strong> operation!</p>
<h3 id="wrapping-up">Wrapping Up</h3>
<p>You have now learned all you need to know about creating simple applications with Node and MongoDB. Now, go forth and create more applications, young padawan. May the force be with you.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
