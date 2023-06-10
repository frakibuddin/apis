$(document).ready(function () {
  var owl = $("#owl-demo");

  owl.owlCarousel({
    items: 1, //10 items above 1000px browser width
    itemsDesktop: [1000, 1], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 1], // betweem 900px and 601px
    itemsTablet: [600, 1], //2 items between 600 and 0
    itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
    pagination: false,
  });

  // Custom Navigation Events
  $(".next").click(function () {
    owl.trigger("owl.next");
  });
  $(".prev").click(function () {
    owl.trigger("owl.prev");
  });

  $("#owl-demo2").owlCarousel({
    autoPlay: false, //Set AutoPlay to 3 seconds

    items: 8,
    itemsDesktop: [1399, 6],
    itemsDesktopSmall: [979, 4],
    itemsTablet: [600, 3],
    itemsMobile: true,
  });

  //about page brand slider
  $("#owl-brand-aboutPage").owlCarousel({
    autoPlay: false, //Set AutoPlay to 3 seconds
    items: 5,
    itemsDesktop: [1399, 5],
    itemsDesktopSmall: [979, 4],
    itemsTablet: [600, 3],
    itemsMobile: [450, 3],
  });

  // Custom Navigation Events
});
//tap to top btn
const tap_top_btn = document.querySelector(".tap-toTop");

window.onscroll = function () {
  let posHight = document.documentElement.scrollHeight;
  let pos = window.scrollY;

  if (pos > posHight - 3000) {
    tap_top_btn.classList.add("active");
  } else {
    tap_top_btn.classList.remove("active");
  }
};

// tap_top_btn.onclick = function () {
//   document.documentElement.scrollTop = 0;
// };

//sub menu
let dropdown_menu = document.querySelector(".dropdown-menu");
let dropDown_link = document.querySelector("#dropDown-link");

dropDown_link.onmouseover = () => {
  dropdown_menu.classList.add("show");
};
dropDown_link.onmouseleave = () => {
  dropdown_menu.classList.remove("show");
};

//preloader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".theme-loader").classList.add("fade-out");
  }, 100);
});
