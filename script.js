function verifyCertificate(){

const certNo =
document.getElementById("certNo").value;

google.script.run
.withSuccessHandler(showResult)
.verifyCertificate(certNo);

}

function showResult(data){

let html='';

if(data.found){

html=`

<div class="card">

<div class="status">
✓ CERTIFICATE VERIFIED
</div>

<table>

<tr>
<td>Name</td>
<td>${data.name}</td>
</tr>

<tr>
<td>Institute</td>
<td>${data.institute}</td>
</tr>

<tr>
<td>Certificate Number</td>
<td>${data.certificateNo}</td>
</tr>

<tr>
<td>Email</td>
<td>${data.email}</td>
</tr>

<tr>
<td>Department</td>
<td>${data.department}</td>
</tr>

<tr>
<td>Designation</td>
<td>${data.designation}</td>
</tr>

<tr>
<td>Employee ID</td>
<td>${data.employeeId}</td>
</tr>

<tr>
<td>Merged Doc ID</td>
<td>${data.mergedDocId}</td>
</tr>

<tr>
<td>Merged Doc URL</td>
<td>${data.mergedDocUrl}</td>
</tr>

<tr>
<td>Link to Merged Doc</td>
<td>${data.mergedDocLink}</td>
</tr>

<tr>
<td>Document Merge Status</td>
<td>${data.mergeStatus}</td>
</tr>

</table>

<div class="actions">

<a class="btn"
href="${data.certificateUrl}"
target="_blank">
View Certificate
</a>

<a class="btn"
href="${data.mergedDocLink}"
target="_blank">
Open Merged Document
</a>

</div>

</div>

`;

}else{

html=`

<div class="card">
<div class="notfound">
❌ Certificate Number Not Found
</div>
</div>

`;

}

document.getElementById("result").innerHTML=html;

}