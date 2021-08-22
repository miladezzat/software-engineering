---
card: "/images/default.jpg"
tags: [Python]
description: "When people who speak different languages get together and ta"
author: "Milad E. Fahmy"
title: "How to Use Google s Protocol Buffers in Python"
created: "2021-08-16T15:36:40+02:00"
modified: "2021-08-16T15:36:40+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-protocol-buffers ">
<header class="post-full-header">
<h1 class="post-full-title">How to Use Google's Protocol Buffers in Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/05/unnamed-1.png 300w,
/news/content/images/size/w600/2020/05/unnamed-1.png 600w,
/news/content/images/size/w1000/2020/05/unnamed-1.png 1000w,
/news/content/images/size/w2000/2020/05/unnamed-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/05/unnamed-1.png" alt="How to Use Google's Protocol Buffers in Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>When people who speak different languages get together and talk, they try to use a language that everyone in the group understands. </p><p>To achieve this, everyone has to translate their thoughts, which are usually in their native language, into the language of the group. This “encoding and decoding” of language, however, leads to a loss of efficiency, speed, and precision.<br><br>The same concept is present in computer systems and their components. Why should we send data in XML, JSON, or any other human-readable format if there is no need for us to understand what they are talking about directly? As long as we can still translate it into a human-readable format if explicitly needed.<br><br>Protocol Buffers are a way to encode data before transportation, which efficiently shrinks data blocks and therefore increases speed when sending it. It abstracts data into a language- and platform-neutral format.</p><h3 id="table-of-contents">Table of Contents</h3><ul><li><a href="#why-protocol-buffers">Why do we need Protocol Buffers?</a></li><li><a href="#what-are-protocol-buffers-and-how-do-they-work">What are Protocol Buffers and how do they work?</a></li><li><a href="#python-and-protocol-buffers">Protocol Buffers in Python</a></li><li><a href="#final-notes">Final notes</a></li></ul><h2 id="why-protocol-buffers">Why Protocol Buffers?</h2><p>The initial purpose of Protocol Buffers was to simplify the work with request/response protocols. Before ProtoBuf, Google used a different format which required additional handling of <a href="https://en.wikipedia.org/wiki/Marshalling_(computer_science)">marshaling</a> for the messages sent. </p><p>In addition to that, new versions of the previous format required the developers to make sure that new versions are understood before replacing old ones, making it a hassle to work with.</p><p>This overhead motivated Google to design an interface that solves precisely those problems. </p><p>ProtoBuf allows changes to the protocol to be introduced without breaking compatibility. Also, servers can pass around the data and execute read operations on the data without modifying its content.</p><p>Since the format is somewhat self-describing, ProtoBuf is used as a base for automatic code generation for Serializers and Deserializers.</p><p>Another interesting use case is how Google uses it for short-lived <a href="https://searchapparchitecture.techtarget.com/definition/Remote-Procedure-Call-RPC">Remote Procedure Calls</a> (RPC) and to persistently store data in Bigtable. Due to their specific use case, they integrated RPC interfaces into ProtoBuf. This allows for quick and straightforward code stub generation that can be used as starting points for the actual implementation. (More on <a href="https://medium.com/@EmperorRXF/evaluating-performance-of-rest-vs-grpc-1b8bdf0b22da">ProtoBuf RPC</a>.)</p><p>Other examples of where ProtoBuf can be useful are for IoT devices that are connected through mobile networks in which the amount of sent data has to be kept small or for applications in countries where high bandwidths are still rare. Sending payloads in optimized, binary formats can lead to noticeable differences in operation cost and speed.</p><p>Using <code>gzip</code> compression in your HTTPS communication can further improve those metrics.</p><h2 id="what-are-protocol-buffers-and-how-do-they-work">What are Protocol buffers and how do they work?</h2><p>Generally speaking, Protocol Buffers are a defined interface for the serialization of structured data. It defines a normalized way to communicate, utterly independent of languages and platforms.</p><p>Google advertises its ProtoBuf <a href="https://developers.google.com/protocol-buffers">like this</a>:</p><blockquote><em>Protocol buffers are Google's language-neutral, platform-neutral, extensible mechanism for serializing structured data – think XML, but smaller, faster, and simpler. You define how you want your data to be structured once …</em></blockquote><p>The ProtoBuf interface describes the structure of the data to be sent. Payload structures are defined as “messages” in what is called Proto-Files. Those files always end with a <code>.proto</code><strong> </strong>extension.<br><br>For example, the basic structure of a <strong>todolist.proto</strong> file looks like this. We will also look at a complete example in the next section.</p><pre><code class="language-javascript">syntax = "proto3";
// Not necessary for Python, should still be declared to avoid name collisions
// in the Protocol Buffers namespace and non-Python languages
package protoblog;
message TodoList {
// Elements of the todo list will be defined here
...
// Not necessary for Python but should still be declared to avoid name collisions
// in the Protocol Buffers namespace and non-Python languages
package protoblog;
// Style guide prefers prefixing enum values instead of surrounding
// with an enclosing message
enum TaskState {
TASK_OPEN = 0;
TASK_IN_PROGRESS = 1;
TASK_POST_PONED = 2;
TASK_CLOSED = 3;
TASK_DONE = 4;
}
message TodoList {
int32 owner_id = 1;
string owner_name = 2;
message ListItems {
TaskState state = 1;
string task = 2;
string due_date = 3;
}
repeated ListItems todos = 3;
}
my_list = TodoList.TodoList()
my_list.owner_id = 1234
my_list.owner_name = "Tim"
first_item = my_list.todos.add()
first_item.state = TodoList.TaskState.Value("TASK_DONE")
first_item.task = "Test ProtoBuf for Python"
first_item.due_date = "31.10.2019"
print(my_list)</code></pre><p>It merely creates a new todo list and adds one item to it. We then print the todo list element itself and can see the non-binary, non-serialized version of the data we just defined in our script.</p><pre><code class="language-json">owner_id: 1234
owner_name: "Tim"
todos {
state: TASK_DONE
task: "Test ProtoBuf for Python"
due_date: "31.10.2019"
}</code></pre><p>Each Protocol Buffer class has methods for reading and writing messages using a <a href="https://developers.google.com/protocol-buffers/docs/encoding">Protocol Buffer-specific encoding</a>, that encodes messages into binary format.<br>Those two methods are <code>SerializeToString()</code> and <code>ParseFromString()</code>.</p><pre><code class="language-python">import todolist_pb2 as TodoList
my_list = TodoList.TodoList()
my_list.owner_id = 1234
# ...
with open("./serializedFile", "wb") as fd:
fd.write(my_list.SerializeToString())
my_list = TodoList.TodoList()
with open("./serializedFile", "rb") as fd:
my_list.ParseFromString(fd.read())
print(my_list)</code></pre><p>In the code example above, we write the Serialized string of bytes into a file using the <strong>wb</strong> flags.</p><p>Since we have already written the file, we can read back the content and Parse it using ParseFromString. ParseFromString calls on a new instance of our Serialized class using the <strong>rb</strong> flags and parses it.</p><p>If we serialize this message and print it in the console, we get the byte representation which looks like this.</p><p><code>b'\x08\xd2\t\x12\x03Tim\x1a(\x08\x04\x12\x18Test ProtoBuf for Python\x1a\n31.10.2019'</code></p><p>Note the b in front of the quotes. This indicates that the following string is composed of byte octets in Python.</p><p>If we directly compare this to, e.g., XML, we can see the impact ProtoBuf serialization has on the size.</p><pre><code class="language-xml">&lt;todolist&gt;
&lt;owner_id&gt;1234&lt;/owner_id&gt;
&lt;owner_name&gt;Tim&lt;/owner_name&gt;
&lt;todos&gt;
&lt;todo&gt;
&lt;state&gt;TASK_DONE&lt;/state&gt;
&lt;task&gt;Test ProtoBuf for Python&lt;/task&gt;
&lt;due_date&gt;31.10.2019&lt;/due_date&gt;
&lt;/todo&gt;
&lt;/todos&gt;
&lt;/todolist&gt;</code></pre><p>The JSON representation, non-uglified, would look like this.</p><pre><code class="language-json">{
"todoList": {
"ownerId": "1234",
"ownerName": "Tim",
"todos": [
{
"state": "TASK_DONE",
"task": "Test ProtoBuf for Python",
"dueDate": "31.10.2019"
}
]
}
}</code></pre><p>Judging the different formats only by the total number of bytes used, ignoring the memory needed for the overhead of formatting it, we can of course see the difference.<br><br>But in addition to the memory used for the data, we also have <strong>12 extra bytes in ProtoBuf </strong>for formatting serialized data. Comparing that to XML, we have <strong>171 extra bytes in XML</strong> for formatting serialized data.</p><p>Without Schema, we need <strong>136 extra bytes in JSON </strong>for<strong> </strong>formatting<strong> </strong>serialized data<strong>.</strong></p><p>If we’re talking about several thousands of messages sent over the network or stored on disk, ProtoBuf can make a difference.</p><p>However, there is a catch. The platform Auth0.com created an extensive comparison between ProtoBuf and JSON. It shows that, when compressed, the size difference between the two can be marginal (only around 9%).</p><p>If you’re interested in the exact numbers, please refer to the <a href="https://auth0.com/blog/beating-json-performance-with-protobuf/">full article</a>, which gives a detailed analysis of several factors like size and speed.</p><p>An interesting side note is that each data type has a default value. If attributes are not assigned or changed, they will maintain the default values. In our case, if we don’t change the TaskState of a ListItem, it has the state of “TASK_OPEN” by default. The significant advantage of this is that non-set values are not serialized, saving additional space.</p><p>If we, for example, change the state of our task from TASK_DONE to TASK_OPEN, it will not be serialized.</p><pre><code class="language-json">owner_id: 1234
owner_name: "Tim"
todos {
task: "Test ProtoBuf for Python"
due_date: "31.10.2019"
}</code></pre><p><code>b'\x08\xd2\t\x12\x03Tim\x1a&amp;\x12\x18Test ProtoBuf for Python\x1a\n31.10.2019'</code></p><h2 id="final-notes">Final Notes</h2><p>As we have seen, Protocol Buffers are quite handy when it comes to speed and efficiency when working with data. Due to its powerful nature, it can take some time to get used to the ProtoBuf system, even though the syntax for defining new messages is straightforward. </p><p>As a last note, I want to point out that there were/are discussions going on about whether Protocol Buffers are “useful” for regular applications. They were developed explicitly for problems Google had in mind.<br><br>If you have any questions or feedback, feel free to reach out to me on any social media like <a href="https://twitter.com/timigrossmann">twitter</a> or <a href="mailto:contact.timgrossmann@gmail.com">email</a> :)</p>
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
