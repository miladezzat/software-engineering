---
card: "/images/default.jpg"
tags: [JavaScript]
description: "Making a playable piano keyboard can be a great way to learn "
author: "Milad E. Fahmy"
title: "How to Build a Piano Keyboard Using Vanilla JavaScript"
created: "2021-08-15T23:43:22+02:00"
modified: "2021-08-15T23:43:22+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-projects tag-tutorial tag-coding ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build a Piano Keyboard Using Vanilla JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/02/twitterCard-piano.jpg 300w,
/news/content/images/size/w600/2020/02/twitterCard-piano.jpg 600w,
/news/content/images/size/w1000/2020/02/twitterCard-piano.jpg 1000w,
/news/content/images/size/w2000/2020/02/twitterCard-piano.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/02/twitterCard-piano.jpg" alt="How to Build a Piano Keyboard Using Vanilla JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;script src="playKeyboard.js"&gt;&lt;/script&gt;
</code></pre>
<code>id = “keyboard”</code>.</p>
/* ~ */
192: 'C,-2',
/* 1 */
49: 'C#,-2',
/* 2 */
50: 'D,-2',
/* 3 */
51: 'D#,-2',
//...and the rest of the keys
}
</code></pre>
<p>Getting the right keycode initially involved a bit of trial and error, but later I realized you can just use another function (<code>getDispStr()</code> on line 318) to force the correct string to be displayed.</p>
<p>On the next line, we declare the <code>selectSound</code> object and set the <code>value</code> property to zero to have audioSynth.js load the sound profile for piano. You may wish to enter a different value (can be 0-3) if you want to try out other instruments. See line 233 of audioSynth.js with <code>Synth.loadSoundProfile</code> for more details.</p>
<p>On line 216 with <code>var notes</code>, we retrieve the available notes for one octave (C, C#, D…B) from audioSynth.js.</p>
<p>We generate our keyboard by looping through each octave and then each note in that octave. For each note, we create a <code>&lt;div&gt;</code> element to represent the appropriate key using <code>document.createElement(‘div’)</code>.</p>
'&lt;span name="OCTAVE_LABEL" value="' + i + '"&gt;' + (__octave + parseInt(i)) + '&lt;/span&gt;' +
(n.substr(1,1)?n.substr(1,1):'');
</code></pre>
thisKey.addEventListener('mousedown', () =&gt; {
fnPlayKeyboard({ keyCode });
});
</code></pre>
<p>We set up an array called <code>keysPressed</code> in line 206 to detect what keys are being pressed/clicked. For simplicity, we will assume that a key being pressed can include it being clicked as well.</p>
<p>We can divide the process of handling key presses into 3 steps: adding the keycode of the pressed key to <code>keysPressed</code>, playing the appropriate note, and removing the keycode from <code>keysPressed</code>.</p>
<p>If the added keycode is one of the key bindings we assigned, then we call <code>fnPlayNote()</code> on line 304 to play the note associated with that key.</p>
<p>In <code>fnPlayNote()</code>, we first create a new <code>Audio()</code> element <code>container</code> for our note using the <code>generate()</code> method from audiosynth.js. When the audio loads, we can then play the note.</p>
<p>Lines 308-313 are legacy code and seem they can just be replaced by <code>container.play()</code>, though I have not done any extensive testing to see what the difference is.</p>
<p>Removing a key press is also quite straightforward, as you can just remove the key from the <code>keysPressed</code> array with the <code>splice</code> method on line 298. For more details, see the function called <code>fnRemoveKeyBinding()</code>.</p>
while(i--) {
if(keysPressed[i]==e.keyCode) {
return false;
}
}
</code></pre>
<li>
<p>We set up our index HTML file to load the appropriate JS files and execute<br>
<code>playKeyboard()</code> in <code>&lt;body&gt;</code> to generate and make the keyboard functional. We have a <code>&lt;div&gt;</code> element with <code>id= "keyboard"</code> where the keyboard will be displayed on the page.</p>
</li>
<li>
<p>In our JavaScript file playKeyboard.js, we set up our key bindings with keycodes as keys and musical notes as values. We also create two reverse lookup tables in which one is responsible for looking up the appropriate key label based on the note and the other for looking up the correct keycode.</p>
</li>
<li>
<p>We dynamically generate the keyboard by looping through every note in each octave range. Each key is created as its own <code>&lt;div&gt;</code> element. We use the reverse lookup tables to generate the key label and correct keycode. Then an event listener on <code>mousedown</code> uses it to call <code>fnPlayKeyboard()</code> to play the note. The<br>
<code>keydown</code> event calls the same function but does not need a reverse lookup table to get the keycode.</p>
</li>
<li>
<p>We handle key presses resulting from either mouse clicks or computer key presses in 3 steps: add keycode of the pressed key to an array, play the appropriate note, and remove keycode from that array. We must be careful not to repeatedly play a note (from the beginning) while the user continuously holds down a key.</p>
</li>
</ol>
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
