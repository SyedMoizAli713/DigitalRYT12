// ---nav----

  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("navMenu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });




document.querySelectorAll(".problem-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});
// problem-solution-end--

// ---service---
var swiper = new Swiper(".cardSlider", {
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 30,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 1
    }
  }
});