// header_menu
let header_burger = document.querySelector('.header_burger');
let header_menu_bg = document.querySelector('.header_menu_bg');
let header_menu_close = document.querySelector('.header_menu_close');
let catalog_btn = document.querySelector('.catalog_btn');
let catalog_close = document.querySelector('.catalog_close');
let catalog_in = document.querySelector('.catalog_in');
let header_menu_link = document.querySelector('.header_menu_link');

header_burger.addEventListener('click', () => {
  header_menu_bg.classList.add('active')
})

header_menu_close.addEventListener('click', () => {
  header_menu_bg.classList.remove('active')
})

catalog_btn.addEventListener('click', () => {
  header_menu_link.classList.add('active');
  catalog_in.classList.add('active');
})

catalog_close.addEventListener('click', () => {
  header_menu_link.classList.remove('active');
  catalog_in.classList.remove('active');
})
// header_menu

// select
document.addEventListener("DOMContentLoaded", () => {
  const customSelect = document.getElementById("customSelect");

  if (customSelect) {
    const selectedOption = customSelect.querySelector(".selected");
    const optionsContainer = customSelect.querySelector(".select-options");
    const options = optionsContainer.querySelectorAll(".option");
    const icon = customSelect.querySelector(".icon");

    customSelect.addEventListener("click", (e) => {
      e.stopPropagation();
      if (optionsContainer) {
        optionsContainer.style.display = optionsContainer.style.display === "flex" ? "none" : "flex";
        if (icon) {
          icon.style.transform = optionsContainer.style.display === "flex" ? "rotate(180deg)" : "rotate(0deg)";
        }
      }
    });

    options.forEach(option => {
      option.addEventListener("click", (e) => {
        e.stopPropagation();
        if (selectedOption) {
          selectedOption.firstChild.textContent = option.textContent;
        }
        if (optionsContainer) {
          optionsContainer.style.display = "none";
        }
        if (icon) {
          icon.style.transform = "rotate(0deg)";
        }
      });
    });

    document.addEventListener("click", (e) => {
      if (!customSelect.contains(e.target)) {
        if (optionsContainer) {
          optionsContainer.style.display = "none";
        }
        if (icon) {
          icon.style.transform = "rotate(0deg)";
        }
      }
    });
  }
});

// select

// header_scroll
// Header behavior function
function initHeaderBehavior() {
  const header = document.querySelector(".page-header");
  const headerBottom = document.querySelector(".header_bottom");
  const toggleClass = "is-sticky";
  const menuBtn = document.querySelector(".menu_btn");
  const leftCatalog = document.querySelector(".catalog_absolute_left");
  const rightCatalog = document.querySelector(".catalog_absolute_right");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    const screenWidth = window.innerWidth;

    if (screenWidth <= 1250) {
      if (currentScroll > 60) {
        header.classList.add(toggleClass);
        menuBtn.classList.add('active');
        leftCatalog.classList.add('active');
        rightCatalog.classList.add('active');
        headerBottom.style.display = "none";
      } else {
        header.classList.remove(toggleClass);
        menuBtn.classList.remove('active');
        headerBottom.style.display = "none";
        leftCatalog.classList.remove('active');
        rightCatalog.classList.remove('active');
      }
    } else {
      if (currentScroll > 200) {
        header.classList.add(toggleClass);
        menuBtn.classList.add('active');
        leftCatalog.classList.add('active');
        rightCatalog.classList.add('active');
        // headerBottom.style.display = "block";
      } else {
        header.classList.remove(toggleClass);
        menuBtn.classList.remove('active');
        leftCatalog.classList.remove('active');
        rightCatalog.classList.remove('active');
        // headerBottom.style.display = "block";
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", initHeaderBehavior);

// header_scroll

// menu_btn
const menuBtnIn = document.querySelector(".menu_btn_in");

menuBtnIn.addEventListener("click", () => {
  menuBtnIn.classList.toggle("active");
});

// menu_btn

// catalog_absolute
let catalogAbsolute = document.querySelector('.catalog_absolute');
let catalogAbsoluteBtns = document.querySelectorAll('.catalog_absolute_btn');

catalogAbsoluteBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    catalogAbsolute.classList.toggle('active');
  });
});

// catalog_absolute

// filter
const filterButtons = document.querySelectorAll('.filter_btn');
const filterBgElements = document.querySelectorAll('.filter_bg');
const filterMenuCloseButtons = document.querySelectorAll('.filter_menu_close');

