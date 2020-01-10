function login(){
	let login_username_input	= document.getElementById("login_username");
	let login_password_input	= document.getElementById("login_password");

	let username_val 	= login_username_input.value;
	let password_val	= login_password_input.value;

	let req_username_error	= document.getElementById("req_login_user");
	let req_password_error	= document.getElementById("req_login_pass");

	if(username_val == ""){
		req_username_error.innerHTML = "This field is required";
		return
	}
	else if(password_val == ""){
		req_username_error.innerHTML = "";
		req_password_error.innerHTML = "This field is required";
		return
	}
	else{
		for(let i=0; i<users.length; i++){
			if((username_val != users[i].username) && (username_val != admins[i].username)){
				req_password_error.innerHTML = "";
				req_username_error.innerHTML = "Username doesn't exist.";
			}
			else if((password_val != users[i].password) && (password_val != admins[i].password)){
				req_username_error.innerHTML = "";
				req_password_error.innerHTML = "Wrong password.";
			}
			else{
				if((username_val == users[i].username) && (password_val == users[i].password)){
					localStorage.setItem("loggedInAsUser", 1);
					localStorage.setItem("loggedInAsAdmin", 0);

					if(shoppingCart != 0){
						for(let i=0; i<shoppingCart.length; i++){
							console.log(shoppingCart.copies);
							for(let j=0; j<movies.length; j++){
								if(shoppingCart[i].title == movies[j].title){
									let x = parseInt(shoppingCart[i].copies);
									movies[j].copies = parseInt(movies[j].copies) + parseInt(x);
									console.log(x);
									console.log(movies[j].copies);
									localStorage.setItem("movies", JSON.stringify(movies));
								}
							}
						}
					}

					shoppingCart.splice(0, shoppingCart.length);
					localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));

					localStorage.setItem("userID", JSON.stringify(username_val));

					location.href = "index.html";
				}
				else if((username_val == admins[i].username) && (password_val == admins[i].password)){
					localStorage.setItem("loggedInAsUser", 0);
					localStorage.setItem("loggedInAsAdmin", 1);

					if(shoppingCart != 0){
						for(let i=0; i<shoppingCart.length; i++){
							for(let j=0; j<movies.length; j++){
								if(shoppingCart[i].title == movies[j].title){
									let x = parseInt(shoppingCart[i].copies);
									movies[j].copies = parseInt(movies[j].copies) + parseInt(x);
									localStorage.setItem("movies", JSON.stringify(movies));
								}
							}
						}
					}

					shoppingCart.splice(0, shoppingCart.length);
					localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));

					localStorage.setItem("userID", JSON.stringify("null"));
					
					location.href = "index.html";
				}
			}
		}
	}
}