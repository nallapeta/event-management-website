document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const userType = document.querySelector('input[name="userType"]:checked').value;
            const message = document.getElementById("loginMessage");

            if (username === "123" && password === "123") {

                if (userType === "organizer") {
                    window.location.href = "add-event.html"; 
                } else {
                    window.location.href = "index.html";
                }
            } else {
                message.textContent = "Invalid username or password.";
                message.style.color = "red";
            }
        });
    } else {
        console.error("Login form not found. Check HTML for id='loginForm'.");
    }
});
