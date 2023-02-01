//JS file for Forgot Password Page

function isValidEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}


document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault();

    // Get the email value
    var email = document.querySelector('input[name="email"]').value;

    // Validate the email
    if (!email) {
      alert("Email is required");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Invalid email address");
      return;
    }
    // Submit the form
    alert("The email address " + email + " will receive a link to reset your password.");
});

document.getElementById("submitBtn").onclick = function() {
  //prevent going back
  window.history.forward();
};
