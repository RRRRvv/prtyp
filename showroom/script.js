window.addEventListener('load', () => {
  const galleries = document.querySelectorAll('.gallery');
  // Removed ColorThief and related lighting/canvas variables
  // const colorThief = new ColorThief();

  galleries.forEach((gallery) => {
    const swiperContainer = gallery.querySelector('.swiper-container');

    const swiper = new Swiper(swiperContainer, {
      loop: true,
      speed: 800,
      autoplay: {
        delay: 600000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: gallery.querySelector('.swiper-button-next'),
        prevEl: gallery.querySelector('.swiper-button-prev'),
      }
      // Removed lighting/canvas hooks:
      /*
      on: {
        init: function () {
          console.log("ready");
        },
        slideChange: function () {
          console.log("ready");
        },
      },
      */
    });

    // Restart autoplay on touch
    swiperContainer.addEventListener('touchstart', () => {
      swiper.autoplay.stop();
      swiper.autoplay.start();
    });

    // Restart autoplay on navigation-button clicks
    gallery.querySelectorAll('.swiper-button-next, .swiper-button-prev').forEach((btn) => {
      btn.addEventListener('click', () => {
        swiper.autoplay.stop();
        swiper.autoplay.start();
      });
    });

    // Removed image/color-thief and description toggling entirely:
    /*
    gallery.querySelectorAll('.slide-image').forEach((imgEl) => {
      imgEl.crossOrigin = 'anonymous';

      imgEl.addEventListener('click', () => {
        toggleDescription(imgEl, gallery);
      });
    });
    */
  });

  // Removed unused functions: applyDominantColor, highlightCurrentSlide, drawAmbientGlow, toggleDescription
  /*
  function applyDominantColor(imgEl) {
    try {
      const dominant = colorThief.getColor(imgEl);
      imgEl.setAttribute('data-dominant-color', dominant.join(','));
    } catch {
      imgEl.setAttribute('data-dominant-color', '255,255,255');
    }
  }

  function highlightCurrentSlide(swiper) {
    // ...
  }

  function drawAmbientGlow(slideEl) {
    // ...
  }

  function toggleDescription(imgEl, galleryEl) {
    // ...
  }
  */
});
