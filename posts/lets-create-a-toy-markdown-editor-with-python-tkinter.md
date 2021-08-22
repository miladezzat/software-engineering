---
card: "/images/default.jpg"
tags: [Python]
description: "Markdown editors are trending these days. Everybody is creati"
author: "Milad E. Fahmy"
title: "How to Build a Toy Markdown Editor with Python and Tkinter"
created: "2021-08-16T15:37:43+02:00"
modified: "2021-08-16T15:37:43+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-editor ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build a Toy Markdown Editor with Python and Tkinter</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/01/cover-1.png 300w,
/news/content/images/size/w600/2020/01/cover-1.png 600w,
/news/content/images/size/w1000/2020/01/cover-1.png 1000w,
/news/content/images/size/w2000/2020/01/cover-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/01/cover-1.png" alt="How to Build a Toy Markdown Editor with Python and Tkinter">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>As for myself, however, I have always been a fan of doing things which haven't been done by others. (I will explain below why other devs don't want to build a markdown editor with Tkinter.)</p>
<blockquote>
<p>But If you are just starting out with Python and/or Tkinter, you can check out these:<br>
<strong>Python Tutorials:</strong> <a href="/news/best-python-tutorial/">FreeCodeCamp Python Tutorial</a> , <a href="https://www.youtube.com/playlist?list=PLQVvvaa0QuDeAams7fkdcwOGBpGdHpXln">Python 3 Playlist by sentdex</a> , <a href="https://www.youtube.com/watch?v=rfscVS0vtbw">FreeCodeCamp Python for Beginners</a> etc. (More can be found one Google search away)<br>
<strong>Tkinter Tutorials:</strong> <a href="https://pythonprogramming.net/python-3-tkinter-basics-tutorial/">Tkinter Basics</a> , <a href="https://www.youtube.com/watch?v=YXPyB4XeYLA">FreeCodeCamp Tkinter Course</a> , <a href="https://www.youtube.com/playlist?list=PL6gx4Cwl9DGBwibXFtPtflztSNPGuIB_d">TheNewBoston Tkinter Playlist</a> etc. (More can be found one Google search away)</p>
</blockquote>
<p>But one day, while I was roaming the streets of the Internet, I found something interesting: <a href="https://github.com/paolo-gurisatti/tk_html_widgets"><strong>tk_html_widgets</strong></a>. It can display html output!</p>
<p>But ofcourse it did have some problems: the fonts were too small, and it had no support for attaching remote photos. So as usual I created my own fork and fixed some issues and kinda improved the stability. I named it <a href="https://github.com/bauripalash/tkhtmlview/">tkhtmlview</a>. ?</p>
<p>Ugh, I think I'm boring you ?, so let's stop talking and start building.</p>
<p>First make sure you have Python 3 and Tkinter installed. If not you can download them from here:<br>
<a href="https://www.python.org/downloads">python.org/downloads</a> (Tkinter is already packed with Python).</p>
<p>Other Things we will need are <strong>tkhtmlview</strong> and <strong>markdown2</strong>. You can install them by running <code>pip install tkhtmlview markdown2</code> or <code>pip3 install tkhtmlview markdown2</code> (if you have multiple versions of Python).</p>
<p>Now fire up your favorite editor or IDE and create a new file (eg. <code>tdown.py</code> (I named the editor <em>tdown</em>)).<br>
We will start by importing the necessary libraries.</p>
<pre><code class="language-python">from tkinter import *
from tkinter import font , filedialog
from markdown2 import Markdown
from tkhtmlview import HTMLLabel
</code></pre>
<p>In the first line we import everything (almost) from the tkinter package.</p>
<p>In the second line we import the font and filedialog. <code>font</code> is needed to style (eg. Font , Font Size) our input field, and filedialog is imported to open markdown files for editing (and/or for saving our markdown file).</p>
<p>In the 3rd line, Markdown is imported to help us convert our markdown source to html and display it in the output field using HTMLLabel (which we import on the 4th line).</p>
<p>After that, we will create a frame class called Window which will be inherited from tkinters's <strong>Frame</strong> class. It will hold our input and output fields.</p>
<pre><code class="language-python">
class Window(Frame):
def __init__(self, master=None):
Frame.__init__(self, master)
self.master = master
self.myfont = font.Font(family="Helvetica", size=14)
self.init_window()
def init_window(self):
self.master.title("TDOWN")
self.pack(fill=BOTH, expand=1)
</code></pre>
<p>Here in this codeblock, we first define a class called Window which inherits tkinter's Frame widget class.</p>
<p>Now in the initialization function we take master as a argument which will serve as the parent of the frame. In the next line we initialize a Frame.</p>
<p>Next we declare a custom font object called <code>self.myfont</code> with the font family <strong>Helvetica</strong> (you can choose any font family you want) and size <em>14</em> which will be used in our markdown input field.</p>
<p>Finally we call the <em>init_window</em> function where we will put the heart of our application.</p>
<p>In the <em>init_window</em> function we first set the title of the window as <strong>TDOWN</strong>. In the next line <code>self.pack(fill=BOTH, expand=1)</code> , we tell our Frame to take the full space of our window.</p>
<p>We set the <code>fill</code> keyword argument to <code>BOTH</code> which is actually being imported from the tkinter library. It tells the frame to fill the window both horizontally and vertically, and the <code>expand</code> keyword argument is set to 1 (signifies <strong>True</strong>) which tells our Frame to be expandable. In simple terms the Frame will fill the window no matter how we stretch the window size or maximize it.</p>
<p>Now if you run the <code>tdown.py</code> script you'll not see anything because we have only defined the class but never called it.</p>
<p>To fix this we are gonna put this at the end of our script:</p>
<pre><code class="language-python">root = Tk()
root.geometry("700x600")
app = Window(root)
app.mainloop()
</code></pre>
<p>Here we create a Tk object and store it in the root variable which will serve as the root of our Window class.</p>
<p>Next we set the geometry of our window to 700x600 - 700 is the height and 600 is tthe width of the window. In the next line you can see that we are creating a Window object. We push the <strong>root</strong> variable as <em>root</em> of the frame and store it in a variable called <strong>app</strong>.</p>
<p>The next thing we do is just call the mainloop function which tells our app to run! ?</p>
<p>Now run the <code>tdown.py</code> script. You will see a blank window like this if you did everything correctly:</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/01/blank.png" alt="Blank Tkinter Frame"></p>
<p>But it's just a blank window. To write something in the window we need to add a Text Field where we will write our markdown. To do that we are gonna use the <strong>Text</strong> widget from tkinter.</p>
<pre><code class="language-python">...
def init_window(self):
self.master.title("TDOWN")
self.pack(fill=BOTH, expand=1)
self.inputeditor = Text(self, width="1")
self.inputeditor.pack(fill=BOTH, expand=1, side=LEFT)
</code></pre>
<blockquote>
<p>Don't get confused with the <strong>...</strong> (three dots) , I put them there only to signify that there are multiple lines of code before this code block.</p>
</blockquote>
<p>Here we create a Text widget with a width of <strong>1</strong>. Don't scratch your head - here sizes are done using ratios. You'll understand it more clearly in next few seconds when we put in the output box. ?</p>
<p>We then pack it into the Frame and tell it to be both Horizontally and Vertically stretchable.</p>
<p>When you run the script, you'll see that a Multiline Input Field has taken over our whole <s>World</s> Window. If you start writing in it, you may notice that the characters are so tiny!</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/01/with_small_fonts.png" alt="Input Field Has Taken Over the Whole Window!"></p>
<p>I already knew this problem would arise. That's why I told you earlier to create a custom font object (<em>self.myfont</em>). Now if you do something like this:</p>
<pre><code class="language-python">
self.inputeditor = Text(self, width="1" , font=self.myfont)
</code></pre>
<blockquote>
<p>(Here, we tell our Text widget to use our custom font instead of the default tiny one!)</p>
</blockquote>
<p>...the font size of the input field will be increased to 14. Run the script to check if everything worked perfectly.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/01/font_size_increased.png" alt="Font Size has been increased to 14"></p>
<p>Now, I think it's time to add the outputbox where we will see the html output of our markdown source while we write.</p>
<p>To do that we are gonna add an HTMLLabel, something like this inside <code>init_window</code> function:</p>
<pre><code class="language-python">self.outputbox = HTMLLabel(self, width="1", background="white", html="&lt;h1&gt;Welcome&lt;/h1&gt;")
self.outputbox.pack(fill=BOTH, expand=1, side=RIGHT)
self.outputbox.fit_height()
</code></pre>
<p>We use <code>HTMLLabel</code> from <em>tkhtmlview</em> with a width of <strong>1</strong> (again). We set the width to 1 because the window will be shared between Input Field and Output Box with ratio of <strong>1:1</strong> (You'll understand what I mean when you run the script).</p>
<p>The <code>html</code> keyword argument stores the value which will be shown the first time.</p>
<p>Then we pack it in the window with <code>side</code> as <code>RIGHT</code> to put it in the right side of the Input Field. The <code>fit_height()</code> makes the texts fit inside the widget (as far as I know... ?)</p>
<p>Now run the code.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/01/no_binding.png" alt="Output Box Added!"></p>
<p>Now if you start writing in the input field, you may be disappointed (but don't be!) to see that the output is not getting updated as we type. That's because we have not told our program to do so yet.</p>
<p>To do that we are gonna first bind a event with our editor. Then whenever the text is modified the output will be updated, something like this:</p>
<pre><code class="language-python">self.inputeditor.bind("&lt;&lt;Modified&gt;&gt;", self.onInputChange)
</code></pre>
<blockquote>
<p>Put that line inside the init_window() function.</p>
</blockquote>
<p>So basically that line tells the <code>inputeditor</code> to call the <code>onInputChange</code> function whenever the text is changed. But as we don't have that function yet, we need to write it.</p>
<pre><code class="language-python">...
def onInputChange(self , event):
self.inputeditor.edit_modified(0)
md2html = Markdown()
self.outputbox.set_html(md2html.convert(self.inputeditor.get("1.0" , END)))
</code></pre>
<p>In the first line, using <code>edit_modified(0)</code> we reset the Modified flag so that it can be reused. Otherwise, after the first event call, it will not work anymore.</p>
<p>Next we create a Markdown object named md2html. On the last line, where first we.... wait! The last line may be confusing for some readers. So let me it break it down into three lines.</p>
<pre><code class="language-python">markdownText = self.inputeditor.get("1.0" , END)
html = md2html.convert(markdownText)
self.outputbox.set_html(html)
</code></pre>
<p>Here in the first line we fetch the markdown text from top to bottom of the input field. The first argument, <code>self.inputeditor.get</code>, tells it to start scanning from the first line's 0th character (1.0 =&gt; [LINE_NUMBER].[CHARACTER_NUMBER]) , and the last argument tells it to stop scanning it has when reached the end.</p>
<p>Then we convert the scanned markdown text to html using the <code>md2html.convert()</code> function and store it in the <code>html</code> variable.</p>
<p>Finally we tell outputbox to display the output using the <code>.set_html()</code> function!</p>
<p>Run the script. You will see a functioning (almost) markdown editor. As you type in the input field, the output will also be updated!</p>
<p>But...our work is not yet finished. Users need to be able to at least open and save their text.</p>
<p>To do that, we are gonna add a <code>File</code> menu in the menubar. This is where users will be able to open and save files as well as quit the application.</p>
<p>In the <code>init_window</code> function we will add these lines:</p>
<pre><code class="language-python">self.mainmenu = Menu(self)
self.filemenu = Menu(self.mainmenu)
self.filemenu.add_command(label="Open", command=self.openfile)
self.filemenu.add_command(label="Save as", command=self.savefile)
self.filemenu.add_separator()
self.filemenu.add_command(label="Exit", command=self.quit)
self.mainmenu.add_cascade(label="File", menu=self.filemenu)
self.master.config(menu=self.mainmenu)
</code></pre>
<p>I'll make this quick:</p>
<p>Here we define a new menu with Frame as its parent.</p>
<p>Next, we define another menu and previous menu as its parent. It will serve as our <code>File</code> menu.</p>
<p>Then we add 3 sub menus (Open, Save as, and Exit) and a separator using the <code>add_command()</code> and <code>add_separator()</code> functions. The <strong>Open</strong> sub-menu will execute the <code>openfile</code> function, the <strong>Save as</strong> sub-menu will execute the <code>savefile</code> function. and finally <strong>Exit</strong> will execute a builtin function <code>quit</code> which will close the program.</p>
<p>Then using the <code>add_cascade()</code> function we tell the first Menu object to include the <code>filemenu</code> variable. This includes all our sub-menus with the label <code>File</code>.</p>
<p>At last we use <code>self.master.config()</code> to tell our window to use <code>mainmenu</code> as our window's menubar.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/01/menus.png" alt="Menu Added"></p>
<blockquote>
<p>It will look something like this, but don't run it yet. You'll get errors saying that the <code>openfile</code> &amp; <code>savefile</code> functions aren't defined.</p>
</blockquote>
<p>As you can see now, we have to define two functions inside the Window class  where we will use tkinter's filedialog.</p>
<p>First Let's define the function to open files:</p>
<pre><code class="language-python">def openfile(self):
openfilename = filedialog.askopenfilename(filetypes=(("Markdown File", "*.md , *.mdown , *.markdown"),
("Text File", "*.txt"),
("All Files", "*.*")))
if openfilename:
try:
self.inputeditor.delete(1.0, END)
self.inputeditor.insert(END , open(openfilename).read())
except:
print("Cannot Open File!")
</code></pre>
<p>Here, at first we show the user a file browser dialog that allows them to choose a file to open using <code>filedialog.askopenfilename()</code>. With the <code>filetypes</code> keyword argument we tell the dialog to only open these types of files by passing a tuple with supported files (basically all types of files):</p>
<ul>
<li>Markdown files with <code>.md</code> , <code>.mdown</code> , <code>.markdown</code> extensions,</li>
<li>Text Files with <code>.txt</code> extension,</li>
</ul>
<p>Then we check if the user has selected a file or not. If yes, we try to open the file. Then we delete all the text inside the input field from the first line's 0th character to the END of the field.</p>
<p>Next we open and read the content of the selected file and insert the contents in the input field.</p>
<p>If our program can't open a file it will print out the error. But wait, that's not a good way to handle errors. What we can do here is show an Error Message to the user that looks like this:</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/01/error.png" alt="Showing an Error Message"></p>
<p>To do that, we are gonna first import <code>messagebox</code> from the tkinter  package.</p>
<pre><code class="language-python">from tkinter import messagebox as mbox
</code></pre>
<p>Then instead of just printing an error message like we did above, we're gonna replace that line with the below line to show a proper error message to the user.</p>
<pre><code class="language-python">
mbox.showerror("Error Opening Selected File" , "Oops!, The file you selected : {} can not be opened!".format(openfilename))
</code></pre>
<p>This will create an Error message like the above screenshot I showed you when the file can not be opened.</p>
<p>In the <code>mbox.showerror</code> function, the first argument is the title of the messagebox. The second one is the message to be displayed.</p>
<p>Now, we need to write a <code>savefile</code> function to save our markdown input.</p>
<pre><code class="language-python">def savefile(self):
filedata = self.inputeditor.get("1.0" , END)
savefilename = filedialog.asksaveasfilename(filetypes = (("Markdown File", "*.md"),
("Text File", "*.txt")) , title="Save Markdown File")
if savefilename:
try:
f = open(savefilename , "w")
f.write(filedata)
except:
mbox.showerror("Error Saving File" , "Oops!, The File : {} can not be saved!".format(savefilename))
</code></pre>
<p>Here at first we scan all the content of the input field and store it in a variable. Then we ask the user for the filename where they want to save the contents by giving the option for two types of file types (.md and .txt).</p>
<p>If the user chooses a filename we try to save the contents of the input field stored in the variable <code>filedata</code>. If an exception occurs, we show the user an error message stating that the program wasn't able to save the file.</p>
<p>Don't forget to test your application to check for any bugs! If you and I haven't made any mistakes, our programs should run perfectly and shouldlook something like this:</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/01/complete.png" alt="Final Product"></p>
<blockquote>
<p><strong>Full source code for this 'tdown' markdown editor is available at <a href="https://github.com/bauripalash/tdown">GitHub</a> and also at <a href="https://repl.it/@bauripalash/tdownlive">Repl.it</a> where you can test the editor on your browser!</strong></p>
</blockquote>
<p><img src="https://media1.tenor.com/images/86bfdafc0ec6509e13b1c1748564b2e6/tenor.gif?itemid=9101932" alt="We Finally Did it!"></p>
<p>If you get into any problems as you're going through this article you can let me know in the comments or DM me on twitter at <a href="https://twitter.com/bauripalash">@bauripalash</a>.</p>
<h2 id="somenotes">Some Notes:</h2>
<ul>
<li>
<p>First, remember that this is just a toy editor. If you want to build more powerful editor you can use any other GUI libraries such as wxPython, PyQT , Kivy and many more which at least have better html support (<a href="https://wiki.python.org/moin/GuiProgramming">Full List</a>).</p>
</li>
<li>
<p>In this article I only showed how to build a <em>basic</em> editor. You can also add many more cool features of your own such as exporting as HTML or PDF, adding buttons to simplify writing Markdown... etc etc.</p>
</li>
<li>
<p>The HTML Rendering modules tkhtmlview or tk_html_widgets are not fully stable and only support some basic html functionalities, so don't expect much.</p>
</li>
</ul>
<p>So... I hope you enjoyed this article and learned some new things. Don't forget to let me know if you are stuck somewhere or can't understand something.</p>
<p>Last but not Least, please Let me know if I made any mistakes above. And I'd love to hear your ideas or suggestions via comments or DM.</p>
<p>Thank You. ?</p>
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
