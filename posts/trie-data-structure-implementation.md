---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9cc2740569d1a4ca3403.jpg"
tags: [Data Structures]
description: "The word trie is an inflix of the word “retrieval”, because t"
author: "Milad E. Fahmy"
title: "Trie Data Structure Implementation"
created: "2021-08-16T15:37:18+02:00"
modified: "2021-08-16T15:37:18+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-data-structures tag-python tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">Trie Data Structure Implementation</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9cc2740569d1a4ca3403.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9cc2740569d1a4ca3403.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9cc2740569d1a4ca3403.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9cc2740569d1a4ca3403.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9cc2740569d1a4ca3403.jpg" alt="Trie Data Structure Implementation">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
class TrieNode:
def __init__(self):
self.edges = [None]*(ALPHABET_SIZE) # Each index respective to each character.
self.meaning = None # Meaning of the word.
self.ends_here = False # Tells us if the word ends here.</code></pre><p>As you can see, edges are 26 in length, each index referring to each character in the alphabet. ‘A’ corresponds to 0, ‘B’ to 1, ‘C’ to 2 … ‘Z’ to the 25th index. If the character you are looking for is pointing to <code>None</code>, that implies the word is not there in the trie.</p><p>A typical Trie should implement at least these two functions:</p><ul><li><code>add_word(word,meaning)</code></li><li><code>search_word(word)</code></li><li><code>delete_word(word)</code></li></ul><p>Additionally, one can also add something like</p><ul><li><code>get_all_words()</code></li><li><code>get_all_words_with_prefix(prefix)</code></li></ul><h2 id="adding-word-to-the-trie">Adding Word to the trie</h2><pre><code class="language-text">	def add_word(self,word,meaning):
if len(word)==0:
self.ends_here = True # Because we have reached the end of the word
self.meaning = meaning # Adding the meaning to that node
return
ch = word[0] # First character
# ASCII value of the first character (minus) the ASCII value of 'a'-&gt; the first character of our ALPHABET gives us the index of the edge we have to look up.
index = ord(ch) - ord('a')
if self.edges[index] == None:
# This implies that there's no prefix with this character yet.
new_node = TrieNode()
self.edges[index] = new_node
self.edges[index].add(word[1:],meaning) #Adding the remaining word</code></pre><h2 id="retrieving-data">Retrieving data</h2><pre><code class="language-text">	def search_word(self,word):
if len(word)==0:
if self.ends_here:
return True
else:
return "Word doesn't exist in the Trie"
ch = word[0]
index = ord(ch)-ord('a')
if self.edge[index]== None:
return False
else:
return self.edge[index].search_word(word[1:])</code></pre><p>The <code>search_word</code> function will tell us if the word exists in the Trie or not. Since ours is a dictionary, we need to fetch the meaning as well, now lets declare a function to do that.</p><pre><code class="language-text">	def get_meaning(self,word):
if len(word)==0 :
if self.ends_here:
return self.meaning
else:
return "Word doesn't exist in the Trie"
ch = word[0]
index = ord(ch) - ord('a')
if self.edges[index] == None:
return "Word doesn't exist in the Trie"
else:
return self.edges[index].get_meaning(word[1:])</code></pre><h2 id="deleting-data">Deleting data</h2><p>By deleting data, you just need to change the variable <code>ends_here</code> to <code>False</code>. Doing that doesn’t alter the prefixes, but stills deletes the meaning and the existence of the word from the trie.</p><pre><code class="language-text">	def delete_word(self,word):
if len(word)==0:
if self.ends_here:
self.ends_here = False
self.meaning = None
return "Deleted"
else:
return "Word doesn't exist in the Trie"
ch = word[0]
index = ord(ch) - ord('a')
if self.edges[index] == None:
return "Word doesn't exist in the Trie"
else:
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
