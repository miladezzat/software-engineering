---
card: "https://cdn-media-1.freecodecamp.org/images/1*g1pmPaZgQ3vJAQe_Nh6Ejw.jpeg"
tags: [AWS]
description: "From now on, my tweets are ephemeral. Here’s why I’m deleting"
author: "Milad E. Fahmy"
title: "Why I’m automatically deleting all my old tweets, and the AWS Lambda function I use to do this"
created: "2021-08-16T14:40:06+02:00"
modified: "2021-08-16T14:40:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-aws tag-tech tag-life-lessons tag-self-improvement tag-social-media ">
<header class="post-full-header">
<h1 class="post-full-title">Why I’m automatically deleting all my old tweets, and the AWS Lambda function I use to do this</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*g1pmPaZgQ3vJAQe_Nh6Ejw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*g1pmPaZgQ3vJAQe_Nh6Ejw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*g1pmPaZgQ3vJAQe_Nh6Ejw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*g1pmPaZgQ3vJAQe_Nh6Ejw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*g1pmPaZgQ3vJAQe_Nh6Ejw.jpeg" alt="Why I’m automatically deleting all my old tweets, and the AWS Lambda function I use to do this">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>From now on, my tweets are ephemeral. Here’s why I’m deleting all my old tweets, and the AWS Lambda function I’m using to do all this for free.</p><h3 id="stuff-and-opinions">Stuff and opinions</h3><p>I’ve only been a <a href="https://heronebag.com" rel="noopener">one-bag nomad</a> for a little over a year and a half. Before that, I lived as most people do in an apartment or a house. I owned furniture, more clothing than I strictly needed, and enough “stuff” to fill at least a few moving boxes. If I went to live somewhere else, moving for school or family or work, I packed up all my things and brought them with me. Over the years, I accumulated more and more stuff.</p><p>Adopting what many would call a minimalist lifestyle has rapidly changed a lot of my longstanding views. Giving away all my stuff (an idea I once thought to be interesting in principle but practically a little bit ridiculous) has become normal. It’s normal for me, now, to not own things that I don’t use on a regular basis. I don’t keep wall shelves packed with old books or dishes or clothing or childhood toys because those items aren’t relevant to me anymore. I just keep fond memories, instead.</p><p>Imagine, for a moment, that I still lived in a house. Imagine that in that house, on the fridge, is a drawing I made when I was six-years-old. In the bottom right corner of that drawing scribbled in green crayon are the words “broccoli is dumb — Victoria, Age 6.”</p><p>If you were in my house and saw that drawing on the fridge, would you assume that the statement “broccoli is dumb” comprised an accurate and current account of my opinions on broccoli? Of course not. I was six when I wrote that. I’ve had plenty of time to change my mind.</p><h3 id="social-media-isn-t-social">Social media isn’t social</h3><p>I have a friend whom I’ve known since we were both in kindergarten. We went through grade school together, then spoke to and saw each other on infrequent occasions across the years. We’re both adults now. Sometimes when we chat, we’ll recall some amusing memory from when we were younger. The nature of memory being what it is, I have no illusion that what we recall is recounted with much accuracy. Our impressions of things that happened — mistakes we made and moments of victory alike — are coloured by the experiences we’ve had since then, and all the things we’ve learned. An awkward moment at a school colleague’s birthday party becomes an example of a child learning to socialize, instead of the world-ending moment of embarrassment it probably felt like at the time.</p><p>This is how memory works. In a sense, it gets updated, as well it should. People living in small communities remember things that their neighbour did many years ago, but recall them in the context of who their neighbour is now, and what their current relationship is like. This re-colouring of history is an important part of how people <a href="https://www.smithsonianmag.com/science-nature/how-our-brains-make-memories-14466850/" rel="noopener">heal</a>, <a href="http://news.feinberg.northwestern.edu/2014/02/memory_rewrite/" rel="noopener">make good decisions</a>, and <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3709095/" rel="noopener">socialize</a>.</p><p>Social media does not do this. Your perfectly preserved tweet from five days or five years ago can be recalled with absolute accuracy. For most people, this is not particularly worrying. We tend to tweet about pretty mundane things — things that pop into mind when we’re bored and want someone to notice us. Individually, usually, our old tweets are pretty insignificant. In aggregate, however, they paint a pretty complete picture of a person’s random, unintentionally telling thoughts. This is the problem.</p><p>The assumption made of things written in social media and on Twitter specifically is a very different assumption than you might make about someone’s notepad scribble from last week. I’m not endeavoring to speculate why — I’ve just seen enough cases of someone getting publicly flogged for something they posted years ago to know that it does happen. This is weird. If you wouldn’t assume that a notepad scribble from last week or a crayon drawing from decades ago reflects the essence of who someone is <em>now,</em> why would you assume that an old tweet does?</p><p>You are not the same person you were last month — you’ve seen things, read things, understood and learned things that have, in some small way, changed you. While a person may have the same sense of self and identity through most of their life, even this grows and changes over the years. We change our opinions, our desires, our habits. We are not stagnant beings, and we should not let ourselves be represented as such, however unintentionally.</p><h3 id="ephemeral-tweets">Ephemeral tweets</h3><p>If you look at my Twitter profile page today, you’ll see fewer tweets there than you have fingers (I hope). I’m using <a href="https://github.com/victoriadrake/ephemeral/">ephemeral</a> — a lightweight utility I wrote for use on <a href="https://aws.amazon.com/lambda/" rel="noopener">AWS Lambda</a> — to delete all my tweets older than a few days. I’m doing this for the same reason that I don’t hang on to stuff that I no longer use — that stuff isn’t relevant to me anymore. It doesn’t represent me, either.</p><p>The code that makes up ephemeral is written in Go. AWS Lambda creates an environment for each Lambda function, so ephemeral utilizes environment variables for your private Twitter API keys and the maximum age of the tweets you want to keep, represented in hours, like <code>72h</code>.</p><pre><code class="language-js">var (
consumerKey = getenv("TWITTER_CONSUMER_KEY")
consumerSecret    = getenv("TWITTER_CONSUMER_SECRET")
accessToken = getenv("TWITTER_ACCESS_TOKEN")
accessTokenSecret = getenv("TWITTER_ACCESS_TOKEN_SECRET")
maxTweetAge = getenv("MAX_TWEET_AGE")
logger      = log.New()
)
func getenv(name string) string {
v := os.Getenv(name)
if v == "" {
panic("missing required environment variable " + name)
}
return v
}</code></pre><p>The program uses the <a href="https://github.com/ChimeraCoder/anaconda" rel="noopener">anaconda</a> library. It fetches your timeline up to the Twitter API’s limit of 200 tweets per request, then compares each tweet’s date of creation to your <code>MAX_TWEET_AGE</code> variable to decide whether it’s old enough to be deleted. After deleting all the expired tweets, the Lambda function terminates.</p><pre><code>func deleteFromTimeline(api *anaconda.TwitterApi, ageLimit time.Duration) {
timeline, err := getTimeline(api)
if err != nil {
log.Error("Could not get timeline")
}
for _, t := range timeline {
createdTime, err := t.CreatedAtTime()
if err != nil {
log.Error("Couldn't parse time ", err)
} else {
if time.Since(createdTime) &gt; ageLimit {
_, err := api.DeleteTweet(t.Id, true)
log.Info("DELETED: Age - ", time.Since(createdTime).Round(1*time.Minute), " - ", t.Text)
if err != nil {
log.Error("Failed to delete! ", err)
}
}
}
}
log.Info("No more tweets to delete.")
}</code></pre><p>Read the full code <a href="https://github.com/victoriadrake/ephemeral/blob/master/main.go">here</a>.</p><p>For a use case like this, AWS Lambda has a free tier that costs nothing. If you’re any level of developer, it’s an extremely useful tool to become familiar with. For a full walkthrough with screenshots of how to set up a Lambda function that tweets for you, you can read <a href="https://victoria.dev/verbose/running-a-free-twitter-bot-on-aws-lambda/">this article</a>. The set up for ephemeral is the same, it just has an opposite function. :)</p><p>I forked ephemeral from Adam Drake’s <a href="https://github.com/adamdrake/harold" rel="noopener">Harold</a>, a Twitter tool that has many useful functions beyond keeping your timeline trimmed. If you have more than 200 tweets to delete at first pass, please use Harold to do that first. You can run Harold with the <code>deletetimeline</code> flag from your terminal.</p><p>You may want to first <a href="https://twitter.com/settings/your_twitter_data" rel="noopener">download all your tweets before deleting them</a> for sentimental value.</p><h3 id="why-use-twitter-at-all">Why use Twitter at all?</h3><p>In anticipation of the question, let me say that yes, I do use Twitter besides just as a bucket for my Lambda functions to fill and empty. It has its benefits, most related to what I perceive to be its original intended purpose: to be a means of near-instant communication for short, digestible pieces of information reaching a widespread pool of people.</p><p>I use it as a way to keep tabs on what’s happening <em>right now.</em> I use it to comment on, joke about, and commiserate with things tweeted by the people I follow <em>right now.</em> By keeping my timeline restricted to only the most recent few days, I feel like I’m using Twitter more like it was meant to be used: a way to join the conversation and see what’s happening in the world <em>right now</em> — instead of just another place to amass more “stuff.”</p><p>Thanks for reading! If you’d like to hear more about how I make my life better with tech, you can follow me here as well as check out my blog where I explain coding with more poorly-drawn doodles of food: <a href="https://victoria.dev">Victoria.dev</a></p><p>I hope you have a really great day! :)</p>
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
