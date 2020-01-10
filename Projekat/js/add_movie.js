let body = document.querySelector("body");

if((loggedInAsUser == true) || (loggedInAsUser == false)){
	body.innerHTML.hidden = true;
	body.innerHTML = "<div id='access_denied'><h1>Access Denied</h1><h3>You are not authorized to read this page.</h3></div>";
}
else if(loggedInAsAdmin == true){
	body.innerHTML.hidden = false;
}

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
		function checkfordirector(director_val){
			for(let i=0; i<directors.length; i++){
				if(directors[i].director == director_val){
					localStorage.setItem("directorExists", 1);
				}
			}
		}

		checkfordirector(director_val);
		if(directorExists != 1){
			var newDirector = {};
			newDirector.director = director_val;
			localStorage.setItem("directorExists", 0);

			directors.push(newDirector);
			localStorage.setItem("directors", JSON.stringify(directors));
		}

		let newMovie = {};
		newMovie.id 		= id_val;
		newMovie.title 		= title_val;
		newMovie.genre 		= genre_val;
		newMovie.year 		= year_val;
		newMovie.price 		= parseInt(price_val);
		newMovie.copies 	= parseInt(copies_val);
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