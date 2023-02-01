// JavaScript Page for Sign Up page

document.getElementById("myButton").onclick = function() {
  //open the home page
  window.location.href ='index.html';
  //prevent going back
  window.history.forward();
};

window.addEventListener("beforeunload", function (event) {
  event.preventDefault();
});

document.querySelector(".login100-form").addEventListener("submit", function(event) {
  event.preventDefault();
  let username = document.querySelector('input[name="username"]').value;
  let email = document.querySelector('input[name="email"]').value;
  let password = document.querySelector('input[name="pass"]').value;
  let passwordConfirm = document.querySelectorAll('input[name="pass"]')[1].value;

  if (!username) {
    alert("Username is required.");
    return;
  }
  if (!email) {
    alert("Email is required.");
    return;
  }
  if (!password) {
    alert("Password is required.");
    return;
  }
  if (password !== passwordConfirm) {
    alert("Passwords don't match.");
    return;
  }
  if (username.length < 5) {
    console.error("Username must be at least 5 characters long");
    return;
  }
  if (password.length < 8) {
    console.error("Password must be at least 8 characters long");
    return;
  }
  // TODO: Send the data to the server for further processing
});
