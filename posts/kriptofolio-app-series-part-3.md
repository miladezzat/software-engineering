---
card: "https://cdn-media-1.freecodecamp.org/images/1*xtjCi9Hfi8W4ye54HM2Y0w.png"
tags: [Android]
description: "The most important thing to focus on when starting to build a"
author: "Milad E. Fahmy"
title: "All about that architecture: exploring different architecture patterns and how to use them in your app"
created: "2021-08-16T11:38:30+02:00"
modified: "2021-08-16T11:38:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-android tag-cryptocurrency tag-technology tag-apps-tag tag-architecture-components ">
<header class="post-full-header">
<h1 class="post-full-title">All about that architecture: exploring different architecture patterns and how to use them in your app</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*xtjCi9Hfi8W4ye54HM2Y0w.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*xtjCi9Hfi8W4ye54HM2Y0w.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*xtjCi9Hfi8W4ye54HM2Y0w.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*xtjCi9Hfi8W4ye54HM2Y0w.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*xtjCi9Hfi8W4ye54HM2Y0w.png" alt="All about that architecture: exploring different architecture patterns and how to use them in your app">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
...
}</code></pre><p>Then obtain the ViewModel with single line of code.</p><pre><code class="language-Kotlin">class MainListFragment : Fragment() {
...
private lateinit var viewModel: MainViewModel
...
override fun onActivityCreated(savedInstanceState: Bundle?) {
super.onActivityCreated(savedInstanceState)
setupList()
// Obtain ViewModel from ViewModelProviders, using this fragment as LifecycleOwner.
viewModel = ViewModelProviders.of(this).get(MainViewModel::class.java)
...
}
...
}</code></pre><p>Basically that’s it, congratulations! ? Let’s move on.</p><h3 id="livedata">LiveData</h3><p>LiveData is an observable data holder class. It follows the <a href="https://en.wikipedia.org/wiki/Observer_pattern" rel="noopener">observer pattern</a>. LiveData is lifecycle-aware. This means that it only updates app component (activity, fragment, etc.) observers that are in an active lifecycle state.</p><p>LiveData class returns the latest value of the data. When data changes it returns the updated value. LiveData is best suited with ViewModel.</p><p>We will use LiveData together with ViewModel like this:</p><pre><code class="language-Kotlin">...
class MainViewModel : ViewModel() {
private val liveData = MutableLiveData&lt;ArrayList&lt;Cryptocurrency&gt;&gt;()
val data: LiveData&lt;ArrayList&lt;Cryptocurrency&gt;&gt;
get() = liveData
init {
val tempData = ArrayList&lt;Cryptocurrency&gt;()
val btc:Cryptocurrency = Cryptocurrency("Bitcoin", 1, 0.56822348, "BTC", 8328.77, 4732.60, 0.19, -10.60, 0.44, 20.82)
val eth:Cryptocurrency = Cryptocurrency("Etherium", 2, 6.0, "ETH", 702.99, 4217.94, 0.13, -7.38, 0.79, 33.32)
tempData.add(btc)
tempData.add(eth)
liveData.value = tempData
}
}</code></pre><p>Observe data on the ViewModel, exposed as LiveData:</p><pre><code class="language-Kotlin">...
class MainListFragment : Fragment() {
private lateinit var recyclerView: RecyclerView
private lateinit var recyclerAdapter: MainRecyclerViewAdapter
private lateinit var viewModel: MainViewModel
...
override fun onActivityCreated(savedInstanceState: Bundle?) {
super.onActivityCreated(savedInstanceState)
setupList()
// Obtain ViewModel from ViewModelProviders, using this fragment as LifecycleOwner.
viewModel = ViewModelProviders.of(this).get(MainViewModel::class.java)
// Observe data on the ViewModel, exposed as a LiveData
viewModel.data.observe(this, Observer { data -&gt;
// Set the data exposed by the LiveData
if (data != null) {
recyclerAdapter.setData(data)
}
})
}
...
}</code></pre><p>Browse the repository at this point in the history <a href="https://github.com/baruckis/MyCryptoCoinsApp-Android/tree/622cf980c4fb68efab546eeddf31c4bf5aee7ba1" rel="noopener">here</a>.</p><h3 id="data-binding">Data Binding</h3><p>Data Binding Library was created to remove boilerplate code needed to connect to XML layouts.</p><p>To use Data Binding in your Kotlin projects, you will need to turn on support for annotation processors with the kapt compiler plugin. Also add data binding block to the Android configuration gradle file:</p><pre><code class="language-Gradle">...
apply plugin: 'kotlin-kapt'
android {
...
dataBinding {
enabled = true
}
}
...</code></pre><p>To use data binding generated classes, we need to put all the view code in <code>&lt;layo</code>ut&gt; tags. The most powerful concept of data binding is that we can bind some data class to an xml layout and item properties to fields directly.</p><pre><code class="language-XML">&lt;layout xmlns:app="http://schemas.android.com/apk/res-auto"
xmlns:tools="http://schemas.android.com/tools"&gt;
&lt;data&gt;
&lt;variable
name="cryptocurrency"
type="com.baruckis.mycryptocoins.data.Cryptocurrency" /&gt;
&lt;/data&gt;
...
&lt;android.support.v7.widget.AppCompatTextView
android:id="@+id/item_name"
style="@style/MainListItemPrimeText"
android:text="@{cryptocurrency.name}"
android:textAlignment="viewStart"
app:layout_constraintBottom_toTopOf="@+id/item_amount_symbol"
app:layout_constraintEnd_toStartOf="@+id/guideline1_percent"
app:layout_constraintStart_toEndOf="@+id/item_image_icon"
app:layout_constraintTop_toTopOf="parent"
app:layout_constraintVertical_chainStyle="spread"
tools:text="@string/sample_text_item_name" /&gt;
...
&lt;/layout&gt;</code></pre><p>RecyclerView adapter with data biding will look like this:</p><pre><code class="language-Kotlin">class MainRecyclerViewAdapter() : RecyclerView.Adapter&lt;MainRecyclerViewAdapter.BindingViewHolder&gt;() {
private lateinit var dataList: ArrayList&lt;Cryptocurrency&gt;
fun setData(newDataList: ArrayList&lt;Cryptocurrency&gt;) {
dataList = newDataList
}
override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): BindingViewHolder {
val inflater = LayoutInflater.from(parent.context)
val binding = FragmentMainListItemBinding.inflate(inflater, parent, false)
return BindingViewHolder(binding)
}
override fun onBindViewHolder(holder: BindingViewHolder, position: Int) = holder.bind(dataList[position])
override fun getItemCount(): Int = dataList.size
...
inner class BindingViewHolder(var binding: FragmentMainListItemBinding) : RecyclerView.ViewHolder(binding.root) {
fun bind(cryptocurrency: Cryptocurrency) {
binding.cryptocurrency = cryptocurrency
binding.itemRanking.text = String.format("${cryptocurrency.rank}")
...
binding.executePendingBindings()
}
}
data class Cryptocurrency(val name: String,
val rank: Short,
val amount: Double,
@PrimaryKey
val symbol: String,
val price: Double,
val amountFiat: Double,
val pricePercentChange1h: Double,
val pricePercentChange7d: Double,
val pricePercentChange24h: Double,
val amountFiatChange24h: Double)</code></pre><p>Add some extra information to tell Room about its structure in the database.</p><p>2. Create the DAO.</p><pre><code class="language-Kotlin">@Dao
interface MyCryptocurrencyDao {
@Query("SELECT * FROM Cryptocurrency")
fun getMyCryptocurrencyLiveDataList(): LiveData&lt;List&lt;Cryptocurrency&gt;&gt;
@Insert
fun insertDataToMyCryptocurrencyList(data: List&lt;Cryptocurrency&gt;)
}</code></pre><p>For the start, we are going to create a DAO which only allows us to retrieve records from the table that we have created with Entity and also to insert some sample data.</p><p>3. Create and setup the Database.</p><p>It is important to say that the Database instance should ideally be built only once per session. The one way to achieve this would be to use a Singleton pattern.</p><pre><code class="language-Kotlin">@Database(entities = [Cryptocurrency::class], version = 1, exportSchema = false)
abstract class AppDatabase : RoomDatabase() {
abstract fun myCryptocurrencyDao(): MyCryptocurrencyDao
// The AppDatabase a singleton to prevent having multiple instances of the database opened at the same time.
companion object {
// Marks the JVM backing field of the annotated property as volatile, meaning that writes to this field are immediately made visible to other threads.
@Volatile
private var instance: AppDatabase? = null
// For Singleton instantiation.
fun getInstance(context: Context): AppDatabase {
return instance ?: synchronized(this) {
instance ?: buildDatabase(context).also { instance = it }
}
}
// Creates and pre-populates the database.
private fun buildDatabase(context: Context): AppDatabase {
return Room.databaseBuilder(context, AppDatabase::class.java, DATABASE_NAME)
// Prepopulate the database after onCreate was called.
.addCallback(object : Callback() {
override fun onCreate(db: SupportSQLiteDatabase) {
super.onCreate(db)
// Insert the data on the IO Thread.
ioThread {
getInstance(context).myCryptocurrencyDao().insertDataToMyCryptocurrencyList(PREPOPULATE_DATA)
}
}
})
.build()
}
// Sample data.
val btc: Cryptocurrency = Cryptocurrency("Bitcoin", 1, 0.56822348, "BTC", 8328.77, 4732.60, 0.19, -10.60, 0.44, 20.82)
val eth: Cryptocurrency = Cryptocurrency("Etherium", 2, 6.0, "ETH", 702.99, 4217.94, 0.13, -7.38, 0.79, 33.32)
val PREPOPULATE_DATA = listOf(btc, eth)
}
}</code></pre><pre><code class="language-Kotlin">private val IO_EXECUTOR = Executors.newSingleThreadExecutor()
// Utility method to run blocks on a dedicated background thread, used for io/database work.
fun ioThread(f : () -&gt; Unit) {
IO_EXECUTOR.execute(f)
private val myCryptocurrencyDao: MyCryptocurrencyDao
) {
fun getMyCryptocurrencyLiveDataList(): LiveData&lt;List&lt;Cryptocurrency&gt;&gt; {
return myCryptocurrencyDao.getMyCryptocurrencyLiveDataList()
}
companion object {
// Marks the JVM backing field of the annotated property as volatile, meaning that writes to this field are immediately made visible to other threads.
@Volatile
private var instance: MyCryptocurrencyRepository? = null
// For Singleton instantiation.
fun getInstance(myCryptocurrencyDao: MyCryptocurrencyDao) =
instance ?: synchronized(this) {
instance
?: MyCryptocurrencyRepository(myCryptocurrencyDao).also { instance = it }
}
}
}</code></pre><p>We are going to use this repository in our ViewModel.</p><pre><code class="language-Kotlin">class MainViewModel(myCryptocurrencyRepository: MyCryptocurrencyRepository) : ViewModel() {
val liveData = myCryptocurrencyRepository.getMyCryptocurrencyLiveDataList()
}</code></pre><p>Our Fragment code also evolves.</p><pre><code class="language-Kotlin">class MainListFragment : Fragment() {
...
private lateinit var viewModel: MainViewModel
...
override fun onActivityCreated(savedInstanceState: Bundle?) {
super.onActivityCreated(savedInstanceState)
setupList()
subscribeUi()
}
...
private fun subscribeUi() {
val factory = InjectorUtils.provideMainViewModelFactory(requireContext())
// Obtain ViewModel from ViewModelProviders, using this fragment as LifecycleOwner.
viewModel = ViewModelProviders.of(this, factory).get(MainViewModel::class.java)
// Update the list when the data changes by observing data on the ViewModel, exposed as a LiveData.
viewModel.liveData.observe(this, Observer&lt;List&lt;Cryptocurrency&gt;&gt; { data -&gt;
if (data != null &amp;&amp; data.isNotEmpty()) {
emptyListView.visibility = View.GONE
recyclerView.visibility = View.VISIBLE
recyclerAdapter.setData(data)
} else {
recyclerView.visibility = View.GONE
emptyListView.visibility = View.VISIBLE
}
})
}
}</code></pre><p>Because our ViewModel class now has a constructor which is not empty anymore, we need to implement a provider factory pattern. This will be passed to the <code>ViewModelProviders.of()</code> method as the second parameter.</p><pre><code class="language-Kotlin">object InjectorUtils {
fun provideMainViewModelFactory(
context: Context
): MainViewModelFactory {
val repository = getMyCryptocurrencyRepository(context)
return MainViewModelFactory(repository)
}
private fun getMyCryptocurrencyRepository(context: Context): MyCryptocurrencyRepository {
return MyCryptocurrencyRepository.getInstance(
AppDatabase.getInstance(context).myCryptocurrencyDao())
}
}</code></pre><pre><code class="language-Kotlin">class MainViewModelFactory(private val repository: MyCryptocurrencyRepository) : ViewModelProvider.NewInstanceFactory() {
override fun &lt;T : ViewModel?&gt; create(modelClass: Class&lt;T&gt;): T {
return MainViewModel(repository) as T
}
}</code></pre><p>Browse the repository at this point in the history <a href="https://github.com/baruckis/Kriptofolio/tree/b555fd9e2319bd4580122036d71066860fa82589" rel="noopener">here</a>.</p><h3 id="final-thoughts">Final thoughts</h3><p>Design architectures, that we discussed in this part, should be used as informed guidelines but not a hard rules. I did not wanted to go too much into detail on each topic. With Android Architecture Components we had a look at the coding process. Have in mind that there is lot more to learn on each component individually and I advise you to do that.</p><p>Let’s summarize everything that we manage to make already:</p><ul><li>In My Crypto Coins app, every separate screen has its own ViewModel. This will survive any configuration change and protect the user from any data loss.</li><li>The App’s user interface is a reactive type. This means it will update immediately when the data changes in the back-end. That is done with the help of LiveData.</li><li>Our project have less code as we bind to the variables in our code directly using Data Binding.</li><li>Finally, our app stores user data locally inside the device as a SQLite database. The database was created conveniently with the Room component. The App’s code is structured by features and all project architecture is MVVM — a recommended pattern by Android team.</li></ul><h3 id="repository">Repository</h3><p>Now, as you’re seeing the “Kriptofolio” (previously “My Crypto Coins”) app is really starting to take shape. With the latest repository commit for this part 3, you can find it nicely showing prepopulated database data for the user with the total holdings portfolio value calculated correctly.</p><h4 id="view-source-on-github"><a href="https://github.com/baruckis/Kriptofolio/tree/Part-3" rel="noopener">View Source On GitHub</a></h4><p></p><hr><p><strong><em>Ačiū! Thanks for reading! I originally published this post for my personal blog <a href="https://www.baruckis.com/android/kriptofolio-app-series-part-3/" rel="noopener">www.baruckis.com</a> on August 22, 2018.</em></strong></p>
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
