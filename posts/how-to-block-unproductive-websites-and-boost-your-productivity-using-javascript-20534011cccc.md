---
card: "https://cdn-media-1.freecodecamp.org/images/1*9-xBdZXdd_FT1X-DTTX75A.png"
tags: [Nodejs]
description: by Madhav Bahl
author: "Milad E. Fahmy"
title: "How to block unproductive websites and boost your productivity using JavaScript"
created: "2021-08-15T19:41:30+02:00"
modified: "2021-08-15T19:41:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nodejs tag-productivity tag-social-media tag-javascript tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to block unproductive websites and boost your productivity using JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*9-xBdZXdd_FT1X-DTTX75A.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*9-xBdZXdd_FT1X-DTTX75A.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*9-xBdZXdd_FT1X-DTTX75A.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*9-xBdZXdd_FT1X-DTTX75A.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*9-xBdZXdd_FT1X-DTTX75A.png" alt="How to block unproductive websites and boost your productivity using JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Madhav Bahl</p>
<h1 id="how-to-block-unproductive-websites-and-boost-your-productivity-using-javascript">How to block unproductive websites and boost your productivity using JavaScript</h1>
<figcaption>Time to get sh*t done :)</figcaption>
</figure>
<p>Tired of wasting your time on various unproductive websites? Why not make a script which would help you limit the time you spend on these websites?</p>
<p>Does this sound familiar…?</p>
<blockquote>Just another day, scrolling through my <strong>Social Media</strong> feed and watching memes. I found that it had been been 4 hours since I’d been sitting at the same position and “Doing Nothing”. I hated it! I had to do something about it. It came into my mind, why not make some script which would help me limit the amount of time I spend on these websites?</blockquote>
<figcaption>Stop scrolling through your feed, and do something xD (source: <a href="https://www.writerswrite.com/writingmemes/" rel="noopener" target="_blank" title="">https://www.writerswrite.com/writingmemes/</a>)</figcaption>
</figure>
<p>How about making a script which would block all these websites? The script allows you to use them only at some specific given hours of a day. Sounds legit! Let’s do it. :-)</p>
<p>Yes, I know there are many easy methods to block any website. Just download some Chrome plugin, or rather any software which would do this for us. Well yeah, quite easy! But come on, we are developers, we don’t do these things! When we need something, we develop scripts for it rather than using some random trick to do the work…right?!</p>
<p>If you want to download the script directly, you can do so from <a href="https://github.com/MadhavBahlMD/Control-Yourself/blob/master/JavaScript/blocker.js" rel="noopener">here</a>.</p>
<h3 id="let-s-get-started-">Let’s Get Started!</h3>
<p>Unlike my other tutorial articles, you won’t need any directory structure or a dev environment set up for this project. All you need is NodeJS installed on your system and a good text editor. You can make this script using any language of your choice which supports file handling. I chose JavaScript because I love it!</p>
<figcaption><strong>I ❤️ JavaScript!</strong> (source: <a href="https://brendaneich.com/2015/06/from-asm-js-to-webassembly/" rel="noopener" target="_blank" title="">https://brendaneich.com/2015/06/from-asm-js-to-webassembly/</a>)</figcaption>
</figure>
<h3 id="the-background-idea">The Background Idea</h3>
<p>The idea behind this blocker we are going to make is very simple. There is a file named <code>hosts</code>. We can add the URL of any website and the URL of a website to which we want to redirect the former website to. Something like this:</p><pre><code>127.0.0.1    www.facebook.com</code></pre>
<p>Now, whenever we try to open Facebook, it will be redirected to 127.0.0.1 (localhost) automatically. This will indirectly block the website.</p>
<p>The hosts file which I am talking about is present in <code>C:\Windows\System32\drivers\etc\hosts</code> if you use Windows. If you are a Mac or Linux user, the location of that file is: <code>/etc/hosts</code>.</p>
<h3 id="let-s-modify-the-file-">Let’s Modify The File…</h3>
<p>Before starting the code, let’s try to modify the file and see if it works. Please note that only the user with administrator rights can modify this file. If you are on Windows you can right click on that file and open as administrator. If you are using Linux, you can use the sudo command. I am using nano to open the file, you can use any other editor of your choice.</p><pre><code>sudo nano /etc/hosts</code></pre>
<p>After you type this command, it will ask you to enter your password. You can enter it and open your file. Let’s try it out :)</p>
<p>Alright, so we appended our “to be blocked” website in the hosts file, now let’s check it out whether it worked or not. To check it, go to any web browser, and go to that website.</p>
<figcaption>Yippee! It worked :3</figcaption>
</figure>
<p>Now that we’ve checked that our concept is correct, let’s code the blocker.</p>
<h3 id="1-setting-up-the-variables">1. Setting up the variables</h3>
<p>As I said earlier, there is no need of huge directory structuring or setting up of a dev environment. All you need to do is make a JavaScript file (say, <code>blocker.js</code>) and start coding.</p>
<p>First of all, we need to import <code>fs</code> (file system) Node module through which we will be making changes to our hosts file. You can read the complete documentation of fs <a href="https://nodejs.org/api/fs.html" rel="noopener">here</a>.</p><pre><code>const fs = require('fs');</code></pre>
<p>Now, we will need to initialize 3 variables:</p>
<ol>
<li><strong>filePath</strong> — To store the path of hosts file</li>
<li><strong>redirectPath </strong>— For the redirection path (here, localhost)</li>
<li><strong>websites </strong>— Array of websites to be blocked</li>
</ol>
<p>Also, we will be making a variable named <code>delay</code>. This variable will store the value of time duration (in milliseconds) after which our script will repeat itself. Basically the idea is to keep the script running all the time to check whether it is the time to block/unblock the websites. To keep it running we will be using <code>setInterval()</code> method in JavaScript. We can also use <code>while (true) {}</code> to make an infinite loop.</p>
<p>Right now we are keeping the time after which the function repeats itself constant (say, 10 seconds). But, this script can be made smarter by setting the value of delay equal to the time difference between current time and time at which the state of script (block/unblock) has to be changed. Doing this is much more easier than what it feels like — so I want you (the reader) to do it yourself, and drop me a <a href="http://www.madhavbahl.tech/" rel="noopener">mail</a>, I would love to hear from you ?</p><pre><code>const filePath = "/etc/hosts";const redirectPath = "127.0.0.1";let websites = [ "www.someRandomWebsite.com","anotherWebsite.com" ];let delay = 10000;</code></pre>
<p><strong>Note* </strong>If you are a Windows user, store this in the filePath variable: C:\Windows\System32\drivers\etc\hosts</p>
<h3 id="2-the-blocker-function">2. The blocker function</h3>
<p>We will now make a blocker function. We call it from the setInterval method to keep it running after every given time interval.</p><pre><code>let blocker = () =&gt; {    ....    ....};</code></pre>
<p><strong>Now we will fill the code inside our blocker function.</strong></p>
<h4 id="inside-blocker-getting-current-time">Inside blocker: Getting current time</h4>
<p>First of all we need to get the current time, and then check whether it is the time to block the website or unblock it.</p><pre><code>let date = new date();let hours = date.getHours();if(hours &gt;= 14 &amp;&amp; hours &lt; 18) {    console.log('Time to block websites');    ....    ....} else {    console.log('Time to unblock websites');    ....    ....}</code></pre>
<h4 id="inside-blocker-inside-if-the-if-condition-is-true">Inside blocker: Inside If — The If condition is true</h4>
<p>Now we need to read the hosts file and convert the fetched data to string (the <code>readFile()</code> function will return the buffer data which needs to be converted into string).</p>
<p>After reading the file, we need to check whether the each website and redirect path is present in the hosts file or not. If it is present, then we can ignore it. Otherwise, we need to append <code>redirectPath websiteURL</code> to it which will look something like this:</p><pre><code>127.0.0.1    www.someRandomWebsite</code></pre>
<p>To implement this, we will use a for loop. The loop will iterate through each URL in the websites array and check whether it exists inside the file. To do this, we will use <code>indexOf()</code> method of strings. If the value is greater than zero, i.e. the given website is present inside the hosts file, we can simply ignore. Otherwise, if the value is not greater than zero, we need to append the redirectPath and website URL (separated by space) to the file.</p><pre><code>fs.readFile(filePath, (err, data) =&gt; {    fileContents = data.toString();    for(let i=0;i&lt;websites.length;i++) {        let addWebsite = "\n" + redirectPath + " " + websites[i];        if (fileContents.indexOf(addWebsite) &lt; 0) {            console.log('Website not present in hosts file');            fs.appendFile(filePath, addWebsite, (err) =&gt; {                if (err)  return console.log(err);                console.log('File Updated Successfully');            });        } else {            console.log('Website is present');        }    }});</code></pre>
<h4 id="inside-blocker-inside-else-if-condition-is-false">Inside blocker: Inside Else — If condition is false</h4>
<p>If the condition is false, we need to check whether the websites in the list are there in the hosts file. If they are present we need to delete them.</p>
<p>For deleting, we will use a simple trick. We will read the file line by line. We create an empty string and check whether the current line contains any of the websites present in the list. If yes, we simply ignore it. Otherwise we will add that line to the string we initialized. After checking the last line, we will simply replace the current content of the file by this completeContent string.</p>
<p>The code to do so is very easy. First initialize an empty string (<code>completeContent</code>). Then read the file line by line. Follow the steps given in the code below. Then replace the file’s content by completeContent variable.</p><pre><code>// Initialize the empty stringlet completeContent = '';</code></pre><pre><code>// Read the file line by linefs.readFileSync(filePath)    .toString()    .split()    .forEach((line) =&gt; {        ....        ....        ....        // Do the below given procedure to update completeContent });</code></pre><pre><code>// Replace the file contents by `completeContent` variablefs.writeFile(filePath, completeContent, (err) =&gt; {    if (err) {        return console.log('Error!', err);    }});</code></pre>
<p>Now that we have access to each line, we can check whether this line contains any website by using a flag and a for loop. We set the flag to 1 (or true) and then run a loop to iterate through the list of websites. If the line contains the current website (we will check it using <code>string.indexOf(substring)</code> method), reset the flag to 0 and break the current loop. Outside the loop we check, if the flag is 1 (or true) we append the current line into the <code>completeContent</code> variable.</p>
<p><strong>Please also note </strong>that<strong> </strong>if the flag is 1, we also check that whether the current line is last line or not. If it is not the last line, we append the current line into the <code>completeContent</code> string along with a <code>"\n"</code> so that the next line will be appended into <code>completeContent</code> from a new line (or with a line break). Follow along the following code inside the forEach() of above code block.</p><pre><code>let flag = 1;for (let i=0; i&lt;websites.length; i++) {    if (line.indexOf(websites[i]) &gt;= 0) { // line contains website        flag = 0;        break;    }}</code></pre><pre><code>if(flag == 1) {    if (line === '')           completeContent += line;    else         completeContent += line + "\n";}</code></pre>
<h3 id="3-running-the-code-for-the-blocker-function">3. Running the code for the blocker function</h3>
<p>Here is the code for the blocker function just in case you were confused with the distributed code in section 2:</p>
<p>Now, for running this function continuously, we can go for <code>while (true) {}</code> as an infinite loop. Inside it we can give some time delay so that it doesn't occupy the processor continuously.</p>
<p>Or, a better option is to use the <code>setInterval()</code> function. This keeps repeating the blocker function after a specific interval of time. But, <code>setInterval()</code> will run for the first time after the specified delay. Therefore we will have to call the blocker function once before the setInterval function.</p><pre><code>blocker();setInterval(blocker, delay);</code></pre>
<h3 id="4-all-done-let-s-check-our-script">4. All Done! Let’s check our script</h3>
<p>Time to run our script. To run the script, open the present working directory in a terminal and type in the following command:</p><pre><code>sudo node blocker.js</code></pre>
<p>If you are a Windows user, you can open the command prompt as administrator, go to the project directory, and then run the command:</p><pre><code>node blocker.js</code></pre>
<p>Please note that just for checking purposes, I am blocking <code>facebook.com</code>. Here is the test run:</p>
<figcaption>Yuss! We Made It ❤</figcaption>
</figure>
<h3 id="5-the-final-step-">5. The Final Step...</h3>
<h4 id="for-mac-and-linux">For Mac and Linux</h4>
<p>You can schedule this script to run whenever someone starts the system using crontab. Cron is a time-based job scheduler in Unix-like computer operating systems. You can read more about cron <a href="https://opensource.com/article/17/11/how-use-cron-linux" rel="noopener">here</a>.</p>
<p>So we will be adding our command through which we run the script (<code>sudo node blocker.js</code>) in the cron table. Doing this is very simple: open the terminal using <code>ctrl+alt+t</code>, then open crontab using <code>sudo crontab -e</code>. This command will open the cron table.</p>
<p><strong>Note </strong>that<strong> </strong>we used <code>sudo crontab</code>, not <code>crontab</code>. This is will enable us to modify the cron table.</p>
<p>Once you have it open, add this line at the end (replace <code>path-to-script</code> with the path of your project directory):</p><pre><code>@reboot node /path-to-script/blocker.js</code></pre>
<p>That’s it! Doing this will run your script every time system reboots.</p>
<h4 id="for-windows">For Windows</h4>
<p>The script can be scheduled to run every time the system starts in Windows also. <a href="https://www.howtogeek.com/138159/how-to-enable-programs-and-custom-scripts-to-run-at-boot/" rel="noopener">Here</a> is a very good article which tells how to do so.</p>
<h3 id="where-to-go-from-here">Where to go from here?</h3>
<p>Are you an open source enthusiast? Want to contribute to this project? <br>I am starting a new Open Source project named<strong> “Control-Yourself”</strong> which will be a desktop application made using <a href="https://electronjs.org/" rel="noopener">Electron</a>. The features will include:</p>
<ul>
<li>taking inputs from users about which times they want to block which websites</li>
<li>tracking the time a user spends watching social media websites</li>
<li>a Pomodoro timer</li>
<li>and a todo list application with daily progress report of productivity.</li>
</ul>
<p>Check out the <a href="https://github.com/MadhavBahlMD/Control-Yourself" rel="noopener">repository</a>, and add a comment “interested” on the issue you are interested to work on.</p>
<p>Now, let me give you the complete code with proper comments which will help you understand the code:</p>
<p><strong>Complete Code (blocker.js)</strong></p>
<h3 id="that-s-it">That’s it</h3>
<p>Have you found the article helpful?</p>
<p><a href="http://madhavbahl.tech/subscribe/" rel="noopener">Subscribe to TheLeanProgrammer</a> to be the first one to get notified from me for future updates.</p>
<p>Feel free to reach out to me anytime if you want to discuss something :D</p>
<p>I would be more than happy if you send your feedback or suggestions, or if you ask questions. Moreover, I love to make new friends — so just drop me a mail.</p>
<blockquote>Thanks a lot for reading till end. You can contact me in case if you need any assistance:<br>Email: madhavbahl10[at]gmail[dot]com<br>Web: <a href="http://madhavbahl.ml/" rel="noopener">http://madhavbahl.tech/</a><br>Github: <a href="https://github.com/MadhavBahlMD" rel="noopener">https://github.com/MadhavBahlMD</a><br>LinkedIn: <a href="https://www.linkedin.com/in/madhavbahl/" rel="noopener">https://www.linkedin.com/in/madhavba<em>hl/</em></a></blockquote>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
