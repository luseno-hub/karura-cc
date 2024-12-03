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
    // slidesPerView: 1,
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

// ---------------> Page scroll animatins <------------
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// ---------------> Progress Bar <----------------
function setProgress(element, percent) {
  const radius = 54; // Radius of the circle
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  // Update the progress bar stroke-dashoffset
  const progressBar = element.querySelector(".progress-bar");
  progressBar.style.strokeDashoffset = offset;

  // Update the text
  const progressText = element.querySelector(".progress-text");
  progressText.textContent = `${percent}%`;
}

// Animate progress
const progressContainer = document.querySelector(".progress-container");

// Simulate loading progress
let progress = 0;
const interval = setInterval(() => {
  if (progress > 100) {
    clearInterval(interval);
  } else {
    setProgress(progressContainer, progress);
    progress += 1;
  }
}, 50); // Update every 50ms
