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
    const tURL = urls.substring(urls.lastIndexOf('/')+1);

    let navigate = false;
    let innerv = "";
    let feedback;
    let newURL;
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
 
        case "lectureUp":
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

        default:
            innerv = noperesponse();
    }
    
    if (innerv !== "") {
        document.getElementById("innervoice").innerHTML = innerv;
    }

    if (navigate === true) {
        alert(newURL);
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
    var activateButton = document.querySelectorAll('.activateBtn');
    activateButton.forEach(function(link){
        link.addEventListener("click", activateButtonClick);
    });
});

//Listeners for compass navigation button clicks
document.getElementById("UP").addEventListener("click", function() {
    handleButtonClick("UP");
});

document.getElementById("DOWN").addEventListener("click", function() {
    handleButtonClick("DOWN");
});

document.getElementById("NW").addEventListener("click", function() {
    handleButtonClick("NW");
});

document.getElementById("N").addEventListener("click", function() {
    handleButtonClick("N");
});

document.getElementById("NE").addEventListener("click", function() {
    handleButtonClick("NE");
});

document.getElementById("W").addEventListener("click", function() {
    handleButtonClick("W");
});

document.getElementById("E").addEventListener("click", function() {
    handleButtonClick("E");
});

document.getElementById("SW").addEventListener("click", function() {
    handleButtonClick("SW");
});

document.getElementById("S").addEventListener("click", function() {
    handleButtonClick("S");
});

document.getElementById("SE").addEventListener("click", function() {
    handleButtonClick("SE");
});

document.getElementById("LOOK").addEventListener("click", function() {
    handleButtonClick("LOOK");
});

document.getElementById("USE").addEventListener("click", function() {
    handleButtonClick("USE");
});
