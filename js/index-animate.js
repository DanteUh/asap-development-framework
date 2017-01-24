// ANIMATE INDEX HEADLINE

window.addEventListener("DOMContentLoaded", interval, false);
var header = document.getElementById("index-bg");
var indexHeader = header.getElementsByTagName("span");
var largeFlash = document.getElementById("large-flash");
var smallFlash = document.getElementById("small-flash");

var timesRun = 0;

var interval = setInterval(function() {
    indexHeader[timesRun].setAttribute("class", "white-text");
    timesRun++;
    if (timesRun === 3) {
        clearInterval(interval);
        displayFlash();
    }
}, 600);


function displayFlash() {
    largeFlash.setAttribute("class", "flash-after");
    largeFlash.setAttribute("class", "align-self-center");
    smallFlash.setAttribute("class", "flash-after");
}





// -- end