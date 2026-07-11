/*=========================================
 Student Management System
 auth.js
 Authentication & Authorization
==========================================*/

//=========================================
// Authentication Keys
//=========================================

const AUTH_KEYS = {

    TOKEN: "token",
    USERNAME: "username",
    ROLE: "role"

};

//=========================================
// Save Login Session
//=========================================

function saveSession(data) {

    localStorage.setItem(AUTH_KEYS.TOKEN, data.token);
    localStorage.setItem(AUTH_KEYS.USERNAME, data.username);
    localStorage.setItem(AUTH_KEYS.ROLE, data.role);

}

//=========================================
// Get Token
//=========================================

function getToken() {

    return localStorage.getItem(AUTH_KEYS.TOKEN);

}

//=========================================
// Get Username
//=========================================

function getUsername() {

    return localStorage.getItem(AUTH_KEYS.USERNAME);

}

//=========================================
// Get User Role
//=========================================

function getUserRole() {

    return localStorage.getItem(AUTH_KEYS.ROLE);

}

//=========================================
// Check Login
//=========================================

function isLoggedIn() {

    return getToken() !== null;

}

//=========================================
// Require Login
//=========================================

function requireLogin() {

    if (!isLoggedIn()) {

        alert("Please login to continue.");

        window.location.href = "login.html";

    }

}

//=========================================
// Redirect Logged-in User
//=========================================

function redirectIfLoggedIn() {

    if (isLoggedIn()) {

        window.location.href = "dashboard.html";

    }

}

//=========================================
// Display Username
//=========================================

function displayUsername(elementId = "username") {

    const element = document.getElementById(elementId);

    if (element) {

        element.textContent = getUsername() || "Administrator";

    }

}

//=========================================
// Role Checking
//=========================================

function hasRole(role) {

    return getUserRole() === role;

}

function requireAdmin() {

    if (!hasRole("ADMIN")) {

        alert("Access denied.");

        window.location.href = "dashboard.html";

    }

}

//=========================================
// Logout
//=========================================

function logout() {

    const confirmLogout = confirm("Do you want to logout?");

    if (!confirmLogout) {

        return;

    }

    localStorage.clear();

    alert("Logged out successfully.");

    window.location.href = "login.html";

}

//=========================================
// Session Expired
//=========================================

function sessionExpired() {

    localStorage.clear();

    alert("Session expired. Please login again.");

    window.location.href = "login.html";

}

//=========================================
// Authorization Header
//=========================================

function getAuthorizationHeader() {

    return {

        Authorization: `Bearer ${getToken()}`

    };

}

//=========================================
// Auto Authentication
//=========================================

document.addEventListener("DOMContentLoaded", () => {

    const protectedPages = [

        "dashboard.html",
        "students.html",
        "addStudent.html",
        "editStudent.html",
        "viewStudent.html"

    ];

    const currentPage = window.location.pathname.split("/").pop();

    if (protectedPages.includes(currentPage)) {

        requireLogin();

    }

});