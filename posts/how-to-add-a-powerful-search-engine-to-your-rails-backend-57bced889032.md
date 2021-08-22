---
card: "https://cdn-media-1.freecodecamp.org/images/1*u98adouc8-eKxM34eqi5Lw.jpeg"
tags: [Ruby on Rails]
description: "by Domenico Angilletta"
author: "Milad E. Fahmy"
title: "How to add a powerful search engine to your Rails backend"
created: "2021-08-16T11:44:47+02:00"
modified: "2021-08-16T11:44:47+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-ruby-on-rails tag-tech tag-programming tag-tutorial tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to add a powerful search engine to your Rails backend</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*u98adouc8-eKxM34eqi5Lw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*u98adouc8-eKxM34eqi5Lw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*u98adouc8-eKxM34eqi5Lw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*u98adouc8-eKxM34eqi5Lw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*u98adouc8-eKxM34eqi5Lw.jpeg" alt="How to add a powerful search engine to your Rails backend">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
$ unzip elasticsearch-6.2.3.zip</code></pre><p>Alternatively, you can download Elasticsearch from your browser <a href="https://www.elastic.co/downloads/past-releases/elasticsearch-6-2-3" rel="noopener">here</a> and unzip it with your preferred program.</p><h3 id="2-test-environment-setup">2. Test Environment Setup</h3><p>We are going to build a backend application with Ruby on Rails 5 API. It will have one model that represents Movies. Elasticsearch will index it, and that will be searchable through an API endpoint.</p><p>First of all, let’s create a new rails application. In the same folder you downloaded Elasticsearch before, run the command for generating a new rails app. If you are new to Ruby on Rails, please refer to this <a href="http://guides.rubyonrails.org/v5.1/getting_started.html" rel="noopener">starting guide</a> to setup your environment first.</p><pre><code class="language-bash">$ rails new movies-search --api; cd movies-search</code></pre><p>When using the “api” option, all the middleware used primarily for browser applications is not included. Exactly what we want. Read more about it directly on the <a href="http://guides.rubyonrails.org/v5.0/api_app.html" rel="noopener">ruby on rails guide</a>.</p><p>Now let’s add all the Gems we will need. Open your Gemfile and add the following code:</p><pre><code class="language-rb"># Gemfile
...
# Elasticsearch integration
gem 'elasticsearch-model'
gem 'elasticsearch-rails'
group :development, :test do
...
# Test Framework
gem 'rspec'
gem 'rspec-rails'
end
group :test do
...
# Clean Database between tests
gem 'database_cleaner'
# Programmatically start and stop ES for tests
gem 'elasticsearch-extensions'
end
...</code></pre><p>We are adding two Elasticsearch Gems that will provide all necessary methods to index our model and run search queries on it. rspec, rspec-rails, database_cleaner, and elasticsearch-extensions are used for testing.</p><p>After saving your Gemfile, run <strong>bundle install </strong>to install all added Gems.</p><p>Now let’s configure Rspec by running the following command:</p><pre><code class="language-bash">rails generate rspec:install</code></pre><p>This command will create a <em>spec</em> folder and add <em>spec_helper.rb</em> and <em>rails_helper.rb</em> to it. They can be used to customize rspec to your application needs.</p><p>In this case, we will add a DatabaseCleaner block to <em>rails_helper.rb</em> so that each each test will run in an empty database. Moreover we will modify <em>spec_helper.rb</em> in order to start an Elasticsearch test server each time the test suite is started, and shut it down again once the test suite has finished.</p><p>This solution is based on <a href="undefined" rel="noopener">Rowan Oulton</a>’s article <a href="https://medium.com/@rowanoulton/testing-elasticsearch-in-rails-22a3296d989" rel="noopener">Testing Elasticsearch in Rails</a>. Many claps for him!</p><p>Let’s start with DatabaseCleaner. Inside <em>spec/rails_helper.rb</em> add the following code:</p><pre><code class="language-rb"># spec/rails_helper.rb
...
RSpec.configure do |config|
...
config.before(:suite) do
DatabaseCleaner.strategy = :transaction
DatabaseCleaner.clean_with(:truncation)
end
config.around(:each) do |example|
DatabaseCleaner.cleaning do
example.run
end
end
end</code></pre><p>Next, let’s think about the Elasticsearch test server setup. We need to add some configuration files so that Rails knows where to find our Elasticsearch executable. It will also tell it on which port we want it to run, based on the current environment. To do so, add a new configuration yaml to your config folder:</p><pre><code class="language-yml"># config/elasticsearch.yml
development: &amp;default
es_bin: '../elasticsearch-6.2.3/bin/elasticsearch'
host: 'http://localhost:9200'
port: '9200'
test:
es_bin: '../elasticsearch-6.2.3/bin/elasticsearch'
host: 'http://localhost:9250'
port: '9250'
staging:
&lt;&lt;: *default
production:
es_bin: '../elasticsearch-6.2.3/bin/elasticsearch'
host: 'http://localhost:9400'
port: '9400'</code></pre><p>If you did not create the rails application in the same folder where you downloaded Elasticsearch, or if you are using a different version of Elasticsearch, you will need to adjust the es_bin path here.</p><p>Now add a new file to your <em>initializers</em> folder that will read from the configuration we just added:</p><pre><code class="language-rb"># config/initializers/elasticsearch.rb
if File.exists?("config/elasticsearch.yml")
config = YAML.load_file("config/elasticsearch.yml")[Rails.env].symbolize_keys
Elasticsearch::Model.client = Elasticsearch::Client.new(config)
end</code></pre><p>And finally let’s change <em>spec_helper.rb </em>to include the Elasticsearch test setup. This means start and stop an Elasticsearch test server and create/delete Elasticsearch indexes for our Rails model.</p><pre><code class="language-rb"># spec/spec_helper.rb
require 'elasticsearch/extensions/test/cluster'
require 'yaml'
RSpec.configure do |config|
...
# Start an in-memory cluster for Elasticsearch as needed
es_config = YAML.load_file("config/elasticsearch.yml")["test"]
ES_BIN = es_config["es_bin"]
ES_PORT = es_config["port"]
config.before :all, elasticsearch: true do
Elasticsearch::Extensions::Test::Cluster.start(command: ES_BIN, port: ES_PORT.to_i, nodes: 1, timeout: 120)  unless Elasticsearch::Extensions::Test::Cluster.running?(command: ES_BIN, on: ES_PORT.to_i)
end
# Stop elasticsearch cluster after test run
config.after :suite do
Elasticsearch::Extensions::Test::Cluster.stop(command: ES_BIN, port: ES_PORT.to_i, nodes: 1) if Elasticsearch::Extensions::Test::Cluster.running?(command: ES_BIN, on: ES_PORT.to_i)
end
# Create indexes for all elastic searchable models
config.before :each, elasticsearch: true do
ActiveRecord::Base.descendants.each do |model|
if model.respond_to?(:__elasticsearch__)
begin
model.__elasticsearch__.create_index!
model.__elasticsearch__.refresh_index!
rescue =&gt; Elasticsearch::Transport::Transport::Errors::NotFound
# This kills "Index does not exist" errors being written to console
rescue =&gt; e
STDERR.puts "There was an error creating the elasticsearch index for #{model.name}: #{e.inspect}"
end
end
end
end
# Delete indexes for all elastic searchable models to ensure clean state between tests
config.after :each, elasticsearch: true do
ActiveRecord::Base.descendants.each do |model|
if model.respond_to?(:__elasticsearch__)
begin
model.__elasticsearch__.delete_index!
rescue =&gt; Elasticsearch::Transport::Transport::Errors::NotFound
# This kills "Index does not exist" errors being written to console
rescue =&gt; e
STDERR.puts "There was an error removing the elasticsearch index for #{model.name}: #{e.inspect}"
end
end
end
end
end</code></pre><p>We have defined four blocks:</p><ol><li>a before(:all) block that starts an Elasticsearch test server, unless it is already running</li><li>an after(:suite) block that stops the Elasticsearch test server, if it is running</li><li>a before(:each) block that creates a new Elasticsearch index for each model that is configured with Elasticsearch</li><li>an after(:each) block that deletes all Elasticsearch indexes</li></ol><p>Adding <em>elasticsearch: true</em> ensures that only tests tagged with <em>elasticsearch</em> will run these blocks.</p><p>I find that this setup works great when you run all your tests once, for example before a deploy. On the other hand, if you’re using a test driven development approach and you run your tests very often, then you will probably need to modify this configuration slightly. You do not want to start and stop your Elasticsearch test server at each test run.</p><p>In this case, you could comment out the after(:suite) block where the Test Server is stopped. You can shut it down manually, or using a script, whenever you don’t need it anymore.</p><pre><code class="language-rb">require 'elasticsearch/extensions/test/cluster'
es_config = YAML.load_file("config/elasticsearch.yml")["test"]
ES_BIN = es_config["es_bin"]
ES_PORT = es_config["port"]
Elasticsearch::Extensions::Test::Cluster.stop(command: ES_BIN, port: ES_PORT.to_i, nodes: 1)</code></pre><h3 id="3-model-indexing-with-elasticsearch">3. Model indexing with Elasticsearch</h3><p>Now we start implementing our Movie Model with search capabilities. We use a Test Driven Development approach. This means that we write tests first, see them fail, and then write code to make them pass.</p><p>First we need to add the movie model which has four attributes: a title (String), an overview (Text), an image_url(String), and an average vote value (Float).</p><pre><code class="language-bash">$ rails g model Movie title:string overview:text image_url:string vote_average:float
$ rails db:migrate</code></pre><p>Now it’s time to add Elasticsearch to our model. Let’s write a test that checks that our model is indexed.</p><pre><code class="language-rb"># spec/models/movie_spec.rb
require 'rails_helper'
RSpec.describe Movie, elasticsearch: true, :type =&gt; :model do
it 'should be indexed' do
expect(Movie.__elasticsearch__.index_exists?).to be_truthy
end
class Movie &lt; ApplicationRecord
include Elasticsearch::Model
RSpec.describe Movie, elasticsearch: true, :type =&gt; :model do
...
describe '#search' do
before(:each) do
Movie.create(
title: "Roman Holiday",
overview: "A 1953 American romantic comedy films ...",
image_url: "wikimedia.com/Roman_holiday.jpg",
vote_average: 4.0
)
Movie.__elasticsearch__.refresh_index!
end
it "should index title" do
expect(Movie.search("Holiday").records.length).to eq(1)
end
it "should index overview" do
expect(Movie.search("comedy").records.length).to eq(1)
end
it "should not index image_path" do
expect(Movie.search("Roman_holiday.jpg").records.length).to eq(0)
end
it "should not index vote_average" do
expect(Movie.search("4.0").records.length).to eq(0)
end
end
include Elasticsearch::Model
include Elasticsearch::Model::Callbacks
class Movie &lt; ApplicationRecord
include Elasticsearch::Model
include Elasticsearch::Model::Callbacks
# ElasticSearch Index
settings index: { number_of_shards: 1 } do
mappings dynamic: 'false' do
indexes :title
indexes :overview
end
end
before(:each) do
Movie.create(
title: "Roman Holiday",
overview: "A 1953 American romantic comedy films ...",
image_url: "wikimedia.com/Roman_holiday.jpg",
vote_average: 4.0
)
Movie.__elasticsearch__.refresh_index!
end
...
it "should apply stemming to title" do
expect(Movie.search("Holidays").records.length).to eq(1)
end
it "should apply stemming to overview" do
expect(Movie.search("film").records.length).to eq(1)
end
include Elasticsearch::Model
include Elasticsearch::Model::Callbacks
# ElasticSearch Index
settings index: { number_of_shards: 1 } do
mappings dynamic: 'false' do
indexes :title, analyzer: 'english'
indexes :overview, analyzer: 'english'
end
end
GET /api/v1/movies
Params:
* q=[string] required
Example url:
GET /api/v1/movies?q=Roma
Example response:
touch spec/controllers/api/v1/movies_spec.rb</code></pre><p>The tests we are going to write here are controller tests. They do not need to check the search logic defined in the model. Instead we will test three things:</p><ol><li>A GET request to /api/v1/movies?q=[string] will call Movie.search with [string] as parameter</li><li>The output of Movie.search is returned in JSON format</li><li>A success status is returned</li></ol><blockquote>A controller test should test controller behavior. A controller test should not fail because of problems in the model .<br><br>(Prescription 20 — Rails 4 Test Prescriptions. <a href="undefined" rel="noopener">Noel Rappin</a>)</blockquote><p>Let’s transform this into code. Inside <em>spec/controllers/api/v1/movies_spec.rb</em> add the following code:</p><pre><code class="language-rb"># spec/controllers/api/v1/movies_spec.rb
require 'rails_helper'
RSpec.describe Api::V1::MoviesController, type: :request do
# Search for movie with text movie-title
describe "GET /api/v1/movies?q=" do
let(:title) { "movie-title"}
let(:url) { "/api/v1/movies?q=#{title}"}
it "calls Movie.search with correct parameters" do
expect(Movie).to receive(:search).with(title)
get url
end
it "returns the output of Movie.search" do
allow(Movie).to receive(:search).and_return({})
get url
expect(response.body).to eq({}.to_json)
end
it 'returns a success status' do
allow(Movie).to receive(:search).with(title)
get url
expect(response).to be_successful
end
end
end</code></pre><p>The test will immediately fail because Api::V1::MoviesController is not defined, so let’s do that first. Create the folder structure as before and add the movies controller.</p><pre><code class="language-bash">mkdir -p app/controllers/api/v1 &amp;&amp;
touch app/controllers/api/v1/movies_controller.rb</code></pre><p>Now add the following code to <em>app/controllers/api/v1/movies_controller.rb</em>:</p><pre><code class="language-rb"># app/controllers/api/v1/movies_controller.rb
module Api
module V1
class MoviesController &lt; ApplicationController
def index;end
end
end
Rails.application.routes.draw do
namespace :api do
namespace :v1 do
resources :movies, only: [:index]
end
end
module Api
module V1
class MoviesController &lt; ApplicationController
def index
response = Movie.search params[:q]
render json: response
end
end
end
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
