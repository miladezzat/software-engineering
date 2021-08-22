---
card: "https://cdn-media-1.freecodecamp.org/images/1*_qQps59angkeAdcbql2rnA.png"
tags: [Android]
description: "by Ayusch Jain"
author: "Milad E. Fahmy"
title: "How to set up networking in your Android app with Retrofit-RxJava-MVP"
created: "2021-08-16T11:32:53+02:00"
modified: "2021-08-16T11:32:53+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-android tag-rxjava tag-software-development tag-mobile-app-development tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to set up networking in your Android app with Retrofit-RxJava-MVP</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*_qQps59angkeAdcbql2rnA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*_qQps59angkeAdcbql2rnA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*_qQps59angkeAdcbql2rnA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*_qQps59angkeAdcbql2rnA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*_qQps59angkeAdcbql2rnA.png" alt="How to set up networking in your Android app with Retrofit-RxJava-MVP">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
&lt;LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
xmlns:app="http://schemas.android.com/apk/res-auto"
xmlns:tools="http://schemas.android.com/tools"
android:layout_width="match_parent"
android:layout_height="match_parent"
tools:context=".UserActivity"&gt;
&lt;android.support.v7.widget.RecyclerView
android:id="@+id/recyclerview"
android:layout_width="match_parent"
android:layout_height="match_parent" /&gt;
&lt;/LinearLayout&gt;</code></pre><h4 id="building-recyclerview-item">Building Recyclerview Item</h4><p>Now let’s start building the RecyclerView rows. Here we are only concerned about the architecture of our Android application and how Retrofit, RxJava and MVP Architecture can work in tandem, so don’t complain about the look of the UI :P. You can definitely go ahead and beautify it.</p><p>We’ll be creating a really simple three column layout. The first column will display the ID of the item, the second column will display the Title, and finally, the third column will display the body/description.</p><p>Go to res-&gt;layout and right click on the layout folder. Create a new <strong><strong>“Layout Resource File”. </strong></strong>Name it whatever you want, in my case I’ll name it <strong><strong>recycler_item.</strong></strong></p><p>To create a three-column layout, add a LinearLayout as the root. Then add three textviews and set their width to 0 and their weight to 1,2,3 respectively. This will divide the entire width of your screen into 3 columns in the proportion 1:2:3.</p><p>Here’s how your layout will look like:</p><pre><code class="language-xml">&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
android:layout_width="match_parent"
android:layout_height="wrap_content"
android:layout_marginTop="16dp"
android:orientation="horizontal"&gt;
&lt;TextView
android:id="@+id/user_id"
android:layout_width="0dp"
android:layout_height="wrap_content"
android:layout_weight="1"
android:gravity="center"
android:padding="4dp"
android:text="id" /&gt;
&lt;TextView
android:id="@+id/user_title"
android:layout_width="0dp"
android:layout_height="wrap_content"
android:layout_weight="2"
android:gravity="center"
android:padding="4dp"
android:text="Title" /&gt;
&lt;TextView
android:id="@+id/user_body"
android:layout_width="0dp"
android:layout_height="wrap_content"
android:layout_weight="3"
android:gravity="center"
android:padding="4dp"
android:text="Body" /&gt;
&lt;/LinearLayout&gt;</code></pre><p><strong>Again, since this is not a design tutorial the UI might not look very pretty, so feel free to customize it as you like ?</strong></p><p>Now with the layouts all done, we can head over to set up our android application in accordance with MVP Architecture. Again, if you aren’t really familiar with MVP, I strongly suggest that you have a look here: <a href="https://ayusch.com/mvp-architecture-android/" rel="noopener">MVP Architecture in Android</a>.</p><h3 id="phase-2-setting-up-mvp-architecture">Phase 2: Setting up MVP Architecture</h3><h4 id="creating-the-contract">Creating the contract</h4><p>Many people like to keep their View and Presenter interfaces in different files, but according to Google’s suggested guidelines, I like to create an outer interface (Wrapper) named <strong>Contract </strong>and then place my View and Presenter Interfaces inside it.</p><p>The benefit of this is that you won’t have to go looking at different files for the view and presenter associated with a single activity, it’s all in a single place. That’s how I like it, but feel free to explore other techniques.</p><p>So now let’s create a UserActivityContract. Create a new package named <strong>“contract”. </strong>Inside that package, create a new Java Interface UserActivityContract.</p><p>Within <strong>UserActivityContract</strong>, add two nested interfaces: View and Presenter. This is how your contract will look like at the end:</p><pre><code class="language-java">public interface UserContract {
interface View {
}
interface Presenter {
}
}</code></pre><p>Now let’s add some methods to these. Let’s talk about the View first, we’ll be doing 3 major things inside our view:</p><ul><li>Initial setup of recyclerview (adding layout manager).</li><li>Creating an adapter from recyclerview using the list of users obtained from the API.</li><li>Showing some error message in case any error occurs.</li></ul><p>So, let’s add a method for each one of these:</p><pre><code class="language-java">public interface UserContract {
interface View {
void init();
void showError(String message);
void loadDataInList(List&lt;User&gt; users);
}
interface Presenter {
}
}</code></pre><p>Next, let’s talk about the Presenter. The only real task of the presenter is to get the data from the API and send it to the View. So, add a method <strong>loadUsers() </strong>we’ll be making our API call here and passing the result to view if successful, else an error message.</p><pre><code class="language-java">public interface UserContract {
interface View {
void init();
void showError(String message);
void loadDataInList(List&lt;User&gt; users);
}
interface Presenter {
void start();
void loadUsers();
}
}</code></pre><p>Notice that apart from loadUsers(), we have also added a method named <strong>start(),</strong> this is more of like an initializer method for the presenter. You can perform all sorts of init tasks here such as initializing some variables, calling a method of the view to show some init messages etc. Here I’m using it to initialize the Recyclerview inside my UserActivity.java class.</p><h4 id="creating-presenter-and-implementing-view">Creating Presenter and Implementing View</h4><p>Once done with the interfaces, it’s time to implement them.</p><p>Create a new class named UserPresenter and implement UserContract.Presenter on it and implement the required methods.</p><p>Now, open your UserActivity.java class and implement the interface UserContract.View and implement all the required methods. Add a field for the presenter in your activity and initialize it in onCreate as shown below:</p><pre><code class="language-java">mPresenter = new UserPresenter(this);
mPresenter.start();</code></pre><p>This will call the constructor of our presenter and bind the View and Presenter together. When we call the start method on presenter, presenter in-turn calls the init() method which starts our initialization process.</p><p><strong>With this,</strong> we finish <strong>Phase 2 </strong>of our project. Now let’s head over to <strong>Phase 3</strong> and create our model class and a custom adapter to bind data to recyclerview.</p><h3 id="phase-3-creating-model-class-for-data-and-adapter-for-recyclerview">Phase 3: Creating Model class for data and adapter for RecyclerView</h3><h4 id="creating-the-model">Creating the model</h4><p>Let’s go ahead and create our model which will be a POJO class for our data. If you look closely at the JSON response, it consists of 4 fields: id, userId, title, body. And all of this inside a JSON object. And many such JSON objects in an array. So, this is a fairly simple POJO class to create.</p><p>But before this, let’s add a dependency for GSON, which will be used to parse the JSON response. Add the following line to your dependencies:</p><pre><code>implementation 'com.squareup.retrofit2:converter-gson:2.4.0'</code></pre><blockquote><em>Note: This is not the actual GSON dependency, this is a converter which uses GSON for serialization to and from JSON.</em></blockquote><p>Now, create a package named <strong>model </strong>and inside it, create a java file named <strong>User</strong>. Add the four fields and annotate each of the fields with <strong>@SerializedName</strong>. Now let’s create getters and setters for the fields. Android Studio does this automatically for you, just press ALT+INS on your keyboard and select getters and setters.</p><p>This is how your POJO class would look like at the end:</p><pre><code class="language-java">public class User{
@SerializedName("id")
private int id;
@SerializedName("title")
private String title;
@SerializedName("body")
private String body;
@SerializedName("userId")
private int userId;
public void setId(int id){
this.id = id;
}
public int getId(){
return id;
}
public void setTitle(String title){
this.title = title;
}
public String getTitle(){
return title;
}
public void setBody(String body){
this.body = body;
}
public String getBody(){
return body;
}
public void setUserId(int userId){
this.userId = userId;
}
public int getUserId(){
return userId;
}
@Override
public String toString(){
return
"User{" +
"id = '" + id + '\'' +
",title = '" + title + '\'' +
",body = '" + body + '\'' +
",userId = '" + userId + '\'' +
"}";
}
}</code></pre><blockquote><em>Note: toString method is optional. I like to include it because when printing log statements, it prints the formatted json.</em></blockquote><h3 id="creating-recyclerview-adapter">Creating RecyclerView Adapter</h3><p>Let’s now create the recyclerview adapter. Create a package named adapter and create a new Java class named <strong>CustomAdapter.java</strong> inside it. Extend the class from RecyclerView.Adapter class. It will show an error, just press ALT+Enter and override all the required methods.</p><p>Inside <strong>CustomAdapter.java</strong> create a nested class named MyViewHolder and extend it from RecyclerView.ViewHolder. Then create a constructor and initialize all the textviews as shown below:</p><pre><code class="language-java">public class CustomAdapter extends RecyclerView.Adapter&lt;CustomAdapter.MyViewHolder&gt; {
public CustomAdapter(List&lt;User&gt; userList) {
}
@Override
public MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
}
@Override
public void onBindViewHolder(MyViewHolder holder, int position) {
}
@Override
public int getItemCount() {
return userList.size();
}
public class MyViewHolder extends RecyclerView.ViewHolder {
TextView tvId, tvTitle, tvBody;
public MyViewHolder(View itemView) {
super(itemView);
tvId = (TextView) itemView.findViewById(R.id.user_id);
tvTitle = (TextView) itemView.findViewById(R.id.user_title);
tvBody = (TextView) itemView.findViewById(R.id.user_body);
}
}
}</code></pre><p>We’ll be passing a list of users to this adapter and we would be doing that in the <strong>constructor</strong>. So, first create a field <strong>List&lt;Us</strong>er&gt; and then create a constructor which will take a List&lt;User&gt; as its argument. Now, set the field property to the one obtained in the constructor.</p><p>When you overrode the methods, you got onCreateViewHolder. In that method, we’ll inflate our layout for the recyclerview item and return a view holder from it. Head over to onCreateViewHolder and add the following code:</p><pre><code class="language-java">@Override
public MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.recycler_item, parent, false);
return new MyViewHolder(view);
}</code></pre><p>Now, in <strong>onBindViewHolder</strong>, we’ll bind the data to our views. This is how the final adapter would look like:</p><pre><code class="language-java">public class CustomAdapter extends RecyclerView.Adapter&lt;CustomAdapter.MyViewHolder&gt; {
List&lt;User&gt; userList = new ArrayList&lt;&gt;();
public CustomAdapter(List&lt;User&gt; userList) {
this.userList = userList;
}
@Override
public MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.recycler_item, parent, false);
return new MyViewHolder(view);
}
@Override
public void onBindViewHolder(MyViewHolder holder, int position) {
holder.tvTitle.setText(userList.get(position).getTitle());
holder.tvId.setText(userList.get(position).getId()+"");
holder.tvBody.setText(userList.get(position).getBody());
}
@Override
public int getItemCount() {
return userList.size();
}
public class MyViewHolder extends RecyclerView.ViewHolder {
TextView tvId, tvTitle, tvBody;
public MyViewHolder(View itemView) {
super(itemView);
tvId = (TextView) itemView.findViewById(R.id.user_id);
tvTitle = (TextView) itemView.findViewById(R.id.user_title);
tvBody = (TextView) itemView.findViewById(R.id.user_body);
}
}
}</code></pre><h3 id="phase-4-setting-up-networking-with-retrofit-and-rxjava">Phase 4: Setting up Networking with Retrofit and RxJava</h3><p>This is the crux of our android application. This is what you all came here for, so let’s get started.</p><p>I’ve divided setting up networking in our project into 4 parts:</p><ul><li>Creating a Retrofit adapter.</li><li>Setting up an API Service interface which defines our endpoints.</li><li>Creating a NetworkingUtil class to bind the Adapter and Service.</li><li>Creating a Utility class to make API calls and return the result to the presenter.</li></ul><p>So, let’s get started.</p><h4 id="creating-a-retrofit-adapter">Creating a Retrofit Adapter</h4><p>Create a package named “networking”, and inside networking, create another package named “adapter” (this is how I like my package management and is by no means the recommended way of doing things, but it suits me so +1).</p><p>Inside that package, create a class named RetrofitAdapter. In this class we’ll define the following things:</p><ul><li>A converter factory to parse JSON response into our POJO class.</li><li>A call adapter factory.</li><li>A base URL.</li></ul><p>Let’s start by adding a <strong>BASE_URL</strong> filed at the top. Set the base URL to <a href="https://jsonplaceholder.typicode.com" rel="noopener">https://jsonplaceholder.typicode.com</a></p><p>Now, create a static instance of Gson and Retrofit at the top. Now, create a synchronized method as shown below and add the following code. I’ll explain what’s going on:</p><pre><code class="language-java">public static synchronized Retrofit getInstance() {
if (retrofit == null) {
if (gson == null) {
gson = new GsonBuilder().setLenient().create();
}
retrofit = new Retrofit.Builder()
.baseUrl(BASE_URL)
.addConverterFactory(GsonConverterFactory.create(gson))
.addCallAdapterFactory(RxJavaCallAdapterFactory.create())
.build();
}
return retrofit;
}</code></pre><p>We are creating a singleton instance of retrofit, if the instance is already created, we just return it, else we create a new one.</p><p>To create a new instance, we are using the Retrofit.Builder() method. We set the Base URL to the URL declared at the top, we set the converter factory as Gson which will parse the JSON response for us and add a call adapter factory from RxJava 2.</p><blockquote><em>Now, you may ask what is a call adapter? So, a call adapter is basically a tool which manages the execution, and response handling of retrofit. When the client receives a response from the server, it’s meaningless to the user as it is in bytes. So the call adapter converts those bytes into meaningful java objects.</em><br><br><em>To know more about call adapters take a look at this awesome article : <a href="https://futurestud.io/tutorials/retrofit-2-introduction-to-call-adapters" rel="noopener">https://futurestud.io/tutorials/retrofit-2-introduction-to-call-adapters</a></em></blockquote><p>Since we have added <strong>RxJavaCallAdapter</strong> factory, it wraps our responses into <strong>RxJava</strong> types.</p><p>This is how our <strong>RetrofitAdapter.java class</strong> looks when complete:</p><pre><code class="language-java">public class RetrofitAdapter {
private static Retrofit retrofit;
private static Gson gson;
private static final String BASE_URL = "https://jsonplaceholder.typicode.com";
public static synchronized Retrofit getInstance() {
if (retrofit == null) {
if (gson == null) {
gson = new GsonBuilder().setLenient().create();
}
retrofit = new Retrofit.Builder()
.baseUrl(BASE_URL)
.addConverterFactory(GsonConverterFactory.create(gson))
.addCallAdapterFactory(RxJavaCallAdapterFactory.create())
.build();
}
return retrofit;
}
}</code></pre><h4 id="creating-an-api-service">Creating an API Service</h4><p>Now, we’ll create an interface to define our URL endpoints.</p><p>Create a package named API inside the networking package. Inside API, create a Java Interface named UserService.java</p><p>In our very short and concise example, we’ll be calling just a single endpoint, so we’ll have only one method. You can call many different endpoints such as for login, signup, logout etc…</p><p>Add a method declaration <strong>getUsers() </strong>and annotate it with the type of request (GET or POST) and pass the endpoint.</p><p>This is how your interface must look like at the end. Note that we are returning an <strong>Observable</strong> of type <strong>List</strong>, at the end. Our RxJava call adapter does the work of creating an observable out of the response from the server.</p><pre><code class="language-java">public interface UserService {
@GET("/posts/")
Observable&lt;List&lt;User&gt;&gt; getUsers();
}</code></pre><h4 id="binding-adapter-and-service">Binding Adapter and Service</h4><p>We need to bind our adapter class to the service. For this, create a utils package inside the networking package and create a new class named <strong>NetworkingUtils.</strong></p><p>Create a static UserService instance and a method which will return a singleton instance of the userService.</p><p>This is how your <strong>NetworkingUtils</strong> would look like at the end:</p><pre><code class="language-java">public class NetworkingUtils {
private static UserService userService;
public static UserService getUserApiInstance() {
if (userService == null)
userService = RetrofitAdapter.getInstance().create(UserService.class);
return userService;
}
}</code></pre><h4 id="creating-a-utility-class-to-make-api-calls">Creating a Utility class to make API calls</h4><p>I’ve seen people do this in the Interactor. Interactor is just another layer in your MVP Architecture — some people prefer to include it, some don’t. In some projects, you’ll find Data Managers instead of an Interactor. It all comes down to your personal requirements/preference, but I personally don’t like using interactors (just like I don’t like JS :P) so I am creating a <strong>UserTask</strong> here.</p><p>But just before creating this class, let’s create a custom callback class which we can use to receive errors and results. In the root package, create a package named callback and create an interface named Callback inside this package. It will contain two methods, one for the result and other for error. This is how it’ll look like:</p><pre><code class="language-java">public abstract class Callback&lt;T&gt; {
public abstract void returnResult(T t);
public abstract void returnError(String message);
}</code></pre><p>In the root package, create a package named <strong>utils</strong>. Inside this package create a java class named UserTask. This class will be responsible to make API calls and return the result to the presenter which will show the result or the error depending upon what we get.</p><p>If you aren’t familiar with RxJava, I strongly recommend having a look here: <a href="https://ayusch.com/understanding-rxjava-basics/" rel="noopener">Understanding RxJava Basics</a>.</p><p>I’ve explained all about how observeOn and subscribeOn work and what are their roles. Once you’ve gone through it, you’re good to go.</p><p>In our <strong>onNext</strong> method, we’ll return the result, and in onError, we’ll return the error.</p><p>This is how UserTask.java class looks like at the end:</p><pre><code class="language-java">public class UserTask {
public static void getUsers(final Callback&lt;List&lt;User&gt;&gt; callback) {
NetworkingUtils.getUserApiInstance()
.getUsers()
.observeOn(AndroidSchedulers.mainThread())
.subscribeOn(Schedulers.io())
.subscribe(new Observer&lt;List&lt;User&gt;&gt;() {
@Override
public void onSubscribe(Disposable d) {
}
@Override
public void onNext(List&lt;User&gt; users) {
callback.returnResult(users);
}
@Override
public void onError(Throwable e) {
callback.returnError(e.getMessage());
}
@Override
public void onComplete() {
}
});
}
}</code></pre><h3 id="finishing-up">Finishing Up</h3><p>With the major part of the work already done, we’re now left with passing the result from presenter to the view and setting the adapter for RecyclerView.</p><p>To do this, head over to <strong>UserPresenter.java</strong> class and in the loadUsers method, call <strong>UserTask.getUser()</strong> and provide a callback which returns the result or error.</p><p>In the returnResult method, we’ll call <strong>mView.loadDataInList()</strong> method passing a list of users successfully obtained. In the returnError method, we’ll call the <strong>mView.showError() </strong>method which’ll display errors if any. With this, our presenter class is complete, here’s how it looks like at the end:</p><pre><code class="language-java">public class UserPresenter implements UserContract.Presenter {
UserContract.View mView;
UserPresenter(UserContract.View mView) {
this.mView = mView;
}
@Override
public void loadUsers() {
UserTask.getUsers(new Callback&lt;List&lt;User&gt;&gt;() {
@Override
public void returnResult(List&lt;User&gt; users) {
mView.loadDataInList(users);
}
@Override
public void returnError(String message) {
mView.showError(message);
}
});
}
@Override
public void start() {
mView.init();
}
}</code></pre><p>In <strong>UserActivity.java</strong>, inside the loadDataInList method, instantiate our customAdapter and set it to recyclerview, and in showError method, just display a toast message. This is how our UserActivity.java looks like at the end:</p><pre><code class="language-java">public class UserActivity extends AppCompatActivity implements UserContract.View {
private UserContract.Presenter mPresenter;
private RecyclerView recyclerview;
CustomAdapter adapter;
@Override
protected void onCreate(Bundle savedInstanceState) {
super.onCreate(savedInstanceState);
setContentView(R.layout.activity_main);
mPresenter = new UserPresenter(this);
mPresenter.start();
}
@Override
public void init() {
recyclerview = findViewById(R.id.recyclerview);
RecyclerView.LayoutManager manager = new LinearLayoutManager(this);
recyclerview.setLayoutManager(manager);
mPresenter.loadUsers();
}
@Override
public void loadDataInList(List&lt;User&gt; users) {
adapter = new CustomAdapter(users);
recyclerview.setAdapter(adapter);
}
@Override
public void showError(String message) {
Toast.makeText(this,message,Toast.LENGTH_LONG).show();
}
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
