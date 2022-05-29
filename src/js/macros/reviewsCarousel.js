const ReviewsCarousel = (function() {
  const init = function() {

    new Swiper('.reviews__carousel .swiper', {
      loop: false,
      speed: 1250,
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: '.reviews__carousel .swiper-pagination',
        type: 'bullets',
        clickable: true
      },
    });

  };
  return {
    init: init
  };

})();

export default ReviewsCarousel;
