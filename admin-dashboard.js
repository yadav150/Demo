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
function approveApplication(ref){

let app =
JSON.parse(
localStorage.getItem(ref)
);

let editedName =
prompt(
"Edit name if needed",
app.name
);

if(editedName){

app.name =
editedName;

}

app.status =
"Approved";

app.certificateNumber =
"FC-" +
new Date().getFullYear() +
"-" +
Math.floor(
10000 +
Math.random()*90000
);

app.issueDate =
new Date().toLocaleDateString();

localStorage.setItem(
ref,
JSON.stringify(app)
);

alert(
"Application Approved"
);

loadApplications();

}

function rejectApplication(ref){

let app =
JSON.parse(
localStorage.getItem(ref)
);

app.status =
"Rejected";

localStorage.setItem(
ref,
JSON.stringify(app)
);

alert(
"Application Rejected"
);

loadApplications();

}
