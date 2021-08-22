---
card: "https://cdn-media-1.freecodecamp.org/images/1*Lwm464tBKse1OcAWuak1sg.png"
tags: [Web Development]
description: "In this article, we will be creating a personal expense manag"
author: "Milad E. Fahmy"
title: "How to create an expense manager using Entity Framework Core and Highcharts"
created: "2021-08-16T11:38:40+02:00"
modified: "2021-08-16T11:38:40+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-productivity tag-tech tag-programming tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to create an expense manager using Entity Framework Core and Highcharts</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Lwm464tBKse1OcAWuak1sg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*Lwm464tBKse1OcAWuak1sg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*Lwm464tBKse1OcAWuak1sg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Lwm464tBKse1OcAWuak1sg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Lwm464tBKse1OcAWuak1sg.png" alt="How to create an expense manager using Entity Framework Core and Highcharts">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
namespace ExpenseManager.Models
{
public class ExpenseReport
{
[Key]
public int ItemId { get; set; }
[Required]
public string ItemName { get; set; }
[Required]
[DataType(DataType.Currency)]
[Column(TypeName = "decimal(10, 2)")]
public decimal Amount { get; set; }
[DataType(DataType.Date)]
[DisplayFormat(DataFormatString = "{0:MM/dd/yyyy}", ApplyFormatInEditMode = true)]
[Required]
public DateTime ExpenseDate { get; set; } = DateTime.Now;
[Required]
public string Category { get; set; }
}
}</code></pre><p>We have used the <code>[Key]</code> attribute with <code>ItemId</code> to make it the primary key while creating the database table.</p><h3 id="creating-the-database-table-using-the-ef-core-code-first-approach">Creating the database table using the EF Core Code First approach</h3><p>In order to create our tables using EF Core Code First approach, we need to install few NuGet packages.</p><p>Navigate to “Tools” &gt; “NuGet Package Manager” &gt; “Package Manager Console”.</p><p>We have to install the package for the database provider that we are targeting. In this case, it is SQL Server. Hence, run the following command:</p><pre><code>Install-Package Microsoft.EntityFrameworkCore.SqlServer</code></pre><p>Since we are using EF Tools to create a table from the existing model, we will install the Tools package as well. Run the following command:</p><pre><code>Install-Package Microsoft.EntityFrameworkCore.Tools</code></pre><p>After the package installations are successful, we will create a <code>dbcontext</code> class. Add a file “ExpenseDBContext.cs” in the Models folder and put in the following code:</p><pre><code class="language-cs">using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace ExpenseManager.Models
{
public class ExpenseDBContext : DbContext
{
public virtual DbSet&lt;ExpenseReport&gt; ExpenseReport { get; set; }
protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
{
if (!optionsBuilder.IsConfigured)
{
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
optionsBuilder.UseSqlServer("Your connection string");
}
}
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace ExpenseManager.Models
{
public class ExpensesDataAcessLayer
{
ExpenseDBContext db = new ExpenseDBContext();
public IEnumerable&lt;ExpenseReport&gt; GetAllExpenses()
{
try
{
return db.ExpenseReport.ToList();
}
catch
{
throw;
}
}
// To filter out the records based on the search string
public IEnumerable&lt;ExpenseReport&gt; GetSearchResult(string searchString)
{
List&lt;ExpenseReport&gt; exp = new List&lt;ExpenseReport&gt;();
try
{
exp = GetAllExpenses().ToList();
return exp.Where(x =&gt; x.ItemName.IndexOf(searchString, StringComparison.OrdinalIgnoreCase) != -1);
}
catch
{
throw;
}
}
//To Add new Expense record
public void AddExpense(ExpenseReport expense)
{
try
{
db.ExpenseReport.Add(expense);
db.SaveChanges();
}
catch
{
throw;
}
}
//To Update the records of a particluar expense
public int UpdateExpense(ExpenseReport expense)
{
try
{
db.Entry(expense).State = EntityState.Modified;
db.SaveChanges();
return 1;
}
catch
{
throw;
}
}
//Get the data for a particular expense
public ExpenseReport GetExpenseData(int id)
{
try
{
ExpenseReport expense = db.ExpenseReport.Find(id);
return expense;
}
catch
{
throw;
}
}
//To Delete the record of a particular expense
public void DeleteExpense(int id)
{
try
{
ExpenseReport emp = db.ExpenseReport.Find(id);
db.ExpenseReport.Remove(emp);
db.SaveChanges();
}
catch
{
throw;
}
}
// To calculate last six months expense
public Dictionary&lt;string, decimal&gt; CalculateMonthlyExpense()
{
ExpensesDataAcessLayer objexpense = new ExpensesDataAcessLayer();
List&lt;ExpenseReport&gt; lstEmployee = new List&lt;ExpenseReport&gt;();
Dictionary&lt;string, decimal&gt; dictMonthlySum = new Dictionary&lt;string, decimal&gt;();
decimal foodSum = db.ExpenseReport.Where
(cat =&gt; cat.Category == "Food" &amp;&amp; (cat.ExpenseDate &gt; DateTime.Now.AddMonths(-7)))
.Select(cat =&gt; cat.Amount)
.Sum();
decimal shoppingSum = db.ExpenseReport.Where
(cat =&gt; cat.Category == "Shopping" &amp;&amp; (cat.ExpenseDate &gt; DateTime.Now.AddMonths(-7)))
.Select(cat =&gt; cat.Amount)
.Sum();
decimal travelSum = db.ExpenseReport.Where
(cat =&gt; cat.Category == "Travel" &amp;&amp; (cat.ExpenseDate &gt; DateTime.Now.AddMonths(-7)))
.Select(cat =&gt; cat.Amount)
.Sum();
decimal healthSum = db.ExpenseReport.Where
(cat =&gt; cat.Category == "Health" &amp;&amp; (cat.ExpenseDate &gt; DateTime.Now.AddMonths(-7)))
.Select(cat =&gt; cat.Amount)
.Sum();
dictMonthlySum.Add("Food", foodSum);
dictMonthlySum.Add("Shopping", shoppingSum);
dictMonthlySum.Add("Travel", travelSum);
dictMonthlySum.Add("Health", healthSum);
return dictMonthlySum;
}
// To calculate last four weeks expense
public Dictionary&lt;string, decimal&gt; CalculateWeeklyExpense()
{
ExpensesDataAcessLayer objexpense = new ExpensesDataAcessLayer();
List&lt;ExpenseReport&gt; lstEmployee = new List&lt;ExpenseReport&gt;();
Dictionary&lt;string, decimal&gt; dictWeeklySum = new Dictionary&lt;string, decimal&gt;();
decimal foodSum = db.ExpenseReport.Where
(cat =&gt; cat.Category == "Food" &amp;&amp; (cat.ExpenseDate &gt; DateTime.Now.AddDays(-7)))
.Select(cat =&gt; cat.Amount)
.Sum();
decimal shoppingSum = db.ExpenseReport.Where
(cat =&gt; cat.Category == "Shopping" &amp;&amp; (cat.ExpenseDate &gt; DateTime.Now.AddDays(-28)))
.Select(cat =&gt; cat.Amount)
.Sum();
decimal travelSum = db.ExpenseReport.Where
(cat =&gt; cat.Category == "Travel" &amp;&amp; (cat.ExpenseDate &gt; DateTime.Now.AddDays(-28)))
.Select(cat =&gt; cat.Amount)
.Sum();
decimal healthSum = db.ExpenseReport.Where
(cat =&gt; cat.Category == "Health" &amp;&amp; (cat.ExpenseDate &gt; DateTime.Now.AddDays(-28)))
.Select(cat =&gt; cat.Amount)
.Sum();
dictWeeklySum.Add("Food", foodSum);
dictWeeklySum.Add("Shopping", shoppingSum);
dictWeeklySum.Add("Travel", travelSum);
dictWeeklySum.Add("Health", healthSum);
return dictWeeklySum;
}
}
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ExpenseManager.Models;
using Microsoft.AspNetCore.Mvc;
namespace ExpenseManager.Controllers
{
public class ExpenseController : Controller
{
ExpensesDataAcessLayer objexpense = new ExpensesDataAcessLayer();
public IActionResult Index(string searchString)
{
List&lt;ExpenseReport&gt; lstEmployee = new List&lt;ExpenseReport&gt;();
lstEmployee = objexpense.GetAllExpenses().ToList();
if (!String.IsNullOrEmpty(searchString))
{
lstEmployee = objexpense.GetSearchResult(searchString).ToList();
}
return View(lstEmployee);
}
public ActionResult AddEditExpenses(int itemId)
{
ExpenseReport model = new ExpenseReport();
if (itemId &gt; 0)
{
model = objexpense.GetExpenseData(itemId);
}
return PartialView("_expenseForm", model);
}
[HttpPost]
public ActionResult Create(ExpenseReport newExpense)
{
if (ModelState.IsValid)
{
if (newExpense.ItemId &gt; 0)
{
objexpense.UpdateExpense(newExpense);
}
else
{
objexpense.AddExpense(newExpense);
}
}
return RedirectToAction("Index");
}
[HttpPost]
public IActionResult Delete(int id)
{
objexpense.DeleteExpense(id);
return RedirectToAction("Index");
}
public ActionResult ExpenseSummary()
{
return PartialView("_expenseReport");
}
public JsonResult GetMonthlyExpense()
{
Dictionary&lt;string, decimal&gt; monthlyExpense = objexpense.CalculateMonthlyExpense();
return new JsonResult(monthlyExpense);
}
public JsonResult GetWeeklyExpense()
{
Dictionary&lt;string, decimal&gt; weeklyExpense = objexpense.CalculateWeeklyExpense();
return new JsonResult(weeklyExpense);
}
}
@{
ViewData["Title"] = "Personal Expense Manager";
}
&lt;link href="~/lib/bootstrap/dist/css/bootstrap.css" rel="stylesheet" /&gt;
&lt;script src="~/lib/jquery/dist/jquery.min.js"&gt;&lt;/script&gt;
&lt;script src="~/lib/bootstrap/dist/js/bootstrap.js"&gt;&lt;/script&gt;
&lt;script src="//cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.8.0/js/bootstrap-datepicker.js"&gt;&lt;/script&gt;
&lt;link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.8.0/css/bootstrap-datepicker.css" rel="stylesheet"&gt;
&lt;h2&gt;Personal Expense Manager&lt;/h2&gt;
&lt;br /&gt;
&lt;div&gt;
&lt;div style="float:left"&gt;
&lt;button class="btn btn-primary" onclick="AddEditExpenses(0)"&gt;Add Expense&lt;/button&gt;
&lt;button class="btn btn-success" onclick="ReportExpense()"&gt;Expense Report&lt;/button&gt;
&lt;/div&gt;
&lt;div style="float:right; width:40%;"&gt;
&lt;form asp-controller="Expense" asp-action="Index" class="form-group"&gt;
&lt;div class="col-sm-6"&gt;
&lt;input class="form-control" type="text" name="SearchString" placeholder="Search"&gt;
&lt;/div&gt;
&lt;button type="submit" class="btn btn-default btn-info"&gt;Filter&lt;/button&gt;
&lt;/form&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;br /&gt;
&lt;br /&gt;
&lt;table class="table"&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt;@Html.DisplayNameFor(model =&gt; model.ItemId)&lt;/th&gt;
&lt;th&gt;@Html.DisplayNameFor(model =&gt; model.ItemName)&lt;/th&gt;
&lt;th&gt;@Html.DisplayNameFor(model =&gt; model.Amount)&lt;/th&gt;
&lt;th&gt;@Html.DisplayNameFor(model =&gt; model.ExpenseDate)&lt;/th&gt;
&lt;th&gt;@Html.DisplayNameFor(model =&gt; model.Category)&lt;/th&gt;
&lt;th&gt;Action Item&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
@foreach (var item in Model)
{
&lt;tr&gt;
&lt;td&gt;@Html.DisplayFor(modelItem =&gt; item.ItemId)&lt;/td&gt;
&lt;td&gt;@Html.DisplayFor(modelItem =&gt; item.ItemName)&lt;/td&gt;
&lt;td&gt;@Html.DisplayFor(modelItem =&gt; item.Amount)&lt;/td&gt;
&lt;td&gt;@Html.DisplayFor(modelItem =&gt; item.ExpenseDate)&lt;/td&gt;
&lt;td&gt;@Html.DisplayFor(modelItem =&gt; item.Category)&lt;/td&gt;
&lt;td&gt;
&lt;button class="btn btn-default" onclick="AddEditExpenses(@item.ItemId)"&gt;Edit&lt;/button&gt;
&lt;button class="btn btn-danger" onclick="DeleteExpense(@item.ItemId)"&gt;Delete&lt;/button&gt;
&lt;/td&gt;
&lt;/tr&gt;
}
&lt;/tbody&gt;
&lt;/table&gt;
&lt;div class="modal fade" id="expenseFormModel" role="dialog"&gt;
&lt;div class="modal-dialog"&gt;
&lt;div class="modal-content"&gt;
&lt;div class="modal-header"&gt;
&lt;a href="#" class="close" data-dismiss="modal"&gt;&amp;times;&lt;/a&gt;
&lt;h3 id="title" class="modal-title"&gt;Add Expense&lt;/h3&gt;
&lt;/div&gt;
&lt;div class="modal-body" id="expenseFormModelDiv"&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="modal fade" id="expenseReportModal" role="dialog"&gt;
&lt;div class="modal-dialog modal-lg"&gt;
&lt;div class="modal-content"&gt;
&lt;div class="modal-header"&gt;
&lt;a href="#" class="close" data-dismiss="modal"&gt;&amp;times;&lt;/a&gt;
&lt;h3 class="modal-title"&gt;Expense Report&lt;/h3&gt;
&lt;/div&gt;
&lt;div class="modal-body" id="expenseReportModalDiv"&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;script&gt;
var AddEditExpenses = function (itemId) {
var url = "/Expense/AddEditExpenses?itemId=" + itemId;
if (itemId &gt; 0)
$('#title').html("Edit Expense");
$("#expenseFormModelDiv").load(url, function () {
$("#expenseFormModel").modal("show");
});
$('#expenseFormModel').on('shown.bs.modal', function () {
$('#calender-container .input-group.date').datepicker({
todayBtn: true,
calendarWeeks: true,
todayHighlight: true,
autoclose: true,
container: '#expenseFormModel modal-body'
});
});
}
var ReportExpense = function () {
var url = "/Expense/ExpenseSummary";
$("#expenseReportModalDiv").load(url, function () {
$("#expenseReportModal").modal("show");
})
}
var DeleteExpense = function (itemId) {
var ans = confirm("Do you want to delete item with Item Id: " + itemId);
if (ans) {
$.ajax({
type: "POST",
url: "/Expense/Delete/" + itemId,
success: function () {
window.location.href = "/Expense/Index";
}
})
}
}
&lt;/script&gt;
&lt;script&gt;
$('body').on('click', "#btnSubmit", function () {
var myformdata = $("#expenseForm").serialize();
$.ajax({
type: "POST",
url: "/Expense/Create",
data: myformdata,
success: function () {
$("#myModal").modal("hide");
window.location.href = "/Expense/Index";
},
error: function (errormessage) {
alert(errormessage.responseText);
}
})
})
&lt;script src="//cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/js/bootstrap-datepicker.js"&gt;&lt;/script&gt;
&lt;link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.8.0/css/bootstrap-datepicker.css" rel="stylesheet"&gt;
&lt;div&gt;
&lt;div class="row"&gt;
&lt;div class="col-md-8"&gt;
&lt;form id="expenseForm"&gt;
&lt;input type="hidden" asp-for="ItemId" /&gt;
&lt;div class="form-group"&gt;
&lt;label asp-for="ItemName" class="control-label"&gt;&lt;/label&gt;
&lt;input asp-for="ItemName" class="form-control" /&gt;
&lt;/div&gt;
&lt;div class="form-group"&gt;
&lt;label asp-for="Category" class="control-label"&gt;&lt;/label&gt;
&lt;select asp-for="Category" class="form-control"&gt;
&lt;option value=""&gt;-- Select Category --&lt;/option&gt;
&lt;option value="Food"&gt;Food&lt;/option&gt;
&lt;option value="Shopping"&gt;Shopping&lt;/option&gt;
&lt;option value="Travel"&gt;Travel&lt;/option&gt;
&lt;option value="Health"&gt;Health&lt;/option&gt;
&lt;/select&gt;
&lt;/div&gt;
&lt;div class="form-group"&gt;
&lt;label asp-for="Amount" class="control-label"&gt;&lt;/label&gt;
&lt;input asp-for="Amount" class="form-control" /&gt;
&lt;/div&gt;
&lt;div class="form-group" id="calender-container"&gt;
&lt;label asp-for="ExpenseDate" class="control-label"&gt;&lt;/label&gt;
&lt;div class="input-group date"&gt;
&lt;input asp-for="ExpenseDate" type="text" class="form-control"&gt;&lt;span class="input-group-addon"&gt;&lt;i class="glyphicon glyphicon-calendar"&gt;&lt;/i&gt;&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="form-group"&gt;
&lt;button type="button" id="btnSubmit" class="btn btn-block btn-info"&gt;Save&lt;/button&gt;
&lt;/div&gt;
&lt;/form&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre><p>At the top, we are including the <code>cdn</code> reference to the bootstrap-datepicker so that we can use it in our modal dialog. Then we have a <code>&lt;fo</code>rm&gt; element, which binds to our model. We also h<code>ave a </code>submit button which will post the form data t<code>o the </code>Create method in our controller using an ajax call.</p><h4 id="expensereport-view">ExpenseReport view</h4><p>This is a partial view that is displayed in the modal dialog on clicking the “Expense Report” button in the “Index” view.</p><p>Create a new partial view “_expenseReport.cshtml” and put in the following code:</p><pre><code class="language-cs">&lt;script src="https://code.highcharts.com/highcharts.js"&gt;&lt;/script&gt;
&lt;button id="btnMonthlyReport" class="btn btn-info"&gt;Monthly Report&lt;/button&gt;
&lt;button id="btnWeeklyReport" class="btn btn-warning"&gt;Weekly Report&lt;/button&gt;
&lt;div id="container" style="min-width: 400px; height: 400px; margin: 0 auto"&gt;
&lt;/div&gt;
&lt;script&gt;
$(document).ready(function () {
$("#btnWeeklyReport").click(function () {
var titleMessage = "Expenses in last four weeks is : ";
$.ajax({
type: "GET",
url: "/Expense/GetWeeklyExpense",
contentType: "application/json",
dataType: "json",
success: function (result) {
var keys = Object.keys(result);
var weeklydata = new Array();
var totalspent = 0.0;
for (var i = 0; i &lt; keys.length; i++) {
var arrL = new Array();
arrL.push(keys[i]);
arrL.push(result[keys[i]]);
totalspent += result[keys[i]];
weeklydata.push(arrL);
}
createCharts(weeklydata, titleMessage, totalspent.toFixed(2));
}
})
})
$("#btnMonthlyReport").click(function () {
var titleMessage = "Expenses in last six months is : ";
$.ajax({
type: "GET",
url: "/Expense/GetMonthlyExpense",
contentType: "application/json",
dataType: "json",
success: function (result) {
var keys = Object.keys(result);
var monthlydata = new Array();
var totalspent = 0.0;
for (var i = 0; i &lt; keys.length; i++) {
var arrL = new Array();
arrL.push(keys[i]);
arrL.push(result[keys[i]]);
totalspent += result[keys[i]];
monthlydata.push(arrL);
}
createCharts(monthlydata, titleMessage, totalspent.toFixed(2));
}
})
})
})
function createCharts(sum, titleText, totalspent) {
Highcharts.chart('container', {
chart: {
type: 'column'
},
title: {
text: titleText + ' ' + totalspent
},
xAxis: {
type: 'category',
labels: {
rotation: -45,
style: {
fontSize: '13px',
fontFamily: 'Verdana, sans-serif'
}
}
},
yAxis: {
min: 0,
title: {
text: 'Money spent'
}
},
legend: {
enabled: false
},
tooltip: {
pointFormat: 'Total money spent: &lt;b&gt;{point.y:.2f} &lt;/b&gt;'
},
series: [{
type: 'column',
data: sum,
}]
});
}
&lt;/script&gt;</code></pre><p>At the top, we included the <code>cdn</code> reference to Highcharts. We have also provided two buttons. One is used to view a monthly report of the last six months. The other is to view a weekly report for the last four weeks. The report will be generated as a bar chart to provide a comparative study of expense summaries.</p><p>On clicking the weekly report button, we will invoke the <code>GetWeeklyExpense</code> method of our controller. This will return the data in JSON format. We will pass this data to the <code>createCharts</code> function to create the weekly expense bar chart using Highcharts.</p><p>Similarly, we will invoke the <code>GetMonthlyExpense</code> method of our controller on clicking the “Monthly Report” button. The JSON result will be passed to the <code>createCharts</code> function to create the monthly expense bar chart using Highcharts.</p><h3 id="configure-route-url">Configure route URL</h3><p>Open the “Startup.cs” file to set the format for app routes. Scroll down to the <code>app.UseMvc</code> method where you can set the route URL.</p><p>Make sure that your route URL is set like this:</p><pre><code class="language-cs">app.UseMvc(routes =&gt;
{
routes.MapRoute(
name: "default",
template: "{controller=Expense}/{action=Index}");
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
