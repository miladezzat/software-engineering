---
card: "/images/default.jpg"
tags: [Technical Writing]
description: "Recently, I wrote my first technical book – yes, I finally fi"
author: "Milad E. Fahmy"
title: "How to Write Your First Technical Book: Tools, Techniques, and Resources for First-time Developer Authors"
created: "2021-08-20T13:32:55+02:00"
modified: "2021-08-20T13:32:55+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-technical-writing tag-books tag-writing tag-writing-tips ">
<header class="post-full-header">
<h1 class="post-full-title">How to Write Your First Technical Book: Tools, Techniques, and Resources for First-time Developer Authors</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/09/writing-cover.jpg 300w,
/news/content/images/size/w600/2020/09/writing-cover.jpg 600w,
/news/content/images/size/w1000/2020/09/writing-cover.jpg 1000w,
/news/content/images/size/w2000/2020/09/writing-cover.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/09/writing-cover.jpg" alt="How to Write Your First Technical Book: Tools, Techniques, and Resources for First-time Developer Authors">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
This project was on my list for a long time. And now that I've finally completed it, I'd like to share my experience with everyone.</p>
<p>In this post, I tried to document my complete journey of writing the book. I discuss everything motivation and hurdles to tools, techniques and resources.</p>
<p>My book focuses on the <a href="https://schadokar.dev/ebooks/">Hyperledger Composer Blockchain</a> tool. It is completely free and right now is only available in PDF format.</p>
<p>All these points are equally helpful for technical blog writing. So let's get started and dive into what I learned.</p>
<h1 id="motivation">Motivation</h1>
<p>I have been writing technical articles and tutorials since late 2018. By now I am quite comfortable with the process of writing an article or a tutorial. I understand how to approach the article and which tools I should use.</p>
<p>But when it comes to book writing – and especially a technical book – the arena is quite different.</p>
<p>My motivation was curiosity. I wondered how authors write books. What is their thought process? What tools do they use? And of course, how does it feel to write a book? ?</p>
<p>I am a Software Engineer and I have been working on Blockchain since 2018. I have learned about different blockchains like Ethereum and Hyperledger Fabric. I have also used many tools like <a href="https://www.trufflesuite.com/">truffle</a>, <a href="https://remix.ethereum.org/">remix</a> and <a href="https://hyperledger.github.io/composer/">hyperledger composer</a>.</p>
<p>There were a few different things I wanted to write about, like <strong>Ethereum</strong> or <strong>Hyperledger Fabric</strong>.</p>
<p>But since it was my first book, these topics were not ideal for me. They would've required a lot more time and effort than I could give. So, I picked a simple one: Hyperledger Composer.</p>
<h1 id="firsthurdle">First Hurdle</h1>
<p>Before getting started, I wondered which tool or editor I should use to write the book.</p>
<p>Should I write in MS Word, Google Docs, or use something else?<br>
The major issue was how to format code snippets correctly. These editors are not designed for technical writing.</p>
<p>There are different work arounds to add code, but it would require additional formatting.</p>
<p>I read lots of articles about <strong>what good tools are available for technical book writing.</strong> I tried many of them, but I wasn't happy with any of them. I wasted a lot of time finding the perfect tool.</p>
<p>In the end, I realized that editors only ease the writing process and make managing the book simpler. But what really matters is the content. So, I stopped searching for the perfect editor and went to the basics.</p>
<h2 id="thebasicsvscode">The basics: VS Code</h2>
<p>I used my favourite code editor to write the book. Yes, <strong>VS Code</strong> ?.</p>
<p>After spending days searching around on the Internet, not a single article suggested that you need any specific tool or editor to write a technical book. VS Code or Atom would be more than enough.</p>
<p>I wrote the whole book in <strong>VS Code</strong> in my favourite markdown format. To make my writing easier, I used a couple of markdown plugins like <strong>Markdown All in One</strong> and <strong>Markdown Preview Enhanced</strong>.</p>
<p>The first plugin helps you write markdown while the second helps in preview mode. It shows how the markdown will look and behave after converting it into HTML or other formats.</p>
<p><strong>Markdown All in One</strong> also has a preview mode, but <strong>Markdown Preview Enhanced</strong> has multiple themes and options to export the markdown file in HTML, PDF, and other readable formats like epub or Mobi.</p>
<p>Just a heads up – those other formats require that you install <strong>Pandoc</strong> on your machine.</p>
<blockquote>
<p>I am a Windows User. For Mac Users, I found there are many great editors available like <a href="https://bear.app/">bear</a>, <a href="https://ulysses.app/">ulysses</a> and many others.</p>
</blockquote>
<p>Recently, I discovered that there are many markdown editors available on <strong>Windows</strong> and <strong>MacOS</strong> which you can use for book writing. Check out <a href="https://www.notion.so/">Notion</a>, <a href="https://typora.io/">Typora</a>, <a href="https://ia.net/writer">iA Writer</a>, and <a href="https://simplenote.com/">SimpleNote</a>.</p>
<p>Bottom line <strong>Don't waste too much time finding the perfect editor</strong>. Just start writing in your editor of choice. With time you'll figure it out.</p>
<h1 id="secondhurdle">Second Hurdle</h1>
<p>Then I started asking myself, from where should I start writing? How should I write? How should I approach it?</p>
<p>In short, I wanted to know how exactly I should write this book so that the reader would get the most out of it.</p>
<p>These questions made me scratch my head a lot. In the beginning, I changed my approach 4 or 5 times.</p>
<p>At this point, I suggest spending some time to really ponder your approach. Because once you're in the middle of the book, it is not going to be an easy task to change it.</p>
<h3 id="askthequestions">Ask the questions</h3>
<p>I asked myself these questions about the book and noted my thoughts down.</p>
<ol>
<li>Who is my target audience? Are they beginner, intermediate, or expert?</li>
<li>Do they need some prior knowledge of the subject?</li>
<li>How should I organize the book?</li>
<li>How should I name the files or chapters so it's easy to find each topic?</li>
<li>How should I track my progress?</li>
<li>How should I maintain the versions of the chapters and drafts of the book? There will be a number of occasions that last edit was actually much better than the current version.</li>
</ol>
<p>These are a few basic questions which I asked, and they were helpful.</p>
<h2 id="myapproach">My approach</h2>
<p>I'll now describe the approach I took to writing this book.</p>
<h3 id="createatodolist">Create a todo list</h3>
<p>First, I created a to-do list. In this list, I noted down all the main points, topics, sub-topics, references, preface, cover, title and so on.</p>
<p>I pretty much added all the thoughts that came to mind about the book.</p>
<p>I would suggest creating 2 todo lists: one on paper and the same as a soft copy.</p>
<p>First, note down all the points on paper. Once you note down everything, read it 2-3 times. Then whatever new ideas pop into your head, note them down.</p>
<p>For example, if you think about how you're going to explain a particular topic, note it down. It will make your work much easier. Then when you start writing about that topic, you can refer to these notes.</p>
<p>Once you have a <strong>todo</strong> list on paper, create a soft copy and save all the points in chronological order.</p>
<p>This is what my <strong>todo</strong> list used to look like:</p>
<h4 id="tasks">Tasks</h4>
<ul>
<li>[x] Index</li>
<li>[x] Cover</li>
<li>[x] Title</li>
<li>[x] Subtitle</li>
<li>[x] Preface</li>
<li>[x] What is Blockchain and Hyperledger Fabric?</li>
<li>[x] Introduction to Hyperledger Composer</li>
<li>[x] Environment Requirements and Setup
<ul>
<li>[x] Azure</li>
<li>[x] AWS</li>
<li>[x] GCP</li>
</ul>
</li>
<li>[x] Project Objective</li>
<li>[x] Project Setup in Composer</li>
<li>[x] Model File
<ul>
<li>[x] Definition</li>
<li>[x] Modeling Language</li>
<li>[x] project code</li>
</ul>
</li>
<li>[x] Script File
<ul>
<li>[x] Definition</li>
<li>[x] syntax</li>
<li>[x] project code</li>
</ul>
</li>
<li>[x] Query File
<ul>
<li>[x] Definition</li>
<li>[x] Query Language</li>
<li>[x] project code</li>
</ul>
</li>
<li>[x] ACL File
<ul>
<li>[x] Definition</li>
<li>[x] syntax</li>
<li>[x] project code</li>
</ul>
</li>
<li>[x] Deployment in Composer Playground</li>
<li>[x] Testing in Composer Playground</li>
<li>[x] Export the .bna</li>
<li>[x] Composer Rest Server</li>
<li>[x] Frontend</li>
<li>[x] Conclusion</li>
<li>[x] References</li>
<li>[x] About Me</li>
<li>[x] Grammar Check 1</li>
<li>[x] Grammar Check 2</li>
<li>[x] Read the draft</li>
<li>[x] Read the final draft</li>
<li>[x] PDF format</li>
<li>[x] Add page no. to PDF</li>
<li>[x] New chapter starts from the new page</li>
<li>[x] Thank You Note</li>
<li>[x] License</li>
<li>[x] End cover</li>
</ul>
<p>I used markdown format for my <strong>todo</strong> list. You can use whatever format is easiest for you.</p>
<h2 id="startsmallbutdostart">Start Small but Do Start</h2>
<p>Keep in mind that you don't need to write about each topic in order. There might be many topics which depend on previous topics, but others won't.</p>
<p>Also, you don't have to finish writing about the topic all at once either. Whatever topics you are feeling comfortable with, start there.</p>
<p>Your goal should be to start the book. Aim to write 10-20% of your book within a couple of weeks. Once you start, it will keep reminding you that you have to complete the book. In time you'll realize that this turns into a great motivator.</p>
<p>If there is a topic you don't know as much about, don't worry. Don't hesitate to get help from the Internet. Read how other people explained it. Take inspiration and then write about it in your way.</p>
<p>And remember – If you use any content from other people's work, make sure you inform them, cite it properly in your text, and list their work as a reference at the end.</p>
<blockquote>
<p>Consider this as a professional courtesy. -- John Wick ?</p>
</blockquote>
<h2 id="chronologicalorder">Chronological Order</h2>
<p>It took me a while to understand the importance of having a file naming convention.</p>
<p>At first I started following a <em>Chapter 1</em>, <em>Chapter 2</em> naming convention for each topic. It turned out to be a terrible idea.</p>
<p>The problem with this naming scheme is that you have to maintain a separate file where you explain what is in the file. Or you have to open each file to see what it contains.</p>
<p>Another problem is that if you add a new chapter in between then you have to rename all the following chapters.</p>
<p>There are two conventions I found helpful, but each has its disadvantages.</p>
<p>One option is to use <strong>chapternumber-topic</strong>: Name the file as a chapter number followed by the topic of the chapter. Like this <strong>10-Introduction-of-Blockchain</strong>.</p>
<p>Name the chapter number in 2 digits. This will help you add sub-sections to the same chapter in different files. Like this <strong>11-History-of-Blockchain</strong>.</p>
<p>Another benefit of this naming convention is it will show all the files in the order of your book chapters.</p>
<p><strong>Disadvantage:</strong> Adding new chapter in between requires that you rename all the following chapters.</p>
<p>The second option is to use <strong>filename as topic</strong>: Name all the files as the topic name. This will give you the freedom to write topics in random order. And you can maintain the order of the book in your todo list.</p>
<p><strong>Disadvantage:</strong> All the files will be arranged in alphabetical order. After 10-15 files it will be difficult to track all the files, and it'll be harder to put them together in a draft.</p>
<p>In the end, I followed the second method. It worked alright for me.</p>
<p>To create a draft, I created a Node.js script. In this script, I entered all the topics in an array. Then I created a draft file and appended all the topics in it. Of course by reading them first ?. A few perks of being a Software Engineer ?.</p>
<p>This script was a saviour when I was editing. Many times I updated the topics or pictures within them. I fixed grammatical mistakes. Here Grammarly really saved me...but not completely as I was using the free version. ?</p>
<h2 id="chronicleofthebookjourney">Chronicle of the book journey</h2>
<p>Writing a book is not a sprint, it is a marathon. Always save your work when you complete a topic or are done for the day.</p>
<p>The next day, you might get a new idea for the same topic which you already completed. You might spend an hour on it, but it doesn't look good. In this case, UNDO is great but it also has limitations (and its limits vary from editor to editor). <strong>Do not test its limits too much</strong>.</p>
<p>Instead of relying on the editor or making duplicate copies, I used <strong>Git</strong> for version control. Don't think that <strong>git</strong> can only be used for managing your code. It is a versitile tool and its applications are only limited by your imagination.</p>
<p>For the readers who don't know about <strong>git</strong>:</p>
<blockquote>
<p>Git is a distributed version control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. --<a href="https://en.wikipedia.org/wiki/Git">Wikipedia</a></p>
</blockquote>
<p>You don't have to learn everything about <strong>git</strong> to use it for writing. The basic commands like <strong>init</strong>, <strong>add</strong>, <strong>commit</strong>, <strong>logs</strong> and <strong>checkout</strong> are more than enough for you to maintain your versions and keep your text accessible and safe.</p>
<p>There are many Git code hosting platforms available, like <a href="https://github.com/">GitHub</a>, <a href="https://about.gitlab.com/">GitLab</a> and others. To host your book on one of these platforms, you can follow the below steps:</p>
<ol>
<li>Create an account. My personal choice is <strong>GitHub</strong>.</li>
<li>Create a private repository with default choices. You can change its visibility to public in the future.</li>
<li>Follow the instructions provided once the repository is created. Basically, in this step, you're connecting your local <strong>Git</strong> to your hosted repository.</li>
<li>Learn 2 more commands, <strong>push</strong> and <strong>pull</strong>. Use <strong>push</strong> to push the local changes to the cloud repo and use <strong>pull</strong> to get the content from the cloud.</li>
</ol>
<p>After this, whenever you make any changes, just <strong>add</strong>, <strong>commit</strong> and <strong>push</strong>. Simple, isn't it? ?</p>
<p>After a couple of commits, you will feel comfortable with <strong>git</strong>.</p>
<blockquote>
<p>Check out this amazing article to learn more: <a href="/news/learn-git-and-version-control-in-an-hour/">Learn Git and Version Control in an Hour</a></p>
</blockquote>
<h1 id="thetoolsandresourcesiused">The tools and resources I used</h1>
<p>I used many tools and resources while writing, editing, formatting and designing the book.</p>
<h2 id="writing">Writing</h2>
<p>For writing, I used the VS Code editor with a couple of markdown plugins, as I've discussed above.</p>
<p>For emojis, I used <a href="https://getemoji.com/">copy and paste emojis</a>.</p>
<h2 id="editing">Editing</h2>
<p>For correcting grammatical mistakes I used the free version of Grammarly. In the free version, it corrects all the basic mistakes like incorrect or missing articles, prepositions, commas, and so on.</p>
<p>I used the <a href="https://www.ilovepdf.com/add_pdf_page_number">online pdf editor</a> to add page numbers to the book.</p>
<h2 id="formatting">Formatting</h2>
<p>I used the Markdown in Preview plugin in VS Code to generate the PDF format. I used the default Git markdown formatting. You can change the formatting in the settings.</p>
<h3 id="pagebreaksinthepdf">Page breaks in the PDF</h3>
<p>As I was writing in markdown format, the PDF output was inconsistent. For example, it starts a new topic from the last page instead of from a new page.</p>
<p>To fix this, I used the page break <code>html</code> code at the end of each topic.</p>
<pre><code class="language-html">&lt;div style="page-break-after:always;"&gt;&lt;/div&gt;
</code></pre>
<p>This will make the content that follows it start on a new page.<br>
You can also add the end of the page-sequence like *<strong>****</strong> this.</p>
<pre><code class="language-html">&lt;div style="page-break-after:always; display:block; text-align:center; border:none"&gt;*****&lt;/div&gt;
</code></pre>
<h3 id="aboutmepage">About Me Page</h3>
<p>In the <strong>About Me</strong> section of my book, I divided the content into two columns: a brief about me and a profile picture.</p>
<p>It took me a while to realize the full capabilities of the markdown format. We can add plain <code>html</code> code in it. Here's what my "about me" page says:</p>
<pre><code class="language-html">&lt;div &gt;
&lt;img align="right" style="padding-left:65px" src="../images/profilepic.JPEG" width="400px" height="450px" /&gt;
&lt;/div&gt;
Hello, I am **_Shubham Kumar Chadokar_**.
I am a Software Engineer and in my short career of almost 4 years, I've had the opportunity to work on Blockchain, Nodejs, Golang, and Docker.
I've learned about other tech as well, but these are my primary focus. I love to write articles and tutorials on new tech by following a hands-on approach. This is my first book.
Front end development isn't my specialty, and that's why I didn't include it in the book.
If you have any queries or questions, please feel free to drop me an email.
:e-mail: [hello@schadokar.dev](hello@schadokar.dev)
:globe_with_meridians: [schadokar.dev](https://schadokar.dev)
&lt;img src="https://github.githubassets.com/images/icons/emoji/octocat.png" style="width:20px;" /&gt;[github.com/schadokar](https://github.com/schadokar)
</code></pre>
<p>For octacat, I used the <code>img</code> tag.</p>
<p>It looks like this.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/09/about-me-3.PNG" alt="about-me-3"></p>
<h3 id="thankyoupage">Thank You Page</h3>
<p>I added a thank you page to express my gratitude to the <strong>Hyperledger Composer Community</strong> for their work. I tried to add the content in the middle of the page.</p>
<pre><code class="language-html">&lt;div style="padding-top:40%; text-align: center; font-size:35px;"&gt;
Thank You &lt;img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/microsoft/209/person-with-folded-hands_1f64f.png" style="width:40px" /&gt;
&lt;/div&gt;
&lt;div style="text-align: center; font-size:25px;"&gt;
I especially want to thanks the entire
&lt;a href="https://github.com/hyperledger/composer/graphs/contributors"&gt;Hyperledger Composer Community&lt;/a&gt; for creating such
an amazing tool. Many developers entered into the blockchain domain because of the simplicity of the composer. &lt;br /&gt;
It is unfortunate that it is deprecated but it sets a great example of easy automation,
wrapping a complex Hyperledger Fabric into the easy to use Hyperledger Composer.
&lt;/div&gt;
</code></pre>
<p>It looks like this.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/09/thanks-note.PNG" alt="thanks-note"></p>
<h2 id="booktitleandsubtitle">Book Title and Sub-title</h2>
<p>The book title should make the contents of the book clear in a few words or one short sentence.</p>
<p>While you're writing the book, note down all the keywords you use. This will help you to come up with a great title. You want to capture the essence of the book and let readers know, for example, whether it's theoretical or more hands-on.</p>
<p>A sub-title should give readers more detail about what they will get from this book or what they are going to learn.</p>
<p>A one sentence sub-title is ideal, and shouldn't be any longer than two sentences. Don't overdo it – let readers read the book. The idea is to give readers a taste of the complete book in one sentence but still not to tell anything ?.</p>
<p>My book title is <strong><em>Playtime with Hyperledger Composer</em></strong> and sub-title is <strong>Create a supply chain management project in Blockchain using Hyperledger Composer</strong>.</p>
<p>When you start writing your book, don't spend much time on the book title. When you finish writing, you'll be in a much better position to decide the book title. Everything is written, you know what it is all about, and what others will get from it.</p>
<p>In my case, I changed the book title and book cover at the last moment before publishing it. Before that, it was so boring ?.</p>
<h2 id="designingthebookcover">Designing the Book Cover</h2>
<p>You might have heard the idiom <strong>Don't judge a book by its cover</strong>.<br>
But the harsh reality is, a book's cover is very important. It is the face of the book.</p>
<p>Try to keep it simple and informative. Don't overdo it. A simple title and a short subtitle with an image or two is more than enough.</p>
<p>I started designing the book cover by taking references from other books, and trying to edit them in Paint. The result was a complete disaster, and I couldn't think of anything good.</p>
<p>Then I realized that <em>designing is not my cup of tea</em>. I decided to hire a freelancer for this, so I checked out freelancing sites like <strong>UpWork</strong> and <strong>Fiverr</strong>.</p>
<p>Then, I found <a href="https://canva.com"><strong>Canva</strong></a>. It's such a great tool. Amazing! ? ? ? ?</p>
<blockquote>
<p>Canva is a graphic design platform that allows users to create social media graphics, presentations, posters and other visual content. It is available on web and mobile and integrates millions of images, fonts, templates and illustrations. <a href="https://en.wikipedia.org/wiki/Canva">Wikipedia</a></p>
</blockquote>
<p>I used one of the templates from the canva book cover section and created my book cover. Not bad, right? ?</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/09/book-cover.png" alt="book-cover"></p>
<h2 id="license">License</h2>
<p>I wrote this book out of curiosity and for fun. So, I wanted it to be free, and open-source, but I didn't want others to monetize it. Without a license, there are no restrictions.</p>
<p>I searched for a while and found a great answer on StackOverflow regarding free licenses, <a href="https://creativecommons.org/licenses/">Creative Commons Licenses</a>.</p>
<blockquote>
<p><strong>Creative Commons is a nonprofit organization that helps overcome legal obstacles to the sharing of knowledge and creativity to address the world’s pressing challenges.</strong></p>
</blockquote>
<p>They have provided a <a href="https://creativecommons.org/choose/">form</a> with a couple of questions related to what kind of license you want. Fill out the form and voilà ?, your license is ready. Copy and paste it or use the embedded link.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/09/license.PNG" alt="license"></p>
<p>There are many options you can choose from to publish your book. You can approach a publishing house and send in your draft. If they want to publish you can go ahead and secure a deal.</p>
<p>After this, the publishing house takes care of other processes like formatting, editing your book, creating an attractive book cover, all the licensing, the publishing process, and most importantly marketing.</p>
<p>In short, if you want to monetize your book and you're expecting a good amount, then a publishing house is the best option available.</p>
<p>Another option is self-publishing. Yes, we can self-publish our own books. Amazon's <a href="https://kdp.amazon.com/en_US/">Kindle Direct Publishing</a> provides a great platform for this. It is free and it publishes the book worldwide.</p>
<p>You'll get 70% of the profits for each sale. The kdp take cares of all the publishing process. You just have to write the book, upload it and format it.</p>
<p>You simply enter the price you want to charge, along with some basic info about the book and and yourself. You can follow their tutorials for more info – they have done a great job.</p>
<p>But I wanted to keep my book free and didn't have the patience for the above processes. So, I self-published it without using any third party.</p>
<p>I just converted the book to PDF format and saved it in an AWS S3 Bucket so that anyone can download it. Then I hosted the book on my website. Simple. ?</p>
<h1 id="shareyourwork">Share your work</h1>
<p>Once you complete your masterpiece, it is time to show it to the world.<br>
If you haven't teamed up with a publisher or even if you did, you have to spread the word.</p>
<p>These are the few platforms I used, but don't limit yourself.</p>
<h2 id="linkedin">LinkedIn</h2>
<p>LinkedIn is a professional platform and many developers are on it, no matter their specialty in the tech world. You'll also find people of every profession, you name it.</p>
<p>Share your work with them, ask for feedback. 90% of the time you'll get a reply. I shared my work with Dan Selmon, one of the Hyperledger Composer contributors, as well as Srinivas Mahankali, who wrote many books on Blockchain.</p>
<p>They were both very helpful and gave their honest feedback. I am thankful to Dan, who even offered to share the book among his network on LinkedIn and Twitter. ?</p>
<h2 id="reddit">Reddit</h2>
<p>Reddit is a community hub. You will find many active communities on various subjects here. You just have to join the community that's relevant to your work and share it there.</p>
<p>You'll find a lot of active members on Reddit, in these groups, and they are not shy to share their opinion. If there is a room for improvement, some of them might offer to help.</p>
<p><em>But before sharing, DO READ THE GUIDELINES. If you violate any of them, they will remove your post</em>.</p>
<h2 id="twitter">Twitter</h2>
<p>Twitter is not just a social platform where people share their opinions. So don't underestimate it.</p>
<p>If you like facts and figures, here you go: there are 1.3+ billion accounts on Twitter, 330 million monthly active users, 152 million daily active users and 500 million tweets per day. This is huge.</p>
<p>You just have to craft your message and select the right keywords within the 280 characters limit and you can potentially reach a large audience.</p>
<h2 id="blogs">Blogs</h2>
<p>Do some research and figure out which publications or digital magazines publish articles in your book's category. Share your book summary and details with them.</p>
<p>Ask them if they can write an article about your book. Or you can write an article about your book and share the draft with those publications.</p>
<p>There are also many other platforms you can try – just do a bit of digging.</p>
<h1 id="conclusion">Conclusion</h1>
<p>This was my first experience writing a book. It took some time but it was worth it. Now, I have another badge on my portfolio. ?</p>
<p>I learned a lot from this experience. This article serves as documentation of all my learning for anyone who wants to write their first book or their next book.</p>
<p>Below is the final list of tools I've used so far.<br>
Any suggestions for others are most welcome.</p>
<p>Thank you for reading and don't forget to share your first book with me. ?</p>
<h1 id="finallistoftoolsiused">Final List of Tools I used</h1>
<ul>
<li><strong>Editor</strong>: <a href="https://code.visualstudio.com/">Visual Studio Code</a> with 2 Markdown plugins</li>
<li><strong>Versioning Tool</strong>:Git and <a href="https://github.com">GitHub</a></li>
<li><strong>Emojis</strong>: <a href="https://getemoji.com/">Copy and Paste emojis</a></li>
<li><strong>Grammar Check</strong>: <a href="https://app.grammarly.com/">Grammarly</a></li>
<li><strong>License</strong>: <a href="https://creativecommons.org/licenses/">Creative Commons Licenses</a></li>
<li><strong>Cover Design</strong>: <a href="https://www.canva.com/">Canva</a></li>
<li><strong>PDF page number</strong>: <a href="https://www.ilovepdf.com/add_pdf_page_number">online pdf editor</a></li>
<li><strong>eBook storage</strong>: <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html">AWS S3 bucket</a>.</li>
<li><strong>Book Hosting</strong>: <a href="https://schadokar.dev/ebooks/">On my blog</a></li>
</ul>
<h2 id="thanksforreading">Thanks for Reading</h2>
<p>If you have any feedback or suggestions to help me improve this article please connect with me on <a href="https://twitter.com/schadokar1">twitter</a> or <a href="hello@schadokar.dev">email</a> me.</p>
<ul>
<li><a href="https://schadokar.dev">Read my other articles</a></li>
<li>Subscribe to <a href="https://schadokar.dev/newsletter/">My Newsletter</a></li>
</ul>
<p><span>Cover photo by <a href="https://unsplash.com/@thoughtcatalog?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Thought Catalog</a> on <a href="https://unsplash.com/s/photos/writers?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></p>
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
