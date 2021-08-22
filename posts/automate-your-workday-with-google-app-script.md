---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca228740569d1a4ca52e9.jpg"
tags: [Google Apps Script]
description: The best learn-to-code projects are often those which solve a
author: "Milad E. Fahmy"
title: "Give your workday super-powers with Google Apps Script"
created: "2021-08-15T19:33:42+02:00"
modified: "2021-08-15T19:33:42+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-google-apps-script tag-javascript tag-automation tag-work-life-balance ">
<header class="post-full-header">
<h1 class="post-full-title">Give your workday super-powers with Google Apps Script</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca228740569d1a4ca52e9.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca228740569d1a4ca52e9.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca228740569d1a4ca52e9.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca228740569d1a4ca52e9.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca228740569d1a4ca52e9.jpg" alt="Give your workday super-powers with Google Apps Script">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>The best learn-to-code projects are often those which solve a real world problem.</p>
<p>These projects can provide that extra dose of motivation so essential to finishing any project. They encourage you to actively explore and discover new concepts, rather than imitate examples you've seen before.</p>
<p>There's also something that bit extra satisfying about solving a problem you face day-to-day.</p>
<p>An easy way to start is with <a href="https://developers.google.com/apps-script/">Google Apps Script</a>.</p>
<p>It is a scripting language for a range of Google applications. The language itself is in fact JavaScript.</p>
<p>What Google Apps Script provides are libraries and classes that allow you to work with objects such as spreadsheets, emails, calendars, slides, and more.</p>
<p>If you want to dive right in, the documentation is available <a href="https://developers.google.com/apps-script/reference/">here</a>.</p>
<p>Here are three examples that will show how to get started with Google Apps Script. Hopefully it will give you some ideas for your own projects!</p>
<h3 id="launching-google-apps-script">Launching Google Apps Script</h3>
<p>You will need a Google account to start developing Apps Script projects. To start a new project, simply navigate to <a href="https://script.google.com/home">script.google.com/home</a> and click 'New Script'.</p>
<p>You will be taken to an in-browser IDE that looks something like this:</p>
<p>Give your project a name by changing the title in the top left corner.</p>
<p>Note that every time you require Apps Script to access different Google applications, you will need to give the necessary permissions.</p>
<p>This might look a bit daunting, but if you are running your own project carefully, there will be no problem. Click "Advanced" and allow your project permission to run.</p>
<p>Let's take a look at some examples.</p>
<h3 id="calculate-your-income-tax">Calculate your income tax</h3>
<p>This simple example will show you how to extend <a href="https://www.google.com/sheets/about/">Google Sheets</a> by adding your own custom formulae. In this example, the formula will be used to calculate UK income tax.</p>
<p>In the UK, <a href="https://www.gov.uk/income-tax-rates">different income tax rates</a> are applied to different earnings categories. Therefore, the amount of income tax owed varies depending on the income.</p>
<p>First, create a new <a href="https://docs.google.com/spreadsheets/u/0/">Google Sheet</a>. Then, from the menu ribbon, select Tools &gt; Script editor. You will be taken to the Apps Script IDE.</p>
<p>The code block below uses a <a href="https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/selecting-from-many-options-with-switch-statements/">switch statement</a> to calculate the right amount of tax for a numerical argument <code>income</code>. If you are familiar with JavaScript, you will recognise the syntax.</p><pre><code class="language-JavaScript">function TAX(income) {
switch (true) {
case income &lt;= 12500:
var tax = 0;
break;
case income &lt;= 50000:
var tax = 0.2 * (income - 12500);
break;
case income &lt;= 150000:
var tax = 7500 + (0.4 * (income - 50000));
break;
case income &gt; 150000:
var tax = 47500 + (0.45 * (income - 150000));
break;
default:
var tax = "ERROR";
}
return tax;
}</code></pre>
<p>Save your project if you haven't already.</p>
<p>Now, back in the sheet, enter your chosen salary in e.g., cell A1. You can now call the new formula with &nbsp;<code>=TAX(A1)</code>.</p>
<p>You could write a similar function to calculate <a href="https://www.which.co.uk/money/tax/national-insurance/national-insurance-rates-ajg9u9p48f2f#headline_3">UK National Insurance contributions</a>.</p>
<p>What other Sheets functions could you write?</p>
<h3 id="remember-to-check-your-emails">Remember to check your emails</h3>
<p>It can be difficult to make time to respond to important emails. This example will bring together <a href="https://www.google.com/gmail/">Gmail</a> and <a href="https://calendar.google.com/calendar/r">Google Calendar</a> in one short application.</p>
<p>The idea is simple. You provide a list of important email contacts and/or keywords. The application checks your inbox every six hours. If it finds any new emails from these contacts (with any of the keywords in the subject line), it creates a calendar event reminding you to reply later in the day.</p>
<p>You can create a new project from <a href="https://script.google.com/home">script.google.com/home</a>.</p>
<p>Check out the code below:</p><pre><code class="language-JavaScript">function reminder() {
/* create list of senders and subject keywords */
senders = ["freecodecamp", "codecademy", "meetup"];
subjects = ["javascript", "python", "data science"];
/* build the search query */
var searchString = "is:unread newer_than:1d from: { " +
senders.join(" ") + "} subject: { " +
subjects.join(" ") + " }"
/* retrieve any matching messages */
threads = GmailApp.search(searchString);
/* if there are any results, create a calendar event */
if (threads.length &gt; 0) {
var event = CalendarApp.getDefaultCalendar();
event.createEventFromDescription('Review emails 6pm today');
}
}
</code></pre>
<p>To run this function at regular intervals, you can set up a trigger. From the menu ribbon, choose Edit &gt; Current project's triggers.</p>
<p>This will take you to a new tab where you can add a new trigger for the current project. Click 'Add new trigger' and choose the settings you wish to use.</p>
<p>Now, your script will run every 6 hours, and create a calendar event if you have any emails you need to review.</p>
<p>A useful extension might be to create a spreadsheet or Google Form that lets you add contacts and keywords easily.</p>
<p>How else could you integrate your inbox and your calendar?</p>
<h3 id="slides-update">Slides update</h3>
<p>Keeping presentations and slide decks up-to-date can be a tedious task. Luckily, you can use Google Apps Script to automate the process.</p>
<p>For this example, we'll use a fictional mobile app. The aim is to produce a slide deck with up-to-date metrics such as app downloads, active users, and revenue.</p>
<p>The trick will be to replace a number of <code>&lt;tags&gt;</code> in the deck with data contained in a Google Sheet.</p>
<p>In Slides, create a new presentation. Give it a name such as "App update template".</p>
<p>Create a new slide. Give it a title such as "Key metrics".</p>
<p>In a text box, add some content such as below:</p>
<p>Notice the tags included in each line. These will be replaced by up-to-date figures each time the script is run.</p>
<p>Next, create a new Sheet and add some data to use in the slide deck. In one column, refer to the tags in the slide deck. In the other, add the latest data.</p>
<p>In a real-life example, this would be calculated from raw data elsewhere in the spreadsheet. The raw data could come from Google Analytics, or be exported from a data warehouse, or from some other source.</p>
<p>Back in Slides, select Tools &gt; Script Editor from the menu ribbon. This will open a new Apps Script project. </p>
<p>Now you can start writing some code. The function takes two file ids as arguments - one for the Slides template, one for the Sheet. The file id is the string of letters and numbers you can find in the file's URL.</p><pre><code class="language-JavaScript">function updateSlides(templateId, sheetId) {
/* Make a latest copy of the slide deck template */
var template = DriveApp.getFileById(templateId);
var today = Date();
var copyName = "App update " + today;
var templateCopy = template.makeCopy(copyName);
/* Open spreadsheet and slides by their id*/
var sheet = SpreadsheetApp.openById(sheetId);
var slides = SlidesApp.openById(templateCopy.getId());
/* Get the data from the sheet */
var data = sheet.getRange("A1:B5").getValues();
/* replace all the tags in the deck with their latest values */
for(var i=0; i &lt;data.length; i++){
var tag = "&lt;"+data[i][0]+"&gt;";
var value = data[i][1].toString();
slides.replaceAllText(tag, value);
}
}
</code></pre>
<p>If you run this script, a new presentation will be created with the latest data in place of each of the tags.</p>
<p>You could schedule this script to run at regular intervals, such as at the end of each month. If you wanted to develop the idea even further, you could use Apps Script to automatically email the new deck to a list of contacts.</p>
<h3 id="over-to-you">Over to you</h3>
<p>Google Apps Script is a great way to start writing real JavaScript in a way which is immediately practical. Hopefully you found these three examples helpful. </p>
<p>Perhaps this introduction has given you ideas for projects you could develop?</p>
<p>Remember, coding is a powerful tool - don't do anything with Apps Script you wouldn't do manually. Best not to erase your entire inbox or overwrite an important file with memes.</p>
<p>Thanks for reading!</p>
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
