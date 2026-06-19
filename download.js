function findCertificate(){

let ref =
document.getElementById("reference").value;

let data =
localStorage.getItem(ref);

let result =
document.getElementById(
"certificateResult"
);

if(!data){

result.innerHTML =
"Application Not Found";

return;

}

let app =
JSON.parse(data);

if(app.status !== "Approved"){

result.innerHTML =
"Certificate Not Available";

return;

}

result.innerHTML = `

<div class="certificate-box">

<h2>
OFFICE OF THE FANTASY COMMISSIONER
</h2>

<h3>
${app.certificateType}
</h3>

<p>
Certificate Number:
${app.certificateNumber}
</p>

<p>
This certifies that
</p>

<h2>
${app.name}
</h2>

<p>
Issue Date:
${app.issueDate}
</p>

<br>

<p>
Digitally Signed By
</p>

<b>
Bijay Saha, IFunS
</b>

<br><br>

<button onclick="window.print()">
Download PDF
</button>

</div>

`;

}
