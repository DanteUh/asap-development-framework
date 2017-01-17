//JS for navbar 

//glob vars
window.addEventListener("scroll", navbarBg);


//navbar background change
function navbarBg() {
    var viewPort = document.getElementsByTagName("header")[0];

    if (document.body.scrollTop > (60) || document.documentElement.scrollTop > (60)) {
        document.getElementById("siteNav").className = "bg-blue";
    } else {
        document.getElementById("siteNav").className = "";
    }
}