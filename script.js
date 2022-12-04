var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var msgError = document.getElementById("message-error");
var subError = document.getElementById("submit-error");

// ===================validName==================//
function validName() {
  var myName = document.getElementById("myName").value;

  if (myName.length == 0) {
    nameError.innerHTML = "name is required";
    return false;
  }
  if (!myName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full Name";
    return false;
  }
  if (myName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "valid";
    return true;
  }
}
// ===================validPhone==============//
function validPhone() {
  var phone = document.getElementById("phone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "number is required";
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "should be 10 digit";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "valid number only";
    return false;
  }

  phoneError.innerHTML = "valid";
  return true;
}
// ====================validEmail===================//

function validEmail() {
  var email = document.getElementById("email").value;

  if (email == 0) {
    emailError.innerHTML = "Enter the email";
    return false;
  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Invalid email";
    return false;
  }

  emailError.innerHTML = "valid";
  return true;
}

// ====================validMessage================

function validMessage() {
  var msg = document.getElementById("Message").value;
  var need = 20;
  var left = need - msg.length;

  if (left > 0) {
    msgError.innerHTML = left + "enter the message";
    return false;
  }
  msgError.innerHTML = "valid";
  return true;
}

//=========================validSubmit==============

function validSubmit() {
if(!validName() || !validPhone() || !validEmail() || !validMessage()){
  subError.style.display="block";
  subError.innerHTML="please fix error"
  setTimeout(function(){subError.style.display="none"},3000);
  return false;
}
subError.innerHTML="valid"
return true



}
