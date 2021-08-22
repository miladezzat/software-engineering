---
card: "/images/default.jpg"
tags: [Pandas]
description: "Pandas (which is a portmanteau of  panel data ) is one of the"
author: "Milad E. Fahmy"
title: "The Ultimate Guide to the Pandas Library for Data Science in Python"
created: "2021-08-16T15:36:07+02:00"
modified: "2021-08-16T15:36:07+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-pandas tag-python tag-data-science ">
<header class="post-full-header">
<h1 class="post-full-title">The Ultimate Guide to the Pandas Library for Data Science in Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/07/pandas-logo.png 300w,
/news/content/images/size/w600/2020/07/pandas-logo.png 600w,
/news/content/images/size/w1000/2020/07/pandas-logo.png 1000w,
/news/content/images/size/w2000/2020/07/pandas-logo.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/07/pandas-logo.png" alt="The Ultimate Guide to the Pandas Library for Data Science in Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Pandas (which is a portmanteau of "panel data") is one of the most important packages to grasp when you’re starting to <a href="https://courses.nickmccullum.com/courses/enroll/python-for-finance/">learn Python</a>.</p><p>The package is known for a very useful data structure called the pandas DataFrame. Pandas also allows Python developers to easily deal with tabular data (like spreadsheets) within a Python script.</p><p>This tutorial will teach you the fundamentals of pandas that you can use to build data-driven Python applications today.</p><h2 id="table-of-contents">Table of Contents</h2><p>You can skip to a specific section of this pandas tutorial using the table of contents below:</p><ul><li><a href="#introduction-to-pandas">Introduction to Pandas</a></li><li><a href="#pandas-series">Pandas Series</a></li><li><a href="#pandas-dataframes">Pandas DataFrames</a></li><li><a href="#how-to-deal-with-missing-data-in-pandas-dataframes">How to Deal With Missing Data in Pandas Dat</a>aFrames</li><li><a href="#the-pandas--groupby--method">The Pandas <code>groupby</code> Method</a></li><li><a href="#what-is-the-pandas--groupby--feature-">What is the Pandas <code>groupby</code> Feature?</a></li><li><a href="#the-pandas--concat--method">The Pandas <code>concat</code> Method</a></li><li><a href="#the-pandas--merge--method">The Pandas <code>merge</code> Method</a></li><li><a href="#the-pandas--join--method">The Pandas <code>join</code> Method</a></li><li><a href="#other-common-operations-in-pandas">Other Common Operations in Pandas</a></li><li><a href="#local-data-input-and-output--i-o--in-pandas">Local Data Input and Output (I/O) in Pandas</a></li><li><a href="#remote-data-input-and-output--i-o--in-pandas">Remote Data Input and Output (I/O) in Pandas</a></li><li><a href="#final-thoughts-special-offer">Final Thoughts &amp; Special Offer</a></li></ul><h2 id="introduction-to-pandas"><strong>Introduction to Pandas</strong></h2><p>Pandas is a widely-used Python library built on top of NumPy. Much of the rest of this course will be dedicated to learning about pandas and how it is used in the world of finance.</p><h3 id="what-is-pandas"><strong>What is Pandas?</strong></h3><p><a href="https://nickmccullum.com/advanced-python/pandas">Pandas</a> is a Python library created by <a href="https://wesmckinney.com/">Wes McKinney</a>, who built pandas to help work with datasets in Python for his work in finance at his place of employment.</p><p>According to <a href="https://pandas.pydata.org/">the library’s website</a>, pandas is <em><em>“a fast, powerful, flexible and easy to use open source data analysis and manipulation tool, built on top of the <a href="https://www.python.org/">Python</a> programming language.”</em></em></p><p>Pandas stands for ‘panel data’. Note that pandas is typically stylized as an all-lowercase word, although it is considered a best practice to capitalize its first letter at the beginning of sentences.</p><p>Pandas is an open source library, which means that anyone can view its source code and make suggestions using pull requests. If you are curious about this, visit the pandas source code repository on GitHub</p><h3 id="the-main-benefit-of-pandas"><strong>The Main Benefit of Pandas</strong></h3><p>Pandas was designed to work with two-dimensional data (similar to Excel spreadsheets). Just as the NumPy library had a built-in data structure called an <code>array</code> with special attributes and methods, the pandas library has a built-in two-dimensional data structure called a <code>DataFrame</code>.</p><h3 id="what-we-will-learn-about-pandas"><strong>What We Will Learn About Pandas</strong></h3><p>As we mentioned earlier in this course, advanced Python practitioners will spend much more time working with pandas than they spend working with NumPy.</p><p>Over the next several sections, we will cover the following information about the pandas library:</p><ul><li>Pandas Series</li><li>Pandas DataFrames</li><li>How To Deal With Missing Data in Pandas</li><li>How To Merge DataFrames in Pandas</li><li>How To Join DataFrames in Pandas</li><li>How To Concatenate DataFrames in Pandas</li><li>Common Operations in Pandas</li><li>Data Input and Output in Pandas</li><li>How To Save Pandas DataFrames as Excel Files for External Users</li></ul><h2 id="pandas-series"><strong>Pandas Series</strong></h2><p>In this section, we’ll be exploring <a href="https://nickmccullum.com/advanced-python/pandas-series/">pandas Series</a>, which are a core component of the pandas library for Python programming.</p><h3 id="what-are-pandas-series"><strong>What Are Pandas Series?</strong></h3><p>Series are a special type of data structure available in the pandas Python library. Pandas Series are similar to NumPy arrays, except that we can give them a named or datetime index instead of just a numerical index.</p><h3 id="the-imports-you-ll-require-to-work-with-pandas-series"><strong>The Imports You’ll Require To Work With Pandas Series</strong></h3><p>To work with pandas Series, you’ll need to import both NumPy and pandas, as follows:</p><pre><code>
import numpy as np
import pandas as pd
</code></pre><p>For the rest of this section, I will assume that both of those imports have been executed before running any code blocks.</p><h3 id="how-to-create-a-pandas-series"><strong>How To Create a Pandas Series</strong></h3><p>There are a number of different ways to create a pandas Series. We will explore all of them in this section.</p><p>First, let’s create a few starter variables - specifically, we’ll create two lists, a NumPy array, and a dictionary.</p><pre><code>
labels = ['a', 'b', 'c']
my_list = [10, 20, 30]
arr = np.array([10, 20, 30])
d = {'a':10, 'b':20, 'c':30}
</code></pre><p>The easiest way to create a pandas Series is by passing a vanilla Python list into the <code>pd.Series()</code> method. We do this with the <code>my_list</code> variable below:</p><pre><code>
pd.Series(my_list)
</code></pre><p>If you run this in your Jupyter Notebook, you will notice that the output is quite different than it is for a normal Python list:</p><pre><code>
0    10
1    20
2    30
dtype: int64
</code></pre><p>The output shown above is clearly designed to present as two columns. The second column is the data from <code>my_list</code>. What is the first column?</p><p>One of the key advantages of using pandas Series over NumPy arrays is that they allow for labeling. As you might have guessed, that first column is a column of labels.</p><p>We can add labels to a pandas Series using the <code>index</code> argument like this:</p><pre><code>
pd.Series(my_list, index=labels)
#Remember - we created the 'labels' list earlier in this section
</code></pre><p>The output of this code is below:</p><pre><code>
a    10
b    20
c    30
dtype: int64
</code></pre><p>Why would you want to use labels in a pandas Series? The main advantage is that it allows you to reference an element of the Series using its label instead of its numerical index. To be clear, once labels have been applied to a pandas Series, you can use <em><em>either</em></em> its numerical index or its label.</p><p>An example of this is below.</p><pre><code>
Series = pd.Series(my_list, index=labels)
Series[0]
#Returns 10
Series['a']
#Also returns 10
</code></pre><p>You might have noticed that the ability to reference an element of a Series using its label is similar to how we can reference the <code>value</code> of a <code>key</code>-<code>value</code> pair in a dictionary. Because of this similarity in how they function, you can also pass in a dictionary to create a pandas Series. We’ll use the <code>d={'a': 10, 'b': 20, 'c': 30}</code> that we created earlier as an example:</p><pre><code>
pd.Series(d)
</code></pre><p>This code’s output is:</p><pre><code>
a    10
b    20
c    30
dtype: int64
</code></pre><p>It may not yet be clear why we have explored two new data structures (NumPy arrays and pandas Series) that are so similar. In the next section of this section, we’ll explore the main advantage of pandas Series over NumPy arrays.</p><h3 id="the-main-advantage-of-pandas-series-over-numpy-arrays"><strong>The Main Advantage of Pandas Series Over NumPy Arrays</strong></h3><p>While we didn’t encounter it at the time, NumPy arrays are highly limited by one characteristic: every element of a NumPy array must be the same type of data structure. Said differently, NumPy array elements must be all string, or all integers, or all booleans - you get the point.</p><p>Pandas Series do not suffer from this limitation. In fact, pandas Series are <em><em>highly</em></em> flexible.</p><p>As an example, you can pass three of Python’s built-in functions into a pandas Series without getting an error:</p><pre><code>
pd.Series([sum, print, len])
</code></pre><p>Here’s the output of that code:</p><pre><code>
0&lt;built-in function sum&gt;
1    &lt;built-in function print&gt;
2&lt;built-in function len&gt;
dtype: object
import numpy as np
import pandas as pd
</code></pre><p>We’ll also need to create lists for the row and column names. We can do this using vanilla Python lists:</p><pre><code>
rows = ['X','Y','Z']
cols = ['A', 'B', 'C', 'D', 'E']
</code></pre><p>Next, we will need to create a NumPy array that holds the data contained within the cells of the DataFrame. I used NumPy’s <code>np.random.randn</code> method for this. I also wrapped that method in the <code>np.round</code> method (with a second argument of <code>2</code>), which rounds each data point to 2 decimal places and makes the data structure much easier to read.</p><p>Here’s the final function that generated the data.</p><pre><code>
data = np.round(np.random.randn(3,5),2)
</code></pre><p>Once this is done, you can wrap all of the constituent variables in the <code>pd.DataFrame</code> method to create your first DataFrame!</p><pre><code>
pd.DataFrame(data, rows, cols)
</code></pre><p>There is a lot to unpack here, so let’s discuss this example in a bit more detail.</p><p>First, it is not necessary to create each variable outside of the DataFrame itself. You could have created this DataFrame in one line like this:</p><pre><code>
pd.DataFrame(np.round(np.random.randn(3,5),2), ['X','Y','Z'], ['A', 'B', 'C', 'D', 'E'])
</code></pre><p>With that said, declaring each variable separately makes the code much easier to read.</p><p>Second, you might be wondering if it is necessary to put rows into the <code>DataFrame</code> method before columns. It is indeed necessary. If you tried running <code>pd.DataFrame(data, cols, rows)</code>, your Jupyter Notebook would generate the following error message:</p><pre><code>
ValueError: Shape of passed values is (3, 5), indices imply (5, 3)
df = pd.DataFrame(data, rows, cols)
df['A']
"""
Returns:
X   -0.66
Y   -0.08
Z    0.64
Name: A, dtype: float64
"""
df['E']
"""
Returns:
X   -1.46
Y    1.71
Z   -0.20
Name: E, dtype: float64
"""
</code></pre><p>What if you wanted to select multiple columns from a pandas DataFrame? You can pass in a list of columns, either directly in the square brackets - such as <code>df[['A', 'E']]</code> - or by declaring the variable outside of the square brackets like this:</p><pre><code>
columnsIWant = ['A', 'E']
df[columnsIWant]
#Returns the DataFrame, but only with columns A and E
</code></pre><p>You can also select a specific element of a specific row using chained square brackets. For example, if you wanted the element contained in row A at index X (which is the element in the top left cell of the DataFrame) you could access it with <code>df['A']['X']</code>.</p><p>A few other examples are below.</p><pre><code>
df['B']['Z']
#Returns 1.34
df['D']['Y']
#Returns -0.64
</code></pre><h3 id="how-to-create-and-remove-columns-in-a-pandas-dataframe"><strong>How To Create and Remove Columns in a Pandas DataFrame</strong></h3><p>You can create a new column in a pandas DataFrame by specifying the column as though it already exists, and then assigning it a new pandas Series.</p><p>As an example, in the following code block we create a new column called ‘A + B’ which is the sum of columns A and B:</p><pre><code>
df['A + B'] = df['A'] + df['B']
df
#The last line prints out the new DataFrame
df.drop('A + B', axis = 1)
df
df.drop('A + B', axis=1, inplace=True)
</code></pre><p>The second is by using an assignment operator that manually overwrites the existing variable, like this:</p><pre><code>
df = df.drop('A + B', axis=1)
</code></pre><p>Both options are valid but I find myself using the second option more frequently because it is easier to remember.</p><p>The <code>drop</code> method can also be used to drop rows. For example, we can remove the row <code>Z</code> as follows:</p><pre><code>
df.drop('Z')
df.loc['X']
</code></pre><p>Here is the output of that code:</p><pre><code>
A   -0.66
B   -1.43
C   -0.88
D    1.60
E   -1.46
Name: X, dtype: float64
</code></pre><p>DataFrame rows can be accessed by their numerical index using the <code>iloc</code> attribute along with square brackets. An example is below.</p><pre><code>
df.iloc[0]
</code></pre><p>As you would expect, this code has the same output as our last example:</p><pre><code>
A   -0.66
B   -1.43
C   -0.88
D    1.60
E   -1.46
Name: X, dtype: float64
</code></pre><h3 id="how-to-determine-the-number-of-rows-and-columns-in-a-pandas-dataframe"><strong>How To Determine The Number Of Rows and Columns in a Pandas DataFrame</strong></h3><p>There are many cases where you’ll want to know the shape of a pandas DataFrame. By shape, I am referring to the number of columns and rows in the data structure.</p><p>Pandas has a built-in attribute called <code>shape</code> that allows us to easily access this:</p><pre><code>
df.shape
#Returns (3, 5)
</code></pre><h3 id="slicing-pandas-dataframes"><strong>Slicing Pandas DataFrames</strong></h3><p>We have already seen how to select rows, columns, and elements from a pandas DataFrame. In this section, we will explore how to select a subset of a DataFrame. Specifically, let’s select the elements from columns <code>A</code> and <code>B</code> and rows <code>X</code> and <code>Y</code>.</p><p>We can actually approach this in a step-by-step fashion. First, let’s select columns <code>A</code> and <code>B</code>:</p><pre><code>
df[['A', 'B']]
</code></pre><p>Then, let’s select rows <code>X</code> and <code>Y</code>:</p><pre><code>
df[['A', 'B']].loc[['X', 'Y']]
df[df &gt; 0.5]
df['C'] &lt; 1
</code></pre><p>Here’s the output:</p><pre><code>
X     True
Y    False
Z    False
Name: C, dtype: bool
df[(df['C'] &gt; 0) &amp; (df['A']&gt; 0)]
df.reset_index()
df.set_index('A')
df.columns
#Returns Index(['A', 'B', 'C', 'D', 'E'], dtype='object'
</code></pre><p>The assignment operator is the best way to modify this attribute:</p><pre><code>
df.columns = [1, 2, 3, 4, 5]
df
Np.nan
#Returns nan
</code></pre><p>In this section, we will make use of the following DataFrame:</p><pre><code>
df = pd.DataFrame(np.array([[1, 5, 1],[2, np.nan, 2],[np.nan, np.nan, 3]]))
df.columns = ['A', 'B', 'C']
df
df.dropna()
df.dropna(axis=1)
df.fillna('?')
df.fillna(df.mean())
</code></pre><p>To fill the missing values within a particular column with the average value from that column, use the following code (this is for column <code>A</code>):</p><pre><code>
df['A'].fillna(df['A'].mean())
</code></pre><h2 id="the-pandas-groupby-method"><strong>The Pandas <code>groupby</code> Method</strong></h2><p>In this section, we will be discussing how to use the <a href="https://nickmccullum.com/advanced-python/pandas-dataframes-groupby/">pandas groupby</a> feature.</p><h2 id="what-is-the-pandas-groupby-feature"><strong>What is the Pandas <code>groupby</code> Feature?</strong></h2><p>Pandas comes with a built-in <code>groupby</code> feature that allows you to group together rows based off of a column and perform an aggregate function on them. For example, you could calculate the sum of all rows that have a value of <code>1</code> in the column <code>ID</code>.</p><p>For anyone familiar with the SQL language for querying databases, the pandas <code>groupby</code> method is very similar to a <a href="https://nickmccullum.com/sql/sql-group-by/">SQL groupby statement</a>.</p><p>It is easiest to understand the pandas <code>groupby</code> method using an example. We will be using the following DataFrame:</p><pre><code>
df = pd.DataFrame([ ['Google', 'Sam', 200],
['Google', 'Charlie', 120],
['Salesforce','Ralph', 125],
['Salesforce','Emily', 250],
['Adobe','Rosalynn', 150],
['Adobe','Chelsea', 500]])
df.columns = ['Organization', 'Salesperson Name', 'Sales']
df
df.groupby('Organization')
</code></pre><p>If you see an output that looks like this, you will know that you have created the object successfully:</p><pre><code>
&lt;pandas.core.groupby.generic.DataFrameGroupBy object at 0x113f4ecd0&gt;
</code></pre><p>Once the <code>groupby</code> object has been created, you can call operations on that object to create a DataFrame with summary information on the <code>Organization</code> groups. A few examples are below:</p><pre><code>
df.groupby('Organization').mean()
#The mean (or average) of the sales column
df.groupby('Organization').sum()
#The sum of the sales column
df.groupby('Organization').std()
#The standard deviation of the sales column
</code></pre><p>Note that since all of the operations above are numerical, they will automatically ignore the <code>Salesperson Name</code> column, because it only contains strings.</p><p>Here are a few other aggregate functions that work well with pandas’ <code>groupby</code> method:</p><pre><code>
df.groupby('Organization').count()
#Counts the number of observations
df.groupby('Organization').max()
#Returns the maximum value
df.groupby('Organization').min()
#Returns the minimum value
</code></pre><h2 id="using-groupby-with-the-describe-method"><strong>Using <code>groupby</code> With The <code>describe</code> Method</strong></h2><p>One very useful tool when <a href="https://nickmccullum.com/advanced-python/pandas-common-operations/">working with pandas DataFrames</a> is the <code>describe</code> method, which returns useful information for every category that the <code>groupby</code> function is working with.</p><p>This is best learned through an example. I’ve combined the <code>groupby</code> and <code>describe</code> methods below:</p><pre><code>
df.groupby('Organization').describe()
df1 = pd.DataFrame({'A': ['A0', 'A1', 'A2', 'A3'],
'B': ['B0', 'B1', 'B2', 'B3'],
'C': ['C0', 'C1', 'C2', 'C3'],
'D': ['D0', 'D1', 'D2', 'D3']},
index=[0, 1, 2, 3])
df2 = pd.DataFrame({'A': ['A4', 'A5', 'A6', 'A7'],
'B': ['B4', 'B5', 'B6', 'B7'],
'C': ['C4', 'C5', 'C6', 'C7'],
'D': ['D4', 'D5', 'D6', 'D7']},
index=[4, 5, 6, 7])
df3 = pd.DataFrame({'A': ['A8', 'A9', 'A10', 'A11'],
'B': ['B8', 'B9', 'B10', 'B11'],
'C': ['C8', 'C9', 'C10', 'C11'],
'D': ['D8', 'D9', 'D10', 'D11']},
index=[8, 9, 10, 11])
</code></pre><h3 id="how-to-concatenate-pandas-dataframes"><strong>How To Concatenate Pandas DataFrames</strong></h3><p>Anyone who has taken my Introduction to Python course will remember that string concatenation means adding one string to the end of another string. An example of string concatenation is below.</p><pre><code>
str1 = "Hello "
str2 = "World!"
str1 + str2
#Returns 'Hello World!'
</code></pre><p>DataFrame concatenation is quite similar. It means adding one DataFrame to the end of another DataFrame.</p><p>In order for us to perform string concatenation, we should have two DataFrames with the same columns. An example is below:</p><pre><code>
pd.concat([df1, df2, df3])
pd.concat([df1,df2,df3],axis=1)
import pandas as pd
leftDataFrame = pd.DataFrame({'key': ['K0', 'K1', 'K2', 'K3'],
'A': ['A0', 'A1', 'A2', 'A3'],
'B': ['B0', 'B1', 'B2', 'B3']})
rightDataFrame = pd.DataFrame({'key': ['K0', 'K1', 'K2', 'K3'],
'C': ['C0', 'C1', 'C2', 'C3'],
'D': ['D0', 'D1', 'D2', 'D3']})
</code></pre><p>The columns <code>A</code>, <code>B</code>, <code>C</code>, and <code>D</code> have real data in them, while the column <code>key</code> has a key that is common among both DataFrames. To <code>merge</code> two DataFrames means to connect them along one column that they both have in common.</p><h3 id="how-to-merge-pandas-dataframes"><strong>How To Merge Pandas DataFrames</strong></h3><p>You can merge two pandas DataFrames along a common column using the <code>merge</code> columns. For anyone that is familiar with the SQL programming language, this is very similar to performing an <code>inner join</code> in SQL.</p><p>Do not worry if you are unfamiliar with SQL, because <code>merge</code> syntax is actually very straightforward. It looks like this:</p><pre><code>
pd.merge(leftDataFrame, rightDataFrame, how='inner', on='key')
</code></pre><p>Let’s break down the four arguments we passed into the <code>merge</code> method:</p><ol><li><code>leftDataFrame</code>: This is the DataFrame that we’d like to merge on the left.</li><li><code>rightDataFrame</code>: This is the DataFrame that we’d like to merge on the right.</li><li><code>how=inner</code>: This is the type of merge that the operation is performing. There are multiple types of merges, but we will only be covering inner merges in this course.</li><li><code>on='key'</code>: This is the column that you’d like to perform the merge on. Since <code>key</code> was the only column in common between the two DataFrames, it was the only option that we could use to perform the merge.</li></ol><h2 id="the-pandas-join-method"><strong>The Pandas <code>join</code> Method</strong></h2><p>In this section, you will learn <a href="https://nickmccullum.com/advanced-python/how-to-join-pandas-dataframes/">how to join pandas DataFrames</a>.</p><h3 id="the-dataframes-we-will-be-using-in-this-section-1"><strong>The DataFrames We Will Be Using In This Section</strong></h3><p>We will be using the following two DataFrames in this section:</p><pre><code>
leftDataFrame = pd.DataFrame({  'A': ['A0', 'A1', 'A2', 'A3'],
'B': ['B0', 'B1', 'B2', 'B3']},
index =['K0', 'K1', 'K2', 'K3'])
rightDataFrame = pd.DataFrame({ 'C': ['C0', 'C1', 'C2', 'C3'],
'D': ['D0', 'D1', 'D2', 'D3']},
index = ['K0', 'K1', 'K2', 'K3'])
</code></pre><p>If these look familiar, it’s because they are! These are the nearly the same DataFrames as we used when learning how to merge pandas DataFrames. A key difference is that instead of the <code>key</code> column being its own column, it is now the index of the DataFrame. You can think of these DataFrames as being those from the last section after executing <code>.set_index(key)</code>.</p><h3 id="how-to-join-pandas-dataframes"><strong>How To Join Pandas DataFrames</strong></h3><p>Joining pandas DataFrames is very similar to merging pandas DataFrames except that the keys on which you’d like to combine are in the index instead of contained within a column.</p><p>To join these two DataFrames, we can use the following code:</p><pre><code>
leftDataFrame.join(rightDataFrame)
</code></pre><h2 id="other-common-operations-in-pandas"><strong>Other Common Operations in Pandas</strong></h2><p>This section will explore <a href="https://nickmccullum.com/advanced-python/pandas-common-operations/">common operations in the pandas Python library</a>. The purpose of this section is to explore important pandas operations that have not fit into any of the sections we’ve discussed so far.</p><h3 id="the-dataframe-we-will-use-in-this-section"><strong>The DataFrame We Will Use In This section</strong></h3><p>I will be using the following DataFrame in this section:</p><pre><code>
df = pd.DataFrame({'col1':['A','B','C','D'],
'col2':[2,7,3,7],
'col3':['fgh','rty','asd','qwe']})
</code></pre><h3 id="how-to-find-unique-values-in-a-pandas-series"><strong>How To Find Unique Values in a Pandas Series</strong></h3><p>Pandas has an excellent method called <code>unique</code> that can be used to find unique values within a pandas Series. Note that this method only works on Series and not on DataFrames. If you try to apply this method to a DataFrame, you will encounter an error:</p><pre><code>
df.unique()
#Returns AttributeError: 'DataFrame' object has no attribute 'unique'
</code></pre><p>However, since the columns of a pandas DataFrame are each a Series, we can apply the <code>unique</code> method to a specific column, like this:</p><pre><code>
df['col2'].unique()
#Returns array([2, 7, 3])
</code></pre><p>Pandas also has a separate <code>nunique</code> method that counts the number of unique values in a Series and returns that value as an integer. For example:</p><pre><code>
df['col2'].nunique()
#Returns 3
</code></pre><p>Interestingly, the <code>nunique</code> method is <strong><strong>exactly the same</strong></strong> as <code>len(unique())</code> but it is a common enough operation that the pandas community decided to create a specific method for this use case.</p><h3 id="how-to-count-the-occurence-of-each-value-in-a-pandas-series"><strong>How To Count The Occurence of Each Value In A Pandas Series</strong></h3><p>Pandas has a function called <code>counts_value</code> that allows you to easily count the number of time each observation occurs. An example is below:</p><pre><code>
df['col2'].value_counts()
"""
Returns:
7    2
2    1
3    1
Name: col2, dtype: int64
"""
</code></pre><h3 id="how-to-use-the-pandas-apply-method"><strong>How To Use The Pandas <code>apply</code> Method</strong></h3><p>The <code>apply</code> method is one of the most powerful methods available in the pandas library. It allows you to apply a custom function to every element of a pandas Series.</p><p>As an example, imagine that we had the following function <code>exponentify</code> that takes in an integer and raises it to the power of itself:</p><pre><code>
def exponentify(x):
return x**x
</code></pre><p>The <code>apply</code> method allows you to easily apply the <code>exponentify</code> function to each element of the Series:</p><pre><code>
df['col2'].apply(exponentify)
"""
Returns:
0   4
1    823543
2  27
3    823543
Name: col2, dtype: int64
"""
</code></pre><p>The <code>apply</code> method can also be used with built-in functions like <code>len</code> (although it is definitely more powerful when used with custom functions). An example of the <code>len</code> function being used in conjunction with <code>apply</code> is below:</p><pre><code>
df['col3'].apply(len)
"""
Returns
0    3
1    3
2    3
3    3
Name: col3, dtype: int64
"""
</code></pre><h3 id="how-to-sort-a-pandas-dataframe"><strong>How To Sort A Pandas DataFrame</strong></h3><p>You can filter a pandas DataFrame by the values of a particular column using the <code>sort_values</code> method. As an example, if you wanted to sort by <code>col2</code> in our DataFrame <code>df</code>, you would run the following command:</p><pre><code>
df.sort_values('col2')
import pandas as pd
pd.read_csv('stock_prices.csv')
new_data_frame = pd.read_csv('stock_prices.csv')
</code></pre><p>There are a number of <code>read</code> methods included with the pandas programming library. If you are trying to import data from an external document, then it is likely that pandas has a built-in method for this.</p><p>A few examples of different <code>read</code> methods are below:</p><pre><code>
pd.read_json()
pd.read_html()
pd.read_excel()
</code></pre><p>We will explore some of these methods later in this section.</p><p>If we wanted to import a <code>.csv</code> file that was not directly in our working directory, we need to modify the syntax of the <code>read_csv</code> method slightly.</p><p>If the file is in a folder deeper than what you’re working in now, you need to specify the full path of the file in the <code>read_csv</code> method argument. As an example, if the <code>stock_prices.csv</code> file was contained in a folder called <code>new_folder</code>, then we could import it like this:</p><pre><code>
new_data_frame = pd.read_csv('./new_folder/stock_prices.csv')
</code></pre><p>For those unfamiliar with working with directory notation, the <code>.</code> at the start of the filepath indicates the current directory. Similarly, a <code>..</code> indicates one directory above the current directory, and a <code>...</code>indicates <em><em>two</em></em> directories above the current directory.</p><p>This syntax (using periods) is exactly how we reference (and import) files that are above our current working directory. As an example, open a Jupyter Notebook inside the <code>new_folder</code> folder, and place <code>stock_prices.csv</code> in the parent folder. With this file layout, you could import the <code>stock_prices.csv</code> file using the following command:</p><pre><code>
new_data_frame = pd.read_csv('../stock_prices.csv')
</code></pre><p>Note that this directory syntax is the same for all types of file imports, so we will not be revisiting how to import files from different directories when we explore different import methods later in this course.</p><h3 id="how-to-export-csv-files-using-pandas"><strong>How To Export <code>.csv</code> Files Using Pandas</strong></h3><p>To demonstrate how to save a new <code>.csv</code> file, let’s first create a new DataFrame. Specifically, let’s fill a DataFrame with 3 columns and 50 rows with random data using the <code>np.random.randn</code> method:</p><pre><code>
import pandas as pd
import numpy as np
df = pd.DataFrame(np.random.randn(50,3))
</code></pre><p>Now that we have a DataFrame, we can save it using the <code>to_csv</code> method. This method takes in the name of the new file as its argument.</p><pre><code>
df.to_csv('my_new_csv.csv')
new_data_frame.to_csv('my_new_csv.csv', index = False)
json_data_frame = pd.read_json('stock_prices.json')
</code></pre><p>We’ll learn how to export JSON files next.</p><h3 id="how-to-export-json-files-using-pandas"><strong>How To Export <code>.json</code> Files Using Pandas</strong></h3><p>As I mentioned earlier, there is generally a <code>to</code> method for every <code>read</code> method. This means that we can save a DataFrame to a JSON file using the <code>to_json</code> method.</p><p>As an example, let’s take the randomly-generated DataFrame <code>df</code> from earlier in this section and save it as a JSON file in our local directory:</p><pre><code>
df.to_json('my_new_json.json')
</code></pre><p>We’ll learn how to work with Excel files - which have the file extension <code>.xlsx</code> - next.</p><h3 id="how-to-import-xlsx-files-using-pandas"><strong>How To Import <code>.xlsx</code> Files Using Pandas</strong></h3><p>Pandas’ <code>read_excel</code> method makes it very easy to import data from an Excel document into a pandas DataFrame:</p><pre><code>
new_data_frame = pd.read_excel('stock_prices.xlsx')
</code></pre><p>Unlike the <code>read_csv</code> and <code>read_json</code> methods that we explored earlier in this section, the <code>read_excel</code> method can accept a second argument. The reason why <code>read_excel</code> accepts multiple arguments is that Excel spreadsheets can contain multiple sheets. The second argument specifies which sheet you are trying to import and is called <code>sheet_name</code>.</p><p>As an example, if our <code>stock_prices</code> had a second sheet called <code>Sheet2</code>, you would import that sheet to a pandas DataFrame like this:</p><pre><code>
new_data_frame.to_excel('stock_prices.xlsx', sheet_name='Sheet2')
</code></pre><p>If you do not specify any value for <code>sheet_name</code>, then <code>read_excel</code> will import the first sheet of the Excel spreadsheet by default.</p><p>While importing Excel documents, it is very important to note that pandas only imports data. It cannot import other Excel capabilities like formatting, formulas, or macros. Trying to import data from an Excel document that has these features may cause pandas to crash.</p><h3 id="how-to-export-xlsx-files-using-pandas"><strong>How To Export <code>.xlsx</code> Files Using Pandas</strong></h3><p>Exporting Excel files is very similar to importing Excel files, except we use <code>to_excel</code> instead of <code>read_excel</code>. An example is below using our randomly-generated <code>df</code> DataFrame:</p><pre><code>
df.to_excel('my_new_excel_file.xlsx')
</code></pre><p>Like <code>read_excel</code>, <code>to_excel</code> accepts a second argument called <code>sheet_name</code> that allows you to specify the name of the sheet that you’re saving. For example, we could have named the sheet of the new <code>.xlsx</code> file <code>My New Sheet!</code> by passing it into the <code>to_excel</code> method like this:</p><pre><code>
df.to_excel('my_new_excel_file.xlsx', sheet_name='My New Sheet!')
[https://raw.githubusercontent.com/nicholasmccullum/advanced-python/master/stock_prices/stock_prices.csv](https://raw.githubusercontent.com/nicholasmccullum/advanced-python/master/stock_prices/stock_prices.csv)
</code></pre><p>You can pass this URL into the <code>read_csv</code> method to import the dataset into a pandas DataFrame without saving the dataset to your computer first:</p><pre><code>
pd.read_csv('https://raw.githubusercontent.com/nicholasmccullum/advanced-python/master/stock_prices/stock_prices.csv')
</code></pre><h3 id="how-to-import-remote-json-files"><strong>How To Import Remote <code>.json</code> Files</strong></h3><p>We can import remote <code>.json</code> files in a similar fashion to <code>.csv</code> files.</p><p>First, grab the raw URL from GitHub. It will look like this:</p><pre><code>
https://raw.githubusercontent.com/nicholasmccullum/advanced-python/master/stock_prices/stock_prices.json
</code></pre><p>Next, pass this URL into the <code>read_json</code> method like this:</p><pre><code>
pd.read_json('https://raw.githubusercontent.com/nicholasmccullum/advanced-python/master/stock_prices/stock_prices.json')
https://github.com/nicholasmccullum/advanced-python/blob/master/stock_prices/stock_prices.xlsx?raw=true
</code></pre><p>Then, pass this URL into the <code>read_excel</code> method, like this:</p><pre><code>
pd.read_excel('https://github.com/nicholasmccullum/advanced-python/blob/master/stock_prices/stock_prices.xlsx?raw=true')
</code></pre><h3 id="the-downsides-to-remote-importing"><strong>The Downsides to Remote Importing</strong></h3><p>Remote importing means that you do not need to first save the file being imported onto your local computer, which is an unquestionable benefit.</p><p>However, remote importing also has two downsides:</p><ol><li>You must have an Internet connection to perform remote imports</li><li>Pinging the URL to retrieve the dataset is fairly time-consuming, which means that performing remote imports will slow the speed of your Python code</li></ol><h2 id="final-thoughts-special-offer"><strong>Final Thoughts &amp; Special Offer</strong></h2><p>Thanks for reading this article on Pandas, which is one of my favorite Python packages and a must-know library for every Python developer.</p><p><strong><strong>This tutorial is an excerpt from my course</strong></strong> <strong><strong><a href="https://courses.nickmccullum.com/courses/enroll/python-for-finance/">Python For Finance and Data Science</a>. If you're interested in learning more core Python skills, the course is 50% off for the first 50 freeCodeCamp readers that sign up - <a href="https://courses.nickmccullum.com/courses/enroll/python-for-finance/">click here to get your discounted course now</a>!</strong></strong></p>
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
