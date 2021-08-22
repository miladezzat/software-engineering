---
card: "https://cdn-media-1.freecodecamp.org/images/0*e-MWm5xnFFpeo9it"
tags: [Java]
description: "Maven is used very often in the industry and I felt it would "
author: "Milad E. Fahmy"
title: "How to get started with Maven"
created: "2021-08-16T11:34:53+02:00"
modified: "2021-08-16T11:34:53+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-java tag-technology tag-programming tag-coding tag-beginner ">
<header class="post-full-header">
<h1 class="post-full-title">How to get started with Maven</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*e-MWm5xnFFpeo9it 300w,
https://cdn-media-1.freecodecamp.org/images/0*e-MWm5xnFFpeo9it 600w,
https://cdn-media-1.freecodecamp.org/images/0*e-MWm5xnFFpeo9it 1000w,
https://cdn-media-1.freecodecamp.org/images/0*e-MWm5xnFFpeo9it 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*e-MWm5xnFFpeo9it" alt="How to get started with Maven">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Maven is used very often in the industry and I felt it would be good to cover the basics in this article so that it can be used efficiently.</p><p>This article will cover things like maven basics, maven plugins, maven dependencies, and maven build lifecycle.</p><h3 id="what-is-maven">What is Maven</h3><p>Maven was created to provide a standard way in which Projects can be built. One of its powerful features is dependency management.</p><p><strong>Maven is commonly used for dependency management, but it is not the only thing it is capable of doing.</strong></p><p>If you do not know what dependency management means, don’t worry?. I will cover that in this article as well.</p><h3 id="installing-maven">Installing Maven</h3><p>You can Install Maven from <a href="https://maven.apache.org/" rel="noopener">https://maven.apache.org/</a></p><p>Also ensure Maven is set in the PATH so that <code>mvn</code> comands work.</p><p>You can verify if it is installed and can be accessed using the command</p><pre><code class="language-bash">mvn -v</code></pre><p>Also ensure <a href="https://docs.oracle.com/cd/E19182-01/820-7851/inst_cli_jdk_javahome_t/" rel="noopener">JAVA_HOME</a> is set.</p><p>By default, Maven will use the jdk you provided in JAVA_HOME. This can be overridden, but for this article we will use the jdk provided in JAVA_HOME.</p><h3 id="create-your-maven-project">Create your Maven Project</h3><p>Normally an IDE like eclipse can be used to easily create maven projects. But in this artice I will be running the commands from the command line so that the steps are clearly understood.</p><p>Run the following command to Create the project.</p><pre><code class="language-bash">mvn -B archetype:generate -DarchetypeGroupId=org.apache.maven.archetypes -DgroupId=com.first.app -DartifactId=first-maven-app
</code></pre><p>Archetype in the above command is nothing but a sample project template. <strong>groupdId</strong> tells what group your project comes under and <strong>artifactId</strong> is the project name.</p><p>Once you run the above command, it may take maven a minute or so to download the necessary plugins and create the project.</p><p>A folder called first-maven-app is now created. Open the folder and you will see a file called <strong>pom.xml</strong></p><h3 id="pom-xml">pom.xml</h3><p>POM stands for Project Object Model. pom.xml has all the details about your project, and this is where you will tell maven what it should do.</p><p>The contents of this file are shown below:</p><pre><code class="language-xml"> &lt;project xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd"&gt;
&lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
&lt;groupId&gt;com.first.app&lt;/groupId&gt;
&lt;artifactId&gt;first-maven-app&lt;/artifactId&gt;
&lt;packaging&gt;jar&lt;/packaging&gt;
&lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;
&lt;name&gt;first-maven-app&lt;/name&gt;
&lt;url&gt;http://maven.apache.org&lt;/url&gt;
&lt;dependencies&gt;
&lt;dependency&gt;
&lt;groupId&gt;junit&lt;/groupId&gt;
&lt;artifactId&gt;junit&lt;/artifactId&gt;
&lt;version&gt;3.8.1&lt;/version&gt;
&lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;
&lt;/dependencies&gt;
&lt;/project&gt;</code></pre><p><strong>groupdId</strong> and <strong>artifactId</strong> are the same values we gave in the command line.</p><p><strong>packaging</strong> is the package format of the artifact. Default value is <strong>jar</strong>. It can have other values as well like ear, war, tar and so on.</p><p><strong>version</strong> indicates the version number of the artifact. If <strong>SNAPSHOT</strong> is present, then it indicates the version is still in dev and may not be stable. If the version number does not have <strong>SNAPSHOT,</strong> then it’s the actual release version.</p><p><strong>name</strong> is the project name.</p><p>I will explain about dependencies and plugins in Maven below.</p><h3 id="super-pom">Super POM</h3><p>pom.xml as you can see is pretty small. The reason for this is that a lot of the configuration is present in something called Super POM which is maintained internally by Maven.</p><p>pom.xml extends Super Pom to get all the config present in super Pom.</p><p>One of the config present in Super Pom indicates the following:</p><ul><li>All java source code is present inside <strong>src/main/java</strong></li><li>All java test code is present inside <strong>src/test/java</strong></li></ul><p>I mention only this config here, since we will be dealing with both source code as well as test code in this article.</p><h3 id="code">Code</h3><p>The entire code discussed here is available in this repo: <a href="https://github.com/aditya-sridhar/first-maven-app" rel="noopener">https://github.com/aditya-sridhar/first-maven-app</a></p><p>Let’s add some simple Java code. Create the following folder structure:</p><p><strong>src/main/java/com/test/app/App.java</strong></p><p><strong>App.java</strong> is the Java code we will be adding.</p><p>Copy the following code into App.java:</p><pre><code class="language-java">package com.first.app;
import java.util.List;
import java.util.ArrayList;
public class App
{
public static void main( String[] args )
{
List&lt;Integer&gt; items = new ArrayList&lt;Integer&gt;();
items.add(1);
items.add(2);
items.add(3);
printVals(items);
System.out.println("Sum: "+getSum(items));
}
public static void printVals(List&lt;Integer&gt; items){
items.forEach( item -&gt;{
System.out.println(item);
});
}
public static int getSum(List&lt;Integer&gt; items){
int sum = 0;
for(int item:items){
sum += item;
}
return sum;
}
}
</code></pre><p>This is simple code which has 2 functions.</p><p>But one thing to observe is, the code is using lambda expressions inside the forEach loop in <strong>printVals</strong> function.</p><p>Lambda expressions need at minimum Java 8 to run. But by default Maven 3.8.0 runs using Java version 1.6.</p><p>So we need to tell maven to use Java 1.8 instead. In order to do this we will use Maven Plugins.</p><h3 id="maven-plugins">Maven Plugins</h3><p>We will use the Maven Compiler Plugin to indicate which Java version to use. Add the following lines to pom.xml:</p><pre><code class="language-xml">&lt;project&gt;
...
&lt;build&gt;
&lt;plugins&gt;
&lt;plugin&gt;
&lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
&lt;artifactId&gt;maven-compiler-plugin&lt;/artifactId&gt;
&lt;version&gt;3.8.0&lt;/version&gt;
&lt;configuration&gt;
&lt;source&gt;1.8&lt;/source&gt;
&lt;target&gt;1.8&lt;/target&gt;
&lt;/configuration&gt;
&lt;/plugin&gt;
&lt;plugins&gt;
&lt;/build&gt;
...
&lt;/project&gt;</code></pre><p>You can see that the Java <strong>source</strong> and <strong>target</strong> versions are set to <strong>1.8</strong>.</p><p><strong>Plugins basically get some action done in maven. The compiler plugin compiles the source files.</strong></p><p>The full pom.xml is available <a href="https://github.com/aditya-sridhar/first-maven-app/blob/master/pom.xml" rel="noopener">here</a>.</p><p><strong>There are a lot of maven plugins available. By knowing how to use plugins well, Maven can be used to do amazing things.</strong> ?</p><h3 id="maven-dependencies">Maven Dependencies</h3><p>Normally while writing code, we will be using a lot of existing libraries. These existing libraries are nothing but dependencies. Maven can be used to manage dependencies easily.</p><p>In the pom.xml of our project you can see the following dependency:</p><pre><code class="language-xml"> &lt;dependencies&gt;
&lt;dependency&gt;
&lt;groupId&gt;junit&lt;/groupId&gt;
&lt;artifactId&gt;junit&lt;/artifactId&gt;
&lt;version&gt;3.8.1&lt;/version&gt;
&lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;
&lt;/dependencies&gt;</code></pre><p>This dependency is telling that we will be needing <strong>junit</strong>. Junit is used to write Unit Tests for Java code. Similarly a lot of other dependencies can be added.</p><p>Let’s say you want to handle JSON in the code. Then you can add the <strong>gson</strong> dependency as shown below:</p><pre><code class="language-xml">&lt;dependency&gt;
&lt;groupId&gt;com.google.code.gson&lt;/groupId&gt;
&lt;artifactId&gt;gson&lt;/artifactId&gt;
&lt;version&gt;2.8.5&lt;/version&gt;
&lt;/dependency&gt;</code></pre><p>You can search for Maven artifacts in <a href="https://search.maven.org/" rel="noopener">https://search.maven.org</a></p><h3 id="transitive-dependencies">Transitive Dependencies</h3><p>Let’s say you add a dependency <strong>A</strong> to the Project. Now <strong>A</strong> depends on a dependency called <strong>B</strong>. <strong>B</strong> depends on a dependency called <strong>C</strong>.</p><p>Since you are using <strong>A</strong> in the project, you will also need <strong>B</strong> and <strong>C</strong>.</p><p>But fortunately, it is enough if you add only <strong>A</strong> in pom.xml. Because Maven can figure out that A depends on B and that B depends on C. So internally Maven will automatically download <strong>B</strong> and <strong>C</strong>.</p><p>Here <strong>B</strong> and <strong>C</strong> are transitive dependencies.</p><h3 id="custom-maven-repository">Custom Maven Repository</h3><p>All these dependencies are available in a Public Maven Central Repository <a href="http://repo.maven.apache.org/maven2" rel="noopener">http://repo.maven.apache.org/maven2</a></p><p>It is possible that there are some artifacts which are private to your company. In this case, you can maintain a private maven repository within your organization. I won’t be covering this portion in this tutorial.</p><h3 id="adding-the-test-class">Adding the test class</h3><p>Since the junit dependency is present in the project, we can add test Classes.</p><p>Create the following folder structure:</p><p><strong>src/test/java/com/test/app/AppTest.java</strong></p><p><strong>AppTest.java</strong> is the Test Class.</p><p>Copy the following code into AppTest.java:</p><pre><code class="language-java">package com.first.app;
import junit.framework.TestCase;
import java.util.List;
import java.util.ArrayList;
public class AppTest extends TestCase
{
public AppTest( String testName )
{
super( testName );
}
public void testGetSum()
{
List&lt;Integer&gt; items = new ArrayList&lt;Integer&gt;();
items.add(1);
items.add(2);
items.add(3);
assertEquals( 6, App.getSum(items) );
}
}</code></pre><p>This class tests the getSum() function present in the App Class.</p><h3 id="maven-build-lifecycle-and-phases">Maven Build Lifecycle and Phases</h3><p>Maven follows a build lifecycle to build and distribute artifacts. There are three main lifecycles:</p><ol><li><strong>Default lifecycle</strong>: This deals with building and deploying the artifact.</li><li><strong>Clean lifecycle</strong>: This deals with project cleaning</li><li><strong>Site lifecycle</strong>: This deals with Site documentation. <strong>Will cover this in a different article.</strong></li></ol><p>A Lifecycle is made up of phases. Here are some of the important phases in the <strong>default lifecycle:</strong></p><ul><li><strong>validate</strong>: Checks if all necessary information is available for the project</li><li><strong>compile</strong>: Used to compile the source files. Run the following command to compile:</li></ul><pre><code class="language-bash">mvn compile</code></pre><ul><li>After running this command, a folder called target is created with all the compiled files.</li><li><strong>test</strong>: Used to run all the unit tests present in the project. This is why the Junit dependency was needed. Using Junit, unit tests can be written. Test classes can be run using the command</li></ul><pre><code class="language-bash">mvn test</code></pre><ul><li><strong>package</strong>: This will run all the above phases and then package the artifact. Here it will package it into a <strong>jar</strong> file since pom indicates a jar is needed. Run the following command for this:</li></ul><pre><code class="language-bash">mvn package</code></pre><ul><li>The <strong>jar</strong> file is created inside the <strong>target</strong> folder</li><li><strong>verify</strong>: This will ensure that quality criteria is met in the project</li><li><strong>install</strong>: This will install the package in a local repository. The local repository location is usually <strong>${user.home}/.m2/repository</strong>. Use the following command for this:</li></ul><pre><code class="language-bash">mvn install</code></pre><ul><li><strong>deploy</strong>: This is used to deploy the package to a remote repository</li></ul><p>One more command which is commonly used is the clean command which is given below:</p><pre><code class="language-bash">mvn clean</code></pre><p>This command cleans up everything inside the <strong>target</strong> folder</p><h3 id="references">References</h3><p>Maven’s Offical Guide: <a href="https://maven.apache.org/guides/getting-started/" rel="noopener">https://maven.apache.org/guides/getting-started/</a></p><p>More about POM : <a href="https://maven.apache.org/guides/introduction/introduction-to-the-pom.html" rel="noopener">https://maven.apache.org/guides/introduction/introduction-to-the-pom.html</a></p><p>More about Build Lifecycle : <a href="https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html" rel="noopener">https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html</a></p><h3 id="congrats">Congrats ?</h3><p>You know how to use Maven now. This article covered just the basics of pom, plugins, dependencies and build lifecycle. To know more about Maven check the links I have given above.</p><p>Happy Coding ?</p><h3 id="about-the-author">About the author</h3><p>I love technology and follow the advancements in the field. I also like helping others with my technology knowledge.</p><p>Feel free to connect with me on my LinkedIn account <a href="https://www.linkedin.com/in/aditya1811/" rel="noopener">https://www.linkedin.com/in/aditya1811/</a></p><p>You can also follow me on twitter <a href="https://twitter.com/adityasridhar18" rel="noopener">https://twitter.com/adityasridhar18</a></p><p>My Website: <a href="https://adityasridhar.com/" rel="noopener">https://adityasridhar.com/</a></p><p><em>Originally published at <a href="https://adityasridhar.com/posts/how-to-get-started-with-maven" rel="noopener">adityasridhar.com</a>.</em></p>
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
