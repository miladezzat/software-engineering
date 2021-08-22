---
card: "https://cdn-media-1.freecodecamp.org/images/1*r8lWHbH-mgWkl462lQsYuQ.jpeg"
tags: [JavaScript]
description: "In this article, we will create a Single Page Application (SP"
author: "Milad E. Fahmy"
title: "How to build a single page application using server-side Blazor"
created: "2021-08-16T11:38:44+02:00"
modified: "2021-08-16T11:38:44+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-apps-tag tag-programming tag-web-development tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a single page application using server-side Blazor</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*r8lWHbH-mgWkl462lQsYuQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*r8lWHbH-mgWkl462lQsYuQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*r8lWHbH-mgWkl462lQsYuQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*r8lWHbH-mgWkl462lQsYuQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*r8lWHbH-mgWkl462lQsYuQ.jpeg" alt="How to build a single page application using server-side Blazor">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
EmployeeID int IDENTITY(1,1) PRIMARY KEY,
Name varchar(20) NOT NULL ,
City varchar(20) NOT NULL ,
Department varchar(20) NOT NULL ,
Gender varchar(6) NOT NULL
)
GO
CREATE TABLE Cities (
CityID int IDENTITY(1,1) NOT NULL PRIMARY KEY,
CityName varchar(20) NOT NULL
)
GO</code></pre><p>Now, we will put some data into the Cities table. We will be using this table to bind a dropdown list in our web application. The user will select the desired city from this dropdown. Use the following insert statements:</p><pre><code class="language-sql">INSERT INTO Cities VALUES('New Delhi');
INSERT INTO Cities VALUES('Mumbai');
INSERT INTO Cities VALUES('Hyderabad');
INSERT INTO Cities VALUES('Chennai');
using ServerSideSPA.App.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace ServerSideSPA.App.DataAccess
{
public class EmployeeDataAccessLayer
{
myTestDBContext db = new myTestDBContext();
//To Get all employees details
public List&lt;Employee&gt; GetAllEmployees()
{
try
{
return db.Employee.AsNoTracking().ToList();
}
catch
{
throw;
}
}
//To Add new employee record
public void AddEmployee(Employee employee)
{
try
{
db.Employee.Add(employee);
db.SaveChanges();
}
catch
{
throw;
}
}
//To Update the records of a particluar employee
public void UpdateEmployee(Employee employee)
{
try
{
db.Entry(employee).State = EntityState.Modified;
db.SaveChanges();
}
catch
{
throw;
}
}
//Get the details of a particular employee
public Employee GetEmployeeData(int id)
{
try
{
var employee = db.Employee.Find(id);
db.Entry(employee).State = EntityState.Detached;
return employee;
}
catch
{
throw;
}
}
//To Delete the record of a particular employee
public void DeleteEmployee(int id)
{
try
{
Employee emp = db.Employee.Find(id);
db.Employee.Remove(emp);
db.SaveChanges();
}
catch
{
throw;
}
}
// To get the list of Cities
public List&lt;Cities&gt; GetCityData()
{
try
{
return db.Cities.ToList();
}
catch
{
throw;
}
}
}
}</code></pre><p>Here, we have defined the methods to handle database operations:</p><ul><li><em>GetAllEmployees</em> will fetch all the employee data from the Employee table.</li><li><em>AddEmployee</em> will create a new employee record.</li><li><em>UpdateEmployee</em> will update the record of an existing employee.</li><li><em>GetEmployeeData </em>will fetch the record of the employee corresponding to the employee ID passed to it.</li><li><em>DeleteEmployee</em> will delete the employee record corresponding to the employee id passed to it.</li><li><em>GetCityData</em> will fetch the list of all the cities from <em>Cities</em> table.</li></ul><h3 id="creating-the-service-class">Creating the Service class</h3><p>Right click on the <em>Services</em> folder and select Add &gt;&gt; Class. Give it a name of “EmployeeService.cs” and <em>cli</em>ck Add. This will ad<em>d the EmployeeS</em>ervice class to the Services folder.</p><p>Open EmployeeService.cs and put the following code into it:</p><pre><code class="language-cs">using ServerSideSPA.App.DataAccess;
using ServerSideSPA.App.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace ServerSideSPA.App.Services
{
public class EmployeeService
{
EmployeeDataAccessLayer objemployee = new EmployeeDataAccessLayer();
public Task&lt;List&lt;Employee&gt;&gt; GetEmployeeList()
{
return Task.FromResult(objemployee.GetAllEmployees());
}
public void Create(Employee employee)
{
objemployee.AddEmployee(employee);
}
public Task&lt;Employee&gt; Details(int id)
{
return Task.FromResult(objemployee.GetEmployeeData(id));
}
public void Edit(Employee employee)
{
objemployee.UpdateEmployee(employee);
}
public void Delete(int id)
{
objemployee.DeleteEmployee(id);
}
public Task&lt;List&lt;Cities&gt;&gt; GetCities()
{
return Task.FromResult(objemployee.GetCityData());
}
}
@inherits EmployeeDataModel
&lt;h1&gt;Employee Data&lt;/h1&gt;
&lt;p&gt;This component demonstrates CRUD operation on Employee data&lt;/p&gt;
&lt;div&gt;
&lt;div style="float:left"&gt;
&lt;button class="btn btn-primary" onclick="@AddEmp"&gt;Add Employee&lt;/button&gt;
&lt;/div&gt;
&lt;div style="float:right; width:40%;"&gt;
&lt;div class="col-sm-6" style="float:left"&gt;
&lt;input class="form-control" type="text" placeholder="Search" bind="@SearchString" /&gt;
&lt;/div&gt;
&lt;div&gt;
&lt;button type="submit" class="btn btn-default btn-info" onclick="@FilterEmp"&gt;Filter&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
@if (empList == null)
{
&lt;p&gt;&lt;em&gt;Loading...&lt;/em&gt;&lt;/p&gt;
}
else
{
&lt;table class='table'&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt;ID&lt;/th&gt;
&lt;th&gt;Name&lt;/th&gt;
&lt;th&gt;Gender&lt;/th&gt;
&lt;th&gt;Department&lt;/th&gt;
&lt;th&gt;City&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
@foreach (var emp in empList)
{
&lt;tr&gt;
&lt;td&gt;@emp.EmployeeId&lt;/td&gt;
&lt;td&gt;@emp.Name&lt;/td&gt;
&lt;td&gt;@emp.Gender&lt;/td&gt;
&lt;td&gt;@emp.Department&lt;/td&gt;
&lt;td&gt;@emp.City&lt;/td&gt;
&lt;td&gt;
&lt;button class="btn btn-default" onclick="@(async () =&gt; await EditEmployee(@emp.EmployeeId))"&gt;Edit&lt;/button&gt;
&lt;button class="btn btn-danger" onclick="@(async () =&gt; await DeleteConfirm(@emp.EmployeeId))"&gt;Delete&lt;/button&gt;
&lt;/td&gt;
&lt;/tr&gt;
}
&lt;/tbody&gt;
&lt;/table&gt;
if (isAdd)
{
&lt;div class="modal" tabindex="-1" style="display:block" role="dialog"&gt;
&lt;div class="modal-dialog"&gt;
&lt;div class="modal-content"&gt;
&lt;div class="modal-header"&gt;
&lt;h3 class="modal-title"&gt;@modalTitle&lt;/h3&gt;
&lt;button type="button" class="close" onclick="@closeModal"&gt;
&lt;span aria-hidden="true"&gt;X&lt;/span&gt;
&lt;/button&gt;
&lt;/div&gt;
&lt;div class="modal-body"&gt;
&lt;form&gt;
&lt;div class="form-group"&gt;
&lt;label for="Name" class="control-label"&gt;Name&lt;/label&gt;
&lt;input for="Name" class="form-control" bind="@emp.Name" /&gt;
&lt;/div&gt;
&lt;div class="form-group"&gt;
&lt;label asp-for="Gender" class="control-label"&gt;Gender&lt;/label&gt;
&lt;select asp-for="Gender" class="form-control" bind="@emp.Gender"&gt;
&lt;option value=""&gt;-- Select Gender --&lt;/option&gt;
&lt;option value="Male"&gt;Male&lt;/option&gt;
&lt;option value="Female"&gt;Female&lt;/option&gt;
&lt;/select&gt;
&lt;/div&gt;
&lt;div class="form-group"&gt;
&lt;label asp-for="Department" class="control-label"&gt;Department&lt;/label&gt;
&lt;input asp-for="Department" class="form-control" bind="@emp.Department" /&gt;
&lt;/div&gt;
&lt;div class="form-group"&gt;
&lt;label asp-for="City" class="control-label"&gt;City&lt;/label&gt;
&lt;select asp-for="City" class="form-control" bind="@emp.City"&gt;
&lt;option value=""&gt;-- Select City --&lt;/option&gt;
@foreach (var city in cityList)
{
&lt;option value="@city.CityName"&gt;@city.CityName&lt;/option&gt;
}
&lt;/select&gt;
&lt;/div&gt;
&lt;/form&gt;
&lt;/div&gt;
&lt;div class="modal-footer"&gt;
&lt;button class="btn btn-block btn-info" onclick="@(async () =&gt; await SaveEmployee())" data-dismiss="modal"&gt;Save&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
}
if (isDelete)
{
&lt;div class="modal" tabindex="-1" style="display:block" role="dialog"&gt;
&lt;div class="modal-dialog"&gt;
&lt;div class="modal-content"&gt;
&lt;div class="modal-header"&gt;
&lt;h3 class="modal-title"&gt;Delete Employee&lt;/h3&gt;
&lt;/div&gt;
&lt;div class="modal-body"&gt;
&lt;h4&gt;Do you want to delete this employee ??&lt;/h4&gt;
&lt;table class="table"&gt;
&lt;tr&gt;
&lt;td&gt;Name&lt;/td&gt;
&lt;td&gt;@emp.Name&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;Gender&lt;/td&gt;
&lt;td&gt;@emp.Gender&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;Department&lt;/td&gt;
&lt;td&gt;@emp.Department&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;City&lt;/td&gt;
&lt;td&gt;@emp.City&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;
&lt;/div&gt;
&lt;div class="modal-footer"&gt;
&lt;button class="btn btn-danger" onclick="@(async () =&gt; await DeleteEmployee(emp.EmployeeId))" data-dismiss="modal"&gt;YES&lt;/button&gt;
&lt;button class="btn btn-warning" onclick="@closeModal"&gt;NO&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
}
}</code></pre><p>Let me explain this code. At the top, we have defined the route for this page as “/fetchemployee”. This means if we append “/fetchemployee” to the root URL of the app, we will be redirected to this page.</p><p>We are also inheriting <em>EmployeeDataModel</em> class which is defined in <em>EmployeeData.cshtml.cs</em> file. This will allow us to use the methods defined in EmployeeDataModel class.</p><p>After this, we have defined a button to add a new employee record. When clicked, this button will open a modal popup to handle the user inputs.</p><p>We have also defined a searchbox and a corresponding button to filter the employee records based on employee name. If you enter an employee name and click on the filter button, it will show all matching employee records. If we click on the filter button without entering any value in the search box, it will return all the employee records.</p><p>The employee records returned from the database are stored in the <em>empList</em> variable. If the variable is not null, then we will bind the values to a table to display the employee records in a tabular fashion. Each employee record will also have two action links — <em>Edit</em> to edit the employee record, and <em>Delete</em> to delete the employee record.</p><p>To handle the user inputs, we are using a form. We are using a single form for both Add Employee and Edit Employee functionality. The form is defined in a modal popup. The modal popup is displayed on the screen based on the value of the Boolean property isAdd. The value of this Boolean property is set in the code behind (.cshtml.cs) page.</p><p>The City dropdown list inside the form is binding to our Cities table in the database with the help of the <em>cityList</em> variable. The cityList will be populated as the application boots up.</p><p>The form will have a <em>Save</em> button which will invoke the SaveEmployee method. This method is defined in the code behind file to Add or update an employee record.</p><p>Similar to <em>Add</em> modal popup, we also have a <em>Delete</em> modal popup. It will be a read-only modal and ask for a confirmation to delete an employee record. Upon clicking “Yes”, it will invoke the <em>DeleteEmployee</em> method to delete the employee record.</p><h3 id="employeedata-cshtml-cs">EmployeeData.cshtml.cs</h3><p>Open <em>EmployeeData.cshtml.cs </em>and put the following code into it.</p><pre><code class="language-cs">using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Blazor;
using Microsoft.AspNetCore.Blazor.Components;
using Microsoft.AspNetCore.Blazor.Services;
using ServerSideSPA.App.Models;
using ServerSideSPA.App.Services;
namespace ServerSideSPA.App.Pages
{
public class EmployeeDataModel : BlazorComponent
{
[Inject]
protected EmployeeService employeeService { get; set; }
protected List&lt;Employee&gt; empList;
protected List&lt;Cities&gt; cityList = new List&lt;Cities&gt;();
protected Employee emp = new Employee();
protected string modalTitle { get; set; }
protected Boolean isDelete = false;
protected Boolean isAdd = false;
protected string SearchString { get; set; }
protected override async Task OnInitAsync()
{
await GetCities();
await GetEmployee();
}
protected async Task GetCities()
{
cityList = await employeeService.GetCities();
}
protected async Task GetEmployee()
{
empList = await employeeService.GetEmployeeList();
}
protected async Task FilterEmp()
{
await GetEmployee();
if (SearchString != "")
{
empList = empList.Where(x =&gt; x.Name.IndexOf(SearchString, StringComparison.OrdinalIgnoreCase) != -1).ToList();
}
}
protected void AddEmp()
{
emp = new Employee();
this.modalTitle = "Add Employee";
this.isAdd = true;
}
protected async Task EditEmployee(int empID)
{
emp = await employeeService.Details(empID);
this.modalTitle = "Edit Employee";
this.isAdd = true;
}
protected async Task SaveEmployee()
{
if (emp.EmployeeId != 0)
{
await Task.Run(() =&gt;
{
employeeService.Edit(emp);
});
}
else
{
await Task.Run(() =&gt;
{
employeeService.Create(emp);
});
}
this.isAdd = false;
await GetEmployee();
}
protected async Task DeleteConfirm(int empID)
{
emp = await employeeService.Details(empID);
this.isDelete = true;
}
protected async Task DeleteEmployee(int empID)
{
await Task.Run(() =&gt;
{
employeeService.Delete(empID);
});
this.isDelete = false;
await GetEmployee();
}
protected void closeModal()
{
this.isAdd = false;
this.isDelete = false;
}
}
}</code></pre><p>Let me explain this code. We have defined a class <em>EmployeeDataModel. </em>It<em> </em>will hold all the methods that we will be using in <em>EmployeeData.cshtml</em> page.</p><p>We are injecting our <em>EmployeeService</em> to the <em>EmployeeDataModel</em> class so that the client-side methods can invoke our services.</p><p>The variables <em>empList</em> and <em>cityList</em> hold the data from the Employee and Cities tables. The variables are getting populated inside the OnInitAsync to make sure that the data is available to us as the page loads.</p><p>We will use the <em>FilterEmp</em> method to filter the employee data based on the employee name property. This property will ignore the text case of the search string. It returns all the records that match either fully or partially with the search string.</p><p>Clicking the “Add Employee” button will invoke the<em> AddEmp</em> method. It will initialize an empty instance of Employee model and set the value of the <em>isAdd</em> Boolean flag to true. This will open a modal popup with a form, asking the user to enter a new employee record. Similarly, we have defined an <em>EditEmployee</em> method. It fetches the record of the employee based on the employee id for which it is invoked. It will also set the value of <em>isAdd</em> to true to open the modal popup to edit the employee record.</p><p>The <em>SaveEmployee</em> method will check if it is invoked to add a new employee record or to edit an existing employee record. If the EmployeeId property is set, then it is an “edit” request, and we will invoke the Edit method of our service. If EmployeeId is not set, then it is a “create” request, and we will invoke the Create method of our service. We will then fetch the updated employee record by calling the <em>GetEmployee</em> method and will also set the value of <em>isAdd</em> to false, thus closing the modal popup.</p><p>The <em>DeleteConfirm</em> method is invoked by clicking the Delete button corresponding to an employee record. It will set the value of the isDelete Boolean flag to true. This will display a Delete confirmation modal popup. Upon clicking YES inside this popup, DeleteEmployee method is invoked. This will delete the employee record and set the <em>isDelete</em> Boolean flag to false to close the modal popup.</p><h3 id="adding-link-to-navigation-menu">Adding Link to Navigation menu</h3><p>The last step is to add the link to our “EmployeeData” page in the navigation menu. Open <em>ServerSideSPA.App/Shared/NavMenu.cshtml </em>page and put the following code into it:</p><pre><code class="language-cs">&lt;div class="top-row pl-4 navbar navbar-dark"&gt;
&lt;a class="navbar-brand" href=""&gt;ServerSideSPA&lt;/a&gt;
&lt;button class="navbar-toggler" onclick=@ToggleNavMenu&gt;
&lt;span class="navbar-toggler-icon"&gt;&lt;/span&gt;
&lt;/button&gt;
&lt;/div&gt;
&lt;div class=@(collapseNavMenu ? "collapse" : null) onclick=@ToggleNavMenu&gt;
&lt;ul class="nav flex-column"&gt;
&lt;li class="nav-item px-3"&gt;
&lt;NavLink class="nav-link" href="" Match=NavLinkMatch.All&gt;
&lt;span class="oi oi-home" aria-hidden="true"&gt;&lt;/span&gt; Home
&lt;/NavLink&gt;
&lt;/li&gt;
&lt;li class="nav-item px-3"&gt;
&lt;NavLink class="nav-link" href="fetchemployee"&gt;
&lt;span class="oi oi-list-rich" aria-hidden="true"&gt;&lt;/span&gt; Fetch employee
&lt;/NavLink&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
@functions {
bool collapseNavMenu = true;
void ToggleNavMenu()
{
collapseNavMenu = !collapseNavMenu;
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
