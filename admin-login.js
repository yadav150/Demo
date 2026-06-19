function loginAdmin(){

let password =
document.getElementById("password")
.value;

if(password === "01122008"){

localStorage.setItem(
"adminLoggedIn",
"true"
);

window.location.href =
"admin-dashboard.html";

}else{

alert("Invalid Password");

}

}
