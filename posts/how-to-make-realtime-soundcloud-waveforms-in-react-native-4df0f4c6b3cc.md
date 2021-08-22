---
card: "https://cdn-media-1.freecodecamp.org/images/0*j5GlB8Rv63-BazDF"
tags: [React Native]
description: "by Pritish Vaidya"
author: "Milad E. Fahmy"
title: "How to make realtime SoundCloud Waveforms in React Native"
created: "2021-08-16T11:35:55+02:00"
modified: "2021-08-16T11:35:55+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react-native tag-technology tag-programming tag-tech tag-music ">
<header class="post-full-header">
<h1 class="post-full-title">How to make realtime SoundCloud Waveforms in React Native</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*j5GlB8Rv63-BazDF 300w,
https://cdn-media-1.freecodecamp.org/images/0*j5GlB8Rv63-BazDF 600w,
https://cdn-media-1.freecodecamp.org/images/0*j5GlB8Rv63-BazDF 1000w,
https://cdn-media-1.freecodecamp.org/images/0*j5GlB8Rv63-BazDF 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*j5GlB8Rv63-BazDF" alt="How to make realtime SoundCloud Waveforms in React Native">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
return  Number(time) / (Number(totalDuration) / 1000)
}
&lt;SoundCloudWave
waveformUrl={waveform_url}
height={50}
width={width}
percentPlayable={percentPlayed(bufferedTime, totalDuration)}
percentPlayed={percentPlayed(currentTime, totalDuration)}
setTime={this.setTime}
/&gt;</code></pre><p>It would be better to create a custom <em>SoundCloudWave</em> component that can be used in multiple places as required. Here are the required <code>props</code>:</p><ul><li><strong>waveformUrl</strong> — The URL object to the waveform (accessible through the Tracks API)</li><li><strong>height</strong> — Height of the waveform</li><li><strong>width</strong> — Width of the waveform component</li><li><strong>percentPlayable</strong> — The duration of the track buffered in seconds</li><li><strong>percentPlayed</strong> — The duration of the track played in seconds</li><li><strong>setTime — </strong>The callback handler to change the current track time.</li></ul><h4 id="get-the-samples">Get the samples</h4><pre><code class="language-jsx">fetch(waveformUrl.replace('png', 'json'))
.then(res =&gt; res.json())
.then(json =&gt; {
this.setState({
waveform: json,
waveformUrl
})
});</code></pre><p>Get the samples by using a simple <code>GET</code> API call and store the result in the <code>state</code>.</p><h4 id="create-a-waveform-component">Create a Waveform Component</h4><pre><code class="language-jsx">import { mean } from 'd3-array';
const ACTIVE = '#FF1844',
INACTIVE = '#424056',
ACTIVE_PLAYABLE = '#1b1b26'
const ACTIVE_INVERSE = '#4F1224',
ACTIVE_PLAYABLE_INVERSE = '#131116',
INACTIVE_INVERSE = '#1C1A27'
function getColor(
bars,
bar,
percentPlayed,
percentPlayable,
inverse
) {
if(bar/bars.length &lt; percentPlayed) {
return inverse ? ACTIVE : ACTIVE_INVERSE
} else if(bar/bars.length &lt; percentPlayable) {
return inverse ? ACTIVE_PLAYABLE : ACTIVE_PLAYABLE_INVERSE
} else {
return inverse ? INACTIVE : INACTIVE_INVERSE
}
}
const Waveform =
(
{
waveform,
height,
width,
setTime,
percentPlayed,
percentPlayable,
inverse
}
) =&gt;
{
const scaleLinearHeight = scaleLinear().domain([0, waveform.height]).range([0, height]);
const chunks = _.chunk(waveform.samples, waveform.width/((width - 60)/3))
return (
&lt;View style={[{
height,
width,
justifyContent: 'center',
flexDirection: 'row',
},
inverse &amp;&amp; {
transform: [
{ rotateX: '180deg' },
{ rotateY: '0deg'},
]
}
]}&gt;
{chunks.map((chunk, i) =&gt; (
&lt;TouchableOpacity key={i} onPress={() =&gt; {
setTime(i)
}}&gt;
&lt;View style={{
backgroundColor: getColor
(
chunks,
i,
percentPlayed,
percentPlayable,
inverse
),
width: 2,
marginRight: 1,
height: scaleLinearHeight(mean(chunk))
}}
/&gt;
&lt;/TouchableOpacity&gt;
))}
&lt;/View&gt;
)
}</code></pre><p>The <strong>Waveform Component</strong> works as follows:</p><ul><li>The Chunks split the <code>samples</code> object based on the <code>width</code> that the user wants to render on the screen.</li><li>The Chunks are then mapped into a <code>Touchable</code> event. The styles as <code>width:2</code> and <code>height: scaleLinearHeight(mean(chunk))</code>. This generates the <code>mean</code> from the <code>d3-array</code>.</li><li>The <code>backgroundColor</code> is being passed as a method with different parameters to the <code>getColor</code> method. This will then determine the color to return based on the conditions set.</li><li>The <code>Touchable onPress</code> event will call the custom handler passed into it, to set the new <em>seek time</em> of the track.</li></ul><p>Now this stateless component can be rendered to your child component as:</p><pre><code class="language-jsx">render() {
const {height, width} = this.props
const { waveform } = this.state
if (!waveform) return null;
return (
&lt;View style={{flex: 1, justifyContent: 'center'}}&gt;
&lt;Waveform
waveform={waveform}
height={height}
width={width}
setTime={this.setTime}
percentPlayed={this.props.percent}
percentPlayable={this.props.percentPlayable}
inverse
/&gt;
&lt;Waveform
waveform={waveform}
height={height}
width={width}
setTime={this.setTime}
percentPlayed={this.props.percent}
percentPlayable={this.props.percentPlayable}
inverse={false}
/&gt;
&lt;/View&gt;
)
}</code></pre><p>Here one of the waveform component is original and one inverted as in the SoundCloud’s player.</p><h3 id="conclusion">Conclusion</h3><p>Here are the links to the <em>react-native-soundcloud-waveform</em></p><ul><li><a href="https://github.com/pritishvaidya/react-native-soundcloud-waveform" rel="noopener">Github</a></li><li><a href="https://www.npmjs.com/package/react-native-soundcloud-waveform" rel="noopener">npm</a></li></ul><p>I’ve also made an app in react-native — <strong>MetalCloud </strong>for<strong> Metal Music fans</strong> where you can see the above component at work.</p><p>Here are the links:</p><ul><li><a href="https://itunes.apple.com/us/app/metalcloud/id1319945253?mt=8" rel="noopener">IOS</a></li><li><a href="https://play.google.com/store/apps/details?id=com.metalcloud" rel="noopener">Android</a></li></ul><p>Thanks for reading. If you liked this article, show your support by clapping to share with other people on Medium.</p><p><em>More of the cool stuff can be found on my <a href="https://stackoverflow.com/users/6606831/pritish-vaidya" rel="noopener">StackOverflow</a> and <a href="https://github.com/pritishvaidya" rel="noopener">GitHub</a> profiles.</em></p><p><em>Follow me on <a href="https://www.linkedin.com/in/pritish-vaidya-506686128/" rel="noopener">LinkedIn</a>, <a href="https://medium.com/@pritishvaidya94" rel="noopener">Medium</a>, <a href="https://twitter.com/PritishVaidya" rel="noopener">Twitter</a> for further update new articles.</em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
