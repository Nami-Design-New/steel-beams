$(document).ready(function () {});

$(document).ready(function () {
  $(".preloader").delay(1200).fadeOut(300);

  if ($(window).width() > 768) {
    $("section").each(function () {
      const sectionDivs = $(this).find("[data-aos]");
      sectionDivs.each(function (index) {
        if (!$(this).attr("data-aos-delay")) {
          $(this).attr("data-aos-delay", (index + 1) * 50);
        }
      });
    });
  }

  AOS.init({
    offset: 20,
    delay: 50,
    duration: 750,
    once: true,
  });

  const counterUp = window.counterUp.default;
  const callback = (entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting && !el.classList.contains("is-visible")) {
        counterUp(el, {
          duration: 3000,
          delay: 16,
        });
        el.classList.add("is-visible");
      }
    });
  };
  const IO = new IntersectionObserver(callback, { threshold: 1 });
  const elements = document.querySelectorAll(".counterUp");
  elements.forEach((el) => IO.observe(el));
});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".navbar");
  header.classList.toggle("sticky", window.scrollY > 0);
});

var historySlider = new Swiper(".historySlider", {
  pagination: {
    el: ".historyPagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".historyNext",
    prevEl: ".historyPrev",
  },
  slidesPerView: "auto",
  spaceBetween: 0,
  speed: 1000,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
    1800: {
      slidesPerView: 6,
    },
  },
});

const toggler = document.querySelector(".toggler");
const nav = document.querySelector(".nav_links");

const links = document.querySelectorAll(".nav_links a");

toggler.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
