---
card: "https://cdn-media-1.freecodecamp.org/images/1*brvN_0vi3hLWd3YQvvcJrw.jpeg"
tags: [Chess]
description: "Finishing up a three-part series on writing a rules engine wi"
author: "Milad E. Fahmy"
title: "Writing a chess microservice using Node.js and Seneca, Part 3"
created: "2021-08-16T11:50:35+02:00"
modified: "2021-08-16T11:50:35+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-chess tag-microservices tag-javascript tag-programming tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">Writing a chess microservice using Node.js and Seneca, Part 3</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*brvN_0vi3hLWd3YQvvcJrw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*brvN_0vi3hLWd3YQvvcJrw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*brvN_0vi3hLWd3YQvvcJrw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*brvN_0vi3hLWd3YQvvcJrw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*brvN_0vi3hLWd3YQvvcJrw.jpeg" alt="Writing a chess microservice using Node.js and Seneca, Part 3">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
if (!boardAndPiece.board) return candidateMoves;
const rangeChecks = {
B: vectorChecks,
R: vectorChecks,
K: vectorChecks,
Q: vectorChecks,
P: pawnChecks,
N: knightChecks
};
var rangeCheck = rangeChecks[boardAndPiece.piece.piece];
return rangeCheck(boardAndPiece, candidateMoves)
}
//...
function vectorChecks(boardAndPiece, candidateMoves) {
for (const [j, v] of candidateMoves.moveVectors.entries()) {
for (const [i, m] of v.entries()) {
const p = boardAndPiece.board.pieceAt(m);
if (p) {
if (p.color === boardAndPiece.piece.color) {
candidateMoves.moveVectors[j] = v.slice(0, i);
break;
} else {
candidateMoves.moveVectors[j] = v.slice(0, i + 1);
Object.assign(candidateMoves.moveVectors[j].slice(-1)[0], {
hasCaptured: p
})
break;
}
}
}
}
return {
moveVectors: candidateMoves.moveVectors,
moves: Array.prototype.concat(...candidateMoves.moveVectors)
}
}</code></pre><p>Much, much simpler…and more efficient. The wrapping function is exported and used by the <code>legalMoves</code> <a href="https://github.com/JeffML/ms-chess3/blob/master/services/Movement.js" rel="noopener">service</a>.</p><pre><code class="language-js">const legalMovesWithBoard = require("./helpers/legalMovesWithBoard")
//...
this.add('role:movement,cmd:legalMoves', function (msg, reply) {
this.prior(msg, function (err, result) {
if (msg.board) {
const result2 = legalMovesWithBoard(msg, result);
const newMoves = [];
for (const m of candidateMoves.moves) {
const p = boardAndPiece.board.pieceAt(m)
if (!p) {
newMoves.push(m)
} else if (p.color !== boardAndPiece.piece.color) {
m.hasCaptured = p;
newMoves.push(m)
}
}
return {
moves: newMoves,
moveVectors: [newMoves]
};
this.prior(msg, function (err, result) {
if (msg.board) {
const result2 = legalMovesWithBoard(msg, result);
if (msg.piece.piece === 'K') {
legalMovesWithKing.call(this, msg, result2, reply)
} else {
reply(err, result2);
}
} else {
reply(err, result);
}
});
});</code></pre><p>For every piece but the King, we simply call the base service (via the Seneca framework’s <code>prior()</code> method) followed by the helper method <code>legalMovesWithBoard()</code>, parts of which were listed in the previous gists of this post.</p><p>If the piece is a King, the additional helper method <code>legalMovesWithKing()</code> is called. The calling parameters are the <code>this</code> reference, a <code>msg</code> object containing board and the piece being moved (the King), the <code>result2 </code>which was came from the base <code>legalMoves</code><strong> </strong>service call (this contains movement info), and the <code>reply</code> callback.</p><p>There’s a bit of code to slog through, so I will refer to sections by line number:</p><pre><code class="language-js">module.exports = function (boardAndPiece, candidateMoves, reply) {
const opposingColor = boardAndPiece.piece.color === 'W' ? 'black' : 'white';
//temporarily remove the K to avoid cycles
boardAndPiece.board.removePiece(boardAndPiece.piece);
function canCastle(king, rook, intervening, opposing) {
// console.log("canCastle", arguments)
const opposingControlled = [...opposing.controlled]
const board = boardAndPiece.board;
const canCastle = !candidateMoves.inCheck &amp;&amp;
!king.hasMoved &amp;&amp;
rook &amp;&amp;
rook.color === king.color &amp;&amp;
!rook.hasMoved;
if (!canCastle) return false;
const pieceInTheWay = !!intervening.find(sq =&gt; board.pieceAt(sq));
if (pieceInTheWay) return false;
const passThruCheck = !!intervening.find(sq =&gt;
opposingControlled.find(opp =&gt; (opp.rank === sq.rank &amp;&amp; opp.file == sq.file))
)
if (passThruCheck) return false;
return true;
}
this.use(require('../SquareControl'))
this.act({
role: "board",
cmd: "squaresControlledBy",
board: boardAndPiece.board,
color: opposingColor,
}, (err, opposing) =&gt; {
if (err) {
reply(err);
return;
}
const king = boardAndPiece.piece;
// console.log(opposing.controlled)
// add the removed K back in
boardAndPiece.board.addPiece(king);
const filteredMoves = candidateMoves.moves.filter(m =&gt;
!!!opposing.controlled.find(o =&gt; o.rank === m.rank &amp;&amp; o.file === m.file)
)
const kingSq = king.position;
const inCheck = !!opposing.controlled.find(o =&gt; o.rank === kingSq.rank &amp;&amp; o.file === kingSq.file)
const additional = {}
additional.inCheck = inCheck;
additional.checkMated = (inCheck &amp;&amp; filteredMoves.length === 0)
const rank = additional.color === 'W' ? 1 : 8;
let rook = boardAndPiece.board.pieceAt(`a${rank}`);
let intervening = [`b${rank}`, `c${rank}`, `d${rank}`]
additional.canQSideCastle = canCastle(king, rook, intervening, opposing)
rook = boardAndPiece.board.pieceAt(`h${rank}`);
intervening = [`f${rank}`, `g${rank}`]
additional.canKSideCastle = canCastle(king, rook, intervening, opposing)
candidateMoves.moves = filteredMoves;
delete candidateMoves.moveVectors; // no longer valid, and no longer needed
Object.assign(candidateMoves, additional);
console.log(candidateMoves)
reply(null, candidateMoves)
});
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
