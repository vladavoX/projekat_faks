function register(){
	let reg_name_input 		= document.getElementById("reg_name");
	let reg_lastname_input  = document.getElementById("reg_lastname");
	let reg_username_input 	= document.getElementById("reg_username");
	let reg_password_input  = document.getElementById("reg_password");

	let name_val 		= reg_name_input.value;
	let lastname_val	= reg_lastname_input.value;
	let username_val	= reg_username_input.value;
	let password_val	= reg_password_input.value;

	let req_name_error 		= document.getElementById("req_name");
	let req_lastname_error	= document.getElementById("req_lastname");
	let req_username_error	= document.getElementById("req_username");
	let req_password_error	= document.getElementById("req_password");

	if(name_val == ""){
		req_name_error.innerHTML = "This field is required";
		return
	}
	else if(lastname_val == ""){
		req_name_error.innerHTML = "";
		req_lastname_error.innerHTML = "This field is required";
		return
	}
	else if(username_val == ""){
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
		let newUser = {};

		newUser.name 		= name_val;
		newUser.lastname 	= lastname_val;
		newUser.username 	= username_val;
		newUser.password 	= password_val;

		let user_error_msg = document.getElementById("username_taken");
		let allow_registration = 1;

		if(users.length != 0){
			for(let i=0; i<users.length; i++){
				if(username_val == users[i].username){
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
			numberOfUsers ++;
			localStorage.setItem("numberOfUsers", JSON.stringify(numberOfUsers));
			newUser.id = numberOfUsers;
			users.push(newUser);
			localStorage.setItem("users", JSON.stringify(users));
			
			location.href = "login.html";
		}
	}
}