---
card: "/images/default.jpg"
tags: [Python]
description: "String manipulation is one of those activities in programming"
author: "Milad E. Fahmy"
title: "Python String Manipulation Handbook"
created: "2021-08-16T15:34:37+02:00"
modified: "2021-08-16T15:34:37+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">Python String Manipulation Handbook</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/03/Screenshot-from-2021-03-22-15-59-14.png 300w,
/news/content/images/size/w600/2021/03/Screenshot-from-2021-03-22-15-59-14.png 600w,
/news/content/images/size/w1000/2021/03/Screenshot-from-2021-03-22-15-59-14.png 1000w,
/news/content/images/size/w2000/2021/03/Screenshot-from-2021-03-22-15-59-14.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/03/Screenshot-from-2021-03-22-15-59-14.png" alt="Python String Manipulation Handbook">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<ol>
<li><a href="#pythonstringbasics">Python String Basics</a></li>
<li><a href="#howtosplitastringinpython">How to Split a String in Python</a></li>
<li><a href="#howtoremoveallwhitespacesinastringinpython">How to Remove All White Spaces in a String in Python</a></li>
<li><a href="#howtohandlemultilinestringsinpython">How to Handle Multiline Strings in Python</a></li>
<li><a href="#lstriphowtoremovespacesandcharsfromthebeginningofastringinpython">lstrip(): How to Remove Spaces and Chars from the Beginning of a String in Python</a></li>
<li><a href="#rstriphowtoremovespacesandcharsfromtheendofastringinpython">rstrip(): How to Remove Spaces and Chars from the End of a String in Python</a></li>
<li><a href="#striphowtoremovespacesandcharsfromthebeginningandendofastringinpython">strip(): How to Remove Spaces and Chars from the Beginning and End of a String in Python</a></li>
<li><a href="#howtomakeawholestringlowercaseinpython">How to Make a Whole String Lowercase in Python</a></li>
<li><a href="#howtomakeawholestringuppercaseinpython">How to Make a Whole String Uppercase in Python</a></li>
<li><a href="#howtousetitlecaseinpython">How to Use Title Case in Python</a></li>
<li><a href="#howtouseswapcaseinpython">How to Use Swap Case in Python</a></li>
<li><a href="#howtocheckifastringisemptyinpython">How to Check if a String is Empty in Python</a></li>
<li><a href="#rjusthowtorightjustifyastringinpython">rjust(): How to Right-justify a String in Python</a></li>
<li><a href="#ljusthowtoleftjustifyastringinpython">ljust(): How to Left-justify a String in Python</a></li>
<li><a href="#isalnumhowtocheckforalphanumericcharactersonlyinastringinpython">isalnum(): How to Check for Alphanumeric Characters Only in a String in Python</a></li>
<li><a href="#isprintablecheckingprintablecharactersinastringinpython">isprintable(): How to Check for Printable Characters in a String in Python</a></li>
<li><a href="#isspacehowtocheckforwhitespaceonlyinastringinpython">isspace(): How to Check for White Space Only in a String in Python</a></li>
<li><a href="#startswithhowtocheckifastringbeginswithacertainvalueinpython">startswith(): How to Check if a String Begins with a Certain Value in Python</a></li>
<li><a href="#capitalizehowtosetthefirstcharacteronlytouppercaseinastringinpython">capitalize(): How to Set the First Character Only to Upper Case in a String in Python</a></li>
<li><a href="#isupperhowtocheckforuppercaseonlyinastringinpython">isupper(): How to Check for Upper Case Only in a String in Python</a></li>
<li><a href="#joinhowtojoinitemsofaniterableintoonestringinpython">join(): How to Join Items of an Iterable into One String in Python</a></li>
<li><a href="#splitlineshowtosplitastringatlinebreaksinpython">splitlines(): How to Split a String at Line Breaks in Python</a></li>
<li><a href="#islowerhowtocheckforlowercaseonlyinastringinpython">islower(): How to Check for Lower Case Only in a String in Python</a></li>
<li><a href="#isnumerichowtocheckfornumericsonlyinastringinpython">isnumeric(): How to Check for Numerics Only in a String in Python</a></li>
<li><a href="#isdigithowtocheckfordigitsonlyinastringinpython">isdigit(): How to Check for Digits Only in a String in Python</a></li>
<li><a href="#isdecimalhowtocheckfordecimalsonlyinastringinpython">isdecimal(): How to Check for Decimals Only in a String in Python</a></li>
<li><a href="#isalphahowtocheckforlettersonlyinastringinpython">isalpha(): How to Check for Letters Only in a String in Python</a></li>
<li><a href="#istitlehowtocheckifeverywordbeginswithanuppercasecharinastringinpython">istitle(): How to Check if Every Word Begins with an Upper Case Char in a String in Python</a></li>
<li><a href="#expandtabshowtosetthenumberofspacesforatabinastringinpython">expandtabs(): How to Set the Number of Spaces for a Tab in a String in Python</a></li>
<li><a href="#centerhowtocenterastringinpython">center(): How to Center a String in Python</a></li>
<li><a href="#zfillhowtoaddzerostoastringinpython">zfill(): How to Add Zeros to a String in Python</a></li>
<li><a href="#findcheckhowtocheckifastringhasacertainsubstringinpython">find(): How to Check if a String has a Certain Substring in Python</a></li>
<li><a href="#howtoremoveaprefixorasuffixinastringinpython">How to Remove a Prefix or a Suffix in a String in Python</a></li>
<li><a href="#lstripvsremoveprefixandrstripvsremovesuffix">lstrip() vs removeprefix() and rstrip() vs removesuffix()</a></li>
<li><a href="#howslicingworksinpython">How Slicing Works in Python</a></li>
<li><a href="#howtoreverseastringinpython">How to Reverse a String in Python</a></li>
<li><a href="#conclusion">Conclusion</a></li>
</ol>
<p>The <code>text</code> type is one of the most common types out there and is often called <em>string</em> or, in Python, just <code>str</code>.</p>
<pre><code class="language-python">my_city = "New York"
print(type(my_city))
#Single quotes have exactly
#the same use as double quotes
my_city = 'New York'
print(type(my_city))
#Setting the variable type explicitly
my_city = str("New York")
print(type(my_city))
</code></pre>
<pre><code>&lt;class 'str'&gt;
&lt;class 'str'&gt;
&lt;class 'str'&gt;
</code></pre>
<h3 id="howtoconcatenatestrings">How to Concatenate Strings</h3>
<p>You can use the <code>+</code> operator to concatenate strings.</p>
<p>Concatenation is when you have two or more strings and you want to join them into one.</p>
<pre><code class="language-python">word1 = 'New '
word2 = 'York'
print(word1 + word2)
</code></pre>
<pre><code>New York
</code></pre>
<h3 id="howtoselectachar">How to Select a char</h3>
<p>To select a char, use <code>[]</code> and specify the position of the char.</p>
<p>Position 0 refers to the first position.</p>
<pre><code class="language-python">&gt;&gt;&gt; word = "Rio de Janeiro"
&gt;&gt;&gt; char=word[0]
&gt;&gt;&gt; print(char)
R
</code></pre>
<h3 id="howtogetthesizeofastring">How to Get the Size of a String</h3>
<p>The <code>len()</code> function returns the length of a string.</p>
<pre><code class="language-python">&gt;&gt;&gt; len('Rio')
3
&gt;&gt;&gt; len('Rio de Janeiro')
14
</code></pre>
<h3 id="howtoreplacepartofastring">How to Replace Part of a String</h3>
<p>The <code>replace()</code> method replaces a part of the string with another. As an example, let's replace 'Rio' for 'Mar'.</p>
<pre><code class="language-python">&gt;&gt;&gt; 'Rio de Janeiro'.replace('Rio', 'Mar')
'Mar de Janeiro'
</code></pre>
<p>Rio means River in Portuguese and Mar means Sea – just so you know that I didn't choose this replacement so randomly.</p>
<h3 id="howtocount">How to Count</h3>
<p>Specify what to count as an argument.</p>
<p>In this case, we are counting how many spaces exist in "Rio de Janeiro", which is 2.</p>
<pre><code class="language-python">&gt;&gt;&gt; word = "Rio de Janeiro"
&gt;&gt;&gt; print(word.count(' '))
2
</code></pre>
<h3 id="howtorepeatastring">How to Repeat a String</h3>
<p>You can use the <code>*</code> symbol to repeat a string.</p>
<p>Here we are multiplying the word "Tokyo" by 3.</p>
<pre><code class="language-python">&gt;&gt;&gt; words = "Tokyo" * 3
&gt;&gt;&gt; print(words)
TokyoTokyoTokyo
</code></pre>
<h2 id="howtosplitastringinpython">How to Split a String in Python</h2>
<p>Splitting a string into smaller parts is a very common task. To do so, we use the <code>split()</code> method in Python.</p>
<p>Let's see some examples on how to do that.</p>
<h3 id="example1usewhitespacesasdelimiters">Example 1: use whitespaces as delimiters</h3>
<p>In this example, we split the phrase by whitespaces creating a list named <strong>my_words</strong> with five items corresponding to each word in the phrase.</p>
<pre><code class="language-python">my_phrase = "let's go to the beach"
my_words = my_phrase.split(" ")
for word in my_words:
print(word)
#output:
#let's
#go
#to
#the
#beach
print(my_words)
#output:
#["let's", 'go', 'to', 'the', 'beach']
</code></pre>
<p>Notice that, by default, the <code>split()</code> method uses any consecutive number of whitespaces as delimiters. We can change the code above to:</p>
<pre><code class="language-python">my_phrase = "let's go to the beach"
my_words = my_phrase.split()
for word in my_words:
print(word)
#output:
#let's
#go
#to
#the
#beach
</code></pre>
<p>The output is the same since we only have one whitespace between each word.</p>
<h3 id="example2passdifferentargumentsasdelimiters">Example 2: pass different arguments as delimiters</h3>
<p>When working with data, it's very common to read some CSV files to extract information from them.</p>
<p>As such, you might need to store some specific data from a certain column.</p>
<p>CSV files usually have fields separated by a semicolon ";" or a comma ",".</p>
<p>In this example, we are going to use the <code>split()</code> method passing as argument a specific delimiter, ";" in this case.</p>
<pre><code class="language-python">my_csv = "mary;32;australia;mary@email.com"
my_data = my_csv.split(";")
for data in my_data:
print(data)
#output:
#mary
#32
#australia
#mary@email.com
print(my_data[3])
#output:
# mary@email.com
</code></pre>
<h2 id="howtoremoveallwhitespacesinastringinpython">How to Remove All White Spaces in a String in Python</h2>
<p>If you want to truly remove any space in a string, leaving only the characters, the best solution is to use a regular expression.</p>
<p>You need to import the <code>re</code> module that provides regular expression operations.</p>
<p>Notice that the <code>\s</code> represents not only space <code>' '</code>, but also form feed <code>\f</code>, line feed <code>\n</code>, carriage return <code>\r</code>, tab <code>\t</code>, and vertical tab <code>\v</code>.</p>
<p>In summary, <code>\s = [ \f\n\r\t\v]</code>.</p>
<p>The <code>+</code> symbol is called a quantifier and is read as 'one or more'. This means that it will consider, in this case, one or more white spaces since it is positioned right after the <code>\s</code>.</p>
<pre><code class="language-python">import re
phrase = ' Do   or do    not   there    is  no try   '
phrase_no_space = re.sub(r'\s+', '', phrase)
print(phrase)
# Do   or do    not   there    is  no try
print(phrase_no_space)
#Doordonotthereisnotry
</code></pre>
<p>The original variable <code>phrase</code> remains the same. You have to assign the new cleaned string to a new variable, <code>phrase_no_space</code> in this case.</p>
<h2 id="howtohandlemultilinestringsinpython">How to Handle Multiline Strings in Python</h2>
<h3 id="triplequotes">Triple Quotes</h3>
<p>To handle multiline strings in Python you use triple quotes, either single or double.</p>
<p>This first example uses double quotes.</p>
<pre><code class="language-python">long_text = """This is a multiline,
a long string with lots of text,
I'm wrapping it in triple quotes to make it work."""
print(long_text)
#output:
#This is a multiline,
#
#a long string with lots of text,
#
#I'm wrapping it in triple quotes to make it work.
</code></pre>
<p>Now the same as before, but with single quotes:</p>
<pre><code class="language-python">long_text = '''This is a multiline,
a long string with lots of text,
I'm wrapping it in triple quotes to make it work.'''
print(long_text)
#output:
#This is a multiline,
#
#a long string with lots of text,
#
#I'm wrapping it in triple quotes to make it work.
</code></pre>
<p>Notice that both outputs are the same.</p>
<h3 id="parentheses">Parentheses</h3>
<p>Let's see an example with parentheses.</p>
<pre><code class="language-python">long_text = ("This is a multiline, "
"a long string with lots of text "
"I'm wrapping it in brackets to make it work.")
print(long_text)
#This is a multiline, a long string with lots of text I'm wrapping it in triple quotes to make it work.
</code></pre>
<p>As you can see, the result is not the same. To achieve new lines I have to add <code>\n</code>, like this:</p>
<pre><code class="language-python">long_text = ("This is a multiline, \n\n"
"a long string with lots of text \n\n"
"I'm wrapping it in brackets to make it work.")
print(long_text)
#This is a multiline,
#
#a long string with lots of text
#
#I'm wrapping it in triple quotes to make it work.
</code></pre>
<h3 id="backslashes">Backslashes</h3>
<p>Finally, backslashes are also a possibility.</p>
<p>Notice there is no space after the <code>\</code> character, as it would throw an error.</p>
<pre><code class="language-python">long_text = "This is a multiline, \n\n" \
"a long string with lots of text \n\n" \
"I'm using backlashes to make it work."
print(long_text)
#This is a multiline,
#
#a long string with lots of text
#
#I'm wrapping it in triple quotes to make it work.
</code></pre>
<h2 id="lstriphowtoremovespacesandcharsfromthebeginningofastringinpython">lstrip(): How to Remove Spaces and Chars from the Beginning of a String in Python</h2>
<p>Use the <code>lstrip()</code> method to remove spaces from the beginning of a string.</p>
<pre><code class="language-python">regular_text = "   This is a regular text."
no_space_begin_text = regular_text.lstrip()
print(regular_text)
#'   This is a regular text.'
print(no_space_begin_text)
#'This is a regular text.'
</code></pre>
<p>Notice that the original <code>regular_text</code> variable remains unchanged, thus you need to assign the return of the method to a new variable, <code>no_space_begin_text</code> in this case.</p>
<h3 id="howtoremovechars">How to Remove Chars</h3>
<p>The <code>lstrip()</code> method also accepts specific chars for removal as parameters.</p>
<pre><code class="language-python">regular_text = "$@G#This is a regular text."
clean_begin_text = regular_text.lstrip("#$@G")
print(regular_text)
#$@G#This is a regular text.
print(clean_begin_text)
#This is a regular text.
</code></pre>
<h2 id="rstriphowtoremovespacesandcharsfromtheendofastringinpython">rstrip(): How to Remove Spaces and Chars from the End of a String in Python</h2>
<p>Use the <code>rstrip()</code> method to remove spaces from the end of a string.</p>
<pre><code class="language-python">regular_text = "This is a regular text.   "
no_space_end_text = regular_text.rstrip()
print(regular_text)
#'This is a regular text.   '
print(no_space_end_text)
#'This is a regular text.'
</code></pre>
<p>Notice that the original <code>regular_text</code> variable remains unchanged, so you need to assign the return of the method to a new variable, <code>no_space_end_text</code> in this case.</p>
<p>The <code>rstrip()</code> method also accepts specific chars for removal as parameters.</p>
<pre><code class="language-python">regular_text = "This is a regular text.$@G#"
clean_end_text = regular_text.rstrip("#$@G")
print(regular_text)
#This is a regular text.$@G#
print(clean_end_text)
#This is a regular text.
</code></pre>
<h2 id="striphowtoremovespacesandcharsfromthebeginningandendofastringinpython">strip(): How to Remove Spaces and Chars from the Beginning and End of a String in Python</h2>
<p>Use the <code>strip()</code> method to remove spaces from the beginning and the end of a string.</p>
<pre><code class="language-python">regular_text = "  This is a regular text.   "
no_space_text = regular_text.strip()
print(regular_text)
#'  This is a regular text.   '
print(no_space_text)
#'This is a regular text.'
</code></pre>
<p>Notice that the original <code>regular_text</code> variable remains unchanged, so you need to assign the return of the method to a new variable, <code>no_space_text</code> in this case.</p>
<p>The <code>strip()</code> method also accepts specific chars for removal as parameters.</p>
<pre><code class="language-python">regular_text = "AbC#This is a regular text.$@G#"
clean_text = regular_text.strip("AbC#$@G")
print(regular_text)
#AbC#This is a regular text.$@G#
print(clean_text)
#This is a regular text.
</code></pre>
<h2 id="howtomakeawholestringlowercaseinpython">How to Make a Whole String Lowercase in Python</h2>
<p>Use the <code>lower()</code> method to transform a whole string into lowercase.</p>
<pre><code class="language-python">regular_text = "This is a Regular TEXT."
lower_case_text = regular_text.lower()
print(regular_text)
#This is a Regular TEXT.
print(lower_case_text)
#this is a regular text.
</code></pre>
<p>Notice that the original <code>regular_text</code> variable remains unchanged, thus you need to assign the return of the method to a new variable, <code>lower_case_text</code> in this case.</p>
<h2 id="howtomakeawholestringuppercaseinpython">How to Make a Whole String Uppercase in Python</h2>
<p>Use the <code>upper()</code> method to transform a whole string into uppercase.</p>
<pre><code class="language-python">regular_text = "This is a regular text."
upper_case_text = regular_text.upper()
print(regular_text)
#This is a regular text.
print(upper_case_text)
#THIS IS A REGULAR TEXT.
</code></pre>
<p>Notice that the original <code>regular_text</code> variable remains unchanged, thus you need to assign the return of the method to a new variable, <code>upper_case_text</code> in this case.</p>
<h2 id="howtousetitlecaseinpython">How to Use Title Case in Python</h2>
<p>Use the <code>title()</code> method to transform the first letter in each word into upper case and the rest of characters into lower case.</p>
<pre><code class="language-python">regular_text = "This is a regular text."
title_case_text = regular_text.title()
print(regular_text)
#This is a regular text.
print(title_case_text)
#This Is A Regular Text.
</code></pre>
<p>Notice that the original <code>regular_text</code> variable remains unchanged, so you need to assign the return of the method to a new variable, <code>title_case_text</code> in this case.</p>
<h2 id="howtouseswapcaseinpython">How to Use Swap Case in Python</h2>
<p>Use the <code>swapcase()</code> method to transform the upper case characters into lower case and vice versa.</p>
<pre><code class="language-python">regular_text = "This IS a reguLar text."
swapped_case_text = regular_text.swapcase()
print(regular_text)
#This IS a reguLar text.
print(swapped_case_text)
#tHIS is A REGUlAR TEXT.
</code></pre>
<p>Notice that the original <code>regular_text</code> variable remains unchanged, so you need to assign the return of the method to a new variable, <code>swapped_case_text</code> in this case.</p>
<h2 id="howtocheckifastringisemptyinpython">How to Check if a String is Empty in Python</h2>
<p>The pythonic way to check if a <code>string</code> is empty is using the <code>not</code> operator.</p>
<pre><code class="language-python">my_string = ''
if not my_string:
print("My string is empty!!!")
</code></pre>
<p>To check the opposite and see if the string is <strong>not</strong> empty, do this:</p>
<pre><code class="language-python">my_string = 'amazon, microsoft'
if my_string:
print("My string is NOT empty!!!")
</code></pre>
<h2 id="rjusthowtorightjustifyastringinpython">rjust(): How to Right-justify a String in Python</h2>
<p>Use the <code>rjust()</code> to right-justify a string.</p>
<pre><code class="language-python">word = 'beach'
number_spaces = 32
word_justified = word.rjust(number_spaces)
print(word)
#'beach'
print(word_justified)
#'                     beach'
</code></pre>
<p>Notice the spaces in the second string. The word 'beach' has 5 characters, which gives us 27 spaces to fill with empty space.</p>
<p>The original <code>word</code> variable remains unchanged, so we need to assign the return of the method to a new variable, <code>word_justified</code> in this case.</p>
<p>The <code>rjust()</code> also accepts a specific char as a parameter to fill the remaining space.</p>
<pre><code class="language-python">word = 'beach'
number_chars = 32
char = '$'
word_justified = word.rjust(number_chars, char)
print(word)
#beach
print(word_justified)
#$$$$$$$$$$$$$$$$$$$$$$$$$$$beach
</code></pre>
<p>Similar to the first situation, I have 27 <code>$</code> signs to make it 32 total when I count the 5 chars contained in the word 'beach'.</p>
<h2 id="ljusthowtoleftjustifyastringinpython">ljust(): How to Left-justify a String in Python</h2>
<p>Use the <code>ljust()</code> to left-justify a string.</p>
<pre><code class="language-python">word = 'beach'
number_spaces = 32
word_justified = word.ljust(number_spaces)
print(word)
#'beach'
print(word_justified)
#'beach                     '
</code></pre>
<p>Notice the spaces in the second string. The word 'beach' has 5 characters, which gives us 27 spaces to fill with empty space.</p>
<p>The original <code>word</code> variable remains unchanged, thus we need to assign the return of the method to a new variable, <code>word_justified</code> in this case.</p>
<p>The <code>ljust()</code> also accepts a specific char as a parameter to fill the remaining space.</p>
<pre><code class="language-python">word = 'beach'
number_chars = 32
char = '$'
word_justified = word.ljust(number_chars, char)
print(word)
#beach
print(word_justified)
#beach$$$$$$$$$$$$$$$$$$$$$$$$$$$
</code></pre>
<p>Similar to the first situation, I have 27 <code>$</code> signs to make it 32 total when I count the 5 chars contained in the word 'beach'.</p>
<h2 id="isalnumhowtocheckforalphanumericcharactersonlyinastringinpython">isalnum(): How to Check for Alphanumeric Characters Only in a String in Python</h2>
<p>Use the <code>isalnum()</code> method to check if a string only contains alphanumeric characters.</p>
<pre><code class="language-python">word = 'beach'
print(word.isalnum())
#output: True
word = '32'
print(word.isalnum())
#output: True
word = 'number32' #notice there is no space
print(word.isalnum())
#output: True
word = 'Favorite number is 32' #notice the space between words
print(word.isalnum())
#output: False
word = '@number32$' #notice the special chars '@' and '$'
print(word.isalnum())
#output: False
</code></pre>
<h2 id="isprintablehowtocheckforprintablecharactersinastringinpython">isprintable(): How to Check for Printable Characters in a String in Python</h2>
<p>Use the <code>isprintable()</code> method to check if the characters in a string are printable.</p>
<pre><code class="language-python">text = '' # notice this is an empty string, there is no white space here
print(text.isprintable())
#output: True
text = 'This is a regular text'
print(text.isprintable())
#output: True
text = ' ' #one space
print(text.isprintable())
#output: True
text = '                  '  #many spaces
print(text.isprintable())
#output: True
text = '\f\n\r\t\v'
print(text.isprintable())
#output: False
</code></pre>
<p>Notice that in the first 4 examples, each character takes some space, even if it is an empty space as you can see in the first example.</p>
<p>The last example returns <code>False</code>, showing 5 kinds of characters that are non-printable: form feed <code>\f</code>, line feed <code>\n</code>, carriage return <code>\r</code>, tab <code>\t</code>, and vertical tab <code>\v</code>.</p>
<p>Some of these 'invisible' characters may mess up your printing, giving you an unxpected output, even when everything 'looks' alright.</p>
<h2 id="isspacehowtocheckforwhitespaceonlyinastringinpython">isspace(): How to Check for White Space Only in a String in Python</h2>
<p>Use the <code>isspace()</code> method to check if the characters in a string are all white spaces.</p>
<pre><code class="language-python">text = ' '
print(text.isspace())
#output: True
text = ' \f\n\r\t\v'
print(text.isspace())
#output: True
text = '                  '
print(text.isspace())
#output: True
text = '' # notice this is an empty string, there is no white space here
print(text.isspace())
#output: False
text = 'This is a regular text'
print(text.isspace())
#output: False
</code></pre>
<p>Notice in the second example that white space is not only <code>' '</code>, but also form feed <code>\f</code>, line feed <code>\n</code>, carriage return <code>\r</code>, tab <code>\t</code>, and vertical tab <code>\v</code>.</p>
<h2 id="startswithhowtocheckifastringbeginswithacertainvalueinpython">startswith(): How to Check if a String Begins with a Certain Value in Python</h2>
<p>Use the <code>startswith()</code> method to check if a string begins with a certain value.</p>
<pre><code class="language-python">phrase = "This is a regular text"
print(phrase.startswith('This is'))
#output: True
print(phrase.startswith('text'))
#output: False
</code></pre>
<p>You can also set if you want to begin the match in a specific position and end it in another specific position of the string.</p>
<pre><code class="language-python">phrase = "This is a regular text"
print(phrase.startswith('regular', 10)) #the word regular starts at position 10 of the phrase
#output: True
print(phrase.startswith('regular', 10, 22)) #look for in 'regular text'
#output: True
print(phrase.startswith('regular', 10, 15)) ##look for in 'regul'
#output: False
</code></pre>
<p>Finally, you might want to check for multiple strings at once. Instead of using some kind of loop, you can use a tuple as an argument with all the strings you want to match against.</p>
<pre><code class="language-python">phrase = "This is a regular text"
print(phrase.startswith(('regular', 'This')))
#output: True
print(phrase.startswith(('regular', 'text')))
#output: False
print(phrase.startswith(('regular', 'text'), 10, 22)) #look for in 'regular text'
#output: True
</code></pre>
<h2 id="capitalizehowtosetthefirstcharacteronlytouppercaseinastringinpython">capitalize(): How to Set the First Character Only to Upper Case in a String in Python</h2>
<p>Use the <code>capitalize()</code> method to convert to upper case only the first character in a string.</p>
<p>The rest of the string is converted to lower case.</p>
<pre><code class="language-python">text = 'this is a regular text'
print(text.capitalize())
#This is a regular text
text = 'THIS IS A REGULAR TEXT'
print(text.capitalize())
#This is a regular text
text = 'THIS $ 1S @ A R3GULAR TEXT!'
print(text.capitalize())
#This $ 1s @ a r3gular text!
text = '3THIS $ 1S @ A R3GULAR TEXT!'
print(text.capitalize())
#3this $ 1s @ a r3gular text!
</code></pre>
<p>Notice that any character counts, such as a number or a special character. So in the last example, <code>3</code> is the first character and suffers no alterations while the rest of the string is converted to lower case.</p>
<h2 id="isupperhowtocheckforuppercaseonlyinastringinpython">isupper(): How to Check for Upper Case Only in a String in Python</h2>
<p>Use the <code>isupper()</code> method to check if the characters in a string are all in upper case.</p>
<pre><code class="language-python">text = 'This is a regular text'
print(text.isupper())
#output: False
text = 'THIS IS A REGULAR TEXT'
print(text.isupper())
#output: True
text = 'THIS $ 1S @ A R3GULAR TEXT!'
print(text.isupper())
#output: True
</code></pre>
<p>If you notice the last example, the numbers and special characters like <code>@</code> and <code>$</code> in the string make no difference and <code>isupper()</code> still returns <code>True</code> because the method only verifies the alphabetical characters.</p>
<h2 id="joinhowtojoinitemsofaniterableintoonestringinpython">join(): How to Join Items of an Iterable into One String in Python</h2>
<p>Use the <code>join()</code> method to join all the items if an iterable into a string.</p>
<p>The basic syntax is: <code>string.join(iterable)</code></p>
<p>As per the syntax above, a string is required as a separator.</p>
<p>The method returns a new string, which means that the original iterator remains unchanged.</p>
<p>Since the <code>join()</code> method only accepts strings, if any element in the iterable is of a different type, an error will be thrown.</p>
<p>Let's see some examples with: string, list, tuple, set, and dictionary</p>
<h3 id="joinstrings">join(): Strings</h3>
<p>The <code>join()</code> method puts the <code>$</code> sign as a separator for every character in the string.</p>
<pre><code class="language-python">my_string = 'beach'
print('$'.join(my_string))
#output: b$e$a$c$h
</code></pre>
<h3 id="joinlists">join(): Lists</h3>
<p>I have a simple list of three items representing car brands.</p>
<p>The <code>join()</code> method is gonna use the <code>$</code> sign as a separator.</p>
<p>It concatenates all the items on the list and puts the <code>$</code> sign between them.</p>
<pre><code class="language-python">my_list = ['bmw', 'ferrari', 'mclaren']
print('$'.join(my_list))
#output: bmw$ferrari$mclaren
</code></pre>
<p>This example reminds you that <code>join()</code> does not work with non-string items.</p>
<p>When trying to concatenate the <code>int</code> items, an error is raised.</p>
<pre><code class="language-python">my_list = [1, 2, 3]
print('$'.join(my_list))
#output:
#Traceback (most recent call last):
#  File "&lt;stdin&gt;", line 1, in &lt;module&gt;
#TypeError: sequence item 0: expected str instance, int found
</code></pre>
<h3 id="jointuples">join(): Tuples</h3>
<p>The tuple follows the same rationale as the list example explained before.</p>
<p>Again, I'm using the <code>$</code> sign as a separator.</p>
<pre><code class="language-python">my_tuple = ('bmw', 'ferrari', 'mclaren')
print('$'.join(my_tuple))
#output: bmw$ferrari$mclaren
</code></pre>
<h3 id="joinsets">join(): Sets</h3>
<p>Since the set is also the same as the tuple and the list, I've used a different separator in this example.</p>
<pre><code class="language-python">my_set = {'bmw', 'ferrari', 'mclaren'}
print('|'.join(my_set))
#output: ferrari|bmw|mclaren
</code></pre>
<h3 id="joindictionaries">join(): dictionaries</h3>
<p>The dictionary has a catch when you use the <code>join()</code> method: it joins the keys, not the values.</p>
<p>This example shows the concatenation of the keys.</p>
<pre><code class="language-python">my_dict = {'bmw': 'BMW I8', 'ferrari': 'Ferrari F8', 'mclaren': 'McLaren 720S'}
print(','.join(my_dict))
#output: bmw,ferrari,mclaren
</code></pre>
<h2 id="splitlineshowtosplitastringatlinebreaksinpython">splitlines(): How to Split a String at Line Breaks in Python</h2>
<p>Use the <code>splitlines()</code> method to split a string at line breaks.</p>
<p>The return of the method is a list of the lines.</p>
<pre><code class="language-python">my_string = 'world \n cup'
print(my_string.splitlines())
#output: ['world ', ' cup']
</code></pre>
<p>If you want to keep the line break, the <code>splitlines()</code> accepts a parameter that can be set to <em>True</em>, the default is <em>False</em>.</p>
<pre><code class="language-python">my_string = 'world \n cup'
print(my_string.splitlines(True))
#output: ['world \n', ' cup']
</code></pre>
<h2 id="islowerhowtocheckforlowercaseonlyinastringinpython">islower(): How to Check for Lower Case Only in a String in Python</h2>
<p>Use the <code>islower()</code> method to check if the characters in a string are all in lower case.</p>
<pre><code class="language-python">text = 'This is a regular text'
print(text.islower())
#output: False
text = 'this is a regular text'
print(text.islower())
#output: True
text = 'this $ 1s @ a r3gular text!'
print(text.islower())
#output: True
</code></pre>
<p>If you notice in the last example, the numbers and special characters like <code>@</code> and <code>$</code> in the string make no difference and <code>islower()</code> still returns <code>True</code> because the method only verifies the alphabetical characters.</p>
<h2 id="isnumerichowtocheckfornumericsonlyinastringinpython">isnumeric(): How to Check for Numerics Only in a String in Python</h2>
<p>Use the <code>isnumeric()</code> method to check if a string only contains numeric chars.</p>
<p>Numerics include numbers from 0 to 9 and combinations of them, Roman numerals, superscripts, subscripts, fractions, and other variations.</p>
<pre><code class="language-python">word = '32'
print(word.isnumeric())
#output: True
print("\u2083".isnumeric()) #unicode for subscript 3
#output: True
print("\u2169".isnumeric()) #unicode for roman numeral X
#output: True
word = 'beach'
print(word.isnumeric())
#output: False
word = 'number32'
print(word.isnumeric())
#output: False
word = '1 2 3' #notice the space between chars
print(word.isnumeric())
#output: False
word = '@32$' #notice the special chars '@' and '$'
print(word.isnumeric())
#output: False
</code></pre>
<p><code>isdecimal()</code> is stricter than <code>isdigit()</code>, which in its turn is stricter than <code>isnumeric()</code>.</p>
<h2 id="isdigithowtocheckfordigitsonlyinastringinpython">isdigit(): How to Check for Digits Only in a String in Python</h2>
<p>Use the <code>isdigit()</code> method to check if a string only contains digits.</p>
<p>Digits include numbers from 0 to 9 and also superscripts and subscripts.</p>
<pre><code class="language-python">word = '32'
print(word.isdigit())
#output: True
print("\u2083".isdigit()) #unicode for subscript 3
#output: True
word = 'beach'
print(word.isdigit())
#output: False
word = 'number32'
print(word.isdigit())
#output: False
word = '1 2 3' #notice the space between chars
print(word.isdigit())
#output: False
word = '@32$' #notice the special chars '@' and '$'
print(word.isdigit())
#output: False
</code></pre>
<p><code>isdecimal()</code> is stricter than <code>isdigit()</code>, which in its turn is stricter than <code>isnumeric()</code>.</p>
<h2 id="isdecimalhowtocheckfordecimalsonlyinastringinpython">isdecimal(): How to Check for Decimals Only in a String in Python</h2>
<p>Use the <code>isdecimal()</code> method to check if a string only contains decimals, that is, only numbers from 0 to 9 and combinations of these numbers.</p>
<p>Subscripts, superscripts, Roman numerals, and other variations will be returned as <code>False</code>.</p>
<pre><code class="language-python">word = '32'
print(word.isdecimal())
#output: True
word = '954'
print(word.isdecimal())
#output: True
print("\u2083".isdecimal()) #unicode for subscript 3
#output: False
word = 'beach'
print(word.isdecimal())
#output: False
word = 'number32'
print(word.isdecimal())
#output: False
word = '1 2 3' #notice the space between chars
print(word.isdecimal())
#output: False
word = '@32$' #notice the special chars '@' and '$'
print(word.isdecimal())
#output: False
</code></pre>
<p><code>isdecimal()</code> is more strict than <code>isdigit()</code>, which in its turn is more strict than <code>isnumeric()</code>.</p>
<h2 id="isalphahowtochedckforlettersonlyinastringinpython">isalpha(): How to Chedck for Letters Only in a String in Python</h2>
<p>Use the <code>isalpha()</code> method to check if a string only contains letters.</p>
<pre><code class="language-python">word = 'beach'
print(word.isalpha())
#output: True
word = '32'
print(word.isalpha())
#output: False
word = 'number32'
print(word.isalpha())
#output: False
word = 'Favorite number is blue' #notice the space between words
print(word.isalpha())
#output: False
word = '@beach$' #notice the special chars '@' and '$'
print(word.isalpha())
#output: False
</code></pre>
<h2 id="istitlehowtocheckifeverywordbeginswithanuppercasecharinastringinpython">istitle(): How to Check if Every Word Begins with an Upper Case Char in a String in Python</h2>
<p>Use the <code>istitle()</code> method to check if the first character in every word in a string is upper case and the other characters are lower case.</p>
<pre><code class="language-python">text = 'This is a regular text'
print(text.istitle())
#output: False
text = 'This Is A Regular Text'
print(text.istitle())
#output: True
text = 'This $ Is @ A Regular 3 Text!'
print(text.istitle())
#output: True
</code></pre>
<p>If you notice in the last example, the numbers and special characters like <code>@</code> and <code>$</code> in the string make no difference and <code>istitle()</code> still returns <code>True</code> because the method only verifies the alphabetical characters.</p>
<h2 id="expandtabshowtosetthenumberofspacesforatabinastringinpython">expandtabs(): How to Set the Number of Spaces for a Tab in a String in Python</h2>
<p>Use the <code>expandtabs()</code> method to set the number of spaces for a tab.</p>
<p>You can set any number of spaces, but when no argument is given, the default is 8.</p>
<h3 id="basicusage">Basic Usage</h3>
<pre><code class="language-python">my_string = 'B\tR'
print(my_string.expandtabs())
#output: B R
</code></pre>
<p>Notice the 7 spaces between the letters B and R.</p>
<p>The <code>\t</code> is at position two after one character, so it will be replaced with 7 spaces.</p>
<p>Let's look at another example.</p>
<pre><code class="language-python">my_string = 'WORL\tD'
print(my_string.expandtabs())
#output: WORL    D
</code></pre>
<p>Since <code>WORL</code> has four characters, the <code>\t</code> is replaced with 4 spaces to make it a total of 8, the default tabsize.</p>
<p>The code below gives us <em>4</em> spaces for the first tab after four characters 'WORL' and <em>7</em> spaces for the second tab after one character 'D'.</p>
<pre><code class="language-python">my_string = 'WORL\tD\tCUP'
print(my_string.expandtabs())
#output: WORL    D CUP
</code></pre>
<h3 id="customtabsize">Custom Tabsize</h3>
<p>It is possible to set the tabsize as needed.</p>
<p>In this example the tabsize is <em>4</em>, which gives us 3 spaces after the char 'B'.</p>
<pre><code class="language-python">my_string = 'B\tR'
print(my_string.expandtabs(4))
#output: B   R
</code></pre>
<p>This code has tabsize set to <em>6</em>, which gives us 5 spaces after the char 'B'.</p>
<pre><code class="language-python">my_string = 'B\tR'
print(my_string.expandtabs(6))
#output: B     R
</code></pre>
<h2 id="centerhowtocenterastringinpython">center(): How to Center a String in Python</h2>
<p>Use the <code>center()</code> method to center a string.</p>
<pre><code class="language-python">word = 'beach'
number_spaces = 32
word_centered = word.center(number_spaces)
print(word)
#'beach'
print(word_centered)
##output: '        beach              '
</code></pre>
<p>Notice the spaces in the second string. The word 'beach' has 5 characters, which gives us 28 spaces to fill with empty space, 14 spaces before and 14 after to center the word.</p>
<p>The original <code>word</code> variable remains unchanged, so we need to assign the return of the method to a new variable, <code>word_centered</code> in this case.</p>
<p>The <code>center()</code> also accepts a specific character as a parameter to fill the remaining space.</p>
<pre><code class="language-python">word = 'beach'
number_chars = 33
char = '$'
word_centered = word.center(number_chars, char)
print(word)
#beach
print(word_centered)
#output: $$$$$$$$$$$$$$beach$$$$$$$$$$$$$$
</code></pre>
<p>Similar to the first situation, I have 14 <code>$</code> in each side to make it 33 total when I count the 5 chars contained in the word 'beach'.</p>
<h2 id="zfillhowtoaddzerostoastringinpython">zfill(): How to Add Zeros to a String in Python</h2>
<p>Use the <code>zfill()</code> to insert zeros <code>0</code> at the beginning of a string.</p>
<p>The number of zeros is given by the number passed as an argument minus the number of chars in the string.</p>
<p>The word 'beach' has 5 characters, which gives us 27 spaces to fill with zeros to make it 32 total as specified in the variable <code>size_string</code></p>
<pre><code class="language-python">word = 'beach'
size_string = 32
word_zeros = word.zfill(size_string)
print(word)
#beach
print(word_zeros)
#000000000000000000000000000beach
</code></pre>
<p>The original <code>word</code> variable remains unchanged, so we need to assign the return of the method to a new variable, <code>word_zeros</code> in this case.</p>
<p>Also notice that if the argument is less than the number of chars in the string, nothing changes.</p>
<p>In the example below, 'beach' has 5 chars and we want to add zeros until it reaches the <code>size_string</code> of 4, which means there is nothing to be done.</p>
<pre><code class="language-python">word = 'beach'
size_string = 4
word_zeros = word.zfill(size_string)
print(word)
#beach
print(word_zeros)
#'beach'
</code></pre>
<h2 id="findhowtocheckifastringhasacertainsubstringinpython">find(): How to Check if a String Has a Certain Substring in Python</h2>
<p>Use the <code>find()</code> method to check if a string has a certain substring.</p>
<p>The method returns the index of the first occurrence of the given value.</p>
<p>Remember the index count starts at 0.</p>
<pre><code class="language-python">phrase = "This is a regular text"
print(phrase.find('This'))
print(phrase.find('regular'))
print(phrase.find('text'))
</code></pre>
<pre><code>0
10
18
</code></pre>
<p>If the value is not found, it will return <code>-1</code>.</p>
<pre><code class="language-python">phrase = "This is a regular text"
print(phrase.find('train'))
</code></pre>
<pre><code>-1
</code></pre>
<p>You can also choose to begin the search in a specific position and end it in another specific position of the string.</p>
<pre><code class="language-python">phrase = "This is a regular text"
#look for in 'This is', the rest of the phrase is not included
print(phrase.find('This', 0, 7))
#look for in 'This is a regular'
print(phrase.find('regular', 0, 17))
#look for in 'This is a regul'
print(phrase.find('a', 0, 15))
</code></pre>
<pre><code>0
10
8
</code></pre>
<h2 id="howtoremoveaprefixorasuffixinastringinpython">How to Remove a Prefix or a Suffix in a String in Python</h2>
<p>As of Python 3.9, the String type will have two new methods.</p>
<p>You can specifically remove a prefix from a string using the <code>removeprefix()</code> method:</p>
<pre><code class="language-python">&gt;&gt;&gt; 'Rio de Janeiro'.removeprefix("Rio")
' de Janeiro'
</code></pre>
<p>Or remove a suffix using the <code>removesuffix()</code> method:</p>
<pre><code class="language-python">&gt;&gt;&gt; 'Rio de Janeiro'.removesuffix("eiro")
'Rio de Jan'
</code></pre>
<p>Simply pass as an argument the text to be considered as prefix or suffix to be removed and the method will return a new string as a result.</p>
<p>I recommend reading the <a href="https://www.python.org/dev/peps/pep-0616/">PEP 616</a> in the official documentation if you are curious about how these features are added to the language.</p>
<p>This one is a pretty simple change and very friendly for beginners to get used to reading the official documentation.</p>
<h2 id="lstripvsremoveprefixandrstripvsremovesuffix">lstrip() vs removeprefix() and rstrip() vs removesuffix()</h2>
<p>This causes confusion for many people.</p>
<p>It is easy to look at <code>lstrip()</code> and <code>removeprefix()</code> and wonder what is the real difference between the two.</p>
<p>When using <code>lstrip()</code>, the argument is a set of leading characters that will be removed as many times as they occur:</p>
<pre><code class="language-python">&gt;&gt;&gt; word = 'hubbubbubboo'
&gt;&gt;&gt; word.lstrip('hub')
'oo'
</code></pre>
<p>While <code>removeprefix()</code> will remove only the exact match:</p>
<pre><code class="language-python">&gt;&gt;&gt; word = 'hubbubbubboo'
&gt;&gt;&gt; word.removeprefix('hub')
'bubbubboo'
</code></pre>
<p>You can use the same rationale to distinguish between <code>rstrip()</code> and <code>removesuffix()</code>.</p>
<pre><code class="language-python">&gt;&gt;&gt; word = 'peekeeneenee'
&gt;&gt;&gt; word.rstrip('nee')
'peek'
</code></pre>
<pre><code class="language-python">&gt;&gt;&gt; word = 'peekeeneenee'
&gt;&gt;&gt; word.removesuffix('nee')
'peekeenee'
</code></pre>
<p>And as a bonus, just in case you have never worked with regular expressions before, be grateful that you have <code>strip()</code> to trim character sets from a string instead of a regular expression:</p>
<pre><code class="language-python">&gt;&gt;&gt; import re
&gt;&gt;&gt; word = 'amazonia'
&gt;&gt;&gt; word.strip('ami')
'zon'
&gt;&gt;&gt; re.search('^[ami]*(.*?)[ami]*$', word).group(1)
'zon'
</code></pre>
<h2 id="howslicingworksinpython">How Slicing Works in Python</h2>
<p>Slicing is one of the most useful tools in the Python language.</p>
<p>As such, it is important to have a good grasp of how it works.</p>
<h3 id="basicslicingnotation">Basic Slicing Notation</h3>
<p>Let's say we have an array called 'list'.</p>
<pre><code>list[start:stop:step]
</code></pre>
<ul>
<li>start: where you want the slicing to begin</li>
<li>stop: until where you want the slicing to go, but remember the value of <em>stop</em> is not included</li>
<li>step: if you want to skip an item, the default being 1, so you go through all items in the array</li>
</ul>
<h3 id="indexes">Indexes</h3>
<p>When slicing, The indices are points in <em>between</em> the characters, not on the characters.</p>
<p>For the word 'movie':</p>
<pre><code> +---+---+---+---+---+
| m | o | v | i | e |
+---+---+---+---+---+
0   1   2   3   4   5
-5  -4  -3  -2  -1
</code></pre>
<p>If I slice from 0 until 2, I get 'mo' in the example above and <em>not</em> 'mov'.</p>
<p>Since a string is just a list of characters, the same applies with a list:</p>
<pre><code>my_list = [1, 2 , 3, 4, 5]
</code></pre>
<p>Becomes:</p>
<pre><code> +---+---+---+---+---+
| 1 | 2 | 3 | 4 | 5 |
+---+---+---+---+---+
0   1   2   3   4   5
-5  -4  -3  -2  -1
</code></pre>
<h3 id="examplesofslicinginpython">Examples of Slicing in Python</h3>
<p>We have a variable containing the string 'movie' like so:</p>
<pre><code class="language-python">word = 'movie'
</code></pre>
<p>All the examples below will be applied to this word.</p>
<h4 id="example1">Example 1</h4>
<p>To get the first two characters:</p>
<pre><code class="language-python">sliced = word[:2]
print(sliced)
mo
</code></pre>
<p>Notice that we could have used 0 to denote the beginning, but that is not necessary.</p>
<h4 id="example2">Example 2</h4>
<p>The last item:</p>
<pre><code class="language-python">sliced = word[-1]
print(sliced)
e
</code></pre>
<h4 id="example3">Example 3</h4>
<p>Skipping letters with a step of 2:</p>
<pre><code class="language-python">sliced = word[::2]
print(sliced)
mve
</code></pre>
<h2 id="howtoreverseastringinpython">How to Reverse a String in Python</h2>
<p>To reverse a string, use the slice syntax:</p>
<pre><code class="language-python">my_string = "ferrari"
my_string_reversed = my_string[::-1]
print(my_string)
print(my_string_reversed)
</code></pre>
<pre><code>ferrari
irarref
</code></pre>
<p>The slice syntax allows you to set a step, which is <code>-1</code> in the example.</p>
<p>The default step is <code>1</code>, that is, go forward 1 character of the string at a time.</p>
<p>If you set the step to <code>-1</code> you have the opposite, go back 1 character at a time.</p>
<p>So you start at the position of the last character and move backwards to the first character at position 0.</p>
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
