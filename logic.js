document.addEventListener("DOMContentLoaded", function() {
  // Set current page URL
    var urlsub = window.location.href;
    const thisURL = urlsub.substring(urlsub.lastIndexOf('/')+1);
    //const thisURL = substring(window.location.href.lastIndexOf('/')+1);
    alert(thisURL);
});

function handleButtonClick(buttonId) {
    //Check the URL and possible outcomes
    //List of each URL
    var urls = window.location.href;
    const tURL = urls.substring(urls.lastIndexOf('/')+1);
    alert(tURL);

    alert(buttonId);
    let newURL;
    switch(tURL) {
        case "awake.html":
            if (buttonId === "UP") {
                newURL = "lectureUp.html";
            } else if (buttonId === "DOWN") {
                newURL = "index.html";
            } else {
                newURL = "awake.html";
            }
    }

    alert(newURL);

    //Load the URL just calculated
    window.location.href = newURL;
    
};


document.getElementById("UP").addEventListener("click", function() { 
    handleButtonClick("UP")
});


document.getElementById("DOWN").addEventListener("click", function() {
    handleButtonClick("DOWN");
});

document.getElementById("SEARCH").addEventListener("click", function() {
    handleButtonClick("SEARCH");
});

document.getElementById("BACK").addEventListener("click", function() {
    handleButtonClick("BACK");
});

document.getElementById("INV").addEventListener("click", function() {
    handleButtonClick("INV");
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