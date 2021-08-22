---
card: "https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_zWAQiGmSUNnBMl6D12xi7A.jpeg"
tags: [Python]
description: "By Rocky Kev"
author: "Milad E. Fahmy"
title: "How I used Python to analyze Game of Thrones"
created: "2021-08-16T15:38:58+02:00"
modified: "2021-08-16T15:38:58+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-productivity tag-tech tag-programming tag-automation ">
<header class="post-full-header">
<h1 class="post-full-title">How I used Python to analyze Game of Thrones</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_zWAQiGmSUNnBMl6D12xi7A.jpeg 300w,
https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_zWAQiGmSUNnBMl6D12xi7A.jpeg 600w,
https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_zWAQiGmSUNnBMl6D12xi7A.jpeg 1000w,
https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_zWAQiGmSUNnBMl6D12xi7A.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_zWAQiGmSUNnBMl6D12xi7A.jpeg" alt="How I used Python to analyze Game of Thrones">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
if "http" in full_link:
Import the dataf_csv = open('winter-is-coming-2018.csv')headers = next(f_csv) f_reader = csv.reader(f_csv)file_data = list(f_reader)
# Make all blank cells into zeroes# https://stackoverflow.com/questions/2862709/replacing-empty-csv-column-values-with-a-zero
# Push the data to a dictionarytotal_score = {}
# Pass each character and their final score into total_score dictionaryfor row in file_data:  total = (int(row[4]) +     int(row[5]) +           int(row[6]) +           int(row[7]) +           int(row[8]) +           int(row[9]) )  total_score[row[0]] = total# Dictionaries aren't sortable by default, we'll have to borrow from these two classes.
# https://stackoverflow.com/questions/613183/how-do-i-sort-a-dictionary-by-valuefrom operator import itemgetterfrom collections import OrderedDictsorted_score = OrderedDict(sorted(total_score.items(), key=itemgetter(1) ,reverse=True))
# We get the name of the winner and their scorewinner = list(sorted_score)[0]
#jon snowwinner_score = sorted_score[winner] #scoreprint(winner + " with " + str(winner_score))
1# Pass each character and their final score into total_score dictionaryfor row in file_data:  total = (int(row[4]) +     int(row[5]) +           int(row[6]) +           int(row[7]) +           int(row[8]) +           int(row[9]) )  total_score[row[0]] = total
## NEW CODE
Pass each character and their final score into total_score dictionaryfor row in file_data:  total = (int(row[4]) +     int(row[5]) +           int(row[6]) +           int(row[7]) +           int(row[8]) +           int(row[9]) )
# NEW LINE - divide by how many rounds  new_total = total / int(row[2])  total_score[row[0]] = new_total
1# Pass each character and their final score into total_score dictionaryfor row in file_data:  total = (int(row[4]) +     int(row[5]) +           int(row[6]) +           int(row[7]) +           int(row[8]) +           int(row[9]) )
# NEW LINE - divide by how many rounds  new_total = total / int(row[2])  total_score[row[0]] = new_total## NEW CODE# Pass each character and their final score into total_score dictionaryfor row in file_data:
# Add IF-THEN statement  if (row[3] == 'other'):    total = (int(row[4]) +       int(row[5]) +             int(row[6]) +             int(row[7]) +             int(row[8]) +             int(row[9]) )  else:    total = 0  total_score[row[0]] = total
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
