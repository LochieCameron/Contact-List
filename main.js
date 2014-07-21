// OnLoad




// Search
function search() {
	var userRequest = prompt("Who are you looking for in your contacts?");

	if (userRequest === "Bob") {
		var person = new Object();
		person.name = "Bob";
		person.age = "53";
		person.telphone = "66234597";
		person.gender = "Male"

		document.getElementById('name').innerHTML = "Name: " + person.name;
		document.getElementById('age').innerHTML = "Age: " + person.age;
		document.getElementById('telphone').innerHTML = "Telephone: " + person.telphone;
		document.getElementById('gender').innerHTML = "Gender: " + person.gender;

		document.getElementById('totalAge').innerHTML = "Our users total age: ";
	} else if (userRequest === "Zara") {
		var person2 = new Object();
		person2.name = "Zara";
		person2.age = "26";
		person2.telphone = "66027496";
		person2.gender = "Female";

		document.getElementById('name').innerHTML = "Name: " + person2.name;
		document.getElementById('age').innerHTML = "Age: " + person2.age;
		document.getElementById('telphone').innerHTML = "Telephone: " + person2.telphone;
		document.getElementById('gender').innerHTML = "Gender: " + person2.gender;

		document.getElementById('totalAge').innerHTML = "Our users total age: ";
	} else if (userRequest === "Lochie") {
		var person3 = new Object();
		person3.name = "Lochie";

		document.getElementById('name').innerHTML = "Name: " person3.age;
	}
}

window.onload = search;