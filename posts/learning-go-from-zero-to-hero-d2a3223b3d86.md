---
card: "https://cdn-media-1.freecodecamp.org/images/1*30aoNxlSnaYrLhBT0O1lzw.png"
tags: [Golang]
description: "Let’s start with a small introduction to Go (or Golang). Go w"
author: "Milad E. Fahmy"
title: "Learning Go — from zero to hero"
created: "2021-08-16T10:09:24+02:00"
modified: "2021-08-16T10:09:24+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-golang tag-programming tag-learning tag-software-development tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">Learning Go — from zero to hero</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*30aoNxlSnaYrLhBT0O1lzw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*30aoNxlSnaYrLhBT0O1lzw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*30aoNxlSnaYrLhBT0O1lzw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*30aoNxlSnaYrLhBT0O1lzw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*30aoNxlSnaYrLhBT0O1lzw.png" alt="Learning Go — from zero to hero">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
export GOPATH=~/workspace
# go inside the workspace directory
cd ~/workspace</code></pre><p>Create the file <code>main.go</code> with the following code inside the workspace folder we just created.</p><h4 id="hello-world-">Hello World!</h4><pre><code class="language-go">package main
import (
"fmt"
)
func main(){
fmt.Println("Hello World!")
}</code></pre><p>In the above example, <code>fmt</code> is a built-in package in Go which implements functions for formatting I/O.</p><p>We import a package in Go by using the <code>import</code><strong> </strong>keyword. <code>func main</code> is the main entry point where the code gets executed.<strong> </strong><code>Println</code> is a function inside the package <code>fmt</code> which prints “hello world” for us.</p><p>Let’s see by running this file. There are two ways we can run a Go command. As we know, Go is a compiled language, so we first need to compile it before executing.</p><pre><code>&gt; go build main.go</code></pre><p>This creates a binary executable file <code>main</code> which now we can run:</p><pre><code>&gt; ./main
# Hello World!</code></pre><p>There is another, simpler, way to run the program. The <code>go run</code> command helps abstract the compilation step. You can simply run the following command to execute the program.</p><pre><code>go run main.go
# Hello World!</code></pre><p><strong><em>Note</em></strong><em>: To try out the code that is mentioned in this blog you can use <a href="https://play.golang.org/" rel="noopener">https://play.golang.org</a></em></p><h3 id="variables">Variables</h3><p>Variables in Go are declared explicitly. Go is a statically typed language. This means that the variable type is checked at the time of variable declaration. A variable can be declared as:</p><pre><code class="language-go">var a int</code></pre><p>In this case, the value will be set as 0. Use the following syntax to declare and initialize a variable with a different value:</p><pre><code class="language-go">var a = 1</code></pre><p>Here the variable is automatically assigned as an int. We can use a shorthand definition for the variable declaration as:</p><pre><code class="language-go">message := "hello world"</code></pre><p>We can also declare multiple variables in the same line:</p><pre><code class="language-go">var b, c int = 2, 3</code></pre><h3 id="data-types">Data types</h3><p>Like any other programming language, Go supports various different data structures. Let’s explore some of them:</p><h4 id="number-string-and-boolean"><strong>Number, String, and Boolean</strong></h4><p>Some of the supported<strong> </strong>number store types are int, int8, int16, int32, int64,<br>uint, uint8, uint16, uint32, uint64, uintptr…</p><p>The string type stores a sequence of bytes. It is represented and declared with keyword <code>string</code>.</p><p>A<strong> </strong>boolean<strong> </strong>value is stored using the keyword <code>bool</code>.</p><p>Go also supports complex number type data types, which can be declared with <code>complex64</code> and <code>complex128</code>.</p><pre><code class="language-go">var a bool = true
var b int = 1
var c string = 'hello world'
var d float32 = 1.222
number2 := make([]int, 15)
// copy the original slice to new slice
copy(number2, number)</code></pre><p>We can create a sub-slice of a slice. This can be done simply using the following command:</p><pre><code class="language-go">// initialize a slice with 4 len and values
number2 = []int{1,2,3,4}
fmt.Println(numbers) // -&gt; [1 2 3 4]
// create sub slices
slice1 := number2[2:]
fmt.Println(slice1) // -&gt; [3 4]
slice2 := number2[:3]
fmt.Println(slice2) // -&gt; [1 2 3]
slice3 := number2[1:4]
fmt.Println(slice3) // -&gt; [2 3 4]</code></pre><p>Maps are a data type in Go, which maps keys to values. We can define a map using the following command:</p><pre><code class="language-go">var m map[string]int</code></pre><p>Here <code>m</code> is the new map variable, which has its keys as <code>string</code> and values are <code>integers</code>. We can add keys and values easily to a map:</p><pre><code class="language-go">// adding key/value
m['clearity'] = 2
m['simplicity'] = 3
// printing the values
fmt.Println(m['clearity']) // -&gt; 2
fmt.Println(m['simplicity']) // -&gt; 3</code></pre><h3 id="typecasting"><strong>Typecasting</strong></h3><p>One type of data type can be converted into another using type casting. Let’s see a simple type conversion:</p><pre><code class="language-go">a := 1.1
b := int(a)
fmt.Println(b)
//-&gt; 1</code></pre><p>Not all types of data type can be converted to another type. Make sure that the data type is compatible with the conversion.</p><h3 id="conditional-statements">Conditional Statements</h3><h4 id="if-else">if else</h4><p>For conditional statements, we can use if-else statements as shown in the example below. Make sure that the curly braces are in the same line as the condition is.</p><pre><code class="language-go">if num := 9; num &lt; 0 {
fmt.Println(num, "is negative")
} else if num &lt; 10 {
fmt.Println(num, "has 1 digit")
} else {
fmt.Println(num, "has multiple digits")
}</code></pre><h4 id="switch-case">switch case</h4><p>Switch cases helps organize multiple condition statements. The following example shows a simple switch case statement:</p><pre><code class="language-go">i := 2
switch i {
case 1:
fmt.Println("one")
case 2:
fmt.Println("two")
default:
fmt.Println("none")
}</code></pre><h3 id="looping">Looping</h3><p>Go has a single keyword for the loop. A sngle for loop command help achieve different kinds of loops:</p><pre><code class="language-go">i := 0
sum := 0
for i &lt; 10 {
sum += 1
i++
}
fmt.Println(sum)</code></pre><p>The above example is similar to a while loop in C. The same for statement can be used for a normal for loop:</p><pre><code class="language-go">sum := 0
for i := 0; i &lt; 10; i++ {
sum += i
}
fmt.Println(sum)</code></pre><p>Infinite loop in Go:</p><pre><code class="language-go">for {
}</code></pre><h3 id="pointers">Pointers</h3><p>Go provides pointers. Pointers are the place to hold the address of a value. A pointer is defined by *. A pointer is defined according to the type of data. Example:</p><pre><code class="language-go">var ap *int
</code></pre><p>Here <code>ap</code> is the pointer to an integer type. The <code>&amp;</code> operator can be used to get the address of a variable.</p><pre><code class="language-go">a := 12
ap = &amp;a
</code></pre><p>The value pointed by the pointer can be accessed using the <code>*</code> operator:</p><pre><code class="language-go">fmt.Println(*ap)
// =&gt; 12</code></pre><p>Pointers are usually preferred while passing a struct as an argument or while declaring a method for a defined type.</p><ol><li>While passing value the value is actually copied which means more memory</li><li>With the pointer passed, the value changed by the function is reflected back in the method/function caller.</li></ol><p>Example:</p><pre><code class="language-go">func increment(i *int) {
*i++
}
func main() {
i := 10
increment(&amp;i)
fmt.Println(i)
}
//=&gt; 11</code></pre><p>Note: While you are trying out the example code in the blog, do not forget to include it with package main and import fmt or other packages when needed as shown in the first main.go example above.</p><h3 id="functions">Functions</h3><p>The main function defined in the main package is the entry point for a go program to execute. More functions can be defined and used. Let’s look into a simple example:</p><pre><code class="language-go">func add(a int, b int) int {
c := a + b
return c
}
func main() {
fmt.Println(add(2, 1))
}
//=&gt; 3</code></pre><p>As we can see in the above example, a Go function is defined using the <strong>func </strong>keyword followed by the function name. The <strong>arguments</strong> a function takes needs to be defined according to its data type, and finally the data type of the return.</p><p>The return of a function can be predefined in function as well:</p><pre><code class="language-go">func add(a int, b int) (c int) {
c = a + b
return
}
func main() {
fmt.Println(add(2, 1))
}
//=&gt; 3</code></pre><p>Here c is defined as the return variable. So the variable c defined would be automatically returned without needing to be defined at the return statement at the end.</p><p>You can also return multiple return values from a single function separating return values with a comma.</p><pre><code class="language-go">func add(a int, b int) (int, string) {
c := a + b
return c, "successfully added"
}
func main() {
sum, message := add(2, 1)
fmt.Println(message)
fmt.Println(sum)
}</code></pre><h3 id="method-structs-and-interfaces">Method, Structs, and Interfaces</h3><p>Go is not a completely object-oriented language, but with structs, interfaces, and methods it has a lot of object-oriented support and feel.</p><h4 id="struct">Struct</h4><p>A struct is a typed, collection of different fields. A struct is used to group data together. For example, if we want to group data of a Person type, we define a person’s attribute which could include name, age, gender. A struct can be defined using the following syntax:</p><pre><code class="language-go">type person struct {
name string
age int
gender string
}</code></pre><p>With a person type struct defined, now let’s create a person:</p><pre><code class="language-go">//way 1: specifying attribute and value
p = person{name: "Bob", age: 42, gender: "Male"}
//way 2: specifying only value
person{"Bob", 42, "Male"}</code></pre><p>We can easily access these data with a dot(.)</p><pre><code class="language-go">p.name
//=&gt; Bob
p.age
//=&gt; 42
p.gender
//=&gt; Male</code></pre><p>You can also access attributes of a struct directly with its pointer:</p><pre><code class="language-go">pp = &amp;person{name: "Bob", age: 42, gender: "Male"}
pp.name
//=&gt; Bob</code></pre><h4 id="methods">Methods</h4><p>Methods are a special type of function with a <em>receiver. </em>A receiver can be both a value or a pointer. Let’s create a method called describe which has a receiver type person we created in the above example:</p><pre><code class="language-go">package main
import "fmt"
// struct defination
type person struct {
name   string
age    int
gender string
}
// method defination
func (p *person) describe() {
fmt.Printf("%v is %v years old.", p.name, p.age)
}
func (p *person) setAge(age int) {
p.age = age
}
func (p person) setName(name string) {
p.name = name
}
func main() {
pp := &amp;person{name: "Bob", age: 42, gender: "Male"}
pp.describe()
// =&gt; Bob is 42 years old
pp.setAge(45)
fmt.Println(pp.age)
//=&gt; 45
pp.setName("Hari")
fmt.Println(pp.name)
//=&gt; Bob
}</code></pre><p>As we can see in the above example, the method now can be called using a dot operator as <code>pp.describe</code>. Note that the receiver is a pointer. With the pointer we are passing a reference to the value, so if we make any changes in the method it will be reflected in the receiver pp. It also does not create a new copy of the object, which saves memory.</p><p>Note that in the above example the value of age is changed, whereas the value of name is not changed because the method setName is of the receiver type whereas setAge is of type pointer.</p><h4 id="interfaces">Interfaces</h4><p>Go interfaces are a collection of methods. Interfaces help group together the properties of a type. Let’s take the example of an interface animal:</p><pre><code class="language-go">type animal interface {
description() string
}</code></pre><p>Here animal is an interface type. Now let’s create 2 different type of animals which implement the animal interface type:</p><pre><code class="language-go">package main
import (
"fmt"
)
type animal interface {
description() string
}
type cat struct {
Type  string
Sound string
}
type snake struct {
Typestring
Poisonous bool
}
func (s snake) description() string {
return fmt.Sprintf("Poisonous: %v", s.Poisonous)
}
func (c cat) description() string {
return fmt.Sprintf("Sound: %v", c.Sound)
}
func main() {
var a animal
a = snake{Poisonous: true}
fmt.Println(a.description())
a = cat{Sound: "Meow!!!"}
fmt.Println(a.description())
}
//=&gt; Poisonous: true
//=&gt; Sound: Meow!!!</code></pre><p>In the main function, we create a variable <code>a</code> of type animal. We assign a snake and a cat type to the animal and use Println to print a.description. Since we have implemented the method describe in both of the types (cat and snake) in a different way we get the description of the animal printed.</p><h3 id="packages">Packages</h3><p>We write all code in Go in a package. The <strong>main </strong>package is the entry point for the program execution. There are lots of built-in packages in Go. The most famous one we have been using is the <strong>fmt </strong>package.</p><blockquote>“Go packages in the main mechanism for programming in the large that go provides and they make possible to divvy up a large project into smaller pieces.”</blockquote><blockquote>— Robert Griesemer</blockquote><h4 id="installing-a-package">Installing a package</h4><pre><code>go get &lt;package-url-github&gt;
// example
go get github.com/satori/go.uuid</code></pre><p>The packages we installed are saved inside the GOPATH env which is our work directory. You can see the packages by going inside the pkg folder inside our work directory <code>cd $GOPATH/pkg</code>.</p><h4 id="creating-a-custom-package">Creating a custom package</h4><p>Let’s start by creating a folder custom_package:</p><pre><code>&gt; mkdir custom_package
&gt; cd custom_package</code></pre><p>To create a custom package we need to first create a folder with the package name we need. Let’s say we are building a package <code>person</code>. For that let’s create a folder named <code>person</code> inside <code>custom_package</code> folder:</p><pre><code>&gt; mkdir person
&gt; cd person</code></pre><p>Now let’s create a file person.go inside this folder.</p><pre><code class="language-go">package person
func Description(name string) string {
return "The person name is: " + name
}
func secretName(name string) string {
return "Do not share"
}</code></pre><p>We now need to install the package so that it can be imported and used. So let’s install it:</p><pre><code>&gt; go install</code></pre><p>Now let’s go back to the custom_package folder and create a main.go file</p><pre><code class="language-go">package main
import(
"custom_package/person"
"fmt"
)
func main(){
p := person.Description("Milap")
fmt.Println(p)
}
// =&gt; The person name is: Milap</code></pre><p>Here we can now import the package <code>person</code> we created and use the function Description. Note that the function <code>secretName</code> we created in the package will not be accessible. In Go, the method name starting without a capital letter will be private.</p><h4 id="packages-documentation"><strong>Packages Documentation</strong></h4><p>Go has built-in support for documentation for packages. Run the following command to generate documentation:</p><pre><code>godoc person Description</code></pre><p>This will generate documentation for the Description function inside our package person. To see the documentation run a web server using the following command:</p><pre><code>godoc -http=":8080"</code></pre><p>Now go to the URL <a href="http://localhost:6060/pkg/" rel="noopener">http://localhost:8080/pkg/</a> and see the documentation of the package we just created.</p><h4 id="some-built-in-packages-in-go">Some built-in packages in Go</h4><p><strong>fmt</strong></p><p>The package implements formatted I/O functions. We have already used the package for printing out to stdout.</p><p><strong>json</strong></p><p>Another useful package in Go is the json package. This helps to encode/decode the JSON. Let’s take an example to encode/decode some json:</p><p>Encode</p><pre><code class="language-go">package main
import (
"fmt"
"encoding/json"
)
func main(){
mapA := map[string]int{"apple": 5, "lettuce": 7}
mapB, _ := json.Marshal(mapA)
fmt.Println(string(mapB))
}</code></pre><p>Decode</p><pre><code class="language-go">package main
import (
"fmt"
"encoding/json"
)
type response struct {
PageNumber int `json:"page"`
Fruits []string `json:"fruits"`
}
func main(){
str := `{"page": 1, "fruits": ["apple", "peach"]}`
res := response{}
json.Unmarshal([]byte(str), &amp;res)
fmt.Println(res.PageNumber)
}
//=&gt; 1</code></pre><p>While decoding the json byte using unmarshal, the first argument is the json byte and the second argument is the address of the response type struct where we want the json to be mapped to. Note that the <code>json:”page”</code> maps page key to PageNumber key in the struct.</p><h3 id="error-handling">Error Handling</h3><p>Errors are the undesired and unexpected result of a program. Let’s say we are making an API call to an external service. This API call may be successful or could fail. An error in a Go program can be recognized when an error type is present. Let’s see the example:</p><pre><code class="language-go">resp, err := http.Get("http://example.com/")
</code></pre><p>Here the API call to the error object may pass or could fail. We can check if the error is nil or present and handle the response accordingly:</p><pre><code class="language-go">package main
import (
"fmt"
"net/http"
)
func main(){
resp, err := http.Get("http://example.com/")
if err != nil {
fmt.Println(err)
return
}
fmt.Println(resp)
}</code></pre><h4 id="returning-custom-error-from-a-function">Returning custom error from a function</h4><p>When we are writing a function of our own, there are cases when we have errors. These errors can be returned with the help of the error object:</p><pre><code class="language-go">func Increment(n int) (int, error) {
if n &lt; 0 {
// return error object
return nil, errors.New("math: cannot process negative number")
}
return (n + 1), nil
}
func main() {
num := 5
if inc, err := Increment(num); err != nil {
fmt.Printf("Failed Number: %v, error message: %v", num, err)
}else {
fmt.Printf("Incremented Number: %v", inc)
}
}</code></pre><p>Most of the packages that are built in Go, or external packages we use, have a mechanism for error handling. So any function we call could have possible errors. These errors should never be ignored and always handled gracefully in the place we call these functions, as we have done in the above example.</p><h4 id="panic">Panic</h4><p>Panic is something that is unhandled and is suddenly encountered during a program execution. In Go, panic is not the ideal way to handle exceptions in a program. It is recommended to use an error object instead. When a panic occurs, the program execution get’s halted. The thing that gets executed after a panic is the defer.</p><pre><code class="language-go">//Go
package main
import "fmt"
func main() {
f()
fmt.Println("Returned normally from f.")
}
func f() {
defer func() {
if r := recover(); r != nil {
fmt.Println("Recovered in f", r)
}
}()
fmt.Println("Calling g.")
g(0)
fmt.Println("Returned normally from g.")
}
func g(i int) {
if i &gt; 3 {
fmt.Println("Panicking!")
panic(fmt.Sprintf("%v", i))
}
defer fmt.Println("Defer in g", i)
fmt.Println("Printing in g", i)
g(i + 1)
}</code></pre><h4 id="defer">Defer</h4><p>Defer is something that will always get executed at the end of a function.</p><p>In the above example, we panic the execution of the program using panic(). As you notice, there is a defer statement which will make the program execute the line at the end of the execution of the program. Defer can also be used when we need something to be executed at the end of the function, for example closing a file.</p><h3 id="concurrency">Concurrency</h3><p>Go is built with concurrency in mind. Concurrency in Go can be achieved by Go routines which are lightweight threads.</p><p><strong>Go routine</strong></p><p>Go routines are the function which can run in parallel or concurrently with another function. Creating a Go routine is very simple. Simply by adding a keyword Go in front of a function, we can make it execute in parallel. Go routines are very lightweight, so we can create thousands of them. Let’s look into a simple example:</p><pre><code class="language-go">package main
import (
"fmt"
"time"
)
func main() {
go c()
fmt.Println("I am main")
time.Sleep(time.Second * 2)
}
func c() {
time.Sleep(time.Second * 2)
fmt.Println("I am concurrent")
}
//=&gt; I am main
//=&gt; I am concurrent</code></pre><p>As you can see in the above example, the function c is a Go routine which executes in parallel with the main Go thread. There are times we want to share resources between multiple threads. Go prefers not sharing the variables of one thread with another because this adds a chance of deadlock and resource waiting. There is another way to share resources between Go routines: via go channels.</p><p><strong>Channels</strong></p><p>We can pass data between two Go routines using channels. While creating a channel it is necessary to specify what kind of data the channel receives. Let’s create a simple channel with string type as follows:</p><pre><code class="language-go">c := make(chan string)
</code></pre><p>With this channel, we can send string type data. We can both send and receive data in this channel:</p><pre><code class="language-go">package main
import "fmt"
func main(){
c := make(chan string)
go func(){ c &lt;- "hello" }()
msg := &lt;-c
fmt.Println(msg)
}
//=&gt;"hello"</code></pre><p>The receiver Channels wait until the sender sends data to the channel.</p><p><strong>One way channel</strong></p><p>There are cases where we want a Go routine to receive data via the channel but not send data, and also vice versa. For this, we can also create a <strong>one-way channel</strong>. Let’s look into a simple example:</p><pre><code class="language-go">package main
import (
"fmt"
)
func main() {
ch := make(chan string)
go sc(ch)
fmt.Println(&lt;-ch)
}
func sc(ch chan&lt;- string) {
ch &lt;- "hello"
}</code></pre><p>In the above example, <code>sc</code> is a Go routine which can only send messages to the channel but cannot receive messages.</p><h3 id="organizing-multiple-channels-for-a-go-routine-using-select">Organizing multiple channels for a Go routine using select</h3><p>There may be multiple channels that a function is waiting on. For this, we can use a select statement. Let us take a look at an example for more clarity:</p><pre><code class="language-go">package main
import (
"fmt"
"time"
)
func main() {
c1 := make(chan string)
c2 := make(chan string)
go speed1(c1)
go speed2(c2)
fmt.Println("The first to arrive is:")
select {
case s1 := &lt;-c1:
fmt.Println(s1)
case s2 := &lt;-c2:
fmt.Println(s2)
}
}
func speed1(ch chan string) {
time.Sleep(2 * time.Second)
ch &lt;- "speed 1"
}
func speed2(ch chan string) {
time.Sleep(1 * time.Second)
ch &lt;- "speed 2"
}</code></pre><p>In the above example, the main is waiting on two channels, c1 and c2. With select case statement the main function prints, the message sends from the channel whichever it receives first.</p><p><strong>Buffered channel</strong></p><p>You can create a buffered channel in go. With a buffered channel, the messages send to the channel will be blocked if the buffer is full. Let’s take a look at the example:</p><pre><code class="language-go">package main
import "fmt"
func main(){
ch := make(chan string, 2)
ch &lt;- "hello"
ch &lt;- "world"
ch &lt;- "!" # extra message in buffer
fmt.Println(&lt;-ch)
}
# =&gt; fatal error: all goroutines are asleep - deadlock!</code></pre><p>As we see in above no more than 2 messages are accepted by a channel.</p><h4 id="why-is-golang-successful">Why is Golang Successful?</h4><blockquote>Simplicity… — Rob-pike</blockquote><h3 id="great-">Great!</h3><p>We learned some of the major components and features of Go.</p><ol><li>Variables, Datatypes</li><li>Array slices and maps</li><li>Functions</li><li>Looping and conditional statements</li><li>Pointers</li><li>Packages</li><li>Method, Structs, and Interfaces</li><li>Error Handling</li><li>Concurrency — Go routines and channels</li></ol><p>Congratulations, you now have a decent understanding of Go.</p><blockquote>One of my most productive days was throwing away 1,000 lines of code.</blockquote><blockquote>— Ken Thompson</blockquote><p>Do not stop here. Keep moving forward. Think about a small application and start building.</p><p><a href="https://www.linkedin.com/in/milap-neupane-99a4b565/" rel="noopener">LinkedIn</a>, <a href="http://github.com/milap-neupane" rel="noopener">Github</a>, <a href="https://twitter.com/_milap" rel="noopener">Twitter</a></p><p>Also Posted on Milap Neupane Blog: <a href="https://milapneupane.com.np/2019/07/06/learning-golang-from-zero-to-hero/">Learning Go-from zero to hero</a></p>
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
