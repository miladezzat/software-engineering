---
card: "/images/default.jpg"
tags: [Technology]
description: "So it’s almost near about one month already since WWDC 2019 h"
author: "Milad E. Fahmy"
title: "Developer Checklist: What should you not miss from WWDC 2019?"
created: "2021-08-16T11:29:00+02:00"
modified: "2021-08-16T11:29:00+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-technology tag-ios-app-development tag-ios tag-swift tag-wwdc tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Developer Checklist: What should you not miss from WWDC 2019?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/06/danielle-macinnes-222441-unsplash.jpg 300w,
/news/content/images/size/w600/2019/06/danielle-macinnes-222441-unsplash.jpg 600w,
/news/content/images/size/w1000/2019/06/danielle-macinnes-222441-unsplash.jpg 1000w,
/news/content/images/size/w2000/2019/06/danielle-macinnes-222441-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/06/danielle-macinnes-222441-unsplash.jpg" alt="Developer Checklist: What should you not miss from WWDC 2019?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>So it’s almost near about one month already since WWDC 2019 happened this year. All the developers are still busy what are new things Apple has added or updated for development. There were some big announcements and small announcements, but we, the developers need to make sure that we won’t miss anything important. So I am just creating a quick checklist of the items what we should not miss. Let’s make it short, concise and simple.</p><h3 id="ios-">iOS:</h3><ol><li>iOS 13 will let you limit application location access to just once. Until now, there were three options — “Always”, “While Using” or “Never”. One more option has been added to this list “Just Once”. For the first time, you can share your location to an app — just once — and then require it to ask you again next time it wants.</li><li>Might be one of the popular announcements and people are going crazy about this. Yes, I am talking about “Apple Sign-in”. So it is a requirement from Apple that app developers must implement the company’s new single sign-in solution if the app already offers another third party sign in.</li><li>You can dismiss modal view controllers interactively which may break some of the existing applications. On iOS 13, by default, the user can just swipe the modal down to dismiss it. So when you are developing a new application make sure to take this into consideration. You can disable this behaviour by <code><em>isModalRepresentation = false</em></code>.</li><li><code>UISegmentedControl</code> and <code>UIStepper</code> are different in iOS 13 with a whole new updated design.</li><li>A new update to <code>Localization</code> in iOS 13. From now, the user can set a different language to each of the application installed in your device. Developers have nothing to change or consider regarding the development, <code>Settings</code> application will take care on behalf of you.</li><li>iOS 13 has almost 1500 different system icons and <code>UIImage</code> got a new initializer <code>UIImage(systemName: )</code> with this you can now initialize any of the system icons.</li><li>Until now when you download something in Safari that directly goes into <code>downloads</code> folder, but this year Safari got an update and you can change the default download folder to any other folder you want, even you can choose USB drive also.</li><li>Improvements to <code>UIStoryboardSegue</code>. Apple has introduced a new <code>IBSegueAction</code> modifier. Now you can pass additional context and parameters directly to the destination view controller that should be initialized.</li><li>Your apps can provide reservation information to Siri with context and at specific times so the user can take relevant actions based on the circumstances. For example, they can confirm a hotel reservation, be reminded to check in for a flight and get help returning a rental car.</li><li>With Core NFC framework, your apps can now support tag writing, including writing to NDEF formatted tags. The framework also provides support for reading and writing tags using native protocols such as ISO 7816, MIFARE, ISO 15693, and FeliCa.</li><li>Synch your Core Data store with CloudKit, giving users of your app seamless access to their data across all their devices. Core Data with CloudKit combines the benefits of local persistence with cloud backup and distribution.</li><li>Metal gives the GPU even greater control of the graphics and compute pipeline, adds features that make it easier to perform advanced GPU processing, and simplifies the work you need to do to support different kinds of GPUs. New tools, including Metal support in Simulator, help you get started faster and understand whether your iOS app is using Metal correctly.</li><li>With the new VisionKit framework, your app can let users scan documents using the device’s camera, like those you capture in the Notes app. Combine this feature with Vision’s text recognition to extract text from scanned documents.</li><li>Core ML 3 now supports on-device model personalization, allowing you to update a model by retraining or fine-tuning it with user-specific data privately from within your app. Core ML has also greatly expanded its support for dynamic neural networks with over 100 layer types.</li><li>The new PencilKit framework makes it easy to incorporate hand-drawn content into your app quickly and easily. PencilKit provides a drawing environment for your iOS app that takes input from Apple Pencil, or the user’s finger, and turns it into high-quality images you display in either iOS or macOS. The environment comes with tools for creating, erasing, and selecting lines.</li><li>MetricKit is a new framework that gives you on-device power and performance metrics about your app captured by the system, which you can use to improve the performance of your app.</li><li>The new Core Haptics framework that lets you compose and play haptic patterns to customize your app’s haptic feedback.</li><li>Use the new Apple CryptoKit framework to perform common cryptographic operations securely and efficiently, such as Computing and comparing cryptographically secure digests, Using public-key cryptography to create and evaluate digital signatures, Generating symmetric keys, and using them in other operations like message authentication and encryption.</li><li>Combine is a new framework that provides a declarative Swift API for processing values over time. These values can represent user interface events, network responses, scheduled events, and many other kinds of asynchronous data. With Combine, you declare publishers that expose values that can change and subscribers that receive those values from the publishers. Combine makes your code easier to read and maintain, by centralizing your event-processing code and eliminating troublesome techniques like nested closures and convention-based callbacks.</li><li>Keep your app content up-to-date and perform long-running tasks while your app is in the background using the new BackgroundTasks framework.</li><li>RealityKit is a new Swift framework to simulate and render 3D content for use in your augmented reality apps including the ability to add animation, physics, and spatial audio to your AR experience. RealityKit leverages information provided by ARKit to seamlessly integrate virtual objects into the real world.</li><li>Symbol images give you a consistent set of icons to use in your app, and ensure that those icons adapt to different sizes and to app-specific content. Symbol images use the SVG format to implement vector-based shapes that scale without losing their sharpness. They also support many traits typically associated with the text, such as weight and baseline alignment.</li><li>With iOS 13, the user can create and manage multiple instances of your app’s user interface simultaneously and switch between them using the app switcher. On iPad, the user can also display multiple instances of your app side by side. Each instance of your UI displays different content or displays content in a different way. For example, the Calendar app can display the appointments for a specific day and for an entire month side by side.</li><li>SwiftUI is a modern approach to building user interfaces for iOS, macOS, watchOS, and tvOS. You can build dynamic interfaces faster than ever before, using declarative, composition-based programming. The framework provides views, controls, and layout structures for declaring your app’s user interface. It also provides event handlers for delivering taps, gestures, and other types of input to your app, and tools to manage the flow of data from your app’s models down to the views and controls that users will see and interact with.</li><li>When the Voice Control Accessibility feature is turned on, there’s a blue microphone icon at the top of the device to indicate that the iOS device is in Voice Control mode. The dimmed icon when the phone doesn’t have your attention.</li><li>One of the new features in iOS 13 is an option in the Files app to connect to the server using SMB. This feature wasn’t working in the first beta but is functional in beta 2, so iOS 13 users can do things like connecting to a home NAS.</li><li>When sharing a webpage from the Safari Share Sheet, there are new options to share it as a PDF or a Web Archive. There’s also an “Automatic” option that picks the most suitable format for each app or action.</li><li>No more spam callers. iOS 13 now supports strictly silencing unknown callers.</li><li>In iOS 13, we got a new method on <code>UIImageAsset</code> named <code>registerImage:withTraitCollection</code> that can be used to create dynamic images for light and dark programmatically.</li><li>Running on Low Mobile data? A new “Low Data” mode has been added to avoid running out of data when you’re on a roaming plan.</li><li>When we do not have wifi then sometimes we face difficulty in downloading apps which are bigger in size. But after iOS 13, we can see a ray of light there. Now the limit has increased to 200 MB, still not enough? Then you can remove the restriction in Settings.</li><li>Share photo to others with original information in it. iOS 13 is giving you an option to add that original information when sharing.</li><li>Be happy to mute your iPhone. Apple has introduced a new completely redesigned mute indicator to match Apple pencil charging indicator.</li><li>Now you can initialize UIViewController subclasses with additional context and arguments (required for dependency injection).</li><li>If you are not a delegate fan then there are some good news for you. iOS 13 has updated some delegate based APIs to block based API.</li><li>You do not need to long press on any app and tap on the cross icon to delete. Now you can simply remove an app from AppStore update page by a left swipe.</li><li>Until now screenshot was taken only in image format. iOS 13 allows you to take a screenshot in pdf format also.</li><li>iOS 13 has a new <code>_visualRecursiveDescription</code> private API that can construct a visual representation of a view hierarchy. Very useful command for debugging in LLDB.</li><li>A new <code>UICollectionViewCompositionalLayout</code> class has been added to UIKit to make it easier to create compositional layouts without requiring a custom <code>UICollectionViewLayout</code>.</li><li>The <code>UITableViewStyle</code> enum gained a new public <code>UITableViewStyleInsetGrouped</code> case that can be used to create grouped style table views.</li><li>iOS apps using the File Management APIs can now be granted read/write access to an entire folder, rather than just a file.</li><li>Tired of swiping in scroll view? In iOS 13, you can drag the scroll indicator to go through a long document.</li><li>Apps intended for kids cannot include third-party advertising or analytics software and may not transmit data to third parties.</li><li>MDM provides access to sensitive data, MDM apps must request the mobile device management capability, and may only be offered by commercial enterprises, such as business organizations, educational institutions, or government agencies, and, in limited cases, companies utilizing MDM for parental controls. MDM apps may not sell, use, or disclose to third parties any data for any purpose, and must commit to this in their privacy policy. (referring to apps that abused MDM for Screen Time-like features).</li></ol><p>Yeah, it’s quite a long list fully filled with new features. Developers can use all of them to make their application better and smoother. Now let’s take a look at the new frameworks that are coming with iOS 13-</p><h3 id="frameworks-">Frameworks:</h3><ol><li><strong><strong>BackgroundTasks</strong></strong>: Use the BackgroundTasks framework to keep your app content up to date and run tasks requiring minutes to complete while your app is in the background. Longer tasks can optionally require a powered device and network connectivity. Register launch handlers for tasks when the app launches and schedule them as required. The system will launch your app in the background and execute the tasks.</li><li><strong><strong>Combine: </strong></strong>The Combine framework provides a declarative Swift API for processing values over time. These values can represent user interface events, network responses, scheduled events, and many other kinds of asynchronous data. Combine declares <em>publishers</em> to expose values that can change over time, and <em>subscribers</em> to receive those values from the publishers.</li><li><strong><strong>CoreAudioTypes: </strong></strong>The CoreAudioTypes framework declares common data types and constants used by other Core Audio interfaces. This framework also includes a handful of convenience functions.</li><li><strong><strong>Core Haptics: </strong></strong>Core Haptics lets you add customized haptic and audio feedback to your app. Use haptics to engage users physically, with tactile and audio feedback that gets attention and reinforces actions. Some system-provided interface elements — like pickers, switches, and sliders — automatically provide haptic feedback as users interact with them. With Core Haptics, you extend this functionality by composing and combining haptics beyond the default patterns.</li><li><strong><strong>QuickLookThumbnailing</strong></strong>: You may want to create a miniature representation, or <em>thumbnail</em>, of a file and its contents to display within your app, or to provide a thumbnail to the operating system. For example, macOS shows thumbnails as part of the Finder app and its Quick Look feature. The QuickLookThumbnailing framework provides an API to generate thumbnails for common file types using the <code>QLThumbnailGenerator</code> object.</li><li><strong><strong>PencilKit</strong></strong>: PencilKit makes it easy to incorporate hand-drawn content into your iOS or macOS apps quickly and easily. PencilKit provides a drawing environment for your iOS app that takes input from Apple Pencil, or the user’s finger, and turns it into high-quality images you display in either iOS or macOS. The environment comes with tools for creating, erasing, and selecting lines.</li><li><strong><strong>RealityKit</strong></strong>: Use the RealityKit framework to implement high-performance 3D simulation and rendering. RealityKit leverages information provided by the ARKit framework to seamlessly integrate virtual objects into the real world.</li><li><strong><strong>VisionKit</strong></strong>: VisionKit is a small framework that lets your app use the system’s document scanner. Present the document camera as a view controller, which covers the entire screen like the camera function in Notes.</li><li><strong><strong>SoundAnalysis</strong></strong>: Use the SoundAnalysis framework to analyze audio and recognize it as a particular type, such as laughter or applause. The framework performs its analysis using a Core ML model trained by an <code>MLSoundClassifier</code>. Using the framework’s ability to analyze streamed or file-based audio lets you add intelligent audio recognition capabilities to your app.</li><li><strong><strong>CryptoKit</strong></strong>: Use Apple CryptoKit to perform common cryptographic operations: Compute and compare cryptographically secure digests. Use public-key cryptography to create and evaluate digital signatures, and to perform the key exchange. In addition to working with keys stored in memory, you can also use private keys stored in and managed by the Secure Enclave. Generate symmetric keys, and use them in operations like message authentication and encryption. Prefer CryptoKit over lower-level interfaces. CryptoKit frees your app from managing raw pointers, and automatically handles tasks that make your app more secure, like overwriting sensitive data during memory deallocation.</li><li><strong><strong>Maps Web Snapshots</strong></strong>: The Maps Web Snapshots service can be used to generate static map images from a URL. You can use Snapshots any time that an interactive map is not required, and in any place, you typically use an image URL — in web pages, and in places where JavaScript is not available, such as email clients.</li><li><strong><strong>DriverKit</strong></strong>: Use DriverKit to create device drivers that the user installs on their Mac. Drivers built with DriverKit run in userspace, rather than as kernel extensions, for improved system security and stability.</li><li><strong><strong>MetricKit</strong></strong>: With MetricKit, you can receive on-device app power and performance metrics captured by the system. A registered app receives reports containing data about the previous 24 hours at most once per day. Use the data in the reports to help improve the performance of your app.</li><li><strong><strong>SystemExtensions</strong></strong>: Creating system extensions allow your app to enhance the capabilities of the user’s Mac, without the associated risks of developing kernel extensions (KEXTs). System extensions run in userspace, where they can’t compromise the security or stability of macOS. The system grants these extensions a high level of privilege, so they can perform the kinds of tasks previously reserved to KEXTs.</li><li><strong><strong>EndpointSecurity</strong></strong>: Use the Endpoint Security library to create security-related software. Endpoint Security clients monitor system events for potentially malicious activity. Your client registers with Endpoint Security to authorize pending events, or receive notifications of events that have already occurred. These events include process executions, mounting file systems, forking processes, and raising signals.</li><li><strong><strong>USBSerialDriverKit</strong></strong>: The USBSerialDriverKit framework provides an API for developing serial communication drivers for USB devices like modems and serial adapters. The framework builds on DriverKit by adding the ability to set attributes like baud rate and parity and work with a device’s universal asynchronous receiver/transmitter (UART).</li><li><strong><strong>USBDriverKit</strong></strong>: Use the USBDriverKit framework to develop drivers for custom or non-class compliant USB devices for use with macOS. USBDriverKit provides C++ classes you can use to attach and configure your device and create USB message and stream pipes to exchange data. USBDriverKit devices work with the core types defined in the DriverKit framework.</li><li><strong><strong>HIDDriverKit</strong></strong>: The HIDDriverKit framework provides C++ classes for developing drivers for human interface devices: keyboards, pointing devices, and digitizers like pens and touchpads. HIDDriverKit uses the core types defined in DriverKit, and adds features specific to human interface device development.</li></ol><p>That’s all for today. Happy coding!!</p><p><strong><strong><em>???Thank you for reading???</em></strong></strong></p>
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