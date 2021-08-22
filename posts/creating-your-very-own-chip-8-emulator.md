---
card: "/images/default.jpg"
tags: [JavaScript]
description: Before diving into this article, I'd like to provide a quick
author: "Milad E. Fahmy"
title: "How to Create Your Very Own Chip-8 Emulator"
created: "2021-08-15T19:29:40+02:00"
modified: "2021-08-15T19:29:40+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-emulator tag-bitwise ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create Your Very Own Chip-8 Emulator</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/06/chip8thumbnail-1.png 300w,
/news/content/images/size/w600/2020/06/chip8thumbnail-1.png 600w,
/news/content/images/size/w1000/2020/06/chip8thumbnail-1.png 1000w,
/news/content/images/size/w2000/2020/06/chip8thumbnail-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/06/chip8thumbnail-1.png" alt="How to Create Your Very Own Chip-8 Emulator">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Before diving into this article, I'd like to provide a quick introduction to what emulators are. In the simplest terms, an emulator is software that allows for one system to behave like another system.</p>
<p>A very popular use for emulators nowadays is to emulate old video game systems such as the Nintendo 64, Gamecube, and so forth.</p>
<p>For example, with a Nintendo 64 emulator we can run Nintendo 64 games directly on a Windows 10 computer, without needing the actual console. In our case, we are emulating Chip-8 on our host system through the use of the emulator we'll be creating in this article.</p>
<p>One of the simplest ways to learn how to make your own emulators is to start with a Chip-8 emulator. With only 4KB of memory and 36 instructions, you can be up and running with your very own Chip-8 emulator in less than a day. You'll also gain the knowledge necessary to move on to bigger, more in-depth emulators.</p>
<p>This will be a very in-depth and long article in the hopes of making sense of everything. Having a basic understanding of hex, binary, and bitwise operations would be beneficial.</p>
<p>Each section is split by the file we're working in, and split again by the function we're working on to hopefully make it easier to follow. Once we're done with each file, I'll provide a link to the full code, with comments.</p>
<p>For this entire article, we'll be referencing the <a href="http://devernay.free.fr/hacks/chip8/C8TECH10.HTM#2.2">Chip-8 technical reference</a> by Cowgod which explains every detail of Chip-8.</p>
<p>You can use whatever language you want to make the emulator, though this article will be using JavaScript. I feel it's the simplest language to use for first-time emulator creation considering it provides support for rendering, keyboard, and sound right out of the box.</p>
<p>The most important thing is that you understand the process of emulation, so use whatever language you are most comfortable with.</p>
<p>If you do decide to use JavaScript, you'll need to be running a local web server for testing. I use Python for this which allows you to start a web server in the current folder by running <code>python3 -m http.server</code>.</p>
<p>We're going to start by creating the <code>index.html</code> and <code>style.css</code> files, then move on to the renderer, keyboard, speaker, and finally the actual CPU. Our project structure will look like this:</p>
<pre><code>- roms
- scripts
chip8.js
cpu.js
keyboard.js
renderer.js
speaker.js
index.html
style.css
</code></pre>
<h2 id="indexandstyles">Index and Styles</h2>
<p>There's nothing crazy about these two files, they are very basic. The <code>index.html</code> file simply loads in the styles, creates a canvas element, and loads the <code>chip8.js</code> file.</p>
<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;canvas&gt;&lt;/canvas&gt;
&lt;script type="module" src="scripts/chip8.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<p>The <code>style.css</code> file is even simpler, as the only thing being styled is the canvas to make it easier to spot.</p>
<pre><code class="language-css">canvas {
border: 2px solid black;
}
</code></pre>
<p>You won't have to touch these two files again throughout this article, but feel free to style the page in whatever way you'd like.</p>
<h2 id="rendererjs">renderer.js</h2>
<p>Our renderer will handle everything graphics related. It'll initialize our canvas element, toggle pixels within our display, and render those pixels on our canvas.</p>
<pre><code class="language-javascript">class Renderer {
}
export default Renderer;
</code></pre>
<h3 id="constructorscale">constructor(scale)</h3>
<p>The first order of business is to construct our renderer. This constructor will take in a single argument, <code>scale</code>, which will allow us to scale the display up or down making pixels larger or smaller.</p>
<pre><code class="language-javascript">class Renderer {
constructor(scale) {
}
}
export default Renderer;
</code></pre>
<p>We need to initialize a few things within this constructor. First, the display size, which for Chip-8 is 64x32 pixels.</p>
<pre><code class="language-javascript">this.cols = 64;
this.rows = 32;
</code></pre>
<p>On a modern system, this is incredibly small and hard to see which is why we want to scale up the display to make it more user-friendly. Staying within our constructor, we want to set the scale, grab the canvas, get the context, and set the width and height of the canvas.</p>
<pre><code class="language-javascript">this.scale = scale;
this.canvas = document.querySelector('canvas');
this.ctx = this.canvas.getContext('2d');
this.canvas.width = this.cols * this.scale;
this.canvas.height = this.rows * this.scale;
</code></pre>
<p>As you can see, we are using the <code>scale</code> variable to increase the width and height of our canvas. We'll be using <code>scale</code> again when we start rendering the pixels on the screen.</p>
<p>The last item we need to add to our constructor is an array that'll act as our display. Since a Chip-8 display is 64x32 pixels, the size of our array is simply 64 * 32 (cols * rows), or 2048. Basically, we're representing every pixel, on (1) or off (0), on a Chip-8 display with this array.</p>
<pre><code class="language-javascript">this.display = new Array(this.cols * this.rows);
</code></pre>
<p>This will later be used to render pixels within our canvas in the correct places.</p>
<h3 id="setpixelxy">setPixel(x, y)</h3>
<p>Whenever our emulator toggles a pixel on or off, the display array will be modified to represent that.</p>
<p>Speaking of toggling pixels on or off, let's create the function that's in charge of that. We'll call the function <code>setPixel</code> and it'll take an <code>x</code> and <code>y</code> position as parameters.</p>
<pre><code class="language-javascript">setPixel(x, y) {
}
</code></pre>
<p>According to the technical reference, if a pixel is positioned outside of the bounds of the display, it should wrap around to the opposite side, so we need to account for that.</p>
<pre><code class="language-javascript">if (x &gt; this.cols) {
x -= this.cols;
} else if (x &lt; 0) {
x += this.cols;
}
if (y &gt; this.rows) {
y -= this.rows;
} else if (y &lt; 0) {
y += this.rows;
}
</code></pre>
<p>With that figured out, we can properly calculate the location of the pixel on the display.</p>
<pre><code class="language-javascript">let pixelLoc = x + (y * this.cols);
</code></pre>
<p>If you're not familiar with bitwise operations, this next piece of code might be confusing. According to the technical reference, sprites are XORed onto the display:</p>
<pre><code class="language-javascript">this.display[pixelLoc] ^= 1;
</code></pre>
<p>All that this line is doing is toggling the value at <code>pixelLoc</code> (0 to 1 or 1 to 0). A value of 1 means a pixel should be drawn, a value of 0 means a pixel should be erased. From here, we just return a value to signify whether a pixel was erased or not.</p>
<p>This part, in particular, is important later on when we get to the CPU and writing the different instructions.</p>
<pre><code class="language-javascript">return !this.display[pixelLoc];
</code></pre>
<p>If this returns true, a pixel was erased. If this returns false, nothing was erased. When we get to the instruction that utilizes this function, it'll make more sense.</p>
<h3 id="clear">clear()</h3>
<p>This function completely clears our <code>display</code> array by reinitializing it.</p>
<pre><code class="language-javascript">clear() {
this.display = new Array(this.cols * this.rows);
}
</code></pre>
<h3 id="render">render()</h3>
<p>The <code>render</code> function is in charge of rendering the pixels in the <code>display</code> array onto the screen. For this project, it will run 60 times per second.</p>
<pre><code class="language-javascript">render() {
// Clears the display every render cycle. Typical for a render loop.
this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
// Loop through our display array
for (let i = 0; i &lt; this.cols * this.rows; i++) {
// Grabs the x position of the pixel based off of `i`
let x = (i % this.cols) * this.scale;
// Grabs the y position of the pixel based off of `i`
let y = Math.floor(i / this.cols) * this.scale;
// If the value at this.display[i] == 1, then draw a pixel.
if (this.display[i]) {
// Set the pixel color to black
this.ctx.fillStyle = '#000';
// Place a pixel at position (x, y) with a width and height of scale
this.ctx.fillRect(x, y, this.scale, this.scale);
}
}
}
</code></pre>
<h3 id="testrender">testRender()</h3>
<p>For testing purposes, let's create a function that will draw a couple of pixels on the screen.</p>
<pre><code class="language-javascript">testRender() {
this.setPixel(0, 0);
this.setPixel(5, 2);
}
</code></pre>
<p><a href="https://github.com/Erigitic/chip8-emulator/blob/master/scripts/renderer.js">Full renderer.js Code</a></p>
<h2 id="chip8js">chip8.js</h2>
<p>Now that we have our renderer, we need to initialize it within our <code>chip8.js</code> file.</p>
<pre><code class="language-javascript">import Renderer from './renderer.js';
const renderer = new Renderer(10);
</code></pre>
<p>From here we need to create a loop that runs at, according to the technical reference, 60hz or 60 frames per second. Just like our render function, this is not Chip-8 specific and can be modified a bit to work with practically any other project.</p>
<pre><code class="language-javascript">let loop;
let fps = 60, fpsInterval, startTime, now, then, elapsed;
function init() {
fpsInterval = 1000 / fps;
then = Date.now();
startTime = then;
// TESTING CODE. REMOVE WHEN DONE TESTING.
renderer.testRender();
renderer.render();
// END TESTING CODE
loop = requestAnimationFrame(step);
}
function step() {
now = Date.now();
elapsed = now - then;
if (elapsed &gt; fpsInterval) {
// Cycle the CPU. We'll come back to this later and fill it out.
}
loop = requestAnimationFrame(step);
}
init();
</code></pre>
<p>If you start up the web server and load the page in a web browser you should see two pixels drawn on the screen. If you want, play with the scale and find something that works best for you.</p>
<h2 id="keyboardjs">keyboard.js</h2>
<p><a href="http://devernay.free.fr/hacks/chip8/C8TECH10.HTM#2.3">Keyboard Reference</a></p>
<p>The technical reference tells us that Chip-8 uses a 16-key hex keypad that is laid out as follows:</p>
<table>
<thead>
<tr>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>2</td>
<td>3</td>
<td>C</td>
</tr>
<tr>
<td>4</td>
<td>5</td>
<td>6</td>
<td>D</td>
</tr>
<tr>
<td>7</td>
<td>8</td>
<td>9</td>
<td>E</td>
</tr>
<tr>
<td>A</td>
<td>0</td>
<td>B</td>
<td>F</td>
</tr>
</tbody>
</table>
<p>In order to make this work on modern systems, we have to map a key on our keyboard to each one of these Chip-8 keys. We'll do that within our constructor, as well as a few other things.</p>
<h3 id="constructorfunction Object() { [native code] }1">constructor()</h3>
<pre><code class="language-javascript">class Keyboard {
constructor() {
this.KEYMAP = {
49: 0x1, // 1
50: 0x2, // 2
51: 0x3, // 3
52: 0xc, // 4
81: 0x4, // Q
87: 0x5, // W
69: 0x6, // E
82: 0xD, // R
65: 0x7, // A
83: 0x8, // S
68: 0x9, // D
70: 0xE, // F
90: 0xA, // Z
88: 0x0, // X
67: 0xB, // C
86: 0xF  // V
}
this.keysPressed = [];
// Some Chip-8 instructions require waiting for the next keypress. We initialize this function elsewhere when needed.
this.onNextKeyPress = null;
window.addEventListener('keydown', this.onKeyDown.bind(this), false);
window.addEventListener('keyup', this.onKeyUp.bind(this), false);
}
}
export default Keyboard;
</code></pre>
<p>Within the constructor, we created a keymap that's mapping keys on our keyboard to keys on the Chip-8 keyboard. As well as that, we have an array to keep track of pressed keys, a null variable (which we'll talk about later), and a couple of event listeners for handling keyboard input.</p>
<h3 id="iskeypressedkeycode">isKeyPressed(keyCode)</h3>
<p>We need a way to check if a certain key is pressed. This will simply check the <code>keysPressed</code> array for the specified Chip-8 <code>keyCode</code>.</p>
<pre><code class="language-javascript">isKeyPressed(keyCode) {
return this.keysPressed[keyCode];
}
</code></pre>
<h3 id="onkeydownevent">onKeyDown(event)</h3>
<p>In our constructor, we added a <code>keydown</code> event listener that will call this function when triggered.</p>
<pre><code class="language-javascript">onKeyDown(event) {
let key = this.KEYMAP[event.which];
this.keysPressed[key] = true;
// Make sure onNextKeyPress is initialized and the pressed key is actually mapped to a Chip-8 key
if (this.onNextKeyPress !== null &amp;&amp; key) {
this.onNextKeyPress(parseInt(key));
this.onNextKeyPress = null;
}
}
</code></pre>
<p>All we're doing in here is adding the pressed key to our <code>keysPressed</code> array, and running <code>onNextKeyPress</code> if it's initialized and a valid key was pressed.</p>
<p>Let's talk about that if statement. One of the Chip-8 instructions (<code>Fx0A</code>) waits for a keypress before continuing execution. We'll make the <code>Fx0A</code> instruction initialize the <code>onNextKeyPress</code> function, which will allow us to mimic this behavior of waiting until the next keypress. Once we write this instruction, I'll explain this in more detail as it should make more sense when you see it.</p>
<h3 id="onkeyupevent">onKeyUp(event)</h3>
<p>We also have an event listener for handling <code>keyup</code> events, and this function will be called when that event is triggered.</p>
<pre><code class="language-javascript">onKeyUp(event) {
let key = this.KEYMAP[event.which];
this.keysPressed[key] = false;
}
</code></pre>
<p><a href="https://github.com/Erigitic/chip8-emulator/blob/master/scripts/keyboard.js">Full keyboard.js Code</a></p>
<h2 id="chip8js">chip8.js</h2>
<p>With the keyboard class created, we can head back into <code>chip8.js</code> and hook the keyboard up.</p>
<pre><code class="language-javascript">import Renderer from './renderer.js';
import Keyboard from './keyboard.js'; // NEW
const renderer = new Renderer(10);
const keyboard = new Keyboard(); // NEW
</code></pre>
<h2 id="speakerjs">speaker.js</h2>
<p>Let's make some sounds now. This file is fairly straightforward and involves creating a simple sound and starting/stopping it.</p>
<h3 id="constructorfunction Object() { [native code] }1">constructor</h3>
<pre><code class="language-javascript">class Speaker {
constructor() {
const AudioContext = window.AudioContext || window.webkitAudioContext;
this.audioCtx = new AudioContext();
// Create a gain, which will allow us to control the volume
this.gain = this.audioCtx.createGain();
this.finish = this.audioCtx.destination;
// Connect the gain to the audio context
this.gain.connect(this.finish);
}
}
export default Speaker;
</code></pre>
<p>All we're doing here is creating an <code>AudioContext</code> and connecting a gain to it so we can control the volume. I won't be adding volume control in this tutorial, but if you'd like to add it yourself you simply use the following:</p>
<pre><code class="language-javascript">// Mute the audio
this.gain.setValueAtTime(0, this.audioCtx.currentTime);
</code></pre>
<pre><code class="language-javascript">// Unmute the audio
this.gain.setValueAtTime(1, this.audioCtx.currentTime);
</code></pre>
<h3 id="playfrequency">play(frequency)</h3>
<p>This function does exactly what the name suggests: plays a sound at the desired frequency.</p>
<pre><code class="language-javascript">play(frequency) {
if (this.audioCtx &amp;&amp; !this.oscillator) {
this.oscillator = this.audioCtx.createOscillator();
// Set the frequency
this.oscillator.frequency.setValueAtTime(frequency || 440, this.audioCtx.currentTime);
// Square wave
this.oscillator.type = 'square';
// Connect the gain and start the sound
this.oscillator.connect(this.gain);
this.oscillator.start();
}
}
</code></pre>
<p>We are creating an oscillator which is what will be playing our sound. We set its frequency, the type, connect it to the gain, then finally play the sound. Nothing too crazy here.</p>
<h3 id="stop">stop()</h3>
<p>We eventually have to stop the sound so it doesn't play constantly.</p>
<pre><code class="language-javascript">stop() {
if (this.oscillator) {
this.oscillator.stop();
this.oscillator.disconnect();
this.oscillator = null;
}
}
</code></pre>
<p>All this is doing is stopping the sound, disconnecting it, and setting it to null so it can be reinitialized in <code>play()</code>.</p>
<p><a href="https://github.com/Erigitic/chip8-emulator/blob/master/scripts/speaker.js">Full speaker.js Code</a></p>
<h2 id="chip8js">chip8.js</h2>
<p>We can now hook the speaker up to our main <code>chip8.js</code> file.</p>
<pre><code class="language-javascript">import Renderer from './renderer.js';
import Keyboard from './keyboard.js';
import Speaker from './speaker.js'; // NEW
const renderer = new Renderer(10);
const keyboard = new Keyboard();
const speaker = new Speaker(); // NEW
</code></pre>
<h2 id="cpujs">cpu.js</h2>
<p>Now we're getting into the actual Chip-8 emulator. This is where things get a little bit crazy, but I'll do my best to explain everything in a way that hopefully makes sense of it all.</p>
<h3 id="constructorrendererkeyboardspeaker">constructor(renderer, keyboard, speaker)</h3>
<p>We need to initialize a few Chip-8 specific variables within our constructor, along with a few other variables. We're going to be looking at <a href="http://devernay.free.fr/hacks/chip8/C8TECH10.HTM#2.0">section 2</a> of the technical reference to figure out the specifications for our Chip-8 emulator.</p>
<p>Here are the specifications for Chip-8:</p>
<ul>
<li>4KB (4096 bytes) of memory</li>
<li>16 8-bit registers</li>
<li>A 16-bit register (<code>this.i</code>) to store memory addresses</li>
<li>Two timers. One for the delay, and one for the sound.</li>
<li>A program counter that stores the address currently being executed</li>
<li>An array to represent the stack</li>
</ul>
<p>We also have a variable that stores whether the emulator is paused or not, and the execution speed of the emulator.</p>
<pre><code class="language-javascript">class CPU {
constructor(renderer, keyboard, speaker) {
this.renderer = renderer;
this.keyboard = keyboard;
this.speaker = speaker;
// 4KB (4096 bytes) of memory
this.memory = new Uint8Array(4096);
// 16 8-bit registers
this.v = new Uint8Array(16);
// Stores memory addresses. Set this to 0 since we aren't storing anything at initialization.
this.i = 0;
// Timers
this.delayTimer = 0;
this.soundTimer = 0;
// Program counter. Stores the currently executing address.
this.pc = 0x200;
// Don't initialize this with a size in order to avoid empty results.
this.stack = new Array();
// Some instructions require pausing, such as Fx0A.
this.paused = false;
this.speed = 10;
}
}
export default CPU;
</code></pre>
<h3 id="loadspritesintomemory">loadSpritesIntoMemory()</h3>
<p>For this function, we'll be referencing <a href="http://devernay.free.fr/hacks/chip8/C8TECH10.HTM#2.4">section 2.4</a> of the technical reference.</p>
<p>Chip-8 makes use of 16, 5 byte, sprites. These sprites are simply the hex digits 0 through F. You can see all of the sprites, with their binary and hex values, in section 2.4.</p>
<p>In our code, we simply store the hex values of the sprites that the technical reference provides in an array. If you don't want to type them all out by hand, please feel free to copy and paste the array into your project.</p>
<p>The reference states that these sprites are stored in the interpreter section of memory (0x000 to 0x1FFF). Let's go ahead and look at the code for this function to see how this is done.</p>
<pre><code class="language-javascript">loadSpritesIntoMemory() {
// Array of hex values for each sprite. Each sprite is 5 bytes.
// The technical reference provides us with each one of these values.
const sprites = [
0xF0, 0x90, 0x90, 0x90, 0xF0, // 0
0x20, 0x60, 0x20, 0x20, 0x70, // 1
0xF0, 0x10, 0xF0, 0x80, 0xF0, // 2
0xF0, 0x10, 0xF0, 0x10, 0xF0, // 3
0x90, 0x90, 0xF0, 0x10, 0x10, // 4
0xF0, 0x80, 0xF0, 0x10, 0xF0, // 5
0xF0, 0x80, 0xF0, 0x90, 0xF0, // 6
0xF0, 0x10, 0x20, 0x40, 0x40, // 7
0xF0, 0x90, 0xF0, 0x90, 0xF0, // 8
0xF0, 0x90, 0xF0, 0x10, 0xF0, // 9
0xF0, 0x90, 0xF0, 0x90, 0x90, // A
0xE0, 0x90, 0xE0, 0x90, 0xE0, // B
0xF0, 0x80, 0x80, 0x80, 0xF0, // C
0xE0, 0x90, 0x90, 0x90, 0xE0, // D
0xF0, 0x80, 0xF0, 0x80, 0xF0, // E
0xF0, 0x80, 0xF0, 0x80, 0x80  // F
];
// According to the technical reference, sprites are stored in the interpreter section of memory starting at hex 0x000
for (let i = 0; i &lt; sprites.length; i++) {
this.memory[i] = sprites[i];
}
}
</code></pre>
<p>All we did was loop through each byte in the <code>sprites</code> array and stored it in memory starting at hex <code>0x000</code>.</p>
<h3 id="loadprogramintomemoryprogram">loadProgramIntoMemory(program)</h3>
<p>In order to run ROMs, we have to load them into memory. This is a lot easier then it might sound. All that we have to do is loop through the contents of the ROM/program and store it in memory. The technical reference specifically <a href="http://devernay.free.fr/hacks/chip8/C8TECH10.HTM#2.1">tells us</a> that "most Chip-8 programs start at location 0x200". So when we load the ROM into memory, we start at <code>0x200</code> and increment from there.</p>
<pre><code class="language-javascript">loadProgramIntoMemory(program) {
for (let loc = 0; loc &lt; program.length; loc++) {
this.memory[0x200 + loc] = program[loc];
}
}
</code></pre>
<h3 id="loadromromname">loadRom(romName)</h3>
<p>Now we have a way to load the ROM into memory, but we have to grab the ROM from the filesystem first before it can be loaded into memory. For this to work, you have to have a ROM. I've included a few in the <a href="https://github.com/Erigitic/chip8-emulator/tree/master/roms">GitHub repo</a> for you to download and put into the <code>roms</code> folder of your project.</p>
<p>JavaScript provides a way to make an HTTP request and retrieve a file. I've added comments to the code below to explain what's going on:</p>
<pre><code class="language-javascript">loadRom(romName) {
var request = new XMLHttpRequest;
var self = this;
// Handles the response received from sending (request.send()) our request
request.onload = function() {
// If the request response has content
if (request.response) {
// Store the contents of the response in an 8-bit array
let program = new Uint8Array(request.response);
// Load the ROM/program into memory
self.loadProgramIntoMemory(program);
}
}
// Initialize a GET request to retrieve the ROM from our roms folder
request.open('GET', 'roms/' + romName);
request.responseType = 'arraybuffer';
// Send the GET request
request.send();
}
</code></pre>
<p>From here, we can start on the CPU cycle which will handle the execution of instructions, along with a few other things.</p>
<h3 id="cycle">cycle()</h3>
<p>I think it'll be easier to understand everything if you can see what happens every time the CPU cycles. This is the function we will be calling in our <code>step</code> function in <code>chip8.js</code>, which if you remember, is executed about 60 times per second. We're going to take this function piece by piece.</p>
<p>At this point, the functions being called within <code>cycle</code> have yet to be created. We'll create them soon.</p>
<p>The first piece of code within our <code>cycle</code> function is a for loop that handles the execution of instructions. This is where our <code>speed</code> variable comes into play. The higher this value, the more instructions that will be executed every cycle.</p>
<pre><code class="language-javascript">cycle() {
for (let i = 0; i &lt; this.speed; i++) {
}
}
</code></pre>
<p>We also want to keep in mind that instructions should only be executed when the emulator is running.</p>
<pre><code class="language-javascript">cycle() {
for (let i = 0; i &lt; this.speed; i++) {
if (!this.paused) {
}
}
}
</code></pre>
<p>If you take a look at <a href="http://devernay.free.fr/hacks/chip8/C8TECH10.HTM#3.1">section 3.1</a>, you can see all the different instructions and their opcodes. They look something like <code>00E0</code> or <code>9xy0</code> to give a few examples. So our job is to grab that opcode from memory and pass that along to another function that'll handle the execution of that instruction. Let's take a look at the code first, and then I'll explain it:</p>
<pre><code class="language-javascript">cycle() {
for (let i = 0; i &lt; this.speed; i++) {
if (!this.paused) {
let opcode = (this.memory[this.pc] &lt;&lt; 8 | this.memory[this.pc + 1]);
this.executeInstruction(opcode);
}
}
}
</code></pre>
<p>Let's take a look at this line in particular: <code>let opcode = (this.memory[this.pc] &lt;&lt; 8 | this.memory[this.pc + 1]);</code>. For those that aren't very familiar with bitwise operations, this can be very intimidating.</p>
<p>First of all, each instruction is 16 bits (2 bytes) long (<a href="http://devernay.free.fr/hacks/chip8/C8TECH10.HTM#3.0">3.0</a>), but our memory is made up of 8 bit (1 byte) pieces. This means we have to combine two pieces of memory in order to get the full opcode. That's why we have <code>this.pc</code> and <code>this.pc + 1</code> in the line of code above. We're simply grabbing both halves of the opcode.</p>
<p>But you can't just combine two, 1-byte values to get a 2-byte value. To properly do this, we need to shift the first piece of memory, <code>this.memory[this.pc]</code>, 8 bits left to make it 2 bytes long. In the most basic of terms, this will add two zeros, or more accurately hex value <code>0x00</code> onto the right-hand side of our 1-byte value, making it 2 bytes.</p>
<p>For example, shifting hex <code>0x11</code> 8 bits left will give us hex <code>0x1100</code>. From there, we bitwise OR (<code>|</code>) it with the second piece of memory, <code>this.memory[this.pc + 1])</code>.</p>
<p>Here's a step by step example that will help you better understand what this all means.</p>
<p>Let's assume a few values, each 1 byte in size:</p>
<p><code>this.memory[this.pc] = PC = 0x10</code><br>
<code>this.memory[this.pc + 1] = PC + 1 = 0xF0</code>
</p>
<p>Shift <code>PC</code> 8 bits (1 byte) left to make it 2 bytes:</p>
<p><code>PC = 0x1000</code></p>
<p>Bitwise OR <code>PC</code> and <code>PC + 1</code>:</p>
<p><code>PC | PC + 1 = 0x10F0</code></p>
<p>or</p>
<p><code>0x1000 | 0xF0 = 0x10F0</code></p>
<p>Lastly, we want to update our timers when are emulator is running (not paused), play sounds, and render sprites on the screen:</p>
<pre><code class="language-javascript">cycle() {
for (let i = 0; i &lt; this.speed; i++) {
if (!this.paused) {
let opcode = (this.memory[this.pc] &lt;&lt; 8 | this.memory[this.pc + 1]);
this.executeInstruction(opcode);
}
}
if (!this.paused) {
this.updateTimers();
}
this.playSound();
this.renderer.render();
}
</code></pre>
<p>This function is the brain of our emulator in a way. It handles the execution of instructions, updates timers, plays sound, and renders content on the screen.</p>
<p>We don't have any of these functions created yet but seeing how the CPU cycles through everything will hopefully make these functions make a lot more sense when we do create them.</p>
<h3 id="updatetimers">updateTimers()</h3>
<p>Let's move on to <a href="http://devernay.free.fr/hacks/chip8/C8TECH10.HTM#2.5">section 2.5</a> and set up the logic for the timers and sound.</p>
<p>Each timer, delay and sound, decrement by 1 at a rate of 60Hz. In other words, every 60 frames our timers will decrement by 1.</p>
<pre><code class="language-javascript">updateTimers() {
if (this.delayTimer &gt; 0) {
this.delayTimer -= 1;
}
if (this.soundTimer &gt; 0) {
this.soundTimer -= 1;
}
}
</code></pre>
<p>The delay timer is used for keeping track of when certain events occur. This timer is only used in two instructions: once for setting its value, and another for reading its value and branching to another instruction if a certain value is present.</p>
<p>The sound timer is what controls the length of the sound. As long as the value of <code>this.soundTimer</code> is greater than zero, the sound will continue to play. When the sound timer hits zero, the sound will stop. That brings us into our next function where we will be doing exactly that.</p>
<h3 id="playsound">playSound()</h3>
<p>To reiterate, as long as the sound timer is greater than zero, we want to play a sound. We will be using the <code>play</code> function from our <code>Speaker</code> class we made earlier to play a sound with a frequency of 440.</p>
<pre><code class="language-javascript">playSound() {
if (this.soundTimer &gt; 0) {
this.speaker.play(440);
} else {
this.speaker.stop();
}
}
</code></pre>
<h3 id="executeinstructionopcode">executeInstruction(opcode)</h3>
<p>For this entire function, we'll be referencing <a href="http://devernay.free.fr/hacks/chip8/C8TECH10.HTM#3.0">section 3.0 and 3.1</a> of the technical reference.</p>
<p>This is the final function we need for this file, and this one is long. We have to write out the logic for all 36 Chip-8 instructions. Thankfully, most of these instructions only require a few lines of code.</p>
<p>The first piece of information to be aware of is that all instructions are 2 bytes long. So every time we execute an instruction, or run this function, we have to increment the program counter (<code>this.pc</code>) by 2 so the CPU knows where the next instruction is.</p>
<pre><code class="language-javascript">executeInstruction(opcode) {
// Increment the program counter to prepare it for the next instruction.
// Each instruction is 2 bytes long, so increment it by 2.
this.pc += 2;
}
</code></pre>
<p>Let's take a look at this part of section 3.0 now:</p>
<pre><code>In these listings, the following variables are used:
nnn or addr - A 12-bit value, the lowest 12 bits of the instruction
n or nibble - A 4-bit value, the lowest 4 bits of the instruction
x - A 4-bit value, the lower 4 bits of the high byte of the instruction
y - A 4-bit value, the upper 4 bits of the low byte of the instruction
kk or byte - An 8-bit value, the lowest 8 bits of the instruction
</code></pre>
<p>To avoid repeating code, we should create variables for the <code>x</code> and <code>y</code> values as they are the ones used by nearly every instruction. The other variables listed above aren't used enough to warrant calculating their values every time.</p>
<p>These two values are each 4 bits (aka. half a byte or a nibble) in size. The <code>x</code> value is located in the lower 4 bits of the high byte and <code>y</code> is located in the upper 4 bits of the low byte.</p>
<p>For example, if we have an instruction <code>0x5460</code>, the high byte would be <code>0x54</code> and the low byte would be <code>0x60</code>. The lower 4 bits, or nibble, of the high byte would be <code>0x4</code> and the upper 4 bits of the low byte would be <code>0x6</code>. Therefore, in this example, <code>x = 0x4</code> and <code>y= 0x6</code>.</p>
<p>Knowing all of that, let's write the code that'll grab the <code>x</code> and <code>y</code> values.</p>
<pre><code class="language-javascript">executeInstruction(opcode) {
this.pc += 2;
// We only need the 2nd nibble, so grab the value of the 2nd nibble
// and shift it right 8 bits to get rid of everything but that 2nd nibble.
let x = (opcode &amp; 0x0F00) &gt;&gt; 8;
// We only need the 3rd nibble, so grab the value of the 3rd nibble
// and shift it right 4 bits to get rid of everything but that 3rd nibble.
let y = (opcode &amp; 0x00F0) &gt;&gt; 4;
}
</code></pre>
<p>To explain this, let's once again assume we have an instruction <code>0x5460</code>. If we <code>&amp;</code> (bitwise AND) that instruction with hex value <code>0x0F00</code> we'll end up with <code>0x0400</code>. Shift that 8 bits right and we end up with <code>0x04</code> or <code>0x4</code>. Same thing with <code>y</code>. We <code>&amp;</code> the instruction with hex value <code>0x00F0</code> and get <code>0x0060</code>. Shift that 4 bits right and we end up with <code>0x006</code> or <code>0x6</code>.</p>
<p>Now for the fun part, writing the logic for all 36 instructions. For each instruction, before you write the code, I highly recommend reading what that instruction does in the technical reference as you'll understand it a lot better.</p>
<p>I'm going to provide you with the empty switch statement you'll be using as it's quite long.</p>
<pre><code class="language-javascript">switch (opcode &amp; 0xF000) {
case 0x0000:
switch (opcode) {
case 0x00E0:
break;
case 0x00EE:
break;
}
break;
case 0x1000:
break;
case 0x2000:
break;
case 0x3000:
break;
case 0x4000:
break;
case 0x5000:
break;
case 0x6000:
break;
case 0x7000:
break;
case 0x8000:
switch (opcode &amp; 0xF) {
case 0x0:
break;
case 0x1:
break;
case 0x2:
break;
case 0x3:
break;
case 0x4:
break;
case 0x5:
break;
case 0x6:
break;
case 0x7:
break;
case 0xE:
break;
}
break;
case 0x9000:
break;
case 0xA000:
break;
case 0xB000:
break;
case 0xC000:
break;
case 0xD000:
break;
case 0xE000:
switch (opcode &amp; 0xFF) {
case 0x9E:
break;
case 0xA1:
break;
}
break;
case 0xF000:
switch (opcode &amp; 0xFF) {
case 0x07:
break;
case 0x0A:
break;
case 0x15:
break;
case 0x18:
break;
case 0x1E:
break;
case 0x29:
break;
case 0x33:
break;
case 0x55:
break;
case 0x65:
break;
}
break;
default:
throw new Error('Unknown opcode ' + opcode);
}
</code></pre>
<p>As you can see from <code>switch (opcode &amp; 0xF000)</code>, we're grabbing the upper 4 bits of the most significant byte of the opcode. If you take a look at the different instructions in the technical reference you'll notice that we can narrow down the different opcodes by that very first nibble.</p>
<h4 id="0nnnsysaddr">0nnn - SYS addr</h4>
<p>This opcode can be ignored.</p>
<h4 id="00e0cls">00E0 - CLS</h4>
<p>Clear the display.</p>
<pre><code class="language-javascript">case 0x00E0:
this.renderer.clear();
break;
</code></pre>
<h4 id="00eeret">00EE - RET</h4>
<p>Pop the last element in the <code>stack</code> array and store it in <code>this.pc</code>. This will return us from a subroutine.</p>
<pre><code class="language-javascript">case 0x00EE:
this.pc = this.stack.pop();
break;
</code></pre>
<p>The technical reference states this instruction also "subtracts 1 from the stack pointer". The stack pointer is used to point to the topmost level of the stack. But thanks to our <code>stack</code> array, we don't need to worry about where the top of the stack is since it's handled by the array. So for the rest of the instructions, if it says something about the stack pointer, you can safely ignore it.</p>
<h4 id="1nnnjpaddr">1nnn - JP addr</h4>
<p>Set the program counter to the value stored in <code>nnn</code>.</p>
<pre><code class="language-javascript">case 0x1000:
this.pc = (opcode &amp; 0xFFF);
break;
</code></pre>
<p><code>0xFFF</code> grabs the value of <code>nnn</code>. So <code>0x1426 &amp; 0xFFF</code> will give us <code>0x426</code> and then we store that in <code>this.pc</code>.</p>
<h4 id="2nnncalladdr">2nnn - CALL addr</h4>
<p>For this, the technical reference says we have to increment the stack pointer so it points to the current value of <code>this.pc</code>. Again, we aren't using a stack pointer in our project as our <code>stack</code> array handles that for us. So instead of incrementing that, we just push <code>this.pc</code> onto the stack which will give us the same result. And just like with opcode <code>1nnn</code>, we grab the value of <code>nnn</code> and store that in <code>this.pc</code>.</p>
<pre><code class="language-javascript">case 0x2000:
this.stack.push(this.pc);
this.pc = (opcode &amp; 0xFFF);
break;
</code></pre>
<h4 id="3xkksevxbyte">3xkk - SE Vx, byte</h4>
<p>This is where our <code>x</code> value we calculated above comes into play.</p>
<p>This instruction compares the value stored in the <code>x</code> register (<code>Vx</code>) to the value of <code>kk</code>. Note that <code>V</code> signifies a register, and the value following it, in this case <code>x</code>, is the register number. If they are equal, we increment the program counter by 2, effectively skipping the next instruction.</p>
<pre><code class="language-javascript">case 0x3000:
if (this.v[x] === (opcode &amp; 0xFF)) {
this.pc += 2;
}
break;
</code></pre>
<p>The <code>opcode &amp; 0xFF</code> part of the if statement is simply grabbing the last byte of the opcode. This is the <code>kk</code> portion of the opcode.</p>
<h4 id="4xkksnevxbyte">4xkk - SNE Vx, byte</h4>
<p>This instruction is very similar to <code>3xkk</code>, but instead skips the next instruction if <code>Vx</code> and <code>kk</code> are NOT equal.</p>
<pre><code class="language-javascript">case 0x4000:
if (this.v[x] !== (opcode &amp; 0xFF)) {
this.pc += 2;
}
break;
</code></pre>
<h4 id="5xy0sevxvy">5xy0 - SE Vx, Vy</h4>
<p>Now we're making use of both <code>x</code> and <code>y</code>. This instruction, like the previous two, will skip the next instruction if a condition is met. In the case of this instruction, if <code>Vx</code> is equal to <code>Vy</code> we skip the next instruction.</p>
<pre><code class="language-javascript">case 0x5000:
if (this.v[x] === this.v[y]) {
this.pc += 2;
}
break;
</code></pre>
<h4 id="6xkkldvxbyte">6xkk - LD Vx, byte</h4>
<p>This instruction will set the value of <code>Vx</code> to the value of <code>kk</code>.</p>
<pre><code class="language-javascript">case 0x6000:
this.v[x] = (opcode &amp; 0xFF);
break;
</code></pre>
<h4 id="7xkkaddvxbyte">7xkk - ADD Vx, byte</h4>
<p>This instruction adds <code>kk</code> to <code>Vx</code>.</p>
<pre><code class="language-javascript">case 0x7000:
this.v[x] += (opcode &amp; 0xFF);
break;
</code></pre>
<h4 id="8xy0ldvxvy">8xy0 - LD Vx, Vy</h4>
<p>Before discussing this instruction, I'd like to explain what's going on with <code>switch (opcode &amp; 0xF)</code>. Why the switch within a switch?</p>
<p>The reasoning behind this is we have a handful of different instructions that fall under <code>case 0x8000:</code>. If you take a look at those instructions in the technical reference, you'll notice the last nibble of each one of these instructions ends with a value <code>0-7</code> or <code>E</code>.</p>
<p>We have this switch to grab that last nibble, and then create a case for each one to properly handle it. We do this a few more times throughout the main switch statement.</p>
<p>With that explained, let's get on to the instruction. Nothing crazy with this one, just setting the value of <code>Vx</code> equal to the value of <code>Vy</code>.</p>
<pre><code class="language-javascript">case 0x0:
this.v[x] = this.v[y];
break;
</code></pre>
<h4 id="8xy1orvxvy">8xy1 - OR Vx, Vy</h4>
<p>Set <code>Vx</code> to the value of <code>Vx OR Vy</code>.</p>
<pre><code class="language-javascript">case 0x1:
this.v[x] |= this.v[y];
break;
</code></pre>
<h4 id="8xy2andvxvy">8xy2 - AND Vx, Vy</h4>
<p>Set <code>Vx</code> equal to the value of <code>Vx AND Vy</code>.</p>
<pre><code class="language-javascript">case 0x2:
this.v[x] &amp;= this.v[y];
break;
</code></pre>
<h4 id="8xy3xorvxvy">8xy3 - XOR Vx, Vy</h4>
<p>Set <code>Vx</code> equal to the value of <code>Vx XOR Vy</code>.</p>
<pre><code class="language-javascript">case 0x3:
this.v[x] ^= this.v[y];
break;
</code></pre>
<h4 id="8xy4addvxvy">8xy4 - ADD Vx, Vy</h4>
<p>This instruction sets <code>Vx</code> to <code>Vx + Vy</code>. Sounds easy, but there is a little more to it. If we read the description for this instruction provided in the technical reference it says the following:</p>
<blockquote>
<p>If the result is greater than 8 bits (i.e., &gt; 255,) VF is set to 1, otherwise 0. Only the lowest 8 bits of the result are kept, and stored in Vx.</p>
</blockquote>
<pre><code class="language-javascript">case 0x4:
let sum = (this.v[x] += this.v[y]);
this.v[0xF] = 0;
if (sum &gt; 0xFF) {
this.v[0xF] = 1;
}
this.v[x] = sum;
break;
</code></pre>
<p>Taking this line by line, we first add <code>this.v[y]</code> to <code>this.v[x]</code> and store that value in a variable <code>sum</code>. From there we set <code>this.v[0xF]</code>, or <code>VF</code>, to 0. We do this to avoid having to use an if-else statement on the next line. If the sum is greater than 255, or hex <code>0xFF</code>, we set <code>VF</code> to 1. Finally, we set <code>this.v[x]</code>, or <code>Vx</code>, to the sum.</p>
<p>You might be wondering how we go about ensuring "only the lowest 8 bits of the result are kept, and stored in Vx". Thanks to <code>this.v</code> being a <code>Uint8Array</code>, any value over 8 bits automatically has the lower, rightmost, 8 bits taken and stored in the array. Therefore we don't need to do anything special with it.</p>
<p>Let me provide you with an example to make more sense of this. Assume we try to put decimal 257 into the <code>this.v</code> array. In binary that value is <code>100000001</code>, a 9-bit value. When we attempt to store that 9-bit value into the array, it will only take the lower 8 bits. This means binary <code>00000001</code>, which is 1 in decimal, would be stored in <code>this.v</code>.</p>
<h4 id="8xy5subvxvy">8xy5 - SUB Vx, Vy</h4>
<p>This instruction subtracts <code>Vy</code> from <code>Vx</code>. Just like overflow is handled in the previous instruction, we have to handle underflow for this one.</p>
<pre><code class="language-javascript">case 0x5:
this.v[0xF] = 0;
if (this.v[x] &gt; this.v[y]) {
this.v[0xF] = 1;
}
this.v[x] -= this.v[y];
break;
</code></pre>
<p>Once again, since we're using a <code>Uint8Array</code>, we don't have to do anything to handle underflow as it's taken care of for us. So -1 will become 255, -2 becomes 254, and so forth.</p>
<h4 id="8xy6shrvxvy">8xy6 - SHR Vx {, Vy}</h4>
<pre><code class="language-javascript">case 0x6:
this.v[0xF] = (this.v[x] &amp; 0x1);
this.v[x] &gt;&gt;= 1;
break;
</code></pre>
<p>This line <code>this.v[0xF] = (this.v[x] &amp; 0x1);</code> is going to determine the least-significant bit and set <code>VF</code> accordingly.</p>
<p>This is a lot easier to understand if you look at its binary representation. If <code>Vx</code>, in binary, is <code>1001</code>, <code>VF</code> will be set to 1 since the least-significant bit is 1. If <code>Vx</code> is <code>1000</code>, <code>VF</code> will be set to 0.</p>
<h4 id="8xy7subnvxvy">8xy7 - SUBN Vx, Vy</h4>
<pre><code class="language-javascript">case 0x7:
this.v[0xF] = 0;
if (this.v[y] &gt; this.v[x]) {
this.v[0xF] = 1;
}
this.v[x] = this.v[y] - this.v[x];
break;
</code></pre>
<p>This instruction subtracts <code>Vx</code> from <code>Vy</code> and stores the result in <code>Vx</code>. If <code>Vy</code> is larger then <code>Vx</code>, we need to store 1 in <code>VF</code>, otherwise we store 0.</p>
<h4 id="8xyeshlvxvy">8xyE - SHL Vx {, Vy}</h4>
<p>This instruction not only shifts <code>Vx</code> left 1, but also sets <code>VF</code> to either 0 or 1 depending on if a condition is met.</p>
<pre><code class="language-javascript">case 0xE:
this.v[0xF] = (this.v[x] &amp; 0x80);
this.v[x] &lt;&lt;= 1;
break;
</code></pre>
<p>The first line of code, <code>this.v[0xF] = (this.v[x] &amp; 0x80);</code>, is grabbing the most significant bit of <code>Vx</code> and storing that in <code>VF</code>. To explain this, we have an 8-bit register, <code>Vx</code>, and we want to get the most significant, or leftmost, bit. To do this we need to AND <code>Vx</code> with binary <code>10000000</code>, or <code>0x80</code> in hex. This will accomplish setting <code>VF</code> to the proper value.</p>
<p>After that, we simply multiply <code>Vx</code> by 2 by shifting it left 1.</p>
<h4 id="9xy0snevxvy">9xy0 - SNE Vx, Vy</h4>
<p>This instruction simply increments the program counter by 2 if <code>Vx</code> and <code>Vy</code> are not equal.</p>
<pre><code class="language-javascript">case 0x9000:
if (this.v[x] !== this.v[y]) {
this.pc += 2;
}
break;
</code></pre>
<h4 id="annnldiaddr">Annn - LD I, addr</h4>
<p>Set the value of register <code>i</code> to <code>nnn</code>. If the opcode is <code>0xA740</code> then <code>(opcode &amp; 0xFFF)</code> will return <code>0x740</code>.</p>
<pre><code class="language-javascript">case 0xA000:
this.i = (opcode &amp; 0xFFF);
break;
</code></pre>
<h4 id="bnnnjpv0addr">Bnnn - JP V0, addr</h4>
<p>Set the program counter (<code>this.pc</code>) to <code>nnn</code> plus the value of register 0 (<code>V0</code>).</p>
<pre><code class="language-javascript">case 0xB000:
this.pc = (opcode &amp; 0xFFF) + this.v[0];
break;
</code></pre>
<h4 id="cxkkrndvxbyte">Cxkk - RND Vx, byte</h4>
<pre><code class="language-javascript">case 0xC000:
let rand = Math.floor(Math.random() * 0xFF);
this.v[x] = rand &amp; (opcode &amp; 0xFF);
break;
</code></pre>
<p>Generate a random number in the range 0-255 and then AND that with the lowest byte of the opcode. For example, if the opcode is <code>0xB849</code>, then <code>(opcode &amp; 0xFF)</code> would return <code>0x49</code>.</p>
<h4 id="dxyndrwvxvynibble">Dxyn - DRW Vx, Vy, nibble</h4>
<p>This is a big one! This instruction handles the drawing and erasing of pixels on the screen. I'm going to provide you all the code and explain it line-by-line.</p>
<pre><code class="language-javascript">case 0xD000:
let width = 8;
let height = (opcode &amp; 0xF);
this.v[0xF] = 0;
for (let row = 0; row &lt; height; row++) {
let sprite = this.memory[this.i + row];
for (let col = 0; col &lt; width; col++) {
// If the bit (sprite) is not 0, render/erase the pixel
if ((sprite &amp; 0x80) &gt; 0) {
// If setPixel returns 1, which means a pixel was erased, set VF to 1
if (this.renderer.setPixel(this.v[x] + col, this.v[y] + row)) {
this.v[0xF] = 1;
}
}
// Shift the sprite left 1. This will move the next next col/bit of the sprite into the first position.
// Ex. 10010000 &lt;&lt; 1 will become 0010000
sprite &lt;&lt;= 1;
}
}
break;
</code></pre>
<p>We have a <code>width</code> variable set to 8 because each sprite is 8 pixels wide, so it's safe to hardcode that value in. Next, we set <code>height</code> to the value of the last nibble (<code>n</code>) of the opcode. If our opcode is <code>0xD235</code>, <code>height</code> will be set to 5. From there we set <code>VF</code> to 0, which if necessary, will be set to 1 later on if pixels are erased.</p>
<p>Now onto the for loops. Remember that a sprite looks something like this:</p>
<pre><code>11110000
10010000
10010000
10010000
11110000
</code></pre>
<p>Our code is going row by row (first <code>for</code> loop), then it's going bit by bit or column by column (second <code>for</code> loop) through that sprite.</p>
<p>This piece of code, <code>let sprite = this.memory[this.i + row];</code>, is grabbing 8-bits of memory, or a single row of a sprite, that's stored at <code>this.i + row</code>. The technical reference states we start at the address stored in <code>I</code>, or <code>this.i</code> in our case, when we read sprites from memory.</p>
<p>Within our second <code>for</code> loop, we have an <code>if</code> statement that is grabbing the leftmost bit and checking to see if it's greater than 0.</p>
<p>A value of 0 indicates that the sprite does not have a pixel at that location, so we don't need to worry about drawing or erasing it. If the value is 1, we move on to another if statement that checks the return value of <code>setPixel</code>. Let's look into the values passed into that function.</p>
<p>Our <code>setPixel</code> call looks like this: <code>this.renderer.setPixel(this.v[x] + col, this.v[y] + row)</code>. According to the technical reference, the <code>x</code> and <code>y</code> positions are located in <code>Vx</code> and <code>Vy</code> respectively. Add the <code>col</code> number to <code>Vx</code> and the <code>row</code> number to <code>Vy</code>, and you get the desired position to draw/erase a pixel.</p>
<p>If <code>setPixel</code> returns 1, we erase the pixel and set <code>VF</code> to 1. If it returns 0, we don't do anything, keeping the value of <code>VF</code> equal to 0.</p>
<p>Lastly, we are shifting the sprite left 1 bit. This allows us to go through each bit of the sprite.</p>
<p>For example, if <code>sprite</code> is currently set to <code>10010000</code>, it will become <code>0010000</code> after being shifted left. From there, we can go through another iteration of our inner <code>for</code> loop to determine whether or not to draw a pixel. And continuing this process till we reach the end or our sprite.</p>
<h4 id="ex9eskpvx">Ex9E - SKP Vx</h4>
<p>This one is fairly simple and just skips the next instruction if the key stored in <code>Vx</code> is pressed, by incrementing the program counter by 2.</p>
<pre><code class="language-javascript">case 0x9E:
if (this.keyboard.isKeyPressed(this.v[x])) {
this.pc += 2;
}
break;
</code></pre>
<h4 id="exa1sknpvx">ExA1 - SKNP Vx</h4>
<p>This does the opposite of the previous instruction. If the specified key is not pressed, skip the next instruction.</p>
<pre><code class="language-javascript">case 0xA1:
if (!this.keyboard.isKeyPressed(this.v[x])) {
this.pc += 2;
}
break;
</code></pre>
<h4 id="fx07ldvxdt">Fx07 - LD Vx, DT</h4>
<p>Another simple one. We're just setting <code>Vx</code> to the value stored in <code>delayTimer</code>.</p>
<pre><code class="language-javascript">case 0x07:
this.v[x] = this.delayTimer;
break;
</code></pre>
<h4 id="fx0aldvxk">Fx0A - LD Vx, K</h4>
<p>Taking a look at the technical reference, this instruction pauses the emulator until a key is pressed. Here's the code for it:</p>
<pre><code class="language-javascript">case 0x0A:
this.paused = true;
this.keyboard.onNextKeyPress = function(key) {
this.v[x] = key;
this.paused = false;
}.bind(this);
break;
</code></pre>
<p>We first set <code>paused</code> to true in order to pause the emulator. Then, if you remember from our <code>keyboard.js</code> file where we set <code>onNextKeyPress</code> to null, this is where we initialize it. With the <code>onNextKeyPress</code> function initialized, the next time the <code>keydown</code> event is triggered, the following code in our <code>keyboard.js</code> file will be run:</p>
<pre><code class="language-javascript">// keyboard.js
if (this.onNextKeyPress !== null &amp;&amp; key) {
this.onNextKeyPress(parseInt(key));
this.onNextKeyPress = null;
}
</code></pre>
<p>From there, we set <code>Vx</code> to the pressed key's keycode and finally start the emulator back up by setting <code>paused</code> to false.</p>
<h3 id="fx15lddtvx">Fx15 - LD DT, Vx</h3>
<p>This instruction simply sets the value of the delay timer to the value stored in register <code>Vx</code>.</p>
<pre><code class="language-javascript">case 0x15:
this.delayTimer = this.v[x];
break;
</code></pre>
<h4 id="fx18ldstvx">Fx18 - LD ST, Vx</h4>
<p>This instruction is very similar to Fx15 but sets the sound timer to <code>Vx</code> instead of the delay timer.</p>
<pre><code class="language-javascript">case 0x18:
this.soundTimer = this.v[x];
break;
</code></pre>
<h4 id="fx1eaddivx">Fx1E - ADD I, Vx</h4>
<p>Add <code>Vx</code> to <code>I</code>.</p>
<pre><code class="language-javascript">case 0x1E:
this.i += this.v[x];
break;
</code></pre>
<h4 id="fx29ldfvxaddivx">Fx29 - LD F, Vx - ADD I, Vx</h4>
<p>For this one, we are setting <code>I</code> to the location of the sprite at <code>Vx</code>. It's multiplied by 5 because each sprite is 5 bytes long.</p>
<pre><code class="language-javascript">case 0x29:
this.i = this.v[x] * 5;
break;
</code></pre>
<h4 id="fx33ldbvx">Fx33 - LD B, Vx</h4>
<p>This instruction is going to grab the hundreds, tens, and ones digit from register <code>Vx</code> and store them in registers <code>I</code>, <code>I+1</code>, and <code>I+2</code> respectively.</p>
<pre><code class="language-javascript">case 0x33:
// Get the hundreds digit and place it in I.
this.memory[this.i] = parseInt(this.v[x] / 100);
// Get tens digit and place it in I+1. Gets a value between 0 and 99,
// then divides by 10 to give us a value between 0 and 9.
this.memory[this.i + 1] = parseInt((this.v[x] % 100) / 10);
// Get the value of the ones (last) digit and place it in I+2.
this.memory[this.i + 2] = parseInt(this.v[x] % 10);
break;
</code></pre>
<h4 id="fx55ldivx">Fx55 - LD [I], Vx</h4>
<p>In this instruction, we are looping through registers <code>V0</code> through <code>Vx</code> and storing its value in memory starting at <code>I</code>.</p>
<pre><code class="language-javascript">case 0x55:
for (let registerIndex = 0; registerIndex &lt;= x; registerIndex++) {
this.memory[this.i + registerIndex] = this.v[registerIndex];
}
break;
</code></pre>
<h4 id="fx65ldvxi">Fx65 - LD Vx, [I]</h4>
<p>Now on to the last instruction. This one does the opposite of <code>Fx55</code>. It reads values from memory starting at <code>I</code> and stores them in registers <code>V0</code> through <code>Vx</code>.</p>
<pre><code class="language-javascript">case 0x65:
for (let registerIndex = 0; registerIndex &lt;= x; registerIndex++) {
this.v[registerIndex] = this.memory[this.i + registerIndex];
}
break;
</code></pre>
<h2 id="chip8js">chip8.js</h2>
<p>With our CPU class created, let's finish up our <code>chip8.js</code> file by loading in a ROM and cycling our CPU. We'll need to import <code>cpu.js</code> and initialize a CPU object:</p>
<pre><code class="language-javascript">import Renderer from './renderer.js';
import Keyboard from './keyboard.js';
import Speaker from './speaker.js';
import CPU from './cpu.js'; // NEW
const renderer = new Renderer(10);
const keyboard = new Keyboard();
const speaker = new Speaker();
const cpu = new CPU(renderer, keyboard, speaker); // NEW
</code></pre>
<p>Our <code>init</code> function becomes:</p>
<pre><code class="language-javascript">function init() {
fpsInterval = 1000 / fps;
then = Date.now();
startTime = then;
cpu.loadSpritesIntoMemory(); // NEW
cpu.loadRom('BLITZ'); // NEW
loop = requestAnimationFrame(step);
}
</code></pre>
<p>When our emulator is initialized we will load the sprites into memory and load up the <code>BLITZ</code> rom. Now we just need to cycle the CPU:</p>
<pre><code class="language-javascript">function step() {
now = Date.now();
elapsed = now - then;
if (elapsed &gt; fpsInterval) {
cpu.cycle(); // NEW
}
loop = requestAnimationFrame(step);
}
</code></pre>
<p>With that done, we should now have a working Chip8 emulator.</p>
<h2 id="conclusion">Conclusion</h2>
<p>I started this project a while ago and was fascinated by it. Emulator creation was always something that interested me but never made sense to me. That was until I learned about Chip-8 and the simplicity of it in comparison to more advanced systems out there.</p>
<p>The moment I finished this emulator, I knew I had to share it with other people by providing an in-depth, step-by-step guide to creating it yourself. The knowledge I gained, and hopefully you've gained, will no doubt prove useful elsewhere.</p>
<p>All in all, I hope you enjoyed the article and learned something. I aimed to explain everything in detail and in as simple of a way as possible.</p>
<p>Regardless, if anything is still confusing you or you just have a question, please feel free to let me know over on <a href="https://twitter.com/ericgrandt">Twitter</a> or post an issue on the <a href="https://github.com/Erigitic/chip8-emulator/issues">GitHub repo</a> as I'd love to help you out.</p>
<p>I'd like to leave you with a couple of ideas on features you can add to your Chip-8 emulator:</p>
<ul>
<li>Audio control (mute, change frequency, change wave type (sine, triangle), etc)</li>
<li>Ability to change render scale and emulator speed from the UI</li>
<li>Pause and unpause</li>
<li>Ability to save and load a save</li>
<li>ROM selection</li>
</ul>
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
