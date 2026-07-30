// ==================================
// Dashboard Login Protection
// ==================================

let isLoggedIn = localStorage.getItem("isLoggedIn");


if(isLoggedIn !== "true"){

    alert("Please login first");

    window.location.href = "login.html";

}



// ==================================
// Display User Details
// ==================================


let user =
JSON.parse(localStorage.getItem("loggedUser"));



if(user){


    document.getElementById("studentName").innerHTML =
    user.fname;


    document.getElementById("fullName").innerHTML =
    user.fname + " " + user.lname;


    document.getElementById("userEmail").innerHTML =
    user.email;


    document.getElementById("userDepartment").innerHTML =
    user.department;


    document.getElementById("userEvent").innerHTML =
    user.event;


}



// ==================================
// Logout Function
// ==================================


function logout(){


    localStorage.removeItem("isLoggedIn");

    localStorage.removeItem("loggedUser");


    alert("Logged out successfully");


    window.location.href="login.html";


}
