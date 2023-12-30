Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

$(function () {
  var mixer = mixitup(".directions__list");

  $(".directions__filter-btn").on("click", function () {
    $(".directions__filter-btn").removeClass("directions__filter-btn--active");
    $(this).addClass("directions__filter-btn--active");
  });

  $(".team__slider").slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable: false,
    waitForAnimate: false,
    dots: true,
    dotsClass: "slick-dots",
  });

  $(".team__slider-prev").on("click", function (e) {
    e.preventDefault();
    $(".team__slider").slick("slickPrev");
  });

  $(".team__slider-next").on("click", function (e) {
    e.preventDefault();
    $(".team__slider").slick("slickNext");
  });


  $(".test__slider").slick({
    arrows: false,
    infinite: true,
    draggable: false,
    waitForAnimate: false,
    dots: true,
    dotsClass: "slick-dots",
  });

  $(".test__slider-prev").on("click", function (e) {
    e.preventDefault();
    $(".test__slider").slick("slickPrev");
  });

  $(".test__slider-next").on("click", function (e) {
    e.preventDefault();
    $(".test__slider").slick("slickNext");
  });






});
