---
card: "/images/default.jpg"
tags: [iOS]
description: "This is the second part of an article on building a Spotify U"
author: "Milad E. Fahmy"
title: "How to programmatically build a Spotify clone for iOS using AutoLayout: adding photos and updating the UI"
created: "2021-08-16T11:28:09+02:00"
modified: "2021-08-16T11:28:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-ios tag-mobile tag-programing tag-learning-to-code tag-learning tag-app-development tag-autolayout tag-ios13 tag-iphone tag-user-interface tag-tutorial tag-tech tag-swift tag-swift-programming tag-swift4 tag-100daysofcode tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to programmatically build a Spotify clone for iOS using AutoLayout: adding photos and updating the UI</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/12/featured_image-4.png 300w,
/news/content/images/size/w600/2019/12/featured_image-4.png 600w,
/news/content/images/size/w1000/2019/12/featured_image-4.png 1000w,
/news/content/images/size/w2000/2019/12/featured_image-4.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/12/featured_image-4.png" alt="How to programmatically build a Spotify clone for iOS using AutoLayout: adding photos and updating the UI">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
class SubCustomCell: UICollectionViewCell {
override init(frame: CGRect) {
super.init(frame: frame)
backgroundColor = .red
}
required init?(coder aDecoder: NSCoder) {
fatalError("init(coder:) has not been implemented")
}
}</code></pre><p>Then we register the <code>SubCustomCell</code> &nbsp;inside <code>CustomCell.swift</code> within the <code>init</code> block. Replace <code>UICollectionViewCell.self</code> with &nbsp;<code><code>SubCustomCell</code></code> like below.</p><pre><code class="language-swift"> collectionView.register(SubCustomCell.self, forCellWithReuseIdentifier: cellId)</code></pre><p>Also we need to make a modification on the <code>cellForItemAt</code> method and make it conform to &nbsp;<code>SubCustomCell</code> like the following.</p><pre><code class="language-swift"> func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -&gt; UICollectionViewCell {
let cell = collectionView.dequeueReusableCell(withReuseIdentifier: cellId, for: indexPath) as! SubCustomCell
// cell.backgroundColor = .yellow
return cell
let iv = UIImageView()
iv.backgroundColor = .yellow
return iv
}()
</code></pre><p>And add it to the <code>view</code> within the <code>init</code> block using <code>addSubView</code>.</p><pre><code class="language-swift"> override init(frame: CGRect) {
super.init(frame: frame)
addSubview(ImageView)
}</code></pre><p>Now let's make the <code>ImageView</code> take up all the space within the cell with the constraints below.</p><pre><code class="language-swift"> ImageView.translatesAutoresizingMaskIntoConstraints = false
ImageView.topAnchor.constraint(equalTo: topAnchor).isActive = true
ImageView.leftAnchor.constraint(equalTo: leftAnchor).isActive = true
ImageView.rightAnchor.constraint(equalTo: rightAnchor).isActive = true
ImageView.bottomAnchor.constraint(equalTo: bottomAnchor).isActive = true</code></pre><ul><li><code>LeftAnchor</code> represents the left anchor of the cell</li><li><code>rightAnchor</code> represents the right anchor of the cell</li><li><code>bottomAnchor</code> represents the bottom anchor of the cell </li><li><code>topAnchor</code> represents the top anchor of the cell</li></ul><p>And by making <code>ImageView</code> 's top anchor equal to the cell's top anchor (and doing the same for <code>ImageView</code> 's left, right, and bottom anchor) it makes the <code>ImageView</code> take up all the space of the <code>SubCustomCell</code> (cell).</p><p>Note: first you need to use <code>translatesAutoresizingMaskIntoConstraints</code> to be able to apply the constraints to the elements. Also don't forget to call <code>isActive</code> property and assign it to <code>true</code> – without doing that the constraints won't work and nothing will change.</p><p>The <code>ImageView</code> should have an image, so let's add one.</p><pre><code class="language-swift"> let ImageView : UIImageView = {
let iv = UIImageView()
iv.backgroundColor = .yellow
// we have &gt;image1&lt; file inside the project
iv.image = UIImage(named: "image1")
iv.contentMode = .scaleAspectFill
iv.clipsToBounds = true
return iv
let lb = UILabel()
lb.textColor = UIColor.lightGray
lb.font = UIFont.systemFont(ofSize: 16)
lb.font = UIFont.boldSystemFont(ofSize: 20)
lb.text = "Evening Music"
return lb
}()</code></pre><p>I just put some random text there – you can put whatever you like. The next step is to add the element to the view and give it some constraints. The title will be placed at the bottom of the <code>ImageView</code>.</p><h3 id="add-to-view-">Add to view:</h3><pre><code class="language-swift">addSubview(TitleLabel)
</code></pre><h3 id="applying-the-constraints-for-both-the-imageview-and-the-titlelabel">Applying the constraints for both the <code>ImageView</code> and the <code>TitleLabel</code></h3><pre><code class="language-swift"> ImageView.translatesAutoresizingMaskIntoConstraints = false
ImageView.topAnchor.constraint(equalTo: topAnchor).isActive = true
ImageView.leftAnchor.constraint(equalTo: leftAnchor).isActive = true
ImageView.rightAnchor.constraint(equalTo: rightAnchor).isActive = true
ImageView.heightAnchor.constraint(equalToConstant: 240).isActive = true
ImageView.bottomAnchor.constraint(equalTo: TitleLabel.topAnchor).isActive = true
TitleLabel.translatesAutoresizingMaskIntoConstraints = false
TitleLabel.topAnchor.constraint(equalTo: ImageView.bottomAnchor,constant: 10).isActive = true
TitleLabel.leftAnchor.constraint(equalTo: leftAnchor, constant: 5).isActive = true
struct Section {
var title : String
var playlists : NSArray
init(dictionary:[String : Any]) {
self.title = dictionary["title"] as? String ?? ""
self.playlists = dictionary["playlists"] as? NSArray ?? []
}
}
</code></pre><p><code>playlist.swift</code></p><pre><code class="language-swift">//
//  playlist.swift
//  spotifyAutoLayout
//
//  Created by admin on 12/6/19.
//  Copyright © 2019 Said Hayani. All rights reserved.
//
import Foundation
struct PlayList {
var title: String
var image : String
init(dictionary : [String : Any]) {
self.title = dictionary["title"] as? String ?? ""
self.image = dictionary["image"] as? String ?? ""
}
}
</code></pre><p>And then inside <code>ViewController.swift</code> we create a function that fetches the JSON for us and stores the results in an array.</p><pre><code class="language-swift">
print("attempt to fetch Json")
if let path = Bundle.main.path(forResource: "test", ofType: "json") {
do {
let data = try Data(contentsOf: URL(fileURLWithPath: path), options: .mappedIfSafe)
let jsonResult = try JSONSerialization.jsonObject(with: data, options: .mutableLeaves)
if let jsonResult = jsonResult as? [ Any] {
// do stuff
jsonResult.forEach { (item) in
let section = Section(dictionary: item as! [String : Any])
// print("FEtching",section.playlists)
self.sections.append(section)
}
self.collectionView.reloadData()
}
} catch {
// handle error
}
}
}</code></pre><p>The <code>fetchJson</code> function is called within the <code>ViewDidLoad</code> method. We also have a variable called <code>sections</code> where we store the results:</p><pre><code class="language-swift"> var sections = [Section]()</code></pre><p>The next step is to pass the data from <code>ViewController</code> to <code>CustomCell</code>. For that we create a variable inside <code>CustomCell</code> which will receive the data for each section: </p><pre><code class="language-swift"> var section : Section?{
didSet{
print("section ✅",self.section)
}
}</code></pre><p>We use <code>cellForItemAt</code> &nbsp;inside the <code>ViewController</code> method to pass the data directly to the <code>CustomCell</code> .</p><pre><code class="language-swift">override func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -&gt; UICollectionViewCell {
let cell = collectionView.dequeueReusableCell(withReuseIdentifier: cellId, for: indexPath) as! CustomCell
cell.section = sections[indexPath.item]
return cell
}</code></pre><p>Note: we always call <strong><code>self</code></strong><code>.collectionView.reloadData()</code> every-time <code>fetchJson</code> is called so the block below, inside <code>CustomCell</code>, will be called as well. Check the console, <code>shift</code> + command + C:</p><pre><code class="language-swift"> var section : Section? {
didSet{
print("section ✅",self.section)
}
}</code></pre><p>The first thing we change is to set the the section title:</p><pre><code class="language-swift"> var section : Section? {
didSet{
print("section ✅",self.section)
guard let section = self.section else {return}
self.titleLabel.text = section.title
}
didSet{
print("section ✅",self.section)
guard let section = self.section else {return}
self.titleLabel.text = section.title
// append to playlists array
self.section?.playlists.forEach({ (item) in
let playlist = PlayList(dictionary: item as! [String : Any])
self.playlists.append(playlist)
})
self.collectionView.reloadData()
}
}</code></pre><p>Attention! If you try to run the app it may crash. This is because we forgot to set the number of sections. Since we are now receiving the data from JSON, the number should be dynamic based on the number of sections we have. The number of sections should be equal to the number of sections inside the <code>JSON</code>, so we need to modify <code>numberOfItemsInSection</code> inside <code>ViewController</code> to the below :</p><pre><code class="language-swift">   override func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -&gt; Int {
return sections.count
}</code></pre><p>We do the same thing with the same method inside <code>CustomCell.swift</code> – but here we consider the number of the <code>playlists</code> instead.</p><pre><code class="language-swift">func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -&gt; Int {
return  self.playlists.count
}</code></pre><p>The last step we have to complete is to pass each single playlist <code>Object</code> to <code>SubCustomCell</code> within <code>cellForItemAt</code> in <code>CustomCell.swift</code>. </p><pre><code class="language-swift"> func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -&gt; UICollectionViewCell {
let cell = collectionView.dequeueReusableCell(withReuseIdentifier: cellId, for: indexPath) as! SubCustomCell
// here ?
cell.playlist = playlists[indexPath.item]
return cell
}</code></pre><p>And we are going to get that data inside <code>SubCustomCell</code> via the <code>playlist</code> variable and finally display the title and image of the playlist.</p><pre><code class="language-swift">var playlist : PlayList? {
didSet{
print("Playlist ?",self.playlist)
guard let playlist = self.playlist else {return}
// The Image ?
self.ImageView.image = UIImage(named: playlist.image)
// the playlist title ?
self.TitleLabel.text = self.playlist?.title
}
let width = frame.height / 2
let height = frame.height / 2
return CGSize(width: width, height: height)
}</code></pre><p>Make the ImageView's height equal to <code>150</code> as well.</p><pre><code class="language-swift">  //SubCutomCell.swift
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
