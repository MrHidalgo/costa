const HamburgerMenu = (function() {
  const init = function() {

    const btn = document.querySelector("[hamburger-js]"),
      btnClose = document.querySelector('.menu__close'),
      hideScrollContainer = document.querySelectorAll("html, body"),
      mobileContainer = document.querySelector("[mobile-block-js]");

    /**
     * @description
     */
    btn.addEventListener("click", (ev) => {
      const elem = ev.currentTarget;

      elem.classList.toggle("is-active");
      mobileContainer.classList.toggle("is-open");

      hideScrollContainer.forEach((val, idx) => {
        val.classList.toggle("is-hideScroll");
      });

    });

    btnClose.addEventListener('click', (ev) => {

      btn.classList.remove("is-active");
      mobileContainer.classList.remove("is-open");
      mobileContainer.classList.add("is-animated");

      hideScrollContainer.forEach((val, idx) => {
        val.classList.remove("is-hideScroll");
      });

      setTimeout(() => mobileContainer.classList.remove("is-animated"), 300);

    }, false);

  };
  return {
    init: init
  };

})();

export default HamburgerMenu;
