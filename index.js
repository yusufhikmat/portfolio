const nav= document.querySelector('#nav-menu');
const navLinks = document.querySelector('.nav-links');
nav.addEventListener('click',showNav)
function showNav(){
    navLinks.classList.toggle('active')
}

//navbar color change

function changeNavbarBg(){
    const scrollValue = window.scrollY;
    const navMenu = document.getElementById('nav-menu');
    
    if(scrollValue < 600){
        navMenu.classList.remove('change-navMenuBg')
    
    }else{
        navMenu.classList.add('change-navMenuBg')
    }
}
window.addEventListener('scroll', changeNavbarBg)
/**end of change navmenu */

/** scroll */
window.addEventListener('scroll', reveal)
function reveal(){
    var reveals= document.querySelectorAll('.reveal');

    for(let i = 0; i < reveals.length; i++ ){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 50;

        if(revealtop < windowheight-revealpoint){
            reveals[i].classList.add('active')

        }else{
            reveals[i].classList.remove('active')
        }
    }
}
