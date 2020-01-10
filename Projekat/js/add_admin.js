let body = document.querySelector("body");

if(admins.length < 1){
	body.innerHTML.hidden = false;
}
else if((loggedInAsUser == false) && (loggedInAsAdmin == false)){
	body.innerHTML.hidden = true;
	body.innerHTML = "<div id='access_denied'><h1>Access Denied</h1><h3>You are not authorized to read this page.</h3></div>";	
}
if(loggedInAsAdmin == true){
	body.innerHTML.hidden = false;
}
if(loggedInAsUser == true){
	body.innerHTML.hidden = true;
	body.innerHTML = "<div id='access_denied'><h1>Access Denied</h1><h3>You are not authorized to read this page.</h3></div>";
}

function add_new_admin(){
	let admin_username_input = document.getElementById("admin_username");
	let admin_password_input = document.getElementById("admin_password");

	let username_val = admin_username_input.value;
	let password_val = admin_password_input.value;

	if(username_val == ""){
		req_lastname_error.innerHTML = "";
		req_username_error.innerHTML = "This field is required";
		return
	}
	else if(password_val == ""){
		req_username_error.innerHTML = "";
		req_password_error.innerHTML = "This field is required";
		return
	}
	else{
		let newAdmin = {};

		newAdmin.username 	= username_val;
		newAdmin.password 	= password_val;

		let user_error_msg = document.getElementById("username_taken");
		let allow_registration = 1;

		if(admins.length != 0){
			for(let i=0; i<admins.length; i++){
				if(username_val == admins[i].username){
					req_password_error.innerHTML = "";
					user_error_msg.innerHTML = "Username is already taken";
					allow_registration = 0;
					return;
				}
				else{
					allow_registration = 1;
				}
			}
		}
		if(allow_registration == 1){
			admins.push(newAdmin);
			localStorage.setItem("admins", JSON.stringify(admins));
			location.href = "index.html";
		}
	}
}