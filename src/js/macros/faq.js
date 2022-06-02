const Faq = (function() {
  const init = function() {

    $('.faq__block').on('click', (ev) => {
      if($(ev.currentTarget).hasClass('is-active')) {
        $(ev.currentTarget).removeClass('is-active');
        $(ev.currentTarget).siblings('.faq__block-content').slideUp(350);
      } else {
        $(ev.currentTarget).addClass('is-active');
        $(ev.currentTarget).siblings('.faq__block-content').slideDown(350);
      }
    });

  };
  return {
    init: init
  };

})();

export default Faq;
