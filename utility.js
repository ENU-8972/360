document.addEventListener('mousedown', function (event) {
    // Disable text selection on mousedown
    // Stop the text in the divs being selected when moving the a-frame 360 image
    disableTextSelection();
});

document.addEventListener('scroll', function (event) {
    // Disable text selection while scrolling
    // Stop the text in the divs being selected when moving the a-frame 360 image    
    disableTextSelection();
});

function disableTextSelection() {
    // Check if there is any text selected on the webpage
    // there shouldn't be.  If there is unselect it.
    if (typeof window.getSelection != 'undefined') {
        var selection = window.getSelection();
        // Check if text selected
        if (selection.rangeCount > 0) {
            // Remove selection
            selection.removeAllRanges();
        }
    } else if (typeof document.selection != 'undefined') {
        // For older versions of Internet Explorer
        document.selection.empty();
    }
}