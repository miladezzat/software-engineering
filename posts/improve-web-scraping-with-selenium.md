---
card: "/images/default.jpg"
tags: [Web Scraping]
description: "When you re scraping data from the web with Python, Selenium "
author: "Milad E. Fahmy"
title: "How to Use Selenium and Python to Scrape Websites More Effectively"
created: "2021-08-16T15:34:22+02:00"
modified: "2021-08-16T15:34:22+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-scraping tag-python tag-selenium ">
<header class="post-full-header">
<h1 class="post-full-title">How to Use Selenium and Python to Scrape Websites More Effectively</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/05/web-scraping-articl-image.jpg 300w,
/news/content/images/size/w600/2021/05/web-scraping-articl-image.jpg 600w,
/news/content/images/size/w1000/2021/05/web-scraping-articl-image.jpg 1000w,
/news/content/images/size/w2000/2021/05/web-scraping-articl-image.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/05/web-scraping-articl-image.jpg" alt="How to Use Selenium and Python to Scrape Websites More Effectively">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>When you're scraping data from the web with Python, Selenium will often come up as an helpful tool to use. It was originally designed for automated testing, but its scraping capabilities are impressive, too.</p><p>This is because Selenium can do things that other libraries or frameworks often can't when collecting data: accessing JavaScript-rendered content and interacting with the page in basically any way you want.</p><p>This article is about the second capability – interacting with the page however you want. It will cover three helpful topics to give you more options when you're interact with a website in order to access its content. </p><p>And although this article focuses on web scraping, that’s only one use case for these tips as you can implement them for any tasks where Selenium is useful.</p><p>Before we start, an important disclaimer: before beginning to scrape any website, make sure to check if the website allows you to do so. Also, it's a good practice to configure your scraper in order not to overload the website's server as we don't intend to cause any harm. </p><p>Scraping is fun and a great way to gather data, but it needs to be done in a correct legal, manner.</p><h2 id="how-to-mark-check-boxes">How to Mark Check Boxes</h2><p>The process of scraping data doesn't involve only scraping the data. Sometimes you need to navigate through the website to get to where the data is. And when going through the website, you may need to fill out some forms, click on one or two buttons, and mark a check box, for example.</p><p>Marking a check box may seem like a very simple action, but it can be a little tricky. That’s because you might think that all you need to do is to locate the element using its Xpath and then use the <code>click</code> method to click on it.</p><p>And, yes, depending on the website that may be the case – but it’s not a rule. For most websites, Selenium won’t recognize a checkbox as a clickable button. So when you try to click on it, an exception will be raised.</p><p>The workaround for this is to locate the element and use an ActionChains object to move the cursor to the check box and then click on it. This is the code to do that:</p><pre><code class="language-python">check_box = driver.find_element_by_xpath('Xpath')
actions = webdriver.ActionChains(driver)
actions.move_to_element_with_offset(check_box, -5, 5).perform()
actions.click().perform()</code></pre><p>The <code>move_to_element_with_offset</code> method will move the mouse by an offset of a specific element on the page, relative to its top-left corner. You need to inform the element and the distance you want the cursor to move away from the top-left corner.</p><p>The goal is to have the cursor around the middle of the check box. To find the appropriate distance for the move, execute the code with the <code>size</code> attribute of the element before running the complete code.</p><pre><code class="language-python">check_box = driver.find_element_by_xpath('Xpath')
print(check_box.size)</code></pre><p>The output should look like this:</p><p><code>{'height': 10, 'width': 10}</code></p><p>And then, after the cursor has been moved, you just need to perform a click and the check box will be marked.</p><h2 id="how-to-handle-frames">How to Handle Frames</h2><p>You may have found yourself in a situation where you just cannot make Selenium find a particular element on a webpage. No matter how you try to do it – by using the Xpath, or the class name, or whatever – you keep getting errors. </p><p>So you check over and over for errors in the code but everything seems to be just fine. So what’s wrong?</p><p>Actually, nothing is wrong. The data you want to collect or the element you want to interact with is just in another frame on the page. We use HTML frames to divide the page into sections that each load a different part of the content.</p><p>To fix the problem, you only need to switch to the correct frame before you try to interact with the page again. If you know the name of the frame, just do this:</p><pre><code class="language-python">driver.switch_to.frame('mainIframe')</code></pre><p>You can also use the index of the frame to make the switch:</p><pre><code class="language-python">driver.switch_to.frame(0)</code></pre><p>But if you don’t know the name of the frame or how many frames there are on the page, the solution is to find all the frames on the page and then print the name of each one of them. This is how it would work:</p><pre><code>frames = driver.find_elements_by_tag_name('iframe')
for frame in frames:
print(frame.get_attribute('name'))
</code></pre><p>To find out how many frames are on the page, just print the length of the <code>frames</code> object.</p><pre><code class="language-python">print(len(frames))</code></pre><p>And now you are free to interact with the page and collect the data you need.</p><h2 id="how-to-switch-tabs">How to Switch Tabs</h2><p>Another common situation you might face when navigating through a website to collect data is that a button automatically opens a new tag. When this happens, it’s important to know how to go from tab to tab in order to get the data you need.</p><p>Fortunately, handling tabs with Selenium is not a complex process. Actually, it’s somewhat similar to handling frames.</p><p>You can use a more rustic approach using two objects: one contains the current tab and another one contains all the tabs. Then you just have to iterate over the second one and the iterator is different from the current tab you just switch from.</p><pre><code class="language-python">current_tab = driver.current_window_handle
all_tabs = driver.window_handles
for tab in all_tabs:
if tab!= current_tab:
driver.switch_to.window(tab)</code></pre><p>But if you have more than two tabs and want to be able to access any one of them anytime you need, there's a more elegant approach – and you’ll only need to keep track of the order in which the tabs are opened.</p><p>For this approach, you don't need to know the current tab. This is because you can switch tabs just by selecting the corresponding index of the tab you want to move to in the object with all the tabs.</p><pre><code class="language-python">driver.switch_to.window(all_tabs[i])</code></pre><p>If you want to go through all the tabs at once and perform actions and collect data from each one of them, you can easily iterate over all the tabs, too.</p><pre><code class="language-python">all_tabs = driver.window_handles
for tab in all_tabs:
driver.switch_to.window(tab)</code></pre><p>However, if you’re opening more tabs to scrape data and you have a lot of links to scrape, you should be aware that you're making considerably more requests to the website than usual. This is because for each link, you’re opening two or three new tabs. </p><p>In this case, you’ll also want to insert some random pauses in your code in order not to overload the server. You'll also want to take advantage of a proxy provider, like <a href="https://infatica.io/">Infatica</a> (a company that's committed to sharing information through articles like this one) to make sure your code will keep running as long as there are pages left to scrape. </p><p>This also makes sure that you’re not getting blocked, and that you and your connection are protected.</p><h2 id="conclusion">Conclusion</h2><p>I hope these Selenium tips will help you use it and scrape more effectively. There's much more you can do, but I wanted to keep this relatively short.</p><p>If you’re interested in more content like this or if you have a question, a suggestion, or just want to be in touch, feel free to reach out. Maybe there’s a second part coming soon!</p>
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
