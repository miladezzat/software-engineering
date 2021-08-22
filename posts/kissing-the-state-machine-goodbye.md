---
card: "/images/default.jpg"
tags: [Event Sourcing]
description: "Recently, I have written about simplifying an event sourced a"
author: "Milad E. Fahmy"
title: "Kissing the state machine goodbye"
created: "2021-08-15T23:43:45+02:00"
modified: "2021-08-15T23:43:45+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-event-sourcing tag-finite-state-machine tag-statecharts tag-coding tag-java ">
<header class="post-full-header">
<h1 class="post-full-title">Kissing the state machine goodbye</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/06/Kissing.png 300w,
/news/content/images/size/w600/2019/06/Kissing.png 600w,
/news/content/images/size/w1000/2019/06/Kissing.png 1000w,
/news/content/images/size/w2000/2019/06/Kissing.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/06/Kissing.png" alt="Kissing the state machine goodbye">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
public void withdrawWithoutLimitAssignedThrowsIllegalStateException() {
.useCase(useCreditCard)
.basicFlow()
.step(assigningLimit).user(requestsToAssignLimit).systemPublish(assignedLimit)
.step(withdrawingCard).user(requestsWithdrawingCard).systemPublish(withdrawnCard).reactWhile(accountIsOpen)
.step(repaying).user(requestsRepay).systemPublish(repay).reactWhile(accountIsOpen)
.flow("Withdraw again").after(repaying)
.step(withdrawingCardAgain).user(requestsWithdrawingCard).systemPublish(withdrawnCard)
.step(repeating).continuesAt(withdrawingCard)
.flow("Cycle is over").anytime()
.step(closingCycle).on(requestToCloseCycle).systemPublish(closedCycle)
.flow("Limit can only be assigned once").condition(limitAlreadyAssigned)
.step(assigningLimitTwice).user(requestsToAssignLimit).system(throwsAssignLimitException)
.flow("Too many withdrawals").condition(tooManyWithdrawalsInCycle)
.step(withdrawingCardTooOften).user(requestsWithdrawingCard).system(throwsTooManyWithdrawalsException)
.build();
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
