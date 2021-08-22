---
card: "https://cdn-media-1.freecodecamp.org/images/1*EmZW0kG4HpdoJSqqCZyiZg.png"
tags: [Data Science]
description: "Data Science. It’s been touted as the sexiest job of the 21st"
author: "Milad E. Fahmy"
title: "How to Use Data Science to Understand What Makes Wine Taste Good"
created: "2021-08-16T11:47:15+02:00"
modified: "2021-08-16T11:47:15+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-data-science tag-machine-learning tag-programming tag-technology tag-artificial-intelligence ">
<header class="post-full-header">
<h1 class="post-full-title">How to Use Data Science to Understand What Makes Wine Taste Good</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*EmZW0kG4HpdoJSqqCZyiZg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*EmZW0kG4HpdoJSqqCZyiZg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*EmZW0kG4HpdoJSqqCZyiZg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*EmZW0kG4HpdoJSqqCZyiZg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*EmZW0kG4HpdoJSqqCZyiZg.png" alt="How to Use Data Science to Understand What Makes Wine Taste Good">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
data = pd.read_csv("data/winequality-red.csv", sep=';')
# Display the first five records
display(data.head(n=5))
</code></pre>
</code></pre>
</code></pre>
# Number of wines with quality rating above 6
quality_above_6 = data.loc[(data['quality'] &gt; 6)]
n_above_6 = quality_above_6.shape[0]
# Number of wines with quality rating below 5
quality_below_5 = data.loc[(data['quality'] &lt; 5)]
n_below_5 = quality_below_5.shape[0]
# Number of wines with quality rating between 5 to 6
quality_between_5 = data.loc[(data['quality'] &gt;= 5) &amp; (data['quality'] &lt;= 6)]
n_between_5 = quality_between_5.shape[0]
# Percentage of wines with quality rating above 6
greater_percent = n_above_6*100/n_wines
# Print the results
print("Total number of wine data: {}".format(n_wines))
print("Wines with rating 7 and above: {}".format(n_above_6))
print("Wines with rating less than 5: {}".format(n_below_5))
print("Wines with rating 5 and 6: {}".format(n_between_5))
print("Percentage of wines with quality 7 and above: {:.2f}%".format(greater_percent))
# Some more additional data analysis
display(np.round(data.describe()))
</code></pre>
vs.distribution(data, "quality")
</code></pre>
</code></pre>
# display(correlation)
plt.figure(figsize=(14, 12))
heatmap = sns.heatmap(correlation, annot=True, linewidths=0, vmin=-1, cmap="RdBu_r")
</code></pre>
#Create a new dataframe containing only pH and fixed acidity columns to visualize their co-relations
fixedAcidity_pH = data[['pH', 'fixed acidity']]
#Initialize a joint-grid with the dataframe, using seaborn library
gridA = sns.JointGrid(x="fixed acidity", y="pH", data=fixedAcidity_pH, size=6)
#Draws a regression plot in the grid
gridA = gridA.plot_joint(sns.regplot, scatter_kws={"s": 10})
#Draws a distribution plot in the same grid
gridA = gridA.plot_marginals(sns.distplot)
</code></pre>
g = sns.JointGrid(x="fixed acidity", y="citric acid", data=fixedAcidity_citricAcid, size=6)
g = g.plot_joint(sns.regplot, scatter_kws={"s": 10})
g = g.plot_marginals(sns.distplot)
</code></pre>
sns.barplot(x='quality', y='volatile acidity', data=volatileAcidity_quality, ax=axs)
plt.title('quality VS volatile acidity')
plt.tight_layout()
plt.show()
plt.gcf().clear()
</code></pre>
sns.barplot(x='quality', y='alcohol', data=quality_alcohol, ax=axs)
plt.title('quality VS alcohol')
plt.tight_layout()
plt.show()
plt.gcf().clear()
</code></pre>
for feature in data.keys():
# TODO: Calculate Q1 (25th percentile of the data) for the given feature
Q1 = np.percentile(data[feature], q=25)
# TODO: Calculate Q3 (75th percentile of the data) for the given feature
Q3 = np.percentile(data[feature], q=75)
# TODO: Use the interquartile range to calculate an outlier step (1.5 times the interquartile range)
interquartile_range = Q3 - Q1
step = 1.5 * interquartile_range
# Display the outliers
print("Data points considered outliers for the feature '{}':".format(feature))
display(data[~((data[feature] &gt;= Q1 - step) &amp; (data[feature] &lt;= Q3 + step))])
# OPTIONAL: Select the indices for data points you wish to remove
outliers = []
# Remove the outliers, if any were specified
good_data = data.drop(data.index[outliers]).reset_index(drop = True)
</code></pre>
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
