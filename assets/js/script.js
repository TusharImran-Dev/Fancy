//Sticky Navbar Code
const nav = document.querySelector('.nav_bar');

function fixedNav() {
if (window.scrollY >= 5) {    
    nav.classList.add('sticky');
} else {
    nav.classList.remove('sticky');    
}
}

window.addEventListener('scroll', fixedNav);

//Responsive Menu Code
$(document).ready(function(){
    $(".responsive_bar").click(function(){
    $(".new").toggle(400);
    });
});