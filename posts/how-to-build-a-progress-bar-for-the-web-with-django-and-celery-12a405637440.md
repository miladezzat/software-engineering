---
card: "https://cdn-media-1.freecodecamp.org/images/0*nTguNDWHvIC8Tjg5.jpg"
tags: [Python]
description: "Progress bars are one of the most common, familiar UI compone"
author: "Milad E. Fahmy"
title: "How to build a progress bar for the web with Django and Celery"
created: "2021-08-16T15:40:54+02:00"
modified: "2021-08-16T15:40:54+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-django tag-software-development tag-open-source tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a progress bar for the web with Django and Celery</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*nTguNDWHvIC8Tjg5.jpg 300w,
https://cdn-media-1.freecodecamp.org/images/0*nTguNDWHvIC8Tjg5.jpg 600w,
https://cdn-media-1.freecodecamp.org/images/0*nTguNDWHvIC8Tjg5.jpg 1000w,
https://cdn-media-1.freecodecamp.org/images/0*nTguNDWHvIC8Tjg5.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*nTguNDWHvIC8Tjg5.jpg" alt="How to build a progress bar for the web with Django and Celery">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
progressBarElement.style.backgroundColor = '#68a9ef';
progressBarElement.style.width = progress.percent + "%";
progressBarMessageElement.innerHTML = progress.current + ' of ' + progress.total + ' processed.';
}
var trigger = document.getElementById('progress-bar-trigger');
trigger.addEventListener('click', function(e) {
var barWrapper = document.getElementById('progress-wrapper');
barWrapper.style.display = 'inherit'; // show bar
var bar = document.getElementById("progress-bar");
var barMessage = document.getElementById("progress-bar-message");
for (var i = 0; i &lt; 11; i++) {
setTimeout(updateProgress, 500 * i, bar, barMessage, {
percent: 10 * i,
current: 10 * i,
total: 100
})
}
})</code></pre><h3 id="the-backend">The Backend</h3><p>The backend is equally simple. This is essentially just some code that’s going to execute on your server to do the work you want to track. This would typically be written in whatever application stack you’re using (in this case Python and Django). Here’s an overly simplified version of what the backend might look like:</p><pre><code class="language-python">def do_work(self, list_of_work):
for work_item in list_of_work:
do_work_item(work_item)
return 'work is complete'</code></pre><h3 id="doing-the-work">Doing the Work</h3><p>Okay so we’ve got our front-end progress bar, and we’ve got our work doer. What’s next?</p><p>Well, we haven’t actually said anything about how this work will get kicked off. So let’s start there.</p><h4 id="the-wrong-way-doing-it-in-the-web-application">The Wrong Way: Doing it in the Web Application</h4><p>In a typical ajax workflow this would work the following way:</p><ol><li>Front-end initiates request to web application</li><li>Web application does work in the request</li><li>Web application returns a response when done</li></ol><p>In a Django view, that would look something like this:</p><pre><code class="language-python">def my_view(request):
do_work()
# this decorator is all that's needed to tell celery this is a
# worker task
@task
def do_work(self, list_of_work):
for work_item in list_of_work:
do_work_item(work_item)
return 'work is complete'</code></pre><h4 id="annotating-a-work-function-to-be-called-from-celery"><em>Annotating a work function to be called from Celery</em></h4><p>Similarly, calling the function asynchronously from the Django client is similarly straightforward:</p><pre><code class="language-python">def my_view(request):
# the .delay() call here is all that's needed
# to convert the function to be called asynchronously
do_work.delay()
# we can't say 'work done' here anymore
# because all we did was kick it off
return HttpResponse('work kicked off!')</code></pre><h4 id="calling-the-work-function-asynchronously"><em>Calling the work function asynchronously</em></h4><p>With just a few extra lines of code, we’ve converted our work to an asynchronous architecture! As long as you’ve got your worker and broker processes configured and running, this should <em>just work</em>.</p><h3 id="tracking-the-progress">Tracking the Progress</h3><p>Alrighty, so we’ve finally got our task running in the background. But now we want to track progress on it. So how does that work, exactly?</p><p>We’ll again need to do a few things. First we’ll need a way of tracking progress within the worker job. Then we’ll need to communicate that progress all the way back to our front-end so we can update the progress bar on the page. Once again, this ends up being quite a bit more complicated than you might think!</p><h4 id="using-an-observer-object-to-track-progress-in-the-worker">Using an Observer Object to Track Progress in the Worker</h4><p>Readers of the seminal <a href="https://www.amazon.com/gp/product/0201633612/" rel="noopener">Gang of Four’s Design Patterns</a> might be familiar with the <a href="https://en.wikipedia.org/wiki/Observer_pattern" rel="noopener">observer pattern</a>. The typical observer pattern includes a <strong>subject</strong> which tracks state, as well as one or more <strong>observers</strong> that do something in response to state. In our progress scenario, the subject is the worker process/function that is doing the work, and the observer is the thing that is going to track the progress.</p><p>There are many ways to link the subject and the observer, but the simplest is to just pass the observer in as an argument to the function doing the work.</p><p>That looks something like this:</p><pre><code>@task
def do_work(self, list_of_work, progress_observer):
total_work_to_do = len(list_of_work)
for i, work_item in enumerate(list_of_work):
do_work_item(work_item)
# tell the progress observer how many out of the total items
# we have processed
progress_observer.set_progress(i, total_work_to_do)
return 'work is complete'</code></pre><h4 id="using-an-observer-to-monitor-work-progress"><em>Using an observer to monitor work progress</em></h4><p>Now all we have to do is pass in a valid <code>progress_observer</code> and voilà, our progress will be tracked!</p><h3 id="getting-progress-back-to-the-client">Getting Progress Back to the Client</h3><p>You might be thinking <em>“wait a minute… you just called a function called set_progress, you didn’t actually do anything!”</em></p><p>True! So how does this <em>actually</em> work?</p><p>Remember — our goal is to get this progress information all the way up to the webpage so we can show our users what’s going on. But the progress tracking is happening all the way in the worker process! We are now facing a similar problem we had with handing off the asynchronous task earlier.</p><p>Thankfully, Celery also provides a mechanism for passing messages <strong>back</strong> to the client. This is done via a mechanism called <a href="http://docs.celeryproject.org/en/latest/userguide/tasks.html#result-backends" rel="noopener">result backends</a>, and, like <a href="http://docs.celeryproject.org/en/latest/getting-started/brokers/" rel="noopener">brokers</a>, you have the option of several different backends. Both RabbitMQ and Redis can be used as brokers and result backends and are reasonable choices, though there is technically no coupling between the broker and the result backend.</p><p>Anyway, like brokers, the details typically don’t come up unless you’re doing something pretty advanced. But the point is that you stick the result from the task <em>somewhere</em> (with the task’s unique ID), and then other processes can get information about tasks by ID by asking the backend for it.</p><p>In Celery, this is abstracted quite well via the <code>state</code> associated with the task. The <code>state</code> allows us to set an overall status, as well as attach arbitrary metadata to the task. This is a perfect place to store our current and total progress.</p><h4 id="setting-the-state">Setting the state</h4><pre><code class="language-python">task.update_state(
state=PROGRESS_STATE,
meta={'current': current, 'total': total}
)</code></pre><h4 id="reading-the-state">Reading the state</h4><pre><code class="language-python">from celery.result import AsyncResult
result = AsyncResult(task_id)
print(result.state) # will be set to PROGRESS_STATE print(result.info) # metadata will be here</code></pre><h3 id="getting-progress-updates-to-the-front-end">Getting Progress Updates to the Front End</h3><p>Now that we can get progress updates out of the workers / tasks and into any other client, the final step is to just get that information to the front end and display it to the user.</p><p>If you want to get fancy, you can use something like websockets to do this in real time. But the simplest version is to just poll a URL every so often to check on progress. We can just serve the progress information up as JSON via a Django view and process and render it client-side.</p><p>Django view:</p><pre><code class="language-python">def get_progress(request, task_id):
result = AsyncResult(task_id)
response_data = {
'state': result.state,
'details': self.result.info,
}
return HttpResponse(
json.dumps(response_data),
content_type='application/json'
)</code></pre><p><strong>Django view to return progress as JSON.</strong></p><p>JavaScript code:</p><pre><code class="language-python">function updateProgress (progressUrl) {
fetch(progressUrl).then(function(response) {
response.json().then(function(data) {
// update the appropriate UI components
setProgress(data.state, data.details);
// and do it again every half second
setTimeout(updateProgress, 500, progressUrl);
});
});
}</code></pre><p><strong>Javascript code to poll for progress and update the UI.</strong></p><h3 id="putting-it-all-together">Putting it All Together</h3><p>This has been quite a lot of detail on what is — on its face — a very simple and everyday part of our lives with computers! I hope you’ve learned something.</p><p>If you need a simple way to make progress bars for you Django/celery applications you can check out <a href="https://github.com/czue/celery-progress" rel="noopener">celery-progress</a> — a library I wrote to help make all of this a bit easier. There is also <a href="https://buildwithdjango.com/projects/celery-progress/" rel="noopener">a demo of it in action on Build with Django</a>.</p><p>Thanks for reading! If you’d like to get notified whenever I publish content like this on building things with Python and Django, please sign up to receive updates below!</p><p><em>Originally published at <a href="https://buildwithdjango.com/blog/post/celery-progress-bars/" rel="noopener">buildwithdjango.com</a>.</em></p>
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
