/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
export const navSlide = () => {
  console.log('là');
  const nav = document.querySelector('.nav__links');
  const navLinks = document.querySelectorAll('.nav__links li');
  console.log('navLinks:', navLinks);

  nav.classList.toggle('nav-active');

  navLinks.forEach((link, index) => {
    link.style.animation = `navLinkFade 0.5s ease forwards ${index / navLinks.length + 0.5}s`;
    console.log(index / navLinks.length + 0.2);
  });
};
