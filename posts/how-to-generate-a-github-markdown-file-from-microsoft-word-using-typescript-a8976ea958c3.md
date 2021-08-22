---
card: "https://cdn-media-1.freecodecamp.org/images/1*85IJbXqoCZIBLjS3oyQ1YA.jpeg"
tags: [JavaScript]
description: by Manish Bansal
author: "Milad E. Fahmy"
title: "How to generate a GitHub markdown file from Microsoft Word using TypeScript"
created: "2021-08-15T19:40:55+02:00"
modified: "2021-08-15T19:40:55+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-typescript tag-github tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to generate a GitHub markdown file from Microsoft Word using TypeScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*85IJbXqoCZIBLjS3oyQ1YA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*85IJbXqoCZIBLjS3oyQ1YA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*85IJbXqoCZIBLjS3oyQ1YA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*85IJbXqoCZIBLjS3oyQ1YA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*85IJbXqoCZIBLjS3oyQ1YA.jpeg" alt="How to generate a GitHub markdown file from Microsoft Word using TypeScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Manish Bansal</p>
<p>What? Why would one want to generate an MD file from a Microsoft word document? If that’s the first thought you had after reading this title, then let me give you a strong use case.</p>
<p>Consider a situation where you are using Git or any other version control system (VCS) for your project’s sources as well as its artifacts. Now, like most projects, you decide to use Microsoft word for documentation and check it into Git. Again, multiple team members edit the same document. After editing, they check-in the document into the repository.</p>
<p>Now, Git will be able to maintain the history of your document. How will you be able to look at the changes that have been made to the document since you last checked it in? Yes, you can use Microsoft word’s track change mode, but isn’t that messy? Or for heaven’s sake, will you be able to use Git diff utility to check the differences quickly? I would say, no.</p>
<p>Then what is the solution? Should you stop using Microsoft Word for documentation? Or should you switch to some other VCS?</p>
<p>I would say neither. How about you maintain your documentation in Microsoft word? Then change it into a markdown (MD) file (in layman terms, a text file) during the build phase and check in? If that solution excites you, then keep reading.</p>
<p>But before jumping right into conversion, let me first tell you what exactly is a markdown file.</p>
<h3 id="what-is-a-markdown-or-an-md-file">What is a markdown or an MD file?</h3>
<p>Markdown is a syntax language aiming for easy reading and writing structured text. Further, it is easy to learn, and it only requires a text editor to create a document.</p>
<p>Now, there are multiple implementations of the language (like <a href="https://github.github.com/gfm/" rel="noopener">GFM </a>aka Github flavored Markdown). Each of these implementations has their own improvements and features that are not necessarily compatible with each other.</p>
<p>Each implementation supports various common features like paragraphs, blockquotes, headings, and lists. This helps in maintaining text in a structured manner like Microsoft Word. But, instead of using internal binary codes, MD files use plain text characters for these features. This makes an MD file a text file but not a binary file like a docx file.</p>
<p>For example, in GitHub’s markdown flavor, here are the various features and ways of representing them in the form of text compared to a word document.</p>
<p>For the detailed advantages of MD files over word documents, you can also refer to <a href="https://hackernoon.com/say-yes-to-markdown-no-to-ms-word-be4692e7a8cd" rel="noopener">this</a> article.</p>
<h3 id="ok-i-am-convinced-show-me-the-code-">OK! I am convinced. Show me the code.</h3>
<p>Disclaimer: This project is inspired by TypeScript source code. While browsing it, I found this idea of converting a word document to an MD file. You can see its source code <a href="https://github.com/manishbansal8843/TypeScript/blob/1b880f8ad445c778911a71b8cdec94ae885299bf/scripts/word2md.ts#L407" rel="noopener">here</a>.</p>
<p>For simplicity, I have removed a few sections of code in my repository. The original code was meant to convert TypeScript specification documentation to an MD file. This file contains lots of customized styles. So, once you are done with this article, you can very much go through TypeScript converter code and appreciate it’s abilities to perform more complex conversions.</p>
<p>The complete code mentioned in this article can be referred to <a href="https://github.com/manishbansal8843/word2mdconverter" rel="noopener">here</a>. The whole code can be divided into 3 sections:</p>
<ol>
<li>Gulp Configurations.</li>
<li>CScript execution.</li>
<li>TypeScript main function</li>
</ol>
<p>As stated earlier, you can convert a word document to a MD file during the build phase. This can be done by any task runner. Here, I have chosen gulp.</p>
<p>In Gulp configurations, I have defined 3 tasks. First one is to clean the build directory which is pretty standard. Second is to compile the TypeScript code. And the last one is to call the CScript for executing the JavaScript.</p>
<h3 id="what-is-cscript">What is CScript?</h3>
<p>CScript.exe (present in C:\Windows\System32) is a console-based executable for the scripting host that are used to run the scripts. It can interpret scripting languages like VB Script or JavaScript. Similarly, we have WScript but it is used for windows applications. In this, the console is not attached. So if you have a requirement of creating a console based application, we can use CScript.</p>
<p>Now, in our project, the main job of CScript is to provide a run-time environment to our script i.e. JavaScript. Now, you must be thinking, why haven’t I used node instead of CScript to run my JavaScript.</p>
<p>Both provide a run-time environment for a JavaScript. CScript provides inherent support for windows component object model technique. So if you try to run this script via Node, you will get an error like this.</p>
<blockquote>var fileStream = new ActiveXObject(“ADODB.Stream”);</blockquote>
<blockquote>ReferenceError: ActiveXObject is not defined</blockquote>
<p><strong>Now, what is a component object model technique?</strong></p>
<p>Component object model is a technology developed by Microsoft. It is not a language but a binary standard. As per the definition,</p>
<blockquote>The Microsoft Component Object Model (<a href="https://docs.microsoft.com/en-us/windows/desktop/com/the-component-object-model" rel="noopener">COM</a>) is a platform-independent, distributed, object-oriented system for creating binary software components that can interact. COM is the foundation technology for Microsoft’s OLE (compound documents), ActiveX (Internet-enabled components), as well as others.</blockquote>
<p>In layman terms, COM objects are interfaces to the various runtime objects. (That’s why the definition has a term called “binary software components”). It is not a language, but a technique which is programming language agnostic.</p>
<p>The only language requirement for COM is that code is generated in a language that can create structures of pointers. Either explicitly or implicitly, call functions through pointers. Object-oriented languages such as C++ and Smalltalk provide programming mechanisms that simplify the implementation of COM objects</p>
<p>After that, we can use any other language like Java, VB or JavaScript to interact with those COM objects. This will further give us access to runtime applications. In our case, to Microsoft word applications.</p>
<p><strong>So, are you saying we cannot use Node at all here?</strong></p>
<p>No, that is not true. We can use Node also instead of CScript. But to support COM, we will need to install another package called win32com for COM support. Details can be found <a href="https://helloacm.com/using-com-object-in-nodejs/" rel="noopener">here</a>.</p>
<h3 id="final-code">Final code</h3>
<p>Now, in order to interact with word application, various APIs have been used. And since we are using the COM object model, I referred to the <a href="https://docs.microsoft.com/en-us/visualstudio/vsto/word-object-model-overview?view=vs-2017" rel="noopener">word object model</a>.</p>
<p>Word provides hundreds of objects with which you can interact. These objects are organized in a hierarchy that closely follows the user interface. At the top of the hierarchy is the Application object. This object represents the current instance of Word. The Application object contains the Document, Selection, Bookmark, and Range objects. Each of these objects has many methods and properties that you can access to manipulate and interact with the object.</p>
<p>Now, in our script, we have first created a word application object by using ActiveXObject. Once the application object is obtained, the document object is created by passing the name of the document (obtained from command line arguments of cscript calling).</p>
<p>Now, this represents the active object of the actual document. This object is capable of parsing as well as manipulating the word document. However, in our use case, we only need to parse the document and write a text file.</p>
<p>This code is very generic, which is used to convert very basic features of a word document like cross-references, lists, subscript texts, bold and italic characters etc. into GFM format. However, you can write your own code converting your customized styles of the word document into the desired format.</p>
<p>You can find the actual typescript code <a href="https://github.com/manishbansal8843/word2mdconverter/blob/master/src/word2mdconverter.ts" rel="noopener">here</a>. The code is quite easy to read. Below are few major highlights of it:</p>
<ol>
<li><a href="https://github.com/manishbansal8843/word2mdconverter/blob/4acca1877451c7929eddbdce09c2ea113525769e/src/word2mdconverter.ts#L357" rel="noopener">First</a>, a document object is passed to convertDocumentToMarkdown function which returns the text to be written in an MD file.</li>
<li>Further, in convertDocumentToMarkdown, methods and properties of the document object are called to find and replace relevant word features with the corresponding GFM language syntax. E.g. first, subscript and bold &amp; italic texts are searched. After that, the text is replaced by GFM specific code. And finally, the word styles are removed. All this is done <a href="https://github.com/manishbansal8843/word2mdconverter/blob/4acca1877451c7929eddbdce09c2ea113525769e/src/word2mdconverter.ts#L332-L334" rel="noopener">here</a>.</li>
<li>After this, cross-references are <a href="https://github.com/manishbansal8843/word2mdconverter/blob/4acca1877451c7929eddbdce09c2ea113525769e/src/word2mdconverter.ts#L336-L338" rel="noopener">replaced</a>. However, this is tricky. First, the toggleShowCodes function is called. This has a similar impact as alt+F9 in a word document. This replaces all the cross-references in a document with the code. After that, find and replace method is called to find and replace all cross-references with GFM style. Here, “19 REF” is passed as an argument to a function. This is a standard search criterion for finding all cross-references in a word document. At last, after replacing, again the toggleShowCodes function is called to bring back the document to its original form.</li>
<li>At last, the writeDocument function is called which does the main job. It reads the document paragraph by paragraph and then, using switch case, looks for the styles of the paragraphs (like if it’s a heading or a table or a list paragraph or an image). Now, depending on the found style, the desired text is written in the MD file.</li>
</ol>
<p><strong>A word or two on embedding images:</strong> Embedding images into an MD file is a bit tricky.</p>
<p>First, you need to store the images on your git repository. Then the link has to be given in the MD file for embedding in it. The syntax is ![alt text](path/in/the/repository/image1.jpg).</p>
<p>Now, in order to auto-generate this link for an image while converting word into an MD file, hidden text is created (just after the image without any space) with content as the link itself. And then in the <a href="https://github.com/manishbansal8843/word2mdconverter/blob/4acca1877451c7929eddbdce09c2ea113525769e/src/word2mdconverter.ts#L258-L263" rel="noopener">code</a>, this hidden text is stripped off and inserted into the MD file.</p>
<p>Now, you might find the actual code to do all this stuff very tedious, but this is all as per the <a href="https://docs.microsoft.com/en-us/dotnet/api/microsoft.office.interop.word._document?view=word-pia" rel="noopener">API</a> exposed by the Word application. So do not worry about that. You can definitely refer my code or TypeScript’s original code. Both will be a good starter for your next project.</p>
<p>Oh wait!! That is it. You made it till the end ?. Well, then ? Congratulations! ? And, If you liked this article, please hit that clap ? button below. It would mean a lot to me and it will help other people see the story. Cheers! ?</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
