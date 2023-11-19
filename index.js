// Function for registration form validation
// Function for registration form validation
function registrationValidation() {
    if (document.Formfill.Username.value == "") {
        document.getElementById("result").innerHTML = "Enter Username*";
        return false;
    } else if (document.Formfill.Username.value.length < 6) {
        document.getElementById("result").innerHTML = "At least six letters*";
        return false;
    } else if (document.Formfill.Email.value == "") {
        document.getElementById("result").innerHTML = "Enter your Email*";
        return false;
    } else if (document.Formfill.Password.value == "") {
        document.getElementById("result").innerHTML = "Enter your Password*";
        return false;
    } else if (document.Formfill.CPassword.value == "") {
        document.getElementById("result").innerHTML = "Enter confirm password*";
        return false;
    } else if (document.Formfill.Password.value != document.Formfill.CPassword.value) {
        document.getElementById("result").innerHTML = "Passwords don't match*";
        return false;
    } else if (document.Formfill.Password.value.length < 6) {
        document.getElementById("result").innerHTML = "Password must be at least 6 characters";
        return false;
    }

    // If all validations pass, redirect to success.html
    window.location.href = "success.html";
    return false; // Optional: Return false to prevent the form from submitting.
}


// Function for login form validation
// function loginValidation() {
//     var username = document.LoginForm.Username.value;
//     var password = document.LoginForm.Password.value;

//     if (username === "") {
//         document.getElementById("loginResult").innerHTML = "Enter Username*";
//         return false;
//     } else if (password === "") {
//         document.getElementById("loginResult").innerHTML = "Enter your Password*";
//         return false;
//     }

//     // Additional validation logic can be added here based on your requirements

//     return true;
// }

function loginValidation() {
    var username = document.LoginForm.Username.value;
    var password = document.LoginForm.Password.value;

    if (username === "") {
        document.getElementById("loginResult").innerHTML = "Enter Username*";
        return false;
    } else if (password === "") {
        document.getElementById("loginResult").innerHTML = "Enter your Password*";
        return false;
    }

    // Assume successful login for demonstration
    // In a real-world scenario, add authentication logic here

    // Redirect to success-login.html on successful login
    window.location.href = "success-login.html";
    return false; // Optional: Return false to prevent the form from submitting.
}