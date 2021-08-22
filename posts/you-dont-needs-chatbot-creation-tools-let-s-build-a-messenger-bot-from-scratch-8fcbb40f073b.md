---
card: "https://cdn-media-1.freecodecamp.org/images/1*eEi9foMd0qRFROy-B8UO6Q.jpeg"
tags: [Bots]
description: "There are many many chatbot creation tools out there. To para"
author: "Milad E. Fahmy"
title: "You don’t need chatbot creation tools — Let’s build a Messenger bot from scratch"
created: "2021-08-16T15:41:32+02:00"
modified: "2021-08-16T15:41:32+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-bots tag-tech tag-programming tag-python tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">You don’t need chatbot creation tools — Let’s build a Messenger bot from scratch</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*eEi9foMd0qRFROy-B8UO6Q.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*eEi9foMd0qRFROy-B8UO6Q.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*eEi9foMd0qRFROy-B8UO6Q.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*eEi9foMd0qRFROy-B8UO6Q.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*eEi9foMd0qRFROy-B8UO6Q.jpeg" alt="You don’t need chatbot creation tools — Let’s build a Messenger bot from scratch">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
answers:
travel:
say: You need a Standard Visitor Visa
study:
say: How long are you going to stay in the UK? up to 6 months; more than 6 months
answers:
up to 6 months:
say: You can apply for a Short-term Study Visa
more than 6 months:
say: You need a Study Visa (Tier 4)
business/work:
say: How long are you going to stay in the UK? up to 6 months; more than 6 months
answers:
up to 6 months:
say: You need a Standard Visitor Visa
more than 6 months:
say: Are you an 1. entrepreneur 2.investor 3. leader in arts or sciences 4. none of the above
answers:
'1':
say: You can apply for a Tier 1 Entrepreneur
'2':
say: You can apply for Tier 1 Investor
'3':
say: You can apply for Tier 1 (Exceptional Talent)
'4':
say: Are you offered  1. a skilled job 2. role in the UK branch of your employer 3. job in a religious community 4. job as an elite sportsman or coach
answers:
'1':
say: You can apply for a Tier 2 (General) visa
'2':
say: You can apply for a Tier 2 (Intra-company transfer)
'3':
say: Tier 2 (Minister of Religion)
'4':
say: Tier 2 (Sportsperson)
medical treatment:
say: You need a Standard Visitor Visa
join family/get married:
say: You need a Family of a settled person visa if your family/partner are settled in the UK or a 'dependant' visa of their visa category if they are working or studying
visiting a child:
say: You need a Parent visa if you're visiting for over 6 months and a Standard Visitor visa if your visit is  for less than 6 months
diplomatic or government visit:
def __init__(self, request=None, response=None):
super(MainPage, self).__init__(request, response)
logging.info("Initialising with new bot.")
self.bot = TreeBot(send_message, UserEventsDao(), TREE)
def get(self):
self.response.headers['Content-Type'] = 'text/plain'
mode = self.request.get("hub.mode")
if mode == "subscribe":
challenge = self.request.get("hub.challenge")
verify_token = self.request.get("hub.verify_token")
if verify_token == VERIFY_TOKEN:
self.response.write(challenge)
else:
self.response.write("Ok")</code></pre><p>Here we first initialize a class to handle requests within the <a href="https://webapp2.readthedocs.io/en/latest/" rel="noopener">webapp2 framework</a>. We first log a message to say that the bot is being initialized, then construct the class <code>TreeBot</code> that will handle all the bot logic, discussed below.</p><p>Next we check for “subscribe” requests from Facebook and check that the verify token sent in the request is the same as the secret one we shared with Facebook.</p><h3 id="handling-messages-from-users">Handling messages from users</h3><p>Next we need to interpret messages from users, which are sent by Facebook to our webhook using POST requests.</p><pre><code class="language-py">    def post(self):
data = json.loads(self.request.body)
logging.info("Got data: %r", data)
if data["object"] == "page":
for entry in data["entry"]:
for messaging_event in entry["messaging"]:
sender_id = messaging_event["sender"]["id"]
if messaging_event.get("message"):
message = messaging_event['message']
if message.get('is_echo'):
logging.info("Ignoring echo event: " + message.get('text', ''))
continue
message_text = messaging_event['message'].get('text', '')
logging.info("Got a message: %s", message_text)
self.bot.handle(sender_id, message_text)
if messaging_event.get("postback"):
payload = messaging_event['postback']['payload']
self.bot.handle(sender_id, payload)
logging.info("Sending message to %r: %s", recipient_id, message_text)
headers = {
"Content-Type": "application/json"
}
message = get_postback_buttons_message(message_text, possible_answers)
if message is None:
message = {"text": message_text}
raw_data = {
"recipient": {
"id": recipient_id
},
"message": message
}
data = json.dumps(raw_data)
r = urlfetch.fetch("https://graph.facebook.com/v2.6/me/messages?access_token=%s" % ACCESS_TOKEN,
method=urlfetch.POST, headers=headers, payload=data)
if r.status_code != 200:
logging.error("Error sending message: %r", r.status_code)
def get_postback_buttons_message(message_text, possible_answers):
if possible_answers is not None and len(possible_answers) &lt;= 3:
buttons = []
for answer in possible_answers:
if len(answer) &gt; 20:
return None
buttons.append({
"type": "postback",
"title": answer,
"payload": answer,
})
return {
"attachment": {
"type":"template",
"payload": {
"template_type": "button",
"text": message_text,
"buttons": buttons,
}
}
}
return None</code></pre><p>The recipient ID will be the sender ID we extracted earlier. Along with that we have the message text, and some quick reply buttons for the user to press. We first make sure that the request headers specify our content as JSON, and then construct our postback buttons part of the message. We specify the recipient ID and message text and convert to JSON. We make our request to the Facebook Graph API, passing in the secret access token that Facebook gave us when we created our app.</p><h3 id="running-the-bot-server">Running the bot server</h3><p>The last piece of code in this file just constructs the main class and runs it:</p><pre><code class="language-py">app = webapp2.WSGIApplication([
('/', MainPage),
def __init__(self, send_callback, users_dao, tree):
self.send_callback = send_callback
self.users_dao = users_dao
self.tree = tree
def handle(self, user, message):
self.users_dao.add_user_event(user, 'received', message)
history = self.users_dao.get_user_events(user)
tree = self.tree
logging.debug("History items: %d", len(history))
restarting = False
nothing_sent = True
response = DEFAULT
possible_answers = DEFAULT_POSSIBLE_ANSWERS
for direction, content in history:
response = DEFAULT
possible_answers = DEFAULT_POSSIBLE_ANSWERS
if direction == 'received':
key = get_content_match(content, tree)
if nothing_sent:
response = tree['say']
possible_answers = tree['answers'].keys()
elif key is not None:
tree = tree[key]
if 'say' in tree:
response = tree['say']
possible_answers = None
if 'answers' in tree:
possible_answers = tree['answers'].keys()
restarting = False
elif restarting:
if content == 'yes':
tree = self.tree
response = tree['say']
possible_answers = tree['answers'].keys()
restarting = False
elif direction == 'sent':
nothing_sent = False
if 'answers' in tree and direction == 'sent' and content == tree.get('say'):
tree = tree['answers']
elif direction == 'sent' and content == DEFAULT:
restarting = True
else:
raise ValueError("Unexpected direction: " + direction)
logging.debug("Responding: %s", response)
self.send_callback(user, response, possible_answers)
self.users_dao.add_user_event(user, 'sent', response)</code></pre><p>The class is initialized with three parameters:</p><ul><li>a callback function (that was defined above) to send messages back to users</li><li>a data access object for storing information about users</li><li>the tree that contains the logic of what should be said when. This is parsed from the YAML we showed above.</li></ul><p>First, we record that we received the user’s message, and then retrieve all of the user’s past actions from the data access object. We then replay the user’s actions to figure out where they are currently in the tree.</p><p>We initialize the response to a default message that will be returned when the user says something we don’t understand. In our case, this is “I’m sorry, I didn’t understand, shall we start again?” There are also some default possible answers, which are “yes” and “no”. We also keep a record of whether we think we are restarting the conversation from scratch.</p><p>We then start iterating over the user’s history. For each message, we check whether it was sent by us, or whether we received it from the user. If it was received, we check for a match with the current options in the tree. This uses the following function:</p><pre><code class="language-py">def get_content_match(content, tree):
matches = []
for key in sorted(tree):
if content.lower() in key.lower():
matches.append(key)
if len(matches) == 1:
user = ndb.StringProperty()
direction = ndb.StringProperty()
message = ndb.StringProperty()
date = ndb.DateTimeProperty(auto_now_add=True)
class UserEventsDao(object):
def add_user_event(self, user, direction, message):
event = UserEvent()
event.user = user
event.direction = direction
event.message = message
logging.info("Adding event: %r", event)
event.put()
def get_user_events(self, user):
events = UserEvent.query(UserEvent.user == user)
sorted_events = sorted(events, key=lambda x: x.date)
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
