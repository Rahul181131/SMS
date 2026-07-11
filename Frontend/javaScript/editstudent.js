const role = localStorage.getItem("role");

if(role !== "ADMIN"){

    alert("Access Denied");

    window.location.href="students.html";

}
console.log("editstudent.js loaded");

console.log("URL:", window.location.href);
/*=========================================
 Student Management System
 editStudent.js
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    if (typeof requireLogin === "function") {
        requireLogin();
    }

    const studentId = getStudentIdFromUrl();

    if (!studentId) {
        alert("Student ID not found.");
        window.location.href = "students.html";
        return;
    }

    loadStudent(studentId);

    const form = document.getElementById("editStudentForm");

    if (form) {
        form.addEventListener("submit", updateStudentRecord);
    }

});

//=========================================
// Get Student ID From URL
//=========================================

function getStudentIdFromUrl() {

    const params = new URLSearchParams(window.location.search);

    return params.get("id");

}

//=========================================
// Load Student Details
//=========================================

async function loadStudent(id) {

    try {

        const student = await getStudentById(id);

        document.getElementById("studentId").value = student.studentId;
        document.getElementById("studentName").value = student.name;
        document.getElementById("email").value = student.email;
        document.getElementById("mobile").value = student.mobile;
        document.getElementById("gender").value = student.gender;
        document.getElementById("department").value = student.department;
        document.getElementById("course").value = student.course;
        document.getElementById("dob").value = student.dob;
        document.getElementById("address").value = student.address;

    }

    catch (error) {

        console.error(error);

        alert("Unable to load student details.");

    }

}

//=========================================
// Update Student
//=========================================

async function updateStudentRecord(event) {

    event.preventDefault();

    clearErrors();

    const studentId = document.getElementById("studentId");
    const studentName = document.getElementById("studentName");
    const email = document.getElementById("email");
    const mobile = document.getElementById("mobile");
    const gender = document.getElementById("gender");
    const department = document.getElementById("department");
    const course = document.getElementById("course");
    const dob = document.getElementById("dob");
    const address = document.getElementById("address");

    const updateBtn = document.getElementById("updateBtn");

    let valid = true;

    if (!isValidStudentId(studentId.value)) {

        showError(studentId, "Invalid Student ID");
        valid = false;

    } else {

        showSuccess(studentId);

    }

    if (!isValidName(studentName.value)) {

        showError(studentName, "Invalid Name");
        valid = false;

    } else {

        showSuccess(studentName);

    }

    if (!isValidEmail(email.value)) {

        showError(email, "Invalid Email");
        valid = false;

    } else {

        showSuccess(email);

    }

    if (!isValidMobile(mobile.value)) {

        showError(mobile, "Invalid Mobile Number");
        valid = false;

    } else {

        showSuccess(mobile);

    }

    if (!isSelected(gender.value)) {

        showError(gender, "Select Gender");
        valid = false;

    } else {

        showSuccess(gender);

    }

    if (!isSelected(department.value)) {

        showError(department, "Select Department");
        valid = false;

    } else {

        showSuccess(department);

    }

    if (!isSelected(course.value)) {

        showError(course, "Select Course");
        valid = false;

    } else {

        showSuccess(course);

    }

    if (!isValidDate(dob.value)) {

        showError(dob, "Select Date of Birth");
        valid = false;

    } else {

        showSuccess(dob);

    }

    if (!isValidAddress(address.value)) {

        showError(address, "Enter a valid address");
        valid = false;

    } else {

        showSuccess(address);

    }

    if (!valid) {
        return;
    }

    const student = {

        studentId: studentId.value.trim(),
        name: studentName.value.trim(),
        email: email.value.trim(),
        mobile: mobile.value.trim(),
        gender: gender.value,
        department: department.value,
        course: course.value,
        dob: dob.value,
        address: address.value.trim()

    };

    updateBtn.disabled = true;
    updateBtn.textContent = "Updating...";

    try {

        await updateStudent(
            getStudentIdFromUrl(),
            student
        );

        alert("Student updated successfully.");

        window.location.href = "students.html";

    }

    catch (error) {

        console.error(error);

        alert("Unable to update student.");

    }

    finally {

        updateBtn.disabled = false;
        updateBtn.textContent = "Update Student";

    }

}