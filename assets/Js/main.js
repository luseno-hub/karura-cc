// ---------------> Variables <----------------
const body = document.querySelector("body");
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");
// const swiperContainer = document.querySelector(".swiper");
const swiperContainers = document.querySelectorAll(".swiper");
const navBar = document.querySelector(".header__navbar");
const navUl = navBar.querySelector("ul");
const menuToggle = document.querySelector("#menu-toggle");
const isMobile = window.matchMedia("(max-width: 1199px)").matches;

// ---------------> Hamburger menu <----------------
menuToggle &&
  menuToggle.addEventListener("click", function () {
    this.classList.toggle("open");

    if (this.classList.contains("open") && isMobile) {
      //show the menu
      navBar.classList.add("nav-open");
      body.classList.add("no-scroll");

      if (navBar.classList.contains("nav-open")) {
        navUl.classList.add("ul-open");
      } else {
        // navUl.classList.remove("ul-open");
      }
    } else {
      navBar.classList.remove("nav-open");
      navUl.classList.remove("ul-open");
      body.classList.remove("no-scroll");
    }
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

if (swiperContainers.length) {
  swiperContainers.forEach((container) => {
    // Parse breakpoints from the data attribute
    const breakpoints = container.dataset.breakpoints
      ? JSON.parse(container.dataset.breakpoints)
      : {};

    const swiperConfig = {
      direction: "horizontal",
      loop: true,
      spaceBetween: 32,

      pagination: {
        el: container.querySelector(".swiper-pagination"),
        clickable: true
      },

      navigation: {
        nextEl: container.querySelector(".swiper-button-next"),
        prevEl: container.querySelector(".swiper-button-prev")
      },

      scrollbar: {
        el: container.querySelector(".swiper-scrollbar"),
        draggable: true
      },

      breakpoints // Use dynamic breakpoints
    };

    new Swiper(container, swiperConfig);
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
// Load entire document first
document.addEventListener("DOMContentLoaded", () => {
  function setProgress(element, percent) {
    const radius = 54; // Radius of the circle
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;

    // Update the progress bar stroke-dashoffset
    const progressBar = element.querySelector(".progress-bar");
    const progressText = element.querySelector(".progress-text");

    if (!progressBar || !progressText) {
      console.error("Missing .progress-bar or .progress-text in the element.");
      return;
    }

    progressBar.style.strokeDashoffset = offset;
    progressText.textContent = `${percent}%`;
  }

  // Animate progress
  const progressContainer = document.querySelector(".progress-container");

  if (!progressContainer) {
    console.error("Progress container not found.");
    return;
  }

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
});
