---
card: "/images/default.jpg"
tags: [Swift]
description: "In this post we will try to re-create the Spotify home screen"
author: "Milad E. Fahmy"
title: "How to programmatically build a Spotify clone for iOS with AutoLayout"
created: "2021-08-16T11:28:17+02:00"
modified: "2021-08-16T11:28:17+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-swift tag-ios tag-programing tag-technology tag-mobile-app-development tag-ios-app-development tag-xcode ">
<header class="post-full-header">
<h1 class="post-full-title">How to programmatically build a Spotify clone for iOS with AutoLayout</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/11/featured_image-2.png 300w,
/news/content/images/size/w600/2019/11/featured_image-2.png 600w,
/news/content/images/size/w1000/2019/11/featured_image-2.png 1000w,
/news/content/images/size/w2000/2019/11/featured_image-2.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/11/featured_image-2.png" alt="How to programmatically build a Spotify clone for iOS with AutoLayout">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
//  ViewController.swift
//  spotifyAutoLayout
//
//  Created by admin on 10/31/19.
//  Copyright © 2019 Said Hayani. All rights reserved.
//
import UIKit
class ViewController: UICollectionViewController {
override func viewDidLoad() {
super.viewDidLoad()
collectionView.backgroundColor = .purple
// Do any additional setup after loading the view.
}
}
</code></pre><p>If you try to run the app the build will fail. We need to add some code to the <code>AppDelegate.swift</code> file within the <code>didFinishLaunchingWithOptions</code> function past this piece of code before the &nbsp;<code>return</code> statement:</p><pre><code class="language-swift">  let layout = UICollectionViewFlowLayout()
window = UIWindow()
window?.rootViewController = ViewController(collectionViewLayout: layout)</code></pre><p>And the code should look like this:</p><pre><code class="language-swift">func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -&gt; Bool {
// Override point for customization after application launch.
let layout = UICollectionViewFlowLayout()
window = UIWindow()
window?.rootViewController = ViewController(collectionViewLayout: layout)
return true
return 5
}</code></pre><p>The next step is to define the reusable cell using <code>cellForItemAt</code> that should return <code>UICollectionViewCell</code> and have a unique id called <code>cellId</code>. The code looks like this:</p><pre><code class="language-swift"> override func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -&gt; UICollectionViewCell {
let cell = collectionView.dequeueReusableCell(withReuseIdentifier: cellId, for: indexPath)
cell.backgroundColor = .red
return cell
}</code></pre><p>The full code should look like this:</p><pre><code class="language-swift">import UIKit
class ViewController: UICollectionViewController, UICollectionViewDelegateFlowLayout {
let cellId : String = "cellId"
override func viewDidLoad() {
super.viewDidLoad()
collectionView.backgroundColor = .purple
collectionView.register(UICollectionViewCell.self, forCellWithReuseIdentifier: cellId)
}
override func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -&gt; Int {
return 5
}
override func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -&gt; UICollectionViewCell {
let cell = collectionView.dequeueReusableCell(withReuseIdentifier: cellId, for: indexPath)
cell.backgroundColor = .red
return cell
}
let width = view.frame.width
let height = CGFloat(200)
return CGSize(width: width, height: height)
import UIKit
class CustomCell: UICollectionViewCell {
override init(frame: CGRect) {
super.init(frame: frame)
}
required init?(coder aDecoder: NSCoder) {
fatalError("init(coder:) has not been implemented")
}
}
</code></pre><p>Now the next things we have to do is to modify two methods to support the reusable cell, <code>collectionView.register</code> and <code>cellForItemAt</code>. &nbsp;Let's first modify the register method. Replace <code>UICollectionViewCell.<strong>self</strong></code><strong> </strong>with <code>CustomCell</code>:</p><pre><code class="language-swift"> collectionView.register(UICollectionViewCell.self, forCellWithReuseIdentifier: cellId)
let lb  = UILabel()
lb.text = "Section Title"
lb.font = UIFont.boldSystemFont(ofSize: 14)
lb.font = UIFont.boldSystemFont(ofSize: 14)
return lb
}()</code></pre><p>Then add the element to the view inside <code>init()</code> block:</p><pre><code class="language-swift">addSubview(titleLabel)</code></pre><p>If you run the app you won't see any changes, and that's because we didn't put any constraint to the element yet. So let's add some constraints – add this property &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<code>lb.translatesAutoresizingMaskIntoConstraints = <strong>false</strong></code><strong> </strong>to<strong> </strong><code>titleLabel</code> to be able to apply constraints to the element:</p><p>After we add <code>titleLabel</code> to the view, we define the constraints:</p><pre><code class="language-swift"> addSubview(titleLabel)
let collectionView : UICollectionView = {
// init the layout
let layout = UICollectionViewFlowLayout()
// set the direction to be horizontal
layout.scrollDirection = .horizontal
// the instance of collectionView
let cv = UICollectionView(frame: .zero, collectionViewLayout: layout)
// Activate constaints
cv.translatesAutoresizingMaskIntoConstraints = false
return cv
}()</code></pre><figcaption>Reference: <a href="https://stackoverflow.com/questions/44614743/add-uicollectionview-in-uicollectionviewcell">https://stackoverflow.com/questions/44614743/add-uicollectionview-in-uicollectionviewcell</a></figcaption></figure><p>Notice that we add <code>layout</code> to the <code>collectionView</code> as layer in the initializer as we did the first time with the <code>viewController.swift</code>. Here we also specify the direction of the <code>FlowLayout</code> to be <code>.horizontal</code>.</p><p>Let's add the <code>collectionView</code> element to the view as subView.</p><p> We gonna make a function that do that for us to make the code a little bit cleaner.</p><pre><code class="language-swift">    fileprivate  func setupSubCells(){
// add collectionView to the view
addSubview(collectionView)
collectionView.dataSource = self
collectionView.delegate = self
// setup constrainst
// make it fit all the space of the CustomCell
collectionView.topAnchor.constraint(equalTo: titleLabel.bottomAnchor).isActive = true
collectionView.leftAnchor.constraint(equalTo: leftAnchor).isActive = true
collectionView.bottomAnchor.constraint(equalTo: bottomAnchor).isActive = true
collectionView.rightAnchor.constraint(equalTo: rightAnchor).isActive = true
}
</code></pre><p>Make sure to set delegate to <code>self</code> for the <code>collectionView</code> and the dataSource as well:</p><p> &nbsp;<code>collectionView.dataSource = self</code></p><p> &nbsp; <code>collectionView.delegate = self</code> </p><p>Then call the function within <code>init</code> block.</p><p>Xcode will display some errors if you trying to build the app because we are not conforming to <code>UICollectionViewDelegate</code> and <code>UICollectionViewDelegateFlowLayout</code> protocols. To fix that we need first to register the sub cell as a reusable cell.</p><p>Create a variable at the top of the class and give it a name of <code>cellId</code> so we can use it when we need the cell identifier: </p><p><code>let cellId : String = "subCellID"</code></p><pre><code class="language-swift">collectionView.register(UICollectionViewCell.self, forCellWithReuseIdentifier: cellId)</code></pre><p>Now we're missing two more methods to make the errors go away: <code>numberOfItemsInSection</code> that define the number of cells in the section and <code>cellForItemAt</code> that define the reusable cell. These methods are necessary for &nbsp;<code>collectionView</code> to work properly:</p><pre><code class="language-swift"> // number of cells
func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -&gt; Int {
return  4
}
// reusable Cell
func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -&gt; UICollectionViewCell {
let cell = collectionView.dequeueReusableCell(withReuseIdentifier: cellId, for: indexPath)
cell.backgroundColor = .yellow
return cell
let width = frame.height
let height = frame.height
return CGSize(width: width, height: height)
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
