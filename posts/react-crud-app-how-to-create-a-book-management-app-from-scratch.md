---
card: "/images/default.jpg"
tags: [React]
description: In this article, you will build a Book Management App in Reac
author: "Milad E. Fahmy"
title: "React CRUD App Tutorial – How to Build a Book Management App in React from Scratch"
created: "2021-08-15T19:26:36+02:00"
modified: "2021-08-15T19:26:36+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">React CRUD App Tutorial – How to Build a Book Management App in React from Scratch</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/04/book_management.jpg 300w,
/news/content/images/size/w600/2021/04/book_management.jpg 600w,
/news/content/images/size/w1000/2021/04/book_management.jpg 1000w,
/news/content/images/size/w2000/2021/04/book_management.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/04/book_management.jpg" alt="React CRUD App Tutorial – How to Build a Book Management App in React from Scratch">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this article, you will build a Book Management App in React from scratch. </p>
<p>By creating this app, you will learn:</p>
<ol>
<li>How to perform CRUD operations</li>
<li>How to use React Router for navigation between routes</li>
<li>How to use React Context API to pass data across routes</li>
<li>How to create a Custom Hook in React</li>
<li>How to store data in local storage to persist it even after page refresh</li>
<li>How to manage data stored in local storage using a custom hook</li>
</ol>
<p>and much more.</p>
<p>We will be using React Hooks to build this application. So if you're new to React Hooks, check out my <a href="https://levelup.gitconnected.com/an-introduction-to-react-hooks-50281fd961fe?source=friends_link&amp;sk=89baff89ec8bc637e7c13b7554904e54">Introduction to React Hooks</a> article to learn the basics.</p>
<blockquote>Want to learn Redux from the absolute beginning and build a food ordering app from scratch? Check out the <a href="https://master-redux.yogeshchavan.dev/">Mastering Redux</a> course.</blockquote>
<h2 id="initial-setup">Initial Setup</h2>
<p>Create a new project using <code>create-react-app</code>:</p><pre><code class="language-js">npx create-react-app book-management-app
</code></pre>
<p>Once the project is created, delete all files from the <code>src</code> folder and create <code>index.js</code> and <code>styles.scss</code> files inside the <code>src</code> folder. Also, create <code>components</code>, &nbsp;<code>context</code>, <code>hooks</code> and &nbsp;<code>router</code> folders inside the <code>src</code> folder.</p>
<p>Install the necessary dependencies:</p><pre><code class="language-js">yarn add bootstrap@4.6.0 lodash@4.17.21 react-bootstrap@1.5.2 node-sass@4.14.1 react-router-dom@5.2.0 uuid@8.3.2
</code></pre>
<p>Open <code>styles.scss</code> and add the contents from <a href="https://github.com/myogeshchavan97/react-book-management-app/blob/master/src/styles.scss">here</a> inside it.</p>
<h2 id="how-to-create-the-initial-pages">How to Create the Initial Pages</h2>
<p>Create a new file <code>Header.js</code> inside the <code>components</code> folder with the following content:</p><pre><code class="language-jsx">import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () =&gt; {
return (
&lt;header&gt;
&lt;h1&gt;Book Management App&lt;/h1&gt;
&lt;hr /&gt;
&lt;div className="links"&gt;
&lt;NavLink to="/" className="link" activeClassName="active" exact&gt;
Books List
&lt;/NavLink&gt;
&lt;NavLink to="/add" className="link" activeClassName="active"&gt;
Add Book
&lt;/NavLink&gt;
&lt;/div&gt;
&lt;/header&gt;
);
};
export default Header;
</code></pre>
<p>Here, we've added two navigation links using the <code>NavLink</code> component of <code>react-router-dom</code>: one to see a list of all the books, and the other to add a new book.</p>
<p>We're using <code>NavLink</code> instead of the anchor tag ( <code>&lt;a /&gt;</code>) so the page will not refresh when a user clicks on any of the links.</p>
<p>Create a new file called <code>BooksList.js</code> inside the <code>components</code> folder with the following content:</p><pre><code class="language-js">import React from 'react';
const BooksList = () =&gt; {
return &lt;h2&gt;List of books&lt;/h2&gt;;
};
export default BooksList;
</code></pre>
<p>Create a new file called <code>AddBook.js</code> inside the <code>components</code> folder with the following content:</p><pre><code class="language-jsx">import React from 'react';
import BookForm from './BookForm';
const AddBook = () =&gt; {
const handleOnSubmit = (book) =&gt; {
console.log(book);
};
return (
&lt;React.Fragment&gt;
&lt;BookForm handleOnSubmit={handleOnSubmit} /&gt;
&lt;/React.Fragment&gt;
);
};
export default AddBook;
</code></pre>
<p>In this file, we're displaying a <code>BookForm</code> component (which we're yet to create). </p>
<p>For the <code>BookForm</code> component, we're passing the <code>handleOnSubmit</code> method so we can do some processing later once we submit the form.</p>
<p>Now, create a new file <code>BookForm.js</code> inside the <code>components</code> folder with the following content:</p><pre><code class="language-jsx">import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
const BookForm = (props) =&gt; {
const [book, setBook] = useState({
bookname: props.book ? props.book.bookname : '',
author: props.book ? props.book.author : '',
quantity: props.book ? props.book.quantity : '',
price: props.book ? props.book.price : '',
date: props.book ? props.book.date : ''
});
const [errorMsg, setErrorMsg] = useState('');
const { bookname, author, price, quantity } = book;
const handleOnSubmit = (event) =&gt; {
event.preventDefault();
const values = [bookname, author, price, quantity];
let errorMsg = '';
const allFieldsFilled = values.every((field) =&gt; {
const value = `${field}`.trim();
return value !== '' &amp;&amp; value !== '0';
});
if (allFieldsFilled) {
const book = {
id: uuidv4(),
bookname,
author,
price,
quantity,
date: new Date()
};
props.handleOnSubmit(book);
} else {
errorMsg = 'Please fill out all the fields.';
}
setErrorMsg(errorMsg);
};
const handleInputChange = (event) =&gt; {
const { name, value } = event.target;
switch (name) {
case 'quantity':
if (value === '' || parseInt(value) === +value) {
setBook((prevState) =&gt; ({
...prevState,
[name]: value
}));
}
break;
case 'price':
if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
setBook((prevState) =&gt; ({
...prevState,
[name]: value
}));
}
break;
default:
setBook((prevState) =&gt; ({
...prevState,
[name]: value
}));
}
};
return (
&lt;div className="main-form"&gt;
{errorMsg &amp;&amp; &lt;p className="errorMsg"&gt;{errorMsg}&lt;/p&gt;}
&lt;Form onSubmit={handleOnSubmit}&gt;
&lt;Form.Group controlId="name"&gt;
&lt;Form.Label&gt;Book Name&lt;/Form.Label&gt;
&lt;Form.Control
className="input-control"
type="text"
name="bookname"
value={bookname}
placeholder="Enter name of book"
onChange={handleInputChange}
/&gt;
&lt;/Form.Group&gt;
&lt;Form.Group controlId="author"&gt;
&lt;Form.Label&gt;Book Author&lt;/Form.Label&gt;
&lt;Form.Control
className="input-control"
type="text"
name="author"
value={author}
placeholder="Enter name of author"
onChange={handleInputChange}
/&gt;
&lt;/Form.Group&gt;
&lt;Form.Group controlId="quantity"&gt;
&lt;Form.Label&gt;Quantity&lt;/Form.Label&gt;
&lt;Form.Control
className="input-control"
type="number"
name="quantity"
value={quantity}
placeholder="Enter available quantity"
onChange={handleInputChange}
/&gt;
&lt;/Form.Group&gt;
&lt;Form.Group controlId="price"&gt;
&lt;Form.Label&gt;Book Price&lt;/Form.Label&gt;
&lt;Form.Control
className="input-control"
type="text"
name="price"
value={price}
placeholder="Enter price of book"
onChange={handleInputChange}
/&gt;
&lt;/Form.Group&gt;
&lt;Button variant="primary" type="submit" className="submit-btn"&gt;
Submit
&lt;/Button&gt;
&lt;/Form&gt;
&lt;/div&gt;
);
};
export default BookForm;
</code></pre>
<p>Let's understand what we're doing here.</p>
<p>Initially, we've defined a state as an object using the <code>useState</code> hook to store all the entered details like this:</p><pre><code class="language-js">const [book, setBook] = useState({
bookname: props.book ? props.book.bookname : '',
author: props.book ? props.book.author : '',
quantity: props.book ? props.book.quantity : '',
price: props.book ? props.book.price : '',
date: props.book ? props.book.date : ''
});
</code></pre>
<p>As we'll be using the same <code>BookForm</code> component to add and edit the book, we're first checking if the <code>book</code> prop is passed or not using the ternary operator.</p>
<p>If the prop is passed, we're setting it to the passed value otherwise an empty string (<code>''</code>).</p>
<blockquote>Don't worry if it looks complicated now. You will understand it better once we build some initial functionality.</blockquote>
<p>Then we've added a state for displaying an error message and we've used ES6 destructuring syntax to refer each of the property inside the state like this:</p><pre><code class="language-js">const [errorMsg, setErrorMsg] = useState('');
const { bookname, author, price, quantity } = book;
</code></pre>
<p>From the <code>BookForm</code> component, we're returning a Form where we enter book name, book author, quantity, and price. We're using the <a href="https://react-bootstrap.github.io/">react-bootstrap</a> framework to display the form in a nice format.</p>
<p>Each input field has added an <code>onChange</code> handler which calls the <code>handleInputChange</code> method.</p>
<p>Inside the <code>handleInputChange</code> method, we've added a switch statement to change the value of the state based on which input field is changed.</p>
<p>When we type anything in the <code>quantity</code> input field, <code>event.target.name</code> will be <code>quantity</code> so the first switch case will match. Inside that switch case, we're checking to see if the entered value is an integer without a decimal point.</p>
<p>If yes, then only do we update the state as shown below:</p><pre><code class="language-js">if (value === '' || parseInt(value) === +value) {
setBook((prevState) =&gt; ({
...prevState,
[name]: value
}));
}
</code></pre>
<p>So the user is not able to enter any decimal value for the quantity input field.</p>
<p>For the <code>price</code> switch case, we're checking for a decimal number with only two digits after the decimal point. So we've added a regular expression check that looks like this: <code>value.match(/^\d{1,}(\.\d{0,2})?$/)</code>.</p>
<p>If the price value matches with the regular expression only then do we update the state.</p>
<p><strong>Note:</strong> For both the <code>quantity</code> and <code>price</code> switch cases, we're also checking for empty values like this: <code>value === ''</code>. This is to allow the user to entirely delete the entered value if they need to.</p>
<p>Without that check, the user will not be able to able to delete the entered value by pressing <code>Ctrl + A + Delete</code>.</p>
<p>For all other input fields, the default switch case will be executed which will update the state based on the user's entered value.</p>
<p>Next, once we submit the form, the <code>handleOnSubmit</code> method will be called.</p>
<p>Inside this method, we're first checking if the user has entered all the details using the <code>every</code> array method:</p><pre><code class="language-js">const allFieldsFilled = values.every((field) =&gt; {
const value = `${field}`.trim();
return value !== '' &amp;&amp; value !== '0';
});
</code></pre>
<p>The <code>every</code> array method is one of the most useful array methods in JavaScript. </p>
<blockquote>Check out <a href="/news/complete-introduction-to-the-most-useful-javascript-array-methods/">my article here</a> to learn about the most useful JavaScript array methods along with their browser support.</blockquote>
<p>If all the values are filled in, then we're creating an object with all the filled in values. We're also calling the <code>handleOnSubmit</code> method by passing book as an argument, otherwise we're setting an error message. </p>
<p>The <code>handleOnSubmit</code> method is passed as a prop from the &nbsp;<code>AddBook</code> component.</p><pre><code class="language-js">if (allFieldsFilled) {
const book = {
id: uuidv4(),
bookname,
author,
price,
quantity,
date: new Date()
};
props.handleOnSubmit(book);
} else {
errorMsg = 'Please fill out all the fields.';
}
</code></pre>
<p>Note that to create a unique ID we're calling the <code>uuidv4()</code> method from the <a href="https://www.npmjs.com/package/uuid">uuid</a> npm package.</p>
<p>Now, create a new file <code>AppRouter.js</code> inside the <code>router</code> folder with the following content:</p><pre><code class="language-jsx">import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
const AppRouter = () =&gt; {
return (
&lt;BrowserRouter&gt;
&lt;div&gt;
&lt;Header /&gt;
&lt;div className="main-content"&gt;
&lt;Switch&gt;
&lt;Route component={BooksList} path="/" exact={true} /&gt;
&lt;Route component={AddBook} path="/add" /&gt;
&lt;/Switch&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/BrowserRouter&gt;
);
};
export default AppRouter;
</code></pre>
<p>Here, we have set up routing for various components like <code>BooksList</code> and <code>AddBook</code> using the <code>react-router-dom</code> library.</p>
<blockquote>If you're new to React Router, Check out my free <a href="https://yogeshchavan1.podia.com/react-router-introduction">React Router Introduction</a> course.</blockquote>
<p>Now, open the <code>src/index.js</code> file and add the following contents inside it:</p><pre><code class="language-js">import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
ReactDOM.render(&lt;AppRouter /&gt;, document.getElementById('root'));
</code></pre>
<p>Now, start the React App by running the following command from the terminal:</p><pre><code class="language-js">yarn start
</code></pre>
<p>You will see the following screen when you access the application at <a href="http://localhost:3000/">http://localhost:3000/</a>.</p>
<p>As you can see, we're correctly able to add the book and display it on the console.</p>
<p>But instead of logging into the console, let's add it to local storage.</p>
<h2 id="how-to-create-a-custom-hook-for-local-storage">How to Create a Custom Hook for Local Storage</h2>
<p>Local storage is amazing. It allows us to easily store application data in the browser and is an alternative to cookies for storing data.</p>
<p>The advantage of using local storage is that the data will be saved permanently in the browser cache until we manually delete it so we can access it even after refreshing the page. As you might know, data stored in the React state will be lost once we refresh the page.</p>
<p>There are many use cases for local storage, and one of them is to store shopping cart items so they will not be deleted even if we refresh the page.</p>
<p>To add data to local storage, we use the <code>setItem</code> method by providing a key and value:</p><pre><code class="language-js">localStorage.setItem(key, value)
</code></pre>
<blockquote>Both the key and value have to be a string. But we can store the JSON object also by using the <code>JSON.stringify</code> method.</blockquote>
<p>To learn about local storage and its various applications in detail, check out <a href="https://javascript.plainenglish.io/everything-you-need-to-know-about-html5-local-storage-and-session-storage-479c63415c0a?source=friends_link&amp;sk=f429aa5008683a3b0359db43f976efb3">this article</a>.</p>
<p>Create a new file <code>useLocalStorage.js</code> inside the <code>hooks</code> folder with the following content:</p><pre><code class="language-jsx">import { useState, useEffect } from 'react';
const useLocalStorage = (key, initialValue) =&gt; {
const [value, setValue] = useState(() =&gt; {
try {
const localValue = window.localStorage.getItem(key);
return localValue ? JSON.parse(localValue) : initialValue;
} catch (error) {
return initialValue;
}
});
useEffect(() =&gt; {
window.localStorage.setItem(key, JSON.stringify(value));
}, [key, value]);
return [value, setValue];
};
export default useLocalStorage;
</code></pre>
<p>Here, we've used a <code>useLocalStorage</code> hook that accepts a <code>key</code> and <code>initialValue</code>.</p>
<p>For declaring state using the <code>useState</code> hook, we're using <a href="https://reactjs.org/docs/hooks-reference.html#lazy-initial-state">lazy initialization</a>.</p>
<p>So the code inside the function passed to <code>useState</code> will be executed only once, even if the <code>useLocalStorage</code> hook is called multiple times on every re-render of the application.</p>
<p>So initially we're checking to see if there is any value in local storage with the provided <code>key</code> and we return the value by parsing it using the <code>JSON.parse</code> method:</p><pre><code class="language-js">try {
const localValue = window.localStorage.getItem(key);
return localValue ? JSON.parse(localValue) : initialValue;
} catch (error) {
return initialValue;
}
</code></pre>
<p>Then later, if there is any change in the <code>key</code> or <code>value</code>, we'll update the local storage:</p><pre><code class="language-js">useEffect(() =&gt; {
window.localStorage.setItem(key, JSON.stringify(value));
}, [key, value]);
return [value, setValue];
</code></pre>
<p>Then we're returning the <code>value</code> stored in local storage and <code>setValue</code> function which we will call to update the localStorage data.</p>
<h2 id="how-to-use-the-local-storage-hook">How to Use the Local Storage Hook</h2>
<p>Now, let's use this <code>useLocalStorage</code> hook so we can add or remove data from local storage.</p>
<p>Open the <code>AppRouter.js</code> file and use the <code>useLocalStorage</code> hook inside the component:</p><pre><code class="language-js">import useLocalStorage from '../hooks/useLocalStorage';
const AppRouter = () =&gt; {
const [books, setBooks] = useLocalStorage('books', []);
return (
...
)
}
</code></pre>
<p>Now, we need to pass the <code>books</code> and <code>setBooks</code> as props to the <code>AddBook</code> component so we can add the book to local storage.</p>
<p>So change the route from this code:</p><pre><code class="language-jsx">&lt;Route component={AddBook} path="/add" /&gt;
</code></pre>
<p>to the below code:</p><pre><code class="language-jsx">&lt;Route
render={(props) =&gt; (
&lt;AddBook {...props} books={books} setBooks={setBooks} /&gt;
)}
path="/add"
/&gt;
</code></pre>
<p>Here, we're using the render props pattern to pass the default props passed by React router along with the <code>books</code> and <code>setBooks</code>.</p>
<blockquote>Check out my free <a href="https://yogeshchavan1.podia.com/react-router-introduction">React Router Introduction</a> course to better understand this render props pattern and the importance of using the <code>render</code> keyword instead of <code>component</code>.</blockquote>
<p>Your entire <code>AppRouter.js</code> file will look like this now:</p><pre><code class="language-jsx">import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import useLocalStorage from '../hooks/useLocalStorage';
const AppRouter = () =&gt; {
const [books, setBooks] = useLocalStorage('books', []);
return (
&lt;BrowserRouter&gt;
&lt;div&gt;
&lt;Header /&gt;
&lt;div className="main-content"&gt;
&lt;Switch&gt;
&lt;Route component={BooksList} path="/" exact={true} /&gt;
&lt;Route
render={(props) =&gt; (
&lt;AddBook {...props} books={books} setBooks={setBooks} /&gt;
)}
path="/add"
/&gt;
&lt;/Switch&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/BrowserRouter&gt;
);
};
export default AppRouter;
</code></pre>
<p>Now open <code>AddBook.js</code> and replace its content with the following code:</p><pre><code class="language-jsx">import React from 'react';
import BookForm from './BookForm';
const AddBook = ({ history, books, setBooks }) =&gt; {
const handleOnSubmit = (book) =&gt; {
setBooks([book, ...books]);
history.push('/');
};
return (
&lt;React.Fragment&gt;
&lt;BookForm handleOnSubmit={handleOnSubmit} /&gt;
&lt;/React.Fragment&gt;
);
};
export default AddBook;
</code></pre>
<p>First, we're using ES6 destructuring syntax to access the <code>history</code>, <code>books</code> and <code>setBooks</code> props into the component.</p>
<p>The <code>history</code> prop is automatically passed by React Router to every component mentioned in the <code>&lt;Route /&gt;</code>. We're passing the <code>books</code> and <code>setBooks</code> props from the <code>AppRouter.js</code> file.</p>
<p>We're storing all the added books in an array. Inside the <code>handleOnSubmit</code> method, we're calling the <code>setBooks</code> function by passing an array by adding a newly added book first and then spreading all the books already added in the <code>books</code> array as shown below:</p><pre><code class="language-js">setBooks([book, ...books]);
</code></pre>
<p>Here, I'm adding the newly added <code>book</code> first and then spreading the already added <code>books</code> because I want the latest book to be displayed first when we display the list of books later.</p>
<p>But you can change the order if you want like this:</p><pre><code class="language-js">setBooks([...books, book]);
</code></pre>
<p>This will add the newly added book at the end of all the already added books.</p>
<p>We're able to use spread operator because we know that <code>books</code> is an array (as we have initialized it to an empty array <code>[]</code> in <code>AppRouter.js</code> file as shown below):</p><pre><code class="language-js"> const [books, setBooks] = useLocalStorage('books', []);
</code></pre>
<p>Then once the book is added to local storage by calling the <code>setBooks</code> method, inside the <code>handleOnSubmit</code> method we're redirecting the user to the <code>Books List</code> page using <code>history.push</code> method:</p><pre><code class="language-js">history.push('/');
</code></pre>
<p>Now, let's check If we're able to save the books to local storage or not.</p>
<p>As you can see, the book is correctly getting added to local storage (and you can confirm this in the applications tab of Chrome dev tools).</p>
<h2 id="how-to-display-added-books-on-the-ui">How to Display Added Books on the UI</h2>
<p>Now, let's display the added books on the UI under the <code>Books List</code> menu.</p>
<p>Open <code>AppRouter.js</code> and pass the <code>books</code> and <code>setBooks</code> as props to the <code>BooksList</code> component.</p>
<p>Your <code>AppRouter.js</code> file will look like this now:</p><pre><code class="language-jsx">import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import useLocalStorage from '../hooks/useLocalStorage';
const AppRouter = () =&gt; {
const [books, setBooks] = useLocalStorage('books', []);
return (
&lt;BrowserRouter&gt;
&lt;div&gt;
&lt;Header /&gt;
&lt;div className="main-content"&gt;
&lt;Switch&gt;
&lt;Route
render={(props) =&gt; (
&lt;BooksList {...props} books={books} setBooks={setBooks} /&gt;
)}
path="/"
exact={true}
/&gt;
&lt;Route
render={(props) =&gt; (
&lt;AddBook {...props} books={books} setBooks={setBooks} /&gt;
)}
path="/add"
/&gt;
&lt;/Switch&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/BrowserRouter&gt;
);
};
export default AppRouter;
</code></pre>
<p>Here, we've just changed the first Route related to the <code>BooksList</code> component.</p>
<p>Now, create a new file <code>Book.js</code> inside the <code>components</code> folder with the following content:</p><pre><code class="language-jsx">import React from 'react';
import { Button, Card } from 'react-bootstrap';
const Book = ({
id,
bookname,
author,
price,
quantity,
date,
handleRemoveBook
}) =&gt; {
return (
&lt;Card style={{ width: '18rem' }} className="book"&gt;
&lt;Card.Body&gt;
&lt;Card.Title className="book-title"&gt;{bookname}&lt;/Card.Title&gt;
&lt;div className="book-details"&gt;
&lt;div&gt;Author: {author}&lt;/div&gt;
&lt;div&gt;Quantity: {quantity} &lt;/div&gt;
&lt;div&gt;Price: {price} &lt;/div&gt;
&lt;div&gt;Date: {new Date(date).toDateString()}&lt;/div&gt;
&lt;/div&gt;
&lt;Button variant="primary"&gt;Edit&lt;/Button&gt;{' '}
&lt;Button variant="danger" onClick={() =&gt; handleRemoveBook(id)}&gt;
Delete
&lt;/Button&gt;
&lt;/Card.Body&gt;
&lt;/Card&gt;
);
};
export default Book;
</code></pre>
<p>Now, open the <code>BooksList.js</code> file and replace its contents with the following code:</p><pre><code class="language-jsx">import React from 'react';
import _ from 'lodash';
import Book from './Book';
const BooksList = ({ books, setBooks }) =&gt; {
const handleRemoveBook = (id) =&gt; {
setBooks(books.filter((book) =&gt; book.id !== id));
};
return (
&lt;React.Fragment&gt;
&lt;div className="book-list"&gt;
{!_.isEmpty(books) ? (
books.map((book) =&gt; (
&lt;Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} /&gt;
))
) : (
&lt;p className="message"&gt;No books available. Please add some books.&lt;/p&gt;
)}
&lt;/div&gt;
&lt;/React.Fragment&gt;
);
};
export default BooksList;
</code></pre>
<p>In this file, we're looping over the <code>books</code> using the array <code>map</code> method and passing them as a prop to the <code>Book</code> component.</p>
<p>Note that we're also passing the <code>handleRemoveBook</code> function as a prop so we will be able to delete any book we want.</p>
<p>Inside the <code>handleRemoveBook</code> function, we're calling the <code>setBooks</code> function by using the array <code>filter</code> method to keep only books that do not match with the provided book <code>id</code>.</p><pre><code class="language-js">const handleRemoveBook = (id) =&gt; {
setBooks(books.filter((book) =&gt; book.id !== id));
};
</code></pre>
<p>Now, if you check the application by visiting <a href="http://localhost:3000/">http://localhost:3000/</a>, you will be able to see the added book on the UI.</p>
<p>Let's add another book to verify the entire flow.</p>
<p>As you can see, when we add a new book, we're getting redirected to the list page where we're able to delete the book. You can see that it's instantly deleted from the UI as well as from local storage.</p>
<p>Also when we refresh the page the data does not get lost. That's the power of local storage.</p>
<h2 id="how-to-edit-a-book">How to Edit a Book</h2>
<p>Now we have add and delete functionality for the books. Let's add a way to edit the books we have.</p>
<p>Open <code>Book.js</code> and change the below code:</p><pre><code class="language-jsx">&lt;Button variant="primary"&gt;Edit&lt;/Button&gt;{' '}
</code></pre>
<p>to this code:</p><pre><code class="language-jsx">&lt;Button variant="primary" onClick={() =&gt; history.push(`/edit/${id}`)}&gt;
Edit
&lt;/Button&gt;{' '}
</code></pre>
<p>Here, we've added an <code>onClick</code> handler to redirect the user to the <code>/edit/id_of_the_book</code> route when we click on the edit button.</p>
<p>But we don't have access to the <code>history</code> object in the <code>Book</code> component because the <code>history</code> prop is passed only to the components which are mentioned in the <code>&lt;Route /&gt;</code>.</p>
<p>We're rendering the <code>Book</code> component inside the <code>BooksList</code> component so we can get access to <code>history</code> only inside the <code>BooksList</code> component. Then we can pass it as a prop to the <code>Book</code> component.</p>
<p>But instead of that, React router provides an easy way using the <code>useHistory</code> hook.</p>
<p>Import the <code>useHistory</code> hook at the top of the <code>Book.js</code> file:</p><pre><code class="language-js">import { useHistory } from 'react-router-dom';
</code></pre>
<p>and inside the <code>Book</code> component, call the <code>useHistory</code> hook.</p><pre><code class="language-js">const Book = ({
id,
bookname,
author,
price,
quantity,
date,
handleRemoveBook
}) =&gt; {
const history = useHistory();
...
}
</code></pre>
<p>Now we have access to the <code>history</code> object inside the <code>Book</code> component.</p>
<p>Your entire <code>Book.js</code> file looks like this now:</p><pre><code class="language-jsx">import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
const Book = ({
id,
bookname,
author,
price,
quantity,
date,
handleRemoveBook
}) =&gt; {
const history = useHistory();
return (
&lt;Card style={{ width: '18rem' }} className="book"&gt;
&lt;Card.Body&gt;
&lt;Card.Title className="book-title"&gt;{bookname}&lt;/Card.Title&gt;
&lt;div className="book-details"&gt;
&lt;div&gt;Author: {author}&lt;/div&gt;
&lt;div&gt;Quantity: {quantity} &lt;/div&gt;
&lt;div&gt;Price: {price} &lt;/div&gt;
&lt;div&gt;Date: {new Date(date).toDateString()}&lt;/div&gt;
&lt;/div&gt;
&lt;Button variant="primary" onClick={() =&gt; history.push(`/edit/${id}`)}&gt;
Edit
&lt;/Button&gt;{' '}
&lt;Button variant="danger" onClick={() =&gt; handleRemoveBook(id)}&gt;
Delete
&lt;/Button&gt;
&lt;/Card.Body&gt;
&lt;/Card&gt;
);
};
export default Book;
</code></pre>
<p>Create a new file called <code>EditBook.js</code> inside the <code>components</code> folder with the following content:</p><pre><code class="language-jsx">import React from 'react';
import BookForm from './BookForm';
import { useParams } from 'react-router-dom';
const EditBook = ({ history, books, setBooks }) =&gt; {
const { id } = useParams();
const bookToEdit = books.find((book) =&gt; book.id === id);
const handleOnSubmit = (book) =&gt; {
const filteredBooks = books.filter((book) =&gt; book.id !== id);
setBooks([book, ...filteredBooks]);
history.push('/');
};
return (
&lt;div&gt;
&lt;BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} /&gt;
&lt;/div&gt;
);
};
export default EditBook;
</code></pre>
<p>Here, for the <code>onClick</code> handler of the Edit button, we're redirecting the user to the <code>/edit/some_id</code> route – but such a route does not exist yet. So let's create that first.</p>
<p>Open <code>AppRouter.js</code> and before the ending tag of <code>Switch</code> add two more routes:</p><pre><code class="language-jsx">&lt;Switch&gt;
...
&lt;Route
render={(props) =&gt; (
&lt;EditBook {...props} books={books} setBooks={setBooks} /&gt;
)}
path="/edit/:id"
/&gt;
&lt;Route component={() =&gt; &lt;Redirect to="/" /&gt;} /&gt;
&lt;/Switch&gt;
</code></pre>
<p>The first Route is for the <code>EditBook</code> component. Here, the path is defined as <code>/edit/:id</code> where <code>:id</code> represents any random id.</p>
<p>The second Route is to handle all other routes that do not match with any of the routes mentioned.</p>
<p>So if we access any random route like <code>/help</code> or <code>/contact</code> then we'll redirect the user to the <code>/</code> route which is the <code>BooksList</code> component.</p>
<p>Your entire <code>AppRouter.js</code> file looks like this now:</p><pre><code class="language-jsx">import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import useLocalStorage from '../hooks/useLocalStorage';
const AppRouter = () =&gt; {
const [books, setBooks] = useLocalStorage('books', []);
return (
&lt;BrowserRouter&gt;
&lt;div&gt;
&lt;Header /&gt;
&lt;div className="main-content"&gt;
&lt;Switch&gt;
&lt;Route
render={(props) =&gt; (
&lt;BooksList {...props} books={books} setBooks={setBooks} /&gt;
)}
path="/"
exact={true}
/&gt;
&lt;Route
render={(props) =&gt; (
&lt;AddBook {...props} books={books} setBooks={setBooks} /&gt;
)}
path="/add"
/&gt;
&lt;Route
render={(props) =&gt; (
&lt;EditBook {...props} books={books} setBooks={setBooks} /&gt;
)}
path="/edit/:id"
/&gt;
&lt;Route component={() =&gt; &lt;Redirect to="/" /&gt;} /&gt;
&lt;/Switch&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/BrowserRouter&gt;
);
};
export default AppRouter;
</code></pre>
<p>Now, let's check the edit functionality of the app.</p>
<p>As you can see, we're successfully able to edit the book. Let's understand how this works.</p>
<p>First, inside the <code>AppRouter.js</code> file we have a route like this:</p><pre><code class="language-jsx">&lt;Route
render={(props) =&gt; (
&lt;EditBook {...props} books={books} setBooks={setBooks} /&gt;
)}
path="/edit/:id"
/&gt;
</code></pre>
<p>and inside the <code>Book.js</code> file, we have an edit button like this:</p><pre><code class="language-jsx">&lt;Button variant="primary" onClick={() =&gt; history.push(`/edit/${id}`)}&gt;
Edit
&lt;/Button&gt;
</code></pre>
<p>So whenever we're clicking on the Edit button for any of the books, we're redirecting the user to the <code>EditBook</code> component using the <code>history.push</code> method by passing the id of the book to be edited.</p>
<p>Then inside the <code>EditBook</code> component, we're using the <code>useParams</code> hook provided by <code>react-router-dom</code> to access the <code>props.params.id</code>.</p>
<p>So the below two lines are identical.</p><pre><code class="language-js">const { id } = useParams();
// the above line of code is same as the below code
const { id } = props.match.params;
</code></pre>
<p>Once we've gotten that <code>id</code>, we're using the array <code>find</code> method to find out the particular book from the list of books with the matching provided <code>id</code>.</p><pre><code class="language-js">const bookToEdit = books.find((book) =&gt; book.id === id);
</code></pre>
<p>and this particular book we're passing to the <code>BookForm</code> component as a <code>book</code> prop:</p><pre><code class="language-jsx">&lt;BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} /&gt;
</code></pre>
<p>Inside the <code>BookForm</code> component, we've defined the state as shown below:</p><pre><code class="language-js">const [book, setBook] = useState({
bookname: props.book ? props.book.bookname : '',
author: props.book ? props.book.author : '',
quantity: props.book ? props.book.quantity : '',
price: props.book ? props.book.price : '',
date: props.book ? props.book.date : ''
});
</code></pre>
<p>Here, we're checking &nbsp;to see if the <code>book</code> prop exists. If yes, then we're using the details of the book passed as a prop, otherwise we're initializing the state with an empty value (<code>''</code>) &nbsp;for each property.</p>
<p>And each of the input elements has provided a <code>value</code> prop which we're setting from the state like this:</p><pre><code class="language-jsx">&lt;Form.Control
...
value={bookname}
...
/&gt;
</code></pre>
<p>But we can improve a bit on the <code>useState</code> syntax inside the <code>BookForm</code> component.</p>
<p>Instead of directly setting an object for the <code>useState</code> hook, we can use lazy initialization as done in the <code>useLocalStorage.js</code> file.</p>
<p>So change the below code:</p><pre><code class="language-js">const [book, setBook] = useState({
bookname: props.book ? props.book.bookname : '',
author: props.book ? props.book.author : '',
quantity: props.book ? props.book.quantity : '',
price: props.book ? props.book.price : '',
date: props.book ? props.book.date : ''
});
</code></pre>
<p>to this code:</p><pre><code class="language-js">const [book, setBook] = useState(() =&gt; {
return {
bookname: props.book ? props.book.bookname : '',
author: props.book ? props.book.author : '',
quantity: props.book ? props.book.quantity : '',
price: props.book ? props.book.price : '',
date: props.book ? props.book.date : ''
};
});
</code></pre>
<p>Because of this change, the code for setting state will not be executed on every re-render of the application. It will just be executed once when the component is mounted.</p>
<blockquote>Note that the re-rendering of the component happens on every state or prop change.</blockquote>
<p>If you check the application, you will see that the application works exactly as before without any issue. But we've just improved the application performance by a little bit.</p>
<h2 id="how-to-use-react-s-context-api">How to use React's Context API</h2>
<p>Now we're done building out the entire application's functionality. But if you check the <code>AppRouter.js</code> file, you will see that each Route looks a bit complicated. This is because we're passing the same <code>books</code> and <code>setBooks</code> props to each of the components by using the render props pattern.</p>
<p>So we can use the React Context API to simplify this code.</p>
<blockquote>Note that this is an optional step. You don't need to use Context API as we're passing the props only one level deep and the current code is working perfectly fine and we've not used any wrong approach for passing the props.</blockquote>
<p>But just to make the Router code simpler and to give you an idea about how to leverage the power of Context API, we will use it in our application.</p>
<p>Create a new file <code>BooksContext.js</code> inside the <code>context</code> folder with the following content:</p><pre><code class="language-js">import React from 'react';
const BooksContext = React.createContext();
export default BooksContext;
</code></pre>
<p>Now, inside the <code>AppRouter.js</code> file, import the above exported context.</p><pre><code class="language-js">import BooksContext from '../context/BooksContext';
</code></pre>
<p>and replace the <code>AppRouter</code> component with the below code:</p><pre><code class="language-jsx">const AppRouter = () =&gt; {
const [books, setBooks] = useLocalStorage('books', []);
return (
&lt;BrowserRouter&gt;
&lt;div&gt;
&lt;Header /&gt;
&lt;div className="main-content"&gt;
&lt;BooksContext.Provider value={{ books, setBooks }}&gt;
&lt;Switch&gt;
&lt;Route component={BooksList} path="/" exact={true} /&gt;
&lt;Route component={AddBook} path="/add" /&gt;
&lt;Route component={EditBook} path="/edit/:id" /&gt;
&lt;Route component={() =&gt; &lt;Redirect to="/" /&gt;} /&gt;
&lt;/Switch&gt;
&lt;/BooksContext.Provider&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/BrowserRouter&gt;
);
};
</code></pre>
<p>Here, we've converted the render props pattern back to the normal routes and added the entire <code>Switch</code> block inside the <code>BooksContext.Provider</code> component like this:</p><pre><code class="language-jsx">&lt;BooksContext.Provider value={{ books, setBooks }}&gt;
&lt;Switch&gt;
...
&lt;/Switch&gt;
&lt;/BooksContext.Provider&gt;
</code></pre>
<p>Here, for the <code>BooksContext.Provider</code> component, we've provided a <code>value</code> prop by passing the data we want to access inside the components mentioned in the Route.</p>
<p>So now, every component declared as a part of Route will be able to access the <code>books</code> and <code>setBooks</code> via the Context API.</p>
<p>Now, open the <code>BooksList.js</code> file and remove the <code>books</code> and <code>setBooks</code> props which are destructured, as we are no longer directly passing the props.</p>
<p>Import the <code>BooksContext</code> and <code>useContext</code> at the top of the file:</p><pre><code class="language-js">import React, { useContext } from 'react';
import BooksContext from '../context/BooksContext';
</code></pre>
<p>And above the <code>handleRemoveBook</code> function, add the following code:</p><pre><code class="language-js">const { books, setBooks } = useContext(BooksContext);
</code></pre>
<p>Here, we're taking out the <code>books</code> and <code>setBooks</code> props from the <code>BooksContext</code> using the <code>useContext</code> hook.</p>
<p>Your entire <code>BooksList.js</code> file will look like this:</p><pre><code class="language-jsx">import React, { useContext } from 'react';
import _ from 'lodash';
import Book from './Book';
import BooksContext from '../context/BooksContext';
const BooksList = () =&gt; {
const { books, setBooks } = useContext(BooksContext);
const handleRemoveBook = (id) =&gt; {
setBooks(books.filter((book) =&gt; book.id !== id));
};
return (
&lt;React.Fragment&gt;
&lt;div className="book-list"&gt;
{!_.isEmpty(books) ? (
books.map((book) =&gt; (
&lt;Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} /&gt;
))
) : (
&lt;p className="message"&gt;No books available. Please add some books.&lt;/p&gt;
)}
&lt;/div&gt;
&lt;/React.Fragment&gt;
);
};
export default BooksList;
</code></pre>
<p>Now, make similar changes in the <code>AddBook.js</code> file.</p>
<p>Your entire <code>AddBook.js</code> file will look like this:</p><pre><code class="language-jsx">import React, { useContext } from 'react';
import BookForm from './BookForm';
import BooksContext from '../context/BooksContext';
const AddBook = ({ history }) =&gt; {
const { books, setBooks } = useContext(BooksContext);
const handleOnSubmit = (book) =&gt; {
setBooks([book, ...books]);
history.push('/');
};
return (
&lt;React.Fragment&gt;
&lt;BookForm handleOnSubmit={handleOnSubmit} /&gt;
&lt;/React.Fragment&gt;
);
};
export default AddBook;
</code></pre>
<p>Note that here, we're still using the destructuring for the <code>history</code> prop. We've only removed the <code>books</code> and <code>setBooks</code> from the destructuring syntax.</p>
<p>Now, make similar changes in the <code>EditBook.js</code> file.</p>
<p>Your entire <code>EditBook.js</code> file will look like this:</p><pre><code class="language-jsx">import React, { useContext } from 'react';
import BookForm from './BookForm';
import { useParams } from 'react-router-dom';
import BooksContext from '../context/BooksContext';
const EditBook = ({ history }) =&gt; {
const { books, setBooks } = useContext(BooksContext);
const { id } = useParams();
const bookToEdit = books.find((book) =&gt; book.id === id);
const handleOnSubmit = (book) =&gt; {
const filteredBooks = books.filter((book) =&gt; book.id !== id);
setBooks([book, ...filteredBooks]);
history.push('/');
};
return (
&lt;div&gt;
&lt;BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} /&gt;
&lt;/div&gt;
);
};
export default EditBook;
</code></pre>
<p>If you check the application, you will see that it works exactly as before but we're now using React Context API.</p>
<blockquote>If you want to understand the Context API in detail, check out my <a href="https://medium.com/swlh/what-is-context-api-in-react-and-how-to-use-it-in-react-app-dedbcdd78801?source=friends_link&amp;sk=5ea2b1078e16173036b95c477cde369c">this article</a>.</blockquote>
<h3 id="thanks-for-reading-">Thanks for reading!</h3>
<p>You can find the complete source code for this application in <a href="https://github.com/myogeshchavan97/react-book-management-app">this repository</a>.</p>
<p>Want to learn all ES6+ features in detail including let and const, promises, various promise methods, array and object destructuring, arrow functions, async/await, import and export and a whole lot more from scratch?</p>
<p><strong>Check out my <a href="https://modernjavascript.yogeshchavan.dev/">Mastering Modern JavaScript</a> book. This book covers all the pre-requisites for learning React and helps you to become better at JavaScript and React.</strong></p>
<blockquote>Check out free preview contents of the book <a href="/news/learn-modern-javascript/">here</a>.</blockquote>
<p>Also, you can check out my <strong>free</strong> <a href="https://yogeshchavan1.podia.com/react-router-introduction">Introduction to React Router</a> course to learn React Router from scratch.</p>
<p>Want to stay up to date with regular content regarding JavaScript, React, Node.js? <a href="https://www.linkedin.com/in/yogesh-chavan97/">Follow me on LinkedIn</a>.</p>
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
