//UI utility

document.addEventListener("DOMContentLoaded", function() {
    //Get all the localStorage settings and apply the to the html
    localStorage.setItem("lastthought", "Nooooooooo");
    document.getElementById("infobox").innerHTML = localStorage.getItem("lastthought");
})

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

function toggleVideoCheckin () {
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
}

document.getElementById("yescode").addEventListener("click", toggleVideoCheckin);
    
//Show and hide menu options

//Hide main description and leave only the location title

//Show detail image

//Show innervoice bubbles for a limited time

//Show remaining time

//


document.addEventListener("DOMContentLoaded", function() {
    //Inventory
    let inventory = [null, null, null]; //inventory placeholders

    //Get items from local storage

    function getInvItem(invId) {
        //Change the main description to show the inventory item
        var invItem = localstorage.getItem(invId)
    };

});


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


document.addEventListener("DOMContentLoaded", function() {
    var scrWidth = window.innerWidth;
    var scrHeight = window.innerHeight;
    alert('h:' + scrHeight + ' w:' + scrWidth );
});
