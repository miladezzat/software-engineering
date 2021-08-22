---
card: "/images/default.jpg"
tags: [Full Stack]
description: "This tutorial will show you how to convert a static website t"
author: "Milad E. Fahmy"
title: "How to Develop and Deploy Your First Full-Stack Web App Using A Static Site and Node.js"
created: "2021-08-16T10:04:50+02:00"
modified: "2021-08-16T10:04:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-full-stack tag-node tag-javascript tag-web-applications tag-web-development tag-coding ">
<header class="post-full-header">
<h1 class="post-full-title">How to Develop and Deploy Your First Full-Stack Web App Using A Static Site and Node.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/07/Develop-and-Deploy-Node.js-App-FreeCodeCamp-Cover-1.jpg 300w,
/news/content/images/size/w600/2020/07/Develop-and-Deploy-Node.js-App-FreeCodeCamp-Cover-1.jpg 600w,
/news/content/images/size/w1000/2020/07/Develop-and-Deploy-Node.js-App-FreeCodeCamp-Cover-1.jpg 1000w,
/news/content/images/size/w2000/2020/07/Develop-and-Deploy-Node.js-App-FreeCodeCamp-Cover-1.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/07/Develop-and-Deploy-Node.js-App-FreeCodeCamp-Cover-1.jpg" alt="How to Develop and Deploy Your First Full-Stack Web App Using A Static Site and Node.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Our tech stack will be similar to the popular MEAN/MERN stack (MongoDB, Express, Angular or React, and NodeJS). But instead of using Angular or React, we will use a templating engine called <a href="https://ejs.co">EJS</a> (Embedded JavaScript.)</p>
<p>Other popular templating engines include Handlebars, Pug, and Nunjucks.</p>
<p>Afterwards, we will deploy our Node.js web app to DigitalOcean and cover domain names, SSL, reverse proxies, and process managers.</p>
<p>Learning a templating language can be easier than a JS framework. You can just write HTML, and it lets you insert the same piece of code in multiple locations (called partials) or pass server-side variables to be displayed on the front-end (such as a username).</p>
<h2 id="tableofcontents">Table of Contents</h2>
<ul>
<li><a href="#developingyourfirstnodejswebapp">Developing Your First Node.js Web App</a>
<ul>
<li><a href="#installingnodejs">Installing Node.js</a></li>
<li><a href="#testingtheinstall">Testing The Install</a></li>
<li><a href="#creatingyourfirstserver">Creating Your First Server</a></li>
<li><a href="#nextsteps">Next Steps</a></li>
<li><a href="#templatingbasics">Templating Basics</a></li>
<li><a href="#passingserversidedatatothefrontend">Passing Server-Side Data to the Front-End</a></li>
</ul>
</li>
<li><a href="#deployingyourfirstnodejswebapp">Deploying Your First Node.js Web App</a>
<ul>
<li><a href="#settingupdigitalocean">Setting Up DigitalOcean</a></li>
<li><a href="#connectingtoyourdroplet">Connecting To Your Droplet</a></li>
<li><a href="#deployingyournodejswebapp">Deploying Your Node.js Web App</a></li>
<li><a href="#configuringyourdomainname">Configuring Your Domain Name</a></li>
<li><a href="#removingtheportnumberfromyoururl">Removing the Port Number From Your URL</a></li>
<li><a href="#runningtheapponbootsettingupaprocessmanager">Running the App on Boot (Setting Up A Process Manager)</a></li>
</ul>
</li>
</ul>
<h2 id="developingyourfirstnodejswebapp">Developing Your First Node.js Web App</h2>
<h3 id="installingnodejs">Installing Node.js</h3>
<p>First, make sure you’ve installed Node.js on your local machine or VPS hosting provider. If you haven’t installed it, go to the <a href="https://nodejs.org/en/">Node.js website</a> to do so.</p>
<p>With Node.js, you can write server-side code using a special form of JavaScript so you can use an already familiar language.</p>
<p>The Node.js installer comes bundled with the package manager NPM. NPM is a repository for Node Modules, reusable pieces of code that can extend the functionality of your server. It’s similar to a plugin repository, and Node Modules can be thought of as code snippets or libraries (depending on how large they are).</p>
<p><em>Windows Users:</em> Need to add Node and NPM to their PATH so they can call them easily on the command line. For more in-depth instructions, see my <a href="https://louisefindlay.com/blog/getting-to-grips-with-databases-part1">guide</a> here.</p>
<h3 id="testingtheinstall">Testing the Install</h3>
<p>To test that the installation has worked correctly, open a terminal window, and type <code>node -v</code>  and  <code>npm -v</code>. If the resulting message starts with a v and is followed by some numbers (indicating a version), then the installation has been successful. Now you’re ready to create your first server.</p>
<h3 id="creatingyourfirstserver">Creating Your First Server</h3>
<p>Once you have created a static website, the first step in creating a Node.js app is to create an Express web server.</p>
<p>First, move all your website’s static files (HTML, CSS, JS, images, etc.) into a folder called public and create a file called server.js in the root directory of your website folder. In the server.js file type:</p>
<pre><code class="language-js">// Load Node modules
var express = require('express');
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// Port website will run on
app.listen(8080);
</code></pre>
<p>Then in the terminal, type: <code>npm init</code>. Press enter to accept the default parameters for all the following options, but make sure the entry point is server.js.</p>
<p>Finally, type: <code>npm start</code> and then go to the IP Address of your VPS host, or localhost:8080/index.html (or the name of one of your webpages) in the browser. The Express server you just created should now be serving your website’s static files.</p>
<h3 id="nextsteps">Next Steps</h3>
<p>Moving forward, we will discuss how to convert your static files to dynamic ones using the EJS templating engine. Then we'll look at how to copy repeated code using partials and inject server-side variables to the front-end.</p>
<h3 id="templatingbasics">Templating Basics</h3>
<h4 id="installingejs">Installing EJS</h4>
<p>The first step to use EJS is to install it. A simple <code>npm install ejs --save</code> will do the trick. The <code>--save</code> parameter saves the module to the <code>package.json</code> file.</p>
<p>This makes it so anyone who clones the git repo (or otherwise downloads the site's files) can install all the required Node modules for the project (called dependencies) using the <code>npm install</code> command instead. Then they don't have to type <code>npm install (module name)</code> for however many modules they need.</p>
<h4 id="convertingstaticpagestoejsfiles">Converting Static Pages to EJS Files</h4>
<p>Next, you need to convert your static HTML files into dynamic EJS ones and set up your folder structure in the way EJS expects.</p>
<p>In the root directory of your website, create a folder called views. Inside that folder create two sub-folders called pages and partials. Move all your HTML files into the pages sub-folder and rename the .html file extensions to .ejs.</p>
<p>Your folder structure should look similar to the picture below.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/07/nodejs-file-structure.png" alt="nodejs-file-structure"></p>
<h4 id="reusingcodecreatingyourfirstejspartial">Reusing Code - Creating Your First EJS Partial</h4>
<p>When creating static sites, there's often code that you repeat on every page such as the head (where the meta tags are located), header, and footer sections.</p>
<p>It's inconvenient to change them on every page (especially on larger sites) if alterations are needed. But if you use EJS partials then you won't have to. Editing one template (partial) file will update the code on every page that the file is included in.</p>
<p>We'll take a typical part of a website to be templated, the header, as an example. Create a new file called header.ejs in the partials folder. Copy and paste all the code between the <code>&lt;header&gt;&lt;/header&gt;</code> tags on one of your EJS pages into it.</p>
<p>Finally, on all pages with a header delete the code between the <code>&lt;header&gt;&lt;/header&gt;</code> tags (the same code you copied to the header.ejs partial file) and replace it with <code>&lt;% include('../partials/header') %&gt;</code>. Now, you've created your first EJS partial. Repeat the process for any other repetitive pieces of code such as the head and footer sections.</p>
<p><em>Small Tip:</em> If you find it hard to differentiate between your pages and partials since they have the same .ejs file extension, it can be helpful to put an underscore _ in front of the names of partials (so _ header.ejs). This is a naming convention that some developers use that can be helpful.</p>
<h4 id="renderingejspages">Rendering EJS Pages</h4>
<p>Now we get to the exciting part: making the server render the EJS pages and partials so you can see them on the front-end.</p>
<p><strong>server.js Example</strong></p>
<pre><code class="language-js">// Load Node modules
var express = require('express');
const ejs = require('ejs');
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Port website will run on
app.listen(8080);
// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
res.render('pages/index');
});
</code></pre>
<p>First, we need to add the EJS Node module to our server. So, in the <code>server.js</code> file (see example above), add <code>const ejs = require('ejs');</code>.</p>
<p>Second, we need to tell our Express server to use EJS so add <code>app.set('view engine', 'ejs');</code>.</p>
<p>Now, we need to configure routes. Routes tell the server what to do when a user goes to a certain URL in your website such as <code>http://testapp.com/login</code>.</p>
<p>There are two types of routes, GET and POST. GET routes display pages and POST routes upload data from the front-end to the server (usually via a form) typically before a page is rendered and the uploaded data is somehow used.</p>
<p>Since we only want to display our EJS pages, we will just use GET routes. Add them after the <code>app.listen(8080)</code> line in <code>server.js</code>. For the index page, the route will be:</p>
<pre><code class="language-js">// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
res.render('pages/index');
});
</code></pre>
<p>The '/' specifies the URL of the website the code will activate on, the <code>req</code> stands for request and <code>res</code> for response. So, the response returned when going to <code>http://testapp.com</code> is rendering (displaying to the browser) the pages/index.ejs page. Add similar routes for your other EJS pages.</p>
<h3 id="passingserversidedatatothefrontend">Passing Server-Side Data to the Frontend</h3>
<p>The main attraction of templating, apart from reusing code, is that you can pass server-side variables to the front-end. Either a single variable like the current user's username, or an array, like the details of every registered user.</p>
<p>However, the real strength of passing server-side variables becomes apparent when using APIs or databases.</p>
<p>For a basic example, the below code will display "Louise" in the h2 tag of the index page:</p>
<p><strong>server.js</strong></p>
<pre><code class="language-js">// Route Route
app.get('/', function (req, res) {
var name = "Louise";
// Render index page
res.render('pages/index', {
// EJS variable and server-side variable
name: name
});
});
</code></pre>
<p>The first <code>name</code> is the name of the EJS variable (the name for displaying it on the front-end), and the second is the variable that contains the data you want to send. (They don't have to be identical.)</p>
<p><strong>index.ejs</strong></p>
<pre><code class="language-html">&lt;h2&gt;My name is &lt;%= name %&gt;&lt;/h2&gt;
</code></pre>
<p>For a simple array, you can use this example instead, which will create a p tag for every name in the listnames variable:</p>
<p><strong>server.js</strong></p>
<pre><code class="language-js">// Route Route
app.get('/', function (req, res) {
var listnames = ["Louise", "Sadie", "Erik", "Raph", "Gina"];
// Render index page
res.render('pages/index', {
// EJS variable and server-side variable
listnames: listnames
});
});
</code></pre>
<p><strong>index.ejs</strong></p>
<pre><code class="language-html">&lt;% listnames.forEach(function(name) { %&gt;
&lt;p&gt;&lt;%= name %&gt;&lt;/p&gt;
&lt;% }); %&gt;
</code></pre>
<p>Congratulations. You’ve finished developing your first Node.js web app. In the next part, we will see how we can make it live (deploy it) on the web so you can show it off.</p>
<p>There are many hosting platforms you can use to deploy your Node.js web apps such as <a href="/news/modules/node-js">Section</a>, <a href="https://www.heroku.com">Heroku</a>, <a href="https://www.vultr.com">Vultr</a>, <a href="https://www.linode.com">Linode</a>, <a href="https://console.cloud.google.com">Google Cloud Platform</a> and <a href="https://aws.amazon.com">Amazon Web Services</a>.</p>
<p>In this walk-through, we will be using <a href="https://www.digitalocean.com">DigitalOcean</a> to deploy our Node.js app.</p>
<h3 id="settingupdigitalocean">Setting up DigitalOcean</h3>
<p>First, create an account on the DigitalOcean platform. There are discount codes available to add free credit to your account such as the code available in the Github Student Developer Pack. Be aware that you can only redeem one code per account.</p>
<p>Second, you need to create a droplet. A droplet is a VPS (Virtual Private Server.) It’s similar to a Linux VM which is hosted on a server farm somewhere.</p>
<p>Once you’ve logged into your account, go to droplets under the Manage heading and click create and then droplets.</p>
<p>You can leave most of the settings as the default but change the plan to the basic $5 a month which contains enough resources for your app. You can scale this up later if needed.</p>
<p>Also, choose the datacenter closest to the target audience of your app and change the authentication to password. While password authentication is less secure (SSH Keys is recommended), it’s much easier to set up. So, for demonstration purposes, we’ll use this method.</p>
<p>All that’s left now is to pick a name (hostname) and click Create Droplet.</p>
<h3 id="connectingtoyourdroplet">Connecting to your Droplet</h3>
<p>Shortly afterward, you’ll receive an email containing the username and password of your droplet which you’ll use to login.</p>
<p>Back on the DigitalOcean website, under droplets, click the name of your newly created droplet, and then click on Console. This will open a new tab that will let you control your droplet.</p>
<p>Alternatively, you can use any SSH client with the IP address and user credentials contained in the email.</p>
<p>On your first login, since you used password authentication, it will prompt you to set a new password. A great way to generate secure passwords and store them is a password manager like <a href="https://www.lastpass.com">LastPass</a>.</p>
<h3 id="deployingyournodejswebapp">Deploying Your Node.js Web App</h3>
<p>First, you’ll need to copy the code for your web app to your droplet. If you’re using source control such as <a href="/news/engineering-education/beginner-guide-to-git/">Git</a>, then it’s as simple as installing git using <code>apt-get install git -y</code> and then using the git clone command <code>git clone (link to your repository)</code>, adding the link to your repository at the end.</p>
<p>Second, you’ll need to install Node. Type:</p>
<pre><code class="language-bash">curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
</code></pre>
<p>Third, you'll need to navigate to the folder containing your web app. Type ls and then enter to view all the folders in your current working directory (location). This will look like the image below:</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/07/website-folders.png" alt="website-folders"></p>
<p>Type cd and then the name of the folder that appears. Type ls again and you should see the files in your web app's root directory.</p>
<p>Next, you’ll need to install the node modules (dependencies) for your web app. If you installed all your modules with <code>-save</code> at the end, which saves them to the package.json file, then just type <code>npm install</code> and press enter.</p>
<p>If not, when you run <code>npm start</code> an error will appear with module not found. Type <code>npm install (module name)</code> and press enter and then try running <code>npm start</code> again. Repeat the process until the error disappears.</p>
<p>If you need to install MongoDB (if you’ve created a MongoDB database), then follow these <a href="https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/#install-mongodb-community-edition">instructions</a>.</p>
<p>Finally, type <code>npm start</code> to start your web app. Now that your web app is running, in a new browser tab, type the IP Address of your droplet (found in the email that DigitalOcean sent when you created the droplet) followed by a colon and the port your app runs on. For example, <code>167.172.54.51:8080</code>.</p>
<p>If you’re using an Express web server (which if you followed my getting started with <a href="https://www.section.io/engineering-education/static-site-dynamic-nodejs-web-app/">Node.js guide</a>, you did), you’ll find the port number located in the <code>app.listen()</code> line inside the server.js file. For example, <code>app.listen(8080)</code> which is a common port used.</p>
<p>Congratulations, your first Node.js web app should be displayed in your web browser which is running on your DigitalOcean droplet.</p>
<h3 id="configuringyourdomainname">Configuring Your Domain Name</h3>
<p>You typed in an IP Address and port number to view your web app but, wouldn't you prefer a custom domain name like yourapp.com?</p>
<p>Assuming you’ve already bought a domain, the first step is to add a DNS record so your domain name will resolve to the IP address of your DigitalOcean droplet. A DNS record tells your browser what to do when they load your domain. In this case, it should go to the IP address of your droplet.</p>
<p>If you’ve not bought a domain, domain registrars like <a href="https://www.namecheap.com">Namecheap</a> sell domain names and often other services such as email and static/CMS hosting, though there are benefits to going with a dedicated hosting and email provider.</p>
<p><a href="https://www.netlify.com">Netlify</a> offers hosting for static sites and <a href="https://www.siteground.co.uk">SiteGround</a> for CMS websites. Office365 and GSuite are the kings of custom email providers. See my guide for <a href="https://www.section.io/engineering-education/creating-professional-email/">Setting Up a Professional Email</a> to read a comparison of Office365 and GSuite.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/07/advanced-dns.png" alt="advanced-dns"></p>
<p>Login to your domain registrar and go to the advanced DNS settings of your domain. For example, on Namecheap, it’s the Advanced DNS tab on the Manage Domain screen.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/07/dns-records.png" alt="dns-records"></p>
<p>You want to add a new record as follows: the type should be set to A, the host should be either @ or blank (depending on your provider), and the value should be the IP Address of your droplet. Repeat the process for the host www which will do the same for the www version of your domain.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/07/dns-check.png" alt="dns-check"></p>
<p>It can take up to 24-48hrs for the changes to process, but it’s usually between 15 minutes to an hour. A quick way to check when it’s done is to go to <a href="dnschecker.org">DNSChecker</a>. Type in your domain name and make sure the type is set to A. When the result comes back as the IP Address of your droplet, then you’ve connected your domain successfully.</p>
<p>The final test is to type your domain name followed by a colon and then the port number (e.g. <code>yourdomain.com:8080</code>). You should now see your web app loading.</p>
<h3 id="removingtheportnumberfromyoururl">Removing the Port Number from your URL</h3>
<p>Now that you’ve got a cool domain name hooked up to your web app, you’ll probably want to remove that pesky port number.</p>
<p>We can do this by setting up what’s called a reverse proxy. A reverse proxy will tell your droplet when a user goes to yourdomain.com, it should serve the site at yourdomain.com:8080. We will use the popular reverse proxy <a href="https://www.nginx.com">Nginx</a> to do so.</p>
<p>The first step is to install Nginx. Type the following to update your package list (so you can get the latest version) and install Nginx:</p>
<pre><code class="language-bash">sudo apt-get update
sudo apt-get install nginx
</code></pre>
<p>Since DigitalOcean droplets are created with a firewall enabled, you’ll have to allow Nginx through it so it can work properly. <code>sudo ufw allow 'Nginx Full'</code> will do this.</p>
<p>To check the installation has gone smoothly, go to the http version of your domain name e.g. <code>http://yourdomain.com</code>. If you see a Welcome to Nginx landing page, then it’s been successful.</p>
<p>The second step is to secure your reverse proxy. Currently going to <code>https://yourdomain.com</code> won’t work. That’s because we haven’t configured SSL yet, and we need to install a package called Certbot to do so.</p>
<p>To install Certbot, type the following to ensure you get the latest version:</p>
<pre><code class="language-bash">sudo add-apt-repository ppa:certbot/certbot
sudo apt-get install python-certbot-nginx
</code></pre>
<p>Next, you need to add your domain to Nginx so Certbot can generate a certificate to the correct domain. Open the configuration file using <code>sudo nano /etc/nginx/sites-available/default</code> and replace the underscores in the server_name line to your domain. For example, <code>server_name yourdomain.com www.yourdomain.com;</code>. Save the file and exit by typing CTRL+x, y and then enter.</p>
<p>To test that there are no errors in the file, type <code>sudo nginx -t</code> and if there’s none, type <code>sudo systemctl reload nginx</code> to reload Nginx so it will use the updated configuration.</p>
<p>Now we just need to generate the SSL certificate. <code>sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com</code> will start the process. You should choose option 2 for the redirect process because it will forward anyone trying to access the insecure version of your site (http) to the secure (https) version instead.</p>
<p>To test this, go to <code>https://yourdomain.com</code> and you should see the Nginx Welcome screen again.</p>
<p>Finally, we're onto the last step, adding the Nginx configuration for your web app. For demonstration purposes, we'll just modify the default one instead of creating a new one specifically for your web app. If you need to host several web apps on one droplet, you'd need to add a new configuration for each site.</p>
<p>Type: <code>sudo nano /etc/nginx/sites-available/default</code> to edit the default configuration file.</p>
<p>You need to change the <code>server_name</code> parameter to the name of your domain. For example: yourdomain.com. Under location /, <code>proxy_pass</code> should be changed to <code>http://localhost:(port name)</code>. The <code>ssl_certificate_key</code> should be modified: <code>/etc/letsencrypt/live/(domain name)/privkey.pem</code>. Finally, add the code block below to the end of the file and then type CTRL+X, and then y to exit.</p>
<pre><code class="language-bash">server {
if ($host = auroraspotter.space) {
return 301 https://$host$request_uri;
} # managed by Certbot
listen 80 default_server;
listen [::]:80 default_server;
server_name auroraspotter.space;
return 404; # managed by Certbot
</code></pre>
<p>Here's a complete example of what it should look like. <strong>Note:</strong> the <code>server_name</code> should be the name of your domain.</p>
<pre><code class="language-bash">server {
root /var/www/html;
index index.html index.htm index.nginx-debian.html;
server_name auroraspotter.space;
location / {
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-NginX-Proxy true;
proxy_pass http://localhost:8080;
proxy_set_header Host $http_host;
proxy_cache_bypass $http_upgrade;
proxy_redirect off;
}
listen [::]:443 ssl ipv6only=on; # managed by Certbot
listen 443 ssl; # managed by Certbot
ssl_certificate /etc/letsencrypt/live/auroraspotter.space/fullchain.pem; # managed by Certbot
ssl_certificate_key /etc/letsencrypt/live/auroraspotter.space/privkey.pem; # managed by Certbot
include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}
server {
if ($host = auroraspotter.space) {
return 301 https://$host$request_uri;
} # managed by Certbot
listen 80 default_server;
listen [::]:80 default_server;
server_name auroraspotter.space;
return 404; # managed by Certbot
</code></pre>
<p>To test that there are no errors in the file, type  <code>sudo nginx -t</code>. If there’s none, type  <code>sudo systemctl reload nginx</code> to reload Nginx so it will use the updated configuration.</p>
<p>Finally, you should be able to go to yourdomain.com and your web app will be running.</p>
<h3 id="runningtheapponbootsettingupaprocessmanager">Running the App on Boot (Setting up a Process Manager)</h3>
<p>You've hooked your domain name up to your droplet and configured Nginx to serve your web app, but how do you keep it running all the time especially after restarting your droplet?</p>
<p>That's where a process manager comes in. It will manage your Node.js web app, log any errors, and start/stop it as needed. We will be using the process manager called PM2.</p>
<p>The first step is to install PM2 using <code>sudo npm install pm2@latest -g</code>. Next, to run it on boot, run <code>pm2 startup systemd</code>. It should say to setup the startup script, copy and paste the following command which will be <code>sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u (username) --hp /home/(username)</code>.</p>
<p>If you're using the default login that DigitalOcean provided, this will be root. Type this into the terminal and press enter. If it says command successfully executed (like below) then it has worked.</p>
<pre><code class="language-bash">[ 'systemctl enable pm2-root' ]
[PM2] Writing init configuration in /etc/systemd/system/pm2-root.service
[PM2] Making script booting at startup...
[PM2] [-] Executing: systemctl enable pm2-root...
[PM2] [v] Command successfully executed.
</code></pre>
<p>Using the cd command, navigate to the folder of your web app. Then type <code>pm2 start server.js</code>. This will start the web app using pm2. Afterward, type <code>pm2 save</code> which will save it to be started on boot. If it says successfully saved, then it's been saved correctly.</p>
<pre><code class="language-bash">[PM2] Saving current process list...
[PM2] Successfully saved in /root/.pm2/dump.pm2
</code></pre>
<p>Finally, type <code>sudo systemctl start pm2-(username)</code>.</p>
<p>Try restarting your droplet by typing reboot and after a few minutes, go to <code>yourdomain.com</code>. Your web app should be up and running like normal.</p>
<p>If you're looking to build on the skills you’ve learned in this tutorial, I suggest using EJS templating to work with APIs and <a href="https://louisefindlay.com/blog/getting-to-grips-with-databases-part1">databases</a>.</p>
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
