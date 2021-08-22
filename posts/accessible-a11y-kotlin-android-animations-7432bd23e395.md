---
card: "https://cdn-media-1.freecodecamp.org/images/1*rkl9NhRSxPALXM13Fy4AXw.png"
tags: [Android]
description: "When researching examples for a first ever Android contributi"
author: "Milad E. Fahmy"
title: "How to make your Kotlin Android animations accessible"
created: "2021-08-16T11:31:24+02:00"
modified: "2021-08-16T11:31:24+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-android tag-software-development tag-accessibility tag-kotlin tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to make your Kotlin Android animations accessible</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*rkl9NhRSxPALXM13Fy4AXw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*rkl9NhRSxPALXM13Fy4AXw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*rkl9NhRSxPALXM13Fy4AXw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*rkl9NhRSxPALXM13Fy4AXw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*rkl9NhRSxPALXM13Fy4AXw.png" alt="How to make your Kotlin Android animations accessible">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
body.measure(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT)
val maxHeight = body.measuredHeight + body.paddingTop + body.paddingBottom
val startHeight = if (isToggled) maxHeight else 0
val targetHeight = if (isToggled) 0 else maxHeight
val expandAnimator = ValueAnimator
.ofInt(startHeight, targetHeight)
.setDuration(200)
expandAnimator.addUpdateListener {
val value = it.animatedValue as Int
body.layoutParams.height = value
body.requestLayout()
}
expandAnimator.doOnEnd {
isToggled = !isToggled
}
expandAnimator.start()
}</code></pre><p>As the height when the view is initially drawn is 0, we must calculate its new size by remeasuring its layout.</p><p>As described in the <a href="https://developer.android.com/reference/android/view/View.html#layout" rel="noopener">Android view layout docs</a>, we can use <code>measure()</code> along with the layout params we assigned to the view to remeasure each time the info icon is tapped.</p><p>To calculate the max height we must manually add the top and bottom padding to this, as these are not included in the measured height.</p><p>Depending on <code>isToggled</code> we then know if we are starting from 0 or starting from the expanded max height, and so the opposing target height.</p><p>We use a Value Animator to move from the starting value to the target end value, and set the duration in ms. This duration is based purely on later manual testing for UX feel.</p><pre><code class="language-kotlin">ValueAnimator
.ofInt(startHeight, targetHeight)
.setDuration(200)</code></pre><p>We tie the duration to the height with an update listener, requesting a new layout to be drawn after each update and adjusting the height each time.</p><pre><code class="language-kotlin">    expandAnimator.addUpdateListener {
val value = it.animatedValue as Int
body.layoutParams.height = value
body.requestLayout()
}
expandAnimator.doOnEnd {
isToggled = !isToggled
}
expandAnimator.start()</code></pre><p>As we are using Kotlin, we also add the <code><a href="https://developer.android.com/kotlin/ktx#core-packages" rel="noopener">androidx</a></code> library to our <code>build.gradle</code> to benefit from its <code>doOnEnd</code> extension. This allows us to very easily inverse the <code>isToggled</code> variable.</p><p>Finally we start our animation! Already we have a body that expands and contracts on an icon touch!</p><h4 id="smoother-animations">Smoother animations</h4><p>While our animation technically works as is, a nice extra step is to add an <a href="https://thoughtbot.com/blog/android-interpolators-a-visual-guide" rel="noopener">interpolator</a> so that the movement feels more natural.</p><pre><code>expandAnimator.interpolator = FastOutSlowInInterpolator()</code></pre><h4 id="increasing-our-accessibility">Increasing our accessibility</h4><p>We’ll add two final things to hopefully help our a11y users.</p><p>First we can help with navigation using an <code><a href="https://developer.android.com/reference/android/view/accessibility/AccessibilityEvent" rel="noopener">AccessibilityEvent</a></code> .</p><pre><code class="language-kotlin">expandAnimator.doOnEnd {
if (!isToggled) body.sendAccessibilityEvent(AccessibilityEvent.TYPE_VIEW_FOCUSED)
isToggled = !isToggled
}</code></pre><p>This means that when the animation moves from closed to open, the focus will immediately jump to the focus on the first item in the body, in this case the description. In the layout, we set the description of the info icon action, but as we may not be able to rely on a visual indicator for the user to move to the next item we can handle this for them.</p><p>Second we allow for different font sizes. The measured height returned from <code>measure()</code> does not account for font scaling set in the devices accessibility settings, and so when at a large scale the bottom of the description will be cropped as it is too large to fit.</p><p>We can access the font scale programmatically, and scale our height based on this. We convert it to an integer as the font scale may result in a float which would not work as a layout height.</p><pre><code class="language-kotlin">val a11yFontScale = body.context.resources.configuration.fontScale
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
