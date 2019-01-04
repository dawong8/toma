
let lights = true; 
let intervalID; 

const pet = {

	name: "", 
	health: 50, 
	hunger: 50, 
	happiness: 100, 
	shower: 50,
	age: 0,
	type: "", 
	baby: true

}; 


//cache 

const $pet = $("#mypet");


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
				$pet.attr("src", "images/togepi.gif");
				break;
			case "azurill": 
				$pet.attr({
					src: "images/azurill.gif",
					class: "pet"
				});
				break;
			case "cleffa":
				$pet.attr("src", "images/cleffa.gif");
				break;
			case "litwick": 
				$("#special").toggleClass("hide");
			default: 
				break;
		}

		render();

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
		//$tempName.css("color", "white");
		$("#newName").replaceWith($tempName);
	}


});


$("#press-shower").on("click", (e) => {
	$(".showering").toggleClass("hide");


	let temp = setTimeout(function() {
		// console.log("running")
		$(".showering").toggleClass("hide");
		pet.shower += 10; 
		$("#shower-bar").val(pet.shower);
	}, 1000);
	console.log(pet);

});


$("#press-feed").on("click", (e) => {

	$(".feeding").toggleClass("hide");

	let temp = setTimeout(function() {
		// console.log("running")
		$(".feeding").toggleClass("hide");
		pet.hunger += 10; 
		$("#hunger-bar").val(pet.hunger);
	}, 1000);
	console.log(pet);

});




$("#press-lights").on("click", function(e) {
	if (lights) {
		$("#playground").css({
			filter: "brightness(10%)"
		});


		$(this).css({
			background: "white"
		});
		// if (pet.type == "litwick") {
		// 	$pet.css("box-shadow","0 0 200px #fff");
		// }

		lights = false;

	} else {
		$("#playground").css("filter", "brightness(100%)");
		$(this).css({
			background: "grey"
		});
		lights = true; 
	}
});


$pet.on("click", function(e) {
	if (pet.happiness < 255) {
		pet.happiness+= 5;
	}
	$("#happiness-bar").val(pet.happiness);
});


// Functions 


function changeState() {
	pet.age++;
	$("#age").text(`Age: ${pet.age} Days Old`);

	changePet();


	$("#hunger-bar").val(pet.hunger);
	$("#shower-bar").val(pet.shower);


	$("#health-bar").val(pet.health);

	evolve();

	if (petDead()) {
		clearInterval(intervalID);

		$(".active").css("display", "none");
		$("#dead").toggleClass("hide");
		$("#dead-screen").text(`${pet.name} survived for ${pet.age} days.`).css("font-size", "50px");
		const $form = $("<form/>");
		const $submit = $("<input/>").attr({
			type: "submit", 
			value: "Start Over?",
			id: "submit"
		});

		$form.append($submit);
		$("#dead-screen").append($form);
		console.log("pet has died");
	} 

}




function evolve() {
	if (pet.happiness == 255 && pet.type != "litwick" && pet.baby == true) {
		console.log("evolving");


		switch (pet.type) {
			case "cleffa": 
				$pet.attr("src", "images/clefairy.gif").css("width", "15%");
				break;
			case "togepi":
				$pet.attr("src", "images/togetic.gif").css("align-self", "center");
				break;
			case "azurill": 
				$pet.attr("src", "images/marill.gif").css("width", "15%");
				break;

			default: 
				break;

		}

		pet.baby = false;
	}
}


function changePet() {
	if (pet.hunger > 0) {
		pet.hunger--; 
	}
	if (pet.shower > 0) {
		pet.shower--;
	}

	if (pet.hunger == 0 || pet.shower == 0) {
		pet.health -= 5; 
	} else if (pet.hunger >= 50 && pet.shower >= 50) {
		pet.health += 10; 
	}
}

function petDead() {

	if (pet.health == 0) {
		return true;
	} else {
		return false;
	}
}



function render() {
	intervalID = window.setInterval(changeState, 1500); // change later!!!! 1500


}










