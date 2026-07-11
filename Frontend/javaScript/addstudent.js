const role = localStorage.getItem("role");

if(role !== "ADMIN"){

    alert("Access Denied");

    window.location.href="dashboard.html";

}
console.log("addstudent.js loaded")

const BASE_URL = "/api";


const studentForm = document.getElementById("studentForm");


studentForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    console.log("Form submitted");

    const studentData = {

        studentId:
            document.getElementById("studentId").value,

        name:
            document.getElementById("name").value,

        email:
            document.getElementById("email").value,

        mobile:
            document.getElementById("mobile").value,

        gender:
            document.getElementById("gender").value,

        department:
            document.getElementById("department").value,

        course:
            document.getElementById("course").value,

        dob:
            document.getElementById("dob").value,

        address:
            document.getElementById("address").value

    };
        console.log(studentData);

    try {


        const response = await fetch(
            `${BASE_URL}/students`,
            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(studentData)

            }
        );


        if (!response.ok) {

            throw new Error("Unable to add student");

        }


        alert("Student added successfully");


        window.location.href = "students.html";


    }
    catch (error) {

        alert(error.message);

    }


});