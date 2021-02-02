/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
export const navSlide = () => {
  const nav = document.querySelector('.nav__links');
  const navLinks = document.querySelectorAll('.nav__links li');
  const burger = document.querySelector('.burger');

  nav.classList.toggle('nav-active');

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / navLinks.length + 0.5
      }s`;
    }
  });

  burger.classList.toggle('toggle');
};
