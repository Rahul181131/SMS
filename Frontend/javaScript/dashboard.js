/*=========================================
 Student Management System
 dashboard.js
==========================================*/

// Backend URL
const BASE_URL = "/api";

//=============================
// Check Login
//=============================

document.addEventListener("DOMContentLoaded", () => {

    checkLogin();

    loadDashboard();

    displayCurrentDate();

    startClock();

});


document.addEventListener("DOMContentLoaded", () => {

    checkLogin();

    applyRolePermissions();

    loadDashboard();

});

//=============================
// Authentication
//=============================

function checkLogin() {

    const token = localStorage.getItem("token");

    if (!token) {

        alert("Please login first.");

        window.location.href = "login.html";

    }

}

//=============================
// Display Username
//=============================

const username = localStorage.getItem("username");

if(document.getElementById("username")){

    document.getElementById("username").textContent =
    username || "Administrator";

}

//=============================
// Load Dashboard Data
//=============================

async function loadDashboard(){

    try{

        const response = await fetch(
            `${BASE_URL}/students`
        );


        const students = await response.json();


        document.getElementById("totalStudents").textContent =
            students.length;


        document.getElementById("totalusers").textContent =
            new Set(
                students.map(student => student.course)
            ).size;


    }

    catch(error){

        console.error(error);

    }

}
//=============================
// Update Dashboard
//=============================
function updateDashboard(data){

    setValue(
        "totalStudents",
        data.totalStudents
    );

    setValue(
        "totalUsers",
        data.totalUsers
    );

}

function setValue(id,value){

    const element=document.getElementById(id);

    if(element){

        element.textContent=value;

    }

}

//=============================
// Current Date
//=============================

function displayCurrentDate(){

    const date=document.getElementById("currentDate");

    if(date){

        date.textContent=
        new Date().toLocaleDateString();

    }

}

//=============================
// Live Clock
//=============================

function startClock(){

    const clock=document.getElementById("currentTime");

    if(!clock) return;

    setInterval(()=>{

        clock.textContent=
        new Date().toLocaleTimeString();

    },1000);

}

//=============================
// Logout
//=============================

function logout(){

    if(confirm("Do you want to logout?")){

        localStorage.clear();

        window.location.href="login.html";

    }

}

//=============================
// Refresh Dashboard
//=============================

function refreshDashboard(){

    loadDashboard();

}



function applyRolePermissions() {

    const role = localStorage.getItem("role");

    if(role === "USER") {

        const addBtn = document.getElementById("addStudentBtn");

        if(addBtn){
            addBtn.style.display = "none";
        }

    }

}

//=============================
// Buttons
//=============================

const logoutBtn=document.getElementById("logoutBtn");

if(logoutBtn){

    logoutBtn.addEventListener("click",logout);

}

const refreshBtn=document.getElementById("refreshBtn");

if(refreshBtn){

    refreshBtn.addEventListener("click",refreshDashboard);

}