---
card: "https://cdn-media-1.freecodecamp.org/images/1*QRJ9_60oCmcwRGfYqCbqSw.png"
tags: [Bash]
description: by rajaraodv
author: "Milad E. Fahmy"
title: "How to Jazz Up Your Bash Terminal — A Step By Step Guide With Pictures"
created: "2021-08-15T19:47:59+02:00"
modified: "2021-08-15T19:47:59+02:00"
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
<p>by rajaraodv</p>
<p>In this blog I’ll go over the steps to add Themes, Powerline, fonts, and powerline-gitstatus to make your regular Bash Terminal look beautiful and useful as shown in the picture above.</p>
<p>It turns out, if you are using Mac, you’ll need to jump through a lot of hoops to get this working as many instructions are for linux, or are out of date. So I thought I'd blog about it - hopefully it'll help you.</p>
<blockquote>Notes:<br><br>1. Follow the steps carefully as any mistake will cause a lot of headaches.<br><br>2. This is for MacOS and for regular bash in the Terminal.app. I’m not using ZSH or Hyper in this blog — I plan to write different blogs for them.<br><br>3. My Versions: Mac High Sierra; git version 2.14.3 (Apple Git-98); Python 2.7.10</blockquote>
<p>OK, by default, when you have a new mac, your Terminal.app will look something like below. Let’s go ahead and add Themes, fonts, and so on.</p>
<h3 id="step-1-add-a-new-theme">Step 1 — Add A New Theme</h3>
<p>The first obvious step is to enhance the Theme. Terminal doesn’t provide all the cool and fancy themes that you see other developers use. Let’s download a Theme and add it to the Terminal.</p>
<p>In this blog, I’ll add Solarized-Dark theme to our Terminal.</p>
<blockquote>Note: You can download various Themes (.terminal files) from <a href="https://github.com/lysyi3m/osx-terminal-themes/tree/master/schemes" rel="noopener">this git repo</a>. Simply open the <code><em>*.terminal</em></code> file to install it, i.e. <code><em>right-click on the *.terminal file &gt; “open with" &gt; Te</em></code>rminal</blockquote>
<ol>
<li>Go to <a href="http://ethanschoonover.com/solarized" rel="noopener">http://ethanschoonover.com/solarized</a></li>
<li>Scroll down and download the Theme (solarized.zip)</li>
<li>Extract the solarized.zip file</li>
<li>Open the <strong>osx-terminal.app-colors-solarized</strong> folder. This folder contains Theme for the terminal.</li>
<li>Double click <strong><em>“Solarized Dark ansi.terminal”</em> </strong>file<strong> — </strong>This is the specific Theme file for Terminal.app. <em>Note: If you get a warning that this is from an unidentified developer, Right-click on the file and select “Open with” &gt; Terminal opti</em>on.</li>
<li>At this point, you have the Theme installed into your Terminal. We just need to make it a default Theme.</li>
<li>Open Terminal &gt; Preferences &gt; Text and select the “Solarized Dark …” theme and click on “Default”.</li>
</ol>
<p>From now on, your Terminal should like below.</p>
<h3 id="step-2-install-powerline">Step 2 — Install Powerline</h3>
<p>Powerline is a Python app and is a status line plugin for vim, and provides status lines and prompts for several other applications, including zsh, bash, tmux, IPython, Awesome and Qtile.</p>
<p>It makes the Terminal prompt look like below.</p>
<h4 id="2-1-install-python">2.1 Install Python</h4>
<p>Because Powerline is a Python app, we need to have Python and that too a proper version of Python.</p>
<ul>
<li>MacOS comes with Python installed already.<strong> Ensure Python’s version is 2.7.x by typing </strong><code>python -V</code> in the Terminal.</li>
<li>If it’s not 2.7, install <a href="https://brew.sh/" rel="noopener">Homebrew</a> that allows us to install various software from the CLI, by running:<code>/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"</code></li>
<li>Run <code>brew install python</code> to install the latest Python via Homebrew</li>
</ul>
<h4 id="2-2-install-pip-a-package-manager-for-python-similar-to-npm-">2.2 Install pip — A package manager for Python (similar to npm)</h4>
<p>Install pip by running the following command</p>
<p><code>$ sudo easy_install pip</code></p>
<h4 id="2-3-install-xcode-developer-cli-tools">2.3 Install XCode Developer CLI tools</h4>
<p>XCode Developer CLI tools are used by Powerline and other apps that manipulate core OSX features. So make sure to install the XCode CLI tools by running the following command.</p>
<p><code>$ xcode-select —-install</code></p>
<blockquote>Note: The above command opens up Mac’s installer and installs the XCode Developer CLI tools. If it doesn’t work, try <code><em>xcode-select -r</em></code> to reset.</blockquote>
<h4 id="2-4-install-powerline">2.4 Install Powerline</h4>
<p>Finally, install the Powerline (stable version) via pip by running the following command.</p><pre><code class="language-bash">$ pip install --user powerline-status</code></pre>
<p>If you want to install the latest development branch, then use:</p><pre><code class="language-bash">$ pip install --user git+git://github.com/powerline/powerline  //dev</code></pre>
<h4 id="2-5-add-the-powerline-daemon-to-bash">2.5 Add the Powerline daemon to bash</h4>
<p>We now need to add the Powerline daemon to bash so that it can monitor the Terminal prompt and make changes.</p>
<p><strong>2.5.1 Copy the Powerline’s installation location</strong></p>
<p>You can figure out the location of Powerline by running the following: <code>pip show powerline-status</code> Copy the value from the <code>Location</code> field.</p>
<p><strong>2.5.2 Add the daemon with a proper location to .bash_profile</strong></p>
<ol>
<li>Make sure you have <code>.bash_profile</code> file in your root directory. If not following create one by doing: <code>cd ~ &amp;&amp; touch ~/.bash_profile</code></li>
</ol>
<p>2. Open <code>.bash_profile</code> and add the following:</p><pre><code class="language-bash">export PATH=$PATH:$HOME/Library/Python/2.7/bin
powerline-daemon -q
POWERLINE_BASH_CONTINUATION=1
POWERLINE_BASH_SELECT=1
. /Users/rupa/Library/Python/2.7/lib/python/site-packages/powerline/bindings/bash/powerline.sh</code></pre>
<figcaption>Some details about bash_profile</figcaption>
</figure>
<blockquote><em>Note: The location /Users/rupa/Library/Python/2.7/lib/python/site-packages/ is from the previous step (2.5.1). Change it to match your computer’s location.</em></blockquote>
<p><strong>2.5.3. Restart the Terminal</strong></p>
<p>Completely quit the Terminal if it’s open (Terminal &gt; Quit Terminal). And open it again.</p>
<blockquote>You should be able to simply use <code><em>$ source ~/.bash_profile</em></code> to update the settings. But I got some odd <code><em>powerline-config</em></code> file is missing! Typically you get this error if you don’t have $HOME/Library/Python/2.7/bin in your PATH.</blockquote>
<p><strong>2.5.4 Your new Terminal</strong></p>
<p>Your new Terminal should look like below. It should be using “Solarized Dark ansi” theme and should show Powerline in the command prompt. But also notice that there are “?” characters! This is because Powerline uses various icons and fonts that are not available by default. So we need to install the fonts.</p>
<h3 id="step-3-install-powerline-fonts">Step 3 — Install Powerline fonts</h3>
<p>To install Powerline fonts, simply go to <a href="https://github.com/powerline/fonts" rel="noopener">https://github.com/powerline/fonts</a>. There you’ll see a whole bunch of folders. Each one is a font, aka “Patched fonts”.</p>
<blockquote>It is called “Patched fonts” because people have taken regular fonts and have added/patched additional Powerline specific icons and fonts to them.</blockquote>
<h4 id="3-1-download-the-whole-repo-and-unzip-it">3.1 Download the whole repo and unzip it</h4>
<ul>
<li>Click on the “Clone or download” button and download the whole repo so you try various fonts.</li>
<li>Unzip the fonts-master.zip</li>
</ul>
<h4 id="3-2-install-some-fonts">3.2 Install some fonts</h4>
<p>Let’s open <strong>Meslo dotted </strong>fonts<strong> </strong>folder. It will look like below. You’ll see a whole bunch of .ttf file. Each one of them is a font but some are “bold” version of the font, some are “regular” version and so on.</p>
<p>Simply double-click on the .ttf file and press “Install font” to install the font on your computer.</p>
<p>For our case, let’s install “Meslo LG L DZ Regular for Powerline.ttf” and “Meslo LG L DZ Italic for Powerline.ttf”. This will add a <strong><em>regular</em></strong> and an <strong><em>Italic</em></strong> version of the <strong><em>Meslo</em></strong> font.</p>
<h4 id="3-3-select-the-font-in-the-terminal-s-theme">3.3 Select the font in the Terminal’s Theme</h4>
<p>Remember we added “Solarized Dark” theme in Step 1? That didn’t have any fonts in it and MacOS had some default font. All we need to do is to set our <strong>Meslo dotted</strong> font for this theme and we are done!</p>
<ol>
<li>Open Terminal &gt; Preferences &gt; Text</li>
<li>Select <strong>Solarized Dark ansi </strong>Theme</li>
<li>Click on the “Font” button — This opens up “Fonts” dialog</li>
<li>In the “Fonts” dialog, select “Meslo LG L DZ for Powerline” in the Family and also select font size 14 (so it’s easier to read).</li>
</ol>
<h4 id="3-4-restart-terminal">3.4 Restart Terminal</h4>
<p>Completely quit the Terminal (Terminal &gt; Quit Terminal) and then reopen it.</p>
<h3 id="step-4-adding-git-information-to-the-prompt">Step 4 — Adding Git information to the prompt</h3>
<p>In order to display various Git status at the prompt, we need to install <a href="https://github.com/jaspernbrouwer/powerline-gitstatus" rel="noopener">powerline-gitstatus</a>. It is a simple add-on to Powerline and adds multiple colors and Themes to display various git status information.</p>
<figcaption>PS: We will be dealing with files in the “color schemes” and “themes” folders</figcaption>
</figure>
<h4 id="4-1-install-powerline-gitstatus">4.1 Install powerline-gitstatus</h4><pre><code class="language-bash">pip install --user powerline-gitstatus</code></pre>
<blockquote>Note: “ — user” command is required to install it in the user’s profile.</blockquote>
<h4 id="4-2-add-powerline-gitstatus-color-schemes-to-powerline">4.2 Add powerline-gitstatus color schemes to Powerline</h4>
<p>4.2.1 Open the following <code>colorschemes/shell/default.json</code> folder</p><pre><code class="language-bash">${powerline-install-directory}/powerline/config_files/colorschemes/shell/default.json
//For example:
/Users/rupa/Library/Python/2.7/lib/python/site-packages/powerline/config_files/colorschemes/shell/default.json</code></pre>
<p>4.2.2 Add the following colors:</p>
<p>As mentioned in the powerline-gitstatus <a href="https://github.com/jaspernbrouwer/powerline-gitstatus#installation" rel="noopener">readme</a>. PS: Just copy the colors inside “groups” and then append it to the default.json as shown below.</p>
<figcaption>Click to zoom</figcaption>
</figure>
<p>Here is my color schemes default.json (you may copy and paste this instead):</p><pre><code class="language-json">{
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
}</code></pre>
<h4 id="4-3-activate-the-theme">4.3 Activate The Theme</h4>
<p>4.3.1 Open Theme’s default.json file</p><pre><code class="language-bash">${powerline-install-directory}/powerline/config_files/themes/shell/default.json
//For example:
/Users/rupa/Library/Python/2.7/lib/python/site-packages/powerline/config_files/themes/shell/default.json</code></pre>
<p>4.3.2 Add the following to the default.json</p><pre><code class="language-json">{
"function": "powerline_gitstatus.gitstatus",
"priority": 40
}</code></pre>
<p>Below is my Powerline’s Theme default.json(you may copy and paste this instead):</p>
<blockquote>Note: I have removed everything from the “right” section and also removed “job number” (“jobnum”) to keep things clean. Otherwise, you’ll see a little artifact on the right-hand side edge of the prompt.</blockquote><pre><code class="language-json">{
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
}</code></pre>
<h4 id="4-4-restart-the-daemon">4.4 Restart the Daemon</h4>
<p>Save the file and run the following: <code><em>powerline-daemon —-replace</em></code><em> in the Terminal.</em></p>
<blockquote><strong>Important Note:</strong> Every time you make changes to Powerline’s config, in addition to restarting the Terminal, you’ll also need to <strong>restart</strong> <strong>the daemon to see the changes reflected </strong>by running: <code><em>powerline-daemon —-replace</em></code>.</blockquote>
<h4 id="4-5-restart-the-terminal">4.5 Restart The Terminal</h4>
<p>Quit the Terminal (Terminal &gt; Quit Terminal) and open it again.</p>
<p>At this point, we are all done! whew! If you open the Terminal, and navigate to any git repo, and play around, it should look like the following.</p>
<p>Here is how it looks in Solarized-Light Theme:</p>
<p>Here is how it looks in <a href="https://raw.githubusercontent.com/lysyi3m/osx-terminal-themes/master/schemes/Cobalt2.terminal" rel="noopener">Cobalt2 Theme</a>:</p>
<p>?? Thank you!</p>
<p>If you have questions, please feel free to ask me on Twitter: <a href="https://twitter.com/rajaraodv" rel="noopener">https://twitter.com/rajaraodv</a></p>
<h4 id="if-this-was-useful-please-click-the-clap-button-down-below-a-few-times-to-show-your-support-">If this was useful, please click the clap ? button down below a few times to show your support! ⬇⬇⬇ ??</h4>
<h3 id="my-other-posts">My Other Posts</h3>
<p><a href="https://medium.com/@rajaraodv/latest" rel="noopener"><em>https://medium.com/@rajaraodv/latest</em></a></p>
<h4 id="ecmascript-2015-">ECMAScript 2015+</h4>
<ol>
<li><em><a href="/news/check-out-these-useful-ecmascript-2015-es6-tips-and-tricks-6db105590377/">Check out these useful ECMAScript 2015 (ES6) tips and tricks</a></em></li>
<li><a href="https://medium.com/@rajaraodv/5-javascript-bad-parts-that-are-fixed-in-es6-c7c45d44fd81#.7e2s6cghy" rel="noopener"><em>5 JavaScript “Bad” Parts That Are Fixed In ES6</em></a></li>
<li><a href="https://medium.com/@rajaraodv/is-class-in-es6-the-new-bad-part-6c4e6fe1ee65#.4hqgpj2uv" rel="noopener"><em>Is “Class” In ES6 The New “Bad” Part?</em></a></li>
</ol>
<h4 id="terminal-improvements">Terminal Improvements</h4>
<ol>
<li><em><a href="/news/jazz-up-your-bash-terminal-a-step-by-step-guide-with-pictures-80267554cb22/">How to Jazz Up Your Terminal — A Step By Step Guide With Pictures</a></em></li>
<li><em><a href="/news/jazz-up-your-zsh-terminal-in-seven-steps-a-visual-guide-e81a8fd59a38/">Jazz Up Your “ZSH” Terminal In Seven Steps — A Visual Guide</a></em></li>
</ol>
<h4 id="www">WWW</h4>
<ol>
<li><em><a href="/news/a-fascinating-and-messy-history-of-the-web-and-javascript-video-8978dc7bda75/">A Fascinating And Messy History Of The Web And JavaScript</a></em></li>
</ol>
<h4 id="virtual-dom">Virtual DOM</h4>
<ol>
<li><a href="https://medium.com/@rajaraodv/the-inner-workings-of-virtual-dom-666ee7ad47cf" rel="noopener"><em>Inner Workings Of The Virtual DOM</em></a></li>
</ol>
<h4 id="react-performance">React Performance</h4>
<ol>
<li><a href="https://medium.com/@rajaraodv/two-quick-ways-to-reduce-react-apps-size-in-production-82226605771a#.6lepbl7ae" rel="noopener"><em>Two Quick Ways To Reduce React App’s Size In Production</em></a></li>
<li><a href="https://medium.com/@rajaraodv/using-preact-instead-of-react-70f40f53107c#.7fzp0lyo3" rel="noopener"><em>Using Preact Instead Of React</em></a></li>
</ol>
<h4 id="functional-programming">Functional Programming</h4>
<ol>
<li><a href="https://medium.com/@rajaraodv/javascript-is-turing-complete-explained-41a34287d263#.6t0b2w66p" rel="noopener"><em>JavaScript Is Turing Complete — Explained</em></a></li>
<li><a href="https://medium.com/@rajaraodv/functional-programming-in-js-with-practical-examples-part-1-87c2b0dbc276#.fbgrmoa7g" rel="noopener"><em>Functional Programming In JS — With Practical Examples (Part 1)</em></a></li>
<li><em><a href="/news/functional-programming-in-js-with-practical-examples-part-2-429d2e8ccc9e/">Functional Programming In JS — With Practical Examples (Part 2)</a></em></li>
<li><a href="https://medium.com/@rajaraodv/why-redux-needs-reducers-to-be-pure-functions-d438c58ae468#.bntrywxrf" rel="noopener"><em>Why Redux Need Reducers To Be “Pure Functions”</em></a></li>
</ol>
<h4 id="webpack">WebPack</h4>
<ol>
<li><a href="https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9#.6ot6deo2b" rel="noopener"><em>Webpack — The Confusing Parts</em></a></li>
<li><a href="https://medium.com/@rajaraodv/webpack-hot-module-replacement-hmr-e756a726a07#.y667mx4lg" rel="noopener"><em>Webpack &amp; Hot Module Replacement [HMR]</em></a><em> (under-the-hood)</em></li>
<li><a href="https://medium.com/@rajaraodv/webpacks-hmr-react-hot-loader-the-missing-manual-232336dc0d96#.fbb1e7ehl" rel="noopener"><em>Webpack’s HMR And React-Hot-Loader — The Missing Manual</em></a></li>
</ol>
<h4 id="draft-js">Draft.js</h4>
<ol>
<li><a href="https://medium.com/@rajaraodv/why-draft-js-and-why-you-should-contribute-460c4a69e6c8#.jp1tsvsqc" rel="noopener"><em>Why Draft.js And Why You Should Contribute</em></a></li>
<li><a href="https://medium.com/@rajaraodv/how-draft-js-represents-rich-text-data-eeabb5f25cf2#.hh0ue85lo" rel="noopener"><em>How Draft.js Represents Rich Text Data</em></a></li>
</ol>
<h4 id="react-and-redux-">React And Redux :</h4>
<ol>
<li><a href="https://medium.com/@rajaraodv/step-by-step-guide-to-building-react-redux-apps-using-mocks-48ca0f47f9a#.s7zsgq3u1" rel="noopener"><em>Step by Step Guide To Building React Redux Apps</em></a></li>
<li><a href="https://medium.com/@rajaraodv/a-guide-for-building-a-react-redux-crud-app-7fe0b8943d0f#.g99gruhdz" rel="noopener"><em>A Guide For Building A React Redux CRUD App</em></a><em> (3-page app)</em></li>
<li><a href="https://medium.com/@rajaraodv/using-middlewares-in-react-redux-apps-f7c9652610c6#.oentrjqpj" rel="noopener"><em>Using Middlewares In React Redux Apps</em></a></li>
<li><a href="https://medium.com/@rajaraodv/adding-a-robust-form-validation-to-react-redux-apps-616ca240c124#.jq013tkr1" rel="noopener"><em>Adding A Robust Form Validation To React Redux Apps</em></a></li>
<li><a href="https://medium.com/@rajaraodv/securing-react-redux-apps-with-jwt-tokens-fcfe81356ea0#.xci6o9s6w" rel="noopener"><em>Securing React Redux Apps With JWT Tokens</em></a></li>
<li><a href="https://medium.com/@rajaraodv/handling-transactional-emails-in-react-redux-apps-8b1134748f76#.a24nenmnt" rel="noopener"><em>Handling Transactional Emails In React Redux Apps</em></a></li>
<li><a href="https://medium.com/@rajaraodv/the-anatomy-of-a-react-redux-app-759282368c5a#.7wwjs8eqo" rel="noopener"><em>The Anatomy Of A React Redux App</em></a></li>
<li><a href="https://medium.com/@rajaraodv/why-redux-needs-reducers-to-be-pure-functions-d438c58ae468#.bntrywxrf" rel="noopener"><em>Why Redux Need Reducers To Be “Pure Functions”</em></a></li>
<li><a href="https://medium.com/@rajaraodv/two-quick-ways-to-reduce-react-apps-size-in-production-82226605771a#.6lepbl7ae" rel="noopener"><em>Two Quick Ways To Reduce React App’s Size In Production</em></a></li>
</ol>
<h4 id="if-this-was-useful-please-share-it-thank-you-">If this was useful, please share it! Thank you! ??</h4>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
