---
card: "https://cdn-media-1.freecodecamp.org/images/0*sTtAxozPICvu9A05.jpg"
tags: [Gambling]
description: "by Marcin Moskala"
author: "Milad E. Fahmy"
created: "2021-08-15T23:47:48+02:00"
modified: "2021-08-15T23:47:48+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-gambling tag-kotlin tag-programming tag-coding tag-tech ">
<header class="post-full-header">
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*sTtAxozPICvu9A05.jpg 300w,
https://cdn-media-1.freecodecamp.org/images/0*sTtAxozPICvu9A05.jpg 600w,
https://cdn-media-1.freecodecamp.org/images/0*sTtAxozPICvu9A05.jpg 1000w,
https://cdn-media-1.freecodecamp.org/images/0*sTtAxozPICvu9A05.jpg 2000w">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
in 2..6 -&gt; 1
10, 11 -&gt; -1
else -&gt; 0
</code></pre><h4 id="betting-strategy">Betting Strategy</h4><p>The player always has to decide before the game how much money they bet. Based on <a href="http://www.instructables.com/id/Card-Counting-and-Ranging-Bet-Sizes/" rel="noopener">this article</a>, I decided to use the rule where the player calculates their betting unit — which is equal to 1/1000 of their money left. Then they calculate the bet as a betting unit times the true count minus 1. I also found out that the bet needs to be between 25 and 1000.</p><p>Here is the function:</p><pre><code class="language-kotlin">fun getBetSize(trueCount: Int, bankroll: Double): Double {
val bettingUnit = bankroll / 1000
return (bettingUnit * (trueCount - 1)).coerceIn(25.0, 1000.0)
companion object {
while (hand.unusedAces &gt;= 1 &amp;&amp; hand.points &gt; 21) {
}
return hand
}
}
}</code></pre><p>Possible decisions are represented as an enumeration (<a href="https://en.wikipedia.org/wiki/Enumerated_type" rel="noopener">enum</a>):</p><pre><code class="language-kotlin">enum class Decision { STAND, DOUBLE, HIT, SPLIT, SURRENDER }
hand.unusedAces &gt;= 1 &amp;&amp; hand.points &gt;= 19 -&gt; STAND
hand.unusedAces &gt;= 1 &amp;&amp; hand.points == 18 &amp;&amp; casinoCard &lt; 9 -&gt; STAND
hand.points &gt; 16 -&gt; STAND
hand.points &gt; 12 &amp;&amp; casinoCard &lt; 4 -&gt; STAND
hand.points &gt; 11 &amp;&amp; casinoCard in 4..6 -&gt; STAND
hand.unusedAces &gt;= 1 &amp;&amp; casinoCard in 2..6 &amp;&amp; hand.points &gt;= 18 -&gt; if (firstTurn) DOUBLE else STAND
hand.unusedAces &gt;= 1 &amp;&amp; casinoCard == 3 &amp;&amp; hand.points &gt;= 17 -&gt; if (firstTurn) DOUBLE else HIT
hand.unusedAces &gt;= 1 &amp;&amp; casinoCard == 4 &amp;&amp; hand.points &gt;= 15 -&gt; if (firstTurn) DOUBLE else HIT
hand.unusedAces &gt;= 1 &amp;&amp; casinoCard in 5..6 -&gt; if (firstTurn) DOUBLE else HIT
hand.points == 11 -&gt; if (firstTurn) DOUBLE else HIT
hand.points == 10 &amp;&amp; casinoCard &lt; 10 -&gt; if (firstTurn) DOUBLE else HIT
hand.points == 9 &amp;&amp; casinoCard in 3..6 -&gt; if (firstTurn) DOUBLE else HIT
else -&gt; HIT
</code></pre><p>We will need <code>pop</code> functions for it:</p><pre><code class="language-kotlin">fun &lt;T&gt; MutableList&lt;T&gt;.pop(): T = removeAt(lastIndex)
when (decide(playerHand, casinoCard, firstTurn)) {
STAND -&gt; listOf(bet to playerHand)
val newHand = Hand.fromCards(newCards)
playFrom(newHand, bet, false)
}
SURRENDER -&gt; emptyList()
}</code></pre><p>If we don’t split, the returned value is always a single bet and a final hand.</p><p>If we split, the list of two bets and hands will be returned. If we fold, then an empty list is returned.</p><p>This is how we should start this function:</p><pre><code class="language-kotlin">val betsAndHands = playFrom(
firstTurn = true
while (casinoHand.points &lt; 17) {
}</code></pre><p>Then we need to compare our results.</p><p>We need to do it for every hand separately:</p><pre><code class="language-kotlin">for ((bet, playerHand) in betsAndHands) {
when {
playerHand.blackjack -&gt; bankroll += bet * if (casinoHand.blackjack) 1.0 else 1.5
playerHand.points &gt; 21 -&gt; bankroll -= bet
casinoHand.points &gt; 21 -&gt; bankroll += bet
casinoHand.points &gt; playerHand.points -&gt; bankroll -= bet
casinoHand.points &lt; playerHand.points -&gt; bankroll += bet
else -&gt; bankroll -= bet
}
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
