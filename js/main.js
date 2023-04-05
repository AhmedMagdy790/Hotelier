// Spinner
const spinner = document.getElementById('spinner');
const body = document.querySelector('body');


setTimeout(() => {
  body.classList.remove('scroll-hedden');
  spinner.classList.remove('show');

  // Initiate the wowjs
new WOW().init();
}, 1000);

// Show Menu
const showMenu = (toggleId, navId) => {
    const toggle    = document.querySelector(toggleId);
    const nav       = document.querySelector(navId);

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
        });
    }
}
showMenu('#navbar-toggler', '#navmenu-topbar');

// flatpickr
new flatpickr('input[type=date]', {
  disableMobile: "true"
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


    breakpoints: {
        // 640: {
        //   slidesPerView: 2,
        //   spaceBetween: 20,
        // },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
    },
});

// Back to up
function scrollUp(){
  const scrollUp = document.querySelector('#back-top-top');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
  scrollUp.addEventListener("click", () => {
      window.scrollTo(0,0);
  })
}
window.addEventListener('scroll', scrollUp);


// Scroll Active
function scrollActive(){
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const counter = current.querySelectorAll('.counter');
        
        // Scroll Section Active Link
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          // let link = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
          // console.log(document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList)
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);


// Facts counter
$('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000
});



/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
  const header = document.getElementById('header')

  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);
