let container = document.getElementById("container");

toggle = () => {
  container.classList.toggle("sign-in");
  container.classList.toggle("sign-up");
};

setTimeout(() => {
  container.classList.add("sign-in");
}, 200);

function handleSignUp() {
  let username = document.getElementById("Username").value;
  let email_id = document.getElementById("email_id").value;
  let pwd = document.getElementById("pwd").value;
  let cpwd = document.getElementById("renter").value;

  if (email_id.includes("@") && email_id.includes(".com") && pwd === cpwd)  

  {if (email_id === localStorage.getItem("email_id")) 
  {
    resetup();
    alert(
      "Email id already in use go to sign up or sign in with different email id"
    );
  }
   else
    {
    resetup();
    localStorage.setItem("username", username);
    localStorage.setItem("email_id", email_id);
    localStorage.setItem("password", pwd);

    let a = localStorage.getItem("username");

    alert("HEllow " + a);
  }}
  else {
	resetup();
	if(pwd != cpwd ){
		alert('Renter the same password');
	}
	else {
	alert('Please enter valid email id');
	}
  }
}

function resetup() {
  document.getElementById("Username").value = "";
  document.getElementById("email_id").value = "";
  document.getElementById("pwd").value = "";
  document.getElementById("renter").value = "";
}

function handleSignIn() {
  let stored_name = localStorage.getItem("username");
  let pd = localStorage.getItem("password");

  if (
    document.getElementById("username").value === stored_name &&
    document.getElementById("pwd2").value === pd
  ) {
    alert("sign in successful");
    resetin();
  } else {
    alert("sign in failed");
    resetin();
  }
}

function resetin() {
  document.getElementById("username").value = "";
  document.getElementById("pwd2").value = "";
}

signUpButton.addEventListener("click", handleSignUp);
signInButton.addEventListener("click", handleSignIn);
