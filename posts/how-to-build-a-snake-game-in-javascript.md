---
card: "/images/default.jpg"
tags: [JavaScript]
description: "In this article I am going to show you how to build a snake g"
author: "Milad E. Fahmy"
title: "How to Build a Snake Game In JavaScript"
created: "2021-08-15T22:49:05+02:00"
modified: "2021-08-15T22:49:05+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-html tag-css tag-games tag-game-development tag-beginners-guide ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build a Snake Game In JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/05/joan-gamell-ZS67i1HLllo-unsplash.jpg 300w,
/news/content/images/size/w600/2021/05/joan-gamell-ZS67i1HLllo-unsplash.jpg 600w,
/news/content/images/size/w1000/2021/05/joan-gamell-ZS67i1HLllo-unsplash.jpg 1000w,
/news/content/images/size/w2000/2021/05/joan-gamell-ZS67i1HLllo-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/05/joan-gamell-ZS67i1HLllo-unsplash.jpg" alt="How to Build a Snake Game In JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this article I am going to show you how to build a snake game with JavaScript. </p><p>A snake game is a simple game where a snake moves around a box trying to eat an apple. Once it successfully eats the apple, the length of the snake increases and the movement becomes faster. </p><p>Then the game is over when the snake runs into itself or any of the four walls of the box.</p><p>Alright, let's start with the HTML and CSS (the skeleton for our game). </p><h3 id="html">HTML</h3><pre><code class="language-html">&lt;h1&gt;Nokia 3310 snake&lt;/h1&gt;
&lt;div class="scoreDisplay"&gt;&lt;/div&gt;
&lt;div class="grid"&gt;&lt;/div&gt;
&lt;div class="button"&gt;
&lt;button class="top"&gt;top&lt;/button&gt;
&lt;button class="bottom"&gt;bottom&lt;/button&gt;
&lt;button class="left"&gt;left&lt;/button&gt;
&lt;button class="right"&gt;right&lt;/button&gt;
&lt;/div&gt;
&lt;div class="popup"&gt;
&lt;button class="playAgain"&gt;play Again&lt;/button&gt;
&lt;/div&gt;
</code></pre><p>The HTML above is pretty basic. </p><ul><li>We have a div of class <code>scoreDisplay</code> that will display our scores.</li><li>There's a div of class <code>grid</code> that will house the game (this is going to be a 10 by 10 grid)</li><li>The class <code>button</code> basically contains a button for users playing the game on a phone (we will automate it with the keyboard for desktop user). </li><li>And the <code>popup</code> class will hold our replay button. </li></ul><p>Now let's add some styling with CSS.</p><h3 id="css">CSS</h3><pre><code class="language-css">body {
background: rgb(212, 211, 211);
}
.grid {
width: 200px;
height: 200px;
border: 1px solid red;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
}
.grid div {
width: 20px;
height: 20px;
/*border:1px black solid;
box-sizing:border-box*/
}
.snake {
background: blue;
}
.apple {
background: yellow;
border-radius: 20px;
}
.popup {
background: rgb(32, 31, 31);
width: 100px;
height: 100px;
position: fixed;
top: 100px;
left: 100px;
display: flex;
justify-content: center;
align-items: center;
}
let popup = document.querySelector(".popup");
let playAgain = document.querySelector(".playAgain");
let scoreDisplay = document.querySelector(".scoreDisplay");
let left = document.querySelector(".left");
let bottom = document.querySelector(".bottom");
let right = document.querySelector(".right");
let up = document.querySelector(".top");
let width = 10;
let currentIndex = 0;
let appleIndex = 0;
let currentSnake = [2, 1, 0];
let direction = 1;
let score = 0;
let speed = 0.8;
let intervalTime = 0;
let interval = 0;
</code></pre><p>The variable width is exactly what it is (the width of the grid, that is 10). Other variables will make more sense as we go on – but believe it or not our snake is actually an array called <code>currentSnake</code>.</p><p>Now let's start with the functions:</p><pre><code class="language-js">document.addEventListener("DOMContentLoaded", function () {
document.addEventListener("keyup", control);
createBoard();
startGame();
playAgain.addEventListener("click", replay);
});
</code></pre><p>There is an <code>eventListener</code> on the document object called <code>DomContentLoaded</code> and this event is fired off immediately once the HTML content is loaded on our screen. </p><p>Once this happens, we set an eventListener on the document to watch for clicks on the keyboard (more on this later). After that, we want to create the <code>gameBoard</code>, start the game, and watch out for clicks on our replay button.</p><h3 id="the-createboard-function">The createBoard function</h3><pre><code class="language-js">function createBoard() {
popup.style.display = "none";
for (let i = 0; i &lt; 100; i++) {
let div = document.createElement("div");
grid.appendChild(div);
}
}
</code></pre><p>Like I said earlier, this is a 10 by 10 grid, meaning we are going to need 100 divs. So from above, we close the div popup and we loop to 100 every time we create a new div and append it to the grid (gameboard). </p><p>This will immediately add some of the styling we created from above (the .grid div). You can uncomment the CSS styles and you will see the divs created (uncomment them back).</p><h3 id="the-startgame-function">The startGame function</h3><pre><code class="language-js">function startGame() {
let squares = document.querySelectorAll(".grid div");
randomApple(squares);
//random apple
direction = 1;
scoreDisplay.innerHTML = score;
intervalTime = 1000;
currentSnake = [2, 1, 0];
currentIndex = 0;
currentSnake.forEach((index) =&gt; squares[index].classList.add("snake"));
interval = setInterval(moveOutcome, intervalTime);
}
</code></pre><p>The <code>startGame</code> function first gets all the divs (since we are creating the divs at runtime, we can not get them at the top of the code). </p><p>Next we select a spot for our apple. We will do that below in the <strong><code>randomApple</code></strong> function. The <code>direction</code> refers to where the snake is headed – 1 for right, -1 for left, and so on. </p><p><code>intervalTime</code> sets the time it takes for the snake to move around, while <code>currentSnake</code> defines where exactly on the grid the snake will be (note that the snake is basically a couple of divs given a particular type of color). </p><p>To display our snake on the screen, we will loop over <code>currentSnake</code> with <code>forEach</code>. With each value we get, we will use it with <strong>squares</strong>. Remember that we accessed the grid divs with <code>querySelectorAll</code>, and we can then access them like an array, that is using numbers. In our case, these are the values of <code>currentSnake</code>. </p><p>After this, we simply append a <code>setInterval</code> call (with function move <code>Outcome</code> and a time of <code>intervalTime</code>, which we set above) to the variable <code>interval</code>. This is so that we can easily call <code>clearInterval</code> on that variable. </p><p>The <code>moveOutcome</code> runs every 1000ms (1s) and basically defines what happens when you move the snake.</p><h3 id="the-moveoutcome-function"> The moveOutcome function</h3><pre><code class="language-js">function moveOutcome() {
let squares = document.querySelectorAll(".grid div");
if (checkForHits(squares)) {
alert("you hit something");
popup.style.display = "flex";
return clearInterval(interval);
} else {
moveSnake(squares);
}
}
</code></pre><p>So like the <code>startGame</code> function above, we first get all the <code>grid</code> divs, and then we check if the <strong><code>checkForHits</code></strong> function returns true. </p><p>If it does, this means we have hit something and then it displays the replay button and it clears the interval. If it returns false, this means we did not hit anything and we move the snake with the <strong><code>moveSnake</code></strong> function. </p><p>So basically, every 1sec the game either comes to an end if <code>checkForHits</code> is true or we move the snake a step forward if <code>checkForHits</code> is false. I will talk about the <code>moveSnake</code> function first.</p><h3 id="the-movesnake-function">The moveSnake function </h3><pre><code class="language-js">function moveSnake(squares) {
let tail = currentSnake.pop();
squares[tail].classList.remove("snake");
currentSnake.unshift(currentSnake[0] + direction);
// movement ends here
eatApple(squares, tail);
squares[currentSnake[0]].classList.add("snake");
}
</code></pre><p>The <code>moveSnake</code> function receives an argument called <code>squares</code> so that we don't have to get the <strong>.grid div</strong> again in this function. &nbsp;</p><p>The first thing we need to do is remove the last element of the <strong><code>currentSnake</code></strong> array via pop (this is the tail and the first element is always the head). Basically the snake moves a step forward leaving the previous position it was in. After this we simply add a new value to the beginning of the array with <code>unShift</code>. </p><p>Let's assume that our snake just started moving and is facing to the right (that is, direction = 1). That direction will be added to the <code>currentSnake</code>'s head and the sum will be pushed as the new <code>snakeHead</code>. </p><p>For example, if the snake was in position <strong>[2,1,0]</strong>, we remove the last element leaving it at position [2,1]. Then we take the head which is <strong>2</strong> and add the direction which is <strong>1</strong> and make this value the new value <strong>[3,2,1]</strong> which moves our snake a step forward to the right after one second. &nbsp;</p><p>If we want to move the snake downwards, the direction will be set to the width (which is 10) and added to the first element (that is 12 and pushed) <strong>[12,2,1]</strong>. </p><p>After that we simply check if the snake has eaten an apple and display the new snakehead on the DOM.</p><h3 id="the-checkforhits-function">The checkForHits function</h3><pre><code class="language-js">function checkForHits(squares) {
if (
(currentSnake[0] + width &gt;= width * width &amp;&amp; direction === width) ||
(currentSnake[0] % width === width - 1 &amp;&amp; direction === 1) ||
(currentSnake[0] % width === 0 &amp;&amp; direction === -1) ||
(currentSnake[0] - width &lt;= 0 &amp;&amp; direction === -width) ||
squares[currentSnake[0] + direction].classList.contains("snake")
) {
return true;
} else {
return false;
}
}
</code></pre><p>The <code>checkForHits</code> function has an if statement. Depending on the condition defined, it could either return true (meaning we hit something) or false. </p><p>The first condition is if <code>currentSnake</code> [0] (the head of the snake) + width (10) is equal to the total area of the width (that is, width*width = 100) and the direction is equal to the width. </p><p>So basically let's assume that the snake's head is at position 97 which is the last layer of our grid. If you were to add 10 to 97 (= 107), that is greater than the whole grid which is 100. If the direction of the snake is still headed downwards, then the snake has hit the bottom border. </p><p>If the snake was at 97 , 97+10 =107, but the player was able to change the direction to, say, 1 (like, they pressed the left key), then it would not hit anything.</p><p>Or (<strong>||</strong>) if the remainder when the head of the snake divided by the width = <strong>width-1</strong> (for example, 9) and the direction is <strong>1</strong>. Every last div on the right hand side has a value of <strong>9, 19, 29</strong> and so on. So basically it will always remain 9 when you divide by 10. </p><p>If the head of our snake is at position 39 and the direction is still 1 (that is, the snake is still moving to the wall), then it has hit something (the right wall). </p><p>Every other condition is pretty much the exact opposite of the two above. The final condition allows that if the snake head is headed to a place that already contains a class snake, that simply means the snake is biting itself.</p><p>So...if any of the conditions above are true, the snake has hit something and <strong>true</strong> will be returned (else false). And if that's the case, the game is over. But if it is false, move the snake a step forward with <code>moveSnake</code>. </p><h3 id="the-eatapple-function">The eatApple function</h3><pre><code class="language-js">function eatApple(squares, tail) {
if (squares[currentSnake[0]].classList.contains("apple")) {
squares[currentSnake[0]].classList.remove("apple");
squares[tail].classList.add("snake");
currentSnake.push(tail);
randomApple(squares);
score++;
scoreDisplay.textContent = score;
clearInterval(interval);
intervalTime = intervalTime * speed;
interval = setInterval(moveOutcome, intervalTime);
}
}
</code></pre><p>The <code>eatApple</code> function is called from the <code>moveSnake</code> function every time the snake moves a step. </p><p>It receives two argument squares, <strong>.grid div</strong> and <strong>tail</strong> (basically the value that was popped up from the snake in <code>moveOutcome</code>). It then checks if the next position our snake moves to contains an apple. </p><p>If it does, it simply adds that tail we popped up back to the array. This is because every time our snake eats an apple we want to increase the length of the snake by one value – and what better way than to add the tail that was popped off when it moved?</p><p>Then we simply select a new position for our apple with <code>randomApple</code> (see below). After that we add a value of <strong>one</strong> to our score and display it to the user, clear the <code>timeInterval</code> (so that we can increase the speed of the snake, that is the time each movement happens) and then we simply set the interval back.</p><h3 id="the-randomapple-function">The randomApple function</h3><pre><code class="language-js">function randomApple(squares) {
do {
appleIndex = Math.floor(Math.random() * squares.length);
} while (squares[appleIndex].classList.contains("snake"));
squares[appleIndex].classList.add("apple");
}
</code></pre><p><code>randomApple</code> simply picks a spot to place our apple by using a <strong>do while</strong> loop. First it picks a random position with <code>Math.random()</code> in the do loop and checks if the spot it picked already contains a snake class. </p><p>This means that the condition in the do statement will keep on running until it finds a spot that does not contain a snake (keep doing this while this is true). Once it finds a spot it simply gives that spot a class of apple.</p><h3 id="set-up-controls">Set up controls</h3><p>Now we need to set up our controls. We will start with keyboard users.</p><pre><code class="language-js">function control(e) {
if (e.keycode === 39) {
direction = 1; // right
} else if (e.keycode === 38) {
direction = -width; //if we press the up arrow, the snake will go ten divs up
} else if (e.keycode === 37) {
direction = -1; // left, the snake will go left one div
} else if (e.keycode === 40) {
direction = +width; // down the snake head will instantly appear 10 divs below from the current div
}
}
</code></pre><p>Remember from above we set an <code>eventListener</code> for <code><strong>keyup</strong></code>. This function fires off immediately after your hand presses and. leaves a key on a keyboard. </p><p>Now each button on the keyboard has a value called keycode (numbers) which we have access to and let us know which number was clicked. Basically we will be watching for the arrow keys with their respective keycodes. With that we make changes to the direction, for example<strong> -1, 10</strong> and so on. </p><p>Alright, I hope you understand how we are able to move the snake now.</p><p>Next, this set of buttons is for mobile devices and we are basically doing the same thing:</p><pre><code class="language-js">up.addEventListener("click", () =&gt; (direction = -width));
bottom.addEventListener("click", () =&gt; (direction = +width));
left.addEventListener("click", () =&gt; (direction = -1));
right.addEventListener("click", () =&gt; (direction = 1));
</code></pre><p>The final thing we need to do is create the <strong><code>replay</code> div</strong> which will popup when the snake hits something. The button helps us reset the game.</p><h3 id="the-replay-function">The replay function</h3><pre><code class="language-js">function replay() {
grid.innerHTML = "";
createBoard();
startGame();
popup.style.display = "none";
}
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
