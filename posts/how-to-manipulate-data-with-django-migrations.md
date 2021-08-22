---
card: "/images/default.jpg"
tags: [Django]
description: "In this article, we ll learn how to update Django models and "
author: "Milad E. Fahmy"
title: "How to Manipulate Data with Django Migrations"
created: "2021-08-16T15:35:31+02:00"
modified: "2021-08-16T15:35:31+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-django tag-python tag-database ">
<header class="post-full-header">
<h1 class="post-full-title">How to Manipulate Data with Django Migrations</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/09/cover-1.png 300w,
/news/content/images/size/w600/2020/09/cover-1.png 600w,
/news/content/images/size/w1000/2020/09/cover-1.png 1000w,
/news/content/images/size/w2000/2020/09/cover-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/09/cover-1.png" alt="How to Manipulate Data with Django Migrations">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this article, we'll learn how to update Django models and manipulate existing data using migrations.</p><p>Successful applications that are growing are a lovely problem to have. As a product develops, it tends to accumulate complication the way your weekend cake project accumulates layers of frosting. </p><p>Thankfully, Django, my favorite batteries-included framework, handles complexity pretty well.</p><p>Django <a href="https://victoria.dev/blog/writing-efficient-django/#django-models">models help humans work with data in a way that makes sense to our brains</a>. And the framework offers plenty of classes you can inherit to help you rapidly develop a robust application from scratch. </p><p>As for developing on existing Django applications, there’s a feature for that, too. </p><p>In this article, we’ll cover how to use Django migrations to update your existing models and database.</p><h2 id="what-s-under-the-hood">What’s under the hood</h2><p>Django migrations are Python files that help you add and change things in your database tables to reflect changes in your Django models. </p><p>To understand how Django migrations help you work with data, it may be helpful to understand the underlying structures we’re working with.</p><h3 id="what-s-a-database-table">What’s a database table?</h3><p>If you’ve laid eyes on a spreadsheet before, you’re already most of the way to understanding a database table. </p><p>In a relational database, for example, a PostgreSQL database, you can expect to see data organized into columns and rows. A relational database table may have a set number of columns and any number of rows.</p><p>In Django, each model is its own table. For example, here’s a Django model:</p><pre><code class="language-python">from django.db import models
class Lunch(models.Model):
left_side = models.CharField(max_length=100, null=True)
center = models.CharField(max_length=100, null=True)
right_side = models.CharField(max_length=100, null=True)
<thead>
<tr>
<th>id</th>
<th>left_side</th>
<th>center</th>
<th>right_side</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Fork</td>
<td>Plate</td>
<td>Spoon</td>
</tr>
</tbody>
</table>
Did you rename the backend.Lunch model to Dinner? [y/N] y
Migrations for 'backend':
backend/migrations/0003_auto_20200922_2331.py
- Rename model Lunch to Dinner
</code></pre><p>Django automatically generates the appropriate migration files. The relevant line of the generated migrations file in this case would look like:</p><pre><code class="language-python">migrations.RenameModel(old_name="Lunch", new_name="Dinner"),
class Dinner(models.Model):
top_left = models.CharField(max_length=100, null=True)
top_center = models.CharField(max_length=100, null=True)
top_right = models.CharField(max_length=100, null=True)
bottom_left = models.CharField(max_length=100, null=True)
bottom_center = models.CharField(max_length=100, null=True)
bottom_right = models.CharField(max_length=100, null=True)
<thead>
<tr>
<th>id</th>
<th>top_left</th>
<th>top_center</th>
<th>top_right</th>
<th>bottom_left</th>
<th>bottom_center</th>
<th>bottom_right</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Bread plate</td>
<td>Spoon</td>
<td>Glass</td>
<td>Fork</td>
<td>Plate</td>
<td>Knife</td>
</tr>
</tbody>
</table>
bottom_left = models.CharField(max_length=100, null=True)
bottom_center = models.CharField(max_length=100, null=True)
top_center = models.CharField(max_length=100, null=True)
</code></pre><p>Django is sometimes smart enough to determine the old and new field names correctly. You’ll be asked for confirmation:</p><pre><code class="language-text">python manage.py makemigrations
Did you rename dinner.center to dinner.bottom_center (a CharField)? [y/N] y
Did you rename dinner.left_side to dinner.bottom_left (a CharField)? [y/N] y
Did you rename dinner.right_side to dinner.top_center (a CharField)? [y/N] y
Migrations for 'backend':
backend/migrations/0004_auto_20200914_2345.py
- Rename field center on dinner to bottom_center
- Rename field left_side on dinner to bottom_left
- Rename field right_side on dinner to top_center
</code></pre><p>In some cases, you’ll want to try renaming the field and running <code>makemigrations</code> one at a time.</p><p>Now that the existing fields have been migrated to their new names, add the remaining fields to the model:</p><pre><code class="language-python">class Dinner(models.Model):
top_left = models.CharField(max_length=100, null=True)
top_center = models.CharField(max_length=100, null=True)
top_right = models.CharField(max_length=100, null=True)
bottom_left = models.CharField(max_length=100, null=True)
bottom_center = models.CharField(max_length=100, null=True)
bottom_right = models.CharField(max_length=100, null=True)
</code></pre><p>Running <code>makemigrations</code> again now gives us:</p><pre><code class="language-text">python manage.py makemigrations
Migrations for 'backend':
backend/migrations/0005_auto_20200914_2351.py
- Add field bottom_right to dinner
- Add field top_left to dinner
- Add field top_right to dinner
</code></pre><p>You’re done! By generating Django migrations, you’ve successfully set up your <code>dinner_table</code> and moved existing data to its new spot.</p><h2 id="additional-complexity">Additional complexity</h2><p>You’ll notice that our Lunch and Dinner models are not very complex. Out of Django’s many <a href="https://docs.djangoproject.com/en/3.1/ref/models/fields/#field-types">model field options</a>, we’re just using <code>CharField</code>. We also set <code>null=True</code> to let Django store empty values as <code>NULL</code> in the database.</p><p>Django migrations can handle additional complexity, such as changing field types, and whether a blank or null value is permitted. I keep Django’s <a href="https://docs.djangoproject.com/en/3.1/ref/models/fields/#">model field reference</a> handy as I work with varying types of data and different use cases.</p><h2 id="de-mystified-migrations">De-mystified migrations</h2><p>I hope this article has helped you better understand Django migrations and how they work!</p><p>Now that you can change models and manipulate existing data in your Django application, be sure to use your powers wisely. </p><p>Backup your database, research and plan your migrations, and always run tests before working with customer data. By doing so, you have the potential to enable your application to grow – with manageable levels of complexity.</p>
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