filterButtons.forEach((filter_btn, index) => {
  const filter_bg = filterBgElements[index];
  const filter_menu_close = filterMenuCloseButtons[index];

  filter_btn.addEventListener('click', () => {
    if (filter_bg) {
      filter_bg.classList.add('active');
    }
  });

  filter_menu_close.addEventListener('click', () => {
    if (filter_bg) {
      filter_bg.classList.remove('active');
    }
  });
});


document.querySelectorAll('.catalog_in_btn').forEach(function(button) {
  button.addEventListener('click', function() {
    const content = button.nextElementSibling;

    content.classList.toggle('active');
    button.classList.toggle('active');
  });
});

// filter

// home_slider
let home_slider = new Swiper(".home_Swiper", {
  loop: true,
  navigation: {
    nextEl: ".home-button-next",
    prevEl: ".home-button-prev",
  },
});
// home_slider

// lightgallery
// document.addEventListener('DOMContentLoaded', function() {
//   lightGallery(document.getElementById('lightgallery'), {
//     plugins: [lgZoom],
//     zoom: true,
//     mobileSettings: {
//       controls: true, // Mobileda boshqaruv elementlari
//       download: false,
//       zoom: true // Zoom funksiyasini yoqish
//     }
//   });
// });
// lightgallery

// product_slider
let product_slider = new Swiper(".productSlider", {
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
  },
});

document.querySelectorAll(".productCard").forEach((element, index) => {
  let swiper = new Swiper(element, {
    spaceBetween: 5,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    direction: "horizontal",
    breakpoints: {
      991: {
        spaceBetween: 15,
        direction: 'vertical',
      }
    }
  });

  let relatedElement = document.querySelectorAll(".productCard2")[index];
  if (relatedElement) {
    new Swiper(relatedElement, {
      effect: "fade",
      thumbs: {
        swiper: swiper,
      },
    });
  }
});
// product_slider

// portfolio
document.querySelectorAll(".portfolioSwiper").forEach((element, index) => {
  let swiperThumbs = new Swiper(element, {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      991: {
        slidesPerView: 5,
      },
    },
  });

  let mainSwiper = document.querySelectorAll(".portfolioSwiper2")[index];
  new Swiper(mainSwiper, {
    spaceBetween: 10,
    thumbs: {
      swiper: swiperThumbs,
    },
  });
});

let swiper = new Swiper(".portfolio_endSwiper", {
  slidesPerView: 1.2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".portfolio-button-next",
    prevEl: ".portfolio-button-prev",
  },
  breakpoints: {
    768: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    991: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
  },
});

let swiper2 = new Swiper(".portfolio_patterns", {
  slidesPerView: 1.2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".patterns-button-next",
    prevEl: ".patterns-button-prev",
  },
  breakpoints: {
    768: {
      spaceBetween: 10,
      slidesPerView: 2,
    },
    991: {
      spaceBetween: 20,
      slidesPerView: 4,
    },
  },
});

// portfolio


// footer
document.addEventListener('DOMContentLoaded', () => {
  const titles = document.querySelectorAll('.footer_block_title');

  function handleResize() {
      if (window.innerWidth <= 991) {
          titles.forEach(title => {
              title.addEventListener('click', toggleAccordion);
          });

          titles.forEach(title => {
              const link = title.nextElementSibling;
              link.classList.remove('active');
              link.style.height = '0';
              link.style.display = 'none';
          });
      } else {
          titles.forEach(title => {
              const link = title.nextElementSibling;
              const svg = title.querySelector('svg');
              link.classList.add('active');
              link.style.height = 'auto';
              link.style.display = 'block';
              svg.style.transform = 'rotate(0deg)';
          });

          titles.forEach(title => {
              title.removeEventListener('click', toggleAccordion);
          });
      }
  }

  function toggleAccordion(event) {
      const currentTitle = event.currentTarget;
      const currentLink = currentTitle.nextElementSibling;
      const currentSvg = currentTitle.querySelector('svg');

      titles.forEach(otherTitle => {
          const otherLink = otherTitle.nextElementSibling;
          const otherSvg = otherTitle.querySelector('svg');

          if (otherLink !== currentLink && otherLink.classList.contains('active')) {
              otherLink.classList.remove('active');
              otherLink.style.height = '0';
              otherLink.style.display = 'none';
              otherSvg.style.transform = 'rotate(0deg)';
          }
      });

      currentLink.classList.toggle('active');
      if (currentLink.classList.contains('active')) {
          currentLink.style.display = 'block';
          currentLink.style.height = currentLink.scrollHeight + 'px';
          currentSvg.style.transform = 'rotate(180deg)';
      } else {
          currentLink.style.height = '0';
          currentLink.style.display = 'none';
          currentSvg.style.transform = 'rotate(0deg)';
      }
  }

  window.addEventListener('resize', handleResize);
  handleResize();
});
// footer
