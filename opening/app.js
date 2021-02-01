const svg = document.querySelector('svg');
svg.setAttribute('id', 'logo');

const logo = document.querySelectorAll("svg path");

for (let i = 0 ; i < logo.length ; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
}