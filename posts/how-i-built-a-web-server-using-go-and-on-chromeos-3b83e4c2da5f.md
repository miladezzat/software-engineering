---
card: "https://cdn-media-1.freecodecamp.org/images/0*jHeP1Jefk_56SFZY.jpg"
tags: [Golang]
description: "by Peter Gleeson"
author: "Milad E. Fahmy"
title: "How I built a web server using Go — and on ChromeOS"
created: "2021-08-16T10:24:56+02:00"
modified: "2021-08-16T10:24:56+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-golang tag-programming tag-web-development tag-tech tag-linux ">
<header class="post-full-header">
<h1 class="post-full-title">How I built a web server using Go — and on ChromeOS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*jHeP1Jefk_56SFZY.jpg 300w,
https://cdn-media-1.freecodecamp.org/images/0*jHeP1Jefk_56SFZY.jpg 600w,
https://cdn-media-1.freecodecamp.org/images/0*jHeP1Jefk_56SFZY.jpg 1000w,
https://cdn-media-1.freecodecamp.org/images/0*jHeP1Jefk_56SFZY.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*jHeP1Jefk_56SFZY.jpg" alt="How I built a web server using Go — and on ChromeOS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
for i &lt; 1000 {
//something
i++
}</code></pre><p>Type inference is optional. You can declare and initialise a variable the long way, or take a shortcut and assign type implicitly.</p><pre><code class="language-Go">var x int = 2
//is the same as:
x := 2</code></pre><p>‘If’ and ‘else’ statements are pretty straightforward:</p><pre><code class="language-Go">x := 5
if x &gt; 10 {
fmt.Println("Greater than 10")
} else {
fmt.Println("Less than or equal to 10")
}</code></pre><p>Go is also fast to compile and comes with all sorts of helpful packages available in the standard library, which is well-documented online. It’s been used in a number of <a href="https://en.wikipedia.org/wiki/Go_(programming_language)#Projects_using_Go" rel="noopener">projects</a>, including some by household names such as Google, Dropbox, Soundcloud, Twitch and Uber.</p><p>I reasoned that if it’s good enough for them, it’s probably worth taking a look at. For anyone else taking their first steps into back-end development, I’ve put together a little tutorial, based upon my experiments with Go using Termux. If you have an Android device, or indeed a Chromebook with access to the Play Store, then get Termux installed and running, and we’re ready to go (EDIT: pun <em>not </em>actually intended).</p><p>If you have a conventional Linux device, feel free to join in as well! The instructions for the server program itself should work just fine on <a href="https://golang.org/doc/install" rel="noopener">any platform that supports Go.</a></p><h4 id="get-go-ing-with-termux">Get Go-ing With Termux</h4><p>Termux, like any other Android app, is very straightforward to download and install. Just search the Play Store, and hit INSTALL. Once it’s ready, open it up. You should have a nice blank command line interface looking back at you. I’d strongly recommend using a physical keyboard (either built-in, or micro-USB or Bluetooth connected), but if you don’t have one to hand, I’ve heard good things about another Android app called Hacker’s Keyboard.</p><p>As covered in Aurélien’s tutorial from last year, Termux comes with very little pre-installed. Run the following commands in the terminal:</p><pre><code>$ apt update$ apt upgrade
$ apt install coreutils</code></pre><p>Good. Everything’s up-to-date, and coreutils will help you navigate the file system a little easier. Let’s check where we are in the directory tree.</p><pre><code>$ pwd</code></pre><p>This should return a path name, showing where you currently are in the directory. If we’re not already there, let’s navigate to the ‘home’ folder, and see what’s inside:</p><pre><code>$ cd $HOME &amp;&amp; ls</code></pre><p>Ok, let’s make a new directory for our Go tutorial, and navigate in there. Then, we can create a new file, called ‘server.go’.</p><pre><code>$ mkdir go-tutorial &amp;&amp; cd go-tutorial
$ touch server.go</code></pre><p>If we type ‘ls’, we will see this one file in our directory. Now, let’s get ourselves a text editor. Aurélien’s tutorial introduces you to Vim, and if you’d prefer use that, then by all means do so. A slightly more ‘beginner-friendly’ editor, which I’ll be using here, is one called nano. Let’s install that, and open our server.go file:</p><pre><code>$ apt install nano
$ nano server.go</code></pre><p>Great! Now we can start typing as much code as we like. But before we do, let’s install the Go compiler, because we’ll kinda need this for our code to be of any use. Quit nano with Ctrl+X, and from the command line, type:</p><pre><code>$ apt install golang</code></pre><p>Now, let’s go back into nano, and start writing our server code!</p><h4 id="building-a-simple-web-server">Building a Simple Web Server</h4><p>We’re going to write a simple program that launches a server, and serves a HTML page that lets the user enter a password to login and see a welcome message (or a “Sorry, try again”-type message if the password is wrong). In nano, begin with the following:</p><pre><code class="language-Go">//Build a web server
package main
import (
"fmt"
"net/http"
)</code></pre><p>What we’ve done is create a package. Go programs always run in packages. It’s a way of storing and organizing code, and lets you call functions from other packages nice and easily. In fact, that’s the next thing we’ve written. We’ve told Go to import the ‘fmt’ package, and the ‘http’ package from the ‘net’ directory within the standard library. This gives us access to functions that lets us play around with ‘formatted I/O’, and HTTP requests and responses.</p><p>Now, let’s get this thing online. A few lines down, let’s write the following code:</p><pre><code class="language-Go">func main() {
http.ListenAndServe(":8080",nil)
fmt.Println("Server is listening at port 8080")
}</code></pre><p>Like C, C++, Java etc., Go programs enter with a ‘main()’ function. We’ve told the server to listen out for requests at port 8080 (although feel free to choose a different number), and to print out a message letting us know that’s what it’s doing.</p><p>That’ll do for now! Let’s save the file (Ctrl+O), exit (Ctrl+X) and run our program. At the command line, type:</p><pre><code>go run server.go</code></pre><p>This will ask the Go compiler to both compile and run the program. After a short pause, the program should run. You’ll hopefully see the following output:</p><pre><code>Server is listening at port 8080</code></pre><p>Brilliant! Your server is listening for requests at port 8080. Unfortunately, it has no idea what to do with any requests it receives, because we haven’t told it how to respond. That’s the next step. Interrupt the server program with Ctrl+C, and reopen server.go in nano.</p><h4 id="sending-a-response">Sending a Response</h4><p>We need the server to ‘handle’ requests, and write back appropriate responses. Thankfully, the ‘http’ package we imported makes this easy to do.</p><p>For the sake of readability, let’s insert the following code between the import() statement and the main() function. We could just carry on below the main() function, however, and all would be fine. Do it your way!</p><p>Anyway, let’s write a handler function.</p><pre><code class="language-Go">func handler (write http.ResponseWriter, req *http.Request) {
fmt.Fprint(write, "&lt;h1&gt;Hello!&lt;/h1&gt;")
}</code></pre><p>This is a function that takes two arguments, <em>write</em> and <em>req</em>. These are assigned types <em>ResponseWriter</em> and<em> *Request</em>, which are defined in the ‘http’ package. We then ask the server to write some HTML in response.</p><p>In order to use this function, we need to call it within the main() function. Add the code in <strong>bold</strong> font below:</p><pre><code class="language-Go">func main() {
http.ListenAndServe(":8080",nil)
fmt.Println("Server is listening at port 8080")
http.HandleFunc("/", handler)
}</code></pre><p>The line we’ve added calls HandleFunc() from the ‘http’ package. This takes two arguments. The first is a string, and the second refers to the handler() function we wrote just a moment ago. We’re asking the server to handle all requests to the web root “/” with the handler() function.</p><p>Save and close server.go, then from the console, run the server again.</p><pre><code>go run server.go</code></pre><p>Again, we should see the output message, letting us know the server is listening out for requests. Well, why don’t we send it a request? Just open up your web browser and visit <a href="http://localhost:8080" rel="noopener">http://localhost:8080/</a>.</p><p>Chromebooks tend to be pretty opinionated about which browser you should use, but I found Chrome to be somewhat uncooperative when it came to connecting to any localhost ports. Installing the Mozilla Firefox for Android app from the Play Store resolved this.</p><p>Alternatively, if you’d like to stay entirely within Termux (and why not?), then check out Lynx. It’s a text-based browser which has been around since 1992. There’s no images, no CSS, and certainly no JavaScript. For the purposes of this tutorial though, it does the job nicely. Install and run with:</p><pre><code>$ apt install lynx
fmt.Fprint(write, "&lt;h1&gt;Login&lt;/h1&gt;&lt;form action='/log-in/' method='POST'&gt; Password:&lt;br&gt; &lt;input type='password' name='pass'&gt;&lt;br&gt; &lt;input type='submit' value='Go!'&gt;&lt;/form&gt;")
password := req.FormValue("pass")
if password == "let-me-in" {
fmt.Fprint(write, "&lt;h1&gt;Welcome!&lt;/h1&gt;")
} else {
fmt.Fprint(write, "&lt;h3&gt;Wrong password! Try again.&lt;/h3&gt;")
}
}</code></pre><p>As before, this function has two arguments, <em>write</em> and <em>req</em>, which are assigned the same types as defined in the ‘http’ package.</p><p>We then create a variable called <em>password</em>, which we set equal to the ‘value’ of the request form’s input field called “pass”. Notice the implicit type assignment with the use of “:=”? We can do this because the password field’s value will always be sent as a string.</p><p>Next up is an ‘if’ statement, using the “==” comparison operator to check if <em>password</em> is identical to the string “let-me-in”. This is of course, how we’re defining the correct password. You can change this string to whatever you like.</p><p>If the strings <em>are </em>identical, you’re in! For now, we’re printing out a boring “welcome” message. We’ll change that in a minute.</p><p>Else, if the strings are <em>not</em> identical, we’re printing out a “try again” message. Again, we could do with making that a little more interesting. For a start, it’d be useful if the password form was still available to the user. Add in the following code in <strong>bold</strong>. All it is, is the same password form HTML from before.</p><pre><code class="language-Go">func loginHandler (write http.ResponseWriter, req *http.Request){
password := req.FormValue("pass")
if password == "let-me-in" {
fmt.Fprint(write, "&lt;h1&gt;Welcome!&lt;/h1&gt;")
} else {
fmt.Fprint(write, "&lt;h1&gt;Login&lt;/h1&gt;&lt;form action='/log-in/' method='POST'&gt; Password:&lt;br&gt; &lt;input type='password' name='pass'&gt;&lt;br&gt; &lt;input type='submit' value='Go!'&gt;&lt;/form&gt;;&lt;h3 style='color: white; background-color: red'&gt;Wrong password! Try again.&lt;/h3&gt;")
}
}</code></pre><p>I’ve also added some simple styling to the “try again” message. Totally optional, but why not? Let’s do the same for the “welcome” message:</p><pre><code class="language-Go">func loginHandler (write http.ResponseWriter, req *http.Request){
password := req.FormValue("pass")
if password == "let-me-in" {
fmt.Fprint(write, "&lt;h1 style='color: white; background-color: navy; font-size: 72px'&gt;Welcome!&lt;/h1&gt;")
} else {
fmt.Fprint(write, "&lt;h1&gt;Login&lt;/h1&gt;&lt;form action='/log-in/' method='POST'&gt; Password:&lt;br&gt; &lt;input type='password' name='pass'&gt;&lt;br&gt; &lt;input type='submit' value='Go!'&gt;&lt;/form&gt;&lt;h3 style='color: white; background-color: red'&gt;Wrong password! Try again.&lt;/h3&gt;")
}
}</code></pre><p>Almost there! We’ve written out our loginHandler() function, but there’s no reference to it in our main() function. Add the following <strong>bold</strong> line of code:</p><pre><code class="language-Go">func main() {
http.ListenAndServe(":8080",nil)
fmt.Println("Server is listening at port 8080")
http.HandleFunc("/", handler)
http.HandleFunc("/log-in/", loginHandler)
}</code></pre><p>There! We’ve now told the server that if it receives a “/log-in/” request (which it will whenever the user clicks the submit button), use the <code>loginHandler()</code> function to make a response. We’re done! The whole code in server.go should look something like that below:</p><pre><code class="language-Go">//Build a web server
package main
import (
"fmt"
"net/http"
)
func handler (write http.ResponseWriter, req *http.Request)
fmt.Fprint(write, "&amp;lt;h1&gt;Login&lt;/h1&gt;&lt;form action='/log-in/' method='POST'&gt; Password:&lt;br&gt; &lt;input type='password' name='pass'&gt;&lt;br&gt; &lt;input type='submit' value='Go!'&gt;&lt;/form&gt;")
}
func loginHandler (write http.ResponseWriter, req *http.Request){
password := req.FormValue("pass")
if password == "let-me-in" {
fmt.Fprint(write, "&lt;h1 style='color: white;
background-color: navy; font-size: 72px'&gt;Welcome!&lt;/h1&gt;")
} else {
fmt.Fprint(write, "&lt;h1&gt;Login&lt;/h1&gt;&lt;form action='/log-in/' method='POST'&gt; Password:&lt;br&gt; &lt;input type='password' name='pass'&gt;&lt;br&gt; &lt;input type='submit' value='Go!'&gt;&lt;/form&gt;&lt;h3 style='color: white; background-color: red'&gt;Wrong password! Try again.&lt;/h3&gt;"
)
}
}
func main() {
http.ListenAndServe(":8080",nil)
fmt.Println("Server is listening at port 8080")
http.HandleFunc("/", handler)
http.HandleFunc("/log-in/", loginHandler)
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
