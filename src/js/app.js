import Common from "./common/common";
import HeaderFixed
  from "./macros/headerFixed";
import HamburgerMenu
  from "./macros/hamburgerMenu";


// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {

  // COMMON
  Common.initLoad();

  // MACROS
  HeaderFixed.init();
  HamburgerMenu.init();

}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {

  HeaderFixed.init();

}, false);
