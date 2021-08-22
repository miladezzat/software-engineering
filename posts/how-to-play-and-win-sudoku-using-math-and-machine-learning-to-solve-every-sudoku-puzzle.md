---
card: "/images/default.jpg"
tags: [Algorithms]
description: "Sudoku (and its predecessors) has been played for over a hund"
author: "Milad E. Fahmy"
title: "How to Play and Win Sudoku - Using Math and Machine Learning to Solve Every Sudoku Puzzle"
created: "2021-08-16T15:38:28+02:00"
modified: "2021-08-16T15:38:28+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-algorithms tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">How to Play and Win Sudoku - Using Math and Machine Learning to Solve Every Sudoku Puzzle</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/09/relaxation-2040676_1920-1.jpg 300w,
/news/content/images/size/w600/2019/09/relaxation-2040676_1920-1.jpg 600w,
/news/content/images/size/w1000/2019/09/relaxation-2040676_1920-1.jpg 1000w,
/news/content/images/size/w2000/2019/09/relaxation-2040676_1920-1.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/09/relaxation-2040676_1920-1.jpg" alt="How to Play and Win Sudoku - Using Math and Machine Learning to Solve Every Sudoku Puzzle">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
B1 B2 B3| B4 B5 B6| B7 B8 B9
C1 C2 C3| C4 C5 C6| C7 C8 C9
---------+---------+---------
D1 D2 D3| D4 D5 D6| D7 D8 D9
E1 E2 E3| E4 E5 E6| E7 E8 E9
F1 F2 F3| F4 F5 F6| F7 F8 F9
---------+---------+---------
G1 G2 G3| G4 G5 G6| G7 G8 G9
H1 H2 H3| H4 H5 H6| H7 H8 H9
I1 I2 I3| I4 I5 I6| I7 I8 I9</code></pre><p>Norvig defines the digits, rows, and columns as strings:</p><pre><code class="language-python">digits   = '123456789'
rows     = 'ABCDEFGHI'
cols     = digits</code></pre><p>You will notice that <code>cols</code> is set to equal <code>digits</code>. While they are the same value, the represent different things. The <code>digits</code> variable represents the digits that go in a square to solve the puzzle. The <code>cols</code> variable represents the names of the columns of the grid.</p><p>The squares are also defined as strings but the strings are created with a function:</p><pre><code class="language-python">def cross(A, B):
"Cross product of elements in A and elements in B."
return [a+b for a in A for b in B]
squares  = cross(rows, cols)</code></pre><p>The return part of the <code>cross</code> function ( <code>[a+b for a in A for b in B]</code>) is just a fancy way of writing this code:</p><pre><code class="language-python">squares = []
for a in rows:
for b in cols:
[cross(r, cols) for r in rows] +
[cross(rs, cs) for rs in ('ABC','DEF','GHI') for cs in ('123','456','789')])</code></pre><p>In Python a dictionary is a collection of key value pairs. The following lines of code creates dictionaries that use the square names as the keys and the three units or 20 peers as the values.</p><pre><code class="language-python">units = dict((s, [u for u in unitlist if s in u])
for s in squares)
peers = dict((s, set(sum(units[s],[]))-set([s]))
for s in squares)</code></pre><p>Now, the 3 units of ‘C2’ can be accessed with <code>units['C2']</code> and will give the following result:</p><pre><code class="language-python">[['A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2', 'I2'], ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9'], ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3']]</code></pre><p>Next we'll need two representations of the full Sudoku playing grid. A textual format named <code>grid</code> will be the initial state of the puzzle. </p><p>Another representation of the grid will also be needed to internally describe the current state of a puzzle. It will keep track of all remaining possible values for each square and be named <code>values</code>.</p><p>Similar to <code>units</code> and <code>peers</code>, <code>values</code> will be a dictionary with squares as keys. The value of each key will be a string of digits that are the possible digits for the square. If the digit was given in the puzzle or has been figured out, there will only be one digit in the key. For example, if there is a grid where A1 is 6 and A2 is empty, <code>values</code> would look like <code>{'A1': '6', 'A2': '123456789', ...}</code>.</p><h2 id="parse-grid-and-grid-values-functions">Parse Grid and Grid Values Functions</h2><p>The <code>parse_grid</code> function (code below) converts the grid to a dictionary of possible values. &nbsp;The <code>grid</code> is the given Sukou puzzle. The <code>grid_values</code> function extracts the important values which are digits, <code>0</code>, and <code>.</code>. In the <code>values</code> dictionary, the squares are the keys and the given digits in the grid are the values.</p><p>For each square with a given value, the <code>assign</code> function is used to assign the value to the square and eliminate the value from the peers. The <code>assign</code> function is covered soon. If anything goes wrong, the function returns False.</p><p>Here is the code for the <code>parse_grid</code> and <code>grid_values</code> functions.</p><pre><code class="language-python">def parse_grid(grid):
"""Convert grid to a dict of possible values, {square: digits}, or
return False if a contradiction is detected."""
## To start, every square can be any digit; then assign values from the grid.
values = dict((s, digits) for s in squares)
for s,d in grid_values(grid).items():
if d in digits and not assign(values, s, d):
return False ## (Fail if we can't assign d to square s.)
return values
def grid_values(grid):
"Convert grid into a dict of {square: char} with '0' or '.' for empties."
chars = [c for c in grid if c in digits or c in '0.']
assert len(chars) == 81
return dict(zip(squares, chars))</code></pre><h2 id="constraint-propagation">Constraint Propagation</h2><p>The initial values for the squares will be either specific digits (1-9) or an empty value. We can apply constraints to each square and eliminate values that are impossible. </p><p>Norvig uses two strategies to help determine the correct values for the squares (which correspond to the strategies above):</p><blockquote><em>(1) If a square has only one possible value, then eliminate that value from the square's peers.</em><br><em>(2) If a unit has only one possible place for a value, then put the value there.</em></blockquote><p>An example of the first strategy is that if we know that A1 has a value of 5, then 5 can be removed from all 20 of its peers. </p><p>Here is an example of the second strategy: if it can be determined that none of A1 through A8 contains 9 as a possible value, then we can be sure that A9 has a value of 9 since 9 must occur somewhere in the unit.</p><p>Every time a square is updated, it will cause possible updates to all its peers. This process will keep continuing and it is called <strong>constraint propagation</strong>.</p><h2 id="assign-function">Assign Function</h2><p>The <code>assign(values, s, d)</code> function is called inside the <code>parse_grid</code> function. It returns the updated values. It accepts three arguments: <code>values</code>, <code>s</code>, and <code>d</code>.</p><p>Remember, <code>values</code> is a dictionary that associates each square to all possible digit values for that square. <code>s</code> is the square we are assigning a value to and <code>d</code> is the value that needs to be assigned to the square. At the start <code>d</code> comes from the given puzzle we are solving.</p><p>It calls the function <code>eliminate(values, s, d)</code> to eliminate every value from s except d. </p><p>If there is a contradiction, such as two squares being assigned the same number, the eliminate function will return False.</p><pre><code class="language-python">def assign(values, s, d):
"""Eliminate all the other values (except d) from values[s] and propagate.
Return values, except return False if a contradiction is detected."""
other_values = values[s].replace(d, '')
if all(eliminate(values, s, d2) for d2 in other_values):
return values
else:
return False</code></pre><h2 id="eliminate-function">Eliminate Function</h2><p>We saw that the <code>assign</code> function calls the <code>eliminate</code> function. The eliminate function is called like this: <code>eliminate(values, s, d2) for d2 in other_values)</code> </p><p>The <code>eliminate</code> function will eliminate values that we know can't be a solution using the two strategies mentioned above. The first strategy is that when there is only one potential value for <code>s</code>, that value is removed from the peers of <code>s</code>. The second strategy is that when there is only one location that a value <code>d</code> can go, that value is removed from all the peers.</p><p>Here is the full function:</p><pre><code class="language-python">def eliminate(values, s, d):
"""Eliminate d from values[s]; propagate when values or places &lt;= 2.
Return values, except return False if a contradiction is detected."""
if d not in values[s]:
return values ## Already eliminated
values[s] = values[s].replace(d,'')
## (1) If a square s is reduced to one value d2, then eliminate d2 from the peers.
if len(values[s]) == 0:
return False ## Contradiction: removed last value
elif len(values[s]) == 1:
d2 = values[s]
if not all(eliminate(values, s2, d2) for s2 in peers[s]):
return False
## (2) If a unit u is reduced to only one place for a value d, then put it there.
for u in units[s]:
dplaces = [s for s in u if d in values[s]]
if len(dplaces) == 0:
return False ## Contradiction: no place for this value
elif len(dplaces) == 1:
# d can only be in one place in unit; assign it there
if not assign(values, dplaces[0], d):
return False
return values</code></pre><h2 id="display-function">Display Function</h2><p>The <code>display</code> function will display the result after calling <code>parse_grid</code>.</p><pre><code class="language-python">def display(values):
"Display these values as a 2-D grid."
width = 1+max(len(values[s]) for s in squares)
line = '+'.join(['-'*(width*3)]*3)
for r in rows:
print(''.join(values[r+c].center(width)+('|' if c in '36' else '') for c in cols))
if r in 'CF':
print(line)
def search(values):
"Using depth-first search and propagation, try all possible values."
if values is False:
return False ## Failed earlier
if all(len(values[s]) == 1 for s in squares):
return values ## Solved!
## Chose the unfilled square s with the fewest possibilities
n,s = min((len(values[s]), s) for s in squares if len(values[s]) &gt; 1)
return some(search(assign(values.copy(), s, d))
for d in values[s])</code></pre><p>Per the rules of Sudoku, the puzzle is solved when each square has only one value. The <code>search</code> function is called recursively until the puzzle is solved. <code>values</code> is copied to avoid complexity.</p><p>Here is the <code>some</code> function used to check if an attempt succeeds to solve the puzzle.</p><pre><code class="language-python">def some(seq):
"Return some element of seq that is true."
for e in seq:
if e: return e
return False</code></pre><p>This code will now solve every Sudoku puzzle. You can view the full code below.</p><h2 id="full-sudoku-solver-code">Full Sudoku solver code</h2><pre><code class="language-python">def cross(A, B):
"Cross product of elements in A and elements in B."
return [a+b for a in A for b in B]
digits   = '123456789'
rows     = 'ABCDEFGHI'
cols     = digits
squares  = cross(rows, cols)
unitlist = ([cross(rows, c) for c in cols] +
[cross(r, cols) for r in rows] +
[cross(rs, cs) for rs in ('ABC','DEF','GHI') for cs in ('123','456','789')])
units = dict((s, [u for u in unitlist if s in u])
for s in squares)
peers = dict((s, set(sum(units[s],[]))-set([s]))
for s in squares)
def parse_grid(grid):
"""Convert grid to a dict of possible values, {square: digits}, or
return False if a contradiction is detected."""
## To start, every square can be any digit; then assign values from the grid.
values = dict((s, digits) for s in squares)
for s,d in grid_values(grid).items():
if d in digits and not assign(values, s, d):
return False ## (Fail if we can't assign d to square s.)
return values
def grid_values(grid):
"Convert grid into a dict of {square: char} with '0' or '.' for empties."
chars = [c for c in grid if c in digits or c in '0.']
assert len(chars) == 81
return dict(zip(squares, chars))
def assign(values, s, d):
"""Eliminate all the other values (except d) from values[s] and propagate.
Return values, except return False if a contradiction is detected."""
other_values = values[s].replace(d, '')
if all(eliminate(values, s, d2) for d2 in other_values):
return values
else:
return False
def eliminate(values, s, d):
"""Eliminate d from values[s]; propagate when values or places &lt;= 2.
Return values, except return False if a contradiction is detected."""
if d not in values[s]:
return values ## Already eliminated
values[s] = values[s].replace(d,'')
## (1) If a square s is reduced to one value d2, then eliminate d2 from the peers.
if len(values[s]) == 0:
return False ## Contradiction: removed last value
elif len(values[s]) == 1:
d2 = values[s]
if not all(eliminate(values, s2, d2) for s2 in peers[s]):
return False
## (2) If a unit u is reduced to only one place for a value d, then put it there.
for u in units[s]:
dplaces = [s for s in u if d in values[s]]
if len(dplaces) == 0:
return False ## Contradiction: no place for this value
elif len(dplaces) == 1:
# d can only be in one place in unit; assign it there
if not assign(values, dplaces[0], d):
return False
return values
def solve(grid): return search(parse_grid(grid))
def search(values):
"Using depth-first search and propagation, try all possible values."
if values is False:
return False ## Failed earlier
if all(len(values[s]) == 1 for s in squares):
return values ## Solved!
## Chose the unfilled square s with the fewest possibilities
n,s = min((len(values[s]), s) for s in squares if len(values[s]) &gt; 1)
return some(search(assign(values.copy(), s, d))
for d in values[s])
def some(seq):
"Return some element of seq that is true."
for e in seq:
if e: return e
return False</code></pre>
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
