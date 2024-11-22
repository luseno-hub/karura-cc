// ---------------> Variables <----------------
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");
const swiperContainer = document.querySelector(".swiper");

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
    }
  });
}

// ---------------> Header BG <----------------
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 200) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
