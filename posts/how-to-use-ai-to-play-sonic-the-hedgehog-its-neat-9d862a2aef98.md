---
card: "https://cdn-media-1.freecodecamp.org/images/1*RYknGhjxRw8arZlI-_ib4A.jpeg"
tags: [Machine Learning]
description: "by Vedant Gupta"
author: "Milad E. Fahmy"
title: "How to use AI to play Sonic the Hedgehog. It’s NEAT!"
created: "2021-08-16T11:31:03+02:00"
modified: "2021-08-16T11:31:03+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-machine-learning tag-reinforcement-learning tag-gaming tag-artificial-intelligence tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to use AI to play Sonic the Hedgehog. It’s NEAT!</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*RYknGhjxRw8arZlI-_ib4A.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*RYknGhjxRw8arZlI-_ib4A.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*RYknGhjxRw8arZlI-_ib4A.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*RYknGhjxRw8arZlI-_ib4A.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*RYknGhjxRw8arZlI-_ib4A.jpeg" alt="How to use AI to play Sonic the Hedgehog. It’s NEAT!">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
import numpy as np
import cv2
import neat
import pickle</code></pre><p>We will also define our environment, consisting of the game and the state:</p><pre><code class="language-py">env = retro.make(game = "SonicTheHedgehog-Genesis", state = "GreenHillZone.Act1")</code></pre><p>In order to train an AI to play Sonic the Hedgehog, you will need the game’s ROM (game file). The simplest way to get it is by purchasing the game off of <a href="https://store.steampowered.com/app/71113/Sonic_The_Hedgehog/" rel="noopener">Steam</a> for $5. You could also find free find downloads of the ROM online, however it is illegal, so don’t do this.</p><p>In the OpenAI repository at <strong>retro/retro/data/stable/</strong> you will find a folder for Sonic the Hedgehog Genesis. Place the game’s ROM here and make sure it is called rom.md. This folder also contains .state files. You can choose one and set the state parameter equal to it. I chose GreenHillZone Act 1 since it is the very first level of the game.</p><h4 id="understanding-data-json-and-scenario-json">Understanding data.json and scenario.json</h4><p>In the Sonic the Hedgehog folder you will have these two files:</p><p><strong>data.json</strong></p><pre><code class="language-json">{
"info": {
"act": {
"address": 16776721,
"type": "|u1"
},
"level_end_bonus": {
"address": 16775126,
"type": "|u1"
},
"lives": {
"address": 16776722,
"type": "|u1"
},
"rings": {
"address": 16776736,
"type": "&gt;u2"
},
"score": {
"address": 16776742,
"type": "&gt;u4"
},
"screen_x": {
"address": 16774912,
"type": "&gt;u2"
},
"screen_x_end": {
"address": 16774954,
"type": "&gt;u2"
},
"screen_y": {
"address": 16774916,
"type": "&gt;u2"
},
"x": {
"address": 16764936,
"type": "&gt;i2"
},
"y": {
"address": 16764940,
"type": "&gt;u2"
},
"zone": {
"address": 16776720,
"type": "|u1"
}
}
}</code></pre><p><strong>scenario.json</strong></p><pre><code class="language-py">{
"done": {
"variables": {
"lives": {
"op": "zero"
}
}
},
"reward": {
"variables": {
"x": {
"reward": 10.0
}
}
}
}</code></pre><p>Both these files contain important information pertaining to the game and its training.</p><p>As it sounds, the data.json file contains information/data on different game specific variables (i.e. Sonic’s x-position, number of lives he has, etc.).</p><p>The scenario.json file allows us to perform actions in sync with the values of the data variables. For example we can reward Sonic 10.0 every time his x-position increases. We could also set our done condition to true when Sonic’s lives hit 0.</p><h4 id="understanding-neat-feedforward-configuration">Understanding NEAT feedforward configuration</h4><p>The config-feedforward file can be found in my GitHub repository linked above. It acts like a settings menu to set up our training. To point out a few simple settings:</p><pre><code class="language-py">fitness_threshold     = 10000 # How fit we want Sonic to become
pop_size        = 20 # How many Sonics per generation
num_inputs      = 1120 # Number of inputs into our model
num_outputs     = 12 # 12 buttons on Genesis controller</code></pre><p>There are tons of settings you can experiment with to see how it effects your AI’s training! To learn more about NEAT and the different settings in the feedfoward configuration, I would highly recommend reading the documentation <a href="https://neat-python.readthedocs.io/en/latest/" rel="noopener">here</a></p><h4 id="putting-it-all-together-creating-the-training-file">Putting it all together: Creating the Training File</h4><p><strong>Setting up configuration</strong></p><p>Our feedforward configuration is defined and stored in the variable config.</p><pre><code class="language-py">config = neat.Config(neat.DefaultGenome, neat.DefaultReproduction, neat.DefaultSpeciesSet, neat.DefaultStagnation, 'config-feedforward')</code></pre><p><strong>Creating a function to evaluate each genome</strong></p><p>We start by creating the function, eval_genomes, which will evaluate our genomes (a genome could be compared to 1 Sonic in a population of Sonics). For each genome we reset the environment and take a random action</p><pre><code class="language-py">for genome_id, genome in genomes:
ob = env.reset()
ac = env.action_space.sample()</code></pre><p>We will also record the game environment’s length and width and color. We divide the length and width by 8.</p><pre><code class="language-py">inx, iny, inc = env.observation_space.shape
inx = int(inx/8)
iny = int(iny/8)</code></pre><p>We create a <a href="https://searchenterpriseai.techtarget.com/definition/recurrent-neural-networks" rel="noopener">recurrent neural network</a> (RNN) using the NEAT library and input the genome and our chosen configuration.</p><pre><code class="language-py">net = neat.nn.recurrent.RecurrentNetwork.create(genome, config)</code></pre><p>Finally, we define a few variables: current_max_fitness (the highest fitness in the current population), fitness_current (the current fitness of the genome), frame (the frame count), counter (to count the number of steps our agent takes), xpos (the x-position of Sonic), and done (whether or not we have reached our fitness goal).</p><pre><code class="language-py">current_max_fitness = 0
fitness_current = 0
frame = 0
counter = 0
xpos = 0
done = False</code></pre><p>While we have not reached our done requirement, we need to run the environment, increment our frame counter, and shape our observation to mimic that of the game (still for each genome).</p><pre><code class="language-py">env.render()
frame += 1
ob = cv2.resize(ob, (inx, iny))
ob = cv2.cvtColor(ob, cv2.COLOR_BGR2GRAY)
ob = np.reshape(ob, (inx,iny))</code></pre><p>We will take our observation and put it in a one-dimensional array, so that our RNN can understand it. We receive our output by feeding this array to our RNN.</p><pre><code class="language-py">imgarray = []
imgarray = np.ndarray.flatten(ob)
nnOutput = net.activate(imgarray)</code></pre><p>Using the output from the RNN our AI takes a step. From this step we can extract fresh information: a new observation, a reward, whether or not we have reached our done requirement, and information on variables in our data.json (info).</p><pre><code class="language-py">ob, rew, done, info = env.step(nnOutput)</code></pre><p>At this point we need to evaluate our genome’s fitness and whether or not it has met the done requirement.</p><p>We look at our “x” variable from data.json and check if it has surpassed the length of the level. If it has, we will increase our fitness by our fitness threshold signifying we are done.</p><pre><code class="language-py">xpos = info['x']
if xpos &gt;= 10000:
fitness_current += 10000
done = True</code></pre><p>Otherwise, we will increase our current fitness by the reward we earned from performing the step. We also check if we have a new highest fitness and adjust the value of our current_max_fitness accordingly.</p><pre><code class="language-py">fitness_current += rew
if fitness_current &gt; current_max_fitness:
current_max_fitness = fitness_current
counter = 0
else:
counter += 1</code></pre><p>Lastly, we check if we are done or if our genome has taken 250 steps. If so, we print information on the genome which was simulated. Otherwise we keep looping until one of the two requirements has been satisfied.</p><pre><code class="language-py">if done or counter == 250:
done = True
print(genome_id, fitness_current)
genome.fitness = fitness_current</code></pre><p><strong>Defining the population, printing training stats, and more</strong></p><p>The absolute last thing we need to do is define our population, print out statistics from our training, save checkpoints (in case you want to pause and resume training), and pickle our winning genome.</p><pre><code class="language-py">p = neat.Population(config)
p.add_reporter(neat.StdOutReporter(True))
stats = neat.StatisticsReporter()
p.add_reporter(stats)
p.add_reporter(neat.Checkpointer(1))
winner = p.run(eval_genomes)
with open('winner.pkl', 'wb') as output:
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
