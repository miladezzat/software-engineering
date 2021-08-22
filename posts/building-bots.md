---
card: "/images/default.jpg"
tags: [Python]
description: "Most jobs have repetitive tasks that you can automate, which "
author: "Milad E. Fahmy"
title: "How to Build a Bot and Automate your Everyday Work"
created: "2021-08-16T15:35:55+02:00"
modified: "2021-08-16T15:35:55+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-node tag-bots tag-social-media tag-automation ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build a Bot and Automate your Everyday Work</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/06/freecodecamp_cover.png 300w,
/news/content/images/size/w600/2020/06/freecodecamp_cover.png 600w,
/news/content/images/size/w1000/2020/06/freecodecamp_cover.png 1000w,
/news/content/images/size/w2000/2020/06/freecodecamp_cover.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/06/freecodecamp_cover.png" alt="How to Build a Bot and Automate your Everyday Work">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<ol>
<li><a href="#areas-of-automation-and-where-to-start">Areas of Automation and Where to Start</a>
<ul>
<li>Simple Automation</li>
<li>Public API Automation</li>
<li>API Reverse Engineering</li>
</ul>
</li>
<li><a href="#ethical-considerations">Ethical Considerations of Automation</a></li>
<li><a href="#creating-a-directory-clean-up-script">Creating a Directory Clean-Up Script</a></li>
<li><a href="#a-complete-guide-to-bot-creation-and-automating-your-everyday-work">A Complete Guide to Bot Creation and Automating Your Everyday Work</a></li>
</ol>
import argparse</code></pre><p>After importing the two libraries, let's first set up the argument parser. Make sure to give a description and a help text to each added argument to give valuable help to the user when they type <code>--help</code>.</p><p>Our argument will be named <code>--path</code>. The double dashes in front of the name tell the library that this is an optional argument. By default we want to use the current directory, so set the default value to be <code>"."</code>.</p><pre><code class="language-python">parser = argparse.ArgumentParser(
description="Clean up directory and put files into according folders."
)
parser.add_argument(
"--path",
type=str,
default=".",
help="Directory path of the to be cleaned directory",
)
# parse the arguments given by the user and extract the path
args = parser.parse_args()
path = args.path
print(f"Cleaning up directory {path}")</code></pre><p>This already finishes the argument parsing section – it's quite simple and readable, right?</p><p>Let's execute our script and check for errors.</p><pre><code class="language-bash">python directory_clean.py --path ./test
=&gt; Cleaning up directory ./test</code></pre><p>Once executed, we can see the directory name being printed to the console, perfect.<br>Let's now use the <code>os</code> library to get the files of the given path. </p><h3 id="getting-a-list-of-files-from-the-folder">Getting a list of files from the folder</h3><p>By using the <code>os.listdir(path)</code> method and providing it a valid path, we get a list of all the files and folders inside of that directory.</p><p>After listing all elements in the folder, we want to differentiate between files and folders since we don't want to clean up the folders, only the files.</p><p>In this case, we use a Python list comprehension to iterate through all the elements and put them into the new lists if they meet the given requirement of being a file or folder.</p><pre><code class="language-python"># get all files from given directory
dir_content = os.listdir(path)
# create a relative path from the path to the file and the document name
path_dir_content = [os.path.join(path, doc) for doc in dir_content]
# filter our directory content into a documents and folders list
docs = [doc for doc in path_dir_content if os.path.isfile(doc)]
folders = [folder for folder in path_dir_content if os.path.isdir(folder)]
# counter to keep track of amount of moved files
# and list of already created folders to avoid multiple creations
moved = 0
created_folders = []
print(f"Cleaning up {len(docs)} of {len(dir_content)} elements.")</code></pre><p>As always, let's make sure that our users get feedback. So add a print statement that gives the user an indication about how many files will be moved.</p><pre><code class="language-bash">python directory_clean.py --path ./test
=&gt; Cleaning up directory ./test
=&gt; Cleaning up 60 of 60 elements.</code></pre><p>After re-executing the python script, we can now see that the <code>/test</code> folder I created contains 60 files that will be moved.</p><h3 id="creating-a-folder-for-every-file-extension">Creating a folder for every file extension</h3><p>The next and more important step now is to create the folder for each of the file extensions. We want to do this by going through all of our filtered files and if they have an extension for which there is no folder already, create one.</p><p>The <code>os</code> library helps us with more nice functionality like the splitting of the filetype and path of a given document, extracting the path itself and name of the document. &nbsp;</p><pre><code class="language-python"># go through all files and move them into according folders
for doc in docs:
# separte name from file extension
full_doc_path, filetype = os.path.splitext(doc)
doc_path = os.path.dirname(full_doc_path)
doc_name = os.path.basename(full_doc_path)
print(filetype)
print(full_doc_path)
print(doc_path)
print(doc_name)
break</code></pre><p>The break statement at the end of the code above makes sure that our terminal does not get spammed if our directory contains dozens of files.</p><p>Once we've set this up, let's execute our script to see an output similar to this:</p><pre><code class="language-bash">python directory_clean.py --path ./test
=&gt; ...
=&gt; .pdf
=&gt; ./test/test17
=&gt; ./test
=&gt; test17</code></pre><p>We can now see that the implementation above splits off the filetype and then extracts the parts from the full path.</p><p>Since we have the filetype now, we can check if a folder with the name of this type already exists. </p><p>Before we do that, we want to make sure to skip a few files. If we use the current directory <code>"."</code> as the path, we need to avoid moving the python script itself. A simple if condition takes care of that. </p><p>In addition to that, we don't want to move <a href="https://www.lifewire.com/what-is-a-hidden-file-2625898">Hidden Files</a>, so let's also include all files that start with a dot. The <code>.DS_Store</code> file on macOS is an example of a hidden file.</p><pre><code class="language-python">	# skip this file when it is in the directory
if doc_name == "directory_clean" or doc_name.startswith('.'):
continue
# get the subfolder name and create folder if not exist
subfolder_path = os.path.join(path, filetype[1:].lower())
if subfolder_path not in folders:
# create the folder</code></pre><p>Once we've taken care of the python script and hidden files, we can now move on to creating the folders on the system.</p><p>In addition to our check, if the folder already was there when we read the content of the directory, in the beginning, we need a way to track the folders we've already created. That was the reason we declared the <code>created_folders = []</code> list. It will serve as the memory to track the names of folders.</p><p>To create a new folder, the <code>os</code> library provides a method called <code>os.mkdir(folder_path)</code> that takes a path and creates a folder with the given name there. </p><p>This method may throw an exception, telling us that the folder already exists. So let's also make sure to catch that error.</p><pre><code class="language-python">if subfolder_path not in folders and subfolder_path not in created_folders:
try:
os.mkdir(subfolder_path)
created_folders.append(subfolder_path)
print(f"Folder {subfolder_path} created.")
except FileExistsError as err:
print(f"Folder already exists at {subfolder_path}... {err}")</code></pre><p>After setting up the folder creation, let's re-execute our script.</p><pre><code class="language-bash">python directory_clean.py --path ./test
=&gt; ...
=&gt; Folder ./test/pdf created.</code></pre><p>On the first run of execution, we can see a list of logs telling us that the folders with the given types of file extensions have been created.</p><h3 id="moving-each-file-into-the-right-subfolder">Moving each file into the right subfolder</h3><p>The last step now is to actually move the files into their new parent folders.</p><p>An important thing to understand when working with os operations is that sometimes operations can not be undone. This is, for example, the case with deletion. So it makes sense to first only log out the behavior our script would achieve if we execute it.</p><p>This is why the <code>os.rename(...)</code> method has been commented here.</p><pre><code class="language-python"># get the new folder path and move the file
new_doc_path = os.path.join(subfolder_path, doc_name) + filetype
# os.rename(doc, new_doc_path)
moved += 1
print(f"Moved file {doc} to {new_doc_path}")</code></pre><p>After executing our script and seeing the correct logging, we can now remove the comment hash before our <code>os.rename()</code> method and give it a final go.</p><pre><code class="language-python"># get the new folder path and move the file
new_doc_path = os.path.join(subfolder_path, doc_name) + filetype
os.rename(doc, new_doc_path)
moved += 1
print(f"Moved file {doc} to {new_doc_path}")
print(f"Renamed {moved} of {len(docs)} files.")</code></pre><pre><code class="language-bash">python directory_clean.py --path ./test
=&gt; ...
=&gt; Moved file ./test/test17.pdf to ./test/pdf/test17.pdf
=&gt; ...
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
