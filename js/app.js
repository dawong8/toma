

const pet = {

	name: "", 
	health: 100, 
	hunger: 100, 
	happiness: 100, 
	type: ""

}; 

console.log(pet);


// Event Listeners

$("#litwick,#cleffa,#togepi,#azurill").on("click", (e) => {
	if ($("input[name='name']").val() == "") {
		alert("Please name your pet!");
	} else {
		pet.name = $("input[name='name']").val();
		pet.type = e.target.id;

		$("#start").css("display", "none");
		$(".active").css("display", "contents");

		const $tempName = $("<span/>").text(pet.name).css("font-size", "20px").attr("id", "petName");
		$("input[name='given-name']").replaceWith($tempName);


		// Selecting which pet

		switch (pet.type) {
			case "togepi": 
				$("#mypet").attr("src", "images/togepi.gif");
				break;
			case "azurill": 
				$("#mypet").attr({
					src: "images/azurill.gif",
					class: "pet"
				});
				break;
			case "cleffa":
				$("#mypet").attr("src", "images/cleffa.gif");
				break;
			default: 
				break;
		}

	}
})



// change name

$("#pencil").on("click", (e) => {
	const oldVal = $("#petName").text();

	const $input = $("<input/>").attr({
		type: "text", 
		placeholder: "Name?",
		id: "newName"
	});
	$("#petName").replaceWith($input);
	// $("#newName").on("change", function(e) {
	// 	pet.name = $(this).val();
	// });


	console.log(pet);

})

$(".container").on("click", (e) => {

	if ($("#newName").length) { // if there is a name change
		pet.name = $("#newName").val();

	//	console.log(pet);

		const $tempName = $("<span/>").text(pet.name).css("font-size", "20px").attr("id", "petName");
		$("#newName").replaceWith($tempName);
	}


});


