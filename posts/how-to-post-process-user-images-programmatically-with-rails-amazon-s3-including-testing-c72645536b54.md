---
card: "https://cdn-media-1.freecodecamp.org/images/1*v1Pr428uI0vmh25_cDl-eQ.jpeg"
tags: [AWS]
description: "In our platforms, we allow our users to upload their own imag"
author: "Milad E. Fahmy"
title: "How to post-process user images programmatically with Rails & Amazon S3 (including testing)"
created: "2021-08-16T10:10:40+02:00"
modified: "2021-08-16T10:10:40+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-aws tag-ruby-on-rails tag-web-development tag-testing tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to post-process user images programmatically with Rails &amp; Amazon S3 (including testing)</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*v1Pr428uI0vmh25_cDl-eQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*v1Pr428uI0vmh25_cDl-eQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*v1Pr428uI0vmh25_cDl-eQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*v1Pr428uI0vmh25_cDl-eQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*v1Pr428uI0vmh25_cDl-eQ.jpeg" alt="How to post-process user images programmatically with Rails &amp; Amazon S3 (including testing)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h3 id="the-problem">The problem</h3><p>In our platforms, we allow our users to upload their own images for profile pictures. This results, as you might imagine, in a wide variety of image sizing, quality and formats. We display these images in various ways throughout our platforms.</p><p>For the most part, we can avoid sizing problems by manually setting sizing on the image tag. But in one very important place — emails — certain servers ignore our styling and display those images at full size: enormous.</p><p>We need a way to reformat user images programmatically. Additionally, since we’re going to be messing with the images anyway, we’d like to auto-rotate, adjust levels and colors, and generally make them as nice and as consistent as we can.</p><h3 id="considerations">Considerations</h3><ul><li>Our images are stored with Amazon’s S3 cloud storage. Fortunately Amazon offers a relatively easy-to-use API for interacting with their services.</li><li>Because our images are on S3, I thought it would be excellent to have this service as a Lambda function, triggered when a user uploads a photo. Unfortunately I could not, for the damn life of me, get anything to print in the CloudWatch console (where the logs should appear). After bashing up against this wall for a day, I decided to take it back in-house.</li><li>We host on Heroku, which offers a free and simple scheduler to run tasks. It’s not critical for us to have these images converted immediately upon upload. We can schedule a job that picks up everything new in the last 10 minutes, and convert it.</li></ul><h3 id="the-worker">The Worker</h3><p>What’s needed now is a worker we can call as frequently as Heroku will allow us (10 minutes is the shortest interval).</p><h4 id="gathering-the-right-users">Gathering the right users</h4><p>First we’ll gather all users that have images that need to be converted. We’ve been storing user images in a specific pattern in our S3 bucket that includes a <code>files</code> folder. We can just search for users whose profile pictures Regex matches in <code>files</code>:</p><pre><code>User.where(profilePictureUrl: { '$regex': %r(\/files\/) })</code></pre><p>Your mileage may vary here, search-wise: we use a Mongo database.</p><p>Of course, we will be using a different pattern for processed images. This will only pick up those who have uploaded new images since the task last ran. We’ll loop through each of these users and perform the following.</p><h4 id="setting-up-a-temporary-file">Setting up a temporary file</h4><p>We’ll need somewhere to store the image data we are going to manipulate. We can do that with a <code>tmp</code> folder. We’ll use this as a holding place for the image we want to upload to the new S3 location. We’ll name it as we’d like our final image to be named. We wanted to simplify and standardize images in our system, so we’re using the unique user id as the image name:</p><pre><code>@temp_file_location = "./tmp/#{user.id}.png"</code></pre><h4 id="getting-the-raw-image-and-saving-it-locally">Getting the raw image and saving it locally</h4><p>Now we’ll talk to our S3 bucket and get the user’s raw, giant, unformatted image:</p><pre><code>key = URI.parse(user.profilePictureUrl).path.gsub(%r(\A\/), '')
s3 = Aws::S3::Client.new
response = s3.get_object(bucket: ENV['AWS_BUCKET'], key: key)</code></pre><p>The <code>key</code> code there is taking the URL string that we’ve saved as the user’s <code>profilePictureUrl</code> and chopping off everything that’s not the end path to the picture.</p><p>For instance, <code>http://images.someimages.com/whatever/12345/image.png</code> would return <code>whatever/12345/image.png</code> from that code. That’s exactly what S3 wants from us to find the image in our bucket. Here’s the handy <code>aws-sdk</code> gem working for us with <code>get_object</code>.</p><p>Now we can call <code>response.body.read</code> to get a blob of an image (blob is the right word, though it’s above my pay grade to really understand how images are sent back-and-forth across the web). We can write that blob locally in our tmp folder:</p><pre><code>File.open(@temp_file_location, 'wb') { |file| file.write(response.body.read) }</code></pre><p>If we stop here, you’ll see you can actually open up that file in your temp folder (with the name you set above — in our case <code>&lt;user&gt;</code>.png ).</p><h4 id="process-the-image">Process the image</h4><p>Now we’ve got the image downloaded from Amazon, we can do whatever we want to it! ImageMagick is an amazing tool freely available for everybody.</p><p>We used a pared-down version for Rails called <a href="https://github.com/minimagick/minimagick" rel="noopener">MiniMagick</a>. That gem also has a great API that makes things lickety-split easy. We don’t even have to do anything special to pick up the image. The <code>@temp_file_location</code> we used earlier to save the image will work fine to bring it to MiniMagick’s attention:</p><pre><code>image = MiniMagick::Image.new(@temp_file_location)</code></pre><p>Here’s the settings for our photos, but there are <em>tons</em> of options to play with:</p><pre><code class="language-ruby">image.combine_options do |img|
img.resize '300x300&gt;'
img.auto_orient
img.auto_level
img.auto_gamma
img.sharpen '0x3'
image.format 'png'
end</code></pre><p><code>combine_options</code> is a handy way to do a bunch of stuff to an image in one block. When it exits, the image is saved again where it was before. (Image formatting can’t be done with the <code>img</code> from <code>combine_options</code>.) Now that image file in our temporary folder is all kinds of post-processed!</p><h4 id="upload-back-to-s3-and-save-as-the-user-s-new-profile-picture">Upload back to S3 and save as the user’s new profile picture</h4><p>Now all we have to do is set up another connection to S3 and make the upload:</p><pre><code class="language-ruby">Aws.config.update(
region: ENV['AWS_REGION'],
credentials: Aws::Credentials.new(ENV['AWS_ACCESS_KEY_ID'], ENV['AWS_SECRET_ACCESS_KEY']))
s3 = Aws::S3::Resource.new
name = File.basename(@temp_file_location)
bucket = ENV['AWS_BUCKET'] + '-output'
obj = s3.bucket(bucket).object(name)
obj.upload_file(@temp_file_location, acl: 'public-read')</code></pre><p>By convention with Lambda, auto tasks will send to a new bucket with the old bucket’s name plus “-output” appended, so I stuck with that. All formatted user images will be dumped into this bucket. Since we are naming the images by (unique) user ids, we are sure we’ll never overwrite one user’s picture with another.</p><p>We create a new object with the new file’s name, in the bucket of our choice, and then we <code>upload_file</code>. It has to be <code>public-read</code> if we want it visible without a lot of headache on our clients (you may choose a different security option).</p><p>If that last line returns true (which it will, if the upload goes smoothly), we can update our user record:</p><pre><code>new_url = "https://s3.amazonaws.com/#{ENV['AWS_BUCKET']}-output/#{File.basename(@temp_file_location)}"
user.update(profilePictureUrl: new_url)</code></pre><p>And that’s it! If we run this guy, we’ll auto-format and resize all user images in the system. All the original images will be in place in their old pattern (and in case anything goes wrong), and all users’ links will point to their new, formatted images.</p><h3 id="testing">Testing</h3><p>We couldn’t possibly add a new feature to a Rails application without testing, right? Absolutely. Here’s what our tests for this look like:</p><pre><code class="language-ruby">RSpec.describe Scripts::StandardizeImages, type: :service do
let!(:user) { User.make!(:student, profilePictureUrl: 'https://s3.amazonaws.com/files/some_picture.jpg') }
before do
stub_request(:get, 'https://s3.amazonaws.com/files/some_picture.jpg')
.with(
headers: {
'Accept' =&gt; '*/*',
'Accept-Encoding' =&gt; 'gzip;q=1.0,deflate;q=0.6,identity;q=0.3',
'Host' =&gt; 's3.amazonaws.com',
'User-Agent' =&gt; 'Ruby'
}
)
.to_return(status: 200, body: '', headers: {})
allow_any_instance_of(MiniMagick::Image).to receive(:combine_options).and_return(true)
allow_any_instance_of(Aws::S3::Object).to receive(:upload_file).and_return(true)
end
describe '.call' do
it 'finds all users with non-updated profile pictures, downloads, reformats and then uploads new picture' do
Scripts::StandardizeImages.call
expect(user.reload.profilePictureUrl)
.to eq "https://s3.amazonaws.com/#{ENV['AWS_BUCKET']}-output/#{user.to_param}.png"
end
end
end</code></pre><p>If you look first at the test itself, you’ll see we are testing that our user’s new profile picture URL was saved correctly. The rest of it we don’t so much care about, since we don’t actually want our test downloading anything, and we probably don’t want to spend the time for our test to be manipulating images.</p><p>But of course the code is going to try to talk to Amazon and spin up MiniMagick. Instead, we can stub those calls. Just in case this is new for you, I’ll run through this part.</p><h4 id="stubbing-calls">Stubbing calls</h4><p>If you aren’t mocking calls in your tests, you probably ought to start doing that immediately. All that’s required is the Webmock gem. You require it in your <code>rails_helper</code> and that’s about it.</p><p>When your test tries to make a call to an external source, you’ll get a message like this (I’ve hidden private keys and things with …s):</p><pre><code class="language-ruby">WebMock::NetConnectNotAllowedError:
Real HTTP connections are disabled. Unregistered request: GET https://...
You can stub this request with the following snippet:
stub_request(:get, "https://...").
with(
headers: {
'Accept'=&gt;'*/*',
'Accept-Encoding'=&gt;'',
'Authorization'=&gt;...}).
to_return(status: 200, body: "", headers: {})</code></pre><p>Just copy the <code>stub_request</code> bit and you’re well on your way to stubbing glory. You may need to return something in that <code>body</code>, depending on what you are doing with the external API call.</p><p>I found it difficult to get this stubbed response to return something my code would see as an image, so I just stubbed the <code>MiniMagick</code> function as well. This works fine because we are not seeing the output in this test anyway. You’ll have to manually test that the image is getting the proper formatting.</p><p>Alternatively, you can use <code>Aws.config[:s3] = { stub_responses: true }</code> in your test initializer or possibly on your <code>rails_helper</code> to stub all S3 requests.</p><h4 id="one-final-note-travis-ci">One final note: Travis CI</h4><p>Depending on what options you decide to apply to your image, you may find that Travis’ version of ImageMagick is not the same as yours. I tried lots of things to get Travis using the same ImageMagick as I was. In the end, I am stubbing the <code>MiniMagick</code> call, so it’s a moot point. But beware: if you don’t stub that function, you may find your CI failing because it doesn’t recognize a newer option (like <code>intensity</code>).</p><p>Thanks for reading!</p>
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
