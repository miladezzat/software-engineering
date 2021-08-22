---
card: "https://cdn-media-1.freecodecamp.org/images/1*JTk6iVMiZCQCr8duiaKlHQ.png"
tags: [Data Science]
description: "by Mayank Tripathi"
author: "Milad E. Fahmy"
title: "How to process textual data using TF-IDF in Python"
created: "2021-08-16T15:41:06+02:00"
modified: "2021-08-16T15:41:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-data-science tag-python tag-tech tag-programming tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to process textual data using TF-IDF in Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*JTk6iVMiZCQCr8duiaKlHQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*JTk6iVMiZCQCr8duiaKlHQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*JTk6iVMiZCQCr8duiaKlHQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*JTk6iVMiZCQCr8duiaKlHQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*JTk6iVMiZCQCr8duiaKlHQ.png" alt="How to process textual data using TF-IDF in Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
def fit(self, X, y=None):
"""Learn the idf vector (global term weights)
Parameters
----------
X : sparse matrix, [n_samples, n_features]
a matrix of term/token counts
"""
if not sp.issparse(X):
X = sp.csc_matrix(X)
if self.use_idf:
n_samples, n_features = X.shape
df = _document_frequency(X)
# perform idf smoothing if required
df += int(self.smooth_idf)
n_samples += int(self.smooth_idf)
# log+1 instead of log makes sure terms with zero idf don't get
# suppressed entirely.
idf = np.log(float(n_samples) / df) + 1.0
self._idf_diag = sp.spdiags(idf, diags=0, m=n_features,
n=n_features, format='csr')
return self
def transform(self, X, copy=True):
"""Transform a count matrix to a tf or tf-idf representation
Parameters
----------
X : sparse matrix, [n_samples, n_features]
a matrix of term/token counts
copy : boolean, default True
Whether to copy X and operate on the copy or perform in-place
operations.
Returns
-------
vectors : sparse matrix, [n_samples, n_features]
"""
if hasattr(X, 'dtype') and np.issubdtype(X.dtype, np.floating):
# preserve float family dtype
X = sp.csr_matrix(X, copy=copy)
else:
# convert counts or binary occurrences to floats
X = sp.csr_matrix(X, dtype=np.float64, copy=copy)
n_samples, n_features = X.shape
if self.sublinear_tf:
np.log(X.data, X.data)
X.data += 1
if self.use_idf:
check_is_fitted(self, '_idf_diag', 'idf vector is not fitted')
expected_n_features = self._idf_diag.shape[0]
if n_features != expected_n_features:
raise ValueError("Input has n_features=%d while the model"
" has been trained with n_features=%d" % (
n_features, expected_n_features))
# *= doesn't work
X = X * self._idf_diag
if self.norm:
X = normalize(X, norm=self.norm, copy=False)
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
