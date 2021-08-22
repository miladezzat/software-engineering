---
card: "https://cdn-media-1.freecodecamp.org/images/1*285GZjmJQbn-VF6J-qKD3A.jpeg"
tags: [Tech]
description: "One of the advantages of using Electron is that — since it’s "
author: "Milad E. Fahmy"
title: "Writing OS-specific code in Electron"
created: "2021-08-16T11:37:59+02:00"
modified: "2021-08-16T11:37:59+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-tech tag-programming tag-technology tag-electron tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">Writing OS-specific code in Electron</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*285GZjmJQbn-VF6J-qKD3A.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*285GZjmJQbn-VF6J-qKD3A.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*285GZjmJQbn-VF6J-qKD3A.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*285GZjmJQbn-VF6J-qKD3A.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*285GZjmJQbn-VF6J-qKD3A.jpeg" alt="Writing OS-specific code in Electron">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>One of the advantages of using Electron is that — since it’s cross-platform — we don’t have to worry about the operating system on which our application is going to be run.</p><p>However, sometimes we need our code to be OS-specific if, for example, we are going to be using the command console or need to retrieve some information about the system.</p><p>Having to write multiple <em>ifs</em> each time we want to have some functionality on a given OS seems like excess work. It quickly obfuscates the code, making it difficult to be understood and analyzed.</p><p>In order to keep the code clean and readable, we can create a little helper and remove the <em>ifs </em>and any “OS-related” logic altogether.</p><h3 id="implementing-platforms">Implementing Platforms</h3><pre><code class="language-javascript">const os = require('os');
const platforms = {
WINDOWS: 'WINDOWS',
MAC: 'MAC',
LINUX: 'LINUX',
SUN: 'SUN',
OPENBSD: 'OPENBSD',
ANDROID: 'ANDROID',
AIX: 'AIX',
};
const platformsNames = {
win32: platforms.WINDOWS,
darwin: platforms.MAC,
linux: platforms.LINUX,
sunos: platforms.SUN,
openbsd: platforms.OPENBSD,
android: platforms.ANDROID,
aix: platforms.AIX,
};
const currentPlatform = platformsNames[os.platform()];
const findHandlerOrDefault = (handlerName, dictionary) =&gt; {
const handler = dictionary[handlerName];
if (handler) {
return handler;
}
if (dictionary.default) {
return dictionary.default;
}
return () =&gt; null;
};
const byOS = findHandlerOrDefault.bind(null, currentPlatform);
// usage
const whatIsHeUsing = byOS({
[MAC]: username =&gt; `Hi ${username}! You are using Mac.`,
[WINDOWS]: username =&gt; `Hi ${username}! You are using Windows.`,
[LINUX]: username =&gt; `Hi ${username}! You are using Linux.`,
default: username =&gt; `Hi ${username}! You are using something different.`,
});
console.log(whatIsHeUsing('Maciej Cieslar')); // =&gt; Hi Maciej Cieslar! You are using Mac.</code></pre><p>First, we see the <em>platforms</em> object which contains names of all supported operating systems. It is made only for convenience. We can then use <em>platforms.WINDOWS</em> instead of typing <em>‘WINDOWS’</em> each time into our object with handlers we pass to the <em>byOS</em> function.</p><p>Next, notice the <em>platformsNames</em> object. The keys are the result of calling <a href="https://nodejs.org/api/os.html#os_os_platform" rel="noopener"><em>os.platform()</em></a><em>. </em>The<em> </em>values are the keys from the <em>platforms</em> object. We simply map it to a more user-friendly name.</p><p>For example, when <em>os.platform()</em> returns <em>win32,</em> we map it to <em>platforms.WINDOWS</em> by calling <em>platformsNames[os.platform()]</em>.</p><p>In <em>currentPlatform,</em> we save the platform that we are using right now, so then we can match it against a given object with handlers.</p><h3 id="implementing-releases">Implementing Releases</h3><p>One might go even further and try to differentiate between releases of a given OS, for example, Windows 7, 8 and 10.</p><pre><code class="language-javascript">const os = require('os');
const releaseTest = {
[platforms.WINDOWS]: (version) =&gt; {
const [majorVersion, minorVersion] = version.split('.');
// Windows 10 (10,0)
if (majorVersion === '10') {
return releases.WIN10;
}
// Windows 8.1 (6,3)
// Windows 8 (6,2)
// Windows 7 (6,1)
if (majorVersion === '6') {
if (minorVersion === '3' || minorVersion === '2') {
return releases.WIN8;
}
return releases.WIN7;
}
return releases.WIN7;
},
[platforms.MAC]: () =&gt; releases.ANY,
[platforms.LINUX]: () =&gt; releases.ANY,
};
const currentRelease = releaseTest[currentPlatform](os.release());
const byRelease = findHandlerOrDefault.bind(null, currentRelease);
// usage
const whatWindowsIsHeUsing = byOS({
[WINDOWS]: byRelease({
[WIN7]: username =&gt; `Hi ${username}! You are using Windows 7.`,
[WIN8]: username =&gt; `Hi ${username}! You are using Windows 8.`,
[WIN10]: username =&gt; `Hi ${username}! You are using Windows 10.`,
}),
});
console.log(whatWindowsIsHeUsing('Maciej Cieslar')); // =&gt; Hi Maciej Cieslar! You are using Windows 7.
</code></pre><p>Now we can use <a href="https://nodejs.org/api/os.html#os_os_release" rel="noopener"><em>os.release()</em></a> to check for the system’s release.</p><p>We can split the resulting string and check the Windows version. A complete list can be found <a href="https://stackoverflow.com/a/44916050/6569856" rel="noopener">here</a>. As for Linux/Mac, I didn’t really see how that could be useful, so I left it at <em>releases.ANY</em>.</p><p>In <em>whatWindowsIsHeUsing</em> you can see that we are only checking for different Windows’ releases if we are running the app on Windows.</p><p>You can see the code in the <a href="https://github.com/maciejcieslar/os-specific-electron" rel="noopener">repository</a>.</p><p>Thank you very much for reading! If you have better ideas on how to write OS specific code, share them down below!</p><p>If you have any questions or comments feel free to put them in the comment section below or send me a <a href="https://www.mcieslar.com/contact" rel="noopener">message</a>.</p><p>Check out my <a href="https://www.maciejcieslar.com/about/" rel="noopener">social media</a>!</p><p><a href="http://eepurl.com/dAKhxb" rel="noopener">Join my newsletter</a>!</p><p><em>Originally published at <a href="https://www.mcieslar.com/writing-os-specific-code-in-electron" rel="noopener">www.mcieslar.com</a> on August 28, 2018.</em></p>
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
