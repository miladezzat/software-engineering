---
card: "https://cdn-media-1.freecodecamp.org/images/1*QVKnJrXn5COBq3KjJ1OJvQ.jpeg"
tags: [Nodejs]
description: (This is Part 1 of a three-part series [Part 2, Part 3])
author: "Milad E. Fahmy"
title: "Writing a chess microservice using Node.js and Seneca, Part 1"
created: "2021-08-15T19:52:01+02:00"
modified: "2021-08-15T19:52:01+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nodejs tag-javascript tag-seneca tag-microservices tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Writing a chess microservice using Node.js and Seneca, Part 1</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*QVKnJrXn5COBq3KjJ1OJvQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*QVKnJrXn5COBq3KjJ1OJvQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*QVKnJrXn5COBq3KjJ1OJvQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*QVKnJrXn5COBq3KjJ1OJvQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*QVKnJrXn5COBq3KjJ1OJvQ.jpeg" alt="Writing a chess microservice using Node.js and Seneca, Part 1">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>(This is Part 1 of a three-part series [<a href="https://medium.com/@jefflowery/follow-the-rules-with-seneca-ii-c22074debac" rel="noopener">Part 2</a>,<a href="https://medium.com/@jefflowery/writing-a-chess-microservice-using-node-js-and-seneca-part-3-ab38b8ef9b0a" rel="noopener"> Part 3</a>])</p>
<p>I’ve begun wrapping my head around microservices. Up to this time I regarded it as a scalability pattern and overlooked the functional programming principles behind it.</p>
<p>The <a href="https://www.chess.com/learn-how-to-play-chess" rel="noopener">rules of chess</a> can be decomposed easily into microservices. They are neither random nor ambiguous, which is perfect for writing small, stateless services that deal with movements of various pieces.</p>
<p>In this post, I’ll walk through several services I created that determine what the legal moves are for lone pieces on an empty chessboard. We’ll use the <a href="http://senecajs.org/" rel="noopener">Seneca framework</a>, a microservices toolkit for Node.js, because it’s intuitive and well documented.</p>
<h3 id="setting-up-seneca">Setting up Seneca</h3>
<p><a href="http://senecajs.org/getting-started/" rel="noopener">Seneca </a>is a Node.js module that is installed using npm:</p>
<p><code>npm install seneca</code></p>
<p>Also, we’ll rely on globally installed <a href="http://chaijs.com/api/bdd/" rel="noopener">mocha/chai</a> modules for the tests that will illustrate functionality.</p>
<h3 id="find-all-the-legal-moves">Find all the legal moves</h3>
<p>It’s actually not necessary to maintain an in-memory representation of a chessboard, just the pieces and their location on an 8x8 coordinate grid. <a href="https://en.wikipedia.org/wiki/Algebraic_notation_(chess)" rel="noopener">Algebraic notation</a> is commonly used to describe the coordinates on a chessboard, where the files are denoted by letters and the ranks by numbers:</p>
<figcaption>View from White side of board</figcaption>
</figure>
<p>For the player who is White, the rightmost bottom corner is h1; for Black it is a8. A rook on b2, moving to square f2, would be denoted as Rb2-f2.</p>
<h3 id="raw-moves">Raw Moves</h3>
<p>I am defining <strong>raw moves</strong> as the moves a piece would make if unimpeded by other pieces<em> or the edge of the board</em>. That last bit may seem odd, but it allows me to construct a 15x15 movement mask, which is then truncated to fit the 8x8 board. A fellow named <a href="https://en.wikipedia.org/wiki/Procrustes" rel="noopener">Procrustes </a>came up with a similar idea ages ago.</p>
<p>Kings, Queens, Bishops and Rooks move along diagonals and/or files, so I will use one service for the movements of those four pieces. Pawns have unique movement characteristics, so a special service will be used for them. The same goes for Knights, since they can jump over pieces and don’t move along files or ranks.</p>
<p>For example, a rook can move 7 squares along any rank or file on an 15x15 board in which the rook is centered. Similar rules apply to bishop and queen. The king is limited to a one-square range in any direction(the exception is castling, which I will deal with in a future post).</p>
<p>I will use a <code>ChessPiece</code> class to hold information about the type and location of each chess piece. It won’t play too important a role for now, but it will later when I expand the scope of the rules covered by the services.</p>
<h3 id="first-service-rook-bishop-queen-and-king-moves">First service: Rook, Bishop, Queen and King moves</h3>
<p>In Seneca, services are invoked via <code>role</code><strong> </strong>and <code>cmd</code>. The <code>role</code> is akin to a category, and <code>cmd</code> names a specific service. As we’ll see later, a service can be further specified by additional parameters.</p>
<p>Services are added using <code>seneca.add()</code>, and invoked via <code>seneca.act()</code>. Let’s look at the service, first (from Movement.js):</p><pre><code class="language-js"> this.add({
role: "movement",
cmd: "rawMoves",
}, (msg, reply) =&gt; {
var err = null;
var rawMoves = [];
var pos = msg.piece.position;
switch (msg.piece.piece) {
case 'R':
rawMoves = rankAndFile(pos);
break;
case 'B':
rawMoves = diagonal(pos);
break;
case 'Q':
rawMoves = rankAndFile(pos)
.concat(diagonal(pos));
break;
case 'K':
rawMoves = rankAndFile(pos, 1)
.concat(diagonal(pos, 1))
break;
default:
err = "unhandled " + msg.piece;
break;
};
reply(err, rawMoves);
});</code></pre>
<p>Now let’s see how the test invokes the service (movesTest.js):</p><pre><code class="language-js"> var Ba1 = new ChessPiece('Ba1');
seneca.act({
role: "movement",
cmd: "rawMoves",
piece: Ba1
}, (err, msg) =&gt; {...});</code></pre>
<p>Note that in addition to <code>role</code><strong> </strong>and <code>cmd</code>, there is a <code>piece</code><strong> </strong>argument. This, along with the <code>role</code> and <code>cmd</code>, are properties of the <code>msg</code><strong> </strong>argument received by the service. Before you can invoke the service, though, you must tell Seneca which services to use:</p><pre><code class="language-js">var movement = require(‘../services/Movement’)
const seneca = require('seneca')({
log: 'silent'
})
.use(movement);</code></pre>
<p>The raw moves for a bishop at square a1 are in the <code>msg</code><strong> </strong>received <em>back </em>from the service:</p>
<p>[ { file: ‘`’, rank: ‘0’ },<br> { file: ‘b’, rank: ‘2’ },<br> { file: ‘`’, rank: ‘2’ },<br> { file: ‘b’, rank: ‘0’ },<br> { file: ‘_’, rank: ‘/’ },<br> { file: ‘c’, rank: ‘3’ },<br> { file: ‘_’, rank: ‘3’ },<br> { file: ‘c’, rank: ‘/’ },<br> { file: ‘^’, rank: ‘.’ },<br> { file: ‘d’, rank: ‘4’ },<br> { file: ‘^’, rank: ‘4’ },<br> { file: ‘d’, rank: ‘.’ },<br> { file: ‘]’, rank: ‘-’ },<br> { file: ‘e’, rank: ‘5’ },<br> { file: ‘]’, rank: ‘5’ },<br> { file: ‘e’, rank: ‘-’ },<br> { file: ‘\\’, rank: ‘,’ },<br> { file: ‘f’, rank: ‘6’ },<br> { file: ‘\\’, rank: ‘6’ },<br> { file: ‘f’, rank: ‘,’ },<br> { file: ‘[‘, rank: ‘+’ },<br> { file: ‘g’, rank: ‘7’ },<br> { file: ‘[‘, rank: ‘7’ },<br> { file: ‘g’, rank: ‘+’ },<br> { file: ‘Z’, rank: ‘*’ },<br> { file: ‘h’, rank: ‘8’ },<br> { file: ‘Z’, rank: ‘8’ },<br> { file: ‘h’, rank: ‘*’ } ]</p>
<p>Note that there are some weird squares listed! These are the positions that “fall off” the 8x8 board and will be eliminated later by another service.</p>
<h4 id="what-just-happened">What just happened?</h4>
<p>A service was defined with <code>role=”movement”</code> and <code>cmd=”rawMoves”</code>. When <code>act()</code> is later invoked, the parameters of the act request are matched against a service that handles those parameters (this is called the service’s <strong>pattern</strong>). As mentioned previously and as will be shown in the next example, <code>role</code><em> </em>and <code>cmd</code><em> </em>are not necessarily the only parameters that determine the service invoked.</p>
<h3 id="next-services-pawns-and-knights"><strong>Next services: Pawns and Knights</strong></h3>
<p>Pawns move one square forward unless they are on their original square, in which case they can move one or two squares forward. There are other moves a pawn can make when it is not the lone piece on an empty board, but that’s for future consideration. Pawns alway start on the second rank, and can never move backwards.</p>
<p>Knights move in an L-shape pattern. In our imaginary 15x15 board with the knight centered, there will always be eight possible moves.</p>
<p>I’ll write two services (one for pawns, the other for knights) and place both in one module (SpecialMovements.js):</p><pre><code class="language-js">module.exports = function specialMovement(options) {
//...
this.add({
role: "movement",
cmd: "rawMoves",
isPawn: true
}, (msg, reply) =&gt; {
if (msg.piece.piece !== 'P') {
return ("piece was not a pawn")
}
var pos = msg.piece.position;
const rawMoves = pawnMoves(pos);
reply(null, rawMoves);
});
this.add({
role: "movement",
cmd: "rawMoves",
isKnight: true
}, (msg, reply) =&gt; {
if (msg.piece.piece !== 'N') {
return ("piece was not a knight")
}
var rawMoves = [];
var pos = msg.piece.position;
rawMoves = knightMoves(pos);
reply(null, rawMoves);
});
}</code></pre>
<p>See the <code>isPawn</code><strong> </strong>and <code>isKnight</code><strong> </strong>parameters in the services? The first object passed to Seneca <code>add()</code> is called the <strong>service pattern</strong>. What happens is that Seneca will invoke the service with the <em>most specific </em>pattern match. In order to invoke the right service, I need to add<strong> </strong><code>isPawn:true</code> or <code>isKnight:true</code> to the act request:</p><pre><code class="language-js">var movement = require('../services/Movement')
var specialMovement = require('../services/SpecialMovement')
const seneca = require('seneca')({
log: 'silent'
})
.use(specialMovement)
...
var p = new ChessPiece('Pe2');
seneca.act({
role: "movement",
cmd: "rawMoves",
piece: p,
...
isPawn: true
}, (err, msg) =&gt; {...}
...
var p = new ChessPiece('Nd4');
seneca.act({
role: "movement",
cmd: "rawMoves",
piece: p,
isKnight: true
}, (err, msg) =&gt; {</code></pre>
<h3 id="legal-moves">Legal Moves</h3>
<p>Our rudimentary legal move service will just filter out all the square positions that are not on files a-h or ranks 1–8. The legal move service will be called directly with a <code>ChessPiece</code> instance as part of the service payload. The legal move service will then invoke the raw move service to get the movement mask. The mask will be truncated to the edges of the board, and the result will be the square positions that can legally be played.</p><pre><code class="language-js">    this.add({
role: "movement",
cmd: "legalSquares",
}, (msg, reply) =&gt; {
const isPawn = msg.piece.piece === 'P';
const isKnight = msg.piece.piece === 'N';
this.act({
role: "movement",
cmd: "rawMoves",
piece: msg.piece,
isPawn: isPawn,
isKnight: isKnight
}, (err, msg) =&gt; {
const squared = [];
msg.forEach((move) =&gt; {
if (move.file &gt;= 'a' &amp;&amp; move.file &lt;= 'h') {
if (move.rank &gt;= 1 &amp;&amp; move.rank &lt;= 8) {
squared.push(move)
}
}
})
reply(null, squared);
});
})</code></pre>
<p>The <code>legalSquares</code><strong> </strong>service first invokes the <code>rawMoves</code><strong> </strong>service. This gets us the 15x15 movement mask for whatever piece is passed via the <code>msg</code> parameter. It is important, though, that the right service is invoked by setting the <code>isKnight</code><strong> </strong>or <code>isPawn</code><strong> </strong>pattern field to true for either of those two pieces… if both are false, then the “regular” <code>rawMoves</code><strong> </strong>service for K,Q,B,R will be invoked.</p>
<p>Once the raw moves are retrieved, then the <code>legalSquares</code><strong> </strong>service removes the invalid positions and returns what is left. So if I invoke the service with the piece at Na1, I get:</p><pre><code class="language-js">[ { file: ‘c’, rank: ‘2’ }, { file: ‘b’, rank: ‘3’ } ]</code></pre>
<p>If instead I pass in Rd4, legalSquares returns:<br>[ { file: ‘c’, rank: ‘4’ },<br> { file: ‘d’, rank: ‘5’ },<br> { file: ‘e’, rank: ‘4’ },<br> { file: ‘d’, rank: ‘3’ },<br> { file: ‘b’, rank: ‘4’ },<br> { file: ‘d’, rank: ‘6’ },<br> { file: ‘f’, rank: ‘4’ },<br> { file: ‘d’, rank: ‘2’ },<br> { file: ‘a’, rank: ‘4’ },<br> { file: ‘d’, rank: ‘7’ },<br> { file: ‘g’, rank: ‘4’ },<br> { file: ‘d’, rank: ‘1’ },<br> { file: ‘d’, rank: ‘8’ },<br> { file: ‘h’, rank: ‘4’ } ]</p>
<p>which is a little harder to decipher, but contains all files along the 4th rank and all ranks along the d-file (trust me!).</p>
<p>That’s it for now! In a future post I’ll go over services that deal with friendly pieces impeding movement, then dealing with the potential capture of hostile pieces. Further services will handle rules for castling, <em>en passant, </em>check, checkmate, and stalemate.</p>
<p>All source code can be found <a href="https://github.com/JeffML/ms-chess" rel="noopener">here</a>.</p>
<p>Continue to <a href="https://medium.com/@jefflowery/follow-the-rules-with-seneca-ii-c22074debac" rel="noopener">Part 2 of this series</a>.</p>
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
