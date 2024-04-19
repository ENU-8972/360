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
    if (event.detail===2) {  //true
        event.preventDefault();
    }
});