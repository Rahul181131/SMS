const role = localStorage.getItem("role");
console.log("students.js updated");



document.addEventListener("DOMContentLoaded", () => {

    loadStudents();

});


async function loadStudents() {

    try {

        const response = awaitfetch(BASE_URL)


        const students = await response.json();


        displayStudents(students);


    }
    catch (error) {

        console.error(error);

    }

}



function displayStudents(students) {

    const tableBody = document.getElementById("studentTableBody");

    tableBody.innerHTML = "";

    students.forEach(student => {

        const actionButtons =
            role === "ADMIN"
                ?
                `
                <button class="edit" onclick="editStudent(${student.id})">
                    Edit
                </button>

                <button class="delete" onclick="deleteStudent(${student.id})">
                    Delete
                </button>
                `
                :
                `<span style="color:green;font-weight:bold;">View Only</span>`;

        const row = `
        <tr>

            <td>${student.id}</td>

            <td>${student.studentId}</td>

            <td>${student.name}</td>

            <td>${student.email}</td>

            <td>${student.mobile}</td>

            <td>${student.gender}</td>

            <td>${student.department}</td>

            <td>${student.course}</td>

            <td>${actionButtons}</td>

        </tr>
        `;

        tableBody.innerHTML += row;

    });

}
function editStudent(id) {

    window.location.href = "editStudent.html?id=" + id;

}



async function searchStudents(keyword) {

    const response = await fetch(
        `${BASE_URL}/students/search?keyword=${keyword}`
    );

    if (!response.ok) {
        throw new Error("Search failed");
    }

    return await response.json();

}


function viewStudent(id) {

    window.location.href =
        "viewStudent.html?id=" + id;

}