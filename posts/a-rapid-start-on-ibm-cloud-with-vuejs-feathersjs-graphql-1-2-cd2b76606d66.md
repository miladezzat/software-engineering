---
card: "https://cdn-media-1.freecodecamp.org/images/1*f47Cf5dkbqfW3XdFGleQ_w.png"
tags: [JavaScript]
description: by Thomas Reinecke
author: "Milad E. Fahmy"
title: "Get a rapid start on IBM Cloud with VueJS, FeathersJS, and GraphQL"
created: "2021-08-15T19:48:16+02:00"
modified: "2021-08-15T19:48:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-vuejs tag-cloud tag-ibm tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Get a rapid start on IBM Cloud with VueJS, FeathersJS, and GraphQL</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*f47Cf5dkbqfW3XdFGleQ_w.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*f47Cf5dkbqfW3XdFGleQ_w.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*f47Cf5dkbqfW3XdFGleQ_w.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*f47Cf5dkbqfW3XdFGleQ_w.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*f47Cf5dkbqfW3XdFGleQ_w.png" alt="Get a rapid start on IBM Cloud with VueJS, FeathersJS, and GraphQL">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Thomas Reinecke</p>
<h1 id="get-a-rapid-start-on-ibm-cloud-with-vuejs-feathersjs-and-graphql">Get a rapid start on IBM Cloud with VueJS, FeathersJS, and GraphQL</h1>
<p>Are you looking for a rapid start on playing around with IBMs Cloud? What about taking this opportunity and combining it with some of the latest and greatest technologies for the Web VueJS, FeathersJS and GraphQL? Well then this is a must-read for you to lift-off in less than an hour.</p>
<p><strong>What we’ll do:</strong></p>
<ul>
<li>Overview of the app</li>
<li>create a fresh git repository on GitHub</li>
<li>initialize the frontend app based on Vue CLI</li>
<li>initialize the backend app based on FeathersJS CLI</li>
<li>add GraphQL capabilities to the backend</li>
<li>test the GraphQL API and publish/subscribe</li>
<li>add dependencies to the existing frontend app</li>
<li>create a simple SPA thats calling a GraphQL backend</li>
<li>deployment to IBM’s Cloud</li>
</ul>
<h3 id="overview-of-the-app">Overview of the App</h3>
<h3 id="create-a-fresh-git-repository-on-github">Create a fresh git repository on GitHub</h3>
<p>If you don’t yet have a GitHub account, go to github.com and create it. Create yourself a new repository called “VueAndIBMsCloud” (or whatever name you want). Assuming you’re well able to use a console, use the following code to create your first project commit:</p><pre><code class="language-bash">mkdir VueAndIBMsCloud
cd VueAndIBMsCloud
echo "# VueAndIBMsCloud" &gt;&gt; README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/&lt;yourRepo&gt;/VueAndIBMsCloud.git
git push -u origin master</code></pre>
<h3 id="initialise-the-frontend-app-based-on-vue-cli">Initialise the frontend app based on Vue CLI</h3>
<p>If you need more details to install Vue CLI, work through this article and come back.</p>
<p><a href="https://vuejs.org/v2/guide/installation.html" rel="noopener"><strong>Installation - Vue.js</strong></a><br><a href="https://vuejs.org/v2/guide/installation.html" rel="noopener"><em>Vue.js - The Progressive JavaScript Framework</em></a><br><a href="https://vuejs.org/v2/guide/installation.html" rel="noopener">vuejs.org</a></p>
<p>Use the vue-cli to initialize a Progressive Web App (PWA)-based “frontend” project:</p><pre><code class="language-bash">npm install -g vue-cli
vue init pwa frontend
? Project name frontend
? Project short name: fewer than 12 characters to not be truncated on homescreens (default: same as name)
? Project description A Vue.js project
? Author thomasreinecke &lt;thomas.reinecke@de.ibm.com&gt;
? Vue build runtime
? Install vue-router? Yes
? Use ESLint to lint your code? No
? Setup unit tests with Karma + Mocha? No
? Setup e2e tests with Nightwatch? No</code></pre>
<p>Now compile the project and run it the very first time (instead of “npm” I recommend to use “yarn”):</p><pre><code class="language-bash">cd frontend
yarn
yarn dev</code></pre>
<p>Your frontend application is running at <a href="http://localhost:8080" rel="noopener">http://localhost:8080</a></p>
<p>Congratulations, you’ve just created the frontend app based on VueJs.</p>
<h3 id="initialize-backend-app-based-on-feathersjs-cli">Initialize backend app based on feathersJS CLI</h3>
<p>Use the FeathersJS CLI to initialize the backend project. If you need more details on FeatherJS CLI, use the following link and come back:</p>
<p><a href="https://github.com/feathersjs/cli" rel="noopener"><strong>feathersjs/cli</strong></a><br><a href="https://github.com/feathersjs/cli" rel="noopener"><em>cli - The command line interface for scaffolding Feathers applications</em></a><br><a href="https://github.com/feathersjs/cli" rel="noopener">github.com</a></p><pre><code class="language-bash">npm install -g @feathersjs/cli
mkdir backend
cd backend
feathers generate app
? Project name backend
? Description
? What folder should the source files live in? src
? Which package manager are you using (has to be installed globally)? Yarn
? What type of API are you making? REST, Realtime via Socket.io
yarn start</code></pre>
<p>Your backend application is running at <a href="http://localhost:3030/" rel="noopener">http://localhost:3030/</a></p>
<h3 id="add-graphql-capabilities-to-the-backend">Add GraphQL capabilities to the backend</h3>
<p>Open Visual Studio Code (or your preferred IDE) &gt; Open… &gt; point it to the f<strong>older VueAndIBMs</strong>Cloud.</p>
<p>Open backend/src/index.html and replace what’s there with the following code:</p><pre><code class="language-js">/* eslint-disable no-console */
const logger = require('winston');
const app = require('./app');
const port = app.get('port');
const createSubscriptionServer = app.get('createSubscriptionServer');
// create subscription server and associate it to the server
const server = app.listen(port, () =&gt; createSubscriptionServer(server));
process.on('unhandledRejection', (reason, p) =&gt;
logger.error('Unhandled Rejection at: Promise ', p, reason)
);
server.on('listening', () =&gt;
logger.info('Feathers application started on http://%s:%d',
app.get('host'), port)
);</code></pre>
<p>Into the <strong>backend/package.json</strong>, add the following additional dependencies for GraphQL:</p><pre><code class="language-json">"express-session": "1.15.6",
"graphql": "0.12.3",
"graphql-subscriptions": "0.5.6",
"graphql-tools": "2.18.0",
"subscriptions-transport-ws": "0.9.5",
"apollo-server-express": "1.3.2",</code></pre>
<p>Run “<strong>yarn”</strong> on the command line to pull the additional libraries into your backend project. Now we’re ready to create the Graphql service with some more help of the feather CLI:</p><pre><code class="language-bash">feathers generate service
? What kind of service is it? A custom service
? What is the name of the service? graphql
? Which path should the service be registered on? /graphql</code></pre>
<p>You’ll realize a new directory was created: services/graphql.</p>
<p>We’re going to create the GraphQL service a little bit differently than the featherJS service template. Go ahead and delete the<strong> graphql.hooks.js</strong> and <strong>graphql.class.js.</strong></p><pre><code class="language-bash">rm services/graphql/graphql.hooks.js
rm services/graphql/graphql.class.js</code></pre>
<p>Update <strong>services/graphql/graphql.service.js</strong> with the following code:</p><pre><code class="language-js">const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { execute, subscribe } = require('graphql');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const { makeExecutableSchema } = require('graphql-tools');
const TypeDefinitions = require('./graphql.typeDefs');
const Resolvers = require('./graphql.resolvers');
module.exports = function () {
const app = this;
const port = app.get('port');
const schema = makeExecutableSchema({
typeDefs: TypeDefinitions,
resolvers: Resolvers.call(app)
});
// provide endpoint to graphql for the apollo graphql client lib
app.use('/graphql', graphqlExpress((req) =&gt; {
return {
schema,
context: {}
};
}));
// provide endpoint to graphiql : the API explorer module
app.use('/graphiql', graphiqlExpress({
endpointURL: '/graphql',
subscriptionsEndpoint: `ws://localhost:${port}/subscriptions`
}));
// define the API server here
app.set('createSubscriptionServer', function
createSubscriptionServer(server) {
return new SubscriptionServer({
execute, subscribe, schema,
onConnect: () =&gt; { console.log('Client Connected'); },
onDisconnect: () =&gt; { console.log('Client Disconnected'); }
},
{
server, path: '/subscriptions',
});
});
};</code></pre>
<p>Now create GraphQL typedef and resolvers: create two new files under <strong>services/graphql</strong>: <strong>graphql.typeDefs.js</strong> and <strong>graphql.resolvers.js</strong> and add the following code to it:</p>
<h4 id="graphql-resolvers-js">graphql.resolvers.js</h4><pre><code class="language-js">const { PubSub } = require('graphql-subscriptions');
const pubsub = new PubSub();
const ITEM_ADDED = 'ITEM_ADDED';
module.exports = function () {
return {
Query: {
Welcome (root, { id }, context) {
return 'Welcome to VueAndIBMsCLoud example';
},
Items (root, { id }, context) {
return [
{
id: 1,
title: 'Item 1',
status: 'open',
created_at: new Date()
},
{
id: 2,
title: 'Item 2',
status: 'closed',
created_at: new Date()
}
];
}
},
Mutation: {
addItem(root, { id, title, status }, context) {
const item = {
id,
title,
status,
created_at: new Date()
};
pubsub.publish(ITEM_ADDED, { itemAdded: item });
return item;
},
},
Subscription: {
itemAdded: {
subscribe: () =&gt; pubsub.asyncIterator(ITEM_ADDED),
}
}
};
};</code></pre>
<h4 id="graphql-typedefs-js">graphql.typeDefs.js</h4><pre><code class="language-js">const typeDefinitions = `
type Item {
id: ID!
title: String
status: String
created_at: String
}
type Query {
Welcome: String,
Items: [Item]
}
type Mutation {
addItem(id: ID!, title: String!, status: String): Item
}
type Subscription {
itemAdded: Item
}
schema {
query: Query
mutation: Mutation
subscription: Subscription
}
`;
module.exports = typeDefinitions;</code></pre>
<p>Almost there. Let’s add a start script to <strong>package.json</strong> into the ‘scripts’ section:</p><pre><code class="language-json">"dev": "NODE_ENV=development node src/",</code></pre>
<p>And now run ‘yarn dev’. You should see a message like:<br><em>info: Feathers application started on <a href="http://localhost:3030" rel="noopener">http://localhost:3030</a></em></p>
<h3 id="test-the-graphql-api-and-publish-subscribe">Test the GraphQL API and publish/subscribe</h3>
<p>Try graphiQL as API explorer module <a href="http://localhost:3030/graphiql" rel="noopener">http://localhost:3030/graphiq</a> and run a first test like this:</p>
<p>Congratulations, you have included a GraphQL API into your project!</p>
<p>Now let’s test some more complex data fetching:</p>
<p>And now let’s test subscription. Open graphiql on a 2nd browser window and setup subscription like this and press the “play” button:</p>
<p>Now back to the first graphiql browser window, enter the following mutation which allows you to add an item to Items array. Since we’ve setup publish/subscribe, we expect to push changes to the Items array to all subscribers:</p>
<p>Place both browser windows next to each other and press “Play” on the first window. You’ll realize that the backend server is going to push the data change into your 2nd graphiql window:</p>
<p>How cool is that? Congrats, you’ve also setup publish/subscribe based on graphiql on your project.</p>
<h3 id="add-dependencies-to-the-frontend-app">Add dependencies to the frontend app</h3>
<p>Into the <strong>frontend/package.json</strong>, add the following additional dependencies to include Graphql, ApolloJS and Subscription support (via Websockets):</p><pre><code class="language-json">"dependencies": {
"apollo-cache-inmemory": "1.1.5",
"apollo-client": "2.2.0",
"apollo-link": "1.0.7",
"apollo-link-http": "1.3.2",
"apollo-link-ws": "1.0.4",
"apollo-utilities": "1.0.4",
"graphql": "0.12.3",
"graphql-tag": "2.6.1",
"subscriptions-transport-ws": "0.9.5",
"vue": "^2.5.2",
"vue-apollo": "3.0.0-alpha.3",
"vue-router": "^3.0.1"
}</code></pre>
<p>Run “<strong>yarn”</strong> to pull the dependencies into your frontend project.</p><pre><code class="language-bash">cd frontend
yarn</code></pre>
<p>Edit<strong> frontend/main.js</strong> and replace the code with the following:</p><pre><code class="language-js">import Vue from 'vue'
import App from './App'
import router from './router'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import VueApollo from 'vue-apollo'
// add unified ressource identifiers for Dev and Prod (IBM Cloud)
const uris = {
dev: 'localhost:3030',
prod: 'VueAndIBMsCloud.mybluemix.net'
}
// setup httpLink depending on environment
const httpLink = new HttpLink({
uri: (window.location.hostname === 'localhost') ? `http://${uris.dev}/graphql` : `https://${uris.prod}/graphql`
})
// setup web socket link depending on environment
const wsLink = new WebSocketLink({
uri: (window.location.hostname === 'localhost') ? `ws://${uris.dev}/subscriptions` : `wss://${uris.prod}/subscriptions`,
options: {
reconnect: true
}
})
const link = split(
({ query }) =&gt; {
const { kind, operation } = getMainDefinition(query)
return kind === 'OperationDefinition' &amp;&amp; operation === 'subscription'
},
wsLink,
httpLink
)
// define the apolloClient
const apolloClient = new ApolloClient({
link,
cache: new InMemoryCache(),
connectToDevTools: true
})
Vue.use(VueApollo)
const apolloProvider = new VueApollo({
defaultClient: apolloClient
})
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
el: '#app',
apolloProvider,
router,
render: h =&gt; h(App)
})</code></pre>
<p>This will prepare your frontend app to use ApolloClient as Library to provide GraphQL Query, Mutation and Subscription support. On the <strong>uris</strong> object, replace <strong>VueAndIBMsCloud.mybluemix.net</strong> with your productive deployment target of the backend app.</p>
<h3 id="add-ui-calling-the-graphql-backend">Add UI calling the GraphQL backend</h3>
<p>In your frontend sources, open <strong>src/App.vue</strong> and replace it with the following code:</p><pre><code class="language-js">&lt;template&gt;
&lt;div id="app"&gt;
&lt;h1&gt;{{ welcome }}&lt;/h1&gt;
&lt;ul&gt;
&lt;li v-for="(item) of items" v-bind:key="item.id"&gt;{{item.title + ' - ' + item.status}}&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
import gql from 'graphql-tag'
export default {
name: 'app',
data () {
return {
welcome: '',
items: []
}
},
mounted () {
this.$apollo.query({
query: gql`query {
Welcome
Items {
id
title
status
}
}`
}).then(({data}) =&gt; {
this.welcome = data.Welcome
this.items = data.Items
}).catch((error) =&gt; {
console.error(error)
})
},
}
&lt;/script&gt;
&lt;style&gt;
body {
margin: 50px;
}
#app {
font-family: 'Avenir', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
color: #2c3e50;
}
main {
text-align: center;
margin-top: 40px;
}
header {
margin: 0;
height: 56px;
padding: 0 16px 0 24px;
background-color: #35495E;
color: #ffffff;
}
header span {
display: block;
position: relative;
font-size: 20px;
line-height: 1;
letter-spacing: .02em;
font-weight: 400;
box-sizing: border-box;
padding-top: 16px;
}
&lt;/style&gt;</code></pre>
<p>Save and run <strong>yarn dev</strong> to start it. You should now see the new landing page of your frontend app (which does not yet look super exciting, but this is the first time we see data from your graphQL backend in your frontend — isn’t that cool?)</p>
<p>Now since we have our e2e integration between our frontend and graphQL backend, let’s push it to IBMs cloud and run it there.</p>
<h3 id="preparing-ibm-cloud-for-deployment">Preparing IBM Cloud for Deployment</h3>
<ul>
<li>setup Bluemix CLI on your desktop: <a href="https://console.bluemix.net/docs/cli/reference/bluemix_cli/get_started.html#getting-started" rel="noopener">https://console.bluemix.net/docs/cli/reference/bluemix_cli/get_started.html#getting-started</a></li>
<li>login to IBM’s cloud: <strong>bx login</strong></li>
<li>set target and space context in IBMs Cloud interactively (go to <a href="https://console.bluemix.net/dashboard/apps/" rel="noopener">https://console.bluemix.net/dashboard/apps/</a> to inspect your options): <strong>bx target — cf</strong></li>
</ul>
<p>You now should see this:</p><pre><code>API endpoint:     &lt;your endpoint&gt; (&lt;API version&gt;)
Region:           &lt;your region&gt;
User:             &lt;your username&gt;
Account:          &lt;your account&gt;
Resource group:   default
Org:              &lt;your org&gt;
Space:            &lt;your space&gt;</code></pre>
<p>You have now set the deployment scope for your two apps.</p>
<h3 id="deployment-of-the-backend-to-bluemix">Deployment of the Backend to Bluemix</h3>
<p>On the backend project, create a new manifest.yml file and enter the following contents into it:</p><pre><code class="language-yml">applications:
- path: .
memory: 1024M
instances: 1
domain: eu-de.mybluemix.net
name: vueAndIbmsCloud-api
host: vueAndIbmsCloud-api
disk_quota: 1024M</code></pre>
<p>Add the following deploy script to package.json to the “scripts” section:</p><pre><code class="language-json">"deploy": "bx cf push vueAndIbmsCloud-api"</code></pre>
<p>(You have to change that app name to make it unique, e.g. append some index of your choice on manifest.yml and package.json.)</p>
<h4 id="install-bluemix-cli"><strong>Install BlueMix CLI</strong></h4>
<p><a href="https://console.bluemix.net/docs/cli/index.html" rel="noopener">https://console.bluemix.net/docs/cli/index.html</a><br><a href="https://developer.ibm.com/courses/labs/1-install-bluemix-command-line-interface-cli-dwc020/" rel="noopener">https://developer.ibm.com/courses/labs/1-install-bluemix-command-line-interface-cli-dwc020/</a></p>
<p>Run <strong>yarn deploy</strong>, and this will deploy your backend app to the IBM Cloud.</p>
<h3 id="deployment-of-the-frontend-to-bluemix">Deployment of the Frontend to Bluemix</h3>
<p>We deploy the frontend app based on an nginx server, which provides a better performance (in responsetime and throughput) than a node server.</p>
<p>Depending on what name you picked as your backend deployment target, let’s make sure it’s properly reflected in <strong>frontend/src/main.js</strong>. In the <strong>uris</strong> object, replace ‘vueandibmscloud-api.eu-de.mybluemix.net’ with the URL where your backend server is. You can inspect the URL in the Bluemix console &gt; click into your app &gt; view App URL.</p>
<p>On the frontend application root folder, create the manifest.yml and include the following contents:</p><pre><code class="language-yml">applications:
- path: .
memory: 1024M
instances: 1
domain: mybluemix.net
name: vueAndIbmsCloud
host: vueAndIbmsCloud
disk_quota: 1024M
buildpack: staticfile_buildpack</code></pre>
<p>Add the following deploy script to package.json to the “scripts” section:</p><pre><code class="language-json">"deploy": "npm run build; cp manifest.yml dist/manifest.yml; cd dist; bx cf push vueAndIbmsCloud"</code></pre>
<p>(You have to change that app name to make it unique, e.g. append some index of your choice on manifest.yml and package.json.)</p>
<p>Run <strong>yarn deploy</strong>, and this will deploy your frontend app to the IBM Cloud.</p>
<p>Congratulations :) You can now use your frontend app on IBM’s Cloud.</p>
<p>Find the sources at GitHub: <a href="https://github.com/thomasreinecke/VueAndIBMsCloud" rel="noopener">https://github.com/thomasreinecke/VueAndIBMsCloud</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
