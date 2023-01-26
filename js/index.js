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