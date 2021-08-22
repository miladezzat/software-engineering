---
card: "https://cdn-media-1.freecodecamp.org/images/1*0ju9JOPACF90yXSi-s2gwQ.jpeg"
tags: [Kubernetes]
description: "Why are banks paying me big bucks for something as simple as "
author: "Milad E. Fahmy"
title: "Learn Kubernetes in Under 3 Hours: A Detailed Guide to Orchestrating Containers"
created: "2021-08-16T10:14:32+02:00"
modified: "2021-08-16T10:14:32+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-kubernetes tag-docker tag-java tag-devops tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">Learn Kubernetes in Under 3 Hours: A Detailed Guide to Orchestrating Containers</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*0ju9JOPACF90yXSi-s2gwQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*0ju9JOPACF90yXSi-s2gwQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*0ju9JOPACF90yXSi-s2gwQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*0ju9JOPACF90yXSi-s2gwQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*0ju9JOPACF90yXSi-s2gwQ.jpeg" alt="Learn Kubernetes in Under 3 Hours: A Detailed Guide to Orchestrating Containers">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
fetch('http://localhost:8080/sentiment', {  // #1
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({
sentence: this.textField.getValue()})// #2
})
.then(response =&gt; response.json())
.then(data =&gt; this.setState(data));  // #3
}</code></pre><p>#1: URL at which a POST call is made. (An application should be listening for calls at that URL).</p><p>#2: The Request body sent to that application as displayed below:</p><pre><code>{
sentence: “I like yogobella!”
}</code></pre><p>#3: The response updates the component state. This triggers a re-render of the component. If we received the data, (i.e. the JSON object containing the typed sentence and the polarity) we would display the component polarityComponent because the condition would be fulfilled and we would define the component:</p><pre><code class="language-js">const polarityComponent = this.state.polarity !== undefined ?
&lt;Polarity sentence={this.state.sentence}
polarity={this.state.polarity}/&gt; :
@RestController
public class SentimentController {
@Value("${sa.logic.api.url}")    // #1
private String saLogicApiUrl;
@PostMapping("/sentiment")
public SentimentDto sentimentAnalysis(
@RequestBody SentenceDto sentenceDto)
{
RestTemplate restTemplate = new RestTemplate();
return restTemplate.postForEntity(
saLogicApiUrl + "/analyse/sentiment",    // #2
sentenceDto, SentimentDto.class)
.getBody();
}
}</code></pre><ol><li>The <strong>SentimentController</strong> has a field named saLogicApiUrl. The field get’s defined by the property <code>sa.logic.api.url</code> .</li><li>The String saLogicApiUrl is concatenated with the value “/analyse/sentiment”. Together they form the URL to make the request for Sentiment Analysis.</li></ol><p><strong>Defining the Property</strong></p><p>In Spring the default property source is <strong>application.properties.</strong> (Located in <em>sa-webapp/src/main/resources</em>). But that’s not the only means to define a property, it can be done with the earlier command as well:</p><pre><code class="language-bash">java -jar sentiment-analysis-web-0.0.1-SNAPSHOT.jar
--sa.logic.api.url=WHAT.IS.THE.SA.LOGIC.API.URL</code></pre><p>The property should be initialized with the value that defines where our Python application is running, this way we will let our Spring Web Application know where to forward messages on run time.</p><p>To make things simpler let’s decide that we will run the python application on <code>localhost:5000.</code> Lets just not forget it!</p><p>Run the below command and we are ready to move to the last service the python application.</p><pre><code>java -jar sentiment-analysis-web-0.0.1-SNAPSHOT.jar
python -m textblob.download_corpora</code></pre><h4 id="starting-the-app">Starting the app</h4><p>After using Pip to install the dependencies we are ready to start the application by executing the following command:</p><pre><code class="language-bash">python sentiment_analysis.py
* Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)</code></pre><p>This means that our application is running and listening for HTTP Requests on port 5000 on localhost.</p><h4 id="inspecting-the-code-2">Inspecting the Code</h4><p>Let’s investigate the code to understand what is happening in the <strong>SA Logic </strong>python application.</p><pre><code class="language-py">from textblob import TextBlob
from flask import Flask, request, jsonify
app = Flask(__name__)                             #1
@app.route("/analyse/sentiment", methods=['POST'])#2
def analyse_sentiment():
sentence = request.get_json()['sentence']     #3
polarity = TextBlob(sentence).sentences[0].polarity #4
return jsonify(                               #5
sentence=sentence,
polarity=polarity
)
if __name__ == '__main__':
COPY build /usr/share/nginx/html</code></pre><p>Isn’t it amazing, it’s even humanly readable, let’s recapitulate:</p><p>Start from the nginx image. (Whatever the guys did over there). Copy the <strong>build </strong>directory to the <strong>nginx/html</strong> directory in the image. That’s it!</p><p>You may be wondering, how did I know where to copy the build files? i.e. <code>/usr/share/nginx/html</code>. Quite simple: It was documented in the nginx <a href="https://hub.docker.com/_/nginx/" rel="noopener">image</a> in Docker Hub.</p><h4 id="building-and-pushing-the-container">Building and Pushing the container</h4><p>Before we can push our image, we need a Container Registry to host our images. Docker Hub is a free cloud container service that we will use for this demonstration. You have three tasks before continuing:</p><ol><li><a href="https://www.docker.com/community-edition" rel="noopener">Install Docker CE</a></li><li>Register to the Docker Hub.</li><li>Login by executing the below command in your Terminal:</li></ol><pre><code class="language-bash">docker login -u="$DOCKER_USERNAME" -p="$DOCKER_PASSWORD"</code></pre><p>After completing the above tasks navigate to the directory <strong>sa-frontend.</strong> Then execute the below command (replace $DOCKER_USER_ID with your docker hub username. For e.g. rinormaloku/sentiment-analysis-frontend)</p><pre><code>docker build -f Dockerfile -t $DOCKER_USER_ID/sentiment-analysis-frontend .</code></pre><p>We can drop <code>-f Dockerfile</code> because we are already in the directory containing the Dockerfile.</p><p>To push the image, use the docker push command:</p><pre><code>docker push $DOCKER_USER_ID/sentiment-analysis-frontend</code></pre><p>Verify in your docker hub repository that the image was pushed successfully.</p><h4 id="running-the-container">Running the container</h4><p>Now the image in <code>$DOCKER_USER_ID/sentiment-analysis-frontend</code> can be pulled and run by anyone:</p><pre><code class="language-bash">docker pull $DOCKER_USER_ID/sentiment-analysis-frontend
|   .dockerignore
|   Dockerfile
|   package.json
|   README.md
+---build
+---node_modules
+---public
\---src</code></pre><p>But the only data we need is in the <strong>build</strong> folder. Uploading anything else will be a waste of time. We can improve our build time by dropping the other directories. That’s where <code>.dockerignore</code> comes into play. For you it will be familiar because it’s like <code>.gitignore</code>, i.e. add all directories that you want to ignore in the <code>.dockerignore</code> file, as shown below:</p><pre><code class="language-bash">node_modules
src
public</code></pre><p>The <code>.dockerignore</code> file should be in the same folder as the Dockerfile. Now building the image takes only seconds.</p><p>Let’s continue with the Java Application.</p><h4 id="building-the-container-image-for-the-java-application">Building the container image for the Java Application</h4><p>Guess what! You learned almost everything about creating container images! That’s why this part is extremely short.</p><p>Open the Dockerfile in <strong>sa-webapp</strong>, and you will find only two new keywords:</p><pre><code class="language-docker">ENV SA_LOGIC_API_URL http://localhost:5000
…
NAME STATUS    ROLES     AGE       VERSION
kind: Pod                                      # 1
metadata:
name: sa-frontend                            # 2
spec:                                          # 3
containers:
- image: rinormaloku/sentiment-analysis-frontend # 4
name: sa-frontend                              # 5
ports:
- containerPort: 80                          # 6</code></pre><ol><li><strong>Kind: </strong>specifies the kind of the Kubernetes Resource that we want to create. In our case, a <strong>Pod</strong>.</li><li><strong>Name:</strong> defines the name for the resource. We named it <strong>sa-frontend</strong>.</li><li><strong>Spec </strong>is the object that defines the desired state for the resource. The most important property of a Pods Spec is the Array of containers.</li><li><strong>Image </strong>is the container image we want to start in this pod.</li><li><strong>Name</strong> is the unique name for a container in a pod.</li><li><strong>Container Port:</strong>is the port at which the container is listening. This is just an indicator for the reader (dropping the port doesn’t restrict access).</li></ol><h3 id="creating-the-sa-frontend-pod">Creating the SA Frontend pod</h3><p>You can find the file for the above pod definition in <code>resource-manifests/<strong>sa-frontend-pod.yaml.</strong></code> You either navigate in your terminal to that folder or you would have to provide the full location in the command line. Then execute the command:</p><pre><code class="language-yaml">kubectl create -f sa-frontend-pod.yaml
pod "sa-frontend" created</code></pre><p>To check if the Pod is running execute the following command:</p><pre><code class="language-bash">kubectl get pods
NAME                    READY     STATUS    RESTARTS   AGE
sa-frontend             1/1       Running   0          7s</code></pre><p>If it is still in <strong>ContainerCreating</strong> you can execute the above command with the argument <code>--watch</code> to update the information when the Pod is in Running State.</p><h4 id="accessing-the-application-externally">Accessing the application externally</h4><p>To access the application externally we create a Kubernetes resource of type <strong>Service</strong>, that will be our next article, which is the proper implementation, but for quick debugging we have another option, and that is port-forwarding:</p><pre><code class="language-bash">kubectl port-forward sa-frontend 88:80
Forwarding from 127.0.0.1:88 -&gt; 80</code></pre><p>Open your browser in <strong>127.0.0.1:88</strong> and you will get to the react application.</p><h4 id="the-wrong-way-to-scale-up">The wrong way to scale up</h4><p>We said that one of the Kubernetes main features was scalability, to prove this let’s get another pod running. To do so create another pod resource, with the following definition:</p><pre><code class="language-yaml">apiVersion: v1
kind: Pod
metadata:
name: sa-frontend2# The only change
spec:
containers:
- image: rinormaloku/sentiment-analysis-frontend
name: sa-frontend
ports:
- containerPort: 80</code></pre><p>Create the new pod by executing the following command:</p><pre><code class="language-bash">kubectl create -f sa-frontend-pod2.yaml
pod "sa-frontend2" created</code></pre><p>Verify that the second pod is running by executing:</p><pre><code class="language-bash">kubectl get pods
NAME                    READY     STATUS    RESTARTS   AGE
sa-frontend             1/1       Running   0          7s
Warning: kubectl apply should be used on resource created by either kubectl create --save-config or kubectl apply
pod "sa-frontend" configured
kubectl apply -f sa-frontend-pod2.yaml
Warning: kubectl apply should be used on resource created by either kubectl create --save-config or kubectl apply
pod "sa-frontend2" configured</code></pre><p>We got a warning (apply instead of create, roger that). In the second line, we see that the pods “sa-frontend” and “sa-frontend2” are configured. We can verify that the pods were labeled by filtering the pods that we want to display:</p><pre><code class="language-bash">kubectl get pod -l app=sa-frontend
NAME     READY     STATUS    RESTARTS   AGE
sa-frontend    1/1 Running   0          2h
kind: Service        # 1
metadata:
name: sa-frontend-lb
spec:
type: LoadBalancer # 2
ports:
- port: 80         # 3
protocol: TCP    # 4
targetPort: 80   # 5
selector:          # 6
app: sa-frontend # 7</code></pre><ol><li><strong>Kind: </strong>A service.</li><li><strong>Type: </strong>Specification type, we choose LoadBalancer because we want to balance the load between the pods.</li><li><strong>Port: </strong>Specifies the port in which the service gets requests.</li><li><strong>Protocol:</strong> Defines the communication.</li><li><strong>TargetPort:</strong> The port at which incomming requests are forwarded.</li><li><strong>Selector:</strong> Object that contains properties for selecting pods.</li><li><strong>app:</strong> sa-frontend Defines which pods to target, only pods that are labeled with “app: sa-frontend”</li></ol><p>To create the service execute the following command:</p><pre><code>kubectl create -f service-sa-frontend-lb.yaml
service "sa-frontend-lb" created</code></pre><p>You can check out the state of the service by executing the following command:</p><pre><code>kubectl get svc
NAME       TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
sa-frontend-lb   LoadBalancer   10.101.244.40   &lt;pending&gt;     80:30708/TCP   7m</code></pre><p>The <strong>External-IP </strong>is in pending state (and don’t wait, as it’s not going to change). This is only because we are using <strong>Minikube</strong>. If we would have executed this in a cloud provider like Azure or GCP, we would get a Public IP, which makes our services worldwide accessible.</p><p>Despite that, Minikube doesn’t let us hanging it provides a useful command for local debugging, execute the following command:</p><pre><code class="language-bash">minikube service sa-frontend-lb
kind: Deployment                                    # 1
metadata:
name: sa-frontend
spec:
selector:                                         # 2
matchLabels:
app: sa-frontend
replicas: 2                                       # 3
minReadySeconds: 15
strategy:
type: RollingUpdate                             # 4
rollingUpdate:
maxUnavailable: 1                                   # 5
maxSurge: 1                                         # 6
template:                                         # 7
metadata:
labels:
app: sa-frontend                                  # 8
spec:
containers:
- image: rinormaloku/sentiment-analysis-frontend
imagePullPolicy: Always                         # 9
name: sa-frontend
ports:
- containerPort: 80</code></pre><ol><li><strong>Kind: </strong>A deployment.</li><li><strong>Selector: </strong>Pods matching the selector will be taken under the management of this deployment.</li><li><strong>Replicas </strong>is a property of the deployments Spec object that defines how many pods we want to run. So only 2.</li><li><strong>Type </strong>specifies the strategy used in this deployment when moving from the current version to the next. The strategy <strong>RollingUpdate</strong> ensures Zero Downtime deployments.</li><li><strong>MaxUnavailable </strong>is a property of the RollingUpdate object that specifies the maximum unavailable pods allowed (compared to the desired state) when doing a rolling update. For our deployment which has 2 replicas this means that after terminating one Pod, we would still have one pod running, this way keeping our application accessible.</li><li><strong>MaxSurge </strong>is another property of the RollingUpdate object that defines the maximum amount of pods added to a deployment (compared to the desired state). For our deployment, this means that when moving to a new version we can add one pod, which adds up to 3 pods at the same time.</li><li><strong>Template: </strong>specifies the pod template that the Deployment will use to create new pods. Most likely the resemblance with Pods struck you immediately.</li><li><code><strong>app:</strong> sa-frontend</code> the label to use for the pods created by this template.</li><li><strong>ImagePullPolicy</strong> when set to <strong>Always</strong>, it<strong> </strong>will pull the container images on each redeployment.</li></ol><p>Honestly, that wall of text got even me confused, let’s just get started with the example:</p><pre><code class="language-bash">kubectl apply -f sa-frontend-deployment.yaml
deployment "sa-frontend" created</code></pre><p>As always let’s verify that everything went as planned:</p><pre><code class="language-bash">kubectl get pods
NAME                     READY     STATUS    RESTARTS   AGE
sa-frontend              1/1       Running   0          2d
sa-frontend-5d5987746c-ml6m4   1/1 Running   0          1m
sa-frontend-5d5987746c-mzsgg   1/1 Running   0          1m
sa-frontend2             1/1       Running   0          2d</code></pre><p>We got 4 running pods, two pods created by the Deployment and the other two are the ones we created manually. Delete the ones we created manually using the command <code>kubectl delete pod &lt;pod-name&gt;</code>.</p><p><strong>Exercise:</strong> Delete one of the pods of the deployment as well and see what happens. Think for the reason before reading the explanation below.</p><p><strong>Explanation: </strong>Deleting one pod made the Deployment notice that the current state (1 pod running) is different from the desired state (2 pods running) so it started another pod.</p><p>So what was so good about Deployments, besides keeping the desired state? Let’s get started with the benefits.</p><h4 id="benefit-1-rolling-a-zero-downtime-deployment">Benefit #1: Rolling a Zero-Downtime deployment</h4><p>Our Product manager came to us with a new requirement, our clients want to have a green button in the frontend. The developers shipped their code and provided us with the only thing we need, the container image <code>rinormaloku/sentiment-analysis-frontend:green</code>. Now it’s our turn, we the DevOps have to roll a Zero-Downtime deployment, Will the hard work pay off? Let’s see that!</p><p>Edit the file <code>sa-frontend-deployment.yaml</code> by changing the container image to refer to the new image: <code>rinormaloku/sentiment-analysis-frontend:green</code>. Save the changes as <code>sa-frontend-deployment-green.yaml</code> and execute the following command:</p><pre><code class="language-bash">kubectl apply -f sa-frontend-deployment-green.yaml --record
deployment "sa-frontend" configured</code></pre><p>We can check the status of the rollout using the following command:</p><pre><code class="language-bash">kubectl rollout status deployment sa-frontend
Waiting for rollout to finish: 1 old replicas are pending termination...
Waiting for rollout to finish: 1 old replicas are pending termination...
Waiting for rollout to finish: 1 old replicas are pending termination...
Waiting for rollout to finish: 1 old replicas are pending termination...
Waiting for rollout to finish: 1 old replicas are pending termination...
Waiting for rollout to finish: 1 of 2 updated replicas are available...
deployments "sa-frontend"
REVISION  CHANGE-CAUSE
1   &lt;none&gt;
2   kubectl.exe apply --filename=sa-frontend-deployment-green.yaml --record=true</code></pre><p>You take a short look at the previous deployments. “The last version is buggy, meanwhile the previous version worked perfectly?” — you ask the Product Manager.</p><p>“Yes, are you even listening to me!” — screams the product manager.</p><p>You ignore him, you know what you have to do, you start typing:</p><pre><code class="language-bash">kubectl rollout undo deployment sa-frontend --to-revision=1
deployment "sa-logic" created</code></pre><p>The deployment SA-Logic created three pods. (Running the container of our python application). It labeled them with <code><strong>app:</strong> sa-logic.</code> This labeling enables us to target them using a selector from the SA-Logic service. Please take time to open the file <code>sa-logic-deployment.yaml</code> and check out the contents.</p><p>It’s the same concepts used all over again, let’s jump right into the next resource: <strong>the service SA-Logic</strong>.</p><h4 id="service-sa-logic">Service SA Logic</h4><p>Lets elaborate why we need this Service. Our Java application (running in the pods of SA — WebApp deployment) depends on the sentiment analysis done by the Python Application. But now, in contrast to when we were running everything locally, we don’t have one single python application listening to one port, we have 2 pods and if needed we could have more.</p><p>That’s why we need a <strong>Service</strong> that “acts as the entry point to a set of pods that provide the same functional service”. This means that we can use the Service SA-Logic as the entry point to all the SA-Logic pods.</p><p>Let’s do that:</p><pre><code>kubectl apply -f service-sa-logic.yaml
imagePullPolicy: Always
name: sa-web-app
env:
- name: SA_LOGIC_API_URL
value: "http://sa-logic"
ports:
- containerPort: 8080</code></pre><p>The first thing that interests us is what does the <strong>env </strong>property do? And we surmise that it is declaring the environment variable SA_LOGIC_API_URL with the value “<a href="http://sa-logic/" rel="noopener">http://sa-logic</a>” inside our pods. But why are we initializing it to <a href="http://sa-logic/" rel="noopener"><strong>http://sa-logic</strong></a>, what is <strong>sa-logic</strong>?</p><p>Lets get introduced to <strong>kube-dns</strong>.</p><h4 id="kube-dns">KUBE-DNS</h4><p>Kubernetes has a special pod the <strong>kube-dns</strong>. And by default, all Pods use it as the DNS Server. One important property of <strong>kube-dns </strong>is that it creates a DNS record for each created service.</p><p>This means that when we created the service <strong>sa-logic </strong>it got an IP address. Its name was added as a record (in conjunction with the IP) in kube-dns. This enables all the pods to translate the <strong>sa-logic </strong>to the SA-Logic services IP address.</p><p>Good, now we can continue with:</p><h4 id="deployment-sa-webapp-continued-">Deployment SA WebApp (continued)</h4><p>Execute the command:</p><pre><code class="language-bash">kubectl apply -f sa-web-app-deployment.yaml --record
deployment "sa-web-app" created</code></pre><p>Done. We are left to expose the SA-WebApp pods externally using a LoadBalancer Service. This enables our react application to make http requests to the service which acts as an entry point to the SA-WebApp pods.</p><h4 id="service-sa-webapp">Service SA-WebApp</h4><p>Open the file <code>service-sa-web-app-lb.yaml</code>, as you can see everything is familiar to you.<br>So without further adoexecute the command:</p><pre><code class="language-bash">kubectl apply -f service-sa-web-app-lb.yaml
service "sa-web-app-lb" created</code></pre><p>The architecture is complete. But we have one single dissonance. When we deployed the SA-Frontend pods our container image was pointing to our SA-WebApp in <a href="http://localhost:8080/sentiment" rel="noopener">http://localhost:8080/sentiment</a>. But now we need to update it to point to the IP Address of the SA-WebApp Loadbalancer. (Which acts as an entry point to the SA-WebApp pods).</p><p>Fixing this dissonance provides us with the opportunity to succinctly encompass once more everything from code to deployment. (It’s even more effective if you do this alone instead of following the guide below). Let’s get started:</p><ol><li>Get the SA-WebApp Loadbalancer IP by executing the following command:</li></ol><pre><code class="language-bash">minikube service list
|-------------|----------------------|-----------------------------|
|  NAMESPACE  |   NAME         |             URL             |
|-------------|----------------------|-----------------------------|
| default     | kubernetes     | No node port                |
| default     | sa-frontend-lb | http://192.168.99.100:30708 |
| default     | sa-logic       | No node port                |
| default     | sa-web-app-lb  | http://192.168.99.100:31691 |
| kube-system | kube-dns       | No node port                |
| kube-system | kubernetes-dashboard | http://192.168.99.100:30000 |
|-------------|----------------------|-----------------------------|</code></pre><p>2. Use the SA-WebApp LoadBalancer IP in the file <code>sa-frontend/src/App.js</code>, as shown below:</p><pre><code class="language-js">analyzeSentence() {
fetch('http://192.168.99.100:31691/sentiment', { /* shortened for brevity */})
.then(response =&gt; response.json())
.then(data =&gt; this.setState(data));
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
