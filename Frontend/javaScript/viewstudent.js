/*=========================================
 Student Management System
 viewStudent.js
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    // Check Login
    if (typeof requireLogin === "function") {
        requireLogin();
    }

    const studentId = getStudentId();

    if (!studentId) {

        alert("Student not found.");

        window.location.href = "students.html";

        return;
    }

    loadStudentDetails(studentId);

});

//=========================================
// Get Student ID From URL
//=========================================

function getStudentId() {

    const params = new URLSearchParams(window.location.search);

    return params.get("id");

}

//=========================================
// Load Student Details
//=========================================

async function loadStudentDetails(id) {

    try {

        const student = await getStudentById(id);

        displayStudent(student);

    }

    catch (error) {

        console.error(error);

        alert("Unable to load student details.");

    }

}

//=========================================
// Display Student Details
//=========================================

function displayStudent(student) {

    setText("studentId", student.studentId);
    setText("studentName", student.name);
    setText("studentEmail", student.email);
    setText("studentMobile", student.mobile);
    setText("studentGender", student.gender);
    setText("studentDepartment", student.department);
    setText("studentCourse", student.course);
    setText("studentDOB", student.dob);
    setText("studentAddress", student.address);

}

//=========================================
// Set Text
//=========================================

function setText(id, value) {

    const element = document.getElementById(id);

    if (element) {

        element.textContent = value || "-";

    }

}

//=========================================
// Back Button
//=========================================

function goBack() {

    window.location.href = "students.html";

}

//=========================================
// Edit Student
//=========================================

function editStudent() {

    const id = getStudentId();

    window.location.href = `editStudent.html?id=${id}`;

}

//=========================================
// Events
//=========================================

const backBtn = document.getElementById("backBtn");

if (backBtn) {

    backBtn.addEventListener("click", goBack);

}

const editBtn = document.getElementById("editBtn");

if (editBtn) {

    editBtn.addEventListener("click", editStudent);

}


document.addEventListener("DOMContentLoaded", () => {

    loadStudentDetails();

});


async function loadStudentDetails(){

    const params = new URLSearchParams(
        window.location.search
    );

    const id = params.get("id");


    try{

        const response = await fetch(
            `${BASE_URL}/students/${id}`
        );


        const student = await response.json();


        document.getElementById(
            "studentDetails"
        ).innerHTML = `

        <h3>${student.name}</h3>

        <p><b>Student ID:</b> ${student.studentId}</p>

        <p><b>Email:</b> ${student.email}</p>

        <p><b>Mobile:</b> ${student.mobile}</p>

        <p><b>Gender:</b> ${student.gender}</p>

        <p><b>Department:</b> ${student.department}</p>

        <p><b>Course:</b> ${student.course}</p>

        <p><b>Date of Birth:</b> ${student.dob}</p>

        <p><b>Address:</b> ${student.address}</p>

        `;


    }
    catch(error){

        console.log(error);

        alert("Unable to load student details");

    }

}