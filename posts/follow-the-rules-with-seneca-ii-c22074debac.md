---
card: "https://cdn-media-1.freecodecamp.org/images/1*kKyKqEjIfVK--SJT2-SoXQ.jpeg"
tags: [JavaScript]
description: Part 1 of this series talked about defining and calling micro
author: "Milad E. Fahmy"
title: "Writing a chess microservice using Node.js and Seneca, Part 2"
created: "2021-08-15T19:51:39+02:00"
modified: "2021-08-15T19:51:39+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-chess tag-tech tag-microservices tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Writing a chess microservice using Node.js and Seneca, Part 2</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*kKyKqEjIfVK--SJT2-SoXQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*kKyKqEjIfVK--SJT2-SoXQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*kKyKqEjIfVK--SJT2-SoXQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*kKyKqEjIfVK--SJT2-SoXQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*kKyKqEjIfVK--SJT2-SoXQ.jpeg" alt="Writing a chess microservice using Node.js and Seneca, Part 2">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h4 id="handling-new-requirements-without-refactoring">Handling new requirements without refactoring</h4>
<p><a href="https://medium.freecodecamp.com/follow-the-rules-with-seneca-b3cf3d08fe5d" rel="noopener">Part 1</a> of this series talked about defining and calling microservices using Seneca. A handful of services were created to return all legal moves of a lone chess piece on a chessboard. The series continues in <a href="https://medium.com/@jefflowery/writing-a-chess-microservice-using-node-js-and-seneca-part-3-ab38b8ef9b0a" rel="noopener">Part 3</a>.</p>
<h4 id="a-quick-review-">A quick review:</h4>
<ul>
<li>Seneca services are identified by a pattern consisting of <code>role</code> and <code>cmd</code> properties. Additional properties can be added to the pattern as well.</li>
</ul><pre><code class="language-js">this.add({
role: "movement",
cmd: "legalMoves"   //, otherProp: value, ...
}, (msg, reply) =&gt; {...}</code></pre>
<ul>
<li>Services also have an implementation that takes a <code>msg </code>object and a reply callback. The<code>msg </code>object contains the pattern properties in addition to all other data sent to the service.</li>
<li><code>Seneca.act()</code>is used to indirectly invoke a service. The <code>act</code> method takes an object and a callback function. The object contains the <code>role</code>, <code>cmd</code>, and other properties that comprise the message to the service.</li>
</ul><pre><code class="language-js">seneca.act({
role: "movement",
cmd: "legalMoves",
piece: p,
board: board
}, (err, msg) =&gt; {</code></pre>
<ul>
<li>When an action could be handled by more than one service that matches the pattern, the service with the <a href="http://senecajs.org/getting-started/#how-patterns-work" rel="noopener">most specific pattern match</a> will be invoked.</li>
</ul>
<p>There were a handful of services defined in the <a href="https://medium.freecodecamp.com/follow-the-rules-with-seneca-b3cf3d08fe5d" rel="noopener">first part</a> of this series. One of three<code>rawMoves</code> services took a piece and its position as parameters and returned 15 x 15 movement mask. These were truncated to an 8 x 8 board using a<code>legalSquares</code> service. The result was that the services together can return all the legal moves of any piece on any legal square of the otherwise empty chessboard.</p>
<h3 id="microservices-and-technical-debt">Microservices and Technical Debt</h3>
<p>One of the motivations for microservices is to <a href="http://www.infoworld.com/article/2878659/application-development/reducing-technical-debt-with-microservices.html" rel="noopener">reduce technical debt</a>. Every project has deadlines and, as they loom larger, expediency often trumps quality. FIXME and TODO comments litter the source code after a while. Those comments identify technical debt that “someday” will be taken care of.</p>
<h4 id="someday-never-comes">Someday never comes</h4>
<p>Microservices focus on functional decomposition and loose coupling. Neither of those are new ideas, but it is a rethinking about how to implement those concepts. A microservice should be small, single-purposed, and extensible. Extending a service can happen with few or no side-effects. A new service can extend an existing service, and neither the old service nor the client that once called it will know the service implementation changed. Less refactoring of classes, methods, method signatures, process flow… all this makes it easier to deal with dreaded TD.</p>
<h3 id="back-to-the-game-in-progress-">Back to the game in progress…</h3>
<p>Moving a single chess piece around a lonely board is not really all that entertaining. In a real chess game the chessboard is shared with friendly and hostile pieces, and these impact each other’s movement.</p>
<p>Right now I have a<code>legalSquares</code> service which can be the basis of a more complete<code>legalMoves</code>service. If you recall, the <code>legalSquares </code>service would invoke a <code>rawMoves</code>service, then remove all the ‘bad’ squares that didn’t belong on a chessboard.</p>
<p>The new <code>legalMoves </code>service will take into account other pieces, something that <code>legalSquares</code> didn’t. This requires an extra parameter, one called <code>board</code>. The <code>board </code>is just going to be an array of <strong>ChessPiece</strong> instances, and will assume that the pieces on the board have already been checked for validity. For instance, two pieces don’t occupy the same square, pawns aren’t on the first rank, kings aren’t be next to each other, and so forth.</p>
<p>The following pattern will identify the service:</p><pre><code class="language-js">'role: movement;cmd: legalMoves'</code></pre>
<p>This pattern is a stringified version of JSON called <strong>jsonic</strong>; you can use a regular JSON object if you prefer. The message to the service will contain the pattern. It will also contain a ChessPiece instance that has a piece type such as ‘K’ing, ‘Q’ueen, ‘R’ook and board position (see algebraic notation). Later I’ll add to this class a piece color (White or Black) so that the service can tell friend from foe. But for now the service will assume all pieces are friendly.</p>
<p>Since a friendly piece cannot be captured, it will restrict movement of other friendly pieces. Determining those restrictions is a bit of work. I made it harder for myself in the implementation of the <code>rawMoves</code> service… which brings me to:</p>
<h3 id="microservices-are-not-a-panacea">Microservices are not a Panacea</h3>
<p>If you design a service that retrieves or calculates information and <strong>doesn’t </strong>pass that data on up the chain, some service upstream may have to redo that work later. In my example, <code>rawMoves </code>returned an array of move objects (file and rank positions on the board). Let’s take the method that generates diagonal moves for a piece using the <code>rawMoves</code> service:</p><pre><code class="language-js">module.exports = function diagonal(position, range = 7) {
var moves = [];
const cFile = position.file.charCodeAt()
const cRank = position.rank.charCodeAt();
for (var i = 1; i &lt; range + 1; i++) {
moves.push({
file: String.fromCharCode(cFile - i),
rank: String.fromCharCode(cRank - i)
});
moves.push({
file: String.fromCharCode(cFile + i),
rank: String.fromCharCode(cRank + i)
});
moves.push({
file: String.fromCharCode(cFile - i),
rank: String.fromCharCode(cRank + i)
});
moves.push({
file: String.fromCharCode(cFile + i),
rank: String.fromCharCode(cRank - i)
});
}
return moves;
}</code></pre>
<p>At first glance, there’s nothing wrong with this. But, those four<code>move.push</code> operations actually operate along <strong>movement vectors</strong>.<strong><em> </em></strong>I could have constructed four movement vectors, then returned a list of moves by concatenating them, like so:</p><pre><code class="language-js">function diagonalMoves(position, range) {
var vectors = [[], [], [], []];
const cFile = position.file.charCodeAt()
const cRank = position.rank.charCodeAt();
for (var i = 1; i &lt; range + 1; i++) {
vectors[0].push({
file: String.fromCharCode(cFile - i),
rank: String.fromCharCode(cRank - i)
});
vectors[1].push({
file: String.fromCharCode(cFile + i),
rank: String.fromCharCode(cRank + i)
});
vectors[2].push({
file: String.fromCharCode(cFile - i),
rank: String.fromCharCode(cRank + i)
});
vectors[3].push({
file: String.fromCharCode(cFile + i),
rank: String.fromCharCode(cRank - i)
});
}
const moves = Array.prototype.concat(...vectors)
return moves;
}</code></pre>
<p>As it stood, there was no point in doing this. But later on those vectors would have come in handy for truncating movements along diagonals (or ranks or files) when a friendly piece is in the way. Instead, I had to decompose the move list along vectors in services upstream — more work and inefficiency which you will see later.</p>
<p>The real flaw, though, was that I returned an array, rather than a data object. Data objects have properties that are extendable, not so arrays. As a consequence, all my upstream services depend on receiving a movement array,<strong> </strong>and<strong> only</strong> a movement array. No flexibility. I can’t now add a list of movement vectors<strong> in addition</strong><em> </em>to a move list. But I could if I had returned an object from this method and the service that called it instead.</p>
<p>Lesson learned? Consider returning data objects from your services. Have your upstream services work on parts of the data, but pass all data they receive back upstream. Exceptions to this rule will abound, of course.</p>
<h3 id="with-friends-like-these-">With Friends like These…</h3>
<p>In Part 1, there was a service under the pattern:</p>
<p><code>role:"movement",cmd:"legalSquares"</code></p>
<p>It returned all moves of an unimpeded piece. Since this will be the base service for determining legal moves on a populated chessboard, I’ll rename the <code>cmd</code>to <code>legalMoves</code>. Now I want to extend that to take into account friendly pieces that might be blocking a path of my chosen piece.</p>
<h4 id="the-extended-service">The extended service</h4>
<p>The service that extends <code>role:"movement",cmd:"legalMoves"</code> is… <code>role:"movement",cmd:"legalMoves"</code> !</p>
<p>Yep, it has the same service pattern as the service it calls. You may recall that services are identified by pattern, and so how it this going to work? When the program acts on <code>role:"movement",cmd:"legalMoves"</code>, it will use the most recently defined service. But the new service has to call the former<code>legalMoves</code> service. That can be solved easily:</p><pre><code class="language-js">this.add({
role: "movement",
cmd: "legalMoves"
}, (msg, reply) =&gt; {//returns unimpeded moves}
this.add('role:movement,cmd:legalMoves', function (msg, reply) {
this.
prior(msg, function (err, moves) {
if (msg.board) {
const boardMoves = legalMovesWithBoard(msg, moves);
reply(err, boardMoves);
return;
}
reply(err, moves);
});
});</code></pre>
<p>This new service is able to call the former service by using the <code>prior()</code> method in Seneca. If no <code>board</code> parameter is supplied in the incoming <code>msg </code>object, then this service will just act as a pass-thru to the former service. But what if there is a board?</p>
<p>I’m not going to show a complete code listing here (see link below), but the gist of it is:</p><pre><code class="language-js">module.exports = function (msg, moves) {
if (!msg.board) return moves;
const blockers = moves.filter(m =&gt; {
return (msg.board.pieceAt(m))
})
var newMoves = [];
const pp = msg.piece.position;
const rangeChecks = {
B: diagonalChecks,
R: rankAndFileChecks,
K: panopticonChecks,
Q: panopticonChecks,
P: pawnChecks,
N: knightChecks
};
var rangeCheck = rangeChecks[msg.piece.piece];
// console.error(msg.piece.piece, rangeCheck.name)
newMoves = moves.filter(m =&gt; {
return rangeCheck(m, blockers, pp);
})
return newMoves;
}</code></pre>
<p>Remember our old friend <code>diagonalMoves</code> from the <code>rawMoves</code> service? In order to do a range check on diagonals without handy vectors, the new <code>legalMoves </code>service calls this:</p>
// blockers: blocking pieces
// pp: current piece position
function diagonalChecks(m, blockers, pp) {
let isGood = true;
for (const b of blockers) {
if (b.rank &gt; pp.rank &amp;&amp; b.file &gt; pp.file) {
if (m.rank &gt; pp.rank &amp;&amp; m.file &gt; pp.file) {
isGood = isGood &amp;&amp; (m.rank &lt; b.rank &amp;&amp; m.file &lt; b.file);
}
}
if (b.rank &gt; pp.rank &amp;&amp; b.file &lt; pp.file) {
if (m.rank &gt; pp.rank &amp;&amp; m.file &lt; pp.file) {
isGood = isGood &amp;&amp; (m.rank &lt; b.rank &amp;&amp; m.file &gt; b.file)
}
}
if (b.rank &lt; pp.rank &amp;&amp; b.file &gt; pp.file) {
if (m.rank &lt; pp.rank &amp;&amp; m.file &gt; pp.file) {
isGood = isGood &amp;&amp; (m.rank &gt; b.rank &amp;&amp; m.file &lt; b.file)
}
}
if (b.rank &lt; pp.rank &amp;&amp; b.file &lt; pp.file) {
if (m.rank &lt; pp.rank &amp;&amp; m.file &lt; pp.file) {
isGood = isGood &amp;&amp; (m.rank &gt; b.rank &amp;&amp; m.file &gt; b.file)
}
}
}
return isGood;
}</code></pre>
<figcaption>diagonalMoves.js</figcaption>
</figure>
<p>Ugly, no? I’d be happy if some algorithmically-inclined reader reduced this to two lines in the comments section. Three, even.</p>
<p>So that takes care of friendly pieces. The next installment will deal with hostile pieces, which can be captured.</p>
<p>Full source code for this article can be found at <a href="https://github.com/JeffML/ms-chess2" rel="noopener">GitHub</a>.</p>
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
