var nameError = document.getElementById("name-Error");
var emailError = document.getElementById("email-Error");
var passError = document.getElementById("pass-Error");
var rpassError = document.getElementById("rpass-Error");
function nameValid() {
    var uname = document.getElementById("name");
    if (uname.value.length == 0) {
        nameError.innerHTML = "Name is required";
        nameError.style.color = "red";
        return false;
    }
    else if (!uname.value.match(/^[a-zA-Z0-9_ ]{3,20}$/)) {
        nameError.innerHTML = "please write full Name";
        nameError.style.color = "red";
        return false;
    }
    else {
         nameError.innerHTML = "valid";
         nameError.style.color = 'green';
        localStorage.setItem('username', uname.value);
        return true;
    }

}
function emailValid() {
    var email = document.getElementById("email").value;
    //console.log(email)
    if (email == 0) {
        emailError.innerHTML = "Email is required"
        return false;

    }
    else if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
        emailError.innerHTML = "invalid Email Address"
        return false;
    }
    else {
        emailError.innerHTML = "valid";
        emailError.style.color = 'green';
        localStorage.setItem('email', email);
        return true;


    }


}
var pass;
function passValid(){
    pass = document.getElementById("pass").value;
    console.log(pass);
    
    if(pass == 0)
    {
        passError.innerHTML = "Password is Required";
        return false;
    }
    else if(pass.match(/^(?=.*\s)/))
    {
        passError.innerHTML ="Password must not contain Whitespaces.";
        return false;
    }
    else if(!pass.match(/^(?=.*[A-Z])/))
    {
        passError.innerHTML = "Password must have at least one Uppercase Character.";
        return false;
    }
    else if(!pass.match(/^(?=.*[a-z])/))
    {
        passError.innerHTML = "Password must have at least one Lowercase Character.";
        return false;
    }
    else if(!pass.match(/^.{10,16}$/))
    {
        passError.innerHTML = "Password must be 10-16 Characters Long.";
        return false;

    }
    else
    { 
        passError.innerHTML = "valid";
        passError.style.color = 'green';
        localStorage.setItem('password',  pass);
        return true;


    }
}
var rpass;
function rpassValid(){
    rpass = document.getElementById("rpass");

    if(rpass.value == pass)
    {
        rpassError.innerHTML = "valid";
        rpassError.style.color = 'green';
        return true;
    }else{
        rpassError.innerHTML = "Password must be same!";
       
        return false;
    }
}

function validateForm(event)
{
    if(!nameValid() || !emailValid()  ||  !passValid())
    {
      
        return false;
    }
    else
    {
        event.preventDefault();
        window.open("login.html" , "_self");
        // window.open("login.html");
        return true;
    }


}