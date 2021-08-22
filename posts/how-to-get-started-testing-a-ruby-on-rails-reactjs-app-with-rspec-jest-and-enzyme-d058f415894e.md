---
card: "https://cdn-media-1.freecodecamp.org/images/1*KnkP0HAL3iL6tyTQo7jVZw.jpeg"
tags: [JavaScript]
description: I recently made a simple ideas board web app using ReactJS, R
author: "Milad E. Fahmy"
title: "How to get started: testing a Ruby-on-Rails / ReactJS app with RSpec, Jest and Enzyme"
created: "2021-08-15T19:34:13+02:00"
modified: "2021-08-15T19:34:13+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-jest tag-testing tag-ruby ">
<header class="post-full-header">
<h1 class="post-full-title">How to get started: testing a Ruby-on-Rails / ReactJS app with RSpec, Jest and Enzyme</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*KnkP0HAL3iL6tyTQo7jVZw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*KnkP0HAL3iL6tyTQo7jVZw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*KnkP0HAL3iL6tyTQo7jVZw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*KnkP0HAL3iL6tyTQo7jVZw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*KnkP0HAL3iL6tyTQo7jVZw.jpeg" alt="How to get started: testing a Ruby-on-Rails / ReactJS app with RSpec, Jest and Enzyme">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I recently made a simple ideas board web app using ReactJS, Ruby-on-Rails and PostgreSQL. Below, I’ll walk you through the initial steps I took to set up basic unit tests for one of the features of my app, adding a new idea.</p>
<figcaption>Photo by <a href="https://unsplash.com/photos/awU3XEzdU94?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Dan DeAlmeida</a> on <a href="https://unsplash.com/search/photos/ideas?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>Note: I’m not going to discuss the <em>scope</em> of tests in this post; rather, my focus is on understanding how to install some of the <em>dependencies</em> in order to be able to get started with writing the tests.</p>
<h3 id="background-ideas-board-set-up">Background: ideas board set up</h3>
<p>I used Node package manager to manage my project’s dependencies. If you’d like to code along, you’ll need to make sure you have Node installed on your computer.</p>
<p><em>Project features</em></p>
<p><strong>In Rails</strong></p>
<p>Models: Idea</p>
<p>Relationships: none</p>
<p><strong>In React</strong></p>
<p>Components: Navbar, IdeasContainer, Idea</p>
<h3 id="getting-started-with-rspec"><strong>Getting started with RSpec</strong></h3>
<p>I used RSpec to test the Rails part of my ideas board web app. To get started:</p>
<ol>
<li>I added the gem ‘rspec-rails’, ‘~&gt; 3.8’ to my gemfile.</li>
<li>I then ran <code>bundle</code> in my terminal window (making sure I was in the Rails directory).</li>
</ol>
<p>3. Next, in my Rails directory, I created a new folder called <code>spec</code>. And then, another new folder inside that one called <code>requests</code>.</p>
<p>4. I created a new file called <code>ideas_spec.rb</code>. You can replace the name <code>ideas_spec</code> with the name of whichever model you want to test, making sure to include the <code>_spec</code> part to denote that it's a test file.</p>
<p>5. At the top of my ideas_spec.rb file, I added the following text:</p>
<p><code>require ‘rails_helper’</code></p>
<p>6. Then, in the same file, I included code describing the first test I wanted to run:</p><pre><code class="language-ruby">describe “add an idea”, :type =&gt; :request dodescribe “add an idea”, :type =&gt; :request do
before do
post ‘/api/v1/ideas’
end
it ‘returns a created status’ do
expect(response).to have_http_status(201)
end
end</code></pre>
<p>7. To run my test, I typed <code>rspec</code> in my terminal window, making sure I was in my rails project directory.</p>
<p>If you’ve been following along, RSpec should run at this point and your first test should pass!</p>
<h3 id="getting-started-with-jest"><strong>Getting started with Jest</strong></h3>
<p>I was pleasantly surprised to find out that the testing framework Jest is included with create-react-app! However, I also wanted to use Enzyme, a testing utility, for which I needed to install some dependencies.</p>
<ol>
<li>To start off, I created a new folder called<code> _tests_</code> in my app’s <code>src</code> directory.</li>
<li>In my client-side directory, I ran the following commands:</li>
</ol><pre><code>npm i -D react-test-renderer</code></pre><pre><code>npm install --save-dev jest-enzyme</code></pre><pre><code>npm install --save-dev enzyme enzyme-adapter-react-16</code></pre>
<p>3. To configure Enzyme, I created a file in <code>src</code> called <code>setupTests.js</code> and included the following:</p><pre><code class="language-js">const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new EnzymeAdapter() });</code></pre>
<p>4. Inside my <code>_tests_</code> folder, I created a new file, called <code>App.tests.js</code></p>
<p>5. I included the following text at the top of this file to import my components and all the testing functionality I wanted for <em>all</em> my tests:</p><pre><code class="language-js">import React from 'react';
import App from '../App';
import Idea from '../components/Idea';
import IdeasContainer from '../components/IdeasContainer';
import { create, update } from 'react-test-renderer';
import '../setupTests';
import { shallow, mount, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';</code></pre>
<p>6. Underneath, I included my <em>first</em> unit test:</p><pre><code class="language-ruby">describe('Idea', () =&gt; {
it('should render a new idea correctly', () =&gt; {
const output = shallow(
&lt;Idea
key="mockKey"
idea={"1", "Test", "Test"}
onClick={"mockFn"}
delete={"mockFn2"}
/&gt;
);
expect(shallowToJson(output)).toMatchSnapshot();
});
});</code></pre>
<p>7. I ran <code>rails s</code> in the server side directory and then <code>npm start</code> in the client side directory to start my ideas board on localhost:3001.</p>
<p>8. To run my first test, I typed the following into my terminal window (making sure I was in the client directory):</p><pre><code>npm run test</code></pre>
<p>If you’ve been following along, Jest should run at this point, your test should pass — and you’re in a great place now to write more tests!</p>
<p>For more information on the ideas board project, my repo can be found <a href="https://github.com/atkinsonholly/tracr" rel="noopener">here</a>.</p>
<p>If you made it this far, thanks for reading! I hope my post helped you get started with setting up your tests.</p>
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
