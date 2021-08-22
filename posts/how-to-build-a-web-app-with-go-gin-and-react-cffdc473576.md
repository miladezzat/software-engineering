---
card: "https://cdn-media-1.freecodecamp.org/images/1*zGDYRCxNPHUPcTowYotCdQ.png"
tags: [JavaScript]
description: by Francis Sunday
author: "Milad E. Fahmy"
title: "How to build a web app with Go, Gin, and React"
created: "2021-08-15T19:45:52+02:00"
modified: "2021-08-15T19:45:52+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-golang tag-programming tag-apps-tag tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a web app with Go, Gin, and React</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*zGDYRCxNPHUPcTowYotCdQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*zGDYRCxNPHUPcTowYotCdQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*zGDYRCxNPHUPcTowYotCdQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*zGDYRCxNPHUPcTowYotCdQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*zGDYRCxNPHUPcTowYotCdQ.png" alt="How to build a web app with Go, Gin, and React">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Francis Sunday</p>
<h1 id="how-to-build-a-web-app-with-go-gin-and-react">How to build a web app with Go, Gin, and React</h1>
<blockquote><em>This article was originally posted on <a href="https://hakaselogs.me/2018-04-20/building-a-web-app-with-go-gin-and-react" rel="noopener">My Blog</a></em></blockquote>
<p><strong>TL;DR:</strong> In this tutorial, I’ll show you how easy it is to build a web application with Go and the Gin framework and add authentication to it. Check out the Github <a href="https://github.com/codehakase/golang-gin" rel="noopener">repo</a> for the code we’re going to write.</p>
<p><strong>Gin</strong> is a high-performance micro-framework. It delivers a very minimalistic framework that carries with it only the most essential features, libraries, and functionalities needed to build web applications and microservices. It makes it simple to build a request handling pipeline from modular, reusable pieces. It does this by allowing you to write middleware that can be plugged into one or more request handlers or groups of request handlers.</p>
<h3 id="gin-features">Gin features</h3>
<p>Gin is a fast, simple yet fully featured and very efficient web framework for Go. Check out some of the features below that make it a worthy framework to consider for your next Golang project.</p>
<ul>
<li><strong>Speed:</strong> Gin is built for speed. The framework offers a Radix tree based routing and small memory footprint. No reflection. Predictable API performance.</li>
<li><strong>Crash-Free</strong>: Gin has the capability of catching crashes or panics during runtime, and can recover from them. This way your application will always be available.</li>
<li><strong>Routing:</strong> Gin provides a routing interface to allow you to express how your web application or API routes should look.</li>
<li><strong>JSON Validation:</strong> Gin can parse and validate JSON requests easily, checking for the existence of required values.</li>
<li><strong>Error Management:</strong> Gin provides a convenient way to collect all the errors occurred during a HTTP request. Eventually, a middleware can write them to a log file or to a database and send them through the network.</li>
<li><strong>Built-In Rendering:</strong> Gin provides an easy to use API for JSON, XML, and HTML rendering.</li>
</ul>
<h3 id="prerequisites">Prerequisites</h3>
<p>To follow along with this tutorial, you’ll need to have Go installed on your machine, a web browser to view the app, and a command line to execute build commands.</p>
<p><strong>Go,</strong> or as its normally called <strong>Golang</strong>, is a programming language developed by Google for building modern software. Go is a language designed to get stuff done efficiently and quickly. The key benefits of Go include:</p>
<ul>
<li>Strongly typed and garbage collected</li>
<li>Blazing fast compile times</li>
<li>Concurrency built in</li>
<li>Extensive standard library</li>
</ul>
<p>Head over to the <a href="https://golang.org/dl/" rel="noopener">downloads section</a> of the Go website to get Go running on your machine.</p>
<h3 id="building-an-app-with-gin">Building an app with Gin</h3>
<p>We’ll be building a simple joke listing app with <strong>Gin</strong>. Our app will list some silly dad jokes. We are going to add authentication to it, so that all logged-in users will have the privilege to like and view jokes.</p>
<p>This will allow us illustrate how <strong>Gin</strong> can be used to develop web applications and/or APIs.</p>
<p>We’ll be making use of the following functionalities offered by Gin:</p>
<ul>
<li>Middleware</li>
<li>Routing</li>
<li>Routes Grouping</li>
</ul>
<h3 id="ready-set-go">Ready, set, Go</h3>
<p>We will write our entire Go application in a <code>main.go</code> file. Since it’s a small application, it’s going to be easy to build the application with just <code>go run</code> from the terminal.</p>
<p>We’ll create a new directory <code>golang-gin</code> in our Go workspace, and then a <code>main.go</code> file in it:</p><pre><code class="language-bash">$ mkdir -p $GOPATH/src/github.com/user/golang-gin
$ cd $GOPATH/src/github.com/user/golang-gin
$ touch main.go</code></pre>
<p>The content of the <code>main.go</code> file:</p><pre><code class="language-go">package main
import (
"net/http"
"github.com/gin-gonic/contrib/static"
"github.com/gin-gonic/gin"
)
func main() {
// Set the router as the default one shipped with Gin
router := gin.Default()
// Serve frontend static files
router.Use(static.Serve("/", static.LocalFile("./views", true)))
// Setup route group for the API
api := router.Group("/api")
{
api.GET("/", func(c *gin.Context) {
c.JSON(http.StatusOK, gin.H {
"message": "pong",
})
})
}
// Start and run the server
router.Run(":3000")
}</code></pre>
<p>We’ll need to create some more directories for our static files. In the same directory as the <code>main.go</code> file, let's create a <code>views</code> folder. In the <code>views</code> folder, create a <code>js</code> folder and an <code>index.html</code> file in it.</p>
<p>The <code>index.html</code> file will be very simple for now:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Jokeish App&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Welcome to the Jokeish App&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<p>Before we test what we have so far, let’s install the added dependencies:</p><pre><code class="language-bash">$ go get -u github.com/gin-gonic/gin
$ go get -u github.com/gin-gonic/contrib/static</code></pre>
<p>To see what’s working, we’ll need to start our server by running <code>go run main.go</code>.</p>
<p>Once the application is running, navigate to <code>http://localhost:3000</code> in your browser. If all went well, you should see level 1 header text <strong>Welcome to the Jokeish App</strong> displayed.</p>
<h3 id="defining-the-api">Defining the API</h3>
<p>Let’s add some more code in our <code>main.go</code> file for our API definitions. We'll update our <code>main</code> function with two routes <code>/jokes/</code> and <code>/jokes/like/:jokeID</code> to the route group <code>/api/</code>.</p><pre><code class="language-go">func main() {
// ... leave the code above untouched...
// Our API will consit of just two routes
// /jokes - which will retrieve a list of jokes a user can see
// /jokes/like/:jokeID - which will capture likes sent to a particular joke
api.GET("/jokes", JokeHandler)
api.POST("/jokes/like/:jokeID", LikeJoke)
}
// JokeHandler retrieves a list of available jokes
func JokeHandler(c *gin.Context) {
c.Header("Content-Type", "application/json")
c.JSON(http.StatusOK, gin.H {
"message":"Jokes handler not implemented yet",
})
}
// LikeJoke increments the likes of a particular joke Item
func LikeJoke(c *gin.Context) {
c.Header("Content-Type", "application/json")
c.JSON(http.StatusOK, gin.H {
"message":"LikeJoke handler not implemented yet",
})
}</code></pre>
<p>The content of the <code>main.go</code> file should look like this:</p><pre><code class="language-go">package main
import (
"net/http"
"github.com/gin-gonic/contrib/static"
"github.com/gin-gonic/gin"
)
func main() {
// Set the router as the default one shipped with Gin
router := gin.Default()
// Serve frontend static files
router.Use(static.Serve("/", static.LocalFile("./views", true)))
// Setup route group for the API
api := router.Group("/api")
{
api.GET("/", func(c *gin.Context) {
c.JSON(http.StatusOK, gin.H {
"message": "pong",
})
})
}
// Our API will consit of just two routes
// /jokes - which will retrieve a list of jokes a user can see
// /jokes/like/:jokeID - which will capture likes sent to a particular joke
api.GET("/jokes", JokeHandler)
api.POST("/jokes/like/:jokeID", LikeJoke)
// Start and run the server
router.Run(":3000")
}
// JokeHandler retrieves a list of available jokes
func JokeHandler(c *gin.Context) {
c.Header("Content-Type", "application/json")
c.JSON(http.StatusOK, gin.H {
"message":"Jokes handler not implemented yet",
})
}
// LikeJoke increments the likes of a particular joke Item
func LikeJoke(c *gin.Context) {
c.Header("Content-Type", "application/json")
c.JSON(http.StatusOK, gin.H {
"message":"LikeJoke handler not implemented yet",
})
}</code></pre>
<p>Let’s run our app again <code>go run main.go</code>, and access our routes. <code>http://localhost:3000/api/jokes</code> will return a <code>200 OK</code> header response, with the message <code>jokes handler not implemented yet</code>. A POST request to <code>http://localhost:3000/api/jokes/like/1</code> returns a <code>200 OK</code> header, and the message <code>Likejoke handler not implemented yet</code>.</p>
<h3 id="jokes-data">Jokes data</h3>
<p>Since we already have our routes definition set, which does only one thing (return a JSON response), we’ll spice up our codebase a bit by adding some more code to it.</p><pre><code class="language-go">// ... leave the code above untouched...
// Let's create our Jokes struct. This will contain information about a Joke
// Joke contains information about a single Joke
type Joke struct {
ID     int     `json:"id" binding:"required"`
Likes  int     `json:"likes"`
Joke   string  `json:"joke" binding:"required"`
}
// We'll create a list of jokes
var jokes = []Joke{
Joke{1, 0, "Did you hear about the restaurant on the moon? Great food, no atmosphere."},
Joke{2, 0, "What do you call a fake noodle? An Impasta."},
Joke{3, 0, "How many apples grow on a tree? All of them."},
Joke{4, 0, "Want to hear a joke about paper? Nevermind it's tearable."},
Joke{5, 0, "I just watched a program about beavers. It was the best dam program I've ever seen."},
Joke{6, 0, "Why did the coffee file a police report? It got mugged."},
Joke{7, 0, "How does a penguin build it's house? Igloos it together."},
}
func main() {
// ... leave this block untouched...
}
// JokeHandler retrieves a list of available jokes
func JokeHandler(c *gin.Context) {
c.Header("Content-Type", "application/json")
c.JSON(http.StatusOK, jokes)
}
// LikeJoke increments the likes of a particular joke Item
func LikeJoke(c *gin.Context) {
// confirm Joke ID sent is valid
// remember to import the `strconv` package
if jokeid, err := strconv.Atoi(c.Param("jokeID")); err == nil {
// find joke, and increment likes
for i := 0; i &lt; len(jokes); i++ {
if jokes[i].ID == jokeid {
jokes[i].Likes += 1
}
}
// return a pointer to the updated jokes list
c.JSON(http.StatusOK, &amp;jokes)
} else {
// Joke ID is invalid
c.AbortWithStatus(http.StatusNotFound)
}
}
// NB: Replace the JokeHandler and LikeJoke functions in the previous version to the ones above</code></pre>
<p>With our code looking good, let’s go ahead and test our API. We can test with <code>cURL</code> or <code>postman</code> , and then send a <code>GET</code> request to <code>http://localhost:3000/jokes</code> to get the full list of jokes, and a <code>POST</code> request to <code>http://localhost:3000/jokes/like/{jokeid}</code> to increment the likes of a joke.</p><pre><code class="language-bash">$ curl http://localhost:3000/api/jokes
$ curl -X POST http://localhost:3000/api/jokes/like/4</code></pre>
<h3 id="building-the-ui-react-">Building the UI (React)</h3>
<p>We have our API in place, so let’s build a frontend to present the data from our API. For this, we’ll be using React. We won’t go too deep into React, as it will be out of the scope of this tutorial. If you need to learn more about React, checkout the official <a href="https://facebook.github.io/react/docs/tutorial.html" rel="noopener">tutorial</a>. You can implement the UI with any frontend framework you’re comfortable with.</p>
<h3 id="setup">Setup</h3>
<p>We’ll edit the <code>index.html</code> file to add the external libraries needed to run React. Then we'll need to create an <code>app.jsx</code> file in the <code>views/js</code> directory, which will contain our React code.</p>
<p>Our <code>index.html</code> file should look like this:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset="UTF-8" /&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /&gt;
&lt;title&gt;Jokeish App&lt;/title&gt;
&lt;script src="http://code.jquery.com/jquery-2.1.4.min.js"&gt;&lt;/script&gt;
&lt;script src="https://cdn.auth0.com/js/auth0/9.0/auth0.min.js"&gt;&lt;/script&gt;
&lt;script type="application/javascript" src="https://unpkg.com/react@16.0.0/umd/react.production.min.js"&gt;&lt;/script&gt;
&lt;script type="application/javascript" src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.production.min.js"&gt;&lt;/script&gt;
&lt;script type="application/javascript" src="https://unpkg.com/babel-standalone@6.26.0/babel.js"&gt;&lt;/script&gt;
&lt;script type="text/babel" src="js/app.jsx"&gt;&lt;/script&gt;
&lt;link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="app"&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<h3 id="building-our-components">Building our components</h3>
<p>In React, views are broken down into components. We’ll need to build some components:</p>
<ul>
<li>an <code>App</code> component as the main entry that launches the application</li>
<li>a <code>Home</code> component which will face non logged-in users</li>
<li>a <code>LoggedIn</code> component with content only visible by authenticated users</li>
<li>and a <code>Joke</code> component to display a list of jokes.</li>
</ul>
<p>We'll write all these components in the <code>app.jsx</code> file.</p>
<h3 id="the-app-component">The app component</h3>
<p>This component bootstraps our entire React app. It decides which component to show based on whether a user is authenticated or not. We’ll start off with just its base, and later update it with more functionality.</p><pre><code class="language-js">class App extends React.Component {
render() {
if (this.loggedIn) {
return (&lt;LoggedIn /&gt;);
} else {
return (&lt;Home /&gt;);
}
}
}</code></pre>
<h3 id="the-home-component">The Home component</h3>
<p>This component is shown to non logged-in users, along with a button which opens a Hosted lock screen where they can signup or login. We’ll add this functionality later.</p><pre><code class="language-js">class Home extends React.Component {
render() {
return (
&lt;div className="container"&gt;
&lt;div className="col-xs-8 col-xs-offset-2 jumbotron text-center"&gt;
&lt;h1&gt;Jokeish&lt;/h1&gt;
&lt;p&gt;A load of Dad jokes XD&lt;/p&gt;
&lt;p&gt;Sign in to get access &lt;/p&gt;
&lt;a onClick={this.authenticate} className="btn btn-primary btn-lg btn-login btn-block"&gt;Sign In&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;
)
}
}</code></pre>
<h3 id="loggedin-component">LoggedIn component</h3>
<p>This component is displayed when a user is authenticated. It stores in its <code>state</code> an array of jokes which is populated when the component mounts.</p><pre><code class="language-js">class LoggedIn extends React.Component {
constructor(props) {
super(props);
this.state = {
jokes: []
}
}
render() {
return (
&lt;div className="container"&gt;
&lt;div className="col-lg-12"&gt;
&lt;br /&gt;
&lt;span className="pull-right"&gt;&lt;a onClick={this.logout}&gt;Log out&lt;/a&gt;&lt;/span&gt;
&lt;h2&gt;Jokeish&lt;/h2&gt;
&lt;p&gt;Let's feed you with some funny Jokes!!!&lt;/p&gt;
&lt;div className="row"&gt;
{this.state.jokes.map(function(joke, i){
return (&lt;Joke key={i} joke={joke} /&gt;);
})}
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
)
}
}</code></pre>
<h3 id="the-joke-component">The Joke component</h3>
<p>The <code>Joke</code> component will contain information about each item from the jokes response to be displayed.</p><pre><code class="language-js">class Joke extends React.Component {
constructor(props) {
super(props);
this.state = {
liked: ""
}
this.like = this.like.bind(this);
}
like() {
// ... we'll add this block later
}
render() {
return (
&lt;div className="col-xs-4"&gt;
&lt;div className="panel panel-default"&gt;
&lt;div className="panel-heading"&gt;#{this.props.joke.id} &lt;span className="pull-right"&gt;{this.state.liked}&lt;/span&gt;&lt;/div&gt;
&lt;div className="panel-body"&gt;
{this.props.joke.joke}
&lt;/div&gt;
&lt;div className="panel-footer"&gt;
{this.props.joke.likes} Likes &amp;nbsp;
&lt;a onClick={this.like} className="btn btn-default"&gt;
&lt;span className="glyphicon glyphicon-thumbs-up"&gt;&lt;/span&gt;
&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
)
}
}</code></pre>
<p>We’ve written our components, so now let’s tell React where to render the app. We’ll add the block of code below to the bottom of our <code>app.jsx</code> file.</p><pre><code class="language-jsx">ReactDOM.render(&lt;App /&gt;, document.getElementById('app'));</code></pre>
<p>Let’s restart our Go server <code>go run main.go</code>, and head over to our app's URL <code>http://localhost:3000/</code>. You'll see that the <code>Home</code> component is being rendered.</p>
<h3 id="securing-our-jokes-app-with-auth0">Securing our jokes app with Auth0</h3>
<p><strong>Auth0</strong> issues <a href="https://jwt.io/" rel="noopener">JSON Web Tokens</a> on every login for your users. This means that you can have a solid <a href="https://auth0.com/docs/identityproviders" rel="noopener">identity infrastructure</a>, including <a href="https://auth0.com/docs/sso/single-sign-on" rel="noopener">single sign-on</a>, user management, support for social identity providers (Facebook, Github, Twitter, etc.), enterprise identity providers (Active Directory, LDAP, SAML, etc.) and your own database of users, with just a few lines of code.</p>
<p>We can easily set up authentication in our GIN app by using Auth0. You’ll need an account to follow along with this part. If you don’t already have an Auth0 account, <a href="https://auth0.com/signup" rel="noopener">sign up</a> for one now.</p>
<blockquote><em>Disclaimer: This isn’t sponsored content.</em></blockquote>
<h3 id="creating-the-api-client">Creating the API client</h3>
<p>Our tokens will be generated with Auth0, so we need to create an API and a Client from our Auth0 dashboard. Again, if you haven’t already, <a href="https://auth0.com/signup" rel="noopener">sign up</a> for an Auth0 account.</p>
<p>To create a new API, navigate to the <a href="https://manage.auth0.com/#/apis" rel="noopener">APIs section</a> in your dashboard, and click the <strong>Create API</strong> button.</p>
<p>Choose an API <strong>name</strong> and an <strong>identifier</strong>. The identifier will be the <strong>audience</strong> for the middleware. The <strong>Signing Algorithm</strong> should be <strong>RS256</strong>.</p>
<p>To create a new Client, navigate to the <a href="https://dev.to/codehakase/building-a-web-app-with-go-gin-and-react-5ke" rel="noopener">clients section</a> in your dashboard, and click the <strong>Create Client</strong> button. Select the type <code>Regular Web Applications</code>.</p>
<p>Once the client is created, take note of the <code>client_id</code> and <code>client_secret</code>, as we'll need them later.</p>
<p>We have to add the credentials needed for our API to an environment variable. In the root directory, create a new file <code>.env</code> and add the following to it, with the details from the Auth0 dashboard:</p><pre><code>export AUTH0_API_CLIENT_SECRET=""
export AUTH0_CLIENT_ID=""
export AUTH0_DOMAIN="yourdomain.auth0.com"
export AUTH0_API_AUDIENCE=""</code></pre>
<h3 id="securing-our-api-endpoints">Securing our API endpoints</h3>
<p>Currently, our API is open to the world. We need to secure our endpoints, so only authorized users can access them.</p>
<p>We are going to make use of a <strong>JWT Middleware</strong> to check for a valid <strong>JSON Web Token</strong> from each request hitting our endpoints.</p>
<p>Let’s create our middleware:</p><pre><code class="language-js">// ...
var jwtMiddleWare *jwtmiddleware.JWTMiddleware
func main() {
jwtMiddleware := jwtmiddleware.New(jwtmiddleware.Options{
ValidationKeyGetter: func(token *jwt.Token) (interface{}, error) {
aud := os.Getenv("AUTH0_API_AUDIENCE")
checkAudience := token.Claims.(jwt.MapClaims).VerifyAudience(aud, false)
if !checkAudience {
return token, errors.New("Invalid audience.")
}
// verify iss claim
iss := os.Getenv("AUTH0_DOMAIN")
checkIss := token.Claims.(jwt.MapClaims).VerifyIssuer(iss, false)
if !checkIss {
return token, errors.New("Invalid issuer.")
}
cert, err := getPemCert(token)
if err != nil {
log.Fatalf("could not get cert: %+v", err)
}
result, _ := jwt.ParseRSAPublicKeyFromPEM([]byte(cert))
return result, nil
},
SigningMethod: jwt.SigningMethodRS256,
})
// register our actual jwtMiddleware
jwtMiddleWare = jwtMiddleware
// ... the rest of the code below this function doesn't change yet
}
// authMiddleware intercepts the requests, and check for a valid jwt token
func authMiddleware() gin.HandlerFunc {
return func(c *gin.Context) {
// Get the client secret key
err := jwtMiddleWare.CheckJWT(c.Writer, c.Request)
if err != nil {
// Token not found
fmt.Println(err)
c.Abort()
c.Writer.WriteHeader(http.StatusUnauthorized)
c.Writer.Write([]byte("Unauthorized"))
return
}
}
}</code></pre>
<p>In the above code, we have a new <code>jwtMiddleWare</code> variable which is initialized in the <code>main</code> function. It is used in the <code>authMiddleware</code> middle function.</p>
<p>If you notice, we are pulling our server-side credentials from an environment variable (one of the tenets of a <strong>12-factor app</strong>). Our middleware checks and receives a token from a request and calls the <code>jwtMiddleWare.CheckJWT</code> method to validate the token sent.</p>
<p>Let’s also write the function to return the JSON Web Keys:</p><pre><code class="language-js">// ... the code above is untouched...
// Jwks stores a slice of JSON Web Keys
type Jwks struct {
Keys []JSONWebKeys `json:"keys"`
}
type JSONWebKeys struct {
Kty string   `json:"kty"`
Kid string   `json:"kid"`
Use string   `json:"use"`
N   string   `json:"n"`
E   string   `json:"e"`
X5c []string `json:"x5c"`
}
func main() {
// ... the code in this method is untouched...
}
func getPemCert(token *jwt.Token) (string, error) {
cert := ""
resp, err := http.Get(os.Getenv("AUTH0_DOMAIN") + ".well-known/jwks.json")
if err != nil {
return cert, err
}
defer resp.Body.Close()
var jwks = Jwks{}
err = json.NewDecoder(resp.Body).Decode(&amp;jwks)
if err != nil {
return cert, err
}
x5c := jwks.Keys[0].X5c
for k, v := range x5c {
if token.Header["kid"] == jwks.Keys[k].Kid {
cert = "-----BEGIN CERTIFICATE-----\n" + v + "\n-----END CERTIFICATE-----"
}
}
if cert == "" {
return cert, errors.New("unable to find appropriate key.")
}
return cert, nil
}</code></pre>
<h3 id="using-the-jwt-middleware">Using the JWT middleware</h3>
<p>Using the middleware is very straightforward. We just pass it as a parameter to our routes definition.</p><pre><code class="language-js">...
api.GET("/jokes", authMiddleware(), JokeHandler)
api.POST("/jokes/like/:jokeID", authMiddleware(), LikeJoke)
...</code></pre>
<p>Our <code>main.go</code> file should look like this:</p><pre><code>package main
import (
"encoding/json"
"errors"
"fmt"
"log"
"net/http"
"os"
"strconv"
jwtmiddleware "github.com/auth0/go-jwt-middleware"
jwt "github.com/dgrijalva/jwt-go"
"github.com/gin-gonic/contrib/static"
"github.com/gin-gonic/gin"
)
type Response struct {
Message string `json:"message"`
}
type Jwks struct {
Keys []JSONWebKeys `json:"keys"`
}
type JSONWebKeys struct {
Kty string   `json:"kty"`
Kid string   `json:"kid"`
Use string   `json:"use"`
N   string   `json:"n"`
E   string   `json:"e"`
X5c []string `json:"x5c"`
}
type Joke struct {
ID    int    `json:"id" binding:"required"`
Likes int    `json:"likes"`
Joke  string `json:"joke" binding:"required"`
}
/** we'll create a list of jokes */
var jokes = []Joke{
Joke{1, 0, "Did you hear about the restaurant on the moon? Great food, no atmosphere."},
Joke{2, 0, "What do you call a fake noodle? An Impasta."},
Joke{3, 0, "How many apples grow on a tree? All of them."},
Joke{4, 0, "Want to hear a joke about paper? Nevermind it's tearable."},
Joke{5, 0, "I just watched a program about beavers. It was the best dam program I've ever seen."},
Joke{6, 0, "Why did the coffee file a police report? It got mugged."},
Joke{7, 0, "How does a penguin build it's house? Igloos it together."},
}
var jwtMiddleWare *jwtmiddleware.JWTMiddleware
func main() {
jwtMiddleware := jwtmiddleware.New(jwtmiddleware.Options{
ValidationKeyGetter: func(token *jwt.Token) (interface{}, error) {
aud := os.Getenv("AUTH0_API_AUDIENCE")
checkAudience := token.Claims.(jwt.MapClaims).VerifyAudience(aud, false)
if !checkAudience {
return token, errors.New("Invalid audience.")
}
// verify iss claim
iss := os.Getenv("AUTH0_DOMAIN")
checkIss := token.Claims.(jwt.MapClaims).VerifyIssuer(iss, false)
if !checkIss {
return token, errors.New("Invalid issuer.")
}
cert, err := getPemCert(token)
if err != nil {
log.Fatalf("could not get cert: %+v", err)
}
result, _ := jwt.ParseRSAPublicKeyFromPEM([]byte(cert))
return result, nil
},
SigningMethod: jwt.SigningMethodRS256,
})
jwtMiddleWare = jwtMiddleware
// Set the router as the default one shipped with Gin
router := gin.Default()
// Serve the frontend
router.Use(static.Serve("/", static.LocalFile("./views", true)))
api := router.Group("/api")
{
api.GET("/", func(c *gin.Context) {
c.JSON(http.StatusOK, gin.H{
"message": "pong",
})
})
api.GET("/jokes", authMiddleware(), JokeHandler)
api.POST("/jokes/like/:jokeID", authMiddleware(), LikeJoke)
}
// Start the app
router.Run(":3000")
}
func getPemCert(token *jwt.Token) (string, error) {
cert := ""
resp, err := http.Get(os.Getenv("AUTH0_DOMAIN") + ".well-known/jwks.json")
if err != nil {
return cert, err
}
defer resp.Body.Close()
var jwks = Jwks{}
err = json.NewDecoder(resp.Body).Decode(&amp;jwks)
if err != nil {
return cert, err
}
x5c := jwks.Keys[0].X5c
for k, v := range x5c {
if token.Header["kid"] == jwks.Keys[k].Kid {
cert = "-----BEGIN CERTIFICATE-----\n" + v + "\n-----END CERTIFICATE-----"
}
}
if cert == "" {
return cert, errors.New("unable to find appropriate key")
}
return cert, nil
}
// authMiddleware intercepts the requests, and check for a valid jwt token
func authMiddleware() gin.HandlerFunc {
return func(c *gin.Context) {
// Get the client secret key
err := jwtMiddleWare.CheckJWT(c.Writer, c.Request)
if err != nil {
// Token not found
fmt.Println(err)
c.Abort()
c.Writer.WriteHeader(http.StatusUnauthorized)
c.Writer.Write([]byte("Unauthorized"))
return
}
}
}
// JokeHandler returns a list of jokes available (in memory)
func JokeHandler(c *gin.Context) {
c.Header("Content-Type", "application/json")
c.JSON(http.StatusOK, jokes)
}
func LikeJoke(c *gin.Context) {
// Check joke ID is valid
if jokeid, err := strconv.Atoi(c.Param("jokeID")); err == nil {
// find joke and increment likes
for i := 0; i &lt; len(jokes); i++ {
if jokes[i].ID == jokeid {
jokes[i].Likes = jokes[i].Likes + 1
}
}
c.JSON(http.StatusOK, &amp;jokes)
} else {
// the jokes ID is invalid
c.AbortWithStatus(http.StatusNotFound)
}
}</code></pre>
<p>Let’s install the <code>jwtmiddleware</code> libraries:</p><pre><code class="language-bash">$ go get -u github.com/auth0/go-jwt-middleware
$ go get -u github.com/dgrijalva/jwt-go</code></pre>
<p>Let’s source our environment file, and restart our app server:</p><pre><code class="language-bash">$ source .env
$ go run main.go</code></pre>
<p>Now if we try accessing any of the endpoints, we’ll be faced with a <code>401 Unauthorized</code> error. That's because we need to send along a token with the request.</p>
<h3 id="login-with-auth0-and-react">Login with Auth0 and React</h3>
<p>Let’s implement a login system so that users can login or create accounts and get access to our jokes. We’ll add to our <code>app.jsx</code> file the following Auth0 credentials:</p>
<ul>
<li><code>AUTH0_CLIENT_ID</code></li>
<li><code>AUTH0_DOMAIN</code></li>
<li><code>AUTH0_CALLBACK_URL</code> - The URL of your app</li>
<li><code>AUTH0_API_AUDIENCE</code></li>
</ul>
<blockquote><em>You can find the <code>AUTH0_CLIENT_ID</code>, <code>AUTH0_DOMAIN</code>, and <code>AUTH0_API_AUDIENCE</code> data from your Auth0 <a href="https://manage.auth0.com/" rel="noopener">management dashboard</a>.</em></blockquote>
<p>We need to set a <code>callback</code> which Auth0 redirects to. Navigate to the Clients section in your dashboard. In the settings, let's set the callback to <code><a href="http://localhost:3000:" rel="noopener">http://localhost:3000</a></code><a href="http://localhost:3000:" rel="noopener">:</a></p>
<p>With the credentials in place, let’s update our React components.</p>
<h4 id="app-component">APP component</h4><pre><code class="language-js">const AUTH0_CLIENT_ID = "aIAOt9fkMZKrNsSsFqbKj5KTI0ObTDPP";
const AUTH0_DOMAIN = "hakaselabs.auth0.com";
const AUTH0_CALLBACK_URL = location.href;
const AUTH0_API_AUDIENCE = "golang-gin";
class App extends React.Component {
parseHash() {
this.auth0 = new auth0.WebAuth({
domain: AUTH0_DOMAIN,
clientID: AUTH0_CLIENT_ID
});
this.auth0.parseHash(window.location.hash, (err, authResult) =&gt; {
if (err) {
return console.log(err);
}
if (
authResult !== null &amp;&amp;
authResult.accessToken !== null &amp;&amp;
authResult.idToken !== null
) {
localStorage.setItem("access_token", authResult.accessToken);
localStorage.setItem("id_token", authResult.idToken);
localStorage.setItem(
"profile",
JSON.stringify(authResult.idTokenPayload)
);
window.location = window.location.href.substr(
0,
window.location.href.indexOf("#")
);
}
});
}
setup() {
$.ajaxSetup({
beforeSend: (r) =&gt; {
if (localStorage.getItem("access_token")) {
r.setRequestHeader(
"Authorization",
"Bearer " + localStorage.getItem("access_token")
);
}
}
});
}
setState() {
let idToken = localStorage.getItem("id_token");
if (idToken) {
this.loggedIn = true;
} else {
this.loggedIn = false;
}
}
componentWillMount() {
this.setup();
this.parseHash();
this.setState();
}
render() {
if (this.loggedIn) {
return &lt;LoggedIn /&gt;;
}
return &lt;Home /&gt;;
}
}</code></pre>
<p>We updated the App component with three component methods (<code>setup</code>, <code>parseHash</code>, and <code>setState</code>), and a lifecycle method <code>componentWillMount</code>. The <code>parseHash</code> method initializes the <code>auth0</code> <code>webAuth</code> client and parses the hash to a more readable format, saving them to localSt. To show the lock screen, capture and store the user token and add the correct authorization header to any requests to our API</p>
<h4 id="home-component">Home component</h4>
<p>Our Home component will be updated. We’ll add the functionality for the <code>authenticate</code> method, which will trigger the hosted lock screen to display and allow our users to login or signup.</p><pre><code class="language-js">class Home extends React.Component {
constructor(props) {
super(props);
this.authenticate = this.authenticate.bind(this);
}
authenticate() {
this.WebAuth = new auth0.WebAuth({
domain: AUTH0_DOMAIN,
clientID: AUTH0_CLIENT_ID,
scope: "openid profile",
audience: AUTH0_API_AUDIENCE,
responseType: "token id_token",
redirectUri: AUTH0_CALLBACK_URL
});
this.WebAuth.authorize();
}
render() {
return (
&lt;div className="container"&gt;
&lt;div className="row"&gt;
&lt;div className="col-xs-8 col-xs-offset-2 jumbotron text-center"&gt;
&lt;h1&gt;Jokeish&lt;/h1&gt;
&lt;p&gt;A load of Dad jokes XD&lt;/p&gt;
&lt;p&gt;Sign in to get access &lt;/p&gt;
&lt;a
onClick={this.authenticate}
className="btn btn-primary btn-lg btn-login btn-block"
&gt;
Sign In
&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
);
}
}</code></pre>
<h4 id="loggedin-component-1">LoggedIn component</h4>
<p>We will update the <code>LoggedIn</code> component to communicate with our API and pull all jokes. It will pass each joke as a <code>prop</code> to the <code>Joke</code> component, which renders a bootstrap panel. Let's write those:</p><pre><code class="language-js">class LoggedIn extends React.Component {
constructor(props) {
super(props);
this.state = {
jokes: []
};
this.serverRequest = this.serverRequest.bind(this);
this.logout = this.logout.bind(this);
}
logout() {
localStorage.removeItem("id_token");
localStorage.removeItem("access_token");
localStorage.removeItem("profile");
location.reload();
}
serverRequest() {
$.get("http://localhost:3000/api/jokes", res =&gt; {
this.setState({
jokes: res
});
});
}
componentDidMount() {
this.serverRequest();
}
render() {
return (
&lt;div className="container"&gt;
&lt;br /&gt;
&lt;span className="pull-right"&gt;
&lt;a onClick={this.logout}&gt;Log out&lt;/a&gt;
&lt;/span&gt;
&lt;h2&gt;Jokeish&lt;/h2&gt;
&lt;p&gt;Let's feed you with some funny Jokes!!!&lt;/p&gt;
&lt;div className="row"&gt;
&lt;div className="container"&gt;
{this.state.jokes.map(function(joke, i) {
return &lt;Joke key={i} joke={joke} /&gt;;
})}
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
);
}
}</code></pre>
<h4 id="joke-component">Joke component</h4>
<p>We’ll also update the <code>Joke</code> component to format each Joke item passed to it from the Parent compoent (<code>LoggedIn</code>). We’ll also add a <code>like</code> method, which will increment the likes of a Joke.</p><pre><code class="language-js">class Joke extends React.Component {
constructor(props) {
super(props);
this.state = {
liked: "",
jokes: []
};
this.like = this.like.bind(this);
this.serverRequest = this.serverRequest.bind(this);
}
like() {
let joke = this.props.joke;
this.serverRequest(joke);
}
serverRequest(joke) {
$.post(
"http://localhost:3000/api/jokes/like/" + joke.id,
{ like: 1 },
res =&gt; {
console.log("res... ", res);
this.setState({ liked: "Liked!", jokes: res });
this.props.jokes = res;
}
);
}
render() {
return (
&lt;div className="col-xs-4"&gt;
&lt;div className="panel panel-default"&gt;
&lt;div className="panel-heading"&gt;
#{this.props.joke.id}{" "}
&lt;span className="pull-right"&gt;{this.state.liked}&lt;/span&gt;
&lt;/div&gt;
&lt;div className="panel-body"&gt;{this.props.joke.joke}&lt;/div&gt;
&lt;div className="panel-footer"&gt;
{this.props.joke.likes} Likes &amp;nbsp;
&lt;a onClick={this.like} className="btn btn-default"&gt;
&lt;span className="glyphicon glyphicon-thumbs-up" /&gt;
&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
)
}
}</code></pre>
<h3 id="putting-it-all-together">Putting it all together</h3>
<p>With the UI and API complete, we can test our app. We’ll start off by booting our server <code>source .env &amp;&amp; go run main.go</code>, and then we’ll navigate to <code>http://localhost:3000</code> from any browser. You should see the <code>Home</code> component with a signin button. Clicking on the signin button will redirect to a hosted Lock page (create an account or login) to continue using the application.</p>
<p><strong>Home:</strong></p>
<p><strong>Auth0 Hosted Lock Screen:</strong></p>
<p><strong>LoggedIn App view:</strong></p>
<h3 id="conclusion">Conclusion</h3>
<p>Congrats! You have learned how to build an application and an API with Go and the Gin framework.</p>
<p>Did I miss something important? Let me know of it in the comments.</p>
<p>You can say Hi to me on Twitter <a href="https://twitter.com/codehakase" rel="noopener">@codehakase</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
