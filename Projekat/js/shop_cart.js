let body = document.querySelector("body");
let totalPrice = 0;

if((loggedInAsAdmin == true) && (loggedInAsUser == false)){
	body.innerHTML += "<div id='not_logged_in'><h1>You are logged in as admin!</h1></div>";
}
else if(loggedInAsUser == false){
	body.innerHTML += "<div id='not_logged_in'><h1>You are not logged in!</h1></div>";
}
else {
	if(shoppingCart.length != 0){
		for(let i=0; i<shoppingCart.length; i++){
		body.innerHTML += "<div id='purchase'><p id='title'>Title: <span>"+shoppingCart[i].title+"</span></p><p id='director'>Director: <span>"+shoppingCart[i].director+
		"</span></p><p id='price'>Price $: <span>"+shoppingCart[i].price+"</span></p><p id='copies'>Copies: <span>"+shoppingCart[i].copies+"</span></p></div>";
		body.innerHTML += "<div id='shop_cart_button'><button onclick='remove("+[i]+")'>Remove</button><button onclick='edit("+[i]+")'>Edit Number Of Copies</button><input type='number' id='edit_n_copies' min='1'></div>";
		body.innerHTML += "<div id='error"+i+"' class='error_css'></div>"
		totalPrice = totalPrice + (shoppingCart[i].price * shoppingCart[i].copies);
		}

		body.innerHTML += "<div id='total_price'><p>Total Price: $"+totalPrice+"</p></div>";
		body.innerHTML += "<div id='checkout_button'><button onclick='checkout()'>Checkout</button></div>";
	}

	function checkout(){
		let newObject = {};

		newObject.previousCheck = totalPrice;
		newObject.user = userID;

		shoppingHistory.push(newObject);
		localStorage.setItem("shoppingHistory", JSON.stringify(shoppingHistory));

		shoppingCart.splice(0, shoppingCart.length);
		localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));

		location.href = "index.html";
	}
}

function remove(i){
	let x = parseInt(shoppingCart[i].copies);
	let title = shoppingCart[i].title;
	for(let i=0; i<movies.length; i++){
		if(title == movies[i].title){
			movies[i].copies = parseInt(movies[i].copies) + parseInt(x);
			localStorage.setItem("movies", JSON.stringify(movies));
		}
	}

	shoppingCart.splice(i, 1);
	localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));

	location.href = "shop_cart.html";
}
function edit(i){
	let value = document.querySelectorAll("input")[i].value;
	if(value == ""){
		let error = document.getElementById("error"+i);
		error.innerHTML = "<p>Unesite broj!</p>";
		error.style.color = 'red';
	}
	else{
		let error = document.getElementById("error"+i);
		error.innerHTML = "";

		let x = parseInt(shoppingCart[i].copies);
		if(value > x){
			let razlika = parseInt(value) - parseInt(x);
			let title = shoppingCart[i].title;
			for(let i=0; i<movies.length; i++){
				if(title == movies[i].title){
					movies[i].copies = parseInt(movies[i].copies) - parseInt(razlika);
					localStorage.setItem("movies", JSON.stringify(movies));
				}
			}
			shoppingCart[i].copies = parseInt(value);
			localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));

			location.href = "shop_cart.html";
		}
		else if(value < x){
			let razlika = parseInt(x) - parseInt(value);
			let title = shoppingCart[i].title;
			for(let i=0; i<movies.length; i++){
				if(title == movies[i].title){
					movies[i].copies = parseInt(movies[i].copies) + parseInt(razlika);
					localStorage.setItem("movies", JSON.stringify(movies));
				}
			}
			shoppingCart[i].copies = parseInt(value);
			localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));

			location.href = "shop_cart.html";
		}
		else{
			let error = document.getElementById("error"+i);
			error.innerHTML = "<p>Uneli ste istu vrednost!</p>";
			error.style.color = 'red';
		}
	}
}