---
card: "/images/default.jpg"
tags: [Programming]
description: I struggled for hours scrolling through tutorials, watching v
author: "Milad E. Fahmy"
title: "How to make your Tic Tac Toe game unbeatable by using the minimax algorithm"
created: "2021-08-15T19:29:57+02:00"
modified: "2021-08-15T19:29:57+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-javascript tag-artificial-intelligence tag-software-development tag-gaming tag-algorithms ">
<header class="post-full-header">
<h1 class="post-full-title">How to make your Tic Tac Toe game unbeatable by using the minimax algorithm</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/09/1_y2B2auvIpUI0vSLtT2KWyg-1.jpeg 300w,
/news/content/images/size/w600/2020/09/1_y2B2auvIpUI0vSLtT2KWyg-1.jpeg 600w,
/news/content/images/size/w1000/2020/09/1_y2B2auvIpUI0vSLtT2KWyg-1.jpeg 1000w,
/news/content/images/size/w2000/2020/09/1_y2B2auvIpUI0vSLtT2KWyg-1.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/09/1_y2B2auvIpUI0vSLtT2KWyg-1.jpeg" alt="How to make your Tic Tac Toe game unbeatable by using the minimax algorithm">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I struggled for hours scrolling through tutorials, watching videos, and banging my head on the desk trying to build an unbeatable Tic Tac Toe game with a reliable Artificial Intelligence. So if you are going through a similar journey, I would like to introduce you to the Minimax algorithm.</p>
<p>Like a professional chess player, this algorithm sees a few steps ahead and puts itself in the shoes of its opponent. It keeps playing ahead until it reaches a terminal arrangement of the board (<strong>terminal state</strong>) resulting in a tie, a win, or a loss. Once in a terminal state, the AI will assign an arbitrary positive score (+10) for a win, a negative score (-10) for a loss, or a neutral score (0) for a tie.</p>
<p>At the same time, the algorithm evaluates the moves that lead to a terminal state based on the players’ turn. It will choose the move with maximum score when it is the AI’s turn and choose the move with the minimum score when it is the human player’s turn. Using this strategy, Minimax avoids losing to the human player.</p>
<p>Try it for yourself in the following game preferably using a Chrome browser.</p>
See the Pen <a href='https://codepen.io/abdolsa/pen/vgjoMb'>minimax 4 medium</a> by Ahmad Abdolsaheb
(<a href='https://codepen.io/abdolsa'>@abdolsa</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
<p>A Minimax algorithm can be best defined as a recursive function that does the following things:</p>
<ol>
<li>return a value if a terminal state is found (+10, 0, -10)</li>
<li>go through available spots on the board</li>
<li>call the minimax function on each available spot (recursion)</li>
<li>evaluate returning values from function calls</li>
<li>and return the best value</li>
</ol>
<p>If you are new to the concept of recursion, I recommend watching this <a href="https://www.youtube.com/watch?v=VrrnjYgDBEk" rel="noopener">video</a> from Harvard’s CS50.</p>
<p>To completely grasp the Minimax’s thought process, let’s implement it in code and see it in action in the following two sections.</p>
<h3 id="minimax-in-code">Minimax in Code</h3>
<p>For this tutorial you will be working on a near end state of the game which is shown in figure 2 below. Since minimax evaluates every state of the game (hundreds of thousands), a near end state allows you to follow up with minimax’s recursive calls easier (9).</p>
<p>For the following figure, assume the AI is X and the human player is O.</p>
<figcaption>figure 2 sample of game state</figcaption>
</figure>
<p>To work with the Ti Tac Toe board more easily, you should define it as an array with 9 items. Each item will have its index as a value. This will come in handy later on. Because the above board is already populated with some X and Y moves, let us define the board with the X and Y moves already in it (<em>origBoard</em>).</p><pre><code class="language-javascript">var origBoard = ["O",1,"X","X",4,"X",6,"O","O"];</code></pre>
<p>Then declare <em>aiPlayer </em>and<em> huPlayer </em>variables and set them to “X” and “O” respectively<em>.</em></p>
<p>Additionally, you need a function that looks for winning combinations and returns true if it finds one, and a function that lists the indexes of available spots in the board.</p><pre><code class="language-javascript">/* the original board
O |   | X
---------
X |   | X
---------
| O | O
*/
var origBoard = [“O”,1 ,”X”,”X”,4 ,”X”, 6 ,”O”,”O”];
// human
var huPlayer = “O”;
// ai
var aiPlayer = “X”;
// returns list of the indexes of empty spots on the board
function emptyIndexies(board){
return  board.filter(s =&gt; s != "O" &amp;&amp; s != "X");
}
// winning combinations using the board indexies
function winning(board, player){
if (
(board[0] == player &amp;&amp; board[1] == player &amp;&amp; board[2] == player) ||
(board[3] == player &amp;&amp; board[4] == player &amp;&amp; board[5] == player) ||
(board[6] == player &amp;&amp; board[7] == player &amp;&amp; board[8] == player) ||
(board[0] == player &amp;&amp; board[3] == player &amp;&amp; board[6] == player) ||
(board[1] == player &amp;&amp; board[4] == player &amp;&amp; board[7] == player) ||
(board[2] == player &amp;&amp; board[5] == player &amp;&amp; board[8] == player) ||
(board[0] == player &amp;&amp; board[4] == player &amp;&amp; board[8] == player) ||
(board[2] == player &amp;&amp; board[4] == player &amp;&amp; board[6] == player)
) {
return true;
} else {
return false;
}
}</code></pre>
<p>Now let’s dive into the good parts by defining the Minimax function with two arguments <em>newBoard</em> and <em>player</em>. Then, you need to find the indexes of the available spots in the board and set them to a variable called <em>availSpots</em>.</p><pre><code class="language-javascript">// the main minimax function
function minimax(newBoard, player){
//available spots
var availSpots = emptyIndexies(newBoard);</code></pre>
<p>Also, you need to check for terminal states and return a value accordingly. If O wins you should return -10, if X wins you should return +10. In addition, if the length of the <em>availableSpots</em> array is zero, that means there is no more room to play, the game has resulted in a tie, and you should return zero.</p><pre><code class="language-javascript">
// checks for the terminal states such as win, lose, and tie
//and returning a value accordingly
if (winning(newBoard, huPlayer)){
return {score:-10};
}
else if (winning(newBoard, aiPlayer)){
return {score:10};
}
else if (availSpots.length === 0){
return {score:0};
}</code></pre>
<p>Next, you need to collect the scores from each of the empty spots to evaluate later. Therefore, make an array called <em>moves</em> and loop through empty spots while collecting each move’s index and score in an object called <em>move</em>.</p>
<p>Then, set the index number of the empty spot that was stored as a number in the <em>origBoard</em> to the index property of the <em>move</em> object. Later, set the empty spot on the <em>newboard</em> to the current player and call the <em>minimax </em>function with other player and the newly changed <em>newboard</em>. Next, you should store the object resulted from the <em>minimax</em> function call that includes a <em>score</em> property to the <em>score</em> property of the <em>move</em> object.</p>
<blockquote><em>If the minimax function does not find a terminal state, it keeps recursively going level by level deeper into the game. This recursion happens until it reaches a terminal state and returns a score one level up.</em></blockquote>
<p>Finally, Minimax resets <em>newBoard</em> to what it was before and pushes the <em>move</em> object to the <em>moves </em>array.</p><pre><code class="language-javascript">// an array to collect all the objects
var moves = [];
// loop through available spots
for (var i = 0; i &lt; availSpots.length; i++){
//create an object for each and store the index of that spot
var move = {};
move.index = newBoard[availSpots[i]];
// set the empty spot to the current player
newBoard[availSpots[i]] = player;
/*collect the score resulted from calling minimax
on the opponent of the current player*/
if (player == aiPlayer){
var result = minimax(newBoard, huPlayer);
move.score = result.score;
}
else{
var result = minimax(newBoard, aiPlayer);
move.score = result.score;
}
// reset the spot to empty
newBoard[availSpots[i]] = move.index;
// push the object to the array
moves.push(move);
}</code></pre>
<p>Then, the minimax algorithm needs to evaluate the best<em> move</em> in the <em>moves</em> array. It should choose the <em>move</em> with the highest score when AI is playing and the <em>move</em> with the lowest score when the human is playing. Therefore, If the <em>player</em> is <em>aiPlayer</em>, it sets a variable called <em>bestScore </em>to a very low number and loops through the <em>moves </em>array, if a <em>move</em> has a higher <em>score</em> than <em>bestScore</em>, the algorithm stores that <em>move</em>. In case there are moves with similar score, only the first one will be stored.</p>
<p>The same evaluation process happens when <em>player</em> is <em>huPlayer</em>, but this time <em>bestScore</em> would be set to a high number and Minimax looks for a move with the lowest score to store.</p>
<p>At the end, Minimax returns the object stored in <em>bestMove</em>.</p><pre><code class="language-javascript">// if it is the computer's turn loop over the moves and choose the move with the highest score
var bestMove;
if(player === aiPlayer){
var bestScore = -10000;
for(var i = 0; i &lt; moves.length; i++){
if(moves[i].score &gt; bestScore){
bestScore = moves[i].score;
bestMove = i;
}
}
}else{
// else loop over the moves and choose the move with the lowest score
var bestScore = 10000;
for(var i = 0; i &lt; moves.length; i++){
if(moves[i].score &lt; bestScore){
bestScore = moves[i].score;
bestMove = i;
}
}
}
// return the chosen move (object) from the moves array
return moves[bestMove];
}</code></pre>
<blockquote><em>That is it for the minimax function. :) you can find the above algorithm on <a href="https://github.com/ahmadabdolsaheb/minimaxarticle" rel="noopener">github</a> and <a href="https://codepen.io/abdolsa/pen/mABGoz?editors=1011" rel="noopener">codepen</a>. Play around with different boards and check the results in the console.</em></blockquote>
<p>In the next section, let’s go over the code line by line to better understand how the minimax function behaves given the board shown in figure 2.</p>
<h3 id="minimax-in-action">Minimax in action</h3>
<p>Using the following figure, let’s follow the algorithm’s function calls (<strong>FC</strong>) one by one.</p>
<p>Note: In figure 3, large numbers represent each function call and levels refer to how many steps ahead of the game the algorithm is playing.</p>
<figcaption>Figure 3 Minimax function call by function call</figcaption>
</figure>
<p><strong><em>1.</em></strong><em>origBoard </em>and <em>aiPlayer</em> is fed to the algorithm. The algorithm makes a list of the three empty spots it finds, checks for terminal states, and loops through every empty spot starting from the first one. Then, it changes the <em>newBoard</em> by placing the <em>aiPlayer </em>in the first empty spot.<em> </em>After that,<em> </em>it calls itself with <em>newBoard </em>and the <em>huPlayer </em>and waits for the FC to return a value.</p>
<p><strong>2. </strong>While the first FC is still running, the second one starts by making a list of the two empty spots it finds, checks for terminal states, and loops through the empty spot starting from the first one. Then, it changes the <em>newBoard</em> by placing the <em>huPlayer </em>in the first empty spot.<em> </em>After that<em> </em>it calls itself with <em>newBoard </em>and the <em>aiPlayer </em>and waits for the FC to return a value.</p>
<p><strong>3. </strong>Finally the algorithm makes a list of the empty spots, and finds a win for the human player after checking for terminal states. Therefore, it returns an object with a score property and value of -10.</p>
<blockquote><em>Since the second FC listed two empty spots, Minimax changes the </em>newBoard <em>by placing </em>huPlayer<em> in the second empty spot. Then, it calls itself with the new board and the </em>aiPlayer<em>.</em></blockquote>
<p><strong>4.</strong> The algorithm makes a list of the empty spots, and finds a win for the human player after checking for terminal states. Therefore, it returns an object with a score property and value of -10.</p>
<blockquote><em>On the second FC, the algorithm collects the values coming from lower levels (3rd and 4th FC). Since </em>huPlayer<em>’s turn resulted in the two values, the algorithm chooses the lowest of the two values. Because both of the values are similar, it chooses the first one and returns it up to the first FC.</em></blockquote>
<blockquote><em>At this point the first FC has evaluated the score of moving </em>aiPlayer<em> in the first empty spot. Next, it changes the </em>newBoard <em>by placing </em>aiPlayer<em> in the second empty spot. Then, it calls itself with the </em>newBoard<em> and the </em>huPlayer<em>.</em></blockquote>
<p><strong>5.</strong> On the fifth FC, The algorithm makes a list of the empty spots, and finds a win for the human player after checking for terminal states. Therefore, it returns an object with a score property and value of +10.</p>
<blockquote><em>After that, the first FC moves on by changing the </em>newBoard <em>and placing </em>aiPlayer<em> in the third empty spot. Then, it calls itself with the new board and the </em>huPlayer<em>.</em></blockquote>
<p><strong>6.</strong> The 6th FC starts by making a list of two empty spots it finds, checks for terminal states, and loops through the two empty spots starting from the first one. Then, it changes the <em>newBoard</em> by placing the <em>huPlayer </em>in the first empty spot.<em> </em>After that,<em> </em>it calls itself with <em>newBoard </em>and the <em>aiPlayer </em>and waits for the FC to return a score.</p>
<p><strong>7.</strong> Now the algorithm is two level deep into the recursion. It makes a list of the one empty spot it finds, checks for terminal states, and changes the <em>newBoard</em> by placing the <em>aiPlayer </em>in the empty spot.<em> </em>After that,<em> </em>it calls itself with <em>newBoard </em>and the <em>huPlayer </em>and waits for the FC to return a score so it can evaluate it.</p>
<p><strong>8. </strong>On the 8th FC,<strong> </strong>the algorithm makes an empty list of empty spots, and finds a win for the <em>aiPlayer</em> after checking for terminal states. Therefore, it returns an object with score property and value of +10 one level up (7th FC).</p>
<blockquote><em>The 7th FC only received one positive value from lower levels (8th FC). Because </em>aiPlayer’s turn <em>resulted in that value, the algorithm needs to return the highest value it has received from lower levels. Therefore, it returns its only positive value (+10) one level up (6th FC).</em></blockquote>
<blockquote><em>Since the 6th FC listed two empty spots, Minimax changes </em>newBoard<em> by placing </em>huPlayer<em> in the second empty spot. Then, calls itself with the new board and the </em>aiPlayer<em>.</em></blockquote>
<p><strong>9. </strong>Next, the algorithm makes a list of the empty spots, and finds a win for the <em>aiPlayer</em> after checking for terminal states. Therefore, it returns an object with score properties and value of +10.</p>
<blockquote><em>At this point, the 6 FC has to choose between the score (+10)that was sent up from the 7th FC (returned originally from from the 8 FC) and the score (-10) returned from the 9th FC. Since </em>huPlayer<em>’s turn resulted in those two returned values, the algorithm finds the minimum score (-10) and returns it upwards as an object containing score and index properties.</em></blockquote>
<blockquote><em>Finally, all three branches of the first FC have been evaluated ( -10, +10, -10). But because aiPlayer’s turn resulted in those values, the algorithm returns an object containing the highest score (+10) and its index (4).</em></blockquote>
<p><strong>In the above scenario, Minimax concludes that moving the X to the middle of the board results in the best outcome. :)</strong></p>
<h3 id="the-end-">The End!</h3>
<p>By now you should be able to understand the logic behind the Minimax algorithm. Using this logic try to implement a Minimax algorithm yourself or find the above sample on<strong> </strong><a href="https://github.com/ahmadabdolsaheb/minimaxarticle" rel="noopener">github</a> or <a href="https://codepen.io/abdolsa/pen/mABGoz?editors=1011" rel="noopener">codepen</a> and optimize it.</p>
<p><em>Thanks for reading! If you liked this story, don't forget to share it on social media.</em></p>
<p><em>Special thanks to Tuba Yilmaz, Rick McGavin, and Javid Askerov</em> <em>for reviewing this article.</em></p>
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
