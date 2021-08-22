---
card: "https://cdn-media-1.freecodecamp.org/images/1*PIFH2fl9dk8fvWJy8ynvgA.png"
tags: [Coding]
description: "One of the first things we were taught in college was that co"
author: "Milad E. Fahmy"
title: "Five code comments you should stop writing // and one you should start"
created: "2021-08-16T11:31:44+02:00"
modified: "2021-08-16T11:31:44+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-coding tag-technology tag-clean-code tag-programming tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">Five code comments you should stop writing // and one you should start</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*PIFH2fl9dk8fvWJy8ynvgA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*PIFH2fl9dk8fvWJy8ynvgA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*PIFH2fl9dk8fvWJy8ynvgA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*PIFH2fl9dk8fvWJy8ynvgA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*PIFH2fl9dk8fvWJy8ynvgA.png" alt="Five code comments you should stop writing // and one you should start">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
// We never want Haste.
return null;
}</code></pre><p>And another one from <a href="https://github.com/Microsoft/vscode/blob/master/src/cli.js#L11" rel="noopener">vscode</a>:</p><pre><code class="language-js">// Avoid Monkey Patches from Application Insights// Avoid Monkey Patches from Application Insights
bootstrap.avoidMonkeyPatchFromAppInsights();
// Enable portable support
bootstrap.configurePortable();
// Enable ASAR support
bootstrap.enableASARSupport();
// Load CLI through AMD loader
require('./bootstrap-amd').load('vs/code/node/cli');</code></pre><p>Believe it or not, people reading your code are coders themselves. It is highly probable that they work at the same company as you or on the same project. They have some context, and are pretty smart (hopefully… if you believe you are surrounded by idiots, you might want to consider updating your Linkedin). They can read code, even without footnotes. If your variables, functions, and classes have meaningful names, then don’t clutter them with pointless explanations that will be outdated in the next code change or refactor.</p><p>Disclaimer: Like many others, I have comment-blindness. I ignore comments and will most likely never notice there was a comment which should be updated when changing or refactoring the code.</p><p>Back to the example — what happens if we removed all of the comments in the code above? would it really be much harder to read?</p><h4 id="2-explaining-your-code">2. Explaining your code</h4><p>If your code is clean and uses the right level of abstraction, you don’t need to explain what it does. If you still find yourself explaining the code, it might be the result of some habit you picked up over the years. You might want to consider getting rid of it, or have to endure a code that is not self-expressive</p><p>Look at this code from <a href="https://github.com/facebook/react/blob/master/dangerfile.js#L35" rel="noopener">react.js</a>:</p><pre><code class="language-js">if (!existsSync('./scripts/rollup/results.json')) {
// This indicates the build failed previously.
// In that case, there's nothing for the Dangerfile to do.
// Exit early to avoid leaving a redundant (and potentiallyconfusing) PR comment.
process.exit(0);
}</code></pre><p>Wouldn’t this be cleaner if we refactored it like this:</p><pre><code class="language-js">if (buildFailedPreviously())
process.exit(0);</code></pre><p>Another common example can be naming; either functions, variables, or classes. Good naming is one of the hardest things to do, but that doesn’t mean we need to unconditionally raise a white flag, and use comments to describe what our code does. Look at this code from <a href="https://github.com/php/php-src/blob/master/main/alloca.c#L226" rel="noopener">php</a>:</p><pre><code class="language-php">struct stack_control_header
{
long shgrow:32;    /* Number of times stack has grown.  */
long shaseg:32;    /* Size of increments to stack.  */
long shhwm:32;     /* High water mark of stack.  */
long shsize:32;    /* Current size of stack (all segments).  */
};</code></pre><p>If you pass it around and then try to use it, you might not immediately understand what shgrow, shaseg and other fields are. What if we wrote it this way:</p><pre><code>struct stack_control_header
{
long num_of_time_grown:32;
long size_of_inc:32;
long high_water_mark:32;
long current_size:32;
};</code></pre><p>See? Much better. The reader can better understand what each field does without needing to jump to the struct definition and read the comments.</p><h4 id="3-long-comments">3. Long comments</h4><p>Long comments that are used to describe every decision you’ve made. These comments may explain each line in detail: why you chose to write it that way, what were the alternatives, what is the code history that led to it. It made it really hard to read the code fluently, and it can cause the reader further confusion. Ultimately, causing more damage than good. Try to keep comments as short as you can with minimal context.</p><p>If the reason you add a comments is because the code is hacky or complicated, then make it readable by refactoring it — not by adding another confusing layer. Choose better names, break functions to do one thing, and use abstractions. Whatever you need to make your code more readable, do it with code, not comments.</p><p>An example from <a href="https://github.com/vuejs/vue/blob/dev/src/core/observer/scheduler.js#L36" rel="noopener">vue.js</a>:</p><pre><code class="language-js">// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
export let currentFlushTimestamp = 0
// Async edge case fix requires storing an event listener's attach timestamp.
let getNow: () =&gt; number = Date.now
// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
if (inBrowser &amp;&amp; getNow() &gt; document.createEvent('Event').timeStamp) {
// if the low-res timestamp which is bigger than the event timestamp
// (which is evaluated AFTER) it means the event is using a hi-res timestamp,
// and we need to use the hi-res version for event listeners as well.
getNow = () =&gt; performance.now()
}</code></pre><p>This will probably require more refactoring to move the focus from comments to the actual code.</p><h4 id="4-titles-headers-and-other-beautifications-">4. Titles, headers and other “beautifications”</h4><p>Writing pretty code is essential, but that doesn’t mean you should decorate it like a book. We occasionally tend to creates blocks of code and give them titles, in order to differentiate one block from another. Let’s see this example from <a href="https://github.com/angular/angular.js/blob/master/lib/grunt/utils.js#L134" rel="noopener">angular.js</a>:</p><pre><code class="language-js">...
build: function(config, fn) {
var files = grunt.file.expand(config.src);
// grunt.file.expand might reorder the list of files
// when it is expanding globs, so we use prefix and suffix
// fields to ensure that files are at the start of end of
// the list (primarily for wrapping in an IIFE).
if (config.prefix) {
files = grunt.file.expand(config.prefix).concat(files);
}
if (config.suffix) {
files = files.concat(grunt.file.expand(config.suffix));
}
var styles = config.styles;
var processedStyles;
//concat
var src = files.map(function(filepath) {
return grunt.file.read(filepath);
}).join(grunt.util.normalizelf('\n'));
//process
var processed = this.process(src, grunt.config('NG_VERSION'), config.strict);
if (styles) {
processedStyles = this.addStyle(processed, styles.css, styles.minify);
processed = processedStyles.js;
if (config.styles.generateCspCssFile) {
grunt.file.write(removeSuffix(config.dest) + '-csp.css', CSP_CSS_HEADER + processedStyles.css);
}
}
//write
grunt.file.write(config.dest, processed);
grunt.log.ok('File ' + config.dest + ' created.');
fn();
...
</code></pre><p>If you find yourself doing this, your function undoubtedly does more than one thing. It is probably too long, explicit, and lacks some levels of abstractions. In the example above, the function has at least four parts: fetch files, concat, process, and write. Each of these parts appears with detailed implementation, that creates long functions that are also hard to read. This can be fixed by expanding each block to a different function.</p><pre><code class="language-js">build: function(config, fn) {
files = this.fetch_files(config)
var src = this.concat(files)
var processed = this.process(src)
write(processed, config)
}</code></pre><p>As code grows, the “headers” are not bold enough. This is where we get creative and add additional “beautifications” to our comments — line of asterisk, dashes, equals sign, etc. Take a look at this code from <a href="https://github.com/pandas-dev/pandas/blob/master/pandas/core/algorithms.py" rel="noopener">pandas</a>:</p><pre><code class="language-py">...
# --------------- #
# dtype access    #
# --------------- #
def _ensure_data(values, dtype=None):
...
def _reconstruct_data(values, dtype, original):
...
def _get_hashtable_algo(values):
...
# --------------- #
# top-level algos #
# --------------- #
def match(to_match, values, na_sentinel=-1):
...
def unique(values):
...
def isin(comps, values):
...
# --------------- #
# select n  #
# --------------- #
class SelectN(object):
...
class SelectNSeries(SelectN):
...
class SelectNFrame(SelectN):
...
# ------------ #
# searchsorted #
# ------------ #
def searchsorted(arr, value, side="left", sorter=None):
...
# ---- #
# diff #
# ---- #
_diff_special = {
...
}
def diff(arr, n, axis=0):
...</code></pre><p>The module includes a list of functions, variables, and classes all mixed together in one bundle with coupled dependencies. This could be avoided using one simple rule — if you feel that you need titles to gather functions or classes together, this would be a good time to break your code to smaller parts.</p><p>If your class has “groups” of method from different types — each group of functions should be a class of its own. If your file has too many classes or functions that require grouping, it’s time to break each group to its own file.</p><p>The code above could be much easier to understand and navigate if we break it to files. By doing this we also decouple the dependencies, so we can import only the code we need:</p><pre><code class="language-py">date_acces.py:
def _ensure_data(values, dtype=None)
def _reconstruct_data(values, dtype, original)
def _get_hashtable_algo(values):
top_level_algos.py
def match(to_match, values, na_sentinel=-1):
def unique(values):
def isin(comps, values):
selectn.py
class SelectN(object):
selectn_series.py
class SelectNSeries(SelectN):
selectn_frames.py
class SelectNFrame(SelectN):
search_sorted,py
def searchsorted(arr, value, side="left", sorter=None):
diff.py
_diff_special = {
...
}
def diff(arr, n, axis=0):
...</code></pre><h4 id="5-todo-">5. /* TODO: */</h4><p>from <a href="https://github.com/facebook/react/blob/master/packages/react-dom/server.browser.js#L14" rel="noopener">react.js</a>:</p><pre><code>// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest
Apply the selected BCJ filter. Update *pos and s-&gt;pos to match the amount of data that got filtered. NOTE: This is implemented as a switch statement to avoid using function pointers, which could be problematic in the kernel boot code, which must avoid pointers to static data (at least on x86).
*/
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
