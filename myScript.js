// window.onload = function () {

// 	var x = 10;

// 	if (x > 5) {

// 		let x = 5;

// 	}

// console.log(x);


// 	// body...
// }

//Object classess :-

class User {
	constructor (email,name) {
		this.email = email;
		this.name = name;
	}
	login(){
		console.log(this.email,"just logged in");
	}
	logout(){
		console.log(this.email,"just logged out");
	}
}

// This is represted to new object below
var userOne = new User ("Arun@gmail.com", "Arun");
var userTwo = new User ("Ram@gmail.com", "Ram");


userOne.login();
console.log(userOne.email);