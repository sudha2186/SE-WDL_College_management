// ===============================
// Show / Hide Password
// ===============================

function togglePassword(){

    let password =
    document.getElementById("loginPassword");


    password.type =
    password.type === "password"
    ? "text"
    : "password";

}


// ===============================
// Login Validation
// ===============================

document.getElementById("loginForm")
.addEventListener("submit", function(e){


    e.preventDefault();


    let email =
    document.getElementById("loginEmail")
    .value.trim();


    let password =
    document.getElementById("loginPassword")
    .value;



    // Clear Errors

    document.getElementById("emailError")
    .innerHTML="";


    document.getElementById("passwordError")
    .innerHTML="";



    let valid=true;



    // Email Validation

    if(email===""){


        document.getElementById("emailError")
        .innerHTML="Email is required";


        valid=false;

    }



    // Password Validation

    if(password===""){


        document.getElementById("passwordError")
        .innerHTML="Password is required";


        valid=false;

    }



    if(!valid)
    return;



    // ===============================
    // Get Registered Users
    // ===============================


    let users =
    JSON.parse(localStorage.getItem("users"))
    || [];



    // Find User

    let user =
    users.find(function(u){


        return u.email===email &&
               u.password===password;


    });



    // ===============================
    // Login Success
    // ===============================


    if(user){


        localStorage.setItem(
            "isLoggedIn",
            "true"
        );


        localStorage.setItem(
            "loggedUser",
            JSON.stringify(user)
        );


        alert("Login Successful");


        window.location.href =
        "dashboard.html";


    }



    else{


        alert(
        "Invalid Email or Password"
        );


    }



});
