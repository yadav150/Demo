document.addEventListener("DOMContentLoaded", () => {

const certificate =
localStorage.getItem("selectedCertificate");

document.getElementById("certificateType").value =
certificate || "";

});

document
.getElementById("applicationForm")
.addEventListener("submit", function(e){

e.preventDefault();

let name =
document.getElementById("name");

let fatherName =
document.getElementById("fatherName");

let dob =
document.getElementById("dob");

let address =
document.getElementById("address");

let phone =
document.getElementById("phone");

let fields = [
name,
fatherName,
dob,
address,
phone
];

let valid = true;

fields.forEach(field => {

field.classList.remove("error");

if(field.value.trim() === ""){

field.classList.add("error");
valid = false;

}

});

if(!valid){

alert("Please fill all required fields.");

return;

}

let referenceNumber =
"REF-" +
Date.now();

let application = {

referenceNumber,

certificateType:
document.getElementById("certificateType").value,

name:name.value,

fatherName:fatherName.value,

dob:dob.value,

address:address.value,

phone:phone.value,

status:"Pending"

};

localStorage.setItem(
referenceNumber,
JSON.stringify(application)
);

localStorage.setItem(
"latestReference",
referenceNumber
);

window.location.href =
"acknowledgement.html";

});
