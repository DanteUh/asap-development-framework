//JS for navbar 

//glob vars
window.addEventListener('scroll', navbarBg);


//navbar background change
function navbarBg() {
    var viewPort = document.getElementsByTagName('header')[0];
    var navBar = document.getElementById('siteNav');
    if (document.body.scrollTop > (60) || document.documentElement.scrollTop > (60)) {
    	navBar.classList.remove('bg-transparent');
        navBar.classList.add('bg-primary') ;
    } else {
        navBar.classList.remove('bg-primary');
        navBar.classList.add('bg-transparent') ;
    }
}