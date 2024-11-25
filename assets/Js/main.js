// ---------------> Variables <----------------
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");
const swiperContainer = document.querySelector(".swiper");

// ---------------> Hamburger menu <----------------
document.querySelector("#menu-toggle").addEventListener("click", function () {
  this.classList.toggle("open");
});

// ---------------> Tabs <----------------
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs and contents
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    // Add active class to the clicked tab and corresponding content
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// ---------------> Sliders <----------------
if (swiperContainer) {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 4,
    spaceBetween: 32,

    pagination: {
      el: ".swiper-pagination"
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },

    scrollbar: {
      el: ".swiper-scrollbar"
    },

    breakpoints: {
      300: {
        slidesPerView: 1.25,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 32
      }
    }
  });
}

// ---------------> Header BG <----------------
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
