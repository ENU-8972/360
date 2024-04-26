//UI utility


document.addEventListener("DOMContentLoaded", function() {
    //Get all the localStorage settings and apply to the html
    //localStorage.setItem("lastthought", "Nooooooooo");
    //document.getElementById("innerv1").innerHTML = localStorage.getItem("lastthought");
    
    document.getElementById("innerv1").innerHTML = localStorage.getItem("innervoice1");
    document.getElementById("innerv2").innerHTML = localStorage.getItem("innervoice2");
    document.getElementById("innerv3").innerHTML = localStorage.getItem("innervoice3");
    
    document.getElementById("mtitle").innerHTML = document.getElementById("title").innerHTML;

    //Get the webpage name and add it to local storage only if it is not there already
    var urls = window.location.href;
	const tURL = urls.substring(urls.lastIndexOf('/') + 1).replace('#', '');

    //Create a flag for each page 
    //  0 = visited  the page but no look command used
    //  1 = visited and looked
    var lookflag = 0;

    lookflag = localStorage.getItem(tURL);
    if (!lookflag) {
        localStorage.setItem(tURL, 0);    
    }

    //if there is a lookflag of 1 set the a href links to hot pink
    if (lookflag == 1) {
        looklinks();
    }
   
    //var thisgtime = new Date();
    var thisgtime = new Date(localStorage.getItem("gametime"));   
    var ghours = thisgtime.getHours();
    var gmins = thisgtime.getMinutes();

    //alert(ghours + ":" + gmins);
    //alert(gmins);

    document.getElementById("gtime").innerHTML = ghours + ":" + gmins;

    clearinnervoicestorage();

    //alert("updt");
    updategametime();
});


//Stop mouse down scrolling from selecting text when moving the a-frame
var mouseDown = false;

//Create even listeners that know if the mousedown is up/down
document.addEventListener("mousedown", function(event){
    mouseDown = true;
});

//up
document.addEventListener("mouseup", function(event){
    mouseDown = false;
});

//When mouseDown is true stop text being selected when the mouse is moved
document.addEventListener("mousemove", function(event) {
    if (mouseDown) {  //true
        event.preventDefault();
    }
});


//Stop default selection behaviour when double click
document.addEventListener("dblclick", function(event) {
    if (event.detail===2) {
        event.preventDefault();
    }
});


/*  Auto play no worky for me
document.addEventListener("DOMContentLoaded", function() {
    //Auto play check to see if it is running
    const video = document.getElementById('lecture');
    setTimeout(() => {
        if (video.paused) {
                //Show the checkin accept box;
                //When the button is clicked start the video;
                //alert('No play');
                document.getElementById('videoplay').style.display = 'none';
                document.getElementById('info').style.display = 'block';
        } else { //all good
           // alert('play');
            document.getElementById('info').style.display = 'none';
        }
    }, 2000);
});
*/

function updategametime() {    
    //Read the gametime localstorage field and update this
    //by a minute everytime a page is loaded
    var thisDate = new Date(localStorage.getItem("gametime"));
    thisDate.setMinutes(thisDate.getMinutes() + 1);
    //alert("bf storage" + thisDate);
    localStorage.setItem("gametime", thisDate);  
};

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

/*
document.addEventListener("DOMContentLoaded", function() {
    //Inventory
    let inventory = [null, null, null]; //inventory placeholders

    //Get items from local storage

    function getInvItem(invId) {
        //Change the main description to show the inventory item
        var invItem = localstorage.getItem(invId)
    };

});
*/

/*
//Storage
    //Procedures for storing game state, location and inventory information

    //Reset all storage - called when awakening sequence triggered
    function resetstorage() {
        localStorage.clear();
    };

    function setGameTime(time) {
        localStorage.setItem("GameTime",time);
    };

    function addTurnGameTime() {
        var origtime = localStorage.getItem("GameTime");
        localStorage.setGameTime("GameTime", origtime + 5);
        //update the screen with the new time
    };
*/

/*
document.addEventListener("DOMContentLoaded", function() {
    var scrWidth = window.innerWidth;
    var scrHeight = window.innerHeight;
    //alert('h:' + scrHeight + ' w:' + scrWidth );
});
*/