Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

$(function () {
  var mixer = mixitup(".directions__list");

  $(".directions__filter-btn").on("click", function () {
    $(".directions__filter-btn").removeClass("directions__filter-btn--active");
    $(this).addClass("directions__filter-btn--active");
  });

  $('.team__slider').slick({
    slidesToShow: 4,
    infinite: true,
    // draggable: false,
    appendArrows: $('.team__slider-arrows'),

  });
});
