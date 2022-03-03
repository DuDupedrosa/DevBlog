import MenuMobile from "./modules/menu-mobile.js";

const menuMobile = new MenuMobile(
  "[data-menu]",
  '[data-menu="btn"]',
  '[data-menu="list"]',
  "active-menu"
);
menuMobile.init();
