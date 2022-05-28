const HeaderFixed = (function() {
  const init = function() {

    let countScroll = $(window).scrollTop(),
      headerElement = $('.header');

    if (countScroll > 10) {
      headerElement.addClass("is-fixed");
    } else {
      headerElement.removeClass("is-fixed");
    }

  };
  return {
    init: init
  };

})();

export default HeaderFixed;
