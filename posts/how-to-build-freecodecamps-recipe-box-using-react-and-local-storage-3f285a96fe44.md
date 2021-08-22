---
card: "https://cdn-media-1.freecodecamp.org/images/1*4_uAp5H4Mm_w7RWz5Ivdfg.png"
tags: [React]
description: "by Edward Njoroge"
author: "Milad E. Fahmy"
title: "How to build freeCodeCamp’s recipe box using React and local storage"
created: "2021-08-16T11:42:22+02:00"
modified: "2021-08-16T11:42:22+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-programming tag-technology tag-freecodecamp tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">How to build freeCodeCamp’s recipe box using React and local storage</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*4_uAp5H4Mm_w7RWz5Ivdfg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*4_uAp5H4Mm_w7RWz5Ivdfg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*4_uAp5H4Mm_w7RWz5Ivdfg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*4_uAp5H4Mm_w7RWz5Ivdfg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*4_uAp5H4Mm_w7RWz5Ivdfg.png" alt="How to build freeCodeCamp’s recipe box using React and local storage">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;title&gt;Recipe Box&lt;/title&gt;
&lt;meta charset="utf-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;meta name="description" content="This is a Free Code Camp Project called Recipe Box"&gt;
&lt;meta name="keywords" content="HTML, CSS, JAVASCRIPT, REACTJS"&gt;
&lt;meta name="author" content="Your Name"&gt;
&lt;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"&gt;
&lt;link href="https://fonts.googleapis.com/css?family=Mina" rel="stylesheet"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;!--set up a div where all the code will be rendered--&gt;
&lt;div class="container" id="app"&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><h4 id="step-3-set-up-the-first-view-of-the-recipe-box-"><em>Step 3: Set up the first view of the recipe box.</em></h4><p>In index.js, we create an initial list of recipes in this.state and display them.</p><p>In index.js:</p><pre><code class="language-js">//import the necessary files
import React from 'react';
import ReactDOM from 'react-dom';
import {PanelGroup,Panel,Button,ButtonToolbar,ListGroup,ListGroupItem} from 'react-bootstrap';
import './css/index.css';
//create the main class for displaying the recipes
class Recipe extends React.Component {
constructor(props) {
super(props);
this.state = {
recipes: [
{name: "Banana Smoothie", ingredients: ["2 bananas", "1/2 cup vanilla yogurt", "1/2 cup skim milk", "2 teaspoons honey", "pinch of cinnamon"]},
{name: "Spaghetti", ingredients: ["Noodles", "Tomato Sauce", "Meatballs"]},
{name: "Split Pea Soup", ingredients: ["1 pound split peas", "1 onion", "6 carrots", "4 ounces of ham"]}
]
};
}
render() {
const recipes = this.state.recipes;
return(
&lt;div className="jumbotron"&gt;
&lt;h1&gt;RECIPE BOX&lt;/h1&gt;
&lt;PanelGroup accordion id="recipes"&gt;
{recipes.map((recipe, index) =&gt; (
&lt;Panel eventKey={index} key={index}&gt;
&lt;Panel.Heading&gt;
&lt;Panel.Title className="title" toggle&gt;{recipe.name}&lt;/Panel.Title&gt;
&lt;/Panel.Heading&gt;
&lt;Panel.Body collapsible&gt;
&lt;ListGroup&gt;
{recipe.ingredients.map((ingredient, index) =&gt; (
&lt;ListGroupItem key={index}&gt;{ingredient}&lt;/ListGroupItem&gt;
))}
&lt;/ListGroup&gt;
&lt;ButtonToolbar&gt;
&lt;Button bsStyle="warning"&gt;Edit&lt;/Button&gt;
&lt;Button bsStyle="danger"&gt;Delete&lt;/Button&gt;
&lt;/ButtonToolbar&gt;
&lt;/Panel.Body&gt;
&lt;/Panel&gt;
))}
&lt;/PanelGroup&gt;
&lt;Button bsStyle="primary"&gt;Add Recipe&lt;/Button&gt;
&lt;/div&gt;
);
}
};
ReactDOM.render(&lt;Recipe /&gt;, document.getElementById('app'));</code></pre><p>In index.css:</p><pre><code class="language-css">h1, li, .title {
font-family: 'Mina';
}
h1, li {
text-align: center;
}
.title {
background-color: #D8BFD8;
font-size: 20px;
}
li {
list-style-type: none;
font-size: 18px;
import React from 'react';
import ReactDOM from 'react-dom';
import {PanelGroup,Panel,Button,ButtonToolbar,ListGroup,ListGroupItem} from 'react-bootstrap';
import {AddRecipe} from './components/addrecipe';
import './css/index.css';
//create the main class for displaying the recipes
class Recipe extends React.Component {
constructor(props) {
super(props);
this.state = {
recipes: [
{name: "Banana Smoothie", ingredients: ["2 bananas", "1/2 cup vanilla yogurt", "1/2 cup skim milk", "2 teaspoons honey", "pinch of cinnamon"]},
{name: "Spaghetti", ingredients: ["Noodles", "Tomato Sauce", "Meatballs"]},
{name: "Split Pea Soup", ingredients: ["1 pound split peas", "1 onion", "6 carrots", "4 ounces of ham"]}
],
showAdd: false
};
this.showAddModal = this.showAddModal.bind(this);
this.addRecipe = this.addRecipe.bind(this);
}
showAddModal() {//show the new recipe modal
this.setState({showAdd: !this.state.showAdd});
}
addRecipe(recipe) {//create a new recipe
let recipes = this.state.recipes;
recipes.push(recipe);
this.setState({recipes: recipes});
this.showAddModal();
}
render() {
const recipes = this.state.recipes;
return(
&lt;div className="jumbotron"&gt;
&lt;h1&gt;RECIPE BOX&lt;/h1&gt;
&lt;PanelGroup accordion id="recipes"&gt;
{recipes.map((recipe, index) =&gt; (
&lt;Panel eventKey={index} key={index}&gt;
&lt;Panel.Heading&gt;
&lt;Panel.Title className="title" toggle&gt;{recipe.name}&lt;/Panel.Title&gt;
&lt;/Panel.Heading&gt;
&lt;Panel.Body collapsible&gt;
&lt;ListGroup&gt;
{recipe.ingredients.map((ingredient, index) =&gt; (
&lt;ListGroupItem key={index}&gt;{ingredient}&lt;/ListGroupItem&gt;
))}
&lt;/ListGroup&gt;
&lt;ButtonToolbar&gt;
&lt;Button bsStyle="warning"&gt;Edit&lt;/Button&gt;
&lt;Button bsStyle="danger"&gt;Delete&lt;/Button&gt;
&lt;/ButtonToolbar&gt;
&lt;/Panel.Body&gt;
&lt;/Panel&gt;
))}
&lt;/PanelGroup&gt;
&lt;Button bsStyle="primary" onClick={this.showAddModal}&gt;Add Recipe&lt;/Button&gt;
&lt;AddRecipe onShow={this.state.showAdd} onAdd={this.addRecipe} onAddModal={this.showAddModal} /&gt;
&lt;/div&gt;
);
}
};
ReactDOM.render(&lt;Recipe /&gt;, document.getElementById('app'));</code></pre><pre><code>ReactDOM.render(&lt;Recipe /&gt;, document.getElementById('app'));</code></pre><p>In addrecipe.js, we create a state that holds the new recipe name and recipe ingredients, and the initial values are empty strings. We will then change the state every time we change the contents of the form as we would in a markdown. This will make form validation easier.</p><p>Instead of displaying form errors for validation, we use regular expression to ensure that we only save a recipe if some conditions are met. These conditions are:</p><p>(a) Both the recipe name and ingredients sections must not be empty, that is both must have at least one character.</p><p>(b) The form recipe name cannot begin with a space. This ensures that the recipe name begins with at least one alphanumeric character or symbol.</p><p>(c)The form recipe ingredients cannot begin or end with a space or comma. This is because ingredients will be split by commas into an array that is then displayed as a list like our current ingredients are.</p><p>The modal will have a Save Recipe button which will be disabled until all conditions are met. When save recipe is clicked, the recipe will be added to our recipe box.</p><p>In addrecipe.js:</p><pre><code class="language-js">//import the necessary files
import React from 'react';
import {Modal,ControlLabel,FormGroup,FormControl,Button} from 'react-bootstrap';
//create a class for displaying the modal for adding a new recipe and export it
export class AddRecipe extends React.Component {
constructor(props) {//create a state to handle the new recipe
super(props);
this.state = {name: "", ingredients: ""};
this.handleRecipeNameChange = this.handleRecipeNameChange.bind(this);
this.handleRecipeIngredientsChange = this.handleRecipeIngredientsChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
this.handleCancel = this.handleCancel.bind(this);
}
handleRecipeNameChange(e) {//change the name to reflect user input
this.setState({name: e.target.value});
}
handleRecipeIngredientsChange(e) {//change the ingredients to reflect user input
this.setState({ingredients: e.target.value});
}
handleSubmit(e) {//get the recipe data, manipulate it and call the function for creating a new recipe
e.preventDefault();
const onAdd = this.props.onAdd;
const regExp = /\s*,\s*/;
var newName = this.state.name;
var newIngredients = this.state.ingredients.split(regExp);
var newRecipe = {name: newName, ingredients: newIngredients};
onAdd(newRecipe);
this.setState({name: "", ingredients: ""});
}
handleCancel() {
const onAddModal = this.props.onAddModal;
this.setState({name: "", ingredients: ""});
onAddModal();
}
render() {
const onShow = this.props.onShow;
var regex1 = /^\S/;
var regex2 = /^[^,\s]/;
var regex3 = /[^,\s]$/;
const validRecipe = regex1.test(this.state.name) &amp;&amp; regex2.test(this.state.ingredients) &amp;&amp; regex3.test(this.state.ingredients);
return(
&lt;Modal show={onShow} onHide={this.handleCancel}&gt;
&lt;Modal.Header closeButton&gt;
&lt;Modal.Title&gt;New Recipe&lt;/Modal.Title&gt;
&lt;/Modal.Header&gt;
&lt;Modal.Body&gt;
&lt;FormGroup controlId="formControlsName"&gt;
&lt;ControlLabel&gt;Recipe Name&lt;/ControlLabel&gt;
&lt;FormControl type="text" required onChange={this.handleRecipeNameChange} value={this.state.name} placeholder="Enter Name" /&gt;
&lt;/FormGroup&gt;
&lt;FormGroup controlId="formControlsIngredients"&gt;
&lt;ControlLabel&gt;Recipe Ingredients&lt;/ControlLabel&gt;
&lt;FormControl componentClass="textarea" type="text" required onChange={this.handleRecipeIngredientsChange} value={this.state.ingredients} placeholder="Enter Ingredients(separate by commas)" /&gt;
&lt;/FormGroup&gt;
&lt;/Modal.Body&gt;
&lt;Modal.Footer&gt;
&lt;Button disabled={!validRecipe} bsStyle="success" onClick={this.handleSubmit}&gt;Save Recipe&lt;/Button&gt;
&lt;/Modal.Footer&gt;
&lt;/Modal&gt;
);
}
import React from 'react';
import ReactDOM from 'react-dom';
import {PanelGroup,Panel,Button,ButtonToolbar,ListGroup,ListGroupItem} from 'react-bootstrap';
import {AddRecipe} from './components/addrecipe';
import {EditRecipe} from './components/editrecipe';
import './css/index.css';
//create the main class for displaying the recipes
class Recipe extends React.Component {
constructor(props) {
super(props);
this.state = {
recipes: [
{name: "Banana Smoothie", ingredients: ["2 bananas", "1/2 cup vanilla yogurt", "1/2 cup skim milk", "2 teaspoons honey", "pinch of cinnamon"]},
{name: "Spaghetti", ingredients: ["Noodles", "Tomato Sauce", "Meatballs"]},
{name: "Split Pea Soup", ingredients: ["1 pound split peas", "1 onion", "6 carrots", "4 ounces of ham"]}
],
showAdd: false,
showEdit: false,
currentlyEditing: 0
};
this.showAddModal = this.showAddModal.bind(this);
this.showEditModal = this.showEditModal.bind(this);
this.addRecipe = this.addRecipe.bind(this);
this.editRecipe = this.editRecipe.bind(this);
}
showAddModal() {//show the new recipe modal
this.setState({showAdd: !this.state.showAdd});
}
showEditModal(index) {//show the edit recipe modal
this.setState({showEdit: !this.state.showEdit, currentlyEditing: index});
}
addRecipe(recipe) {//create a new recipe
let recipes = this.state.recipes;
recipes.push(recipe);
this.setState({recipes: recipes});
this.showAddModal();
}
editRecipe(newName, newIngredients, currentlyEditing) {//edit an existing recipe
let recipes = this.state.recipes;
recipes[currentlyEditing] = {name: newName, ingredients: newIngredients};
this.setState({recipes: recipes});
this.showEditModal(currentlyEditing);
}
render() {
const recipes = this.state.recipes;
return(
&lt;div className="jumbotron"&gt;
&lt;h1&gt;RECIPE BOX&lt;/h1&gt;
&lt;PanelGroup accordion id="recipes"&gt;
{recipes.map((recipe, index) =&gt; (
&lt;Panel eventKey={index} key={index}&gt;
&lt;Panel.Heading&gt;
&lt;Panel.Title className="title" toggle&gt;{recipe.name}&lt;/Panel.Title&gt;
&lt;/Panel.Heading&gt;
&lt;Panel.Body collapsible&gt;
&lt;ListGroup&gt;
{recipe.ingredients.map((ingredient, index) =&gt; (
&lt;ListGroupItem key={index}&gt;{ingredient}&lt;/ListGroupItem&gt;
))}
&lt;/ListGroup&gt;
&lt;ButtonToolbar&gt;
&lt;Button bsStyle="warning" onClick={() =&gt; {this.showEditModal(index)}}&gt;Edit&lt;/Button&gt;
&lt;Button bsStyle="danger"&gt;Delete&lt;/Button&gt;
&lt;/ButtonToolbar&gt;
&lt;/Panel.Body&gt;
&lt;EditRecipe onShow={this.state.showEdit} onEdit={this.editRecipe} onEditModal={() =&gt; {this.showEditModal(this.state.currentlyEditing)}} currentlyEditing={this.state.currentlyEditing} recipe={recipes[this.state.currentlyEditing]} /&gt;
&lt;/Panel&gt;
))}
&lt;/PanelGroup&gt;
&lt;Button bsStyle="primary" onClick={this.showAddModal}&gt;Add Recipe&lt;/Button&gt;
&lt;AddRecipe onShow={this.state.showAdd} onAdd={this.addRecipe} onAddModal={this.showAddModal} /&gt;
&lt;/div&gt;
);
}
};
ReactDOM.render(&lt;Recipe /&gt;, document.getElementById('app'));
ReactDOM.render(&lt;Recipe /&gt;, document.getElementById('app'));</code></pre><p>In editrecipe.js:</p><pre><code class="language-js">//import the necessary files
import React from 'react';
import {Modal,ControlLabel,FormGroup,FormControl,Button} from 'react-bootstrap';
//create a class for displaying the modal for editing an existing recipe and export it
export class EditRecipe extends React.Component {
constructor(props) {//create a state to handle the recipe to be edited
super(props);
this.state = {name: "", ingredients: ""};
this.handleRecipeNameChange = this.handleRecipeNameChange.bind(this);
this.handleRecipeIngredientsChange = this.handleRecipeIngredientsChange.bind(this);
this.handleEdit = this.handleEdit.bind(this);
this.handleCancel = this.handleCancel.bind(this);
}
static getDerivedStateFromProps(props, state) {//make the recipe prop a state
const prevName = state.prevName;
const prevIngredients = state.prevIngredients;
const name = prevName !== props.recipe.name ? props.recipe.name : state.name;
const ingredients = prevIngredients !== props.recipe.ingredients.join(",") ? props.recipe.ingredients.join(",") : state.ingredients;
return {
prevName: props.recipe.name, name,
prevIngredients: props.recipe.ingredients.join(","), ingredients,
}
}
handleRecipeNameChange(e) {//change the name to reflect user input
this.setState({name: e.target.value});
}
handleRecipeIngredientsChange(e) {//change the ingredients to reflect user input
this.setState({ingredients: e.target.value});
}
handleEdit(e) {//get the recipe data, manipulate it and call the function for editing an existing recipe
e.preventDefault();
const onEdit = this.props.onEdit;
const currentlyEditing = this.props.currentlyEditing;
const regExp = /\s*,\s*/;
var name = this.state.name;
var ingredients = this.state.ingredients.split(regExp);
onEdit(name, ingredients, currentlyEditing);
}
handleCancel() {
const onEditModal = this.props.onEditModal;
this.setState({name: this.props.recipe.name, ingredients: this.props.recipe.ingredients.join(",")});
onEditModal();
}
render() {
const onShow = this.props.onShow;
var regex1 = /^\S/;
var regex2 = /^[^,\s]/;
var regex3 = /[^,\s]$/;
const validRecipe = regex1.test(this.state.name) &amp;&amp; regex2.test(this.state.ingredients) &amp;&amp; regex3.test(this.state.ingredients);
return(
&lt;Modal show={onShow} onHide={this.handleCancel}&gt;
&lt;Modal.Header closeButton&gt;
&lt;Modal.Title&gt;Edit Recipe&lt;/Modal.Title&gt;
&lt;/Modal.Header&gt;
&lt;Modal.Body&gt;
&lt;FormGroup controlId="formControlsName"&gt;
&lt;ControlLabel&gt;Recipe Name&lt;/ControlLabel&gt;
&lt;FormControl type="text" required onChange={this.handleRecipeNameChange} value={this.state.name} placeholder="Enter Name" /&gt;
&lt;/FormGroup&gt;
&lt;FormGroup controlId="formControlsIngredients"&gt;
&lt;ControlLabel&gt;Recipe Ingredients&lt;/ControlLabel&gt;
&lt;FormControl componentClass="textarea" type="text" required onChange={this.handleRecipeIngredientsChange} value={this.state.ingredients} placeholder="Enter Ingredients(separate by commas)" /&gt;
&lt;/FormGroup&gt;
&lt;/Modal.Body&gt;
&lt;Modal.Footer&gt;
&lt;Button disabled={!validRecipe} bsStyle="success" onClick={this.handleEdit}&gt;Save Recipe&lt;/Button&gt;
&lt;/Modal.Footer&gt;
&lt;/Modal&gt;
);
}
import React from 'react';
import ReactDOM from 'react-dom';
import {PanelGroup,Panel,Button,ButtonToolbar,ListGroup,ListGroupItem} from 'react-bootstrap';
import {AddRecipe} from './components/addrecipe';
import {EditRecipe} from './components/editrecipe';
import './css/index.css';
//create the main class for displaying the recipes
class Recipe extends React.Component {
constructor(props) {
super(props);
this.state = {
recipes: [
{name: "Banana Smoothie", ingredients: ["2 bananas", "1/2 cup vanilla yogurt", "1/2 cup skim milk", "2 teaspoons honey", "pinch of cinnamon"]},
{name: "Spaghetti", ingredients: ["Noodles", "Tomato Sauce", "Meatballs"]},
{name: "Split Pea Soup", ingredients: ["1 pound split peas", "1 onion", "6 carrots", "4 ounces of ham"]}
],
showAdd: false,
showEdit: false,
currentlyEditing: 0
};
this.showAddModal = this.showAddModal.bind(this);
this.showEditModal = this.showEditModal.bind(this);
this.addRecipe = this.addRecipe.bind(this);
this.editRecipe = this.editRecipe.bind(this);
this.deleteRecipe = this.deleteRecipe.bind(this);
}
showAddModal() {//show the new recipe modal
this.setState({showAdd: !this.state.showAdd});
}
showEditModal(index) {//show the edit recipe modal
this.setState({showEdit: !this.state.showEdit, currentlyEditing: index});
}
addRecipe(recipe) {//create a new recipe
let recipes = this.state.recipes;
recipes.push(recipe);
this.setState({recipes: recipes});
this.showAddModal();
}
editRecipe(newName, newIngredients, currentlyEditing) {//edit an existing recipe
let recipes = this.state.recipes;
recipes[currentlyEditing] = {name: newName, ingredients: newIngredients};
this.setState({recipes: recipes});
this.showEditModal(currentlyEditing);
}
deleteRecipe(index) {//delete an existing recipe
let recipes = this.state.recipes.slice();
recipes.splice(index, 1);
this.setState({recipes: recipes, currentlyEditing: 0});
}
render() {
const recipes = this.state.recipes;
return(
&lt;div className="jumbotron"&gt;
&lt;h1&gt;RECIPE BOX&lt;/h1&gt;
&lt;PanelGroup accordion id="recipes"&gt;
{recipes.map((recipe, index) =&gt; (
&lt;Panel eventKey={index} key={index}&gt;
&lt;Panel.Heading&gt;
&lt;Panel.Title className="title" toggle&gt;{recipe.name}&lt;/Panel.Title&gt;
&lt;/Panel.Heading&gt;
&lt;Panel.Body collapsible&gt;
&lt;ListGroup&gt;
{recipe.ingredients.map((ingredient, index) =&gt; (
&lt;ListGroupItem key={index}&gt;{ingredient}&lt;/ListGroupItem&gt;
))}
&lt;/ListGroup&gt;
&lt;ButtonToolbar&gt;
&lt;Button bsStyle="warning" onClick={() =&gt; {this.showEditModal(index)}}&gt;Edit&lt;/Button&gt;
&lt;Button bsStyle="danger" onClick={() =&gt; {this.deleteRecipe(index)}}&gt;Delete&lt;/Button&gt;
&lt;/ButtonToolbar&gt;
&lt;/Panel.Body&gt;
&lt;EditRecipe onShow={this.state.showEdit} onEdit={this.editRecipe} onEditModal={() =&gt; {this.showEditModal(this.state.currentlyEditing)}} currentlyEditing={this.state.currentlyEditing} recipe={recipes[this.state.currentlyEditing]} /&gt;
&lt;/Panel&gt;
))}
&lt;/PanelGroup&gt;
&lt;Button bsStyle="primary" onClick={this.showAddModal}&gt;Add Recipe&lt;/Button&gt;
&lt;AddRecipe onShow={this.state.showAdd} onAdd={this.addRecipe} onAddModal={this.showAddModal} /&gt;
&lt;/div&gt;
);
}
};
import React from 'react';
import ReactDOM from 'react-dom';
import {PanelGroup,Panel,Button,ButtonToolbar,ListGroup,ListGroupItem} from 'react-bootstrap';
import './css/index.css';
import {AddRecipe} from './components/addrecipe';
import {EditRecipe} from './components/editrecipe';
//create the main class for displaying the recipes
class Recipe extends React.Component {
constructor(props) {
super(props);
this.state = {
recipes: [],
showAdd: false,
showEdit: false,
currentlyEditing: 0
};
this.showAddModal = this.showAddModal.bind(this);
this.showEditModal = this.showEditModal.bind(this);
this.addRecipe = this.addRecipe.bind(this);
this.editRecipe = this.editRecipe.bind(this);
this.deleteRecipe = this.deleteRecipe.bind(this);
}
componentDidMount() {//load the local storage data after the component renders
var recipes = (typeof localStorage["recipes"] !== "undefined") ? JSON.parse(localStorage.getItem("recipes")) : [
{name: "Banana Smoothie", ingredients: ["2 bananas", "1/2 cup vanilla yogurt", "1/2 cup skim milk", "2 teaspoons honey", "pinch of cinnamon"]},
{name: "Spaghetti", ingredients: ["Noodles", "Tomato Sauce", "Meatballs"]},
{name: "Split Pea Soup", ingredients: ["1 pound split peas", "1 onion", "6 carrots", "4 ounces of ham"]}
];
this.setState({recipes: recipes});
}
showAddModal() {//show the new recipe modal
this.setState({showAdd: !this.state.showAdd});
}
showEditModal(index) {//show the edit recipe modal
this.setState({currentlyEditing: index, showEdit: !this.state.showEdit});
}
addRecipe(recipe) {//create a new recipe
let recipes = this.state.recipes;
recipes.push(recipe);
localStorage.setItem('recipes', JSON.stringify(recipes));
this.setState({recipes: recipes});
this.showAddModal();
}
editRecipe(newName, newIngredients, currentlyEditing) {//edit an existing recipe
let recipes = this.state.recipes;
recipes[currentlyEditing] = {name: newName, ingredients: newIngredients};
localStorage.setItem('recipes', JSON.stringify(recipes));
this.setState({recipes: recipes});
this.showEditModal(currentlyEditing);
}
deleteRecipe(index) {//delete an existing recipe
let recipes = this.state.recipes.slice();
recipes.splice(index, 1);
localStorage.setItem('recipes', JSON.stringify(recipes));
this.setState({recipes: recipes, currentlyEditing: 0});
}
render() {
const recipes = this.state.recipes;
var currentlyEditing = this.state.currentlyEditing;
return(
&lt;div className="jumbotron"&gt;
&lt;h1&gt;RECIPE BOX&lt;/h1&gt;
&lt;PanelGroup accordion id="recipes"&gt;
{recipes.map((recipe, index) =&gt; (
&lt;Panel eventKey={index} key={index}&gt;
&lt;Panel.Heading&gt;
&lt;Panel.Title className="title" toggle&gt;{recipe.name}&lt;/Panel.Title&gt;
&lt;/Panel.Heading&gt;
&lt;Panel.Body collapsible&gt;
&lt;ListGroup&gt;
{recipe.ingredients.map((ingredient, index) =&gt; (
&lt;ListGroupItem key={index}&gt;{ingredient}&lt;/ListGroupItem&gt;
))}
&lt;/ListGroup&gt;
&lt;ButtonToolbar&gt;
&lt;Button bsStyle="warning" onClick={() =&gt; {this.showEditModal(index)}}&gt;Edit&lt;/Button&gt;
&lt;Button bsStyle="danger" onClick={() =&gt; {this.deleteRecipe(index)}}&gt;Delete&lt;/Button&gt;
&lt;/ButtonToolbar&gt;
&lt;/Panel.Body&gt;
&lt;EditRecipe onShow={this.state.showEdit} onEdit={this.editRecipe} onEditModal={() =&gt; {this.showEditModal(currentlyEditing)}} currentlyEditing={currentlyEditing} recipe={recipes[currentlyEditing]} /&gt;
&lt;/Panel&gt;
))}
&lt;/PanelGroup&gt;
&lt;Button bsStyle="primary" onClick={this.showAddModal}&gt;Add Recipe&lt;/Button&gt;
&lt;AddRecipe onShow={this.state.showAdd} onAdd={this.addRecipe} onAddModal={this.showAddModal} /&gt;
&lt;/div&gt;
);
}
};
git add README.md
git commit -m "initial commit"
git remote add origin https://github.com/yourusername/recipe-box.git
git add .
git commit -m "created a github page for the repository"
git push origin master</code></pre><p>We now have a GitHub page for the recipe box, and its URL is the one specified in “homepage” of package.json.</p><p>The project is complete. For reference you can check out my GitHub repository <a href="https://github.com/edkahara/recipe-box" rel="noopener">here</a>.</p><h3 id="conclusion"><strong>Conclusion</strong></h3><p>This was certainly a thrilling challenge to tackle. I enjoyed sharing this with you. I hope you’ve learned something from it.</p><p>Thank you for reading.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
