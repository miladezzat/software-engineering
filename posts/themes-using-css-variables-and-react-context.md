---
card: "/images/default.jpg"
tags: [Reactjs]
description: "CSS variables are really cool. You can use them for a lot of "
author: "Milad E. Fahmy"
title: "How to Create a Themes Engine Using CSS Variables and React Context"
created: "2021-08-16T10:05:37+02:00"
modified: "2021-08-16T10:05:37+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-reactjs tag-web-development tag-css tag-themes ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create a Themes Engine Using CSS Variables and React Context</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/01/cover-3.png 300w,
/news/content/images/size/w600/2020/01/cover-3.png 600w,
/news/content/images/size/w1000/2020/01/cover-3.png 1000w,
/news/content/images/size/w2000/2020/01/cover-3.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/01/cover-3.png" alt="How to Create a Themes Engine Using CSS Variables and React Context">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this tutorial I'll show you how to integrate them with React to create a <code>ThemeComponent</code> (with context!).</p>
<h2 id="cssvariablesinagist">CSS Variables in a Gist</h2>
<p>So first of all, I'd like to explain briefly what CSS variables (or in their formal name - CSS custom properties) are, and how to use them.</p>
<p>CSS variables are a way for us to define variables that will be applied throughout our application. The syntax is as follows:</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/01/cover-2.png" alt="CSS Variables"></p>
<p>What happens here?<br>
Using the <code>--{varName}</code> notation we can tell our browser to store a unique variable called <code>varName</code> (or in the example above, <code>primary</code>), and then we can use it with the <code>var(--{varName})</code> notation anywhere in our <code>.css</code> files.</p>
<p>Does it seem really simple? That's because it is. There's not much to it. According to <a href="https://caniuse.com/#feat=css-variables">caniuse.com</a> over 92% of users world wide use a browser that supports CSS variables (unless you really need IE support, in which case you're out of luck). So for the most part they're completely safe to use.</p>
<p>If you want to read more, you can find more information in the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">MDN page</a>.</p>
<h2 id="settingcssvariablesfromjavascript">Setting CSS Variables from JavaScript</h2>
<p>Setting and using CSS variables from JavaScript is just as easy as setting and using them in CSS. To get a value defined on an element:</p>
<pre><code class="language-js">const primary = getComputedStyle(element).getPropertyValue("--primary");
</code></pre>
<p>Will give us the value of the <code>primary</code> custom CSS property defined for the <code>element</code>.</p>
<p>Setting a custom CSS property works like so:</p>
<pre><code class="language-js">element.style.setProperty("--light", "#5cd2b6");
</code></pre>
<p>Or, if we want to set the property for the entire application, we can do:</p>
<pre><code class="language-js">document.documentElement.style.setProperty("--light", "#5cd2b6");
</code></pre>
<p>And now the <code>light</code> property will be accessible to all of our code.</p>
<h2 id="reactcontextinagist">React Context in a Gist</h2>
<p>The <code>React Context API</code> is the only way provided by React to pass props indirectly from one component to a descendent component.</p>
<p>In this guide I'll use the <code>useContext</code> hook, which you can read more about <a href="https://reactjs.org/docs/hooks-reference.html#usecontext">here</a>. But the principle is the same with class components.</p>
<p>First, we must initialize a context object:</p>
<pre><code class="language-jsx">import React from "react";
export const ThemeSelectorContext = React.createContext({
themeName: "dark"
});
</code></pre>
<p>The parameters passed to the <code>React.createContext</code> function are the default parameters of the context. Now that we have a context object, we can use it to "inject" props to our indirect descendants:</p>
<pre><code class="language-jsx">export default ({ children }) =&gt; (
&lt;ThemeSelectorContext.Provider value={{ themeName: "dark" }}&gt;
{children}
&lt;/ThemeSelectorContext.Provider&gt;
);
</code></pre>
<p>And now anyone who wants to read the values in our context can do it:</p>
<pre><code class="language-jsx">import React, { useContext } from "react";
import { ThemeSelectorContext } from "./themer";
export default () =&gt; {
const { themeName } = useContext(ThemeSelectorContext);
return &lt;div&gt;My theme is {themeName}&lt;/div&gt;;
};
</code></pre>
<p>A Voilà! No matter where in the component hierarchy our component lies, it has access to the <code>themeName</code> variable. If we want to allow editing the value in our context, we can pass a function like so:</p>
<pre><code class="language-jsx">export default ({ children }) =&gt; {
const [themeName, setThemeName] = useState("dark");
const toggleTheme = () =&gt; {
themeName === "dark" ? setThemeName("light") : setThemeName("dark");
};
return (
&lt;ThemeSelectorContext.Provider value={{ themeName, toggleTheme }}&gt;
{children}
&lt;/ThemeSelectorContext.Provider&gt;
);
};
</code></pre>
<p>And to use it:</p>
<pre><code class="language-jsx">import React, { useContext } from "react";
import { ThemeSelectorContext } from "./themer";
export default () =&gt; {
const { themeName, toggleTheme } = useContext(ThemeSelectorContext);
return (
&lt;&gt;
&lt;div&gt;My theme is {themeName}&lt;/div&gt;
&lt;button onClick={toggleTheme}&gt;Change Theme!&lt;/button&gt;
&lt;/&gt;
);
};
</code></pre>
<p>That's enough for our needs, but if you want you can further read on the <a href="https://reactjs.org/docs/context.html">Official React Context Documentation</a>.</p>
<h2 id="puttingeverythingtogether">Putting Everything Together</h2>
<p>Now that we know how to set CSS custom properties from JavaScript, and we can pass props down our component tree, we can make a really nice and simple "theme engine" for our application. First up we'll define our themes:</p>
<pre><code class="language-js">const themes = {
dark: {
primary: "#1ca086",
separatorColor: "rgba(255,255,255,0.20)",
textColor: "white",
backgroundColor: "#121212",
headerBackgroundColor: "rgba(255,255,255,0.05)",
blockquoteColor: "rgba(255,255,255,0.20)",
icon: "white"
},
light: {
primary: "#1ca086",
separatorColor: "rgba(0,0,0,0.08)",
textColor: "black",
backgroundColor: "white",
headerBackgroundColor: "#f6f6f6",
blockquoteColor: "rgba(0,0,0,0.80)",
icon: "#121212"
}
};
</code></pre>
<p>This just happens to be the color pallette I use for my blog, but really the sky is the limit when it comes to themes, so feel free to experiment.</p>
<p>Now we create our <code>ThemeSelectorContext</code>:</p>
<pre><code class="language-jsx">export const ThemeSelectorContext = React.createContext({
themeName: "dark",
toggleTheme: () =&gt; {}
});
</code></pre>
<p>And our theme component:</p>
<pre><code class="language-jsx">export default ({ children }) =&gt; {
const [themeName, setThemeName] = useState("dark");
const [theme, setTheme] = useState(themes[themeName]);
const toggleTheme = () =&gt; {
if (theme === themes.dark) {
setTheme(themes.light);
setThemeName("light");
} else {
setTheme(themes.dark);
setThemeName("dark");
}
};
return (
&lt;ThemeSelectorContext.Provider value={{ toggleTheme, themeName }}&gt;
{children}
&lt;/ThemeSelectorContext.Provider&gt;
);
};
</code></pre>
<p>In this component we store our selected theme object, and the selected theme name, and we defined a function to toggle our selected theme.</p>
<p>The last bit left is actually setting the CSS custom properties from our theme. We can easily do it using the <code>.style.setProperty</code> API:</p>
<pre><code class="language-js">const setCSSVariables = theme =&gt; {
for (const value in theme) {
document.documentElement.style.setProperty(`--${value}`, theme[value]);
}
};
</code></pre>
<p>Now for each value in our <code>theme</code> object we can access a CSS property with the same name (prefixed with <code>--</code> of course). The last thing we need is to run the <code>setCSSVariables</code> function every time the theme is toggled. So in our <code>Theme</code> component we can use the <code>useEffect</code> hook like so:</p>
<pre><code class="language-jsx">export default ({ children }) =&gt; {
// code...
useEffect(() =&gt; {
setCSSVariables(theme);
});
// code...
};
</code></pre>
<p>The full source code can be found <a href="https://github.com/dorshinar/blog/blob/master/src/components/themer/themer.jsx">on github</a>.</p>
<p>Using our theme is super convenient:</p>
<pre><code class="language-css">.title {
color: var(--primary);
}
</code></pre>
<p>And updating our theme is just as easy:</p>
<pre><code class="language-jsx">import Toggle from "react-toggle";
export default () =&gt; {
const { toggleTheme, themeName } = useContext(ThemeSelectorContext);
return &lt;Toggle defaultChecked={themeName === "dark"} onClick={toggleTheme} /&gt;;
};
</code></pre>
<p>For this example I'm using the <code>Toggle</code> component from <code>react-toggle</code>, but any toggle/button component would do just fine. Clicking the <code>Toggle</code> will call the <code>toggleTheme</code> function, and will update our theme for the entire app, no more configuration needed.</p>
<p>That's it! That's all you need to do to create a super simple, super clean theme engine for your application. If you want to see a real live example, you can check out the <a href="https://github.com/dorshinar/blog/blob/master/src/components/themer/themer.jsx">source code</a> of my blog.</p>
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
