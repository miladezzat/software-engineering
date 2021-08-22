---
card: "https://cdn-media-1.freecodecamp.org/images/1*tTQJFNpKFOOiH8dN_2tyEQ.png"
tags: [Programming]
description: by Ben Carp
author: "Milad E. Fahmy"
title: "Building an AI algorithm for the Tic-Tac-Toe challenge"
created: "2021-08-15T19:50:06+02:00"
modified: "2021-08-15T19:50:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-ai tag-algorithms tag-games tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">Building an AI algorithm for the Tic-Tac-Toe challenge</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*tTQJFNpKFOOiH8dN_2tyEQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*tTQJFNpKFOOiH8dN_2tyEQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*tTQJFNpKFOOiH8dN_2tyEQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*tTQJFNpKFOOiH8dN_2tyEQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*tTQJFNpKFOOiH8dN_2tyEQ.png" alt="Building an AI algorithm for the Tic-Tac-Toe challenge">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Ben Carp</p>
<h1 id="building-an-ai-algorithm-for-the-tic-tac-toe-challenge">Building an AI algorithm for the Tic-Tac-Toe challenge</h1>
<p>As part of the <a href="https://www.freecodecamp.org/" rel="noopener">freeCodeCamp</a> curriculum, I was challenged build a <a href="https://en.wikipedia.org/wiki/Tic-tac-toe" rel="noopener">Tic-Tac-Toe</a> web app. It was a real pleasure.</p>
<p>The app includes an ultimate computer player. It can optimize any given situation on the Tic-Tac-Toe board. The outcome surprised me.</p>
<p>Even in such a simple game, the computer player taught me some new moves. As for the code I wrote, it is somewhat unique and interesting to explore.</p>
<h3 id="check-it-out">Check it out</h3>
<p>Visit <a href="https://carpben.github.io/TicTacToe/" rel="noopener">this link</a> and choose to play against the computer. <strong>I challenge you to win</strong>. You might find…that you can’t.</p>
<p>Yet, if you are hard on the defense, you might find out that the computer is not able to win either. I learned by experience that Tic-Tac-Toe has a simple <strong>non-lose</strong> strategy.</p>
<p>This means that if you manage to get a tie you are making the right defensive choices. The computer still optimizes its’ moves. So, the best result it can achieve against a player such as yourself might only be a tie.</p>
<h3 id="main-solution-steps">Main Solution steps</h3>
<h3 id="1-board-data-structure">1. board data structure</h3><pre><code>_gameBoard: [[“”, “”, “”],[“”, “”, “”],[“”, “”, “”]]</code></pre>
<p>The board Array contains 3 arrays, each representing a row.<br>Each row array contains 3 character or string elements.</p>
<p>These elements are either:</p>
<ul>
<li>“ ” as an empty string, representing an empty cell</li>
<li>“X” representing the X player</li>
<li>“O” representing the O player</li>
</ul>
<h3 id="2-getresult-function">2. getResult function</h3>
<p><a href="https://github.com/carpben/TicTacToe/blob/ea8a67918f0ab97bca40e4383839e95695da803f/tictactoe.js#L59" rel="noopener">Begins at Line 59</a></p>
<p>At any given state, the board will be in one and one only of these possible states:</p>
<ul>
<li>Incomplete</li>
<li>player X won</li>
<li>Player O won</li>
<li>or a tie</li>
</ul>
<p>The <code>getResult</code> function receives a board array, iterates over all the rows, through all the columns and across both diagonals. It checks the succession of symbols. Then it lets us know the current state of that board.</p>
<h3 id="3-getbestmove-function">3. getBestMove Function</h3>
<p>Here it gets more difficult. When the board is empty it is very difficult to identify the best possible move. Take a look at this board.</p>
<p>Which is the best possible possible move?</p>
<p>When the board becomes populated, the best possible move pops out to our eyes.</p>
<p>Let’s use this populated board as our starting point. Lets decide that the next move is ours, and that our symbol is an “X”.</p>
<p>Let’s try to identify the best possible move with the tools we already have. There are 3 empty cells that correspond with 3 possible moves. Lets check the result for each of these options.</p>
<p>We can do this by iterating over the possible moves, and for each of them:</p>
<ul>
<li>Create a new board</li>
<li>Add our symbol to the corresponding empty cell</li>
<li>Send this board to the <code>getResult</code> function</li>
</ul>
<figcaption><strong>Move 1</strong></figcaption>
</figure>
<figcaption><strong>Move 2</strong></figcaption>
</figure>
<figcaption><strong>Move 3</strong></figcaption>
</figure>
<p>From the 3 boards in the figure above, when we send the second board to the <code>getResult </code>function, we will receive our trophy.</p>
<p>Please concentrate for the next essential steps:</p>
<ol>
<li>We need to grade the possible moves so we can compare them. Let’s decide that if a move yields a winning board we will grade it 1. If it yields a losing board it will receive the grade of -1. A tie will receive a grade of 0.</li>
<li>Move 2 will receive a grade of 1. When we find a move graded with 1 we can ignore all other possible moves. There is no other better possible move than a definite victory.</li>
<li>But for the sake of understanding, how would we grade moves 1 or 3, or any other move with an incomplete result?</li>
</ol>
<p>Let’s Focus on move 3. The solution is to send the corresponding board recursively to the <code>getBestMove</code> function.</p>
<p>You might be thinking, “But wait! Our opponent plays the next move.” That’s right. Let’s find out what grade our opponent gets for his best future move.</p>
<p>Our opponent has only two possible moves:</p>
<figcaption><strong>Move 3–1</strong></figcaption>
</figure>
<figcaption><strong>Move 3–2</strong></figcaption>
</figure>
<p>Move 3–1 will win the game in favor of our opponent. Since we are using the exact same <code>getBestMove</code> function, Move 3–1 will receive a grade of 1.</p>
<p>This might be a bit confusing as both our victory and our loss will receive grades of 1. We need to remember that this function call belongs to our opponent, and his victory is our loss and vice versa.</p>
<p>We must negate any grade returned to the <code>getBestMove</code> function by the <code>getBestMove</code> function.</p>
<p>Move 3–1 receives a grade of 1. The <code>getBestMove</code> function returns a grade of 1, and we can grade Move 3 with a -1.</p>
<p>In this manner, the <code>getBestMove</code> function continues to explore moves and consequent moves. This process will continue until:</p>
<ol>
<li>It finds a move graded with 1, in which case it will return the move immediately</li>
<li>It will continue until each possible move has a grade. The possible moves (with grades 0 and -1) are stored in an array</li>
<li>The array will then be: <br>[a] randomized <br>[b] sorted from high to low <br>[c] the first element will be returned</li>
</ol>
<p>These steps guarantee that:</p>
<ol>
<li>A losing move will be avoided unless it’s the only option</li>
<li>The computer player can play diversely</li>
</ol>
<h4 id="end-notes-">End Notes:</h4>
<ol>
<li>There are strong legitimate concerns over the <a href="https://en.wikipedia.org/wiki/Friendly_artificial_intelligence" rel="noopener">risks</a> Artificial Intelligence (AI) brings with it.<br>Lets use AI for the benefit of all. <br>The best possible AI software is that which can prevent us from misusing AI.</li>
<li>I consulted <a href="https://twitter.com/assafweinberg?lang=en" rel="noopener">Assaf Weinberg</a> in the process of writing the app</li>
</ol>
<p>See <a href="https://github.com/carpben/TicTacToe/blob/master/tictactoe.js" rel="noopener">my code</a> on GitHub.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
