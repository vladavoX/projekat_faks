let body = document.querySelector("body");

if((loggedInAsAdmin == true) && (loggedInAsUser == false)){
	body.innerHTML += "<div id='not_logged_in'><h1>You are logged in as admin!</h1></div>";
}
else if(loggedInAsUser == false){
	body.innerHTML += "<div id='not_logged_in'><h1>You are not logged in!</h1></div>";
}
else {
	let title = document.querySelector("title");
	title.innerHTML = userID+" Profile";

	for(let i=0; i<users.length; i++){
		if(userID == users[i].username){
			body.innerHTML += "<div id='profile_details'><p>First Name: <span>"+users[i].name+"</span></p><p>Last Name: <span>"+users[i].lastname+"</span></p><p>Username: <span>"+users[i].username+"</span></p></div>"+
							"<div id='edit_button'><a href='edit_user_profile.html'><button onclick='edit_profile()'>Edit</button></a></div>"
		}
	}
}