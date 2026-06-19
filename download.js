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
"Certificate Not Found";

return;
}

let app =
JSON.parse(data);

if(app.status !== "Approved"){

result.innerHTML =
"Certificate Not Approved Yet";

return;
}

result.innerHTML = `
<hr>

<p>
Certificate Number:
${app.certificateNumber}
</p>

<button onclick="window.print()">
Download Certificate
</button>
`;

}
