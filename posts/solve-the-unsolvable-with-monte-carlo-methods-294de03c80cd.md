---
card: "https://cdn-media-1.freecodecamp.org/images/0*zgdRA5k-JRPOGc_J."
tags: [Machine Learning]
description: "How do you solve an ‘unsolvable’ problem?"
author: "Milad E. Fahmy"
title: "Solve the ‘unsolvable’ with Monte Carlo methods"
created: "2021-08-16T11:45:06+02:00"
modified: "2021-08-16T11:45:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-machine-learning tag-programming tag-technology tag-tech tag-data-science ">
<header class="post-full-header">
<h1 class="post-full-title">Solve the ‘unsolvable’ with Monte Carlo methods</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*zgdRA5k-JRPOGc_J. 300w,
https://cdn-media-1.freecodecamp.org/images/0*zgdRA5k-JRPOGc_J. 600w,
https://cdn-media-1.freecodecamp.org/images/0*zgdRA5k-JRPOGc_J. 1000w,
https://cdn-media-1.freecodecamp.org/images/0*zgdRA5k-JRPOGc_J. 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*zgdRA5k-JRPOGc_J." alt="Solve the ‘unsolvable’ with Monte Carlo methods">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>How do you solve an ‘unsolvable’ problem?</p><p>The worlds of data science, mathematical finance, physics, engineering and bioinformatics (amongst many others) readily produce intractable problems. These are problems for which no computationally ‘easy’ solutions are available.</p><p>Luckily, there are methods that can approximate the solutions to these problems with a remarkably simple trick.</p><p><strong>Monte Carlo methods </strong>are a class of methods that can be applied to computationally ‘difficult’ problems to arrive at near-enough accurate answers. The general premise is remarkably simple:</p><ol><li>Randomly sample input(s) to the problem</li><li>For each sample, compute an output</li><li>Aggregate the outputs to approximate the solution</li></ol><p>As an analogy, imagine you’re an ant crawling over a large, tiled mosaic. From your vantage point, you have no easy way of working out what the mosaic depicts.</p><p>If you started walking around the mosaic and sampling the tiles you visit at random intervals, you’d build up an approximate idea of what the mosaic shows. The more samples you take, the better your approximation will be.</p><p>If you could cover every single tile, you’d eventually have a perfect representation of the mosaic. However, this wouldn’t be necessary — after a certain amount of sampling, you’d have a pretty good estimate.</p><p>This is exactly how Monte Carlo methods approximate solutions to otherwise ‘unsolvable’ problems.</p><p>The name refers to a famous casino in Monaco. It was coined in 1949 by one of the method’s pioneers, Stanislaw Ulam. Ulam’s uncle was reportedly a gambling man, and the connection between the element of ‘chance’ in gambling and in Monte Carlo methods must have been particularly apparent to Stanislaw.</p><p>The best way to understand a technical concept is to dive right in and see how it works. The rest of this article will show how Monte Carlo methods can solve three interesting problems. The examples will be presented in <a href="https://julialang.org/" rel="noopener">the Julia programming language</a>.</p><h3 id="introducing-julia">Introducing Julia</h3><p>There are a <a href="https://medium.freecodecamp.org/which-languages-should-you-learn-for-data-science-e806ba55a81f" rel="noopener">number of languages you might consider learning</a> if you are interested in specialising in data science. One which has emerged as an increasingly serious option in recent years is a language called Julia.</p><p>Julia is a numerical programming language that has seen adoption within a range of quantitative disciplines. It is free to download. There’s also a really neat browser-based interface called JuliaBox, which is powered by <a href="http://jupyter.org/try" rel="noopener">Jupyter Notebook</a>.</p><p>One of the cool features of Julia we’ll be making use of today is how easily it facilitates <a href="https://computing.llnl.gov/tutorials/parallel_comp/" rel="noopener">parallel computing</a>. This allows you to carry out computations on multiple processes, giving a serious performance boost when done at scale.</p><h4 id="going-parallel">Going parallel</h4><p>To launch Julia on multiple processes, go to the terminal (or open a new terminal session in JuliaBox) and run the following command:</p><pre><code>$ julia -p 4</code></pre><p>This initiates a Julia session on four CPUs. To define a function in Julia, the following syntax is used:</p><pre><code>function square(x) return x^2 end</code></pre><p>That’s right — instead of indentations or curly braces, Julia uses a <code>start-end</code> approach. For-loops are similar:</p><pre><code class="language-Julia">for i = 1:10 print(i) end</code></pre><p>You can of course add whitespace and indentation to aid readability.</p><p>Julia’s parallel programming capabilities rely primarily upon two concepts: <strong>remote references</strong> and <strong>remote calls</strong>.</p><ul><li>Remote references are objects that essentially act as named placeholders for objects defined on other processes.</li><li>Remote calls allow processes to call functions on arguments stored on other processes.</li></ul><p>It is important to define functions across all processes. Check out the code below:</p><pre><code class="language-Julia">@everywhere function hello(x)
return "Hello " * x
end
result = @spawn hello("World!")
print(result)
fetched = fetch(result)
print(fetched)</code></pre><p>The <code>@everywhere</code> macro ensures the <code>hello()</code> function is defined across all processes. The <code>@spawn</code> macro is used to wrap a <a href="https://guide.freecodecamp.org/javascript/closures/" rel="noopener">closure</a> around the expression <code>hello("World!")</code>, which is then evaluated remotely on an automatically chosen process.</p><p>The result of that expression is instantly returned as a <code>Future</code> remote reference. If you try printing <code>result</code>, you’ll be disappointed. The output of <code>hello("World!")</code> has been evaluated on a different process, and isn’t available here. To make it available, use the <code>fetch()</code> method.</p><p>If spawning and fetching seem like too much to bother with, then you’re in luck. Julia also has a <code>@parallel</code> macro that will take on some of the heavy lifting required for running tasks in parallel.</p><p><code>@parallel</code> works either standalone, or with a ‘reducer’ function to collect the results across all processes and reduce them to a final output. Take a look at the code below:</p><pre><code class="language-Julia">@parallel (+) for i = 1:1000000000
return i
end</code></pre><p>The for-loop simply returns the value of <code>i</code> at each step. The <code>@parallel</code> macro uses the addition operator as a reducer. It takes each value of <code>i</code> and adds it on to the previous values.</p><p>The result is the sum of the first billion integers.</p><p>With that whistle-stop tour of Julia’s parallel programming capabilities in mind, let’s move on to seeing how we can use Monte Carlo methods to solve some interesting example problems.</p><h3 id="playing-the-lottery">Playing the lottery</h3><p>As a first example, let’s imagine playing a lottery game. The idea is simple — pick six unique numbers between 1 and 50. Each ticket costs, say, £2.</p><ul><li>If you match all six numbers to those drawn, you win a large prize (£1,000,000)</li><li>If you match five numbers, you win a medium prize (£100,000)</li><li>If you match four numbers, you win a small prize (£100)</li><li>If you match three numbers, you win a very small prize (£10)</li></ul><p>What would you expect to win if you played this lottery every day for twenty years?</p><p>You could work this out with pen and paper, by using a little probability theory. But that’d be time consuming! Instead, why not use a Monte Carlo method?</p><p>The approach is almost suspiciously simple — simulate the game over and over many times, and average the outcome.</p><p>Start Julia:</p><pre><code>$ julia -p 4</code></pre><p>Now, import the StatsBase package. Use the <code>@everywhere</code> macro to make it available… well, everywhere.</p><pre><code>using StatsBase@everywhere using StatsBase</code></pre><p>Next, define a function that will simulate a single lottery game. The arguments allow you to change the rules of the game, to explore different scenarios.</p><pre><code class="language-Julia">@everywhere function lottery(n, outOf, price)
ticket = sample(1:outOf, n, replace = false)
draw = sample(1:outOf, n, replace = false)
matches = sum(indexin(ticket,draw) .!= 0 )
if matches == 6
return 1000000 - price
elseif matches == 5
return 100000 - price
elseif matches == 4
return 100 - price
elseif matches == 3
return 10 - price
else
return 0 - price
end
end</code></pre><p>The number of matching numbers is calculated using Julia’s <code>indexin()</code> function. This takes an array, and for each element, returns the index of its position in another array (or zero if the element is not found). Unlike many modern languages, Julia indexes from one, not zero.</p><p>The <code>.!= 0</code> syntax checks which of these indices are not equal to zero, and returns either <code>true</code> or <code>false</code> for each. Finally, the number of <code>true</code>’s are summed up, giving the total matching numbers.</p><p>Now let’s simulate playing the lottery every day for twenty years… ten thousand times in parallel.</p><pre><code class="language-Julia">winnings = @parallel (+) for i = 1:(365*20*10000)
lottery(6,50,2)
end
hits = 0
for i = 1:N
x = rand() ; y = rand()
if x^2 + y^2 &lt; 1
hits += 1
end
end
return float(hits / N * 4)
end</code></pre><p>This runs a loop, randomly sampling <code>x</code> and <code>y</code> coordinates between 0 and 1. The if-statement uses <a href="https://www.khanacademy.org/math/algebra2/intro-to-conics-alg2/expanded-equation-circle-alg2/a/circle-equation-review" rel="noopener">the circle equation</a> to check if the points lie within an imaginary circle, counting the number of hits. The function returns the proportion of hits, multiplied by four.</p><p>Running this function in parallel will allow for an extremely high number of samples to be drawn, giving much greater precision.</p><pre><code class="language-Julia">Pi = @parallel (+) for i = 1:nworkers()
throwPaint(100000000) / nworkers()
end
pt1 = []
pt2 = []
for i = 1:dimensions
pt1 = push!(pt1, rand())
pt2 = push!(pt2, rand())
end
return [pt1, pt2]
end</code></pre><p>Now define a function that calculates the distance between the points.</p><pre><code class="language-Julia">@everywhere function distance(points)
pt1 = points[1]
pt2 = points[2]
arr = []
for i = 1:length(pt1)
d = (pt2[i] - pt1[i]) ^ 2
arr = push!(arr, d)
end
dist = sqrt(sum(arr))
return dist
end</code></pre><p>Finally, run these two functions together in parallel. Instead of reducing to a single output, this time we’ll write each result to a <code>SharedArray</code> object. <code>SharedArray</code> objects allow different processes to access data stored in the same array object.</p><pre><code class="language-Julia">results = SharedArray{Float64}(1000000)
@parallel for i = 1:1000000
results[i] = distance(samplePoints(3))
end
sum(results) / length(results)</code></pre><p>You should get an answer very close to 0.6617 — and this is of course the correct answer! By changing the argument passed to <code>samplePoints()</code>, you can solve the generalised problem in however many dimensions you like.</p><h3 id="what-next">What next?</h3><p>Hopefully you’ve found this intro to Monte Carlo methods useful!</p><p>When implemented correctly, they provide an invaluable tool for data scientists, engineers, financial mathematicians and researchers… and anyone else whose work involves understanding complex systems.</p><p>If you’re interested in learning more about their applications, there’s a ton of resources online. However, the best way to learn is practice! Once you’re comfortable with the basic premise, why not have a go simulating your own Monte Carlo examples?</p><p>Any feedback or comments, please leave below!</p>
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
