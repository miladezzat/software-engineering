---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca129740569d1a4ca4d0e.jpg"
tags: [Python]
description: "The JSON API specification is a powerful way for enabling com"
author: "Milad E. Fahmy"
title: "How to build a JSON API with Python"
created: "2021-08-16T15:38:36+02:00"
modified: "2021-08-16T15:38:36+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a JSON API with Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca129740569d1a4ca4d0e.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca129740569d1a4ca4d0e.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca129740569d1a4ca4d0e.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca129740569d1a4ca4d0e.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca129740569d1a4ca4d0e.jpg" alt="How to build a JSON API with Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>The <a href="https://jsonapi.org/">JSON API specification</a> is a powerful way for enabling communication between client and server. It specifies the structure of the requests and responses sent between the two, using the JSON format.</p><p>As a data format, JSON has the advantages of being lightweight and readable. This makes it very easy to work with quickly and productively. The specification is designed to minimise the number of requests and the amount of data that needs sending between client and server.</p><p>Here, you can learn how to create a basic JSON API using Python and Flask. Then, the rest of the article will show you how to try out some of the features the JSON API specification has to offer.</p><p><a href="https://flask.palletsprojects.com/en/1.1.x/">Flask is a Python library</a> that provides a 'micro-framework' for web development. It is great for rapid development as it comes with a simple-yet-extensible core functionality. </p><p>A really basic example of how to send a JSON-like response using Flask is shown below:</p><pre><code class="language-Python">from flask import Flask
app = Flask(__name__)
@app.route('/')
def example():
return '{"name":"Bob"}'
if __name__ == '__main__':
$ cd flask-jsonapi-demo/</code></pre><p>It is good practice to <a href="https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/">create virtual environments</a> for each of your Python projects. You can skip this step, but it is strongly recommended.</p><pre><code>$ python -m venv .venv
$ source .venv/bin/activate
</code></pre><p>Once your virtual environment has been created and activated, you can install the modules needed for this project.</p><pre><code>$ pip install flask-rest-jsonapi flask-sqlalchemy</code></pre><p>Everything you'll need will be installed as the requirements for these two extensions. This includes Flask itself, and SQLAlchemy.</p><p>The next step is to create a Python file and database for the project.</p><pre><code>$ touch application.py artists.db</code></pre><h3 id="create-the-database-schema">Create the database schema</h3><p>Here, you will start modifying <code>application.py</code> to define and create the database schema for the project.</p><p>Open <code>application.py</code> in your preferred text editor. Begin by importing some modules. For clarity, modules will be imported as you go.</p><p>Next, create an object called <code>app</code> as an instance of the Flask class.</p><p>After that, use SQLAlchemy to connect to the database file you created. The final step is to define and create a table called <code>artists</code>.</p><pre><code class="language-Python">from flask import Flask
from flask_sqlalchemy import SQLAlchemy
# Create a new Flask application
app = Flask(__name__)
# Set up SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////artists.db'
db = SQLAlchemy(app)
# Define a class for the Artist table
class Artist(db.Model):
id = db.Column(db.Integer, primary_key=True)
name = db.Column(db.String)
birth_year = db.Column(db.Integer)
genre = db.Column(db.String)
# Create the table
from marshmallow_jsonapi import fields
# Create data abstraction layer
class ArtistSchema(Schema):
class Meta:
type_ = 'artist'
self_view = 'artist_one'
self_view_kwargs = {'id': '&lt;id&gt;'}
self_view_many = 'artist_many'
id = fields.Integer()
name = fields.Str(required=True)
birth_year = fields.Integer(load_only=True)
genre = fields.Str()
</code></pre><h3 id="create-resource-managers-and-url-endpoints">Create resource managers and URL endpoints</h3><p>The final piece of the puzzle is to create a resource manager and corresponding endpoint for each of the routes /artists and /artists/id.</p><p>Each resource manager is defined as a class that inherits from the Flask-REST-JSONAPI classes <code>ResourceList</code> and <code>ResourceDetail</code>. </p><p>Here they take two attributes. <code>schema</code> is used to indicate the data abstraction layer the resource manager uses, and <code>data_layer</code> indicates the session and data model that will be used for the data layer.</p><p>Next, define <code>api</code> as an instance of Flask-REST-JSONAPI's <code>Api</code> class, and create the routes for the API with <code>api.route()</code>. This method takes three arguments - the data abstraction layer class, the endpoint name, and the URL path.</p><p>The last step is to write a main loop to launch the app in debug mode when the script is run directly. Debug mode is great for development, but it is not suitable for running in production.</p><pre><code class="language-Python"># Create resource managers and endpoints
from flask_rest_jsonapi import Api, ResourceDetail, ResourceList
class ArtistMany(ResourceList):
schema = ArtistSchema
data_layer = {'session': db.session,
'model': Artist}
class ArtistOne(ResourceDetail):
schema = ArtistSchema
data_layer = {'session': db.session,
'model': Artist}
api = Api(app)
api.route(ArtistMany, 'artist_many', '/artists')
api.route(ArtistOne, 'artist_one', '/artists/&lt;int:id&gt;')
# main loop to run app in debug mode
if __name__ == '__main__':
app.run(debug=True)</code></pre><h3 id="make-get-and-post-requests">Make GET and POST requests</h3><p>Now you can start using the API to <a href="https://restfulapi.net/http-methods/">make HTTP requests</a>. This could be from a web browser, or from a command line tool like curl, or from within another program (e.g., a Python script using the Requests library).</p><p>To launch the server, run the <code>application.py</code> script with:</p><pre><code>$ python application.py</code></pre><p>In your browser, navigate to <a href="http://localhost:5000/artists">http://localhost:5000/artists</a>. &nbsp;You will see a JSON output of all the records in the database so far. Except, there are none.</p><p>To start adding records to the database, you can make a POST request. One way of doing this is from the command line using curl. Alternatively, you could use a tool like <a href="https://insomnia.rest/">Insomnia</a>, or perhaps code up a simple HTML user interface that posts data using a form.</p><p>With <a href="https://curl.haxx.se/">curl</a>, from the command line:</p><pre><code>curl -i -X POST -H 'Content-Type: application/json' -d '{"data":{"type":"artist", "attributes":{"name":"Salvador Dali", "birth_year":1904, "genre":"Surrealism"}}}' http://localhost:5000/artists</code></pre><p>Now if you navigate to <a href="http://localhost:5000/artists">http://localhost:5000/artists</a>, you will see the record you just added. If you were to add more records, they would all show here as well, as this URL path calls the <code>artists_many</code> endpoint.</p><p>To view just a single artist by their <code>id</code> number, you can navigate to the relevant URL. For example, to see the first artist, try <a href="http://localhost:5000/artists/1">http://localhost:5000/artists/1</a>.</p><h3 id="filtering-and-sorting">Filtering and sorting</h3><p>One of the neat features of the JSON API specification is the ability to return the response in more useful ways by defining some parameters in the URL. For instance, you can sort the results according to a chosen field, or filter based on some criteria. </p><p>Flask-REST-JSONAPI comes with this built in.</p><p>To sort artists in order of birth year, just navigate to <a href="http://localhost:5000/artists?sort=birth_year">http://localhost:5000/artists?sort=birth_year</a>. In a web application, this would save you from needing to sort results on the client side, which could be costly in terms of performance and therefore impact the user experience.</p><p>Filtering is also easy. You append to the URL the criteria you wish to filter on, contained in square brackets. There are three pieces of information to include:</p><ul><li>"name" - the field you are filtering by (e.g., <code>birth_year</code>)</li><li>"op" - the filter operation ("equal to", "greater than", "less than" etc.)</li><li>"val" - the value to filter against (e.g., 1900)</li></ul><p>For example, the URL below retrieves artists whose birth year is greater than 1900:</p><p><a href="http://localhost:5000/artists?filter=[{&quot;name&quot;:&quot;birth_year&quot;,&quot;op&quot;:&quot;gt&quot;,&quot;val&quot;:1900}]">http://localhost:5000/artists?filter=[{"name":"birth_year","op":"gt","val":1900}]</a></p><p>This functionality makes it much easier to retrieve only relevant information when calling the API. This is valuable for improving performance, especially when retrieving potentially large volumes of data over a slow connection.</p><h3 id="pagination">Pagination</h3><p>Another feature of the JSON API specification that aids performance is pagination. This is when large responses are sent over several "pages", rather than all in one go. You can control the page size and the number of the page you request in the URL.</p><p>So, for example, you could receive 100 results over 10 pages instead of loading all 100 in one go. The first page would contain results 1-10, the second page would contain results 11-20, and so on.</p><p>To specify the number of results you want to receive per page, you can add the parameter ?page[size]=X to the URL, where X is the number of results. Flask-REST-JSONAPI uses 30 as the default page size.</p><p>To request a given page number, you can add the parameter ?page[number]=X, where is the page number. You can combine both parameters as shown below:</p><p><a href="http://localhost:5000/artists?page[size]=2&amp;page[number]=1">http://localhost:5000/artists?page[size]=2&amp;page[number]=2</a></p><p>This URL sets the page size to two results per page, and asks for the second page of results. This would return the third and fourth results from the overall response.</p><h3 id="relationships">Relationships</h3><p>Almost always, data in one table will be related to data stored in another. For instance, if you have a table of artists, chances are you might also want a table of artworks. Each artwork is related to the artist who created it.</p><p>The JSON API specification allows you to work with relational data easily, and the Flask-REST-JSONAPI lets you take advantage of this. Here, this will be demonstrated by adding an artworks table to the database, and including relationships between artist and artwork.</p><p>To implement the artworks example, it will be necessary to make a few changes to the code in <code>application.py</code>.</p><p>First, make a couple of extra imports, then create a new table which relates each artwork to an artist:</p><pre><code class="language-Python">from marshmallow_jsonapi.flask import Relationship
from flask_rest_jsonapi import ResourceRelationship
# Define the Artwork table
class Artwork(db.Model):
id = db.Column(db.Integer, primary_key=True)
title = db.Column(db.String)
artist_id = db.Column(db.Integer,
db.ForeignKey('artist.id'))
artist = db.relationship('Artist',
backref=db.backref('artworks'))</code></pre><p>Next, rewrite the abstraction layer:</p><pre><code class="language-Python"># Create data abstraction
class ArtistSchema(Schema):
class Meta:
type_ = 'artist'
self_view = 'artist_one'
self_view_kwargs = {'id': '&lt;id&gt;'}
self_view_many = 'artist_many'
id = fields.Integer()
name = fields.Str(required=True)
birth_year = fields.Integer(load_only=True)
genre = fields.Str()
artworks = Relationship(self_view = 'artist_artworks',
self_view_kwargs = {'id': '&lt;id&gt;'},
related_view = 'artwork_many',
many = True,
schema = 'ArtworkSchema',
type_ = 'artwork')
class ArtworkSchema(Schema):
class Meta:
type_ = 'artwork'
self_view = 'artwork_one'
self_view_kwargs = {'id': '&lt;id&gt;'}
self_view_many = 'artwork_many'
id = fields.Integer()
title = fields.Str(required=True)
artist_id = fields.Integer(required=True)
</code></pre><p>This defines an abstraction layer for the artwork table, and adds a relationship between artist and artwork to the <code>ArtistSchema</code> class.</p><p>Next, define new resource managers for accessing artworks many at once and one at a time, and also for accessing the relationships between artist and artwork.</p><pre><code class="language-Python">class ArtworkMany(ResourceList):
schema = ArtworkSchema
data_layer = {'session': db.session,
'model': Artwork}
class ArtworkOne(ResourceDetail):
schema = ArtworkSchema
data_layer = {'session': db.session,
'model': Artwork}
class ArtistArtwork(ResourceRelationship):
schema = ArtistSchema
data_layer = {'session': db.session,
'model': Artist}</code></pre><p>Finally, add some new endpoints:</p><pre><code class="language-Python">api.route(ArtworkOne, 'artwork_one', '/artworks/&lt;int:id&gt;')
api.route(ArtworkMany, 'artwork_many', '/artworks')
api.route(ArtistArtwork, 'artist_artworks',
'/artists/&lt;int:id&gt;/relationships/artworks')</code></pre><p>Run <code>application.py</code> and trying posting some data from the command line via curl:</p><pre><code>curl -i -X POST -H 'Content-Type: application/json' -d '{"data":{"type":"artwork", "attributes":{"title":"The Persistance of Memory", "artist_id":1}}}' http://localhost:5000/artworks</code></pre><p>This will create an artwork related to the artist with <code>id=1</code>.</p><p>In the browser, navigate to <a href="http://localhost:5000/artists/1/relationships/artworks">http://localhost:5000/artists/1/relationships/artworks</a>. This should show the artworks related to the artist with <code>id=1</code>. This saves you from writing a more complex URL with parameters to filter artworks by their <code>artist_id</code> field. You can quickly list all the relationships between a given artist and their artworks.</p><p>Another feature is the ability to include related results in the response to calling the <code>artists_one</code> endpoint: </p><p><a href="http://localhost:5000/artists/1?include=artworks">http://localhost:5000/artists/1?include=artworks</a></p><p>This will return the usual response for the artists endpoint, and also results for each of that artist's artworks.</p><h3 id="sparse-fields">Sparse Fields</h3><p>One last feature worth mentioning - sparse fields. When working with large data resources with many complex relationships, the response sizes can blow up real fast. It is helpful to only retrieve the fields you are interested in.</p><p>The JSON API specification lets you do this by adding a fields parameter to the URL. For example URL below gets the response for a given artist and their related artworks. However, instead of returning all the fields for the given artwork, it returns only the title.</p><p><a href="http://localhost:5000/artists/1?include=artworks&amp;fields[artwork]=title">http://localhost:5000/artists/1?include=artworks&amp;fields[artwork]=title</a></p><p>This is again very helpful for improving performance, especially over slow connections. As a general rule, you should only make requests to and from the server with the minimal amount of data required.</p><h3 id="final-remarks">Final remarks</h3><p>The JSON API specification is a very useful framework for sending data between server and client in a clean, flexible format. This article has provided an overview of what you can do with it, with a worked example in Python using the Flask-REST-JSONAPI library.</p><p>So what will you do next? There are many possibilities. The example in this article has been a simple proof-of-concept, with just two tables and a single relationship between them. You can develop an application as sophisticated as you like, and create a powerful API to interact with it using all the tools provided here.</p><p>Thanks for reading, and keep coding in Python!</p>
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
