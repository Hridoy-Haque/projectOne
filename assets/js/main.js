"use strict"

/*===========SELECT NAVBAR ELEMENT =================*/

const header = document.querySelector('.header'),
             navbar = document.querySelector('.navbar'),
             showBtn = document.getElementById('showBtn'),
             closeBtn = document.getElementById('closeBtn');

// mobile navbar active function ======>
             
function showMenu(){
    navbar.classList.add('mobile_navbar')
}

function closeMenu(){
    navbar.classList.remove('mobile_navbar')
}

showBtn.addEventListener('click', showMenu)
closeBtn.addEventListener('click', closeMenu)

// navbar background while scroll function ======>

function navbarBg(){
  let scrollTop = window.scrollY
  if(scrollTop > 20){
    header.classList.add('whiteBg')
  }else{
    header.classList.remove('whiteBg')
  }
}

window.addEventListener('scroll',navbarBg)
window.addEventListener('load',navbarBg)


// swipper for carousel or slider ======>


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


// animation section when page scroll  ======>


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

// isotope portfolio image gallery  ======>
  
//wuthout filter ========>

window.addEventListener('load',function(){
  let portfolioContainer = document.querySelector('.project-content');

    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.item'
      });
    }
})


//with filter ==========>


window.addEventListener('load', function(){
  let projectContainer = document.querySelector('.portfolio-content');

    if (projectContainer) {
      let portfolioIsotope = new Isotope(projectContainer, {
        itemSelector: '.item'
      });

    let items = document.querySelectorAll('.portfolio_items li');
    
    items.forEach((item)=>{
      item.addEventListener('click',function(e){
        items.forEach((el)=>{
          el.classList.remove('active')
        })
        e.target.classList.add('active')
        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        // aos_init();
      })
    })
    

    }
})




// scroll to top ========>

const scrollBtn = document.querySelector('.scrollTopBtn');

function scrollButtonActivate(){
  let scrollTop = window.scrollY ;
  if(scrollTop > 70){
    scrollBtn.classList.add('showBtn')
  }else{
    scrollBtn.classList.remove('showBtn')
  }
}


window.addEventListener('scroll',scrollButtonActivate)
window.addEventListener('load',scrollButtonActivate)

scrollBtn.addEventListener('click',function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0
})