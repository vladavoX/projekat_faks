if(searchMovies.length != 0){
	let perrow = 6;
	html = "<table><tr>";

	for(let i=0; i<searchMovies.length; i++){
		html += "<td class='tdata' id='"+searchMovies[i].id+"' onclick='getID("+searchMovies[i].id+")'>"+
					"<a href='film.html'>"+
						"<div id='overlay'>"+"<img id='movie_cover' src='img/"+searchMovies[i].image+"'>"+"</div>"+
					"</a>"+
					"<div id='movie_title'>"+
						"<p id='title'>"+searchMovies[i].title+"</p>"+
						"<p id='director' class='movie_director'>"+"<span>Director: </span>"+searchMovies[i].director+"</p>"+
					"</div>"+
					"<div id='edit_button'></div>"+
				"</td>";

		let next = i+1;
		if(next%perrow==0 && next!=searchMovies.length){
			html += "</tr><tr>";
		}
	}

	html += "</tr></table>";
	document.getElementById("container").innerHTML = html;

	searchMovies.splice(0, searchMovies.length);
	localStorage.setItem("searchMovies", JSON.stringify(searchMovies));
}
else if(movies.length != 0){
	let perrow = 6;
	html = "<table><tr>";

	for(let i=0; i<movies.length; i++){
		html += "<td class='tdata' id='"+movies[i].id+"' onclick='getID("+movies[i].id+")'>"+
					"<a href='film.html'>"+
						"<div id='overlay'>"+"<img id='movie_cover' src='img/"+movies[i].image+"'>"+"</div>"+
					"</a>"+
					"<div id='movie_title'>"+
						"<p id='title'>"+movies[i].title+"</p>"+
						"<p id='director' class='movie_director'>"+"<span>Director: </span>"+movies[i].director+"</p>"+
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

if(loggedInAsAdmin == true){
	for(let i=0; i<movies.length; i++){
		let tdEditButton = document.querySelectorAll("td")[i];
		tdEditButton.innerHTML += "<div id='edit_button'><a href='edit_movie.html'><button>Edit</button></a><button onclick='delete_movie("+[i]+")'>Delete</button></div>";
	}

	function delete_movie(i){
		movies.splice(i, 1);
		localStorage.setItem("movies", JSON.stringify(movies));

		location.href = "index.html";
	}
}

function getID(i){
	localStorage.setItem("movieID", i);
}

function search(){
	let search_val = document.querySelector("input").value;
	if(search_val == ""){
		let error_div = document.getElementById("error_div");
		error_div.innerHTML = "<span>This filed is requierd!</span>";
		return
	}
	else{
		for(let i=0; i<movies.length; i++){
			let title = movies[i].title;
			let res = title.toLowerCase();
			let res1 = search_val.toLowerCase();

			let n = res.includes(res1);
			if(n == true){
				searchMovies.push(movies[i]);
				localStorage.setItem("searchMovies", JSON.stringify(searchMovies));
			}
		}

	location.href = "index.html";
	}
}