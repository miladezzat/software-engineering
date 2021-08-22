---
card: "https://cdn-media-1.freecodecamp.org/images/0*APjNMu9aZ4xsCz1y"
tags: [Microservices]
description: "by Ignacio Salazar Williams"
author: "Milad E. Fahmy"
title: "Our journey into the world of Microservices — and what we learned from it."
created: "2021-08-16T14:39:02+02:00"
modified: "2021-08-16T14:39:02+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-microservices tag-agile-development tag-tech tag-life-lessons tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Our journey into the world of Microservices — and what we learned from it.</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*APjNMu9aZ4xsCz1y 300w,
https://cdn-media-1.freecodecamp.org/images/0*APjNMu9aZ4xsCz1y 600w,
https://cdn-media-1.freecodecamp.org/images/0*APjNMu9aZ4xsCz1y 1000w,
https://cdn-media-1.freecodecamp.org/images/0*APjNMu9aZ4xsCz1y 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*APjNMu9aZ4xsCz1y" alt="Our journey into the world of Microservices — and what we learned from it.">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
├── app --The whole MS is in here
│   ├── controllers --All the controllers of the domain
│   │   ├── dummies
│   │   │  └── ** All the dummies for each controller **
│   │   ├── xsl
│   │   │   └── ** All xsl configuration for each controller **
│   │   ├── Controller1.js
│   │   ├── Controller2.js
│   │   ├── Controller3.js
│   │   ├── Controller4.js
│   │   ├── Controller5.js
│   │   └── **Literally 20 more controllers**
│   ├── functions --All the functions of the MS
│   │   ├── function1.js
│   │   ├── function2.js
│   │   ├── function3.js
│   │   └── function4.js
│   ├── properties --All the properties of the MS
│   │   ├── propertie1.js
│   │   └── propertie2.js
│   ├── routes --All the routes of the MS
│   │   ├── routes_useSecurity.js
│   │   └── routes_withoutSecurity.js
│   ├── services --Extra services that were consumed
│   │   ├── service1.js
│   │   └── service2.js
│   └── xsl
│└── **A bunch of XSL to do transformations**
├── config --"Global" configurations
│   ├── configSOAP.js
│   ├── configMS.js
│   ├── environments.js
│   ├── logging.js
│   ├── userForBussinessA.js
│   └── userForBussinessB.js
├── package.json
├── README.md
├── test--All the tests
│   ├── UnitTesting
│   │   └── Controllers
│   │ └── ** All the 25 tests in theory **
│   └── PerformanceTest
│ ├── csv_development.txt
│ ├── csv_QA.txt
│ ├── csv_production.txt
│ ├── performance1.jmx
│ └── performance2.jmx
├── server.js --Express Server
├── serverKey.keytab
├── sonarlint.json
├── encryptor
├── ** Around 10 more useless files **
├── config
│   ├── artillery.js
│   ├── config.js
│   ├── develpment.csv
│   ├── processorArtillery.js
│   ├── production.csv
│   └── qa.csv
├── index.js
├── package.json
├── package-lock.json
├── README.md
├── service
│   ├── getLoans --The operation
│   │   ├── getLoans.config.json --Configuration of the resource
│   │   ├── getLoans.contract.js --Contract test
│   │   ├── getLoans.controller.js --Controller
│   │   ├── getLoans.performance.json --Performance test config
│   │   ├── getLoans.scheme.js --Scheme validator
│   │   ├── getLoans.spec.js --Unit Tests
│   │   └── Util --Local functions
│   │ ├── trimmer.js
│   │ └── requestHandler.js
│   ├── postLoans
│   │   ├── postLoans.config.json
│   │   ├── postLoans.contract.js
│   │   ├── postLoans.controller.js
│   │   ├── postLoans.performance.json
│   │   ├── postLoans.scheme.js
│   │   └── postLoans.spec.js
│   └── notFound
│ ├── notFound.js
│ ├── notFound.performance.json
│ └── notFound.spec.js
├── Util --Global functions
│   ├── headerValidator.js
│   ├── bodyValidator.js
│   ├── DBConnector.js
│   └── BrokerConnector.js
├── sonarlint.json
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
