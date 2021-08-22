---
card: "https://cdn-media-1.freecodecamp.org/images/0*wLetcGEycR5rjU-q.jpeg"
tags: [Golang]
description: "by Sergey Kamardin"
author: "Milad E. Fahmy"
title: "A Million WebSockets and Go"
created: "2021-08-16T11:50:18+02:00"
modified: "2021-08-16T11:50:18+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-golang tag-web-development tag-programming tag-technology tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">A Million WebSockets and Go</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*wLetcGEycR5rjU-q.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/0*wLetcGEycR5rjU-q.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/0*wLetcGEycR5rjU-q.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/0*wLetcGEycR5rjU-q.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*wLetcGEycR5rjU-q.jpeg" alt="A Million WebSockets and Go">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
type Packet struct {
...
}
// Channel wraps user connection.
type Channel struct {
conn net.Conn    // WebSocket connection.
send chan Packet // Outgoing packets queue.
}
func NewChannel(conn net.Conn) *Channel {
c := &amp;Channel{
conn: conn,
send: make(chan Packet, N),
}
go c.reader()
go c.writer()
return c
// We make a buffered read to reduce read syscalls.
buf := bufio.NewReader(c.conn)
for {
pkt, _ := readPacket(buf)
c.handle(pkt)
}
// We make buffered write to reduce write syscalls.
buf := bufio.NewWriter(c.conn)
for pkt := range c.send {
_ := writePacket(buf, pkt)
buf.Flush()
}
"net/http"
"some/websocket"
)
http.HandleFunc("/v1/ws", func(w http.ResponseWriter, r *http.Request) {
conn, _ := websocket.Upgrade(r, w)
ch := NewChannel(conn)
//...
func (fd *netFD) Read(p []byte) (n int, err error) {
//...
for {
n, err = syscall.Read(fd.sysfd, p)
if err != nil {
n = 0
if err == syscall.EAGAIN {
if err = fd.pd.waitRead(); err == nil {
continue
}
}
}
//...
break
}
//...
func (pd *pollDesc) waitRead() error {
return pd.wait('r')
}
func (pd *pollDesc) wait(mode int) error {
res := runtime_pollWait(pd.runtimeCtx, mode)
//...
// Make conn to be observed by netpoll instance.
poller.Start(conn, netpoll.EventRead, func() {
// We spawn goroutine here to prevent poller wait loop
// to become locked during receiving packet from ch.
go Receive(ch)
})
// Receive reads a packet from conn and handles it somehow.
func (ch *Channel) Receive() {
buf := bufio.NewReader(ch.conn)
pkt := readPacket(buf)
c.handle(pkt)
if c.noWriterYet() {
go ch.writer()
}
ch.send &lt;- p
func New(size int) *Pool {
return &amp;Pool{
work: make(chan func()),
sem:  make(chan struct{}, size),
}
}
func (p *Pool) Schedule(task func()) error {
select {
case p.work &lt;- task:
case p.sem &lt;- struct{}{}:
go p.worker(task)
}
}
func (p *Pool) worker(task func()) {
defer func() { &lt;-p.sem }
for {
task()
task = &lt;-p.work
}
poller.Start(conn, netpoll.EventRead, func() {
// We will block poller wait loop when
// all pool workers are busy.
pool.Schedule(func() {
Receive(ch)
})
func (ch *Channel) Send(p Packet) {
if c.noWriterYet() {
pool.Schedule(ch.writer)
}
ch.send &lt;- p
Host: mail.ru
Connection: Upgrade
Sec-Websocket-Key: A3xNe7sEB9HixkmBhVrYaA==
Sec-Websocket-Version: 13
Upgrade: websocket
HTTP/1.1 101 Switching Protocols
Connection: Upgrade
Sec-Websocket-Accept: ksu0wXWG+YmkVx+KQR2agP0cQn4=
Upgrade: websocket</code></pre><figcaption>HTTP Upgrade example.</figcaption></figure><p>That is, in our case we need the HTTP request and its headers only for switch to the WebSocket protocol. This knowledge and <a href="https://github.com/golang/go/blob/release-branch.go1.8/src/net/http/request.go#L100-L305" rel="noopener">what is stored</a> inside the <code>http.Request</code> suggests that for the sake of optimization, we could probably refuse unnecessary allocations and copyings when processing HTTP requests and abandon the standard <code>net/http</code> server.</p><blockquote><em>For example, the <code>http.Request</code> contains a <a href="https://github.com/golang/go/blob/release-branch.go1.8/src/net/http/header.go#L19" rel="noopener">field with the same-name Header type</a> that is unconditionally filled with all request headers by copying data from the connection to the values strings. Imagine how much extra data could be kept inside this field, for example for a large-size Cookie header.</em></blockquote><p>But what to take in return?</p><h4 id="websocket-implementation">WebSocket implementation</h4><p>Unfortunately, all libraries existing at the time of our server optimization allowed us to do upgrade only for the standard <code>net/http</code> server. Moreover, neither of the (two) libraries made it possible to use all the above read and write optimizations. For these optimizations to work, we must have a rather low-level API for working with WebSocket. To reuse the buffers, we need the procotol functions to look like this:</p><pre><code class="language-go">func ReadFrame(io.Reader) (Frame, error)
// reuse *bufio.Reader (with sync.Pool for example).
func getReadBuf(io.Reader) *bufio.Reader
func putReadBuf(*bufio.Reader)
// readPacket must be called when data could be read from conn.
func readPacket(conn io.Reader) error {
buf := getReadBuf()
defer putReadBuf(buf)
buf.Reset(conn)
frame, _ := ReadFrame(buf)
parsePacket(frame.Payload)
//...
}</code></pre><figcaption>Expected WebSocket implementation API.</figcaption></figure><p>In short, it was time to make our own library.</p><h4 id="github-com-gobwas-ws">github.com/gobwas/ws</h4><p>Ideologically, the <code>ws</code> library was written so as not to impose its protocol operation logic on users. All reading and writing methods accept standard <code>io.Reader</code> and <code>io.Writer</code> interfaces, which makes it possible to use or not to use buffering or any other I/O wrappers.</p><p>Besides upgrade requests from standard <code>net/http</code>, <code>ws</code> supports <strong>zero-copy upgrade</strong>, the handling of upgrade requests and switching to WebSocket without memory allocations or copyings. <code>ws.Upgrade()</code> accepts <code>io.ReadWriter</code> (<code>net.Conn</code> implements this interface). In other words, we could use the standard <code>net.Listen()</code> and transfer the received connection from <code>ln.Accept()</code> immediately to <code>ws.Upgrade()</code>. The library makes it possible to copy any request data for future use in the application (for example, <code>Cookie</code> to verify the session).</p><p>Below there are <a href="https://github.com/gobwas/ws/blob/f9c54e121bd17f7e6b9b283bd0299d19149f270b/server_test.go#L397-L464" rel="noopener">benchmarks</a> of Upgrade request processing: standard <code>net/http</code> server versus <code>net.Listen()</code> with zero-copy upgrade:</p><pre><code class="language-http">BenchmarkUpgradeHTTP    5156 ns/op    8576 B/op    9 allocs/op
"net"
"github.com/gobwas/ws"
)
ln, _ := net.Listen("tcp", ":8080")
for {
// Try to accept incoming connection inside free pool worker.
// If there no free workers for 1ms, do not accept anything and try later.
// This will help us to prevent many self-ddos or out of resource limit cases.
err := pool.ScheduleTimeout(time.Millisecond, func() {
conn := ln.Accept()
_ = ws.Upgrade(conn)
// Wrap WebSocket connection with our Channel struct.
// This will help us to handle/send our app's packets.
ch := NewChannel(conn)
// Wait for incoming bytes from connection.
poller.Start(conn, netpoll.EventRead, func() {
// Do not cross the resource limits.
pool.Schedule(func() {
// Read and handle incoming packet(s).
ch.Recevie()
})
})
})
if err != nil {
time.Sleep(time.Millisecond)
}
}</code></pre><figcaption>Example WebSocket server with netpoll, goroutine pool and zero-copy upgrade.</figcaption></figure><h3 id="4-conclusion">4. Conclusion</h3><blockquote><em>Premature optimization is the root of all evil (or at least most of it) in programming. Donald Knuth</em></blockquote><p>Of course, the above optimizations are relevant, but not in all cases. For example if the ratio between free resources (memory, CPU) and the number of online connections is rather high, there is probably no sense in optimizing. However, you can benefit a lot from knowing where and what to improve.</p><p>Thank you for your attention!</p><h3 id="5-references">5. References</h3><ul><li><a href="https://github.com/mailru/easygo" rel="noopener">https://github.com/mailru/easygo</a></li><li><a href="https://github.com/gobwas/ws" rel="noopener">https://github.com/gobwas/ws</a></li><li><a href="https://github.com/gobwas/ws-examples" rel="noopener">https://github.com/gobwas/ws-examples</a></li><li><a href="https://github.com/gobwas/httphead" rel="noopener">https://github.com/gobwas/httphead</a></li><li><a href="https://habrahabr.ru/company/mailru/blog/331784/" rel="noopener">Russian version of this article</a></li></ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
