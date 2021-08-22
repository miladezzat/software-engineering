---
card: "/images/default.jpg"
tags: [Unreal Engine]
description: "Every job has repetitive tasks and processes that can be auto"
author: "Milad E. Fahmy"
title: "How to Become an Unreal Automation Expert"
created: "2021-08-16T15:36:48+02:00"
modified: "2021-08-16T15:36:48+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-unreal-engine tag-epic tag-python tag-scripting tag-automation tag-c-2 ">
<header class="post-full-header">
<h1 class="post-full-title">How to Become an Unreal Automation Expert</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/04/udemy_cover_img.png 300w,
/news/content/images/size/w600/2020/04/udemy_cover_img.png 600w,
/news/content/images/size/w1000/2020/04/udemy_cover_img.png 1000w,
/news/content/images/size/w2000/2020/04/udemy_cover_img.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/04/udemy_cover_img.png" alt="How to Become an Unreal Automation Expert">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<ol>
<li><a href="#automating-workflows-with-blueprints-c-and-python">Automating Workflows with Blueprints, C++, and Python</a></li>
<li><a href="#why-the-unreal-engine-is-interesting">Why the Unreal Engine is interesting</a>
<ul>
<li><a href="#why-use-blueprints-for-workflow-and-even-game-programming">Why use Blueprints for workflow and even game programming</a></li>
<li><a href="#why-use-c-for-workflow-and-game-programming">Why use C++ for workflow and game programming</a></li>
<li><a href="#why-use-python-for-workflow-optimisation">Why use Python for workflow optimisation</a></li>
</ul>
</li>
<li><a href="#writing-our-own-automated-project-clean-up-script-using-python">Writing our own automated project clean-up script using Python</a>
<ul>
<li><a href="#but-does-it-pay-off">But does it pay off?</a></li>
</ul>
</li>
<li><a href="#learn-how-to-automate-and-optimise-workflows-with-scripting-on-udemy">Learn how to automate and optimise workflows with scripting on Udemy</a></li>
</ol>
# create unreal class instances
editor_util = unreal.EditorUtilityLibrary()
# get the selected assets
selected_assets = editor_util.get_selected_assets()
num_assets = len(selected_assets)
unreal.log(num_assets)</code></pre><p>The code snippet above will print a single number to the <code>Debug Log</code>. For each of the selected assets, we now want to get some information like the asset name and class.</p><p>The Unreal <code><a href="https://docs.unrealengine.com/en-US/PythonAPI/class/_ObjectBase.html?highlight=objectbase#unreal._ObjectBase">ObjectBase</a></code> object has several helper methods to get the name, class, and other attributes. We will make use of the <code>get_fname()</code> and <code>get_class()</code> methods.</p><pre><code class="language-Python">for assets in selected_assets:
# get the class instance and the clear text name
asset_name = asset.get_fname()
asset_class = asset.get_class()
unreal.log("{} - {}".format(asset_name, asset_class))</code></pre><p>However, this will only give us the class definition and not the clear text name of the class itself, which we want to use for folder creation.</p><p>To get the display name instead of the class definition, we need to create an instance of the <code><a href="https://docs.unrealengine.com/en-US/PythonAPI/class/SystemLibrary.html?highlight=systemlibrary">SystemLibrary</a></code>. It's <code>get_class_display_name()</code> method takes a class definition and returns the class name as <code>String</code>.</p><pre><code class="language-Python"># create unreal class instances
editor_util = unreal.EditorUtilityLibrary()
system_lib = unreal.SystemLibrary()
...
for assets in selected_assets:
# get the class instance and the clear text name
asset_name = asset.get_fname()
asset_class = asset.get_class()
class_name = system_lib.get_class_display_name(asset_class)
unreal.log("Name: {} - Class: {}".format(asset_name, class_name))
</code></pre><p>Now we can see something like this "Name: NewMaterial - Class: Material" printed to our log. This is precisely the kind of information we needed.</p><p>The last step is to "rename" our assets to a given location. For example, every Material will be renamed to <code>"/Material/&lt;Name of Material Asset&gt;"</code> which will move it into the according to folders.</p><p>To "rename" assets, we need an additional class. The <code>rename_loaded_asset()</code> method is part of the <a href="https://docs.unrealengine.com/en-US/PythonAPI/class/EditorAssetLibrary.html?highlight=editorassetlibrary"><code>EditorAssetLibrary</code></a>, so we need to create an instance of this class first. In addition to that, we have to create a new location to which the asset will be relocated.</p><p>To keep this more platform-independent, we will use the <code>os</code> module and its <code>path.join()</code> method.</p><p>Once we have created the <code>new_path</code> variable, we can use it in the method call to <code>rename_loaded_asset()</code> to relocate our current asset.</p><pre><code class="language-Python">import os
import unreal
# create unreal class instances
editor_util = unreal.EditorUtilityLibrary()
system_lib = unreal.SystemLibrary()
editor_asset_lib = unreal.EditorAssetLibrary()
...
for assets in selected_assets:
# get the class instance and the clear text name
asset_name = asset.get_fname()
asset_class = asset.get_class()
class_name = system_lib.get_class_display_name(asset_class)
# assemble new path and relocate asset
new_path = os.path.join("/Game", class_name, asset_name)
editor_asset_lib.rename_loaded_asset(asset_name, new_path)
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
