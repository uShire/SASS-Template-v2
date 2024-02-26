const burgir = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");
burgir.addEventListener("click", () => {
  burgir.classList.toggle("open");
  headerNav.classList.toggle("open");
});

const header = document.querySelector(".header");
const backTop = document.querySelector(".backTotop");
window.console.log;
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    header.classList.add("open");
    backTop.classList.add("open");
  } else {
    header.classList.remove("open");
    backTop.classList.remove("open");
  }
});
