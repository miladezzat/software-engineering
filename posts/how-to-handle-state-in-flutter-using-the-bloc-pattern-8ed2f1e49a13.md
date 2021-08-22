---
card: "https://cdn-media-1.freecodecamp.org/images/1*6xT0ZOACZCdy_61tTJ3r1Q.png"
tags: [Flutter]
description: "Last year, I picked up Flutter and I must say it has been an "
author: "Milad E. Fahmy"
title: "How to handle state in Flutter using the BLoC pattern"
created: "2021-08-15T23:45:44+02:00"
modified: "2021-08-15T23:45:44+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-flutter tag-mobile-app-development tag-tech tag-programming tag-coding ">
<header class="post-full-header">
<h1 class="post-full-title">How to handle state in Flutter using the BLoC pattern</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*6xT0ZOACZCdy_61tTJ3r1Q.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*6xT0ZOACZCdy_61tTJ3r1Q.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*6xT0ZOACZCdy_61tTJ3r1Q.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*6xT0ZOACZCdy_61tTJ3r1Q.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*6xT0ZOACZCdy_61tTJ3r1Q.png" alt="How to handle state in Flutter using the BLoC pattern">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Last year, I picked up <a href="https://flutter.io/" rel="noopener">Flutter</a> and I must say it has been an awesome journey so far. Flutter is Google’s awesome framework for crafting high-quality applications for Android and iOS.</p><p>As with building almost any application, there’s always the need to handle application state. It is important that state management is handled efficiently, so as to avoid accruing technical debt, especially as your application grows and becomes more complex.</p><p>In Flutter, all UI components are widgets. As you start composing these widgets to create your awesome app, you’ll end up with a tree of deeply nested widgets. These widgets will most likely need to share application state with each other.</p><p>In this article, we’ll see how to handle state in Flutter using the BLoC pattern.</p><p>State management in Flutter can be achieved in a few different ways:</p><p><strong>Inherited Widget</strong>: It allows you propagate data to its child widgets and the widgets are rebuilt whenever there is a change in the app’s state. The downside of using the InheritedWidget base class is that your state is final and this raises a problem if you want to mutate your state.</p><p><strong>Scoped Model</strong>: This is an external package built on top of InheritedWidget and it offers a slightly better way to access, update and mutate state. It allows you to easily pass a data Model from a parent Widget down to its descendants. In addition, it also rebuilds all of the children that use the model when the model is updated.</p><p>This might raise a performance issue, depending on how many ScopedModelDescendants a model has, as they’re rebuilt when there’s an update.</p><p>This issue can be fixed by decomposing the ScopedModel into multiple models so you get finer-grained dependencies. Setting the <code>rebuildOnChange</code> flag to <code>false</code> also fixes this issue, but it brings with it the cognitive load of deciding what widget should be rebuilt or not.</p><p><strong>Redux</strong>: Yes! As with React, there is a Redux package that helps you easily create and consume a Redux store in Flutter. Like its JavaScript counterpart, there’s usually a few lines of boilerplate code and the round trip of <em>actions</em> and <em>reducers</em>.</p><h4 id="enter-bloc-pattern">Enter BLoC pattern</h4><p>The Business Logic Component (BLoC) pattern is a pattern created by Google and announced at <a href="https://www.youtube.com/watch?v=RS36gBEp8OI" rel="noopener">Google I/O ’18</a>. The BLoC pattern uses Reactive Programming to handle the flow of data within an app.</p><p>A BLoC stands as a middleman between a source of data in your app (e.g an API response) and widgets that need the data. It receives streams of events/data from the source, handles any required business logic and publishes streams of data changes to widgets that are interested in them.</p><p>A BLoC has two simple components: <strong><em>Sinks </em></strong>and <strong><em>Streams</em></strong>, both of which are provided by a <strong><em>StreamController</em></strong>. You add streams of event/data input into a <em>Sink</em> and listen to them as streams of data output through a <em>Stream</em>.</p><p>A <em>StreamController</em> can be accessed via the <code>‘dart:async’</code> library or as a <em>PublishSubject</em>, <em>ReplaySubject</em> or <em>BehaviourSubject</em> via the <code><a href="https://pub.dartlang.org/packages/rxdart" rel="noopener">rxdart</a></code> package.</p><p>Below is a code snippet showing a simple BLoC:</p><pre><code class="language-dart">import 'dart:async';
// import 'package:rxdart/rxdart.dart'; if you want to make use of PublishSubject, ReplaySubject or BehaviourSubject.
// make sure you have rxdart: as a dependency in your pubspec.yaml file to use the above import
class CounterBloc {
final counterController = StreamController();  // create a StreamController or
// final counterController = PublishSubject() or any other rxdart option;
Stream get getCount =&gt; counterController.stream; // create a getter for our Stream
// the rxdart stream controllers returns an Observable instead of a Stream
void updateCount() {
counterController.sink.add(data); // add whatever data we want into the Sink
}
void dispose() {
counterController.close(); // close our StreamController to avoid memory leak
}
}
final bloc = CounterBloc(); // create an instance of the counter bloc
//======= end of CounterBloc file
//======= somewhere else in our app
import 'counter_bloc.dart'; // import the counter bloc file here
@override
void dispose() {
bloc.dispose(); // call the dispose method to close our StreamController
super.dispose();
}
...
@override
Widget build(BuildContext context) {
return StreamBuilder( // Wrap our widget with a StreamBuilder
stream: bloc.getCount, // pass our Stream getter here
initialData: 0, // provide an initial data
builder: (context, snapshot) =&gt; Text('${snapshot.data}'), // access the data in our Stream here
);
}
...</code></pre><p>A BLoC is a simple Dart class. In the code snippet above, we created a <code>CounterBloc</code> class and in it, a <code>StreamController</code> which we called <code>counterController</code>. We created a <em>getter</em> for our Stream called <code>getCount</code>, an <code>updateCount</code> method that adds data into our Sink when called, and a <code>dispose</code> method to close our StreamController.</p><p>To access the data in our Stream, we created a <code>StreamBuilder</code> widget and passed our Stream to its <code>stream</code> property and accessed the data in its <code>builder</code> function.</p><h4 id="implementing-bloc">Implementing BLoC</h4><p>We’ll be converting the default Flutter sample app to use a BLoC. Let’s go ahead and generate a new Flutter app. In your terminal run the following command:</p><pre><code>$ flutter create bloc_counter &amp;&amp; cd bloc_counter</code></pre><p>Open the app in your favourite editor and create three files in the lib folder: <code>counter.dart</code>, <code>counter_provider.dart</code> and <code>counter_bloc.dart</code>.</p><p>Our <code>CounterProvider</code> will contain an integer and a method to increment it. Add the following code to the <code>counter_provider.dart</code> file:</p><pre><code class="language-dart">class CounterProvider {
int count = 0;
void increaseCount() =&gt; count++;
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
