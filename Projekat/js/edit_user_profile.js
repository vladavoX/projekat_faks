let body = document.querySelector("body");

if((loggedInAsAdmin == true) && (loggedInAsUser == false)){
	body.innerHTML += "<div id='not_logged_in'><h1>You are logged in as admin!</h1></div>";
}
else if(loggedInAsUser == false){
	body.innerHTML += "<div id='not_logged_in'><h1>You are not logged in!</h1></div>";
}
else{
	let pageTitle = document.querySelector("title");
	pageTitle.innerHTML = "Edit "+userID+" Profile";

	for(let i=0; i<users.length; i++){
		if(userID == users[i].username){
			body.innerHTML += "<div id='profile_details'><p>First Name: <span>"+users[i].name+"</span></p><p>Last Name: <span>"+users[i].lastname+"</span></p><p>Username: <span>"+users[i].username+"</span></p></div>";
			body.innerHTML += "<form class='edit_profile' method='POST'>"+
								"<div>"+
									"<label for='reg_name'>Name: </label>"+
									"<input type='text' name='reg_name' id='reg_name' placeholder='Johnny'>"+
								"</div>"+
								"<div>"+
									"<label for='reg_lastname'>Lastname: </label>"+
									"<input type='text' name='reg_lastname' id='reg_lastname' placeholder='Bravo'>"+
								"</div>"+
								"<div>"+
									"<label for='reg_username'>Username: </label>"+
									"<input type='text' name='reg_username' id='reg_username' placeholder='Username'>"+
								"</div>"+
								"<div>"+
									"<label for='reg_password'>Password: </label>"+
									"<input type='password' name='reg_password' id='reg_password' placeholder='Password'>"+
								"</div>"+
								"<div class='form-button'>"+
									"<button type='button' id='edit_button' onclick='edit()'>Edit</button>"+
								"</div>"+
							"</form>";
		}
	}

	function edit(){
		let reg_name_input 		= document.getElementById("reg_name");
		let reg_lastname_input  = document.getElementById("reg_lastname");
		let reg_username_input 	= document.getElementById("reg_username");
		let reg_password_input  = document.getElementById("reg_password");

		let name_val 		= reg_name_input.value;
		let lastname_val	= reg_lastname_input.value;
		let username_val	= reg_username_input.value;
		let password_val	= reg_password_input.value;

		for(let i=0; i<users.length; i++){
			if(userID == users[i].username){
				if(name_val != ""){
					users[i].name = name_val;
					localStorage.setItem("users", JSON.stringify(users));
				}
					if(lastname_val != ""){
						users[i].lastname = lastname_val;
						localStorage.setItem("users", JSON.stringify(users));
					}
						if(username_val != ""){
							users[i].username = username_val;
							localStorage.setItem("users", JSON.stringify(users));
						}
							if(password_val != ""){
								users[i].password = password_val;
								localStorage.setItem("users", JSON.stringify(users));
							}
			}
		}

		localStorage.setItem("loggedInAsUser", 0);
		localStorage.setItem("userID", JSON.stringify("null"));
		location.href = "login.html";
	}
}
