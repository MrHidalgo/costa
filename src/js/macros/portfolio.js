const Portfolio = (function() {
  const init = function() {
    if(!document.querySelector('.portfolio')) return;

    for(let i = 1; i <= document.querySelectorAll('.portfolio__carousel').length; i++) {

      document.querySelectorAll('.portfolio__carousel')[i - 1].style.width = 'calc(100% + ' + (document.querySelector('#portfolio .c-grid').getBoundingClientRect().left + 20) + 'px)';

      new Swiper('.portfolioSwiper' + i, {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        speed: 1000,
        slidesPerView: 'auto',
        spaceBetween: 20,
        on: {
          init: function(swiper) {
            swiper.$el[0].style.opacity = '1';
          }
        }
      });
    }

    window.addEventListener('resize', (ev) => {
      for(let i = 1; i <= document.querySelectorAll('.portfolio__carousel').length; i++) {
        document.querySelectorAll('.portfolio__carousel')[i - 1].style.width = 'calc(100% + ' + (document.querySelector('#portfolio .c-grid').getBoundingClientRect().left + 20) + 'px)';
      }
    });
  };
  return {
    init: init
  };

})();

export default Portfolio;
