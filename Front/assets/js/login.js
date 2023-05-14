var emailError = document.getElementById("emailError");
var passError = document.getElementById("passError");
var email = document.getElementById("email");
var login = document.getElementById("login-user");
var logout = document.getElementById("logout");
var uname= localStorage.getItem('username');
console.log(uname);
var pass = document.getElementById("pass");
var stEmail = localStorage.getItem('email');
var stPassword = localStorage.getItem('password');
function check(event) {

    if (email.value != stEmail) {
        emailError.innerHTML = "invalid Email Address";
        emailError.style.color = "red";
        return false;
    }
    else if(pass.value != stPassword)
    {
        passError.innerHTML = "invalid Password";
        passError.style.color = "red";
        return false;

    }
    else 
    {
       event.preventDefault();
        window.open("index.html" , "_self");
        //  window.open("index.html");
       // location.assign("index.html");
      
        return true;
    }
    
   
}

///////////////////////////<< user name after logging >>/////

function changUserName() {
  if (uname != null && email != '' && pass != '') {
    login.innerText = 'Hi,' + uname;
    logout.innerText = 'LogOut';
  }
  else{
    return;
  }
  console.log(uname);
}
changUserName();

//////////////////////////////// << logOut >> /////////////////
function logOut(event){
  // event.preventDefault();
  // event.stopPropagation();
  if(uname == null && email == null && pass == null)
  {
    event.preventDefault();
    window.open("form-register.html" , "_self");
  }else
  {
  localStorage.removeItem('username');
  localStorage.removeItem('email');
  localStorage.removeItem('password');
  window.open("home.html" , "_self");
  }
 return true;
}