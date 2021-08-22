---
card: "https://cdn-media-1.freecodecamp.org/images/1*VZf19QtcEYsMaA912V0pkQ.jpeg"
tags: [Kubernetes]
description: "Kubernetes is one of the most exciting technologies in the wo"
author: "Milad E. Fahmy"
title: "A friendly introduction to Kubernetes"
created: "2021-08-16T11:40:58+02:00"
modified: "2021-08-16T11:40:58+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-kubernetes tag-docker tag-technology tag-containers tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">A friendly introduction to Kubernetes</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*VZf19QtcEYsMaA912V0pkQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*VZf19QtcEYsMaA912V0pkQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*VZf19QtcEYsMaA912V0pkQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*VZf19QtcEYsMaA912V0pkQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*VZf19QtcEYsMaA912V0pkQ.jpeg" alt="A friendly introduction to Kubernetes">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
Starting local Kubernetes v1.10.0 cluster...
Starting VM...
Getting VM IP address...
Moving files into cluster...
Setting up certs...
Connecting to cluster...
Setting up kubeconfig...
Starting cluster components...
Kubectl is now configured to use the cluster.
Loading cached images from config file.</code></pre><p>To verify that your setup was successful, run <code>kubectl version</code> to check for the Kubernetes version running on your machine.</p><pre><code>$ kubectl version
Client Version: version.Info{Major:"1", Minor:"9", GitVersion:"v1.9.1", GitCommit:"3a1c9449a956b6026f075fa3134ff92f7d55f812", GitTreeState:"clean", BuildDate:"2018-01-04T20:00:41Z", GoVersion:"go1.9.2", Compiler:"gc", Platform:"darwin/amd64"}
kind: Service
metadata:
name: result
spec:
type: NodePort
ports:
- name: "result-service"
port: 5001
targetPort: 80
nodePort: 31001
selector:
app: result</code></pre><p>A Deployment file is used to define the desired state of your application, such as the number of replicas that should be running at any given point of time. Below is the resulting deployment file from the voting app.</p><pre><code>apiVersion: extensions/v1beta1
kind: Deployment
metadata:
name: result
spec:
replicas: 1
template:
metadata:
labels:
app: result
spec:
containers:
- image: dockersamples/examplevotingapp_result:before
name: result</code></pre><p>Time to create the service and deployment objects — piece of cake.</p><pre><code>$ kubectl create -f k8s-specifications/
deployment "db" created
service "db" created
deployment "redis" created
service "redis" created
deployment "result" created
service "result" created
deployment "vote" created
service "vote" created
deployment "worker" created</code></pre><p>There you go! Your app has successfully been deployed to the single node cluster, and you can list the running pods and services.</p><pre><code>$ kubectl get pods
NAME                READY     STATUS    RESTARTS   AGE
db-86b99d968f-s5pv7 1/1       Running   0          1m
redis-659469b86b-hrxqs    1/1 Running   0          1m
result-59f4f867b8-cthvc   1/1 Running   0          1m
vote-54f5f76b95-zgwrm     1/1 Running   0          1m
worker-56578c48f8-h7zvs   1/1 Running   0          1m
$ kubectl get svc
NAME   TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
db     ClusterIP   10.109.241.59    &lt;none&gt;        5432/TCP         2m
kubernetes   ClusterIP   10.96.0.1  &lt;none&gt;        443/TCP          23m
redis  ClusterIP   10.102.242.148   &lt;none&gt;        6379/TCP         2m
result NodePort    10.106.7.255     &lt;none&gt;        5001:31001/TCP   2m
$ minikube start
# Get the Minikube IP
$ minikube ip</code></pre><p>Version Info:</p><pre><code>$ kubectl version       #Get kubectl version
$ kubectl cluster-info  #Get cluster info</code></pre><p>Creating Objects:</p><pre><code>$ kubectl create -f ./file.yml
$ kubectl create -f ./file1.yml -f ./file2.yaml
$ kubectl create -f ./dir
$ kubectl create -f http://www.fpaste.org/279276/48569091/raw/</code></pre><p>Viewing and finding resources:</p><pre><code># List all services in the namespace
$ kubectl get services
# List all pods in all namespaces
$ kubectl get pods --all-namespaces
# List all pods in the namespace, with more details
$ kubectl get pods -o wide
# List a particular replication controller
$ kubectl get rc &lt;rc-name&gt;
# List all pods with a label env=production
$ kubectl get pods -l env=production</code></pre><p>List services sorted by name:</p><pre><code>$ kubectl get services --sort-by=.metadata.name</code></pre><p>Modifying and Deleting resources:</p><pre><code>$ kubectl label pods &lt;pod-name&gt; new-label=awesome
$ kubectl annotate pods &lt;pod-name&gt; icon-url=http://goo.gl/XXBTWq
$ kubectl delete pod pingredis-XXXXX</code></pre><p>Scaling up and down:</p><pre><code>$ kubectl scale --replicas=3 deployment nginx</code></pre><p>Interacting with running Pods:</p><pre><code>$ kubectl logs &lt;pod-name&gt;
# Runs a tailf log output
$ kubectl logs -f &lt;pod-name&gt;
# Run pod as interactive shell
$ kubectl run -i --tty busybox --image=busybox -- sh
# Attach to Running Container
$ kubectl attach &lt;podname&gt; -i
# Forward port of Pod to your local machine
$ kubectl port-forward &lt;podname&gt; &lt;local-and-remote-port&gt;
# Forward port to service
$ kubectl port-forward &lt;servicename&gt; &lt;port&gt;
# Run command in existing pod (1 container case)
$ kubectl exec &lt;pod-name&gt; -- ls /
# Run command in existing pod (multi-container case)
$ kubectl exec &lt;pod-name&gt; -c &lt;container-name&gt; -- ls /</code></pre><p>DNS Lookups:</p><pre><code>$ kubectl exec busybox -- nslookup kubernetes
$ kubectl exec busybox -- nslookup kubernetes.default
$ kubectl exec busybox -- nslookup kubernetes.default.svc.cluster.local</code></pre><p>Create and expose a deployment:</p><pre><code>$ kubectl run nginx --image=nginx:1.9.12
$ kubectl expose deployment nginx --port=80 --type=LoadBalancer</code></pre><h3 id="summary">Summary</h3><p>Kubernetes is super exciting, cool, and most likely the future of container orchestration. The tech is great, and it is worth investing your time in if you are interested in containers or simply a fan like me. Kubernetes is a very powerful container orchestration engine, it can be used to amplify cloud containerisation strategy as it is designed to automate deploying, scaling, and operating containers.</p><p>The sunny side is that Kubernetes readily integrates with any cloud portfolio, be it public, private, hybrid or multi-cloud. Cloud vendors like AWS and Google provide managed Kubernetes services like <a href="https://aws.amazon.com/eks/" rel="noopener">Elastic Container Service for Kubernetes (EKS)</a> and <a href="https://cloud.google.com/kubernetes-engine/" rel="noopener">Google Kubernetes Engine (GKE)</a>. The dark side is that Kubernetes is significantly more complex than Docker’s very own container orchestration engine Docker Swarm.</p><p>All the information here was just for wetting your feet. If you feel like taking a dive in the awesome Kubernetes ocean, here you go.</p><p><a href="https://github.com/ramitsurana/awesome-kubernetes" rel="noopener"><strong>ramitsurana/awesome-kubernetes</strong></a><br><a href="https://github.com/ramitsurana/awesome-kubernetes" rel="noopener"><em>awesome-kubernetes - A curated list for awesome kubernetes sources :ship::tada:</em>github.com</a></p><p>After you emerge from the deep dive, you might as well want to get hands on Kubernetes. Take Kubernetes for a ride or let it take you for one, in the Play with Kubernetes labs.</p><p><a href="http://labs.play-with-k8s.com/" rel="noopener"><strong>Play with Kubernetes</strong></a><br><a href="http://labs.play-with-k8s.com/" rel="noopener"><em>Play with Kubernetes is a labs site provided by Docker and created by Tutorius. Play with Kubernetes is a playground…</em>labs.play-with-k8s.com</a></p><p>I hope this article helped in the understanding of Kubernetes. I’d love to hear about how you use Kubernetes in your projects. Clap if it increased your knowledge, and help it reach more people.</p>
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
