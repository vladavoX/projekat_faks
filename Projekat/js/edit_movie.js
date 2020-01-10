let body = document.querySelector("body");

if((loggedInAsUser == true) || (loggedInAsUser == false)){
	body.innerHTML.hidden = true;
	body.innerHTML = "<div id='access_denied'><h1>Access Denied</h1><h3>You are not authorized to read this page.</h3></div>";
}
else if(loggedInAsAdmin == true){
	body.innerHTML.hidden = false;
}
else{
	let pageTitle = document.querySelector("title");

	for(let i=0; i<movies.length; i++){
		if(movieID == movies[i].id){
			pageTitle.innerHTML = "Edit "+movies[i].title;
			body.innerHTML += "<div id='overlay'>"+"<img id='movie_cover' src='img/"+movies[i].image+"'>"+"</div>"+
									"<div id='movie_edit_title'>"+
										"<p id='title'>"+movies[i].title+"</p>"+
										"<p id='director' class='movie_director'>"+"<span>Director: </span>"+"<a href='director.html'>"+movies[i].director+"</a>"+"</p>"+
									"</div>"+
									"<div id='details'><p id='genre'>Genre: <span>"+movies[i].genre+"</span></p><p id='year'>Year: <span>"+movies[i].year+"</span></p>"+
										"<p id='price'>Price: <span>"+movies[i].price+"</span></p><p id='copies'>Number of copies: <span>"+movies[i].copies+"</span></p>"+
									"</div>";
		}
	}

	body.innerHTML += "<form class='edit-movie' method='POST'>"+
						"<div>"+
							"<label for='movie_id'>Edit ID: </label>"+
							"<input type='text' name='movie_id' id='movie_id'>"+
						"</div>"+
						"<div>"+
							"<label for='movie_title'>Edit Title: </label>"+
							"<input type='text' name='movie_title' id='movie_title'>"+
						"</div>"+
						"<div>"+
							"<label for='movie_genre'>Edit Genre: </label>"+
							"<input type='text' name='movie_genre' id='movie_genre'>"+
						"</div>"+
						"<div>"+
							"<label for='movie_year'>Edit Year: </label>"+
							"<input type='text' name='movie_year' id='movie_year'>"+
						"</div>"+
						"<div>"+
							"<label for='movie_price'>Edit Price: </label>"+
							"<input type='text' name='movie_price' id='movie_price'>"+
						"</div>"+
						"<div>"+
							"<label for='number_of_copies'>Edit Number Of Copies: </label>"+
							"<input type='text' name='number_of_copies' id='number_of_copies'>"+
						"</div>"+
						"<div>"+
							"<label for='movie_image'>Edit Cover: </label>"+
							"<input type='text' name='movie_image' id='movie_image' accept='image/*'>"+
						"</div>"+
						"<div>"+
							"<label for='movie_director'>Edit Director: </label>"+
							"<input type='text' name='movie_director' id='movie_director'>"+
						"</div>"+
						"<div class='form-button'>"+
							"<button type='button' id='edit_button' onclick='edit()'>Edit</button>"+
						"</div>"+
					"</form>";

	function edit(){
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

		for(let i=0; i<movies.length; i++){
			if(movieID == movies[i].id){
				if(id_val != ""){
					movies[i].id = id_val;
					localStorage.setItem("movies", JSON.stringify(movies));
				}
					if(title_val != ""){
						movies[i].title = parseInt(title_val);
						localStorage.setItem("movies", JSON.stringify(movies));
					}
						if(genre_val != ""){
							movies[i].genre = parseInt(genre_val);
							localStorage.setItem("movies", JSON.stringify(movies));
						}
							if(year_val != ""){
								movies[i].year = parseInt(year_val);
								localStorage.setItem("movies", JSON.stringify(movies));
							}
								if(price_val != ""){
									movies[i].price = parseInt(price_val);
									localStorage.setItem("movies", JSON.stringify(movies));
								}
									if(copies_val != ""){
										movies[i].copies = parseInt(copies_val);
										localStorage.setItem("movies", JSON.stringify(movies));
									}
										if(image_val != ""){
											movies[i].image = parseInt(image_val);
											localStorage.setItem("movies", JSON.stringify(movies));
										}
											if(director_val != ""){
												movies[i].director = parseInt(director_val);
												localStorage.setItem("movies", JSON.stringify(movies));
											}
			}
		}

		location.href = "index.html";
	}	
}