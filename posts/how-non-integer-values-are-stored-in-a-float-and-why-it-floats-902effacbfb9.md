---
card: "https://cdn-media-1.freecodecamp.org/images/0*sgfbQZhatWzdqD46"
tags: [Programming]
description: "by Shukant Pal"
author: "Milad E. Fahmy"
title: "How non-integer values are stored in a float (and why it floats)"
created: "2021-08-15T23:44:51+02:00"
modified: "2021-08-15T23:44:51+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-computer-science tag-javascript tag-coding tag-interview ">
<header class="post-full-header">
<h1 class="post-full-title">How non-integer values are stored in a float (and why it floats)</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*sgfbQZhatWzdqD46 300w,
https://cdn-media-1.freecodecamp.org/images/0*sgfbQZhatWzdqD46 600w,
https://cdn-media-1.freecodecamp.org/images/0*sgfbQZhatWzdqD46 1000w,
https://cdn-media-1.freecodecamp.org/images/0*sgfbQZhatWzdqD46 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*sgfbQZhatWzdqD46" alt="How non-integer values are stored in a float (and why it floats)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
// 1. NORMAL Number, V = 2^-126
Encoded:  m = 00000000000000000000000, e = 1
Actual:  m = 100000000000000000000000, e = -126
V = 2^-126
// 2. SUBNORMAL Number, V = 2^-127
Encoded:  m = 10000000000000000000000, e = 0 (e must be 0)
Actual:   m = 10000000000000000000000, e = -127
The leading bit convention doesn't work in subnormal numbers, where e = 0. This means that the encoded mantissa is the actual mantissa. The power e (actual) is always -127.
The mantissa's leading bit could be 0. See the example below.
// 3. SUBNORMAL Number, V = 2^-129
Encoded:  m = 00100000000000000000000, e = 0 (subnormal)
Actual:  m =  00100000000000000000000, e = -127
V = 0.0100000000000000000000 x 2^-127 = 0.25 * 2^-127 = 2^-129</code></pre><h2 id="-infinity-and-nan">±Infinity and NaN</h2><p>The exponent had two special values: 0 and 2⁸-1 (where that 8 is actually the width of the exponent in binary32). The former one was for subnormal numbers, while the latter one is for “special” values. 2⁸-1 is also the value when all the bits of the exponent are ones.</p><ul><li>If the value of the mantissa is 0, then the number represented is positive or negative infinity. The sign is determined by the sign bit.</li><li>The value of the mantissa is non-zero, then the number represented, as a matter of fact, is ‘not a number’ or NaN. There are two types of NaNs — signaling and quiet. The type is determined by the value of the mantissa, and this article doesn’t cover that. A signaling NaN is used to terminate any numeric operation while a quiet NaN allows the operation to continue. As per my experience, you’ll never need to distinguish b/w these NaNs. They’re probably useless for you.</li></ul><h2 id="the-zero-case">The ±Zero Case</h2><p>It is surprising that there are two zeros in IEEE 754 — positive and negative. For you and me, they’re identical. Any operation with +0 will give the same result if -0 is used instead, or is that true? Nope, it isn’t.</p><p>1/∞ = 0, and also 1/-∞ = 0, then 1/(1/∞) = 1/0 = ∞ and 1/(1/-∞) = ∞. The sign isn’t preserved if we use only one positive zero in the equations above. This is solved by using ±0. 1/-∞ = -0, then 1/(1/-∞)=-∞.</p><p>Again, if only 0 is used: then 4/∞=0 and -4/∞=0. However using ±0 leads to: 4/∞=+0 and -4/∞=-0.</p><p>The IEEE 754 requires, however, that any comparison b/w +0 and -0 return a positive result. In other words, +0 == -0 is true.</p><p>Most languages would hide +0 and -0 from you, and you wouldn’t be able to distinguish directly (you could if you divided by zero and tested the result for ±∞). However, JavaScript is special and provides the <code>Object.is(arg1, arg2)</code> method which would distinguish b/w +0 and -0.</p><pre><code>Object.is(+0, -0);// false</code></pre><h2 id="examples">Examples</h2><p>I promised that I would clear your brain of all confusion with my examples.</p><pre><code>// All examples use binary32 here
// 1. Encode 127872.12781278 in IEEE 754
Step 1: Write in binary notation
127872.12781278 = 11111001110000000.0010000 (24-bits)
Step 2: Write in scientific notation
1.11110011100000000010000 x 2^16
Step 3: Encode
m(encoded) = 11110011100000000010000 (23-bits only)
e(encoded) = 16+127 = 143 = 10001111
(sign)(e)(m) = 0 10001111 11110011100000000010000(32-bits)
// 2. Encode (-1.25 x 2^-130) in IEEE 754
Step 1: Write in binary notation (excluding sign here)
1.25x2^-130 = 1.01 x 2^-130 (shift by 130 right to remove scale)
Step 2: Already done!!!
Step 3: Encode
As e &lt; emin, this is a subnormal number
e = -127
V = 1.01 x 2^-130 = 0.00101 x 2^-127
m = 0.0010100000000000000000 (23-bits only, no leading bit conv.)
sign = 1
(sign)(e)(m) = 1 00000000 00010100000000000000000 (32-bits)</code></pre><h2 id="finally-does-it-float">Finally, does it float?</h2><p>The title promised to answer this question. It just had to.</p><p>The name “floating-point” comes from the fact that the radix point can be placed anywhere in a number. The floating-point types can encode any number with at most a given number of digits (the mantissa limits the precision), wherever the radix point be placed (other than the fact that there may be a little loss of precision).</p><p>This is opposed to fixed-point types where the representation fixes the digits represent-able to the left and right of the radix point.</p><p>The C++ type float also comes from the floating-point system.</p><h2 id="additional-info-decimal-floating-point-types">Additional Info: Decimal floating-point types</h2><p>(NOTE: Decimal floating-point types are not in wide use. They are more important in commerce, due to the importance of precision in monetary values.)</p><p>In 2008, the IEEE 754 added two more formats: decimal32 and decimal64. In decimal formats, the mantissa is scaled by powers of 10 instead of 2. This preserves the decimal significant digits of our input and, most importantly, does not lose precision for numbers that can be represented exactly in base 10.</p><p>However, the mantissa is encoded in base 2 (the exponent is also encoded in base 2, just that the actual value is calculated by <em><em>V </em></em>= <em><em>m</em></em> x <em><em>10^e</em></em>). Since the mantissa is in base 2, you cannot write it in scientific notation:</p><pre><code>102 = 1.02 x 10^2 = 1.000001010001111010111000 x 10^2
202 = 2.02 x 10^2 = 10.00000101000111101011100 x 10^2</code></pre><p>For example, 202 has two digits (’10’) before the radix point while 101 has only one digit (‘1’) before the radix point. There is no integral power of 10 that can be used to represent 202 in binary scientific form (with only one digit before the radix point).</p><p>NOTE: This side effect is because the mantissa and the scale factor (10) are not in the same base.</p><p>To overcome this limitation, IEEE 754 encodes numbers where the mantissa is an integer.</p><pre><code>1234.31212 = 123431212 x 10^-5 = 111010110110110100100101100 x 10^-5
// The mantissa will be 111010110110110100100101100
// The exponent will be -5.</code></pre><p>The decimal formats define two ways of encoding the integer mantissa: binary integer (as shown in the example above) and densely packed decimal (DPD). The decimal formats also have special tricks, which are beyond the scope of this article. I will write about them in a separate story.</p><p>Further reading from Shukant Pal:</p><ul><li><a href="https://medium.com/@sukantk3.4/full-overview-of-the-html-canvas-6354216fba8d" rel="noopener">Full Overview of the HTML Canvas</a></li><li><a href="https://medium.com/@sukantk3.4/circular-dependencies-in-javascript-34183fc2720" rel="noopener">Removing Circular Dependencies in JavaScript</a> (my proposal)</li><li><a href="https://medium.freecodecamp.org/how-to-synchronize-your-game-app-across-multiple-devices-88794d4c95a9" rel="noopener nofollow">How to synchronize your game app across multiple devices</a> (Android)</li><li><a href="https://medium.freecodecamp.org/match-making-with-firebase-hashnode-de9161e2b6a7" rel="noopener nofollow">How to use Firebase for building Android games</a></li></ul><p>I’m Shukant Pal — the creator of the Silcos kernel. I know a lot about low-level C++ code and a little about the Linux kernel’s internal code structure. I love hardware level details here and there. Follow me on my social media profiles.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
