let body = document.querySelector("body");

if((loggedInAsUser == true) || (loggedInAsUser == false)){
	body.innerHTML.hidden = true;
	body.innerHTML = "<div id='access_denied'><h1>Access Denied</h1><h3>You are not authorized to read this page.</h3></div>";
}
else if(loggedInAsAdmin == true){
	body.innerHTML.hidden = false;
}

function add(){
	let add_name_input = document.getElementById("add_name");
	let add_lastname_input = document.getElementById("add_lastname");

	let name_val = add_name_input.value;
	let lastname_val = add_lastname_input.value;

	let req_name_error 	= document.getElementById("req_name");
	let req_lastname_error	= document.getElementById("req_lastname");

	if(name_val == ""){
		req_name_error.innerHTML = "This field is required";
		return
	}
	else if(lastname_val == ""){
		req_name_error.innerHTML = "";
		req_lastname_error.innerHTML = "This field is required";
		return
	}
	else{
		let newDirector = {};
		newDirector.director = name_val + " " + lastname_val;

		let director_error_msg = document.getElementById("director_exists");
		let allow_registration = 1;
		if(directors.length > 0){
			for(let i=0; i<directors.length; i++){
				if((directors[i].director.includes(name_val)) && (directors[i].director.includes(lastname_val))){
					req_lastname_error.innerHTML = "";
					director_error_msg.innerHTML = "Director already exists";
					allow_registration = 0;
					return;
				}
				else{
					allow_registration = 1;
				}
			}
		}
		if(allow_registration == 1){
			directors.push(newDirector);
			localStorage.setItem("directors", JSON.stringify(directors));

			location.href = "director.html";
		}
	}
}