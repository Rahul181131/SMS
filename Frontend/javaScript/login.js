
/*=========================================
 Student Management System
 login.js
==========================================*/

// Backend Base URL
const BASE_URL = "/api/users/register";

// Form Elements
const loginForm = document.getElementById("loginForm");
console.log("Login Form:", loginForm);
const email = document.getElementById("email");
console.log("Email:", email);
const password = document.getElementById("password");
console.log("password:", password)
const loginBtn = document.getElementById("loginBtn");
console.log("Button:", loginBtn);

//===============================
// Validation
//===============================

function validateForm() {

    if (email.value.trim() === "") {
        alert("Please enter your email.");
        email.focus();
        return false;
    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value.trim())) {
        alert("Please enter a valid email.");
        email.focus();
        return false;
    }

    if (password.value.trim() === "") {
        alert("Please enter your password.");
        password.focus();
        return false;
    }

    if (password.value.length < 5) {
        alert("Password must contain at least 6 characters.");
        password.focus();
        return false;
    }

    return true;
}

//===============================
// Login
//===============================

async function loginUser(event) {

    event.preventDefault();

    if (!validateForm()) {
        return;
    }

    loginBtn.disabled = true;
    loginBtn.innerHTML = "Signing In...";

    const loginData = {

        email: email.value.trim(),
        password: password.value.trim()

    };

    try {

        const response = await fetch(`${BASE_URL}/api/users/login`, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(loginData)

        });

        if (!response.ok) {

            throw new Error("Invalid email or password.");

        }

        const data = await response.json();

        // Save Login Information
        localStorage.setItem("token", "loggedin");
        localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("username", data.name);
        localStorage.setItem("role", data.role);

        alert("Login Successful!");

        window.location.href = "dashboard.html";

    }

    catch (error) {

        alert(error.message);

    }

    finally {

        loginBtn.disabled = false;

        loginBtn.innerHTML = "Login";

    }

}

//===============================
// Event
//===============================

if(loginForm){

    loginForm.addEventListener("submit", loginUser);

    console.log("Submit event attached");

}
else{

    console.log("Login form not found");

}