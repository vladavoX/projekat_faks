// General
var users 	= JSON.parse(localStorage.getItem("users")) || [];
var admins 	= JSON.parse(localStorage.getItem("admins")) || [];
var movies 	= JSON.parse(localStorage.getItem("movies")) || [];
var shoppingCart 	= JSON.parse(localStorage.getItem("shoppingCart")) || [];
var shoppingHistory = JSON.parse(localStorage.getItem("shoppingHistory")) || [];
var searchMovies = JSON.parse(localStorage.getItem("searchMovies")) || [];
var directors = JSON.parse(localStorage.getItem("directors")) || [];
var filterDirectors = JSON.parse(localStorage.getItem("filterDirectors")) || [];

var numberOfUsers = JSON.parse(localStorage.getItem("numberOfUsers"));
var loggedInAsAdmin = JSON.parse(localStorage.getItem("loggedInAsAdmin"));
var loggedInAsUser 	= JSON.parse(localStorage.getItem("loggedInAsUser"));
var movieID = JSON.parse(localStorage.getItem("movieID"));
var userID = JSON.parse(localStorage.getItem("userID"));
var directorExists = JSON.parse(localStorage.getItem("directorExists"));

function logout(){
	if((loggedInAsUser == false) && (loggedInAsAdmin == false)){
		window.alert("You are not logged in!");
	}
	else{
		if(loggedInAsUser == true){
			localStorage.setItem("loggedInAsUser", 0);
			localStorage.setItem("userID", JSON.stringify("null"));
		}
		else {
			localStorage.setItem("loggedInAsAdmin", 0);
			localStorage.setItem("userID", JSON.stringify("null"));
		}
	}

	location.href = "index.html";
}