function checkStatus(){

let ref =
document.getElementById("reference").value;

let data =
localStorage.getItem(ref);

let result =
document.getElementById("result");

if(!data){

result.innerHTML =
"<p>Application Not Found</p>";

return;
}

let app =
JSON.parse(data);

result.innerHTML = `
<hr>
<p><b>Name:</b> ${app.name}</p>
<p><b>Certificate:</b>
${app.certificateType}</p>
<p><b>Status:</b>
${app.status}</p>
`;

if(app.certificateNumber){

result.innerHTML += `
<p><b>Certificate No:</b>
${app.certificateNumber}</p>
`;
}

}
