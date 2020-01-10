let body = document.querySelector("body");

if((loggedInAsAdmin == true) && (loggedInAsUser == false)){
	body.innerHTML += "<div id='not_logged_in'><h1>You are logged in as admin!</h1></div>";
}
else if(loggedInAsUser == false){
	body.innerHTML += "<div id='not_logged_in'><h1>You are not logged in!</h1></div>";
}
else{
	for(let i=0; i<shoppingHistory.length; i++){
		if(userID == shoppingHistory[i].user)	{
			body.innerHTML += "<div id='bills'><p>Check Price: $"+shoppingHistory[i].previousCheck+"</p><p>Buyer Username: "+shoppingHistory[i].user+"</p></div>"
		}
	}
}