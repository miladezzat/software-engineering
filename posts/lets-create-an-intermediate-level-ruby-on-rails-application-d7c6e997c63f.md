---
card: "https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_UH-HEG_VCXKMShU5iRbtFw-2.png"
tags: [Ruby on Rails]
description: "There are plenty tutorials online which show how to create yo"
author: "Milad E. Fahmy"
title: "The Ultimate Intermediate Ruby on Rails Tutorial: Let’s Create an Entire App!"
created: "2021-08-16T10:19:16+02:00"
modified: "2021-08-16T10:19:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-ruby-on-rails tag-programming tag-web-development tag-software-development tag-startup ">
<header class="post-full-header">
<h1 class="post-full-title">The Ultimate Intermediate Ruby on Rails Tutorial: Let’s Create an Entire App!</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_UH-HEG_VCXKMShU5iRbtFw-2.png 300w,
https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_UH-HEG_VCXKMShU5iRbtFw-2.png 600w,
https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_UH-HEG_VCXKMShU5iRbtFw-2.png 1000w,
https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_UH-HEG_VCXKMShU5iRbtFw-2.png 2000w">
<img onerror="this.style.display='none'" src="https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_UH-HEG_VCXKMShU5iRbtFw-2.png" alt="The Ultimate Intermediate Ruby on Rails Tutorial: Let’s Create an Entire App!">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
def index
end
root to: 'pages#index'
gem 'bootstrap-sass', '~&gt; 3.3.6'
gem 'sass-rails', '&gt;= 3.2'
...</code></pre><p>Save the file and run this to install newly added gems:</p><pre><code class="language-bash">bundle install</code></pre><p>If you are still running the application, restart the Rails server to make sure that new gems are available. To restart the server simply shutdown it by pressing <code>Ctrl + C</code> and run <code>rails s</code> command again to boot the server.</p><p>Go to <code>assets</code> to open the <code>application.css</code> file:</p><p><code>app/assets/stylesheets/application.css</code></p><p>Below all the commented text add this:</p><pre><code class="language-css">...
@import "bootstrap-sprockets";
@import "bootstrap";</code></pre><p>Now change the <code>application.css</code> name to <code>application.scss</code>. This is necessary in order to use Bootstrap library in Rails, also it allows us to use <a href="https://sass-lang.com/">Sass</a> features.</p><p>We want to control the order in which all <code>.scss</code> files are rendered, because in the future we might want to create some Sass variables. We want to make sure that our variables are going to be defined before we use them.</p><p>To accomplish it, remove those two lines from the <code>application.scss</code> file:</p><pre><code class="language-scss">*= require_self
*= require_tree .</code></pre><p>We’re almost able to use Bootstrap library. There’s a one more thing which we have to do. As the <a href="https://github.com/twbs/bootstrap-sass">bootstrap-sass</a> docs says, Bootstrap JavaScript is dependent on jQuery library. To use jQuery with Rails, you have to add <a href="https://github.com/rails/jquery-rails">jquery-rails</a> gem.</p><pre><code class="language-bash">gem 'jquery-rails'</code></pre><p>Run…</p><pre><code class="language-bash">bundle install</code></pre><p>…again, and restart the server.</p><p>Last step is to require Bootstrap and jQuery in the application’s JavaScript file. Go to <code>application.js</code></p><pre><code>app/assets/javascripts/application.js</code></pre><p>Then add the following lines in the file:</p><pre><code class="language-js">//= require jquery
//= require bootstrap-sprockets</code></pre><p>Commit the changes:</p><pre><code class="language-bash">git add -A
git commit -m "Add and configure bootstrap gem"</code></pre><h3 id="navigation-bar">Navigation bar</h3><p>For the navigation bar we’ll use Bootstrap’s <a href="https://getbootstrap.com/docs/3.3/components/#navbar">navbar component</a> as the starting point and then quite modify it. We will store our navigation bar inside a <a href="https://guides.rubyonrails.org/layouts_and_rendering.html#using-partials">partial template</a>.</p><p>We’re doing this because it’s better to keep every component of the app in separate files. It allows to test and manage app’s code much easier. Also we can reuse those components in other parts of the app, without duplicating the code.</p><p>Navigate to:</p><pre><code>views/layouts</code></pre><p>Create a new file:</p><pre><code class="language-bash">_navigation.html.erb</code></pre><p>For partials we use underscore prefix, so the Rails framework can distinguish it as a partial. Now copy and paste navbar component from Bootstrap docs and save the file. To see the partial on the website, we have to render it somewhere. Navigate to <code>views/layouts/application.html.erb</code> . This is the default file where everything gets rendered.</p><p>Inside the file we see the following method:</p><pre><code>&lt;%= yield %&gt;</code></pre><p>It renders the requested template. To use ruby syntax inside the HTML file, we have to wrap it around with <code>&lt;% %&gt;</code> (embedded ruby allows us to do that). To quickly learn the differences between ERB syntax, checkout this <a href="https://stackoverflow.com/questions/7996695/what-is-the-difference-between-and-in-erb-in-rails">StackOverflow answer</a>.</p><p>In <a href="https://medium.com/free-code-camp/lets-create-an-intermediate-level-ruby-on-rails-application-d7c6e997c63f#b574">Home page section</a> we set the <a href="https://medium.com/free-code-camp/lets-create-an-intermediate-level-ruby-on-rails-application-d7c6e997c63f#1faf">route</a> to recognize the root URL. So whenever we send a <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET">GET request</a> to go to a root page, <code>PagesController‘sindex</code> action gets called. And that respective action (in this case the <code>index</code>action) responds with a template which gets rendered with the <code>yield</code>method. As you remember, our template for a home page is located at <code>app/views/pages/index.html.erb</code>.</p><p>Since we want to have a navigation bar across all pages, we’ll render our navigation bar inside the default <code>application.html.erb</code> file. To render a partial file , simply use the <code>render</code> method and pass partial’s path as an argument. Do it just above the <code>yield</code> method like this:</p><pre><code class="language-rb">...
&lt;%= render 'layouts/navigation' %&gt;
&lt;%= yield %&gt;
&lt;div class="container-fluid"&gt;
&lt;!-- Brand and toggle get grouped for better mobile display --&gt;
&lt;div class="navbar-header"&gt;
&lt;button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"&gt;
&lt;span class="sr-only"&gt;Toggle navigation&lt;/span&gt;
&lt;span class="icon-bar"&gt;&lt;/span&gt;
&lt;span class="icon-bar"&gt;&lt;/span&gt;
&lt;span class="icon-bar"&gt;&lt;/span&gt;
&lt;/button&gt;
&lt;a class="navbar-brand" href="#"&gt;Brand&lt;/a&gt;
&lt;/div&gt;
&lt;!-- Collect the nav links, forms, and other content for toggling --&gt;
&lt;div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"&gt;
&lt;ul class="nav navbar-nav"&gt;
&lt;/ul&gt;
&lt;ul class="nav navbar-nav navbar-right"&gt;
&lt;/ul&gt;
&lt;/div&gt;&lt;!-- /.navbar-collapse --&gt;
&lt;/div&gt;&lt;!-- /.container-fluid --&gt;
&lt;/nav&gt;</code></pre><figcaption>layouts/_navigation.html.erb</figcaption></figure><p>We have a basic responsive navigation bar now. It’s a good time to create a new commit. In command prompt run the following commands:</p><pre><code class="language-bash">git add -A
background: $navbarColor !important;
border: none;
a {
color: white !important;
}
}</code></pre><figcaption>app/assets/stylesheets/partials/layout/navigation.scss</figcaption></figure><p>With these lines of code we change navbar’s background and links color. As you may have noticed, <code>a</code> selector is nested inside another declaration block. Sass allows us to use this functionality. <code>!important</code> is used to strictly override default Bootstraps styles. The last thing which you may have noticed is that instead of a color name, we use a Sass variable. The reason for this is that we are going to use this color multiple times across the app. Let’s define this variable.</p><p>First create a new folder:</p><pre><code>app/assets/stylesheets/base</code></pre><p>Inside the base directory create a new file <code>variables.scss</code>. Inside the file define a variable:</p><pre><code class="language-scss">$navbarColor: #323738;</code></pre><p>If you tried to go to <a href="http://localhost:3000/">http://localhost:3000</a>, you wouldn’t notice any style changes. The reason for that is that in the <a href="https://medium.com/free-code-camp/lets-create-an-intermediate-level-ruby-on-rails-application-d7c6e997c63f#58cf">Bootstrap section</a> we removed these lines:</p><pre><code>*= require_self
// Bootstrap
@import "bootstrap-sprockets";
@import "bootstrap";
// Variables
@import "base/variables";
// Partials - main css files
.navbar-header {
width: 100%;
button, .navbar-brand {
transition: opacity 0.15s;
}
button {
margin-right: 0;
}
button:hover, .navbar-brand:hover {
opacity: 0.8;
}
}
}</code></pre><figcaption>app/assets/stylesheets/partials/layout/navigation.scss</figcaption></figure><p>Of course you can put this code at the bottom of the file if you want to. Personally, I order and group CSS code based on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity">CSS selectors’ specificity</a>. Again, everyone is doing it slightly differently. I put less specific selectors above and more specific selectors below. So for instance Type selectors go above Class selectors and Class selectors go above ID selectors.</p><p>Let’s commit changes:</p><pre><code class="language-bash">git add -A
git commit -m "Add CSS to the navigation bar"</code></pre><p>We want to make sure that the navigation bar is always visible, even when we scroll down. Right now we don’t have enough content to scroll down, but we will in the future. Why don’t we give this feature to the navigation bar right now?</p><p>To do that use Bootstrap class <code>navbar-fixed-top</code>. Add this class to the <code>nav</code> element, so it looks like this:</p><pre><code class="language-html">&lt;nav class="navbar navbar-default navbar-fixed-top"&gt;</code></pre><p>Also we want to have <code>collabfield</code> to be to the <a href="https://getbootstrap.com/docs/3.3/css/#grid">Bootstrap Grid System’s</a>left side boundaries. Right now it is to the viewport’s left side boundaries, because our class is currently <code>container-fluid</code>. To change that, change the class to <code>container</code>.</p><p>It should look like this:</p><pre><code class="language-html">&lt;div class="container"&gt;</code></pre><p>Commit the changes:</p><pre><code class="language-bash">git add -A
git commit -m "
- in _navigation.html.erb add navbar-fixed-top class to nav.
- Replace container-fluid class with container"</code></pre><p>If you go to <a href="http://localhost:3000/">http://localhost:3000</a>, you see that the <code>Home page</code> text is hidden under the navigation bar. That’s because of the <code>navbar-fixed-top</code> class. To solve this issue, push the body down by adding the following to <code>navigation.scss</code>:</p><pre><code class="language-scss">body {
margin-top: 50px;
rails generate devise:install</code></pre><p>You probably see some instructions in the command prompt. We won’t use mailers in this tutorial, so no further configuration is needed.</p><p>At this point, if you don’t know anything about Rails models, you should get familiar with them by skimming through <a href="http://guides.rubyonrails.org/active_record_basics.html">Active Record</a> and <a href="http://guides.rubyonrails.org/active_model_basics.html">Active Model</a>documentations.</p><p>Now let’s use a devise generator to create a <code>User</code> model.</p><pre><code class="language-bash">rails generate devise User</code></pre><p>Initialize a database for the app by running:</p><pre><code class="language-bash">rails db:create</code></pre><p>Then run this command to create new tables in your database:</p><pre><code class="language-bash">rails db:migrate</code></pre><p>That’s it. Technically our authentication system is set up. Now we can use Devise given methods and create new users. Commit the change:</p><pre><code class="language-bash">git add -A
as: resource_name,
url: session_path(resource_name)) do |f| %&gt;
&lt;%= f.email_field :email,
autofocus: true,
class: 'form-control',
placeholder: 'email' %&gt;
&lt;%= f.password_field  :password,
autocomplete: "off",
class: 'form-control',
placeholder: 'password' %&gt;
&lt;% if devise_mapping.rememberable? -%&gt;
&lt;%= f.check_box :remember_me %&gt;
&lt;% end -%&gt;
&lt;%= f.submit "Log in", class: 'form-control login-button' %&gt;
git commit -m "Generate devise views, modify sign in form
&lt;div class="row"&gt;
&lt;div class="col-sm-6 col-sm-offset-3"&gt;
&lt;h2 class="text-center"&gt;Log in&lt;/h2&gt;
&lt;!-- PASTE LOGIN FORM HERE --&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre><figcaption>views/devise/sessions/new.html.erb</figcaption></figure><p>The width of the login form is 6 columns out of 12. And the offset is 3 columns. On smaller devices the form will take full screen’s width. That’s how the <a href="https://getbootstrap.com/docs/3.3/css/#grid">bootstrap grid</a>works.</p><p>Let’s do another commit. Quite a minor change, huh? But that’s how I usually do commits. I implement a definite change in one area and then commit it. I think doing it this way helps to track changes and understand how the code has evolved.</p><pre><code class="language-bash">git add -A
git commit -m "wrap login form in the login page with a boostrap container"</code></pre><p>It would be better if we could just reach the login page by going to <code>/login</code>instead of <code>/users/sign_in</code>. We have to change the route. To do that we need to know where the action, which gets called when we go to login page, is located. Devise controllers are located inside the gem itself. By reading Devise docs we can see that all controllers are located inside the <code>devise</code> directory. Not really surprised by the discovery, to be honest U_U. By using the <code>devise_scope</code> method we can simply change the route. Go to <code>routes.rb</code> file and add</p><pre><code class="language-rb">devise_scope :user do
get 'login', to: 'devise/sessions#new'
end</code></pre><p>Commit the change:</p><pre><code class="language-bash">git add -A
git commit -m "change route from /users/sign_in to /login"</code></pre><p>For now, leave the login page as it is.</p><p><strong>Sign up page</strong></p><p>If we navigated to <a href="http://localhost:3000/users/sign_up">localhost:3000/users/sign_up</a>, we would see the default Devise sign up page. But as mentioned above, the sign up page will require some extra effort. Why? Because we want to add a new <code>:name</code> column to the <code>users</code> table, so a User object could have the <code>:name</code> attribute.</p><p>We’re about to do some changes to the <code>schema.rb</code> file. At this moment, if you aren’t quite familiar with schema changes and migrations, I recommend you to read through <a href="http://guides.rubyonrails.org/active_record_migrations.html">Active Record Migrations</a> docs.</p><p>First, we have to add an extra column to the <code>users</code> table. We could create a new migration file and use a <code>change_table</code> method to add an extra column. But we are just at the development stage, our app isn’t deployed yet. We can just define a new column straight inside the <code>devise_create_users</code> migration file and then recreate the database. Navigate to <code>db/migrate</code> and open the <code>*CREATION_DATE*_devise_create_users.rb</code> file and add <code>t.string :name, null: false, default: ""</code> inside the <code>create_table</code> method.</p><p>Now run the commands to drop and create the database, and run migrations.</p><pre><code class="language-bash">rails db:drop
rails db:create
private
def sign_up_params
params.require(:user).permit( :name,
:email,
:password,
:password_confirmation)
end
def account_update_params
params.require(:user).permit( :name,
:email,
:password,
:password_confirmation,
:current_password)
end
end</code></pre><figcaption>controllers/registrations_controller.rb</figcaption></figure><p>This code overwrites the <code>sign_up_params</code> and <code>account_update_params</code> methods to accept the <code>:name</code> attribute. As you see, those methods are in the Devise <code>RegistrationsController</code>, so we specified it and altered its methods. Now inside our routes we have to specify this controller, so these methods could be overwritten. Inside <code>routes.rb</code> change</p><pre><code>devise_for :users</code></pre><p>to</p><pre><code>devise_for :users, :controllers =&gt; {:registrations =&gt; "registrations"}</code></pre><p>Commit the changes.</p><pre><code class="language-bash">git add -A
git commit -m "
- Add the name column to the users table.
- Include name attribute to sign_up_params and account_update_params
:as =&gt; resource_name,
:url =&gt; registration_path(resource_name)) do |f| %&gt;
&lt;%= f.text_field :name,
placeholder: 'username (will be shown publicly)',
class: 'form-control' %&gt;
&lt;%= f.text_field :email,
placeholder: 'email',
class: 'form-control' %&gt;
&lt;%= f.password_field :password,
placeholder: 'password',
class: 'form-control' %&gt;
&lt;%= f.password_field :password_confirmation,
placeholder: 'password confirmation',
class: 'form-control' %&gt;
&lt;%= f.submit 'Sign up', class: 'btn sign-up-button' %&gt;
&lt;% end %&gt;</code></pre><figcaption>views/devise/registrations/new.html.erb</figcaption></figure><p>Commit the change.</p><pre><code class="language-bash">git add -A
git commit -m "
Delete everything from the signup page, except the form.
&lt;div class="row"&gt;
&lt;h1&gt;Get in touch with like-minded people&lt;/h1&gt;
&lt;h3&gt;Create, study, accomplish goals together&lt;/h3&gt;
&lt;div class="col-sm-offset-4 col-sm-4"&gt;
&lt;h3&gt;Sign up &lt;small&gt;it's free!&lt;/small&gt;&lt;/h3&gt;
&lt;!-- PASTE THE FORM HERE --&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre><figcaption>views/devise/registrations/new.html.erb</figcaption></figure><p>Commit the change.</p><pre><code class="language-bash">git add -A
git commit -m "
Wrap the sign up form with a bootstrap container.
Add informational text inside the container"</code></pre><p>Just like with the login page, it would be better if we could just open a sign up page by going to <code>/signup</code> instead of <code>users/sign_up</code>. Inside the <code>routes.rb</code> file add the following code:</p><pre><code class="language-rb">devise_scope :user do
get 'signup', to: 'devise/registrations#new'
end</code></pre><p>Commit the change.</p><pre><code class="language-bash">git add -A
margin-top: 100px;
h1 {
font-size: 36px !important;
font-size: 3.6rem !important;
}
text-align: center;
padding-bottom: 20px;
// Partials - main css files
@import "partials/*";
@import "partials/layout/*";</code></pre><figcaption>assets/stylesheets/application.scss</figcaption></figure><p>Commit the changes.</p><pre><code class="language-bash">git add -A
git commit -m "
- Create a signup.scss and add CSS to the sign up page
box-sizing: border-box;
}
html {
font-size: 62.5%;
}
body {
background: $backgroundColor;
font-size: 14px;
font-size: 1.4rem;
}
h1 {
font-size: 24px;
font-size: 2.4rem;
}
i {
width: 26px;
}
ul {
list-style-type: none;
}
a:hover, a:active, a:link, a:visited {
text-decoration: none;
}
.control-label {
display: none;
}</code></pre><figcaption>assets/stylesheets/base/default.scss</figcaption></figure><p>Here we apply some general style changes for the whole website. <code>font-size</code> is set to <code>62.5%</code>, so <code>1 rem</code> unit could represent <code>10px</code>. If you don’t know what the rem unit is, you may want to read this <a href="https://www.sitepoint.com/understanding-and-using-rem-units-in-css/">tutorial</a>. We don’t want to see a label text on bootstrap forms, that’s why we set this:</p><pre><code class="language-scss">.control-label {
display: none;
// Variables
@import "base/variables";
// Default styles
@import "base/default";
...</code></pre><figcaption>assets/stylesheets/application.scss</figcaption></figure><p>Commit the changes.</p><pre><code class="language-bash">git add -A
git commit -m "
Add CSS and import CSS files inside the main file
- Create a default.scss file and add CSS
- Define $backgroundColor variable
&lt;!-- Elements visible all the time --&gt;
&lt;div class="col-sm-7"&gt;
&lt;/div&gt;&lt;!-- col-sm-7 --&gt;
&lt;!-- Elements collapses on smaller devices --&gt;
&lt;div class="col-sm-5"&gt;
&lt;/div&gt;&lt;!-- col-sm-5 --&gt;
&lt;div class="container"&gt;
&lt;div class="row"&gt;
&lt;!-- Elements visible all the time --&gt;
&lt;div class="col-sm-7"&gt;
&lt;%= render 'layouts/navigation/header' %&gt;
&lt;/div&gt;&lt;!-- col-sm-7 --&gt;
&lt;!-- Elements collapses on smaller devices --&gt;
&lt;div class="col-sm-5"&gt;
&lt;%= render 'layouts/navigation/collapsible_elements' %&gt;
&lt;/div&gt;&lt;!-- col-sm-5 --&gt;
&lt;/div&gt;&lt;!-- row --&gt;
&lt;/div&gt;&lt;!-- container --&gt;
&lt;div class="collapse navbar-collapse navbar-right" id="navbar-collapsible-content"&gt;
&lt;ul class="nav navbar-nav "&gt;
&lt;% if user_signed_in? %&gt;
&lt;li class="dropdown pc-menu"&gt;
&lt;a id="user-settings" class="dropdown-toggle" data-toggle="dropdown" href="#"&gt;
&lt;span id="user-name"&gt;&lt;%= current_user.name %&gt;&lt;/span&gt;
&lt;span class="caret"&gt;&lt;/span&gt;
&lt;/a&gt;
&lt;ul class="dropdown-menu" role="menu"&gt;
&lt;li&gt;&lt;%= link_to 'Edit Profile', edit_user_registration_path %&gt;&lt;/li&gt;
&lt;li&gt;&lt;%= link_to 'Log out', destroy_user_session_path, method: :delete %&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;li class="mobile-menu"&gt;
&lt;%= link_to 'Edit Profile', edit_user_registration_path %&gt;
&lt;/li&gt;
&lt;li class="mobile-menu"&gt;
&lt;%= link_to 'Log out', destroy_user_session_path, method: :delete %&gt;
&lt;/li&gt;
&lt;% else # user not signed it %&gt;
&lt;li &gt;&lt;%= link_to 'Login', login_path %&gt;&lt;/li&gt;
&lt;li &gt;&lt;%= link_to 'Signup', signup_path %&gt;&lt;/li&gt;
&lt;% end # if user is signed it %&gt;
&lt;/ul&gt;
.mobile-menu {
display: none !important;
}
.pc-menu {
display: none !important;
}
// Media queries for a responsive design
padding: 0;
margin-right: 10px;
}
.mobile-menu {
i {
color: white;
}
ul {
padding: 0px;
}
a {
display: block;
padding: 10px 0px 10px 25px !important;
}
a:hover {
background: white !important;
color: black !important;
i {
color: black;
}
}
}
.icon-bar {
background-color: white !important;
}
.active a {
background: $navbarColor !important;
border-bottom: solid 5px white;
}
.dropdown-toggle, .dropdown-menu {
background: $navbarColor !important;
border: none;
}
.dropdown-menu a:hover {
color: black !important;
background: white !important;
git commit -m "
Update the navigation bar
- Add login, signup, logout and edit profile links on the navigation bar
- Split _navigation.scss code into partials
- Create responsive directory inside the stylesheets directory and add CSS.
- Add CSS to tweak navigation bar style"</code></pre><p>Now we have a basic authentication functionality. It satisfies our needs. So let’s merge <code>authentication</code> branch with the <code>master</code> branch.</p><pre><code class="language-bash">git checkout master
module ApplicationHelper
include NavigationHelper
&lt;a id="user-settings" class="dropdown-toggle" data-toggle="dropdown" href="#"&gt;
&lt;span id="user-name"&gt;&lt;%= current_user.name %&gt;&lt;/span&gt;
&lt;span class="caret"&gt;&lt;/span&gt;
&lt;/a&gt;
&lt;ul class="dropdown-menu" role="menu"&gt;
&lt;li&gt;&lt;%= link_to 'Edit Profile', edit_user_registration_path %&gt;&lt;/li&gt;
&lt;li&gt;&lt;%= link_to 'Log out', destroy_user_session_path, method: :delete %&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;li class="mobile-menu"&gt;
&lt;%= link_to 'Edit Profile', edit_user_registration_path %&gt;
&lt;/li&gt;
&lt;li class="mobile-menu"&gt;
&lt;%= link_to 'Log out', destroy_user_session_path, method: :delete %&gt;
&lt;div class="collapse navbar-collapse navbar-right" id="navbar-collapsible-content"&gt;
&lt;ul class="nav navbar-nav "&gt;
&lt;%= render collapsible_links_partial_path %&gt;
&lt;/ul&gt;
def collapsible_links_partial_path
if user_signed_in?
'layouts/navigation/collapsible_elements/signed_in_links'
else
'layouts/navigation/collapsible_elements/non_signed_in_links'
end
end
end</code></pre><figcaption>app/helpers/navigation_helper.rb</figcaption></figure><p>The defined method is pretty straightforward. If a user is signed in, return a corresponding partial’s path. If a user is not signed in, return another partial’s path.</p><p>We’ve created our first helper method and extracted logic from views to a helper method. We’re going to do this for the rest of the guide, whenever we encounter logic inside a view file. By doing this we’re making a favor to ourselves, testing and managing the app becomes much easier.</p><p>The app should look and function the same.</p><p>Commit the changes.</p><pre><code class="language-bash">git add -A
git commit -m "Configure and create helpers
- Change include_all_helpers config to false
- Split the _collapsible_elements.html.erb file's content into
partials and extract logic from the file into partials"</code></pre><p>Merge the <code>helpers</code> branch with the <code>master</code></p><pre><code class="language-bash">git checkout master
git merge helpershttps://gist.github.com/domagude/419bba70cb97e27f4ea04fe37820194a#file-rails_helper-rb</code></pre><h3 id="testing">Testing</h3><p>At this point the application has some functionality. Even thought there aren’t many features yet, but we already have to spend some time by manually testing the app if we want to make sure that everything works. Imagine if the application had 20 times more features than it has now. What a frustration would be to check that everything works fine, every time we did code changes. To avoid this frustration and hours of manual testing, we’ll implement <a href="https://en.wikipedia.org/wiki/Test_automation">automated tests</a>.</p><p>Before diving into tests writing, allow me to introduce you how and what I test. Also you can read through <a href="http://guides.rubyonrails.org/testing.html">A Guide to Testing Rails Applications</a> to get familiar with default Rails testing techniques.</p><p><strong>What I use for testing</strong></p><ul><li><strong><strong>Framework: </strong></strong><a href="https://relishapp.com/rspec/">RSpec</a> When I started testing my Rails apps, I used the default <a href="http://guides.rubyonrails.org/testing.html#rails-meets-minitest">Minitest</a>framework. Now I use RSpec. I don’t think there’s a good or a bad choice here. Both frameworks are great. I think it depends on a personal preference, which framework to use. I’ve heard that RSpec is a popular choice among Rails community, so I’ve decided to give it a shot. Now I am using it most of the time.</li><li><strong><strong>Sample data: </strong></strong><a href="https://github.com/thoughtbot/factory_girl">factory_girl</a><strong><strong> </strong></strong>Again, at first I tried the default Rails way — <a href="http://guides.rubyonrails.org/testing.html#the-low-down-on-fixtures">fixtures</a>, to add sample data. I’ve found that it’s a different case than it is with testing frameworks. Which testing framework to choose is probably a personal preference. In my opinion it’s not the case with sample data. At first fixtures were fine. But I’ve noticed that after apps become larger, controlling sample data with fixtures becomes tough. Maybe I used it in a wrong way. But with factories everything was nice and peaceful right away. No matter if an app is smaller or bigger — the effort to set sample data is the same.</li><li><strong><strong>Acceptance tests:</strong></strong> <a href="https://github.com/teamcapybara/capybara">Capybara</a> By default Capybara uses rack_test driver. Unfortunately, this driver doesn’t support JavaScript. Instead of the default Capybara’s driver, I chose to use <a href="https://github.com/teampoltergeist/poltergeist">poltergeist</a>. It supports JavaScript and in my case it was the easiest driver to set up.</li></ul><p><strong>What I test</strong></p><p>I test all logic which is written by me. It could be:</p><ul><li>Helpers</li><li>Models</li><li>Jobs</li><li>Design Patterns</li><li>Any other logic written by me</li></ul><p>Besides logic, I wrap my app with acceptance tests using Capybara, to make sure that all app’s features are working properly by simulating a user’s interaction. Also to help my simulation tests, I use <a href="https://relishapp.com/rspec/rspec-rails/docs/request-specs/request-spec">request tests</a> to make sure that all requests return correct responses.</p><p>That’s what I test in my personal apps, because it fully satisfies my needs. Obviously, testing standards could be different from person to person and from company to company.</p><p>Controllers, views and gems weren’t mentioned, why? As many Rails developers say, controllers and views shouldn’t contain any logic. And I agree with them. In this case there isn’t much to test then. In my opinion, user simulation tests are enough and efficient for views and controllers. And gems are already tested by their creators. So I think that simulation tests are enough to make sure that gems work properly too.</p><p><strong>How I test</strong></p><p>Of course I try to use TDD approach whenever is possible. Write a test first and then implement the code. In this case the development flow becomes more smoother. But sometimes you aren’t sure how the completed feature is going to look like and what kind of output to expect. You might be experimenting with the code or just trying different implementation solutions. So in those cases, test first and implementation later approach doesn’t really work.</p><p>Before (sometimes after, as discussed above) every piece of logic I write, I write an isolated test for it a.k.a. <a href="https://en.wikipedia.org/wiki/Unit_testing">unit test</a>. To make sure that every feature of an app works, I write acceptance (user simulation) tests with Capybara.</p><p><strong>Set up a test environment</strong></p><p>Before we write our first tests, we have to configure the testing environment.</p><p>Open the <code>Gemfile</code> and add those gems to the test group</p><pre><code class="language-bash">gem 'rspec-rails', '~&gt; 3.6'
gem 'factory_girl_rails'
gem 'rails-controller-testing'
gem 'headless'
gem 'capybara'
gem 'poltergeist'
DatabaseCleaner.clean_with(:truncation)
end
config.before(:each) do
DatabaseCleaner.strategy = :transaction
end
config.before(:each, :js =&gt; true) do
DatabaseCleaner.strategy = :truncation
end
config.before(:each) do
DatabaseCleaner.start
end
config.after(:each) do
DatabaseCleaner.clean
end
require 'factory_girl_rails'
require 'capybara/rspec'
config.include Devise::Test::IntegrationHelpers, type: :feature
config.include FactoryGirl::Syntax::Methods
Capybara.javascript_driver = :poltergeist
Capybara.server = :puma </code></pre><figcaption>spec/rails_helper.rb</figcaption></figure><p>Let’s breakdown the code a little bit.</p><p>With <code>require</code> methods we load files from the new added gems, so we could use their methods below.</p><pre><code class="language-bash">config.include Devise::Test::IntegrationHelpers, type: :feature</code></pre><p>This configuration allows us to use <code>devise</code> methods inside <code>capybara</code>tests. How did I come up with this line? It was provided inside the <a href="https://github.com/plataformatec/devise">Devise docs</a>.</p><pre><code>config.include FactoryGirl::Syntax::Methods</code></pre><p>This configuration allows to use <code>factory_girl</code> gem’s methods. Again, I found this configuration inside the gem’s documentation.</p><pre><code class="language-rb">Capybara.javascript_driver = :poltergeist
Capybara.server = :puma</code></pre><p>Those two configurations are required in order to be able to test JavaScript with <code>capybara</code>. Always read the documentation first, when you want to implement something you don’t know how to.</p><p>The reason why I introduced you with most of the testing gems and configurations at once and not gradually, once we meet a particular problem, is to give you a clear picture what I use for testing. Now you can always come back to this section and check majority of the configurations in one place. Rather than jumping from one place to another and putting gems with configurations like puzzle pieces together.</p><p>Let’s commit the changes and finally get our hands dirty with tests.</p><pre><code class="language-bash">git add -A
git commit -m "
Set up the testing environment
- Remove test directory
- Add and configure rspec-rails, factory_girl_rails,
rails-controller-testing, headless, capybara, poltergeist,
RSpec.describe NavigationHelper, :type =&gt; :helper do
RSpec.describe NavigationHelper, :type =&gt; :helper do
context 'signed in user' do
before(:each) { helper.stub(:user_signed_in?).and_return(true) }
context '#collapsible_links_partial_path' do
it "returns signed_in_links partial's path" do
expect(helper.collapsible_links_partial_path).to (
eq 'layouts/navigation/collapsible_elements/signed_in_links'
)
end
end
end
context 'non-signed in user' do
before(:each) { helper.stub(:user_signed_in?).and_return(false) }
context '#collapsible_links_partial_path' do
it "returns non_signed_in_links partial's path" do
expect(helper.collapsible_links_partial_path).to (
eq 'layouts/navigation/collapsible_elements/non_signed_in_links'
)
end
end
end
factory :user do
sequence(:name) { |n| "test#{n}" }
sequence(:email) { |n| "test#{n}@test.com" }
password '123456'
password_confirmation '123456'
end
end</code></pre><figcaption>spec/factories/users</figcaption></figure><p>Now within our specs, we can easily create new users inside the test database, whenever we need them, using <code>factory_girl</code> gem’s methods. For the comprehensive guide how to define and use factories, checkout the <code>factory_girl</code> gem’s docs.</p><p>Our defined factory, <code>user</code>, is pretty straightforward. We defined the values, <code>user</code>objects will have. Also we used the <code>sequence</code> method. By reading docs, you can see that with every additional <code>User</code> record, <code>n</code> value gets incremented by one. I.e. the first created user‘s name is going to be <code>test0</code>, the second one’s <code>test1</code>, etc.</p><p>Commit the changes</p><pre><code class="language-bash">git add -A
RSpec.feature "Login", :type =&gt; :feature do
let(:user) { create(:user) }
scenario 'user navigates to the login page and succesfully logs in', js: true do
user
visit root_path
find('nav a', text: 'Login').click
fill_in 'user[email]', with: user.email
fill_in 'user[password]', with: user.password
find('.login-button').click
expect(page).to have_selector('#user-settings')
end
end</code></pre><figcaption>spec/features/user/login_spec.rb</figcaption></figure><p>With this code we simulate a visit to the login page, starting from the home page. Then we fill the form and submit it. Finally, we check if we have the <code>#user-settings</code> element on the navigation bar, which is available only for signed in users.</p><p><code>feature</code> and <code>scenario</code> are part of the Capybara’s syntax. <code>feature</code> is the same as <code>context</code>/<code>describe</code> and <code>scenario</code> is the same as <code>it</code>. More info you can find in Capybara’s docs, <a href="https://github.com/teamcapybara/capybara#using-capybara-with-rspec">Using Capybara With Rspec</a>.</p><p><code><a href="https://relishapp.com/rspec/rspec-core/v/2-5/docs/helper-methods/let-and-let">let</a></code> method allows us to write memorized methods which we could use across all specs within the context, the method was defined.</p><p>Here we also use our created <code>users</code> factory and the <code>create</code> method, which comes with the <code>factory_girl</code> gem.</p><p><code>js: true</code> argument allows to test functionalities which involves JavaScript.</p><p>As always, to see if a test passes, run a specific file. In this case it is the <code>login_spec.rb</code> file:</p><pre><code>rspec spec/features/user/login_spec.rb</code></pre><p>Commit the changes.</p><pre><code class="language-bash">git add -A
RSpec.feature "Logout", :type =&gt; :feature do
let(:user) { create(:user) }
scenario 'user successfully logs out', js: true do
sign_in user
visit root_path
find('nav #user-settings').click
find('nav a', text: 'Log out').click
expect(page).to have_selector('nav a', text: 'Login')
end
end</code></pre><figcaption>spec/features/user/logout_spec.rb</figcaption></figure><p>The code simulates a user clicking the logout button and then expects to see non-logged in user’s links on the navigation bar.</p><p><code>sign_in</code> method is one of the Devise helper methods. We have included those helper methods inside the <code>rails_helper.rb</code> file previously.</p><p>Run the file to see if the test passes.</p><p>Commit the changes.</p><pre><code class="language-bash">git add -A
RSpec.feature "Sign up", :type =&gt; :feature do
let(:user) { build(:user) }
scenario 'user navigates to sign up page and successfully signs up', js: true do
visit root_path
find('nav a', text: 'Signup').click
fill_in 'user[name]', with: user.name
fill_in 'user[email]', with: user.email
fill_in 'user[password]', with: user.password
fill_in 'user[password_confirmation]', with: user.password_confirmation
find('.sign-up-button').click
expect(page).to have_selector('#user-settings')
end
git commit -m "add sign up features specs"</code></pre><p>We’re done with our first tests. So let’s merge the <code>specs</code> branch with the <code>master</code>.</p><pre><code class="language-bash">git checkout master
belongs_to :user
belongs_to :category
end
class User &lt; ApplicationRecord
...
has_many :posts, dependent: :destroy
end
class Category &lt; ApplicationRecord
has_many :posts
def change
create_table :posts do |t|
t.string :title
t.text :content
t.belongs_to :category, index: true
t.belongs_to :user, index: true
t.timestamps
end
end
def change
create_table :categories do |t|
t.string :name
t.string :branch
end
end
end</code></pre><figcaption>db/migrate/CREATION_DATE_create_categories.rb</figcaption></figure><p>Now run the migration files:</p><pre><code class="language-bash">rails db:migrate</code></pre><p>Commit the changes:</p><pre><code class="language-bash">git add -A
git commit -m "
- Generate Post and Category models.
- Create associations between User, Post and Category models.
factory :category do
sequence(:name) { |n| "name#{n}" }
sequence(:branch) { |n| "branch#{n}" }
end
factory :post do
title 'a' * 20
content 'a' * 20
user
category
end
end</code></pre><figcaption>spec/factories/posts.rb</figcaption></figure><p>As you see, it’s very easy to set up an association for factories. All we had to do to set up <code>user</code> and <code>category</code> associations for the <code>post</code> factory, is to write factories’ names inside the <code>post</code> factory.</p><p>Commit the changes.</p><pre><code class="language-bash">git add -A
RSpec.describe Post, type: :model do
context 'Associations' do
it 'belongs_to user' do
association = described_class.reflect_on_association(:user).macro
expect(association).to eq :belongs_to
end
it 'belongs_to category' do
association = described_class.reflect_on_association(:category).macro
expect(association).to eq :belongs_to
end
end
RSpec.describe Category, type: :model do
context 'Associations' do
it 'has_many posts' do
association = described_class.reflect_on_association(:posts)
expect(association.macro).to eq :has_many
end
end
RSpec.describe User, type: :model do
context 'Associations' do
it 'has_many posts' do
association = described_class.reflect_on_association(:posts)
expect(association.macro).to eq :has_many
expect(association.options[:dependent]).to eq :destroy
end
end
end</code></pre><figcaption>spec/models/user_spec.rb</figcaption></figure><p>Commit the changes.</p><pre><code class="language-bash">git add -A
&lt;div class="row"&gt;
&lt;div id="side-menu"  class="col-sm-3"&gt;
&lt;/div&gt;&lt;!-- side-menu --&gt;
&lt;div id="main-content" class="col-sm-9"&gt;
&lt;/div&gt;&lt;!-- main-content --&gt;
&lt;/div&gt;&lt;!-- row --&gt;
background: white;
min-height: 800px;
margin: 0;
padding: 10px 0 0 0;
}
#side-menu {
padding: 0;
#links-list {
margin-top: 20px;
padding: 0;
font-size: 14px;
font-size: 1.4rem;
a {
display: block;
padding: 5px 15px;
margin: 2px 0;
}
li {
min-width: 195px;
max-width: 195px;
}
li, li a {
color: black;
text-decoration: none;
}
li:hover {
border-radius: 50px;
background: $navbarColor;
}
li:hover a, li:hover i {
color: white;
}
}
display: none !important;
git commit -m "
- Add the bootstrap layout to the home page
user_id = 0
10.times do
User.create(
name: "test#{user_id}",
email: "test#{user_id}@test.com",
password: '123456',
password_confirmation: '123456'
)
user_id = user_id + 1
end
end
def seed_categories
hobby = ['Arts', 'Crafts', 'Sports', 'Sciences', 'Collecting', 'Reading', 'Other']
study = ['Arts and Humanities', 'Physical Science and Engineering', 'Math and Logic',
'Computer Science', 'Data Science', 'Economics and Finance', 'Business',
'Social Sciences', 'Language', 'Other']
team = ['Study', 'Development', 'Arts and Hobby', 'Other']
hobby.each do |name|
Category.create(branch: 'hobby', name: name)
end
study.each do |name|
Category.create(branch: 'study', name: name)
end
team.each do |name|
Category.create(branch: 'team', name: name)
end
end
def seed_posts
categories = Category.all
categories.each do |category|
5.times do
Post.create(
title: Faker::Lorem.sentences[0],
content: Faker::Lorem.sentences[0],
user_id: rand(1..9),
category_id: category.id
)
end
end
end
seed_users
seed_categories
seed_posts</code></pre><figcaption>db/seeds.rb</figcaption></figure><p>As you see, we create <code>seed_users</code>, <code>seed_categories</code> and <code>seed_posts</code> methods to create <code>User</code>, <code>Category</code> and <code>Post</code> records inside the development database. Also the <a href="https://github.com/stympy/faker">faker</a> gem is used to generate dummy text. Add <code>faker</code> gem to your <code>Gemfile</code></p><pre><code>gem 'faker'</code></pre><p>and</p><pre><code class="language-bash">bundle install</code></pre><p>To seed data, using the <code>seeds.rb</code> file, run a command</p><pre><code class="language-bash">rails db:seed</code></pre><p>Commit the changes.</p><pre><code class="language-bash">git add -A
git commit -m "
- Add faker gem
- Inside the seeds.rb file create methods to generate
@posts = Post.limit(5)
&lt;h4 class="post-text"&gt;
&lt;%= truncate(post.title, :length =&gt; 60) %&gt;
&lt;/h4&gt;
&lt;div class="post-content"&gt;
&lt;div class="posted-by"&gt;Posted by &lt;%= post.user.name %&gt;&lt;/div&gt;
&lt;h3&gt;&lt;%= post.title %&gt;&lt;/h3&gt;
&lt;p&gt;&lt;%= post.content %&gt;&lt;/p&gt;
&lt;%= link_to "I'm interested", post_path(post.id), class: 'interested' %&gt;
&lt;/div&gt;
&lt;/div&gt;
collection do
get 'hobby'
get 'study'
get 'team'
end
git commit -m "Display posts on the home page
- Generate Posts controller and create an index action.
Inside the index action retrieve Post records
- Declare routes for posts
- Create a _post.html.erb partial inside posts directory
min-height: 135px;
max-height: 135px;
box-shadow: 1px 1px 4px rgba(0,0,0, 0.3);
color: black;
padding: 10px;
text-align: left;
transition: border 0.1s, background 0.5s;
.post-text {
overflow: hidden;
}
a, a:active, a:hover {
color: black;
}
&amp;:hover {
cursor: pointer;
background: white;
box-shadow: none;
border-radius: 1%;
}
}
.post-content {
display: none;
}
// set a solid background color style
if (mode == 1) {
$(this).addClass("solid-color-mode");
$(this).css('background-color', randomColor());
});
}
// set a border color style
else {
$(this).addClass("border-color-mode");
$(this).css('border', '5px solid ' + randomColor());
});
}
}
$('#feed').on( 'mouseenter', '.single-post-list', function() {
$(this).css('border-color', randomColor());
});
$('#feed').on( 'mouseleave', '.single-post-list', function() {
$(this).css('border-color', 'rgba(0, 0 , 0, 0.05)');
});
});
var colorSet = randomColorSet();
var mode = Math.floor(Math.random() * 2);
// Randomly returns a color scheme
function randomColorSet() {
var colorSet1 = ['#45CCFF', '#49E83E', '#FFD432', '#E84B30', '#B243FF'];
var colorSet2 = ['#FF6138', '#FFFF9D', '#BEEB9F', '#79BD8F', '#79BD8F'];
var colorSet3 = ['#FCFFF5', '#D1DBBD', '#91AA9D', '#3E606F', '#193441'];
var colorSet4 = ['#004358', '#1F8A70', '#BEDB39', '#FFE11A', '#FD7400'];
var colorSet5 = ['#105B63', '#FFFAD5', '#FFD34E', '#DB9E36', '#BD4932'];
var colorSet6 = ['#04BFBF', '#CAFCD8', '#F7E967', '#A9CF54', '#588F27'];
var colorSet7 = ['#405952', '#9C9B7A', '#FFD393', '#FF974F', '#F54F29'];
var randomSet = [colorSet1, colorSet2, colorSet3, colorSet4, colorSet5, colorSet6, colorSet7];
return randomSet[Math.floor(Math.random() * randomSet.length )];
}
// Randomly returns a color from an array of colors
function randomColor() {
var color = colorSet[Math.floor(Math.random() * colorSet.length)];
return color;
}</code></pre><figcaption>assets/javascripts/posts/style.js</figcaption></figure><p>With this piece of code we randomly set one of two style modes when a browser gets refreshed, by adding attributes to posts. One style has colored borders only, another style has solid color posts. With every page change and browser refresh we also recolor posts randomly too. Inside the <code>randomColorSet()</code> function you can see predefined color schemes.</p><p><code>mouseenter</code> and <code>mouseleave</code> event handlers are going to be needed in the future for posts in specific pages. There posts’ style is going to be different than posts’ on the home page. When you’ll hover on a post, it will slightly change its bottom border’s color. You’ll see this later.</p><p>Commit the changes.</p><pre><code class="language-bash">git add -A
.solid-color-mode, .border-color-mode {
.post-text {
text-align: center;
}
}
.solid-color-mode {
.post-text {
padding: 10px;
background-color: white;
border-radius: 25px;
}
}
.border-color-mode {
background-color: white;
.solid-color-mode, .border-color-mode {
.post-text {
font-size: 16px;
}
}
git commit -m "Add CSS to posts on the home page
- add CSS to the posts.scss file
&lt;div  class="modal myModal"
tabindex="-1"
role="dialog"
aria-labelledby="myModalLabel"&gt;
&lt;div class="modal-dialog modal-lg" role="document"&gt;
&lt;div class="modal-content"&gt;
&lt;div class="modal-header"&gt;
&lt;span class="posted-by"&gt;&lt;/span&gt;
&lt;button type="button"
class="close"
data-dismiss="modal"
aria-label="Close"&gt;
&lt;span aria-hidden="true"&gt;&amp;times;&lt;/span&gt;
&lt;/button&gt;
&lt;/div&gt;
&lt;div class="modal-body"&gt;
&lt;div class="loaded-data"&gt;
&lt;h3&gt;&lt;/h3&gt;
&lt;p&gt;&lt;/p&gt;
&lt;div class="interested"&gt;&lt;a href=""&gt;I'm interested&lt;/a&gt;&lt;/div&gt;
&lt;/div&gt;&lt;!-- loaded-data --&gt;
&lt;/div&gt;&lt;!-- modal-body --&gt;
&lt;/div&gt;
&lt;/div&gt;
// when a post is clicked, show its full content in a modal window
var posted_by = $(this).find('.post-content .posted-by').html();
var post_heading = $(this).find('.post-content h3').html();
var post_content = $(this).find('.post-content p').html();
var interested = $(this).find('.post-content .interested').attr('href');
$('.modal-header .posted-by').text(posted_by);
$('.loaded-data h3').text(post_heading);
$('.loaded-data p').text(post_content);
$('.loaded-data .interested a').attr('href', interested);
$('.myModal').modal('show');
});
h3 {
text-align: center;
}
p {
margin: 50px 0;
}
.posted-by {
color: rgba(0,0,0,0.5);
}
}
.modal-content {
.loaded-data {
h3, p {
overflow: hidden;
}
padding: 0 10px;
.posted-by {
margin: 0;
}
}
}
.interested {
text-align: center;
a {
background-color: $navbarColor;
padding: 10px;
color: white;
border-radius: 10px;
&amp;:hover {
background-color: black;
color: white;
}
}
git commit -m "Add a popup window to show a full post's content
- Add bootstrap's modal component to show full post's content
- Render the modal inside the home page's template
- Add js to fill the modal with post's content and show it
- Add CSS to style the modal"</code></pre><p>Also merge the <code>main_feed</code> branch with the <code>master</code></p><pre><code class="language-bash">git checkout master
def show
@post = Post.find(params[:id])
end
&lt;div class="row"&gt;
&lt;div class="col-sm-6 col-sm-offset-3"&gt;
&lt;div class="posted-by"&gt;Posted by &lt;%= @post.user.name %&gt;&lt;/div&gt;
&lt;h3&gt;&lt;%= @post.title %&gt;&lt;/h3&gt;
&lt;p&gt;&lt;%= @post.content %&gt;&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- row --&gt;
background: white;
height: calc(100vh - 50px);
h3 {
text-align: center;
}
p {
margin: 50px 0;
}
.posted-by {
font-size: 12px;
font-size: 1.2rem;
margin: 20px 0;
color: rgba(0,0,0,0.5);
}
git commit -m "Create a show template for posts
- Add a show action and query a post to an instance variable
RSpec.feature "Visit single post", :type =&gt; :feature do
let(:user) { create(:user) }
let(:post) { create(:post) }
scenario "User goes to a single post from the home page", js: true do
post
visit root_path
expect(page).to have_selector('body .modal')
page.find('.interested a').click
expect(page).to have_selector('#single-post-content p', text: post.content)
end
end</code></pre><figcaption>spec/features/posts/visit_single_post_spec.rb</figcaption></figure><p>Here I defined all steps which I would perform manually. I start by going to the home page, click on the post, expect to see the popped up modal window, click on the <code>I'm interested</code> button, and finally, expect to be redirected to the post’s page and see its content.</p><p>By default RSpec matchers <code>have_selector</code>, <code>have_css</code>, etc. return true if an element is actually visible to a user. So after it was clicked on a post, testing framework expects to see a visible modal window. If you don’t care if a user sees an element or not and you just care about an element’s presence in the DOM, pass an additional <code>visible: false</code> argument.</p><p>Try to run the test</p><pre><code>rspec spec/features/posts/visit_single_post_spec.rb</code></pre><p>Commit the changes.</p><pre><code class="language-bash">git add -A
git commit -m "Add a feature spec to test if a user can go to a
single post from the home page"</code></pre><p>Merge the <code>single_post</code> branch with the <code>master</code>.</p><pre><code class="language-bash">git checkout master
git merge single_post
&lt;%= render @posts %&gt;
&lt;div class="container"&gt;
&lt;div class="row"&gt;
&lt;%= render 'pages/index/side_menu' %&gt;
&lt;%= render 'pages/index/main_content' %&gt;
&lt;/div&gt;&lt;!-- row --&gt;
&lt;/div&gt;&lt;!-- container --&gt;</code></pre><figcaption>views/pages/index.html.erb</figcaption></figure><p>Commit the changes.</p><pre><code class="language-bash">git add -A
&lt;ul id="links-list"&gt;
&lt;%= render 'pages/index/side_menu/no_login_required_links' %&gt;
&lt;/ul&gt;
&lt;%= link_to hobby_posts_path do %&gt;
&lt;i class="fa fa-user-circle-o" aria-hidden="true"&gt;&lt;/i&gt; Find a hobby buddy
&lt;% end %&gt;
&lt;/li&gt;
&lt;li id="study"&gt;
&lt;%= link_to study_posts_path do %&gt;
&lt;i class="fa fa-graduation-cap" aria-hidden="true"&gt;&lt;/i&gt; Find a study buddy
&lt;% end %&gt;
&lt;/li&gt;
&lt;li id="team"&gt;
&lt;%= link_to team_posts_path do %&gt;
&lt;i class="fa fa-users" aria-hidden="true"&gt;&lt;/i&gt; Find a team member
&lt;% end %&gt;
@media only screen and (min-width:767px) and (max-width: 1000px) {
.container {
width: 100% !important;
}
}</code></pre><figcaption>assets/stylesheets/responsive/mobile.scss</figcaption></figure><p>Commit the change.</p><pre><code class="language-bash">git add -A
git commit -m "set .container width to 100%
def hobby
posts_for_branch(params[:action])
end
def study
posts_for_branch(params[:action])
end
def team
posts_for_branch(params[:action])
end
private
def posts_for_branch(branch)
@categories = Category.where(branch: branch)
@posts = get_posts.paginate(page: params[:page])
end
def get_posts
Post.limit(30)
end
&lt;div class="row"&gt;
&lt;h1 class="page-title"&gt;&lt;%= page_title %&gt;&lt;/h1&gt;
&lt;%= render 'posts/branch/create_new_post', branch: branch %&gt;
&lt;/div&gt;&lt;!-- row --&gt;
&lt;div class="row"&gt;
&lt;%= render 'posts/branch/categories', branch: branch %&gt;
&lt;/div&gt;
&lt;div class="row"&gt;
&lt;div class="col-sm-12" id="feed"&gt;
&lt;%= render @posts %&gt;
&lt;%= render no_posts_partial_path %&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- row --&gt;
&lt;div class="infinite-scroll"&gt;
&lt;%= will_paginate @posts %&gt;
&lt;/div&gt;
&lt;div class="col-sm-8 col-sm-offset-2"&gt;
&lt;%= render create_new_post_partial_path, branch: branch %&gt;
&lt;/div&gt;&lt;!-- col-sm-8 --&gt;
def create_new_post_partial_path
if user_signed_in?
'posts/branch/create_new_post/signed_in'
else
'posts/branch/create_new_post/not_signed_in'
end
end
&lt;span&gt;Cannot find anyone? Try to: &lt;/span&gt;
&lt;%= link_to "Create a new post",
new_post_path(branch: branch),
:class =&gt; "new-post-button" %&gt;
To create a new post you have to
&lt;%= link_to 'Login',
login_path,
class: 'login-button login-button-branch' %&gt;
&lt;div class="col-sm-12"&gt;
&lt;ul class="categories-list"&gt;
&lt;%= render all_categories_button_partial_path,
branch_path_name: branch_path_name %&gt;
&lt;% @categories.each do |category| %&gt;
&lt;li class="category-item"&gt;
&lt;%= link_to category.name,
send(branch_path_name, category: category.name),
:class =&gt; ("selected-item" if params[:category] == category.name) %&gt;
&lt;/li&gt;
&lt;% end %&gt;
&lt;/ul&gt;
def all_categories_button_partial_path
if params[:category].blank?
'posts/branch/categories/all_selected'
else
'posts/branch/categories/all_not_selected'
end
end
&lt;%= link_to "All",
send(branch_path_name),
:class =&gt; "selected-item"  %&gt;
&lt;%= link_to "All", send(branch_path_name) %&gt;
def no_posts_partial_path
@posts.empty? ? 'posts/branch/no_posts' : 'shared/empty_partial'
end
&lt;%= render partial: 'posts/branch', locals: {
branch: 'hobby',
page_title: 'Find a person with the same hobby',
search_placeholder: 'E.g. guitar playing, programming, cooking'
&lt;%= render partial: 'posts/branch', locals: {
branch: 'study',
page_title: 'Find a person who studies the same field as you',
search_placeholder: 'E.g. nutrition, calculus, astrophysics'
&lt;%= render partial: 'posts/branch', locals: {
branch: 'team',
page_title: 'Find a person with similar interests as yours to your team',
search_placeholder: 'E.g. musician for a band, developer for a project'
git commit -m "Create branch pages for specific posts
- Inside the PostsController define hobby, study and team actions.
Define a posts_for_branch method and call it inside these actions
- Add will_paginate gem
- Create a _branch.html.erb partial file
- Create a _create_new_post.html.erb partial file
- Define a create_new_post_partial_path helper method
- Create a _signed_in.html.erb partial file
- Create a _not_signed_in.html.erb partial file
- Create a _categories.html.erb partial file
- Define a all_categories_button_partial_path helper method
- Create a _all_selected.html.erb partial file
- Create a _all_not_selected.html.erb partial file
- Define a no_posts_partial_path helper method
- Create a _no_posts.html.erb partial file
- Create a hobby.html.erb template file
- Create a study.html.erb template file
RSpec.describe PostsHelper, :type =&gt; :helper do
context '#create_new_post_partial_path' do
it "returns a signed_in partial's path" do
helper.stub(:user_signed_in?).and_return(true)
expect(helper.create_new_post_partial_path). to (
eq 'posts/branch/create_new_post/signed_in'
)
end
it "returns a signed_in partial's path" do
helper.stub(:user_signed_in?).and_return(false)
expect(helper.create_new_post_partial_path). to (
eq 'posts/branch/create_new_post/not_signed_in'
)
end
end
context '#all_categories_button_partial_path' do
it "returns an all_selected partial's path" do
controller.params[:category] = ''
expect(helper.all_categories_button_partial_path).to (
eq 'posts/branch/categories/all_selected'
)
end
it "returns an all_not_selected partial's path" do
controller.params[:category] = 'category'
expect(helper.all_categories_button_partial_path).to (
eq 'posts/branch/categories/all_not_selected'
)
end
end
context '#no_posts_partial_path' do
it "returns a no_posts partial's path" do
assign(:posts, [])
expect(helper.no_posts_partial_path).to (
eq 'posts/branch/no_posts'
)
end
it "returns an empty partial's path" do
assign(:posts, [1])
expect(helper.no_posts_partial_path).to (
eq 'shared/empty_partial'
)
end
end
end</code></pre><figcaption>spec/helpers/posts_helper_spec.rb</figcaption></figure><p>Again, specs are pretty simple here. I used the <code>stub</code> method to define methods’ return values. To define params, I selected the controller and simply defined it like this <code>controller.params[:param_name]</code>. And finally, I assigned instance variables by using an <a href="https://relishapp.com/rspec/rspec-rails/docs/helper-specs/helper-spec#helper-method-that-accesses-an-instance-variable" rel="nofollow noopener">assign</a> method.</p><p>Commit the changes</p><pre><code class="language-bash">git add -A
&lt;%= truncate(post.title, :length =&gt; 60) %&gt;
&lt;div class="post-content"&gt;
&lt;div class="posted-by"&gt;Posted by &lt;%= post.user.name %&gt;&lt;/div&gt;
&lt;h3&gt;&lt;%= post.title %&gt;&lt;/h3&gt;
&lt;p&gt;&lt;%= post.content %&gt;&lt;/p&gt;
&lt;%= link_to "I'm interested", post_path(post.id), class: 'interested' %&gt;
&lt;/div&gt;
current_page?(root_path) ? 'posts/post/home_page' : 'posts/post/branch_page'
context '#post_format_partial_path' do
it "returns a home_page partial's path" do
helper.stub(:current_page?).and_return(true)
expect(helper.post_format_partial_path).to (
eq 'posts/post/home_page'
)
end
it "returns a branch_page partial's path" do
helper.stub(:current_page?).and_return(false)
expect(helper.post_format_partial_path).to (
eq 'posts/post/branch_page'
)
end
end
...</code></pre><figcaption>helpers/posts_helper_spec.rb</figcaption></figure><p>Commit the changes</p><pre><code class="language-bash">git add -A
min-height: 45px;
max-height: 45px;
padding: 10px 20px 10px 0px;
margin: 0 10px;
border-bottom: solid 3px rgba(0, 0 , 0, 0.05);
border-bottom-right-radius: 10%;
transition: border-color 0.1s;
overflow: hidden;
&amp;:hover {
cursor: pointer;
}
}
.page-title {
margin: 30px 0;
text-align: center;
background-color: white !important;
font-weight: bold;
a {
color: black;
}
a:hover {
text-decoration: underline;
}
}
.categories-list {
margin: 10px 0;
padding: 0;
}
.category-item {
display: inline-block;
margin: 15px 0;
a {
font-size: 16px;
font-size: 1.6rem;
color: rgba(0,0,0,0.7);
border: solid 2px rgba(0,0,0,0.4);
border-radius: 8%;
padding: 10px;
}
a:hover, .selected-item {
background: $navbarColor;
color: white;
border: solid 2px white;
border-radius: 0px;
}
}
.new-post-button-parent {
text-align: right;
span {
font-size: 12px;
font-size: 1.2rem;
}
}
.new-post-button {
display: inline-block;
background: $navbarColor;
color: white;
padding: 8px;
border-radius: 10px;
font-weight: bold;
border: solid 2px $navbarColor;
margin: 10px 0;
&amp;:hover, &amp;:active, &amp;:focus {
background: white;
color: black;
}
}
.login-branch {
margin: 10px 0;
}
.login-button-branch {
padding: 5px 10px;
border-radius: 10px;
&amp;:hover, &amp;:active, &amp;:visited, &amp;:link {
color: white;
}
}
#branch-main-content {
background: white;
height: calc(100vh - 50px);
}
#feed {
background-color: white;
.login-button, .sign-up-button {
background-color: $navbarColor;
color: white !important;
@media screen and (max-width: 550px) {
.page-title {
font-size: 20px;
font-size: 2rem;
}
.new-post-button-parent {
text-align: center;
span {
display: none !important;
}
}
.post-button {
padding: 5px;
}
.category-item {
a {
padding: 5px;
}
}
}
@media screen and (max-width: 767px) {
.single-post-list {
min-height: 65px;
max-height: 65px;
padding: 10px 0;
}
}
git commit -m "Describe the posts style in branch pages
- Create a branch_page.scss file and add CSS
- Add CSS to the default.scss file
&lt;div class="row"&gt;
&lt;%= render  'posts/branch/search_form',
branch: branch,
search_placeholder: search_placeholder %&gt;
&lt;/div&gt;&lt;!-- row --&gt;
&lt;%= form_tag(send("#{branch}_posts_path"),
:method =&gt; "get",
id: "search-form") do %&gt;
&lt;i class="fa fa-search" aria-hidden="true"&gt;&lt;/i&gt;
&lt;%= text_field_tag  :search,
params[:search],
placeholder: search_placeholder,
class: "form-control" %&gt;
&lt;%= render category_field_partial_path %&gt;
&lt;% end %&gt;
def category_field_partial_path
if params[:category].present?
'posts/branch/search_form/category_field'
else
'shared/empty_partial'
end
end
position:absolute;
bottom:14px;
left:10px;
width:20px;
height:10px;
}
#search-form {
position:relative;
input {
border: solid 2px rgba(0,0,0,0.2);
border-radius: 10px;
box-shadow: none;
outline: 0;
}
input:focus {
border: solid 2px rgba(0,0,0,0.35);
}
input#search {
padding: 15px;
width: 100%;
height:20px;
margin: 10px 0;
padding-left: 30px;
}
git commit -m "Add a search form in branch pages
- Render a search form inside the _branch.html.erb
- Create a _search_form.html.erb partial file
- Define a category_field_partial_path helper method in PostsHelper
- Create a _category_field.html.erb partial file
default_scope -&gt; { includes(:user).order(created_at: :desc) }
...</code></pre><figcaption>models/post.rb</figcaption></figure><p>Commit the change</p><pre><code class="language-bash">git add -A
it 'default_scope orders by descending created_at' do
first_post = create(:post)
second_post = create(:post)
expect(Post.all).to eq [second_post, first_post]
end
end</code></pre><figcaption>spec/models/post_spec.rb</figcaption></figure><p>Commit the change:</p><pre><code class="language-bash">git add -A
branch = params[:action]
search = params[:search]
category = params[:category]
if category.blank? &amp;&amp; search.blank?
posts = Post.by_branch(branch).all
elsif category.blank? &amp;&amp; search.present?
posts = Post.by_branch(branch).search(search)
elsif category.present? &amp;&amp; search.blank?
posts = Post.by_category(branch, category)
elsif category.present? &amp;&amp; search.present?
posts = Post.by_category(branch, category).search(search)
else
end
scope :by_category, -&gt; (branch, category_name) do
joins(:category).where(categories: {name: category_name, branch: branch})
end
scope :by_branch, -&gt; (branch) do
joins(:category).where(categories: {branch: branch})
end
scope :search, -&gt; (search) do
where("title ILIKE lower(?) OR content ILIKE lower(?)", "%#{search}%", "%#{search}%")
end
...</code></pre><figcaption>models/post.rb</figcaption></figure><p>The <code><a href="http://guides.rubyonrails.org/active_record_querying.html#joins" rel="nofollow noopener">joins</a></code> method is used to query records from the associated tables. Also the &nbsp;basic SQL syntax is used to find records, based on provided strings.</p><p>Now &nbsp;if you restart the server and go back to any of those branch pages, the &nbsp;search bar should work! Also now you can filter posts by clicking on &nbsp;category buttons. And also when you select a particular category, only &nbsp;posts from that category are queried when you use the search form.</p><p>Commit the changes</p><pre><code class="language-bash">git add -A
git commit -m "Make search bar and category filters
in branch pages functional
- Add by_category, by_branch and search scopes in the Post model
it 'by_category scope gets posts by particular category' do
category = create(:category)
create(:post, category_id: category.id)
create_list(:post, 10)
posts = Post.by_category(category.branch, category.name)
expect(posts.count).to eq 1
expect(posts[0].category.name).to eq category.name
end
it 'by_branch scope gets posts by particular branch' do
category = create(:category)
create(:post, category_id: category.id)
create_list(:post, 10)
posts = Post.by_branch(category.branch)
expect(posts.count).to eq 1
expect(posts[0].category.branch).to eq category.branch
end
it 'search finds a matching post' do
post = create(:post, title: 'awesome title', content: 'great content ' * 5)
create_list(:post, 10, title: ('a'..'c' * 2).to_a.shuffle.join)
expect(Post.search('awesome').count).to eq 1
expect(Post.search('awesome')[0].id).to eq post.id
expect(Post.search('great').count).to eq 1
expect(Post.search('great')[0].id).to eq post.id
end
...</code></pre><figcaption>spec/models/post_spec.rb</figcaption></figure><p>Commit the changes</p><pre><code class="language-bash">git add -A
git commit -m "Add specs for Post model's
var isLoading = false;
if ($('.infinite-scroll', this).size() &gt; 0) {
$(window).on('scroll', function() {
var more_posts_url = $('.pagination a.next_page').attr('href');
var threshold_passed = $(window).scrollTop() &gt; $(document).height() - $(window).height() - 60;
if (!isLoading &amp;&amp; more_posts_url &amp;&amp; threshold_passed) {
isLoading = true;
$.getScript(more_posts_url).done(function (data,textStatus,jqxhr) {
isLoading = false;
}).fail(function() {
isLoading = false;
});
}
});
}
format.html
format.js { render partial: 'posts/posts_pagination_page' }
if @posts.next_page
'posts/posts_pagination_page/update_pagination'
else
'posts/posts_pagination_page/remove_pagination'
end
.infinite-scroll {
display: none;
}
...</code></pre><figcaption>stylesheets/partials/posts/branch_page.scss</figcaption></figure><p>Commit the changes</p><pre><code class="language-bash">git add -A
git commit -m "Transform posts pagination into infinite scroll
- Create an infinite_scroll.js file
- Inside PostController's posts_for_branch method add respond_to format
- Define an update_pagination_partial_path
- Create _update_pagination.js.erb and _remove_pagination.js.erb partials
it "returns an update_pagination partial's path" do
posts = double('posts', :next_page =&gt; 2)
assign(:posts, posts)
expect(helper.update_pagination_partial_path).to(
eq 'posts/posts_pagination_page/update_pagination'
)
end
it "returns a remove_pagination partial's path" do
posts = double('posts', :next_page =&gt; nil)
assign(:posts, posts)
expect(helper.update_pagination_partial_path).to(
eq 'posts/posts_pagination_page/remove_pagination'
)
end
end</code></pre><figcaption>spec/helpers/post_helper_spec.rb</figcaption></figure><p>Here I’ve used a test <code>double</code> to simulate the <code>posts</code> instance variable and its chained method <code>next_page</code>. You can learn more about the RSpec Mocks <a href="https://relishapp.com/rspec/rspec-mocks/docs" rel="nofollow noopener">here</a>.</p><p>Commit the changes:</p><pre><code class="language-bash">git add -A
git commit -m "Add specs for the update_pagination_partial_path
RSpec.feature "Infinite scroll", :type =&gt; :feature do
Post.per_page = 15
let(:check_posts_count) do
expect(page).to have_selector('.single-post-list', count: 15)
page.execute_script("$(window).scrollTop($(document).height())")
expect(page).to have_selector('.single-post-list', count: 30)
end
scenario "User scrolls down the hobby page
and posts list will be appended with older posts", js: true do
create_list(:post, 30, category: create(:category, branch: 'hobby'))
visit hobby_posts_path
check_posts_count
end
scenario "User scrolls down the study page
and posts list will be appended with older posts", js: true do
create_list(:post, 30, category: create(:category, branch: 'study'))
visit study_posts_path
check_posts_count
end
scenario "User scrolls down the team page
and posts list will be appended with older posts", js: true do
create_list(:post, 30, category: create(:category, branch: 'team'))
visit team_posts_path
check_posts_count
end
end</code></pre><figcaption>spec/features/posts/infinite_scroll_spec.rb</figcaption></figure><p>In the spec file all branch pages are covered. We make sure that this functionality works on all three pages. The <code>per_page</code> is <code>will_paginate</code> gem’s method. Here the <code>Post</code> model is selected and the default number of posts per page is set.</p><p>The <code>check_posts_count</code> method is defined to reduce the amount of code the file has. Instead of &nbsp;repeating the same code over and over again in different specs, we &nbsp;extracted it into a single method. Once the page is visited, it is &nbsp;expected to see 15 posts. Then the <code>execute_script</code> method is used to run JavaScript, which scrolls the scrollbar to the &nbsp;browser’s bottom. Finally, after the scroll, it is expected to see an &nbsp;additional 15 posts. Now in total there should be 30 posts on the page.</p><p>Commit the changes:</p><pre><code class="language-bash">git add -A
&lt;h3 class="page-name"&gt;&lt;%= link_to 'Hobby', hobby_posts_path %&gt;&lt;/h3&gt;
&lt;div class="row"&gt;
&lt;%= render @hobby_posts %&gt;
&lt;%= render no_posts_partial_path(@hobby_posts) %&gt;
&lt;/div&gt;&lt;!-- row --&gt;
&lt;h3 class="page-name"&gt;&lt;%= link_to 'Study', study_posts_path %&gt;&lt;/h3&gt;
&lt;div class="row"&gt;
&lt;%= render @study_posts %&gt;
&lt;%= render no_posts_partial_path(@study_posts) %&gt;
&lt;/div&gt;&lt;!-- row --&gt;
&lt;h3 class="page-name"&gt;&lt;%= link_to 'Team member', team_posts_path %&gt;&lt;/h3&gt;
&lt;div class="row"&gt;
&lt;%= render @team_posts %&gt;
&lt;%= render no_posts_partial_path(@team_posts) %&gt;
&lt;/div&gt;&lt;!-- row --&gt;
@hobby_posts = Post.by_branch('hobby').limit(8)
@study_posts = Post.by_branch('study').limit(8)
@team_posts = Post.by_branch('team').limit(8)
posts.empty? ? 'posts/shared/no_posts' : 'shared/empty_partial'
.container {
padding: 0;
}
.row {
margin: 0;
margin: 15px 0px 15px 0px;
text-align: center;
background-color: white !important;
font-weight: bold;
a {
color: black;
}
a:hover {
text-decoration: underline;
}
}
git commit -m "Add posts from all branches in the home page
- Modify the _main_content.html.erb file
- Define instance variables inside the PagesController’s index action
- Modify the no_posts_partial_path helper method to be more reusable
branch = params[:action]
search = params[:search]
category = params[:category]
if category.blank? &amp;&amp; search.blank?
posts = Post.by_branch(branch).all
elsif category.blank? &amp;&amp; search.present?
posts = Post.by_branch(branch).search(search)
elsif category.present? &amp;&amp; search.blank?
posts = Post.by_category(branch, category)
elsif category.present? &amp;&amp; search.present?
posts = Post.by_category(branch, category).search(search)
else
end
def initialize(params)
@search = params[:search]
@category = params[:category]
@branch = params[:branch]
end
# get posts depending on the request
def call
if @category.blank? &amp;&amp; @search.blank?
posts = Post.by_branch(@branch).all
elsif @category.blank? &amp;&amp; @search.present?
posts = Post.by_branch(@branch).search(@search)
elsif @category.present? &amp;&amp; @search.blank?
posts = Post.by_category(@branch, @category)
elsif @category.present? &amp;&amp; @search.present?
posts = Post.by_category(@branch, @category).search(@search)
else
end
end
PostsForBranchService.new({
search: params[:search],
category: params[:category],
branch: params[:action]
}).call
end</code></pre><figcaption>controllers/posts_controller.rb</figcaption></figure><p>Commit the changes:</p><pre><code class="language-bash">git add -A
git commit -m "Create a service object to extract logic
require './app/services/posts_for_branch_service.rb'
describe PostsForBranchService do
context '#call' do
let(:not_included_posts) { create_list(:post, 2) }
let(:category) { create(:category, branch: 'hobby', name: 'arts') }
let(:post) do
create(:post,
title: 'a very fun post',
category_id: category.id)
end
it 'returns posts filtered by a branch' do
not_included_posts
category
included_posts = create_list(:post, 2, category_id: category.id)
expect(PostsForBranchService.new({branch: 'hobby'}).call).to(
match_array included_posts
)
end
it 'returns posts filtered by a branch and a search input' do
not_included_posts
category
included_post = [] &lt;&lt; post
expect(PostsForBranchService.new({branch: 'hobby', search: 'fun'}).call).to(
eq included_post
)
end
it 'returns posts filtered by a category name' do
not_included_posts
category
included_post = [] &lt;&lt; post
expect(PostsForBranchService.new({branch: 'hobby', category: 'arts'}).call).to(
eq included_post
)
end
it 'returns posts filtered by a category name and a search input' do
not_included_posts
category
included_post = [] &lt;&lt; post
expect(PostsForBranchService.new({name: 'arts',
search: 'fun',
branch: 'hobby'}).call).to eq included_post
end
end
end</code></pre><figcaption>spec/services/posts_for_branch_service_spec.rb</figcaption></figure><p>At the top of the file, the <code>posts_for_branch_service.rb</code> file is loaded and then each of the <code>call</code> method’s conditions are tested.</p><p>Commit the changes</p><pre><code class="language-bash">git add -A
def new
@branch = params[:branch]
@categories = Category.where(branch: @branch)
@post = Post.new
end
def create
@post = Post.new(post_params)
if @post.save
redirect_to post_path(@post)
else
redirect_to root_path
end
end
def post_params
params.require(:post).permit(:content, :title, :category_id)
.merge(user_id: current_user.id)
end
before_action :redirect_if_not_signed_in, only: [:new]
def redirect_if_not_signed_in
redirect_to root_path if !user_signed_in?
end
def redirect_if_signed_in
redirect_to root_path if user_signed_in?
end
&lt;div class="row"&gt;
&lt;div class="col-sm-6 col-sm-offset-3"&gt;
&lt;h1&gt;Create a new post&lt;/h1&gt;
&lt;%= render 'posts/new/post_form' %&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;%= f.text_field  :title,
maxlength: 100,
placeholder: 'Title',
class: 'form-control',
required: true,
minlength: 5,
maxlength: 100 %&gt;
&lt;%= f.hidden_field :branch, :value =&gt; @branch %&gt;
&lt;%= f.text_area :content,
rows: 6,
required: true,
minlength: 20,
maxlength: 1000,
placeholder: 'Describe what you are looking for. E.g. specific interests, expertise level, etc.',
class: 'form-control' %&gt;
&lt;%= f.collection_select :category_id, @categories, :id, :name, class: 'form-control' %&gt;
&lt;%= f.submit "Create a post", class: 'form-control' %&gt;
&lt;% end %&gt;</code></pre><figcaption>posts/new/_post_form.html.erb</figcaption></figure><p>The form is pretty straightforward. Attributes of the fields are defined and the <code>collection_select</code> method is used to allow to select one of the available categories.</p><p>Commit the changes</p><pre><code class="language-bash">git add -A
git commit -m "Create a UI to create new posts
- Inside the PostsController:
define new and create actions
define a post_params method
define a before_action filter
- Inside the ApplicationController:
define a redirect_if_not_signed_in method
define a redirect_if_signed_in method
include Warden::Test::Helpers
RSpec.describe "new", :type =&gt; :request do
context 'non-signed in user' do
it 'redirects to a root path' do
get '/posts/new'
expect(response).to redirect_to(root_path)
end
end
context 'signed in user' do
let(:user) { create(:user) }
before(:each) { login_as user }
it 'renders a new template' do
get '/posts/new'
expect(response).to render_template(:new)
end
end
end</code></pre><figcaption>spec/requests/posts/new_spec.rb</figcaption></figure><p>As &nbsp;mentioned in the documentation, request specs provide a thin wrapper &nbsp;around the integration tests. So we test if we get correct responses &nbsp;when we send certain requests. The <code>include Warden::Test::Helpers</code> line is required in order to use <code>login_as</code> method. The method logs a user in.</p><p>Commit the change.</p><pre><code class="language-bash">git add -A
include Warden::Test::Helpers
RSpec.describe "branches", :type =&gt; :request do
shared_examples 'render_templates' do
it 'renders a hobby template' do
get '/posts/hobby'
expect(response).to render_template(:hobby)
end
it 'renders a study template' do
get '/posts/study'
expect(response).to render_template(:study)
end
it 'renders a team template' do
get '/posts/team'
expect(response).to render_template(:team)
end
end
context 'non-signed in user' do
it_behaves_like 'render_templates'
end
context 'signed in user' do
let(:user) { create(:user) }
before(:each) { login_as user }
it_behaves_like 'render_templates'
end
end</code></pre><figcaption>spec/requests/posts/branches_spec.rb</figcaption></figure><p>This way we check that all branch pages’ templates successfully render. Also the <code><a href="https://relishapp.com/rspec/rspec-core/docs/example-groups/shared-examples" rel="nofollow noopener">shared_examples</a></code> is used to reduce the repetitive code.</p><p>Commit the change.</p><pre><code class="language-bash">git add -A
include Warden::Test::Helpers
RSpec.describe "show", :type =&gt; :request do
shared_examples 'render_show_template' do
let(:post) { create(:post) }
it 'renders a show template' do
get post_path(post)
expect(response).to render_template(:show)
end
end
context 'non-signed in user' do
it_behaves_like 'render_show_template'
end
context 'signed in user' do
let(:user) { create(:user) }
before(:each) { login_as user }
it_behaves_like 'render_show_template'
end
end</code></pre><figcaption>spec/requests/posts/show_spec.rb</figcaption></figure><p>Commit the changes.</p><pre><code class="language-bash">git add -A
RSpec.feature "Create a new post", :type =&gt; :feature do
let(:user) { create(:user) }
before(:each) { sign_in user }
shared_examples 'user creates a new post' do |branch|
scenario 'successfully' do
create(:category, name: 'category', branch: branch)
visit send("#{branch}_posts_path")
find('.new-post-button').click
fill_in 'post[title]', with: 'a' * 20
fill_in 'post[content]', with: 'a' * 20
select 'category', from: 'post[category_id]'
click_on 'Create a post'
expect(page).to have_selector('h3', text: 'a' * 20)
end
end
include_examples 'user creates a new post', 'hobby'
include_examples 'user creates a new post', 'study'
include_examples 'user creates a new post', 'team'
end</code></pre><figcaption>spec/features/posts/create_new_post_spec.rb</figcaption></figure><p>Commit the changes.</p><pre><code class="language-bash">git add -A
height: calc(100vh - 50px);
background-color: white;
h1 {
text-align: center;
margin: 25px 0;
}
input, textarea, select {
width: 100%;
}
validates :title, presence: true, length: { minimum: 5, maximum: 255 }
validates :content, presence: true, length: { minimum: 20, maximum: 1000 }
validates :category_id, presence: true
...</code></pre><figcaption>models/post.rb</figcaption></figure><p>Commit the changes.</p><pre><code class="language-bash">git add -A
let(:post) { build(:post) }
it 'creates succesfully' do
expect(post).to be_valid
end
it 'is not valid without a category' do
post.category_id = nil
expect(post).not_to be_valid
end
it 'is not valid without a title' do
post.title = nil
expect(post).not_to be_valid
end
it 'is not valid  without a user_id' do
post.user_id = nil
expect(post).not_to be_valid
end
it 'is not valid  with a title, shorter than 5 characters' do
post.title = 'a' * 4
expect(post).not_to be_valid
end
it 'is not valid  with a title, longer than 255 characters' do
post.title = 'a' * 260
expect(post).not_to be_valid
end
it 'is not valid without a content' do
post.content = nil
expect(post).not_to be_valid
end
it 'is not valid  with a content, shorter than 20 characters' do
post.content = 'a' * 10
expect(post).not_to be_valid
end
it 'is not valid  with a content, longer than 1000 characters' do
post.content = 'a' * 1050
expect(post).not_to be_valid
end
end </code></pre><figcaption>spec/models/post_spec.rb</figcaption></figure><p>Commit the changes.</p><pre><code class="language-bash">git add -A
git commit -m "Add specs for the Post model's validations"</code></pre><p>Merge the <code>specific_branches</code> branch with the <code>master</code></p><pre><code class="language-bash">git checkout -b master
git merge specific_branches
self.table_name = 'private_conversations'
self.table_name = 'private_messages'
has_many :messages,
class_name: "Private::Message",
foreign_key: :conversation_id
belongs_to :sender, foreign_key: :sender_id, class_name: 'User'
belongs_to :recipient, foreign_key: :recipient_id, class_name: 'User'
belongs_to :user
belongs_to :conversation,
class_name: 'Private::Conversation',
foreign_key: :conversation_id
has_many :private_messages, class_name: 'Private::Message'
has_many  :private_conversations,
foreign_key: :sender_id,
class_name: 'Private::Conversation'
def change
create_table :private_conversations do |t|
t.integer :recipient_id
t.integer :sender_id
t.timestamps
end
add_index :private_conversations, :recipient_id
add_index :private_conversations, :sender_id
add_index :private_conversations, [:recipient_id, :sender_id], unique: true
end
def change
create_table :private_messages do |t|
t.text :body
t.references :user, foreign_key: true
t.belongs_to :conversation, index: true
t.boolean :seen, default: false
t.timestamps
end
end
end</code></pre><figcaption>db/migrate/CREATION_DATE_create_private_messages.rb</figcaption></figure><p>Inside the <code>body</code> data column, a message’s content is going to be stored. Instead of &nbsp;adding indexes and id columns to make associations between two models &nbsp;work, here we used the <code>references</code> method, which simplified the implementation.</p><p>run migration files to create tables inside the development database</p><pre><code>rails db:migrate</code></pre><p>Commit the changes</p><pre><code class="language-bash">git add -A
git commit -m "Create Private::Conversation and Private::Message models
- Define associations between User, Private::Conversation
and Private::Message models
&lt;%= render contact_user_partial_path %&gt;
def contact_user_partial_path
if user_signed_in?
@post.user.id != current_user.id ? 'posts/show/contact_user' : 'shared/empty_partial'
else
'posts/show/login_required'
end
end
context '#contact_user_partial_path' do
before(:each) do
@current_user = create(:user, id: 1)
helper.stub(:current_user).and_return(@current_user)
end
it "returns a contact_user partial's path" do
helper.stub(:user_signed_in?).and_return(true)
assign(:post, create(:post, user_id: create(:user, id: 2).id))
expect(helper.contact_user_partial_path).to(
eq 'posts/show/contact_user'
)
end
it "returns an empty partial's path" do
helper.stub(:user_signed_in?).and_return(true)
assign(:post, create(:post, user_id: @current_user.id))
expect(helper.contact_user_partial_path).to(
eq 'shared/empty_partial'
)
end
it "returns an empty partial's path" do
helper.stub(:user_signed_in?).and_return(false)
expect(helper.contact_user_partial_path).to(
eq 'posts/show/login_required'
)
end
end
&lt;%= render leave_message_partial_path %&gt;
To contact the user you have to &lt;%= link_to 'Login', login_path %&gt;
def leave_message_partial_path
if @message_has_been_sent
'posts/show/contact_user/already_in_touch'
else
'posts/show/contact_user/message_form'
end
end
context '#leave_message_partial_path' do
it "returns an already_in_touch partial's path" do
assign('message_has_been_sent', true)
expect(helper.leave_message_partial_path).to(
eq 'posts/show/contact_user/already_in_touch'
)
end
it "returns an already_in_touch partial's path" do
assign('message_has_been_sent', false)
expect(helper.leave_message_partial_path).to(
eq 'posts/show/contact_user/message_form'
)
end
end
You are already in touch with this user
method: "post",
remote: true) do %&gt;
&lt;%= hidden_field_tag(:post_id, @post.id)  %&gt;
&lt;%= text_area_tag(:message_body,
nil,
rows: 3,
class: 'form-control',
placeholder: 'Send a messsage to the user') %&gt;
&lt;%= submit_tag('Send a message', class: 'btn send-message-to-user') %&gt;
if user_signed_in?
@message_has_been_sent = conversation_exist?
end
def conversation_exist?
Private::Conversation.between_users(current_user.id, @post.user.id).present?
end
scope :between_users, -&gt; (user1_id, user2_id) do
where(sender_id: user1_id, recipient_id: user2_id).or(
where(sender_id: user2_id, recipient_id: user1_id)
)
end
factory :private_conversation, class: 'Private::Conversation' do
association :recipient, factory: :user
association :sender, factory: :user
factory :private_conversation_with_messages do
transient do
messages_count 1
end
after(:create) do |private_conversation, evaluator|
create_list(:private_message, evaluator.messages_count,
conversation: private_conversation)
end
end
end
factory :private_message, class: 'Private::Message' do
body 'a' * 20
association :conversation, factory: :private_conversation
user
end
context 'Scopes' do
it 'gets a conversation between users' do
user1 = create(:user)
user2 = create(:user)
create(:private_conversation, recipient_id: user1.id, sender_id: user2.id)
conversation = Private::Conversation.between_users(user1.id, user2.id)
expect(conversation.count).to eq 1
end
end
def create
recipient_id = Post.find(params[:post_id]).user.id
conversation = Private::Conversation.new(sender_id: current_user.id,
recipient_id: recipient_id)
if conversation.save
Private::Message.create(user_id: recipient_id,
conversation_id: conversation.id,
body: params[:message_body])
respond_to do |format|
format.js {render partial: 'posts/show/contact_user/message_form/success'}
end
else
respond_to do |format|
format.js {render partial: 'posts/show/contact_user/message_form/fail'}
end
end
end
&lt;div class="contact-user"&gt;\
&lt;div class="contacted-user"&gt;Message has been sent&lt;/div&gt;\
namespace :private do
resources :conversations, only: [:create] do
member do
post :close
end
end
resources :messages, only: [:index, :create]
end
RSpec.feature "Contact user", :type =&gt; :feature do
let(:user) { create(:user) }
let(:category) { create(:category, name: 'Arts', branch: 'hobby') }
let(:post) { create(:post, category_id: category.id) }
context 'logged in user' do
before(:each) do
sign_in user
end
scenario "successfully sends a message to a post's author", js: true do
visit post_path(post)
expect(page).to have_selector('.contact-user form')
fill_in('message_body', with: 'a' * 20)
find('form .send-message-to-user').trigger('click')
expect(page).not_to have_selector('.contact-user form')
expect(page).to have_selector('.contacted-user',
text: 'Message has been sent')
end
scenario 'sees an already contacted message' do
create(:private_conversation_with_messages,
recipient_id: post.user.id,
sender_id: user.id)
visit post_path(post)
expect(page).to have_selector(
'.contact-user .contacted-user',
text: 'You are already in touch with this user')
end
end
context 'non-logged in user' do
scenario 'sees a login required message to contact a user' do
visit post_path(post)
expect(page).to have_selector('div', text: 'To contact the user you have to')
end
end
end</code></pre><figcaption>spec/features/posts/contact_user_spec.rb</figcaption></figure><p>Commit the changes</p><pre><code class="language-bash">git add -A
git commit -m "Inside a post add a form to contact a user
- Define a contact_user_partial_path helper method in PostsHelper.
Add specs for the method
- Create _contact_user.html.erb and _login_required.html.erb partials
- Define a leave_message_partial_path helper method in PostsHelper.
Add specs for the method
- Create _already_in_touch.html.erb and _message_form.html.erb
partial files
- Define a @message_has_been_sent in PostsController's show action
- Define a between_users scope inside the Private::Conversation model
Add specs for the scope
- Define private_conversation and private_message factories
- Define routes for Private::Conversations and Private::Messages
- Define a create action inside the Private::Conversations
- Create _success.js and _fail.js partials
.send-message-to-user {
background-color: $navbarColor;
padding: 10px;
color: white;
border-radius: 10px;
margin-top: 10px;
&amp;:hover {
background-color: black;
color: white;
}
}
.contact-user {
text-align: center;
}
.contacted-user {
display: inline-block;
border-radius: 10px;
padding: 10px;
background-color: $navbarColor;
color: white;
}
private
def add_to_conversations
session[:private_conversations] ||= []
session[:private_conversations] &lt;&lt; @conversation.id
session[:private_conversations].include?(@conversation.id)
&lt;% @is_messenger = false %&gt;
&lt;li class="conversation-window"
id="pc&lt;%= conversation.id %&gt;"
data-pconversation-user-name="&lt;%= @recipient.name %&gt;"
data-turbolinks-permanent&gt;
&lt;div class="panel panel-default" data-pconversation-id="&lt;%= conversation.id %&gt;"&gt;
&lt;%= render 'private/conversations/conversation/heading',
conversation: conversation %&gt;
&lt;!-- Conversation window's content --&gt;
&lt;div class="panel-body"&gt;
&lt;%= render 'private/conversations/conversation/messages_list',
conversation: conversation %&gt;
&lt;%= render 'private/conversations/conversation/new_message_form',
conversation: conversation,
user: user %&gt;
&lt;/div&gt;&lt;!-- panel-body --&gt;
&lt;/div&gt;
# get the opposite user of the conversation
def private_conv_recipient(conversation)
conversation.opposed_user(current_user)
end
def opposed_user(user)
user == recipient ? sender : recipient
end
context 'Methods' do
it 'gets an opposed user of the conversation' do
user1 = create(:user)
user2 = create(:user)
conversation = create(:private_conversation,
recipient_id: user1.id,
sender_id: user2.id)
opposed_user = conversation.opposed_user(user1)
expect(opposed_user).to eq user2
end
end
&lt;span class="contact-name-notif"&gt;&lt;%= @recipient.name %&gt;&lt;/span&gt;
&lt;/div&gt; &lt;!-- conversation-heading --&gt;
&lt;!-- Close conversation button --&gt;
&lt;%= link_to "X",
close_private_conversation_path(conversation),
class: 'close-conversation',
title: 'Close',
remote: true,
&lt;%= render load_private_messages(conversation), conversation: conversation %&gt;
&lt;div class="loading-more-messages"&gt;
&lt;i class="fa fa-spinner" aria-hidden="true"&gt;&lt;/i&gt;
&lt;/div&gt;
&lt;!-- messages --&gt;
&lt;ul&gt;
&lt;/ul&gt;
# if the conversation has unshown messages, show a button to get them
def load_private_messages(conversation)
if conversation.messages.count &gt; 0
'private/conversations/conversation/messages_list/link_to_previous_messages'
else
'shared/empty_partial'
end
end
private_messages_path(:conversation_id =&gt; conversation.id,
:messages_to_display_offset =&gt; @messages_to_display_offset,
:is_messenger =&gt; @is_messenger),
class: 'load-more-messages',
context '#load_private_messages' do
let(:conversation) { create(:private_conversation) }
it "returns load_messages partial's path" do
create(:private_message, conversation_id: conversation.id)
expect(helper.load_private_messages(conversation)).to eq (
'private/conversations/conversation/messages_list/link_to_previous_messages'
)
end
it "returns empty partial's path" do
expect(helper.load_private_messages(conversation)).to eq (
'shared/empty_partial'
)
end
end
&lt;input name="conversation_id" type="hidden" value="&lt;%= conversation.id %&gt;"&gt;
&lt;input name="user_id" type="hidden" value="&lt;%= user.id %&gt;"&gt;
&lt;textarea name="body" rows="3" class="form-control" placeholder="Type a message..."&gt;&lt;/textarea&gt;
&lt;input type="submit" class="btn btn-success send-message"&gt;
"&lt;%= @conversation.id %&gt;" +
"']");
var chat_windows_count = $('.conversation-window').length + 1;
if (conversation.length !== 1) {
$('body').append("&lt;%= j(render 'private/conversations/conversation',\
conversation: @conversation,\
user: current_user) %&gt;");
conversation = $('body').find("[data-conversation-id='" +
"&lt;%= @conversation.id %&gt;" +
"']");
}
// Toggle conversation window after its creation
$('.conversation-window:nth-of-type(' + chat_windows_count + ')\
.conversation-heading').click();
// mark as seen by clicking it
setTimeout(function(){
$('.conversation-window:nth-of-type(' + chat_windows_count + ')').click();
}, 1000);
// focus textarea
$('.conversation-window:nth-of-type(' + chat_windows_count + ')\
form\
textarea').focus();
// repositions all conversation windows
chat_windows_count = $('.conversation-window').length;
// if the last visible chat window is not set and conversation windows exist
// set the last_visible_chat_window variable
if (gon.last_visible_chat_window == null &amp;&amp; chat_windows_count &gt; 0) {
gon.last_visible_chat_window = chat_windows_count;
}
// if gon.hidden_chats doesn't exist, set its value
if (gon.hidden_chats == null) {
gon.hidden_chats = 0;
}
window.addEventListener('resize', hideShowChatWindow);
positionChatWindows();
hideShowChatWindow();
});
function positionChatWindows() {
chat_windows_count = $('.conversation-window').length;
// if a new conversation window was added,
// set it as the last visible conversation window
// so the hideShowChatWindow function can hide or show it,
// depending on the viewport's width
if (gon.hidden_chats + gon.last_visible_chat_window !== chat_windows_count) {
if (gon.hidden_chats == 0) {
gon.last_visible_chat_window = chat_windows_count;
}
}
// when a new chat window is added, position it to the most left of the list
for (i = 0; i &lt; chat_windows_count; i++ ) {
var right_position = i * 410;
var chat_window = i + 1;
$('.conversation-window:nth-of-type(' + chat_window + ')')
.css('right', '' + right_position + 'px');
}
}
// Hides last conversation window whenever it is close to viewport's left side
function hideShowChatWindow() {
// if there are no conversation windows, stop the function
if ($('.conversation-window').length &lt; 1) {
return;
}
// get an offsset of the most left conversation window
var offset = $('.conversation-window:nth-of-type(' + gon.last_visible_chat_window + ')').offset();
// if the left offset of the conversation window is less than 50,
// hide this conversation window
if (offset.left &lt; 50 &amp;&amp; gon.last_visible_chat_window !== 1) {
$('.conversation-window:nth-of-type(' + gon.last_visible_chat_window + ')')
.css('display', 'none');
gon.hidden_chats++;
gon.last_visible_chat_window--;
}
// if the offset of the most left conversation window is more than 550
// and there is a hidden conversation, show the hidden conversation
if (offset.left &gt; 550 &amp;&amp; gon.hidden_chats !== 0) {
gon.hidden_chats--;
gon.last_visible_chat_window++;
$('.conversation-window:nth-of-type(' + gon.last_visible_chat_window + ')')
.css('display', 'initial');
}
// when conversation heading is clicked, toggle conversation
$('body').on('click',
'.conversation-heading, .conversation-heading-full',
function(e) {
e.preventDefault();
var panel = $(this).parent();
var panel_body = panel.find('.panel-body');
var messages_list = panel.find('.messages-list');
panel_body.toggle(100, function() {
});
});
resize: none;
}
.panel {
margin: 0;
border: none !important;
}
.panel-heading {
border-radius: 0;
}
.panel-body {
position: relative;
display: none;
padding: 0 0 5px 0;
}
.conversation-window, .new_chat_window {
min-width: 400px;
max-width: 400px;
position: fixed;
bottom: 0;
right: 0;
list-style-type: none;
}
.conversation-heading, .conversation-heading-full, .new_chat_window {
background-color: $navbarColor !important;
color: white !important;
height: 40px;
border: none !important;
a {
color: white !important;
}
}
.conversation-heading, .conversation-heading-full {
padding: 0 0 0 15px;
width: 360px;
display: inline-block;
vertical-align: middle;
line-height: 40px;
}
.close-conversation, .add-people-to-chat, .add-user-to-contacts, .contact-request-sent {
color: white;
float: right;
height: 40px;
width: 40px;
font-size: 20px;
font-size: 2.0rem;
border: none;
background-color: $navbarColor;
}
.close-conversation, .add-user-to-contacts {
text-align: center;
vertical-align: middle;
line-height: 40px;
font-weight: bold;
}
.close-conversation {
&amp;:hover {
border: none;
background-color: white;
color: $navbarColor !important;
}
&amp;:visited, &amp;:focus {
color: white;
}
}
.form-control[disabled] {
background-color: $navbarColor;
}
.send-private-message, .send-group-message {
textarea {
border-radius: 0;
border: none;
border-top: 1px solid rgba(0, 0, 0, 0.2);
}
}
.loading_svg {
display: none;
}
.loading_svg {
text-align: center;
}
.messages-list {
z-index: 1;
min-height: 300px;
max-height: 300px;
overflow-y: auto;
overflow-x: hidden;
ul {
padding: 0;
}
}
.message-received, .message-sent {
max-width: 300px;
word-wrap: break-word;
z-index: 1;
}
.message-sent {
position: relative;
background-color: white;
border: 1px solid rgba(0, 0, 0, 0.5);
border-radius: 5px;
margin: 5px 5px 5px 50px;
padding: 10px;
float: right;
}
.message-received {
background-color: $backgroundColor;
border-color: #EEEEEE;
border-radius: 5px;
margin: 5px 50px 5px 5px;
padding: 10px;
float: left;
}
.messages-date {
width: 100%;
text-align: center;
border-bottom: 1px solid rgba(0, 0, 0, 0.2);
line-height: 1px;
line-height: 0.1rem;
margin: 20px 0 20px;
span {
background: #fff;
padding: 0 10px;
}
}
.load-more-messages {
display: none;
}
.loading-more-messages {
font-size: 20px;
font-size: 2.0rem;
padding: 10px 0;
text-align: center;
}
.send-message {
display: none;
def opened_conversations_windows
if user_signed_in?
# opened conversations
session[:private_conversations] ||= []
@private_conversations_windows = Private::Conversation.includes(:recipient, :messages)
.find(session[:private_conversations])
else
@private_conversations_windows = []
end
end
&lt;%= render 'layouts/application/private_conversations_windows' %&gt;
&lt;%= render partial: "private/conversations/conversation",
locals: { conversation: conversation,
user: current_user } %&gt;
git commit -m "Render a private conversation window on the app
- Add opened conversations to the session
- Create a _conversation.html.erb file inside private/conversations
- Define a private_conv_recipient helper method in the
private/conversations_helper.rb
- Define an opposed_user method in Private::Conversation model
and add specs for it
- Create _heading.html.erb and _messages_list.html.erb files
inside the private/conversations/conversation
- Define a load_private_messages in private/conversations_helper.rb
and add specs for it
- Create a _new_message_form.html.erb inside the
private/conversations/conversation
- Create a _open.js.erbinside private/conversations
- Create a  position_and_visibility.js inside the
assets/javascripts/conversations
- Create a  conversation_window.scss inside the
assets/stylesheets/partials
- Define an opened_conversations_windows helper method in
ApplicationController
- Create a _private_conversations_windows.html.erb inside the
def close
@conversation_id = params[:id].to_i
session[:private_conversations].delete(@conversation_id)
respond_to do |format|
format.js
end
end
.find("[data-pconversation-id='" + "&lt;%= @conversation_id %&gt;" + "']")
.parent()
.remove();
positionChatWindows();</code></pre><figcaption>private/conversations/close.js.erb</figcaption></figure><p>It removes the conversation’s window from the DOM and re-positions the rest of conversations’ windows.</p><p>Commit the changes</p><pre><code class="language-bash">git add -A
git commit -m "Make the close conversation button functional
- Define a close action inside the Private::ConversationsController
locals: { message: message } %&gt;
&lt;li title="&lt;%= message.created_at.to_s(:time) %&gt;"&gt;
&lt;div class="row"&gt;
&lt;div class="&lt;%= sent_or_received(message, user) %&gt; &lt;%= seen_or_unseen(message) %&gt;"&gt;
&lt;%= message.body %&gt;
&lt;/div&gt;
&lt;/div&gt;
def private_message_date_check(message, previous_message)
if defined?(previous_message) &amp;&amp; previous_message.present?
# if messages are not created at the same day
if previous_message.created_at.to_date != message.created_at.to_date
@message = message
'private/messages/message/new_date'
else
'shared/empty_partial'
end
else
'shared/empty_partial'
end
end
RSpec.describe Private::MessagesHelper, :type =&gt; :helper do
context '#private_message_date_check' do
let(:message) { create(:private_message) }
let(:previous_message) { create(:private_message) }
it "returns new_date partial's path" do
message.update(created_at: 2.days.ago)
expect(helper.private_message_date_check(message, previous_message)).to(
eq 'private/messages/message/new_date'
)
end
it "returns an empty partial's path" do
expect(helper.private_message_date_check(message, previous_message)).to(
eq 'shared/empty_partial'
)
end
it "returns an empty partial's path" do
previous_message = nil
expect(helper.private_message_date_check(message, previous_message)).to(
eq 'shared/empty_partial'
)
end
end
&lt;span&gt;&lt;%= @message.created_at.to_date %&gt;&lt;/span&gt;
def sent_or_received(message, user)
user.id == message.user_id ? 'message-sent' : 'message-received'
end
def seen_or_unseen(message)
message.seen == false ? 'unseen' : ''
end
context '#sent_or_received' do
let(:user) { create(:user) }
let(:message) { create(:private_message) }
it 'returns message-sent' do
message.update(user_id: user.id)
expect(helper.sent_or_received(message, user)).to eq 'message-sent'
end
it 'returns message-received' do
expect(helper.sent_or_received(message, user)).to eq 'message-received'
end
end
context '#seen_or_unseen' do
let(:message) { create(:private_message) }
it 'returns unseen' do
message.update(seen: false)
expect(helper.seen_or_unseen(message)).to eq 'unseen'
end
it 'returns nothing' do
message.update(seen: true)
expect(helper.seen_or_unseen(message)).to eq ''
end
end
&lt;%= render append_previous_messages_partial_path %&gt;
def append_previous_messages_partial_path
'shared/load_more_messages/window/append_messages'
end
end</code></pre><figcaption>helpers/shared/messages_helper.rb</figcaption></figure><p>So far the method is pretty dumb. It just returns a partial’s path. &nbsp;We’ll give some intelligence to it later, when we’ll build extra &nbsp;features to our messaging system. Right now we won’t have an access to &nbsp;helper methods, defined in this file, in any other file. We have to &nbsp;include them inside other helper files. Inside the<br><code>Private::MessagesHelper</code>, include methods from the <code>Shared::MessagesHelper</code></p><pre><code class="language-bash">require 'shared/messages_helper'
// so it cannot be clicked if new messages aren't rendered yet
$('#&lt;%= @id_type %&gt;&lt;%= @conversation.id %&gt; .load-more-messages')
.replaceWith('&lt;span class="load-more-messages"&gt;&lt;/span&gt;');
// render previous messages
$('#&lt;%= @id_type %&gt;&lt;%= @conversation.id %&gt; .messages-list ul')
.prepend('&lt;%= j render "#{@type}/conversations/messages" %&gt;');
// after new messages are appended, leave a gap at the top of the scrollbar
'private/messages/load_more_messages/window/replace_link_to_messages'
.replaceWith('\
&lt;%= j render partial: "private/conversations/conversation/messages_list/link_to_previous_messages",\
locals: { conversation: @conversation } %&gt;\
var messages_visible = $('ul', this).has('li').length;
// Load first 10 messages if messages list is empty
if (!messages_visible &amp;&amp; $('.load-more-messages', this).length) {
$('.load-more-messages', this)[0].click();
}
var iScrollPos = 0;
var isLoading = false;
var currentLoadingIcon;
$(document).ajaxComplete(function() {
isLoading = false;
// hide loading icon
if (currentLoadingIcon !== undefined) {
currentLoadingIcon.hide();
}
});
$('.messages-list', this).scroll(function () {
var iCurScrollPos = $(this).scrollTop();
if (iCurScrollPos &gt; iScrollPos) {
//Scrolling Down
} else {
//Scrolling Up
if (iCurScrollPos &lt; 300 &amp;&amp; isLoading == false &amp;&amp; $('.load-more-messages', this).length) {
// trigger link, which loads 10 more messages
$('.load-more-messages', this)[0].click();
isLoading = true;
// select conversation window's loading icon and show it
currentLoadingIcon = $('.loading-more-messages', this);
currentLoadingIcon.show();
}
}
iScrollPos = iCurScrollPos;
});
include Messages
def index
get_messages('private', 10)
@user = current_user
@is_messenger = params[:is_messenger]
respond_to do |format|
format.js { render partial: 'private/messages/load_more_messages' }
end
end
module Messages
extend ActiveSupport::Concern
def get_messages(conversation_type, messages_amount)
# convert a string into a constant, so the models can be called dynamically
model = "#{conversation_type.capitalize}::Conversation".constantize
@conversation = model.find(params[:conversation_id])
# get previous messages of the conversation
@messages = @conversation.messages.order(created_at: :desc)
.limit(messages_amount)
.offset(params[:messages_to_display_offset].to_i)
# set a variable to get another previous messages of the conversation
@messages_to_display_offset = params[:messages_to_display_offset].to_i + messages_amount
@type = conversation_type.downcase
# if messages are the last in the conversation, mark the variable as 0
# so the load more messages link will be removed
if @conversation.messages.count &lt; @messages_to_display_offset
@messages_to_display_offset = 0
end
end
def remove_link_to_messages
if @is_messenger == 'false'
if @messages_to_display_offset != 0
'shared/empty_partial'
else
'shared/load_more_messages/window/remove_more_messages_link'
end
else
'shared/empty_partial'
end
.replaceWith('');
$('#&lt;%= @id_type %&gt;&lt;%= @conversation.id %&gt; .load-more-messages')
git commit -m "Render messages with AJAX
- Create a _message.html.erb inside private/messages
- Define a private_message_date_check helper method in
Private::MessagesHelper and write specs for it
- Create a _new_date.html.erb inside private/messages/message
- Define sent_or_received and seen_or_unseen helper methods in
Private::MessagesHelper and write specs for them
- Create a _load_more_messages.js.erb inside private/messages
- Define an  append_previous_messages_partial_path helper method in
Shared::MessagesHelper
- Create a _append_messages.js.erb inside
shared/load_more_messages/window
- Define a  replace_link_to_private_messages_partial_path in
Private::MessagesHelper
- Create a _add_link_to_messages.js.erb inside
private/messages/load_more_messages/window
- Create a toggle_window.js inside javascripts/conversations
- Create a messages_infinite_scroll.js inside
assets/javascripts/conversations
- Define an index action inside the Private::MessagesController
- Create a messages.rb inside controllers/concerns
- Define a remove_link_to_messages inside helpers/shared
- Create a _remove_more_messages_link.js.erb inside
def subscribed
stream_from "private_conversations_#{current_user.id}"
end
def unsubscribed
stop_all_streams
end
connected: function() {},
disconnected: function() {},
received: function(data) {}
$(document).on('submit', '.send-private-message', function(e) {
e.preventDefault();
var values = $(this).serializeArray();
App.private_conversation.send_message(values);
$(this).trigger('reset');
// leave a gap at the top of the conversation windows' scrollbar
$('.messages-list').scrollTop(500);
// send a message on Enter key click and leave textarea in its original state
$(document).on('keydown',
'.conversation-window, .conversation',
function(event) {
if (event.keyCode === 13) {
// if textarea window is not empty
if ($.trim($('textarea', this).val())) {
$('.send-message', this).click();
event.target.value = "";
event.preventDefault();
}
}
});
});
function calculateUnseenConversations() {
var unseen_conv_length = $('#conversations-menu').find('.unseen-conv').length;
if (unseen_conv_length) {
$('#unseen-conversations').css('visibility', 'visible');
$('#unseen-conversations').text(unseen_conv_length);
} else {
$('#unseen-conversations').css('visibility', 'hidden');
$('#unseen-conversations').text('');
}
send_message: function(message) {
return this.perform('send_message', {
message: message
});
def send_message(data)
message_params = data['message'].each_with_object({}) do |el, hash|
hash[el['name']] = el['value']
end
Private::Message.create(message_params)
end</code></pre><figcaption>channels/private/conversation_channel.rb</figcaption></figure><p>This will take care of a new message’s creation. The <code>data</code> parameter, which we get from the passed argument, is a nested hash. So &nbsp;to reduce this nested complexity into a single hash, the <code><a href="https://apidock.com/rails/Enumerable/each_with_object" rel="nofollow noopener">each_with_object</a></code> method is used.</p><p>If &nbsp;you try to send a new message inside a conversation’s window, a new &nbsp;message record will actually be created. It won’t show up on the &nbsp;conversation window instantly yet, only when you refresh the website. It &nbsp;would show up, but we haven’t set anything to broadcast newly created &nbsp;messages to a private conversation’s channel. We’ll implement it in just &nbsp;a moment. But before we continue and commit changes, quickly recap how &nbsp;the current messaging system works.</p><ol><li>A user fills the new message form and submits the message</li><li>The event handler inside the <code>javascripts/channels/private/conversations.js</code> gets a conversation window’s data, a conversation id and a message &nbsp;value, and triggers the channel instances on the client-side <code>send_message</code> function.</li></ol><p>3. The <code>send_message</code> function on the client side calls the <code>send_message</code>method on the server side and passes data to it</p><p>4. The <code>send_message</code> method on the client side processes provided data and creates a new <code>Private::Message</code> record</p><p>Commit the changes.</p><pre><code class="language-bash">git add -A
git commit -m "Make a private conversation window's new message form functional
- Add an event handler inside the
javascripts/channels/private/conversation.js to trigger the submit button
- Define a common behavior among conversation windows inside the
assets/javascripts/conversations/conversation.js
after_create_commit do
Private::MessageBroadcastJob.perform_later(self, previous_message)
end
def previous_message
previous_message_index = self.conversation.messages.index(self) - 1
self.conversation.messages[previous_message_index]
end
context 'Methods' do
it 'gets a previous message' do
conversation = create(:private_conversation)
message1 = create(:private_message, conversation_id: conversation.id)
message2 = create(:private_message, conversation_id: conversation.id)
expect(message2.previous_message).to eq message1
end
end
queue_as :default
def perform(message, previous_message)
sender = message.user
recipient = message.conversation.opposed_user(sender)
broadcast_to_sender(sender, recipient, message, previous_message)
broadcast_to_recipient(sender, recipient, message, previous_message)
end
private
def broadcast_to_sender(sender, recipient, message, previous_message)
ActionCable.server.broadcast(
"private_conversations_#{sender.id}",
message: render_message(message, previous_message, sender),
conversation_id: message.conversation_id,
recipient_info: recipient
)
end
def broadcast_to_recipient(sender, recipient, message, previous_message)
ActionCable.server.broadcast(
"private_conversations_#{recipient.id}",
recipient: true,
sender_info: sender,
message: render_message(message, previous_message, recipient),
conversation_id: message.conversation_id
)
end
def render_message(message, previous_message, user)
ApplicationController.render(
partial: 'private/messages/message',
locals: { message: message,
previous_message: previous_message,
user: user }
)
end
received: function(data) {
// if a link to the conversation in the conversations menu list exists
// move the link to the top of the conversations menu list
var conversation_menu_link = $('#conversations-menu ul')
.find('#menu-pc' + data['conversation_id']);
if (conversation_menu_link.length) {
conversation_menu_link.prependTo('#conversations-menu ul');
}
// set variables
var conversation = findConv(data['conversation_id'], 'p');
var conversation_rendered = ConvRendered(data['conversation_id'], 'p');
var messages_visible = ConvMessagesVisiblity(conversation);
if (data['recipient'] == true) {
// mark conversation as unseen, after new message is received
$('#menu-pc' + data['conversation_id']).addClass('unseen-conv');
// if conversation window exists
if (conversation_rendered) {
if (!messages_visible) {
// change style of conv window when there are unseen messages
// add an additional class to the conversation's window or something
}
conversation.find('.messages-list').find('ul').append(data['message']);
}
calculateUnseenConversations();
}
else {
conversation.find('ul').append(data['message']);
}
if (conversation.length) {
// after a new message was appended, scroll to the bottom of the conversation window
var messages_list = conversation.find('.messages-list');
var height = messages_list[0].scrollHeight;
messages_list.scrollTop(height);
}
}
...</code></pre><figcaption>assets/javascripts/channels/private/conversation.js</figcaption></figure><p>Here we see that the sender and the recipient get treated a little bit differently.</p><pre><code>// change style of conv window when there are unseen messages
function findConv(conversation_id, type) {
// if a current conversation is opened in the messenger
var messenger_conversation = $('body .conversation');
if (messenger_conversation.length) {
// conversation is opened in the messenger
return messenger_conversation;
} else {
// conversation is opened in a popup window
var data_attr = "[data-" + type + "conversation-id='" +
conversation_id +
"']";
var conversation = $('body').find(data_attr);
return conversation;
}
}
// checks if a conversation window is rendered and visible on a browser
function ConvRendered(conversation_id, type) {
// if a current conversation is opened in the messenger
if ($('body .conversation').length) {
// conversation is opened in the messenger
// so it automatically means that is visible
return true;
} else {
// conversation is opened in a popup window
var data_attr = "[data-" + type + "conversation-id='" +
conversation_id +
"']";
var conversation = $('body').find(data_attr);
return conversation.is(':visible');
}
}
function ConvMessagesVisiblity(conversation) {
// if current conversation is opened in the messenger
if ($('body .conversation').length) {
// conversation is opened in the messenger
// so it is automatically means that messages are visible
return true;
} else {
// conversation is opened in a popup window
// check if the window is collapsed or expanded
var visibility = conversation
.find('.panel-body')
.is(':visible');
return visibility;
}
}</code></pre><figcaption>assets/javascripts/channels/shared/conversation.js</figcaption></figure><p>A &nbsp;messenger is mentioned in the code quite a lot and we don’t have the &nbsp;messenger yet. The messenger is going to be a separate way to open &nbsp;conversations. To prevent a lot of small changes in the future, I’ve &nbsp;included cases with the messenger right now.</p><p>That’s &nbsp;it, the real time functionality should work. Both users, the sender and &nbsp;the recipient, should receive and get displayed new messages on the &nbsp;DOM. When we send a new message, we should see it instantly appended to &nbsp;the messages list. But there’s one little problem now. We only have a &nbsp;one way to render a conversation window. It gets rendered only when a &nbsp;conversation is created. We’ll add additional ways to render &nbsp;conversations’ windows in just a moment. But before that, let’s recap &nbsp;how data reaches channel’s subscribers.</p><ol><li>After a new <code>Private::Message</code> record is created, the <code>after_create_commit</code>method gets triggered, which calls the background job</li><li><code>Private::MessageBroadcastJob</code> processes given data and broadcasts it to channel’s subscribers</li><li>On the client side the <code>received</code> callback function is called, which appends data to the DOM</li></ol><p>Commit the changes.</p><pre><code class="language-bash">git add -A
git commit -m "Broadcast a new message
- Inside the Private::Message define an after_create_comit callback method.
- Create a Private::MessageBroadcastJob
- Define a received function inside the
assets/javascripts/channels/private/conversation.js
- Create a conversation.js inside the
if user_signed_in?
@all_conversations = OrderConversationsService.new({user: current_user}).call
end
def initialize(params)
@user = params[:user]
end
# get and order conversations by last messages' dates in descending order
def call
all_private_conversations = Private::Conversation.all_by_user(@user.id)
.includes(:messages)
return all_conversations = all_private_conversations.sort{ |a, b|
b.messages.last.created_at &lt;=&gt; a.messages.last.created_at
}
end
scope :all_by_user, -&gt; (user_id) do
where(recipient_id: user_id).or(where(sender_id: user_id))
end
it "gets all user's conversations" do
create_list(:private_conversation, 5)
user = create(:user)
create_list(:private_conversation, 2, recipient_id: user.id)
create_list(:private_conversation, 2, sender_id: user.id)
conversations = Private::Conversation.all_by_user(user.id)
expect(conversations.count).to eq 4
end
require './app/services/order_conversations_service.rb'
describe OrderConversationsService do
context '#call' do
it 'returns ordered conversations in descending order' do
user = create(:user)
conversation1 = create(:private_conversation,
sender_id: user.id,
messages: [create(:private_message)])
conversation2 = create(:private_conversation,
sender_id: user.id,
messages: [create(:private_message)])
conversations = [conversation2, conversation1]
expect(OrderConversationsService.new({user: user}).call).to eq conversations
end
end
end</code></pre><figcaption>spec/services/order_conversations_service_spec.rb</figcaption></figure><p>Commit the changes.</p><pre><code class="language-bash">git add -A
git commit -m "
- Create an OrderConversationsService and add specs for it
- Define an all_by_user scope inside the Private::Conversation
&lt;% nav_header_content_partials.each do |partial_path| %&gt;
&lt;%= render partial: partial_path %&gt;
&lt;% end %&gt;
class="navbar-toggle collapsed"
data-toggle="collapse"
data-target="#navbar-collapsible-content"
aria-expanded="false"&gt;
&lt;span class="sr-only"&gt;Toggle navigation&lt;/span&gt;
&lt;span class="icon-bar"&gt;&lt;/span&gt;
&lt;span class="icon-bar"&gt;&lt;/span&gt;
&lt;span class="icon-bar"&gt;&lt;/span&gt;
&lt;%= link_to root_path, class: 'navbar-brand brand-mobile' do %&gt;
&lt;i class="fa fa-home" aria-hidden="true"&gt;&lt;/i&gt;
def nav_header_content_partials
partials = []
if params[:controller] == 'messengers'
partials &lt;&lt; 'layouts/navigation/header/messenger_header'
else # controller is not messengers
partials &lt;&lt; 'layouts/navigation/header/toggle_button'
partials &lt;&lt; 'layouts/navigation/header/home_button'
partials &lt;&lt; 'layouts/navigation/header/dropdowns' if user_signed_in?
end
partials
it "returns messenger_header partial's path" do
controller.params[:controller] = 'messengers'
partials = ['layouts/navigation/header/messenger_header']
expect(helper.nav_header_content_partials).to eq partials
end
it "returns partials' paths for buttons without dropdowns" do
controller.params[:controller] = 'not_messengers'
view.stub(:user_signed_in?).and_return(false)
partials = ['layouts/navigation/header/toggle_button']
partials &lt;&lt; 'layouts/navigation/header/home_button'
expect(helper.nav_header_content_partials).to eq partials
end
it "returns partials' paths for buttons and dropdowns" do
controller.params[:controller] = 'not_messengers'
view.stub("user_signed_in?").and_return(true)
partials = ['layouts/navigation/header/toggle_button']
partials &lt;&lt; 'layouts/navigation/header/home_button'
partials &lt;&lt; 'layouts/navigation/header/dropdowns'
expect(helper.nav_header_content_partials).to eq partials
end
&lt;%= render 'layouts/navigation/header/dropdowns/conversations' %&gt;
&lt;i class="fa fa-envelope-o" aria-hidden="true"&gt;
&lt;span id="unseen-conversations"&gt;&lt;/span&gt;
&lt;/i&gt;
&lt;/a&gt;
&lt;ul class="dropdown dropdown-menu" role="menu"&gt;
&lt;% @all_conversations.each do |conversation| %&gt;
&lt;%= render partial: conversation_header_partial_path(conversation),
locals: { conversation: conversation,
user_id: current_user.id } %&gt;
&lt;% end %&gt;
def conversation_header_partial_path(conversation)
if conversation.class == Private::Conversation
'layouts/navigation/header/dropdowns/conversations/private_conversation'
else
'layouts/navigation/header/dropdowns/conversations/group_conversation'
end
it "returns a partial's path for a private conversation's header" do
conversation = create(:private_conversation)
expect(helper.conversation_header_partial_path(conversation)). to eq(
'layouts/navigation/header/dropdowns/conversations/private'
)
end
it "returns a partial's path for a group conversation's header" do
conversation = create(:group_conversation)
expect(helper.conversation_header_partial_path(conversation)). to eq(
'layouts/navigation/header/dropdowns/conversations/group'
)
end
&lt;% seen_status = private_conv_seen_status(conversation) %&gt;
&lt;li id="menu-pc&lt;%= conversation.id %&gt;"
class="&lt;%= seen_status %&gt;"
data-id="&lt;%= conversation.id %&gt;"
data-type="private"&gt;
&lt;%= link_to recipient.name,
open_private_conversation_path(id: conversation.id),
remote: true,
method: :post,
class: 'bigger-screen-link' %&gt;
def private_conv_seen_status(conversation)
# if the latest message of a conversation is not created by a current_user
# and it is unseen, return an unseen-conv value
not_created_by_user = conversation.messages.last.user_id != current_user.id
unseen = conversation.messages.last.seen == false
not_created_by_user &amp;&amp; unseen ? 'unseen-conv' : ''
end
RSpec.describe Shared::ConversationsHelper, :type =&gt; :helper do
context '#private_conv_seen_status' do
it 'returns an empty string' do
current_user = create(:user)
conversation = create(:private_conversation)
create(:private_message,
conversation_id: conversation.id,
seen: false,
user_id: current_user.id)
view.stub(:current_user).and_return(current_user)
expect(helper.private_conv_seen_status(conversation)).to eq ''
end
it 'returns an empty string' do
current_user = create(:user)
recipient = create(:user)
conversation = create(:private_conversation)
create(:private_message,
conversation_id: conversation.id,
seen: true,
user_id: recipient.id)
view.stub(:current_user).and_return(current_user)
expect(helper.private_conv_seen_status(conversation)).to eq ''
end
it 'returns unseen-conv status' do
current_user = create(:user)
recipient = create(:user)
conversation = create(:private_conversation)
create(:private_message,
conversation_id: conversation.id,
seen: false,
user_id: recipient.id)
view.stub(:current_user).and_return(current_user)
expect(helper.private_conv_seen_status(conversation)).to eq(
'unseen-conv'
)
end
end
@conversation = Private::Conversation.find(params[:id])
add_to_conversations unless already_added?
respond_to do |format|
format.js { render partial: 'private/conversations/open' }
end
font-size: 20px;
font-size: 2.0rem;
}
.navigation-items {
position: absolute;
top: 0;
left: 50%;
}
.navbar-header {
.open {
width: 36px;
}
}
.non-user-nav-links {
display: inline-block;
height: 50px;
line-height: 50px;
vertical-align: middle;
padding-right: 20px;
}
#conversations-menu, #contacts-requests {
font-size: 20px;
font-size: 2.0rem;
height: 50px;
line-height: 50px;
padding-right: 10px;
ul {
margin: 0;
position: relative;
top: 50px;
right: 200px;
border-radius: 0 0 5px 5px;
height: 300px;
overflow: scroll;
overflow-x: hidden;
li {
a {
width: 100%;
}
}
}
.unseen-conv {
a {
background: $backgroundColor;
color: black !important;
}
}
}
#unseen-conversations, #unresponded-contact-requests {
visibility: hidden;
padding: 1px;
position: absolute;
// color: white;
font-size: 13px;
font-size: 1.3rem;
}
#unseen-conversations {
right: 5px;
background: #E92F2F;
}
#conversations-menu {
i {
position: relative;
}
}
#conversations-list {
position: fixed;
bottom: 0;
right: 0;
padding: 0;
.col-sm-2 {
padding: 0;
}
.col-sm-10 {
display: none;
padding: 0 !important;
.conversation {
padding: 50px 0 0 0;
}
.private-conversation .messages-list {
width: 100%;
right: 0;
}
.group-conversation .messages-list {
width: 100%;
left: 0;
}
.send-private-message, .send-group-message {
position: fixed;
bottom: 0;
}
}
.pc-menu {
display: none !important;
}
.single-post-list {
min-height: 65px;
max-height: 65px;
padding: 10px 0;
}
.bigger-screen-link, .brand-bigger-screen {
display: none !important;
}
.smaller-screen-link {
padding: 10px 20px !important;
}
.conversation-window {
display: none !important;
}
.navbar-brand {
margin: 0 !important;
}
.mobile-menu {
i {
color: white;
}
ul {
padding: 0px;
}
a {
display: block;
padding: 10px 0px 10px 25px !important;
}
a:hover {
background: white !important;
color: black !important;
i {
color: black;
}
}
}
.navbar-header {
#conversations-menu, #messages-page-name {
a {
float: left;
}
ul {
position: absolute;
left: 0;
width: 100%;
}
}
#conversations-menu {
width: 40%;
}
#messages-page-name  {
width: 50%;
}
#contacts-requests {
ul {
position: absolute;
left: 0;
width: 100%;
}
}
}
#side-menu {
display: none !important;
}
#feed {
padding: 0;
}
// scrollbar styling
::-webkit-scrollbar-track
{
-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
// border-radius: 10px;
background-color: #F5F5F5;
}
::-webkit-scrollbar
{
width: 12px;
background-color: #F5F5F5;
}
::-webkit-scrollbar-thumb
{
// border-radius: 10px;
-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
background-color: $navbarColor;
}
body nav {
display: initial !important;
}
.smaller-screen-link {
display: none !important;
}
.brand-mobile {
display: none;
}
.mobile-menu {
display: none !important;
}
#conversations-menu, #contacts-requests {
ul {
width: 400px;
top: 0;
}
}
git commit -m "Render a drop down menu of conversations links
- split layouts/navigation/_header.html.erb file's content into partials
- Create a _toggle_button.erb.html inside layouts/navigation/header
- Create a _home_button.html.erb inside  layouts/navigation/header
- Define a nav_header_content_partials inside NavigationHelper
and write specs for it
- Create a _dropdowns.html.erb inside layouts/navigation/header
- Create a _conversation.html.erb inside
layouts/navigation/header/dropdowns
- Define a conversation_header_partial_path inside NavigationHelper
and write specs for it
- Create a  _private.html.erb inside
layouts/navigation/header/dropdowns/conversations
- Define a private_conv_seen_status inside
Shared::ConversationsHelper and write specs for it
- Define an open action inside the Private::Conversations controller
- add CSS to style drop down menus on the navigation bar.
RSpec.feature "window", :type =&gt; :feature do
let(:user) { create(:user) }
let(:conversation) { create(:private_conversation, sender_id: user.id) }
let(:open_window) do
sign_in user
visit root_path
find('#conversations-menu .dropdown-toggle').trigger('click')
find('#conversations-menu li a').click
expect(page).to have_selector('.conversation-window')
end
before(:each) do
conversation
create(:private_message, conversation_id: conversation.id, user_id: user.id)
end
scenario 'user opens a conversation', js: true do
open_window
end
scenario 'user closes a conversation', js: true do
open_window
find('.conversation-window .close-conversation').click
expect(page).not_to have_selector('.conversation-window')
end
scenario 'user sends a message', js: true do
open_window
expect(page).to have_selector('.conversation-window .messages-list li', count: 1)
find('.conversation-window').fill_in 'body', with: 'hey, mate'
find('.conversation-window form .send-message', visible: false).trigger('click')
expect(page).to have_selector('.conversation-window .messages-list li', count: 2)
end
scenario 'user collapses and expands a conversation window', js: true do
open_window
find('.conversation-window .conversation-heading').click
expect(page).not_to have_selector('.conversation-window .messages-list')
end
end</code></pre><figcaption>spec/features/private/conversations/window_spec.rb</figcaption></figure><p>Here I haven’t defined specs, to test if a recipient user receives messages in real time. Try to figure out how to write such tests on your own.</p><p>Commit the changes</p><pre><code class="language-bash">git add -A
// and the conversation window already exists on the page
// but it is collapsed, expand it
$('#conversations-menu').on('click', 'li', function(e) {
// get conversation window's id
var conv_id = $(this).attr('data-id');
// get conversation's type
if ($(this).attr('data-type') == 'private') {
var conv_type = '#pc';
} else {
var conv_type = '#gc';
}
var conversation_window = $(conv_type + conv_id);
// if conversation window exists
if (conversation_window.length) {
// if window is collapsed, expand it
if (conversation_window.find('.panel-body').css('display') == 'none') {
conversation_window.find('.conversation-heading').click();
}
// mark as seen by clicking it and focus textarea
conversation_window.find('form textarea').click().focus();
}
// if the last message in a conversation is not a user's message and is unseen
// mark unseen messages as seen
var latest_message = $('.messages-list ul li:last .row div', this);
if (latest_message.hasClass('message-received') &amp;&amp; latest_message.hasClass('unseen')) {
var conv_id = $(this).find('.panel').attr('data-pconversation-id');
// if conv_id doesn't exist, it means that conversation is opened in messenger
if (conv_id == null) {
var conv_id = $(this).find('.messages-list').attr('data-pconversation-id');
}
// mark conversation as seen in conversations menu list
latest_message.removeClass('unseen');
$('#menu-pc' + conv_id).removeClass('unseen-conv');
calculateUnseenConversations();
App.private_conversation.set_as_seen(conv_id);
}
});
$(document).on('turbolinks:load', function() {
calculateUnseenConversations();
return this.perform('set_as_seen', { conv_id: conv_id });
# find a conversation and set its all unseen messages as seen
conversation = Private::Conversation.find(data["conv_id"].to_i)
messages = conversation.messages.where(seen: false)
messages.each do |message|
message.update(seen: true)
end
end</code></pre><figcaption>channels/private/conversation_channel.rb</figcaption></figure><p>After a user clicks on a link to open a conversation window or clicks directly on a conversation window, its unseen messages will be marked as seen.</p><p>Commit the changes</p><pre><code class="language-bash">git add -A
git commit -m "Add ability to mark unseen messages as seen
- Add an event handler to expand conversation windows inside the
assets/javascripts/conversations/toggle_window.js
- Add an event handler to mark unseen messages as seen inside the
assets/javascripts/channels/private/conversation.js
belongs_to :user
belongs_to :contact, class_name: "User"
validates_uniqueness_of :user_id, scope: :contact_id
def self.find_by_users(user_id, contact_id)
where('user_id = ? AND contact_id = ?', user_id, contact_id).or(
where('user_id = ? AND contact_id = ?', contact_id, user_id)
)[0]
end
def change
create_table :contacts do |t|
t.belongs_to :user, index: true
t.belongs_to :contact, index: true
t.boolean :accepted, default: false
t.timestamps
end
end
factory :contact do
association :user, factory: :user
association :contact, factory: :user
end
RSpec.describe Contact, type: :model do
let(:contact) { build(:contact) }
context 'Associations' do
it 'belongs_to user' do
association = described_class.reflect_on_association(:user)
expect(association.macro).to eq :belongs_to
end
it 'belongs_to contact' do
association = described_class.reflect_on_association(:contact)
expect(association.macro).to eq :belongs_to
expect(association.options[:class_name]).to eq 'User'
end
end
context 'Validations' do
it 'is valid to create a new contact' do
expect(contact).to be_valid
end
it 'is not valid with the same user' do
contact = create(:contact)
duplicate_contact = contact.dup
expect(duplicate_contact).not_to be_valid
end
end
context 'Methods' do
it 'finds by users' do
user1 = create(:user)
user2 = create(:user)
contact = create(:contact, user_id: user1.id, contact_id: user2.id)
expect(Contact.find_by_users(user1.id, user2.id)).to eq contact
end
end
end</code></pre><figcaption>spec/models/contact_spec.rb</figcaption></figure><p>Commit the changes</p><pre><code class="language-bash">git add -A
has_many :all_received_contact_requests,
class_name: "Contact",
foreign_key: "contact_id"
has_many :accepted_sent_contact_requests, -&gt; { where(contacts: { accepted: true}) },
through: :contacts,
source: :contact
has_many :accepted_received_contact_requests, -&gt; { where(contacts: { accepted: true}) },
through: :all_received_contact_requests,
source: :user
has_many :pending_sent_contact_requests, -&gt;  { where(contacts: { accepted: false}) },
through: :contacts,
source: :contact
has_many :pending_received_contact_requests, -&gt;  { where(contacts: { accepted: false}) },
through: :all_received_contact_requests,
source: :user
# gets all your contacts
def all_active_contacts
accepted_sent_contact_requests | accepted_received_contact_requests
end
# gets your pending sent and received contacts
def pending_contacts
pending_sent_contact_requests | pending_received_contact_requests
end
# gets a Contact record
def contact(contact)
Contact.where(user_id: self.id, contact_id: contact.id)[0]
...
it 'has_many contacts' do
association = described_class.reflect_on_association(:contacts)
expect(association.macro).to eq :has_many
end
it 'has_many all_received_contact_requests' do
association = described_class.reflect_on_association(:all_received_contact_requests)
expect(association.macro).to eq :has_many
expect(association.options[:class_name]).to eq 'Contact'
expect(association.options[:foreign_key]).to eq 'contact_id'
end
it 'has_many accepted_sent_contact_requests' do
association = described_class.reflect_on_association(:accepted_sent_contact_requests)
expect(association.macro).to eq :has_many
expect(association.options[:through]).to eq :contacts
expect(association.options[:source]).to eq :contact
end
it 'has_many accepted_received_contact_requests' do
association = described_class.reflect_on_association(:accepted_received_contact_requests)
expect(association.macro).to eq :has_many
expect(association.options[:through]).to eq :all_received_contact_requests
expect(association.options[:source]).to eq :user
end
it 'has_many pending_sent_contact_requests' do
association = described_class.reflect_on_association(:pending_sent_contact_requests)
expect(association.macro).to eq :has_many
expect(association.options[:through]).to eq :contacts
expect(association.options[:source]).to eq :contact
end
it 'has_many pending_received_contact_requests' do
association = described_class.reflect_on_association(:pending_received_contact_requests)
expect(association.macro).to eq :has_many
expect(association.options[:through]).to eq :all_received_contact_requests
expect(association.options[:source]).to eq :user
end
end
context 'Methods' do
let(:user) { build(:user) }
let(:contact_requests) do
@user = create(:user)
create_list(:contact, 2)
create_list(:contact, 2, accepted: true)
create(:contact, user_id: @user.id)
create(:contact, user_id: @user.id, accepted: true)
create(:contact, contact_id: @user.id)
create(:contact, contact_id: @user.id, accepted: true)
end
it 'accepted_sent_contact_requests gets only accepted requests' do
contact_requests
expect(@user.accepted_sent_contact_requests.count).to eq 1
end
it 'accepted_received_contact_requests gets only accepted requests' do
contact_requests
expect(@user.accepted_received_contact_requests.count).to eq 1
end
it 'pending_sent_contact_requests gets only unaccepted requests' do
contact_requests
expect(@user.pending_sent_contact_requests.count).to eq 1
end
it 'pending_received_contact_requests gets only unaccepted requests' do
contact_requests
expect(@user.pending_received_contact_requests.count).to eq 1
end
end</code></pre><figcaption>spec/models/user_spec.rb</figcaption></figure><p>Commit the changes</p><pre><code class="language-bash">git add -A
git commit -m "Add associations and helper methods to the User model
- Create relationship between the User the Contact models
def create
@contact = current_user.contacts.create(contact_id: params[:contact_id])
respond_ok
end
def update
@contact = Contact.find_by_users(params[:id], current_user.id)
@contact.update(accepted: true)
respond_ok
end
def destroy
@contact = Contact.find_by_users(params[:id], current_user.id)
@contact.destroy
respond_ok
end
private
def respond_ok
respond_to do |format|
format.json  { head :ok }
end
end
method: :post,
remote: true,
class: 'add-user-to-contacts add-user-to-contacts-notif' do %&gt;
&lt;i class="fa fa-user-plus" aria-hidden="true" title="Add to contacts"&gt;&lt;/i&gt;
def add_to_contacts_partial_path(contact)
if recipient_is_contact?
'shared/empty_partial'
else
non_contact(contact)
end
end
private
def recipient_is_contact?
# check if recipient is a user's contact
contacts = current_user.all_active_contacts
contacts.find {|contact| contact['id'] == @recipient.id}.present?
end
def non_contact(contact)
# if the contact request was sent by the user or recipient
if unaccepted_contact_exists(contact)
'shared/empty_partial'
else
# contact requests wasn't sent by any users
'private/conversations/conversation/heading/add_user_to_contacts'
end
end
def unaccepted_contact_exists(contact)
# get a contact status with the recipient
if contact.present?
# check if an unaccepted contact between a user and a recipient exists
contact.accepted ? false : true
else
false
end
let(:contact) { create(:contact) }
it "returns an empty partial's path" do
helper.stub(:recipient_is_contact?).and_return(true)
expect(helper.add_to_contacts_partial_path(contact)).to eq(
'shared/empty_partial'
)
end
it "returns add_user_to_contacts partial's path" do
helper.stub(:recipient_is_contact?).and_return(false)
helper.stub(:unaccepted_contact_exists).and_return(false)
expect(helper.add_to_contacts_partial_path(contact)).to eq(
'private/conversations/conversation/heading/add_user_to_contacts'
)
end
end
context 'private scope' do
let(:current_user) { create(:user) }
let(:recipient) { create(:user) }
context '#unaccepted_contact_exists' do
it 'returns false' do
contact = create(:contact, accepted: true)
expect(helper.instance_eval {
unaccepted_contact_exists(contact)
}).to eq false
end
it 'returns false' do
contact = nil
expect(helper.instance_eval {
unaccepted_contact_exists(contact)
}).to eq false
end
it 'returns true' do
contact = create(:contact, accepted: false)
expect(helper.instance_eval {
unaccepted_contact_exists(contact)
}).to eq true
end
end
context '#recipient_is_contact?' do
it 'returns false' do
helper.stub(:current_user).and_return(current_user)
assign(:recipient, recipient)
create_list(:contact, 2, user_id: current_user.id, accepted: true)
expect(helper.instance_eval { recipient_is_contact? }).to eq false
end
it 'returns true' do
helper.stub(:current_user).and_return(current_user)
assign(:recipient, recipient)
create_list(:contact, 2, user_id: current_user.id, accepted: true)
create(:contact,
user_id: current_user.id,
contact_id: recipient.id,
accepted: true)
expect(helper.instance_eval { recipient_is_contact? }).to eq true
end
end
def conv_heading_class(contact)
# show a conversation heading without or with options
if unaccepted_contact_exists(contact)
'conversation-heading-full'
else
'conversation-heading'
end
let(:contact) { create(:contact) }
it 'returns a conversation-heading-full class' do
contact.update(accepted: false)
expect(helper.conv_heading_class(contact)).to eq 'conversation-heading-full'
end
it 'returns a conversation-heading class' do
contact.update(accepted: true)
expect(helper.conv_heading_class(contact)).to eq 'conversation-heading'
end
contact = Contact.find_by_users(current_user.id, recipient.id)
it 'returns a Contact record' do
contact = create(:contact, user_id: current_user.id, contact_id: recipient.id)
helper.stub(:current_user).and_return(current_user)
expect(helper.get_contact_record(recipient)).to eq contact
end
def unaccepted_contact_request_partial_path(contact)
if unaccepted_contact_exists(contact)
if request_sent_by_user(contact)
"private/conversations/conversation/request_status/sent_by_current_user"
else
"private/conversations/conversation/request_status/sent_by_recipient"
end
else
'shared/empty_partial'
end
end
# show a link to send a contact request
# if an opposite user is not in contacts and no requests exist
def not_contact_no_request_partial_path(contact)
if recipient_is_contact? == false &amp;&amp; unaccepted_contact_exists(contact) == false
"private/conversations/conversation/request_status/send_request"
else
'shared/empty_partial'
end
end
private
def request_sent_by_user(contact)
# true if contact request was sent by the current_user
# false if it was sent by a recipient
contact['user_id'] == current_user.id
let(:contact) { contact = create(:contact) }
it "returns sent_by_current_user partial's path" do
helper.stub(:unaccepted_contact_exists).and_return(true)
helper.stub(:request_sent_by_user).and_return(true)
expect(helper.unaccepted_contact_request_partial_path(contact)).to eq(
'private/conversations/conversation/request_status/sent_by_current_user'
)
end
it "returns sent_by_recipient partial's path" do
helper.stub(:unaccepted_contact_exists).and_return(true)
helper.stub(:request_sent_by_user).and_return(false)
expect(helper.unaccepted_contact_request_partial_path(contact)).to eq(
'private/conversations/conversation/request_status/sent_by_recipient'
)
end
it "returns an empty partial's path" do
helper.stub(:unaccepted_contact_exists).and_return(false)
expect(helper.unaccepted_contact_request_partial_path(contact)).to eq(
'shared/empty_partial'
)
end
end
context '#not_contact_no_request' do
let(:contact) { contact = create(:contact) }
it "returns send_request partial's path" do
helper.stub(:recipient_is_contact?).and_return(false)
helper.stub(:unaccepted_contact_exists).and_return(false)
expect(helper.not_contact_no_request_partial_path(contact)).to eq(
'private/conversations/conversation/request_status/send_request'
)
end
it "returns an empty partial's path" do
helper.stub(:recipient_is_contact?).and_return(true)
helper.stub(:unaccepted_contact_exists).and_return(false)
expect(helper.not_contact_no_request_partial_path(contact)).to eq(
'shared/empty_partial'
)
end
it "returns an empty partial's path" do
helper.stub(:recipient_is_contact?).and_return(false)
helper.stub(:unaccepted_contact_exists).and_return(true)
expect(helper.not_contact_no_request_partial_path(contact)).to eq(
'shared/empty_partial'
)
end
end
context 'private scope' do
context '#request_sent_by_user' do
it 'returns true' do
contact = create(:contact, user_id: current_user.id)
helper.stub(:current_user).and_return(current_user)
expect(helper.instance_eval { request_sent_by_user(contact) }).to eq true
end
it 'returns false' do
contact = create(:contact, user_id: recipient.id)
helper.stub(:current_user).and_return(current_user)
expect(helper.instance_eval { request_sent_by_user(contact) }).to eq false
end
end
&lt;div class="add-user-to-contacts-message"&gt;
&lt;div&gt;
&lt;%= @recipient.name %&gt; is not in your contacts
&lt;/div&gt;
&lt;div&gt;
&lt;%= link_to "Add to contacts",
contacts_path(contact_id: @recipient),
remote: true,
method: :post,
class: 'add-user-to-contacts-notif' %&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="pending-request"&gt;
Contact request is pending
&lt;/div&gt;
data-user-name="&lt;%= @recipient.name %&gt;"&gt;
&lt;div class="contact-name"&gt;
&lt;%= @recipient.name %&gt; sent you a contact request
&lt;/div&gt;
&lt;div class="request-response"&gt;
&lt;span class="accept-request"&gt;
&lt;%= link_to "Accept",
contact_path(id: @recipient.id),
remote: true,
method: "put" %&gt;
&lt;/span&gt;
&lt;span class="decline-request"&gt;
&lt;%= link_to "Decline",
contact_path(id: @recipient.id),
remote: true,
method: :delete %&gt;
&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre><figcaption>private/conversations/conversation/request_status/_sent_by_recipient.html.erb</figcaption></figure><p>Commit the changes</p><pre><code class="language-bash">git add -A
git commit -m "Add a button on private conversation's window
display: none;
i {
opacity: 0.8;
&amp;:hover {
opacity: 1;
}
}
&amp;:hover {
color: white;
}
}
.add-user-to-contacts-message {
text-align: center;
padding: 10px 0;
}
.add-people-to-chat, .contact-request-sent {
display: none;
margin: 0;
padding: 0;
div {
width: 40px;
height: 40px;
display: table;
i {
display: table-cell;
text-align: center;
vertical-align: middle;
}
}
}
.add-people-to-chat {
i {
opacity: 0.8;
transition: opacity 0.15s;
}
&amp;:hover i {
opacity: 1;
}
}
.contact-request-status {
position: relative;
left: 0;
top: 0;
width: 400px;
text-align: center;
background-color: white;
z-index: 2;
.pending-request {
padding: 10px 0;
}
.request-response {
padding: 10px 0;
}
.accept-request, .decline-request {
a {
padding: 10px 0;
}
}
.contact-name {
padding: 10px 0 0 0;
}
.accept-request {
margin-right: 10px;
a {
color: green;
}
}
.decline-request {
a {
font-weight: bold;
color: red;
}
}
}</code></pre><figcaption>stylesheets/partials/conversation_window.scss</figcaption></figure><p>Commit the changes</p><pre><code class="language-bash">git add -A
if ( panel_body.css('display') == 'none' ) {
panel.find('.add-people-to-chat,\
.add-user-to-contacts,\
.contact-request-sent').hide();
conversation_heading = panel.find('.conversation-heading');
conversation_heading.css('width', '360px');
} else { // show conversation menu options
conversation_heading = panel.find('.conversation-heading');
conversation_heading.css('width', '320px');
panel.find('.add-people-to-chat,\
.add-user-to-contacts,\
.contact-request-sent').show();
// focus textarea
$('form textarea', this).focus();
self.table_name = 'group_conversations'
has_and_belongs_to_many :users
has_many :messages,
class_name: "Group::Message",
foreign_key: 'conversation_id',
dependent: :destroy
serialize :seen_by, Array
serialize :added_new_users, Array
self.table_name = "group_messages"
belongs_to  :conversation,
class_name: 'Group::Conversation',
foreign_key: 'conversation_id'
belongs_to :user
validates :content, presence: true
validates :user_id, presence: true
validates :conversation_id, presence: true
default_scope { includes(:user) }
# get a previous message of a conversation
def previous_message
previous_message_index = self.conversation.messages.index(self) - 1
self.conversation.messages[previous_message_index]
end
factory :group_message, class: 'Group::Message' do
content 'a' * 20
association :conversation, factory: :group_conversation
user
end
association = described_class.reflect_on_association(:group_messages)
expect(association.macro).to eq :has_many
expect(association.options[:class_name]).to eq 'Group::Message'
end
it 'has_and_belongs_to_many group_conversations' do
association = described_class.reflect_on_association(:group_conversations)
expect(association.macro).to eq :has_and_belongs_to_many
expect(association.options[:class_name]).to eq 'Group::Conversation'
RSpec.describe Group::Conversation, type: :model do
let(:conversation) { build(:group_conversation) }
context 'Associations' do
it 'has_and_belongs_to_many users' do
association = described_class.reflect_on_association(:users)
expect(association.macro).to eq :has_and_belongs_to_many
end
it 'has_many messages' do
association = described_class.reflect_on_association(:messages)
expect(association.macro).to eq :has_many
expect(association.options[:class_name]).to eq 'Group::Message'
expect(association.options[:foreign_key]).to eq 'conversation_id'
expect(association.options[:dependent]).to eq :destroy
end
end
end</code></pre><figcaption>spec/models/group/conversation_spec.rb</figcaption></figure><pre><code class="language-rb">require 'rails_helper'
RSpec.describe Group::Message, type: :model do
let(:message) { build(:group_message) }
context 'Associations' do
it 'belongs_to group_conversation' do
association = described_class.reflect_on_association(:conversation)
expect(association.macro).to eq :belongs_to
expect(association.options[:class_name]).to eq 'Group::Conversation'
expect(association.options[:foreign_key]).to eq 'conversation_id'
end
end
context 'Validations' do
it "is not valid without a content" do
message.content = nil
expect(message).not_to be_valid
end
it "is not valid without a conversation_id" do
message.conversation_id = nil
expect(message).not_to be_valid
end
it "is not valid without a user_id" do
message.user_id = nil
expect(message).not_to be_valid
end
end
context 'Methods' do
it 'gets a previous message of a conversation' do
conversation = create(:group_conversation)
message1 = create(:group_message, conversation_id: conversation.id)
message2 = create(:group_message, conversation_id: conversation.id)
expect(message2.previous_message).to eq message1
end
end
def change
create_table :group_conversations do |t|
t.string :name
t.timestamps
end
end
def change
create_table :group_conversations_users, id: false do |t|
t.integer :conversation_id
t.integer :user_id
end
add_index :group_conversations_users, :conversation_id
add_index :group_conversations_users, :user_id
end
def change
create_table :group_messages do |t|
t.string :content
t.string :added_new_users
t.string :seen_by
t.belongs_to :user, index: true
t.belongs_to :conversation, index: true
t.timestamps
end
end
end</code></pre><figcaption>db/migrate/CREATION_DATE_create_group_messages.rb</figcaption></figure><p>The fundamentals of the group conversation are set.</p><p>Commit the changes</p><pre><code class="language-bash">git add -A
git commit -m "Create Group::Conversation and Group::Message models
- Define associations
def create
@conversation = create_group_conversation
add_to_conversations unless already_added?
respond_to do |format|
format.js
end
end
private
def add_to_conversations
session[:group_conversations] ||= []
session[:group_conversations] &lt;&lt; @conversation.id
end
def already_added?
session[:group_conversations].include?(@conversation.id)
end
def create_group_conversation
Group::NewConversationService.new({
creator_id: params[:creator_id],
private_conversation_id: params[:private_conversation_id],
new_user_id: params[:group_conversation][:id]
}).call
end
def initialize(params)
@creator_id = params[:creator_id]
@private_conversation_id = params[:private_conversation_id]
@new_user_id = params[:new_user_id]
end
def call
creator = User.find(@creator_id)
pchat_opposed_user = Private::Conversation.find(@private_conversation_id)
.opposed_user(creator)
new_user_to_chat = User.find(@new_user_id)
new_group_conversation = Group::Conversation.new
new_group_conversation.name = '' + creator.name + ', ' +
pchat_opposed_user.name + ', ' +
new_user_to_chat.name
if new_group_conversation.save
arr_of_users_ids = [creator.id, pchat_opposed_user.id, new_user_to_chat.id]
# add users to the conversation
creator.group_conversations &lt;&lt; new_group_conversation
pchat_opposed_user.group_conversations &lt;&lt; new_group_conversation
new_user_to_chat.group_conversations &lt;&lt; new_group_conversation
# create an initial message with an information about the conversation
create_initial_message(creator, arr_of_users_ids, new_group_conversation)
# return the conversation
new_group_conversation
end
end
private
def create_initial_message(creator, arr_of_users_ids, new_group_conversation)
message = Group::Message.create(
user_id: creator.id,
content: 'Conversation created by ' + creator.name,
added_new_users: arr_of_users_ids ,
conversation_id: new_group_conversation.id
)
end
require './app/services/group/new_conversation_service.rb'
describe Group::NewConversationService do
let(:user1) { create(:user) }
let(:user2) { create(:user) }
let(:new_user) { create(:user) }
let(:private_conversation) { create(:private_conversation,
sender_id: user1.id,
recipient_id: user2.id) }
context '#call' do
it 'returns a new created group conversation' do
new_conversation = Group::NewConversationService.new({
creator_id: user1.id,
private_conversation_id: private_conversation.id,
new_user_id: new_user.id
}).call
last_conversation = Group::Conversation.last
expect(new_conversation).to eq last_conversation
expect(last_conversation.messages.count).to eq 1
end
end
end</code></pre><figcaption>spec/services/group/new_conversation_service_spec.rb</figcaption></figure><p>Commit the changes</p><pre><code class="language-bash">git add -A
git commit -m "Create back-end for creating a new group conversation
- Create a Group::ConversationsController
Define a create action and add_to_conversations,
create_group_conversation and already_added? private methods inside
resources :conversations do
member do
post :close
post :open
end
end
resources :messages, only: [:index, :create]
end</code></pre><figcaption>routes.rb</figcaption></figure><p>Commit the changes</p><pre><code class="language-bash">git add -A
if user_signed_in?
# opened conversations
session[:private_conversations] ||= []
session[:group_conversations] ||= []
@private_conversations_windows = Private::Conversation.includes(:recipient, :messages)
.find(session[:private_conversations])
@group_conversations_windows = Group::Conversation.find(session[:group_conversations])
else
@private_conversations_windows = []
@group_conversations_windows = []
end
def call
all_private_conversations = Private::Conversation.all_by_user(@user.id)
.includes(:messages)
all_group_conversations = @user.group_conversations.includes(:messages)
all_conversations = all_private_conversations + all_group_conversations
return all_conversations = all_conversations.sort{ |a, b|
b.messages.last.created_at &lt;=&gt; a.messages.last.created_at
}
context '#call' do
it 'returns ordered conversations in descending order' do
user = create(:user)
conversation1 = create(:private_conversation,
sender_id: user.id,
messages: [create(:private_message)])
conversation2 = create(:group_conversation,
users: [user],
messages: [create(:group_message)])
conversation3 = create(:private_conversation,
sender_id: user.id,
messages: [create(:private_message)])
conversations = [conversation3, conversation2, conversation1]
expect(OrderConversationsService.new({user: user}).call).to eq conversations
end
end
end</code></pre><figcaption>spec/services/order_conversations_service_spec.rb</figcaption></figure><p>Commit the changes</p><pre><code class="language-bash">git add -A
git commit -m "Get data for group conversations in ApplicationController
- Update the opened_conversations_windows method
if user_signed_in?
gon.group_conversations = current_user.group_conversations.ids
gon.user_id = current_user.id
cookies[:user_id] = current_user.id if current_user.present?
cookies[:group_conversations] = current_user.group_conversations.ids
else
gon.group_conversations = []
end
end</code></pre><figcaption>controllers/application_controller.rb</figcaption></figure><p>Use the <code>before_action</code> filter to call this method</p><pre><code>before_action :set_user_data</code></pre><p>Commit the changes</p><pre><code class="language-bash">git add -A
&lt;div class="add-people-to-chat" title="Create a group chat"&gt;
&lt;div&gt;
&lt;i class="fa fa-plus" aria-hidden="true" data-toggle="dropdown"&gt;&lt;/i&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;!-- select users to add to conversation --&gt;
&lt;div class="select-users-to-chat"&gt;
&lt;%= form_for(Group::Conversation.new, remote: true, class: 'form-group') do |f| %&gt;
&lt;%= hidden_field_tag :creator_id, current_user.id %&gt;
&lt;%= hidden_field_tag :private_conversation_id, conversation.id %&gt;
&lt;%= f.collection_select(:id,
contacts_except_recipient(@recipient),
:id,
:name,
{},
{:class=&gt;'form-control select-users-dropdown'}) %&gt;
&lt;%= f.submit 'Start a conversation', class: 'form-control select-users-button' %&gt;
&lt;% end %&gt;
contacts = current_user.all_active_contacts
# return all contacts, except the opposite user of the chat
contacts.delete_if {|contact| contact.id == recipient.id }
it 'return all contacts, except the opposite user of the chat' do
contacts = create_list(:contact,
5,
user_id: current_user.id,
accepted: true)
contacts &lt;&lt; create(:contact,
user_id: current_user.id,
contact_id: recipient.id,
accepted: true)
helper.stub(:current_user).and_return(current_user)
expect(helper.contacts_except_recipient(recipient)).not_to include recipient
end
if recipient_is_contact?
'private/conversations/conversation/heading/create_group_conversation'
else
'shared/empty_partial'
end
let(:contact) { create(:contact) }
it "returns a create_group_conversation partial's path" do
helper.stub(:recipient_is_contact?).and_return(true)
expect(helper.create_group_conv_partial_path(contact)).to(
eq 'private/conversations/conversation/heading/create_group_conversation'
)
end
it "returns an empty partial's path" do
helper.stub(:recipient_is_contact?).and_return(false)
expect(helper.create_group_conv_partial_path(contact)).to(
eq 'shared/empty_partial'
)
end
end</code></pre><figcaption>spec/helpers/private/conversations_helper_spec.rb</figcaption></figure><p>Commit the changes.</p><pre><code class="language-bash">git add -A
padding: 5px 0 5px 5px;
border-bottom: 1px solid rgba(0, 0, 0, 0.1);
position: absolute;
top: 40px;
background-color: white;
display: none;
height: 45px;
width: 100%;
z-index: 2;
}
.select-users-dropdown, .select-users-button {
border: none;
display: inline-block;
margin: 0;
height: 35px;
}
.select-users-dropdown {
width: 55%;
border: 1px solid rgba(0, 0, 0, 0.2);
}
.select-users-button {
width: 40%;
background-color: $navbarColor;
color: white;
border: 1px solid $navbarColor;
//  when add more contacts to a conversation button is clicked
//  toggle contacts selection
$('body').on('click', '.add-people-to-chat', function(e) {
$(this).next().toggle(100, 'swing');
});
git commit -m "
- Describe style for the create a group conversation option
&lt;li id="menu-gc&lt;%= conversation.id %&gt;" class="&lt;%= seen_status %&gt;"&gt;
&lt;%= link_to truncate(conversation.name, :length =&gt; 40),
open_group_conversation_path(id: conversation.id),
remote: true,
method: :post,
class: 'bigger-screen-link' %&gt;
# if the current_user is nil, it means that the helper is called from the service
# return an empty string
if current_user == nil
''
else
# if the last message of the conversation is not created by this user
# and is unseen, return an unseen-conv value
not_created_by_user = conversation.messages.last.user_id != current_user.id
seen_by_user = conversation.messages.last.seen_by.include? current_user.id
not_created_by_user &amp;&amp; seen_by_user == false ? 'unseen-conv' : ''
end
it 'returns unseen-conv status' do
conversation = create(:group_conversation)
create(:group_message, conversation_id: conversation.id)
current_user = create(:user)
view.stub(:current_user).and_return(current_user)
expect(helper.group_conv_seen_status(conversation)).to eq(
'unseen-conv'
)
end
it 'returns an empty string' do
user = create(:user)
conversation = create(:group_conversation)
create(:group_message, conversation_id: conversation.id, user_id: user.id)
view.stub(:current_user).and_return(user)
expect(helper.group_conv_seen_status(conversation)).to eq ''
end
it 'returns an empty string' do
user = create(:user)
conversation = create(:group_conversation)
message = build(:group_message, conversation_id: conversation.id)
message.seen_by &lt;&lt; user.id
message.save
view.stub(:current_user).and_return(user)
expect(helper.group_conv_seen_status(conversation)).to eq ''
end
end</code></pre><figcaption>spec/helpers/shared/conversations_helper_spec.rb</figcaption></figure><p>Commit the changes.</p><pre><code class="language-bash">git add -A
&lt;%= render partial: "group/conversations/conversation",
locals: { conversation: conversation,
user: current_user } %&gt;
&lt;% end %&gt;</code></pre><figcaption>layouts/application/_group_conversations_windows.html.erb</figcaption></figure><p>Commit the change.</p><pre><code class="language-bash ">git add -A
git commit -m "Render group conversations' windows inside the
&lt;% @is_messenger = false %&gt;
&lt;li class="conversation-window" id="gc&lt;%= conversation.id %&gt;" data-turbolinks-permanent&gt;
&lt;div class="panel panel-default" data-gconversation-id="&lt;%= conversation.id %&gt;"&gt;
&lt;%= render  'group/conversations/conversation/heading',
conversation: conversation %&gt;
&lt;%= render  'group/conversations/conversation/select_users',
conversation: conversation,
add_people_to_conv_list: add_people_to_conv_list %&gt;
&lt;div class="panel-body"&gt;
&lt;%= render  'group/conversations/conversation/messages_list',
conversation: conversation %&gt;
&lt;%= render  'group/conversations/conversation/new_message_form',
conversation: conversation,
user: user %&gt;
&lt;/div&gt;&lt;!-- panel-body --&gt;
&lt;/div&gt;&lt;!-- panel --&gt;
def add_people_to_group_conv_list(conversation)
contacts = current_user.all_active_contacts
users_in_conv = conversation.users
add_people_to_conv_list = []
contacts.each do |contact|
# if the contact is already in the conversation, remove it from the list
if !users_in_conv.include?(contact)
add_people_to_conv_list &lt;&lt; contact
end
end
add_people_to_conv_list
end
let(:conversation) { create(:group_conversation) }
let(:current_user) { create(:user) }
let(:user) { create(:user) }
before(:each) do
create(:contact,
user_id: current_user.id,
contact_id: user.id,
accepted: true)
end
it 'a user is not included in a list' do
conversation.users &lt;&lt; current_user
conversation.users &lt;&lt; user
helper.stub(:current_user).and_return(current_user)
expect(helper.add_people_to_group_conv_list(conversation)).not_to include user
end
it 'a user is included in a list' do
conversation.users &lt;&lt; current_user
helper.stub(:current_user).and_return(current_user)
expect(helper.add_people_to_group_conv_list(conversation)).to include user
end
end</code></pre><figcaption>spec/helpers/group/conversations_helper_spec.rb</figcaption></figure><p>Just like with private conversations, group conversations are going to &nbsp;be accessible across the whole app, so obviously, we need access to the <code>Group::ConversationsHelper</code> methods everywhere too. Add this module inside the <code>ApplicationHelper</code></p><pre><code>include Group::ConversationsHelper</code></pre><p>Commit the changes.</p><pre><code class="language-bash">git add -A
git commit -m "
- Create a _conversation.html.erb inside the group/conversations
&lt;%= truncate(conversation.name, :length =&gt; 40) %&gt;
&lt;/div&gt;
&lt;!-- Close the conversation button --&gt;
&lt;%= link_to "X",
close_group_conversation_path(conversation),
class: 'close-conversation',
title: 'Close',
remote: true,
method: :post %&gt;
&lt;!-- Add more contacts to the conversation button --&gt;
&lt;div class="add-people-to-chat" title="Add people to chat"&gt;
&lt;div&gt;
&lt;i class="fa fa-plus" aria-hidden="true" data-toggle="dropdown"&gt;&lt;/i&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre><figcaption>group/conversations/conversation/_heading.html.erb</figcaption></figure><p>Commit the change.</p><pre><code class="language-bash">git add -A
git commit -m "Create a _heading.html.erb inside the
&lt;%= form_tag  group_conversation_path(conversation),
method: 'put',
class: 'form-group' do %&gt;
&lt;%= hidden_field_tag :added_by, current_user.id %&gt;
&lt;%= collection_select(:user,
:id,
add_people_to_conv_list,
:id,
:name,
{},
{:class=&gt;'form-control select-users-dropdown'}) %&gt;
&lt;%= submit_tag 'Add the user', class: 'form-control select-users-button' %&gt;
&lt;% end %&gt;
&lt;%= render partial: load_group_messages_partial_path(conversation),
locals: { conversation: conversation, messenger_boolean: false } %&gt;
&lt;div class="loading-more-messages"&gt;
&lt;i class="fa fa-spinner" aria-hidden="true"&gt;&lt;/i&gt;
&lt;/div&gt;
&lt;!-- messages --&gt;
&lt;ul&gt;
&lt;/ul&gt;
if conversation.messages.count &gt; 0
'group/conversations/conversation/messages_list/load_messages'
else
'shared/empty_partial'
end
let(:conversation) { create(:group_conversation) }
it "returns load_messages partial's path" do
create_list(:group_message, 2, conversation_id: conversation.id)
expect(helper.load_group_messages_partial_path(conversation)).to eq(
'group/conversations/conversation/messages_list/link_to_previous_messages'
)
end
it "returns an empty partial's path" do
expect(helper.load_group_messages_partial_path(conversation)).to eq(
'shared/empty_partial'
)
end
end</code></pre><figcaption>spec/helpers/group/conversations_helper_spec.rb</figcaption></figure><p>Commit the changes.</p><pre><code class="language-bash">git add -A
git commit -m "
- Create _select_user.html.erb and _messages_list.html.erb inside
group/conversations/conversation
- Define a load_group_messages_partial_path helper method
group_messages_path(:conversation_id =&gt; conversation.id,
:messages_to_display_offset =&gt; @messages_to_display_offset,
:is_messenger =&gt; @is_messenger),
class: 'load-more-messages',
remote: true %&gt;</code></pre><figcaption>group/conversations/conversation/messages_list/_link_to_previous_messages.html.erb</figcaption></figure><p>Commit the change.</p><pre><code class="language-bash">git add -A
git commit -m "Create a _load_messages.html.erb inside the
&lt;input  name="conversation_id"
type="hidden"
value="&lt;%= conversation.id %&gt;"&gt;
&lt;input  name="user_id"
type="hidden"
value="&lt;%= user.id %&gt;"&gt;
&lt;textarea name="content"
rows="3"
class="form-control"
placeholder="Type a message..."&gt;&lt;/textarea&gt;
&lt;input type="submit" class="btn btn-success send-message"&gt;
&lt;/form&gt;</code></pre><figcaption>group/conversations/conversation/_new_message_form.html.erb</figcaption></figure><p>Commit the change.</p><pre><code class="language-bash">git add -A
git commit -m "Create a _new_message_form.html.erb inside the
include Messages
def index
get_messages('group', 15)
@user = current_user
@is_messenger = params[:is_messenger]
respond_to do |format|
format.js { render partial: 'group/messages/load_more_messages' }
end
end
end</code></pre><figcaption>controllers/group/messages_controller.rb</figcaption></figure><p>Commit the changes.</p><pre><code class="language-bash">git add -A
&lt;%= render append_previous_messages_partial_path %&gt;
&lt;%= render replace_link_to_group_messages_partial_path %&gt;
'group/messages/load_more_messages/window/replace_link_to_messages'
.replaceWith('\
&lt;%= j render partial: "group/conversations/conversation/messages_list/link_to_previous_messages",\
locals: { conversation: @conversation } %&gt;\
');</code></pre><figcaption>group/messages/load_more_messages/window/_replace_link_to_messages.js.erb</figcaption></figure><p>Also add the <code>Group::MessagesHelper</code> to the <code>ApplicationHelper</code></p><pre><code>include Group::MessagesHelper</code></pre><p>Commit the changes.</p><pre><code class="language-bash">git add -A
@conversation = Group::Conversation.find(params[:id])
add_to_conversations unless already_added?
respond_to do |format|
format.js { render partial: 'group/conversations/open' }
end
"&lt;%= @conversation.id %&gt;" +
"']");
var chat_windows_count = $('.conversation-window').length + 1;
if (conversation.length !== 1) {
$('body').append("&lt;%= j(render 'group/conversations/conversation',\
conversation: @conversation,\
user: current_user) %&gt;");
conversation = $('body').find("[data-gconversation-id='" +
"&lt;%= @conversation.id %&gt;" +
"']");
}
// Toggle conversation window after its creation
$('.conversation-window:nth-of-type(' + chat_windows_count + ')\
.conversation-heading').click();
// mark as seen by clicking it
setTimeout(function(){
$('.conversation-window:nth-of-type(' + chat_windows_count + ')').click();
}, 1000);
// focus textarea
$('.conversation-window:nth-of-type(' + chat_windows_count + ')\
form\
textarea').focus();
var messages_list = conversation.find('.messages-list');
var height = messages_list[0].scrollHeight;
messages_list.scrollTop(height);
// repositions all conversation windows
positionChatWindows();</code></pre><figcaption>group/conversations/_open.js.erb</figcaption></figure><p>Now we’re able to open conversations by clicking on navigation bar’s drop down menu links. Try to test it with feature specs on your own.</p><p>Commit the changes.</p><pre><code class="language-bash">git add -A
git commit -m "Add ability to open group conversations
- Create an open action in the Group::ConversationsController
previous_message),
locals: { message: message } %&gt;
&lt;li class="group-message"&gt;
&lt;div class="row &lt;%= seen_by_user? %&gt;" data-seen-by="&lt;%= group_message_seen_by(message) %&gt;"&gt;
&lt;%= render partial: message_content_partial_path(user, message, previous_message),
locals: { user: user, message: message } %&gt;
&lt;/div&gt;
# if a previous message exists
if defined?(previous_message) &amp;&amp; previous_message.present?
# if the date is different between the previous and new messages
if previous_message.created_at.to_date != new_message.created_at.to_date
'group/messages/message/new_date'
else
'shared/empty_partial'
end
else
'shared/empty_partial'
end
end
def group_message_seen_by(message)
seen_by_names = []
# If anyone has seen the message
if message.seen_by.present?
message.seen_by.each do |user_id|
seen_by_names &lt;&lt; User.find(user_id).name
end
end
seen_by_names
end
def message_content_partial_path(user, message, previous_message)
# if previous message exists
if defined?(previous_message) &amp;&amp; previous_message.present?
# if new message is created by the same user as previous'
if previous_message.user_id == user.id
'group/messages/message/same_user_content'
else
'group/messages/message/different_user_content'
end
else
'group/messages/message/different_user_content'
end
end
def seen_by_user?
@seen_by_user ? '' : 'unseen'
end</code></pre><figcaption>helpers/group_message_helper.rb</figcaption></figure><p>The <code>group_message_seen_by</code> method will return a list of users who have seen a message. This little &nbsp;information allows us to create extra features, like show to &nbsp;conversation participants who have seen messages, etc. But in our case, &nbsp;we’ll use this information to determine if a current user has seen a &nbsp;message, or not. If not, then after the user sees it, the message is &nbsp;going to be marked as seen.</p><p>Also we’ll need helper methods from the <code>Shared</code> module. Inside the <code>Group::MessagesHelper</code>, add the module.</p><pre><code>require 'shared/messages_helper'
let(:message) { create(:group_message) }
it 'returns an array with users' do
users = create_list(:user, 2)
users.each do |user|
message.seen_by &lt;&lt; user.id
end
message.save
users.map! { |user| user.name }
expect(helper.group_message_seen_by(message)).to eq users
end
it 'returns an empty array' do
users = []
expect(helper.group_message_seen_by(message)).to eq users
end
end
context '#message_content_partial_path' do
let(:user) { create(:user) }
let(:message) { create(:group_message) }
let(:previous_message) { create(:group_message) }
it "returns same_user_content partial's path" do
previous_message.update(user_id: user.id)
expect(helper.message_content_partial_path(user,
message,
previous_message)).to eq(
'group/messages/message/same_user_content'
)
end
it "returns different_user_content partial's path" do
expect(helper.message_content_partial_path(user,
message,
previous_message)).to eq(
'group/messages/message/different_user_content'
)
end
it "returns different_user_content partial's path" do
previous_message = nil
expect(helper.message_content_partial_path(user,
message,
previous_message)).to eq(
'group/messages/message/different_user_content'
)
end
end
context '#group_message_date_check_partial_path' do
let(:new_message) { create(:group_message) }
let(:previous_message) { create(:group_message) }
it "returns a new_date partial's path" do
new_message.update(created_at: 2.days.ago)
expect(helper.group_message_date_check_partial_path(new_message,
previous_message)).to eq(
'group/messages/message/new_date'
)
end
it "returns an empty partial's path" do
expect(helper.group_message_date_check_partial_path(new_message,
previous_message)).to eq(
'shared/empty_partial'
)
end
it "returns an empty partial's path" do
previous_message = nil
expect(helper.group_message_date_check_partial_path(new_message,
previous_message)).to eq(
'shared/empty_partial'
)
end
end</code></pre><figcaption>spec/helpers/group/messages_helper_spec.rb</figcaption></figure><p>Commit the changes.</p><pre><code class="language-bash">git add -A
git commit -m "Create a _message.html.erb inside group/messages
- Define group_message_date_check_partial_path,
group_message_seen_by and message_content_partial_path helper
&lt;span&gt;&lt;%= message.created_at.to_date %&gt;&lt;/span&gt;
&lt;span class="message-time"&gt;&lt;%= message.created_at.to_s(:time) %&gt;&lt;/span&gt;
&lt;p class="message-content"&gt;
&lt;%= message.content %&gt;
&lt;p class="message-content"&gt;
&lt;%= message.content %&gt;
&lt;/p&gt;</code></pre><figcaption>group/messages/message/_same_user_content.html.erb</figcaption></figure><p>Commit the changes.</p><pre><code class="language-bash">git add -A
git commit -m "Create _new_date.html.erb,
_different_user_content.html.erb and _same_user_content.html.erb
&lt;% @messages.reverse.each do |message| %&gt;
&lt;%= render  partial: 'group/messages/message',
locals: { user: message.user,
conversation_id: @conversation.id,
message: message,
previous_message: previous_message } %&gt;
&lt;% previous_message = message %&gt;
&lt;% end %&gt;</code></pre><figcaption>group/conversations/_messages.html.erb</figcaption></figure><p>Commit the change.</p><pre><code class="language-bash">git add -A
padding: 0 10px;
word-wrap: break-word;
z-index: 1;
.row {
position: relative;
}
.hidden-item {
position: absolute;
left: 0;
vertical-align: middle;
line-height: 20px;
visibility: hidden;
}
.message-content {
margin-left: 40px;
}
&amp;:hover {
background-color: rgb(250, 250, 250);
}
p {
margin: 0;
}
.message-author, .message-time {
font-size: 12px;
font-size: 1.2rem;
}
.message-author {
margin-left: 40px;
font-weight: bold;
}
.message-time {
padding-left: 2px;
color: rgba(0,0,0,0.5);
}
&amp;:hover .message-time {
visibility: visible;
}
}</code></pre><figcaption>assets/stylesheets/partials/conversation_window.scss</figcaption></figure><p>Commit the change.</p><pre><code class="language-bash">git add -A
@conversation = Group::Conversation.find(params[:id])
session[:group_conversations].delete(@conversation.id)
respond_to do |format|
format.js
end
.parent()
.remove();
positionChatWindows();</code></pre><figcaption>group/conversations/close.js.erb</figcaption></figure><p>Commit the changes.</p><pre><code class="language-bash">git add -A
git commit -m "Add a close group conversation window functionality
- Define a close action inside the Group::ConversationsController
def subscribed
if belongs_to_conversation(params[:id])
stream_from "group_conversation_#{params[:id]}"
end
end
def unsubscribed
stop_all_streams
end
def set_as_seen(data)
# find a conversation and set its last message as seen
conversation = Group::Conversation.find(data['conv_id'])
last_message = conversation.messages.last
last_message.seen_by &lt;&lt; current_user.id
last_message.save
end
def send_message(data)
message_params = data['message'].each_with_object({}) do |el, hash|
hash[el['name']] = el['value']
end
message = Group::Message.new(message_params)
if message.save
previous_message = message.previous_message
Group::MessageBroadcastJob.perform_later(message, previous_message, current_user)
end
end
private
# checks if a user belongs to a conversation
def belongs_to_conversation(id)
conversations = current_user.group_conversations.ids
conversations.include?(id)
end
end</code></pre><figcaption>channels/group/conversation_channel.rb</figcaption></figure><p>This time we check if a user belongs to a conversation, before establishing the connection, with the <code>belongs_to_conversation</code> method. In private conversations we streamed from a unique channel, by providing the <code>current_user</code>’s id. In a case of group conversations, an id of a conversation is passed from the client side. With the <code>belongs_to_conversation</code> method we check if users didn’t do any manipulations and didn’t try to connect to a channel which they don’t belong to.</p><p>Commit the change</p><pre><code class="language-bash">git add -A
queue_as :default
def perform(message, previous_message, current_user)
# broadcast message to all conversation's participants
conversation_id = message.conversation_id
ActionCable.server.broadcast(
"group_conversation_#{conversation_id}",
message: render_message(message, previous_message),
conversation_id: conversation_id,
user_id: message.user_id
)
end
def render_message(message, previous_message)
ApplicationController.render(
partial: 'group/messages/message',
locals: { message: message,
previous_message: previous_message,
user: message.user }
)
end
end</code></pre><figcaption>jobs/group/message_broadcast_job.rb</figcaption></figure><p>Commit the change.</p><pre><code class="language-bash">git add -A
subToGroupConversationChannel(gon.group_conversations[i]);
}
function subToGroupConversationChannel(id) {
App['group_conversation_' + id]  = App.cable.subscriptions.create(
{
channel: 'Group::ConversationChannel',
id: id
},
{
connected: function() {},
disconnected: function() {},
received: function(data) {
console.log('sawp');
// prepend link to the conversation
// to the top of conversations menu list
modifyConversationsMenuList(data['conversation_id']);
// set variables
var conversation = findConv(data['conversation_id'], 'g');
var conversation_rendered = ConvRendered(data['conversation_id'], 'g');
var messages_visible = ConvMessagesVisiblity(conversation);
// if the message is not sent by the user,
// mark the conversation as unseen
MarkGroupConvAsUnseen(data['user_id'], data['conversation_id']);
// append the new message
appendGroupMessage(conversation_rendered,
messages_visible,
conversation,
data['message']);
// if the conversation window is rendered
if (conversation_rendered) {
// after the new message was appended
// scroll to the bottom of the conversation window
var messages_list = conversation.find('.messages-list');
var height = messages_list[0].scrollHeight;
messages_list.scrollTop(height);
}
},
send_message: function(message) {
return this.perform('send_message', {
message: message
});
},
set_as_seen: function(conv_id) {
return this.perform('set_as_seen', { conv_id: conv_id });
}
}
);
}
$(document).on('submit', '.send-group-message', function(e) {
e.preventDefault();
var id = $(this).find('input[name=conversation_id]').val();
var message_values = $(this).serializeArray();
App['group_conversation_' + id].send_message(message_values);
});
// if the last message in the conversation is not seen by the user
// mark unseen messages as seen
$(document).on('click', '.conversation-window, .group-conversation', function(e) {
var latest_message = $('.messages-list ul li:last .row', this);
var unseen_by_user = latest_message.hasClass('unseen');
// if not seen by the user
if (unseen_by_user) {
var conv_id = $(this).find('.panel').attr('data-gconversation-id');
// if conv_id doesn't exist, it means that message was seen in messenger
if (conv_id == null) {
var conv_id = $(this).find('.messages-list').attr('data-gconversation-id');
}
// mark conversation as seen in conversations menu list
$('#menu-gc' + conv_id).removeClass('unseen-conv');
latest_message.removeClass('unseen');
calculateUnseenConversations();
App['group_conversation_' + conv_id].set_as_seen(conv_id);
}
});
function MarkGroupConvAsUnseen(message_user_id, conversation_id) {
// if the message is not sent by the user, mark the conversation as unseen
if (message_user_id != gon.user_id) {
newGroupConvMenuListLink(conversation_id);
// mark the conversation as unseen, after the new message is received
$('#menu-gc' + conversation_id).addClass('unseen-conv');
calculateUnseenConversations();
}
}
// prepend link to the conversation to the top of conversations menu list
function modifyConversationsMenuList(conversation_id) {
// if the conversation link in conversations menu list exists
// move conversation link to the top of the conversations menu list
var conversation_menu_link = $('#conversations-menu ul')
.find('#menu-gc' + conversation_id);
if (conversation_menu_link.length) {
conversation_menu_link.prependTo('#conversations-menu ul');
}
}
// append the new message to the list
function appendGroupMessage(conversation_rendered,
messages_visible,
group_conversation,
message) {
if (conversation_rendered) {
// if the conversation is collapsed
if (!messages_visible) {
// mark its header color
}
// append the new message to the list
group_conversation
.find('.messages-list')
.find('ul')
.append(message);
}
}
// if the conversation link in the conversations menu list doesn't exist
// create a new link with the receiver's name and prepend it to the list
function newGroupConvMenuListLink(conversation_id) {
var id_attr = '#menu-gc' + conversation_id;
var conversation_menu_link = $('#conversations-menu ul').find(id_attr);
if (conversation_menu_link.length == 0) {
var list_item = '&lt;li class="conversation-window"&gt;\
&lt;a data-remote="true"\
rel="nofollow"\
data-method="post"\
href="/group_conversations?group_conversation_id=' +  conversation_id + '"&gt;\
group conversation\
&lt;/a&gt;\
&lt;/li&gt;';
$('#conversations-menu ul').prepend(list_item);
}
}</code></pre><figcaption>assets/javascripts/channels/group/conversation.js</figcaption></figure><p>Essentially, it’s very similar to the private conversation’s <code>.js</code> file. The layout of the code is a little bit different. The main difference is an ability to pass conversation’s <code>id </code>to &nbsp;a channel and a loop at the top of the file. With this loop we connect a &nbsp;user to all its group conversations’ channels. That is the reason why &nbsp;we have used the <code>belongs_to_conversation</code> method on the server side. Id’s of the conversations are passed from &nbsp;the client side. This method on the server side makes sure that a user &nbsp;really belongs to a provided conversation.</p><p>When &nbsp;you think about it, we could have just created this loop on the server &nbsp;side and wouldn’t have to deal with all this confirmation process. But &nbsp;here’s a reason why we pass an id of a conversation from the client &nbsp;side. When new users get added to a group conversation, we want to &nbsp;connect them immediately to the conversation’s channel, without &nbsp;requiring to reload a page. The passable conversation’s id allows us to &nbsp;effortlessly achieve that. In the upcoming section we’ll create a unique &nbsp;channel for every user to receive notifications in real time. When new &nbsp;users will be added to a group conversation, we’ll call the <code>subToGroupConversationChannel</code> function, through their unique notification channels, and connect them &nbsp;to the group conversation channel. If we didn’t allow to pass a &nbsp;conversation’s id to a channel, connections to new channels would have &nbsp;occurred only after a page reload. We wouldn’t have any way to connect &nbsp;new users to a conversation channel dynamically.</p><p>Now we are able to send and receive group messages in real time. Try to test the overall functionality with specs on your own.</p><p>Commit the changes.</p><pre><code class="language-bash">git add -A
git commit -m "Create a conversation.js inside the
Group::AddUserToConversationService.new({
conversation_id: params[:id],
new_user_id: params[:user][:id],
added_by_id: params[:added_by]
}).call
def initialize(params)
@group_conversation_id = params[:group_conversation_id]
@new_user_id = params[:new_user_id]
@added_by_id = params[:added_by_id]
end
def call
group_conversation = Group::Conversation.find(@group_conversation_id)
new_user = User.find(@new_user_id)
added_by = User.find(@added_by_id)
if new_user.group_conversations &lt;&lt; group_conversation
create_info_message(new_user, added_by)
end
end
private
def create_info_message(new_user, added_by)
message = Group::Message.new(
user_id: added_by.id,
content: '' + new_user.name + ' added by ' + added_by.name,
added_new_users: [new_user.id],
group_conversation_id: @group_conversation_id)
if message.save
Group::MessageBroadcastJob.perform_later(message, nil, nil)
end
end
require './app/services/group/add_user_to_conversation_service.rb'
describe Group::AddUserToConversationService do
context '#call' do
let(:user) { create(:user) }
let(:new_user) { create(:user) }
let(:conversation) { create(:group_conversation, users: [user]) }
let(:add_user_to_conversation) do
Group::AddUserToConversationService.new({
conversation_id: conversation.id,
new_user_id: new_user.id,
added_by_id: user.id
}).call
end
it 'adds user to a group conversation' do
add_user_to_conversation
conversation_users = Group::Conversation.find(conversation.id).users
expect(conversation_users).to include new_user
end
it 'creates an informational message' do
add_user_to_conversation
group_conversation = Group::Conversation.find(conversation.id)
expect(group_conversation.messages.count).to eq 1
end
end
end</code></pre><figcaption>spec/services/group/add_user_to_conversation_service_spec.rb</figcaption></figure><p>We have working private and group conversations now. A few nuances are still missing, which we will implement later, but the core functionality is here. Users are able to communicate one on one, or if they need, they can build an entire chat room with multiple people.</p><p>Commit the changes.</p><pre><code class="language-bash">git add -A
before_action :redirect_if_not_signed_in
def index
@users = User.all.where.not(id: current_user)
end
def get_private_conversation
conversation = Private::Conversation.between_users(current_user.id, params[:id])
@conversation = conversation[0]
respond_to do |format|
format.js { render 'get_private_conversation'}
end
end
def get_group_conversation
@conversation = Group::Conversation.find(params[:group_conversation_id])
respond_to do |format|
format.js { render 'get_group_conversation'}
end
end
def open_messenger
@type = params[:type]
@conversation = get_conversation
end
private
def get_conversation
ConversationForMessengerService.new({
conversation_type: params[:type],
user1_id: current_user.id,
user2_id: params[:id],
group_conversation_id: params[:group_conversation_id]
}).call
end
get 'get_private_conversation', to: 'messengers#get_private_conversation'
get 'get_group_conversation', to: 'messengers#get_group_conversation'
get 'open_messenger', to: 'messengers#open_messenger'</code></pre><figcaption>routes.rb</figcaption></figure><p>Commit the changes.</p><pre><code class="language-bash">In the controller is an open_messenger action. The purpose of this action is to go from any page straight to the messenger and render a selected conversation. On smaller screens users are going to chat through messenger instead of conversation windows. In just a moment, we’ll switch links for smaller screens to open conversations inside the messenger.
&lt;div class="row"&gt;
&lt;div class="col-sm-2"&gt;
&lt;ul&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;div class="col-sm-10"&gt;
&lt;div class="conversation"&gt;
&lt;%= render partial: "messengers/#{@type}_conversation",
locals: { conversation: @conversation,
user: current_user } %&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;script&gt;
$('body nav').hide();
$('.messenger .col-sm-2').hide();
$('.messenger .col-sm-10').show();
$('body').css('margin', '0 0 0 0');
$('.messenger').css('height', '100vh');
&lt;/script&gt;</code></pre><figcaption>messengers/open_messenger.html.erb</figcaption></figure><pre><code class="language-bash">git add -A
def initialize(params)
@conversation_type = params[:conversation_type]
@user1_id = params[:user1_id] || nil
@user2_id = params[:user2_id] || nil
@group_conversation_id = params[:group_conversation_id] || nil
end
def call
if @conversation_type == 'private'
Private::Conversation.between_users(@user1_id, @user2_id)[0]
else
Group::Conversation.find(@group_conversation_id)
end
end
require './app/services/conversation_for_messenger_service.rb'
describe ConversationForMessengerService do
let(:user1) { create(:user) }
let(:user2) { create(:user) }
let(:group_conversation) { create(:group_conversation) }
let(:private_conversation) do
create(:private_conversation,
sender_id: user1.id,
recipient_id: user2.id)
end
context '#call' do
it 'returns a group conversation' do
expect(ConversationForMessengerService.new({
conversation_type: 'group',
group_conversation_id: group_conversation.id
}).call).to eq group_conversation
end
it 'returns a private conversation' do
private_conversation
expect(ConversationForMessengerService.new({
conversation_type: 'private',
user1_id: user1.id,
user2_id: user2.id
}).call).to eq private_conversation
end
end
end</code></pre><figcaption>spec/services/conversation_for_messenger_service_spec.rb</figcaption></figure><p>Commit the changes.</p><pre><code class="language-bash">git add -A
&lt;div class="row"&gt;
&lt;%= render 'messengers/index/conversations_list' %&gt;
&lt;%= render 'messengers/index/conversation' %&gt;
&lt;/div&gt;&lt;!-- row --&gt;
&lt;ul&gt;
&lt;% @all_conversations.each do |conversation| %&gt;
&lt;%= render partial: conversations_list_item_partial_path(conversation),
locals: { conversation: conversation } %&gt;
&lt;% end %&gt;
&lt;/ul&gt;
def conversations_list_item_partial_path(conversation)
# if it's a private conversation
if conversation.class == Private::Conversation
'messengers/index/conversations_list_item/private'
else # it is a group conversation
'messengers/index/conversations_list_item/group'
end
end
&lt;% seen_status = private_conv_seen_status(conversation) %&gt;
&lt;li id="menu-pc&lt;%= conversation.id %&gt;" class="&lt;%= seen_status %&gt;"&gt;
&lt;%= link_to recipient.name,
get_private_conversation_path(id: recipient.id),
remote: true  %&gt;
&lt;li id="menu-gc&lt;%= conversation.id %&gt;" class="&lt;%= @seen_by_user %&gt;"&gt;
&lt;%= link_to conversation.name,
get_group_conversation_path(group_conversation_id: conversation.id),
remote: true %&gt;
&lt;div class="conversation"&gt;
&lt;div class="start-conversation"&gt;
&lt;div&gt;
&lt;i class="fa fa-inbox" aria-hidden="true"&gt;&lt;/i&gt;&lt;br&gt;
Open a conversation
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre><figcaption>messengers/index/_conversation.html.erb</figcaption></figure><p>Commit the changes.</p><pre><code class="language-bash">git add -A
$('.conversation').append("&lt;%= j(render partial: 'messengers/private_conversation',\
locals: { conversation: @conversation,\
&lt;% @contact = get_contact_record(@recipient) %&gt;
&lt;% @is_messenger = true %&gt;
&lt;%= render 'private/conversations/conversation/request_status' %&gt;
&lt;%= render 'messengers/private_conversation/details' %&gt;
&lt;%= render 'private/conversations/conversation/messages_list',
conversation: conversation %&gt;
&lt;%= render  'private/conversations/conversation/new_message_form',
conversation: conversation,
&lt;%= link_to :back do %&gt;
&lt;i class="fa fa-arrow-left back-to-chats-main" aria-hidden="true"&gt;&lt;/i&gt;
&lt;% end %&gt;
&lt;div class="conversation-name"&gt;
&lt;%= @recipient.name %&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre><figcaption>messengers/private_conversation/_details.html.erb</figcaption></figure><p>Commit the changes.</p><pre><code class="language-bash">git add -A
git commit -m "Create a template for the MessengersController's
params[:controller] != 'messengers' ? @private_conversations_windows : []
end
def group_conversations_windows
params[:controller] != 'messengers' ? @group_conversations_windows : []
RSpec.describe ApplicationHelper, :type =&gt; :helper do
context '#private_conversations_windows' do
let(:conversations) { conversations = create_list(:private_conversation, 2) }
it 'returns private conversations' do
assign(:private_conversations_windows, conversations)
controller.params[:controller] = 'not_messengers'
expect(helper.private_conversations_windows).to eq conversations
end
it 'returns an empty array' do
assign(:private_conversations_windows, conversations)
controller.params[:controller] = 'messengers'
expect(helper.private_conversations_windows).to eq []
end
end
context '#group_conversations_windows' do
let(:conversations) { create_list(:group_conversation, 2) }
it 'returns group conversations' do
assign(:group_conversations_windows, conversations)
controller.params[:controller] = 'not_messengers'
expect(helper.group_conversations_windows).to eq conversations
end
it 'returns an empty array' do
assign(:group_conversations_windows, conversations)
controller.params[:controller] = 'messengers'
expect(helper.group_conversations_windows).to eq []
end
end
end</code></pre><figcaption>spec/helpers/application_helper_spec.rb</figcaption></figure><p>Commit the changes</p><pre><code class="language-bash">git add -A
git commit -m "
Define private_conversations_windows and group_conversations_windows
z-index: 2;
padding: 0;
background-color: white;
height: calc(100vh - 50px);
.conversation-details {
z-index: 3;
background-color: white;
position: fixed;
top: 0;
width: 100%;
text-align: center;
border-bottom: 1px solid rgba(0, 0, 0, 0.2);
.back-to-chats-main, .conversation-name {
height: 50px;
line-height: 50px;
vertical-align: middle;
color: $navbarColor;
}
.back-to-chats-main {
position: absolute;
left: 10px;
font-size: 24px;
font-size: 2.4rem;
}
.conversation-name {
display: inline-block;
font-size: 20px;
font-size: 2.0rem;
}
}
.row {
height: 100%;
}
.col-sm-2, .col-sm-10, .conversation {
height: 100%;
}
.conversation {
position: relative;
.contact-request-sent {
display: none !important;
}
.start-conversation {
height: 100%;
display: table;
margin: 0 auto;
div {
display: table-cell;
vertical-align: middle;
text-align: center;
i {
font-size: 40px;
font-size: 4.0rem;
}
}
}
}
.col-sm-2 {
padding: 0;
background-color: $navbarColor;
ul {
padding: 20px 0 0 0;
background-color: $navbarColor;
li a {
color: white;
display: inline-block;
padding: 10px 0 10px 10px;
width: 100%;
border-bottom: 1px solid rgba(255,255,255,0.4);
&amp;:hover {
background-color: white;
color: black;
}
}
}
border-right: 1px solid $navbarColor;
}
.messages-list {
min-height: 100%;
height: 100%;
}
.send-private-message, .send-group-message {
z-index: 3;
position: absolute;
width: 100%;
bottom: 7px;
}
.contact-request-status {
width: 100%;
}
}</code></pre><figcaption>assets/stylesheets/partials/messenger.scss</figcaption></figure><p>Commit the change</p><pre><code class="language-bash">git add -A
.col-sm-2 {
display: initial !important;
}
.col-sm-2, .col-sm-10 {
display: initial;
}
.conversation {
padding: 0 0 60px 0;
.conversation-details {
display: none;
}
}
def autoload_messenger_messages
if @is_messenger == 'true'
# if previous messages exist, load them
if @messages_to_display_offset != 0
'shared/load_more_messages/messenger/load_previous_messages'
else
# remove load previous messages link
'shared/load_more_messages/messenger/remove_previous_messages_link'
end
else
'shared/empty_partial'
end
if (scrollbar_visible == 0) {
$('.conversation .messages-list .load-more-messages').click();
.replaceWith('');
$('body .conversation .messages-list .load-more-messages')
.replaceWith('');</code></pre><figcaption>shared/load_more_messages/messenger/_remove_previous_messages_link.js.erb</figcaption></figure><p>Commit the changes</p><pre><code class="language-bash">git add -A
git commit -m "Define an autoload_messenger_messages in the
# if a conversation is opened in the messenger
if @is_messenger == 'true'
'shared/load_more_messages/messenger/append_messages'
else
'shared/load_more_messages/window/append_messages'
end
// so it cannot be clicked if new messages aren't rendered yet
$('body .conversation .messages-list .load-more-messages')
.replaceWith('&lt;span class="load-more-messages"&gt;&lt;/span&gt;');
// render previous messages
$('body .conversation .messages-list ul')
.prepend('&lt;%= j render "#{@type}/conversations/messages" %&gt;');
// after new messages are appended, leave a gap at the top of the scrollbar
if @is_messenger == 'true'
'private/messages/load_more_messages/messenger/replace_link_to_messages'
else
'private/messages/load_more_messages/window/replace_link_to_messages'
end
.replaceWith('\
&lt;%= j render partial: "private/conversations/conversation/messages_list/link_to_previous_messages",\
locals: { conversation: @conversation } %&gt;\
');</code></pre><figcaption>private/messages/load_more_messages/messenger/_replace_link_to_messages.js.erb</figcaption></figure><p>Test the helper methods with specs on your own.</p><p>Commit the changes</p><pre><code class="language-bash">git add -A
git commit -m "
- Update the append_previous_messages_partial_path helper method in
Shared::MessagesHelper
- Update the replace_link_to_private_messages_partial_path method in
var messages_visible = $('.conversation .messages-list ul', this)
.has('li').length;
var previous_messages_exist = $('.conversation .messages-list .load-more-messages', this).length;
// Load previous messages if messages list is empty &amp;&amp; scrollbar doesn't exist
if (!messages_visible &amp;&amp; previous_messages_exist) {
$('.load-more-messages', this)[0].click();
$('.conversation .messages-list .loading-more-messages').hide();
}
open_messenger_path(id: recipient.id,
smaller_device: true,
type: 'private'),
open_messenger_path(group_conversation_id: conversation.id,
smaller_device: true, type: 'group'),
class: 'smaller-screen-link' %&gt; </code></pre><figcaption>layouts/navigation/header/dropdowns/conversations/_group.html.erb</figcaption></figure><p>The reason why we see different links on different screen sizes is that previously we’ve set CSS for <code>bigger-screen-link</code> and <code>smaller-screen-link</code>classes.</p><p>Commit the changes.</p><pre><code class="language-bash">git add -A
git commit -m "Inside _private.html.erb and _group.html.erb, in the
layouts/navigation/header/dropdowns/conversations, add alternative
// show the messenger's version for mobile devices
$(".messenger .col-sm-2 ul").on( "click", "a", function() {
var col_2_width = $('.messenger .col-sm-2').css('width');
var window_width = '' + $('.messenger').width() + 'px';
// check if bootstrap columns are stacked (page is opened on a smaller device)
if (col_2_width == window_width) {
$('body nav').hide();
$('.messenger .col-sm-2').hide();
$('.messenger .col-sm-10').show();
$('body').css('margin', '0 0 0 0');
$('.messenger').css('height', '100vh');
}
git commit -m "Add JavaScript to messenger.js to show a different
$('.conversation').append("&lt;%= j(render 'messengers/group_conversation',\
&lt;%= render 'messengers/group_conversation/details',
conversation: conversation %&gt;
&lt;%= render 'group/conversations/conversation/messages_list',
conversation: conversation %&gt;
&lt;%= render 'messengers/group_conversation/new_message_form',
&lt;%= link_to :back do %&gt;
&lt;i class="fa fa-arrow-left back-to-chats-main" aria-hidden="true"&gt;&lt;/i&gt;
&lt;% end %&gt;
&lt;div class="conversation-name"&gt;
&lt;%= conversation.name %&gt;
&lt;/div&gt;
&lt;input  name="conversation_id"
type="hidden"
value="&lt;%= conversation.id %&gt;"&gt;
&lt;input name="user_id" type="hidden" value="&lt;%= current_user.id %&gt;"&gt;
&lt;textarea name="content"
rows="2"
class="form-control"
placeholder="Type a message..."&gt;&lt;/textarea&gt;
&lt;input type="submit" class="btn btn-success send-message"&gt;
&lt;/form&gt;</code></pre><figcaption>messengers/group_conversation/_new_message_form.html.erb</figcaption></figure><p>Commit the changes:</p><pre><code class="language-bash">git add -A
git commit -m "Create a get_group_conversation.js.erb template and
def subscribed
stream_from "notifications_#{current_user.id}"
end
def unsubscribed
stop_all_streams
end
def contact_request_response(data)
receiver_user_name = data['receiver_user_name']
sender_user_name = data['sender_user_name']
notification = data['notification']
receiver = User.find_by(name: receiver_user_name)
ActionCable.server.broadcast(
"notifications_#{receiver.id}",
notification: notification,
sender_user_name: sender_user_name,
)
end
end</code></pre><figcaption>channels/notification_channel.rb</figcaption></figure><p>Commit the change.</p><pre><code class="language-bash">git add -A
queue_as :default
def perform(contact_request)
sender = User.find(contact_request.user_id)
receiver = User.find(contact_request.contact_id)
ActionCable.server.broadcast(
"notifications_#{receiver.id}",
notification: 'contact-request-received',
sender_name: sender.name,
contact_request: render_contact_request(sender, contact_request)
)
end
private
def render_contact_request(sender, contact_request)
ApplicationController.render(
partial: 'contacts/contact_request',
locals: { sender: sender }
)
end
&lt;div class="sixty-percent"&gt;
&lt;span class="contact-name"&gt;&lt;%= sender.name %&gt;&lt;/span&gt;
&lt;/div&gt;
&lt;div class="forty-percent"&gt;
&lt;span class="accept-request"&gt;
&lt;%= link_to "Accept",
contact_path(id: sender.id),
remote: true,
method: "put" %&gt;
&lt;/span&gt;
&lt;span class="decline-request"&gt;
&lt;%= link_to "Decline",
contact_path(id: sender.id),
remote: true,
method: :delete %&gt;
&lt;/span&gt;
&lt;/div&gt;
&lt;i class="fa fa-user-o" aria-hidden="true"&gt;
&lt;span id="unresponded-contact-requests"&gt;&lt;/span&gt;
&lt;/i&gt;
&lt;/a&gt;
&lt;ul class="dropdown dropdown-menu" role="menu"&gt;
&lt;%= render nav_contact_requests_partial_path %&gt;
# if contact requests exist
if current_user.pending_received_contact_requests.present?
'layouts/navigation/header/dropdowns/contact_requests/requests'
else # contact requests do not exist
'layouts/navigation/header/dropdowns/contact_requests/no_requests'
end
&lt;%= render partial: "layouts/"\
"navigation/"\
"header/"\
"dropdowns/"\
"contact_requests/"\
"request",
locals: { user: user } %&gt;
&lt;%= render 'layouts/navigation/header/dropdowns/contact_requests' %&gt;
&lt;/div&gt;</code></pre><figcaption>layouts/navigation/header/_dropdowns.html.erb</figcaption></figure><p>Commit the changes.</p><pre><code class="language-bash">git add -A
git commit -m "
- Create a _contact_requests.html.erb inside the
layouts/navigation/header/dropdowns
&lt;div class="sixty-percent"&gt;
&lt;span class="contact-name"&gt;&lt;%= user.name %&gt;&lt;/span&gt;
&lt;/div&gt;
&lt;div class="forty-percent"&gt;
&lt;span class="accept-request"&gt;
&lt;%= link_to "Accept",
contact_path(id: user.id),
remote: true,
method: "put" %&gt;
&lt;/span&gt;
&lt;span class="decline-request"&gt;
&lt;%= link_to "Decline",
contact_path(id: user.id),
remote: true,
method: :delete %&gt;
&lt;/span&gt;
&lt;/div&gt;
&lt;/li&gt;&lt;!-- contact-request --&gt;</code></pre><figcaption>layouts/navigation/header/dropdowns/_request.html.erb</figcaption></figure><p>Commit the change.</p><pre><code class="language-bash">git add -A
git commit -m "Create a _request.html.erb inside the
li {
color: black;
background-color: $backgroundColor;
border-bottom: 1px solid $navbarColor;
}
i {
position: relative;
}
.sixty-percent {
display: inline-block;
width: 60%;
}
.forty-percent {
display: inline-block;
float: right;
width: 40%;
}
.contact-request, .contact-request-responded {
.contact-name {
padding-left: 10px;
padding-right: 20px;
}
.accept-request, .decline-request {
a {
border: 2px solid $navbarColor;
padding: 5px;
}
&amp;:hover a {
border-color: black;
}
transition: 0.15s border-color;
transition: 0.15s background-color;
}
.accept-request {
a:hover {
background-color: black !important;
}
a {
background-color: $navbarColor;
color: white !important;
}
}
.decline-request {
a {
background-color: $backgroundColor;
color: black !important;
}
a:hover, &amp;:hover {
background-color: white !important;
}
}
.accepted-request {
background: $navbarColor;
color: white;
padding: 5px;
}
}
.no-requests {
text-align: center;
}
}
#unresponded-contact-requests {
top: 0;
right: 5px;
background: #3F4EBF;
}</code></pre><figcaption>assets/stylesheets/partials/layout/navigation.scss</figcaption></figure><p>Commit the changes.</p><pre><code class="language-bash">git add -A
git commit -m "Add CSS in navigation.scss to style and position the
connected: function() {},
disconnected: function() {},
received: function(data) {
// if a contact request was accepted
if (data['notification'] == 'accepted-contact-request') {
}
// if a contact request was declined
if (data['notification'] == 'declined-contact-request') {
}
// if a contact request was received
if (data['notification'] == 'contact-request-received') {
conversation_window = $('body').find('[data-pconversation-user-name="' + data["sender_name"] + '"]');
has_no_contact_requests = $('#contacts-requests ul').find('.no-requests');
contact_request = data['contact_request'];
if (has_no_contact_requests.length) {
// remove has no contact request message
has_no_contact_requests.remove();
}
if (conversation_window.length) {
// remove add user to contacts button
conversation_window.find('.add-user-to-contacts-message').parent().remove();
conversation_window.find('.add-user-to-contacts').remove();
conversation_window.find('.conversation-heading').css('width', '360px');
}
// append a new contact request
$('#contacts-requests ul').prepend(contact_request);
calculateContactRequests();
}
},
contact_request_response: function(sender_user_name, receiver_user_name, notification) {
return this.perform('contact_request_response', {
sender_user_name: sender_user_name,
receiver_user_name: receiver_user_name,
notification: notification
});
}
// when a contact request is accepted, mark it as accepted
$('body').on('click', '.accept-request a', function() {
var sender_user_name = $('nav #user-name').html();
var receiver_user_name = $(this)
.parents('[data-user-name]')
.attr('data-user-name');
var requests_menu_item = $('#contacts-requests ul');
requests_menu_item = requests_menu_item
.find('\
[data-user-name="' +
receiver_user_name +
'"]');
var conversation_window_request_status = $('.conversation-window')
.find('[data-user-name="' +
receiver_user_name +
'"]');
// if a conversation is opened in the messenger
if(conversation_window_request_status.length == 0) {
conversation_window_request_status = $('.contact-request-status');
}
requests_menu_item.find('.decline-request').remove();
requests_menu_item
.find('.accept-request')
.replaceWith('&lt;span class="accepted-request"&gt;Accepted&lt;/span&gt;');
requests_menu_item
.removeClass('contact-request')
.addClass('contact-request-responded');
conversation_window_request_status
.replaceWith('&lt;div class="contact-request-status"&gt;\
Request has been accepted\
&lt;/div&gt;');
calculateContactRequests();
// update the opposite user with your contact request response
App.notification.contact_request_response(sender_user_name,
receiver_user_name,
'accepted-contact-request');
});
// when a contact request is declined, mark it as declined
$('body').on('click', '.decline-request a', function() {
var sender_user_name = $('nav #user-name').html();
var receiver_user_name = $(this)
.parents('[data-user-name]')
.attr('data-user-name');
var requests_menu_item = $('#contacts-requests ul')
.find('[data-user-name="' +
receiver_user_name +
'"]');
var conversation_window_request_status = $('.conversation-window')
.find('[data-user-name="' +
receiver_user_name +
'"]');
// if a conversation is opened in the messenger
if(conversation_window_request_status.length == 0) {
conversation_window_request_status = $('.contact-request-status');
}
requests_menu_item.find('.accept-request').remove();
requests_menu_item
.find('.decline-request')
.replaceWith('&lt;span class="accepted-request"&gt;Declined&lt;/span&gt;');
requests_menu_item
.removeClass('contact-request')
.addClass('contact-request-responded');
conversation_window_request_status
.replaceWith('&lt;div class="contact-request-status"&gt;\
Request has been declined\
&lt;/div&gt;');
calculateContactRequests();
// update the opposite user with your contact request response
App.notification.contact_request_response(sender_user_name,
receiver_user_name,
'declined-contact-request');
});
// when a contact request is sent
$('body').on('click', '.add-user-to-contacts-notif', function() {
var sender_user_name = $('nav #user-name').html();
var receiver_user_name = $(this)
.parents('.conversation-window')
.find('.contact-name-notif')
.html();
App.notification.contact_request_response(sender_user_name,
receiver_user_name,
'contact-request-received');
});
calculateContactRequests();
});
function calculateContactRequests() {
var unresponded_requests = $('#contacts-requests ul')
.find('.contact-request')
.length;
if (unresponded_requests) {
$('#unresponded-contact-requests').css('visibility', 'visible');
$('#unresponded-contact-requests').text(unresponded_requests);
} else {
$('#unresponded-contact-requests').css('visibility', 'hidden');
$('#unresponded-contact-requests').text('');
}
// remove the link and notify, that the request has been sent
$(document).on('click',
'.add-user-to-contacts, .add-user-to-contacts-notif',
function(e) {
var conversation_window = $(this).parents('.conversation-window,\
.conversation');
conversation_window
.find('.add-user-to-contacts')
.replaceWith('&lt;div class="contact-request-sent"\
style="display: block;"&gt;\
&lt;div&gt;\
&lt;i class="fa fa-question"\
aria-hidden="true"\
title="Contact request sent"&gt;\
&lt;/i&gt;\
&lt;/div&gt;\
&lt;/div&gt;');
conversation_window.find('.add-user-to-contacts-message').remove();
conversation_window
.find('.messages_list ul')
.append('&lt;div class="add-user-to-contacts-message"&gt;\
Contact request sent\
&lt;/div&gt;');
});</code></pre><figcaption>assets/javascripts/conversations/options.js</figcaption></figure><p>Now contact requests are going to be handled in real time and the user interface will be changed after particular events.</p><p>Thanks to Toni Shortsleeve.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
