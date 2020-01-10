let body = document.querySelector("body");

if(filterDirectors.length != 0){
	let perrow = 6;
	html = "<table><tr>";

	for(let i=0; i<filterDirectors.length; i++){
		html += "<td class='tdata' id='"+filterDirectors[i].id+"' onclick='getID("+filterDirectors[i].id+")'>"+
					"<a href='film.html'>"+
						"<div id='overlay'>"+"<img id='movie_cover' src='img/"+filterDirectors[i].image+"'>"+"</div>"+
					"</a>"+
					"<div id='movie_title'>"+
						"<p id='title'>"+filterDirectors[i].title+"</p>"+
						"<p id='director' class='movie_director'>"+"<span>Director: </span>"+filterDirectors[i].director+"</p>"+
					"</div>"+
					"<div id='edit_button'></div>"+
				"</td>";

		let next = i+1;
		if(next%perrow==0 && next!=filterDirectors.length){
			html += "</tr><tr>";
		}
	}

	html += "</tr></table>";
	document.getElementById("container").innerHTML = html;

	filterDirectors.splice(0, filterDirectors.length);
	localStorage.setItem("filterDirectors", JSON.stringify(filterDirectors));
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

	let filter = document.getElementById("filter_div");
	filter.innerHTML = "<span>Directors: </span>";
	for(let i=0; i<directors.length; i++){
		filter.innerHTML += "<input type='checkbox' name='"+directors[i].director+"' id='"+directors[i].director+"'>"+directors[i].director;
	}
	filter.innerHTML += "<div><button onclick='filter()'>Filter</button></div>";
}

if(loggedInAsAdmin == true){
	for(let i=0; i<movies.length; i++){
		let tdEditButton = document.querySelectorAll("td")[i];
		tdEditButton.innerHTML += "<div id='edit_button'><a href='edit_movie.html'><button>Edit</button></a><button onclick='delete_movie("+[i]+")'>Delete</button></div>";
	}

	function delete_movie(i){
		console.log(movies[i].id);
		movies.splice(i, 1);
		localStorage.setItem("movies", JSON.stringify(movies));

		location.href = "index.html";
	}
}

function getID(i){
	localStorage.setItem("movieID", i);
}

function filter(){
	let allow_filter = 0;

	for(let i=0; i<directors.length; i++){
		let check_val = document.querySelectorAll("input")[i].checked;
		if(check_val == true){
			let dir_val = directors[i].director;
			for(let i=0; i<movies.length; i++){
				if(dir_val == movies[i].director){
					filterDirectors.push(movies[i]);
					localStorage.setItem("filterDirectors", JSON.stringify(filterDirectors));
					allow_filter = 1;
				}
			}
		}
	}
	if(allow_filter == 1){
		console.log("test");
		location.href = "director.html";
	}
	else{
		console.log("test1");
		body.innerHTML.hidden = true;
		body.innerHTML = "<div id='no_movies'><h1>Director</h1><h3>has no movies added yet.</h3></div>";
		body.innerHTML += "<div id='go_back'><a href='director.html'><button>Go Back</button></a></div>";
	}
}