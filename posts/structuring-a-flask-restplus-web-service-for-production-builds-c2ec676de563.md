---
card: "https://cdn-media-1.freecodecamp.org/images/1*TSbCf17bFXOYAb-l0HJ7rQ.jpeg"
tags: [Python]
description: "by Greg Obinna"
author: "Milad E. Fahmy"
title: "How to structure a Flask-RESTPlus web service for production builds"
created: "2021-08-16T15:41:23+02:00"
modified: "2021-08-16T15:41:23+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-software-development tag-web-development tag-technology tag-software ">
<header class="post-full-header">
<h1 class="post-full-title">How to structure a Flask-RESTPlus web service for production builds</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*TSbCf17bFXOYAb-l0HJ7rQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*TSbCf17bFXOYAb-l0HJ7rQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*TSbCf17bFXOYAb-l0HJ7rQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*TSbCf17bFXOYAb-l0HJ7rQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*TSbCf17bFXOYAb-l0HJ7rQ.jpeg" alt="How to structure a Flask-RESTPlus web service for production builds">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
sudo pip3 install virtualenvwrapper</code></pre><p>Follow <a href="https://medium.com/@gitudaniel/installing-virtualenvwrapper-for-python3-ad3dfea7c717" rel="noopener">this link</a> for a complete setup of virtual environment wrapper.</p><p>Create a new environment and activate it by executing the following command on the terminal:</p><pre><code class="language-bash">mkproject name_of_your_project</code></pre><h4 id="project-setup-and-organization">Project Setup and Organization</h4><p>I will be using a <a href="http://exploreflask.com/en/latest/blueprints.html#functional-structure" rel="noopener">functional structure</a> to organize the files of the project by what they do. In a functional structure, templates are grouped together in one directory, static files in another and views in a third.</p><p>In the project directory, create a new package called <code>app</code>. Inside <code>app</code>, create two packages <code>main </code>and <code>test</code>. Your directory structure should look similar to the one below.</p><pre><code>.
├── app
│   ├── __init__.py
│   ├── main
│   │   └── __init__.py
│   └── test
│ └── __init__.py
└── requirements.txt</code></pre><p>We are going to use a functional structure to modularize our application.<br>Inside the <code>main</code> package, create three more packages namely: <code>controller</code>, <code>service</code> and <code>model</code>. The <code>model</code> package will contain all of our database models while the <code>service</code> package will contain all the business logic of our application and finally the <code>controller</code> package will contain all our application endpoints. The tree structure should now look as follows:</p><pre><code>.
├── app
│   ├── __init__.py
│   ├── main
│   │   ├── controller
│   │   │   └── __init__.py
│   │   ├── __init__.py
│   │   ├── model
│   │   │   └── __init__.py
│   │   └── service
│   │ └── __init__.py
│   └── test
│ └── __init__.py
└── requirements.txt</code></pre><p>Now lets install the required packages. Make sure the virtual environment you created is activated and run the following commands on the terminal:</p><pre><code class="language-bash">pip install flask-bcrypt
pip install flask-restplus
pip install Flask-Migrate
pip install pyjwt
pip install Flask-Script
pip install flask_testing</code></pre><p>Create or update the <code>requirements.txt</code> file by running the command:</p><pre><code class="language-bash">pip freeze &gt; requirements.txt</code></pre><p>The generated <code>requirements.txt</code> file should look similar to the one below:</p><pre><code>alembic==0.9.8
aniso8601==3.0.0
bcrypt==3.1.4
cffi==1.11.5
click==6.7
Flask==0.12.2
Flask-Bcrypt==0.7.1
Flask-Migrate==2.1.1
flask-restplus==0.10.1
Flask-Script==2.0.6
Flask-SQLAlchemy==2.3.2
Flask-Testing==0.7.1
itsdangerous==0.24
Jinja2==2.10
jsonschema==2.6.0
Mako==1.0.7
MarkupSafe==1.0
pycparser==2.18
PyJWT==1.6.0
python-dateutil==2.7.0
python-editor==1.0.3
pytz==2018.3
six==1.11.0
SQLAlchemy==1.2.5
Werkzeug==0.14.1</code></pre><h4 id="configuration-settings">Configuration Settings</h4><p>In the <code>main</code> package create a file called <code>config.py</code> with the following content:</p><pre><code class="language-py">import os
# uncomment the line below for postgres database url from environment variable
# postgres_local_base = os.environ['DATABASE_URL']
basedir = os.path.abspath(os.path.dirname(__file__))
class Config:
SECRET_KEY = os.getenv('SECRET_KEY', 'my_precious_secret_key')
DEBUG = False
class DevelopmentConfig(Config):
# uncomment the line below to use postgres
# SQLALCHEMY_DATABASE_URI = postgres_local_base
DEBUG = True
SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'flask_boilerplate_main.db')
SQLALCHEMY_TRACK_MODIFICATIONS = False
class TestingConfig(Config):
DEBUG = True
TESTING = True
SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'flask_boilerplate_test.db')
PRESERVE_CONTEXT_ON_EXCEPTION = False
SQLALCHEMY_TRACK_MODIFICATIONS = False
class ProductionConfig(Config):
DEBUG = False
# uncomment the line below to use postgres
# SQLALCHEMY_DATABASE_URI = postgres_local_base
config_by_name = dict(
dev=DevelopmentConfig,
test=TestingConfig,
prod=ProductionConfig
)
key = Config.SECRET_KEY</code></pre><p>The configuration file contains three environment setup classes which includes <code>testing</code>, <code>development</code>, and <code>production</code>.</p><p>We will be using the <a href="http://flask.pocoo.org/docs/0.12/patterns/appfactories/" rel="noopener">application factory pattern</a> for creating our Flask object. This pattern is most useful for creating multiple instances of our application with different settings. This facilitates the ease at which we switch between our testing, development and production environment by calling the <code>create_app</code> function with the required parameter.</p><p>In the <code>__init__.py</code> file inside the <code>main</code> package, enter the following lines of code:</p><pre><code class="language-py">from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from .config import config_by_name
db = SQLAlchemy()
flask_bcrypt = Bcrypt()
def create_app(config_name):
app = Flask(__name__)
app.config.from_object(config_by_name[config_name])
db.init_app(app)
flask_bcrypt.init_app(app)
return app</code></pre><h4 id="flask-script">Flask Script</h4><p>Now let’s create our application entry point. In the root directory of the project, create a file called <code>manage.py</code> with the following content:</p><pre><code class="language-py">import os
import unittest
from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager
from app.main import create_app, db
app = create_app(os.getenv('BOILERPLATE_ENV') or 'dev')
app.app_context().push()
manager = Manager(app)
migrate = Migrate(app, db)
manager.add_command('db', MigrateCommand)
@manager.command
def run():
app.run()
@manager.command
def test():
"""Runs the unit tests."""
tests = unittest.TestLoader().discover('app/test', pattern='test*.py')
result = unittest.TextTestRunner(verbosity=2).run(tests)
if result.wasSuccessful():
return 0
return 1
if __name__ == '__main__':
class User(db.Model):
""" User Model for storing user related details """
__tablename__ = "user"
id = db.Column(db.Integer, primary_key=True, autoincrement=True)
email = db.Column(db.String(255), unique=True, nullable=False)
registered_on = db.Column(db.DateTime, nullable=False)
admin = db.Column(db.Boolean, nullable=False, default=False)
public_id = db.Column(db.String(100), unique=True)
username = db.Column(db.String(50), unique=True)
password_hash = db.Column(db.String(100))
@property
def password(self):
raise AttributeError('password: write-only field')
@password.setter
def password(self, password):
self.password_hash = flask_bcrypt.generate_password_hash(password).decode('utf-8')
def check_password(self, password):
return flask_bcrypt.check_password_hash(self.password_hash, password)
def __repr__(self):
return "&lt;User '{}'&gt;".format(self.username)</code></pre><p>The above code within <code>user.py</code> does the following:</p><ul><li><code>line 3:</code> The <code>user</code> class inherits from <code>db.Model</code> class which declares the class as a model for sqlalchemy.</li><li><code>line 7</code> through <code>13</code> creates the required columns for the user table.</li><li><code>line 21</code> is a setter for the field <code>password_hash</code> and it uses <code>flask-bcrypt</code>to generate a hash using the provided password.</li><li><code>line 24</code> compares a given password with already saved<code>password_hash</code>.</li></ul><p>Now to generate the database table from the <code>user</code> model we just created, we will use <code>migrateCommand</code> through the <code>manager</code> interface. For <code>manager</code>to detect our models, we will have to import the<code>user</code> model by adding below code to <code>manage.py</code> file:</p><pre><code class="language-bash">...
from app.main.model import user
...</code></pre><p>Now we can proceed to perform the <strong>migration</strong> by running the following commands on the project root directory:</p><ol><li>Initiate a migration folder using <code>init</code> command for alembic to perform the migrations.</li></ol><pre><code class="language-bash">python manage.py db init</code></pre><p>2. Create a migration script from the detected changes in the model using the <code>migrate</code> command. This doesn’t affect the database yet.</p><pre><code class="language-bash">python manage.py db migrate --message 'initial database migration'</code></pre><p>3. Apply the migration script to the database by using the <code>upgrade</code> command</p><pre><code class="language-bash">python manage.py db upgrade</code></pre><p>If everything runs successfully, you should have a new sqlLite database <br> <code>flask_boilerplate_main.db</code> file generated inside the main package.</p><blockquote>Each time the database model changes, repeat the <code>migrate</code> and <code>upgrade</code> commands</blockquote><h3 id="testing">Testing</h3><h4 id="configuration">Configuration</h4><p>To be sure the setup for our environment configuration is working, let’s write a couple of tests for it.</p><p>Create a file called <code>test_config.py</code> in the test package with the content below:</p><pre><code class="language-py">import os
import unittest
from flask import current_app
from flask_testing import TestCase
from manage import app
from app.main.config import basedir
class TestDevelopmentConfig(TestCase):
def create_app(self):
app.config.from_object('app.main.config.DevelopmentConfig')
return app
def test_app_is_development(self):
self.assertFalse(app.config['SECRET_KEY'] is 'my_precious')
self.assertTrue(app.config['DEBUG'] is True)
self.assertFalse(current_app is None)
self.assertTrue(
app.config['SQLALCHEMY_DATABASE_URI'] == 'sqlite:///' + os.path.join(basedir, 'flask_boilerplate_main.db')
)
class TestTestingConfig(TestCase):
def create_app(self):
app.config.from_object('app.main.config.TestingConfig')
return app
def test_app_is_testing(self):
self.assertFalse(app.config['SECRET_KEY'] is 'my_precious')
self.assertTrue(app.config['DEBUG'])
self.assertTrue(
app.config['SQLALCHEMY_DATABASE_URI'] == 'sqlite:///' + os.path.join(basedir, 'flask_boilerplate_test.db')
)
class TestProductionConfig(TestCase):
def create_app(self):
app.config.from_object('app.main.config.ProductionConfig')
return app
def test_app_is_production(self):
self.assertTrue(app.config['DEBUG'] is False)
if __name__ == '__main__':
import datetime
from app.main import db
from app.main.model.user import User
def save_new_user(data):
user = User.query.filter_by(email=data['email']).first()
if not user:
new_user = User(
public_id=str(uuid.uuid4()),
email=data['email'],
username=data['username'],
password=data['password'],
registered_on=datetime.datetime.utcnow()
)
save_changes(new_user)
response_object = {
'status': 'success',
'message': 'Successfully registered.'
}
return response_object, 201
else:
response_object = {
'status': 'fail',
'message': 'User already exists. Please Log in.',
}
return response_object, 409
def get_all_users():
return User.query.all()
def get_a_user(public_id):
return User.query.filter_by(public_id=public_id).first()
def save_changes(data):
db.session.add(data)
db.session.commit()
</code></pre><p>The above code within <code>user_service.py</code> does the following:</p><ul><li><code>line 8</code> through <code>29</code> creates a new user by first checking if the user already exists; it returns a success <code>response_object</code> if the user doesn’t exist else it returns an error code <code>409</code> and a failure <code>response_object</code>.</li><li><code>line 33</code> and <code>37</code> return a list of all registered users and a user object by providing the <code>public_id</code> respectively.</li><li><code>line 40</code> to <code>42</code> commits the changes to database.</li></ul><blockquote>No need to use <a href="http://flask.pocoo.org/docs/0.12/api/#module-flask.json" rel="noopener">jsonify</a> for formatting an object to JSON, Flask-restplus does it automatically</blockquote><p>In the <code>main</code> package, create a new package called <code>util</code> . This package will contain all the necessary utilities we might need in our application.</p><p>In the <code>util</code> package, create a new file <code>dto.py</code>. As the name implies, the data transfer object (<a href="https://en.wikipedia.org/wiki/Data_transfer_object">DTO</a>) will be responsible for carrying data between processes. In our own case, it will be used for marshaling data for our API calls. We will understand this better as we proceed.</p><pre><code class="language-py">from flask_restplus import Namespace, fields
class UserDto:
api = Namespace('user', description='user related operations')
user = api.model('user', {
'email': fields.String(required=True, description='user email address'),
'username': fields.String(required=True, description='user username'),
'password': fields.String(required=True, description='user password'),
'public_id': fields.String(description='user Identifier')
})</code></pre><p>The above code within <code>dto.py</code> does the following:</p><ul><li><code>line 5</code> creates a new namespace for user related operations. Flask-RESTPlus provides a way to use almost the same pattern as <a href="http://exploreflask.com/en/latest/blueprints.html#what-is-a-blueprint">Blueprint</a>. The main idea is to split your app into reusable namespaces. A namespace module will contain models and resources declaration.</li><li><code>line 6</code> creates a new user dto through the <code>model</code> interface provided by the <code>api</code> namespace in <code>line 5</code>.</li></ul><p><strong>User Controller:</strong> The user controller class handles all the incoming HTTP requests relating to the user .</p><p>Under the <code>controller</code> package, create a new file called <code>user_controller.py</code> with the following content:</p><pre><code class="language-py">from flask import request
from flask_restplus import Resource
from ..util.dto import UserDto
from ..service.user_service import save_new_user, get_all_users, get_a_user
api = UserDto.api
_user = UserDto.user
@api.route('/')
class UserList(Resource):
@api.doc('list_of_registered_users')
@api.marshal_list_with(_user, envelope='data')
def get(self):
"""List all registered users"""
return get_all_users()
@api.response(201, 'User successfully created.')
@api.doc('create a new user')
@api.expect(_user, validate=True)
def post(self):
"""Creates a new User """
data = request.json
return save_new_user(data=data)
@api.route('/&lt;public_id&gt;')
@api.param('public_id', 'The User identifier')
@api.response(404, 'User not found.')
class User(Resource):
@api.doc('get a user')
@api.marshal_with(_user)
def get(self, public_id):
"""get a user given its identifier"""
user = get_a_user(public_id)
if not user:
api.abort(404)
else:
return user</code></pre><p><code>line 1</code> through <code>8</code> imports all the required resources for the user controller.<br>We defined two concrete classes in our user controller which are <br><code>userList</code> and <code>user</code>. These two classes extends the abstract flask-restplus resource.</p><blockquote><em>Concrete resources should extend from this class</em> <em>and expose methods for each supported HTTP method.</em> <em>If a resource is invoked with an unsupported HTTP method,</em> <em>the API will return a response with status 405 Method Not Allowed.</em> <em>Otherwise the appropriate method is called and passed all arguments</em> <em>from the URL rule used when adding the resource to an API instance.</em></blockquote><p>The <code>api</code> namespace in <code>line 7</code> above provides the controller with several decorators which includes but is not limited to the following:</p><ul><li>api.<strong><strong>route</strong></strong>: <em><em>A decorator to route resources</em></em></li><li>api.<strong><strong>marshal_with</strong></strong>: <em><em>A decorator specifying the fields to use for serialization (This is where we use the </em></em><code><em><em>userDto</em></em></code><em><em> we created earlier)</em></em></li><li>api.<strong><strong>marshal_list_with</strong></strong>: <em><em>A shortcut decorator for </em></em><code><em><em>marshal_with</em></em></code><em><em> above with</em></em><code><em><em>as_list = True</em></em></code></li><li>api.<strong><strong>doc</strong></strong>: <em><em>A decorator to add some api documentation to the decorated object</em></em></li><li>api.<strong><strong>response: </strong></strong><em><em>A decorator to specify one of the expected responses</em></em></li><li>api.<strong><strong>expect: </strong></strong><em><em>A decorator to Specify the expected input model ( we still use the </em></em><code><em><em>userDto</em></em></code><em><em> for the expected input)</em></em></li><li>api.<strong><strong>param: </strong></strong><em><em>A decorator to specify one of the expected parameters</em></em></li></ul><p>We have now defined our namespace with the user controller. Now its time to add it to the application entry point.</p><p>In the <code>__init__.py</code> file of <code>app</code> package, enter the following:</p><pre><code class="language-py"># app/__init__.py
from flask_restplus import Api
from flask import Blueprint
from .main.controller.user_controller import api as user_ns
blueprint = Blueprint('api', __name__)
api = Api(blueprint,
title='FLASK RESTPLUS API BOILER-PLATE WITH JWT',
version='1.0',
description='a boilerplate for flask restplus web service'
)
api.add_namespace(user_ns, path='/user')</code></pre><p>The above code within <code>blueprint.py</code> does the following:</p><ul><li>In <code>line 8</code>, we create a blueprint instance by passing <code>name</code> and <code>import_name.</code> <code>API</code> is the main entry point for the application resources and hence needs to be initialized with the <code>blueprint</code> in <code>line 10</code>.</li><li>In <code>line 16</code> , we add the user namespace <code>user_ns</code> to the list of namespaces in the <code>API</code> instance.</li></ul><p>We have now defined our blueprint. It’s time to register it on our Flask app.<br>Update <code>manage.py</code> by importing <code>blueprint</code> and registering it with the Flask application instance.</p><pre><code class="language-py">from app import blueprint
...
app = create_app(os.getenv('BOILERPLATE_ENV') or 'dev')
app.register_blueprint(blueprint)
app.app_context().push()
import datetime
class BlacklistToken(db.Model):
"""
Token Model for storing JWT tokens
"""
__tablename__ = 'blacklist_tokens'
id = db.Column(db.Integer, primary_key=True, autoincrement=True)
token = db.Column(db.String(500), unique=True, nullable=False)
blacklisted_on = db.Column(db.DateTime, nullable=False)
def __init__(self, token):
self.token = token
self.blacklisted_on = datetime.datetime.now()
def __repr__(self):
return '&lt;id: token: {}'.format(self.token)
@staticmethod
def check_blacklist(auth_token):
# check whether auth token has been blacklisted
res = BlacklistToken.query.filter_by(token=str(auth_token)).first()
if res:
return True
else:
return False</code></pre><p>Lets not forget to migrate the changes to take effect on our database. <br>Import the <code>blacklist</code> class in <code>manage.py</code>.</p><pre><code class="language-py">from app.main.model import blacklist</code></pre><p>Run the <code>migrate</code> and <code>upgrade</code> commands</p><pre><code class="language-bash">python manage.py db migrate --message 'add blacklist table'
python manage.py db upgrade</code></pre><p>Next create <code>blacklist_service.py</code> in the service package with the following content for blacklisting a token:</p><pre><code class="language-py">from app.main import db
from app.main.model.blacklist import BlacklistToken
def save_token(token):
blacklist_token = BlacklistToken(token=token)
try:
# insert the token
db.session.add(blacklist_token)
db.session.commit()
response_object = {
'status': 'success',
'message': 'Successfully logged out.'
}
return response_object, 200
except Exception as e:
response_object = {
'status': 'fail',
'message': e
}
return response_object, 200</code></pre><p>Update the <code>user</code> model with two static methods for encoding and decoding tokens. Add the following imports:</p><pre><code class="language-py">import datetime
import jwt
from app.main.model.blacklist import BlacklistToken
from ..config import key</code></pre><ul><li>Encoding</li></ul><pre><code class="language-py">def encode_auth_token(self, user_id):
"""
Generates the Auth Token
:return: string
"""
try:
payload = {
'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1, seconds=5),
'iat': datetime.datetime.utcnow(),
'sub': user_id
}
return jwt.encode(
payload,
key,
algorithm='HS256'
)
except Exception as e:
return e</code></pre><ul><li>Decoding: Blacklisted token, expired token and invalid token are taken into consideration while decoding the authentication token.</li></ul><pre><code class="language-py">  @staticmethod
def decode_auth_token(auth_token):
"""
Decodes the auth token
:param auth_token:
:return: integer|string
"""
try:
payload = jwt.decode(auth_token, key)
is_blacklisted_token = BlacklistToken.check_blacklist(auth_token)
if is_blacklisted_token:
return 'Token blacklisted. Please log in again.'
else:
return payload['sub']
except jwt.ExpiredSignatureError:
return 'Signature expired. Please log in again.'
except jwt.InvalidTokenError:
return 'Invalid token. Please log in again.'</code></pre><p>Now let’s write a test for the <code>user</code> model to ensure that our <code>encode</code> and <code>decode</code> functions are working properly.</p><p>In the <code>test</code> package, create <code>base.py</code> file with the following content:</p><pre><code class="language-py">from flask_testing import TestCase
from app.main import db
from manage import app
class BaseTestCase(TestCase):
""" Base Tests """
def create_app(self):
app.config.from_object('app.main.config.TestingConfig')
return app
def setUp(self):
db.create_all()
db.session.commit()
def tearDown(self):
db.session.remove()
db.drop_all()</code></pre><p>The <code>BaseTestCase</code> sets up our test environment ready before and after every test case that extends it.</p><p>Create <code>test_user_medol.py</code> with the following test cases:</p><pre><code class="language-py">import unittest
import datetime
from app.main import db
from app.main.model.user import User
from app.test.base import BaseTestCase
class TestUserModel(BaseTestCase):
def test_encode_auth_token(self):
user = User(
email='test@test.com',
password='test',
registered_on=datetime.datetime.utcnow()
)
db.session.add(user)
db.session.commit()
auth_token = user.encode_auth_token(user.id)
self.assertTrue(isinstance(auth_token, bytes))
def test_decode_auth_token(self):
user = User(
email='test@test.com',
password='test',
registered_on=datetime.datetime.utcnow()
)
db.session.add(user)
db.session.commit()
auth_token = user.encode_auth_token(user.id)
self.assertTrue(isinstance(auth_token, bytes))
self.assertTrue(User.decode_auth_token(auth_token.decode("utf-8") ) == 1)
if __name__ == '__main__':
unittest.main()
</code></pre><p>Run the test with <code>python manage.py test</code>. All the tests should pass.</p><p>Let’s create the <strong><strong>authentication endpoints</strong></strong> for <strong><strong>login</strong></strong> and <strong><strong>logout</strong></strong>.</p><ul><li>First we need a <code>dto</code> for the login payload. We will use the auth dto for the <code>@expect</code> annotation in <code>login</code> endpoint. Add the code below to the <code>dto.py</code></li></ul><pre><code class="language-py">class AuthDto:
api = Namespace('auth', description='authentication related operations')
user_auth = api.model('auth_details', {
'email': fields.String(required=True, description='The email address'),
'password': fields.String(required=True, description='The user password '),
})</code></pre><ul><li>Next, we create an authentication helper class for handling all authentication related operations. This <code>auth_helper.py</code> will be in the service package and will contain two static methods which are <code>login_user</code> and <code>logout_user</code></li></ul><blockquote><em><em>When a user is logged out, the user’s token is blacklisted ie the user can’t log in again with that same token.</em></em></blockquote><pre><code class="language-py">from app.main.model.user import User
from ..service.blacklist_service import save_token
class Auth:
@staticmethod
def login_user(data):
try:
# fetch the user data
user = User.query.filter_by(email=data.get('email')).first()
if user and user.check_password(data.get('password')):
auth_token = user.encode_auth_token(user.id)
if auth_token:
response_object = {
'status': 'success',
'message': 'Successfully logged in.',
'Authorization': auth_token.decode()
}
return response_object, 200
else:
response_object = {
'status': 'fail',
'message': 'email or password does not match.'
}
return response_object, 401
except Exception as e:
print(e)
response_object = {
'status': 'fail',
'message': 'Try again'
}
return response_object, 500
@staticmethod
def logout_user(data):
if data:
auth_token = data.split(" ")[1]
else:
auth_token = ''
if auth_token:
resp = User.decode_auth_token(auth_token)
if not isinstance(resp, str):
# mark the token as blacklisted
return save_token(token=auth_token)
else:
response_object = {
'status': 'fail',
'message': resp
}
return response_object, 401
else:
response_object = {
'status': 'fail',
'message': 'Provide a valid auth token.'
}
return response_object, 403</code></pre><ul><li>Let us now create endpoints for <code>login</code> and <code>logout</code> operations. <br>In the controller package, create <br><code>auth_controller.py</code> with the following contents:</li></ul><pre><code class="language-py">from flask import request
from flask_restplus import Resource
from app.main.service.auth_helper import Auth
from ..util.dto import AuthDto
api = AuthDto.api
user_auth = AuthDto.user_auth
@api.route('/login')
class UserLogin(Resource):
"""
User Login Resource
"""
@api.doc('user login')
@api.expect(user_auth, validate=True)
def post(self):
# get the post data
post_data = request.json
return Auth.login_user(data=post_data)
@api.route('/logout')
class LogoutAPI(Resource):
"""
Logout Resource
"""
@api.doc('logout a user')
def post(self):
# get auth token
auth_header = request.headers.get('Authorization')
return Auth.logout_user(data=auth_header)</code></pre><ul><li>At this point the only thing left is to register the auth <code>api</code> namespace with the application <code>Blueprint</code></li></ul><p>Update <code>__init__.py</code> file of <code>app</code> package with the following</p><pre><code class="language-py"># app/__init__.py
from flask_restplus import Api
from flask import Blueprint
from .main.controller.user_controller import api as user_ns
from .main.controller.auth_controller import api as auth_ns
blueprint = Blueprint('api', __name__)
api = Api(blueprint,
title='FLASK RESTPLUS API BOILER-PLATE WITH JWT',
version='1.0',
description='a boilerplate for flask restplus web service'
)
api.add_namespace(user_ns, path='/user')
try:
# generate the auth token
auth_token = user.encode_auth_token(user.id)
response_object = {
'status': 'success',
'message': 'Successfully registered.',
'Authorization': auth_token.decode()
}
return response_object, 201
except Exception as e:
response_object = {
'status': 'fail',
'message': 'Some error occurred. Please try again.'
}
return response_object, 401</code></pre><p>The <code>generate_token</code> method generates an authentication <strong>token</strong> by encoding the user <code>id.</code> This <strong>token </strong>is<strong> </strong>the returned as a response.</p><p>Next, replace the <strong>return </strong>block in <code>save_new_user</code> method below</p><pre><code class="language-py">response_object = {
'status': 'success',
'message': 'Successfully registered.'
}
return response_object, 201</code></pre><p>with</p><pre><code class="language-py">return generate_token(new_user)</code></pre><p>Now its time to test the <code>login</code> and <code>logout</code> functionalities. Create a new test file <code>test_auth.py</code> in the test package with the following content:</p><pre><code class="language-py">import unittest
import json
from app.test.base import BaseTestCase
def register_user(self):
return self.client.post(
'/user/',
data=json.dumps(dict(
email='example@gmail.com',
username='username',
password='123456'
)),
content_type='application/json'
)
def login_user(self):
return self.client.post(
'/auth/login',
data=json.dumps(dict(
email='example@gmail.com',
password='123456'
)),
content_type='application/json'
)
class TestAuthBlueprint(BaseTestCase):
def test_registered_user_login(self):
""" Test for login of registered-user login """
with self.client:
# user registration
user_response = register_user(self)
response_data = json.loads(user_response.data.decode())
self.assertTrue(response_data['Authorization'])
self.assertEqual(user_response.status_code, 201)
# registered user login
login_response = login_user(self)
data = json.loads(login_response.data.decode())
self.assertTrue(data['Authorization'])
self.assertEqual(login_response.status_code, 200)
def test_valid_logout(self):
""" Test for logout before token expires """
with self.client:
# user registration
user_response = register_user(self)
response_data = json.loads(user_response.data.decode())
self.assertTrue(response_data['Authorization'])
self.assertEqual(user_response.status_code, 201)
# registered user login
login_response = login_user(self)
data = json.loads(login_response.data.decode())
self.assertTrue(data['Authorization'])
self.assertEqual(login_response.status_code, 200)
# valid token logout
response = self.client.post(
'/auth/logout',
headers=dict(
Authorization='Bearer ' + json.loads(
login_response.data.decode()
)['Authorization']
)
)
data = json.loads(response.data.decode())
self.assertTrue(data['status'] == 'success')
self.assertEqual(response.status_code, 200)
if __name__ == '__main__':
unittest.main()</code></pre><p>Visit the <a href="https://github.com/cosmic-byte/flask-restplus-boilerplate" rel="noopener">github repo</a> for a more exhaustive test cases.</p><h4 id="route-protection-and-authorization">Route protection and Authorization</h4><p>So far, we have successfully created our endpoints, implemented login and logout functionalities but our endpoints remains unprotected.</p><p>We need a way to define rules that determines which of our endpoint is open or requires authentication or even an admin privilege.</p><p>We can achieve this by creating custom decorators for our endpoints.</p><p>Before we can protect or authorize any of our endpoints, we need to know the currently logged in user. We can do this by pulling the <code>Authorization token</code> from the header of the current request by using the flask library <code>request.</code>We then decode the user details from the <code>Authorization token</code>.</p><p>In the <code>Auth</code> class of <code>auth_helper.py</code> file, add the following static method:</p><pre><code class="language-py">@staticmethod
def get_logged_in_user(new_request):
# get the auth token
auth_token = new_request.headers.get('Authorization')
if auth_token:
resp = User.decode_auth_token(auth_token)
if not isinstance(resp, str):
user = User.query.filter_by(id=resp).first()
response_object = {
'status': 'success',
'data': {
'user_id': user.id,
'email': user.email,
'admin': user.admin,
'registered_on': str(user.registered_on)
}
}
return response_object, 200
response_object = {
'status': 'fail',
'message': resp
}
return response_object, 401
else:
response_object = {
'status': 'fail',
'message': 'Provide a valid auth token.'
}
return response_object, 401</code></pre><p>Now that we can retrieve the logged in user from the request, let’s go ahead and create the <code>decorators.</code></p><p>Create a file <code>decorator.py</code> in the <code>util</code> package with the following content:</p><pre><code class="language-py">from functools import wraps
from flask import request
from app.main.service.auth_helper import Auth
def token_required(f):
@wraps(f)
def decorated(*args, **kwargs):
data, status = Auth.get_logged_in_user(request)
token = data.get('data')
if not token:
return data, status
return f(*args, **kwargs)
return decorated
def admin_token_required(f):
@wraps(f)
def decorated(*args, **kwargs):
data, status = Auth.get_logged_in_user(request)
token = data.get('data')
if not token:
return data, status
admin = token.get('admin')
if not admin:
response_object = {
'status': 'fail',
'message': 'admin token required'
}
return response_object, 401
return f(*args, **kwargs)
return decorated</code></pre><p>For more information about <strong>decorators</strong> and how to create them, take a look at <a href="https://realpython.com/primer-on-python-decorators/" rel="noopener">this link</a>.</p><p>Now that we have created the decorators <code>token_required</code> and <code>admin_token_required</code> for valid token and for an admin token respectively, all that is left is to annotate the endpoints which we wish to protect with the freecodecamp orgappropriate <strong>decorator</strong>.</p><h4 id="extra-tips">Extra tips</h4><p>Currently to perform some tasks in our application, we are required to run different commands for starting the app, running tests, installing dependencies etc. We can automate those processes by arranging all the commands in one file using <code>Makefile.</code></p><p>On the root directory of the application, create a <code>Makefile</code> with no file extension. The file should contain the following:</p><pre><code>.PHONY: clean system-packages python-packages install tests run all
clean:
find . -type f -name '*.pyc' -delete
find . -type f -name '*.log' -delete
system-packages:
sudo apt install python-pip -y
python-packages:
pip install -r requirements.txt
install: system-packages python-packages
tests:
python manage.py test
run:
python manage.py run
all: clean install tests run</code></pre><p>Here are the options of the make file.</p><ol><li><code>make install</code> : installs both system-packages and python-packages</li><li><code>make clean</code> : cleans up the app</li><li><code>make tests</code> : runs the all the tests</li><li><code>make run</code> : starts the application</li><li><code>make all</code> : performs <code>clean-up</code>,<code>installation</code> , run <code>tests</code> , and <code>starts</code> the app.</li></ol><h3 id="extending-the-app-conclusion">Extending the App &amp; Conclusion</h3><p>It’s pretty easy to copy the current application structure and extend it to add more functionalities/endpoints to the App. Just view any of the previous routes that have been implemented.</p><p><em>Feel free to leave a comment have you any question, observations or recommendations. Also, if this post was helpful to you, click on the clap icon so others will see this here and benefit as well.</em></p><p>Visit the <a href="https://github.com/cosmic-byte/flask-restplus-boilerplate" rel="noopener">github repository</a> for the complete project.</p><p>Thanks for reading and good luck!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
