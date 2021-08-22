---
card: "https://cdn-media-1.freecodecamp.org/images/1*REWATbNLWv5uvpB0UKedEQ.jpeg"
tags: [Programming]
description: "This article will show in detail how to work with Excel files"
author: "Milad E. Fahmy"
title: "How to create, read, update and search through Excel files using Python"
created: "2021-08-16T15:39:04+02:00"
modified: "2021-08-16T15:39:04+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-python tag-productivity tag-technology tag-software-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to create, read, update and search through Excel files using Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*REWATbNLWv5uvpB0UKedEQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*REWATbNLWv5uvpB0UKedEQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*REWATbNLWv5uvpB0UKedEQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*REWATbNLWv5uvpB0UKedEQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*REWATbNLWv5uvpB0UKedEQ.jpeg" alt="How to create, read, update and search through Excel files using Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>This article will show in detail how to work with Excel files and how to modify specific data with Python.</p><p>First we will learn how to work with CSV files by reading, writing and updating them. Then we will take a look how to read files, filter them by sheets, search for rows/columns, and update cells of xlsx files.</p><p>Let’s start with the simplest spreadsheet format: CSV.</p><h3 id="part-1-the-csv-file">Part 1 — The CSV file</h3><p>A CSV file is a comma-separated values file, where plain text data is displayed in a tabular format. They can be used with any spreadsheet program, such as Microsoft Office Excel, Google Spreadsheets, or LibreOffice Calc.</p><p>CSV files are not like other spreadsheet files though, because they don’t allow you to save cells, columns, rows or formulas. Their limitation is that they also allow only one sheet per file. My plan for this first part of the article is to show you how to create CSV files using Python 3 and the standard library module CSV.</p><p>This tutorial will end with two GitHub repositories and a live web application that actually uses the code of the second part of this tutorial (yet updated and modified to be for a specific purpose).</p><h3 id="writing-to-csv-files">Writing to CSV files</h3><p>First, open a new Python file and import the Python CSV module.</p><pre><code>import csv</code></pre><h4 id="csv-module">CSV Module</h4><p>The CSV module includes all the necessary methods built in. These include:</p><ul><li>csv.reader</li><li>csv.writer</li><li>csv.DictReader</li><li>csv.DictWriter</li><li>and others</li></ul><p>In this guide we are going to focus on the writer, DictWriter and DictReader methods. These allow you to edit, modify, and manipulate the data stored in a CSV file.</p><p>In the first step we need to define the name of the file and save it as a variable. We should do the same with the header and data information.</p><pre><code class="language-py">filename = "imdb_top_4.csv"
header = ("Rank", "Rating", "Title")
data = [
(1, 9.2, "The Shawshank Redemption(1994)"),
(2, 9.2, "The Godfather(1972)"),
(3, 9, "The Godfather: Part II(1974)"),
(4, 8.9, "Pulp Fiction(1994)")
]</code></pre><p>Now we need to create a function named <em>writer </em>that will take in three parameters: <em>header</em>, <em>data </em>and <em>filename</em>.</p><pre><code class="language-py">def writer(header, data, filename):
pass</code></pre><p>The next step is to modify the <em>writer </em>function so it creates a file that holds data from the <em>header </em>and <em>data </em>variables. This is done by writing the first row from the <em>header </em>variable and then writing four rows from the <em>data</em> variable (there are four rows because there are four tuples inside the list).</p><pre><code class="language-py">def writer(header, data, filename):
with open (filename, "w", newline = "") as csvfile:
movies = csv.writer(csvfile)
movies.writerow(header)
for x in data:
with open(filename, newline= "") as file:
readData = [row for row in csv.DictReader(file)]
# print(readData)
readData[0]['Rating'] = '9.4'
# print(readData)
readHeader = readData[0].keys()
writer(readHeader, readData, filename, "update")</code></pre><p>This function first opens the file defined in the <em>filename </em>variable and then saves all the data it reads from the file inside of a variable named <em>readData</em>. The second step is to hard code the new value and place it instead of the old one in the <em>readData[0][‘Rating’] </em>position.</p><p>The last step in the function is to call the <em>writer</em> function by adding a new parameter <em>update </em>that will tell the function that you are doing an update.</p><blockquote>csv.DictReader is explained more in the official Python documentation <a href="https://docs.python.org/3/library/csv.html#dialects-and-formatting-parameters" rel="noopener">here</a>.</blockquote><p>For <em>writer </em>to work with a new parameter, you need to add a new parameter everywhere <em>writer </em>is defined. Go back to the place where you first called the <em>writer</em> function and add “write” as a new parameter:</p><pre><code class="language-py">writer(header, data, filename, "write")</code></pre><p>Just below the writer function call the<em> updater</em> and pass the <em>filename</em> parameter into it:</p><pre><code class="language-py">writer(header, data, filename, "write")
updater(filename)</code></pre><p>Now you need to modify the <em>writer</em> function to take a new parameter named <em>option</em>:</p><pre><code class="language-py">def writer(header, data, filename, option):</code></pre><p>From now on we expect to receive two different options for the <em>writer </em>function (<em>write and update</em>). Because of that we should add two if statements to support this new functionality. First part of <em>the function under “if option == “write:”</em> is already known to you. You just need to add the “<em>elif option == “update”:</em> section of the code and the <em>else</em> part just as they are written bellow:</p><pre><code class="language-py">def writer(header, data, filename, option):
with open (filename, "w", newline = "") as csvfile:
if option == "write":
movies = csv.writer(csvfile)
movies.writerow(header)
for x in data:
movies.writerow(x)
elif option == "update":
writer = csv.DictWriter(csvfile, fieldnames = header)
writer.writeheader()
writer.writerows(data)
else:
theFile = openpyxl.load_workbook('Customers1.xlsx')
print(theFile.sheetnames)
currentSheet = theFile['customers 1']
print(currentSheet['B4'].value)</code></pre><p>As you can see, this code prints all sheets by their names. It then selects the sheet that is named “customers 1” and saves it to a <em>currentSheet </em>variable. In the last line, the code prints the value that is located in the B4 position of the “customers 1” sheet.</p><p>This code works as it should but it is very hard coded. To make this more dynamic we will write code that will:</p><ul><li><em>Read the file</em></li><li><em>Get all sheet names</em></li><li><em>Loop through all sheets</em></li><li><em>In the last step, the code will print values that are located in B4 fields of each found sheet inside the workbook.</em></li></ul><pre><code class="language-py">import openpyxl
theFile = openpyxl.load_workbook('Customers1.xlsx')
allSheetNames = theFile.sheetnames
print("All sheet names {} " .format(theFile.sheetnames))
for x in allSheetNames:
print("Current sheet name is {}" .format(x))
currentSheet = theFile[x]
print(currentSheet['B4'].value)</code></pre><p>This is better than before, but it is still a hard coded solution and it still assumes the value you will be looking for is in the B4 cell, which is just silly :)</p><p>I expect your project will need to search inside all sheets in the Excel file for a specific value. To do this we will add one more for loop in the “ABCDEF” range and then simply print cell names and their values.</p><pre><code class="language-py">import openpyxl
theFile = openpyxl.load_workbook('Customers1.xlsx')
allSheetNames = theFile.sheetnames
print("All sheet names {} " .format(theFile.sheetnames))
for sheet in allSheetNames:
print("Current sheet name is {}" .format(sheet))
currentSheet = theFile[sheet]
# print(currentSheet['B4'].value)
#print max numbers of wors and colums for each sheet
#print(currentSheet.max_row)
#print(currentSheet.max_column)
for row in range(1, currentSheet.max_row + 1):
#print(row)
for column in "ABCDEF":  # Here you can add or reduce the columns
cell_name = "{}{}".format(column, row)
#print(cell_name)
print("cell position {} has value {}".format(cell_name, currentSheet[cell_name].value))</code></pre><p>We did this by introducing the “<em>for row in range..</em>” loop. The range of the for loop is defined from the cell in row 1 to the sheet’s maximum number or rows. The second for loop searches within predefined column names “<em>ABCDEF</em>”. In the second loop we will display the full position of the cell (column name and row number) and a value.</p><p>However, in this article my task is to find a specific column that is named “telephone” and then go through all the rows of that column. To do that we need to modify the code like below.</p><pre><code class="language-py">import openpyxl
theFile = openpyxl.load_workbook('Customers1.xlsx')
allSheetNames = theFile.sheetnames
print("All sheet names {} " .format(theFile.sheetnames))
def find_specific_cell():
for row in range(1, currentSheet.max_row + 1):
for column in "ABCDEFGHIJKL":  # Here you can add or reduce the columns
cell_name = "{}{}".format(column, row)
if currentSheet[cell_name].value == "telephone":
#print("{1} cell is located on {0}" .format(cell_name, currentSheet[cell_name].value))
print("cell position {} has value {}".format(cell_name, currentSheet[cell_name].value))
return cell_name
for sheet in allSheetNames:
print("Current sheet name is {}" .format(sheet))
currentSheet = theFile[sheet]</code></pre><p>This modified code goes through all cells of every sheet, and just like before the row range is dynamic and the column range is specific. The code loops through cells and looks for a cell that holds a text “telephone”. Once the code finds the specific cell it notifies the user in which cell the text is located. The code does this for every cell inside of all sheets that are in the Excel file.</p><p>The next step is to go through all rows of that specific column and print values.</p><pre><code class="language-py">import openpyxl
theFile = openpyxl.load_workbook('Customers1.xlsx')
allSheetNames = theFile.sheetnames
print("All sheet names {} " .format(theFile.sheetnames))
def find_specific_cell():
for row in range(1, currentSheet.max_row + 1):
for column in "ABCDEFGHIJKL":  # Here you can add or reduce the columns
cell_name = "{}{}".format(column, row)
if currentSheet[cell_name].value == "telephone":
#print("{1} cell is located on {0}" .format(cell_name, currentSheet[cell_name].value))
print("cell position {} has value {}".format(cell_name, currentSheet[cell_name].value))
return cell_name
def get_column_letter(specificCellLetter):
letter = specificCellLetter[0:-1]
print(letter)
return letter
def get_all_values_by_cell_letter(letter):
for row in range(1, currentSheet.max_row + 1):
for column in letter:
cell_name = "{}{}".format(column, row)
#print(cell_name)
print("cell position {} has value {}".format(cell_name, currentSheet[cell_name].value))
for sheet in allSheetNames:
print("Current sheet name is {}" .format(sheet))
currentSheet = theFile[sheet]
specificCellLetter = (find_specific_cell())
letter = get_column_letter(specificCellLetter)
get_all_values_by_cell_letter(letter)
</code></pre><p>This is done by adding a function named <em>get_column_letter </em>that finds a letter of a column. After the letter of the column is found we loop through all rows of that specific column. This is done with the <em>get_all_values_by_cell_letter</em> function which will print all values of those cells.</p><h3 id="wrapping-up">Wrapping up</h3><p><strong>Bra gjort!</strong> There are many thing you can do after this. My plan was to build an online app that will standardize all Swedish telephone numbers taken from a text box and offer users the possibility to simply copy the results from the same text box. The second step of my plan was to expand the functionality of the web app to support the upload of Excel files, processing of telephone numbers inside those files (standardizing them to a Swedish format) and offering the processed files back to users.</p><p>I have done both of those tasks and you can see them live in the Tools page of my <em>Incodaq.com</em> site:</p><blockquote><a href="https://tools.incodaq.com/" rel="noopener">https://tools.incodaq.com/</a></blockquote><p>Also the code from the second part of this article is available on GitHub:</p><blockquote><a href="https://github.com/GoranAviani/Manipulate-Excel-spreadsheets" rel="noopener">https://github.com/GoranAviani/Manipulate-Excel-spreadsheets</a></blockquote><p>Thank you for reading! Check out more articles like this on my Medium profile: <a href="https://medium.com/@goranaviani" rel="noopener">https://medium.com/@goranaviani</a> and other fun stuff I build on my GitHub page:<a href="https://github.com/GoranAviani" rel="noopener"> https://github.com/GoranAviani</a></p>
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
