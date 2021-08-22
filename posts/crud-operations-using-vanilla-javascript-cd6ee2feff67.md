---
card: "https://cdn-media-1.freecodecamp.org/images/1*xn7U354KKc64AeCSZWLdcw.jpeg"
tags: [JavaScript]
description: by Zafar Saleem
author: "Milad E. Fahmy"
title: "How to perform CRUD operations using vanilla JavaScript"
created: "2021-08-15T19:40:23+02:00"
modified: "2021-08-15T19:40:23+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-es6 tag-tech tag-programming tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">How to perform CRUD operations using vanilla JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*xn7U354KKc64AeCSZWLdcw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*xn7U354KKc64AeCSZWLdcw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*xn7U354KKc64AeCSZWLdcw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*xn7U354KKc64AeCSZWLdcw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*xn7U354KKc64AeCSZWLdcw.jpeg" alt="How to perform CRUD operations using vanilla JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Zafar Saleem</p>
<p>Nowadays there are a number of JavaScript frameworks around such as React, Angular, Vue and so on. They all offer a simple and easy approach towards the development of web applications, especially SPAs.</p>
<p>However, many JavaScript learners tend to begin learning these frameworks and know little about how to develop similar apps in vanilla JavaScript.</p>
<p>One of the most basic operations in any application is CRUD (stands for Create, Read, Update, Delete). This is something we are going to achieve today. We will take a basic and good old example: a Todo app.</p>
<p>Even though vanilla JavaScript will be used for this tutorial, we’ll use ES6 syntax instead of plain old JavaScript syntax. In order to accomplish that, we’ll use the babel transpiler to convert ES6/ES7 to ES5, and we’ll use webpack as a build tool.</p>
<p>I am assuming that you already have the latest version of node.js on your computer. Setting up our environment is going to take some extra time, so no need to go into these details. Simply clone my boilerplate code from here (<a href="https://github.com/zafar-saleem/hut" rel="noopener">https://github.com/zafar-saleem/hut</a>) and run “npm install” to install all the dependencies.</p>
<p>The new files will go into the /src folder. So create a new file called Todo.js inside the /src/scripts/ folder and write the below code into that file.</p>
<p>As you can see in the above code, we are creating a class Todo, and inside that class we are writing a constructor function. Even though JavaScript does not have classes by default, ES6 has classes (which is, in reality, syntactic sugar on top of the JavaScript prototype).</p>
<p>Now when we create a new instance of this class using the new keyword, the constructor function is automatically called. That is where we will add some attributes to the Todo class which we will be able to access in this entire class using the keyword <strong>this</strong>.</p>
<p>Now that we have above code, go ahead and import the above file in the src/index.js file and make a new instance of this class like below.</p>
<p>Now we have some basic code in Todo.js. We also need some basic html code. Write the below code in index.html file in the root folder.</p>
<p>Now that we have the basic html code, let’s go back to Todo.js and get the reference to our ‘.list-item’ container. Write the below code inside the constructor.</p>
<p>After getting the reference to “.list-item” element, I am calling the render function to render a list of items on the screen. This function does not exist yet so we are going to write it next.</p>
<p>But before writing the render function, we need some mock data that we are going to render. So for the purpose of this tutorial, we are going to use an array of objects. Write the below code at the top of the Todo.js file.</p>
<p>Now back to the render function: below is the entire render function.</p>
<p>In this function we are making sure that this.list container is empty, that is we do not want any item to be appended to existing items. The first line simply makes the container empty before appending new items.</p>
<p>Next we are looping the mockData array that we created at the top of the Todo.js file using the forEach function. Inside the forEach callback function, we are first creating some DOM elements by calling createDomElements(item.id); function, and we are passing the current item’s id to that function. I will write this function next, but before getting there let’s finish writing this function.</p>
<p>Once it creates the new DOM element (the li element) with child elements (buttons in this case), it adds that li element into the Todo class as an attribute using the “this” keyword. Now we can access that li element throughout the Todo class so I am accessing that li element and adding the title using the insertAdjacentHTML() function.</p>
<p>Next I am checking if the current item is completed or done. If it is, then I add a class to the current li element which adds a line-through style on the item.</p>
<p>And finally I append that li element to this.list.</p>
<p>Now let’s write the createDomElements() function which is below.</p>
<p>This function seems to have plenty of code, but it is simple to understand. I simply create li elements, delete, edit and complete buttons. Then I add some classes to all of these buttons and set the data-id attribute and assign the current item’s id that we passed as an argument from the render function. Then I put text on these buttons (Edit, Delete and Complete) using “innerHTML”.</p>
<p>Finally, I append these buttons to the li element which I later access in the render function to perform further operations.</p>
<p>Now that we have the basic structure, if you run npm run dev and go to localhost:2770 in the browser, you should have the below items, an input field and button, and four items with their respective buttons.</p>
<p>Until now you should have the “R” part of CRUD — I am reading all the elements from mockData and placing them on the screen.</p>
<p>Now that the Read part is done, it is time begin working on the C part of CRUD. Write a function called create and add the below code.</p>
<p>The Create function is pretty self explanatory: all it does is get the value from the text field. It creates a newItem object with attributes ID, title, done and date.</p>
<p>Finally, push that newItem into mockData array and empty the textfield and call the render function to render all the items with the newly created item.</p>
<p>Now go ahead try this in your browser. Put some text in the text field. Press the add button — but you do not see any change. That is expected, because there is still one last part to this. Simply add an event listener to the “add” button inside the constructor and call the create function as below:</p>
<p>Now try it in your browser and voilà. You have the new item at the bottom of the list.</p>
<p>Two parts of the CRUD operations are completed. The next is the D part which is Delete.</p>
<p>For deleting an item, let’s write a remove (delete is a reserved keyword in JavaScript and for that reason I named it remove) function below.</p>
<p>This function is also quite simple: first get the id from the delete button element, which was added in the createDomElements function using the data-id attribute. Filter through mockData and place a check on the current item’s id with the delete button’s id. This check simply returns all items except the item this check returns true.</p>
<p>After this operation, re-render all the items by calling the render function at the bottom.</p>
<p>Things are looking good but hold on a minute: this function needs to be triggered by calling the delete button. As you might recall, this button was added dynamically in “createDomElements” function. Adding events to such elements are a little tricky. Since these items were not present when the DOM was loaded and were added later, adding the event listener directly to the delete, update and complete buttons is not going to work.</p>
<p>To make this happen, add the event listener to the document object and find the particular button (“delete” in this case) to perform the delete or remove operation.</p>
<p>To call remove, the self word is used. Inside the callback function, the this keyword loses its reference to the Todo class. For that reason, create a new variable called self and assign the “this” keyword to it at the top of the construction.</p>
<p>Inside the callback function, I check if the click element has a class ‘btn-delete’ — that is, is it a delete button? Then simply trigger the remove function and pass the event as a parameter. I use this inside of the remove function to get the id of the current clicked element to perform the delete operation.</p>
<p>The Update part is slightly complicated. It consists of two functions. The first is to render the edit form, which has a text field and update button. The second is to update the function that performs the update operation.</p>
<p>All the above code does is to add and remove CSS classes to show and hide the edit form which is already in the DOM with the edit-popup class. Get the id from the edit button and place it on the update button. Iterate through mockData and check for the current item using its id. Put the title of the item from mockData into the textfield to edit it.</p>
<p>To trigger this function, follow the same logic for delete to add an event listener, like this:</p>
<p>Now it’s time to write the update operation. Follow the code below:</p>
<p>The first 2 lines of this function are to get the id of the item and value from the text field and put them in their respective variables. Then map through mockData, and place a check to find the item that needs to be updated based on the id. Once that item is found, replace the title with a new “itemTobeUpdate” title. Finally return that updated item from the map.</p>
<p>Once that operation is done, hide the edit-popup form by adding and removing the respective CSS classes. Then re-render mockData by calling the render function.</p>
<p>To trigger this function, add the below code inside the constructor.</p>
<p>Now all CRUD operations have been completed. There is one last step which is not part of CRUD but is part of the Todo app. That is to mark items as completed. The below function will achieve this.</p>
<p>Again, follow the same pattern as the rest of the functions:</p>
<ul>
<li>get the id from the button’s data-id attribute</li>
<li>map through mockData and find the relevant item and set its done property to true and return that item</li>
<li>finally, re-render mockData by calling the render function.</li>
</ul>
<p>Again, use the same logic to trigger the delete function, and add the below code inside the constructor to set tasks as completed.</p>
<p>Here is some basic CSS that I used for this tutorial — othing fancy.</p>
<p>That is it for vanilla JavaScript CRUD operations! The next step is to covert this into an Angular and React app to see the difference and find out how convenient such frameworks are.</p>
<p>To get the code and the complete project, clone below repository:</p>
<p><a href="https://github.com/zafar-saleem/todo" rel="noopener">https://github.com/zafar-saleem/todo</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
