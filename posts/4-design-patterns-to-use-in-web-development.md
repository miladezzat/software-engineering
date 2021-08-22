---
card: "/images/default.jpg"
tags: [Design Patterns]
description: "Have you ever been on a team where you need to start a projec"
author: "Milad E. Fahmy"
title: "4 Design Patterns You Should Know for Web Development: Observer, Singleton, Strategy, and Decorator"
created: "2021-08-16T10:05:02+02:00"
modified: "2021-08-16T10:05:02+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-design-patterns tag-web-development tag-design ">
<header class="post-full-header">
<h1 class="post-full-title">4 Design Patterns You Should Know for Web Development: Observer, Singleton, Strategy, and Decorator</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/05/design-patterns.jpg 300w,
/news/content/images/size/w600/2020/05/design-patterns.jpg 600w,
/news/content/images/size/w1000/2020/05/design-patterns.jpg 1000w,
/news/content/images/size/w2000/2020/05/design-patterns.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/05/design-patterns.jpg" alt="4 Design Patterns You Should Know for Web Development: Observer, Singleton, Strategy, and Decorator">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
constructor() {
this.foodLog = []
}
log(order) {
this.foodLog.push(order.foodItem)
// do fancy code to send this log somewhere
}
}
// this is the singleton
class FoodLoggerSingleton {
constructor() {
if (!FoodLoggerSingleton.instance) {
FoodLoggerSingleton.instance = new FoodLogger()
}
}
getFoodLoggerInstance() {
return FoodLoggerSingleton.instance
}
}
const foodLogger = new FoodLogger().getFoodLoggerInstance()
class Customer {
constructor(order) {
this.price = order.price
this.food = order.foodItem
foodLogger.log(order)
}
// other cool stuff happening for the customer
}
const foodLogger = new FoodLogger().getFoodLoggerInstance()
class Restaurant {
constructor(inventory) {
this.quantity = inventory.count
this.food = inventory.foodItem
foodLogger.log(inventory)
}
// other cool stuff happening at the restaurant
}
const customerInfoType = {
country: string
emailAddress: string
name: string
accountNumber?: number
address?: string
city?: string
routingNumber?: number
state?: string
}
static BankAccount(customerInfo: customerInfoType) {
const { name, accountNumber, routingNumber } = customerInfo
// do stuff to get payment
}
static BitCoin(customerInfo: customerInfoType) {
const { emailAddress, accountNumber } = customerInfo
// do stuff to get payment
}
static CreditCard(customerInfo: customerInfoType) {
// do stuff to get payment
}
static MailIn(customerInfo: customerInfoType) {
const { name, address, city, state, country } = customerInfo
// do stuff to get payment
}
static PayPal(customerInfo: customerInfoType) {
const { emailAddress } = customerInfo
// do stuff to get payment
}
"paymentMethod": {
"strategy": "PayPal"
}
}</code></pre><figcaption>config.json for setting the default implementation of paymentMethod to "PayPal" at run time</figcaption></figure><p>Whenever a customer starts going through the checkout process on your website, the default payment method they encounter will be the PayPal implementation which comes from the <em>config.json</em>. This could easily be updated if the customer selects a different payment method.</p><p>Now we'll create a file for our checkout process.</p><pre><code class="language-JavaScript">const PaymentMethodStrategy = require('./PaymentMethodStrategy')
const config = require('./config')
class Checkout {
constructor(strategy='CreditCard') {
this.strategy = PaymentMethodStrategy[strategy]
}
// do some fancy code here and get user input and payment method
changeStrategy(newStrategy) {
this.strategy = PaymentMethodStrategy[newStrategy]
}
const userInput = {
name: 'Malcolm',
emailAddress: 'mac@gmailer.com',
country: 'US'
}
const selectedStrategy = 'Bitcoin'
changeStrategy(selectedStrategy)
postPayment(userInput) {
this.strategy(userInput)
}
}
constructor() {
this.categories = ['appliances', 'doors', 'tools']
this.subscriber = []
}
// pretend there's some fancy code here
subscribe(observer) {
this.subscriber.push(observer)
}
onChange(selectedCategory) {
this.subscriber.forEach(observer =&gt; observer.update(selectedCategory))
}
constructor(filterType) {
this.filterType = filterType
this.items = []
}
// more fancy code here; maybe make that API call to get items list based on filterType
update(category) {
fetch('https://example.com')
.then(res =&gt; this.items(res))
}
const FilterDropdown = require('./FilterDropdown')
const categoryDropdown = new CategoryDropdown()
const colorsDropdown = new FilterDropdown('colors')
const priceDropdown = new FilterDropdown('price')
const brandDropdown = new FilterDropdown('brand')
categoryDropdown.subscribe(colorsDropdown)
categoryDropdown.subscribe(priceDropdown)
constructor(balance=20) {
this.balance = balance
this.foodItems = []
}
buy(food) {
if (food.price) &lt; this.balance {
console.log('you should get it')
this.balance -= food.price
this.foodItems.push(food)
}
else {
console.log('maybe you should get something else')
}
}
}
constructor(type, price) {
this.type = type
this.price = price
}
order() {
console.log(`You ordered a ${this.type} sandwich for $ ${this.price}.`)
}
}
class DeluxeSandwich {
constructor(baseSandwich) {
this.type = `Deluxe ${baseSandwich.type}`
this.price = baseSandwich.price + 1.75
}
}
class ExquisiteSandwich {
constructor(baseSandwich) {
this.type = `Exquisite ${baseSandwich.type}`
this.price = baseSandwich.price + 10.75
}
order() {
console.log(`You ordered an ${this.type} sandwich. It's got everything you need to be happy for days.`)
}
}
module.exports = { Sandwich, DeluxeSandwich, ExquisiteSandwich }</code></pre><figcaption>An example of a sandwich class</figcaption></figure><p>This sandwich class is where the decorator pattern is used. We have a <em>Sandwich </em>base class that sets the rules for what happens when a regular sandwich is ordered. Customers might want to upgrade sandwiches and that just means an ingredient and price change.</p><p>You just wanted to add the functionality to increase the price and update the type of sandwich for the <em>DeluxeSandwich </em>without changing how it's ordered<em>. </em>Although you might need a different order method for an <em>ExquisiteSandwich </em>because there is a drastic change in the quality of ingredients.</p><p>The decorator pattern lets you dynamically change the base class without affecting it or any other classes. You don't have to worry about implementing functions you don't know, like with interfaces, and you don't have to include properties you won't use in every class.</p><p>Now if we'll go over an example where this class is instantiated as if a customer was placing a sandwich order.</p><pre><code class="language-JavaScript">const { Sandwich, DeluxeSandwich, ExquisiteSandwich } = require('./Sandwich')
const Customer = require('./Customer')
const cust1 = new Customer(57)
const turkeySandwich = new Sandwich('Turkey', 6.49)
const bltSandwich = new Sandwich('BLT', 7.55)
const deluxeBltSandwich = new DeluxeSandwich(bltSandwich)
const exquisiteTurkeySandwich = new ExquisiteSandwich(turkeySandwich)
cust1.buy(turkeySandwich)
cust1.buy(bltSandwich)</code></pre><h2 id="final-thoughts">Final Thoughts</h2><p>I used to think that design patterns were these crazy, far-out software development guidelines. Then I found out I use them all the time! </p><p>A few of the patterns I covered are used in so many applications that it would blow your mind. They are just theory at the end of the day. It's up to us as developers to use that theory in ways that make our applications easy to implement and maintain.</p><p>Have you used any of the other design patterns for your projects? Most places usually pick a design pattern for their projects and stick with it so I'd like to hear from you all about what you use.</p><p>Thanks for reading. You should follow me on Twitter because I usually post useful/entertaining stuff: <a href="https://twitter.com/FlippedCoding">@FlippedCoding</a></p>
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
