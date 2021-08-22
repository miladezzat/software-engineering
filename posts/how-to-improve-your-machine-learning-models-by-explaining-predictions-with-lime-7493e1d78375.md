---
card: "https://cdn-media-1.freecodecamp.org/images/1*LJj4hmOES-c0DYj4Kwg89A.jpeg"
tags: [Machine Learning]
description: "by Déborah Mesquita"
author: "Milad E. Fahmy"
title: "How to improve your machine learning models by explaining predictions with LIME"
created: "2021-08-16T11:37:20+02:00"
modified: "2021-08-16T11:37:20+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-machine-learning tag-data-science tag-artificial-intelligence tag-technology tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to improve your machine learning models by explaining predictions with LIME</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*LJj4hmOES-c0DYj4Kwg89A.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*LJj4hmOES-c0DYj4Kwg89A.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*LJj4hmOES-c0DYj4Kwg89A.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*LJj4hmOES-c0DYj4Kwg89A.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*LJj4hmOES-c0DYj4Kwg89A.jpeg" alt="How to improve your machine learning models by explaining predictions with LIME">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
"dataset_reader": {
"type": "az_papers"
},
"train_data_path": "../../data/AZ_distribution/train/",
"model": {
"type": "sentence_classifier",
"text_field_embedder": {
"tokens": {
"type": "embedding",
"pretrained_file": "https://s3-us-west-2.amazonaws.com/allennlp/datasets/glove/glove.6B.100d.txt.gz",
"embedding_dim": 100,
"trainable": false
}
},
"title_encoder": {
"type": "lstm",
"bidirectional": true,
"input_size": 100,
"hidden_size": 100,
"num_layers": 1,
"dropout": 0.2
},
"sentence_encoder": {
"type": "lstm",
"bidirectional": true,
"input_size": 100,
"hidden_size": 100,
"num_layers": 1,
"dropout": 0.2
},
"classifier_feedforward": {
"input_dim": 400,
"num_layers": 2,
"hidden_dims": [200, 7],
"activations": ["relu", "linear"],
"dropout": [0.2, 0.0]
}
},
"iterator": {
"type": "bucket",
"sorting_keys": [["sentence", "num_tokens"], ["title", "num_tokens"]],
"batch_size": 64
},
"trainer": {
"num_epochs": 40,
"patience": 10,
"cuda_device": -1,
"grad_clipping": 5.0,
"validation_metric": "+accuracy",
"optimizer": {
"type": "adagrad"
}
}
}</code></pre><p>This probably doesn't make any sense if you're new to AllenNLP. The goal of this article is to show how to use LIME, so we'll not dive deep into it. I try to explain more about AllenNLP on this <a href="https://medium.com/swlh/deep-learning-for-text-made-easy-with-allennlp-62bc79d41f31" rel="noopener">other article</a>. And, of course, <a href="https://github.com/dmesquita/explaining_predictions_with_LIME" rel="noopener">the whole code to train the model is here</a>.</p><p>The dataset is the original <a href="https://www.cl.cam.ac.uk/~sht25/AZ_corpus.html" rel="noopener">Argumentative Zoning corpus [AZ corpus]</a>. It consists of 80 AZ-annotated conference articles in computational linguistics, originally drawn from arXiv. Each sentence has one of these labels:</p><ul><li>BKG: General scientific background</li><li>OTH: Neutral descriptions of other people’s work</li><li>OWN: Neutral descriptions of the own, new work</li><li>AIM: Statements of the particular aim of the current paper</li><li>TXT: Statements of textual organization of the current paper (in chapter 1, we introduce…)</li><li>CTR: Contrastive or comparative statements about other work; explicit mention of weaknesses of other work</li><li>BAS: Statements that own work is based on other work</li></ul><p>To train the model we use this command:</p><pre><code class="language-bash">python3 run.py train experiments/the_file_presented_before.json
--include-package newsgroups.dataset_readers
--include-package newsgroups.models
predict_function = lambda x: np.array([predictor.predict_json(json.loads('{"title": "Incremental Interpretation of Categorial Grammar","sentence":"'+s+'"}'))['class_probabilities'] for s in x])</code></pre><p>Then we import LIME, set the <code>class_names</code>, and call the<code> explain_instance</code> method:</p><pre><code class="language-py">from lime.lime_text import LimeTextExplainer
explainer = LimeTextExplainer(class_names=['OWN', 'OTH', 'BKG', 'CTR', 'AIM', 'TXT', 'BAS'])
row = json.loads('{"title": "Incremental Interpretation of Categorial Grammar", "sentence": "In processing a sentence using a lexicalised formalism we do not have to look at the grammar as a whole , but only at the grammatical information indexed by each of the words ."}')
exp = explainer.explain_instance(row["sentence"], predict_fn, num_features=10,top_labels=2)
#Show the results in notebook
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
