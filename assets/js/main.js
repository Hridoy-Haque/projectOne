"use strict"

/*===========SELECT NAVBAR ELEMENT =================*/

const navbar = document.querySelector('.navbar'),
             showBtn = document.getElementById('showBtn'),
             closeBtn = document.getElementById('closeBtn');


function showMenu(){
    navbar.classList.add('mobile_navbar')
}

function closeMenu(){
    navbar.classList.remove('mobile_navbar')
}

showBtn.addEventListener('click', showMenu)
closeBtn.addEventListener('click', closeMenu)


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });