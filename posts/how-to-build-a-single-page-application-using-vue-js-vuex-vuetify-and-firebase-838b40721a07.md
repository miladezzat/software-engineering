---
card: "https://cdn-media-1.freecodecamp.org/images/1*VDDEC608yRol_u0vPWTFeA.png"
tags: [Vuejs]
description: "Do you want to learn how to use Vue.js? Want to create a real"
author: "Milad E. Fahmy"
title: "How to build a Single Page Application using Vue.js, Vuex, Vuetify, and Firebase"
created: "2021-08-16T11:35:26+02:00"
modified: "2021-08-16T11:35:26+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-vuejs tag-firebase tag-software-engineering tag-technology tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a Single Page Application using Vue.js, Vuex, Vuetify, and Firebase</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*VDDEC608yRol_u0vPWTFeA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*VDDEC608yRol_u0vPWTFeA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*VDDEC608yRol_u0vPWTFeA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*VDDEC608yRol_u0vPWTFeA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*VDDEC608yRol_u0vPWTFeA.png" alt="How to build a Single Page Application using Vue.js, Vuex, Vuetify, and Firebase">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;v-app&gt;
&lt;v-content transition="slide-x-transition"&gt;
&lt;router-view&gt;&lt;/router-view&gt;
&lt;/v-content&gt;
&lt;/v-app&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
name: 'App'
};
&lt;/script&gt;
&lt;style&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
name: 'AppNavigation'
};
&lt;/script&gt;
&lt;style scoped&gt;
&lt;/style&gt;</code></pre><p>We will start with creating the menu that will be displayed on medium and large screen sizes. To do that we will use the &lt;v-toolbar&gt; component. Here is the code you will put in for the navigation:</p><pre><code class="language-js">&lt;template&gt;
&lt;v-toolbar app color="brown darken-4" dark&gt;
&lt;v-toolbar-side-icon&gt;&lt;/v-toolbar-side-icon&gt;
&lt;v-toolbar-title&gt;{{appTitle}}&lt;/v-toolbar-title&gt;
&lt;v-btn flat&gt;Menu&lt;/v-btn&gt;
&lt;v-spacer&gt;&lt;/v-spacer&gt;
&lt;v-btn flat&gt;SIGN IN&lt;/v-btn&gt;
&lt;v-btn color="brown lighten-3"&gt;JOIN&lt;/v-btn&gt;
&lt;/v-toolbar&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
name: 'AppNavigation'
};
&lt;/script&gt;
&lt;style scoped&gt;
&lt;v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"&gt;&lt;/v-toolbar-side-icon&gt;
&lt;v-spacer class="hidden-md-and-up"&gt;&lt;/v-spacer&gt;
&lt;v-toolbar-title&gt;{{appTitle}}&lt;/v-toolbar-title&gt;
&lt;v-btn flat class="hidden-sm-and-down"&gt;Menu&lt;/v-btn&gt;
&lt;v-spacer class="hidden-sm-and-down"&gt;&lt;/v-spacer&gt;
&lt;v-btn flat class="hidden-sm-and-down"&gt;SIGN IN&lt;/v-btn&gt;
&lt;v-btn color="brown lighten-3" class="hidden-sm-and-down"&gt;JOIN&lt;/v-btn&gt;
&lt;span&gt;
&lt;v-navigation-drawer app v-model="drawer" class="brown lighten-2" dark disable-resize-watcher&gt;
&lt;v-list&gt;
&lt;template v-for="(item, index) in items"&gt;
&lt;v-list-tile :key="index"&gt;
&lt;v-list-tile-content&gt;
{{item.title}}
&lt;/v-list-tile-content&gt;
&lt;/v-list-tile&gt;
&lt;v-divider :key="`divider-${index}`"&gt;&lt;/v-divider&gt;
&lt;/template&gt;
&lt;/v-list&gt;
&lt;/v-navigation-drawer&gt;
&lt;v-toolbar app color="brown darken-4" dark&gt;
&lt;v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"&gt;&lt;/v-toolbar-side-icon&gt;
&lt;v-spacer class="hidden-md-and-up"&gt;&lt;/v-spacer&gt;
&lt;v-toolbar-title&gt;{{appTitle}}&lt;/v-toolbar-title&gt;
&lt;v-btn flat class="hidden-sm-and-down"&gt;Menu&lt;/v-btn&gt;
&lt;v-spacer class="hidden-sm-and-down"&gt;&lt;/v-spacer&gt;
&lt;v-btn flat class="hidden-sm-and-down"&gt;SIGN IN&lt;/v-btn&gt;
&lt;v-btn color="brown lighten-3" class="hidden-sm-and-down"&gt;JOIN&lt;/v-btn&gt;
&lt;/v-toolbar&gt;
&lt;/span&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
name: 'AppNavigation',
data() {
return {
appTitle: 'Meal Prep',
drawer: false,
items: [
{ title: 'Menu' },
{ title: 'Sign In' },
{ title: 'Join' }
]
};
}
};
&lt;/script&gt;
&lt;style scoped&gt;
&lt;/style&gt;</code></pre><p>Let me explain what I have put in for the drawer navigation. I have added the prop <code>app</code>. This is the same prop we added for toolbar. Next I have added a v-model that is looking for the data item called drawer. In data, drawer will be initially set to <code>false</code>. This means the drawer is closed. The drawer will open when it is true and close when it is false. I have added a click method on the toolbar side icon. When you click on the hamburger menu it will change the value of drawer from true to false or vice versa.</p><p>The last item I have added is to give it a class with a color of <code>brown lighten-2</code>. I decided to add a color to my drawer since the default color is white.</p><p>Next I am using Vuetify’s &lt;v-list&gt; component. In data I have created an array called items. This is an array of objects. Each object has a text key and the value is what is displayed in the menu. I am using a data item instead of hard-coding the menu items in the list because we will be using this in later series when we add authentication.</p><p>In data, I have added drawer and items:</p><pre><code class="language-js">export default {
name: 'AppNavigation',
data() {
return {
appTitle: 'Meal Prep',
drawer: false,
items: [
{ title: 'Menu' },
{ title: 'Sign In' },
{ title: 'Join' }
]
};
}
&lt;v-app&gt;
&lt;app-navigation&gt;&lt;/app-navigation&gt;
&lt;v-content transition="slide-x-transition"&gt;
&lt;router-view&gt;&lt;/router-view&gt;
&lt;/v-content&gt;
&lt;/v-app&gt;
&lt;/template&gt;
&lt;script&gt;
import AppNavigation from '@/components/AppNavigation';
export default {
name: 'App',
components: {
AppNavigation
}
};
&lt;/script&gt;
&lt;style&gt;
&lt;/style&gt;</code></pre><p>First you need to import the AppNavigation. When I import it I give it a name of AppNavigation. In the script I have added a components object that contains AppNavigation. The format of the name is important. When the component is added it will hyphenate the name. When I put the component in the html template I use the hyphenated name of &lt;app-navigation&gt;.</p><p><strong>NOTE: </strong><em>if you are watching the code closely you will notice that I removed the &lt;transition&gt; and placed it directly on the &lt;v-content&gt;. Just wanted to let you know I made that change since I really didn’t want to go back and update all t</em>he pictures!</p><h4 id="creating-the-content-for-our-home-page">Creating the content for our Home Page</h4><p>We are going to add a full-screen image for our home page. Then we are going to add text over the image. Instead of putting our code directly in the Home.vue file located in the views folder, I am going to create a new Vue component. In the components folder create a new file called HomeHero.vue.</p><p>Vuetify has a 12 point grid system. Built using flex-box, the grid is used to layout an application’s content.The <code><strong>v-container</strong></code> can be used for a center focused page, or given the <code><strong>fluid</strong></code> prop to extend its full width. <code><strong>v-layout</strong></code> is used for separating sections. The structure of your layout will be as follows, <strong>v-container</strong> » <strong>v-layout</strong> » <strong>v-flex</strong>.</p><p>We will use this grid system in the design for our HomeHero component. We are going to use &lt;v-container fluid&gt; for our root element in our template. We are going to add the<code> prop fill-</code>height to it. This prop will automatically adjust the container to have a height of 100% of the screen. The last thing I do is add class c<code>alled hom</code>e-hero.</p><p>In my styles I am going to add a background image to the container. This is the full-screen image that users will see when loading the website. I am using an image from unsplash.com.</p><p>Inside the container I will have a &lt;v-layout&gt;. The layout will wrap all the text displayed on top of the image. Vuetify provides typography settings that I will use to style the text. For the main text I am giving it a</p><p><code>class="display-4 font-weight-black white--text"</code></p><p>The display-4 will produce text that has a font size of 112sp and a font weight of light. I am going to override that font-weight by specifying a font-weight-black. I want the text to be white so I can add <code>white--text</code> The last thing I add is to specify the text to be centered.</p><p>I will use the same styling for the second row of text. The only addition is I add an alignment of <code>mb-3</code>. Vuetify provides 5 levels of spacing. The mb is saying apply a margin-bottom of 3. This will provide some spacing between the header and subHeader text.</p><p>The last thing I add is a button toward the bottom of the screen. I add this because sometimes people might not think to scroll down to see more content since the image is fullscreen. The image is a visual indicator to the users that there is more content below.</p><p>I am using the &lt;v-btn&gt; component from Vuetify. This is the same component we used in the navigation. This time I am applying the<code> pr</code>op fab to the button. Floating buttons are round and usually contain an icon. I am going to add an icon of a down arrow. The &lt;v-icon&gt; component requires you to enter the name of the icon to be<a href="https://material.io/tools/icons/?style=baseline" rel="noopener"> displayed. Here is a list of all the material icons available for you to use </a>with Vuetify.</p><p>For the button I am going to add a class that will put a margin-top of 5 and set the color to be the same brown color that I used for the menu. For the icon I set its color to be white. I also set the icon to be large.</p><p>Here is the code for the HomeHero file:</p><pre><code class="language-js">&lt;template&gt;
&lt;v-container fluid fill-height class="home-hero"&gt;
&lt;v-layout justify-center align-center column pa-5&gt;
&lt;div class="display-4 font-weight-black white--text text-xs-center"&gt;HEALTHY MEALS&lt;/div&gt;
&lt;div class="display-4 font-weight-black white--text text-xs-center mb-3"&gt;FOR YOUR TABLE&lt;/div&gt;
&lt;div class="display-1 font-weight-bold white--text text-xs-center"&gt;Finally be a foodie at home with fresh, chef-prepared meals delivered daily to your door.&lt;/div&gt;
&lt;v-btn fab class="mt-5 brown darken-4"&gt;
&lt;v-icon large color="white"&gt;expand_more&lt;/v-icon&gt;
&lt;/v-btn&gt;
&lt;/v-layout&gt;
&lt;/v-container&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
name: 'HomeHero'
};
&lt;/script&gt;
&lt;style scoped&gt;
.home-hero {
background: url('http://source.unsplash.com/0BhSKStVtdM');
background-size: cover;
width: 100%;
height: 100%;
}
&lt;/style&gt;</code></pre><h4 id="adding-homehero-component-to-application">Adding HomeHero Component to Application</h4><p>Now that we have created our component we need to add it to the application. Open up the Home.vue file in the views folder. Just like we did with AppNavigation, you will need to import the component and place it in the template. Here is what the Home.vue file should look like:</p><pre><code class="language-js">&lt;template&gt;
&lt;span&gt;
&lt;home-hero&gt;&lt;/home-hero&gt;
&lt;/span&gt;
&lt;/template&gt;
&lt;script&gt;
import HomeHero from '@/components/HomeHero';
export default {
name: 'home',
components: {
HomeHero
}
};
&lt;/script&gt;</code></pre><h4 id="adding-more-content-to-home-page">Adding More Content to Home Page</h4><p>Right now we have a very nice looking home page. But we need to add more content to explain what our meal prep service provides to potential customers. So let’s add that now.</p><p>For the content we will create a new component called HomeDetails.vue. In the components folder create a new file called HomeDetails.vue. For the content I am going to use Lorem Ipsum for the text.</p><p>I will use the Vuetify layout scheme by creating the root element with the &lt;v-container&gt; component. Inside that I will use the &lt;v-layout&gt; component. For the layout I will add <code>the pr</code>op of column. Since the layout is based off of Flexbox then it will align all the content vertically. Every text item will be in a &lt;v-flex&gt; component.</p><p>The header will use the Vuetify typography class of <code>display-2</code>. I want this text to be centered. To make it center I add <code>text-xs-center</code> to the class. The last thing to add is <code>my-5</code>. This adds a margin along the y-axis which means it adds a margin-top and a margin-bottom.</p><p>Next I am going to create another &lt;v-flex&gt; entry. This entry will have a headline and a subheading of text. I want to add some white space around the text so I am adding a cla<code>ss o</code>f mt-3. This will add a margin-top of 3 to all items of text.</p><p>Here is my HomeDetails.vue file:</p><pre><code class="language-js">&lt;template&gt;
&lt;v-container&gt;
&lt;v-layout column&gt;
&lt;v-flex  class="display-2 text-xs-center my-5"&gt;Big Title Goes Here&lt;/v-flex&gt;
&lt;v-flex&gt;
&lt;div class="headline mt-3"&gt;Lorem ipsum&lt;/div&gt;
&lt;p class="subheading mt-3"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar risus quis mauris interdum, in euismod nibh pretium. Etiam pulvinar tincidunt dapibus. Quisque sollicitudin, mauris a consequat consectetur, turpis nisl sollicitudin enim, id consectetur neque neque nec metus. Pellentesque dolor nisi, vulputate quis lobortis ac, tincidunt et quam. Mauris pulvinar blandit nisi nec mattis. Aliquam accumsan ut sem eget efficitur. Vivamus in tortor gravida eros laoreet condimentum nec vel dui. Nullam quam massa, ultrices eget tincidunt a, pulvinar ac libero.&lt;/p&gt;
&lt;/v-flex&gt;
&lt;v-flex&gt;
&lt;div class="headline mt-3"&gt;Lorem ipsum&lt;/div&gt;
&lt;p class="subheading mt-3"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar risus quis mauris interdum, in euismod nibh pretium. Etiam pulvinar tincidunt dapibus. Quisque sollicitudin, mauris a consequat consectetur, turpis nisl sollicitudin enim, id consectetur neque neque nec metus. Pellentesque dolor nisi, vulputate quis lobortis ac, tincidunt et quam. Mauris pulvinar blandit nisi nec mattis. Aliquam accumsan ut sem eget efficitur. Vivamus in tortor gravida eros laoreet condimentum nec vel dui. Nullam quam massa, ultrices eget tincidunt a, pulvinar ac libero.&lt;/p&gt;
&lt;p class="subheading mt-3"&gt;Nullam nec massa eu est fringilla lobortis. Praesent in enim in justo blandit varius. Cras placerat arcu in sapien rhoncus aliquet. Sed interdum tortor et tincidunt condimentum. Etiam consequat mi leo, in suscipit odio scelerisque molestie. Nam et purus consequat, iaculis augue vel, sagittis ligula. Vestibulum aliquet vulputate erat. Phasellus id mauris mauris. Nunc a maximus dolor. Curabitur ut vestibulum arcu. Curabitur non lacus justo. Cras varius a magna in semper. Nulla eros ante, consectetur faucibus sapien eu, rhoncus imperdiet dui. Sed viverra iaculis nunc, id pulvinar massa egestas vitae.&lt;/p&gt;
&lt;p class="subheading mt-3"&gt;Aenean erat metus, imperdiet eget nisl laoreet, venenatis ultricies ante. In interdum ante vel dictum ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer sit amet gravida diam. Aliquam in tempor metus. Fusce pellentesque pharetra sem, et luctus justo tempor dictum. Ut feugiat est sed tristique egestas. Nullam posuere a nunc in blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse laoreet ultrices eros, nec malesuada enim semper sit amet. Maecenas efficitur consectetur accumsan. Etiam in aliquam turpis, ut pharetra nulla. Vestibulum malesuada, nulla id elementum cursus, nibh dui rhoncus felis, suscipit mattis felis enim sed ex. Pellentesque scelerisque aliquam lorem, vel mattis nibh tincidunt ac. Suspendisse ac nibh sit amet lacus ullamcorper maximus.&lt;/p&gt;
&lt;/v-flex&gt;
&lt;v-flex&gt;
&lt;div class="headline mt-3"&gt;Lorem ipsum&lt;/div&gt;
&lt;p class="subheading mt-3"&gt;Nullam nec massa eu est fringilla lobortis. Praesent in enim in justo blandit varius. Cras placerat arcu in sapien rhoncus aliquet. Sed interdum tortor et tincidunt condimentum. Etiam consequat mi leo, in suscipit odio scelerisque molestie. Nam et purus consequat, iaculis augue vel, sagittis ligula. Vestibulum aliquet vulputate erat. Phasellus id mauris mauris. Nunc a maximus dolor. Curabitur ut vestibulum arcu. Curabitur non lacus justo. Cras varius a magna in semper. Nulla eros ante, consectetur faucibus sapien eu, rhoncus imperdiet dui. Sed viverra iaculis nunc, id pulvinar massa egestas vitae.&lt;/p&gt;
&lt;/v-flex&gt;
&lt;/v-layout&gt;
&lt;/v-container&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
name: 'HomeDetails'
};
&lt;/script&gt;
&lt;style scoped&gt;
&lt;/style&gt;</code></pre><h4 id="adding-homedetails-to-the-application">Adding HomeDetails to The Application</h4><p>We will add HomeDetails to the application just like we did for HomeHero. Open up the Home.vue file in the views folder. You will need to import HomeDetails component. Then add it to the template below HomeHero.</p><p>Here is what the Home.vue file looks like:</p><pre><code class="language-js">&lt;template&gt;
&lt;span&gt;
&lt;home-hero&gt;&lt;/home-hero&gt;
&lt;home-details&gt;&lt;/home-details&gt;
&lt;/span&gt;
&lt;/template&gt;
&lt;script&gt;
import HomeHero from '@/components/HomeHero';
import HomeDetails from '@/components/HomeDetails';
export default {
name: 'home',
components: {
HomeHero,
HomeDetails
}
};
&lt;v-container grid-list-lg&gt;
&lt;v-layout row&gt;
&lt;v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"&gt;Available Meal Plans&lt;/v-flex&gt;
&lt;/v-layout&gt;
&lt;v-layout row wrap&gt;
&lt;v-flex xs12 sm12 md4&gt;
&lt;v-img src="http://source.unsplash.com/hjCA3ecCXAQ" height="500px"&gt;
&lt;v-container fill-height fluid&gt;
&lt;v-layout fill-height&gt;
&lt;v-flex xs12 align-end flexbox&gt;
&lt;span class="headline white--text"&gt;KETO&lt;/span&gt;
&lt;/v-flex&gt;
&lt;/v-layout&gt;
&lt;/v-container&gt;
&lt;/v-img&gt;
&lt;div&gt;
&lt;h3 class="headline mb-0"&gt;Keto&lt;/h3&gt;
&lt;div&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget velit eu dui tristique lobortis sit amet vel tellus.
&lt;/div&gt;
&lt;/div&gt;
&lt;/v-flex&gt;
&lt;v-flex xs12 sm12 md4&gt;
&lt;v-img src="http://source.unsplash.com/6S27S6pZ6o0" height="500px"&gt;
&lt;v-container fill-height fluid&gt;
&lt;v-layout fill-height&gt;
&lt;v-flex xs12 align-end flexbox&gt;
&lt;span class="headline white--text"&gt;PALEO&lt;/span&gt;
&lt;/v-flex&gt;
&lt;/v-layout&gt;
&lt;/v-container&gt;
&lt;/v-img&gt;
&lt;div&gt;
&lt;h3 class="headline mb-0"&gt;Paleo&lt;/h3&gt;
&lt;div&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget velit eu dui tristique lobortis sit amet vel tellus.
&lt;/div&gt;
&lt;/div&gt;
&lt;/v-flex&gt;
&lt;v-flex xs12 sm12 md4&gt;
&lt;v-img src="http://source.unsplash.com/1SPu0KT-Ejg" height="500px"&gt;
&lt;v-container fill-height fluid&gt;
&lt;v-layout fill-height&gt;
&lt;v-flex xs12 align-end flexbox&gt;
&lt;span class="headline white--text"&gt;VEGAN&lt;/span&gt;
&lt;/v-flex&gt;
&lt;/v-layout&gt;
&lt;/v-container&gt;
&lt;/v-img&gt;
&lt;div&gt;
&lt;h3 class="headline mb-0"&gt;Vegan&lt;/h3&gt;
&lt;div&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget velit eu dui tristique lobortis sit amet vel tellus.
&lt;/div&gt;
&lt;/div&gt;
&lt;/v-flex&gt;
&lt;/v-layout&gt;
&lt;/v-container&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
name: 'HomePlans'
};
&lt;/script&gt;
&lt;style scoped&gt;
&lt;/style&gt;</code></pre><h4 id="adding-homeplans-to-the-application">Adding HomePlans to the Application</h4><p>We have done this already several times before. Open up the Home.vue file in the views folder. Import the HomePlans.vue component and place it in the template below HomeDetails.</p><p>This is the code for Home.vue:</p><pre><code class="language-js">&lt;template&gt;
&lt;span&gt;
&lt;home-hero&gt;&lt;/home-hero&gt;
&lt;home-details&gt;&lt;/home-details&gt;
&lt;home-plans&gt;&lt;/home-plans&gt;
&lt;/span&gt;
&lt;/template&gt;
&lt;script&gt;
import HomeHero from '@/components/HomeHero';
import HomeDetails from '@/components/HomeDetails';
import HomePlans from '@/components/HomePlans';
export default {
name: 'home',
components: {
HomeHero,
HomeDetails,
HomePlans
}
};
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
