---
card: "https://cdn-media-1.freecodecamp.org/images/1*JCzYiffzwccc3lXj_9V3YA.png"
tags: [Docker]
description: "by Zhuowei Zhang"
author: "Milad E. Fahmy"
title: "Docker Swarm vs Kubernetes: how to setup both in two virtual machines"
created: "2021-08-16T11:36:09+02:00"
modified: "2021-08-16T11:36:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-docker tag-kubernetes tag-containers tag-technology tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Docker Swarm vs Kubernetes: how to setup both in two virtual machines</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*JCzYiffzwccc3lXj_9V3YA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*JCzYiffzwccc3lXj_9V3YA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*JCzYiffzwccc3lXj_9V3YA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*JCzYiffzwccc3lXj_9V3YA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*JCzYiffzwccc3lXj_9V3YA.png" alt="Docker Swarm vs Kubernetes: how to setup both in two virtual machines">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
docker run --init -p 445:445 -i sambaonly-v1</code></pre><p>and indeed, I was able to connect to the Samba server in the container with <code><a href="https://www.samba.org/samba/docs/current/man-html/smbclient.1.html" rel="noopener nofollow">smbclient</a></code>:</p><pre><code>zhuowei@dora:~$ smbclient \\\\localhost\\workdir -U %
WARNING: The "syslog" option is deprecated
Try "help" to get a list of possible commands.
smb: \&gt; ls
.                         D        0  Fri Oct  5 12:14:43 2018
..                        D        0  Sun Oct  7 22:09:49 2018
hello.txt                 N       13  Fri Oct  5 11:17:34 2018
102685624 blocks of size 1024. 72252576 blocks available
Swarm initialized: current node (abcdefghijklmnopqrstuvwxy) is now a manager.
To add a worker to this swarm, run the following command:
docker swarm join --token SWMTKN-1-abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwx-abcdefghijklmnopqrstuvwxy 10.133.7.100:2377
To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.</code></pre><p>That’s it: the Docker engine is now running in Swarm mode.</p><p>Next, I deployed a private Docker registry so that other nodes can pull images, again following <a href="https://docs.docker.com/engine/swarm/stack-deploy/#set-up-a-docker-registry" rel="noopener nofollow">the setup instructions</a>:</p><pre><code>docker service create --name registry --publish published=5000,target=5000 registry:2</code></pre><h2 id="deploying-the-app">Deploying the app</h2><p>Docker Swarm uses the <a href="https://docs.docker.com/compose/overview/" rel="noopener nofollow">Docker Compose</a> format to specify the containers to run and the ports they export.</p><p>Following the <a href="https://docs.docker.com/compose/gettingstarted/#step-3-define-services-in-a-compose-file" rel="noopener nofollow">Docker Compose</a> tutorial, I created this Docker Compose manifest:</p><pre><code>version: '3.7'
services:
samba:
image: 127.0.0.1:5000/samba
build: sambaonly
init: true
stdin_open: true
ports:
- "445:445"</code></pre><p>This tells Docker Compose to build the Dockerfile from the “sambaonly” directory, upload/pull built containers to my newly setup private registry, and export port 445 from the container.</p><p>To deploy this manifest, <a href="https://docs.docker.com/engine/swarm/stack-deploy/#set-up-a-docker-registry">I followed Docker Swarm’s tutorial</a>. I first used Docker Compose to build and upload the container to the private registry:</p><pre><code>docker-compose build
docker-compose push</code></pre><p>After the container is built, the app can be deployed with <code>docker stack deploy</code> command, specifying the service name:</p><pre><code class="language-bash">$ docker stack deploy --compose-file docker-compose.yml samba-swarm
Ignoring unsupported options: build
Creating network samba-swarm_default
Creating service samba-swarm_samba
zhuowei@dora:~/Documents/docker$ docker stack services samba-swarm
ID     NAME                  MODE       REPLICAS IMAGE PORTS
yg8x8yfytq5d samba-swarm_samba     replicated 1/1</code></pre><p>And now the app is running under Samba Swarm. I tested that it still works with <code>smbclient</code>:</p><pre><code>zhuowei@dora:~$ smbclient \\\\localhost\\workdir -U %
WARNING: The "syslog" option is deprecated
Try "help" to get a list of possible commands.
smb: \&gt; ls
.                         D        0  Fri Oct  5 12:14:43 2018
..                        D        0  Sun Oct  7 22:09:49 2018
hello.txt                 N       13  Fri Oct  5 11:17:34 2018
102685624 blocks of size 1024. 72252576 blocks available
smb: \&gt;</code></pre><h4 id="adding-another-node">Adding another node</h4><p>Once again, Docker Swarm’s simplicity shines through here. To setup a second node, I first installed Docker, then ran the command that Docker gave me when I setup the swarm:</p><pre><code>ralph:~# docker swarm join --token SWMTKN-1-abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwx-abcdefghijklmnopqrstuvwxy 10.133.7.100:2377
This node joined a swarm as a worker.</code></pre><p>To run my application on both nodes, I ran Docker Swarm’s <code>scale</code> command on the manager node:</p><pre><code>zhuowei@dora:~/Documents/docker$ docker service scale samba-swarm_samba=2
samba-swarm_samba scaled to 2 overall progress: 2 out of 2 tasks
1/2: running [==================================================&gt;]
2/2: running [==================================================&gt;] verify: Service converged</code></pre><p>On the new worker node, the new container showed up:</p><pre><code>ralph:~# docker container ls
CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES
7539549283bd 127.0.0.1:5000/samba:latest "/usr/sbin/smbd -FS …" 20 seconds ago Up 18 seconds 445/tcp samba-swarm_samba.1.abcdefghijklmnopqrstuvwxy</code></pre><h4 id="testing-load-balancing">Testing load balancing</h4><p>Docker Swarm includes a built-in load balancer called the Mesh Router: requests made to any node’s IP address is automatically distributed across the Swarm.</p><p>To test this, I made 1000 connections to the manager node’s IP address with <code>nc</code>:</p><pre><code>print("#!/bin/bash")
for i in range(1000):
print("nc -v 10.133.7.100 445 &amp;")
print("wait")</code></pre><p>Samba spawns one new process for each connection, so if the load balancing works, I would expect about 500 Samba processes on each node in the Swarm. This is indeed what happens.</p><p>After I ran the script to make 1000 connections, I checked the number of Samba processes on the manager (10.133.7.100):</p><pre><code>zhuowei@dora:~$ ps -ef|grep smbd|wc
506 5567 42504</code></pre><p>and on the worker node (10.133.7.50):</p><pre><code>ralph:~# ps -ef|grep smbd|wc
506 3545 28862</code></pre><p>So exactly half of the requests made to the manager node were magically redirected to the first worker node, showing that the Swarm cluster is working properly.</p><p>I found Docker Swarm to be very easy to setup, and it performed well under (a light) load.</p><h2 id="kubernetes">Kubernetes</h2><p>Kubernetes is becoming the industry standard for container orchestration. It’s significantly more flexible than Docker Swarm, but this also makes it harder to setup. I found that it’s not <em><em>too</em></em> hard, though.</p><p>For this experiment, instead of using a pre-built Kubernetes dev environment such as <code><a href="https://kubernetes.io/docs/setup/minikube/">minikube</a></code>, I decided to setup my own cluster, using Kubeadm, WeaveNet, and MetalLB.</p><h3 id="setting-up-kubernetes">Setting up Kubernetes</h3><p>Kubernetes has a <a href="https://carlosrdrz.es/kubernetes-for-small-projects/">reputation</a> for being difficult to setup: you might’ve heard of the complicated multi-step process from the <a href="https://github.com/kelseyhightower/kubernetes-the-hard-way">Kubernetes the Hard Way</a>tutorial.</p><p>That reputation is no longer accurate: Kubernetes developers have automated almost every step into a very easy-to-use setup script called <code>kubeadm</code>.</p><p>Unfortunately, because Kubernetes is so flexible, there’s still a few steps that the <a href="https://kubernetes.io/docs/setup/independent/create-cluster-kubeadm/">tutorial on using </a><code><a href="https://kubernetes.io/docs/setup/independent/create-cluster-kubeadm/">kubeadm</a></code> doesn't cover, so I had to figure out which network and load balancer to use myself.</p><p>Here’s what I ended up running.</p><p>First I had to disable Swap on each node:</p><pre><code>root@dora:~# swapoff -a
To start using your cluster, you need to run the following as a regular user:
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
https://kubernetes.io/docs/concepts/cluster-administration/addons/
You can now join any number of machines by running the following on each node as root:
kind: Service
apiVersion: v1
metadata:
name: samba
labels:
app: samba
spec:
ports:
- port: 445
protocol: TCP
targetPort: 445
selector:
app: samba
type: LoadBalancer
---</code></pre><p>This <a href="https://kubernetes.io/docs/concepts/services-networking/#defining-a-service" rel="noopener">Service</a> tells Kubernetes to export TCP port 445 from our Samba containers to the load balancer.</p><pre><code class="language-yml">apiVersion: apps/v1
kind: Deployment
metadata:
name: samba
labels:
app: samba
spec:
selector:
matchLabels:
app: samba
replicas: 1
template:
metadata:
labels:
app: samba
spec:
containers:
- image: 127.0.0.1:5000/samba:latest
name: samba
ports:
- containerPort: 445
stdin: true</code></pre><p>This Deployment object tells Kubernetes to run my container and export a port for the Service to handle.</p><p>Note the <code>replicas: 1</code> — that's how many instances of the container I want to run.</p><p>I can deploy this service to Kubernetes using <code>kubectl apply</code>:</p><pre><code>zhuowei@dora:~/Documents/docker$ kubectl apply -f kubernetes-samba.yaml
service/samba configured
deployment.apps/samba configured</code></pre><p>and, after rebooting my virtual machine a few times, the Deployment finally started working:</p><pre><code>zhuowei@dora:~/Documents/docker$ kubectl get pods
NAME             READY STATUS  RESTARTS AGE
samba-57945b8895-dfzgl 1/1   Running 0  52m
zhuowei@dora:~/Documents/docker$ kubectl get service samba
NAME  TYPE   CLUSTER-IP     EXTERNAL-IP  PORT(S)       AGE
samba LoadBalancer 10.108.157.165 10.133.7.200 445:30246/TCP 91m</code></pre><p>My service is now available at the External-IP assigned by MetalLB:</p><pre><code>zhuowei@dora:~$ smbclient \\\\10.133.7.200\\workdir -U %
WARNING: The "syslog" option is deprecated
Try "help" to get a list of possible commands.
smb: \&gt; ls
.                         D        0  Fri Oct  5 12:14:43 2018
..                        D        0  Sun Oct  7 22:09:49 2018
hello.txt                 N       13  Fri Oct  5 11:17:34 2018
102685624 blocks of size 1024. 72252576 blocks available
smb: \&gt;</code></pre><h3 id="adding-another-node-1">Adding another node</h3><p>Adding another node in a Kubernetes cluster is much easier: I just had to run the command given by <code>kubeadm</code> on the new machine:</p><pre><code>zhuowei@davy:~$ sudo kubeadm join 10.133.7.100:6443 --token abcdefghijklmnopqrstuvw --discovery-token-ca-cert-hash sha256:abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijkl
(snip...)
This node has joined the cluster:* Certificate signing request was sent to apiserver and a response was received.
* The Kubelet was informed of the new secure connection details.
root@davy:~# systemctl restart kubelet.service</code></pre><p>The other tweak is for the Docker registry: since the new node can’t access my private registry on the master node, I decided to do a terrible hack and share the registry from my master node to the new machine using <code>ssh</code>:</p><pre><code>zhuowei@davy:~$ ssh dora.local -L 5000:localhost:5000</code></pre><p>This forwards port 5000 from the master node, <code>dora</code> (which runs my Docker registry) to localhost, where Kubernetes can find it on this machine.</p><p>In actual production, one would probably host the Docker registry on a separate machine, so all nodes can access it.</p><h3 id="scaling-up-the-application">Scaling up the application</h3><p>With the second machine setup, I modified my original Deployment to add another instance of the app:</p><pre><code>replicas: 2</code></pre><p>After rebooting both the master and the worker a few times, the new instance of my app finally exited <code>CreatingContainer</code> status and started to run:</p><pre><code>zhuowei@dora:~/Documents/docker$ kubectl get pods
NAME             READY STATUS  RESTARTS AGE
samba-57945b8895-dfzgl 1/1   Running 0  62m
samba-57945b8895-qhrtl 1/1   Running 0  12m</code></pre><h3 id="testing-load-balancing-1">Testing Load Balancing</h3><p>I used the same procedure to open 1000 connections to Samba running on Kubernetes. The result is interesting.</p><p>Master:</p><pre><code>zhuowei@dora$ ps -ef|grep smbd|wc
492 5411 41315</code></pre><p>Worker:</p><pre><code>zhuowei@davy:~$ ps -ef|grep smbd|wc
518 5697 43499</code></pre><p>Kubernetes/MetalLB also balanced the load across the two machines, but the master machine got slightly fewer connections than the worker machine. I wonder why.</p><p>Anyways, this shows that I finally managed to setup Kubernetes after a bunch of detours. When I saw the containers working, I felt like <a href="http://www.girlgeniusonline.com/comic.php?date=20071126" rel="noopener">this guy</a>.</p><h2 id="comparison-and-conclusion">Comparison and conclusion</h2><p><strong>Features common to both</strong>: Both can manage containers and intelligently load balance requests across the same TCP application across two different virtual machines. Both have good documentation for initial setup.</p><p><strong>Docker Swarm’s strengths</strong>: simple setup with no configuration needed, tight integration with Docker.</p><p><strong>Kubernetes’ strengths</strong>: flexible components, many available resources and add-ons.</p><p>Kubernetes vs Docker Swarm is a tradeoff between simplicity and flexibility.</p><p>I found it easier to setup Docker Swarm, but I can’t just, for example, swap out the load balancer for another component — there’s no way to configure it: I would have to <a href="https://docs.docker.com/engine/swarm/ingress/#using-the-routing-mesh">disable it all together</a>.</p><p>On Kubernetes, finding the right setup took me a while thanks to the daunting amount of choices, but in exchange, I can swap out parts of my cluster as needed, and I can easily install add-ons, such as a <a href="https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/">fancy dashboard</a>.</p><p>If you just want to try Kubernetes without all this setup, I suggest using <code><a href="https://kubernetes.io/docs/setup/minikube/">minikube</a></code>, which offers a prebuilt Kubernetes cluster virtual machine, no setup needed.</p><p>Finally, I’m impressed that both engines supported raw TCP services: other infrastructure-as-a-service providers such as <a href="https://www.heroku.com/">Heroku</a> or <a href="https://glitch.com/">Glitch</a> only supports HTTP(s) website hosting. The availability of TCP services means that one can deploy one’s database servers, cache servers, and even Minecraft servers using the same tools to deploy web applications, making container orchestration management a very useful skill.</p><p>In conclusion, if I were building a cluster, I would use Docker Swarm. If I were paying someone <em><em>else</em></em> to build a cluster for me, I would ask for Kubernetes.</p><h2 id="what-i-learned">What I learned</h2><ul><li>How to work with Docker containers</li><li>How to setup a two-node Docker Swarm cluster</li><li>How to setup a two-node Kubernetes cluster, and which choices would work for a TCP-based app</li><li>How to deploy an app to Docker Swarm and Kubernetes</li><li>How to fix anything by rebooting a computer enough times, like I’m still using Windows 98</li><li>Kubernetes and Docker Swarm aren’t as intimidating as they sound</li></ul><h2 id="image-credits">Image Credits</h2><ul><li><a href="https://www.docker.com/legal/brand-guidelines" rel="noopener">Docker logo: used with permission.</a></li><li><a href="https://github.com/kubernetes/kubernetes/blob/master/logo/usage_guidelines.md" rel="noopener">Kubernetes logo: used with permission.</a></li><li><a href="https://github.com/webdog/octicons-png/blob/master/black/device-desktop.png" rel="noopener">Desktop icon from GitHub Octicons</a>.</li></ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
