---
card: "/images/default.jpg"
tags: [Event Sourcing]
description: "Every time you make a change to the application state, you re"
author: "Milad E. Fahmy"
title: "Simplifying an event sourced application"
created: "2021-08-15T23:43:47+02:00"
modified: "2021-08-15T23:43:47+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-event-sourcing tag-coding tag-java tag-events ">
<header class="post-full-header">
<h1 class="post-full-title">Simplifying an event sourced application</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/06/EventSourcing.jpg 300w,
/news/content/images/size/w600/2019/06/EventSourcing.jpg 600w,
/news/content/images/size/w1000/2019/06/EventSourcing.jpg 1000w,
/news/content/images/size/w2000/2019/06/EventSourcing.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/06/EventSourcing.jpg" alt="Simplifying an event sourced application">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
if(limitAlreadyAssigned()) {
throw new IllegalStateException();
}
this.initialLimit = amount;
}
</code></pre><p>Here's the <code>withdraw</code> method:</p><pre><code class="language-java">    public void withdraw(BigDecimal amount) {
if(notEnoughMoneyToWithdraw(amount)) {
throw new IllegalStateException();
}
if(tooManyWithdrawalsInCycle()) {
throw new IllegalStateException();
}
this.usedLimit = usedLimit.add(amount);
withdrawals++;
}
if(notEnoughMoneyToWithdraw(amount)) {
throw new IllegalStateException();
}
if(tooManyWithdrawalsInCycle()) {
throw new IllegalStateException();
}
}
this.usedLimit = usedLimit.add(event.getAmount());
withdrawals++;
pendingEvents.add(event);
return this;
}
return ofAll(events).foldLeft(new CreditCard(uuid), CreditCard::handle);
}
private CreditCard handle(DomainEvent event) {
return Match(event).of(
Case($(Predicates.instanceOf(LimitAssigned.class)), this::limitAssigned),
Case($(Predicates.instanceOf(CycleClosed.class)), this::cycleWasClosed)
);
}</code></pre><p>This code uses the <a href="http://www.vavr.io/">vavr.io</a> library to call the <code>handle</code> method for each event. The <code>handle</code> method dispatches the event object to the appropriate method. <br>For example: for each <code>LimitAssigned</code> event, the <code>handle</code> method calls the <code>limitAssigned</code> method with the event as parameter.</p><h2 id="simplifying-the-application">Simplifying the application</h2><p>I used the <a href="https://github.com/bertilmuth/requirementsascode">requirements as code</a> library for simplifying the code. First, I put all of the event classes and the handling methods in a model. Like this:</p><pre><code class="language-java">this.eventHandlingModel =
Model.builder()
.on(LimitAssigned.class).system(this::limitAssigned)
.on(CycleClosed.class).system(this::cycleWasClosed)
.build();
</code></pre><p>I had to change the return type of the handling methods (e.g. <code>limitAssigned</code>) to <code>void</code>. Apart from that, the conversion from <a href="http://www.vavr.io/">vavr.io</a> was straight forward.</p><p>Then, I created a runner and started it for the model:</p><pre><code class="language-java">this.modelRunner = new ModelRunner();
modelRunner.run(eventHandlingModel);
</code></pre><p>After that, I changed the <code>recreateFrom</code> and <code>handle</code> methods to this:</p><pre><code class="language-java">public static CreditCard recreateFrom(UUID uuid, List&lt;DomainEvent&gt; events) {
CreditCard creditCard = new CreditCard(uuid);
events.forEach(ev -&gt; creditCard.handle(ev));
return creditCard;
}
private void handle(DomainEvent event) {
modelRunner.reactTo(event);
}
</code></pre><p>At that point, I could get rid of the dependency to <a href="http://www.vavr.io/">vavr.io</a>. <br>Transition complete. Now I could get some more simplifying done.</p><p>I revisited the <code>withdraw</code> method:</p><pre><code class="language-java">public void withdraw(BigDecimal amount) {
if(notEnoughMoneyToWithdraw(amount)) {
throw new IllegalStateException();
}
if(tooManyWithdrawalsInCycle()) {
throw new IllegalStateException();
}
}
</code></pre><p>The check <code>tooManyWithdrawalsInCycle()</code> didn't depend on the data of the event. It only depended on the state of the <code>CreditCard</code>.<br>State checks like this can be represented in the model as <code>conditions</code>.</p><p>After I moved all state checks for all methods to the model, it looked like this:</p><pre><code class="language-java">this.eventHandlingModel =
Model.builder()
.condition(this::limitNotAssigned)
.on(LimitAssigned.class).system(this::limitAssigned)
.condition(this::limitAlreadyAssigned)
.on(LimitAssigned.class).system(this::throwsException)
.condition(this::notTooManyWithdrawalsInCycle)
.condition(this::tooManyWithdrawalsInCycle)
.on(CardWithdrawn.class).system(this::throwsException)
.on(CycleClosed.class).system(this::cycleWasClosed)
.build();
</code></pre><p>For this to work, I needed to replace the direct calls to methods that change the state with the <code>handle</code> method. After that, the <code>assignLimit</code> and <code>withdraw</code> methods looked like this:</p><pre><code class="language-java">public void assignLimit(BigDecimal amount) {
handle(new LimitAssigned(uuid, amount, Instant.now()));
}
private void limitAssigned(LimitAssigned event) {
this.initialLimit = event.getAmount();
pendingEvents.add(event);
}
public void withdraw(BigDecimal amount) {
if(notEnoughMoneyToWithdraw(amount)) {
throw new IllegalStateException();
}
handle(new CardWithdrawn(uuid, amount, Instant.now()));
}
this.usedLimit = usedLimit.add(event.getAmount());
withdrawals++;
pendingEvents.add(event);
}
</code></pre><p>As you can see, most of the conditional logic has moved out of the &nbsp;methods into the model. This makes the methods easier to understand.</p><p>One thing that bothered me is that you must not forget to add the &nbsp;event to the pending events. Every time. Or your code won't work.</p><p><a href="https://github.com/bertilmuth/requirementsascode">Requirements as code</a> allows you to control how the system handles the events. So I extracted <code>pendingEvents.add(event)</code> from the methods as well:</p><pre><code class="language-java">modelRunner.handleWith(this::addingPendingEvents);
...
public void addingPendingEvents(StepToBeRun stepToBeRun) {
stepToBeRun.run();
DomainEvent domainEvent = (DomainEvent) stepToBeRun.getEvent().get();
pendingEvents.add(domainEvent);
}
</code></pre><p>I could have gone further and extract the validation logic as well. <br>But I leave that as a thought exercise to you, dear reader.</p><h2 id="what-s-the-point">What's the point?</h2><p>What I tried to achieve is a clear separation of concerns:</p><ul><li>The state dependent execution of methods is defined in the model</li><li>The data validation and state changes are in the implementations of the methods</li><li>The events are automatically added to the pending events. In &nbsp;general: the infrastructure code is clearly separated from the business &nbsp;logic.</li></ul><p>Simplifying an example that is already very simple is good for explaining.<br>But that's not the point I want to make.</p><p>The point is: having such a clear separation of concerns pays out in practice. <br>Especially, if you work with multiple teams. On complicated problems.</p><p>Separation of concerns helps with changing different parts of code at &nbsp;a different pace. You have simple rules where to find something. The &nbsp;code is easier to understand. And it's easier to isolate units for &nbsp;testing purposes.</p><h2 id="conclusion">Conclusion</h2><p>I hope you enjoyed my article. Please give me feedback.</p><p>Have you been working on event sourcing applications? <br>What were your experiences like? <br>Can you relate to what I wrote in this article?</p><p>I also want to invite you to look at <a href="https://github.com/bertilmuth/requirementsascode">my library</a> that I used throughout the article. I would be thrilled if you try it out in practice, and tell me what you think.</p><p><em>This article was first published on <a href="https://dev.to/bertilmuth/simplifying-an-event-sourced-application-1klp">dev.to</a></em></p>
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
