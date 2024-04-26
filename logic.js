//UI utility


document.addEventListener("DOMContentLoaded", function() {
    //Get all the localStorage and other settings and apply to the html

    //Inner Voices
    document.getElementById("innerv1").innerHTML = localStorage.getItem("innervoice1");
    document.getElementById("innerv2").innerHTML = localStorage.getItem("innervoice2");
    document.getElementById("innerv3").innerHTML = localStorage.getItem("innervoice3");
    
    //Title on menu ubar
    document.getElementById("mtitle").innerHTML = document.getElementById("title").innerHTML;

    //Get the webpage name and add it to local storage only if it is not there already
    var urls = window.location.href;
	const tURL = urls.substring(urls.lastIndexOf('/') + 1).replace('#', '');

    //Create a flag for each page 
    //  0 = visited  the page but no look command used
    //  1 = visited and looked
    var lookflag = 0;
    var timeflag = 0;

    timeflag = localStorage.getItem("lectern.html");
    alert(timeflag);
    if (timeflag === 1) {
        //the lectern has been LOOKed and the clock discovered
        updatescreentime();
        document.getElementById("gtime").display = "block";
    } else {
        document.getElementById("gtime").display = "none";
    }

    lookflag = localStorage.getItem(tURL);
    if (!lookflag) {
        localStorage.setItem(tURL, 0);    
    }

    //if there is a lookflag of 1 set the a href links to hot pink
    if (lookflag === 1) {
        looklinks();
    }
   
    //Update the time shown on screen
    updatescreentime();

    clearinnervoicestorage();

    //alert("updt");
    updategametime();
});


function updatescreentime() {

    //var thisgtime = new Date();
    var thisgtime = new Date(localStorage.getItem("gametime"));   
    var ghours = thisgtime.getHours();
    var gmins = thisgtime.getMinutes();

    //alert(ghours + ":" + gmins);
    //alert(gmins);

    document.getElementById("gtime").innerHTML = ghours + ":" + gmins;
}

//Stop mouse down scrolling from selecting text when moving the a-frame
var mouseDown = false;

document.addEventListener("mousedown", function(event){
    //Create even listeners that know if the mousedown is up/down
    mouseDown = true;
});

document.addEventListener("mouseup", function(event){
    //up
    mouseDown = false;
});

document.addEventListener("mousemove", function(event) {
    //When mouseDown is true stop text being selected when the mouse is moved
    if (mouseDown) {  //true
        event.preventDefault();
    } 
});

document.addEventListener("dblclick", function(event) {
    //Stop default selection behaviour when double click
    if (event.detail===2) {
        event.preventDefault();
    }
});

function updategametime() {    
    //Read the gametime localstorage field and update this
    //by a minute everytime a page is loaded
    var thisDate = new Date(localStorage.getItem("gametime"));
    thisDate.setMinutes(thisDate.getMinutes() + 1);
    //alert("bf storage" + thisDate);
    localStorage.setItem("gametime", thisDate);  
};

//Add an event listener for the look button being clicked
var e = document.getElementById("LOOK")
if (e) {
	e.addEventListener("click", function() {
		looklinks();
	});
}

