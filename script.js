function validate(){

 if (document.getElementById('login').value == "") {
	alert ("Enter your name.");
	valid = false;
}

if (document.getElementById('check').checked == false) {
	alert ("Agree that you're awesome!!! ");
	valid = false;
}

var e=document.forms["formm"]["email"];
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var atpos=e.value.indexOf("@");
var dotpos=e.value.lastndexOf(".");

if (e.value==null || e.value=="" || !e.value.match(mailformat) || atpos<1 || dotpos<atpos ){
	alert ("Invalid Email Address");
	valid = false;
}
 
return valid; 
}
