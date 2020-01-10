let body = document.querySelector("body");
let pageTitle = document.querySelector("title");

for(let i=0; i<movies.length; i++){
	if(movieID == movies[i].id){
		pageTitle.innerHTML = movies[i].title;
		body.innerHTML += "<div id='overlay'>"+"<img id='movie_cover' src='img/"+movies[i].image+"'>"+"</div>"+
								"<div id='movie_title'>"+
									"<p id='title'>"+movies[i].title+"</p>"+
									"<p id='director' class='movie_director'>"+"<span>Director: </span>"+"<a href='director.html'>"+movies[i].director+"</a>"+"</p>"+
								"</div>"+
								"<div id='details'><p id='genre'>Genre: <span>"+movies[i].genre+"</span></p><p id='year'>Year: <span>"+movies[i].year+"</span></p>"+
									"<p id='price'>Price: <span>"+movies[i].price+"</span></p><p id='copies'>Number of copies: <span>"+movies[i].copies+"</span></p>"+
								"</div>";
	}
}

if(loggedInAsUser == true){
	body.innerHTML += "<div id='buy_button'><button onclick='add_to_cart()'>Add To Cart</button><input type='number' min='1'></input></div>";
}

function add_to_cart(){
	let nCopies = document.querySelector("input").value;

	body.innerHTML += "<div id='copies_req'></div>";
	body.innerHTML += "<div id='exceed'></div>";

	if(nCopies == ""){
		let copies_error_msg = document.getElementById("copies_req");
		copies_error_msg.innerHTML = "<p>Please enter the number of copies!</p>"
		return;
	}
	for(let i=0; i<movies.length; i++){
		if(movieID == movies[i].id){
			if(nCopies > movies[i].copies){
			// REMOVE PREVIOUS ERROR MSG
			let copies_error_msg = document.getElementById("copies_req");
			copies_error_msg.innerHTML = "";

			// CONTINUE
			let exceed_error_msg = document.getElementById("exceed");
			exceed_error_msg.innerHTML = "<p>Not enough copies available. <br>Please lower the number of copies.</p>";
			return;
			}
		}
	}
	for(let i=0; i<movies.length; i++){
		if(movieID == movies[i].id){
			let newObject = {};

			newObject.price 	= movies[i].price;
			newObject.copies 	= nCopies;
			newObject.title 	= movies[i].title;
			newObject.director  = movies[i].director;
			newObject.genre     = movies[i].genre;

			shoppingCart.push(newObject);
			localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));

			let x = parseInt(movies[i].copies);
			x = parseInt(x) - parseInt(nCopies);
			movies[i].copies = parseInt(x);
			localStorage.setItem("movies", JSON.stringify(movies));

			location.href = "index.html";
		}
	}
}