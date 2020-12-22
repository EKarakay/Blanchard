window.addEventListener('DOMContentLoaded', () => {
  const bottomNavLink = document.querySelectorAll('.bottom-nav__link');
  const scrollBox = document.querySelectorAll('.scroll-box');
  const navArrow = document.querySelectorAll('.bottom-nav__arrow');
  bottomNavLink.forEach((el, index) => {
    el.addEventListener('click', (event) => {
      event.preventDefault();
      const scrollBoxClassList = scrollBox[index].classList;
      if (scrollBoxClassList.contains('scroll-box_is-active')) {
        scrollBoxClassList.remove('scroll-box_is-active')
        navArrow[index].classList.remove('bottom-nav__arrow_is-active')
        bottomNavLink[index].classList.remove('bottom-nav__link_is-active')

      } else {
        scrollBox.forEach((el) => el.classList.remove('scroll-box_is-active'))
        scrollBoxClassList.add('scroll-box_is-active')
        navArrow.forEach((el) => el.classList.remove('bottom-nav__arrow_is-active'))
        navArrow[index].classList.add('bottom-nav__arrow_is-active')
        bottomNavLink.forEach((el) => el.classList.remove('bottom-nav__link_is-active'))
        bottomNavLink[index].classList.add('bottom-nav__link_is-active')
      }
    });
  });

  window.onclick = function (event) {
    if (!event.target.matches('.bottom-nav__link')) {
      let dropdowns = document.getElementsByClassName('scroll-box');
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('scroll-box_is-active')) {
          openDropdown.classList.remove('scroll-box_is-active');
        }
      }

    }

    if (!event.target.matches('.bottom-nav__link')) {
      let dropArrows = document.getElementsByClassName('bottom-nav__arrow');
      let i;
      for (i = 0; i < dropArrows.length; i++) {
        let openDropdown = dropArrows[i];
        if (openDropdown.classList.contains('bottom-nav__arrow_is-active')) {
          openDropdown.classList.remove('bottom-nav__arrow_is-active');
        }
      }

    }

    if (!event.target.matches('.bottom-nav__link')) {
      let dropArrows = document.getElementsByClassName('bottom-nav__link');
      let i;
      for (i = 0; i < dropArrows.length; i++) {
        let openDropdown = dropArrows[i];
        if (openDropdown.classList.contains('bottom-nav__link_is-active')) {
          openDropdown.classList.remove('bottom-nav__link_is-active');
        }
      }

    }
  }
  // Hero Slider Swiper init

  new Swiper('.hero-swiper', {
    // Optional parameters
    slidesPerView: 'auto',
    speed: 800,
    effect: 'fade',
    allowTouchMove: true,
    autoplay: {
      delay: 10000,
    },
  });
  // Gallery select
  const element = document.querySelector('.select-custom');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
  });

  // Gallery Slider Swiper init

  $('document').ready(function () {

    my_func();

    $(window).resize(function () {
      my_func();
    });

    window.onorientationchange = function () {
      my_func();
    };

    function my_func() {
      var browserMinWidth = parseInt($('body').css('max-width'), 10);
      if (isNaN(browserMinWidth)) {
        gallerySlider = new Swiper('.gallery-swiper', {
          autoHeight: false,
          slidesPerGroup: 3,
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 50,
          speed: 800,
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
        });
      };
      if (browserMinWidth <= 320) {
        gallerySlider = new Swiper('.gallery-swiper', {
          autoHeight: false,
          slidesPerGroup: 1,
          slidesPerView: 1,
          slidesPerColumn: 1,
          spaceBetween: 20,
          speed: 800,
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
        });
      };
      if ((browserMinWidth > 320) && (browserMinWidth <= 540)) {
        gallerySlider = new Swiper('.gallery-swiper', {
          autoHeight: true,
          slidesPerGroup: 1,
          slidesPerView: 1,
          slidesPerColumn: 1,
          speed: 800,
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
        });
      };
      if ((browserMinWidth > 540) && (browserMinWidth <= 767)) {
        gallerySlider = new Swiper('.gallery-swiper', {
          autoHeight: true,
          slidesPerGroup: 1,
          slidesPerView: 1,
          slidesPerColumn: 1,
          speed: 800,
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
        });
      };
      if ((browserMinWidth >= 768) && (browserMinWidth <= 1024)) {
        gallerySlider = new Swiper('.gallery-swiper', {
          autoHeight: false,
          slidesPerGroup: 2,
          slidesPerView: 2,
          slidesPerColumn: 2,
          spaceBetween: 34,
          speed: 800,
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
        });
      };
    };
  });
});