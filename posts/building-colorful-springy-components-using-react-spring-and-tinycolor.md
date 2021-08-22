---
card: "/images/default.jpg"
tags: [JavaScript]
description: Recently, I decided to build a web application to allow desig
author: "Milad E. Fahmy"
title: "Building colorful, springy components using React Spring and Tinycolor"
created: "2021-08-15T19:33:24+02:00"
modified: "2021-08-15T19:33:24+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-ux tag-accessibility tag-design ">
<header class="post-full-header">
<h1 class="post-full-title">Building colorful, springy components using React Spring and Tinycolor</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/07/philip-veater-AKmdNgzZESM-unsplash-1.jpg 300w,
/news/content/images/size/w600/2019/07/philip-veater-AKmdNgzZESM-unsplash-1.jpg 600w,
/news/content/images/size/w1000/2019/07/philip-veater-AKmdNgzZESM-unsplash-1.jpg 1000w,
/news/content/images/size/w2000/2019/07/philip-veater-AKmdNgzZESM-unsplash-1.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/07/philip-veater-AKmdNgzZESM-unsplash-1.jpg" alt="Building colorful, springy components using React Spring and Tinycolor">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Recently, I decided to build <a href="https://rainbo.xyz/" rel="nofollow noopener">a web application</a> to allow designers and developers to generate variants for colors and to check color accessibility. In this post, I would like to give you a walkthrough of how I built some of the components I would use in that app.</p>
<p>Full source code for the application can be found at the end of this article, along with a link to a Storybook instance with all of the described components.</p>
<h2 id="dependencies">Dependencies</h2>
<p>To help me build these components I used <a href="https://github.com/bgrins/TinyColor" rel="nofollow noopener">Tinycolor</a>, a library with a range of color utility functions which you can use to manipulate, transform, and represent colors.</p>
<p>I have also used <a href="https://www.react-spring.io/" rel="nofollow noopener">React Spring</a>, which is a spring physics based library that allows you to add animations to your project really easily.</p>
<h2 id="color-tile">Color Tile</h2>
<figcaption>Color Tile Designs</figcaption>
</figure>
<p>The simplest component out of our list, the color tile will serve as a building block for other components. The responsibility of this component is to display a color, along with its name and HEX value.</p>
sm: "2.5rem",
md: "4rem",
lg: "6rem"
};
const ColorTile = ({
color,
name,
hideName,
hideHex,
size,
className,
customTileStyle,
...otherProps
}) =&gt; {
const containerClass = cx(styles.container, className);
const tileClass = cx(styles.tile, {
"margin-bottom--xxs": !hideName || !hideHex
});
const dimension = TILE_SIZES[size];
const tileStyle = {
"--color-tile-width": dimension,
"--color-tile-height": dimension,
"--color-tile-bg": color,
"--color-tile-border-color": "transparent",
...customTileStyle
};
const tile = &lt;div style={tileStyle} className={tileClass} /&gt;;
const nameClass = cx("text--colors-grey-lighten-30", {
"margin-bottom--xxs": !hideHex
});
const hex = useMemo(() =&gt; tinycolor(color).toHexString(), [color]);
return (
&lt;div className={containerClass} {...otherProps}&gt;
{tile}
{!hideName &amp;&amp; &lt;small className={nameClass}&gt;{name}&lt;/small&gt;}
{!hideHex &amp;&amp; (
&lt;small className="text--colors-grey-lighten-30"&gt;{hex}&lt;/small&gt;
)}
&lt;/div&gt;
);
};
ColorTile.propTypes = {
/**
* Color to display
*/
color: PropTypes.string.isRequired,
/**
* Name of the color
*/
name: PropTypes.string,
/**
* Hide the name text if true
*/
hideName: PropTypes.bool,
/**
* Hide the hex color value display if true
*/
hideHex: PropTypes.bool,
/**
* Size of the tile
*/
size: PropTypes.oneOf(["sm", "md", "lg"]),
/**
* Custom styles to apply to the tile element
*/
customTileStyle: PropTypes.object
};
ColorTile.defaultProps = {
size: "md",
hideName: true,
hideHex: true,
customTileStyle: {}
};</code></pre>
<figcaption>Color Tile Implementation</figcaption>
</figure>
<h4 id="notes-on-the-implementation">Notes on the implementation</h4>
<ol>
<li>Line 17, and line 19 might look slightly strange if you’re not familiar with the excellent <a href="https://www.npmjs.com/package/classnames" rel="nofollow noopener">classnames</a> library. Basically, the classnames library allows you to concatenate and conditionally apply CSS classes to your elements.</li>
<li>On line 36 you can see that we calculate the HEX string of the color passed in. Since we’re using the color prop passed in directly in the CSS, it can be in any acceptable CSS color format, not just HEX. It could be an rgba string for example. This is where Tinycolor comes in. We can give it any of those formats and it returns a nicely formatted HEX string we can display along with our tile.</li>
<li>Sticking with line 36, you might also have noticed that the function to calculate the HEX string is wrapped in <code>useMemo</code> . This is because we only want to compute this value if the color changes. We can avoid recalculating if any of the other props change which might cause a rerender. I’m still learning the new Hooks API, so this might not be the most appropriate usage of <code>useMemo</code> since it’s probably not a particularly expensive operation, but I think it was a nice way to handle it regardless. You can learn more about the <code>useMemo</code> function or Hooks in general <a href="https://reactjs.org/docs/hooks-reference.html#usememo" rel="nofollow noopener">here</a>.</li>
</ol>
width: var(--color-tile-width);
height: var(--color-tile-height);
background-color: var(--color-tile-bg);
border: 3px solid var(--color-tile-border-color);
cursor: pointer;
}
.container {
display: inline-flex;
flex-direction: column;
align-items: center;
}</code></pre>
<figcaption>Color Tile Styling</figcaption>
</figure>
<h4 id="notes-on-the-styling">Notes on the styling</h4>
<p>The styling of our tile is really simple. We have the tile itself which takes its dimensions and color from the variables we pass in.</p>
<p>Then, we have the container which holds the tile, the color name, and the HEX value. It’s a simple flex container that keeps our elements aligned.</p>
<h2 id="color-picker">Color Picker</h2>
<figcaption>Color Picker&nbsp;Designs</figcaption>
</figure>
<p>For our Color Picker, we are going to reuse the Color Tile component, along with a picker from the <a href="https://casesandberg.github.io/react-color/" rel="nofollow noopener">react-color</a> package.</p>
import PropTypes from "prop-types";
import { ChromePicker } from "react-color";
import ColorTile from "../ColorTile/ColorTile";
import styles from "./ColorPicker.module.scss";
const ColorPicker = ({ color, onChange, className, tileClassName }) =&gt; {
const [isPickerOpen, setPickerOpen] = useState(false);
const onSwatchClick = () =&gt; {
setPickerOpen(!isPickerOpen);
};
const onColorChange = color =&gt; {
onChange(color.hex);
};
return (
&lt;div className={className}&gt;
&lt;ColorTile
color={color}
onClick={onSwatchClick}
hideHex={false}
size="lg"
className={tileClassName}
/&gt;
{isPickerOpen &amp;&amp; (
&lt;div className={styles.popover}&gt;
&lt;div className={styles.cover} onClick={onSwatchClick} /&gt;
&lt;ChromePicker color={color} onChangeComplete={onColorChange} /&gt;
&lt;/div&gt;
)}
&lt;/div&gt;
);
};
ColorPicker.propTypes = {
/**
* Currently selected color value
*/
color: PropTypes.string,
/**
* Callback fn for when the color changes
*/
onChange: PropTypes.func,
/**
* Custom classes to apply to the color tile
*/
tileClassName: PropTypes.string
};
ColorPicker.defaultProps = {
onChange: () =&gt; {}
};
export default ColorPicker;</code></pre>
<figcaption>Color Picker Implementation</figcaption>
</figure>
<h4 id="notes-on-the-implementation-1">Notes on the implementation</h4>
<p>Our color picker is composed of a <code>ColorTile</code> which shows the currently selected color, along with its HEX value, and a <code>ChromePicker</code> from the <code>react-color</code> library which actually allows us to select a color.</p>
<p>We have some state which controls whether the <code>ChromePicker</code> is visible or not, and a callback function to let whatever component is using our picker know when the color changes. <code>react-color</code> provides lots of information when the color changes, but the hex value was enough for my purposes as you can see on line 17.</p>
<h2 id="color-list">Color List</h2>
<figcaption>Color List Designs</figcaption>
</figure>
<p>Our Color List component takes a list of colors and renders them as a list containing color tiles. Our Color List is intended to show a base color as a slightly larger tile, with the remaining tiles representing the variants of the base shown as smaller tiles. We also allow naming our list, and this will be used to display the name of the base color.</p>
<p>Our Color List also brings the “springy” part of this walkthrough. The tiles will be animated on entry using React Spring ?</p>
const COL_DIRECTION = "col";
const ALL_DIRECTIONS = [ROW_DIRECTION, COL_DIRECTION];
/**
* Renders a list of colors
*/
const ColorPaletteList = ({
name,
colors,
direction,
onColorClick,
onColorDoubleClick,
animationRef,
getCustomTileStyle,
renderTileBy,
...otherProps
}) =&gt; {
const headingClass = cx("margin-bottom--xs", {
"text--align-left": direction === ROW_DIRECTION,
"text--align-center": direction === COL_DIRECTION
});
const containerClass = cx({
[styles.containerCol]: direction === COL_DIRECTION,
[styles.containerRow]: direction === ROW_DIRECTION
});
const tileClass = cx({
"margin-bottom--xs": direction === COL_DIRECTION,
"margin-right--xs": direction === ROW_DIRECTION
});
const trailMargin =
direction === COL_DIRECTION ? "marginBottom" : "marginRight";
const trails = useTrail(colors.length, {
from: { [trailMargin]: 20, opacity: 0 },
to: { [trailMargin]: 0, opacity: 1 },
ref: animationRef
});
return (
&lt;div {...otherProps}&gt;
&lt;h4 className={headingClass}&gt;{name || ""}&lt;/h4&gt;
&lt;div className={containerClass}&gt;
{trails.map((trailProps, idx) =&gt; {
const color = colors[idx];
const onClick = () =&gt; onColorClick(color);
return (
&lt;animated.div
key={`animated-tile-${color.name}-${idx}`}
style={trailProps}
&gt;
{renderTileBy(color, tileClass, onClick, false, false)}
&lt;/animated.div&gt;
);
})}
&lt;/div&gt;
&lt;/div&gt;
);
};
ColorPaletteList.propTypes = {
/**
* Name of the list
*/
name: PropTypes.string,
/**
* The list of colors to display
*/
colors: PropTypes.arrayOf(
PropTypes.shape({
color: PropTypes.string,
name: PropTypes.string,
isMain: PropTypes.bool
})
).isRequired,
/**
* Determines the layout of the tiles
*/
direction: PropTypes.oneOf(ALL_DIRECTIONS),
/**
* Callback for when a color in the list is clicked
*/
onColorClick: PropTypes.func,
/**
* Ref used to hook into the animation
*/
animationRef: PropTypes.object,
/**
* Pass custom styles for a particular color tile
*/
getCustomTileStyle: PropTypes.func,
/**
* Render prop to render the color tile
*/
renderTileBy: PropTypes.func
};
ColorPaletteList.defaultProps = {
direction: COL_DIRECTION,
onColorClick: () =&gt; {},
onColorDoubleClick: () =&gt; {},
getCustomTileStyle: () =&gt; ({}),
renderTileBy: (color, className, onClick, hideName, hideHex) =&gt; (
&lt;ColorTile
key={color.name}
color={color.color}
name={color.name}
size={color.isMain ? "lg" : "md"}
className={className}
onClick={onClick}
hideName={hideName}
hideHex={hideHex}
/&gt;
)
};</code></pre>
<figcaption>Color List Implementation</figcaption>
</figure>
<h4 id="notes-on-the-implementation-2">Notes on the implementation</h4>
<ol>
<li>On line 34–40 you can see our implementation of React Spring using <code>useTrail</code> . You can read more about trails <a href="https://www.react-spring.io/docs/hooks/use-trail" rel="nofollow noopener">here</a>. We animate the margin on the Color Tile container and depending on whether the list is column aligned or row aligned this could be the margin on the right or bottom.</li>
<li>On line 39 you can see that we pass a ref to our animation. This is so that we can pass a ref to our Color List to delay the animation. This would be useful is we wanted to trigger a specific sequence of animations from a parent component.</li>
</ol>
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
.containerRow {
display: flex;
flex-direction: row;
align-items: center;
flex-wrap: wrap;
}</code></pre>
<figcaption>Color List Styling</figcaption>
</figure>
<h2 id="color-pair">Color Pair</h2>
<figcaption>Color Pair Designs</figcaption>
</figure>
<p>The Color Pair component takes two colors and displays them side by side along with some accessibility information. The idea is that a developer or designer would pair colors to ensure they work together when used as a background/foreground combination.</p>
background,
foreground,
hideCloseBtn,
onCloseBtnClick,
closeBtnIcon,
...otherProps
}) =&gt; {
const title = `${background.name}/${foreground.name}`;
const bgTileStyle = {
"--tile-color": background.color
};
const fgTileStyle = {
"--tile-color": foreground.color
};
const tileContainerClass = cx(styles.tileContainer, "margin-right--sm");
const titleContainerClass = cx(
styles.titleContainer,
"margin-bottom--xxs",
"text--colors-grey-lighten-30"
);
const isAAPass = tinycolor.isReadable(background.color, foreground.color, {
level: "AA",
size: "small"
});
const isAAAPass = tinycolor.isReadable(background.color, foreground.color, {
level: "AAA",
size: "small"
});
const aaDisplayText = "WCAG AA";
const aaaDisplayText = "WCAG AAA";
const aaPillType = isAAPass ? "success" : "error";
const aaaPillType = isAAAPass ? "success" : "error";
const examplePillStyle = {
"--pill-background": background.color,
"--pill-color": foreground.color
};
return (
&lt;div {...otherProps}&gt;
&lt;div className={titleContainerClass}&gt;
&lt;small className={styles.title}&gt;{title}&lt;/small&gt;
{!hideCloseBtn &amp;&amp; (
&lt;FontAwesomeIcon icon={closeBtnIcon} onClick={onCloseBtnClick} /&gt;
)}
&lt;/div&gt;
&lt;div className={styles.mainContent}&gt;
&lt;div className={tileContainerClass}&gt;
&lt;div style={bgTileStyle} className={styles.tile} /&gt;
&lt;div style={fgTileStyle} className={styles.tile} /&gt;
&lt;/div&gt;
&lt;div className={styles.pillContainer}&gt;
&lt;Pill type={aaPillType} className="margin-bottom--xxs"&gt;
{aaDisplayText}
&lt;/Pill&gt;
&lt;Pill type={aaaPillType} className="margin-bottom--xxs"&gt;
{aaaDisplayText}
&lt;/Pill&gt;
&lt;Pill style={examplePillStyle}&gt;This is how text will look&lt;/Pill&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
);
};
AccessiblePair.propTypes = {
/**
* The background color
*/
background: colorShape.isRequired,
/**
* The foreground color
*/
foreground: colorShape.isRequired,
/**
* Set to true to hide the close button
*/
hideCloseBtn: PropTypes.bool,
/**
* Callback for when the close button is clicked
*/
onCloseBtnClick: PropTypes.func,
/**
* FontAwesome icon to use for the close button
*/
closeBtnIcon: PropTypes.string
};
AccessiblePair.defaultProps = {
hideCloseBtn: false,
onCloseBtnClick: () =&gt; {},
closeBtnIcon: "times"
};</code></pre>
<figcaption>Color Pair Implementation</figcaption>
</figure>
<h4 id="notes-on-the-implementation-3">Notes on the implementation</h4>
<p>As mentioned, our Color Pair component takes a background and foreground color, and on line 26–33 you can see where we use Tinycolor to determine the accessibility of the color pair.</p>
<p>We use a simple Pill component to display the result with the type of the Pill being determined by the result. I haven’t shown the source for the Pill here, but it’s a pretty standard component that you would find in any component library (Bootstrap, Material, etc).</p>
<p>You can learn more about accessibility and WCAG <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" rel="nofollow noopener">here</a>.</p>
<h2 id="conclusion-and-source-code">Conclusion and source code</h2>
<p>I hope you have learned something from this walkthrough. I highly recommend looking into the libraries I have mentioned here in your next project. In particular, my application would have taken much longer to create without the excellent Tinycolor package.</p>
<blockquote><em>Source code for the full application can be found <a href="https://github.com/stephan-mclean/project-color" rel="nofollow noopener">here</a>.</em></blockquote>
<blockquote><em>A Storybook instance with all of the components can be found <a href="https://rainbo-components.netlify.com/" rel="nofollow noopener">here</a>.</em></blockquote>
<p>If you have any feedback on the designs, code, or in general, I would love to hear it.</p>
<p>Thank you very much for reading my article!</p>
<p><em>Originally published <a href="https://medium.com/better-programming/building-colorful-springy-components-using-react-spring-and-tinycolor-1086c6594203">here</a>. </em></p>
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
