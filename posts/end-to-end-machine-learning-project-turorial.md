---
card: "/images/default.jpg"
tags: [Machine Learning]
description: "There s one question I always get asked regarding Data Scienc"
author: "Milad E. Fahmy"
title: "How to Develop an End-to-End Machine Learning Project and Deploy it to Heroku with Flask"
created: "2021-08-15T23:32:03+02:00"
modified: "2021-08-15T23:32:03+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-machine-learning tag-data-science tag-heroku tag-flask ">
<header class="post-full-header">
<h1 class="post-full-title">How to Develop an End-to-End Machine Learning Project and Deploy it to Heroku with Flask</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/07/main.png 300w,
/news/content/images/size/w600/2020/07/main.png 600w,
/news/content/images/size/w1000/2020/07/main.png 1000w,
/news/content/images/size/w2000/2020/07/main.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/07/main.png" alt="How to Develop an End-to-End Machine Learning Project and Deploy it to Heroku with Flask">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
</code></pre>
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
</code></pre>
cols = ['MPG','Cylinders','Displacement','Horsepower','Weight',
'Acceleration', 'Model Year', 'Origin']
# reading the .data file using pandas
df = pd.read_csv('./auto-mpg.data', names=cols, na_values = "?",
comment = '\t',
sep= " ",
skipinitialspace=True)
#making a copy of the dataframe
data = df.copy()
</code></pre>
data.info()
</code></pre>
data.isnull().sum()
</code></pre>
data.describe()
##looking at horsepower box plot
sns.boxplot(x=data['Horsepower'])
</code></pre>
median = data['Horsepower'].median()
data['Horsepower'] = data['Horsepower'].fillna(median)
data.info()
</code></pre>
data["Cylinders"].value_counts() / len(data)
data['Origin'].value_counts()
</code></pre>
sns.pairplot(data[["MPG", "Cylinders", "Displacement", "Weight", "Horsepower"]], diag_kind="kde")
</code></pre>
split = StratifiedShuffleSplit(n_splits=1, test_size=0.2, random_state=42)
for train_index, test_index in split.split(data, data["Cylinders"]):
strat_train_set = data.loc[train_index]
strat_test_set = data.loc[test_index]
</code></pre>
strat_train_set['Cylinders'].value_counts() / len(strat_train_set)
</code></pre>
</code></pre>
columntrain_set['Origin'] = train_set['Origin'].map({1: 'India', 2: 'USA', 3 : 'Germany'})
train_set.sample(10)
</code></pre>
train_set = pd.get_dummies(train_set, prefix='', prefix_sep='')
train_set.head()
</code></pre>
## testing new variables by checking their correlation w.r.t. MPG
data['displacement_on_power'] = data['Displacement'] / data['Horsepower']
data['weight_on_cylinder'] = data['Weight'] / data['Cylinders']
data['acceleration_on_power'] = data['Acceleration'] / data['Horsepower']
data['acceleration_on_cyl'] = data['Acceleration'] / data['Cylinders']
corr_matrix = data.corr()
corr_matrix['MPG'].sort_values(ascending=False)
</code></pre>
from sklearn.preprocessing import OneHotEncoder
cat_encoder = OneHotEncoder()
data_cat_1hot = cat_encoder.fit_transform(data_cat)
data_cat_1hot   # returns a sparse matrix
data_cat_1hot.toarray()[:5]
</code></pre>
from sklearn.impute import SimpleImputer
imputer = SimpleImputer(strategy="median")imputer.fit(num_data)
</code></pre>
acc_ix, hpower_ix, cyl_ix = 4, 2, 0
##custom class inheriting the BaseEstimator and TransformerMixin
class CustomAttrAdder(BaseEstimator, TransformerMixin):
def __init__(self, acc_on_power=True):
self.acc_on_power = acc_on_power  # new optional variable
def fit(self, X, y=None):
return self  # nothing else to do
def transform(self, X):
acc_on_cyl = X[:, acc_ix] / X[:, cyl_ix] # required new variable
if self.acc_on_power:
acc_on_power = X[:, acc_ix] / X[:, hpower_ix]
return np.c_[X, acc_on_power, acc_on_cyl] # returns a 2D array
return np.c_[X, acc_on_cyl]
attr_adder = CustomAttrAdder(acc_on_power=True)
data_tr_extra_attrs = attr_adder.transform(data_tr.values)
data_tr_extra_attrs[0]
</code></pre>
'''
Function to process numerical transformations
Argument:
data: original dataframe
Returns:
num_attrs: numerical dataframe
num_pipeline: numerical pipeline object
'''
numerics = ['float64', 'int64']
num_attrs = data.select_dtypes(include=numerics)
num_pipeline = Pipeline([
('imputer', SimpleImputer(strategy="median")),
('attrs_adder', CustomAttrAdder()),
('std_scaler', StandardScaler()),
])
return num_attrs, num_pipeline
</code></pre>
'''
Complete transformation pipeline for both
nuerical and categorical data.
Argument:
data: original dataframe
Returns:
prepared_data: transformed data, ready to use
'''
cat_attrs = ["Origin"]
num_attrs, num_pipeline = num_pipeline_transformer(data)
full_pipeline = ColumnTransformer([
("num", num_pipeline, list(num_attrs)),
("cat", OneHotEncoder(), cat_attrs),
])
prepared_data = full_pipeline.fit_transform(data)
return prepared_data
</code></pre>
def preprocess_origin_cols(df):
df["Origin"] = df["Origin"].map({1: "India", 2: "USA", 3: "Germany"})
return df
</code></pre>
preprocessed_df = preprocess_origin_cols(data)
prepared_data = pipeline_transformer(preprocessed_df)prepared_data
</code></pre>
from sklearn.linear_model import LinearRegression
lin_reg = LinearRegression()
lin_reg.fit(prepared_data, data_labels)
##testing the predictions with first 5 rows
sample_data = data.iloc[:5]
sample_labels = data_labels.iloc[:5]
sample_data_prepared = pipeline_transformer(sample_data)
print("Prediction of samples: ", lin_reg.predict(sample_data_prepared))
</code></pre>
mpg_predictions = lin_reg.predict(prepared_data)
lin_mse = mean_squared_error(data_labels, mpg_predictions)
lin_rmse = np.sqrt(lin_mse)lin_rmse
</code></pre>
scores = cross_val_score(tree_reg,
prepared_data,
data_labels,
scoring="neg_mean_squared_error",
cv = 10)
tree_reg_rmse_scores = np.sqrt(-scores)
</code></pre>
from sklearn.model_selection import GridSearchCV
param_grid = [
{'n_estimators': [3, 10, 30], 'max_features': [2, 4, 6, 8]},
{'bootstrap': [False], 'n_estimators': [3, 10], 'max_features': [2, 3, 4]},
]
forest_reg = RandomForestRegressor()
grid_search = GridSearchCV(forest_reg, param_grid,
scoring='neg_mean_squared_error',
return_train_score=True,
cv=10,
)
grid_search.fit(prepared_data, data_labels)
</code></pre>
feature_importances = grid_search.best_estimator_.feature_importances_
extra_attrs = ["acc_on_power", "acc_on_cyl"]
numerics = ['float64', 'int64']
num_attrs = list(data.select_dtypes(include=numerics))
attrs = num_attrs + extra_attrs
sorted(zip(attrs, feature_importances), reverse=True)
</code></pre>
final_model = grid_search.best_estimator_
##segregating the target variable from test set
X_test = strat_test_set.drop("MPG", axis=1)
y_test = strat_test_set["MPG"].copy()
##preprocessing the test data origin column
X_test_preprocessed = preprocess_origin_cols(X_test)
##preparing the data with final transformation
X_test_prepared = pipeline_transformer(X_test_preprocessed)
##making final predictions
final_predictions = final_model.predict(X_test_prepared)
final_mse = mean_squared_error(y_test, final_predictions)
final_rmse = np.sqrt(final_mse)
</code></pre>
##dump the model into a file
with open("model.bin", 'wb') as f_out:
pickle.dump(final_model, f_out) # write final_model in .bin file
f_out.close()  # close the file
</code></pre>
vehicle_config = {
'Cylinders': [4, 6, 8],
'Displacement': [155.0, 160.0, 165.5],
'Horsepower': [93.0, 130.0, 98.0],
'Weight': [2500.0, 3150.0, 2600.0],
'Acceleration': [15.0, 14.0, 16.0],
'Model Year': [81, 80, 78],
'Origin': [3, 2, 1]
}
</code></pre>
with open('model.bin', 'rb') as f_in:
model = pickle.load(f_in)
</code></pre>
predict_mpg(vehicle_config, model)
##output: array([34.83333333, 18.50666667, 20.56333333])
</code></pre>
numpy
sklearn
flask
gunicorn
seaborn
</code></pre>
</code></pre>
app = Flask('app')
</code></pre>
def test():
return 'Pinging Model Application!!'
</code></pre>
app.run(debug=True, host=’0.0.0.0', port=9696)
</code></pre>
</code></pre>
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
from sklearn.base import BaseEstimator, TransformerMixin
from sklearn.impute import SimpleImputer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.compose import ColumnTransformer
##functions
def preprocess_origin_cols(df):
df["Origin"] = df["Origin"].map({1: "India", 2: "USA", 3: "Germany"})
return df
acc_ix, hpower_ix, cyl_ix = 3, 5, 1
class CustomAttrAdder(BaseEstimator, TransformerMixin):
def __init__(self, acc_on_power=True): # no *args or **kargs
self.acc_on_power = acc_on_power
def fit(self, X, y=None):
return self  # nothing else to do
def transform(self, X):
acc_on_cyl = X[:, acc_ix] / X[:, cyl_ix]
if self.acc_on_power:
acc_on_power = X[:, acc_ix] / X[:, hpower_ix]
return np.c_[X, acc_on_power, acc_on_cyl]
return np.c_[X, acc_on_cyl]
def num_pipeline_transformer(data):
numerics = ['float64', 'int64']
num_attrs = data.select_dtypes(include=numerics)
num_pipeline = Pipeline([
('imputer', SimpleImputer(strategy="median")),
('attrs_adder', CustomAttrAdder()),
('std_scaler', StandardScaler()),
])
return num_attrs, num_pipeline
def pipeline_transformer(data):
cat_attrs = ["Origin"]
num_attrs, num_pipeline = num_pipeline_transformer(data)
full_pipeline = ColumnTransformer([
("num", num_pipeline, list(num_attrs)),
("cat", OneHotEncoder(), cat_attrs),
])
full_pipeline.fit_transform(data)
return full_pipeline
def predict_mpg(config, model):
if type(config) == dict:
df = pd.DataFrame(config)
else:
df = config
preproc_df = preprocess_origin_cols(df)
print(preproc_df)
pipeline = pipeline_transformer(preproc_df)
prepared_df = pipeline.transform(preproc_df)
print(len(prepared_df[0]))
y_pred = model.predict(prepared_df)
return y_pred
</code></pre>
from flask import Flask, request, jsonify
from model_files.ml_model import predict_mpg
</code></pre>
def predict():
vehicle = request.get_json()
print(vehicle)
with open('./model_files/model.bin', 'rb') as f_in:
model = pickle.load(f_in)
f_in.close()
predictions = predict_mpg(vehicle, model)
result = {
'mpg_prediction': list(predictions)
}
return jsonify(result)
</code></pre>
url = “http://localhost:9696/predict"
r = requests.post(url, json = vehicle_config)
r.text.strip()
##output: '{"mpg_predictions":[34.60333333333333,19.32333333333333,14.893333333333333]}'
</code></pre>
</code></pre>
from main import app
if __name__ == “__main__”:
app.run()
</code></pre>
$ git add .
$ git commit -m "Initial Commit"
</code></pre>
</code></pre>
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
