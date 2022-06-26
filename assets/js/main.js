"use strict"

// SELECT NAVBAR ELEMENT 

const navbar = document.querySelector('.navbar'),
             showBtn = document.querySelector('.show_menu'),
             closeBtn = document.querySelector('.close_menu'),
             collapseMenu = document.querySelector('.collapse_menu');


function showMenu(){
    navbar.classList.add('mobile_navbar')
}
function closeMenu(){
    navbar.classList.remove('mobile_navbar')
}

showBtn.addEventListener('click', showMenu)
closeBtn.addEventListener('click', closeMenu)