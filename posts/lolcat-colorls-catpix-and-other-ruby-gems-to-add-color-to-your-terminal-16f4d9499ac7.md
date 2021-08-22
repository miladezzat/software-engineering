---
card: "https://cdn-media-1.freecodecamp.org/images/1*QRJ9_60oCmcwRGfYqCbqSw.png"
tags: [Bash]
description: "by rajaraodv"
author: "Milad E. Fahmy"
title: "How to Jazz Up Your Bash Terminal — A Step By Step Guide With Pictures"
created: "2021-08-16T11:42:00+02:00"
modified: "2021-08-16T11:42:00+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-bash tag-git tag-github tag-javascript tag-nodejs ">
<header class="post-full-header">
<h1 class="post-full-title">How to Jazz Up Your Bash Terminal — A Step By Step Guide With Pictures</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*QRJ9_60oCmcwRGfYqCbqSw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*QRJ9_60oCmcwRGfYqCbqSw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*QRJ9_60oCmcwRGfYqCbqSw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*QRJ9_60oCmcwRGfYqCbqSw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*QRJ9_60oCmcwRGfYqCbqSw.png" alt="How to Jazz Up Your Bash Terminal — A Step By Step Guide With Pictures">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
powerline-daemon -q
POWERLINE_BASH_CONTINUATION=1
POWERLINE_BASH_SELECT=1
//For example:
"name": "Default color scheme for shell prompts",
"groups": {
"hostname": {
"fg": "brightyellow",
"bg": "mediumorange",
"attrs": []
},
"environment": {
"fg": "white",
"bg": "darkestgreen",
"attrs": []
},
"mode": {
"fg": "darkestgreen",
"bg": "brightgreen",
"attrs": ["bold"]
},
"attached_clients": {
"fg": "white",
"bg": "darkestgreen",
"attrs": []
},
"gitstatus": {
"fg": "gray8",
"bg": "gray2",
"attrs": []
},
"gitstatus_branch": {
"fg": "gray8",
"bg": "gray2",
"attrs": []
},
"gitstatus_branch_clean": {
"fg": "green",
"bg": "gray2",
"attrs": []
},
"gitstatus_branch_dirty": {
"fg": "gray8",
"bg": "gray2",
"attrs": []
},
"gitstatus_branch_detached": {
"fg": "mediumpurple",
"bg": "gray2",
"attrs": []
},
"gitstatus_tag": {
"fg": "darkcyan",
"bg": "gray2",
"attrs": []
},
"gitstatus_behind": {
"fg": "gray10",
"bg": "gray2",
"attrs": []
},
"gitstatus_ahead": {
"fg": "gray10",
"bg": "gray2",
"attrs": []
},
"gitstatus_staged": {
"fg": "green",
"bg": "gray2",
"attrs": []
},
"gitstatus_unmerged": {
"fg": "brightred",
"bg": "gray2",
"attrs": []
},
"gitstatus_changed": {
"fg": "mediumorange",
"bg": "gray2",
"attrs": []
},
"gitstatus_untracked": {
"fg": "brightestorange",
"bg": "gray2",
"attrs": []
},
"gitstatus_stashed": {
"fg": "darkblue",
"bg": "gray2",
"attrs": []
},
"gitstatus:divider": {
"fg": "gray8",
"bg": "gray2",
"attrs": []
}
},
"mode_translations": {
"vicmd": {
"groups": {
"mode": {
"fg": "darkestcyan",
"bg": "white",
"attrs": ["bold"]
}
}
}
}
}</code></pre><h4 id="4-3-activate-the-theme">4.3 Activate The Theme</h4><p>4.3.1 Open Theme’s default.json file</p><pre><code class="language-bash">${powerline-install-directory}/powerline/config_files/themes/shell/default.json
//For example:
/Users/rupa/Library/Python/2.7/lib/python/site-packages/powerline/config_files/themes/shell/default.json</code></pre><p>4.3.2 Add the following to the default.json</p><pre><code class="language-json">{
"function": "powerline_gitstatus.gitstatus",
"priority": 40
"segments": {
"left": [{
"function": "powerline.segments.shell.mode"
},
{
"function": "powerline.segments.common.net.hostname",
"priority": 10
},
{
"function": "powerline.segments.common.env.user",
"priority": 30
},
{
"function": "powerline.segments.shell.cwd",
"priority": 10
}, {
"function": "powerline_gitstatus.gitstatus",
"priority": 40
}
],
"right": []
}
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
