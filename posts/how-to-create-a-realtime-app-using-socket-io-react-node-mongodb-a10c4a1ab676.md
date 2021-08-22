---
card: "https://cdn-media-1.freecodecamp.org/images/1*j_kShofJmfZ_-bEpt1IS8Q.jpeg"
tags: [JavaScript]
description: Ever wondered how real time apps are built? Ever noticed the
author: "Milad E. Fahmy"
title: "How to create a realtime app using Socket.io, React, Node & MongoDB"
created: "2021-08-15T19:37:50+02:00"
modified: "2021-08-15T19:37:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-nodejs tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to create a realtime app using Socket.io, React, Node &amp; MongoDB</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*j_kShofJmfZ_-bEpt1IS8Q.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*j_kShofJmfZ_-bEpt1IS8Q.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*j_kShofJmfZ_-bEpt1IS8Q.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*j_kShofJmfZ_-bEpt1IS8Q.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*j_kShofJmfZ_-bEpt1IS8Q.jpeg" alt="How to create a realtime app using Socket.io, React, Node &amp; MongoDB">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Ever wondered how real time apps are built? Ever noticed the importance and use cases of real time applications?</p>
<p>If you are curious about the above questions and need an answer, then this blog post is for you.</p>
<p>First, let’s identify a few use cases needing real time applications:</p>
<ol>
<li>Getting location updates for your cab on a map of a cab booking application.</li>
<li>Getting new messages instantly on your favourite chatting application.</li>
<li>Food order info update to the kitchen of your favourite restaurant.</li>
</ol>
<p>These all are the common scenarios of our day to day lives where we can’t tolerate a delay in the updating of information and hence need real time communication.</p>
<p><strong>Technologies</strong> which can be used for <strong>realtime communication</strong> are:</p>
<ol>
<li><strong>Short Polling</strong>: AJAX, creates heavy traffic.</li>
<li><strong>Long Polling</strong>: Like AJAX, but the server holds on the response until it has an update. After receiving it, the client sends another request, and needs additional header to be traversed back and forth causing additional overhead.</li>
<li><strong>Web Sockets</strong>: make it possible to open interactive communication between the client and server. One can send a request to the server and receive event driven responses without Polling the server for a reply, making web sockets a <strong>best choice</strong> for our use case.</li>
</ol>
<p>More in-depth info about the above three technologies can be read <a href="https://stackoverflow.com/questions/12555043/my-understanding-of-http-polling-long-polling-http-streaming-and-websockets" rel="noopener">here</a>.</p>
<p>We will be learning to create a real time application by covering the following scenario.</p>
<p>Imagine you are sitting at your favourite restaurant and have a digital menu. You place the order and the kitchen gets updated regarding your order in real time. When the kitchen is done with the order, they update it in real time too.</p>
<p>Features in detail:</p>
<ol>
<li><strong>Place Order</strong>: Interface to select the quantity and place the order for a selected food item to the kitchen.</li>
<li><strong>Kitchen</strong>: Interface which can be opened across multiple kitchens and updates in real time the chefs and cooks regarding the total orders created and predicted quantity of food items, giving them the flexibility to update it. Also has a functionality to download the report in the form of an excel sheet.</li>
<li><strong>Change Predicted</strong>: Interface to update the predicted quantity of food items.</li>
</ol>
<p><strong>A live demo</strong> of this scenario can be found <a href="https://faasos-honey.herokuapp.com/" rel="noopener">here</a>.</p>
<p>For better understanding, open it in different tabs/devices at the same time to see the data change in real time.</p>
<p><strong>The source code</strong> is <a href="https://github.com/honey93/OrderKitchen" rel="noopener">here</a>. Feel free to make something innovative/useful on top of it.</p>
<p>So let’s get started.</p>
<h3 id="technology-stack-">Technology Stack:</h3>
<p><strong>Frontend</strong>: React.js, Reactstrap, Socket.io</p>
<p><strong>Backend</strong>: Node.js (Express), MongoDB, Socket.io</p>
<h3 id="folder-structure-">Folder Structure:</h3><pre><code>/*
Go to the root directory in the source code and find out the below-mentioned files. This architecture helps in creating a big modular App.
*/
backend-my-app/ /* Backend code of the app */
server.js       /* Socket and backend code resides here*/
build/      /* Optional for deployment of Frontend Build */
package.json /* Backend dependency */
...
public/
src/  /*      Frontend Sourcecode      */
global/      /*   Components getting used everywhere   */
header.css
header.js
main/
Kitchen.js
PlaceOrder.js
UpdatePredicted.js
App.js   /* Routing logic and component assembly part */
package.json /* Frontend dependency */
............</code></pre>
<h3 id="explanation-of-source-code-">Explanation of source code:</h3>
<h4 id="frontend-">Frontend:</h4><pre><code>git clone https://github.com/honey93/OrderKitchen.git
cd OrderKitchen
npm install
npm start</code></pre>
<p>Packages used:</p>
<ol>
<li><a href="https://reactstrap.github.io/" rel="noopener">Reactstrap</a>: Easy to use bootstrap4 components</li>
<li><a href="https://socket.io/docs/" rel="noopener">Socket.io</a>: Socket.io is a library that enables real-time, bidirectional and event-based communication between the browser and the server.</li>
<li><a href="https://www.npmjs.com/package/react-html-table-to-excel" rel="noopener">react-html-table-to-excel</a>: Provides a client side generation of Excel (.xls) file from HTML table element.</li>
<li><a href="https://www.npmjs.com/package/react-router-dom" rel="noopener">react-router-dom</a>: DOM bindings for react router. It consists of many important components like BrowserRouter used when there is a server to handle dynamic request, Switch, Route, etc.</li>
</ol>
<h4 id="app-component"><strong>App Component</strong></h4>
<p><strong>Path</strong>: src/App.js</p>
<p>This component contains the main routing logic of the Frontend. This file is used in src/index.js inside the Browser Router Module. The below code demonstrates one of the approaches to keep your app modular.</p><pre><code class="language-javascript">import React, { Component } from "react";
import "./App.css";
import { Header } from "./global/header";
import { Switch, Route } from "react-router-dom";
import PlaceOrder from "./main/PlaceOrder";
import UpdatePredicted from "./main/UpdatePredicted";
import Kitchen from "./main/Kitchen";
/*The &lt;Route&gt; component is the main part of React Router. Anywhere that you want to only render content based on the location’s pathname, you should use a &lt;Route&gt; element. */
/* The Route component expects a path prop, which is a string that describes the pathname that the route matches */
/* The &lt;Switch&gt; will iterate over routes and only render the first one that matches the current pathname */
class App extends Component {
render() {
return (
&lt;div className="App"&gt;
&lt;Header /&gt;
&lt;Switch&gt;
&lt;Route exact path="/" component={PlaceOrder} /&gt;
&lt;Route path="/updatepredicted" component={UpdatePredicted} /&gt;
&lt;Route path="/kitchen" component={Kitchen} /&gt;
&lt;/Switch&gt;
&lt;/div&gt;
);
}
}
export default App;</code></pre>
<h4 id="header-component"><strong>Header Component</strong></h4>
<p><strong>Path</strong>: src/global/header.js</p>
<p>This component will be common and used across the sections like Place Order, Change Predicted, Kitchen. This approach helps avoid code duplication and keeps the application modular.</p><pre><code class="language-js">import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import socketIOClient from "socket.io-client";
import "./header.css";
// The Header creates links that can be used to navigate
// between routes.
var socket;
class Header extends Component {
/* Creating a Socket client and exporting it at the end to be used across the Place Order, Kitchen, etc components*/
constructor() {
super();
this.state = {
endpoint: 'http://localhost:3001/'
};
socket = socketIOClient(this.state.endpoint);
}
render() {
return (
&lt;header&gt;
&lt;nav&gt;
&lt;ul className="NavClass"&gt;
&lt;li&gt;
&lt;NavLink exact to="/"&gt;
Place Order
&lt;/NavLink&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;NavLink to="/updatepredicted"&gt;Change Predicted &lt;/NavLink&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;NavLink to="/kitchen"&gt; Kitchen &lt;/NavLink&gt;
&lt;/li  &gt;
&lt;/ul&gt;
&lt;/nav&gt;
&lt;/header&gt;
);
}
}
export { Header, socket };</code></pre>
<h4 id="kitchen-component"><strong>Kitchen Component</strong></h4>
<p><strong>Path</strong>: src/main/Kitchen.js</p>
<p>The Kitchen Screen UI logic and html code resides in this component:</p><pre><code class="language-js">import React, { Component } from "react";
import { Button, Table, Container } from "reactstrap";
import { socket } from "../global/header";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
class Kitchen extends Component {
constructor() {
super();
this.state = {
food_data: []
// this is where we are connecting to with sockets,
};
}
getData = foodItems =&gt; {
console.log(foodItems);
this.setState({ food_data: foodItems });
};
changeData = () =&gt; socket.emit("initial_data");
/*As soon as the component gets mounted ie in componentDidMount method, firing the initial_data event to get the data to initialize the Kitchen Dashboard */
/* Adding change_data listener for listening to any changes made by Place Order and Predicted Order components*/
componentDidMount() {
var state_current = this;
socket.emit("initial_data");
socket.on("get_data", this.getData);
socket.on("change_data", this.changeData);
}
/* Removing the listener before unmounting the component in order to avoid addition of multiple listener at the time revisit*/
componentWillUnmount() {
socket.off("get_data");
socket.off("change_data");
}
/* When Done gets clicked, this function is called and mark_done event gets emitted which gets listened on the backend explained later on*/
markDone = id =&gt; {
// console.log(predicted_details);
socket.emit("mark_done", id);
};
getFoodData() {
return this.state.food_data.map(food =&gt; {
return (
&lt;tr key={food._id}&gt;
&lt;td&gt; {food.name} &lt;/td&gt;
&lt;td&gt; {food.ordQty} &lt;/td&gt;
&lt;td&gt; {food.prodQty} &lt;/td&gt;
&lt;td&gt; {food.predQty} &lt;/td&gt;
&lt;td&gt;
&lt;button onClick={() =&gt; this.markDone(food._id)}&gt;Done&lt;/button&gt;
&lt;/td&gt;
&lt;/tr&gt;
);
});
}
render() {
return (
&lt;Container&gt;
&lt;h2 className="h2Class"&gt;Kitchen Area&lt;/h2&gt;
&lt;ReactHTMLTableToExcel
id="test-table-xls-button"
className="download-table-xls-button"
table="table-to-xls"
filename="tablexls"
sheet="tablexls"
buttonText="Download as XLS"
/&gt;
&lt;Table striped id="table-to-xls"&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt;Name&lt;/th&gt;
&lt;th&gt;Quantity&lt;/th&gt;
&lt;th&gt;Created Till Now&lt;/th&gt;
&lt;th&gt;Predicted&lt;/th&gt;
&lt;th&gt;Status&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;{this.getFoodData()}&lt;/tbody&gt;
&lt;/Table&gt;
&lt;/Container&gt;
);
}
}
export default Kitchen;</code></pre>
<h4 id="place-order-component"><strong>Place Order Component</strong></h4>
<p><strong>Path</strong>: src/main/PlaceOrder.js</p><pre><code class="language-js">import React, { Component } from "react";
import { Button, Table, Container } from "reactstrap";
import { socket } from "../global/header";
class PlaceOrder extends Component {
constructor() {
super();
this.state = {
food_data: []
// this is where we are connecting to with sockets,
};
}
getData = foodItems =&gt; {
console.log(foodItems);
foodItems = foodItems.map(food =&gt; {
food.order = 0;
return food;
});
this.setState({ food_data: foodItems });
};
componentDidMount() {
socket.emit("initial_data");
var state_current = this;
socket.on("get_data", state_current.getData);
}
componentWillUnmount() {
socket.off("get_data", this.getData);
}
//Function to place the order.
sendOrder = id =&gt; {
var order_details;
this.state.food_data.map(food =&gt; {
if (food._id == id) {
order_details = food;
}
return food;
});
console.log(order_details);
socket.emit("putOrder", order_details);
var new_array = this.state.food_data.map(food =&gt; {
food.order = 0;
return food;
});
this.setState({ food_data: new_array });
};
// Changing the quantity in the state which is emitted to the backend at the time of placing the order.
changeQuantity = (event, foodid) =&gt; {
if (parseInt(event.target.value) &lt; 0) {
event.target.value = 0;
}
var new_array = this.state.food_data.map(food =&gt; {
if (food._id == foodid) {
food.order = parseInt(event.target.value);
}
return food;
});
this.setState({ food_data: new_array });
};
// To get the initial data
getFoodData() {
return this.state.food_data.map(food =&gt; {
return (
&lt;tr key={food._id}&gt;
&lt;td&gt; {food.name} &lt;/td&gt;
&lt;td&gt;
&lt;input
onChange={e =&gt; this.changeQuantity(e, food._id)}
value={food.order}
type="number"
placeholder="Quantity"
/&gt;
&lt;/td&gt;
&lt;td&gt;
&lt;button onClick={() =&gt; this.sendOrder(food._id)}&gt;Order&lt;/button&gt;
&lt;/td&gt;
&lt;/tr&gt;
);
});
}
render() {
return (
&lt;Container&gt;
&lt;h2 className="h2Class"&gt;Order Menu&lt;/h2&gt;
&lt;Table striped&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt;Product&lt;/th&gt;
&lt;th&gt;Quantity&lt;/th&gt;
&lt;th&gt;Order&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;{this.getFoodData()}&lt;/tbody&gt;
&lt;/Table&gt;
&lt;/Container&gt;
);
}
}
export default PlaceOrder;</code></pre>
<p>One more section called Update Predicted Path: src/main/UpdatePredicted.js similar to above section is there in the code repository.</p>
<h3 id="backend">Backend</h3>
<p>Starting the Backend:</p><pre><code>cd backend-my-app
npm install
node server.js</code></pre>
<p>Packages used:</p>
<ol>
<li><a href="https://www.npmjs.com/package/monk" rel="noopener"><strong>Monk</strong></a>: A tiny layer that provides simple yet substantial usability improvements for MongoDB usage within Node.JS.</li>
<li><a href="https://socket.io/docs/" rel="noopener"><strong>Socket.io</strong></a>: Socket.io is a library that enables real-time, bidirectional and event-based communication between the browser and the server.</li>
</ol>
<p>3. <a href="https://www.npmjs.com/package/express" rel="noopener"><strong>Express</strong></a>: Fast, minimalist web framework for <a href="http://nodejs.org/" rel="noopener">node</a>.</p>
<h4 id="main-code"><strong>Main Code</strong></h4>
<p><strong>Path</strong>: backend-my-app/server.js</p><pre><code class="language-js">const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
// Connection string of MongoDb database hosted on Mlab or locally
var connection_string = "**********";
// Collection name should be "FoodItems", only one collection as of now.
// Document format should be as mentioned below, at least one such document:
// {
//     "_id": {
//         "$oid": "5c0a1bdfe7179a6ca0844567"
//     },
//     "name": "Veg Roll",
//     "predQty": 100,
//     "prodQty": 295,
//     "ordQty": 1
// }
const db = require("monk")(connection_string);
const collection_foodItems = db.get("FoodItems");
// our localhost port
const port = process.env.PORT || 3000;
const app = express();
// our server instance
const server = http.createServer(app);
// This creates our socket using the instance of the server
const io = socketIO(server);
io.on("connection", socket =&gt; {
//  console.log("New client connected" + socket.id);
//console.log(socket);
// Returning the initial data of food menu from FoodItems collection
socket.on("initial_data", () =&gt; {
collection_foodItems.find({}).then(docs =&gt; {
io.sockets.emit("get_data", docs);
});
});
// Placing the order, gets called from /src/main/PlaceOrder.js of Frontend
socket.on("putOrder", order =&gt; {
collection_foodItems
.update({ _id: order._id }, { $inc: { ordQty: order.order } })
.then(updatedDoc =&gt; {
// Emitting event to update the Kitchen opened across the devices with the realtime order values
io.sockets.emit("change_data");
});
});
// Order completion, gets called from /src/main/Kitchen.js
socket.on("mark_done", id =&gt; {
collection_foodItems
.update({ _id: id }, { $inc: { ordQty: -1, prodQty: 1 } })
.then(updatedDoc =&gt; {
//Updating the different Kitchen area with the current Status.
io.sockets.emit("change_data");
});
});
// Functionality to change the predicted quantity value, called from /src/main/UpdatePredicted.js
socket.on("ChangePred", predicted_data =&gt; {
collection_foodItems
.update(
{ _id: predicted_data._id },
{ $set: { predQty: predicted_data.predQty } }
)
.then(updatedDoc =&gt; {
// Socket event to update the Predicted quantity across the Kitchen
io.sockets.emit("change_data");
});
});
// disconnect is fired when a client leaves the server
socket.on("disconnect", () =&gt; {
console.log("user disconnected");
});
});
/* Below mentioned steps are performed to return the Frontend build of create-react-app from build folder of backend Comment it out if running locally*/
app.use(express.static("build"));
app.use("/kitchen", express.static("build"));
app.use("/updatepredicted", express.static("build"));
server.listen(port, () =&gt; console.log(`Listening on port ${port}`));</code></pre>
<p><strong>Database</strong>: MongoDB</p>
<p><a href="https://mlab.com/" rel="noopener"><strong>Mlab</strong></a>: Database as a service for MongoDB</p>
<p><strong>Collection Name</strong>: FoodItems</p>
<p><strong>Document format</strong>: At least one document is needed in the FoodItems collection with the below mentioned format.</p><pre><code class="language-js">{
"name": "Veg Roll",  // Food Name
"predQty": 100,  // Predicted Quantity
"prodQty": 295,  // Produced Quantity
"ordQty": 1   // Total Order Quantity
}</code></pre>
<p>Hope you got the understanding of how to create a modular real time app using the trending MERN stack. If you found it helpful <strong>clap </strong>below, give <strong>stars</strong> to the project <a href="https://github.com/honey93/OrderKitchen" rel="noopener">repo</a> and share with your friends too.</p>
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
