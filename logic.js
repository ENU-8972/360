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
    alert(urls);
    const tURL = urls.substring(urls.lastIndexOf('/')+1).replace('#', '');

    let navigate = false;
    let innerv = "";
    let feedback;
    let newURL;
    alert(buttonId);
    alert("handleButtonClick " + tURL);
    switch(tURL) {
        case "awake.html":
            switch(buttonId) {
                case "UP":
                    navigate = true;
                    newURL = "lectureUp.html";
                    break;

                default:
                    innerv = noperesponse();
            }
            break;
 
        case "lectureUp.html":
            alert("switched: " + tURL);
            switch(buttonId) {
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
                    innerv = noperesponse();
            }
            break;

            case "stairs3.html":
                switch(buttonId) {
                    case "UP":
                        navigate = true;
                        newURL = "stairs7.html";
                        break;
    
                    case "DOWN":
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
                            break;                        
    
                    default:
                        innerv = noperesponse();
                }
                break;

                case "stairs7.html":
                    switch(buttonId) {
                        case "UP":
                            navigate = true;
                            newURL = "stairs11.html";
                            break;
        
                        case "DOWN":
                            navigate = true;
                            newURL = "stairs3.html";
                            break;                     
        
                        default:
                            innerv = noperesponse();
                    }
                    break;                

                case "stairs11":
                    switch(buttonId) {
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
                            innerv = noperesponse();
                    }
                    break; 

        default:
            innerv = noperesponse();
    }
    
    if (innerv !== "") {
        document.getElementById("innervoice").innerHTML = innerv;
    }

    if (navigate === true) {
        //alert(newURL);
        //Load the URL just calculated
        window.location.href = newURL;
    }
 
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
    var rnum = Math.floor(Math.random() *20) + 1;

    switch(rnum) {
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
    alert("ActivateButton");
    var activateButton = document.querySelectorAll('.activateBtn');
    activateButton.forEach(function(link){
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

