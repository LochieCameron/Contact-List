var userAction = prompt("Would you like to create or search for contacts?");

if (userAction === "search") {
	search();
} else {
	var customFn = prompt("Enter your contacts name");
	var customAg = prompt("Enter your contacts age");
	document.cookie=customAg;
	search();
}

function search() {
	var userRequest = prompt("Who are you looking for?");

	if (userRequest === customFn) {
		alert("Passed");
		var contact1 = new Object();
		contact1.name = customFn;
		contact1.age = customAg;

		document.write("Name: " + contact1.name + "<br />");
		document.write("Age: " + contact1.age + "<br />");

	}
}