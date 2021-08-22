---
card: "https://cdn-media-1.freecodecamp.org/images/0*vVOogQpEJW26iPDp.png"
tags: [Web Development]
description: "When my wife and I got married in the summer of 2016 I decide"
author: "Milad E. Fahmy"
title: "When a CTO Decides to Make a Wedding Website"
created: "2021-08-16T15:42:35+02:00"
modified: "2021-08-16T15:42:35+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-tech tag-open-source tag-weddings tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">When a CTO Decides to Make a Wedding Website</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*vVOogQpEJW26iPDp.png 300w,
https://cdn-media-1.freecodecamp.org/images/0*vVOogQpEJW26iPDp.png 600w,
https://cdn-media-1.freecodecamp.org/images/0*vVOogQpEJW26iPDp.png 1000w,
https://cdn-media-1.freecodecamp.org/images/0*vVOogQpEJW26iPDp.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*vVOogQpEJW26iPDp.png" alt="When a CTO Decides to Make a Wedding Website">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
name = models.TextField()
email = models.TextField()
save_the_date_sent = models.BooleanField(default=False)
save_the_date_opened = models.BooleanField(default=False)
invited = models.BooleanField(default=False)
attending = models.NullBooleanField(default=None)
ALLOWED_TYPES = [
('formal', 'formal'),
('fun', 'fun')
]
class Party(models.Model):
"""
A party consists of one or more guests.
"""
name = models.TextField()
type = models.CharField(max_length=10, choices=ALLOWED_TYPES)
save_the_date_sent = models.DateTimeField(null=True, default=None)
save_the_date_opened = models.DateTimeField(null=True, default=None)
is_invited = models.BooleanField(default=False)
is_attending = models.NullBooleanField(default=None)
class Guest(models.Model):
"""
A single guest
"""
party = models.ForeignKey(Party)
first_name = models.TextField()
last_name = models.TextField(null=True, blank=True)
email = models.TextField()
@classmethod
def setUpClass(cls):
super(GuestImporterTest, cls).setUpClass()
cls.path = os.path.join(os.path.dirname(__file__), 'data', 'guests-test.csv')
def test_import(self):
import_guests(self.path)
self.assertEqual(2, Party.objects.count())
self.assertEqual(4, Guest.objects.count())
the_starks = Guest.objects.filter(party__name='The Starks')
self.assertEqual(3, the_starks.count())
def test_import_idempotent(self):
for i in range(3):
import_guests(self.path)
self.assertEqual(2, Party.objects.count())
self.assertEqual(4, Guest.objects.count())
the_starks = Guest.objects.filter(party__name='The Starks')
'lions-head': {
'title': "Lion's Head",
'header_filename': 'hearts.png',
'main_image': 'lions-head.jpg',
'main_color': '#fff3e8',
'font_color': '#666666',
},
'canada': {
'title': 'Canada!',
'header_filename': 'maple-leaf.png',
'main_image': 'canada-cartoon-resized.jpg',
'main_color': '#ea2e2e',
'font_color': '#e5ddd9',
},
# other templates omitted for brevity
if party.type == 'formal':
# all formal guests get formal invites
return random.choice(['lions-head', 'ski-trip'])
elif party.type == 'dimagi':
# all non-formal dimagis get dimagi invites
return 'dimagi'
elif party.type == 'fun':
all_options = SAVE_THE_DATE_CONTEXT_MAP.keys()
all_options.remove('dimagi')
if party.category == 'ro':
# don't send the canada invitation to ro's crowd
all_options.remove('canada')
# otherwise choose randomly from all options for everyone else
return random.choice(all_options)
else:
template_id = random.choice(SAVE_THE_DATE_CONTEXT_MAP.keys())
context = get_save_the_date_context(template_id)
context['email_mode'] = False
to_send_to = Party.in_default_order().filter(is_invited=True, save_the_date_sent=None)
for party in to_send_to:
send_save_the_date_to_party(party, test_only=test_only)
if mark_as_sent:
party.save_the_date_sent = datetime.now()
"""
A party consists of one or more guests.
"""
name = models.TextField()
type = models.CharField(max_length=10, choices=ALLOWED_TYPES)
category = models.CharField(max_length=20, null=True, blank=True)
save_the_date_sent = models.DateTimeField(null=True, blank=True, default=None)
save_the_date_opened = models.DateTimeField(null=True, blank=True, default=None)
invitation_id = models.CharField(max_length=32, db_index=True, default=_random_uuid, unique=True)
invitation_sent = models.DateTimeField(null=True, blank=True, default=None)
invitation_opened = models.DateTimeField(null=True, blank=True, default=None)
is_invited = models.BooleanField(default=False)
rehearsal_dinner = models.BooleanField(default=False)
is_attending = models.NullBooleanField(default=None)
comments = models.TextField(null=True, blank=True)
class Guest(models.Model):
"""
A single guest
"""
party = models.ForeignKey(Party)
first_name = models.TextField()
last_name = models.TextField(null=True, blank=True)
email = models.TextField(null=True, blank=True)
is_attending = models.NullBooleanField(default=None)
meal = models.CharField(max_length=20, choices=MEALS, null=True, blank=True)
party = guess_party_by_invite_id_or_404(invite_id)
if party.invitation_opened is None:
# update if this is the first time the invitation was opened
party.invitation_opened = datetime.utcnow()
// enable/disable meal choices based on attendance
$("input.attending-radio").change(function (e) {
var target = $(e.target);
if (target.closest('.form-group').data('is-child') === "True") {
// don't attempt to update meals for children, who don't have them.
return;
}
var value = target.attr('value');
var mealButtonContainer = target.closest('.form-group').next('.form-group');
var mealButtons = mealButtonContainer.find('[type=radio]');
if (value === 'yes') {
mealButtonContainer.removeClass('text-muted');
mealButtons.each(function (index, button) {
button.disabled = false;
button.required = true;
});
} else if (value === "no") {
mealButtonContainer.addClass('text-muted');
mealButtons.each(function (index, button) {
button.checked = false;
button.disabled = true;
button.required = false;
});
}
// reload validation
$(document.forms[0]).validator('destroy');
$(document.forms[0]).validator();
});
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
