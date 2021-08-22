---
card: "https://cdn-media-1.freecodecamp.org/images/1*upVmlEendf-ZejB-vCeh_g.jpeg"
tags: [Java]
description: "Kotlin has a concise syntax to declare data classes:"
author: "Milad E. Fahmy"
title: "How to generate data classes in Java"
created: "2021-08-16T11:34:57+02:00"
modified: "2021-08-16T11:34:57+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-java tag-code tag-generator tag-coding tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to generate data classes in Java</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*upVmlEendf-ZejB-vCeh_g.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*upVmlEendf-ZejB-vCeh_g.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*upVmlEendf-ZejB-vCeh_g.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*upVmlEendf-ZejB-vCeh_g.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*upVmlEendf-ZejB-vCeh_g.jpeg" alt="How to generate data classes in Java">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Kotlin has a concise syntax to declare data classes:</p><pre><code class="language-kotlin">data class User(val name: String, val age: Int)</code></pre><p>The equivalent Java syntax is verbose. You have to create a Java class with private fields. And <code>getter </code>and <code>setter </code>methods for the fields. And additional methods like <code>equals()</code>, <code>hashCode()</code> and <code>toString()</code>.</p><p>But who says you have to create the Java code by hand?</p><p>In this article, I’ll show you how to generate Java source files from a <a href="https://en.wikipedia.org/wiki/YAML" rel="noopener">YAML</a> file.</p><p>Here’s the example YAML file:</p><pre><code class="language-yaml">User:
name: Name
age: Integer
Name:
firstName: String
lastName: String</code></pre><p>The example output of the code generator is two Java source files, <code>User.java</code> and <code>Name.java</code>.</p><pre><code class="language-java">public class User{
private Name name;
private Integer age;
public User(){
}
public Name getName(){
return name;
}
public void setName(Name name){
this.name = name;
}
public Integer getAge(){
return age;
}
public void setAge(Integer age){
this.age = age;
}
}</code></pre><p><code>Name.java</code> is similar.</p><p>The point of this article is: You’ll learn how to program a code generator from scratch. And it’s easy to adapt it to your needs.</p><h3 id="the-main-method">The main method</h3><p>The <code><a href="https://github.com/bertilmuth/javadataclass/blob/ee95965bc798ae5425083baf88c4750fb27ecf11/src/main/java/de/bertilmuth/javadataclass/Main.java" rel="noopener">main()</a></code> method does two things:</p><ul><li>Step 1: Read in the YAML file, into class specifications</li><li>Step 2: Generate Java source files from the class specifications</li></ul><p>It decouples reading and generating. You can change the input format in the future, or support more input formats.</p><p>Here’s the <code>main()</code> method:</p><pre><code class="language-java">public static void main(String[] args) throws Exception {
// Make sure there is exactly one command line argument,
// the path to the YAML file
if (args.length != 1) {
System.out.println("Please supply exactly one argument, the path to the YAML file.");
return;
}
// Get the YAML file's handle &amp; the directory it's contained in
// (generated files will be placed there)
final String yamlFilePath = args[0];
final File yamlFile = new File(yamlFilePath);
final File outputDirectory = yamlFile.getParentFile();
// Step 1: Read in the YAML file, into class specifications
YamlClassSpecificationReader yamlReader = new YamlClassSpecificationReader();
List&lt;ClassSpecification&gt; classSpecifications = yamlReader.read(yamlFile);
// Step 2: Generate Java source files from class specifications
JavaDataClassGenerator javaDataClassGenerator = new JavaDataClassGenerator();
javaDataClassGenerator.generateJavaSourceFiles(classSpecifications, outputDirectory);
System.out.println("Successfully generated files to: " + outputDirectory.getAbsolutePath());
}</code></pre><h3 id="step-1-read-the-yaml-file-into-class-specifications">Step 1: Read the YAML file into class specifications</h3><p>Let me explain what happens in this line:</p><pre><code class="language-java">List&lt;ClassSpecification&gt; classSpecifications =  yamlReader.read(yamlFile);</code></pre><p>A class specification is a definition of a class to be generated and its fields.<br>Remember the <code>User</code> in the example YAML file?</p><pre><code class="language-yaml">User:
name: Name
age: Integer</code></pre><p>When the <a href="https://github.com/bertilmuth/javadataclass/blob/ee95965bc798ae5425083baf88c4750fb27ecf11/src/main/java/de/bertilmuth/javadataclass/read/YamlClassSpecificationReader.java" rel="noopener">YAML reader</a> reads that, it will create one <code>ClassSpecification</code> object, with the name <code>User</code>. And that class specification will reference two <code>FieldSpecification</code> objects, called <code>name</code> and <code>age</code>.</p><p>The code for the <code>ClassSpecification</code> class and the <code>FieldSpecification</code> class is simple.</p><p>The content of <code><a href="https://github.com/bertilmuth/javadataclass/blob/ee95965bc798ae5425083baf88c4750fb27ecf11/src/main/java/de/bertilmuth/javadataclass/model/ClassSpecification.java" rel="noopener">ClassSpecification.java</a></code> is shown below:</p><pre><code class="language-java">public class ClassSpecification {
private String name;
private List&lt;FieldSpecification&gt; fieldSpecifications;
public ClassSpecification(String className, List&lt;FieldSpecification&gt; fieldSpecifications) {
this.name = className;
this.fieldSpecifications = fieldSpecifications;
}
public String getName() {
return name;
}
public List&lt;FieldSpecification&gt; getFieldSpecifications() {
return Collections.unmodifiableList(fieldSpecifications);
}
}</code></pre><p>The content of <code><a href="https://github.com/bertilmuth/javadataclass/blob/ee95965bc798ae5425083baf88c4750fb27ecf11/src/main/java/de/bertilmuth/javadataclass/model/FieldSpecification.java" rel="noopener">FieldSpecification.java</a></code> is:</p><pre><code class="language-java">public class FieldSpecification {
private String name;
private String type;
public FieldSpecification(String fieldName, String fieldType) {
this.name = fieldName;
this.type = fieldType;
}
public String getName() {
return name;
}
public String getType() {
return type;
}
}</code></pre><p>The only remaining question for Step 1 is: how do you get from a YAML file to objects of these classes?</p><p>The <a href="https://github.com/bertilmuth/javadataclass/blob/ee95965bc798ae5425083baf88c4750fb27ecf11/src/main/java/de/bertilmuth/javadataclass/read/YamlClassSpecificationReader.java" rel="noopener">YAML reader</a> uses the <a href="https://bitbucket.org/asomov/snakeyaml" rel="noopener">SnakeYAML</a> library to parse YAML files. <br>SnakeYAML makes a YAML file’s content available in data structures like maps and lists.</p><p>For this article, you only need to understand maps — because that’s what we use in the YAML files.</p><p>Look at the example again:</p><pre><code class="language-yaml">User:
name: Name
age: Integer
Name:
firstName: String
lastName: String</code></pre><p>What you see here is two nested maps.</p><p>The key of the outer map is the class name (like <code>User</code>).</p><p>When you get the value for the <code>User</code> key, you get a map of the class fields:</p><pre><code class="language-yaml">name: Name
age: Integer</code></pre><p>The key of this inner map is the field name, and the value is the field type.</p><p>It’s a map of strings to a map of strings to strings. That’s important to understand the code of the <a href="https://github.com/bertilmuth/javadataclass/blob/ee95965bc798ae5425083baf88c4750fb27ecf11/src/main/java/de/bertilmuth/javadataclass/read/YamlClassSpecificationReader.java" rel="noopener">YAML reader</a>.</p><p>Here’s the method that reads in the complete YAML file contents:</p><pre><code class="language-java">private Map&lt;String, Map&lt;String, String&gt;&gt; readYamlClassSpecifications(Reader reader) {
Yaml yaml = new Yaml();
// Read in the complete YAML file to a map of strings to a map of strings to strings
Map&lt;String, Map&lt;String, String&gt;&gt; yamlClassSpecifications =
(Map&lt;String, Map&lt;String, String&gt;&gt;) yaml.load(reader);
return yamlClassSpecifications;
}</code></pre><p>With the <code>yamlClassSpecifications</code> as input, the <a href="https://github.com/bertilmuth/javadataclass/blob/ee95965bc798ae5425083baf88c4750fb27ecf11/src/main/java/de/bertilmuth/javadataclass/read/YamlClassSpecificationReader.java" rel="noopener">YAML reader</a> creates the <code>ClassSpecification</code> objects:</p><pre><code class="language-java">private List&lt;ClassSpecification&gt; createClassSpecificationsFrom(Map&lt;String, Map&lt;String, String&gt;&gt; yamlClassSpecifications) {
final Map&lt;String, List&lt;FieldSpecification&gt;&gt; classNameToFieldSpecificationsMap
= createClassNameToFieldSpecificationsMap(yamlClassSpecifications);
List&lt;ClassSpecification&gt; classSpecifications =
classNameToFieldSpecificationsMap.entrySet().stream()
.map(e -&gt; new ClassSpecification(e.getKey(), e.getValue()))
.collect(toList());
return classSpecifications;
}</code></pre><p>The <code>createClassNameToFieldSpecificationsMap()</code> method creates</p><ul><li>the field specifications for each class, and based on these</li><li>a map of each class name to its field specifications.</li></ul><p>Then the <a href="https://github.com/bertilmuth/javadataclass/blob/ee95965bc798ae5425083baf88c4750fb27ecf11/src/main/java/de/bertilmuth/javadataclass/read/YamlClassSpecificationReader.java" rel="noopener">YAML reader</a> creates a <code>ClassSpecification</code> object for each entry in that map.</p><p>The contents of the YAML file are now available to Step 2 in a YAML independent way. We’re done with Step 1.</p><h3 id="step-2-generate-java-source-files-from-the-class-specifications">Step 2: Generate Java source files from the class specifications</h3><p><a href="https://freemarker.apache.org/" rel="noopener">Apache FreeMarker</a> is a Java template engine that produces textual output. Templates are written in the FreeMarker Template Language (FTL). It allows static text to mix with the content of Java objects.</p><p>Here’s the template to generate the Java source files, <code><a href="https://github.com/bertilmuth/javadataclass/blob/2c550c8ea0ab551d06eed342ea0013043f96f080/src/main/resources/javadataclass.ftl" rel="noopener">javadataclass.ftl</a></code>:</p><pre><code class="language-ftl">public class ${classSpecification.name}{
&lt;#list classSpecification.fieldSpecifications as field&gt;
private ${field.type} ${field.name};
&lt;/#list&gt;
public ${classSpecification.name}(){
}
&lt;#list classSpecification.fieldSpecifications as field&gt;
public ${field.type} get${field.name?cap_first}(){
return ${field.name};
}
public void set${field.name?cap_first}(${field.type} ${field.name}){
this.${field.name} = ${field.name};
}
&lt;/#list&gt;
}</code></pre><p>Let’s look at the first line:</p><pre><code>public class ${classSpecification.name}{</code></pre><p>You can see it begins with the static text of a class declaration: <code>public class</code>. The interesting bit is in the middle: <code>${classSpecification.name}</code>.</p><p>When Freemarker processes the template, it accesses the <code>classSpecification</code> object in its model. It calls the <code>getName()</code> method on it.</p><p>What about this part of the template?</p><pre><code class="language-ftl">&lt;#list classSpecification.fieldSpecifications as field&gt;
private ${field.type} ${field.name};
&lt;/#list&gt;</code></pre><p>At first, Freemarker calls <code>classSpecification.getFieldSpecifications()</code>. It then iterates over the field specifications.</p><p>One last thing. That line is a bit odd:</p><pre><code class="language-ftl">public ${field.type} get${field.name?cap_first}(){</code></pre><p>Let’s say the example field is <code>age: Integer</code> (in YAML). Freemarker translates this to:</p><pre><code class="language-java">public Integer getAge(){</code></pre><p>So <code>?cap_first</code> means: capitalize the first letter, as the YAML file contains <code>age</code> in lower case letters.</p><p>Enough about templates. How do you generate the Java source files?</p><p>First, you need to configure FreeMarker by creating a <code>Configuration</code> instance. This happens in the constructor of the <code><a href="https://github.com/bertilmuth/javadataclass/blob/ee95965bc798ae5425083baf88c4750fb27ecf11/src/main/java/de/bertilmuth/javadataclass/generate/JavaDataClassGenerator.java" rel="noopener">JavaDataClassGenerator</a></code>:</p><p>To generate source files, the <code><a href="https://github.com/bertilmuth/javadataclass/blob/ee95965bc798ae5425083baf88c4750fb27ecf11/src/main/java/de/bertilmuth/javadataclass/generate/JavaDataClassGenerator.java" rel="noopener">JavaDataClassGenerator</a></code> iterates over the class specifications, and generates a source file for each:</p><p>And that’s it.</p><h3 id="conclusion">Conclusion</h3><p>I showed you how to build a Java source code generator based on YAML files. I picked YAML because it is easy to process, and thus easy to teach. You can replace it with another format if you like.</p><p>You can find the complete code on <a href="https://github.com/bertilmuth/javadataclass" rel="noopener">Github</a>.</p><p>To make the code as understandable as possible, I took a few shortcuts:</p><ul><li>no methods like <code>equals()</code>, <code>hashCode()</code> and <code>toString()</code></li><li>no inheritance of data classes</li><li>generated Java classes are in the default package</li><li>the output directory is the same as the input directory</li><li>error handling hasn’t been my focus</li></ul><p>A production-ready solution would need to deal with those issues. Also, for data classes, <a href="https://projectlombok.org/" rel="noopener">Project Lombok</a> is an alternative without code generation.</p><p>So think of this article as a beginning, not an end. Imagine what is possible. A few examples:</p><ul><li>scaffold JPA entity classes or Spring repositories</li><li>generate several classes from one specification, based on patterns in your application</li><li>generate code in different programming languages</li><li>produce documentation</li></ul><p>I currently use this approach to translate natural language requirements <br> directly to code, for research purposes. What will you do?</p><p><em>If you want to know what I’m hacking on, visit <a href="https://github.com/bertilmuth/requirementsascode" rel="noopener">my GitHub project</a>.</em></p><p><em>You can contact me on <a href="https://twitter.com/BertilMuth" rel="noopener">Twitter</a> or <a href="https://www.linkedin.com/in/bertilmuth" rel="noopener">LinkedIn</a>.</em></p><p><em>The original version of this article was posted on <a href="https://dev.to/bertilmuth/generating-data-classes-in-java-4cef" rel="noopener">dev.to</a></em></p>
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
