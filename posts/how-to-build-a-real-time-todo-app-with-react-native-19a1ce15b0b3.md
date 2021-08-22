---
card: "https://cdn-media-1.freecodecamp.org/images/1*e2uBLw946pDyqjdV5xAJpQ.png"
tags: [Tech]
description: "A todo app touches on all the important parts of building any"
author: "Milad E. Fahmy"
title: "How to build a real-time todo app with React Native"
created: "2021-08-16T14:41:04+02:00"
modified: "2021-08-16T14:41:04+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-tech tag-education tag-life-lessons tag-web-development tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a real-time todo app with React Native</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*e2uBLw946pDyqjdV5xAJpQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*e2uBLw946pDyqjdV5xAJpQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*e2uBLw946pDyqjdV5xAJpQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*e2uBLw946pDyqjdV5xAJpQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*e2uBLw946pDyqjdV5xAJpQ.png" alt="How to build a real-time todo app with React Native">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
"title": "react-native",
"completed": true,
"createdAt": 1518449005768
├── RootComponent.js   // Root component for our app
├── MainTabNavigator.js// Tab navigation component
screens
├── TodosScreen.js     // Renders the TodosContainer
components
├── Header.js          // Header component
├── AddTodo.js         // Add todo input
├── AddTodoButton.js   // Add todo floating button
├── TodoItem.js        // The todo item
├── TodosContainer.js  // Todos main container api
├── todos.js           // APIs for performing writes
constants              // All types of constants used in app
types                  // Todo type to be used with prop-types
utils                  // Streaming logic goes here</code></pre><p>Let’s breakdown what the base setup comes with:</p><h4 id="1-navigation">1. Navigation</h4><ul><li>All the necessary configurations for connecting to Elasticsearch are at <code>constants/Config.js</code>.</li><li>We’re using <a href="https://reactnavigation.org/docs/tab-navigator.html" rel="noopener">TabNavigator</a> from <a href="https://reactnavigation.org/" rel="noopener">react-navigation</a> for showing the <strong>All</strong>, <strong>Active </strong>and <strong>Completed</strong> todos screen. This is rendered by the <code>navigation/RootComponent.js</code>. You’ll notice the <code>RootComponent</code> wraps everything inside the <code><a href="https://opensource.appbase.io/reactive-manual/getting-started/reactivebase.html" rel="noopener">ReactiveBase</a></code> component from ReactiveSearch. This component provides all the necessary data to the child ReactiveSearch components. You can connect your own Elasticsearch index here by just updating the configurations in <code>constants/Config.js</code>.</li></ul><p>The navigation logic is present in <code>navigation/MainNavigator.js</code>. Lets go over how it works. <a href="https://reactnavigation.org/docs/tab-based-navigation.html" rel="noopener">Here</a> are the docs for tab navigation if you wish to reference anything.</p><pre><code class="language-js">import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Colors from '../constants/Colors';
import CONSTANTS from '../constants';
import TodosScreen from '../screens/TodosScreen';
const commonNavigationOptions = ({ navigation }) =&gt; ({
header: null,
title: navigation.state.routeName,
});
// we just pass these to render different routes
const routeOptions = {
screen: TodosScreen,
navigationOptions: commonNavigationOptions,
};
// different routes for all, active and completed todos
const TabNav = TabNavigator(
{
[CONSTANTS.ALL]: routeOptions,
[CONSTANTS.ACTIVE]: routeOptions,
[CONSTANTS.COMPLETED]: routeOptions,
},
{
navigationOptions: ({ navigation }) =&gt; ({
// this tells us which icon to render on the tabs
tabBarIcon: ({ focused }) =&gt; {
const { routeName } = navigation.state;
let iconName;
switch (routeName) {
case CONSTANTS.ALL:
iconName = 'format-list-bulleted';
break;
case CONSTANTS.ACTIVE:
iconName = 'filter-center-focus';
break;
case CONSTANTS.COMPLETED:
iconName = 'playlist-add-check';
}
return (
&lt;MaterialIcons
name={iconName}
size={28}
style={{ marginBottom: -3 }}
color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
/&gt;
);
},
}),
// for rendering the tabs at bottom
tabBarComponent: TabBarBottom,
tabBarPosition: 'bottom',
animationEnabled: true,
swipeEnabled: true,
},
);
&lt;Fab
direction="up"
containerStyle={{}}
style={{ backgroundColor: COLORS.primary }}
position="bottomRight"
onPress={onPress}
&gt;
&lt;Icon name="add" /&gt;
&lt;/Fab&gt;
);</code></pre><p>Now you can use this component in <code>components/TodosContainer.js</code>.</p><pre><code class="language-javascript">import AddTodoButton from './AddTodoButton';
...
export default class TodosContainer extends React.Component {
render() {
return (
&lt;View style={styles.container}&gt;
...
&lt;AddTodoButton /&gt;
&lt;/View&gt;
);
}
constructor(props) {
super(props);
const { title, completed, createdAt } = this.props.todo;
this.state = {
title,
completed,
createdAt,
};
}
onSubmit = () =&gt; {
if (this.state.title.length &gt; 0) this.props.onAdd(this.state);
return null;
};
setStateUtil = (property, value = undefined) =&gt; {
this.setState({
[property]: value,
});
};
render() {
const { title, completed } = this.state;
const { onBlur } = this.props;
return (
&lt;View
style={{
flex: 1,
width: '100%',
flexDirection: 'row',
alignItems: 'center',
paddingRight: 10,
paddingBottom: 5,
paddingTop: 5,
}}
&gt;
&lt;CheckBox checked={completed} onPress={() =&gt; this.setStateUtil('completed', !completed)} /&gt;
&lt;Body
style={{
flex: 1,
justifyContent: 'flex-start',
alignItems: 'flex-start',
paddingLeft: 25,
}}
&gt;
&lt;TextInput
style={{ width: '90%' }}
placeholder="What needs to be done?"
autoFocus
underLineColorAndroid="transparent"
underlineColor="transparent"
blurOnSubmit
onSubmitEditing={this.onSubmit}
onChangeText={changedTitle =&gt; this.setStateUtil('title', changedTitle)}
value={title}
autoCorrect={false}
autoCapitalize="none"
onBlur={onBlur}
/&gt;
&lt;/Body&gt;
&lt;TouchableOpacity
onPress={() =&gt; this.props.onCancelDelete}
style={{ paddingLeft: 25, paddingRight: 15 }}
&gt;
&lt;Ionicons
name="ios-trash-outline"
color={`${title.length &gt; 0 ? 'black' : 'grey'}`}
size={23}
/&gt;
&lt;/TouchableOpacity&gt;
&lt;/View&gt;
);
}
}</code></pre><p></p><p>The main components used here are <code><a href="https://facebook.github.io/react-native/docs/textinput.html" rel="noopener">TextInput</a></code>, <code><a href="http://docs.nativebase.io/Components.html#checkbox-headref" rel="noopener">Checkbox</a></code> and <code><a href="https://expo.github.io/vector-icons/" rel="noopener">Ionicons</a></code> with straightforward props. We’re using <code>title</code> and <code>completed</code> from the <code>state</code>. We’ll be passing the props <code>todo</code>, <code>onAdd</code>, <code>onCancelDelete</code> and <code>onBlur</code> from the <code>components/TodosContainer.js</code>. These will help us in adding new todos or resetting the view if you wish to cancel adding todos.</p><p>Now we can update <code>components/TodosContainer.js</code> with the required changes for rendering <code>AddTodo</code> component:</p><pre><code class="language-js">...
import AddTodoButton from './AddTodoButton';
import AddTodo from './AddTodo';
import TodoModel from '../api/todos';
...
// will render todos based on the active screen: all, active or completed
export default class TodosContainer extends React.Component {
state = {
addingTodo: false,
};
componentDidMount() {
// includes the methods for creation, updation and deletion
this.api = new TodoModel('react-todos');
}
render() {
return (
&lt;View style={styles.container}&gt;
&lt;Header /&gt;
&lt;StatusBar backgroundColor={COLORS.primary} barStyle="light-content" /&gt;
&lt;ScrollView&gt;
{this.state.addingTodo ? (
&lt;View style={styles.row}&gt;
&lt;AddTodo
onAdd={(todo) =&gt; {
this.setState({ addingTodo: false });
this.api.add(todo);
}}
onCancelDelete={() =&gt; this.setState({ addingTodo: false })}
onBlur={() =&gt; this.setState({ addingTodo: false })}
/&gt;
&lt;/View&gt;
) : null}
&lt;/ScrollView&gt;
&lt;AddTodoButton onPress={() =&gt; this.setState({ addingTodo: true })} /&gt;
&lt;/View&gt;
);
}
...
import { ReactiveList } from '@appbaseio/reactivesearch-native';
...
export default class TodosContainer extends React.Component {
render() {
return (
&lt;View style={styles.container}&gt;
&lt;Header /&gt;
&lt;StatusBar backgroundColor={COLORS.primary} barStyle="light-content" /&gt;
&lt;ScrollView&gt;
&lt;ReactiveList
componentId="ReactiveList"
defaultQuery={() =&gt; ({
query: {
match_all: {},
},
})}
stream
onAllData={this.onAllData}
dataField="title"
showResultStats={false}
pagination={false}
/&gt;
...
&lt;/ScrollView&gt;
&lt;AddTodoButton onPress={() =&gt; this.setState({ addingTodo: true })} /&gt;
&lt;/View&gt;
);
}
}</code></pre><p>We haven’t added the <code>onAllData</code> method yet, but let’s understand a bit about the props that we have used here:</p><ul><li><code>componentId</code> — unique identifier for the component.</li><li><code>defaultQuery</code>: the query to be applied initially for the list. We’ll use <code>match_all</code> to show all the todos in default case.</li><li><code>stream</code>: whether to stream new result updates or just show historical results. By setting this to <code>true</code>, we now also listen for the live Todo updates. We’ll add the streaming related logic later.</li><li><code>onAllData</code> — a callback function which receives the list of current todo items and the streaming (new todos and any updates) and returns a React component or JSX to render. Here’s how the syntax looks like:</li></ul><pre><code class="language-js">&lt;ReactiveList
onAllData(todos, streamData) {
// return the list to render
}
...
/&gt;</code></pre><p>You can read more about all of these props in detail on the ReactiveList’s <a href="https://opensource.appbase.io/reactive-manual/result-components/reactivelist.html" rel="noopener">docs page</a>.</p><p>To see something, we’ll need to return a JSX or React component from <code>onAllData</code> callback. For this, we will use React Native’s <a href="https://facebook.github.io/react-native/docs/flatlist.html" rel="noopener">FlatList</a> which is composed of <a href="https://facebook.github.io/react-native/docs/text.html" rel="noopener">Text</a> components. In the next step we’ll add our custom <code>TodoItem</code> component.</p><pre><code class="language-js">...
import { ScrollView, StyleSheet, StatusBar, FlatList, Text } from 'react-native';
import CONSTANTS from '../constants';
...
export default class TodosContainer extends React.Component {
...
onAllData = (todos, streamData) =&gt; {
// filter data based on "screen": [All | Active | Completed]
const filteredData = this.filterTodosData(todos);
return (
&lt;FlatList
style={{ width: '100%', top: 15 }}
data={filteredData}
keyExtractor={item =&gt; item._id}
renderItem={({ item: todo }) =&gt; (
&lt;Text&gt;{todo.title}&lt;/Text&gt;
)}
/&gt;
);
};
filterTodosData = (todosData) =&gt; {
const { screen } = this.props;
switch (screen) {
case CONSTANTS.ALL:
return todosData;
case CONSTANTS.ACTIVE:
return todosData.filter(todo =&gt; !todo.completed);
case CONSTANTS.COMPLETED:
return todosData.filter(todo =&gt; todo.completed);
}
return todosData;
};
render() {
...
}
onTodoItemToggle = (todo, propAction) =&gt; {
propAction({
...todo,
completed: !todo.completed,
});
};
render() {
const { todo, onUpdate, onDelete } = this.props;
return (
&lt;View style={styles.row}&gt;
&lt;View
style={{
flex: 1,
width: '100%',
flexDirection: 'row',
alignItems: 'center',
paddingRight: 10,
paddingVertical: 5,
}}
&gt;
&lt;TouchableOpacity
onPress={() =&gt; this.onTodoItemToggle(todo, onUpdate)}
style={{
flex: 1,
width: '100%',
flexDirection: 'row',
}}
&gt;
&lt;CheckBox
checked={todo.completed}
onPress={() =&gt; this.onTodoItemToggle(todo, onUpdate)}
/&gt;
&lt;Body
style={{
flex: 1,
justifyContent: 'flex-start',
alignItems: 'flex-start',
paddingLeft: 25,
}}
&gt;
&lt;Text
style={{
color: todo.completed ? 'grey' : 'black',
textDecorationLine: todo.completed ? 'line-through' : 'none',
}}
&gt;
{todo.title}
&lt;/Text&gt;
&lt;/Body&gt;
&lt;/TouchableOpacity&gt;
&lt;TouchableOpacity
onPress={() =&gt; onDelete(todo)}
style={{ paddingLeft: 25, paddingRight: 15 }}
&gt;
&lt;Ionicons
name="ios-trash-outline"
color={`${todo.title.length &gt; 0 ? 'black' : 'grey'}`}
size={23}
/&gt;
&lt;/TouchableOpacity&gt;
&lt;/View&gt;
&lt;/View&gt;
);
}
}</code></pre><p>This component gets the <code>todo</code> from its props along with <code>onDelete</code> and <code>onUpdate</code> which are used to update and delete the todo item respectively. We’re using these at the necessary places using the <code>onPress</code> prop of the components we’re using.</p><p>Next, we can <code>import</code> and use the <code>TodoItem</code> component in our <code>onAllData</code> in <code>components/TodosContainer.js</code>. We’ll pass the <code>todo</code> as a prop along with the API methods for <code>update</code> and <code>destroy</code> which will be used by <code>TodoItem</code> component.</p><pre><code class="language-js">class TodosContainer extends Component {
...
onAllData = (todos, streamData) =&gt; {
...
return (
&lt;FlatList
...
renderItem={({ item: todo }) =&gt; (
&lt;TodoItem
todo={todo}
onUpdate={this.api.update}
onDelete={this.api.destroy}
/&gt;
)}
/&gt;
);
}
...
export default class TodosContainer extends React.Component {
...
onAllData = (todos, streamData) =&gt; {
// merge streaming todos data along with current todos
const todosData = Utils.mergeTodos(todos, streamData);
// filter data based on "screen": [All | Active | Completed]
const filteredData = this.filterTodosData(todosData);
return (
&lt;FlatList
style={{ width: '100%', top: 15 }}
data={filteredData}
keyExtractor={item =&gt; item._id}
renderItem={({ item: todo }) =&gt; (
&lt;TodoItem todo={todo} onUpdate={this.api.update} onDelete={this.api.destroy} /&gt;
)}
/&gt;
);
};
...
}</code></pre><p>The <code>mergeTodos</code> method is present in <code>utils/index.js</code>. Here’s how it works:</p><pre><code class="language-js">class Utils {
static mergeTodos(todos, streamData) {
// generate an array of ids of streamData
const streamDataIds = streamData.map(todo =&gt; todo._id);
return (
todos
// consider streamData as the source of truth
// first take existing todos which are not present in stream data
.filter(({ _id }) =&gt; !streamDataIds.includes(_id))
// then add todos from stream data
.concat(streamData)
// remove todos which are deleted in stream data
.filter(todo =&gt; !todo._deleted)
// finally sort on the basis of creation timestamp
.sort((a, b) =&gt; a.createdAt - b.createdAt)
);
}
}
export default Utils;</code></pre><p>The <code>streamData</code> receives an array of todo objects when they’re created, deleted, or updated. If an object is updated, it contains a <code>_updated</code> key set to <code>true</code>. Similarly, if an object is deleted, it contains a <code>_deleted</code> key set to <code>true</code>. If an object is created, it contains neither of the two. Using these points, we’ve added the <code>mergeTodos</code> function.</p><p>With this, you should be able to see the changes to todo items in realtime! If you have an additional device/emulator running the same app, both will stream new updates too. ?</p><h3 id="useful-links">Useful links</h3><ol><li>Todos app <a href="https://snack.expo.io/@dhruvdutt/todo" rel="noopener">demo</a>, <a href="https://expo.io/@dhruvdutt/todos" rel="noopener">expo link</a>, <a href="https://github.com/appbaseio-apps/todos-native/tree/base" rel="noopener">starter project</a> and <a href="https://github.com/appbaseio-apps/todos-native" rel="noopener">final source code</a></li><li><a href="https://github.com/appbaseio/reactivesearch" rel="noopener">ReactiveSearch GitHub repo</a> ⭐️</li><li>ReactiveSearch <a href="https://opensource.appbase.io/reactive-manual/native" rel="noopener">docs</a></li></ol><p>Hope you enjoyed this story. If you have any thoughts or suggestions, please let me know and have fun!</p><hr><p>You may follow me on <a href="https://twitter.com/divyanshu013">twitter</a> for latest updates. I've also started posting more recent posts on my personal <a href="https://divyanshu013.dev/">blog</a>.</p><p><em>Special thanks</em> to <a href="undefined" rel="noopener">Dhruvdutt Jadhav</a> for helping me with this story and the Todos app.</p>
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
