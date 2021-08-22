---
card: "https://cdn-media-1.freecodecamp.org/images/0*s7pV_mfdT_FlIhCW"
tags: [Python]
description: "Do you also get stressed out when you get the question “what’"
author: "Milad E. Fahmy"
title: "How to save time and money by building an automatic meal planner"
created: "2021-08-16T15:39:49+02:00"
modified: "2021-08-16T15:39:49+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-api tag-technology tag-life-hacking tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">How to save time and money by building an automatic meal planner</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*s7pV_mfdT_FlIhCW 300w,
https://cdn-media-1.freecodecamp.org/images/0*s7pV_mfdT_FlIhCW 600w,
https://cdn-media-1.freecodecamp.org/images/0*s7pV_mfdT_FlIhCW 1000w,
https://cdn-media-1.freecodecamp.org/images/0*s7pV_mfdT_FlIhCW 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*s7pV_mfdT_FlIhCW" alt="How to save time and money by building an automatic meal planner">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h4 id="use-the-google-calendar-and-google-sheets-apis-to-select-the-right-recipe-on-the-right-day-">Use the Google Calendar and Google Sheets APIs to select the right recipe on the right day.</h4><p>Do you also get stressed out when you get the question “what’s for dinner tonight?” You’re not alone. I guess it’s the most asked question as the clock strikes 4 p.m. Deciding what to eat can be a tedious chore. Especially when you have small children with various after-school activities.</p><p>To avoid going to the supermarket every day, we usually write up a menu with recipes for the coming week. That way we can buy all our groceries in one supermarket visit. This saves us a lot of time. Besides that, it also saves us money. That is because we are less exposed to all the selling <a href="https://www.rd.com/health/healthy-eating/supermarket-tricks/" rel="noopener">tricks supermarkets use</a>.</p><p>Finding recipes for a whole week requires some thinking and planning. We have to take into account the eating preferences of all family members. Besides that, we have a limited time available for cooking each day. To make this easier, I built an automatic meal planner with these features:</p><ul><li>extract the work planning for me and my wife from our shared Google calendars</li><li>extract our preferred recipes from a Google spreadsheet,</li><li>repeat some recipes each week on the same day</li><li>leave one week in between before repeating the other recipes</li><li>I like cooking more than my wife. So on days that I can’t cook the recipes should be short in time</li><li>upload the week menu in a Google calendar</li></ul><p>Let’s jump right in.</p><h3 id="using-the-google-calendar-api-and-google-sheets-api">Using the Google calendar API and Google sheets API</h3><p>First, we’ll need to <a href="https://cloud.google.com/resource-manager/docs/creating-managing-projects" rel="noopener">create a new Google Cloud project</a>. Before we can use the Google calendar and sheets in this project, we need to enable the API’s. This is very well explained on the web pages below:</p><ul><li><a href="https://developers.google.com/calendar/quickstart/python" rel="noopener">Enabling the Google Calendar API</a></li><li><a href="https://developers.google.com/sheets/api/quickstart/python" rel="noopener">Enabling the Google Sheets API</a></li></ul><p>When that’s done, we continue by importing the necessary Python packages.</p><pre><code>import config as cfg
import pandas as pd
import numpy as np
from pathlib import Path
from datetime import datetime
from datetime import timedelta
from googleapiclient.discovery import build
from google.oauth2 import service_account</code></pre><h3 id="configuration">Configuration</h3><p>For privacy and security reasons, I keep some parameters in a separate config.py file. We import the file with the alias <code>cfg</code>. I will discuss these parameters further below with fictitious values. You can include them for your own app with values relevant to your case.</p><h4 id="scopes">Scopes</h4><p>With scopes, we define the access levels for the Google calendars and sheets. We will need read and write access to both the <a href="https://developers.google.com/calendar/auth" rel="noopener">calendars</a> and <a href="https://developers.google.com/sheets/api/guides/authorizing" rel="noopener">sheet</a>. Thus we use the URLs below.</p><pre><code class="language-python">SCOPES = ['https://www.googleapis.com/auth/calendar'
, 'https://www.googleapis.com/auth/spreadsheets']</code></pre><h4 id="google-sheet-id-and-range">Google sheet ID and range</h4><pre><code class="language-python">SPREADSHEET_ID = &lt;Your Google sheet ID&gt;
CALENDARID_2 = &lt;Your partner's Google Calendar ID&gt;
CALENDARID_WEEKMENU = &lt;Google Calendar ID for the week menu&gt;</code></pre><p>We need to specify the Google Calendar IDs to get the events from. Make sure you have access to all calendars you want to include. You can find the ID by executing this <a href="https://developers.google.com/apis-explorer/#p/calendar/v3/calendar.calendarList.list" rel="noopener">script from the APIs Explorer</a>.</p><p>For this project, we will extract the events of only two calendars. But you could adapt the code to loop over more calendars. I’ve also created a separate calendar to upload the recipes.</p><h4 id="event-labels">Event labels</h4><pre><code class="language-python">BUSY_EVENTS = [&lt;Labels of busy calendar events&gt;]
FREE_EVENTS = [&lt;Labels of free calendar events&gt;]
ALL_EVENTS = BUSY_EVENTS + FREE_EVENTS</code></pre><p>My wife works in shifts and adds them to her Google Calendar by using letter codes. For example: “B” stands for the afternoon shift. This event is one of the <code>BUSY_EVENTS</code>.</p><p>When I have a day off, I add “HOLIDAY” to my calendar. This event is one of the <code>FREE_EVENTS.</code></p><p>All the events are full-day events in the Google Calendars. You can use your own event labels scheme.</p><h4 id="traditions">Traditions</h4><pre><code class="language-python">TRADITIONS = {   'Thursday' : 'fries'}</code></pre><p>With <code>TRADITIONS</code>, I mean that our family has a few days in the week on which we prepare a certain recipe. As we are from Belgium, this means eating fries once a week (for us on Thursday). And yes, before you’d ask, that is fries with mayonnaise.</p><p>You can specify your own traditions in a dictionary, with the name of the day as the key and the recipe as the value.</p><h4 id="number-of-days-to-plan-ahead">Number of days to plan ahead</h4><p>Sometimes we can’t go to the supermarket on the day a new week menu is created. We might need some days to plan ahead. With <code>NB_DAYS_BEFORE</code> we give ourselves some slack. This means that the new week menu will be generated a certain number of days before the previous week menu has finished.</p><pre><code>NB_DAYS_BEFORE = 3</code></pre><h3 id="using-a-service-account">Using a service account</h3><p>We will use a <a href="https://developers.google.com/api-client-library/python/auth/service-accounts" rel="noopener">service account</a> to make use of the APIs in the project. The credentials.json file is the file that you can download when enabling the APIs.</p><p>We create the credentials <code>creds</code> with the code below. These credentials enable authentication in the Google Calendars and Google sheet.</p><pre><code class="language-python">creds = service_account.Credentials.from_service_account_file("credentials.json", scopes=cfg.SCOPES)</code></pre><h3 id="getting-the-google-calendar-events">Getting the Google Calendar events</h3><p>We start by creating the service object with the <code>build</code> method.</p><pre><code>service_cal = build('calendar', 'v3', credentials=creds)</code></pre><p>We are only interested in the events for the coming week. To filter these events, we specify the dates and format them with <code>isoformat()</code>. The parameters <code>timeMin</code> and <code>timeMax</code> need this format.</p><pre><code>def format_date(date):
date_time = datetime.combine(date, datetime.min.time())
date_time_utc = date_time.isoformat() + 'Z'
return date_time_utc</code></pre><p>With the method <a href="https://developers.google.com/calendar/v3/reference/events/list" rel="noopener">events().list</a> of the service object, we extract the events. The extracted events are then filtered for the BUSY and FREE events. All other events on the Google Calendars are not relevant in this project. We keep the start and end date and the summary of the events.</p><pre><code>def get_event_date(event, timepoint):
return event[timepoint].get('dateTime', event[timepoint].get('date'))
def get_events_by_calendarId(service, calendarId, timeMin, timeMax, allEvents):
events_result = service.events().list(calendarId=calendarId
, timeMin=timeMin
, timeMax=timeMax
, singleEvents=True
, orderBy='startTime').execute()
events = events_result.get('items', [])
events_list = [(get_event_date(e, 'start'), get_event_date(e, 'end'), e['summary'].upper())
for e in events
if e['summary'].upper() in allEvents]
return unfold_events_list(events_list)</code></pre><p>Some events spread over more than one day. For example, when you take holidays for more than one day. We unfold these multi-day events in daily events within the range of the coming week.</p><pre><code>def unfold_events_list(events_list):
new_events_list = []
for e in events_list:
start = datetime.strptime(e[0], '%Y-%m-%d').date()
end = datetime.strptime(e[1], '%Y-%m-%d').date()
delta_days = (end - start).days
if delta_days &gt; 1:
for d in range(delta_days):
unfolded_day = start + timedelta(days=d)
if unfolded_day &gt;= datetime.now().date() and unfolded_day &lt;= datetime.now().date() + timedelta(days=6):
new_events_list.append((unfolded_day, e[2]))
else:
new_events_list.append((start, e[2]))
return new_events_list</code></pre><p>Finally, we want a Pandas DataFrame with the events of both calendars for the coming week. To get to that result, we convert the events lists to data frames and merge on the date. We also add the weekday to the merged data frame.</p><pre><code>def create_events_df(events_list_1, events_list_2):
events_df_1 = pd.DataFrame.from_records(events_list_1, columns=['date', 'events_cal_1'])
events_df_2 = pd.DataFrame.from_records(events_list_2, columns=['date', 'events_cal_2'])
events_df = events_df_1.merge(events_df_2, on='date', how='outer')
events_df.date = pd.to_datetime(events_df.date)
events_df.set_index('date', inplace=True)
events_df.sort_index(inplace=True)
dates = list(pd.period_range(START_DAY, NEXT_WEEK, freq='D').values)
new_idx = []
for d in dates:
new_idx.append(np.datetime64(d))
events_df = events_df.reindex(new_idx)
events_df.reset_index(inplace=True)
events_df['weekday'] = events_df.date.apply(lambda x: x.strftime('%A'))
events_df.set_index('date', inplace=True)
return events_df</code></pre><p>To make sure we cover all dates of the coming week, we use a <code>period_range</code> and <code>reindex</code> the merged data frame.</p><h3 id="getting-the-recipes-from-the-google-sheet">Getting the recipes from the Google sheet</h3><p>At this point, we have a data frame with all days of the coming week and the events (if any) occurring in the two calendars. Now we can start to extract the recipes from the Google sheet and assign a recipe to each day. As with the Google Calendar API, let’s start by creating the service object for the Google Sheets API.</p><pre><code>service_sheet = build('sheets', 'v4', credentials=creds)</code></pre><p>With the method <a href="https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get" rel="noopener">spreadsheets().values().get</a> we can extract the recipes from the Google Sheet.</p><pre><code>def get_recipes(service, spreadsheetId, range):
recipes_result = service.spreadsheets().values().get(spreadsheetId=spreadsheetId, range=range).execute()
recipes = recipes_result.get('values', [])
recipes_df = pd.DataFrame.from_records(recipes[1:], columns=recipes[0])
recipes_df.last_date_on_menu = pd.to_datetime(recipes_df.last_date_on_menu, dayfirst=True)
recipes_df.set_index('row_number', inplace=True)
eligible_recipes = recipes_df[ (recipes_df.last_date_on_menu &lt; PREV_WEEK) | (np.isnat(recipes_df.last_date_on_menu)) ]
return recipes_df, eligible_recipes</code></pre><p>Next, we create a data frame with the recipes. I like working with Pandas DataFrames, but you could use other data structures as well of course.</p><p>The <code>row_number</code> is a field calculated in the Google Sheet itself. We use the Google Sheet function <code>ROW()</code> for that. It will help to update the field <code>last_date_on_menu</code> in the correct row. We will update that date when a recipe is chosen for the coming week.</p><p>We need to make sure that a recipe is only repeated after one week. So we filter <code>recipes_df</code> by <code>last_date_on_menu</code>. This date must be empty or before the previous week.</p><h3 id="generating-the-week-menu">Generating the week menu</h3><p>In this step, we will assign an eligible recipe to each day of the coming week.</p><pre><code>def generate_weekmenu(service, events_df, traditions, free_events):
weekmenu_df = events_df.copy()
for i, r in events_df.iterrows():
if r.weekday in traditions.keys():
weekmenu_df.loc[i, 'recipe'] = traditions[r.weekday]
weekmenu_df.loc[i, 'description'] = ''
else:
if r.weekday in ['Saturday', 'Sunday']:
row_number = choose_recipe('difficult', i, weekmenu_df, eligible_recipes)
update_sheet(service, row_number, i.strftime('%d-%m-%Y'), cfg.SPREADSHEET_ID)
elif r.events_cal_1 in free_events or r.events_cal_2 in free_events \
or pd.isnull(r.events_cal_1) or pd.isnull(r.events_cal_2):
row_number = choose_recipe('medium', i, weekmenu_df, eligible_recipes)
update_sheet(service, row_number, i.strftime('%d-%m-%Y'), cfg.SPREADSHEET_ID)
else:
row_number = choose_recipe('easy', i, weekmenu_df, eligible_recipes)
update_sheet(service, row_number, i.strftime('%d-%m-%Y'), cfg.SPREADSHEET_ID)
return weekmenu_df</code></pre><p>To take into account the work planning (BUSY and FREE events), we will use the <code>difficulty</code> of each recipe. A random recipe of the preferred difficulty will be added to <code>weekmenu_df.</code> Finally we drop it from the eligible recipes to avoid duplicate recipes in the same week.</p><pre><code class="language-python">def choose_recipe(difficulty, idx, weekmenu_df, eligible_recipes):
choice_idx = np.random.choice(eligible_recipes.query("difficulty == '" + difficulty + "'" ).index.values)
weekmenu_df.loc[idx, 'recipe'] = eligible_recipes.loc[choice_idx, 'recipe']
weekmenu_df.loc[idx, 'description'] = eligible_recipes.loc[choice_idx, 'description']
eligible_recipes.drop(choice_idx, inplace=True)
return choice_idx</code></pre><p>The method <a href="https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/update" rel="noopener">spreadsheets().values().update</a> updates the Google Sheet.</p><pre><code class="language-python">def update_sheet(service, row_number, date, spreadsheetId):
range = "recepten!F"  + str(row_number)
values = [[date]]
body = {'values' : values}
result = service.spreadsheets().values().update(spreadsheetId=spreadsheetId
, range=range
, valueInputOption='USER_ENTERED'
, body=body).execute()</code></pre><p>We iterate over each row of <code>weekmenu_df</code>. If the weekday is one of the TRADITIONS weekdays, we assign the corresponding recipe. For the other weekdays, we apply the following logic:</p><ul><li>In the weekend, choose a difficult recipe</li><li>During the week, when I’m at home or my wife has a day off, choose a recipe with medium difficulty</li><li>During the week, when I or my wife are at work, choose an easy recipe</li></ul><h3 id="adding-the-week-menu-to-a-google-calendar">Adding the week menu to a Google Calendar</h3><p>Now that we have a menu for the coming week, we can add it as events to a Google Calendar. I’ve created a separate calendar for it. Share this calendar with the <code>client_email</code> in credentials.json. In the settings of your calendar you also need to give it permission to make changes in the events.</p><pre><code>def add_weekmenu_to_calendar(service, weekmenu_df, calendarId):
for i, r in weekmenu_df.iterrows():
event = {
'summary': r.recipe,
'description': r.description,
'start': {
'date': i.date().isoformat(),
'timeZone': 'Europe/Brussels'
},
'end': {
'date': i.date().isoformat(),
'timeZone': 'Europe/Brussels'
}
}
event = service.events().insert(calendarId=calendarId, body=event).execute()</code></pre><h3 id="let-s-automate">Let’s automate</h3><p>Until now we have taken into account all the requested features for the application. But you would still have to run the code by hand to generate the week menu.</p><p>I found this great website <a href="https://www.pythonanywhere.com/" rel="noopener">PythonAnyWhere</a> where you can schedule Python programs. The free Beginner account allows to schedule one Python program on a daily basis. That’s exactly what we need.</p><p>First, we need to stitch all the functions together and put them in a Python file. In this file, I do an extra check to see where we are in the current week menu. I do this by looking at the last date with a recipe in the Google Calendar with <code>get_date_last_event.</code></p><pre><code>def get_date_last_event(service, calendarId):
events_result = service.events().list(calendarId=calendarId
, singleEvents=True
, orderBy='startTime').execute()
date_last_event = events_result.get('items', [])[-1]['start']['date'][:10]
date_last_event = datetime.strptime(date_last_event, '%Y-%m-%d').date()
return date_last_event</code></pre><p>That date is stored in <code>DATE_LAST_RECIPE.</code> If the current day is after <code>DATE_LAST_RECIPE</code> minus <code>NB_DAYS_BEFORE</code> we can generate a new week menu.</p><p>You can find the complete script on <a href="https://github.com/bertcarremans/weekmenu/blob/master/generate_weekmenu.py" rel="noopener">Github</a>.</p><pre><code>if __name__ == '__main__':
# Getting credentials from credentials.json
CREDS_PATH = Path.cwd() / "weekmenu" / "credentials.json"
creds = service_account.Credentials.from_service_account_file(CREDS_PATH, scopes=cfg.SCOPES)
# Creating service objects
service_cal = build('calendar', 'v3', credentials=creds)
service_sheet = build('sheets', 'v4', credentials=creds)
# Defining dates
DATE_LAST_RECIPE = get_date_last_event(service_cal, cfg.CALENDARID_WEEKMENU)
START_DAY = DATE_LAST_RECIPE + timedelta(days=1)
NEXT_WEEK = START_DAY + timedelta(days=6)
PREV_WEEK = START_DAY + timedelta(days=-7)
START_DAY = format_date(START_DAY)
NEXT_WEEK = format_date(NEXT_WEEK)
PREV_WEEK = format_date(PREV_WEEK)
# Getting the recipes from the Google Sheet
recipes_df, eligible_recipes = get_recipes(service_sheet, cfg.SPREADSHEET_ID, cfg.RANGE)
# Check if the last weekmenu is still active
if DATE_LAST_RECIPE - timedelta(days=cfg.NB_DAYS_BEFORE) &lt; datetime.now().date():
# Getting the events from the Google Calendars
events_list_1 = get_events_by_calendarId(service_cal, cfg.CALENDARID_1, START_DAY, NEXT_WEEK, cfg.ALL_EVENTS)
events_list_2 = get_events_by_calendarId(service_cal, cfg.CALENDARID_2, START_DAY, NEXT_WEEK, cfg.ALL_EVENTS)
# Merge the two events lists
events_df = create_events_df(events_list_1, events_list_2)
# Generating the weekmenu
weekmenu_df = generate_weekmenu(service_sheet, events_df, cfg.TRADITIONS, cfg.FREE_EVENTS)
# Adding the weekmenu to a Google Calendar
add_weekmenu_to_calendar(service_cal, weekmenu_df, cfg.CALENDARID_WEEKMENU)
print('Week menu is added to Google Calendar')
else:
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
