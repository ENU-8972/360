//document.addEventListener("DOMContentLoaded", function() {
// // Set current page URL
//    var urlsub = window.location.href;
//    const thisURL = urlsub.substring(urlsub.lastIndexOf('/')+1);
//    //const thisURL = substring(window.location.href.lastIndexOf('/')+1);
//    alert(thisURL);
//});

function handleButtonClick(buttonId) {
	//Check the URL and possible outcomes
	//List of each URL
	var urls = window.location.href;
	//alert(urls);
	const tURL = urls.substring(urls.lastIndexOf('/') + 1).replace('#', '');

	let navigate = false;
	let innerv1 = "";
	let innerv2 = "";
	let innerv3 = "";
	let feedback;
	let newURL;
	//alert(buttonId);
	alert("handleButtonClick " + tURL);


	if (buttonId === "LOOK") {
		document.querySelectorAll(".activateBtn")
	};


	switch (tURL) {
		case "awake.html":
			switch (buttonId) {
				case "UP":
					navigate = true;
					newURL = "lectureUp.html";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "lectureUp.html":
			//alert("switched: " + tURL);
			switch (buttonId) {
				case "UP":
					navigate = true;
					newURL = "stairs11.html";
					break;

				case "DOWN":
					navigate = true;
					newURL = "stairs3.html";
					break;

				case "E":
					navigate = true;
					newURL = "stairs7.html";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "stairs3.html":
			switch (buttonId) {
				case "UP":
					navigate = true;
					newURL = "stairs7.html";
					break;

				case "N":
					navigate = true;
					newURL = "lecturestage.html";
					break;

				case "NW":
					navigate = true;
					newURL = "main_door.html";
					break;

				case "NE":
					navigate = false;
					newURL = "lecturn.html";
					innerv1 = "No way, too creepy!";
					innerv2 = "Head to the light.";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "stairs7.html":
			switch (buttonId) {
				case "UP":
					navigate = true;
					newURL = "stairs11.html";
					break;

				case "DOWN":
					navigate = true;
					newURL = "stairs3.html";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "stairs11.html":
			switch (buttonId) {
				case "UP":
					navigate = true;
					newURL = "landing.html";
					break;

				case "DOWN":
					navigate = true;
					newURL = "stairs7.html";
					break;

				case "LOOK":
					//Piece of paper
					navigate = false;
					newURL = "lecturn.html";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "lecturestage.html":
			switch (buttonId) {
				case "N":
					navigate = true;
					newURL = "lost_property.html";
					break;

				case "E":
					navigate = false;
					newURL = "lecturn.html";
					innerv2 = "It is too dark over there";
					innerv3 = "and I'm scared of the dark";
					break;

				case "S":
					//Piece of paper
					navigate = true;
					newURL = "stairs3.html";
					break;

				case "W":
					navigate = true;
					newURL = "main_door.html";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "main_door.html":
			switch (buttonId) {
				case "N":
					navigate = true;
					newURL = "light_switch.html";
					break;

				case "E":
					navigate = true;
					newURL = "lecturestage.html";
					break;

				case "W":
					navigate = true;
					newURL = "awake.html";
					innerv2 = "I don't think I should have touched that.";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "light_switch.html":
			switch (buttonId) {

				case "S":
					navigate = true;
					newURL = "main_door.html";
					break;

				case "USE":
					navigate = true;
					newURL = "lecture_stage_lit.html";
					innerv2 = "Thank goodness for that.";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "lecture_stage_lit.html":
			switch (buttonId) {

				case "UP":
					navigate = true;
					newURL = "stairs_8_lit.html";
					break;

				case "E":
					navigate = true;
					newURL = "lecturn.html";
					break;

				case "W":
					navigate = true;
					newURL = "awake.html";
					innerv2 = "That surprised me...";
					break;


				case "USE":
					navigate = true;
					newURL = "lecturestage.html";
					innerv2 = "Darkness and fear again; joy.";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "lecturn.html":
			switch (buttonId) {

				case "W":
					navigate = true;
					newURL = "lecture_stage_lit.html";
					innerv1 = "I wonder what my grade will be, if I ever";
					innerv2 = "get out of here.";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "lost_property.html":
			switch (buttonId) {

				case "S":
					navigate = true;
					newURL = "lecturestage.html";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "stairs_8_lit.html":
			switch (buttonId) {

				case "UP":
					navigate = true;
					newURL = "landing_lit.html";
					break;

				case "DOWN":
					navigate = true;
					newURL = "lecture_stage_lit.html";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "landing_lit.html":
			switch (buttonId) {

				case "DOWN":
					navigate = true;
					newURL = "stairs_8_lit.html";
					break;

				case "E":
					navigate = true;
					newURL = "duct.html";
					break;

				case "W":
					navigate = true;
					newURL = "awake.html";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "duct.html":
			switch (buttonId) {

				case "UP":
					navigate = true;
					newURL = "maze_h.html";
					break;

				case "DOWN":
					navigate = true;
					newURL = "stairs_8_lit.html";
					break;


				case "W":
					navigate = true;
					newURL = "awake.html";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "maze_h.html":
			switch (buttonId) {

				case "DOWN":
					navigate = true;
					newURL = "duct.html";
					break;

				case "N":
					navigate = true;
					newURL = "awake.html";
					break;

				case "S":
					navigate = true;
					newURL = "maze_q.html";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "maze_q.html":
			switch (buttonId) {

				case "N":
					navigate = true;
					newURL = "maze_h.html";
					break;

				case "S":
					navigate = true;
					newURL = "maze_j.html";
					break;

				case "W":
					navigate = true;
					newURL = "maze_m.html";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "maze_m.html":
			switch (buttonId) {

				case "E":
					navigate = true;
					newURL = "maze_r.html";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "maze_d.html":
			switch (buttonId) {

				case "DOWN":
					navigate = true;
					newURL = "maze_p.html";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "maze_s.html":
			switch (buttonId) {

				case "E":
					navigate = true;
					newURL = "Awake.html";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "maze_j.html":
			switch (buttonId) {

				case "N":
					navigate = true;
					newURL = "maze_q.html";
					break;

				case "E":
					navigate = true;
					newURL = "maze_t.html";
					break;

				case "S":
					navigate = true;
					newURL = "maze_p.html";
					break;

				case "W":
					navigate = true;
					newURL = "maze_s.html";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "maze_t.html":
			switch (buttonId) {

				case "N":
					navigate = true;
					newURL = "maze_d.html";
					break;

				case "E":
					navigate = true;
					newURL = "maze_n.html";
					break;

				case "W":
					navigate = true;
					newURL = "maze_j.html";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;


		case "maze_n.html":
			switch (buttonId) {

				case "E":
					navigate = true;
					newURL = "maze_x.html";
					break;

				case "W":
					navigate = true;
					newURL = "maze_t.html";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;


		case "maze_x.html":
			switch (buttonId) {

				case "W":
					navigate = true;
					newURL = "awake.html";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "maze_a.html":
			switch (buttonId) {

				case "E":
					navigate = true;
					newURL = "maze_p.html";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "maze_p.html":
			switch (buttonId) {

				case "N":
					navigate = true;
					newURL = "maze_j.html";
					break;

				case "S":
					navigate = true;
					newURL = "maze_w.html";
					break;

				case "W":
					navigate = true;
					newURL = "maze_a.html";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "maze_e.html":
			switch (buttonId) {

				case "S":
					navigate = true;
					newURL = "maze_r.html";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "maze_w.html":
			switch (buttonId) {

				case "N":
					navigate = true;
					newURL = "maze_p.html";
					break;

				case "E":
					navigate = true;
					newURL = "maze_r.html";
					break;

				case "S":
					navigate = true;
					newURL = "maze_v.html";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "maze_r.html":
			switch (buttonId) {

				case "N":
					navigate = true;
					newURL = "maze_e.html";
					break;

				case "S":
					navigate = true;
					newURL = "maze_f.html";
					break;

				case "W":
					navigate = true;
					newURL = "maze_w.html";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "maze_y.html":
			switch (buttonId) {

				case "S":
					navigate = true;
					newURL = "maze_p.html";
					break;

				case "W":
					navigate = true;
					newURL = "maze_s.html";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "maze_v.html":
			switch (buttonId) {

				case "DOWN":
					navigate = true;
					newURL = "awake.html";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "maze_f.html":
			switch (buttonId) {

				case "N":
					navigate = true;
					newURL = "maze_r.html";
					break;

				case "E":
					navigate = true;
					newURL = "maze_b.html";
					break;

				case "W":
					navigate = true;
					newURL = "maze_v.html";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "maze_b.html":
			switch (buttonId) {

				case "N":
					navigate = true;
					newURL = "maze_y.html";
					break;

				case "W":
					navigate = true;
					newURL = "maze_f.html";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		default:
			innerv3 = noperesponse();
	}

	clearinnervoice();

	if (innerv1 !== "") {
		localStorage.setItem("innervoice1", innerv1);
		document.getElementById("innerv1").innerHTML = innerv1;

	}

	if (innerv2 !== "") {
		localStorage.setItem("innervoice2", innerv2);
		document.getElementById("innerv2").innerHTML = innerv2;
	}

	if (innerv3 !== "") {
		localStorage.setItem("innervoice3", innerv3);
		document.getElementById("innerv3").innerHTML = innerv3;
	}


	if (navigate === true) {
		//alert(newURL);
		//Load the URL just calculated
		window.location.href = newURL;
	} else if (newURL !== "") {
		var elm = document.getElementById("infobox");
		elm.innerHTML = "<div><img src='./images/i_lecturedoor.jpg' alt='Locked lecture theatre door'></div>";
		//elm.style.display = "block";
	}

};

function clearinnervoice() {
	//Clear all innervoice text before it is set with new content
	document.getElementById("innerv1").innerHTML = "";
	document.getElementById("innerv2").innerHTML = "";
	document.getElementById("innerv3").innerHTML = "";
};

function clearinnervoicestorage() {
	//clear the innervoice items in storage.
	//This is called after they have been shown on screen and prevents
	//them from being shown repeatedly.
	localStorage.setItem("innervoice1", "");
	localStorage.setItem("innervoice2", "");
	localStorage.setItem("innervoice3", "");
};


function activateButtonClick(event) {
	event.preventDefault(); // Don't do default behavior - to stop the URL getting the # added

	// Get the target button ID
	var targetButtonId = event.target.getAttribute('data-target');

	// Find the button element by its ID
	var button = document.getElementById(targetButtonId);

	if (button) {
		// Trigger the click event of the button
		button.click();
	} else {
		alert("I have no way of doing that");
	}
};


function noperesponse() {
	//Return a string response based random between 1-20, to increase variety in the response
	var response;
	var rnum = Math.floor(Math.random() * 20) + 1;

	clearinnervoice();

	switch (rnum) {
		case 1:
			response = "I have no way of doing that.";
			break;

		case 2:
			response = "Nope, I can't do that."
			break;

		case 3:
			response = "Well that a'int happening."
			break;

		case 4:
			response = "Not going to work."
			break;

		case 5:
			response = "I need to try something different."
			break;

		case 6:
			response = "That's not possible."
			break;

		case 7:
			response = "I need to try something else."
			break;

		case 8:
			response = "Perhaps a differnet way."
			break;

		case 9:
			response = "I'd like to but can't."
			break;

		case 10:
			response = "I would've thought that would work."
			break;

		case 11:
			response = "It's not possible."
			break;

		case 12:
			response = "If only, how frustraiting."
			break;

		case 13:
			response = "Apparently I can't."
			break;

		case 14:
			response = "Another day, perhaps."
			break;

		case 15:
			response = "And for my next trick."
			break;

		case 16:
			response = "Alas, it seems not."
			break;

		case 17:
			response = "Not to be."
			break;

		case 18:
			response = "One day something is going to work."
			break;

		case 19:
			response = "Really, I thought that might work."
			break;

		case 20:
			response = "Try something different."
			break;

		default:
			response = "Ok, back to the drawing board."
			break;
	}

	return response;
}

document.addEventListener("DOMContentLoaded", function() {
	//alert("ActivateButton");
	var activateButton = document.querySelectorAll('.activateBtn');
	activateButton.forEach(function(link) {
		link.addEventListener("click", activateButtonClick);
	});
});

//Listeners for compass navigation button clicks
var e = document.getElementById("UP")
if (e) {
	e.addEventListener("click", function() {
		handleButtonClick("UP");
	});
}

var e = document.getElementById("DOWN")
if (e) {
	e.addEventListener("click", function() {
		handleButtonClick("DOWN");
	});
}

var e = document.getElementById("NW")
if (e) {
	e.addEventListener("click", function() {
		handleButtonClick("NW");
	});
}

var e = document.getElementById("N")
if (e) {
	e.addEventListener("click", function() {
		handleButtonClick("N");
	});
}

var e = document.getElementById("NE")
if (e) {
	e.addEventListener("click", function() {
		handleButtonClick("NE");
	});
}

var e = document.getElementById("W")
if (e) {
	e.addEventListener("click", function() {
		handleButtonClick("W");
	});
}

var e = document.getElementById("E")
if (e) {
	e.addEventListener("click", function() {
		handleButtonClick("E");
	});
}

var e = document.getElementById("SW")
if (e) {
	e.addEventListener("click", function() {
		handleButtonClick("SW");
	});
}

var e = document.getElementById("S")
if (e) {
	e.addEventListener("click", function() {
		handleButtonClick("S");
	});
}

var e = document.getElementById("SE")
if (e) {
	e.addEventListener("click", function() {
		handleButtonClick("SE");
	});
}

var e = document.getElementById("LOOK")
if (e) {
	e.addEventListener("click", function() {
		handleButtonClick("LOOK");
	});
}

var e = document.getElementById("USE")
if (e) {
	e.addEventListener("click", function() {
		handleButtonClick("USE");
	});
}