function looklinks() {
    //Set the a and href links to hot pink when the LOOK command is used
    
    /* //Can't get this to work.  I have instead given an id to all the actionBtn
    // instances and will try setting the colour by getElementById
    var col_link = document.getElementsByClassName("activateBtn");
    col_link.forEach(function(element) {
       // alert(element.innerHTML);
        element.style.color = "red";
    });
    */
    
    var e = document.getElementById("dUP")
    if (e) {
            document.getElementById("dUP").style.color = 'hotpink';
        }

    var e = document.getElementById("dDOWN")
    if (e) {
            document.getElementById("dDOWN").style.color = 'hotpink';
        }

    var e = document.getElementById("dNW")
    if (e) {
            document.getElementById("dNW").style.color = 'hotpink';
        }

    var e = document.getElementById("dN")
    if (e) {
            document.getElementById("dN").style.color = 'hotpink';
        }

    var e = document.getElementById("dNE")
    if (e) {
            document.getElementById("dNE").style.color = 'hotpink';
        }

    var e = document.getElementById("dW")
    if (e) {
            document.getElementById("dW").style.color = 'hotpink';
        }

    var e = document.getElementById("dE")
    if (e) {
            document.getElementById("dE").style.color = 'hotpink';
        }

    var e = document.getElementById("dSW")
    if (e) {
            document.getElementById("dSW").style.color = 'hotpink';
        }

    var e = document.getElementById("dS")
    if (e) {
            document.getElementById("dS").style.color = 'hotpink';
        }

    var e = document.getElementById("dSE")
    if (e) {
            document.getElementById("dSE").style.color = 'hotpink';
        }

    var e = document.getElementById("dLOOK")
    if (e) {
            document.getElementById("dLOOK").style.color = 'hotpink';
        }

    var e = document.getElementById("dUSE")
    if (e) {
            document.getElementById("dUSE").style.color = 'hotpink';
        }
};

function toggleVideoCheckin() {
    //Function that replaces autoplay for the video
    //This will now require a user to click "check in" which 
    //will then hide the checkin div and show and start the video div
    var checkindiv = document.getElementById("yescode");
    var vidplaydiv = document.getElementById("vidplay");
    var modalishdiv = document.getElementById("modalkinda");

    const video = document.getElementById('lecture');

    modalishdiv.style.display = "none";
    modalishdiv.style.zIndex = 0;
    checkindiv.style.display = "none";
    checkindiv.style.zIndex = 0;
    vidplaydiv.style.display = "block";
    vidplaydiv.style.zIndex = 9999;

    video.play();
};

var e = document.getElementById("yescode");
if (e) {
    //alert("yescode toggle");
    e.addEventListener("click", toggleVideoCheckin);
}

    
//Show and hide menu options

//Hide main description and leave only the location title

//Show detail image

//Show innervoice bubbles for a limited time

//Show remaining time

//

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
	//alert("handleButtonClick " + tURL);

	if (buttonId === "LOOK") {
		localStorage.setItem(tURL, 1);
        innerv3 = "Look what I found";
        updategametime();
        updatescreentime();
        tURL = "Look";
	};


	switch (tURL) {

        case "Look":
           break;

		case "awake.html":
			switch (buttonId) {
				case "UP":
					navigate = true;
                    innerv1 = "Silence... Everyone has gone"
                    innerv2 = "My laptop and bag, gone."
					newURL = "lectureUp.html";
					break;
                
                case "DOWN":
                    navigate = true;
                    newURL = "index.html";
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
					newURL = "lectern.html";
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

				case "USE":
					//Piece of paper
					navigate = false;
					newURL = "lectern.html";
                    innerv1 = "It says - dark = GRUE!";
                    innerv2 = "hmmmm, that sounds bad";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

        case "landing.html":
            switch (buttonId) {

                case "DOWN":
                    navigate = true;
                    newURL = "awake.html";
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
					newURL = "lectern.html";
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
					newURL = "lectern.html";
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

		case "lectern.html":
			switch (buttonId) {

				case "USE":
					navigate = false;
					newURL = "lectern.html";
					innerv1 = "Excellent the screen has a clock";
					innerv2 = "now I can keep track of time.";
					break;

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
					newURL = "awake.html";
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

				case "DOWN":
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

				case "UP":
					navigate = true;
					newURL = "maze_w.html";
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

		case "duct_exit.html":
			switch (buttonId) {

				case "S":
					navigate = true;
					newURL = "maze_b.html";
					break;

				case "D":
					navigate = true;
					newURL = "maze_s.html";
					break;

				default:
					innerv3 = noperesponse();
			}
			break;

		case "maze_v.html":
			switch (buttonId) {

				case "N":
					navigate = true;
					newURL = "awake.html";
					break;

                case "E":
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
					newURL = "duct_exit.html";
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