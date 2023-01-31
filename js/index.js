var jwt = localStorage.getItem("jwt");
if (jwt == null){
	window.location.href = './index.html'
}

function loadUser() {
	const xhttp = new XMHttpRequest();
	xhttp.open("GET","");
	xhttp.setRequestHeader("Content-Type","application/json;charset=UTF-8");
	xhttp.setRequestHeader("Authorization", "Bearer"+jwt);
	xhttp.send();
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4){
			const objects = JSON.parse(this.responseText);
			if (objects["status"] == "ok"){
			
			}
		}
	};
}

loadUser();

function logout(){
	localStorage.removeItem("jwt");
	window.location.href = './index.html'
}

function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  if (username == "admin" && password == "password") {
    alert("Sign in successful!");
  } else {
    alert("Incorrect username or password. Please try again.");
  }
}

function registerUser(username, password) {
  if (!username || !password) {
    console.error("Username and password are required");
    return;
  }
  
  // Perform check for valid username and password here
  // For example:
  if (username.length < 5) {
    console.error("Username must be at least 5 characters long");
    return;
  }
  if (password.length < 8) {
    console.error("Password must be at least 8 characters long");
    return;
  }
  
  // Store the username and password in local storage or send to a server for storage
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  
  console.log("User registered successfully");
}
