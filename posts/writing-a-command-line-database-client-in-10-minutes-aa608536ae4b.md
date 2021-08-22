---
card: "https://cdn-media-1.freecodecamp.org/images/1*34f_Ia_d5E6WZPBQdKjhBw.jpeg"
tags: [JavaScript]
description: by Michael Hunger
author: "Milad E. Fahmy"
title: "How to write a command-line database client in just 10 minutes using OCLIF with TypeScript"
created: "2021-08-15T19:46:57+02:00"
modified: "2021-08-15T19:46:57+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-programming tag-typescript tag-tutorial ">
<header class="post-full-header">
<h1 class="post-full-title">How to write a command-line database client in just 10 minutes using OCLIF with TypeScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*34f_Ia_d5E6WZPBQdKjhBw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*34f_Ia_d5E6WZPBQdKjhBw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*34f_Ia_d5E6WZPBQdKjhBw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*34f_Ia_d5E6WZPBQdKjhBw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*34f_Ia_d5E6WZPBQdKjhBw.jpeg" alt="How to write a command-line database client in just 10 minutes using OCLIF with TypeScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Michael Hunger</p>
<h1 id="how-to-write-a-command-line-database-client-in-just-10-minutes-using-oclif-with-typescript">How to write a command-line database client in just 10 minutes using OCLIF with TypeScript</h1>
<p>This week I came across the <a href="https://engineering.salesforce.com/open-sourcing-oclif-the-cli-framework-that-powers-our-clis-21fbda99d33a" rel="noopener">“OCLIF, Open Source Command Line Framework</a>” by SalesForce/Heroku in a medium post by <a href="undefined" rel="noopener">Jeff Dickey</a>.</p>
<p>I was intrigued, it looked really easy and clean (thanks to TypeScript), and I knew from past experience that there is a lot of chores and boilerplate involved in CLIs. The <a href="https://oclif.io/docs/" rel="noopener">documentation</a> and examples also looked really good.</p>
<p>I spent a good amount of time in both neo4j-shell and <a href="http://github.com/neo4j/cypher-shell" rel="noopener">cypher-shell</a>, both in Java, so I wanted to give JavaScript (JS) a try.</p>
<p>Having used the <a href="https://github.com/neo4j/neo4j-javscript-driver" rel="noopener">neo4j-javascript-driver</a> before for graph visualization, I knew it was quite straightforward and fast.</p>
<p>The driver sends Cypher queries via the binary Bolt protocol to the database and also handles smart routing, transactions, and retries.</p>
<p>For a pretty output, I chose <code>ascii-table</code> , a neat JS library to produce pretty tables for the terminal.</p>
<p>Basically, you have to provide a <strong>bolt-url</strong>, <strong>username,</strong> and <strong>password</strong> and a <strong>query</strong> to run, so I imagine our client to look like this.</p><pre><code>boltsh -a bolt://host:port -u neo4j -p pa55w0rd \  "MATCH (n:Person) RETURN n.name, n.age LIMIT 10"</code></pre>
<h3 id="video">Video</h3>
<p>I recorded a session of doing this coding. It comes down to 15-minute runtime, mostly due to the typing. Feel free to watch it at 2x :)</p>
<h3 id="running-a-neo4j-instance">Running a Neo4j Instance</h3>
<p>To get Neo4j running with some data, you have two options. You can install <a href="https://neo4j.com/download" rel="noopener">Neo4j Desktop</a>, which is an electron app for managing databases, and create a project with a local, empty database. Or you can launch a <a href="https://neo4j.com/sandbox" rel="noopener">Neo4j Sandbox</a>, and chose a “Blank Sandbox.”</p>
<p>Please note the server-IP address and the <strong>bolt</strong> port as well as <strong>username</strong> and <strong>password</strong> from the “Details” tab.</p>
<p>In both cases, after launching the “Neo4j Browser”, which is just a nice React-based frontend (and also uses the neo4j-javascript-driver), please enter and run in the top command-line.</p><pre><code>:play movie graph</code></pre>
<p>This gives you a slideshow, where on the second page you see a huge statement to create sample data. Click and run that, and you should see Tom Hanks visualized with a bunch of his movies and some of the directors.</p>
<h3 id="getting-started-with-oclif">Getting started with OCLIF</h3>
<p>It’s very straightforward — just decide if you want a multi- or single-command client and run the appropriate <code>npx</code> (npm package runner) command.</p><pre><code>npx oclif single boltsh</code></pre>
<p>This asks you a few questions about the name, license, and github-repo, and generates a skeleton, in our case for a single-command CLI.</p>
<p>To see if everything worked, you can run the <code>./bin/run</code> command and should see an output like this:</p><pre><code>./bin/run</code></pre><pre><code>hello world from /Users/mh/d/js/boltsh/src/index.ts!</code></pre>
<p>Ok, so we can find the code to edit in that file which is a <a href="https://oclif.io/docs/commands.html" rel="noopener">Command</a> class. Opening it in the editor, we see where to add a description, a usage example, and the <a href="https://oclif.io/docs/flags.html" rel="noopener">flags</a> mentioned above.</p>
<p>We set all flags to required, and provide defaults for <code>address</code> and <code>user</code>. Then we also add the <code>query</code> <a href="https://oclif.io/docs/flags.html" rel="noopener">argument</a>, which is also required.</p><pre><code>import { Command, flags } from '@oclif/command'</code></pre><pre><code>class Boltsh extends Command {  static description = 'Execute Cypher Queries via Bolt'</code></pre><pre><code>  static examples = [    `$ boltsh -a bolt://localhost -u neo4j -p test \                 "MATCH (n:Person) return n.name"n.nameKeanu ReevesTom Hanks...`,  ]</code></pre><pre><code>  static flags = {    version: flags.version({ char: 'v' }),    help: flags.help({ char: 'h' }),</code></pre><pre><code>    address: flags.string({ char: 'a', description: 'bolt address',                       required: true, default: 'bolt://localhost' }),    user: flags.string({ char: 'u', description: 'neo4j user',                      required: true, default: 'neo4j' }),    password: flags.string({ char: 'p', required: true,                      description: 'user password' }),  }</code></pre><pre><code>  static args = [{ name: 'query', required: true,                    description: 'Cypher Query to Run' }]</code></pre><pre><code>  async run() {    const { args, flags } = this.parse(Boltsh)</code></pre><pre><code>    this.log(`boltsh: ${flags.address} ${flags.user}               ${args.query} from ${__filename}!`)  }}</code></pre><pre><code>export = Boltsh</code></pre>
<p>So we output our command line inputs and give it a go. As a nice side-effect, the <code>run</code> command also runs the TypeScript compiler, so we don’t have to do that manually.</p><pre><code>./bin/run -p test "MATCH (n:Person) RETURN n.name"</code></pre><pre><code>boltsh: bolt://localhost neo4j MATCH (n:Person) RETURN n.name from /Users/mh/d/js/boltsh/src/index.ts!</code></pre>
<p>Cool, now we can add the neo4j-driver and send our query to the server:</p><pre><code>yarn add neo4j-driver</code></pre>
<p>Add imports on top:</p><pre><code>import * as neo4j from 'neo4j-driver'</code></pre>
<p>You’ll find the details of the <a href="https://neo4j.com/docs/api/javascript-driver/current/" rel="noopener">Neo4j Driver API here</a>.</p>
<ol>
<li>We’ll create a driver with our address, user, and password, and acquire a session, which we use to run the query.</li>
<li>Get the results and output the record-keys of the first row as headers and the values of all records as rows, all tab-separated.</li>
<li>At the bottom, we also output the total number of rows and the time taken from the result-summary.</li>
</ol>
<p>(Note that the Neo4j driver uses it’s own Number type for Numbers, as Javascript can’t express 64-bit numbers.)</p><pre><code>async run() {  const { args, flags } = this.parse(Boltsh)</code></pre><pre><code>  const driver = neo4j.v1.driver(flags.address,                    neo4j.v1.auth.basic(flags.user, flags.password))  const session = driver.session()  const result = await session.run(args.query)  session.close()  driver.close()  const records = result.records;  if (records.length &gt; 0) {    // header    this.log(records[0].keys.join("\t"))    // rows    records.forEach(r =&gt; this.log(                    r.keys.map(k =&gt; r.get(k)).join("\t")))</code></pre><pre><code>    this.log(`Returned ${records.length} row(s) in              ${result.summary.resultAvailableAfter.toNumber() +                result.summary.resultConsumedAfter.toNumber()} ms.`)  } else {    this.log('No Results.')  }}</code></pre>
<p>If we run our test again, it “just works.” Cool!</p><pre><code>./bin/run -p test "MATCH (n:Person) RETURN n.name limit 2"</code></pre><pre><code>n.nameKeanu ReevesCarrie-Anne MossReturned 2 row(s) in 3 ms.</code></pre>
<p>Now we can make it pretty with <code><a href="https://github.com/sorensen/ascii-table" rel="noopener">ascii-table</a></code></p><pre><code>yarn add ascii-table</code></pre>
<p>As ASCII-table doesn’t come with TypeScript definition, the compiler would error — that’s why we have to declare the module in a separate file `src/ambient.d.ts`:</p><pre><code>declare module 'ascii-table';</code></pre>
<p>Again, add the imports. This time we add a non-required flag <code>-t</code> that switches on table mode.</p><pre><code>import * as AsciiTable from 'ascii-table'</code></pre>
<p>Then we construct and output the <code>AsciiTable</code> instance instead of plain text when that flag is set.</p><pre><code>static flags = {  // ...  table: flags.boolean({ char: 't', description: 'Table Format' })}</code></pre><pre><code>async run() {  const { args, flags } = this.parse(Boltsh)</code></pre><pre><code>  const driver = neo4j.v1.driver(flags.address,                   neo4j.v1.auth.basic(flags.user, flags.password))  const session = driver.session()  const result = await session.run(args.query)  session.close()  driver.close()  const records = result.records;</code></pre><pre><code>  if (records.length &gt; 0) {    // extract data to be rendered    const data = { heading: records[0].keys,           rows: records.map(r =&gt; r.keys.map(k =&gt; r.get(k))) }</code></pre><pre><code>    if (flags.table) {      const table = AsciiTable.factory(data)      this.log(table.toString())    } else {      this.log(data.heading.join("\t"))      data.rows.forEach(r =&gt; this.log(r.join("\t")))    }</code></pre><pre><code>    this.log(`Returned ${records.length} row(s) in              ${result.summary.resultAvailableAfter.toNumber() +                  result.summary.resultConsumedAfter.toNumber()} ms.`)  } else {    this.log('No Results.')  }}</code></pre>
<p>So let’s give this a try and see what our table looks like:</p><pre><code>./bin/run -p test -t "MATCH (n:Person) RETURN n.name limit 10"</code></pre><pre><code>.--------------------.|       n.name       ||--------------------|| Keanu Reeves       || Carrie-Anne Moss   || Laurence Fishburne || Hugo Weaving       || Lilly Wachowski    || Lana Wachowski     || Joel Silver        || Emil Eifrem        || Charlize Theron    || Al Pacino          |'--------------------'Returned 10 row(s) in 25 ms.</code></pre>
<p>Also, a more complex query looks good (except, it’s too wide for Medium, so screenshot). This renders people’s name, birth-year, and three of the movies they are related to.</p>
<p>What’s nice about OCLIF is that it comes with batteries included. For example, we can run <code>boltsh --help</code> to get a proper help page:</p><pre><code>./bin/run --helpExecute Cypher Queries via Bolt</code></pre><pre><code>USAGE  $ boltsh QUERY</code></pre><pre><code>ARGUMENTS  QUERY  Cypher Query to Run</code></pre><pre><code>OPTIONS  -a, --address=address    (required) [default: bolt://localhost] bolt address  -h, --help               show CLI help  -p, --password=password  (required) user password  -u, --user=user          (required) [default: neo4j] neo4j user  -v, --version            show CLI version</code></pre><pre><code>EXAMPLE  $ boltsh -a bolt://localhost -u neo4j -p test \           "MATCH (n:Person) return n.name"  n.name  Keanu Reeves  Tom Hanks  ...</code></pre>
<p>In the article mentioned at the beginning, Jeff shows how to build a multi-command CLI. The code is basically the same as ours, the only difference being that you have multiple Commands.</p>
<p>Check out the OCLIF <a href="https://oclif.io/docs" rel="noopener">documentation</a> and <a href="https://github.com/oclif?utf8=%E2%9C%93&amp;q=example&amp;type=&amp;language=" rel="noopener">examples</a>.</p>
<p>The framework has a plugin infrastructure, and there are already <a href="https://github.com/oclif?utf8=%E2%9C%93&amp;q=plugin&amp;type=&amp;language=" rel="noopener">a few plugins</a>, like self-update. I hope we’ll see more.</p>
<p>I think OCLIF is really nicely done by the folks at Heroku, thanks to <a href="undefined" rel="noopener">Jeff Dickey</a>.</p>
<p>Cool, mission accomplished, now all that remains is to push to <a href="https://github.com/jexp/boltsh" rel="noopener">GitHub</a> and <a href="https://www.npmjs.com/package/boltsh" rel="noopener">publish to npm</a>.</p>
<p>So why don’t you give it a try and built a CLI of your own?</p>
<p>Happy Hacking!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
