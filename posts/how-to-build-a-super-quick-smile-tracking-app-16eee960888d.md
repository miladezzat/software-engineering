---
card: "https://cdn-media-1.freecodecamp.org/images/1*6zDrFfE7gE4IIoeiR3IJiw.jpeg"
tags: [Swift]
description: "ARKit might seem intimidating but it’s not so bad if you alre"
author: "Milad E. Fahmy"
title: "How To Build A Super Quick Smile Tracking App"
created: "2021-08-16T11:33:23+02:00"
modified: "2021-08-16T11:33:23+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-swift tag-ios tag-technology tag-software-development tag-augmented-reality ">
<header class="post-full-header">
<h1 class="post-full-title">How To Build A Super Quick Smile Tracking App</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*6zDrFfE7gE4IIoeiR3IJiw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*6zDrFfE7gE4IIoeiR3IJiw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*6zDrFfE7gE4IIoeiR3IJiw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*6zDrFfE7gE4IIoeiR3IJiw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*6zDrFfE7gE4IIoeiR3IJiw.jpeg" alt="How To Build A Super Quick Smile Tracking App">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>ARKit might seem intimidating but it’s not so bad if you already have some basic experience building iOS apps.</p><p>I’m a learn-by-doing type, so I’ve been playing around with ARKit, building basic apps to get familiar with it. In this post, I’ll review what I’ve learned creating a simple face tracking app.</p><p>I’ll do this in 3 parts:</p><ol><li><strong>Initial Setup → </strong>First things first, get Camera permissions and make sure the device can use ARKit.</li><li><strong>Smile tracking → </strong>Start tracking smiles with ARKit. This is probably what you’re here for.</li><li><strong>User Interface → </strong>Add the UI for our app that will react to smiles.</li></ol><p>As of this writing, the Xcode simulator does not support the front facing camera <strong>so you will need a real device to run the app. Your device will also need to have a TrueDepth camera (iPhone X or newer should be fine).</strong></p><p>Finally, for my fellow members of the Copy Paste Club, <a href="https://github.com/JakeShelley1/SmileTracker" rel="noopener">all the code is available on Github</a>.</p><h4 id="initial-setup"><strong>Initial Setup</strong></h4><p>Start by opening up Xcode and creating a new project named “SmileTracker” (or whatever name you prefer).</p><p>Before we can get into face tracking, we’ll need to do two things:</p><ol><li>Make sure your device supports ARKit</li><li>Get permission to access your device’s camera</li></ol><p>In your new project, open <code>ViewController.swift</code>. Near the top of the file, underneath <code>import UIKit</code>, add the line: <code>import ARKit</code>. This will let us access all the goodies that Apple has provided us to make face tracking super easy.</p><p>Now add the following code inside of <code>viewDidLoad</code>:</p><pre><code class="language-Swift">guard ARFaceTrackingConfiguration.isSupported else {
fatalError("Device does not support face tracking")
}</code></pre><p><code>ARFaceTrackingConfiguration.isSupported</code> is a boolean that will be true if the device running the app can support face tracking and false if not. In this case, if the device can’t support face tracking, we’ll crash the app with a fatal error.</p><p>Next, let’s get permission to use the camera. Add the following in <code>viewDidLoad</code> below our <code>guard</code> statement:</p><pre><code class="language-Swift">AVCaptureDevice.requestAccess(for: AVMediaType.video) { granted in
if (granted) {
Dispatch.main.sync {
// We're going to implement this function in a minute
self.setupSmileTracker()
}
} else {
fatalError("User did not grant camera permission!")
}
let sceneView = ARSCNView()
override func viewDidLoad() {...}
}</code></pre><p><code>ARSCNView</code> comes equipped with an <code>ARSession</code> that your iPhone uses to coordinate AR experiences. We’ll be using <code>sceneView</code>’s <code>ARSession</code> to analyze our user’s face through the front facing camera.</p><p>Add this function to your file underneath <code>viewDidLoad</code>:</p><pre><code>func setupSmileTracker() {
let configuration = ARFaceTrackingConfiguration()
sceneView.session.run(configuration)
sceneView.delegate = self
view.addSubview(sceneView)
}</code></pre><p>Here we’ve created a configuration to handle face tracking and used it to run our <code>sceneView</code>’s <code>ARSession</code>.</p><p>Then we set <code>sceneView</code>'s delegate to self and add it to our view.</p><p>Xcode will tell you that there is a problem since <code>ViewController</code> does not conform to <code>ARSCNViewDelegate</code>. Go to where <code>ViewController</code> is declared near the top of the file and change the line to the following:</p><pre><code>class ViewController: ViewController, ARSCNViewDelegate {
...
}</code></pre><p>Now add this<code>ARSCNViewDelegate</code> function in your <code>ViewController</code> class <code>setupSmileTracker</code>:</p><pre><code class="language-Swift">func renderer(_renderer: SCNSceneRenderer, didUpdate node: SCNNode, for anchor: ARAnchor) {
...
}</code></pre><p><code>renderer</code> will run every time our scene updates and provides us with the <code>ARAnchor</code> that corresponds to the user’s face.</p><p>To make it easier to create face tracking experiences, <strong>Apple automatically creates an </strong><code>ARFaceAnchor</code><strong> and adds it to our session when we use an </strong><code>ARFacetrackingConfiguration</code> <strong>to run it. </strong>This ARFaceAnchor is then passed into <code>renderer</code> as an <code>ARAnchor</code>.</p><p>Add the following code to renderer:</p><pre><code class="language-Swift">func renderer(_renderer: SCNSceneRenderer, didUpdate node: SCNNode, for anchor: ARAnchor) {
&nbsp;  // 1
guard let faceAnchor = anchor as? ARFaceAnchor else { return }
// 2
let leftSmileValue = faceAnchor.blendshapes[.mouthSmileLeft] as! CGFloat
let rightSmileValue = faceAnchor.blendShapes[.mouthSmileRight] as! CGFloat
// 3
print(leftSmileValue, rightSmileValue)
}</code></pre><p>There’s a lot going on inside this function so I’ve numbered the steps (Ray Wenderlich style).</p><p>In <strong>step 1 </strong>we convert the <code>ARAnchor</code> into an <code>ARFaceAnchor</code> and assign it to the <code>faceAnchor</code> variable.</p><p><code>ARFaceAnchor</code> contains information about the current position and orientation, topology, and <em>facial expression</em> of the face we’re tracking.</p><p><code>ARFaceAnchor</code> stores information about facial expressions in its variable <code>blendShapes</code>. <code>blendShapes</code> is a dictionary that stores coefficients corresponding to various facial features. If you’re interested, I suggest you <a href="https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation" rel="noopener">check out the full list of facial features in Apple’s documentation</a>. (<em>Hint</em>: if you want to add frown tracking you’ll find a way to do it in here.)</p><p>In <strong>step 2</strong>, we use <code>faceAnchor.blendShapes</code> to get the a CGFloat that corresponds to how much the left and right sides of the user’s mouth is smiling by using the keys <code>mouthSmileLeft</code> and <code>mouthSmileRight</code>.</p><p>Finally, <strong>step 3</strong> just prints out the two values so you can make sure it’s working properly ?.</p><p>At this point you should have an app that:</p><ul><li>Gets camera and face tracking permissions from the user</li><li>Uses ARKit to track the users facial expressions</li><li>Prints how much the user is smiling on the left and right sides of their mouth to the console</li></ul><p>We’ve made a lot of progress, so let’s take a second to make sure everything is running properly.</p><p>When you run the app for the first time, you should be asked if you will grant camera permissions. Make sure to say yes.</p><p>You’ll then be sent to a blank screen, but you should start seeing CGFloat values being printed to the console (there may be a short delay before you see them).</p><p>When you smile at your phone you should notice the values being printed going up. The more you smile the higher the numbers go.</p><p>If it’s working properly, <em>congratulations</em> ?! If you’re running into an error, double check to make sure your device supports face tracking and you have camera permissions turned on. If you’ve been following this writeup from the beginning the console will print errors in both those cases.</p><h4 id="user-interface">User interface</h4><p>So we’re tracking faces, now let’s build the UI to react to smiles.</p><p>First add a new <code>UILabel</code> called <code>smileLabel</code> to the top of the file, just below <code>sceneView</code>.</p><pre><code>class ViewController: UIViewController {
let sceneView = ARSCNView()
let smileLabel = UILabel()
...
}</code></pre><p>This will be the view that reacts to the user’s facial expressions.</p><p>Add the following code at the bottom of your <code>setupSmileTracker</code> function:</p><pre><code class="language-Swift">smileLabel.text = "?"smileLabel.font = UIFont.systemFont(ofSize: 150)
view.addSubview(smileLabel)
// Set constraints
smileLabel.translatesAutoresizingMaskIntoConstraints = false
smileLabel.centerXAnchor.constraint(equalTo: view.centerXAnchor).isActive = true
let smileValue = (leftValue + rightValue)/2.0
switch smileValue {
case _ where smileValue &gt; 0.5:
smileLabel.text = "?"
case _ where smileValue &gt; 0.2:
smileLabel.text = "?"
default:
smileLabel.text = "?"
}
} </code></pre><p>This function will change the emoji in our <code>smileLabel</code> depending on how much the user is smiling into the camera. We calculate the <code>smileValue</code> by taking the average of the left and right smile values given to us by our <code>ARFaceAnchor</code> (very scientific, I know).</p><p>Plug that value into the switch statement, and the more the user smiles the happier our emoji gets.</p><p>Finally, go back to our <code>renderer</code> function and add this to the bottom to plug in our left and right smile values into <code>handleSmile</code>:</p><pre><code>DispatchQueue.main.async {
self.handleSmile(leftValue: leftSmileValue, rightValue: rightSmileValue)
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
