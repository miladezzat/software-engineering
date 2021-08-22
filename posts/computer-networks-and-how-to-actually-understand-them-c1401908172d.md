---
card: "https://cdn-media-1.freecodecamp.org/images/1*Rs2ZpWMuYgYSIFXVdXVm0g.jpeg"
tags: [DevOps]
description: "by Sumedh Nimkarde"
author: "Milad E. Fahmy"
title: "What computer networks are and how to actually understand them"
created: "2021-08-16T11:37:18+02:00"
modified: "2021-08-16T11:37:18+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-devops tag-tech tag-technology tag-computer-networking tag-tutorial ">
<header class="post-full-header">
<h1 class="post-full-title">What computer networks are and how to actually understand them</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Rs2ZpWMuYgYSIFXVdXVm0g.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*Rs2ZpWMuYgYSIFXVdXVm0g.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*Rs2ZpWMuYgYSIFXVdXVm0g.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Rs2ZpWMuYgYSIFXVdXVm0g.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Rs2ZpWMuYgYSIFXVdXVm0g.jpeg" alt="What computer networks are and how to actually understand them">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
Destination  Gateway     Genmask  Flags Metric Refs Iface
default192.168.0.1 0.0.0.0        UG    1024   233  eth0
192.168.0.0  *     255.255.255.0  UC    0      0    wlan0
------------- ------------ --------- ----------- ------- -----------
192.168.1.100 | 37641 | 104.244.42.129 | 59273 | 72.14.204.147 | 80</code></pre><p>But, since the outside world of the network doesn’t know about your private address, the connection looks like the following to <strong>medium.com</strong>:</p><p><code>104.244.42.129:59273</code> → <code>72.14.204.147:80</code> .</p><p>That way, we achieve assigning a higher number of IP addresses without wasting many public IPs.</p><p>Now, when medium.com sends the response back to <code>104.244.42.129:59273</code> , it travels all the way to your home router which then looks up for the respective private IP and private port and redirects the packet to your device/computer.</p><p><strong>Note</strong>: NAT is a generalized concept. NAT can be achieved as 1:1, 1:N where 1, N are the number of IP addresses in the network. A technique called as “IP Masquerading” is a 1:N NAT.</p><h3 id="dynamic-host-configuration-protocol-dhcp-">Dynamic Host Configuration Protocol (DHCP)</h3><p><strong>Dynamic Host Configuration Protocol</strong> or <strong>DHCP </strong>is responsible for assigning dynamic IP addresses to the hosts. The DHCP server is maintained by the ISP or previous router if there is a chain of routers to reach the host.</p><p>Thus, allocation of IP addresses is carried out by the DHCP server. Generally, ISP maintains a DHCP server and the routers in our houses get assigned a public IP from the DHCP server.</p><p><strong>Note</strong>: Whenever a router or say a DHCP server maintained by an ISP or router restarts, the IP address allocation starts again and devices are allocated IPs which are different than the previous ones.</p><h3 id="domain-name-system-server">Domain Name System/Server</h3><p>We have already discussed that any machine is identified by the IP address.</p><p>Okay, so you are running a web server on your <code>localhost</code> on your machine. If you have dug around in the hosts on any Linux machine, you would have encountered something like this:</p><pre><code>127.0.0.1  localhost
255.255.255.255  broadcasthost
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
