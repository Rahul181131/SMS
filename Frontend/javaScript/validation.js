/*=========================================
 Student Management System
 validation.js
 Common Validation Functions
==========================================*/

//==============================
// Required Field
//==============================

function isRequired(value) {

    return value.trim() !== "";

}

//==============================
// Email Validation
//==============================

function isValidEmail(email) {

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email.trim());

}

//==============================
// Mobile Number
//==============================

function isValidMobile(mobile) {

    const pattern = /^[6-9]\d{9}$/;

    return pattern.test(mobile.trim());

}

//==============================
// Password
//==============================

function isStrongPassword(password) {

    /*
      Minimum 8 characters
      One uppercase
      One lowercase
      One number
      One special character
    */

    const pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    return pattern.test(password);

}

//==============================
// Name
//==============================

function isValidName(name){

    const pattern =
    /^[A-Za-z ]{3,50}$/;

    return pattern.test(name.trim());

}

//==============================
// Student ID
//==============================

function isValidStudentId(id){

    const pattern =
    /^[A-Za-z0-9_-]{3,20}$/;

    return pattern.test(id.trim());

}

//==============================
// Empty Check
//==============================

function isEmpty(value){

    return value.trim()==="";

}

//==============================
// Date Validation
//==============================

function isValidDate(date){

    return date !== "";

}

//==============================
// Select Validation
//==============================

function isSelected(value){

    return value !== "";

}

//==============================
// Text Area
//==============================

function isValidAddress(address){

    return address.trim().length >= 10;

}

//==============================
// Error Message
//==============================

function showError(input,message){

    input.style.borderColor="#dc2626";

    let error =
    input.nextElementSibling;

    if(error && error.classList.contains("error-text")){

        error.textContent=message;

        return;

    }

    error=document.createElement("small");

    error.className="error-text";

    error.style.color="#dc2626";

    error.textContent=message;

    input.parentNode.appendChild(error);

}

//==============================
// Success
//==============================

function showSuccess(input){

    input.style.borderColor="#16a34a";

    const error =
    input.parentNode.querySelector(".error-text");

    if(error){

        error.remove();

    }

}

//==============================
// Clear Errors
//==============================

function clearErrors(){

    document
    .querySelectorAll(".error-text")
    .forEach(error=>error.remove());

}

//==============================
// Reset Form
//==============================

function resetForm(form){

    form.reset();

    clearErrors();

    form
    .querySelectorAll("input,select,textarea")
    .forEach(field=>{

        field.style.borderColor="#d1d5db";

    });

}

//==============================
// Validate Login Form
//==============================

function validateLogin(email,password){

    clearErrors();

    let valid=true;

    if(!isValidEmail(email.value)){

        showError(email,"Enter a valid email.");

        valid=false;

    }
    else{

        showSuccess(email);

    }

    if(password.value.length<6){

        showError(password,
        "Password must be at least 6 characters.");

        valid=false;

    }
    else{

        showSuccess(password);

    }

    return valid;

}

//==============================
// Validate Student Form
//==============================

function validateStudentForm(student){

    clearErrors();

    let valid = true;

    if(!isValidStudentId(student.studentId)){
        showError(student.studentId,"Invalid Student ID.");
        valid = false;
    }else{
        showSuccess(student.studentId);
    }

    if(!isValidName(student.name)){
        showError(student.name,"Enter a valid name.");
        valid = false;
    }else{
        showSuccess(student.name);
    }

    if(!isValidEmail(student.email)){
        showError(student.email,"Invalid Email.");
        valid = false;
    }else{
        showSuccess(student.email);
    }

    if(!isValidMobile(student.mobile)){
        showError(student.mobile,"Invalid Mobile Number.");
        valid = false;
    }else{
        showSuccess(student.mobile);
    }

    if(!isSelected(student.gender)){
        showError(student.gender,"Please select gender.");
        valid = false;
    }else{
        showSuccess(student.gender);
    }

    if(!isSelected(student.department)){
        showError(student.department,"Please select department.");
        valid = false;
    }else{
        showSuccess(student.department);
    }

    if(!isRequired(student.course.value)){
        showError(student.course,"Course is required.");
        valid = false;
    }else{
        showSuccess(student.course);
    }

    if(!isValidDate(student.dob.value)){
        showError(student.dob,"Select Date of Birth.");
        valid = false;
    }else{
        showSuccess(student.dob);
    }

    if(!isValidAddress(student.address.value)){
        showError(student.address,"Address should be at least 10 characters.");
        valid = false;
    }else{
        showSuccess(student.address);
    }

    return valid;

}

//==============================
// Contact Form Validation
//==============================

function validateContactForm(form){

    clearErrors();

    let valid=true;

    if(isEmpty(form.name.value)){

        showError(form.name,
        "Name is required.");

        valid=false;

    }

    if(!isValidEmail(form.email.value)){

        showError(form.email,
        "Invalid Email.");

        valid=false;

    }

    if(isEmpty(form.message.value)){

        showError(form.message,
        "Message is required.");

        valid=false;

    }

    return valid;

}