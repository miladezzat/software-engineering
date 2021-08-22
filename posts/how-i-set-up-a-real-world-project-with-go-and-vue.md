---
card: "/images/default.jpg"
tags: [Go]
description: When I first started with Go programming I found it pretty ha
author: "Milad E. Fahmy"
title: "How to Set Up a Real-World Project with Go and Vue"
created: "2021-08-15T19:29:49+02:00"
modified: "2021-08-15T19:29:49+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-go tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Set Up a Real-World Project with Go and Vue</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/05/1_9uBiGMLNlBPoNm8kmBCeYw.png 300w,
/news/content/images/size/w600/2020/05/1_9uBiGMLNlBPoNm8kmBCeYw.png 600w,
/news/content/images/size/w1000/2020/05/1_9uBiGMLNlBPoNm8kmBCeYw.png 1000w,
/news/content/images/size/w2000/2020/05/1_9uBiGMLNlBPoNm8kmBCeYw.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/05/1_9uBiGMLNlBPoNm8kmBCeYw.png" alt="How to Set Up a Real-World Project with Go and Vue">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>When I first started with Go programming I found it pretty hard to get my head around it. It was way more low-level than anything else I had ever coded in.</p>
<p>Fast forward a few months and now I'm a total fan and use it for a lot of projects.</p>
<p>In this article, I'll show you how I set up a full-stack web application with Go and Vue.</p>
<p>Let's dive in!</p>
<h2 id="what-we-re-going-to-create">What we're going to create</h2>
<p>I thought it would be cool to create a website thumbnail generator. The idea is that you enter a website URL and the application will generate a thumbnail of that website for you.</p>
<h2 id="setting-up-a-go-module">Setting up a Go module</h2>
<p>First, I create a new directory. Then I set up a Go module by running the following command.</p><pre><code>go mod init github.com/Dirk94/website-thumbnail-generator</code></pre>
<p>This will create a <code>go.mod</code> file that keeps track of all the module dependencies. This is similar to the <code>package.json</code> file in a node project.</p>
<p>Next, I create a new directory <code>main</code> in which I add a <code>server.go</code> file. This will be the main entry point of the application.</p>
<p>For now, let's just print a "hello world" message.</p><pre><code class="language-go">package main
import "fmt"
func main() {
fmt.Println("Hello world")
}</code></pre>
<p> To run the program I run the following command from the project directory.</p><pre><code>go run main/server.go
Hello world</code></pre>
<p>Great, so far everything works! ?</p>
<h2 id="setting-up-a-web-server">Setting up a web server</h2>
<p>We should create a web server that will listen for incoming requests. </p>
<p>Let's update the main function.</p><pre><code class="language-go">func main() {
http.HandleFunc("/", homePageHandler)
fmt.Println("Server listening on port 3000")
log.Panic(
http.ListenAndServe(":3000", nil),
)
}</code></pre>
<p>This will start up a web server and listen on port 3000. </p>
<p>Any request coming in will be handled by the <code>homePageHandler</code> function. This does not yet exist so let's create it.</p><pre><code class="language-go">func homePageHandler(w http.ResponseWriter, r *http.Request) {
_, err := fmt.Fprintf(w, "hello world")
checkError(err)
}
func checkError(err error) {
if err != nil {
log.Panic(err)
}
}</code></pre>
<p>All this function does is write "hello world" to the <code>http.ResponseWriter</code> </p>
<p>The <code>checkError</code> function is simply a handy function that will stop the program and print a stack trace if the <code>error</code> is not nil.</p>
<p>When running the program the web server prints the "hello world" message correctly!</p>
<h2 id="creating-the-vue-project">Creating the Vue project</h2>
<p>To create a new Vue project I run the following command from the project directory.</p><pre><code>vue create frontend</code></pre>
<p>This creates a lot of files but don't be overwhelmed. Let's begin by running the Vue development server.</p><pre><code>yarn serve</code></pre>
<p>When navigating to localhost:8081 you can see that the Vue app works!</p>
<p>Alright, let's clean up the frontend directory a bit.</p>
<p>For starters, I delete the <code>assets</code> and <code>components</code> directory as I won't use them.</p>
<p>Then I update the <code>App.vue</code> file.</p><pre><code class="language-html">&lt;template&gt;
&lt;div id="app" class="container"&gt;
&lt;div class="row"&gt;
&lt;div class="col-md-6 offset-md-3 py-5"&gt;
&lt;h1&gt;Generate a thumbnail of a website&lt;/h1&gt;
&lt;form v-on:submit.prevent="makeWebsiteThumbnail"&gt;
&lt;div class="form-group"&gt;
&lt;input v-model="websiteUrl" type="text" id="website-input" placeholder="Enter a website" class="form-control"&gt;
&lt;/div&gt;
&lt;div class="form-group"&gt;
&lt;button class="btn btn-primary"&gt;Generate!&lt;/button&gt;
&lt;/div&gt;
&lt;/form&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/template&gt;</code></pre>
<p>I use the <code>v-model</code> tag and I call a <code>makeWebsiteThumbnail</code> function when the form submits. Right now these don't exist. Let's add them.</p><pre><code class="language-javascript">&lt;script&gt;
export default {
name: 'App',
data() { return {
websiteUrl: '',
} },
methods: {
makeWebsiteThumbnail() {
console.log(`I should create a website thumbnail of ${this.websiteUrl}`);
}
}
}
&lt;/script&gt;</code></pre>
<p>I'm also using some Bootstrap 4 classes, so for that to work I must add the bootstrap CSS to the <code>public/index.html</code> file.</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"&gt;
&lt;!--- The other stuff in the head tag here... --&gt;
&lt;/head&gt;</code></pre>
<p>Alright, let's fire up the web server and check if we see the log message.</p>
<p>Nice, it works! ?</p>
<h2 id="creating-a-website-thumbnail">Creating a website thumbnail</h2>
<p>To create the website thumbnail I'm going to use <a href="https://screenshotapi.net">screenshotapi.net</a>. That way I only have to call an API to do the heavy lifting for me.</p>
<p>First I install axios.</p><pre><code>yarn add axios</code></pre>
<p>Then I import it in the <code>App.vue</code> file.</p><pre><code class="language-javascript">&lt;script&gt;
import axios from 'axios';
export default {
name: 'App',
// The rest here...
</code></pre>
<p>Next, I update the <code>makeWebsiteThumbnail</code> function to actually call the screenshot API.</p><pre><code class="language-javascript">makeWebsiteThumbnail() {
axios.post("https://screenshotapi.net/api/v1/screenshot", {
token: "SCREENSHOTAPI_TOKEN",
url: this.websiteUrl,
width: 1920,
height: 1080,
output: 'json',
thumbnail_width: 300
})
.then((response) =&gt; {
this.thumbnailUrl = response.data.screenshot;
})
.catch((error) =&gt; {
window.alert(`The API returned an error: ${error}`);
})
}</code></pre>
<p>Make sure to replace the <code>SCREENSHOTAPI_TOKEN</code> with your token.</p>
<p>I set the variable <code>thumbnailUrl</code> to the screenshot URL that is created by the API. To make this work I have to add 2 things.</p>
<p>First, I add the <code>thumbnailUrl</code> variable to the Vue <code>data</code> object.</p><pre><code class="language-javascript">data: {
websiteUrl: '',
thumbnailUrl: '',
},</code></pre>
<p>Second, I create an <code>img</code> tag that will display <code>thumbnailUrl</code> image.</p><pre><code class="language-html">&lt;img :src="thumbnailUrl"/&gt;</code></pre>
<p>Let's spin up the web server and see the result:</p>
<p>It shows a thumbnail of freeCodeCamp, nice!</p>
<h2 id="gluing-go-and-vue-together">Gluing Go and Vue together</h2>
<p>Right now we've used the Vue development server to spin up the front end. It works, but the development server should only be used for local development.</p>
<p>When we host this application in a production environment you will want to use a "real" web server to handle the incoming requests.</p>
<p>Luckily we have just such a thing: our Go server.</p>
<p>The first thing we have to do is compile our frontend.</p><pre><code>yarn run build</code></pre>
<p>This creates a <code>dist</code> directory with the compiled assets.</p>
<p>We should update the Go server to serve the files from this directory.</p>
<p>To do this I update the <code>main</code> function in the <code>main.go</code> file.</p><pre><code class="language-go">func main() {
// Serve static files from the frontend/dist directory.
fs := http.FileServer(http.Dir("./frontend/dist"))
http.Handle("/", fs)
// Start the server.
fmt.Println("Server listening on port 3000")
log.Panic(
http.ListenAndServe(":3000", nil),
)
}</code></pre>
<p>As you can see we simply pass the <code>frontend/dist</code> directory to the fileserver.</p>
<p>When running the go program and navigating to <code>localhost:3000</code> you can indeed see the application!</p>
<h2 id="making-the-app-more-secure">Making the app more secure</h2>
<p>Right now we have a major security flaw. The screenshot API token is visible in our frontend code.</p>
<p>This means that anybody that inspects the webpage can steal the token.</p>
<p>Let's fix that by using our server to call the screenshot API. That way only the server needs to know the token.</p>
<p>In the <code>server.go</code> I create a new function that will listen for any request to the <code>/api/thumbnail</code> endpoint. </p><pre><code class="language-go">type thumbnailRequest struct {
Url string `json:"url"`
}
func thumbnailHandler(w http.ResponseWriter, r *http.Request) {
var decoded thumbnailRequest
// Try to decode the request into the thumbnailRequest struct.
err := json.NewDecoder(r.Body).Decode(&amp;decoded)
if err != nil {
http.Error(w, err.Error(), http.StatusBadRequest)
return
}
fmt.Printf("Got the following url: %s\n", decoded.Url)
}</code></pre>
<p>For now we just extract and print the URL parameter from the request.</p>
<p>To make this work I update the <code>main</code> function to use our <code>thumbnailHandler</code> function.</p><pre><code class="language-go">func main() {
// Use the thumbnailHandler function
http.HandleFunc("/api/thumbnail", thumbnailHandler)
fs := http.FileServer(http.Dir("./frontend/dist"))
http.Handle("/", fs)
fmt.Println("Server listening on port 3000")
log.Panic(
http.ListenAndServe(":3000", nil),
)
}</code></pre>
<p>And finally, I should update the <code>App.vue</code> file to call the Go server instead of the screenshot API.</p><pre><code class="language-javascript">makeWebsiteThumbnail() {
// Call the Go API, in this case we only need the URL parameter.
axios.post("http://localhost:3000/api/thumbnail", {
url: this.websiteUrl,
})
.then((response) =&gt; {
this.thumbnailUrl = response.data.screenshot;
})
.catch((error) =&gt; {
window.alert(`The API returned an error: ${error}`);
})
}</code></pre>
<p>When testing the new setup I indeed see a log message in the go server.</p><pre><code>go run main/server.go
Got the following url: freecodecamp.org</code></pre>
<h2 id="calling-the-screenshot-api-from-go">Calling the screenshot API from Go</h2>
<p>Let's actually call the Screenshot API from our Go server.</p>
<p>To begin I create a <code>struct</code> that holds all the parameters needed to call the Screenshot API.</p><pre><code class="language-go">type screenshotAPIRequest struct {
Token          string `json:"token"`
Url            string `json:"url"`
Output         string `json:"output"`
Width          int    `json:"width"`
Height         int    `json:"height"`
ThumbnailWidth int    `json:"thumbnail_width"`
}</code></pre>
<p>Then, I update the <code>thumbnailHandler</code> function to create a http POST request and call the API.</p><pre><code class="language-go">func thumbnailHandler(w http.ResponseWriter, r *http.Request) {
var decoded thumbnailRequest
// Try to decode the request into the thumbnailRequest struct.
err := json.NewDecoder(r.Body).Decode(&amp;decoded)
if err != nil {
http.Error(w, err.Error(), http.StatusBadRequest)
return
}
// Create a struct with the parameters needed to call the ScreenshotAPI.
apiRequest := screenshotAPIRequest{
Token:          "SCREENSHOTAPI_TOKEN",
Url:            decoded.Url,
Output:         "json",
Width:          1920,
Height:         1080,
ThumbnailWidth: 300,
}
// Convert the struct to a JSON string.
jsonString, err := json.Marshal(apiRequest)
checkError(err)
// Create a HTTP request.
req, err := http.NewRequest("POST", "https://screenshotapi.net/api/v1/screenshot", bytes.NewBuffer(jsonString))
req.Header.Set("Content-Type", "application/json")
// Execute the HTTP request.
client := &amp;http.Client{}
response, err := client.Do(req)
checkError(err)
// Tell Go to close the response at the end of the function.
defer response.Body.Close();
// Read the raw response into a Go struct.
type screenshotAPIResponse struct {
Screenshot string `json"screenshot"`
}
var apiResponse screenshotAPIResponse
err = json.NewDecoder(response.Body).Decode(&amp;apiResponse)
checkError(err)
// Pass back the screenshot URL to the frontend.
_, err = fmt.Fprintf(w, `{ "screenshot": "%s" }`, apiResponse.Screenshot)
checkError(err)
}</code></pre>
<p>And when restarting the Go server you can see that the thumbnail generator still works! And as a bonus, nobody can steal our API token now. </p>
<h2 id="conclusion">Conclusion</h2>
<p>We've set up a full-stack website thumbnail generator using Go and Vue. The frontend is separated from the backend and we've added an external API in the mix that we call from the Go server.</p>
<p>You can view the <a href="https://coffeecoding.dev/website-thumbnail-generator">live version here</a> and the <a href="https://github.com/Dirk94/website-thumbnail-generator">Github source code here</a>.</p>
<p>Happy coding!</p>
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
