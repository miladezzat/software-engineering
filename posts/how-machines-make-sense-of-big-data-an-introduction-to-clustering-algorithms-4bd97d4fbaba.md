---
card: "https://cdn-media-1.freecodecamp.org/images/1*Bm4uiBY1JEt6Z-vOme_fTQ.png"
tags: [Machine Learning]
description: "Take a look at the image below. It’s a collection of bugs and"
author: "Milad E. Fahmy"
title: "An introduction to clustering algorithms"
created: "2021-08-16T15:42:44+02:00"
modified: "2021-08-16T15:42:44+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-machine-learning tag-data-science tag-statistics tag-technology tag-artificial-intelligence tag-python tag-math tag-mathematics tag-combinatorics tag-clustering tag-data ">
<header class="post-full-header">
<h1 class="post-full-title">An introduction to clustering algorithms</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Bm4uiBY1JEt6Z-vOme_fTQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*Bm4uiBY1JEt6Z-vOme_fTQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*Bm4uiBY1JEt6Z-vOme_fTQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Bm4uiBY1JEt6Z-vOme_fTQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Bm4uiBY1JEt6Z-vOme_fTQ.png" alt="An introduction to clustering algorithms">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
Player A (5 goals),
Player B (20 goals),
Player C (11 goals)
Group Mean = (5 + 20 + 11) / 3 = 12 goals
Group 2
Player D (5 goals),
Player E (3 goals),
Player F (19 goals)
Group Mean = 9 goals
Group 3
Player G (30 goals),
Player H (3 goals),
Player I (15 goals)
Group Mean = 16 goals</code></pre><p><strong>Step 2: </strong>For each player, reassign them to the group with the closest mean. E.g., Player A (5 goals) is assigned to Group 2 (mean = 9). Then recalculate the group means.</p><pre><code>Group 1 (Old Mean = 12 goals)
Player C (11 goals)
New Mean = 11 goals
Group 2 (Old Mean = 9 goals)
Player A (5 goals),
Player D (5 goals),
Player E (3 goals),
Player H (3 goals)
New Mean = 4 goals
Group 3 (Old Mean = 16 goals)
Player G (30 goals),
Player I (15 goals),
Player B (20 goals),
Player F (19 goals)
New Mean = 21 goals</code></pre><p><strong>Repeat</strong> Step 2 over and over until the group means no longer change. For this somewhat contrived example, this happens on the next iteration. <strong>Stop!</strong> You have now formed three clusters from the dataset!</p><pre><code>Group 1 (Old Mean = 11 goals)
Player C (11 goals),
Player I (15 goals)
Final Mean = 13 goals
Group 2 (Old Mean = 4 goals)
Player A (5 goals),
Player D (5 goals),
Player E (3 goals),
Player H (3 goals)
Final Mean = 4 goals
Group 3 (Old Mean = 21 goals)
Player G (30 goals),
Player B (20 goals),
Player F (19 goals)
Final Mean = 23 goals</code></pre><p>With this example, the clusters could correspond to the players’ positions on the field — such as defenders, midfielders and attackers. </p><p>K-means works here because we could have reasonably expected the data to fall naturally into these three categories.</p><p>In this way, given data on a range of performance statistics, a machine could do a reasonable job of estimating the positions of players from any team sport — useful for sports analytics, and indeed any other purpose where classification of a dataset into predefined groups can provide relevant insights.</p><h4 id="finer-details"><strong>Finer details</strong></h4><p>There are several variations on the algorithm described here. The initial method of ‘seeding’ the clusters can be done in one of several ways. </p><p>Here, we randomly assigned every player into a group, then calculated the group means. This causes the initial group means to tend towards being similar to one another, which ensures greater repeatability.</p><p>An alternative is to seed the clusters with just one player each, then start assigning players to the nearest cluster. The returned clusters are more sensitive to the initial seeding step, reducing repeatability in highly variable datasets. </p><p>However, this approach may reduce the number of iterations required to complete the algorithm, as the groups will take less time to diverge.</p><p>An obvious limitation to K-means clustering is that you have to provide <em>a priori</em> assumptions about how many clusters you’re expecting to find. </p><p>There are methods to assess the fit of a particular set of clusters. For example, the Within-Cluster <a href="https://en.wikipedia.org/wiki/Partition_of_sums_of_squares" rel="noopener">Sum-of-Squares</a> is a measure of the variance within each cluster.</p><p>The ‘better’ the clusters, the lower the overall WCSS.</p><h3 id="hierarchical-clustering">Hierarchical clustering</h3><h4 id="use-when--1"><strong>Use when...</strong></h4><p>…you wish to uncover the underlying relationships between your observations.</p><h4 id="how-it-works-1"><strong>How it works</strong></h4><p>A distance matrix is computed, where the value of cell (<em>i, j) </em>is a distance metric between observations <em>i </em>and <em>j</em>. </p><p>Then, pair the closest two observations and calculate their average. Form a new distance matrix, merging the paired observations into a single object. </p><p>From this distance matrix, pair up the closest two observations and calculate their average. Repeat until all observations are grouped together.</p><h4 id="worked-example-1"><strong>Worked example</strong></h4><p>Here’s a super-simplified dataset about a selection of whale and dolphin species. As a trained biologist, I can assure you we normally use much more detailed datasets for things like <a href="https://en.wikipedia.org/wiki/Phylogenetic_tree" rel="noopener">reconstructing phylogeny</a>. </p><p>For now though, we’ll just look at the typical body lengths for these six species. We’ll be using just two repeated steps.</p><pre><code>Species    Initials  Length(m)
Bottlenose Dolphin     BD  3.0
Risso's Dolphin  RD        3.6
Pilot Whale      PW        6.5
Killer Whale     KW        7.5
Humpback Whale   HW       15.0
Fin Whale        FW       20.0</code></pre><p><strong>Step 1: </strong>compute a distance matrix between each species. Here, we’ll use the <a href="https://en.wikipedia.org/wiki/Euclidean_distance" rel="noopener">Euclidean distance </a>— how far apart are the data points? </p><p>Read this exactly as you would a distance chart in a road atlas. The difference in length between any pair of species can be looked up by reading the value at the intersection of the relevant row and column.</p><pre><code>    BD   RD   PW   KW   HW
RD  0.6
PW  3.5  2.9
KW  4.5  3.9  1.0
HW 12.0 11.4  8.5  7.5
FW 17.0 16.4 13.5 12.5  5.0</code></pre><p><strong>Step 2: </strong>Pair up the two closest species. Here, this will be the Bottlenose &amp; Risso’s Dolphins, with an average length of 3.3m.</p><p><strong>Repeat</strong> Step 1 by recalculating the distance matrix, but this time merge the Bottlenose &amp; Risso’s Dolphins into a single object with length 3.3m.</p><pre><code>    [BD, RD]   PW   KW   HW
PW 3.2
KW 4.2   1.0
HW11.7   8.5  7.5
FW16.7  13.5 12.5  5.0</code></pre><p><strong>Next</strong>, repeat Step 2 with this new distance matrix. Here, the smallest distance is between the Pilot &amp; Killer Whales, so we pair them up and take their average — which gives us 7.0m.</p><p><strong>Then</strong>, we repeat Step 1 — recalculate the distance matrix, but now we’ve merged the Pilot &amp; Killer Whales into a single object of length 7.0m.</p><pre><code>         [BD, RD] [PW, KW]   HW
[PW, KW]3.7
HW     11.7      8.0
FW     16.7     13.0   5.0</code></pre><p><strong>Next</strong>, repeat Step 2 with this distance matrix. The smallest distance (3.7m) is between the two merged objects — so now merge them into an even bigger object, and take the average (which is 5.2m).</p><p><strong>Then</strong>, repeat Step 1 and compute a new distance matrix, having merged the Bottlenose &amp; Risso’s Dolphins with the Pilot &amp; Killer Whales.</p><pre><code>   [[BD, RD] , [PW, KW]]    HW
HW             9.8
FW            14.8   5.0</code></pre><p><strong>Next</strong>, repeat Step 2. The smallest distance (5.0m) is between the Humpback &amp; Fin Whales, so merge them into a single object, and take the average (17.5m).</p><p><strong>Then</strong>, it’s back to Step 1 — compute the distance matrix, having merged the Humpback &amp; Fin Whales.</p><pre><code>         [[BD, RD] , [PW, KW]]
GitHub    0  1  0  0  0  1  0  0
Google    1  0  1  1  1  1  1  1
Medium    0  1  0  0  0  1  0  0
PayPal    0  1  0  0  0  1  0  1
Quora     0  1  0  0  0  1  1  0
Twitter   1  1  1  1  1  0  0  1
Wikipedia 0  1  0  0  1  0  0  0
for i in range(1,N):
for j in range(1,N):
ans = #stuff with i and j as indices
sum += ans</code></pre><p>So what is <code>#stuff with i and j</code> in more detail?</p><p>Well, the bit in brackets tells us to subtract ( <em>k_i k_j ) / 2L</em> from <em>A_ij</em>.</p><p><em>A_ij</em> is simply the value in the adjacency matrix at row <em>i</em>, column <em>j</em>.</p><p>The values of <em>k_i </em>and <em>k_j</em> are the degrees of each vertex — found by adding up the entries in row <em>i </em>and column <em>j </em>respectively. Multiplying these together and dividing by 2<em>L </em>gives us the expected number of edges between vertices <em>i </em>and <em>j </em>if the network were randomly shuffled up.</p><p>Overall, the term in the brackets reveals the difference between the network’s real structure and the expected structure it would have if randomly reassembled.</p><p>Playing around with the values shows that it returns its highest value when <em>A_ij</em> = 1, and ( <em>k_i k_j ) / 2L </em>is low. This means we see a higher value if there is an ‘unexpected’ edge between vertices <em>i </em>and <em>j.</em></p><p>Finally, we multiply the bracketed term by whatever the last few symbols refer to.</p><p>The ?c<em>_i,</em> c<em>_j i</em>s the fancy-sounding but totally harmless Kronecker-delta function. Here it is, explained in Python:</p><pre><code class="language-Python">def kroneckerDelta(ci, cj):
if ci == cj:
return 1
else:
return 0
kroneckerDelta("A","A")
#returns 1
kroneckerDelta("A","B")
#returns 0</code></pre><p>Yes — it really is that simple. The Kronecker-delta function takes two arguments, and returns 1 if they are identical, otherwise, zero.</p><p>This means that if vertices<em> i</em> and <em>j </em>have been put in the same cluster, then ?c<em>_i,</em> c<em>_j = 1</em>. Otherwise, if they are in different clusters, the function returns zero.</p><p>As we are multiplying the bracketed term by this Kronecker-delta function, we find that for the nested sum <strong>Σ</strong>, the outcome is highest when there are lots of ‘unexpected’ edges connecting vertices assigned to the same cluster. </p><p>As such, modularity is a measure of how well-clustered the graph is into separate communities.</p><p>Dividing by <em>2L</em> bounds the upper value of modularity at 1. Modularity scores near to or below zero indicate the current clustering of the network is really no use. The higher the modularity, the better the clustering of the network into separate communities. </p><p>By maximising modularity, we can find the best way of clustering the network.</p><p>Notice that we have to pre-define how the graph is clustered to find out how ‘good’ that clustering actually is. </p><p>Unfortunately, employing brute force to try out every possible way of clustering the graph to find which has the highest modularity score would be computationally impossible beyond a very limited sample size.</p><p><a href="https://en.wikipedia.org/wiki/Partition_of_a_set#Counting_partitions" rel="noopener">Combinatorics</a> tells us that for a network of just eight vertices, there are 4140 different ways of clustering them. A network twice the size would have over ten billion possible ways of clustering the vertices. </p><p>Doubling the network again (to a very modest 32 vertices) would give 128 septillion possible ways, and a network of eighty vertices would be cluster-able in more ways than there are <a href="https://www.wolframalpha.com/input/?i=991267988808424794443839434655920239360814764000951599022939879419136287216681744888844&amp;lk=1&amp;rawformassumption=%22ClashPrefs%22+-%3E+%7B%22Math%22%7D" rel="noopener">atoms in the observable universe</a>.</p><p>Instead, we have to turn to a <em>heuristic</em> method that does a reasonably good job at estimating the clusters that will produce the highest modularity score, without trying out every single possibility. </p><p>This is an algorithm called <em>Fast-Greedy Modularity-Maximization,</em> and it’s somewhat analogous to the agglomerative hierarchical clustering algorithm describe above. Instead of merging according to distance, ‘Mod-Max’ merges communities according to changes in modularity. </p><p>Here’s how it goes:</p><p><strong>Begin</strong> by initially assigning every vertex to its own community, and calculating the modularity of the whole network, <em>M</em>.</p><p><strong>Step 1 </strong>requires that for each community pair linked by at least a single edge, the algorithm calculates the resultant change in modularity Δ<em>M </em>if the two communities were merged into one.</p><p><strong>Step 2 </strong>then takes the pair of communities that produce the biggest increase in Δ<em>M, </em>which are then merged. Calculate the new modularity <em>M </em>for this clustering, and keep a record of it.</p><p><strong>Repeat</strong> steps 1 and 2 — each time merging the pair of communities for which doing so produces the biggest gain in Δ<em>M, </em>then recording the new clustering pattern and its associated modularity score<em> M</em>.</p><p><strong>Stop</strong> when all the vertices are grouped into one giant cluster. Now the algorithm checks the records it kept as it went along, and identifies the clustering pattern that returned the highest value of <em>M</em>. This is the returned community structure.</p><h4 id="finer-details-2"><strong>Finer details</strong></h4><p>Whew! That was computationally intensive, at least for us humans. </p><p>Graph theory is a rich source of computationally challenging, often NP-hard problems — yet it also has incredible potential to provide valuable insights into complex systems and datasets. </p><p>Just ask Larry Page, whose eponymous PageRank algorithm — which helped propel Google from start-up to basically world domination in less than a generation — was based entirely in graph theory.</p><p>Community detection is a major focus of current research in graph theory, and there are plenty of alternatives to Modularity-Maximization, which while useful, does have some drawbacks.</p><p>For a start, its agglomerative approach often sees small, well-defined communities swallowed up into larger ones. This is known as the <em>resolution limit</em> — the algorithm will not find communities below a certain size. </p><p>Another challenge is that rather than having one distinct, easy-to-reach global peak, the Mod-Max approach actually tends to produce a wide ‘plateau’ of many similar high modularity scores — making it somewhat difficult to truly identify the absolute maximum score.</p><p>Other algorithms use different ways to define and approach community detection.</p><p><em>Edge-Betweenness</em> is a divisive algorithm, starting with all vertices grouped in one giant cluster. It proceeds to iteratively remove the least ‘important’ edges in the network, until all vertices are left isolated. This produces a hierarchical structure, with similar vertices closer together in the hierarchy.</p><p>Another algorithm is <em>Clique Percolation</em>, which takes into account possible overlap between graph communities. </p><p>Yet another set of algorithms are based on <a href="https://en.wikipedia.org/wiki/Random_walk" rel="noopener">random-walks</a> across the graph, and then there are <a href="https://en.wikipedia.org/wiki/Spectral_clustering" rel="noopener"><em>spectral clustering</em></a> methods which start delving into the eigendecomposition of the adjacency matrix and other matrices derived therefrom. These ideas are used in feature extraction in, for example, areas such as computer vision.</p><p>It’d be well beyond the scope of this article to give each algorithm its own in-depth worked example. Suffice to say that this is an active area of research, providing powerful methods to make sense of data that even a generation ago would have been extremely difficult to process.</p><h3 id="conclusion">Conclusion</h3><p>Hopefully this article has informed and inspired you to better understand how machines can make sense of data. The future is a rapidly changing place, and many of those changes will be driven by what technology becomes capable of in the next generation or two.</p><p>As outlined in the introduction, machine learning is an extraordinarily ambitious field of research, in which massively complex problems require solving in as accurate and as efficient a way possible. Tasks that come naturally to us humans require innovative solutions when taken on by machines.</p><p>There’s still plenty of progress to be made, and whoever contributes the next breakthrough idea will no doubt be generously rewarded. Maybe someone reading this article will be behind the next powerful algorithm?</p><p>All great ideas have to start somewhere!</p>
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
