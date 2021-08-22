---
card: "https://cdn-media-1.freecodecamp.org/images/1*Mi3HukEz9_JHfv3Z5lp93g.jpeg"
tags: [Functional Programming]
description: "Scala has a very special streaming library called FS2 (Functi"
author: "Milad E. Fahmy"
title: "A streaming library with a superpower: FS2 and functional programming"
created: "2021-08-16T11:35:33+02:00"
modified: "2021-08-16T11:35:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-functional-programming tag-scala tag-tech tag-programming tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">A streaming library with a superpower: FS2 and functional programming</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Mi3HukEz9_JHfv3Z5lp93g.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*Mi3HukEz9_JHfv3Z5lp93g.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*Mi3HukEz9_JHfv3Z5lp93g.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Mi3HukEz9_JHfv3Z5lp93g.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Mi3HukEz9_JHfv3Z5lp93g.jpeg" alt="A streaming library with a superpower: FS2 and functional programming">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Scala has a very special streaming library called FS2 (Functional Streams for Scala). This library embodies all the advantages of functional programming (FP). By understanding its design goals you will get exposure to the core ideas that make FP so appealing.</p><p>FS2 has one central type: <code><strong>Stream[Effect,Output]</strong></code></p><p>You might get from this type that it’s a <code>Stream</code> and that it emits values of type <code>Output</code>.</p><p>The obvious question here is what is <code>Effect</code>? What is the link between <code>Effect</code> and <code>Output</code>? And what advantages does FS2 have over other streaming libraries?</p><h3 id="overview">Overview</h3><p>I will start by reviewing what problems FS2 solves. Then I compare <code>List</code> and <code>Stream</code> with several code examples. After that, I will focus on how to use <code>Stream</code> with a DB or any other IO. That is where FS2 shines and where the <code>Effect</code>type is used. Once you will understand what <code>Effect</code> is, the advantages of Functional Programming should be evident to you.</p><p>At the end of this post you will get the answers to the following questions:</p><ul><li>What problems can I solve with FS2?</li><li>What can I do with <code>Stream</code> that <code>List</code> cannot ?</li><li>How can I feed data from an API/File/DB to <code>Stream</code> ?</li><li>What is this <code>Effect</code> type and how does it relate to functional programming?</li></ul><p>Note: The code is in Scala and should be understandable even without prior knowledge of the syntax.</p><h3 id="what-problems-can-i-solve-with-fs2">What problems can I solve with FS2?</h3><ol><li>Streaming I/O: Loading incrementally big data sets that would not fit in memory and operating on them without blowing your heap.</li><li>Control Flow (not covered): Moving data from one/several DBs/files/APIs to others in a nice declarative way.</li><li>Concurrency (not covered): Run different streams in parallel and make them communicate together. For example loading data from multiple files and processing them concurrently as opposed to sequentially. You can do some advanced stuff here. Streams can communicate together <strong>during </strong>the processing stage and not only at the end.</li></ol><h3 id="list-vs-stream"><code>List</code> vs <code>Stream</code></h3><p><code>List</code> is the most well known and used data structure. To get a feel for how it differs from an FS2 <code>Stream</code>, we will go through a few use cases. We will see how <code>Stream</code> can solve problems that <code>List</code> cannot.</p><h3 id="your-data-is-too-big-and-does-not-fit-in-memory">Your data is too big and does not fit in memory</h3><p>Let’s say you have a very big file (40GB) <code>fahrenheit.txt</code>. The file has a temperature on each line and you want to convert it to <code>celsius.txt</code>.</p><h3 id="loading-a-big-file-using-list">Loading a big file using <code>List</code></h3><pre><code class="language-scala">import scala.io.Source
val list = Source.fromFile("testdata/fahrenheit.txt").getLines.toList
java.lang.OutOfMemoryError: Java heap space
java.util.Arrays.copyOfRange(Arrays.java:3664)
java.lang.String.&lt;init&gt;(String.java:207)
java.io.BufferedReader.readLine(BufferedReader.java:356)
java.io.BufferedReader.readLine(BufferedReader.java:389)</code></pre><p><code>List</code> fails miserably because of course, the file is too big to fit in memory. If you are curious, you can go check the full solution using <code>Stream</code> <a href="https://functional-streams-for-scala.github.io/fs2/#about" rel="noopener">here</a> — but do that later, read on :)</p><h3 id="when-list-won-t-do-stream-to-the-rescue-">When List won’t do…Stream to the rescue!</h3><p>Let’s say I succeeded in reading my file and I want to write it back. I would like to preserve the line structure. I need to insert a newline character <code>\n</code> after each temperature.</p><p>I can use the <code>intersperse</code> combinator to do that</p><pre><code class="language-scala">import fs2._
Stream(1,2,3,4).intersperse("\n").toList</code></pre><p>Another nice one is <code>zipWithNext</code></p><pre><code class="language-scala">scala&gt; Stream(1,2,3,4).zipWithNext.toList
res1: List[(Int, Option[Int])] = List((1,Some(2)), (2,Some(3)), (3,Some(4)), (4,None))</code></pre><p>It bundles consecutive things together, very useful if you want to <a href="https://gist.github.com/dsebban/bb34ea4671bda8d52e2f083e2b160778" rel="noopener">remove consecutive duplicates</a>.</p><p>These are only a few from a lot of very useful ones, here is the <a href="https://oss.sonatype.org/service/local/repositories/releases/archive/co/fs2/fs2-core_2.12/0.10.5/fs2-core_2.12-0.10.5-javadoc.jar/!/fs2/Stream.html" rel="noopener">full list</a>.</p><p>Obviously <code>Stream</code> can do a lot of things that <code>List</code> cannot, but the best feature is coming in the next section, it's all about how to use <code>Stream</code> in the real world with DBs/Files/APIs ...</p><h3 id="how-can-i-feed-data-from-an-api-file-db-to-stream">How can I feed data from an API/File/DB to <code>Stream</code>?</h3><p>Let’s just say for now that this our program</p><pre><code class="language-scala">scala&gt; Stream(1,2,3)
res2: fs2.Stream[fs2.Pure,Int] = Stream(..)</code></pre><p>What does this <code>Pure</code> mean? Here is the scaladoc from the source code:</p><pre><code class="language-scala">/**
* Indicates that a stream evaluates no effects.
*
* A `Stream[Pure,O]` can be safely converted to a `Stream[F,O]` for all `F`.
*/
type Pure[A] &lt;: Nothing</code></pre><p>It means no effects, ok …, but <strong>What is an effect?</strong> and more specifically what is the effect of our program <code>Stream(1,2,3)</code>?</p><p>This program has literally no <em>effect</em> on the world. Its only effect will be to make your CPU work and consumes some power!! It does not affect the world around you.</p><p>By affecting the world I mean it <strong>consumes</strong> any meaningful resource like a file, a database, or it <strong>produces</strong> anything like a file, uploading some data somewhere, writing to your terminal, and so on.</p><h3 id="how-do-i-turn-a-pure-stream-to-something-useful">How do I turn a <code>Pure</code> stream to something useful?</h3><p>Let’s say I want to load user ids from a DB, I am given this function, it does a call to the DB and returns the userId as a <code>Long</code>.</p><pre><code class="language-scala">import scala.concurrent.Future
def loadUserIdByName(userName: String): Future[Long] = ???</code></pre><p>It returns a <code><a href="https://www.scala-lang.org/api/2.12.3/scala/concurrent/Future.html" rel="noopener">Future</a></code> which indicates that this call is asynchronous and the value will be available at some point in the future. It wraps the value returned by the DB.</p><p>I have this <code>Pure</code> stream.</p><pre><code class="language-scala">scala&gt; val names = Stream("bob", "alice", "joe")
names: fs2.Stream[fs2.Pure,String] = Stream(..)</code></pre><p>How do I get a <code>Stream</code> of ids?</p><p>The naive approach would be to use the <code>map</code> function, it should run the function for each value in the <code>Stream</code>.</p><pre><code class="language-scala">scala&gt; userIdsFromDB.compile
res5: fs2.Stream.ToEffect[scala.concurrent.Future,Long] = fs2.Stream$ToEffect@fc0f18da</code></pre><p>I still got back a <code>Pure</code>! I gave the <code>Stream</code> a function that <em>affects the world</em> and I still got a <code>Pure</code>, not cool ... It would have been neat if FS2 would have detected automatically that the <code>loadUserIdByName</code> function has an <em>effect</em> on the world and returned me something that is NOT <code>Pure</code> but it does not work like that. You have to use a special combinator instead of <code>map</code>: you have to use <code>evalMap</code>.</p><pre><code class="language-scala">scala&gt; userIdsFromDB.toList
&lt;console&gt;:18: error: value toList is not a member of fs2.Stream[scala.concurrent.Future,Long]
userIdsFromDB.toList
^</code></pre><p>No more <code>Pure</code>! we got <code>Future</code> instead, yay! What just happened?</p><p>It took:</p><ul><li><code>loadUserIdByName: Future[Long]</code></li><li><code>Stream[Pure, String]</code></li></ul><p>And switched the types of the stream to</p><ul><li><code>Stream[Future, Long]</code></li></ul><p>It separated the <code>Future</code> and isolated it! The left side that was the <code>Effect</code> type parameter is now the concrete <code>Future</code> type.</p><p>Neat trick, but how does it help me?</p><p>You just witnessed true <strong>separation of concerns.</strong> You can continue to operate on the stream with all the nice <code>List</code> like combinators and you don't have to worry about if the DB is down, slow or all the stuff that is related to the network (effect) concerns.</p><p>It all works until I want to use <code>toList</code> to get the values back</p><pre><code class="language-scala">scala&gt; userIdsFromDB.toList
&lt;console&gt;:18: error: value toList is not a member of fs2.Stream[scala.concurrent.Future,Long]
userIdsFromDB.toList
^</code></pre><p>What???!!! I could swear that I used <code>toList</code> before and it worked, how can it say that <code>toList</code> is not a member of <code>fs2.Stream[Future,String]</code> any more? It is as if this function was removed the moment I started using an effect-ful stream, that's impressive! But how do I get my values back?</p><pre><code class="language-scala">scala&gt; userIdsFromDB.compile
res5: fs2.Stream.ToEffect[scala.concurrent.Future,Long] = fs2.Stream$ToEffect@fc0f18da</code></pre><p>First we use <code>compile</code> to tell the <code>Stream</code> to combine all the effects into one, effectively it folds all the calls to <code>loadUserIdByName</code> into one big <code>Future</code>. This is needed by the framework, and it will become apparent why this step is needed soon.</p><p>Now <code>toList</code> should work</p><pre><code class="language-scala">scala&gt; userIdsFromDB.compile.toList
&lt;console&gt;:18: error: could not find implicit value for parameter F: cats.effect.Sync[scala.concurrent.Future]
userIdsFromDB.compile.toList
^</code></pre><p>What?! the compiler is still complaining. That’s because <code>Future</code> is not a good <code>Effect</code> type — it breaks the philosophy of separation of concerns as explained in the next very important section.</p><h3 id="important-the-one-thing-to-take-away-from-this-post">IMPORTANT: The ONE thing to take away from this post</h3><p>A key point here, is that the DB has not been called at this point. Nothing happened really, the full program does not produce anything.</p><pre><code class="language-scala">def loadUserIdByName(userName: String): Future[Long] = ???
Stream("bob", "alice", "joe").evalMap(loadUserIdByName).compile</code></pre><h3 id="separating-program-description-from-evaluation">Separating program description from evaluation</h3><p>Yes it might be surprising but the major theme in FP is separating the</p><ul><li><strong>Description</strong> of your program: a good example is the program we just wrote, it’s a pure description of the problem “I give you names and a DB, give me back IDs”</li></ul><p>And the</p><ul><li><strong>Execution</strong> of your program: running the actual code and asking it to go to the DB</li></ul><p>One more time our program has literally no <em>effect</em> on the world besides making your computer warm, exactly like our <code>Pure</code> stream.</p><p>Code that does not have an effect is called <strong>pure</strong> and that’s what all Functional Programming is about: writing programs with functions that are <strong>pure.</strong> Bravo, you now know what FP is all about.</p><p>Why would you want write code this way? Simple: to achieve separation of concerns between the IO parts and the rest of our code.</p><p>Now let’s fix our program and take care of this <code>Future</code> problem.</p><p>As we said <code>Future</code> is a bad <code>Effect</code> type, it goes against the separation of concerns principle. Indeed, <code>Future</code> is eager in Scala: the moment you create one it starts to executes on some thread, you don't have control of the execution and thus it breaks. FS2 is well aware of that and does not let you compile. To fix this we have to use a type called <code>IO</code> that wraps our bad <code>Future</code>.</p><p>That brings us to the last part, what is this <code>IO</code> type? and how do I finally get my list of <code>usedIds</code> back?</p><pre><code class="language-scala">scala&gt; import cats.effect.IO
import cats.effect.IO
scala&gt; Stream("bob", "alice", "joe").evalMap(name =&gt; IO.fromFuture(IO(loadUserIdByName(name)))).compile.toList
&lt;console&gt;:18: error: not found: value userIds
userIds.compile.toList.unsafeRunSync
^</code></pre><p>The proof that it’s doing something is the fact that it’s failing.</p><pre><code>loadUserIdByName(userName: String): Future[Long] = ???</code></pre><p>When <code>???</code> is called you will get this exception, it means the function was executed (as opposed to before when we made the point that nothing was really happening). When we implement this function it will go to the DB and load the ids, and it will have an <strong>effect</strong> on the world (network/files system).</p><p><code>IO[Long]</code> is a <strong>description</strong> of <strong>how</strong> to get a value of type <code>Long</code> and it most certainly involves doing some I/O i.e going to the network, loading a file,...</p><p>It’s the <strong>How</strong> and not the <strong>What. </strong>It describes how to get the value from the network. If you want to execute this description, you can use <code>unsafeRunSync</code> (or other functions prefixed <code>unsafe</code>). You can guess why they are called this way: indeed a call to a DB is inherently unsafe as it could fail if, for example, your Internet connection is out.</p><h3 id="recap">Recap</h3><p>Let’s take a last look at <code><strong>Stream[Effect,Output]</strong></code><strong>.</strong></p><p><code>Output</code> is the type that the stream emits (could be a stream of <code>String</code>, <code>Long</code> or whatever type you defined).</p><p><code>Effect</code> is the way (the recipe) to produce the <code>Output</code> (i.e go to the DB and give me an <code>id</code> of type <code>Long</code>).</p><p>It’s important to understand that if these types are separated to make things easier, breaking down a problem in subproblems allows you to reason about the subproblems independently. You can then solve them and combine their solutions.</p><p>The link between these 2 types is the following :</p><p>In order for the <code>Stream</code> to emit an element of type</p><ul><li><code>Output</code></li></ul><p>It needs to evaluate a type</p><ul><li><code>Effect</code></li></ul><p>A special type that encodes an effective action as a value of type <code>IO</code>, this <code>IO</code> value allows the separation of 2 concerns:</p><ul><li><strong>Description</strong>:<code>IO</code> is a simple immutable value, it’s a recipe to get a type <code>A</code> by doing some kind of IO(network/filesystem/…)</li><li><strong>Execution</strong>: in order for<code>IO</code> to do something, you need to <em>execute/run it </em>using <code>io.unsafeRunSync</code></li></ul><h4 id="putting-it-all-together">Putting it all together</h4><p><code>Stream[IO,Long]</code> says:</p><p>This is a <code>Stream</code> that emits values of type <code>Long</code> and in order to do so, it needs to run an <em>effective</em> function that produces<code>IO[Long]</code> for each value.</p><p>That’s a lot of details packed in this very short type. The more details you get about how things happen the fewer errors you make.</p><h3 id="takeaways">Takeaways</h3><ul><li><code>Stream</code> is a <strong>super charged</strong> version of <code>List</code></li><li><code>Stream(1,2,3)</code> is of type <code>Stream[Pure, Int]</code> , the second type <code>Int</code> is the type of all values that this stream will emit</li><li><code>Pure</code> means no <em>effect</em> on the world. It just makes your CPU work and consumes some power, but besides that it does not affect the world around you.</li><li>Use <code>evalMap</code> instead of <code>map</code> when you want to apply a function that has an effect like <code>loadUserIdByName</code> to a <code>Stream</code>.</li><li><code>Stream[IO, Long]</code> separates the concerns of What and How by letting you work only with the values and not worrying about how to get them (loading from the db).</li><li>Separating program description from evaluation is a key aspect of FP.</li><li>All the programs you write with <code>Stream</code> will do nothing until you use <code>unsafeRunSync</code>. Before that your code is effectively <em>pure.</em></li><li><code>IO[Long]</code> is an effect type that tells you: you will get <code>Long</code> values from IO (could be a file, the network, the console ...). It's a description and not a wrapper!r</li><li><code>Future</code> does not abide by this philosophy and thus is not compatible with FS2, you have to use <code>IO</code> type instead.</li></ul><h3 id="fs2-videos">FS2 videos</h3><ul><li>Hands on screencast by Michael Pilquist: <a href="https://www.youtube.com/watch?v=B1wb4fIdtn4" rel="noopener">https://www.youtube.com/watch?v=B1wb4fIdtn4</a></li><li>Talk by Fabio Labella <a href="https://www.youtube.com/watch?v=x3GLwl1FxcA" rel="noopener">https://www.youtube.com/watch?v=x3GLwl1FxcA</a></li></ul>
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