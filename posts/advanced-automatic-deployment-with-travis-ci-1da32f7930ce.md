---
card: "https://cdn-media-1.freecodecamp.org/images/1*zuVag9ipdXYb-A4ojT_FxQ.png"
tags: [Web Development]
description: "by Amir Off"
author: "Milad E. Fahmy"
title: "How to set up advanced automatic deployment with Travis CI"
created: "2021-08-16T10:11:11+02:00"
modified: "2021-08-16T10:11:11+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-devops tag-javascript tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to set up advanced automatic deployment with Travis CI</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*zuVag9ipdXYb-A4ojT_FxQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*zuVag9ipdXYb-A4ojT_FxQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*zuVag9ipdXYb-A4ojT_FxQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*zuVag9ipdXYb-A4ojT_FxQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*zuVag9ipdXYb-A4ojT_FxQ.png" alt="How to set up advanced automatic deployment with Travis CI">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
language: node_js
// Using the lastest version of Node.js
node_js:
- node
// Script to install dependencies
before_script:
- npm install -g --silent
// The actual build script for Gulp.js
script:
- gulp build --prod
// Deploying to hosting server via FTP
after_script:
const minimist = require('minimist');
const args = minimist(process.argv.slice(2));
gulp.task('deploy', () =&gt; {
const remotePath = '/amiroffme/';
const conn = ftp.create({
host: 'ftp.amiroff.me',
user: args.user,
password: args.password
});
console.log('FTP connection successful!');
gulp.src('build/**/*.*')
.pipe(conn.dest(remotePath));
gulp.task('build', ['html', 'images', 'sass', 'js', (args.prod ? 'production' : 'development')], () =&gt; {
// Print build info
console.log(packageFile.name + ' "' + packageFile.description + '" v' + packageFile.version);
});
// Runs only for production build
gulp.task('production', () =&gt; {
console.log('This is a production build');
console.log('Please run the following script for deployment:');
console.log('gulp deploy --user $FTP_USER --password $FTP_PASSWORD');
});
// Runs only for development build
gulp.task('development', () =&gt; {
browsersync(browserSyncConfig);
console.log('This is a development build');
console.log('File changes will be watched and trigger a page reload');
gulp.watch(html.watch, ['html', browsersync.reload]);
gulp.watch(images.src, ['images', browsersync.reload]);
gulp.watch(css.watch, ['sass', browsersync.reload]);
gulp.watch(js.src, ['js', browsersync.reload]);
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
