// Show / Hide Password
function toggleRegisterPassword() {

    let password = document.getElementById("password");

    password.type =
        password.type === "password"
        ? "text"
        : "password";
}

document.getElementById("registrationForm").addEventListener("submit", function (e) {

    e.preventDefault();

    // =======================
    // Get Values
    // =======================

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let department = document.getElementById("department").value;
    let event = document.getElementById("event").value;
    let address = document.getElementById("address").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let terms = document.getElementById("terms").checked;

    let valid = true;

    // =======================
    // Clear Errors
    // =======================

    document.querySelectorAll("small").forEach(function (item) {

        item.innerHTML = "";

    });

    // =======================
    // Regular Expressions
    // =======================

    let nameRegex = /^[A-Za-z ]+$/;

    let emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let mobileRegex =
        /^[6-9][0-9]{9}$/;

    let passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    // =======================
    // Validation 1
    // =======================

    if (fname === "") {

        document.getElementById("fnameError").innerHTML =
            "First Name is required";

        valid = false;

    }
    else if (!nameRegex.test(fname)) {

        document.getElementById("fnameError").innerHTML =
            "Only alphabets allowed";

        valid = false;

    }

    // =======================

    if (lname === "") {

        document.getElementById("lnameError").innerHTML =
            "Last Name is required";

        valid = false;

    }
    else if (!nameRegex.test(lname)) {

        document.getElementById("lnameError").innerHTML =
            "Only alphabets allowed";

        valid = false;

    }

    // =======================

    if (email === "") {

        document.getElementById("emailError").innerHTML =
            "Email is required";

        valid = false;

    }
    else if (!emailRegex.test(email)) {

        document.getElementById("emailError").innerHTML =
            "Invalid Email";

        valid = false;

    }

    // =======================

    if (mobile === "") {

        document.getElementById("mobileError").innerHTML =
            "Mobile Number is required";

        valid = false;

    }
    else if (!mobileRegex.test(mobile)) {

        document.getElementById("mobileError").innerHTML =
            "Enter valid 10-digit mobile number";

        valid = false;

    }

    // =======================

    if (dob === "") {

        document.getElementById("dobError").innerHTML =
            "Select Date of Birth";

        valid = false;

    }

    // =======================

    if (gender === "") {

        document.getElementById("genderError").innerHTML =
            "Select Gender";

        valid = false;

    }

    // =======================

    if (department === "") {

        document.getElementById("departmentError").innerHTML =
            "Select Department";

        valid = false;

    }

    // =======================

    if (event === "") {

        document.getElementById("eventError").innerHTML =
            "Select Event";

        valid = false;

    }

    // =======================

    if (address.length < 10) {

        document.getElementById("addressError").innerHTML =
            "Minimum 10 characters";

        valid = false;

    }

    // =======================

    if (!passwordRegex.test(password)) {

        document.getElementById("passwordError").innerHTML =
            "Weak Password";

        valid = false;

    }

    // =======================

    if (confirmPassword !== password) {

        document.getElementById("confirmError").innerHTML =
            "Passwords do not match";

        valid = false;

    }

    // =======================

    if (!terms) {

        document.getElementById("termsError").innerHTML =
            "Accept Terms & Conditions";

        valid = false;

    }

    // =======================
    // Duplicate Email
    // =======================

    let users =
        JSON.parse(localStorage.getItem("users")) || [];

    let exists =
        users.find(user => user.email === email);

    if (exists) {

        document.getElementById("emailError").innerHTML =
            "Email already registered";

        valid = false;

    }

    // =======================

    if (valid) {

        users.push({

            fname: fname,
            lname: lname,
            email: email,
            mobile: mobile,
            dob: dob,
            gender: gender,
            department: department,
            event: event,
            address: address,
            password: password

        });

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );

        alert("Registration Successful");

        window.location.href = "login.html";

    }
    // =======================
    // Date of Birth Validation
    // =======================

    if (dob === "") {

        document.getElementById("dobError").innerHTML =
            "Date of Birth is required";

        valid = false;

    }
    else {

        let birthDate = new Date(dob);

        let today = new Date();


        // Future date check

        if (birthDate > today) {

            document.getElementById("dobError").innerHTML =
                "Date of Birth cannot be a future date";

            valid = false;

        }


        // Age calculation

        let age = today.getFullYear() - birthDate.getFullYear();

        let monthDifference =
            today.getMonth() - birthDate.getMonth();


        if (
            monthDifference < 0 ||
            (monthDifference === 0 &&
            today.getDate() < birthDate.getDate())
        ) {

            age--;

        }


        if (age < 16) {

            document.getElementById("dobError").innerHTML =
                "Student must be at least 16 years old";

            valid = false;

        }

    }

});
