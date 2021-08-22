---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c99f2740569d1a4ca229b.jpg"
tags: [Email]
description: "First, you use a mail user agent, or MUA to read and send ema"
author: "Milad E. Fahmy"
title: "How Does Email Work?"
created: "2021-08-16T11:27:31+02:00"
modified: "2021-08-16T11:27:31+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-email tag-technology tag-cybersecurity tag-information-security tag-web-security ">
<header class="post-full-header">
<h1 class="post-full-title">How Does Email Work?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c99f2740569d1a4ca229b.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c99f2740569d1a4ca229b.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c99f2740569d1a4ca229b.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c99f2740569d1a4ca229b.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c99f2740569d1a4ca229b.jpg" alt="How Does Email Work?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>First, you use a mail user agent, or MUA to read and send email from your device (such as gmail, or the mail app on Apple devices). These programs are only active when you're using them. </p><p>Generally, they communicate with a mail transfer agent, or MTA (also known as a mail server, MX host, and mail exchanger), which serves to receive and store your emails. </p><p>Emails are stored remotely until you open your MUA in order to check your email. Emails are delivered by mail delivery agents (MDA), which are generally packaged with the MTA.</p><p>Mail used to be sent to a mail server using SMTP, or Simple Mail Transfer Protocol. SMTP is a communication protocol for email. </p><p>Even now, while many proprietary systems like Microsoft Exchange and webmail programs like Gmail use their own protocols internally, they use SMTP to transfer messages outside their systems (for example, if a Gmail user wants to send an email to an Outlook client).</p><p>Mail would then be downloaded from the server using Post Office Protocol (POP3) POP3 is an application-layer protocol which provides access via an internet protocol (IP) network for a user application to contact a mailbox on a mail server. It can connect, retrieve messages, store them on the client's computer, and delete or retain them on the server. </p><p>It was designed to be able to manage temporary internet connections, such as dial-up (so it would just connect and retrieve email when connected, and allow you to view the messages when you were offline). This was more popular when dial-up access was more widespread.</p><p>Now, IMAP, Internet Message Access Protocol, has mostly replaced POP3. IMAP can allow multiple clients to manage the same mailbox (so you can read your email from your desktop, laptop, and phone, etc. and all of your messages will be there, organized in the same way). </p><p>Eventually, webmail replaced both. Webmail allows you to login to a website and receive messages from anywhere or any device (yay!), however you need to be connected to the internet while using it. If the website (like gmail) is your MUA, you don't need to know SMTP or IMAP server settings.</p><h2 id="how-is-email-secured">How is email secured?</h2><p>Unfortunately, security wasn't really built into mail protocols from the beginning (like most beginning internet protocols). Servers just expected to take any message from anyone and pass it along to any other server which could help route the message to its final destination (the recipient in the to: field). </p><p>Unsurprisingly, this became an issue when the internet expanded from a few government and research groups into something most of the world uses to do essentially everything. Pretty soon spam and phishing emails became (and remain) a huge problem for everyone. </p><p>In response, we've collectively tried to implement several measures which prevent people from reading other's messages (encryption) and validate that messages actually came from the purported sender (authentication). &nbsp;</p><p>Most places use TLS (transport layer security, the replacement for SSL, secure sockets layer), a cryptographic protocol which provides encryption in transit. It provides protection for when the message is being transmitted, but not when the data is at rest, (for example, being stored on your computer). </p><p>This ensures that a message isn't altered or snooped on while it's traveling from MTA to MTA. However, this doesn't verify that the message wasn't modified during the trip. </p><p>For example, if the email goes through multiple mail servers before it reaches its final destination, using TLS will ensure it is encrypted between the servers, but each server could alter the message content. In order to address that, we've created SPF, DKIM, and DMARC.</p><h2 id="spf-sender-policy-framework-">SPF (Sender Policy Framework) </h2><p>SPF allows the owner of a domain (like google.com) to set a TXT record in its DNS that states which servers are allowed to send mail from that domain (for instructions on how to do this for a variety of hosting providers check out<a href="https://support.knowbe4.com/hc/en-us/articles/115015835387-How-Can-I-Add-a-TXT-Record-to-My-DNS-Records-"> this site</a>).</p><h3 id="how-does-this-work">How does this work?</h3><p>This record lists the devices (typically by IP) that are allowed and can end in one of the following options: </p><p>-all = If the check fails (the source of the email is not one of the listed devices) the result is a HardFail. Most mail systems will mark these messages as spam.</p><p>?all = = If the check fails (the source of the email is not one of the listed devices) the result is neutral. This is typically used for testing, not production domains.</p><p>~all = &nbsp;If the check fails (the source of the email is not one of the listed devices) the result is a SoftFail. This means that this message is suspicious, but isn't necessarily a known bad. Some mail systems will mark these messages as spam, but most will not.</p><p>SPF headers can be helpful to the servers themselves, as they're processing messages. For example if a server is at the edge of a network, it knows messages it receives should come from servers in the sender's SPF record. This helps servers get rid of spam faster. While this sounds great, unfortunately, there are a few major problems with SPF. </p><ol><li>SPF doesn't tell a mail server what to do with the message - meaning that a message can fail an SPF check and still be delivered. </li><li>An SPF record isn't looking at the 'from' address that the user sees, it's looking at the 'return-path'. This is basically the equivalent of the return address you write on a letter. It tells mail servers that handle the letter where to return the message (and it is stored in the email headers - essentially technical information servers use to process email). <br>That means I can put whatever I want into the from: address and it won't impact the SPF check. In fact, both of those email addresses can be relatively spoofed by a hacker. Because there is no encryption involved, SPF headers can't be fully trusted. </li><li>SPF records need to be keep constantly up to date which can be difficult in large, ever changing organizations.</li><li>Forwarding breaks SPF. This is because if an email from, say google.com, is forwarded by bob@bobsburgers.com, the envelope sender remains unchanged (the from address still says google.com). The receiving mail server thinks it is claiming to be from google.com, but is coming from bobsburgers.com, so it fails the SPF check (even though the mail actually is coming from google.com). </li></ol><p>For more reading on SPF check out t<a href="https://postmarkapp.com/guides/spf">hese</a> <a href="http://knowledge.ondmarc.com/en/articles/1148885-spf-hard-fail-vs-spf-soft-fail">articles</a>. You can check if a specific domain has SPF and DMARC records configured <a href="https://domain-checker.valimail.com/google.com">here.</a></p><h2 id="dkim-domainkeys-identified-mail-">DKIM (DomainKeys Identified Mail)</h2><p>DKIM is similar to SPF. It uses TXT records in the sending domain's DNS as well, and it provides some authentication of the message itself. It attempts to provide verification that messages weren't altered in transit. </p><h3 id="how-does-this-work-1">How does this work?</h3><p>The sending domain generates a public/private key pair and puts the public key in the domain's DNS TXT record (if you don't know what a public/private key pair is, check out <a href="/news/how-to-send-secret-messages/">this article</a> on cryptography). </p><p>Then, the domain's mail servers (on the outer boundary - the servers which are sending mail outside of the domain (ex. from gmail.com to outlook.com)) use the private key to generate a signature of the entire message body, including headers. </p><p>Generating a signature usually requires the text to be hashed and encrypted (for more details on this process, check out <a href="/news/understanding-encryption-algorithms/">this article</a>). </p><p>Receiving mail servers use the public key in the DNS TXT record to decrypt the signature and then hash the message and relevant headers (any headers which were created while the mail was inside the sender's infrastructure - for example if multiple gmail servers processed the email before it was sent externally to outlook.com). </p><p>The server will then check to make sure the two hashes match. If they do, the message is likely unaltered (unless someone has compromised the sender's private key) and legitimately from the purported sender. If the hashes do not match, the message is was either not from the purported sender, or it was altered by some other server in transit, or both.</p><p>DKIM does a very good job at one very specific task - answering the question 'was this email altered in transit or not from the purported sender?'. However, that's all it does. It doesn't tell you how to deal with emails which fail this test, which server may have altered the message, or what alterations were made. &nbsp;</p><p>DKIM is also used by some ISPs, or Internet Service Providers, to determine the reputation of your domain (are you sending lots of spam? Do you have low engagement? How often do your emails bounce?).</p><p>For more reading on DKIM check out this <a href="https://postmarkapp.com/guides/dkim">article</a>. You can validate a DKIM record <a href="https://www.dmarcanalyzer.com/how-to-validate-a-domainkey-dkim-record/">here</a>.</p><h2 id="dmarc-domain-based-message-authentication-reporting-and-conformance-">DMARC (Domain-Based Message Authentication, Reporting, and Conformance)</h2><p>DMARC is essentially instructions for mail servers on how to handle SPF and DKIM records. It doesn't perform any tests of its own, but it tells mail servers how to handle the checks which SPF and DKIM perform.</p><p>Participating ISPs will look at published DMARC records and use them to determine how to deal with DKIM or SPF fails. So for example, a commonly spoofed brand might publish a DMARC record which says that if DKIM or SPF fail, drop the message. </p><p>Often ISPs will also send reports on your domain's activity to you with source of the email and whether it passed/failed DKIM/SPF. This means that you'll get to see when people are spoofing (purporting to send from) your domain or altering your messages.</p><p>In order to implement DMARC, you need to create a DMARC record, based on your needs (from monitoring your email traffic to figure out what all your email sources are to asking actions be taken, like rejecting any emails which fail DKIM or SPF). You can learn more about doing that <a href="https://blog.returnpath.com/build-your-dmarc-record-in-15-minutes-v2/">here</a> and <a href="https://blog.returnpath.com/demystifying-the-dmarc-record/">here</a>.</p><p>For more reading on DMARC check out <a href="https://postmarkapp.com/guides/dmarc">this article</a>. You can check if a specific domain has SPF and DMARC records configured <a href="https://domain-checker.valimail.com/google.com">here.</a></p><h2 id="wrap-up">Wrap up</h2><p>None of these security measures are perfect, but together, they do a decent job of helping us to improve the security of email systems worldwide. </p><p>The more organizations that adopt these measures (either using open source implementations or paying for a product) the better off everyone will be. Security added on after a protocol or product is developed is usually more expensive, less effective, and harder to implement, than is security built into the product. </p><p>However, most of the protocols which the current internet relies upon were designed for the early internet - for a small group of enthusiasts, scientists, and government folks - not a worldwide network on which we run buildings, smart devices, public transit, nuclear plants(!), and so on. </p><p>Thus, as the internet has continued to expand, we need to continue to adapt and develop new ways to secure the systems we rely upon.</p>
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