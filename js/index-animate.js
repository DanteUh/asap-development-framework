// ANIMATE INDEX HEADLINE

window.addEventListener("DOMContentLoaded", interval, false);
var indexHeader = document.getElementsByTagName("span");
var largeFlash = document.getElementById("large-flash");
var smallFlash = document.getElementById("small-flash");

var timesRun = 0;

var interval = setInterval(function() {
    indexHeader[timesRun].setAttribute("class", "white-text");
    timesRun++;
    if (timesRun === 4) {
        clearInterval(interval);
        displayFlash();
    }
}, 400);


function displayFlash() {
    largeFlash.setAttribute("class", "flash-after");
    largeFlash.setAttribute("class", "align-self-center");
    smallFlash.classList.add('flash-after');
}





// -- end