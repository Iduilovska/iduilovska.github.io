const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    breakpoints: {
      // when window width is >= 320px
      800: {
        slidesPerView: 3,
        spaceBetween: 20,
      }
    },

    spaceBetween: 1,
    direction: 'horizontal',
    centeredSlides: true,
    initialSlide: 0,
  });


  const menuBtn = document.querySelector('.header__menu-btn--mobile');
  const menuMobile = document.querySelector('.menu__mobile');
  
  
  menuBtn.addEventListener('click', ()=> {
      menuMobile.classList.toggle('menu--open');
  });