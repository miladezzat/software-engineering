---
card: "/images/default.jpg"
tags: [Python]
description: "Welcome! If you want to learn how to work with JSON files in "
author: "Milad E. Fahmy"
title: "Python Read JSON File – How to Load JSON from a File and Parse Dumps"
created: "2021-08-16T15:35:17+02:00"
modified: "2021-08-16T15:35:17+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-json tag-dictionary tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">Python Read JSON File – How to Load JSON from a File and Parse Dumps</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/08/Read-JSON-image.png 300w,
/news/content/images/size/w600/2020/08/Read-JSON-image.png 600w,
/news/content/images/size/w1000/2020/08/Read-JSON-image.png 1000w,
/news/content/images/size/w2000/2020/08/Read-JSON-image.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/08/Read-JSON-image.png" alt="Python Read JSON File – How to Load JSON from a File and Parse Dumps">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
"size": "medium",
"price": 15.67,
"toppings": ["mushrooms", "pepperoni", "basil"],
"extra_cheese": false,
"delivery": true,
"client": {
"name": "Jane Doe",
"phone": null,
"email": "janedoe@email.com"
}
}</code></pre><figcaption>Sample .json file</figcaption></figure><p>These are the main characteristics of the JSON format:</p><ul><li>There is a sequence of key-value pairs surrounded by curly brackets <code>{}</code>. </li><li>Each key is mapped to a particular value using this format:</li></ul><pre><code>"key": &lt;value&gt; </code></pre><p>💡 <strong>Tip:</strong> The values that require quotes have to be surrounded by double quotes. </p><ul><li>Key-value pairs are separated by a comma. Only the last pair is not followed by a comma.</li></ul><pre><code class="language-JSON">{
"size": "medium", # Comma!
"price": 15.67
{
"size": "Medium",
"price": 15.67,
"toppings": ["Mushrooms", "Extra Cheese", "Pepperoni", "Basil"],
"client": {
"name": "Jane Doe",
"phone": "455-344-234",
"email": "janedoe@email.com"
}
}
import json
# String with JSON format
data_JSON =  """
{
"size": "Medium",
"price": 15.67,
"toppings": ["Mushrooms", "Extra Cheese", "Pepperoni", "Basil"],
"client": {
"name": "Jane Doe",
"phone": "455-344-234",
"email": "janedoe@email.com"
}
}
"""
# Convert JSON string to dictionary
data_dict = json.loads(data_JSON)
</code></pre><p>Let's focus on this line:</p><pre><code class="language-python">data_dict = json.loads(data_JSON)</code></pre><ul><li><code>json.loads(data_JSON)</code> creates a new dictionary with the key-value pairs of the JSON string and it returns this new dictionary.</li><li>Then, the dictionary returned is assigned to the variable <code>data_dict</code>.</li></ul><p><strong>Awesome! </strong>If we print this dictionary, we see this output:</p><pre><code class="language-python">{'size': 'Medium', 'price': 15.67, 'toppings': ['Mushrooms', 'Extra Cheese', 'Pepperoni', 'Basil'], 'client': {'name': 'Jane Doe', 'phone': '455-344-234', 'email': 'janedoe@email.com'}}</code></pre><p>The dictionary has been populated with the data of the JSON string. Each key-value pair was added successfully.</p><p>Now let's see what happens when we try to access the values of the key-value pairs with the same syntax that we would use to access the values of a regular Python dictionary:</p><pre><code class="language-python">print(data_dict["size"])
print(data_dict["price"])
print(data_dict["toppings"])
print(data_dict["client"])</code></pre><p>The output is:</p><pre><code>Medium
15.67
['Mushrooms', 'Extra Cheese', 'Pepperoni', 'Basil']
client = {
"name": "Nora",
"age": 56,
"id": "45355",
"eye_color": "green",
"wears_glasses": False
}
# Get a JSON formatted string
"name": "Nora",
"age": 56,
"id": "45355",
"eye_color": "green",
"wears_glasses": false
"age": 56,
"eye_color": "green",
"id": "45355",
"name": "Nora",
"wears_glasses": false
"orders": [
{
"size": "medium",
"price": 15.67,
"toppings": ["mushrooms", "pepperoni", "basil"],
"extra_cheese": false,
"delivery": true,
"client": {
"name": "Jane Doe",
"phone": null,
"email": "janedoe@email.com"
}
},
{
"size": "small",
"price": 6.54,
"toppings": null,
"extra_cheese": true,
"delivery": false,
"client": {
"name": "Foo Jones",
"phone": "556-342-452",
"email": null
}
}
]
with open("orders.json") as file:
# Load its content and make a new dictionary
data = json.load(file)
# Delete the "client" key-value pair from each order
for order in data["orders"]:
del order["client"]
# Open (or create) an orders_new.json file
# and store the new version of the data.
with open("orders_new.json", 'w') as file:
"orders": [
{
"size": "medium",
"price": 15.67,
"toppings": ["mushrooms", "pepperoni", "basil"],
"extra_cheese": false,
"delivery": true,
"client": {
"name": "Jane Doe",
"phone": null,
"email": "janedoe@email.com"
}
},
{
"size": "small",
"price": 6.54,
"toppings": null,
"extra_cheese": true,
"delivery": false,
"client": {
"name": "Foo Jones",
"phone": "556-342-452",
"email": null
}
}
]
}
"orders": [
{
"size": "medium",
"price": 15.67,
"toppings": [
"mushrooms",
"pepperoni",
"basil"
],
"extra_cheese": false,
"delivery": true
},
{
"size": "small",
"price": 6.54,
"toppings": null,
"extra_cheese": true,
"delivery": false
}
]
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
