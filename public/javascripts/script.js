document.addEventListener('DOMContentLoaded', () => {

}, false);

const nav = document.querySelector('nav');
document.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});