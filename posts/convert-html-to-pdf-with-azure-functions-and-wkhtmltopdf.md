---
card: "/images/default.jpg"
tags: [Azure Functions]
description: "In this article, we are going to use Azure Functions and the "
author: "Milad E. Fahmy"
title: "How to Convert HTML to PDF with Azure Functions and wkhtmltopdf"
created: "2021-08-15T22:48:47+02:00"
modified: "2021-08-15T22:48:47+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-azure-functions tag-html tag-pdf ">
<header class="post-full-header">
<h1 class="post-full-title">How to Convert HTML to PDF with Azure Functions and wkhtmltopdf</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/04/html-to-pdf.jpeg 300w,
/news/content/images/size/w600/2021/04/html-to-pdf.jpeg 600w,
/news/content/images/size/w1000/2021/04/html-to-pdf.jpeg 1000w,
/news/content/images/size/w2000/2021/04/html-to-pdf.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/04/html-to-pdf.jpeg" alt="How to Convert HTML to PDF with Azure Functions and wkhtmltopdf">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
namespace Html2Pdf
{
public class Html2Pdf
{
// The name of the function
[FunctionName("Html2Pdf")]
// The first arugment tells that the functions can be triggerd by a POST HTTP request.
// The second argument is mainly used for logging information, warnings or errors
public void Run([HttpTrigger(AuthorizationLevel.Function, "POST")] Html2PdfRequest Request, ILogger Log)
{
}
}
}
</code></pre>
{
public class Html2PdfRequest
{
// The HTML content that needs to be converted.
public string HtmlContent { get; set; }
// The name of the PDF file to be generated
public string PDFFileName { get; set; }
}
}
</code></pre>
</code></pre>
// For our purposes we are going to use SynchronizedConverter
IPdfConverter pdfConverter = new SynchronizedConverter(new PdfTools());
// A function to convert html content to pdf based on the configuration passed as arguments
// Arguments:
// HtmlContent: the html content to be converted
// Width: the width of the pdf to be created. e.g. "8.5in", "21.59cm" etc.
// Height: the height of the pdf to be created. e.g. "11in", "27.94cm" etc.
// Margins: the margis around the content
// DPI: The dpi is very important when you want to print the pdf.
// Returns a byte array of the pdf which can be stored as a file
private byte[] BuildPdf(string HtmlContent, string Width, string Height, MarginSettings Margins, int? DPI = 180)
{
// Call the Convert method of SynchronizedConverter "pdfConverter"
return pdfConverter.Convert(new HtmlToPdfDocument()
{
// Set the html content
Objects =
{
new ObjectSettings
{
HtmlContent = HtmlContent
}
},
// Set the configurations
GlobalSettings = new GlobalSettings
{
// PaperKind.A4 can also be used instead PechkinPaperSize
PaperSize = new PechkinPaperSize(Width, Height),
DPI = DPI,
Margins = Margins
}
});
}
</code></pre>
var PDFByteArray = BuildPdf(Request.HtmlContent, "8.5in", "11in", new MarginSettings(0, 0, 0,0));
</code></pre>
// Make sure to replace with your connection string.
var StorageConnectionString = "DefaultEndpointsProtocol=https;AccountName=&lt;YOUR ACCOUNT NAME&gt;;AccountKey=&lt;YOUR ACCOUNT KEY&gt;;EndpointSuffix=core.windows.net";
// Generate an instance of CloudStorageAccount by parsing the connection string
var StorageAccount = CloudStorageAccount.Parse(StorageConnectionString);
// Create an instance of CloudBlobClient to connect to our storage account
CloudBlobClient BlobClient = StorageAccount.CreateCloudBlobClient();
// Get the instance of CloudBlobContainer which points to a container name "pdf"
// Replace your own container name
CloudBlobContainer BlobContainer = BlobClient.GetContainerReference("pdf");
// Get the instance of the CloudBlockBlob to which the PDFByteArray will be uploaded
CloudBlockBlob Blob = BlobContainer.GetBlockBlobReference(Request.PDFFileName);
// Upload the pdf blob
await Blob.UploadFromByteArrayAsync(PDFByteArray, 0, PDFByteArray.Length);
</code></pre>
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using DinkToPdf;
using IPdfConverter = DinkToPdf.Contracts.IConverter;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using System.Threading.Tasks;
namespace Html2Pdf
{
public class Html2Pdf
{
// Read more about converter on: https://github.com/rdvojmoc/DinkToPdf
// For our purposes we are going to use SynchronizedConverter
IPdfConverter pdfConverter = new SynchronizedConverter(new PdfTools());
// A function to convert html content to pdf based on the configuration passed as arguments
// Arguments:
// HtmlContent: the html content to be converted
// Width: the width of the pdf to be created. e.g. "8.5in", "21.59cm" etc.
// Height: the height of the pdf to be created. e.g. "11in", "27.94cm" etc.
// Margins: the margis around the content
// DPI: The dpi is very important when you want to print the pdf.
// Returns a byte array of the pdf which can be stored as a file
private byte[] BuildPdf(string HtmlContent, string Width, string Height, MarginSettings Margins, int? DPI = 180)
{
// Call the Convert method of SynchronizedConverter "pdfConverter"
return pdfConverter.Convert(new HtmlToPdfDocument()
{
// Set the html content
Objects =
{
new ObjectSettings
{
HtmlContent = HtmlContent
}
},
// Set the configurations
GlobalSettings = new GlobalSettings
{
// PaperKind.A4 can also be used instead of width &amp; height
PaperSize = new PechkinPaperSize(Width, Height),
DPI = DPI,
Margins = Margins
}
});
}
// The name of the function
[FunctionName("Html2Pdf")]
// The first arugment tells that the functions can be triggerd by a POST HTTP request.
// The second argument is mainly used for logging information, warnings or errors
public async Task Run([HttpTrigger(AuthorizationLevel.Function, "POST")] Html2PdfRequest Request, ILogger Log)
{
// PDFByteArray is a byte array of pdf generated from the HtmlContent
var PDFByteArray = BuildPdf(Request.HtmlContent, "8.5in", "11in", new MarginSettings(0, 0, 0, 0));
// The connection string of the Storage Account to which our PDF file will be uploaded
var StorageConnectionString = "DefaultEndpointsProtocol=https;AccountName=&lt;YOUR ACCOUNT NAME&gt;;AccountKey=&lt;YOUR ACCOUNT KEY&gt;;EndpointSuffix=core.windows.net";
// Generate an instance of CloudStorageAccount by parsing the connection string
var StorageAccount = CloudStorageAccount.Parse(StorageConnectionString);
// Create an instance of CloudBlobClient to connect to our storage account
CloudBlobClient BlobClient = StorageAccount.CreateCloudBlobClient();
// Get the instance of CloudBlobContainer which points to a container name "pdf"
// Replace your own container name
CloudBlobContainer BlobContainer = BlobClient.GetContainerReference("pdf");
// Get the instance of the CloudBlockBlob to which the PDFByteArray will be uploaded
CloudBlockBlob Blob = BlobContainer.GetBlockBlobReference(Request.PDFFileName);
// Upload the pdf blob
await Blob.UploadFromByteArrayAsync(PDFByteArray, 0, PDFByteArray.Length);
}
}
}
</code></pre>
&lt;CopyToOutputDirectory&gt;PreserveNewest&lt;/CopyToOutputDirectory&gt;
&lt;CopyToPublishDirectory&gt;Always&lt;/CopyToPublishDirectory&gt;
&lt;/None&gt;
</code></pre>
&lt;PropertyGroup&gt;
&lt;TargetFramework&gt;netcoreapp3.1&lt;/TargetFramework&gt;
&lt;AzureFunctionsVersion&gt;v3&lt;/AzureFunctionsVersion&gt;
&lt;/PropertyGroup&gt;
&lt;ItemGroup&gt;
&lt;PackageReference Include="DinkToPdf" Version="1.0.8" /&gt;
&lt;PackageReference Include="Microsoft.NET.Sdk.Functions" Version="3.0.11" /&gt;
&lt;/ItemGroup&gt;
&lt;ItemGroup&gt;
&lt;None Update="host.json"&gt;
&lt;CopyToOutputDirectory&gt;PreserveNewest&lt;/CopyToOutputDirectory&gt;
&lt;/None&gt;
&lt;None Update="local.settings.json"&gt;
&lt;CopyToOutputDirectory&gt;PreserveNewest&lt;/CopyToOutputDirectory&gt;
&lt;CopyToPublishDirectory&gt;Never&lt;/CopyToPublishDirectory&gt;
&lt;/None&gt;
&lt;None Update="./libwkhtmltox.so"&gt;
&lt;CopyToOutputDirectory&gt;PreserveNewest&lt;/CopyToOutputDirectory&gt;
&lt;CopyToPublishDirectory&gt;Always&lt;/CopyToPublishDirectory&gt;
&lt;/None&gt;
&lt;/ItemGroup&gt;
&lt;/Project&gt;
</code></pre>
</code></pre>
</code></pre>
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Newtonsoft.Json;
namespace Demo.ConsoleApp
{
public class Program
{
public static async Task Main(string[] args)
{
string AzureFunctionsUrl = "https://&lt;Your Base Url&gt;/api/Html2Pdf?code=&lt;Replace with your Code&gt;";
using (HttpClient client = new HttpClient())
{
var Request = new Html2PdfRequest
{
HtmlContent = "&lt;h1&gt;Hello World&lt;/h1&gt;",
PDFFileName = "hello-world.pdf"
};
string json = JsonConvert.SerializeObject(Request);
var buffer = System.Text.Encoding.UTF8.GetBytes(json);
var byteContent = new ByteArrayContent(buffer);
byteContent.Headers.ContentType = new MediaTypeHeaderValue("application/json");
using (HttpResponseMessage res = await client.PostAsync(AzureFunctionsUrl, byteContent))
{
if (res.StatusCode != HttpStatusCode.NoContent)
{
throw new Exception("There was an error uploading the pdf");
}
}
}
}
}
public class Html2PdfRequest
{
// The HTML content that needs to be converted.
public string HtmlContent { get; set; }
// The name of the PDF file to be generated
public string PDFFileName { get; set; }
}
}
</code></pre>
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
