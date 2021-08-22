---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9a33740569d1a4ca242b.jpg"
tags: [Algorithms]
description: In this article, I will implement 8 graph algorithms that exp
author: "Milad E. Fahmy"
title: "How to Implement 8 Essential Graph Algorithms in JavaScript"
created: "2021-08-15T19:29:16+02:00"
modified: "2021-08-15T19:29:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-algorithms tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Implement 8 Essential Graph Algorithms in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9a33740569d1a4ca242b.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a33740569d1a4ca242b.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a33740569d1a4ca242b.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a33740569d1a4ca242b.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9a33740569d1a4ca242b.jpg" alt="How to Implement 8 Essential Graph Algorithms in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this article, I will implement <strong>8 graph algorithms</strong> that explore the search and combinatorial problems (traversals, shortest path and matching) of graphs in JavaScript. </p>
<p>The problems are borrowed from the book, <a href="https://www.google.com/books/edition/Elements_of_Programming_Interviews_in_Ja/ux3PCwAAQBAJ?hl=en&amp;gbpv=0" rel="noopener">Elements of Programming Interviews in Java</a>. The solutions in the book are coded in Java, Python or C++ depending on what version of the book you own. </p>
<p>Although the logic behind the modeling of the problems is language-agnostic, the code snippets I provide in this article use some JavaScript caveats. </p>
<p>Every solution to each problem is broken down into 3 sections: an overview of the solution, the pseudocode, and lastly the actual code in JavaScript.</p>
<p>To test the code and see it do what it is supposed to do, you can use <a href="https://developers.google.com/web/tools/chrome-devtools/javascript/snippets" rel="noopener">Chrome’s Dev Tools</a> to run the snippets on the browser itself or use NodeJS to run them from the command line.</p>
<h2 id="graph-implementation">Graph implementation</h2>
<p>The 2 most commonly used <a href="https://www.geeksforgeeks.org/graph-and-its-representations/" rel="noopener">representations of graphs</a> are the adjacency list and adjacency matrix. </p>
<p>The problems I’ll be solving are for sparse graphs (few edges), and the vertex operations in the adjacency list approach take constant (adding a vertex, O(1)) and linear time (deleting a vertex, O(V+E)). So I’ll stick with that implementation for the most part.</p>
<p>Let’s knock this out with a simple <strong>undirected, unweighted graph</strong> implementation using <strong>adjacency list</strong>. We’ll maintain an object (adjacencyList) that will contain all the vertices in our graph as the keys. The values will be an array of all the adjacent vertices. In the example below, vertex 1 is connected to vertices 2 and 4, hence adjacencyList: { 1 : [ 2, 4 ] } and so on for the other vertices. </p>
<p>To build the graph, we have two functions: <strong>addVertex</strong> and <strong>addEdge</strong>. addVertex is used to add a vertex to the list. addEdge is used to connect the vertices by adding the neighboring vertices to both the source and destination arrays since this is an undirected graph. To make a directed graph, we can simply remove lines 14–16 and 18 in the code below.</p>
<p>Before removing a vertex, we need to iterate through the array of neighboring vertices and remove all possible connections to that vertex.</p>
<figcaption>An undirected, unweighted graph implemented using Adjacency List</figcaption>
</figure><pre><code class="language-javascript">class Graph {
constructor() {
this.adjacencyList = {};
}
addVertex(vertex) {
if (!this.adjacencyList[vertex]) {
this.adjacencyList[vertex] = [];
}
}
addEdge(source, destination) {
if (!this.adjacencyList[source]) {
this.addVertex(source);
}
if (!this.adjacencyList[destination]) {
this.addVertex(destination);
}
this.adjacencyList[source].push(destination);
this.adjacencyList[destination].push(source);
}
removeEdge(source, destination) {
this.adjacencyList[source] = this.adjacencyList[source].filter(vertex =&gt; vertex !== destination);
this.adjacencyList[destination] = this.adjacencyList[destination].filter(vertex =&gt; vertex !== source);
}
removeVertex(vertex) {
while (this.adjacencyList[vertex]) {
const adjacentVertex = this.adjacencyList[vertex].pop();
this.removeEdge(vertex, adjacentVertex);
}
delete this.adjacencyList[vertex];
}
}</code></pre>
<h2 id="graph-traversals">Graph traversals</h2>
<p>Building on our implementation of graphs in the previous section, we’ll implement the graph traversals: breadth first search and depth first search.</p>
<h3 id="breadth-first-search">Breadth First Search</h3>
<p>BFS visits the nodes <strong>one level at a time</strong>. To prevent visiting the same node more than once, we’ll maintain a <strong>visited </strong>object. </p>
<p>Since we need to process the nodes in a First In First Out fashion, a queue is a good contender for the data structure to use. The time complexity is O(V+E).</p><pre><code>function BFS
Initialize an empty queue, empty 'result' array &amp; a 'visited' map
Add the starting vertex to the queue &amp; visited map
While Queue is not empty:
- Dequeue and store current vertex
- Push current vertex to result array
- Iterate through current vertex's adjacency list:
- For each adjacent vertex, if vertex is unvisited:
- Add vertex to visited map
- Enqueue vertex
Return result array</code></pre>
<h3 id="depth-first-search">Depth First Search</h3>
<p>DFS visits the nodes depth wise. Since we need to process the nodes in a Last In First Out manner, we’ll use a <strong>stack</strong>. </p>
<p>Starting from a vertex, we’ll push the neighboring vertices to our stack. Whenever a vertex is popped, it is marked visited in our visited object. Its neighboring vertices are pushed to the stack. Since we are always popping a new adjacent vertex, our algorithm will always <strong>explore a new level</strong>. </p>
<p>We can also use the intrinsic stack calls to implement DFS recursively. The logic is the same.</p>
<p>The time complexity is the same as BFS, O(V+E).</p><pre><code>function DFS
Initialize an empty stack, empty 'result' array &amp; a 'visited' map
Add the starting vertex to the stack &amp; visited map
While Stack is not empty:
- Pop and store current vertex
- Push current vertex to result array
- Iterate through current vertex's adjacency list:
- For each adjacent vertex, if vertex is unvisited:
- Add vertex to visited map
- Push vertex to stack
Return result array</code></pre><pre><code class="language-javascript">Graph.prototype.bfs = function(start) {
const queue = [start];
const result = [];
const visited = {};
visited[start] = true;
let currentVertex;
while (queue.length) {
currentVertex = queue.shift();
result.push(currentVertex);
this.adjacencyList[currentVertex].forEach(neighbor =&gt; {
if (!visited[neighbor]) {
visited[neighbor] = true;
queue.push(neighbor);
}
});
}
return result;
}
Graph.prototype.dfsRecursive = function(start) {
const result = [];
const visited = {};
const adjacencyList = this.adjacencyList;
(function dfs(vertex){
if (!vertex) return null;
visited[vertex] = true;
result.push(vertex);
adjacencyList[vertex].forEach(neighbor =&gt; {
if (!visited[neighbor]) {
return dfs(neighbor);
}
})
})(start);
return result;
}
Graph.prototype.dfsIterative = function(start) {
const result = [];
const stack = [start];
const visited = {};
visited[start] = true;
let currentVertex;
while (stack.length) {
currentVertex = stack.pop();
result.push(currentVertex);
this.adjacencyList[currentVertex].forEach(neighbor =&gt; {
if (!visited[neighbor]) {
visited[neighbor] = true;
stack.push(neighbor);
}
});
}
return result;
}</code></pre>
<h2 id="search-maze">Search Maze</h2>
<p>Problem Statement:</p>
<blockquote>Given a 2D array of black and white entries representing a maze with designated entrance and exit points, find a path from the entrance to the exit, if one exists. – Aziz, Adnan, et al. <em>Elements of Programming Interviews</em></blockquote>
<p>We’ll represent the white entries with 0’s and black entries with 1’s. The white entries represent open areas and the black entries walls. The entrance and the exit points are represented by an array, the 0th index and the 1st index filled with the row and column indices, respectively.</p>
<figcaption>Maze represented by 2D array</figcaption>
</figure>
<p>Solution:</p>
<ul>
<li>To move to a different position, we’ll hardcode the four possible movements in the <strong>directions array</strong> (right, bottom, left and top; no diagonal moves):</li>
</ul><pre><code>[ [0,1], [1,0], [0,-1], [-1,0] ]</code></pre>
<ul>
<li>To keep track of the cells we have already visited, we will <strong>replace</strong> the white entries (<strong>0’s</strong>) with black entries (<strong>1's</strong>). We are basically using <strong>DFS</strong> recursively to traverse the maze. The base case, that will end the recursion, is either we have <strong>reached our exit point and return true</strong> or we have <strong>visited every white entry and return false</strong>.</li>
<li>Another important thing to keep track of is to ensure that we are <strong>within the boundaries of the maze</strong> all the time and that we only <strong>proceed</strong> if we are <strong>at a white entry</strong>. The <strong>isFeasible function</strong> will take care of that.</li>
<li>Time Complexity: O(V+E)</li>
</ul>
<p>Pseudocode:</p><pre><code>function hasPath
Start at the entry point
While exit point has not been reached
1. Move to the top cell
2. Check if position is feasible (white cell &amp; within boundary)
3. Mark cell as visited (turn it into a black cell)
4. Repeat steps 1-3 for the other 3 directions</code></pre><pre><code class="language-js">var hasPath = function(maze, start, destination) {
maze[start[0]][start[1]] = 1;
return searchMazeHelper(maze, start, destination);
};
function searchMazeHelper(maze, current, end) { // dfs
if (current[0] == end[0] &amp;&amp; current[1] == end[1]) {
return true;
}
let neighborIndices, neighbor;
// Indices: 0-&gt;top,1-&gt;right, 2-&gt;bottom, 3-&gt;left
let directions = [ [0,1] , [1,0] , [0,-1] , [-1,0] ];
for (const direction of directions) {
neighborIndices = [current[0]+direction[0], current[1]+direction[1]];
if (isFeasible(maze, neighborIndices)) {
maze[neighborIndices[0]][neighborIndices[1]] = 1;
if (searchMazeHelper(maze, neighborIndices, end)) {
return true;
}
}
}
return false;
}
function isFeasible(maze, indices) {
let x = indices[0], y = indices[1];
return x &gt;= 0 &amp;&amp; x &lt; maze.length &amp;&amp; y &gt;= 0 &amp;&amp; y &lt; maze[x].length &amp;&amp; maze[x][y] === 0;
}
var maze = [[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]]
hasPath(maze, [0,4], [3,2]);</code></pre>
<h2 id="paint-a-boolean-matrix">Paint a Boolean Matrix</h2>
<p>Problem Statement:</p>
<blockquote><em>Implement a routine that takes an n X m Boolean array A together with an entry (x, y) and flips the color of the region associated with (x, y). – </em>Aziz, Adnan, et al. <em>Elements of Programming Interviews</em></blockquote>
<p>The 2 colors will be represented by 0’s and 1’s. </p>
<p>In the example below, we start in the center of the array ([1,1]). Note that from that position, we can only reach the upper, leftmost triangular matrix. The rightmost, lowest position cannot be reached ([2,2]). Hence, at the end of the process, it’s the only color that is not flipped.</p>
<figcaption>n x m Boolean array before and after colors are flipped</figcaption>
</figure>
<p>Solution:</p>
<ul>
<li>Like in the previous question, we will code an array to define the 4 possible moves.</li>
<li>We’ll use BFS to traverse the graph.</li>
<li>We’ll modify the isFeasible function slightly. It will still check if the new position is within the boundaries of the matrix. The other requirement is that the new position is colored the same as the previous position. If the new position fits the requirements, its color is flipped.</li>
<li>Time complexity: O(mn)</li>
</ul>
<p>Pseudocode:</p><pre><code>function flipColor
Start at the passed coordinates and store the color
Initialize queue
Add starting position to queue
While Queue is not empty:
- Dequeue and store current position
- Move to the top cell
1. Check if cell is feasible
2. If feasible,
- Flip color
- Enqueue cell
3. Repeat steps 1-2 for the other 3 directions</code></pre><pre><code class="language-js">function flipColor(image, x, y) {
let directions = [ [0,1] , [1,0] , [0,-1] , [-1,0] ];
let color = image[x][y];
let queue = [];
image[x][y] = Number(!color);
queue.push([x,y]);
let currentPosition, neighbor;
while (queue.length) {
currentPosition = queue.shift();
for (const direction of directions) {
neighbor = [currentPosition[0]+direction[0], currentPosition[1]+direction[1]];
if (isFeasible(image, neighbor, color)) {
image[neighbor[0]][neighbor[1]] = Number(!color);
queue.push([neighbor[0], neighbor[1]]);
}
}
}
return image;
}
function isFeasible(image, indices, color) {
let x = indices[0], y = indices[1];
return x &gt;= 0 &amp;&amp; x &lt; image.length &amp;&amp; y &gt;= 0 &amp;&amp; y &lt; image[x].length &amp;&amp; image[x][y] == color;
}
var image = [[1,1,1],[1,1,0],[1,0,1]];
flipColor(image,1,1);</code></pre>
<h2 id="compute-enclosed-regions">Compute Enclosed Regions</h2>
<p>Problem Statement:</p>
<blockquote><em>Let A be a 2D array whose entries are either W or B. Write a program that takes A, and replaces all Ws that cannot reach the boundary with a B. – </em>Aziz, Adnan, et al. <em>Elements of Programming Interviews</em></blockquote>
<figcaption>The grids before and after being enclosed</figcaption>
</figure>
<p>Solution:</p>
<ul>
<li>Instead of iterating through all the entries to find the enclosed W entries, it is more optimal to <strong>start with the boundary W entries</strong>, traverse the graph and <strong>mark the connected W entries</strong>. These marked entries are guaranteed to be <strong>not enclosed</strong> since they are connected to a W entry on the border of the board. This preprocessing is basically the <strong>complement</strong> of what the program has to achieve.</li>
<li>Then, A is iterated through again and the <strong>unmarked</strong> W entries (which will be the enclosed ones) are changed into the <strong>B entries</strong>.</li>
<li>We’ll keep track of the marked and unmarked W entries using a Boolean array of the same dimensions as A. A marked entry will be set to true.</li>
<li>Time complexity: O(mn)</li>
</ul>
<p>Pseudocode:</p><pre><code>function fillSurroundedRegions
1. Initialize a 'visited' array of same length as the input array
pre-filled with 'false' values
2. Start at the boundary entries
3. If the boundary entry is a W entry and unmarked:
Call markBoundaryRegion function
4. Iterate through A and change the unvisited W entry to B
function markBoundaryRegion
Start with a boundary W entry
Traverse the grid using BFS
Mark the feasible entries as true</code></pre><pre><code class="language-js">function fillSurroundedRegions(board) {
if (!board.length) {
return;
}
const numRows = board.length, numCols = board[0].length;
let visited = [];
for (let i=0; i&lt;numRows; i++) {
visited.push(new Array(numCols).fill(false, 0, numCols));
}
for (let i=0; i&lt;board.length; i++) {
if (board[i][0] == 'W' &amp;&amp; !visited[i][0]) {
markBoundaryRegion(i, 0, board, visited);
}
if (board[i][board.length-1] == 'W' &amp;&amp; !visited[i][board.length-1]) {
markBoundaryRegion(i, board.length-1, board, visited);
}
}
for (let j=0; j&lt;board[0].length; j++) {
if (board[0][j] == 'W' &amp;&amp; !visited[0][j]) {
markBoundaryRegion(0, j, board, visited);
}
if (board[board.length-1][j] == 'W' &amp;&amp; !visited[board.length-1][j]) {
markBoundaryRegion(board.length-1, j, board, visited);
}
}
for (let i=1; i&lt;board.length-1; i++) {
for (let j=1; j&lt;board.length-1; j++) {
if (board[i][j] == 'W' &amp;&amp; !visited[i][j]) {
board[i][j] = 'B';
}
}
}
return board;
}
function markBoundaryRegion(i, j, board, visited) {
let directions = [ [0,1] , [1,0] , [0,-1] , [-1,0] ];
const queue = [];
queue.push([i,j]);
visited[i][j] = true;
let currentPosition, neighbor;
while (queue.length) {
currentPosition = queue.shift();
for (const direction of directions) {
neighbor = [i+direction[0], j+direction[1]];
if (isFeasible(board,visited,neighbor)) {
visited[neighbor[0]][neighbor[1]] = true;
queue.push(neighbor);
}
}
}
}
function isFeasible(board, visited, neighbor) {
let x = neighbor[0], y = neighbor[1];
return x &gt;= 0 &amp;&amp; x &lt; board.length &amp;&amp; y &gt;= 0 &amp;&amp; y &lt; board[x].length &amp;&amp; board[x][y] == 'W';
}
var board = [['B','B','B','B'],['W','B','W','B'],['B','W','W','B'],['B','B','B','B']];
fillSurroundedRegions(board);</code></pre>
<h2 id="deadlock-detection-cycle-in-directed-graph-">Deadlock Detection (Cycle In Directed Graph)</h2>
<p>Problem Statement:</p>
<blockquote><em>One deadlock detection algorithm makes use of a “wait-for” graph to track which other processes a process is currently blocking on. In a wait-for graph, processes are represented as nodes, and an edge from process P to 0 implies 0 is holding a resource that P needs and thus P is waiting for 0 to release its lock on that resource. A cycle in this graph implies the possibility of a deadlock. This motivates the following problem.</em><br><em>Write a program that takes as input a directed graph and checks if the graph contains a cycle. – </em>Aziz, Adnan, et al. <em>Elements of Programming Interviews</em></blockquote>
<figcaption>Example of a Wait-for graph (a)</figcaption>
</figure>
<p>In the wait-for graph above, our <strong>deadlock detection program</strong> will detect at least one <strong>cycle</strong> and return true.</p>
<p>For this algorithm, we’ll use a slightly different implementation of the <strong>directed graph</strong> to explore other data structures. We are still implementing it using the <strong>adjacency list</strong> but instead of an object (map), we’ll store the vertices in an <strong>array</strong>. </p>
<p>The <strong>processes</strong> will be modeled as <strong>vertices</strong> starting with the <strong>0th process</strong>. The <strong>dependency</strong> between the processes will be modeled as <strong>edges</strong> between the vertices. The <strong>edges</strong> (adjacent vertices) will be stored in a <strong>Linked List</strong>, in turn stored at the index that corresponds to the process number.</p><pre><code class="language-js">class Node {
constructor(data) {
this.data = data;
this.next = null;
}
}
class LinkedList {
constructor() {
this.head = null;
}
insertAtHead(data) {
let temp = new Node(data);
temp.next = this.head;
this.head = temp;
return this;
}
getHead() {
return this.head;
}
}
class Graph {
constructor(vertices) {
this.vertices = vertices;
this.list = [];
for (let i=0; i&lt;vertices; i++) {
let temp = new LinkedList();
this.list.push(temp);
}
}
addEdge(source, destination) {
if (source &lt; this.vertices &amp;&amp; destination &lt; this.vertices) {
this.list[source].insertAtHead(destination);
}
return this;
}
}</code></pre>
<figcaption>Wait-for graph (a) implementation</figcaption>
</figure>
<p>Solution:</p>
<ul>
<li>Every vertex will be assigned <strong>3 different colors</strong>: white, gray and black. Initially all vertices will be colored <strong>white</strong>. When a vertex is being processed, it will be colored <strong>gray</strong> and after processing <strong>black</strong>.</li>
<li>Use Depth First Search to traverse the graph.</li>
<li>If there is an edge from a gray vertex to another gray vertex, we’ve discovered a <strong>back edge</strong> (a self-loop or an edge that connects to one of its ancestors), hence a <strong>cycle</strong> is detected.</li>
<li>Time Complexity: O(V+E)</li>
</ul>
<p>Pseudocode:</p><pre><code>function isDeadlocked
Color all vertices white
Run DFS on the vertices
1. Mark current node Gray
2. If adjacent vertex is Gray, return true
3. Mark current node Black
Return false</code></pre><pre><code class="language-js">const Colors = {
WHITE: 'white',
GRAY: 'gray',
BLACK: 'black'
}
Object.freeze(Colors);
function isDeadlocked(g) {
let color = [];
for (let i=0; i&lt;g.vertices; i++) {
color[i] = Colors.WHITE;
}
for (let i=0; i&lt;g.vertices; i++) {
if (color[i] == Colors.WHITE) {
if (detectCycle(g, i, color)) {
return true;
}
}
}
return false;
};
function detectCycle(g, currentVertex, color) {
color[currentVertex] = Colors.GRAY;
let neighbor;
let nextNode = g.list[currentVertex].getHead();
while (nextNode !== null) {
neighbor = nextNode.data;
if (color[neighbor] == Colors.GRAY) {
return true;
}
if (color[neighbor] == Colors.WHITE &amp;&amp; detectCycle(g, neighbor, color)) {
return true;
}
}
color[currentVertex] = Colors.BLACK;
return false;
}
let g = new Graph(3);
g.addEdge(0,1);
g.addEdge(0,2);
isDeadlocked(g);</code></pre>
<h2 id="clone-graph">Clone Graph</h2>
<p>Problem Statement:</p>
<blockquote><em>Consider a vertex type for a directed graph in which there are two fields: an integer label and a list of references to other vertices. Design an algorithm that takes a reference to a vertex u, and creates a copy of the graph on the vertices reachable from u. Return the copy of u. – </em>Aziz, Adnan, et al. <em>Elements of Programming Interviews</em></blockquote>
<p>Solution:</p>
<ul>
<li>Maintain a <strong>map</strong> that <strong>maps the original vertex to its counterpart</strong>. Copy over the edges.</li>
<li>Use BFS to visit the adjacent vertices (edges).</li>
<li>Time Complexity: O(n), where n is the total number of nodes.</li>
</ul>
<p>Pseudocode:</p><pre><code>function cloneGraph
Initialize an empty map
Run BFS
Add original vertex as key and clone as value to map
Copy over edges if vertices exist in map
Return clone</code></pre><pre><code class="language-js">class GraphVertex {
constructor(value) {
this.value = value;
this.edges = [];
}
}
function cloneGraph(g) {
if (g == null) {
return null;
}
let vertexMap = {};
let queue = [g];
vertexMap[g] = new GraphVertex(g.value);
while (queue.length) {
let currentVertex = queue.shift();
currentVertex.edges.forEach(v =&gt; {
if (!vertexMap[v]) {
vertexMap[v] = new GraphVertex(v.value);
queue.push(v);
}
vertexMap[currentVertex].edges.push(vertexMap[v]);
});
}
return vertexMap[g];
}
let n1 = new GraphVertex(1);
let n2 = new GraphVertex(2);
let n3 = new GraphVertex(3);
let n4 = new GraphVertex(4);
n1.edges.push(n2, n4);
n2.edges.push(n1, n3);
n3.edges.push(n2, n4);
n4.edges.push(n1, n3);
cloneGraph(n1);</code></pre>
<h2 id="making-wired-connections">Making Wired Connections</h2>
<p>Problem Statement:</p>
<blockquote><em>Design an algorithm that takes a set of pins and a set of wires connecting pairs of pins, and determines if it is possible to place some pins on the left half of a PCB, and the remainder on the right half, such that each wire is between left and right halves. Return such a division, if one exists. – </em>Aziz, Adnan, et al. <em>Elements of Programming Interviews</em></blockquote>
<figcaption>An example of such a division</figcaption>
</figure>
<p>Solution:</p>
<ul>
<li>Model the set as a graph. The pins are represented by the vertices and the wires connecting them are the edges. We’ll implement the graph using an <a href="https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs" rel="noopener">edge list</a>.</li>
</ul>
<p>The pairing described in the problem statement is possible only if the vertices (pins) can be divided into “2 independent sets, U and V such that every edge (u,v) either connects a vertex from U to V or a vertex from V to U.” (<a href="https://www.geeksforgeeks.org/bipartite-graph/">Source</a>) Such a graph is known as a <strong>Bipartite graph</strong>.</p>
<p>To check whether the graph is bipartite, we’ll use the <strong>graph coloring</strong> technique. Since we need two sets of pins, we have to check if the graph is 2-colorable (which we’ll represent as 0 and 1). </p>
<p>Initially, all vertices are uncolored (-1). If adjacent vertices are assigned the same colors, then the graph is not bipartite. It is not possible to assign two colors alternately to a graph with an odd length cycle using 2 colors only, so we can greedily color the graph.</p>
<p>Extra step: We will handle the case of a graph that is not connected. The outer for loop takes care of that by iterating over all the vertices.</p>
<ul>
<li>Time Complexity: O(V+E)</li>
</ul>
<p>Pseudocode:</p><pre><code>function isBipartite
1. Initialize an array to store uncolored vertices
2. Iterate through all vertices one by one
3. Assign one color (0) to the source vertex
4. Use DFS to reach the adjacent vertices
5. Assign the neighbors a different color (1 - current color)
6. Repeat steps 3 to 5 as long as it satisfies the two-colored     constraint
7. If a neighbor has the same color as the current vertex, break the loop and return false</code></pre><pre><code class="language-js">function isBipartite(graph) {
let color = [];
for (let i=0; i&lt;graph.length; i++) {
color[i] = -1;
}
for (let i=0; i&lt;graph.length; i++) {
if (color[i] == -1) {
let stack = [];
stack.push(i);
color[i] = 0;
let node;
while (stack.length) {
node = stack.pop();
for (const neighbor of graph[node]) {
if (color[neighbor] == -1) {
stack.push(neighbor);
color[neighbor] = 1 - color[node];
}
else if (color[neighbor] == color[node]) {
return false;
}
}
}
}
}
return true;
}
isBipartite([[],[2,4,6],[1,4,8,9],[7,8],[1,2,8,9],[6,9],[1,5,7,8,9],[3,6,9],[2,3,4,6,9],[2,4,5,6,7,8]]);</code></pre>
<h2 id="transform-one-string-to-another">Transform one string to another</h2>
<p>Problem Statement:</p>
<blockquote><em>Given a dictionary D and two strings s and f, write a program to determine if s produces t. Assume that all characters are lowercase alphabets. If s does produce f, output the length of a shortest production sequence; otherwise, output -1. – </em>Aziz, Adnan, et al. <em>Elements of Programming Interviews</em></blockquote>
<p>For example, if the dictionary D is ["hot", "dot", "dog", "lot", "log", "cog"], s is "hit" and t is "cog", the length of the shortest production sequence is 5.<br>"hit" -&gt; "hot" -&gt; "dot" -&gt; "dog" -&gt; "cog"</p>
<p>Solution:</p>
<ul>
<li>Represent the <strong>strings</strong> as <strong>vertices</strong> in an undirected, unweighted graph, with an <strong>edge</strong> between 2 vertices if the corresponding strings differ in <strong>one character</strong> at most. We'll implement a function (compareStrings) that calculates the difference in characters between two strings.</li>
<li>Piggybacking off the previous example, the vertices in our graph will be</li>
</ul><pre><code>{hit, hot, dot, dog, lot, log, cog}</code></pre>
<ul>
<li>The edges represented by the adjacency list approach we discussed in section 0. Graph Implementation, will be:</li>
</ul><pre><code>{
"hit": ["hot"],
"hot": ["dot", "lot"],
"dot": ["hot", "dog", "lot"],
"dog": ["dot", "lot", "cog"],
"lot": ["hot", "dot", "log"],
"log": ["dog", "lot", "cog"],
"cog": ["dog", "log"]
}</code></pre>
<ul>
<li>Once we finish building the graph, the problem boils down to finding the shortest path from a start node to a finish node. This can be naturally computed using <strong>Breadth First Search</strong>.</li>
<li>Time Complexity: O(M x M x N), where M is the length of each word and N is the total number of words in the dictionary.</li>
</ul>
<p>Pseudocode:</p><pre><code>function compareStrings
Compare two strings char by char
Return how many chars differ
function transformString
1. Build graph using compareStrings function. Add edges if and only if  the two strings differ by 1 character
2. Run BFS and increment length
3. Return length of production sequence</code></pre><pre><code class="language-js">function transformString(beginWord, endWord, wordList) {
let graph = buildGraph(wordList, beginWord);
if (!graph.has(endWord)) return 0;
let queue = [beginWord];
let visited = {};
visited[beginWord] = true;
let count = 1;
while (queue.length) {
let size = queue.length;
for (let i=0; i&lt;size; i++) {
let currentWord = queue.shift();
if (currentWord === endWord) {
return count;
}
graph.get(currentWord).forEach( neighbor =&gt; {
if (!visited[neighbor]) {
queue.push(neighbor);
visited[neighbor] = true;
}
})
}
count++;
}
return 0;
};
function compareStrings (str1, str2) {
let diff = 0;
for (let i=0; i&lt;str1.length; i++) {
if (str1[i] !== str2[i]) diff++
}
return diff;
}
function buildGraph(wordList, beginWord) {
let graph = new Map();
wordList.forEach( (word) =&gt; {
graph.set(word, []);
wordList.forEach( (nextWord) =&gt; {
if (compareStrings(word, nextWord) == 1) {
graph.get(word).push(nextWord);
}
})
})
if (!graph.has(beginWord)) {
graph.set(beginWord, []);
wordList.forEach( (nextWord) =&gt; {
if (compareStrings(beginWord, nextWord) == 1) {
graph.get(beginWord).push(nextWord);
}
})
}
return graph;
}</code></pre>
<h2 id="where-to-go-from-here">Where to go from here?</h2>
<p>Hopefully, by the end of this article, you have realized that the most challenging part in graph problems is identifying how to model the problems as graphs. From there, you can use/modify the two graph traversals to get the expected output.</p>
<p>Other graph algorithms that are nice to have in your toolkit are:</p>
<ul>
<li>Topological Ordering</li>
<li>Shortest Path Algorithms (Dijkstra and Floyd Warshall)</li>
<li>Minimum Spanning Trees Algorithms (Prim and Kruskal)</li>
</ul>
<p>If you found this article helpful, consider <a href="https://www.buymeacoffee.com/girish">buying me a coffee</a>. It will keep me awake when I work on a video tutorial of this article :) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
<h3 id="references-">References:</h3>
<p>Aziz, Adnan, et al. Elements of Programming Interviews. 2nd ed., CreateSpace Independent Publishing Platform, 2012.</p>
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
