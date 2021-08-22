---
card: "https://cdn-media-1.freecodecamp.org/images/1*qrVfVF1nIjVO7ZvGs6q4UQ.jpeg"
tags: [Blockchain]
description: "Scalachain is a blockchain built using the Scala programming "
author: "Milad E. Fahmy"
title: "How to build a simple actor-based blockchain"
created: "2021-08-16T11:35:39+02:00"
modified: "2021-08-16T11:35:39+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-blockchain tag-scala tag-functional-programming tag-tech tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a simple actor-based blockchain</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*qrVfVF1nIjVO7ZvGs6q4UQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*qrVfVF1nIjVO7ZvGs6q4UQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*qrVfVF1nIjVO7ZvGs6q4UQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*qrVfVF1nIjVO7ZvGs6q4UQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*qrVfVF1nIjVO7ZvGs6q4UQ.jpeg" alt="How to build a simple actor-based blockchain">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
sealed trait Chain {
val index: Int
val hash: String
val values: List[Transaction]
val proof: Long
val timestamp: Long
}
</code></pre><p>We start by creating a <code>sealed trait </code>that represents the block of our chain. The <code>Chain </code>can have two types: it can be an <code>EmptyChain </code>or a <code>ChainLink</code>. The former is our block zero (the <em>genesis block</em>), and it is implemented as a singleton (it is a <code>case object</code>), while the latter is a regular mined block.</p><pre><code class="language-scala">case class ChainLink(index: Int, proof: Long, values: List[Transaction], previousHash: String = "", tail: Chain = EmptyChain, timestamp: Long = System.currentTimeMillis()) extends Chain {
val hash = Crypto.sha256Hash(this.toJson.toString)
}
case object EmptyChain extends Chain {
val index = 0
val hash = "1"
val values = Nil
val proof = 100L
val timestamp = System.currentTimeMillis()
}</code></pre><p>Let’s look more in detail at our chain. It provides an index, that is the current height of the blockchain. There is the list of <code>Transaction</code>, the proof that validated the block, and the timestamp of the block creation. The hash value is set to a default one in the <code>EmptyChain</code>, while in the <code>ChainLink</code> it is computed converting the object to its <code>JSON</code> representation and hashing it with an utility function (see the <code>crypto </code>package in the <a href="https://github.com/elleFlorio/scalachain" rel="noopener">repository</a>). The <code>ChainLink</code> provides also the hash of the previous block in the chain (our link between blocks). The tail field is a reference to the previously mined blocks. This may not be the most efficient solution, but it is useful to see how the blockchain grows in our simplified implementation.</p><p>We can improve our <code>Chain</code> with some utilities. We can add it a <em>companion object </em>that defines an <code>apply</code> method to create a new chain passing it a list of blocks. A companion object is like a “set of static methods” — doing an analogy with Java — that has complete access rights on the fields and methods of the class/trait.</p><pre><code class="language-scala">object Chain {
def apply[T](b: Chain*): Chain = {
if (b.isEmpty) EmptyChain
else {
val link = b.head.asInstanceOf[ChainLink]
ChainLink(link.index, link.proof, link.values, link.previousHash, apply(b.tail: _*))
}
}
}</code></pre><p>If the list of blocks is empty, we simply initialize our blockchain with an <code>EmptyChain</code>. Otherwise we create a new <code>ChainLink</code> adding as a tail the result of the apply method on the remaining blocks of the list. In this way the list of blocks is added following the order of the list.</p><p>It would be nice to have the possibility to add a new block to our chain using a simple addition operator, like the one we have on <code>List</code>. We can define our own addition operator <code>::</code> inside the <code>Chain</code> trait.</p><pre><code class="language-scala">sealed trait Chain {
val index: Int
val hash: String
val values: List[Transaction]
val proof: Long
val timestamp: Long
def ::(link: Chain): Chain = link match {
case l:ChainLink =&gt; ChainLink(l.index, l.proof, l.values, this.hash, this)
case _ =&gt; throw new InvalidParameterException("Cannot add invalid link to chain")
}
}</code></pre><p>We pattern match on the block that is passed as an argument: if it is a valid <code>ChainLink</code> object we add it as the head of our chain, putting the chain as the tail of the new block, otherwise we throw an exception.</p><p><strong>PoW</strong></p><p>The PoW algorithm is fundamental for the mining of new blocks. We implement it as a simple algorithm:</p><ol><li>Take the hash of the last block and a number representing the proof.</li></ol><p>2. Concatenate the hash and the proof in a string.</p><p>3. hash the resulting string using the <code>SHA-256</code> algorithm.</p><p>4. check the 4 leading characters of the hash: if they are four zeros return the proof.</p><p>5. otherwise repeat the algorithm increasing the proof by one.</p><p>This a simplification of the <a href="https://en.wikipedia.org/wiki/Hashcash" rel="noopener">HashCash</a> algorithm used in the Bitcoin blockchain.</p><p>Since it is a recursive function, we can implement it as a tail recursive one to improve the usage of resources.</p><pre><code class="language-scala">object ProofOfWork {
def proofOfWork(lastHash: String): Long = {
@tailrec
def powHelper(lastHash: String, proof: Long): Long = {
if (validProof(lastHash, proof))
proof
else
powHelper(lastHash, proof + 1)
}
val proof = 0
powHelper(lastHash, proof)
}
def validProof(lastHash: String, proof: Long): Boolean = {
val guess = (lastHash ++ proof.toString).toJson.toString
val guessHash = Crypto.sha256Hash(guess)
(guessHash take 4) == "0000"
}
object Broker {
sealed trait BrokerMessage
case class AddTransaction(transaction: Transaction) extends BrokerMessage
case object GetTransactions extends BrokerMessage
case object Clear extends BrokerMessage
val props: Props = Props(new Broker)
}</code></pre><p>We create a trait <code>BrokerMessage</code> to identify the messages of the Broker Actor. Every other message will extend this trait. <code>AddTransaction</code> adds a new transaction to the list of pending ones. <code>GetTransaction</code> retrieve the pending transactions, and <code>Clear</code> empties the list. The <code>props</code> value is used to initialize the actor when it will be created.</p><pre><code class="language-scala">class Broker extends Actor with ActorLogging {
import Broker._
var pending: List[Transaction] = List()
override def receive: Receive = {
case AddTransaction(transaction) =&gt; {
pending = transaction :: pending
log.info(s"Added $transaction to pending Transaction")
}
case GetTransactions =&gt; {
log.info(s"Getting pending transactions")
sender() ! pending
}
case Clear =&gt; {
pending = List()
log.info("Clear pending transaction List")
}
}
}</code></pre><p>The Broker <code>class</code> contains the business logic to react to the different messages. I won’t go into the details because it is trivial. The most interesting thing is how we respond to a request of the pending transactions. We send them to the <code>sender()</code> of the <code>GetTransaction</code> message using the <code>tell</code> (<code>!</code>) operator. This operator means “send the message and don’t wait for a response” — aka fire-and-forget.</p><h4 id="miner-an-actor-with-different-states">Miner, an actor with different states</h4><p>The Miner Actor is the one mining new blocks for our blockchain. Since we don’t want mine a new block while we are mining another one, the Miner Actor will have two states: <code>ready</code>, when it is ready to mine a new block, and <code>busy</code>, when it is mining a block.</p><p>Let’s start by defining the <code>companion object</code> with the messages of the Miner Actor. The pattern is the same, with a sealed trait — <code>MinerMessage</code> — used to define the kind of messages this actor reacts to.</p><pre><code class="language-scala">object Miner {
sealed trait MinerMessage
case class Validate(hash: String, proof: Long) extends MinerMessage
case class Mine(hash: String) extends MinerMessage
case object Ready extends MinerMessage
val props: Props = Props(new Miner)
}</code></pre><p>The <code>Validate</code> message asks for a validation of a proof, and pass to the Miner the hash and the proof to check. Since this component is the one interacting with the PoW algorithm, it is its duty to execute this check. The <code>Mine</code> message asks for the mining starting from a specified hash. The last message, <code>Ready</code>, triggers a state transition.</p><p><strong>Same actor, different states</strong></p><p>The peculiarity of this actor is that it reacts to the messages according to its state: <code>busy</code> or <code>ready</code>. Let’s analyze the difference in the behavior:</p><ul><li><strong>busy</strong>: the Miner is busy mining a block. If a new mining request comes, it should deny it. If it is requested to be ready, the Miner should change its state to the ready one.</li><li><strong>ready</strong>: the Miner is idle. If a mining request come, it should start mining a new block. If it is requested to be ready, it should say: “OK, I’m ready!”</li><li><strong>both</strong>: the Miner should be always available to verify the correctness of a proof, both in a ready or busy state.</li></ul><p>Time so see how we can implement this logic in our code. We start by defining the common behavior, the validation of a proof.</p><p>We define a function <code>validate</code> that reacts to the <code>Validate</code> message: if the proof is valid we respond to the sender with a success, otherwise with a failure. The <code>ready</code> and the <code>busy</code> states are defined as functions that “extends” the <code>validate</code> one, since that is a behavior we want in both states.</p><pre><code class="language-scala">def validate: Receive = {
case Validate(hash, proof) =&gt; {
log.info(s"Validating proof $proof")
if (ProofOfWork.validProof(hash, proof)){
log.info("proof is valid!")
sender() ! Success
}
else{
log.info("proof is not valid")
sender() ! Failure(new InvalidProofException(hash, proof))
}
}
}</code></pre><p>A couple of things to highlight here.</p><p>1. The state transition is triggered using the <code>become</code> function, provided by the Akka Framework. This takes as an argument a function that returns a <code>Receive</code> object, like the ones we defined for the <code>validation</code>, <code>busy</code>, and <code>ready</code> state.</p><p>2. When a mining request is received by the Miner, it responds with a <code>Future</code> containing the execution of the PoW algorithm. In this way we can work asynchronously, making the Miner free to do other tasks, such as the validation one.</p><p>3. The <strong>supervisor</strong> of this Actor controls the state transition. The reason of this choice is that the Miner is agnostic about the state of the system. It doesn’t know when the mining computation in the <code>Future</code> will be completed, and it can’t know if the block that it is mining has been already mined from another node. This would require to stop mining the current hash, and start mining the hash of the new block.</p><p>The last thing is to provide an initial state overriding the <code>receive</code> function.</p><pre><code class="language-scala">override def receive: Receive = {
case Ready =&gt; become(ready)
}</code></pre><p>We start waiting for a <code>Ready</code> message. When it comes, we start our Miner.</p><h4 id="blockchain-a-persistent-actor">Blockchain, a persistent actor</h4><p>The Blockchain Actor interacts with the business logic of the blockchain. It can add a new block to the blockchain, and it can retrieve information about the state of the blockchain. This actor has another superpower: it can <strong>persist</strong> and recover the state of the blockchain. This is possible implementing the <code>PersistentActor</code> trait provided by the Akka Framework.</p><pre><code class="language-scala">object Blockchain {
sealed trait BlockchainEvent
case class AddBlockEvent(transactions: List[Transaction], proof: Long) extends BlockchainEvent
sealed trait BlockchainCommand
case class AddBlockCommand(transactions: List[Transaction], proof: Long) extends BlockchainCommand
case object GetChain extends BlockchainCommand
case object GetLastHash extends BlockchainCommand
case object GetLastIndex extends BlockchainCommand
case class State(chain: Chain)
def props(chain: Chain, nodeId: String): Props = Props(new Blockchain(chain, nodeId))
}
view raw</code></pre><p>We can see that the <code>companion object</code> of this actor has more elements than the other ones. The <code>State</code> class is where we store the state of our blockchain, that is its <code>Chain</code>. The idea is to update the state every time a new block is created.</p><p>For this purpose, there are two different traits: <code>BlockchainEvent</code> and <code>BlockchainCommand</code>. The former is to handle the events that will trigger the persistence logic, the latter is used to send direct commands to the actor. The <code>AddBlockEvent</code> message is the event that will update our state. The <code>AddBlockCommand</code>, <code>GetChain</code>, <code>GetLastHash</code>, and <code>LastIndex</code> commands are the one used to interact with the underlying blockchain.</p><p>The usual <code>props</code> function initializes the Blockchain Actor with the initial <code>Chain</code> and the <code>nodeId</code> of the Scalachain node.</p><pre><code class="language-scala">class Blockchain(chain: Chain, nodeId: String) extends PersistentActor with ActorLogging{
import Blockchain._
var state = State(chain)
override def persistenceId: String = s"chainer-$nodeId"
//Code...
}</code></pre><p>The Blockchain Actor extends the trait <code>PersistentActor</code> provided by the Akka framework. In this way we have out-of-the-box all the logic required to persist and recover our state.</p><p>We initialize the state using the <code>Chain</code> provided as an argument upon creation. The <code>nodeId</code> is part of the <code>persistenceId</code> that we override. The persistence logic will use it to identify the persisted state. Since we can have multiple Scalachain nodes running in the same machine, we need this value to correctly persist and recover the state of each node.</p><pre><code class="language-scala">def updateState(event: BlockchainEvent) = event match {
case AddBlockEvent(transactions, proof) =&gt;
{
state = State(ChainLink(state.chain.index + 1, proof, transactions) :: state.chain)
log.info(s"Added block ${state.chain.index} containing ${transactions.size} transactions")
}
}</code></pre><p>The <code>updateState</code> function executes the update of the Actor state when the <code>AddBlockEvent</code> is received.</p><pre><code class="language-scala">override def receiveRecover: Receive = {
case SnapshotOffer(metadata, snapshot: State) =&gt; {
log.info(s"Recovering from snapshot ${metadata.sequenceNr} at block ${snapshot.chain.index}")
state = snapshot
}
case RecoveryCompleted =&gt; log.info("Recovery completed")
case evt: AddBlockEvent =&gt; updateState(evt)
}</code></pre><p>The <code>receiveRecover</code> function reacts to the recovery messages sent by the persistence logic. During the creation of an actor a persisted state (<strong>snapshot</strong>) may be offered to it using the <code>SnapshotOffer</code> message. In this case the current state becomes the one provided by the snapshot.</p><p><code>RecoveryCompleted</code> message informs us that the recovery process completed successfully. The <code>AddBlockEvent</code> triggers the <code>updateState</code> function passing the event itself.</p><pre><code class="language-scala">override def receiveCommand: Receive = {
case SaveSnapshotSuccess(metadata) =&gt; log.info(s"Snapshot ${metadata.sequenceNr} saved successfully")
case SaveSnapshotFailure(metadata, reason) =&gt; log.error(s"Error saving snapshot ${metadata.sequenceNr}: ${reason.getMessage}")
case AddBlockCommand(transactions : List[Transaction], proof: Long) =&gt; {
persist(AddBlockEvent(transactions, proof)) {event =&gt;
updateState(event)
}
// This is a workaround to wait until the state is persisted
deferAsync(Nil) { _ =&gt;
saveSnapshot(state)
sender() ! state.chain.index
}
}
case AddBlockCommand(_, _) =&gt; log.error("invalid add block command")
case GetChain =&gt; sender() ! state.chain
case GetLastHash =&gt; sender() ! state.chain.hash
case GetLastIndex =&gt; sender() ! state.chain.index
}</code></pre><p>The <code>receiveCommand</code> function is used to react to the direct commands sent to the actor. Let’s skip the <code>GetChain</code>, <code>GetLastHash</code>, and <code>GetLastIndex</code> commands, since they are trivial. The <code>AddBlockCommand</code> is the interesting part: it creates and fires an <code>AddBlock</code> event, that is persisted in the event journal of the Actor. In this way events can be replayed in case of recovery.</p><p>The <code>deferAsync</code> function waits until the state is updated after the processing of the event. Once the event has been executed the actor can save the snapshot of the state, and inform the sender of the message with the updated last index of the <code>Chain</code>. The <code>SaveSnapshotSucces</code> and <code>SaveSnapshotFailure</code> messages helps us to keep track of possible failures.</p><h4 id="node-an-actor-to-rule-them-all">Node, an actor to rule them all</h4><p>The Node Actor is the backbone of our Scalachain node. It is the<strong> supervisor</strong> of all the other actors (Broker, Miner, and Blockchain), and the one communicating with the outside world through the REST API.</p><pre><code class="language-scala">object Node {
sealed trait NodeMessage
case class AddTransaction(transaction: Transaction) extends NodeMessage
case class CheckPowSolution(solution: Long) extends NodeMessage
case class AddBlock(proof: Long) extends NodeMessage
case object GetTransactions extends NodeMessage
case object Mine extends NodeMessage
case object StopMining extends NodeMessage
case object GetStatus extends NodeMessage
case object GetLastBlockIndex extends NodeMessage
case object GetLastBlockHash extends NodeMessage
def props(nodeId: String): Props = Props(new Node(nodeId))
def createCoinbaseTransaction(nodeId: String) = Transaction("coinbase", nodeId, 100)
}</code></pre><p>The Node Actor has to handle all the high level messages that coming from the REST API. This is the reason why we find in the <code>companion object</code> more or less the same messages we implemented in the children actors. The props function takes a nodeId as an argument to create our Node Actor. This will be the one used for the initialization of Blockchain Actor. The <code>createCoinbaseTransaction</code> simply creates a transaction assigning a predefined coin amount to the node itself. This will be the <strong>reward</strong> for the successful mining of a new block of the blockchain.</p><pre><code class="language-scala">class Node(nodeId: String) extends Actor with ActorLogging {
import Node._
implicit lazy val timeout = Timeout(5.seconds)
val broker = context.actorOf(Broker.props)
val miner = context.actorOf(Miner.props)
val blockchain = context.actorOf(Blockchain.props(EmptyChain, nodeId))
miner ! Ready
//Code...
}</code></pre><p>Let’s look at the initialization of the Node Actor. The timeout value is used by the <code>ask</code> (<code>?</code>) operator (this will be explained shortly). All our actors are created in the actor <code>context</code>, using the <code>props</code> function we defined in each actor.</p><p>The Blockchain Actor is initialized with the <code>EmptyChain</code> and the <code>nodeId</code> of the Node. Once everything is created, we inform the Miner Actor to be ready to mine sending it a <code>Ready</code> message. Ok, we are now ready to receive some message and react to it.</p><pre><code class="language-scala">override def receive: Receive = {
case AddTransaction(transaction) =&gt; {
//Code...
}
case CheckPowSolution(solution) =&gt; {
//Code...
}
case AddBlock(proof) =&gt; {
//Code...
}
case Mine =&gt; {
//Code...
}
case GetTransactions =&gt; broker forward Broker.GetTransactions
case GetStatus =&gt; blockchain forward GetChain
case GetLastBlockIndex =&gt; blockchain forward GetLastIndex
case GetLastBlockHash =&gt; blockchain forward GetLastHash
}</code></pre><p>This is an overview of the usual <code>receive</code> function that we should override. I will analyze the logic of the most complex <code>case</code>s later, now let’s look at the last four. Here we forward the messages to the Blockchain Actor, since it isn’t required any processing. Using the <code>forward</code> operator the <code>sender()</code> of the message will be the one that originated the message, not the Node Actor. In this way the Blockchain Actor will respond to the original sender of the message (the REST API layer).</p><pre><code class="language-scala">override def receive: Receive = {
case AddTransaction(transaction) =&gt; {
val node = sender()
broker ! Broker.AddTransaction(transaction)
(blockchain ? GetLastIndex).mapTo[Int] onComplete {
case Success(index) =&gt; node ! (index + 1)
case Failure(e) =&gt; node ! akka.actor.Status.Failure(e)
}
}
//Code...
}</code></pre><p>The <code>AddTransaction</code> message triggers the logic to store a new transaction in the list of pending ones of our blockchain. The Node Actor responds with the <code>index</code> of the block that will contain the transaction.</p><p>First of all we store the “address” of the <code>sender()</code> of the message in a <code>node</code> value to use it later. We send to the Broker Actor a message to add a new transaction, then we <code>ask</code> to the Blockchain Actor the last index of the chain. The <code>ask</code> operator — the one expressed with <code>?</code> — is used to send a message to an actor and wait for a response. The response (mapped to an <code>Int</code> value) can be a <code>Success</code> or a <code>Failure</code>.</p><p>In the first case we send back to the sender (<code>node</code>) the <code>index+1</code>, since it will be the index of the next mined block. In case of failure, we respond to the sender with a <code>Failure</code> containing the reason of the failure. Remember this pattern:</p><p><strong>ask → wait for a response → handle success/failure</strong></p><p>because we will see it again.</p><pre><code class="language-scala">override def receive: Receive = {
//Code...
case CheckPowSolution(solution) =&gt; {
val node = sender()
(blockchain ? GetLastHash).mapTo[String] onComplete {
case Success(hash: String) =&gt; miner.tell(Validate(hash, solution), node)
case Failure(e) =&gt; node ! akka.actor.Status.Failure(e)
}
}
//Code...
}
view raw</code></pre><p>This time we have to check if a solution to the PoW algorithm is correct. We ask to the Blockchain Actor the hash of the last block, and we tell the Miner Actor to validate the solution against the hash. In the <code>tell</code> function we pass to the Miner the <code>Validate</code> message along with the address of the sender, so that the miner can respond directly to it. This is another approach, like the <code>forward</code> one we saw before.</p><pre><code class="language-scala">override def receive: Receive = {
//Code...
case AddBlock(proof) =&gt; {
val node = sender()
(self ? CheckPowSolution(proof)) onComplete {
case Success(_) =&gt; {
(broker ? Broker.GetTransactions).mapTo[List[Transaction]] onComplete {
case Success(transactions) =&gt; blockchain.tell(AddBlockCommand(transactions, proof), node)
case Failure(e) =&gt; node ! akka.actor.Status.Failure(e)
}
broker ! Clear
}
case Failure(e) =&gt; node ! akka.actor.Status.Failure(e)
}
}
//Code...
}</code></pre><p>Other nodes can mine blocks, so we may receive a request to add a block that we didn’t mine. The proof is enough to add the new block, since we assume that all the nodes share the same list of pending transactions.</p><pre><code class="language-scala">override def receive: Receive = {
//Code...
case Mine =&gt; {
val node = sender()
(blockchain ? GetLastHash).mapTo[String] onComplete {
case Success(hash) =&gt; (miner ? Miner.Mine(hash)).mapTo[Future[Long]] onComplete {
case Success(solution) =&gt; waitForSolution(solution)
case Failure(e) =&gt; log.error(s"Error finding PoW solution: ${e.getMessage}")
}
case Failure(e) =&gt; node ! akka.actor.Status.Failure(e)
}
}
//Code...
}
def waitForSolution(solution: Future[Long]) = Future {
solution onComplete {
case Success(proof) =&gt; {
broker ! Broker.AddTransaction(createCoinbaseTransaction(nodeId))
self ! AddBlock(proof)
miner ! Ready
}
case Failure(e) =&gt; log.error(s"Error finding PoW solution: ${e.getMessage}")
}
}</code></pre><p>This is a simplification, in the Bitcoin network there cannot be such assumption. First of all we should check if the solution is valid. We do this sending a message to the node itself: <code>self ? CheckPowSolution(proof)</code>. If the proof is valid, we get the list of pending transaction from the Broker Actor, then we <code>tell</code> to the Blockchain Actor to add to the chain a new block containing the transactions and the validated proof. The last thing to do is to command the Broker Actor to clear the list of pending transactions.</p><p>The last message is the request to start mining a new block. We need the hash of the last block in the chain, so we request it to the Blockchain Actor. Once we have the hash, we can start mining a new block.</p><p>The PoW algorithm is a long-running operation, so the Miner Actor responds immediately with a <code>Future</code> containing the computation. The <code>waitForSolution</code> function waits for the computation to complete, while the Node Actor keeps doing its business.</p><p>When we have a solution, we reward ourselves adding the<strong> coinbase transaction</strong> to the list of pending transactions. Then we add the new block to the chain and tell the Miner Actor to be ready to mine another block.</p><h4 id="rest-api-with-akka-http">REST API with Akka HTTP</h4><p>This last section describes the server and REST API. This is the most “external” part of our application, the one connecting the outside world to the Scalachain node. We will make use of Akka HTTP library, which is part of the Akka Framework. Let’s start looking at the server, the entry point of our application.</p><pre><code class="language-scala">object Server extends App with NodeRoutes {
val address = if (args.length &gt; 0) args(0) else "localhost"
val port = if (args.length &gt; 1) args(1).toInt else 8080
implicit val system: ActorSystem = ActorSystem("scalachain")
implicit val materializer: ActorMaterializer = ActorMaterializer()
val node: ActorRef = system.actorOf(Node.props("scalaChainNode0"))
lazy val routes: Route = statusRoutes ~ transactionRoutes ~ mineRoutes
Http().bindAndHandle(routes, address, port)
println(s"Server online at http://$address:$port/")
Await.result(system.whenTerminated, Duration.Inf)
}</code></pre><p>Since the <code>Server</code> is our entry point, it needs to extend the <code>App</code> trait. It extends also <code>NodeRoutes</code>, a trait that contains all the http routes to the various endpoint of the node.</p><p>The <code>system</code> value is where we store our <code>ActorSystem</code>. Every actor created in this system will be able to talk to the others inside it. Akka HTTP requires also the definition of another value, the <code>ActorMaterializer</code>. This relates to the Akka Streams module, but since Akka HTTP is built on top of it, we still need this object to be initialized in our server (if you want to go deep on the relation with streams, look <a href="https://doc.akka.io/docs/akka-http/current/implications-of-streaming-http-entity.html" rel="noopener">here</a>).</p><p>The Node Actor is created along with the HTTP routes of the node, that are chained using the <code>~</code> operator. Don’t worry about the routes now, we will be back to them in a moment.</p><p>The last thing to do is to start our server using the function <code>Http().bindHandle</code>, that will also bind the routes we pass to it as an argument. The <code>Await.result</code> function will wait the termination signal to stop the server.</p><p>The server will be useless without the routes to trigger the business logic of the application. We define the routes in the trait <code>NodeRoutes</code>, differentiating them according to the different logic they trigger:</p><ul><li><code>statusRoutes</code> contains the endpoints to ask the Scalachain node for its status.</li><li><code>transactionRoutes</code> handles everything related to transactions.</li><li><code>mineRoutes</code> has the endpoint to start the mining process</li></ul><p>Notice that this differentiation is a logic one, just to keep things ordered and readable. The three routes will be chained in a single one after their initialization in the server.</p><pre><code class="language-scala">//Imports...
import com.elleflorio.scalachain.utils.JsonSupport._
// Imports...
trait NodeRoutes extends SprayJsonSupport {
implicit def system: ActorSystem
def node: ActorRef
implicit lazy val timeout = Timeout(5.seconds)
//Code...
}</code></pre><p>The <code>NodeRoutes</code> trait extends <code>SprayJsonSupport</code> to add <code>JSON</code> serialization/deserialization. <a href="https://github.com/spray/spray-json" rel="noopener">SprayJson</a> is a Scala library analogous to Jackson in Java, and it comes for free with Akka HTTP.</p><p>To convert our objects to a JSON string we import the class <code>JsonSupport</code> defined in the <code>utils</code> package, which contains custom reader/writer for every object. I won’t go into the details, you can find the <a href="https://github.com/elleFlorio/scalachain/blob/master/src/main/scala/com/elleflorio/scalachain/utils/JsonSupport.scala" rel="noopener">class</a> in the repository if you want to look at the implementation.</p><p>We have a couple of implicit values. The <code>ActorSystem</code> is used to define the system of actors, while the <code>Timeout</code> is used by the <code>OnSuccess</code> function that waits for a response from the actors. The <code>ActorRef</code> is defined by overriding in the server implementation.</p><pre><code class="language-scala">//Code...
lazy val statusRoutes: Route = pathPrefix("status") {
concat(
pathEnd {
concat(
get {
val statusFuture: Future[Chain] = (node ? GetStatus).mapTo[Chain]
onSuccess(statusFuture) { status =&gt;
complete(StatusCodes.OK, status)
}
}
)
}
)
}
//Code...</code></pre><p>The endpoint to get the status of the blockchain is defined in the statusRoutes. We define the pathPrefix as "status" so the node will respond to the path ` http://&lt;address&gt;:&lt;port/status. After that there is the definition of the HTTP actions we want to enable on the path. Here we want to get the status of the blockchain, so we define only the get action. Inside that we ask the Node Actor to get the current Chain. When the actor responds, the Chain is sent as a JSON along with an ok status in the complete method.</p><pre><code class="language-scala">//Code...
lazy val transactionRoutes: Route = pathPrefix("transactions") {
concat(
pathEnd {
concat(
get {
val transactionsRetrieved: Future[List[Transaction]] =
(node ? GetTransactions).mapTo[List[Transaction]]
onSuccess(transactionsRetrieved) { transactions =&gt;
complete(transactions.toList)
}
},
post {
entity(as[Transaction]) { transaction =&gt;
val transactionCreated: Future[Int] =
(node ? AddTransaction(transaction)).mapTo[Int]
onSuccess(transactionCreated) { done =&gt;
complete((StatusCodes.Created, done.toString))
}
}
}
)
}
)
}
//Code...</code></pre><p>The <code>transactionRoutes</code> allows the interaction with the pending transactions of the node. We define the HTTP action <code>get</code> to retrieve the list of pending transactions. This time we also define the HTTP action <code>post</code> to add a new transaction to the list of pending ones. The <code>entity(as[Transaction])</code> function is used to deserialize the <code>JSON</code> body into a <code>Transaction</code> object.</p><pre><code class="language-scala">//Code...
lazy val mineRoutes: Route = pathPrefix("mine") {
concat(
pathEnd {
concat(
get {
node ! Mine
complete(StatusCodes.OK)
}
)
}
)
}
//Code...</code></pre><p>The last route is the <code>MineRoutes</code>. This is a very simple one, used only to ask the Scalachain node to start mine a new block. We define a <code>get</code> action since we do not need to send anything to start the mining process. It is not required to wait for a response, since it may take some time, so we immediately respond with an <code>Ok</code> status.</p><p>The API to interact with the Scalachain node are documented <a href="https://documenter.getpostman.com/view/4636741/RWaHw8yx" rel="noopener">here</a>.</p><h4 id="conclusion">Conclusion</h4><p>With the last section, we concluded our tour inside Scalachain. This prototype of a blockchain is far from a real implementation, but we learned a lot of interesting things:</p><ul><li>How a blockchain works, at least from an high level perspective.</li><li>How to use functional programming (Scala) to build a blockchain.</li><li>How the Actor Model works, and its application to our use case using the Akka Framework.</li><li>How to use the Akka HTTP library to create a sever to run our blockchain, along with the APIs to interact with it.</li></ul><p>The code is not perfect, and some things can be implemented in a better way. For this reason, <strong>feel free to contribute to the project!</strong> ;-)</p>
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
