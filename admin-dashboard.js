if(localStorage.getItem("adminLoggedIn") !== "true"){

window.location.href =
"admin-login.html";

}

loadApplications();

function loadApplications(){

let container =
document.getElementById("applications");

container.innerHTML = "";

for(let i=0;i<localStorage.length;i++){

let key = localStorage.key(i);

if(key.startsWith("REF-")){

let app =
JSON.parse(localStorage.getItem(key));

container.innerHTML += `

<div class="application-card">

<h3>${app.name}</h3>

<p>
Reference:
${app.referenceNumber}
</p>

<p>
Certificate:
${app.certificateType}
</p>

<p>
Status:
${app.status}
</p>

<button onclick="approveApplication('${key}')">
Approve
</button>

<button onclick="rejectApplication('${key}')">
Reject
</button>

</div>

`;

}

}

}
