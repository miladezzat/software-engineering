---
card: "/images/default.jpg"
tags: [JavaScript]
description: JavaScript keyboard events help you capture user interactions
author: "Milad E. Fahmy"
title: "JavaScript Keycode List – Keypress Event Key Codes for Enter, Space, Backspace, and More"
created: "2021-08-15T19:27:40+02:00"
modified: "2021-08-15T19:27:40+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Keycode List – Keypress Event Key Codes for Enter, Space, Backspace, and More</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/01/freeCodeCamp-Cover.png 300w,
/news/content/images/size/w600/2021/01/freeCodeCamp-Cover.png 600w,
/news/content/images/size/w1000/2021/01/freeCodeCamp-Cover.png 1000w,
/news/content/images/size/w2000/2021/01/freeCodeCamp-Cover.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/01/freeCodeCamp-Cover.png" alt="JavaScript Keycode List – Keypress Event Key Codes for Enter, Space, Backspace, and More">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>JavaScript keyboard events help you capture user interactions with the keyboard. </p>
<p>Like many other JavaScript events, the <code>KeyboardEvent</code> interface provides all the required properties and methods for handling every keystroke a user makes using the keyboard.</p>
<p>There have been many articles written about how they work and how to use them. At the same time, <a href="https://www.w3.org/TR/uievents/#events-keyboardevents">W3.org</a> keeps updating the specification by introducing new properties, deprecating existing ones, and marking certain code as legacy. &nbsp;</p>
<p>Because of this, it is essential for web developers to keep learning about the <code>KeyboardEvent</code> interface to know what exactly they should use and what's no longer relevant.</p>
<p>In this article, we will learn about:</p>
<ul>
<li>The KeyboardEvent interface.</li>
<li>The keyboard event types we need to focus on.</li>
<li>The keyboard event types we may not ever need.</li>
<li>Which properties you need in practice and how different browsers handle them.</li>
<li>What is deprecated, and what's in use.</li>
<li>A playground to try things out as we learn.</li>
<li>Finally, the current list of key codes for reference and future use.</li>
</ul>
<p>Hope you enjoy it.</p>
<h1 id="the-keyboardevent-interface-and-the-event-types">The KeyboardEvent interface and the event types</h1>
<p>The KeyboardEvent interface provides information using the defined constants, properties, and a single method (as of January 2021). It extends the <code>UIEvent</code> interface which eventually extends the <code>Event</code> interface.</p>
<figcaption>KeyboardEvent Hierarchy</figcaption>
</figure>
<p>There are primarily three keyboard event types, <code>keydown</code>, <code>keypress</code> and, <code>keyup</code>. We can get contextual information about these events from the <code>KeyboardEvent</code> interface's properties and methods. </p>
<p>You can add each of these event types to an HTML element or <code>document</code> object using the <code>addEventListener</code> method. Here is an example of listening to a <code>keydown</code> event on an element whose id is, 'type-here':</p><pre><code class="language-js">let elem = document.getElementById('type-here');
elem.addEventListener("keydown", function (event) {
// The parameter event is of the type KeyboardEvent
addRow(event);
});</code></pre>
<p>Alternatively, you can use the handler methods like, <code>onKeydown(event)</code>, <code>onKeyup(event)</code>, <code>onKeypress(event)</code> with the element to handle keyboard events. Here is an example of handling a <code>keyup</code> event on an input element:</p><pre><code class="language-html">&lt;input type="text" id="type-here" onkeyup="doSomething(event)"&gt;</code></pre>
<p>If you print the <code>event</code> object in the browser's console, you will see all its properties and methods along with the ones it inherits from the <code>UIEvent</code> and <code>Event</code> interfaces.</p>
<figcaption>I have pressed the key, <code>a</code> while handling the <code>keyup</code> event</figcaption>
</figure>
<h1 id="try-this-interactive-keyboard-event-playground">Try This Interactive Keyboard Event Playground</h1>
<p>Before we go any further, how about a playground to explore all the keyboard events, their properties, characteristics, and so on? I think it will be awesome to use it alongside this article and beyond. </p>
<p>Just focus your cursor anywhere in the app embedded below, and type any key to see the contextual information about it. </p>
<p>You can also filter out the events you want by unchecking the checkboxes at the top. So give it a try:</p>
<figcaption>The Keyboard Events Playground</figcaption>
</figure>
<blockquote>If you have any issues in accessing the playground above, you can access this tool directly here: <a href="https://keyevents.netlify.app/">https://keyevents.netlify.app/</a><br><br>And you can find the source code of the demo from here: <a href="https://github.com/atapas/js-keyevents-demo">https://github.com/atapas/js-keyevents-demo</a></blockquote>
<h1 id="keydown-keypress-keyup-which-one-should-you-use">keydown, keypress, keyup - which one should you use?</h1>
<p>The keyboard events are:</p>
<ul>
<li><code>keydown</code>: It fires when any key is pressed down.</li>
<li><code>keypress</code>: It fires only when a key that produces a <a href="https://www.w3.org/TR/uievents/#character-value">character value</a> is pressed down. For example, if you press the key <code>a</code>, this event will fire as the key <code>a</code> produces a character value of <code>97</code>. On the other hand, this event will not fire when you press the <code>shift</code> key as it doesn't produce a character value. </li>
<li><code>keyup</code>: It fires when any key is released.</li>
</ul>
<p>If all three events are attached to a DOM element, the firing order would be:</p>
<ol>
<li>First, keydown</li>
<li>Next, keypress (with the condition stated above)</li>
<li>Last, keyup</li>
</ol>
<p>Among these events, the most used Keyboard event is (or, should be) <code>keydown</code> because:</p>
<ul>
<li>The <code>keydown</code> event has the maximum coverage of keys to produce the contextual information. The <code>keypress</code> event works only for a subset of the keys. You can't capture the Alt, Ctrl, Shift, Meta, and other similar key events with a keypress. This also means that we can not fire the keypress event with key combinations like <code>Ctrl Z</code>, <code>Shift Tab</code>, and so on.</li>
<li>Moreover, <a href="https://www.w3.org/TR/uievents/#event-type-keypress">the <code>keypress</code> event</a> has been deprecated. This is a big enough reason to avoid it.</li>
<li>While both <code>keydown</code> and <code>keyup</code> events cover all the keys and are well supported by most browsers, there are a few differences that push <code>keydown</code> ahead of <code>keyup</code>. The keydown event fires before the browser processes the key, whereas the keyup event fires after the browser processes the key. If you cancel a keydown event (say, using <code>event.preventDefault()</code>), the browser's action will be canceled too. In case of the keyup event, the browser's action will not be canceled even when you have canceled the event.</li>
</ul>
<p>In the example below, we are using <code>event.preventDefault()</code> when a <code>keydown</code> or <code>keyup</code> event fires. The bowser's action to write the key characters into the textbox will not be performed in the case of <code>keydown</code> but it will continue to happen for <code>keyup</code>.</p>
<figcaption><code>keydown</code> vs <code>keyup</code></figcaption>
</figure>
<p>With all that explanation, the <code>keydown</code> event is a clear winner and should become the most popular (used) key event type. </p>
<h1 id="how-to-use-the-keyboardevent-properties-in-practice">How to use the KeyboardEvent properties in practice</h1>
<p>This is the billion dollar question! The shortest answer is, it depends. But on what? It depends on:</p>
<ul>
<li>The browser support for your application</li>
<li>How legacy is your application code is and how much are you willing to refactor?</li>
</ul>
<p>But before we get there, let's see a preview of some of the the useful properties and methods of the <code>KeyboardEvent</code> interface.</p>
<table>
<thead>
<tr>
<th>Proprty/Method</th>
<th>Description</th>
<th>Deprecated/Outdated</th>
</tr>
</thead>
<tbody>
<tr>
<td>altKey</td>
<td>Returns a boolean(true/false). The value is <code>true</code> when <code>Alt</code> key is pressed.</td>
<td>No</td>
</tr>
<tr>
<td>ctrlKey</td>
<td>Returns a boolean(true/false). The value is <code>true</code> when <code>Control</code> key is pressed.</td>
<td>No</td>
</tr>
<tr>
<td>shiftKey</td>
<td>Returns a boolean(true/false). The value is <code>true</code> when <code>Shift</code> key is pressed.</td>
<td>No</td>
</tr>
<tr>
<td>metaKey</td>
<td>Returns a boolean(true/false). The value is <code>true</code> when any of the <code>Meta</code> keys are pressed.</td>
<td>No</td>
</tr>
<tr>
<td>code</td>
<td>Code value of the Physical Key.</td>
<td>No</td>
</tr>
<tr>
<td>key</td>
<td>The actual value of the key pressed.</td>
<td>No</td>
</tr>
<tr>
<td>getModifierState() method</td>
<td>Returns a boolean(true/false). The value <code>true</code> indicates the <code>on</code> state of these keys, <code>CapsLock</code>, <code>NumLock</code>, <code>Alt</code>, <code>Control</code>, <code>Shift</code>, <code>Meta</code>, etc.</td>
<td>No</td>
</tr>
<tr>
<td>charCode</td>
<td>Returns the Unicode value. This has been deprecated and we should use the <code>key</code> property instead.</td>
<td>Yes</td>
</tr>
<tr>
<td>keyCode</td>
<td>Returns the neumeric code of the pressed value. This has been deprecated and we should use the <code>key</code> property instead.</td>
<td>Yes</td>
</tr>
<tr>
<td>which</td>
<td>Returns the neumeric code of the pressed value. This has been deprecated and we should use the <code>key</code> property instead.</td>
<td>Yes</td>
</tr>
</tbody>
</table>
<p>The last three properties are deprecated and you should use the <code>key</code> property instead. The <code>key</code> property has the <a href="https://caniuse.com/?search=Keyboardevent.key">widest browser support</a>. </p>
<p>It is supported on:</p>
<ul>
<li>Microsoft Edge: Version &gt;= 79</li>
<li>Firefox: Version &gt;= 29</li>
<li>Google Chrome: Version &gt;= 51</li>
<li>Safari: Version &gt;= 10.1</li>
</ul>
<p>So as long as you are not using any of the older browsers, the <code>event.key</code> property should be enough for you to identify a key. In case you have to support an older browser, a better fallback would be the <code>event.which</code> property.</p><pre><code class="language-js">window.addEventListener("keydown", function (event) {
if (event.key !== undefined) {
// Handle the event with KeyboardEvent.key
} else if (event.which !== undefined) {
// Handle the event with KeyboardEvent.which
}
});</code></pre>
<p>If your code uses any of the deprecated properties and you have an opportunity to refactor that code, it is always better to go for it.</p>
<h2 id="modifier-keys">Modifier Keys</h2>
<p>The modifier keys are the special keys on your keyboard that modify the default behavior of the other keys. <code>Control</code>, <code>Shift</code>, and <code>Alt</code> are some modifier keys. When a modifier key is combined with another key, you can expect a different action to occur. </p>
<p>For example, if you press the key <code>z</code>, it is supposed to return the key and code for the letter z. If you combine it with the modifier <code>Control</code> and press <code>Control z</code>, you will likely get an <code>Undo</code> operation. Let's see it with some more examples in the next section.</p>
<p>The properties, <code>event.altKey</code>, <code>event.ctrlKey</code>, <code>event.shiftKey</code>, and so on help detect if a modifier key has been pressed.</p>
<h2 id="key-combinations">Key Combinations</h2>
<p>We can combine multiple keys and perform actions based on the key combinations. The code snippet below shows how to combine the <code>Control</code> and <code>z</code> key to define an action:</p><pre><code class="language-js">document
.getElementById("to_focus")
.addEventListener("keydown", function(event) {
if (event.ctrlKey &amp;&amp; event.key === "z") {
// Do Something, may be an 'Undo' operation
}
});</code></pre>
<p>Here is another example that demos a few more key combinations. Please give it a try:</p>
<figcaption>Try Key Combinations</figcaption>
</figure>
<h1 id="a-full-list-of-key-event-values">A Full List of Key Event Values</h1>
<p>The table below shows a list of keys with the <code>event.which</code>, <code>event.key</code> and <code>event.code</code> values.</p>
<table>
<thead>
<tr>
<th>Key Name</th>
<th>event.which</th>
<th>event.key</th>
<th>event.code</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td>backspace</td>
<td>8</td>
<td>Backspace</td>
<td>Backspace</td>
<td></td>
</tr>
<tr>
<td>tab</td>
<td>9</td>
<td>Tab</td>
<td>Tab</td>
<td></td>
</tr>
<tr>
<td>enter</td>
<td>13</td>
<td>Enter</td>
<td>Enter</td>
<td></td>
</tr>
<tr>
<td>shift(left)</td>
<td>16</td>
<td>Shift</td>
<td>ShiftLeft</td>
<td><code>event.shiftKey</code> is true</td>
</tr>
<tr>
<td>shift(right)</td>
<td>16</td>
<td>Shift</td>
<td>ShiftRight</td>
<td><code>event.shiftKey</code> is true</td>
</tr>
<tr>
<td>ctrl(left)</td>
<td>17</td>
<td>Control</td>
<td>ControlLeft</td>
<td><code>event.ctrlKey</code> is true</td>
</tr>
<tr>
<td>ctrl(right)</td>
<td>17</td>
<td>Control</td>
<td>ControlRight</td>
<td><code>event.ctrlKey</code> is true</td>
</tr>
<tr>
<td>alt(left)</td>
<td>18</td>
<td>Alt</td>
<td>AltLeft</td>
<td><code>event.altKey</code> is true</td>
</tr>
<tr>
<td>alt(right)</td>
<td>18</td>
<td>Alt</td>
<td>AltRight</td>
<td><code>event.altKey</code> is true</td>
</tr>
<tr>
<td>pause/break</td>
<td>19</td>
<td>Pause</td>
<td>Pause</td>
<td></td>
</tr>
<tr>
<td>caps lock</td>
<td>20</td>
<td>CapsLock</td>
<td>CapsLock</td>
<td></td>
</tr>
<tr>
<td>escape</td>
<td>27</td>
<td>Escape</td>
<td>Escape</td>
<td></td>
</tr>
<tr>
<td>space</td>
<td>32</td>
<td></td>
<td>Space</td>
<td>The <code>event.key</code> value is a single space.</td>
</tr>
<tr>
<td>page up</td>
<td>33</td>
<td>PageUp</td>
<td>PageUp</td>
<td></td>
</tr>
<tr>
<td>page down</td>
<td>34</td>
<td>PageDown</td>
<td>PageDown</td>
<td></td>
</tr>
<tr>
<td>end</td>
<td>35</td>
<td>End</td>
<td>End</td>
<td></td>
</tr>
<tr>
<td>home</td>
<td>36</td>
<td>Home</td>
<td>Home</td>
<td></td>
</tr>
<tr>
<td>left arrow</td>
<td>37</td>
<td>ArrowLeft</td>
<td>ArrowLeft</td>
<td></td>
</tr>
<tr>
<td>up arrow</td>
<td>38</td>
<td>ArrowUp</td>
<td>ArrowUp</td>
<td></td>
</tr>
<tr>
<td>right arrow</td>
<td>39</td>
<td>ArrowRight</td>
<td>ArrowRight</td>
<td></td>
</tr>
<tr>
<td>down arrow</td>
<td>40</td>
<td>ArrowDown</td>
<td>ArrowDown</td>
<td></td>
</tr>
<tr>
<td>print screen</td>
<td>44</td>
<td>PrintScreen</td>
<td>PrintScreen</td>
<td></td>
</tr>
<tr>
<td>insert</td>
<td>45</td>
<td>Insert</td>
<td>Insert</td>
<td></td>
</tr>
<tr>
<td>delete</td>
<td>46</td>
<td>Delete</td>
<td>Delete</td>
<td></td>
</tr>
<tr>
<td>0</td>
<td>48</td>
<td>0</td>
<td>Digit0</td>
<td></td>
</tr>
<tr>
<td>1</td>
<td>49</td>
<td>1</td>
<td>Digit1</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td>50</td>
<td>2</td>
<td>Digit2</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>51</td>
<td>3</td>
<td>Digit3</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td>52</td>
<td>4</td>
<td>Digit4</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>53</td>
<td>5</td>
<td>Digit5</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>54</td>
<td>6</td>
<td>Digit6</td>
<td></td>
</tr>
<tr>
<td>7</td>
<td>55</td>
<td>7</td>
<td>Digit7</td>
<td></td>
</tr>
<tr>
<td>8</td>
<td>56</td>
<td>8</td>
<td>Digit8</td>
<td></td>
</tr>
<tr>
<td>9</td>
<td>57</td>
<td>9</td>
<td>Digit9</td>
<td></td>
</tr>
<tr>
<td>a</td>
<td>65</td>
<td>a</td>
<td>KeyA</td>
<td></td>
</tr>
<tr>
<td>b</td>
<td>66</td>
<td>b</td>
<td>KeyB</td>
<td></td>
</tr>
<tr>
<td>c</td>
<td>67</td>
<td>c</td>
<td>KeyC</td>
<td></td>
</tr>
<tr>
<td>d</td>
<td>68</td>
<td>d</td>
<td>KeyD</td>
<td></td>
</tr>
<tr>
<td>e</td>
<td>69</td>
<td>e</td>
<td>KeyE</td>
<td></td>
</tr>
<tr>
<td>f</td>
<td>70</td>
<td>f</td>
<td>KeyF</td>
<td></td>
</tr>
<tr>
<td>g</td>
<td>71</td>
<td>g</td>
<td>KeyG</td>
<td></td>
</tr>
<tr>
<td>h</td>
<td>72</td>
<td>h</td>
<td>KeyH</td>
<td></td>
</tr>
<tr>
<td>i</td>
<td>73</td>
<td>i</td>
<td>KeyI</td>
<td></td>
</tr>
<tr>
<td>j</td>
<td>74</td>
<td>j</td>
<td>KeyJ</td>
<td></td>
</tr>
<tr>
<td>k</td>
<td>75</td>
<td>k</td>
<td>KeyK</td>
<td></td>
</tr>
<tr>
<td>l</td>
<td>76</td>
<td>l</td>
<td>KeyL</td>
<td></td>
</tr>
<tr>
<td>m</td>
<td>77</td>
<td>m</td>
<td>KeyM</td>
<td></td>
</tr>
<tr>
<td>n</td>
<td>78</td>
<td>n</td>
<td>KeyN</td>
<td></td>
</tr>
<tr>
<td>o</td>
<td>79</td>
<td>o</td>
<td>KeyO</td>
<td></td>
</tr>
<tr>
<td>p</td>
<td>80</td>
<td>p</td>
<td>KeyP</td>
<td></td>
</tr>
<tr>
<td>q</td>
<td>81</td>
<td>q</td>
<td>KeyQ</td>
<td></td>
</tr>
<tr>
<td>r</td>
<td>82</td>
<td>r</td>
<td>KeyR</td>
<td></td>
</tr>
<tr>
<td>s</td>
<td>83</td>
<td>s</td>
<td>KeyS</td>
<td></td>
</tr>
<tr>
<td>t</td>
<td>84</td>
<td>t</td>
<td>KeyT</td>
<td></td>
</tr>
<tr>
<td>u</td>
<td>85</td>
<td>u</td>
<td>KeyU</td>
<td></td>
</tr>
<tr>
<td>v</td>
<td>86</td>
<td>v</td>
<td>KeyV</td>
<td></td>
</tr>
<tr>
<td>w</td>
<td>87</td>
<td>w</td>
<td>KeyW</td>
<td></td>
</tr>
<tr>
<td>x</td>
<td>88</td>
<td>x</td>
<td>KeyX</td>
<td></td>
</tr>
<tr>
<td>y</td>
<td>89</td>
<td>y</td>
<td>KeyY</td>
<td></td>
</tr>
<tr>
<td>z</td>
<td>90</td>
<td>z</td>
<td>KeyZ</td>
<td></td>
</tr>
<tr>
<td>left window key</td>
<td>91</td>
<td>Meta</td>
<td>MetaLeft</td>
<td><code>event.metaKey</code> is true</td>
</tr>
<tr>
<td>right window key</td>
<td>92</td>
<td>Meta</td>
<td>MetaRight</td>
<td><code>event.metaKey</code> is true</td>
</tr>
<tr>
<td>select key (Context Menu)</td>
<td>93</td>
<td>ContextMenu</td>
<td>ContextMenu</td>
<td></td>
</tr>
<tr>
<td>numpad 0</td>
<td>96</td>
<td>0</td>
<td>Numpad0</td>
<td></td>
</tr>
<tr>
<td>numpad 1</td>
<td>97</td>
<td>1</td>
<td>Numpad1</td>
<td></td>
</tr>
<tr>
<td>numpad 2</td>
<td>98</td>
<td>2</td>
<td>Numpad2</td>
<td></td>
</tr>
<tr>
<td>numpad 3</td>
<td>99</td>
<td>3</td>
<td>Numpad3</td>
<td></td>
</tr>
<tr>
<td>numpad 4</td>
<td>100</td>
<td>4</td>
<td>Numpad4</td>
<td></td>
</tr>
<tr>
<td>numpad 5</td>
<td>101</td>
<td>5</td>
<td>Numpad5</td>
<td></td>
</tr>
<tr>
<td>numpad 6</td>
<td>102</td>
<td>6</td>
<td>Numpad6</td>
<td></td>
</tr>
<tr>
<td>numpad 7</td>
<td>103</td>
<td>7</td>
<td>Numpad7</td>
<td></td>
</tr>
<tr>
<td>numpad 8</td>
<td>104</td>
<td>8</td>
<td>Numpad8</td>
<td></td>
</tr>
<tr>
<td>numpad 9</td>
<td>105</td>
<td>9</td>
<td>Numpad9</td>
<td></td>
</tr>
<tr>
<td>multiply</td>
<td>106</td>
<td>*</td>
<td>NumpadMultiply</td>
<td></td>
</tr>
<tr>
<td>add</td>
<td>107</td>
<td>+</td>
<td>NumpadAdd</td>
<td></td>
</tr>
<tr>
<td>subtract</td>
<td>109</td>
<td>-</td>
<td>NumpadSubtract</td>
<td></td>
</tr>
<tr>
<td>decimal point</td>
<td>110</td>
<td>.</td>
<td>NumpadDecimal</td>
<td></td>
</tr>
<tr>
<td>divide</td>
<td>111</td>
<td>/</td>
<td>NumpadDivide</td>
<td></td>
</tr>
<tr>
<td>f1</td>
<td>112</td>
<td>F1</td>
<td>F1</td>
<td></td>
</tr>
<tr>
<td>f2</td>
<td>113</td>
<td>F2</td>
<td>F2</td>
<td></td>
</tr>
<tr>
<td>f3</td>
<td>114</td>
<td>F3</td>
<td>F3</td>
<td></td>
</tr>
<tr>
<td>f4</td>
<td>115</td>
<td>F4</td>
<td>F4</td>
<td></td>
</tr>
<tr>
<td>f5</td>
<td>116</td>
<td>F5</td>
<td>F5</td>
<td></td>
</tr>
<tr>
<td>f6</td>
<td>117</td>
<td>F6</td>
<td>F6</td>
<td></td>
</tr>
<tr>
<td>f7</td>
<td>118</td>
<td>F7</td>
<td>F7</td>
<td></td>
</tr>
<tr>
<td>f8</td>
<td>119</td>
<td>F8</td>
<td>F8</td>
<td></td>
</tr>
<tr>
<td>f9</td>
<td>120</td>
<td>F9</td>
<td>F9</td>
<td></td>
</tr>
<tr>
<td>f10</td>
<td>121</td>
<td>F10</td>
<td>F10</td>
<td></td>
</tr>
<tr>
<td>f11</td>
<td>122</td>
<td>F11</td>
<td>F11</td>
<td></td>
</tr>
<tr>
<td>f12</td>
<td>123</td>
<td>F12</td>
<td>F12</td>
<td></td>
</tr>
<tr>
<td>num lock</td>
<td>144</td>
<td>NumLock</td>
<td>NumLock</td>
<td></td>
</tr>
<tr>
<td>scroll lock</td>
<td>145</td>
<td>ScrollLock</td>
<td>ScrollLock</td>
<td></td>
</tr>
<tr>
<td>audio volume mute</td>
<td>173</td>
<td>AudioVolumeMute</td>
<td></td>
<td>⚠️ The <code>event.which</code> value is 181 in Firefox. Also FF provides the code value as, <code>VolumeMute</code></td>
</tr>
<tr>
<td>audio volume down</td>
<td>174</td>
<td>AudioVolumeDown</td>
<td></td>
<td>⚠️ The <code>event.which</code> value is 182 in Firefox. Also FF provides the code value as, <code>VolumeDown</code></td>
</tr>
<tr>
<td>audio volume up</td>
<td>175</td>
<td>AudioVolumeUp</td>
<td></td>
<td>⚠️ The <code>event.which</code> value is 183 in Firefox. Also FF provides the code value as, <code>VolumeUp</code></td>
</tr>
<tr>
<td>media player</td>
<td>181</td>
<td>LaunchMediaPlayer</td>
<td></td>
<td>⚠️ The ️<code>event.which</code> value is 0(no value) in Firefox. Also FF provides the code value as, <code>MediaSelect</code></td>
</tr>
<tr>
<td>launch application 1</td>
<td>182</td>
<td>LaunchApplication1</td>
<td></td>
<td>⚠️ The ️<code>event.which</code> value is 0(no value) in Firefox. Also FF provides the code value as, <code>LaunchApp1</code></td>
</tr>
<tr>
<td>launch application 2</td>
<td>183</td>
<td>LaunchApplication2</td>
<td></td>
<td>⚠️ The ️<code>event.which</code> value is 0(no value) in Firefox. Also FF provides the code value as, <code>LaunchApp2</code></td>
</tr>
<tr>
<td>semi-colon</td>
<td>186</td>
<td>;</td>
<td>Semicolon</td>
<td>⚠️ The <code>event.which</code> value is 59 in Firefox</td>
</tr>
<tr>
<td>equal sign</td>
<td>187</td>
<td>=</td>
<td>Equal</td>
<td>⚠️ The <code>event.which</code> value is 61 in Firefox</td>
</tr>
<tr>
<td>comma</td>
<td>188</td>
<td>,</td>
<td>Comma</td>
<td></td>
</tr>
<tr>
<td>dash</td>
<td>189</td>
<td>-</td>
<td>Minus</td>
<td>⚠️ The <code>event.which</code> value is 173 in Firefox</td>
</tr>
<tr>
<td>period</td>
<td>190</td>
<td>.</td>
<td>Period</td>
<td></td>
</tr>
<tr>
<td>forward slash</td>
<td>191</td>
<td>/</td>
<td>Slash</td>
<td></td>
</tr>
<tr>
<td>Backquote/Grave accent</td>
<td>192</td>
<td>`</td>
<td>Backquote</td>
<td></td>
</tr>
<tr>
<td>open bracket</td>
<td>219</td>
<td>[</td>
<td>BracketLeft</td>
<td></td>
</tr>
<tr>
<td>back slash</td>
<td>220</td>
<td>\</td>
<td>Backslash</td>
<td></td>
</tr>
<tr>
<td>close bracket</td>
<td>221</td>
<td>]</td>
<td>BracketRight</td>
<td></td>
</tr>
<tr>
<td>single quote</td>
<td>222</td>
<td>'</td>
<td>Quote</td>
<td></td>
</tr>
</tbody>
</table>
<p>Please Note:</p>
<ul>
<li><code>event.which</code> has been deprecated(or outdated)</li>
<li>The <code>event.code</code> value is the same for small letters(a) and capital letters(A). Hoever the <code>event.key</code> value represents the actual letter.</li>
<li>The <code>event.which</code> value is different in Firefox(FF) and other browsers for the keys, <code>equal(=)</code>, <code>semicolon(;)</code>, and <code>dash/minus(-)</code></li>
</ul>
<h1 id="how-about-the-virtual-keyboard">How about the Virtual Keyboard?</h1>
<p>So what about virtual keyboards, like using our mobile phones or tablets or any other input devices? </p>
<p>The <a href="https://w3c.github.io/uievents/#code-virtual-keyboards">specification says</a> that if the virtual keyboard has a similar key layout and functionality to a standard keyboard, then it must result in an appropriate code attribute. Otherwise, it is not going to return the right value.</p>
<h1 id="in-summary">In Summary</h1>
<p>To Summarize:</p>
<ul>
<li>You can use the <code>KeyboardEvent</code> to capture user interactions using a Keyboard.</li>
<li>There are primarily three key events, <code>keydown</code>, <code>keypress</code>, and <code>keyup</code>.</li>
<li>We should use the <code>keydown</code> event type as much as possible as it satisfies most of the use-cases.</li>
<li>The <code>keypress</code> event type has been deprecated.</li>
<li>The <code>event.which</code> property has been deprecated. Use <code>event.key</code> wherever possible.</li>
<li>If you have to support an older browser, use appropriate fallback for key detection.</li>
<li>We can combine multiple keys and perform operations.</li>
<li>The virtual keyboard supports these events as long as the layout and functions are similar to the standard keyboard.</li>
</ul>
<p>That's all for now. Thank you for reading this far! Let's connect. You can @ me on <a href="https://twitter.com/tapasadhikary">Twitter (@tapasadhikary)</a> with comments or feel free to follow.</p>
<figcaption>From https://giphy.com/</figcaption>
</figure>
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
