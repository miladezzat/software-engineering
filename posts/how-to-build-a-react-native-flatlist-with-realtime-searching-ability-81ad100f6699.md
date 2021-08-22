---
card: "https://cdn-media-1.freecodecamp.org/images/1*3ogqzQjYCBUi_y1WYGLxtA.png"
tags: [React Native]
description: "by Vikrant Negi"
author: "Milad E. Fahmy"
title: "How to build a React Native FlatList with realtime searching ability"
created: "2021-08-16T11:38:32+02:00"
modified: "2021-08-16T11:38:32+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react-native tag-flatlist tag-technology tag-programming tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a React Native FlatList with realtime searching ability</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*3ogqzQjYCBUi_y1WYGLxtA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*3ogqzQjYCBUi_y1WYGLxtA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*3ogqzQjYCBUi_y1WYGLxtA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*3ogqzQjYCBUi_y1WYGLxtA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*3ogqzQjYCBUi_y1WYGLxtA.png" alt="How to build a React Native FlatList with realtime searching ability">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
loading: false,
data: [],
error: null,
};</code></pre><p>We’ll also need an array variable:</p><pre><code>this.arrayholder = [];</code></pre><p>Apparently an empty list is no fun. So let spice it up with some random list of users.</p><p>We are going to user <a href="https://randomuser.me/" rel="noopener">randomuser.me</a> which is a free, <a href="https://github.com/RandomAPI/Randomuser.me-Node" rel="noopener">open-source</a> API for generating random user data. Its like Lorem Ipsum, but for people.</p><p>Let’s create a function that goes and fetches some user data for us.</p><pre><code>makeRemoteRequest = () =&gt; {
const url = `https://randomuser.me/api/?&amp;results=20`;
this.setState({ loading: true });
fetch(url)
.then(res =&gt; res.json())
.then(res =&gt; {
this.setState({
data: res.results,
error: res.error || null,
loading: false,
});
this.arrayholder = res.results;
})
.catch(error =&gt; {
this.setState({ error, loading: false });
});
};</code></pre><p>In the above code snippet, we are using the <code><a href="https://facebook.github.io/react-native/docs/network" rel="noopener">fetch</a></code> API to make a remote API request. When the request is complete, we will receive the user data which is saved to <code>data</code> state and also to our <code>arrayholder</code>.</p><p>Now, for the user to search the list, we need to add a search bar on the top of the <code>FlatList</code>. <code>FlatList</code> has a prop to add any custom component to its heade,r which is useful as we’ll be adding a search component there.</p><pre><code>renderHeader = () =&gt; {
return (
&lt;SearchBar
placeholder="Type Here..."
lightTheme
round
onChangeText={text =&gt; this.searchFilterFunction(text)}
autoCorrect={false}
/&gt;
);
};</code></pre><p>In the above function we are using <code>react-native-elements</code> <code>SearchBar</code> component as out header component.</p><p>By default, there is no logic which will filter the list as we type inside the <code>SearchBar</code>. For that we’ll need to write a function that will filter the results as the text inside the <code>SearchBar</code> changes.</p><pre><code>searchFilterFunction = text =&gt; {
const newData = this.arrayholder.filter(item =&gt; {
const itemData = `${item.name.title.toUpperCase()}
${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
const textData = text.toUpperCase();
return itemData.indexOf(textData) &gt; -1;
});
this.setState({ data: newData });
};</code></pre><p>The above function will run the filter function on the <code>arrayholder</code>. We’ll be filtering users based on their name, so we’ll store the name inside the <code>itemData</code> variable and convert it to uppercase.</p><p>This function will receive the text that the user types as a parameter, which we will store in another variable textData after converting it to uppercase.</p><p>After that, we’ll use the <code>indexOf</code> to compare both the text and return true if the text is found inside the <code>itemData</code>. If a true is returned, than <code>filter</code> will keep that data other wise ignore it. So new data is returned anytime the user types any text in the search bar. This new data is then set to the <code>data</code> state, which will eventually be used as a data source for <code>FlatList</code>.</p><p>Now its time to render the FlatList.</p><pre><code>&lt;List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}&gt;
&lt;FlatList
data={this.state.data}
renderItem={({ item }) =&gt; (
&lt;ListItem
roundAvatar
title={`${item.name.first} ${item.name.last}`}
subtitle={item.email}
avatar={{ uri: item.picture.thumbnail }}
containerStyle={{ borderBottomWidth: 0 }}
/&gt;
)}
keyExtractor={item =&gt; item.email}
ItemSeparatorComponent={this.renderSeparator}
ListHeaderComponent={this.renderHeader}
/&gt;
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
