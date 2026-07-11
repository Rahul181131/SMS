/*=========================================
 Student Management System
 api.js
 Common API Functions
==========================================*/

//=========================================
// Base URL
//=========================================


const BASE_URL = "/api";

//=========================================
// Get Token
//=========================================

function getToken() {

    return localStorage.getItem("token");

}

//=========================================
// Common Headers
//=========================================

function getHeaders() {

    return {

        "Content-Type": "application/json"

    };

}
//=========================================
// GET Request
//=========================================

async function getRequest(endpoint) {

    try {

        const response = await fetch(

            `${BASE_URL}${endpoint}`,

            {

                method: "GET",

                headers: getHeaders()

            }

        );

        if (!response.ok) {

            throw new Error("Unable to fetch data.");

        }

        return await response.json();

    }

    catch (error) {

        console.error(error);

        throw error;

    }

}

//=========================================
// POST Request
//=========================================

async function postRequest(endpoint, data) {

    try {

        const response = await fetch(

            `${BASE_URL}${endpoint}`,

            {

                method: "POST",

                headers: getHeaders(),

                body: JSON.stringify(data)

            }

        );

        if (!response.ok) {

            throw new Error("Unable to save data.");

        }

        return await response.json();

    }

    catch (error) {

        console.error(error);

        throw error;

    }

}

//=========================================
// PUT Request
//=========================================

async function putRequest(endpoint, data) {

    try {

        const response = await fetch(

            `${BASE_URL}${endpoint}`,

            {

                method: "PUT",

                headers: getHeaders(),

                body: JSON.stringify(data)

            }

        );

        if (!response.ok) {

            throw new Error("Unable to update data.");

        }

        return await response.json();

    }

    catch (error) {

        console.error(error);

        throw error;

    }

}

//=========================================
// DELETE Request
//=========================================

async function deleteRequest(endpoint) {

    try {

        const response = await fetch(

            `${BASE_URL}${endpoint}`,

            {

                method: "DELETE",

                headers: getHeaders()

            }

        );

        if (!response.ok) {

            throw new Error("Unable to delete data.");

        }

        return true;

    }

    catch (error) {

        console.error(error);

        throw error;

    }

}

//=========================================
// Login API
//=========================================

async function loginUser(loginData) {

    const response = await fetch(

        `${BASE_URL}/users/login`,

        {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(loginData)

        }

    );

    if (!response.ok) {

        throw new Error("Invalid email or password.");

    }

    return await response.json();

}

//=========================================
// Register API
//=========================================

async function registerUserApi(registerData) {

    return await postRequest(

        "/users/register",

        registerData

    );

}

//=========================================
// Student APIs
//=========================================

async function getStudents() {

    return await getRequest("/students");

}

async function getStudentById(id) {

    return await getRequest(`/students/${id}`);

}

async function addStudent(student) {

    return await postRequest(

        "/students",

        student

    );

}

async function updateStudent(id, student) {

    return await putRequest(

        `/students/${id}`,

        student

    );

}

async function removeStudent(id) {

    return await deleteRequest(

        `/students/${id}`

    );

}

//=========================================
// Dashboard API
//=========================================

async function getDashboardData() {

    return await getRequest(

        "/dashboard"

    );

}

//=========================================
// Search Students
//=========================================

async function searchStudents(keyword) {

    return await getRequest(

        `/students/search?keyword=${encodeURIComponent(keyword)}`

    );

}

//=========================================
// Logout
//=========================================

function logout() {

    localStorage.clear();

    window.location.href = "login.html";

}