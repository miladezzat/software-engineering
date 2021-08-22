---
card: "https://cdn-media-2.freecodecamp.org/w1280/5fc9fb8be6787e0983939c87.jpg"
tags: [Programming]
description: Recently I wondered – how can I program the computer to be un
author: "Milad E. Fahmy"
title: "Minimax Algorithm Guide: How to Create an Unbeatable AI"
created: "2021-08-15T19:27:52+02:00"
modified: "2021-08-15T19:27:52+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-game-development tag-algorithms tag-artificial-intelligence tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">Minimax Algorithm Guide: How to Create an Unbeatable AI</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5fc9fb8be6787e0983939c87.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5fc9fb8be6787e0983939c87.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5fc9fb8be6787e0983939c87.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5fc9fb8be6787e0983939c87.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5fc9fb8be6787e0983939c87.jpg" alt="Minimax Algorithm Guide: How to Create an Unbeatable AI">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Recently I wondered – how can I program the computer to be unbeatable in a tic-tac-toe game? </p>
<p>Well, I thought I could easily get an answer to this question. But as I went back and forth from articles to videos to a series of coding meditations, I only succeeded in becoming more confused. </p>
<p>However, my “Aha!” moment came when I took the time to understand how the <strong>minimax algorithm</strong> works.</p>
<p>If you are also on a similar path, let me take you through the steps to build an unbeatable AI (Artificial Intelligence).</p>
<h2 id="step-1-understand-the-basics-of-the-minimax-algorithm">Step 1: Understand the basics of the minimax algorithm</h2>
<p>A <strong>minimax algorithm</strong> is a <a href="https://www.codesweetly.com/recursion/">recursive</a> program written to find the best gameplay that minimizes any tendency to lose a game while maximizing any opportunity to win the game.</p>
<p>Graphically, we can represent minimax as an exploration of a <a href="https://en.wikipedia.org/wiki/Game_tree">game tree's</a> <a href="https://en.wikipedia.org/wiki/Node_(computer_science)">nodes</a> to discover the best game move to make. In such a case, the tree's root is the game's current state — where the minimax algorithm got invoked.</p>
<figcaption>Figure 1: The game tree of a concluding tic-tac-toe game</figcaption>
</figure>
<p>Our focus in this guide is to use minimax to create an unbeatable AI for a tic-tac-toe game. However, <a href="https://en.wikipedia.org/wiki/Minimax">you can also use it for complex games</a>, like chess, and general decision-making to resolve any uncertainties.</p>
<p>In most cases, the player that initially invokes minimax is called the <em>maximizing player</em>. In other words, the original invocator of minimax is the player that wants to maximize any opportunity to win the game.</p>
<p>In contrast, the maximizing player’s opponent is called the <em>minimizing player</em>. As such, the minimizing player is the player whose chances of winning must be minimized.</p>
<p>In short, a minimax algorithm is a recursive function created to help a player (the maximizer) decide on the gameplay that <em>minimizes</em> the <em>maximum</em> possibility to lose a game.</p>
<h2 id="step-2-get-familiar-with-this-tutorial-s-root-node">Step 2: Get familiar with this tutorial’s root node</h2>
<p>To make this tutorial precise, the root node (the current state of the tic-tac-toe game) we will use will be a near-the-end state game board — as shown in figure 2 below. </p>
<p>Also, the <strong>X</strong> mark will represent the AI’s mark, while the <strong>O</strong> mark will be the human player’s mark.</p>
<figcaption>Figure 2: This tutorial’s root node</figcaption>
</figure>
<p>In the current stage of the tic-tac-toe game (as shown in figure 2 above), it’s <strong>X</strong>’s turn to play (that is, the AI’s turn). And since there are three empty cells on the board, it implies that <strong>X</strong> has three possible play choices — top-middle, center, or bottom-right. </p>
<p>But which is the best choice? Which move will best help <strong>X</strong> minimize the maximum possibility of losing the game?</p>
<figcaption>Figure 3: AI player’s possible play choices</figcaption>
</figure>
<p>To make the best decision, the AI needs to do the following:</p>
<ol>
<li>Store the current state (values) of the tic-tac-toe board in an array. (For any empty cell, the cell’s index will get stored as its present content).</li>
<li>Get an array list of <em>only the empty cells’</em> indexes.</li>
<li>Check and confirm if a specific player has won the game.</li>
<li><a href="https://www.codesweetly.com/recursion/">Recursively</a> invoke <em>minimax</em> on each of the board’s empty cells.</li>
<li>Return a score for every possible move for both player <strong>X</strong> and player <strong>O</strong>.</li>
<li>Out of all the returned scores, choose the best one (the highest) that is guaranteed to minimize the human player’s possibilities of winning the game.</li>
</ol>
<p>Therefore, in the following steps below, we will configure the AI to accomplish the list above. So, let’s get started by storing the board’s current state in an array.</p>
<h2 id="step-3-store-the-board-s-current-state-in-an-array">Step 3: Store the board’s current state in an array</h2>
<p>Our next step is to store the current content of each of the board's cells in an array like so:</p><pre><code class="language-js">const currentBoardState = ["X", 1, "O", "X", 4, "X", "O", "O", 8];</code></pre>
<p><strong>Note:</strong></p>
<ul>
<li>The current state of our tic-tac-toe board is still as illustrated in figure 2.</li>
<li>The values <code>1</code>, <code>4</code>, and <code>8</code> in the <code>currentBoardState</code> array are the board's empty cells' index numbers. In other words, instead of using empty strings, we chose to store the empty cells' current content as their respective indexes.</li>
</ul>
<p>Importantly, before moving to the next step, let us explicitly define whose mark is <code>“X”</code> and who owns <code>“O”</code>.</p><pre><code class="language-js">const aiMark = "X";
const humanMark = "O";</code></pre>
<p>The two statements above denote that the AI’s mark is <strong>X</strong> while the human player’s mark is <strong>O</strong>.</p>
<h2 id="step-4-create-a-function-to-get-the-indexes-of-all-the-empty-cells">Step 4: Create a function to get the indexes of all the empty cells</h2>
<p>The function below will filter the <code>currentBoardState</code> array — which will be passed-in as the function’s parameter’s argument. It will then return a new array containing all the <code>currentBoardState</code> array’s items that are neither <code>“X”</code> nor <code>“O”</code>.</p><pre><code class="language-js">function getAllEmptyCellsIndexes(currBdSt) {
return currBdSt.filter(i =&gt; i != "X" &amp;&amp; i != "O");
}</code></pre>
<p><strong>Note:</strong> Remember that the <code>currentBoardState</code> array we created in step 3 contains only the values <code>“X”</code>, <code>“O”</code>, and <em>the board's empty cells' indexes</em>. Therefore, the <code>getAllEmptyCellsIndexes()</code> function above filters out any occurrence of an index in the <code>currentBoardState</code> array.</p>
<h2 id="step-5-create-a-winner-determiner-function">Step 5: Create a winner determiner function</h2>
<p>The primary purpose of the <em>winner determiner function</em> below is to receive a <code>currentBoardState</code> array and a specific player’s mark (either mark <code>“X”</code> or <code>“O”</code>) as its parameters’ arguments. </p>
<p>Then, it checks if the received mark forms a winning combination on the tic-tac-toe board. If so, the Boolean value <code>true</code> is returned — otherwise, <code>false</code> is returned.</p><pre><code class="language-js">function checkIfWinnerFound(currBdSt, currMark) {
if (
(currBdSt[0] === currMark &amp;&amp; currBdSt[1] === currMark &amp;&amp; currBdSt[2] === currMark) ||
(currBdSt[3] === currMark &amp;&amp; currBdSt[4] === currMark &amp;&amp; currBdSt[5] === currMark) ||
(currBdSt[6] === currMark &amp;&amp; currBdSt[7] === currMark &amp;&amp; currBdSt[8] === currMark) ||
(currBdSt[0] === currMark &amp;&amp; currBdSt[3] === currMark &amp;&amp; currBdSt[6] === currMark) ||
(currBdSt[1] === currMark &amp;&amp; currBdSt[4] === currMark &amp;&amp; currBdSt[7] === currMark) ||
(currBdSt[2] === currMark &amp;&amp; currBdSt[5] === currMark &amp;&amp; currBdSt[8] === currMark) ||
(currBdSt[0] === currMark &amp;&amp; currBdSt[4] === currMark &amp;&amp; currBdSt[8] === currMark) ||
(currBdSt[2] === currMark &amp;&amp; currBdSt[4] === currMark &amp;&amp; currBdSt[6] === currMark)
) {
return true;
} else {
return false;
}
}</code></pre>
<h2 id="step-6-create-the-minimax-algorithm">Step 6: Create the minimax algorithm</h2>
<p>A <strong>minimax algorithm</strong> is just an ordinary function that contains statements to be executed once the function is invoked. Therefore, the process of creating the algorithm is the same as creating any other function. So, let’s create one now.</p><pre><code class="language-js">function minimax(currBdSt, currMark) {
// Space for the minimax’s statements
}</code></pre>
<p>That’s it! We’ve created a <strong>minimax</strong> function — albeit an empty one. Our next step is to fill up the function with statements that will be executed once the function is invoked — which we will do below.</p>
<p><strong>Note:</strong> The minimax function created above is designed to accept <em>two arguments</em>.<br>The first is <em>an array</em> list of the current board’s content — that is, the present value of the <code>currentBoardState</code> array. While the second argument is <em>the mark</em> of the player currently running the minimax algorithm — that is, mark <code>“X”</code> or mark <code>“O”</code>.</p>
<h2 id="step-7-first-minimax-invocation">Step 7: First minimax invocation</h2>
<p>To avoid any confusion later in this tutorial, let’s invoke our minimax function for the first time — while passing-in the <code>currentBoardState</code> array and the <code>aiMark</code> as the function’s arguments.</p><pre><code class="language-js">const bestPlayInfo = minimax(currentBoardState, aiMark);</code></pre>
<h2 id="step-8-store-the-indexes-of-all-empty-cells">Step 8: Store the indexes of all empty cells</h2>
<p>In this step, we will invoke the <code>getAllEmptyCellsIndexes</code> function that we created at step 4 — while passing-in the <code>currentBoardState</code> array as the function’s argument. </p>
<p>Then, we will store the <em>returned</em> array list of indexes inside a variable named <code>availCellsIndexes</code>.</p><pre><code class="language-js">const availCellsIndexes = getAllEmptyCellsIndexes(currBdSt);</code></pre>
<h2 id="step-9-check-if-there-is-a-terminal-state">Step 9: Check if there is a terminal state</h2>
<p>At this stage, we need to verify if there is a terminal state (that is, a loss state, a win state, or a draw state) on the tic-tac-toe board. We will accomplish this verification by invoking the <em>winner determiner function</em> (created in step 5) for each of the players.</p>
<p>If the function finds a win state for the human player (the minimizer), it will return <code>-1</code> (which signifies that the human player has won, and the AI has lost). But if it finds a win state for the AI player (the maximizer), it will return <code>+1</code> (which indicates that the AI has won, and the human player has lost).</p>
<p>However, suppose the winner determiner function cannot find any empty cell on the board or any win state for either player. In that case, it will return <code>0</code> (zero) — which signifies that the game has ended in a tie.</p>
<p><strong>Note:</strong> The scores (<code>-1</code>, <code>+1</code>, and <code>0</code>) indicated above are <a href="https://www.vocabulary.com/dictionary/heuristic">heuristic</a> values — which means that we will still get the same result if we prefer to use -25, +25, and 0.</p>
<p>Let’s now proceed to implement the terminal state verification by using an <em>if statement</em> like so:</p><pre><code class="language-js">if (checkIfWinnerFound(currBdSt, humanMark)) {
return {score: -1};
} else if (checkIfWinnerFound(currBdSt, aiMark)) {
return {score: 1};
} else if (availCellsIndexes.length === 0) {
return {score: 0};
}</code></pre>
<p>When there is a terminal state (lose, win, or draw), the active minimax function will return the appropriate terminal state score (<code>-1</code>, <code>+1</code>, or <code>0</code>) and end its invocation.</p>
<p>If the active minimax ends its invocation here, the algorithm will move on to step 12.</p>
<p>However, when there is <em>no</em> terminal state, the active minimax function will execute the next statement (step 10, below).</p>
<h2 id="step-10-get-ready-to-test-the-outcome-of-playing-the-current-player-s-mark-on-each-empty-cell">Step 10: Get ready to test the outcome of playing the current player’s mark on each empty cell</h2>
<p>As step 9 found no terminal state, we have to devise a way to test what will happen if the current player (who is to make the next game move) plays on each empty cell.</p>
<p>In other words, if the current player plays on the first available cell, and the opponent plays on the second empty cell, will the current player win, lose, or draw the game? Or will there still be no terminal state found?</p>
<p>Alternatively, what will happen if the current player plays on the second available cell, and the opponent plays on the first empty cell?</p>
<p>Or perhaps, will the third available cell be the best spot for the current player to play?</p>
<p>This test drive is what we need to do now. But before we begin, we need a place to record each test's outcome — so let’s do that first by creating an array named <code>allTestPlayInfos</code>.</p><pre><code class="language-js">const allTestPlayInfos = [];</code></pre>
<p>So, now that we have secured a place to store each test drive’s result, let’s begin the trials by creating a <em>for-loop statement</em> that will loop through each of the empty cells starting from the first one.</p><pre><code class="language-js">for (let i = 0; i &lt; availCellsIndexes.length; i++) {
// Space for the for-loop’s codes
}</code></pre>
<p>In the next two steps, we will fill up the for-loop with the code it should run for each empty cell.</p>
<h2 id="step-11-test-play-the-current-player-s-mark-on-the-empty-cell-the-for-loop-is-currently-processing">Step 11: Test-play the current player’s mark on the empty cell the for-loop is currently processing</h2>
<p>Before doing anything in this step, let’s review the current state of our board.</p>
<figcaption>Figure 4: The current state of the tic-tac-toe board</figcaption>
</figure>
<p>Notice that the above board is still the same as that of figure 2, except that we’ve highlighted — in red — the cell the for-loop is currently processing.</p>
<p>Next, it will be helpful to have a place to store this test-play’s terminal score — so let’s create an object like so:</p><pre><code class="language-js">const currentTestPlayInfo = {};</code></pre>
<p>Also, before test-playing the current player’s mark on the red cell, let’s save the cell’s index number — so that it will be easy to reset the cell’s info after this test-play.</p><pre><code class="language-js">currentTestPlayInfo.index = currBdSt[availCellsIndexes[i]];</code></pre>
<p>Let’s now place the current player’s mark on the red cell (that is, the cell currently being processed by the for-loop).</p><pre><code class="language-js">currBdSt[availCellsIndexes[i]] = currMark;</code></pre>
<p>Based on the current player’s gameplay, the board’s state will change to reflect its latest move.</p>
<figcaption>Figure 5: The new board — which reflects the current player’s latest move</figcaption>
</figure>
<p>Therefore, since the board’s state has changed, we need to recursively run minimax on the new board — while passing in the new board's state and the next player's mark.</p><pre><code class="language-js">if (currMark === aiMark) {
const result = minimax(currBdSt, humanMark);
currentTestPlayInfo.score = result.score;
} else {
const result = minimax(currBdSt, aiMark);
currentTestPlayInfo.score = result.score;
}</code></pre>
<p><strong>Note:</strong></p>
<ul>
<li>The recursive invocation of minimax at this very point will be the _____ time we are invoking the function. The first invocation happened in step 7.</li>
<li>This recursive invocation will cause the reiteration of steps 8 to 11.</li>
<li>Suppose there is a terminal state at step 9. In that case, the current minimax invocation will stop running — and store the returned terminal object (for example, <code>{score: 1}</code>) in the <code>result</code> variable.</li>
<li>Once there is a terminal state, step 12 will be the next step.</li>
<li>If there exists <em>no</em> terminal state, a <strong>second for-loop</strong> will begin for the new board at step 10.</li>
<li>If step 10 is repeated, please replace figure 4’s board with the new board in figure 5. However, the cell highlighted in red will now be the cell the for-loop is currently processing. So please, do reflect the changes accordingly.</li>
</ul>
<h2 id="step-12-save-the-latest-terminal-score">Step 12: Save the latest terminal score</h2>
<p>After the just concluded minimax invocation has returned its terminal state's value, the active for-loop will save the <code>result</code> variable's score into the <code>currentTestPlayInfo</code> object like so:</p><pre><code class="language-js">currentTestPlayInfo.score = result.score;</code></pre>
<p>Then, since the returned score officially ends the current test-play, it is best to reset the current board back to the state before the current player made its move.</p><pre><code class="language-js">currBdSt[availCellsIndexes[i]] = currentTestPlayInfo.index;</code></pre>
<p>Also, we need to save the result of the current player’s test-play for future use. So, let’s do that by pushing the <code>currentTestPlayInfo</code> object to the <code>allTestPlayInfos</code> array like so:</p><pre><code class="language-js">allTestPlayInfos.push(currentTestPlayInfo);</code></pre>
<p><strong>Note:</strong></p>
<ul>
<li>If you got to this step from step 17, kindly continue this tutorial at <em>step 18</em>. Otherwise, consider the next point.</li>
<li>If the active for-loop has finished looping through all the current board's empty cells, the loop will end at this point, and <em>step 14</em> will be next. Otherwise, the loop will proceed to process the next available cell (step 13).</li>
</ul>
<h2 id="step-13-run-the-active-for-loop-on-the-next-empty-cell">Step 13: Run the active for-loop on the next empty cell</h2>
<p>Remember that the currently active for-loop (that began at step 10) has only finished its work for the preceding empty cell(s). Therefore, the loop will proceed to test-play the current player’s mark on the next free cell. </p>
<p>In other words, the currently running minimax function will repeat steps <strong>11</strong> and <strong>12</strong>. But, essentially, take note of the following:</p>
<ul>
<li>The red cell highlighted in figure 4 will change to the cell the for-loop is currently processing.</li>
<li>Please, be mindful that figure 5 will also change. In other words, the current player’s move will now be on the cell the for-loop is currently processing.</li>
<li>After the active for-loop has completed its work, the <code>allTestPlayInfos</code> array will contain specific objects for each empty cell the for-loop has processed.</li>
<li>Each of the objects in the <code>allTestPlayInfos</code> array will contain an <code>index</code> property and a <code>score</code> property (take for example: <code>{index: 8, score: -1}</code>).</li>
<li>If you got to this step from step 20, then, <em>on completing step 12</em>, kindly continue this tutorial at <em>step 18</em>.</li>
</ul>
<h2 id="step-14-plan-how-to-get-the-object-with-the-best-test-play-score-for-the-current-player">Step 14: Plan how to get the object with the best test-play score for the current player</h2>
<p>Immediately after the for-loop has completed its work of looping through all the empty cells of the current board, minimax will:</p>
<ol>
<li><strong>Create a space</strong> to store the reference number that will later help to get the best test-play object.</li>
<li><strong>Get the reference number</strong> to the current player’s best test-play.</li>
<li><strong>Use the acquired reference number</strong> to get the object with the best test-play for the current player.</li>
</ol>
<p>Without any further ado, let’s implement this plan in the next few steps.</p>
<h2 id="step-15-create-a-store-for-the-best-test-play-s-reference">Step 15: Create a store for the best test-play’s reference</h2>
<p>The variable below is the place we will later store the reference to the best test-play object. (Note that the value <code>null</code> indicates that we have deliberately left the variable empty).</p><pre><code class="language-js">let bestTestPlay = null;</code></pre>
<h2 id="step-16-get-the-reference-to-the-current-player-s-best-test-play">Step 16: Get the reference to the current player’s best test-play</h2>
<p>Now that there is a <code>bestTestPlay</code> store, the active minimax function can proceed to get the reference to the current player’s best test-play like so:</p><pre><code class="language-js">if (currMark === aiMark) {
let bestScore = -Infinity;
for (let i = 0; i &lt; allTestPlayInfos.length; i++) {
if (allTestPlayInfos[i].score &gt; bestScore) {
bestScore = allTestPlayInfos[i].score;
bestTestPlay = i;
}
}
} else {
let bestScore = Infinity;
for (let i = 0; i &lt; allTestPlayInfos.length; i++) {
if (allTestPlayInfos[i].score &lt; bestScore) {
bestScore = allTestPlayInfos[i].score;
bestTestPlay = i;
}
}
}</code></pre>
<p>The code above means if the current mark is equal to the AI player’s mark:</p>
<ol>
<li>Create a <code>bestScore</code> variable with the value of <code>-Infinity</code>. (Note that this value is just a placeholder value that needs to be <em>less than</em> all the scores in the <code>allTestPlayInfos</code> array. Therefore, using <code>-700</code> will do the same job).</li>
<li>Then, for every test-play object in the <code>allTestPlayInfos</code> array, check if the test-play the loop is currently processing has a <em>higher</em> score than the current <code>bestScore</code>. If so, record that test-play’s details inside both the <code>bestScore</code> variable and the <code>bestTestPlay</code> variable.</li>
</ol>
<p>Otherwise, if the current mark is the human player’s mark:</p>
<ol>
<li>Create a <code>bestScore</code> variable with the value of <code>+Infinity</code>. (Again, note that we will get the same outcome if we had preferred to use <code>+300</code>. It is just a placeholder value that needs to be <em>greater than</em> all the scores in the <code>allTestPlayInfos</code> array).</li>
<li>Then, for every test-play object in the <code>allTestPlayInfos</code> array, check if the test-play the loop is currently processing has a <em>lesser</em> score than the current <code>bestScore</code>. If so, record that test-play’s details inside both the <code>bestScore</code> variable and the <code>bestTestPlay</code> variable.</li>
</ol>
<h2 id="step-17-get-the-object-with-the-best-test-play-score-for-the-current-player">Step 17: Get the object with the best test-play score for the current player</h2>
<p>Finally, the currently running minimax invocation can now finish its work by returning the object with the best test-play for the current player like so:</p><pre><code class="language-js">return allTestPlayInfos[bestTestPlay];</code></pre>
<p>Note that minimax will store the returned object inside the <code>result</code> variable of the first for-loop that began at step 11. It will then repeat step 12. Please revisit step 12 only. Then, continue this tutorial below.</p>
<h2 id="step-18-let-s-do-a-review">Step 18: Let’s do a review</h2>
<p>This stage is an excellent time to review what we've done thus far pictorially.</p>
<p><strong>Note:</strong></p>
<ul>
<li>If this is your first time on this step, please use the diagram in <em>step 19</em>.</li>
<li>Is this your second time on this step? If so, the diagram in <em>step 21</em> is yours.</li>
<li>Are you here for the third time? Well-done! Check out the diagram in <em>step 23</em>.</li>
</ul>
<h2 id="step-19-tracing-our-steps-with-a-diagram">Step 19: Tracing our steps with a diagram</h2>
<p>The diagram below shows the AI and the human player's <em>first test-play</em> for the first for-loop invocation initiated by the AI player.</p>
<figcaption>Figure 6: First test-play which predicts a loss state for the AI (maximizer)</figcaption>
</figure>
<h2 id="step-20-the-first-for-loop-moves-forward-to-process-the-next-empty-cell">Step 20: The first for-loop moves forward to process the next empty cell</h2>
<p>On concluding that playing on the first empty cell will end in a loss state, the AI forges ahead to test the outcome of playing on the <em>second free cell</em> by repeating step 13.</p>
<h2 id="step-21-tracing-our-steps-with-a-diagram">Step 21: Tracing our steps with a diagram</h2>
<p>The diagram below shows the AI and the human player's <em>second test-play</em> for the first for-loop invocation initiated by the AI player.</p>
<figcaption>Figure 7: Second test-play which predicts a win state for the AI (maximizer)</figcaption>
</figure>
<h2 id="step-22-the-first-for-loop-moves-forward-to-process-the-next-empty-cell">Step 22: The first for-loop moves forward to process the next empty cell</h2>
<p>Now that the AI has confirmed that playing on the second empty cell will result in a win state, it further checks the outcome of playing on the <em>third free cell</em> by repeating step 13.</p>
<h2 id="step-23-tracing-our-steps-with-a-diagram">Step 23: Tracing our steps with a diagram</h2>
<p>The diagram below shows the AI and the human player's <em>third test-play</em> for the first for-loop invocation initiated by the AI player.</p>
<figcaption>Figure 8: Third test-play which predicts a loss state for the AI (maximizer)</figcaption>
</figure>
<h2 id="step-24-get-the-object-with-the-best-test-play-score-for-the-ai-player">Step 24: Get the object with the best test-play score for the AI player</h2>
<p>At this point (after the third test-play), the first for-loop would have processed all the three empty cells of the first board (passed-in to minimax at step 7). </p>
<p>Therefore, minimax will forge ahead to get the object with the best test-play for the AI player — by repeating steps 15 to 17. However, <em>when at step 17</em>, kindly note the following:</p>
<ul>
<li>The returned object will now get stored in the <code>bestPlayInfo</code> variable that we created at step 7.</li>
<li>Minimax will not repeat step 12 because the for-loop statement is no longer active.</li>
</ul>
<figcaption>Figure 9: Overview of all test-plays and scores</figcaption>
</figure>
<h2 id="step-25-use-the-data-inside-bestplayinfo">Step 25: Use the data inside bestPlayInfo</h2>
<p>Considering this tutorial’s board (a near-the-end state game board — as shown in figure 2 of step 2), the object in the <code>bestPlayInfo</code> variable will be <code>{index: 4, score: 1}</code>. Therefore, the AI can now use its index value to choose the best cell to play on.</p>
<h3 id="example">Example</h3><pre><code class="language-js">// Get all the board’s cells:
const gameCells = document.querySelectorAll(".cell");
// Below is the variable we created at step 3:
const aiMark = "X";
// Here is the bestPlayInfo we created at step 7 to contain the best test-play object for the AI player:
const bestPlayInfo = minimax(currentBoardState, aiMark);
// Play the AI’s mark on the cell that is best for it:
gameCells[bestPlayInfo.index].innerText = aiMark;</code></pre>
<p>Therefore, the AI player will win the game, and the new board will now look like so:</p>
<figcaption>Figure 10: Final gameboard showing that the AI (player X) has won the game</figcaption>
</figure>
<h2 id="step-26-a-bird-s-eye-view-of-this-tutorial-s-algorithm">Step 26: A bird’s-eye view of this tutorial’s algorithm</h2>
<p>Below is this tutorial’s minimax algorithm in one piece. Feel free to insert it into your editor. Play around with it for various game scenarios, and use the console to test, test, and test it again until you are comfortable building an unbeatable AI. </p>
<p>And remember, programming is better only when you <a href="https://www.codesweetly.com/">code sweetly</a> — so have lots of fun with it!</p><pre><code class="language-js">// Step 3 - Store the board’s current state in an array and define each mark's owner:
const currentBoardState = ["X", 1, "O", "X", 4, "X", "O", "O", 8];
const aiMark = "X";
const humanMark = "O";
// Step 4 - Create a function to get the indexes of all the empty cells:
function getAllEmptyCellsIndexes(currBdSt) {
return currBdSt.filter(i =&gt; i != "O" &amp;&amp; i != "X");
}
// Step 5 - Create a winner determiner function:
function checkIfWinnerFound(currBdSt, currMark) {
if (
(currBdSt[0] === currMark &amp;&amp; currBdSt[1] === currMark &amp;&amp; currBdSt[2] === currMark) ||
(currBdSt[3] === currMark &amp;&amp; currBdSt[4] === currMark &amp;&amp; currBdSt[5] === currMark) ||
(currBdSt[6] === currMark &amp;&amp; currBdSt[7] === currMark &amp;&amp; currBdSt[8] === currMark) ||
(currBdSt[0] === currMark &amp;&amp; currBdSt[3] === currMark &amp;&amp; currBdSt[6] === currMark) ||
(currBdSt[1] === currMark &amp;&amp; currBdSt[4] === currMark &amp;&amp; currBdSt[7] === currMark) ||
(currBdSt[2] === currMark &amp;&amp; currBdSt[5] === currMark &amp;&amp; currBdSt[8] === currMark) ||
(currBdSt[0] === currMark &amp;&amp; currBdSt[4] === currMark &amp;&amp; currBdSt[8] === currMark) ||
(currBdSt[2] === currMark &amp;&amp; currBdSt[4] === currMark &amp;&amp; currBdSt[6] === currMark)
) {
return true;
} else {
return false;
}
}
// Step 6 - Create the minimax algorithm:
function minimax(currBdSt, currMark) {
// Step 8 - Store the indexes of all empty cells:
const availCellsIndexes = getAllEmptyCellsIndexes(currBdSt);
// Step 9 - Check if there is a terminal state:
if (checkIfWinnerFound(currBdSt, humanMark)) {
return {score: -1};
} else if (checkIfWinnerFound(currBdSt, aiMark)) {
return {score: 1};
} else if (availCellsIndexes.length === 0) {
return {score: 0};
}
// Step 10 - Create a place to record the outcome of each test drive:
const allTestPlayInfos = [];
// Step 10 - Create a for-loop statement that will loop through each of the empty cells:
for (let i = 0; i &lt; availCellsIndexes.length; i++) {
// Step 11 - Create a place to store this test-play’s terminal score:
const currentTestPlayInfo = {};
// Step 11 - Save the index number of the cell this for-loop is currently processing:
currentTestPlayInfo.index = currBdSt[availCellsIndexes[i]];
// Step 11 - Place the current player’s mark on the cell for-loop is currently processing:
currBdSt[availCellsIndexes[i]] = currMark;
if (currMark === aiMark) {
// Step 11 - Recursively run the minimax function for the new board:
const result = minimax(currBdSt, humanMark);
// Step 12 - Save the result variable’s score into the currentTestPlayInfo object:
currentTestPlayInfo.score = result.score;
} else {
// Step 11 - Recursively run the minimax function for the new board:
const result = minimax(currBdSt, aiMark);
// Step 12 - Save the result variable’s score into the currentTestPlayInfo object:
currentTestPlayInfo.score = result.score;
}
// Step 12 - Reset the current board back to the state it was before the current player made its move:
currBdSt[availCellsIndexes[i]] = currentTestPlayInfo.index;
// Step 12 - Save the result of the current player’s test-play for future use:
allTestPlayInfos.push(currentTestPlayInfo);
}
// Step 15 - Create a store for the best test-play’s reference:
let bestTestPlay = null;
// Step 16 - Get the reference to the current player’s best test-play:
if (currMark === aiMark) {
let bestScore = -Infinity;
for (let i = 0; i &lt; allTestPlayInfos.length; i++) {
if (allTestPlayInfos[i].score &gt; bestScore) {
bestScore = allTestPlayInfos[i].score;
bestTestPlay = i;
}
}
} else {
let bestScore = Infinity;
for (let i = 0; i &lt; allTestPlayInfos.length; i++) {
if (allTestPlayInfos[i].score &lt; bestScore) {
bestScore = allTestPlayInfos[i].score;
bestTestPlay = i;
}
}
}
// Step 17 - Get the object with the best test-play score for the current player:
return allTestPlayInfos[bestTestPlay];
}
// Step 7 - First minimax invocation:
const bestPlayInfo = minimax(currentBoardState, aiMark);</code></pre>
<h2 id="useful-resource">Useful resource</h2>
<ul>
<li><a href="https://www.codesweetly.com/recursion/">Recursion: What You Need to Know about Recursion</a></li>
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
