---
card: "https://cdn-media-1.freecodecamp.org/images/0*4Di0P5E6_sQYXxYV.jpg"
tags: [Python]
description: "It was a cool autumn evening when Hila Kloper and I were thin"
author: "Milad E. Fahmy"
title: "A Total Ellipse on the Map"
created: "2021-08-16T15:40:06+02:00"
modified: "2021-08-16T15:40:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-code tag-math tag-maps tag-algorithms ">
<header class="post-full-header">
<h1 class="post-full-title">A Total Ellipse on the Map</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*4Di0P5E6_sQYXxYV.jpg 300w,
https://cdn-media-1.freecodecamp.org/images/0*4Di0P5E6_sQYXxYV.jpg 600w,
https://cdn-media-1.freecodecamp.org/images/0*4Di0P5E6_sQYXxYV.jpg 1000w,
https://cdn-media-1.freecodecamp.org/images/0*4Di0P5E6_sQYXxYV.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*4Di0P5E6_sQYXxYV.jpg" alt="A Total Ellipse on the Map">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
radius_in_meters):
c2 = haversine((p1_lat, p1_lng), (p2_lat, p2_lng)) * 1000.0
if radius_in_meters &lt; c2:
raise ValueError("Please specify radius larger than the
distance between the two input points.")
a = radius_in_meters / 2.0
b = sqrt(pow(a, 2) - pow(c2 / 2.0, 2))
"""
:param a: length of "horizontal" axis in meters
:param b: length of "vertical" axis in meters
:param num_points: (half the) number of points to draw
:return: List of tuples of perimeter points on the ellipse,
centered around (0,0), in m.
"""
x_points = list(np.linspace(-a, a, num_points))[1:-1]
y_points_pos = [sqrt(pow(a, 2) - pow(x, 2)) *
(float(b) / float(a))
for x in x_points]
y_points_neg = [-y for y in y_points_pos]
perimeter_points_in_meters =
[tuple([-a, 0])] + \
[tuple([x, y]) for x, y in zip(x_points, y_points_pos)] + \
[tuple([a, 0])] + \
list(reversed([tuple([x, y])
for x, y in zip(x_points, y_points_neg)]))
"""
:param center_lng, center_lat: GPS coordinates of the center
between the two input points.
:param dx: distance to add to x-axis (lng) in meters
:param dy: distance to add to y-axis (lat) in meters
"""
new_x = (center_lng + (dx / R_EARTH) * (180 / pi) /
np.cos(center_lat * pi/180))
new_y = center_lat + (dy / R_EARTH) * (180 / pi)
return tuple([new_x, new_y])</code></pre><h4 id="step-4-rotate-">Step 4. Rotate.</h4><p>This time, the wonders of the internet did not fail us (as they did on our major ellipse-drawing task). We found <a href="https://pypi.org/project/Shapely/" rel="noopener">shapely</a> package to do the rotation for us. The one trick to remember here is that you can’t rotate the points one by one. Rather you should <em>form a shape first</em>, and then <em>rotate the entire shape</em>.</p><pre><code class="language-python">def GetEllipsePoints(p1_lat, p1_lng, p2_lat, p2_lng,
perimeter_points_in_meters):
"""
Enter ellipse centers in lat-lng and ellipse perimeter points
around the origin (0,0), and get points on the perimeter of the
ellipse around the centers in lat-lng.
:param p1_lat: lat coordinates of center point 1
:param p1_lng: lng coordinates of center point 1
:param p2_lat: lat coordinates of center point 2
:param p2_lng: lng coordinates of center point 2
:param perimeter_points_in_meters: List of tuples of perimeter
points on the ellipse, centered around (0,0), in m.
:return: List of the points we really want, tuples of (lat,lng)
"""
center_lng = (p1_lng + p2_lng) / 2.0
center_lat = (p1_lat + p2_lat) / 2.0
perimeter_points_in_lng_lat = \
[AddMetersToPoint(center_lng, center_lat, p[0], p[1])
for p in perimeter_points_in_meters]
ellipse = LineString(perimeter_points_in_lng_lat)
angle = degrees(atan2(p2_lat - p1_lat, p2_lng - p1_lng))
ellipse_rotated = affinity.rotate(ellipse, angle)
ellipse_points_lng_lat = list(ellipse_rotated.coords)
ellipse_points = [tuple([p[1], p[0]])
for p in ellipse_points_lng_lat]
return ellipse_points</code></pre><h4 id="surprise-step-5-draw-on-s2-map-">Surprise! Step 5. Draw on s2 Map!</h4><p>We wanted to present the ellipse nicely on an <a href="http://s2map.com" rel="noopener">s2map</a>. Apparently you can do that by opening the URL from inside your script. We used <a href="https://docs.python.org/2/library/subprocess.html" rel="noopener">subprocess</a> to do that.</p><pre><code class="language-python">def OpenS2Map(points):
url = \
"http://s2map.com/#order=latlng&amp;mode=polygon&amp;s2=false" \
"&amp;points={}".format(str(points).replace(" ", ","))
cmd = ["python", "-m", "webbrowser", "-t", url]
subprocess.Popen(cmd, stdout=subprocess.PIPE,
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
