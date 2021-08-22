---
card: "/images/default.jpg"
tags: [React]
description: "We often work with web applications that need to fetch large "
author: "Milad E. Fahmy"
title: "How to Build a Custom Pagination Component in React"
created: "2021-08-16T10:03:37+02:00"
modified: "2021-08-16T10:03:37+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build a Custom Pagination Component in React</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/06/custom-pagination-image.jpeg 300w,
/news/content/images/size/w600/2021/06/custom-pagination-image.jpeg 600w,
/news/content/images/size/w1000/2021/06/custom-pagination-image.jpeg 1000w,
/news/content/images/size/w2000/2021/06/custom-pagination-image.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/06/custom-pagination-image.jpeg" alt="How to Build a Custom Pagination Component in React">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
totalCount,
pageSize,
siblingCount = 1,
currentPage
}) =&gt; {
const paginationRange = useMemo(() =&gt; {
// Our implementation logic will go here
}, [totalCount, pageSize, siblingCount, currentPage]);
return paginationRange;
let length = end - start + 1;
/*
Create an array of certain length and set the elements within it from
start value to end value.
*/
return Array.from({ length }, (_, idx) =&gt; idx + start);
totalCount,
pageSize,
siblingCount = 1,
currentPage
}) =&gt; {
const paginationRange = useMemo(() =&gt; {
const totalPageCount = Math.ceil(totalCount / pageSize);
// Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
const totalPageNumbers = siblingCount + 5;
/*
Case 1:
If the number of pages is less than the page numbers we want to show in our
paginationComponent, we return the range [1..totalPageCount]
*/
if (totalPageNumbers &gt;= totalPageCount) {
return range(1, totalPageCount);
}
/*
Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
*/
const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
const rightSiblingIndex = Math.min(
currentPage + siblingCount,
totalPageCount
);
/*
We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex &gt; 2 and rightSiblingIndex &lt; totalPageCount - 2
*/
const shouldShowLeftDots = leftSiblingIndex &gt; 2;
const shouldShowRightDots = rightSiblingIndex &lt; totalPageCount - 2;
const firstPageIndex = 1;
const lastPageIndex = totalPageCount;
/*
Case 2: No left dots to show, but rights dots to be shown
*/
if (!shouldShowLeftDots &amp;&amp; shouldShowRightDots) {
let leftItemCount = 3 + 2 * siblingCount;
let leftRange = range(1, leftItemCount);
return [...leftRange, DOTS, totalPageCount];
}
/*
Case 3: No right dots to show, but left dots to be shown
*/
if (shouldShowLeftDots &amp;&amp; !shouldShowRightDots) {
let rightItemCount = 3 + 2 * siblingCount;
let rightRange = range(
totalPageCount - rightItemCount + 1,
totalPageCount
);
return [firstPageIndex, DOTS, ...rightRange];
}
/*
Case 4: Both left and right dots to be shown
*/
if (shouldShowLeftDots &amp;&amp; shouldShowRightDots) {
let middleRange = range(leftSiblingIndex, rightSiblingIndex);
return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
}
}, [totalCount, pageSize, siblingCount, currentPage]);
return paginationRange;
};
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import './pagination.scss';
const Pagination = props =&gt; {
const {
onPageChange,
totalCount,
siblingCount = 1,
currentPage,
pageSize,
className
} = props;
const paginationRange = usePagination({
currentPage,
totalCount,
siblingCount,
pageSize
});
// If there are less than 2 times in pagination range we shall not render the component
if (currentPage === 0 || paginationRange.length &lt; 2) {
return null;
}
const onNext = () =&gt; {
onPageChange(currentPage + 1);
};
const onPrevious = () =&gt; {
onPageChange(currentPage - 1);
};
let lastPage = paginationRange[paginationRange.length - 1];
return (
&lt;ul
className={classnames('pagination-container', { [className]: className })}
&gt;
{/* Left navigation arrow */}
&lt;li
className={classnames('pagination-item', {
disabled: currentPage === 1
})}
onClick={onPrevious}
&gt;
&lt;div className="arrow left" /&gt;
&lt;/li&gt;
{paginationRange.map(pageNumber =&gt; {
// If the pageItem is a DOT, render the DOTS unicode character
if (pageNumber === DOTS) {
return &lt;li className="pagination-item dots"&gt;&amp;#8230;&lt;/li&gt;;
}
// Render our Page Pills
return (
&lt;li
className={classnames('pagination-item', {
selected: pageNumber === currentPage
})}
onClick={() =&gt; onPageChange(pageNumber)}
&gt;
{pageNumber}
&lt;/li&gt;
);
})}
{/*  Right Navigation arrow */}
&lt;li
className={classnames('pagination-item', {
disabled: currentPage === lastPage
})}
onClick={onNext}
&gt;
&lt;div className="arrow right" /&gt;
&lt;/li&gt;
&lt;/ul&gt;
);
};
export default Pagination;
display: flex;
list-style-type: none;
.pagination-item {
padding: 0 12px;
height: 32px;
text-align: center;
margin: auto 4px;
color: rgba(0, 0, 0, 0.87);
display: flex;
box-sizing: border-box;
align-items: center;
letter-spacing: 0.01071em;
border-radius: 16px;
line-height: 1.43;
font-size: 13px;
min-width: 32px;
&amp;.dots:hover {
background-color: transparent;
cursor: default;
}
&amp;:hover {
background-color: rgba(0, 0, 0, 0.04);
cursor: pointer;
}
&amp;.selected {
background-color: rgba(0, 0, 0, 0.08);
}
.arrow {
&amp;::before {
position: relative;
/* top: 3pt; Uncomment this to lower the icons as requested in comments*/
content: '';
/* By using an em scale, the arrows will size with the font */
display: inline-block;
width: 0.4em;
height: 0.4em;
border-right: 0.12em solid rgba(0, 0, 0, 0.87);
border-top: 0.12em solid rgba(0, 0, 0, 0.87);
}
&amp;.left {
transform: rotate(-135deg) translate(-50%);
}
&amp;.right {
transform: rotate(45deg);
}
}
&amp;.disabled {
pointer-events: none;
.arrow::before {
border-right: 0.12em solid rgba(0, 0, 0, 0.43);
border-top: 0.12em solid rgba(0, 0, 0, 0.43);
}
&amp;:hover {
background-color: transparent;
cursor: default;
}
}
}
}
</code></pre><figcaption>Pagination component styles</figcaption></figure><p><strong>And that's it!</strong><br><br>Our generic pagination implementation is ready and we can use it anywhere in our codebase. </p><h2 id="how-to-use-the-custom-pagination-component">How to Use the Custom Pagination Component </h2><p>As a last step, let's incorporate this component in a small example. <br><br>For the scope of this article, we shall render static data in the form of a table. So let's go ahead and do that first:</p><pre><code class="language-js">import React from 'react';
import data from './data/mock-data.json';
export default function App() {
return (
&lt;&gt;
&lt;table&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt;ID&lt;/th&gt;
&lt;th&gt;FIRST NAME&lt;/th&gt;
&lt;th&gt;LAST NAME&lt;/th&gt;
&lt;th&gt;EMAIL&lt;/th&gt;
&lt;th&gt;PHONE&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
{data.map(item =&gt; {
return (
&lt;tr&gt;
&lt;td&gt;{item.id}&lt;/td&gt;
&lt;td&gt;{item.first_name}&lt;/td&gt;
&lt;td&gt;{item.last_name}&lt;/td&gt;
&lt;td&gt;{item.email}&lt;/td&gt;
&lt;td&gt;{item.phone}&lt;/td&gt;
&lt;/tr&gt;
);
})}
&lt;/tbody&gt;
&lt;/table&gt;
&lt;/&gt;
);
import Pagination from '../Pagination';
import data from './data/mock-data.json';
import './style.scss';
let PageSize = 10;
export default function App() {
const [currentPage, setCurrentPage] = useState(1);
const currentTableData = useMemo(() =&gt; {
const firstPageIndex = (currentPage - 1) * PageSize;
const lastPageIndex = firstPageIndex + PageSize;
return data.slice(firstPageIndex, lastPageIndex);
}, [currentPage]);
return (
&lt;&gt;
&lt;table&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt;ID&lt;/th&gt;
&lt;th&gt;FIRST NAME&lt;/th&gt;
&lt;th&gt;LAST NAME&lt;/th&gt;
&lt;th&gt;EMAIL&lt;/th&gt;
&lt;th&gt;PHONE&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
{currentTableData.map(item =&gt; {
return (
&lt;tr&gt;
&lt;td&gt;{item.id}&lt;/td&gt;
&lt;td&gt;{item.first_name}&lt;/td&gt;
&lt;td&gt;{item.last_name}&lt;/td&gt;
&lt;td&gt;{item.email}&lt;/td&gt;
&lt;td&gt;{item.phone}&lt;/td&gt;
&lt;/tr&gt;
);
})}
&lt;/tbody&gt;
&lt;/table&gt;
&lt;Pagination
className="pagination-bar"
currentPage={currentPage}
totalCount={data.length}
pageSize={PageSize}
onPageChange={page =&gt; setCurrentPage(page)}
/&gt;
&lt;/&gt;
);
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
