$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<svg class='icon icon-circle-left'><use xlink:href='#icon-circle-left'></use></svg>",
    "<svg class='icon icon-circle-right'><use xlink:href='#icon-circle-right'></use></svg>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});

$(function() {
    var altura = window.innerHeight;
    $(".header").css('min-height', altura);
});