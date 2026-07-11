console.log("Register JS Loaded");

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("registerForm");

    form.addEventListener("submit", registerUser);

});

async function registerUser(event) {

    event.preventDefault();

    const user = {

        name: document.getElementById("fullName").value.trim(),

        email: document.getElementById("email").value.trim(),

        password: document.getElementById("password").value,

        role: document.getElementById("role").value

    };

    console.log(user);

    try {

        const response = await fetch(
            "/api/users/register",
            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(user)

            }

        );

        if (response.ok) {

            alert("Registration Successful");

            window.location.href = "login.html";

        } else {

            alert("Registration Failed");

        }

    }

    catch (error) {

        console.error(error);

        alert("Server Error");

    }

}