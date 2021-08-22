---
card: "https://cdn-media-1.freecodecamp.org/images/1*KzKoXW7PovSAUUn8htYbnw@2x.jpeg"
tags: [React]
description: "Recently I’ve adopted a new philosophy that changes the way I"
author: "Milad E. Fahmy"
title: "How the “Golden Rule” of React components can help you write better code"
created: "2021-08-16T11:32:26+02:00"
modified: "2021-08-16T11:32:26+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-technology tag-programming tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">How the “Golden Rule” of React components can help you write better code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*KzKoXW7PovSAUUn8htYbnw@2x.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*KzKoXW7PovSAUUn8htYbnw@2x.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*KzKoXW7PovSAUUn8htYbnw@2x.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*KzKoXW7PovSAUUn8htYbnw@2x.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*KzKoXW7PovSAUUn8htYbnw@2x.jpeg" alt="How the “Golden Rule” of React components can help you write better code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
name: PropTypes.string.isRequired,
jobTitle: PropTypes.string.isRequired,
pictureUrl: PropTypes.string.isRequired,
};</code></pre><p>Which is pretty straightforward — solely looking at what it needs to function, you just need a name, job title, and picture URL.</p><p>But let’s say you have a requirement to show an “official” picture depending on user settings. You might be tempted to write an API like so:</p><pre><code class="language-js">PersonCard.propTypes = {
name: PropTypes.string.isRequired,
jobTitle: PropTypes.string.isRequired,
officialPictureUrl: PropTypes.string.isRequired,
pictureUrl: PropTypes.string.isRequired,
preferOfficial: PropTypes.boolean.isRequired,
};</code></pre><p>It may seem like the component needs those extra props to function, but in actuality, the component doesn’t look any different and doesn’t need those extra props to function. What these extra props do is couple this <code>preferOfficial</code> setting with your component and makes any use of the component outside that context feel really unnatural.</p><h3 id="bridging-the-gap">Bridging the gap</h3><p>So if the logic for switching the picture URL doesn’t belong in the component itself, where does it belong?</p><p>How about an <code>index</code> file?</p><p>We’ve adopted a folder structure where every component goes into a self-titled folder where the <code>index</code> file is responsible for bridging the gap between your “natural” component and the outside world. We call this file the “container” (inspired from <a href="https://redux.js.org/basics/usage-with-react#presentational-and-container-components" rel="noopener">React Redux’s concept of “container” components</a>).</p><pre><code>/PersonCard
-PersonCard.js ------ the "natural" component
field: PropTypes.object.isRequired,// &lt;-- the "weird" data structure
onEditField: PropTypes.func.isRequired,  // &lt;-- and a weird event too
};</code></pre><p>The component took in this weird <code>field</code> data structure as a prop. In practicality, this might’ve been fine if we never had to touch the thing again, but it became a real issue when we were asked to use it again in a different spot unrelated to this data structure.</p><p>Since the component required this data structure, it was impossible to reuse it and it was confusing to refactor. The tests we originally wrote also were confusing because they mocked this weird data structure. We had trouble understanding the tests and trouble re-writing them when we eventually refactored.</p><p>Unfortunately, weird data structures are unavoidable, but using containers is a great way to deal with them. One takeaway here is that architecting your components in this way gives you the <em>option</em> of extracting and graduating the component into a reusable one. If you pass a weird data structure into a component, you lose that option.</p><blockquote><strong><em>Note:</em></strong><em> I’m not suggesting that all components you make should be generic from the beginning. The suggestion is to think about what your component does on a fundamental level and then bridge the gap. As a consequence, you’re more likely to have the </em>option<em> to graduate your component into a reusable one with minimal work.</em></blockquote><h4 id="implementing-containers-using-function-components">Implementing containers using function components</h4><p>If you’re strictly mapping props, a simple implementation option is to use another function component:</p><pre><code class="language-js">import React from 'react';
import PropTypes from 'prop-types';
import getValuesFromField from './helpers/getValuesFromField';
import transformValuesToField from './helpers/transformValuesToField';
import ChipField from './ChipField';
export default function ChipFieldContainer({ field, onEditField }) {
const values = getValuesFromField(field);
function handleOnChange(values) {
onEditField(transformValuesToField(values));
}
return &lt;ChipField values={values} onChange={handleOnChange} /&gt;;
}
// external props
ChipFieldContainer.propTypes = {
field: PropTypes.object.isRequired,
onEditField: PropTypes.func.isRequired,
};</code></pre><p>And the folder structure for a component like this looks something like:</p><pre><code>/ChipField
-ChipField.js ------------------ the "natural" chip field
-ChipField.test.js
-index.js ---------------------- the "container"
-index.test.js
/helpers ----------------------- a folder for the helpers/utils
-getValuesFromField.js
-getValuesFromField.test.js
-transformValuesToField.js
-transformValuesToField.test.js</code></pre><p>You might be thinking “that’s too much work” — and if you are then I get it. It may seem like there is more work to do here since there are more files and a bit of indirection, but here’s the part you’re missing:</p><pre><code class="language-js">import { connect } from 'react-redux';
import getPictureUrl from './helpers/getPictureUrl';
import PersonCard from './PersonCard';
const mapStateToProps = (state, ownProps) =&gt; {
const { person } = ownProps;
const { name, jobTitle, customPictureUrl, officialPictureUrl } = person;
const { preferOfficial } = state.settings;
const pictureUrl = getPictureUrl(preferOfficial, customPictureUrl, officialPictureUrl);
return { name, jobTitle, pictureUrl };
};
const mapDispatchToProps = null;
export default connect(
mapStateToProps,
mapDispatchToProps,
)(PersonCard);</code></pre><p>It’s still the same amount of work regardless if you transformed data outside of the component or inside the component. The difference is, when you transform data outside of the component, you’re giving yourself a more explicit spot to test that your transformations are correct while also separating concerns.</p><h3 id="fulfilling-requirements-outside-of-the-scope-of-the-component">Fulfilling requirements outside of the scope of the component</h3><p>Like the Person Card example above, it’s very likely that when you adopt this “golden rule” of thinking, you’ll realize that certain requirements are outside the scope of the actual component. So how do you fulfill those?</p><p>You guessed it: Containers ?</p><p>You can create containers that do a little bit of extra work to keep your component natural. When you do this, you end up with a more focused component that is much simpler and a container that is better tested.</p><p>Let’s implement a PersonCard container to illustrate the example.</p><h4 id="implementing-containers-using-higher-order-components">Implementing containers using higher order components</h4><p>React Redux uses <a href="https://reactjs.org/docs/higher-order-components.html" rel="noopener">higher order components</a> to implement containers that push and map props from the Redux store. Since we got this terminology from React Redux, it comes with no surprise that <a href="https://redux.js.org/basics/usage-with-react#implementing-container-components" rel="noopener">React Redux’s <code>connect</code> is a container</a>.</p><p>Regardless if you’re using a function component to map props, or if you’re using higher order components to connect to the Redux store, the golden rule and the job of the container are still the same. First, write your natural component and then use the higher order component to bridge the gap.</p><p>Folder structure for above:</p><pre><code>/PersonCard
-PersonCard.js ----------------- natural component
-PersonCard.test.js
-index.js ---------------------- container
-index.test.js
/helpers
-getPictureUrl.js ------------ helper
-getPictureUrl.test.js</code></pre><blockquote><strong><em>Note:</em></strong><em> In this case, it wouldn’t be too practical to have a helper for <code>getPictureUrl</code>. This logic was separated simply to show that you can. You also might’ve noticed that there is no difference in folder structure regardless of container implementation.</em></blockquote><p>If you’ve used Redux before, the example above is something you’re probably already familiar with. Again, this golden rule isn’t necessarily a new idea but a subtle new way of thinking.</p><p>Additionally, when you implement containers with higher order components, you also have the ability to functionally compose higher order components together — passing props from one higher order component to the next. Historically, we’ve chained multiple higher order components together to implement a single container.</p><blockquote><strong><em>2019 Note:</em></strong><em> The React community seems to be moving away from higher order components as a pattern.</em></blockquote><blockquote><em>I would also recommend the same. My experience when working with these is that they can be confusing for team members who aren’t familiar with functional composition and they can cause what is known as “wrapper hell” where components are wrapped too many times causing significant performance issues.</em></blockquote><blockquote><em>Here are some related articles and resources on this: <a href="https://youtu.be/dpw9EHDh2bM?t=710" rel="noopener">Hooks talk</a> (2018) <a href="https://youtu.be/zD_judE-bXk?t=1101" rel="noopener">Recompose talk</a> (2016) , <a href="https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce" rel="noopener">Use a Render Prop!</a> (2017), <a href="https://blog.kentcdodds.com/when-to-not-use-render-props-5397bbeff746" rel="noopener">When to NOT use Render Props</a> (2018).</em></blockquote><h3 id="you-promised-me-hooks">You promised me hooks</h3><h4 id="implementing-containers-using-hooks">Implementing containers using hooks</h4><p>Why are hooks featured in this article? Because implementing containers becomes a lot easier with hooks.</p><p>If you’re not familiar with React hooks, then I would recommend watching <a href="https://youtu.be/dpw9EHDh2bM" rel="noopener">Dan Abramov’s and Ryan Florence’s talks introducing the concept during React Conf 2018</a>.</p><p>The gist is that hooks are the React team’s response to the issues with <a href="https://reactjs.org/docs/higher-order-components.html" rel="noopener">higher order components</a> and <a href="https://reactjs.org/docs/render-props.html" rel="noopener">similar patterns</a>. React hooks are intended to be a superior replacement pattern for both in most cases.</p><p>This means that implementing containers can be done with a function component and hooks ?</p><p>In the example below, we’re using the hooks <code>useRoute</code> and <code>useRedux</code> to represent the “outside world” and we’re using the helper <code>getValues</code> to map the outside world into <code>props</code> usable by your natural component. We’re also using the helper <code>transformValues</code> to transform your component’s output to the outside world represented by <code>dispatch</code>.</p><pre><code class="language-js">import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'react-router';
import { useRedux } from 'react-redux';
import actionCreator from 'your-redux-stuff';
import getValues from './helpers/getVaules';
import transformValues from './helpers/transformValues';
import FooComponent from './FooComponent';
export default function FooComponentContainer(props) {
// hooks
const { match } = useRouter({ path: /* ... */ });
// NOTE: `useRedux` does not exist yet and probably won't look like this
const { state, dispatch } = useRedux();
// mapping
const props = getValues(state, match);
function handleChange(e) {
const transformed = transformValues(e);
dispatch(actionCreator(transformed));
}
// natural component
return &lt;FooComponent {...props} onChange={handleChange} /&gt;;
}
FooComponentContainer.propTypes = { /* ... */ };</code></pre><p>And here’s the reference folder structure:</p><pre><code>/FooComponent ----------- the whole component for others to import
-FooComponent.js ------ the "natural" part of the component
-FooComponent.test.js
-index.js ------------- the "container" that bridges the gap
-index.js.test.js   and provides dependencies
/helpers -------------- isolated helpers that you can test easily
-getValues.js
-getValues.test.js
-transformValues.js
-transformValues.test.js</code></pre><h3 id="firing-events-in-containers">Firing events in containers</h3><p>The last type of scenario where I find myself diverging from a natural component is when I need to fire events related to changing props or mounting components.</p><p>For example, let’s say you’re tasked with making a dashboard. The design team hands you a mockup of the dashboard and you transform that into a React component. You’re now at the point where you have to populate this dashboard with data.</p><p>You notice that you need to call a function (e.g. <code>dispatch(fetchAction)</code>) when your component mount in order for that to happen.</p><p>In scenarios like this, I found myself adding <code>componentDidMount</code> and <code>componentDidUpdate</code> lifecycle methods and adding <code>onMount</code> or <code>onDashboardIdChanged</code> props because I needed some event to fire in order to link my component to the outside world.</p><p>Following the golden rule, these <code>onMount</code> and <code>onDashboardIdChanged</code> props are unnatural and therefore should live in the container.</p><p>The nice thing about hooks is that it makes dispatching events <code>onMount</code> or on prop change much simpler!</p><p><strong>Firing events on mount:</strong></p><p>To fire an event on mount, call <code>useEffect</code> with an empty array.</p><pre><code class="language-js">import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRedux } from 'react-redux';
import fetchSomething_reduxAction from 'your-redux-stuff';
import getValues from './helpers/getVaules';
import FooComponent from './FooComponent';
export default function FooComponentContainer(props) {
// hooks
// NOTE: `useRedux` does not exist yet and probably won't look like this
const { state, dispatch } = useRedux();
// dispatch action onMount
useEffect(() =&gt; {
dispatch(fetchSomething_reduxAction);
}, []); // the empty array tells react to only fire on mount
// https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
// mapping
const props = getValues(state, match);
// natural component
return &lt;FooComponent {...props} /&gt;;
}
FooComponentContainer.propTypes = { /* ... */ };
</code></pre><p><strong>Firing events on prop changes:</strong></p><p><code>useEffect</code> has the ability to watch your property between re-renders and calls the function you give it when the property changes.</p><p>Before <code>useEffect</code> I found myself adding unnatural lifecycle methods and <code>onPropertyChanged</code> props because I didn’t have a way to do the property diffing outside the component:</p><pre><code class="language-js">import React from 'react';
import PropTypes from 'prop-types';
/**
* Before `useEffect`, I found myself adding "unnatural" props
* to my components that only fired events when the props diffed.
*
* I'd find that the component's `render` didn't even use `id`
* most of the time
*/
export default class BeforeUseEffect extends React.Component {
static propTypes = {
id: PropTypes.string.isRequired,
onIdChange: PropTypes.func.isRequired,
};
componentDidMount() {
this.props.onIdChange(this.props.id);
}
componentDidUpdate(prevProps) {
if (prevProps.id !== this.props.id) {
this.props.onIdChange(this.props.id);
}
}
render() {
return // ...
}
}</code></pre><p>Now with <code>useEffect</code> there is a very lightweight way to fire on prop changes and our actual component doesn’t have to add props that are unnecessary to its function.</p><pre><code class="language-js">import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRedux } from 'react-redux';
import fetchSomething_reduxAction from 'your-redux-stuff';
import getValues from './helpers/getVaules';
import FooComponent from './FooComponent';
export default function FooComponentContainer({ id }) {
// hooks
// NOTE: `useRedux` does not exist yet and probably won't look like this
const { state, dispatch } = useRedux();
// dispatch action onMount
useEffect(() =&gt; {
dispatch(fetchSomething_reduxAction);
}, [id]); // `useEffect` will watch this `id` prop and fire the effect when it differs
// https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
// mapping
const props = getValues(state, match);
// natural component
return &lt;FooComponent {...props} /&gt;;
}
FooComponentContainer.propTypes = {
id: PropTypes.string.isRequired,
};
</code></pre><blockquote><strong><em>Disclaimer:</em></strong><em> before <code>useEffect</code> there were ways of doing prop diffing inside a container using other higher order components (like <a href="https://github.com/acdlite/recompose/blob/3db12ce7121a050b533476958ff3d66ded1c4bb8/docs/API.md#lifecycle" rel="noopener">recompose’s lifecycle</a>) or creating a lifecycle component like <a href="https://github.com/ReactTraining/react-router/blob/89a72d58ac55b2d8640c25e86d1f1496e4ba8d6c/packages/react-router/modules/Lifecycle.js" rel="noopener">react router does internally</a>, but these ways were either confusing to the team or were unconventional.</em></blockquote><h3 id="what-are-the-benefits-here">What are the benefits here?</h3><h4 id="components-stay-fun">Components stay fun</h4><p>For me, creating components is the most fun and satisfying part of front-end development. You get to turn your team’s ideas and dreams into real experiences and that’s a good feeling I think we all relate to and share.</p><p>There will never be a scenario where your component’s API and experience is ruined by the “outside world”. Your component gets to be what you imagined it without extra props — that’s my favorite benefit of this golden rule.</p><h4 id="more-opportunities-to-test-and-reuse">More opportunities to test and reuse</h4><p>When you adopt an architecture like this, you’re essentially bringing a new data-y layer to the surface. In this “layer” you can switch gears where you’re more concerned about the correctness of data going into your component vs. how your component works.</p><p>Whether you’re aware of it or not, this layer already exists in your app but it may be coupled with presentational logic. What I’ve found is that when I surface this layer, I can make a lot of code optimizations and reuse a lot of logic that I would’ve otherwise rewritten without knowing the commonalities.</p><p>I think this will become even more obvious with the addition of <a href="https://reactjs.org/docs/hooks-custom.html" rel="noopener">custom hooks</a>. Custom hooks gives us a much simpler way to extract logic and subscribe to external changes — something that a helper function could not do.</p><h4 id="maximize-team-throughput">Maximize team throughput</h4><p>When working on a team, you can separate the development of containers and components. If you agree on APIs beforehand, you can concurrently work on:</p><ol><li>Web API (i.e. back-end)</li><li>Fetching data from the web API (or similar) and transforming the data to the component’s APIs</li><li>The components</li></ol><h3 id="are-there-any-exceptions">Are there any exceptions?</h3><p>Much like the real Golden Rule, this golden rule is also a golden rule of thumb. There are some scenarios where it makes sense to write a seemingly unnatural component API to reduce the complexity of some transformations.</p><p>A simple example would the names of props. It would make things more complicated if engineers renamed data keys under the argument that it’s more “natural”.</p><p>It’s definitely possible to take this idea too far where you end up overgeneralizing too soon, and that can also be a trap.</p><h3 id="the-bottom-line">The bottom line</h3><p>More or less, this “golden rule” is simply re-hashing the existing idea of presentational components vs. container components in a new light. If you evaluate what your component needs on a fundamental level then you’ll probably end up with simpler and more readable parts.</p><p>Thank you!</p>
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
