document.addEventListener("DOMContentLoaded", function () {
    // SignIn Form Validation
    document.getElementById("signinForm")?.addEventListener("submit", function (e) {
        e.preventDefault();
        let username = document.getElementById("signin-username");
        let password = document.getElementById("signin-password");

        validateRequired(username);
        validatePassword(password);

        if (username.value && password.value.length >= 6) {
            alert("Sign In Successful!");
            this.reset();
        }
    });

    // SignUp Form Validation
    document.getElementById("signupForm")?.addEventListener("submit", function (e) {
        e.preventDefault();
        let fullname = document.getElementById("fullname");
        let email = document.getElementById("email");
        let password = document.getElementById("password");
        let age = document.getElementById("age");
        let phone = document.getElementById("phone");
        let gender = document.getElementById("gender");

        validateRequired(fullname);
        validateEmail(email);
        validatePassword(password);
        validateAge(age);
        validatePhone(phone);
        validateRequired(gender);

        if (document.querySelectorAll(".error:empty").length === 6) {
            alert("Sign Up Successful!");
            this.reset();
        }
    });

    // Validation Functions
    function validateRequired(input) {
        let error = input.nextElementSibling;
        error.textContent = input.value.trim() === "" ? "This field is required" : "";
    }

    function validateEmail(input) {
        let error = input.nextElementSibling;
        let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        error.textContent = regex.test(input.value) ? "" : "Invalid email format";
    }

    function validatePassword(input) {
        let error = input.nextElementSibling;
        let regex = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
        error.textContent = regex.test(input.value) ? "" : "Password must be 6+ chars, include special & numeric characters";
    }

    function validateAge(input) {
        let error = input.nextElementSibling;
        let value = parseInt(input.value);
        error.textContent = (value >= 18 && value <= 60) ? "" : "Age must be between 18-60";
    }

    function validatePhone(input) {
        let error = input.nextElementSibling;
        let regex = /^\d{11}$/;
        error.textContent = regex.test(input.value) ? "" : "Phone number must be 11 digits";
    }
});
