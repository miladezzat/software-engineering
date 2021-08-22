---
card: "https://cdn-media-1.freecodecamp.org/images/1*-ANKA_z3Mz_RFYKRjPnSNQ.jpeg"
tags: [JavaScript]
description: "You may have heard of Reason before. It’s a syntax on top of "
author: "Milad E. Fahmy"
title: "Learn ReasonML by building Tic Tac Toe in React"
created: "2021-08-16T10:13:34+02:00"
modified: "2021-08-16T10:13:34+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-reasonml tag-web-development tag-react tag-functional-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Learn ReasonML by building Tic Tac Toe in React</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*-ANKA_z3Mz_RFYKRjPnSNQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*-ANKA_z3Mz_RFYKRjPnSNQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*-ANKA_z3Mz_RFYKRjPnSNQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*-ANKA_z3Mz_RFYKRjPnSNQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*-ANKA_z3Mz_RFYKRjPnSNQ.jpeg" alt="Learn ReasonML by building Tic Tac Toe in React">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
let make = _children =&gt; {
...component,
render: _self =&gt;
&lt;div&gt;
&lt;div className="title"&gt;
(ReasonReact.string("Tic Tac Toe"))
&lt;/div&gt;
&lt;Game /&gt;
&lt;/div&gt;,
| Cross
| Circle;
type field =
| Empty
| Marked(player);</code></pre><p>Here we define <code>player</code> and <code>field</code> <strong>variants</strong>. When defining a variant, you need to use a <code>type</code> keyword.</p><p>Since we are building a Tic Tac Toe game, we’ll need two players. So, the <code>player</code> type will have two possible constructors — <code>Cross</code> and <code>Circle</code>.</p><p>If we think about the playing board, we know that each <code>field</code> type can have two possible constructors — either <code>Empty</code> or <code>Marked</code> by one of the players.</p><p>If you take a look at the <code>Marked</code> constructor, you can see that we are using it as a data structure. We use a variant to hold another piece of data. In our case, we pass it the <code>player</code> variant. This behavior is pretty powerful since it enables us to combine different variants and types together to create more complex types.</p><p>So, we’ve got the <code>field</code> variant. However, we need to define the whole playing board which consists of rows of fields.</p><pre><code>type row = list(field);
type board = list(row);</code></pre><p>Each <code>row</code> is a list of <code>field</code>s and the playing <code>board</code> is composed of a list of <code>row</code>s.</p><p>The <code>list</code> is one of Reason’s data structures—similar to the JavaScript array. The difference is, it’s immutable. Reason also has an <code>array</code> as a mutable fixed-length list. We’ll come back to these structures later.</p><pre><code>type gameState =
| Playing(player)
| Winner(player)
| Draw;</code></pre><p>Another variant we need to define is a <code>gameState</code>. The game can have three possible states. One of the <code>player</code>s can be <code>Playing</code>, be a <code>Winner</code>, or we can have a <code>Draw</code>.</p><p>Now, we have all the types we need to compose the state of our game.</p><pre><code class="language-jsx">type state = {
board,
gameState,
};</code></pre><p>Our component’s state is a <code>record</code> composed of the <code>board</code> and the <code>gameState</code>.</p><p>Before moving any further, I’d like to talk about modules. In Reason, files are modules. For example, we stored all our variants inside <code>SharedTypes.re</code> file. This code gets automatically wrapped inside the module like this:</p><pre><code class="language-jsx">module SharedTypes {
/* variant types code */
let make = _children =&gt; {
...component,
initialState: () =&gt; initialState,
reducer: (action: action, state: state) =&gt; ...,
render: ({state, send}) =&gt; ...,
};</code></pre><p>In the <code>App</code> component, we’ve overridden only the <code>render</code> method. Here, we are overriding <code>reducer</code> and <code>initialState</code> properties as well. We’ll talk about reducers later.</p><p><code>initialState</code> is a function that (surprisingly) returns the initial state which we stored in a variable.</p><pre><code class="language-jsx">let initialState = {
board: [
[Empty, Empty, Empty],
[Empty, Empty, Empty],
[Empty, Empty, Empty],
],
gameState: Playing(Cross),
};</code></pre><p>If you scroll up a little bit and check our <code>state</code> type, you’ll see that the <code>initialState</code> has the same structure. It’s composed of the <code>board</code> that consists of <code>row</code>s of <code>field</code>s. At the beginning of the game all fields are <code>Empty</code>.</p><p>However, their status may change as the game goes on. Another part of the state is the <code>gameState</code> which is initially set to the<code>Cross</code> player who plays first.</p><h3 id="rendering-board">Rendering board</h3><p>Let’s take a look at the <code>render</code> method of our <code>Game</code> component.</p><pre><code class="language-jsx">render: ({state, send}) =&gt;
&lt;div className="game"&gt;
&lt;Board
state
onRestart=(_evt =&gt; send(Restart))
onMark=(id =&gt; send(ClickSquare(id)))
/&gt;
&lt;/div&gt;,</code></pre><p>We already knew that it receives the <code>self</code> argument. Here, we use destructuring to access the <code>state</code> and the <code>send</code> function. This works just like in JavaScript.</p><p>The render method returns the <code>Board</code> component and passes it the <code>state</code> and two state handlers as props. The first one takes care of the app restart and the second one fires when the field gets marked by a player.</p><p>You might’ve noticed that we aren’t writing <code>state=state</code> when passing the <code>state</code> prop. In Reason, if we are not changing the prop’s name, we can pass prop using this simplified syntax.</p><p>Now, we can take a look at the <code>Board</code> component. I’ve omitted most of the <code>render</code> method for the time being.</p><pre><code class="language-jsx">let component = ReasonReact.statelessComponent("Board");
let make = (~state: state, ~onMark, ~onRestart, _children) =&gt; {
...component,
render: _ =&gt;
&lt;div className="game-board"&gt;
/* ... */
&lt;/div&gt;,
let increasedNumbers = List.map((num) =&gt; num + 2, numbers);
Js.log(increasedNumbers);  /* [3,[7,[10,[11,[17,0]]]]] */</code></pre><p>What? You’re saying that the printed result looks weird? This is because the lists in Reason are <a href="https://en.wikipedia.org/wiki/Linked_list" rel="noopener">linked</a>.</p><p>Printing lists in your code can be confusing. Fortunately, you can convert it into an <code>array</code> using the <code>Array.of_list</code> method.</p><pre><code class="language-jsx">Js.log(Array.of_list(increasedNumbers));  /* [3,7,10,11,17] */</code></pre><p>Let’s come back to our app and remind ourselves how our <code>state</code> looks.</p><pre><code class="language-jsx">let initialState = {
board: [
[Empty, Empty, Empty],
[Empty, Empty, Empty],
[Empty, Empty, Empty],
],
gameState: Playing(Cross),
};</code></pre><p>Inside the Board’s <code>render</code> method we first map over <code>board</code> which is composed of a list of rows. So, by mapping over it, we’ll gain access to the <code>row</code>s. Then, we render the <code>BoardRow</code> component.</p><pre><code class="language-jsx">let component = ReasonReact.statelessComponent("Board");
let make = (~state: state, ~onMark, ~onRestart, _children) =&gt; {
...component,
render: _ =&gt;
&lt;div className="game-board"&gt;
(
ReasonReact.array(
Array.of_list(
List.mapi(
(index: int, row: row) =&gt;
&lt;BoardRow
key=(string_of_int(index))
gameState=state.gameState
row
onMark
index
/&gt;,
state.board,
),
),
)
)
/* ... */</code></pre><p>We are using the <code>List.mapi</code> method, which provides us with an <code>index</code> argument that we need to uniquely define our ids.</p><p>When mapping the <code>list</code> to the JSX elements, we need to do two additional things.</p><p>First, we need to convert it to an <code>array</code> using <code>Array.of_list</code>. Secondly, we need to convert the result to the <code>reactElement</code> using <code>ReasonReact.array</code>, since we (as already mentioned) can’t simply pass the string to the JSX element like in React.</p><p>To get to the field values, we need to map over each <code>row</code> as well. We are doing this inside the <code>BoardRow</code> component. Here, each element from the <code>row</code> is then mapped to the <code>Square</code> component.</p><pre><code class="language-jsx">let component = ReasonReact.statelessComponent("BoardRow");
let make = (~gameState: gameState, ~row: row, ~onMark, ~index: int, _children) =&gt; {
...component,
render: (_) =&gt;
&lt;div className="board-row"&gt;
(ReasonReact.array(
Array.of_list(
List.mapi(
(ind: int, value: field) =&gt; {
let id = string_of_int(index) ++ string_of_int(ind);
&lt;Square
key=id
value
onMark=(() =&gt; onMark(id))
gameState
/&gt;;
},
row,
),
),
))
&lt;/div&gt;,
};</code></pre><p>Using these two mappings, our board gets rendered. You’ll agree with me that the readability of this code isn’t so good because of all the function wrappings.</p><p>To improve it, we can use the <code>pipe</code> operator which takes our <code>list</code> data and pipes it through our functions. Here’s the second mapping example — this time using <code>pipe</code>.</p><pre><code class="language-jsx">let component = ReasonReact.statelessComponent("BoardRow");
let make = (~gameState: gameState, ~row: row, ~onMark, ~index: int, _children) =&gt; {
...component,
render: (_) =&gt;
&lt;div className="board-row"&gt;
(
row
|&gt; List.mapi((ind: int, value: field) =&gt; {
let id = string_of_int(index) ++ string_of_int(ind
&lt;Square
key=id
value
onMark=(() =&gt; onMark(id))
gameState
/&gt;;
})
|&gt; Array.of_list
|&gt; ReasonReact.array
)
&lt;/div&gt;,
let make = (~value: field, ~gameState: gameState, ~onMark, _children) =&gt; {
...component,
render: _self =&gt;
&lt;button
className=(getClass(gameState, value))
disabled=(gameState |&gt; isFinished |&gt; Js.Boolean.to_js_boolean)
onClick=(_evt =&gt; onMark())&gt;
(value |&gt; toValue |&gt; toString)
&lt;/button&gt;,
};</code></pre><p>The <code>Square</code> component renders a button and passes it some props. We are using a couple of helper functions here, but I won’t talk about all of them in detail. You can find them all in the <a href="https://github.com/codinglawyer/reason-tic-tac-toe" rel="noopener">repo</a>.</p><p>The button’s class is calculated using the <code>getClass</code> helper function which turns the square green when one of the players wins. When this happens, all the <code>Square</code>s will be disabled as well.</p><p>To render the button’s <code>value</code>, we use two helpers.</p><pre><code class="language-jsx">let toValue = (field: field) =&gt;
switch (field) {
| Marked(Cross) =&gt; "X"
| Marked(Circle) =&gt; "O"
| Empty =&gt; ""
};</code></pre><p><code>toValue</code> will convert the <code>field</code> type to the string using pattern matching. We’ll talk about pattern matching later. For now, you need to know that we are matching the <code>field</code> data to our three patterns. So, the result would be <code>X</code>, <code>O</code>, or an empty string. Then, we use <code>toString</code> to convert it to the <code>reactElement</code>.</p><p>Phew. We’ve just rendered the game board. Let’s quickly recap how we did it.</p><p>Our top-level <code>App</code> component renders the <code>Game</code> component which holds the game state and passes it down along with the handlers to the <code>Board</code> component.</p><p>The <code>Board</code> then takes the board state prop and maps the rows to the <code>BoardRow</code> component which maps the rows to the <code>Square</code> components. Each <code>Square</code> has an onClick handler that will fill it with a square or a circle.</p><h3 id="make-it-do-something-already-">Make it do something already!</h3><p>Let’s take a look at how our logic controlling the game works.</p><p>Since we have a board, we can allow a player to click on any square. When this happens, the <code>onClick</code> handler is fired and the <code>onMark</code> handler is called.</p><pre><code class="language-jsx">/* Square component */
&lt;button
className=(getClass(gameState, value))
disabled=(gameState |&gt; isFinished |&gt; Js.Boolean.to_js_boolean)
onClick=(_evt =&gt; onMark())&gt;
(value |&gt; toValue |&gt; toString)
&lt;/button&gt;</code></pre><p>The <code>onMark</code> handler got passed from the <code>BoardRow</code> component, but it was originally defined in the <code>Game</code> component that takes care of the state.</p><pre><code class="language-jsx">/* Game component */
render: ({state, send}) =&gt;
&lt;div className="game"&gt;
&lt;Board
state
onRestart=(_evt =&gt; send(Restart))
onMark=(id =&gt; send(ClickSquare(id)))
/&gt;
&lt;/div&gt;,</code></pre><p>We can see that the <code>onMark</code> prop is a <code>ClickSquare</code> reducer, which means we are using it to update the state (as in Redux). The <code>onRestart</code> handler works similarly.</p><p>Notice that we are passing square’s unique <code>id</code> to the <code>onMark</code> handler inside the <code>BoardRow</code> component.</p><pre><code class="language-jsx">/* BoardRow component */
(
row
|&gt; List.mapi((ind: int, value: field) =&gt; {
let id = string_of_int(index) ++ string_of_int(ind
&lt;Square
key=id
value
onMark=(() =&gt; onMark(id))
gameState
/&gt;;
})
|&gt; Array.of_list
|&gt; ReasonReact.array
)</code></pre><p>Before taking a look at our reducers in detail, we need to define actions to which our reducers will respond.</p><pre><code class="language-jsx">type action =
| ClickSquare(string)
| Restart;</code></pre><p>As with the global variant types, this forces us to think about our logic before we start implementing it. We define two action variants. <code>ClickSquare</code> takes one argument that will have a type of a<code>string</code>.</p><p>Now, let’s take a look at our reducers.</p><pre><code class="language-jsx">let updateBoard = (board: board, gameState: gameState, id) =&gt;
board
|&gt; List.mapi((ind: int, row: row) =&gt;
row
|&gt; List.mapi((index: int, value: field) =&gt;
string_of_int(ind) ++ string_of_int(index) === id ?
switch (gameState, value) {
| (_, Marked(_)) =&gt; value
| (Playing(player), Empty) =&gt; Marked(player)
| (_, Empty) =&gt; Empty
} :
value
)
);
reducer: (action: action, state: state) =&gt;
switch (action) {
| Restart =&gt; ReasonReact.Update(initialState)
| ClickSquare((id: string)) =&gt;
let updatedBoard = updateBoard(state.board, state.gameState, id);
ReasonReact.Update({
board: updatedBoard,
gameState:
checkGameState3x3(updatedBoard, state.board, state.gameState),
});
| (_, Marked(_)) =&gt; value
| (Playing(player), Empty) =&gt; Marked(player)
| (_, Empty) =&gt; Empty
}</code></pre><p>In our case, we are using a <a href="https://reasonml.github.io/docs/en/tuple.html" rel="noopener">tuple</a> to represent our <strong>data</strong>. Tuples are data structures that separate data with commas. Our <code>tuple</code> contains the <code>gameState</code> and the <code>value</code> (containing the <code>field</code> type).</p><p>Then we define multiple <strong>patterns</strong> that we’ll match against our data. The first match determines the result of the entire pattern matching.</p><p>By writing an underscore inside the pattern, we are telling the compiler that we don’t care what the particular value is. In other words, we want to have a match every time.</p><p>For example, the first pattern is matched when the <code>value</code> is <code>Marked</code> by any player. So, we don’t care about the <code>gameState</code> and we don’t care about the player type either.</p><p>When this pattern is matched, the result is the original <code>value</code>. This pattern prevents players from overriding already marked <code>Squares</code>.</p><p>The second pattern addresses the situation when any player is playing, and the field is <code>Empty</code>. Here, we use the <code>player</code> type in the pattern and then again in the result. We are basically saying that we don’t care about which player is playing (<code>Circle</code> or <code>Cross</code>) but we still want to mark the square according to the player that is actually playing.</p><p>The last pattern acts as the default one. If the first or the second pattern isn’t matched, the third will always match. Here, we don’t care about the <code>gameState</code>.</p><p>However, since we’re checking for the <code>Playing</code> game state in the previous pattern, we are now checking for the <code>Draw</code> or <code>Winner</code> <code>gameState</code> type. If this is the case, we’ll leave the field <code>Empty</code>. This default scenario prevents players from continuing to play when the game is over.</p><p>A cool thing about pattern matching in Reason is that the compiler will warn you if you haven’t covered all the possible pattern matches. This will save you a lot of trouble, because you’ll always know if you’ve covered all the possible scenarios. So, if the compiler is not giving you any warnings, your pattern matching will never fail.</p><p>When the pattern matching is finished, the particular field gets updated. When all the mappings are done, we get a new board state and store it as the <code>updatedBoard</code>. We can then update the component’s state by calling <code>ReasonReact.Update</code>.</p><pre><code class="language-jsx">ReasonReact.Update({
board: updatedBoard,
gameState:
let winningCombs = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6],
];</code></pre><p>We passed this list to the <code>checkGameState</code> function as the first argument.</p><pre><code class="language-jsx">let checkGameState3x3 = checkGameState(winningCombs);</code></pre><p>By doing this, we are taking advantage of the <a href="https://en.wikipedia.org/wiki/Currying" rel="noopener">currying</a> principle. When we pass the <code>winningCombs</code> to the <code>checkGameState</code> function, we get back a new function waiting for the rest of the arguments to be passed. We store this new function as the <code>checkGameState3x3</code>.</p><p>This behavior is really helpful, since we are able to configure the <code>checkGameState</code> function depending on the width and height of the board.</p><p>Let’s see what’s going on inside the <code>checkGameState</code> function.</p><pre><code class="language-jsx">let checkGameState =
(
winningRows: winningRows,
updatedBoard: board,
oldBoard: board,
gameState: gameState,
) =&gt;
oldBoard == updatedBoard ?
gameState :
{
let flattenBoard = List.flatten(updatedBoard);
let rec check = (rest: winningRows) =&gt; {
let head = List.hd(rest);
let tail = List.tl(rest);
switch (
getWinner(flattenBoard, head),
gameEnded(flattenBoard),
tail,
) {
| (Cross, _, _) =&gt; Winner(Cross)
| (Circle, _, _) =&gt; Winner(Circle)
| (_, true, []) =&gt; Draw
| (_, false, []) =&gt; whosPlaying(gameState)
| _ =&gt; check(tail)
};
};
check(winningRows);
| Cross
| Circle
| NoOne;
switch (
getWinner(flattenBoard, head),
gameEnded(flattenBoard),
tail,
) { ...</code></pre><p>Inside the <code>switch</code> statement, we use a <code>tuple</code> again to represent our data. Our <code>tuple</code> contains three elements—winner type as a result of the <code>getWinner</code> function, boolean as a result of the <code>gameEnded</code> function, and remaining <code>list</code> elements (<code>tail</code>).</p><p>Before going any further, let’s talk a bit about these two helper functions.</p><p>We’ll take a look inside the <code>getWinner</code> function first.</p><pre><code class="language-jsx">let getWinner = (flattenBoard, coords) =&gt;
switch (
List.nth(flattenBoard, List.nth(coords, 0)),
List.nth(flattenBoard, List.nth(coords, 1)),
List.nth(flattenBoard, List.nth(coords, 2)),
) {
| (Marked(Cross), Marked(Cross), Marked(Cross)) =&gt; Cross
| (Marked(Circle), Marked(Circle), Marked(Circle)) =&gt; Circle
| (_, _, _) =&gt; NoOne
};</code></pre><p>When we call the <code>check</code> recursive function for the first time, the <code>head</code> will be the first element of the <code>winningRows</code>, that is <code>[0, 1, 2]</code> which is a <code>list</code>. We pass <code>head</code> to the <code>getWinner</code> function as the <code>coords</code> argument along with the <code>flattenBoard</code>.</p><p>Again, we use the pattern matching with the <code>tuple</code>. Inside the <code>tuple</code>, we use the <code>List.nth</code> method to access the equivalent positions of the <code>coords</code> coordinates in the flattened board <code>list</code>. The <code>List.nth</code> function takes a <code>list</code> and a number and returns the list’s element to that position.</p><p>So, our <code>tuple</code> consists of the three winning coordinates of our board that we’ve accessed using <code>List.nth</code>.</p><p>Now, we can match our <code>tuple</code> data against the patterns. The first two patterns check if all three fields are marked by the same player. If they are, we’ll return the winner — <code>Cross</code> or <code>Circle</code>. Otherwise, we’ll return <code>NoOne</code>.</p><p>Let’s see what’s going on inside the <code>gameEnded</code> function. It checks if all the fields are <code>Marked</code> and returns a boolean.</p><pre><code class="language-jsx">let gameEnded = board =&gt;
List.for_all(
field =&gt; field == Marked(Circle) || field == Marked(Cross),
board,
);</code></pre><p>Since we know what values can be returned from our helper functions, let’s come back to our <code>check</code> function.</p><pre><code class="language-jsx">switch (
getWinner(flattenBoard, head),
gameEnded(flattenBoard),
tail,
) {
| (Cross, _, _) =&gt; Winner(Cross)
| (Circle, _, _) =&gt; Winner(Circle)
| (_, true, []) =&gt; Draw
| (_, false, []) =&gt; whosPlaying(gameState)
| _ =&gt; check(tail)
};</code></pre><p>Our pattern matching can now determine if the game ended in a win or draw. If these cases are not matched, we’ll move to the following case. If it’s matched, the game will continue and the <code>whosPlaying</code> function will be called, and the other player will take a turn.</p><pre><code class="language-jsx">let whosPlaying = (gameState: gameState) =&gt;
switch (gameState) {
| Playing(Cross) =&gt; Playing(Circle)
| _ =&gt; Playing(Cross)
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
