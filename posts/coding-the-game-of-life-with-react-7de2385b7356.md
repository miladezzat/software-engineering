---
card: "https://cdn-media-1.freecodecamp.org/images/1*Z2we98iWm4lJhulaYN_hwg.jpeg"
tags: [React]
description: "by Pablo Regen"
author: "Milad E. Fahmy"
title: "How to code the Game of Life with React"
created: "2021-08-16T11:32:14+02:00"
modified: "2021-08-16T11:32:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-front-end-development tag-technology tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to code the Game of Life with React</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Z2we98iWm4lJhulaYN_hwg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*Z2we98iWm4lJhulaYN_hwg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*Z2we98iWm4lJhulaYN_hwg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Z2we98iWm4lJhulaYN_hwg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Z2we98iWm4lJhulaYN_hwg.jpeg" alt="How to code the Game of Life with React">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
const totalBoardRows = 40;
const totalBoardColumns = 60;
const newBoardStatus = () =&gt; {};
const BoardGrid = () =&gt; {};
const Slider = () =&gt; {};
class App extends Component {
state = {};
// Methods ...
render() {
return (
);
}
}
export default App;</code></pre><h4 id="generating-a-new-board-s-cell-status">Generating a new board’s cell status</h4><p>Since we need to know the status of each cell <strong>and</strong> its 8 neighbors for each iteration, let’s create a function that returns an array of arrays each containing cells with boolean values. The number of arrays within the main array will match the number of rows, and the number of values within each of these arrays will match the number of columns. So each boolean value will represent the state of each cell, “alive” or “dead”. The function’s parameter defaults to less than 30% chance of being alive, but fell free to experiment with other numbers.</p><pre><code class="language-js">const newBoardStatus = (cellStatus = () =&gt; Math.random() &lt; 0.3) =&gt; {
const grid = [];
for (let r = 0; r &lt; totalBoardRows; r++) {
grid[r] = [];
for (let c = 0; c &lt; totalBoardColumns; c++) {
grid[r][c] = cellStatus();
}
}
return grid;
};
/* Returns an array of arrays, each containing booleans values
(40) [Array(60), Array(60), ... ]
0: (60) [true, false, true, ... ]
1: (60) [false, false, false, ... ]
2: (60) [false, false, true, ...]
...
*/</code></pre><h4 id="generating-the-board-grid">Generating the board grid</h4><p>Let’s define a function component that creates the board grid and assigns it to a variable. The function receives the state of the whole board status and a method that allows users to toggle the status of individual cells as props. This method is defined on the main component where all the state of the application is held.</p><p>Each cell is represented by a table’s &lt;td&gt; and has a className attribute whose value depends on the boolean value of the corresponding board cell. The player clicking on a cell results in the method passed as props being called with the cell’s row and column location as argument.</p><p>Check out <a href="https://reactjs.org/docs/lifting-state-up.html#lifting-state-up" rel="noopener">Lifting State Up</a> for additional info on passing methods as props, and don’t forget to add the <a href="https://reactjs.org/docs/lists-and-keys.html#keys" rel="noopener">keys</a>.</p><pre><code class="language-js">const BoardGrid = ({ boardStatus, onToggleCellStatus }) =&gt; {
const handleClick = (r,c) =&gt; onToggleCellStatus(r,c);
const tr = [];
for (let r = 0; r &lt; totalBoardRows; r++) {
const td = [];
for (let c = 0; c &lt; totalBoardColumns; c++) {
td.push(
&lt;td
key={`${r},${c}`}
className={boardStatus[r][c] ? 'alive' : 'dead'}
onClick={() =&gt; handleClick(r,c)}
/&gt;
);
}
tr.push(&lt;tr key={r}&gt;{td}&lt;/tr&gt;);
}
return &lt;table&gt;&lt;tbody&gt;{tr}&lt;/tbody&gt;&lt;/table&gt;;
};</code></pre><h4 id="creating-the-speed-slider">Creating the speed slider</h4><p>This function component creates a slider to allow players change the speed of iterations. It receives the state of the current speed and a method to handle the speed change as props. You can try different minimum, maximum and step values. A speed change results in the method passed as props being called with the desired speed as argument.</p><pre><code class="language-js">const Slider = ({ speed, onSpeedChange }) =&gt; {
const handleChange = e =&gt; onSpeedChange(e.target.value);
return (
&lt;input
type='range'
min='50'
max='1000'
step='50'
value={speed}
onChange={handleChange}
/&gt;
);
};</code></pre><h3 id="main-component">Main component</h3><p>Since it contains the state of the application let’s make it a class component. Note that I’m not using <a href="https://reactjs.org/docs/hooks-intro.html" rel="noopener">Hooks</a>, a new addition in React 16.8 that let you use state and other React features without writing a class. I prefer to use the <a href="https://reactjs.org/docs/handling-events.html" rel="noopener">experimental public class fields syntax</a>, so I don’t bind the methods within the constructor.</p><p>Let’s dissect it.</p><h4 id="state">State</h4><p>I define the state as an object with the properties for the board status, number of generation, game running or stopped and the speed of the iterations. When the game starts, the status of the board’s cells will be the one returned by the call to the function that generates a new board status. Generation starts at 0 and the game will only run after the user decides. The default speed is 500ms.</p><pre><code class="language-js">class App extends Component {
state = {
boardStatus: newBoardStatus(),
generation: 0,
isGameRunning: false,
speed: 500
};
// Other methods ...
}</code></pre><h4 id="run-stop-button">Run/Stop button</h4><p>Function that returns a different button element depending on the state of the game: running or stopped.</p><pre><code class="language-js">class App extends Component {
state = {...};
runStopButton = () =&gt; {
return this.state.isGameRunning ?
&lt;button type='button' onClick={this.handleStop}&gt;Stop&lt;/button&gt; :
&lt;button type='button' onClick={this.handleRun}&gt;Start&lt;/button&gt;;
}
// Other methods ...
}</code></pre><h4 id="clear-and-new-board">Clear and new board</h4><p>Methods to handle players request to start with a new random board’s cell status or to clear the board completely so they can then experiment by toggling individual cell status. The difference between them is that the one that clears the board sets the state for all cells to false, while the other doesn’t pass any arguments to the newBoardStatus method so the status of each cell becomes by default a random boolean value.</p><pre><code class="language-js">class App extends Component {
state = {...};
runStopButton = () =&gt; {...}
handleClearBoard = () =&gt; {
this.setState({
boardStatus: newBoardStatus(() =&gt; false),
generation: 0
});
}
handleNewBoard = () =&gt; {
this.setState({
boardStatus: newBoardStatus(),
generation: 0
});
}
// More methods ...
state = {...};
runStopButton = () =&gt; {...}
handleClearBoard = () =&gt; {...}
handleNewBoard = () =&gt; {...}
handleToggleCellStatus = (r,c) =&gt; {
const toggleBoardStatus = prevState =&gt; {
const clonedBoardStatus = JSON.parse(JSON.stringify(prevState.boardStatus));
clonedBoardStatus[r][c] = !clonedBoardStatus[r][c];
return clonedBoardStatus;
};
this.setState(prevState =&gt; ({
boardStatus: toggleBoardStatus(prevState)
}));
}
// Other methods ...
}</code></pre><h4 id="generating-the-next-step">Generating the next step</h4><p>Here is where the next game iteration is generated by setting the state of the board status to the returned value of a function. It also adds one to the generation’s state to inform the player how many iterations have been produced so far.</p><p>The function (“nextStep”) defines two variables: the board status and a deep cloned board status. Then a function calculates the amount of neighbors (within the board) with value true for an individual cell, whenever it is called. Due to the rules, there’s no need to count more than four true neighbors per cell. Lastly, and according to the rules, it updates the cloned board’s individual cell status and return the cloned board status, which is used in the setState.</p><pre><code class="language-js">class App extends Component {
state = {...};
runStopButton = () =&gt; {...}
handleClearBoard = () =&gt; {...}
handleNewBoard = () =&gt; {...}
handleToggleCellStatus = () =&gt; {...}
handleStep = () =&gt; {
const nextStep = prevState =&gt; {
const boardStatus = prevState.boardStatus;
const clonedBoardStatus = JSON.parse(JSON.stringify(boardStatus));
const amountTrueNeighbors = (r,c) =&gt; {
const neighbors = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
return neighbors.reduce((trueNeighbors, neighbor) =&gt; {
const x = r + neighbor[0];
const y = c + neighbor[1];
const isNeighborOnBoard = (x &gt;= 0 &amp;&amp; x &lt; totalBoardRows &amp;&amp; y &gt;= 0 &amp;&amp; y &lt; totalBoardColumns);
/* No need to count more than 4 alive neighbors */
if (trueNeighbors &lt; 4 &amp;&amp; isNeighborOnBoard &amp;&amp; boardStatus[x][y]) {
return trueNeighbors + 1;
} else {
return trueNeighbors;
}
}, 0);
};
for (let r = 0; r &lt; totalBoardRows; r++) {
for (let c = 0; c &lt; totalBoardColumns; c++) {
const totalTrueNeighbors = amountTrueNeighbors(r,c);
if (!boardStatus[r][c]) {
if (totalTrueNeighbors === 3) clonedBoardStatus[r][c] = true;
} else {
if (totalTrueNeighbors &lt; 2 || totalTrueNeighbors &gt; 3) clonedBoardStatus[r][c] = false;
}
}
}
return clonedBoardStatus;
};
this.setState(prevState =&gt; ({
boardStatus: nextStep(prevState),
generation: prevState.generation + 1
}));
}
// Other methods ...
}
</code></pre><h4 id="handling-the-speed-change-and-the-start-stop-action">Handling the speed change and the start/stop action</h4><p>These 3 methods only set the state value for the speed and isGameRunning properties.</p><p>Then, within the componentDidUpdate Lifecycle method, let’s clear and/or set a timer depending on different combinations of values. The timer schedules a call to the handleStep method at the specified speed intervals.</p><pre><code class="language-js">class App extends Component {
state = {...};
runStopButton = () =&gt; {...}
handleClearBoard = () =&gt; {...}
handleNewBoard = () =&gt; {...}
handleToggleCellStatus = () =&gt; {...}
handleStep = () =&gt; {...}
handleSpeedChange = newSpeed =&gt; {
this.setState({ speed: newSpeed });
}
handleRun = () =&gt; {
this.setState({ isGameRunning: true });
}
handleStop = () =&gt; {
this.setState({ isGameRunning: false });
}
componentDidUpdate(prevProps, prevState) {
const { isGameRunning, speed } = this.state;
const speedChanged = prevState.speed !== speed;
const gameStarted = !prevState.isGameRunning &amp;&amp; isGameRunning;
const gameStopped = prevState.isGameRunning &amp;&amp; !isGameRunning;
if ((isGameRunning &amp;&amp; speedChanged) || gameStopped) {
clearInterval(this.timerID);
}
if ((isGameRunning &amp;&amp; speedChanged) || gameStarted) {
this.timerID = setInterval(() =&gt; {
this.handleStep();
}, speed);
}
}
// Render method ...
}</code></pre><h4 id="the-render-method">The render method</h4><p>The last method within the App component returns the desired structure and information of the page to be displayed. Since the state belongs to the App component, we pass the state and methods to the components that need them as props.</p><pre><code class="language-js">class App extends Component {
// All previous methods ...
render() {
const { boardStatus, isGameRunning, generation, speed } = this.state;
return (
&lt;div&gt;
&lt;h1&gt;Game of Life&lt;/h1&gt;
&lt;BoardGrid boardStatus={boardStatus} onToggleCellStatus={this.handleToggleCellStatus} /&gt;
&lt;div className='flexRow upperControls'
&lt;span&gt;
{'+ '}
&lt;Slider speed={speed} onSpeedChange={this.handleSpeedChange} /&gt;
{' -'}
&lt;/span&gt;
{`Generation: ${generation}`}
&lt;/div&gt;
&lt;div className='flexRow lowerControls'&gt;
{this.runStopButton()}
&lt;button type='button' disabled={isGameRunning} onClick={this.handleStep}&gt;Step&lt;/button&gt;
&lt;button type='button' onClick={this.handleClearBoard}&gt;Clear Board&lt;/button&gt;
&lt;button type='button' onClick={this.handleNewBoard}&gt;New Board&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
);
}
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
