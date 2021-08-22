---
card: "/images/default.jpg"
tags: [Algorithms]
description: As technology evolves and game contents become more algorithm
author: "Milad E. Fahmy"
title: "How to code your own procedural dungeon map generator using the Random Walk Algorithm"
created: "2021-08-15T19:29:28+02:00"
modified: "2021-08-15T19:29:28+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-algorithms tag-javascript tag-games tag-react tag-ai ">
<header class="post-full-header">
<h1 class="post-full-title">How to code your own procedural dungeon map generator using the Random Walk Algorithm</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/09/Screen-Shot-2020-09-12-at-11.30.55-PM.png 300w,
/news/content/images/size/w600/2020/09/Screen-Shot-2020-09-12-at-11.30.55-PM.png 600w,
/news/content/images/size/w1000/2020/09/Screen-Shot-2020-09-12-at-11.30.55-PM.png 1000w,
/news/content/images/size/w2000/2020/09/Screen-Shot-2020-09-12-at-11.30.55-PM.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/09/Screen-Shot-2020-09-12-at-11.30.55-PM.png" alt="How to code your own procedural dungeon map generator using the Random Walk Algorithm">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>As technology evolves and game contents become more algorithmically generated, it’s not difficult to imagine the creation of a life-like simulation with unique experiences for each player.</p>
<p>Technological breakthroughs, patience, and refined skills will get us there, but the first step is to understand <strong>procedural content generation</strong>.</p>
<p>Though many out-of-the-box solutions for map generation exist, this tutorial will teach you to make your own two-dimensional dungeon map generator from scratch using JavaScript.</p>
<p>There are many two-dimensional map types, and all have the following characteristics:</p>
<p>1. Accessible and inaccessible areas (tunnels and walls).</p>
<p>2. A connected route the player can navigate.</p>
<p>The algorithm in this tutorial comes from the <a href="https://en.wikipedia.org/wiki/Random_walker_algorithm" rel="noopener">Random Walk Algorithm</a>, one of the simplest solutions for map generation.</p>
<p>After making a grid-like map of walls, this algorithm starts from a random place on the map. It keeps making tunnels and taking random turns to complete its desired number of tunnels.</p>
<p>To see a demo, open the CodePen project below, click on the map to create a new map, and change the following values:</p>
<ol>
<li><strong>Dimensions:</strong> the width and height of the map.</li>
<li><strong>MaxTunnels:</strong> the greatest number of turns the algorithm can take while making the map.</li>
<li><strong>MaxLength:</strong> the greatest length of each tunnel the algorithm will choose before making a horizontal or vertical turn.</li>
</ol>
See the Pen <a href='https://codepen.io/abdolsa/pen/zEKdop'>CreatMap</a> by Ahmad Abdolsaheb
(<a href='https://codepen.io/abdolsa'>@abdolsa</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
<p><strong>Note:</strong> the larger the <em>maxTurn</em> is compared to the dimensions, the denser the map will be. The larger the <em>maxLength</em> is compared to the dimensions, the more “tunnel-y” it will look.</p>
<p>Next, let’s go through the map generation algorithm to see how it:</p>
<ol>
<li>Makes a two dimensional map of walls</li>
<li>Chooses a random starting point on the map</li>
<li>While the number of tunnels is not zero</li>
<li>Chooses a random length from maximum allowed length</li>
<li>Chooses a random direction to turn to (right, left, up, down)</li>
<li>Draws a tunnel in that direction while avoiding the edges of the map</li>
<li>Decrements the number of tunnels and repeats the <a href="https://en.wikipedia.org/wiki/While_loop" rel="noopener">while loop</a></li>
<li>Returns the map with the changes</li>
</ol>
<p>This loop continues until the number of tunnels is zero.</p>
<h3 id="the-algorithm-in-code">The Algorithm in Code</h3>
<p>Since the map consists of tunnel and wall cells, we could describe it as zeros and ones in a two-dimensional array like the following:</p><pre><code class="language-javascript">map = [[1,1,1,1,0],
[1,0,0,0,0],
[1,0,1,1,1],
[1,0,0,0,1],
[1,1,1,0,1]]</code></pre>
<p>Since every cell is in a two-dimensional array, we can access its value by knowing its row and column such as map [row][column].</p>
<p>Before writing the algorithm, you need a helper function that takes a character and dimension as arguments and returns a two-dimensional array.</p><pre><code class="language-javascript">createArray(num, dimensions) {
var array = [];
for (var i = 0; i &lt; dimensions; i++) {
array.push([]);
for (var j = 0; j &lt; dimensions; j++) {
array[i].push(num);
}
}
return array;
}
</code></pre>
<p>To implement the Random Walk Algorithm, set the dimensions of the map (width and height), the<code>maxTunnels</code> variable, and the<code>maxLength</code> variable.</p><pre><code class="language-javascript">createMap(){
let dimensions = 5,
maxTunnels = 3,
maxLength = 3;
</code></pre>
<p>Next, make a two-dimensional array using the predefined helper function (two dimensional array of ones).</p><pre><code class="language-javascript">let map = createArray(1, dimensions);</code></pre>
<p>Set up a random column and random row to create a random starting point for the first tunnel.</p><pre><code class="language-javascript">let currentRow = Math.floor(Math.random() * dimensions),
currentColumn = Math.floor(Math.random() * dimensions);</code></pre>
<p>To avoid the complexity of diagonal turns, the algorithm needs to specify the horizontal and vertical directions. Every cell sits in a two-dimensional array and could be identified with its row and column. Because of this, the directions could be defined as subtractions from and/or additions to the column and row numbers.</p>
<p>For example, to go to a cell around the cell [2][2], you could perform the following operations:</p>
<ul>
<li>to go <strong>up</strong>, subtract 1 from its row [1][2]</li>
<li>to go <strong>down</strong>, add 1 to its row [3][2]</li>
<li>to go <strong>right</strong>, add 1 to its column [2][3]</li>
<li>to go <strong>left</strong>, subtract 1 from its column [2][1]</li>
</ul>
<p>The following map illustrates these operations:</p>
<figcaption>Operational options grid</figcaption>
</figure>
<p>Now, set the <code>directions</code> variable to the following values that the algorithm will choose from before creating each tunnel:</p><pre><code class="language-javascript">let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];</code></pre>
<p>Finally, initiate <code>randomDirection</code><strong> </strong>variable to hold a random value from the directions array, and set the <code>lastDirection</code> variable to an empty array which will hold the older <code>randomDirection</code><em> </em>value.</p>
<p><strong>Note:</strong> the <code>lastDirection</code> array is empty on the first loop because there is no older <code>randomDirection</code> value.</p><pre><code class="language-javascript">let lastDirection = [],
randomDirection;</code></pre>
<p>Next, make sure <code>maxTunnel</code> is not zero and the dimensions and <code>maxLength</code>values have been received. Continue finding random directions until you find one that isn’t reverse or identical to <code>lastDirection</code>. This <a href="https://en.wikipedia.org/wiki/Do_while_loop" rel="noopener">do while loop</a> helps to prevent overwriting the recently-drawn tunnel or drawing two tunnels back-to-back.</p>
<p>For example, if your <code>lastTurn</code> is [0, 1], the do while loop prevents the function from moving forward until <code>randomDirection</code> is set to a value that is not [0, 1] or the opposite [0, -1].</p><pre><code class="language-javascript">do {
randomDirection = directions[Math.floor(Math.random() * directions.length)];
} while ((randomDirection[0] === -lastDirection[0] &amp;&amp;
randomDirection[1] === -lastDirection[1]) ||
(randomDirection[0] === lastDirection[0] &amp;&amp;
randomDirection[1] === lastDirection[1]));
</code></pre>
<p>In the do while loop, there are two main conditions that are divided by an || (OR) sign. The first part of the condition also consists of two conditions. The first one checks if the <code>randomDirection</code>’s first item is the reverse of the <code>lastDirection</code><em>’s</em> first item. The second one checks if the <code>randomDirection</code>’s second item is the reverse of the <code>lastTurn</code>’s second item.</p>
<p>To illustrate, if the <code>lastDirection</code> is [0,1] and <code>randomDirection</code> is [0,-1], the first part of the condition checks if <code>randomDirection</code>[0] === — <code>lastDirection</code>[0]), which equates to 0 === — 0, and is true.</p>
<p>Then, it checks if (<code>randomDirection</code>[1] === — <code>lastDirection</code>[1]) which equates to (-1 === -1) and is also true. Since both conditions are true, the algorithm goes back to find another <code>randomDirection</code>.</p>
<p>The second part of the condition checks if the first and second values of both arrays are the same.</p>
<p>After choosing a <code>randomDirection</code> that satisfies the conditions, set a variable to randomly choose a length from <code>maxLength</code>. Set <code>tunnelLength</code> variable to zero to server as an iterator.</p><pre><code class="language-javascript">let randomLength = Math.ceil(Math.random() * maxLength),
tunnelLength = 0;</code></pre>
<p>Make a tunnel by turning the value of cells from one to zero while the <code>tunnelLength</code> is smaller than <code>randomLength</code><em>. </em>If within the loop the tunnel hits the edges of the map, the loop should break.</p><pre><code class="language-javascript">while (tunnelLength &lt; randomLength) {
if(((currentRow === 0) &amp;&amp; (randomDirection[0] === -1))||
((currentColumn === 0) &amp;&amp; (randomDirection[1] === -1))||
((currentRow === dimensions — 1) &amp;&amp; (randomDirection[0] ===1))||
((currentColumn === dimensions — 1) &amp;&amp; (randomDirection[1] === 1)))
{ break; }</code></pre>
<p>Else set the current cell of the map to zero using <code>currentRow</code> and <code>currentColumn.</code> Add the values in the <code>randomDirection</code> array by setting <code>currentRow</code> and <code>currentColumn</code> where they need to be in the upcoming iteration of the loop. Now, increment the <code>tunnelLength</code> iterator.</p><pre><code class="language-javascript">else{
map[currentRow][currentColumn] = 0;
currentRow += randomDirection[0];
currentColumn += randomDirection[1];
tunnelLength++;
}
}
</code></pre>
<p>After the loop makes a tunnel or breaks by hitting an edge of the map, check if the tunnel is at least one block long. If so, set the <code>lastDirection</code> to the <code>randomDirection</code> and decrement <code>maxTunnels</code> and go back to make another tunnel with another <code>randomDirection</code><em>.</em></p><pre><code class="language-javascript">if (tunnelLength) {
lastDirection = randomDirection;
maxTunnels--;
}
</code></pre>
<p>This IF statement prevents the for loop that hit the edge of the map and did not make a tunnel of at least one cell to decrement the <code>maxTunnel</code> and change the <code>lastDirection</code>. When that happens, the algorithm goes to find another <code>randomDirection</code> to continue.</p>
<p>When it finishes drawing tunnels and <code>maxTunnels</code> is zero, return the resulting map with all its turns and tunnels.</p><pre><code class="language-javascript">}
return map;
};</code></pre>
<p>You can see the complete algorithm in the following snippet:</p>
<p>Congratulations for reading through this tutorial. You are now well-equipped to make your own map generator or improve upon this version. Check out the project on <a href="https://codepen.io/anon/pen/aLpORx" rel="noopener">CodePen</a> and on <a href="https://github.com/ahmadabdolsaheb/mapgen" rel="noopener">GitHub</a> as a react application.</p>
<p><em>Thanks for reading! If you liked this story, don't forget to share it on social media.</em></p>
<p>Special thanks to <a href="https://github.com/moT01">Tom</a> &nbsp;for co-writing this article.</p>
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
