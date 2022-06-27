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



const btn = document.querySelector('.swiper-button-next');

  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });


var container = document.querySelector('.project-content');

new Isotope( container, {
  itemSelector: '.item',
  layoutMode: 'fitRows'
});