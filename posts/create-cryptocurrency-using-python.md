---
card: "/images/default.jpg"
tags: [Cryptocurrency]
description: "Essentially, a blockchain is a public database that irreversi"
author: "Milad E. Fahmy"
title: "How to Create Your Own Cryptocurrency Using Python"
created: "2021-08-16T15:38:27+02:00"
modified: "2021-08-16T15:38:27+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-cryptocurrency tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create Your Own Cryptocurrency Using Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/10/blockchain-3448502_1920-2.jpg 300w,
/news/content/images/size/w600/2019/10/blockchain-3448502_1920-2.jpg 600w,
/news/content/images/size/w1000/2019/10/blockchain-3448502_1920-2.jpg 1000w,
/news/content/images/size/w2000/2019/10/blockchain-3448502_1920-2.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/10/blockchain-3448502_1920-2.jpg" alt="How to Create Your Own Cryptocurrency Using Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<blockquote>With the current rise of cryptocurrencies, blockchain is creating a buzz in the technology world. This technology has attracted so much attention mainly because of its ability to guarantee security, enforce decentralization, and quicken processes to several industries—especially to the financial industry.</blockquote><p>Essentially, a blockchain is a public database that irreversibly documents and authenticates the possession and transmission of digital assets. Digital currencies, like Bitcoin and Ethereum, are based on this concept. Blockchain is an exciting technology that you can use to transform the capabilities of your applications.</p><p>Of late, we’ve been seeing governments, organizations, and individuals using the blockchain technology to create their own cryptocurrencies—and avoid being left behind. Notably, when Facebook proposed its own cryptocurrency, called <a href="https://libra.org/en-US/white-paper/#introduction">Libra</a>, the announcement stirred many waters across the world.</p><p>What if you could also follow suit and create your own version of a cryptocurrency?</p><p>I thought about this and decided to develop an algorithm that creates a crypto.</p><p>I decided to call the cryptocurrency <strong>fccCoin</strong>.</p><p>In this tutorial, I’m going to illustrate the step-by-step process I used to build the digital currency (I used the object-oriented concepts of the <a href="/news/best-python-tutorial/">Python </a>programming language).</p><p>Here is the basic blueprint of the blockchain algorithm for creating the <strong>fccCoin</strong>:</p><pre><code class="language-python">class Block:
def __init__():
#first block class
pass
def calculate_hash():
#calculates the cryptographic hash of every block
class BlockChain:
def __init__(self):
# constructor method
pass
def construct_genesis(self):
# constructs the initial block
pass
def construct_block(self, proof_no, prev_hash):
# constructs a new block and adds it to the chain
pass
@staticmethod
def check_validity():
# checks whether the blockchain is valid
pass
def new_data(self, sender, recipient, quantity):
# adds a new transaction to the data of the transactions
pass
@staticmethod
def construct_proof_of_work(prev_proof):
# protects the blockchain from attack
pass
@property
def last_block(self):
# returns the last block in the chain
return self.chain[-1]
</code></pre><p>Now, let me explain what is taking place…</p><h2 id="1-building-the-first-block-class">1. Building the first Block class</h2><p>A blockchain comprises of several blocks that are joined to each other (that sounds familiar, right?).</p><p>The chaining of blocks takes place such that if one block is tampered with, the rest of the chain becomes invalid.</p><p>In applying the above concept, I created the following initial block class:</p><pre><code class="language-python">import hashlib
import time
class Block:
def __init__(self, index, proof_no, prev_hash, data, timestamp=None):
self.index = index
self.proof_no = proof_no
self.prev_hash = prev_hash
self.data = data
self.timestamp = timestamp or time.time()
@property
def calculate_hash(self):
block_of_string = "{}{}{}{}{}".format(self.index, self.proof_no,
self.prev_hash, self.data,
self.timestamp)
return hashlib.sha256(block_of_string.encode()).hexdigest()
def __repr__(self):
return "{} - {} - {} - {} - {}".format(self.index, self.proof_no,
self.prev_hash, self.data,
self.timestamp)
</code></pre><p><br>As you can see from the code above, I defined the <strong>__init__()</strong> function, which will be executed when the <strong>Block</strong> class is being initiated, just like in any other Python class.</p><p>I provided the following parameters to the initiation function:</p><ul><li><strong>self</strong>—this refers to the instance of the <strong>Block</strong> class, making it possible to access the methods and attributes associated with the class;</li><li><strong>index</strong>—this keeps track of the position of the block within the blockchain;</li><li><strong>proof_no</strong>—this is the number produced during the creation of a new block (called mining);</li><li><strong>prev_hash</strong>—this refers to the hash of the previous block within the chain;</li><li><strong>data</strong>—this gives a record of all transactions completed, such as the quantity bought;</li><li><strong>timestamp</strong>—this places a timestamp for the transactions.</li></ul><p>The second method in the class, <strong>calculate_hash</strong>, will generate the hash of the blocks using the above values. The SHA-256 module is imported into the project to assist in obtaining the hashes of the blocks.<br></p><p>After the values have been inputted into the cryptographic hash algorithm, the function will return a 256-bit string representing the contents of the block.<br></p><p>This is how security is achieved in blockchains—every block will have a hash and that hash will rely on the hash of the previous block. </p><p>As such, if someone tries to compromise any block in the chain, the other blocks will have invalid hashes, leading to disruption of the entire blockchain network.<br></p><p>Ultimately, a block will look like this:</p><pre><code class="language-python">{
"index": 2,
"proof": 21,
"prev_hash": "6e27587e8a27d6fe376d4fd9b4edc96c8890346579e5cbf558252b24a8257823",
"transactions": [
{'sender': '0', 'recipient': 'Quincy Larson', 'quantity': 1}
],
"timestamp": 1521646442.4096143
}
</code></pre><h2 id="2-building-the-blockchain-class">2. Building the Blockchain class</h2><p>The main idea of a blockchain, just as the name implies, involves “chaining” several blocks to one another. </p><p>Therefore, I’m going to construct a <strong>Blockchain</strong> class that will be useful in managing the workings of the whole chain. This is where most of the action is going to take place.</p><p>The <strong>Blockchain</strong> class will have various helper methods for completing various tasks in the blockchain.</p><p>Let me explain the role of each of the methods in the class.</p><h3 id="a-constructor-method">a. Constructor method<br></h3><p>This method ensures the blockchain is instantiated.</p><pre><code class="language-python">class BlockChain:
def __init__(self):
self.chain = []
self.current_data = []
self.nodes = set()
self.construct_genesis()
</code></pre><p><br>Here are the roles of its attributes:<br></p><ul><li><strong>self.chain</strong>—this variable keeps all blocks;</li><li><strong>self.current_data</strong>—this variable keeps all the completed transactions in the block;</li><li><strong>self.construct_genesis()</strong>—this method will take care of constructing the initial block.</li></ul><h3 id="b-constructing-the-genesis-block">b. Constructing the genesis block<br></h3><p>The blockchain requires a <em><strong>construct_genesis</strong></em> method to build the initial block in the chain. In the blockchain convention, this block is special because it symbolizes the start of the blockchain.<br></p><p>In this case, let’s construct it by simply passing some default values to the <em><strong>construct_block</strong></em> method.</p><p>I gave both <em><strong>proof_no</strong></em> and <em><strong>prev_hash</strong></em> a value of zero, although you can provide any value you want.<br></p><pre><code class="language-python">def construct_genesis(self):
self.construct_block(proof_no=0, prev_hash=0)
def construct_block(self, proof_no, prev_hash):
block = Block(
index=len(self.chain),
proof_no=proof_no,
prev_hash=prev_hash,
data=self.current_data)
self.current_data = []
self.chain.append(block)
return block
</code></pre><h3 id="c-constructing-new-blocks"><br>c. Constructing new blocks</h3><p><br>The <strong><em>construct_block</em> </strong>method is used for creating new blocks in the blockchain.</p><p>Here is what is taking place with the various attributes of this method:<br></p><ul><li><strong>index</strong>—this represents the length of the blockchain;</li><li><strong>proof_nor &amp; prev_hash</strong>—the caller method passes them;</li><li><strong>data</strong>—this contains a record of all the transactions that are not included in any block on the node;</li><li><strong>self.current_data</strong>—this is used to reset the transaction list on the node. If a block has been constructed and the transactions allocated to it, the list is reset to ensure that future transactions are added into this list. And, this process will take place continuously;</li><li><strong>self.chain.append()—</strong>this method joins newly constructed blocks to the chain;</li><li><strong>return</strong>—lastly, a constructed block object is returned.<br></li></ul><h3 id="d-checking-validity">d. Checking validity</h3><p><br>The <em><strong>check_validity</strong></em> method is important in assessing the integrity of the blockchain and ensuring anomalies are absent.<br></p><p>As mentioned earlier, hashes are essential for the security of the blockchain as even the slightest change in the object will lead to the generation of a completely new hash.<br></p><p>Therefore, this <strong><em>check_validity</em> </strong>method uses <em><strong>if</strong></em> statements to check whether the hash of every block is correct.<br></p><p>It also verifies if every block points to the right previous block, through comparing the value of their hashes. If everything is correct, it returns true; otherwise, it returns false.<br></p><pre><code class="language-python">@staticmethod
def check_validity(block, prev_block):
if prev_block.index + 1 != block.index:
return False
elif prev_block.calculate_hash != block.prev_hash:
return False
elif not BlockChain.verifying_proof(block.proof_no, prev_block.proof_no):
return False
elif block.timestamp &lt;= prev_block.timestamp:
return False
return True
</code></pre><h3 id="e-adding-data-of-transactions">e. Adding data of transactions</h3><p><br>The <em><strong>new_data</strong></em> method is used for adding the data of transactions to a block. It’s a very simple method: it accepts three parameters (sender’s details, receiver’s details, and quantity) and append the transaction data to <em><strong>self.current_data</strong></em> list.<br></p><p>Anytime a new block is created, this list is allocated to that block and reset once more as explained in the <em><strong>construct_block</strong></em> method.<br></p><p>Once the transaction data has been added to the list, the index of the next block to be created is returned.<br></p><p>This index is calculated by adding 1 to the index of the current block (which is the last in the blockchain). The data will assist a user in submitting the transaction in future.</p><pre><code class="language-python">def new_data(self, sender, recipient, quantity):
self.current_data.append({
'sender': sender,
'recipient': recipient,
'quantity': quantity
})
return True
</code></pre><h3 id="f-adding-proof-of-work"><br>f. Adding proof of work</h3><p><br><a href="https://en.bitcoin.it/wiki/Proof_of_work">Proof of work</a> is a concept that prevents the blockchain from abuse. Simply, its objective is to identify a number that solves a problem after a certain amount of computing work is done.</p><p>If the difficulty level of identifying the number is high, it discourages spamming and tampering with the blockchain.</p><p>In this case, we’ll use a simple algorithm that discourages people from mining blocks or creating blocks easily.</p><pre><code class="language-python">@staticmethod
def proof_of_work(last_proof):
'''this simple algorithm identifies a number f' such that hash(ff') contain 4 leading zeroes
f is the previous f'
f' is the new proof
'''
proof_no = 0
while BlockChain.verifying_proof(proof_no, last_proof) is False:
proof_no += 1
return proof_no
@staticmethod
def verifying_proof(last_proof, proof):
#verifying the proof: does hash(last_proof, proof) contain 4 leading zeroes?
guess = f'{last_proof}{proof}'.encode()
guess_hash = hashlib.sha256(guess).hexdigest()
return guess_hash[:4] == "0000"
</code></pre><h3 id="g-getting-the-last-block">g. Getting the last block</h3><p><br>Lastly, the <strong><em>latest_block</em> </strong>method is a helper method that assists in obtaining the last block in the blockchain. Remember that the last block is actually the current block in the chain.</p><pre><code class="language-python">@property
def latest_block(self):
return self.chain[-1]
</code></pre><h2 id="let-s-sum-everything-together">Let’s sum everything together</h2><p><br>Here is the entire code for creating the <strong>fccCoin</strong> cryptocurrency.</p><p>You can also get the code on <a href="https://github.com/Alfrick/Create-Cryptocurrency-in-Python">this GitHub repository.</a></p><pre><code class="language-python">import hashlib
import time
class Block:
def __init__(self, index, proof_no, prev_hash, data, timestamp=None):
self.index = index
self.proof_no = proof_no
self.prev_hash = prev_hash
self.data = data
self.timestamp = timestamp or time.time()
@property
def calculate_hash(self):
block_of_string = "{}{}{}{}{}".format(self.index, self.proof_no,
self.prev_hash, self.data,
self.timestamp)
return hashlib.sha256(block_of_string.encode()).hexdigest()
def __repr__(self):
return "{} - {} - {} - {} - {}".format(self.index, self.proof_no,
self.prev_hash, self.data,
self.timestamp)
class BlockChain:
def __init__(self):
self.chain = []
self.current_data = []
self.nodes = set()
self.construct_genesis()
def construct_genesis(self):
self.construct_block(proof_no=0, prev_hash=0)
def construct_block(self, proof_no, prev_hash):
block = Block(
index=len(self.chain),
proof_no=proof_no,
prev_hash=prev_hash,
data=self.current_data)
self.current_data = []
self.chain.append(block)
return block
@staticmethod
def check_validity(block, prev_block):
if prev_block.index + 1 != block.index:
return False
elif prev_block.calculate_hash != block.prev_hash:
return False
elif not BlockChain.verifying_proof(block.proof_no,
prev_block.proof_no):
return False
elif block.timestamp &lt;= prev_block.timestamp:
return False
return True
def new_data(self, sender, recipient, quantity):
self.current_data.append({
'sender': sender,
'recipient': recipient,
'quantity': quantity
})
return True
@staticmethod
def proof_of_work(last_proof):
'''this simple algorithm identifies a number f' such that hash(ff') contain 4 leading zeroes
f is the previous f'
f' is the new proof
'''
proof_no = 0
while BlockChain.verifying_proof(proof_no, last_proof) is False:
proof_no += 1
return proof_no
@staticmethod
def verifying_proof(last_proof, proof):
#verifying the proof: does hash(last_proof, proof) contain 4 leading zeroes?
guess = f'{last_proof}{proof}'.encode()
guess_hash = hashlib.sha256(guess).hexdigest()
return guess_hash[:4] == "0000"
@property
def latest_block(self):
return self.chain[-1]
def block_mining(self, details_miner):
self.new_data(
sender="0",  #it implies that this node has created a new block
receiver=details_miner,
quantity=
1,  #creating a new block (or identifying the proof number) is awarded with 1
)
last_block = self.latest_block
last_proof_no = last_block.proof_no
proof_no = self.proof_of_work(last_proof_no)
last_hash = last_block.calculate_hash
block = self.construct_block(proof_no, last_hash)
return vars(block)
def create_node(self, address):
self.nodes.add(address)
return True
@staticmethod
def obtain_block_object(block_data):
#obtains block object from the block data
return Block(
block_data['index'],
block_data['proof_no'],
block_data['prev_hash'],
block_data['data'],
timestamp=block_data['timestamp'])
</code></pre><p><br>Now, let’s test our code to see if it works.</p><pre><code class="language-python">blockchain = BlockChain()
print("***Mining fccCoin about to start***")
print(blockchain.chain)
last_block = blockchain.latest_block
last_proof_no = last_block.proof_no
proof_no = blockchain.proof_of_work(last_proof_no)
blockchain.new_data(
sender="0",  #it implies that this node has created a new block
recipient="Quincy Larson",  #let's send Quincy some coins!
quantity=
1,  #creating a new block (or identifying the proof number) is awarded with 1
)
last_hash = last_block.calculate_hash
block = blockchain.construct_block(proof_no, last_hash)
print("***Mining fccCoin has been successful***")
print(blockchain.chain)
</code></pre><p><br>It worked!</p><p>Here is the output of the mining process:</p><pre><code class="language-python">***Mining fccCoin about to start***
[0 - 0 - 0 - [] - 1566930640.2707076]
***Mining fccCoin has been successful***
[0 - 0 - 0 - [] - 1566930640.2707076, 1 - 88914 - a8d45cb77cddeac750a9439d629f394da442672e56edfe05827b5e41f4ba0138 - [{'sender': '0', 'recipient': 'Quincy Larson', 'quantity': 1}] - 1566930640.5363243]
</code></pre><h2 id="conclusion"><br>Conclusion</h2><p><br>There you have it!</p><p>That’s how you could create your own blockchain using Python.</p><p>Let me say that this tutorial just demonstrates the basic concepts for getting your feet wet in the innovative blockchain technology.</p><p>If <strong>this coin</strong> were deployed as-is, it could not meet the present market demands for a stable, secure, and easy-to-use cryptocurrency.</p><p>Therefore, it can still be improved by adding additional features to enhance its capabilities for mining and sending <a href="https://www.forextradingbig.com/">financial transactions</a>.</p><p>Nonetheless, it’s a good starting point if you decide to make your name known in the amazing world of cryptos.</p><p>If you have any comments or questions, please post them below.</p><p>Happy (crypto) coding!</p>
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
