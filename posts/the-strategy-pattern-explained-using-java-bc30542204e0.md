---
card: "https://cdn-media-1.freecodecamp.org/images/0*Eljfa10yoxUFaJSj"
tags: [Java]
description: "by Abdul Kadir"
author: "Milad E. Fahmy"
title: "The Strategy Pattern explained using Java"
created: "2021-08-16T11:33:57+02:00"
modified: "2021-08-16T11:33:57+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-java tag-design-patterns tag-technology tag-software-architecture tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">The Strategy Pattern explained using Java</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*Eljfa10yoxUFaJSj 300w,
https://cdn-media-1.freecodecamp.org/images/0*Eljfa10yoxUFaJSj 600w,
https://cdn-media-1.freecodecamp.org/images/0*Eljfa10yoxUFaJSj 1000w,
https://cdn-media-1.freecodecamp.org/images/0*Eljfa10yoxUFaJSj 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*Eljfa10yoxUFaJSj" alt="The Strategy Pattern explained using Java">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
public abstract void display(); //different dogs have different looks!
public void eat(){}
public void bark(){}
// Other dog-like methods
...
}</code></pre><p>The display() method is made abstract as different dogs have different looks. All the other subclasses will inherit the eat and bark behaviors or override it with their own implementation. So far so good!</p><p>Now, what if you wanted to add some new behavior? Let’s say you need a cool robot dog that can do all kinds of tricks. Not a problem, we just need to add a performTricks() method in our Dog superclass and we are good to go.</p><p>But wait a minute…A robot dog should not be able to eat right? Inanimate objects cannot eat, of course. Alright, how do we solve this problem then? Well, we can override the eat() method to do nothing and it works just fine!</p><pre><code class="language-java">public class RobotDog extends Dog {
@override
public void eat(){} // Do nothing
}</code></pre><p>Nicely done! Now Robot dogs cannot eat, they can only bark or perform tricks. What about rubber dogs though? They cannot eat nor can they perform tricks. And wooden dogs cannot eat, bark, or perform tricks. We cannot always possibly override methods to do nothing, it’s not clean and it just feels hacky. Imagine doing this on a project whose design specification keeps changing every few months. Ours is just a naive example but you get the idea. So, we need to find a cleaner way to solve this problem.</p><h4 id="can-the-interface-solve-our-problem">Can the interface solve our problem?</h4><p>How about interfaces? Let’s see if they can solve our problem. Alright, so we create a CanEat and a CanBark interface:</p><pre><code class="language-java">interface CanEat {
public void eat();
}
interface CanBark {
public void bark();
}</code></pre><p>We have now removed the bark() and eat() methods from the Dog superclass and added them to the respective interfaces. So that, only the dogs that can bark will implement the CanBark interface and the dogs that can eat will implement the CanEat interface. Now, no more worrying about dogs inheriting behavior that they shouldn’t, our problem is solved…or is it?</p><p>What happens when we have to make a change in the eating behavior of the dogs? Let’s say from now onwards each dog must include some amount of protein with their meal. You now have to modify the eat() method of all the subclasses of Dog. What if there are 50 such classes, oh the horror!</p><p>So interfaces only partly solve our problem of Dogs doing only what they are capable of doing — but they create another problem altogether. Interfaces do not have any implementation code, so there’s zero code reusability and potential for lots of duplicate code. How do we solve this you ask? Strategy pattern comes to the rescue!</p><h3 id="the-strategy-pattern">The Strategy Pattern</h3><p>So we will do this step by step. Before we proceed, let me introduce you to a design principle:</p><blockquote><em>Identify the parts of your program that vary and separate them from what stays the same.</em></blockquote><p>It is actually very straightforward — the principle states to separate and “encapsulate” anything that changes frequently so that all the code that changes lives in one place. That way the code that changes will not have any effect on the rest of the program and our application is more flexible and robust.</p><p>In our case, the ‘bark ’and the ‘eat ’behavior can be taken out of the Dog class and can be encapsulated elsewhere. We know that these behaviors vary across different dogs and they must get their own separate class.</p><p>We are going to create two set of classes apart from the Dog class, one for defining eating behavior and one for the barking behavior. We will make use of interfaces to represent the behavior such as ‘EatBehavior ’ and ‘BarkBehavior ’ and the concrete behavior class will implement these interfaces. So, the Dog class is not implementing the interface anymore. We are creating separate classes whose sole job is to represent the specific behavior!</p><h4 id="this-is-what-the-eatbehavior-interface-looks-like">This is what the EatBehavior interface looks like</h4><pre><code class="language-java">interface EatBehavior {
public void eat();
}</code></pre><h4 id="and-barkbehavior">And BarkBehavior</h4><pre><code class="language-java">interface BarkBehavior {
public void bark();
}</code></pre><p>All of the classes that represent these behaviors will implement the respective interface.</p><h4 id="concrete-classes-for-barkbehavior">Concrete classes for BarkBehavior</h4><pre><code class="language-java">public class PlayfulBark implements BarkBehavior {
@override
public void bark(){
System.out.println("Bark! Bark!");
}
}
public class Growl implements BarkBehavior {
@override
public void bark(){
System.out.println("This is a growl");
}
public class MuteBark implements BarkBehavior {
@override
public void bark(){
System.out.println("This is a mute bark");
}</code></pre><h4 id="concrete-classes-for-the-eatbehavior">Concrete classes for the EatBehavior</h4><pre><code class="language-java">public class NormalDiet implements EatBehavior {
@override
public void eat(){
System.out.println("This is a normal diet");
}
}
public class ProteinDiet implements EatBehavior {
@override
public void eat(){
System.out.println("This is a protein diet");
}
}</code></pre><p>Now while we make concrete implementations by subclassing the ‘Dog’ superclass, naturally we want to be able to assign the behaviors dynamically to the dogs’ instances. After all, it was the inflexibility of the previous code that was causing the problem. We can define setter methods on the Dog subclass that will allow us to set different behaviors at runtime.</p><p>That brings us to another design principle:</p><blockquote><em>Program to an interface and not an implementation.</em></blockquote><p>What this means is that instead of using the concrete classes we use variables that are supertypes of those classes. In other words, we use variables of type EatBehavior and BarkBehavior and assign these variables objects of classes that implement these behaviors. That way, the Dog classes do not need to have any information about the actual object types of those variables!</p><p>To make the concept clear here’s an example that differentiates the two ways — Consider an abstract Animal class that has two concrete implementations, Dog and Cat.</p><p>Programming to an implementation would be:</p><pre><code class="language-java">Dog d = new Dog();
d.bark();</code></pre><p>Here’s what programming to an interface looks like:</p><pre><code class="language-java">Animal animal = new Dog();
animal.animalSound();</code></pre><p>Here, we know that animal contains an instance of a ‘Dog’ but we can use this reference polymorphically everywhere else in our code. All we care about is that the animal instance is able to respond to the animalSound() method and the appropriate method, depending on the object assigned, gets called.</p><p>That was a lot to take in. Without further explanation let’s see what our ‘Dog’ superclass looks like now:</p><pre><code class="language-java">public abstract class Dog {
EatBehavior eatBehavior;
BarkBehaviour barkBehavior;
public Dog(){}
public void doBark() {
barkBehavior.bark();
}
public void doEat() {
eatBehavior.eat();
}
}</code></pre><p>Pay close attention to the methods of this class. The Dog class is now ‘delegating’ the task of eating and barking instead of implementing by itself or inheriting it(subclass). In the doBark() method we simply call the bark() method on the object referenced by barkBehavior. Now, we don’t care about the object’s actual type, we only care whether it knows how to bark!</p><p>Now the moment of truth, let’s create a concrete Dog!</p><pre><code class="language-java">public class Labrador extends Dog {
public Labrador(){
barkBehavior = new PlayfulBark();
eatBehavior = new NormalDiet();
}
public void display(){
System.out.println("I'm a playful Labrador");
}
...
}</code></pre><p>What’s happening in the constructor of the Labrador class? we are assigning the concrete instances to the supertype (remember the interface types are inherited from the Dog superclass). Now, when we call doEat() on the Labrador instance, the responsibility is handed over to the ProteinDiet class and it executes the eat() method.</p><h4 id="the-strategy-pattern-in-action">The Strategy Pattern in Action</h4><p>Alright, let’s see this in action. The time has come to run our dope Dog simulator program!</p><pre><code class="language-java">public class DogSimulatorApp {
public static void main(String[] args) {
Dog lab = new Labrador();
lab.doEat(); // Prints "This is a normal diet"
lab.doBark(); // "Bark! Bark!"
}
}</code></pre><p>How can we make this program better? By adding flexibility! Let’s add setter methods on the Dog class to be able to swap behaviors at runtime. Let’s add two more methods to the Dog superclass:</p><pre><code class="language-java">public void setEatBehavior(EatBehavior eb){
eatBehavior = eb;
}
public void setBarkBehavior(BarkBehavior bb){
barkBehavior = bb;
}</code></pre><p>Now we can modify our program and choose whatever behavior we like at runtime!</p><pre><code class="language-java">public class DogSimulatorApp {
public static void main(String[] args){
Dog lab = new Labrador();
lab.doEat(); // This is a normal diet
lab.setEatBehavior(new ProteinDiet());
lab.doEat(); // This is a protein diet
lab.doBark(); // Bark! Bark!
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
