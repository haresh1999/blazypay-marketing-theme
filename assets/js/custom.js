// plan-page banner slider
var swiper = new Swiper(".custom-plan-slider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// faq-section
document.querySelectorAll('.custom-faq .accordion-button').forEach(button => {
  if (!button.classList.contains('collapsed')) {
    button.closest('.accordion-item').classList.add('active');
  }

  button.addEventListener('click', function () {
    document.querySelectorAll('.custom-faq .accordion-item').forEach(item => {
      item.classList.remove('active');
    });

    if (!this.classList.contains('collapsed')) {
      this.closest('.accordion-item').classList.add('active');
    }
  });
});


// learning-page slider
let mySwiper = new Swiper(".mySwiper4", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 20-05-25 start

// seller-swiper

let sellerSwiper = new Swiper(".seller-swiper", {
  spaceBetween: 30,
  slidesPerView: 4,
  slidesPerGroup: 1,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
  },
});


// review slider

let reviewSwiper = new Swiper(".review-swiper", {
  spaceBetween: 24,
  slidesPerView: 4,
  slidesPerGroup: 1,
  speed: 800,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

// 20-05-25 end


