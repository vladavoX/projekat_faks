// General
var users 	= JSON.parse(localStorage.getItem("users")) || [];
var movies 	= JSON.parse(localStorage.getItem("movies")) || [];

// login.html
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
				if(username_val != users[i].username){
					req_password_error.innerHTML = "";
					req_username_error.innerHTML = "Username doesn't exist.";
					return
				}
				else if(password_val != users[i].password){
					req_username_error.innerHTML = "";
					req_password_error.innerHTML = "Wrong password.";
					return
				}
				else{
					location.href = "index.html";
				}
			}
		}
	}

// register.html
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
				users.push(newUser);
				localStorage.setItem("users", JSON.stringify(users));
				location.href = "login.html";
			}
		}
	}

// index.html
	if(movies.length != 0){
		let perrow = 6;
		html = "<table><tr>";

		for(let i=0; i<movies.length; i++){
			html += "<td>"+
						"<a href='film.html'>"+
							"<div id='overlay'>"+/* SLIKA OVDE <img id='movie_cover' src=''> */"</div>"+
						"</a>"+
						"<div id='movie_title'>"+
							"<p id='title'>"+movies[i].title+"</p>"+
							"<p id='director' class='movie_director'>"+"<span>Director: </span>"+"<a href='director.html'>"+movies[i].director+"</a>"+"</p>"+
						"</div>"+
					"</td>";

			let next = i+1;
			if(next%perrow==0 && next!=movies.length){
				html += "</tr><tr>";
			}
		}

		html += "</tr></table>";

		document.getElementById("container").innerHTML = html;
	}

// add_movie.html
	function add(){
		let movie_id_input		= document.getElementById("movie_id");
		let movie_title_input	= document.getElementById("movie_title");
		let movie_genre_input	= document.getElementById("movie_genre");
		let movie_year_input	= document.getElementById("movie_year");
		let movie_price_input	= document.getElementById("movie_price");
		let movie_copies_input	= document.getElementById("number_of_copies");
		let movie_image_input	= document.getElementById("movie_image");
		let movie_director_input= document.getElementById("movie_director");

		let id_val		= movie_id_input.value;
		let title_val	= movie_title_input.value;
		let genre_val	= movie_genre_input.value;
		let year_val	= movie_year_input.value;
		let price_val	= movie_price_input.value;
		let copies_val	= movie_copies_input.value;
		let image_val	= movie_image_input.value;
		let director_val= movie_director_input.value;

		let req_id_error 		= document.getElementById("req_movie_id");
		let req_title_error 	= document.getElementById("req_movie_title");
		let req_genre_error 	= document.getElementById("req_movie_genre");
		let req_year_error 		= document.getElementById("req_movie_year");
		let req_price_error 	= document.getElementById("req_movie_price");
		let req_copies_error	= document.getElementById("req_number_of_copies");
		let req_image_error 	= document.getElementById("req_movie_cover");
		let req_director_error 	= document.getElementById("req_movie_director");

		if(id_val == ""){
			req_id_error.innerHTML = "This field is required";
			return
		}
		else if(title_val == ""){
			req_id_error.innerHTML = "";
			req_title_error.innerHTML = "This field is required";
			return
		}
		else if(genre_val == ""){
			req_title_error.innerHTML = "";
			req_genre_error.innerHTML = "This field is required";
			return
		}
		else if(year_val == ""){
			req_genre_error.innerHTML = "";
			req_year_error.innerHTML = "This field is required";
			return
		}
		else if(price_val == ""){
			req_year_error.innerHTML = "";
			req_price_error.innerHTML = "This field is required";
			return
		}
		else if(copies_val == ""){
			req_price_error.innerHTML = "";
			req_copies_error.innerHTML = "This field is required";
			return
		}
		else if(image_val == ""){
			req_copies_error.innerHTML = "";
			req_image_error.innerHTML = "This field is required";
			return
		}
		else if(director_val == ""){
			req_image_error.innerHTML = "";
			req_director_error.innerHTML = "This field is required";
			return
		}
		else{
			let newMovie = {};

			newMovie.id 		= id_val;
			newMovie.title 		= title_val;
			newMovie.genre 		= genre_val;
			newMovie.year 		= year_val;
			newMovie.price 		= price_val;
			newMovie.copies 	= copies_val;
			newMovie.image  	= image_val;
			newMovie.director 	= director_val;

			let id_error_msg = document.getElementById("id_taken");
			let allow_add = 1;

			if(movies.length != 0){
				for(let i=0; i<movies.length; i++){
					if(id_val == movies[i].id){
						req_director_error.innerHTML = "";
						id_error_msg.innerHTML = "Id is already taken";
						allow_registration = 0;
						return;
					}
					else{
						allow_registration = 1;
					}
				}
			}
			if(allow_add == 1){
				movies.push(newMovie);
				localStorage.setItem("movies", JSON.stringify(movies));
				location.href = "add_movie.html"
			}
		}
	}