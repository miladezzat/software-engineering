---
card: "https://cdn-media-1.freecodecamp.org/images/1*d43dkbPP_oxPGy6o0WWvnw.jpeg"
tags: [Raspberry Pi]
description: "The air we breathe indoors is not always healthier than the a"
author: "Milad E. Fahmy"
title: "How to monitor your air quality with this DIY setup"
created: "2021-08-16T15:39:25+02:00"
modified: "2021-08-16T15:39:25+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-raspberry-pi tag-python tag-programming tag-electronics tag-iot ">
<header class="post-full-header">
<h1 class="post-full-title">How to monitor your air quality with this DIY setup</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*d43dkbPP_oxPGy6o0WWvnw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*d43dkbPP_oxPGy6o0WWvnw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*d43dkbPP_oxPGy6o0WWvnw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*d43dkbPP_oxPGy6o0WWvnw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*d43dkbPP_oxPGy6o0WWvnw.jpeg" alt="How to monitor your air quality with this DIY setup">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
import grovepi
import time</code></pre><p>First, we import some packages. The <code>config</code> package is a Python script I made to store all configuration parameters.</p><p>Throughout the code, you’ll notice that I sometimes refer to <code>cfg.PARAMETER_NAME</code>. We set the<code>PARAMETER_NAME</code> value in that <code>config.py</code> file. It also contains some passwords and API tokens.</p><p>For security reasons, I will not save that file on <a href="https://github.com/bertcarremans/air_quality_monitoring" rel="noopener">Github</a>. Instead, I’ll provide a clean template <code>config_template.py</code> that you can use for your own project.</p><p>Next, we import the <code>grovepi</code> package. You can install it from the <a href="https://github.com/DexterInd/GrovePi/tree/master/Software/Python" rel="noopener">Github page of Dexter Industries</a> on your Raspberry Pi. It allows us to work with the GrovePi and the connected sensors.</p><p>Finally, we use the <code>time</code> package to pause the program during sensor readings.</p><pre><code>mq_values = {}
for sensor, data in cfg.MQ_SENSORS.items():
grovepi.pinMode(data['pin'],"INPUT")
mq_values[sensor] = 0</code></pre><p>We will store the sensor values for the different sensors in the dictionary <code>mq_values</code>. But first, we initialize the values to zero in a loop over the sensors defined in <code>MQ_SENSORS</code>.</p><p>With the <code>pinMode</code> method, you can define the pin as <code>INPUT</code> or <code>OUTPUT.</code> In our case, we’ll use it as <code>INPUT</code>.</p><p>The <code>pin</code> tells us to which pin on the GrovePi the sensor is connected. We use the analog pins (or ports) which are labeled as A0, A1 and A2 on the GrovePi. Make sure you connect the right sensor to the port described in the <code>config.py</code> file.</p><pre><code>for i in range(cfg.NB_R0_READ):
for sensor, value in mq_values.items():
mq_values[sensor] += grovepi.analogRead(cfg.MQ_SENSORS[sensor]['pin'])
time.sleep(cfg.R0_INTERVAL)</code></pre><p>We then read the sensor value in a loop for <code>cfg.NB_R0_READ</code> times and sum it up in <code>mq_value[sensor]</code>. We read the sensor value with the <code>analogRead</code> method of the <code>grovepi</code> package.</p><p>As described in the <a href="https://www.dexterindustries.com/GrovePi/programming/python-library-documentation/" rel="noopener">documentation</a>, this will return a value between 0 and 1.023. In fact, it converts an analog sensor value to a digital value.</p><p>After one reading for all sensors, we pause the program at <code>cfg.R0_INTERVAL</code> seconds. To get the average value, we divide the cumulated value by <code>cfg.NB_RO_READ.</code></p><pre><code>for sensor, value in mq_values.items():
mq_values[sensor] = mq_values[sensor]/cfg.NB_R0_READ
mq_values[sensor] = mq_values[sensor]/cfg.AR_MAX * cfg.VC
mq_values[sensor] = (cfg.VC - mq_values[sensor])/mq_values[sensor]
x_val = (np.log10(Rs_R0_ratio) - curve['y'])/curve['slope'] + curve['x']
ppm_val = np.power(x_val, 10)
return ppm_val</code></pre><p>We calculate the <code>Rs_R0_ratio</code> in the same manner as when calculating the R0 value. So I will not repeat this. To calculate this ratio, we loop over all gases and sensors and store this in <code>ppm_values[mq_sensor][gas].</code></p><pre><code class="language-python">for gas, curve in cfg.CURVES[mq_sensor].items():
ppm_values[mq_sensor][gas] = get_ppm(mq_values[mq_sensor], curve)</code></pre><h4 id="temperature-humidity-and-pressure">Temperature, humidity and pressure</h4><p>Besides the gas sensors, we read the temperature, humidity and pressure with the BME680 sensor. The BME680 sensor is connected to the GrovePi via an I2C port. To use the sensor, we import the package which can be installed from the <a href="https://github.com/pimoroni/bme680-python" rel="noopener">Pimoroni repo</a> on Github.</p><pre><code>import bme680</code></pre><p>The <code>set_..._oversample</code> methods specify how many samples we take to calculate the average value. We also did that for the gases. With <code>get_sensor_data</code> we read the sensor values.</p><pre><code class="language-python">bme680_sensor = bme680.BME680(bme680.I2C_ADDR_PRIMARY)
bme680_sensor.set_humidity_oversample(bme680.OS_2X)
bme680_sensor.set_pressure_oversample(bme680.OS_4X)
bme680_sensor.set_temperature_oversample(bme680.OS_8X)
bme680_sensor.get_sensor_data()</code></pre><pre><code>bme680_sensor.get_sensor_data()</code></pre><h3 id="storing-and-retrieving-sensor-data-in-cloud-firestore">Storing and retrieving sensor data in Cloud Firestore</h3><p>Some sensors provide new readings very fast. Other (less expensive) sensors will take more time. For this project, we will read the data every minute. This is set in the config file with <code>FIREBASE_INTERVAL = 60</code>.</p><p>In the free Spark plan of Firebase, the <a href="https://firebase.google.com/docs/firestore/quotas" rel="noopener">Cloud Firestore quota</a> allow for 20K writes per day. With a one-minute interval, we will be well below that quota. The limit for reading documents in the Firestore is 50K per day.</p><p>You’ll need to create a Firebase project and <a href="https://firebase.google.com/docs/firestore/quickstart" rel="noopener">create a Cloud Firestore</a>. After that, make sure to <a href="https://firebase.google.com/docs/admin/setup" rel="noopener">generate the credentials</a> to authenticate your application. Save the credentials file in a secure location.</p><p>To work with Firebase via Python, we need to import the <code>firebase_admin </code>package. This package needs to be installed on your Raspberry Pi first, if needed.</p><pre><code class="language-python">import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore</code></pre><p>After that, we can initialize the Firebase app with credentials. I store the location to the credentials file in <code>cfg.FIREBASE_CREDS_JSON</code>. When the app is initialized, we create a Firestore object <code>db</code>.</p><pre><code class="language-python">firebase_path = Path.cwd() / cfg.FIREBASE_CREDS_JSON
cred = credentials.Certificate(str(firebase_path))
firebase_admin.initialize_app(cred)</code></pre><p>After processing the gas values, it is time to store them in the Cloud Firestore. We will create a dictionary <code>firebase_values</code> to gather all the data. With a dict comprehension, we add the values for all gases for all MQ sensors. The BME680 values and timestamp are also added.</p><p>With the <code>add</code> method of the Firestore object <code>db</code>, it is easy to store the data in the Firestore.</p><p>The name of the collection in the Firestore is <code>cfg.FIREBASE_DB_NAME</code>. Learn more about the <a href="https://firebase.google.com/docs/firestore/data-model" rel="noopener">data model of Firestore</a> on the Firebase website.</p><pre><code class="language-python">firebase_values = {mq_sensor + '_' + gas + '_ppm': ppm
for mq_sensor, gases in ppm_values.items()
for gas, ppm in gases.items()
}
firebase_values['temperature'] = bme680_sensor.data.temperature
firebase_values['pressure'] = bme680_sensor.data.pressure
firebase_values['humidity'] = bme680_sensor.data.humidity
firebase_values['date'] = datetime.now()
db.collection(cfg.FIREBASE_DB_NAME).add(firebase_values)</code></pre><p>After storing the data, we wait a minute to start over with the following line of code.</p><pre><code>time.sleep(cfg.FIREBASE_INTERVAL)</code></pre><h3 id="improving-the-air-quality">Improving the air quality</h3><p>If the air quality indoors is not good we should take measures to improve it. Before we can do that, we need to be notified about critical gas concentrations.</p><p>One possibility is to send an alert notification by email, which we’ll discuss below.</p><p>Sometimes the source of indoor air pollution comes from outdoor air. For example, when your neighbors have wood-burning stoves or when you live near a factory.</p><p>In that case, you could install your measurement station outside and turn off the ventilation unit in your house if outdoor air quality is bad. With a remote-controlled switch, this can be done easily.</p><p>All code for this section is in <code>improve_air_quality.py</code> on Github.</p><h4 id="sending-notifications-when-air-quality-reaches-a-critical-level">Sending notifications when air quality reaches a critical level</h4><p>We do not want to send an email each time the sensor outputs critical values (here, each minute).</p><p>Let’s say we want to check each hour whether there were critical values in the last hour. For that, we need to keep track of a <code>reference_time.</code> We initialize this when the program for readings sensor values starts. The interval at which we check again for critical gas concentrations is defined in <code>cfg.ALERT_INTERVAL</code>.</p><pre><code>reference_time = datetime.now()</code></pre><p>When an hour has passed since <code>reference_time</code>, we can start to check if there were critical air pollutant values. We update <code>reference_time</code> with the current time.</p><p>With the <code>pytz</code> package, we can take into account our timezone. In my case, that is <code>Europe/Brussels.</code> We compute <code>one_hour_ago</code> by subtracting 60 minutes from the current time.</p><pre><code>if datetime.now() &gt; reference_time + timedelta(minutes=cfg.ALERT_INTERVAL):
reference_time = datetime.now()
brussels_tz = pytz.timezone('Europe/Brussels')
prev_check_time = brussels_tz.localize(datetime.now()) - timedelta(minutes=cfg.ALERT_INTERVAL)</code></pre><p>With <code>prev_check_time </code>we extract the sensor readings from Firebase of the last hour. We do that by applying a <code>where</code> clause to the data that we <code>get</code> from the Cloud Firestore.</p><p>In this script, we will only use one gas sensor and a limited set of gases. The sensor is selected in <code>cfg.ALERT_SENSOR.</code> The gases are selected in <code>cfg.ALERT_GASES.</code> The data per gas is appended to <code>ppm_vals</code> as well as the <code>timestamps.</code></p><pre><code>timestamps = []
ppm_vals = {}
for gas in cfg.ALERT_GASES:
ppm_vals[gas] = []
docs = db.collection(cfg.FIREBASE_DB_NAME).order_by(u'date').where(u'date', '&gt;=', one_hour_ago).get()
for doc in docs:
data = doc.to_dict()
for gas in cfg.ALERT_GASES:
ppm_vals[gas].append(data[cfg.ALERT_SENSOR + gas + '_ppm'])
timestamps.append(data['date'].strftime('%H:%M:%S'))</code></pre><p>We look for critical values with the function <code>find_crit_val.</code> We will only check if the value surpassed an upper bound <code>ubound</code>. These upper bounds need to be specified in the config file.</p><p>The data are in ascending chronological order. Thus, we can use the <code>next</code> method to find the first timestamp for which <code>v &gt; ubound</code>. We return a tuple containing the timestamp of the critical value and the critical value itself.</p><p>If there is no critical value, we return the tuple <code>(None, None).</code></p><pre><code>def find_crit_val(timestamps, val_list, ubound):
try:
(crit_time, crit_value) = next(((i,v) for i, v in zip(timestamps, val_list) if v &gt; ubound))
except:
(crit_time, crit_value) = (None,None)
return (crit_time, crit_value)</code></pre><p>The critical tuples are stored in a dictionary <code>crit_dict.</code> As the key, we use the gas name. We then check for gas-sensor combinations with a critical timestamp and critical value. In that case, we add an alert message to <code>critical_msg.</code></p><pre><code>crit_dict = {}
for gas in cfg.ALERT_GASES:
(crit_time, crit_value) = find_crit_val(timestamps, ppm_vals[gas], cfg.UPPERBOUNDS[gas])
crit_dict[gas] = (crit_time, crit_value)
critical_msg = ''
for k, v in crit_dict.items():
if v[0] is not None and v[1] is not None:
critical_msg += '\nCritical value for ' + k + ' of ' + str(v[1]) + cfg.UNITS[k] + ' at ' + str(v[0])</code></pre><p>If <code>critical_msg</code> is not empty, we send an email. Sending an email is done with the <code>smtplib</code> package. How to send an email with Python is explained on <a href="https://automatetheboringstuff.com/chapter16/" rel="noopener">AutomateThe BoringStuff.com</a>.</p><p>You need to generate an <a href="https://support.google.com/mail/?p=InvalidSecondFactor" rel="noopener">application-specific password</a> for your email if you are using Google’s two-factor authentication.</p><pre><code>if critical_msg != '':
try:
msg = MIMEText(critical_msg, _charset='utf-8')
msg['Subject'] = Header('Air Quality Alert', 'utf-8')
smtpObj = smtplib.SMTP('smtp.gmail.com', 587)
smtpObj.ehlo()
smtpObj.starttls()
smtpObj.login(cfg.EMAIL, cfg.EMAIL_PW)
smtpObj.sendmail(cfg.EMAIL, cfg.EMAIL, msg.as_string())
smtpObj.quit()
except smtplib.SMTPException:
print('Something went wrong while sending the email')</code></pre><h4 id="automatically-control-your-ventilation-unit">Automatically control your ventilation unit</h4><p>With a remote-controlled switch, we can turn on or off any device that is connected to it. Thus, also a ventilation unit. <a href="https://energenie.com/" rel="noopener">Energenie</a> creates the PiMote add-on specifically for the Raspberry Pi. To control the Energenie switch, you need to install the <code>energenie</code> package and import it.</p><p>Note that you can not attach the PiMote on top of the GrovePi. So you’ll need a second Raspberry Pi.</p><p>When starting the script, the first thing we do is define a boolean variable <code>ventilation_on.</code> We set it to <code>False</code> because this is the first time we run the script.</p><pre><code>import energenie
ventilation_on = False</code></pre><p>If <code>critical_msg</code> is not empty, there was a critical gas concentration in the last alert interval. In that case, we turn on the ventilation with the <code>switch_on</code> method of the energenie package.</p><p>If there was no critical gas concentration and the ventilation was switched on in the last alert interval, we can switch it off.</p><p>You might need to set another interval before switching your ventilation off. That depends on the flow rate of your ventilation unit, the gases measured and whether the pollution source has been disabled.</p><pre><code>if critical_msg != '':
if not ventilation_on:
energenie.switch_on(1)
ventilation_on = True
else:
if ventilation_on:
energenie.switch_off(1)
ventilation_on = False</code></pre><h3 id="visualization-of-air-quality-with-dash">Visualization of air quality with Dash</h3><p>A notification with critical gas concentrations can help to take immediate action. But it is also interesting to track the gas concentrations over time. By visualizing the sensor values in a dashboard, we can look at the trend of the gas concentrations. This can be done with Dash. On the website of Dash, you can find a <a href="https://dash.plot.ly/" rel="noopener">great tutorial</a> on how to get started.</p><p>In this project, we will build a dashboard and host it on <a href="https://www.pythonanywhere.com/" rel="noopener">PythonAnyWhere.com</a>. To use Dash on PythonAnywhere, you need to create a <a href="https://help.pythonanywhere.com/pages/Virtualenvs/" rel="noopener">virtual environment</a>. You can follow the steps of <a href="https://github.com/conradho/dashingdemo" rel="noopener">this demo</a> on how to set-up a Dash app on PythonAnyWhere.</p><p>Below I will show how I built the dashboard for our air quality station. The full script can be found in plot_sensor_values.py on <a href="https://github.com/bertcarremans/air_quality_monitoring" rel="noopener">Github</a>.</p><p>First of all, you need to import the <code>dash</code> package.</p><pre><code>import dash
import dash_core_components as dcc
import dash_html_components as html</code></pre><p>In the demo on the Dash website, they use a link to a Cascading Style Sheet (CSS) to provide a nice page design. If you want to <a href="https://dash.plot.ly/external-resources" rel="noopener">use a local CSS</a> on your laptop or web server, you can add an assets folder. In that folder you can add your CSS and Dash will pick it up from there.</p><p>Then you’ll need to get the data from Firebase. This can be done similarly as we did for sending the alert notifications. So we will not go over that again.</p><p>With the data collected from Firebase, we can fill the graphs in our dashboard. We first create a Dash object <code>app</code> and give it a <code>title.</code></p><pre><code>app = dash.Dash(__name__)
app.title = 'Indoor Air Quality Dashboard'</code></pre><p>Then we create the <code>layout</code> of the dashboard. A <code>H1</code> heading component, a <code>container</code> div and a div containing the <code>graphs.</code></p><pre><code>app.layout = html.Div([
html.H1(style={'textAlign':'center'}, children='Indoor Air Quality Dashboard'),
html.Div(id='container'),
html.Div(graphs)
])</code></pre><p><code>graphs</code> is a list that contains the info per graph. Below you can see how the graph for temperature is set up. You can add the <code>dcc.Graph</code> for humidity and pressure as well by appending them to <code>graphs.</code></p><pre><code>graphs = [
dcc.Graph(
id='temperature',
figure={
'data':[{
'x':timestamps,
'y':temperatures,
'type':'line',
'name': 'Temperature',
'line': {'width':2, 'color': '#542788'}
}],
'layout':{
'title': 'Temperature',
'yaxis': {'title': 'Celsius'},
'xaxis': {'title': 'Timestamp', 'tickvals':timestamps}
}
}
)
]</code></pre><p>The graphs for the MQ sensors can be appended in a for loop.</p><pre><code>for mq_sensor in cfg.MQ_SENSORS.keys():
for gas in cfg.CURVES[mq_sensor].keys():
sensor_gas_key = mq_sensor + '_' + gas + '_ppm'
title = gas + ' concentration on '+ mq_sensor + ' sensor'
data = ppm_values[mq_sensor][gas]
data.reverse()
graphs.append(dcc.Graph(
id=sensor_gas_key,
figure={
'data': [{
'x': timestamps,
'y': data,
'type':'line',
'name': title,
'line': {'width':2}
}],
'layout': {
'title': title,
'yaxis': {'title': 'ppm'},
'xaxis': {'title': 'Timestamp', 'tickvals':timestamps}
}
}
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
