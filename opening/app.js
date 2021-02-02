const svg = document.querySelector('svg');
svg.setAttribute('id', 'logo');

const logo = document.querySelectorAll("svg path");

for (let i = 0 ; i < logo.length ; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
}

// window.onload = function() {
//   setTimeout(showMessage, 3000)
// };

const showMessage = () => {
  console.log('je suis dans showMessage');
  document.getElementById('opening__enter').setAttribute('style', 'display: block');
};