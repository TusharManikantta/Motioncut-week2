
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

    window.location.href = "success.html";
    return false;
}


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

  
    window.location.href = "success-login.html";
    return false; 
}