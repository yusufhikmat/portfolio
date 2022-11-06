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

//read more and readless of btnseefoodmenu
const readMoreBtn = document.querySelector('.read-more');
const aboutText= document.querySelector('.about-text');

readMoreBtn.addEventListener('click',()=>{
    aboutText.classList.toggle('show-text');
    if(readMoreBtn.textContent === 'REAd MORE'){
        readMoreBtn.textContent = 'READ LESS';
    }else{
        readMoreBtn.textContent = 'READ MORE';
    }
})

/**contact form */

