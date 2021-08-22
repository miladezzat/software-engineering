---
card: "https://cdn-media-1.freecodecamp.org/images/1*UAE-xb9qHM4PuRbNc-eu3g.jpeg"
tags: [Mathematics]
description: I’ve been wanting to write about this topic for a while now.
author: "Milad E. Fahmy"
title: "How to tackle root finding in JavaScript"
created: "2021-08-15T19:40:37+02:00"
modified: "2021-08-15T19:40:37+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-mathematics tag-javascript tag-calculus tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to tackle root finding in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*UAE-xb9qHM4PuRbNc-eu3g.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*UAE-xb9qHM4PuRbNc-eu3g.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*UAE-xb9qHM4PuRbNc-eu3g.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*UAE-xb9qHM4PuRbNc-eu3g.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*UAE-xb9qHM4PuRbNc-eu3g.jpeg" alt="How to tackle root finding in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h3 id="introduction">Introduction</h3>
<p>I’ve been wanting to write about this topic for a while now. I recently had the opportunity to work on simulating the GoalSeek functionality of Excel for a web application. I found the whole purpose of GoalSeek and how it works fascinating.</p>
<p>The whole purpose of GoalSeek in Excel is finding an input for an equation that will provide the desired solution. To understand how this is supposed to work, we’ll consider something really simple.</p>
<h3 id="what-is-goalseek">What Is Goalseek?</h3>
<p>Let’s take the example of finding the amount due based on a principal using the Simple Interest formula.</p>
<p>The equation for the simple interest formula is, well, simple:</p><pre><code>A = P(1+rt), eqn(1)</code></pre><pre><code>P -&gt; principalr -&gt; rate of interestt -&gt; time in years</code></pre>
<p>We’ll set the following values:</p><pre><code>P -&gt; 10000r -&gt; 7.5t -&gt; 15</code></pre>
<p>This gives us the amount due as being:</p><pre><code>A = 10000(1+7.5*15) = 1135000</code></pre>
<p>Now, let’s say the requirement for our solution changed. Now, instead of <em>finding the amount due </em>based on the principal, rate of interest, and time, we instead need to find the <em>rate of interest that will give us the desired amount due </em>but keeping the principal and time the same.</p>
<p>Let’s alter the example now:</p><pre><code>P -&gt; 10000r -&gt; ?t -&gt; 15A -&gt; 1120000</code></pre>
<p>Here, we are trying to find the interest rate that will allow us to pay 1120000 instead of 1135000. We can solve this by switching the variables around.</p><pre><code>A = P(1+rt) =&gt; 1120000 = 10000(1+r*15)</code></pre><pre><code>1+15*r = 1120000 / 10000 =&gt; r = (112 - 1) / 15</code></pre><pre><code>r = 7.4%</code></pre>
<p>Brilliant! There we have it! We did something Excel’s Goalseek does.</p>
<figcaption>Gif capture of Excel GoalSeek functionality</figcaption>
</figure>
<p>One problem, though. That was a really simple equation and problem. What happens if the equation is significantly more complex and involves trigonometric functions along with multiple possible solutions? I’ll give you an example of an equation that you would be able to solve with Goalseek:</p><pre><code>f(x, y) = 1550 - (4*x/y * sinh(y/2 * 1500 / (2*x))), eqn(2)</code></pre>
<p>Yeah, that definitely looks like a handful. One of the daunting factors when looking at something like this for me is that things are being expressed as functions with dependent variables.</p>
<p>Wasn’t this <code>A = P(1+rt)</code> easier to look at? Granted, part of that is also the fact that the equation is a lot smaller.</p>
<p>But, what if we re-wrote it like this:</p><pre><code>f(P, r, t) = P(1+rt)</code></pre>
<p>See? It’s still the same thing.</p>
<p>Let’s go back to eqn(2). What if we have the following problem statement:</p><pre><code>0 = 1550 - (4*x/0.022 * sinh(0.022/2 * 1500 / (2*x))),solve for x</code></pre>
<p>Well, again, all you’re really doing is solving for a variable, but just look at how much harder the problem’s gotten. And it’s primarily because of that pesky <code>sinh</code> sitting in the equation.</p>
<p>Okay, if you’re new to this, I imagine things are getting a little overwhelming. Let’s take a step back and think about what we’ve figured out so far.</p>
<ol>
<li>We figured out that there’s no real difference between writing a function with notations like the following two:</li>
</ol><pre><code>f(P, r, t) = P(1+rt)A = P(1+rt)</code></pre>
<p>2. We figured out that we can solve for one variable to give us the desired result. However, the more complex the equation is, the more complicated getting the solution is.</p>
<p>We have two equations of very opposing difficulties to solve. I will introduce a third equation that will help to bridge the gap</p><pre><code>y = 2x^2+3x-5, eqn(3)</code></pre>
<p>The equation above is a basic parabolic function. This is what the equation looks like when plotted.</p>
<figcaption>Plot of 2x²+3x-5</figcaption>
</figure>
<p>Okay, now let’s think about how to solve this equation. Let’s say we want to solve for <code>x</code> so that <code>y = 0</code>:</p><pre><code>y = 2x^2+3x-5 =&gt; 2x^2+3x-5 = 0</code></pre><pre><code>x = [-3 + sqrt(3^2 - 4*2*(-5))] / (2*2),     [-3 - sqrt(3^2 - 4*2*(-5))] / (2*2)]</code></pre><pre><code>x = 1, -2.5</code></pre>
<p>If you are wondering where I got the equation for the solutions from, notice it’s just the classic solution to a quadratic equation.</p><pre><code>y = ax^2+bx+c, where y = 0 =&gt; ax^2+bx+c = 0</code></pre><pre><code>x = -b+sqrt(b^2-4ac) / 2a, x = -b-sqrt(b^2-4ac) / 2a</code></pre>
<p><em>Note: If you want to find out how this solution was derived, take a look <a href="https://www.purplemath.com/modules/sqrquad2.htm#formula" rel="noopener">here</a>.</em></p>
<p>Well, that’s one way to solve the equation. You could potentially write a parser that could accept any equation, check the coefficients, accurately separate them and then attempt to solve the equation. You could also use the wonderful <a href="https://algebra.js.org/#equations" rel="noopener">algebra.js</a> library here, which does what I just described.</p>
<p>However, if you look at the graph, you will notice that you could have solved this graphically. The goal was to find the point on the curve where <code>y = 0</code></p>
<p>Well, look carefully and see where the curve crosses the X-axis. It crosses it at two points: <code>[1, -2.5]</code> There’s your solution!</p>
<p>Now, you’re probably thinking that’s all great, but I can’t exactly teach a computer to look at the graph, find the points where it crosses the X-axis and identify those points. Well, potentially you could, with some form of model trained for image recognition, but that’s another post. So, how do we find our way around this?</p>
<p>There are two methods we can use, and these are the ones I will be exploring in depth in this article.</p>
<p>They are called the <strong>Newton-Raphson method</strong> and the <strong>bisection method</strong>.</p>
<p>I’ll give you a brief overview of how each method works.</p>
<p><strong>TL;DR Version</strong></p>
<p>The Newton-Raphson method works by picking a random point and drawing a tangent line at that point. It then calculates a new <code>x</code> value which is closer to the root. If you keep repeating this, you will find the root.</p>
<p>The Bisection method works on the principle of finding the interval within which the root lies. Once the accurate interval lies, the solution is found by using an algorithm similar to the one used for binary search.</p>
<p>Let’s get into each one in more detail.</p>
<h3 id="newton-raphson-method">Newton-Raphson Method</h3>
<p>Okay, let’s dig into the Newton-Raphson method. The Newton-Raphson method is based on three major ideas.</p>
<ol>
<li>The tangent to a curve at a specific point is a straight line</li>
<li>The tangent to a curve at a specific point is also the derivative of the curve at that point</li>
<li>The equation of a straight line, which is: <code>y = mx + c</code></li>
</ol>
<figcaption>Tangent To A Curve At A Point. Source: <a href="https://brilliant.org/wiki/newton-raphson-method/" rel="noopener" target="_blank" title="">https://brilliant.org/wiki/newton-raphson-method/</a></figcaption>
</figure>
<p>The image above is that of a random curve with a tangent drawn to it.</p>
<p>We’ve picked a random point <code>x_n</code> on the X-axis.</p>
<p><code>f(x_n)</code> is the equivalent of the point on the curve. i.e the y-intercept</p>
<p><code>f’(x_n)</code> is the tangent to the curve at the point f(x_n).</p>
<p><code>x_(n+1)</code> is the point where the tangent intercepts the X-axis.</p>
<p>Remember, we said we wanted to find the point where the curve crosses the X-axis, as this would give us our solution. Notice, the point <code>x_(n+1)</code> is a lot closer to the solution than <code>x_n</code> was, despite us picking <code>x_n</code> at random.</p>
<p>Well, what if we repeated the same process, except this time with <code>x_(n+1)</code> as our new point initial point? Well, presumably we would end up with a new <code>x</code> that is even closer to the solution.</p>
<p>So, how do we find the point <code>x_(n+1)</code>given the equation, the derivative and the original <code>x_n</code>?</p>
<p>Let’s go back to the equation of a straight line: <code>y = mx+c</code></p>
<p>We said that the tangent to a curve at a point is a straight line.</p>
<p>We also said that the y-intercept is equal to <code>f(x_n)</code></p>
<p>We know from calculus, that the derivative is equal to the slope.</p>
<p>Therefore, we get the following:</p>
<figcaption>Equation of a line</figcaption>
</figure>
<p>Now, we need to find the root of this tangent line, so set <code>y = 0 </code>and <code>x = x_(n+1)</code>, and solve for <code>x_(n+1)</code></p>
<p>This gives us the following:</p>
<figcaption>Source: <a href="https://brilliant.org/wiki/newton-raphson-method/" rel="noopener" target="_blank" title="">https://brilliant.org/wiki/newton-raphson-method/</a></figcaption>
</figure>
<p>Now, we have everything we need to solve for <code>x_(n+1)</code>.</p>
<p>This went way over my head the first time I saw all the equations, so let’s try it with an example to see how it works.</p>
<p>We’ll take eqn(2) and work through that. Let’s pick <code>x_n=3</code></p><pre><code>f(x) = 2x^2+3x-5f'(x) = 4x+3f(3) = 18+9-5 = 22f'(3) = 15x_1 = 3 - 22/15 = 1.53</code></pre><pre><code>f(1.53) = 4.2718f'(1.53) = 9.12x_2 = 1.53 - 4.2718/9.12 = 1.0616</code></pre>
<p>If you follow that all the way through, you should get a solution where <code>x=1</code> and as we know from the earlier graph, this is one of our solutions.</p>
<p>If you notice what we did above was just follow a series of steps in a certain order repeatedly, i.e. the very definition of an algorithm. Here is what the code looks like for the same.</p>
<p>The code snippet makes heavy use of the <a href="http://mathjs.org/" rel="noopener">math.js library</a>. The main functions I am making use of are the math.derivative and the math.eval functions. Respectively, they calculate the derivative of an expression and evaluate an expression based on an object of key-value pairs.</p>
<p>The bit of the code snippet I want to draw your attention to is lines 14–16.</p><pre><code>if (Math.abs(result - guess) &lt; Math.exp(-15)) {              return result        }</code></pre>
<p>What we’re doing here is defining the base condition to end our iteration. We’re saying that if the difference between <code>x_n</code> and <code>x_(n+1)</code> is less than <code>10^(-15)</code> return the result.</p>
<p>If you work through the prior exercise all the way through, you’ll arrive at a situation where each successive <code>x</code> value is almost identical to the prior <code>x</code> value, and this is how we know we have found a solution.</p>
<p>I have a nice little simulation built with d3.js in codepen showing you how this would run iteratively.</p>
<p>Just enter a value in the input box and hit submit and you can watch the algorithm run graphically.</p>
<p><em>Note: Please try a range of sensible inputs, I haven’t exactly built a robust system here.</em></p>
<h3 id="bisection-method">Bisection Method</h3>
<p>Okay, so we figured out how the Newton-Raphson method works. Let’s tackle the bisection method next.</p>
<p>The bisection method is a lot easier to understand than the Newton-Raphson method. It’s based on a very simple mathematical property:</p>
<p><em>If a function f(x) is continuous on the interval [a, b] and the sign of f(a) !== f(b), then there is a value c in the range (a, b) where f(c) = 0. In other words, c is the root of the equation.</em></p>
<p>If that didn’t make sense to you, think about it purely numerically and then purely graphically.</p>
<p>Let’s say you have the following interval: [-7, 6]. Now if I ask you to count just the integers from -7 to 6, you would also count 0 at some point in that interval. That’s essentially what the property above says.</p>
<p>Let’s look at what this means graphically.</p>
<figcaption>Image Source: <a href="http://www.mathcs.emory.edu/~cheung/Courses/170/Syllabus/07/bisection.html" rel="noopener" target="_blank" title="">http://www.mathcs.emory.edu/~cheung/Courses/170/Syllabus/07/bisection.html</a></figcaption>
</figure>
<p>The above function is a continuous line and it goes from negative to positive, which implies that it has to cross 0 at some point. Since it has to cross 0, that means the root lies in this interval.</p>
<p>Okay, this means that using the bisection method is a two-step process.</p>
<ol>
<li>Find the interval within which the root lies, if such an interval exists</li>
<li>Find the actual root within this interval</li>
</ol>
<p>Here’s the code for how you’d find the interval:</p>
<p>Again, I am making use of mathjs here, so you can look up the documentation for that.</p>
<p>The interesting bit of this algorithm is in lines 18–26, where I am making a check to see if either my function evaluation of the left interval or right interval has resulted in something that is <code>NaN</code> . I will explain why I included this code block when we explore how to solve eqn(2).</p>
<p>Once we have the interval within which the solution lies, we can turn our attention to actually finding the solution itself.</p>
<p>If you’ve ever tried to write a binary search algorithm on an array, the code snippet above should look very familiar to you. We are employing more or less the same approach here. Here are the steps involved.</p>
<ol>
<li>I start with my left and right intervals and find a mid-point</li>
<li>Check whether the solution lies to the left of the mid-point or to the right of the mid-point</li>
<li>If it lies to the left, set <code>right = mid</code> , else set <code>left = mid</code></li>
</ol>
<p>Eventually, the midpoint will be the root itself.</p>
<p>Here is a little simulation running through what is actually going on.</p>
<p><em>Note: I apologise for how ugly the simulation looks, unfortunately styling is not my forte. Again, sensible range of inputs, because otherwise its going take quite a while for the simulation to run.</em></p>
<p>In the pen above, enter a value, and the simulation will attempt to find an interval within which a potential root could exist. Once it has found an interval, it will start trying to find the root by using the algorithm we discussed immediately prior to this.</p>
<h3 id="solving-complex-equations"><strong>Solving Complex Equations</strong></h3>
<p>Alright, we’ve explored two different methods of finding the roots of equations. Now, its time to explore the more complex eqn(2) we had and see which of these methods can solve that equation.</p>
<p>I’ll put the equation below so it’s clear</p><pre><code>f(x, y) = 1550 - (4*x/y * sinh(y/2 * 1500 / (2*x))), eqn(2)</code></pre><pre><code>Solve for f(x, y) = 0, where y = 0.022</code></pre><pre><code>0 = 1550 - (4*x/0.022 * sinh(0.022/2 * 1500 / (2*x)))</code></pre>
<p>First, let’s visualize what this equation looks like. It’ll give us a much better intuition for why something might go wrong.</p>
<figcaption>f(x) = 1550 — (4x/0.022 * sinh(0.022/2 * 1500 / (2x)))</figcaption>
</figure>
<p>The thing to note about this equation is that it tends to infinity as x tends to 0. This is going to pose a problem for the Newton-Raphson method because the Newton-Raphson solution tends to follow the path of the tangent, in which case it might quickly dissolve to infinity as a solution unless it managed to hit on the solution by chance.</p>
<p>Try running the above equation with the Newton-Raphson method and you’ll see what I mean. You will probably get a result of null.</p>
<p>The bisection method, on the other hand, will work quite nicely for this. It works well because we are taking very small incremental steps with a step size we have control over. Run the below codepen and you should see how nicely the bisection method works for most equations.</p>
<p>The code above is almost identical to the previous version we set up for the bisection method, baring a few differences. I set up a separate codepen so I could be spared the effort of having to allow a way to enter equations, which would require extensive checks and error handling. Also, this equation requires special boundaries for defining its data since it tends to infinity as x approaches 0. If you’re interested you can see what I mean if you have a look through the code.</p>
<p>Now, in the bisection method code I told you about this block of code here:</p><pre><code>if (Number.isNaN(result_left)) {        left -= stepSize        scope_left[variable] = left        result_left = math.eval(eqn, scope_left)    } if (Number.isNaN(result_right)) {        right += stepSize        scope_right[variable] = right        result_right = math.eval(eqn, scope_right)}</code></pre>
<p>So the reason I have this is to handle situations like those that arise for eqn(2). Because eqn(2) tends to infinity as x tends to 0, there could be a situation where the evaluation of the equation returns either <code>NaN</code> or <code>Infinity</code> . To avoid this situation, I simply shift the equation over by the step size repeatedly until I can get back to the domain of the function that lies in the real number range.</p>
<h3 id="bisection-newton-raphson"><strong>Bisection &gt; Newton-Raphs</strong>on?</h3>
<p>This brings me to an important point, why did Newton-Raphson fail for this equation? We know that since Newton-Raphson follows the tangent of the curve at different points, it can dissolve to infinity if the equation tends to infinity at any particular point. This highlights one of the shortcomings of the Newton-Raphson method.</p>
<ol>
<li>The Newton-Raphson method works well for a <strong><em>continuous </em></strong>function. If the function is discontinuous as in eqn(2) is, it will typically fail.</li>
<li>Newton-Raphson cannot account for multiple maxima and minima in a function.</li>
</ol>
<p>Take the following graph for example.</p>
<figcaption>A function with multiple maxima and minima. Source: <a href="https://brilliant.org/wiki/newton-raphson-method/" rel="noopener" target="_blank" title="">https://brilliant.org/wiki/newton-raphson-method/</a></figcaption>
</figure>
<p>Pick a point at random between -0.19 and +0.19, and you should see that you will get a negative slope, which means the tangent to the curve at that point will intercept the X-axis at a point further away from the root, which goes against the principle of the Newton-Raphson method. This implies that Newton-Raphson will typically fail for cubic and higher order equations.</p>
<p>The Bisection Method should not have the same problem because it depends on finding an interval within which the solution has to lie, and curves like the above will not be an obstacle to that as long it is continuous in that domain.</p>
<p>If you compare the two in terms of Big(O) notation, it seems obvious that Newton-Raphson runs on fewer iterations than the Bisection method, simply because it converges much faster when you view it graphically. Ironically, if you run this with a timing process, it frequently turns out that, given the same starting point, the Bisection method runs faster than the Newton-Raphson method.</p>
<p>This is because the Newton-Raphson involves computing a derivative at every step, which turns out to be very computationally expensive. Incrementing and decrementing a number on the other is relatively computationally inexpensive.</p>
<p>If you want to run the same on your machine and check the results, check out the repo <a href="https://github.com/redixhumayun/root-finding" rel="noopener">here</a>. You can clone that repo, run <code>npm install</code> and then <code>npm run start</code> on your machine, and you should see the results of running both the Newton-Raphson and Bisection method on an identical equation given the same initial guess.</p>
<h3 id="conclusion"><strong>Conclusion</strong></h3>
<p>Okay, we’ve covered a lot here. But honestly, this is such a ridiculously vast topic that I’ve barely scratched the surface. Convergence of equations is a widely studied topic. Consider one of the most basic things we haven’t covered: finding multiple roots.</p>
<p>You can of course modify the algorithms provided in this article to achieve that.</p>
<p>Take the equation below, for example. It has 3 roots (3 points where it intercepts the X-axis, and you need to find all of these roots).</p>
<figcaption>Cubic equations have multiple roots</figcaption>
</figure>
<p>I’m going to post all my sources here, feel free to look through them.</p>
<p><em>Note: If you have questions or comments about the article, don’t hesitate to reach out to me via comments on this article or on <a href="https://github.com/redixhumayun" rel="noopener">GitHub</a> or <a href="https://twitter.com/zz_humayun" rel="noopener">Twitter</a>.</em></p>
<ol>
<li><a href="https://brilliant.org/wiki/newton-raphson-method/" rel="noopener">https://brilliant.org/wiki/newton-raphson-method/</a></li>
<li><a href="http://www.mathcs.emory.edu/~cheung/Courses/170/Syllabus/07/bisection.html" rel="noopener">http://www.mathcs.emory.edu/~cheung/Courses/170/Syllabus/07/bisection.html</a></li>
<li><a href="http://www.sosmath.com/calculus/diff/der07/der07.html" rel="noopener">http://www.sosmath.com/calculus/diff/der07/der07.html</a></li>
<li><a href="https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw" rel="noopener">https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw</a></li>
</ol>
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
