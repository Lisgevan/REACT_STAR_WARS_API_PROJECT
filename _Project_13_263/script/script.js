"use strict";

//Wait for page to be loaded
$(document).ready(function () {
	// Wait for the button to be pressed to generate random character
	$("#button").click(function () {
		// Create a random number ftom 1 to 88.
		const num = Math.ceil(Math.random() * 88);

		//Restart animation with new charachter
		let el = $("#charShow");
		let newEl = el.clone(true);
		el.after(newEl);
		$(el).remove();
		// hide intro area and show charachter info area
		$("#intro").addClass("d-none");
		$("#charShow").removeClass("d-none");

		// creat a title for the random character
		$(".title-content2 .content-header").html(
			`Randomizer has picked character No${num}. Here is some info about this character.`
		);
		console.log(num);

		// Get data for the random Character and show the "name", "height", "mass, "gender"  and a picture.
		$.get(`https://akabab.github.io/starwars-api/api/id/${num}.json`, function (data) {
			// console.dir(data);

			$("#randInfo")
				.empty()
				.append("<p>Name: " + (data["name"] == undefined ? "N / A" : data["name"]) + "</p>")
				.append("<p>Height: " + (data["height"] == undefined ? "N / A" : data["height"] + "m") + "</p>")
				.append("<p>Mass: " + (data["mass"] == undefined ? "N / A" : data["mass"] + "kg") + "</p>")
				.append("<p>Gender: " + (data["gender"] == undefined ? "N / A" : data["gender"]) + "</p>")
				.append("<img src = " + (data["image"] == undefined ? "N / A" : data["image"]) + ">");
		});
	});
});
