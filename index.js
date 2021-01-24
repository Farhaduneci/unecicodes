import "./assets/css/style.css";

const confetti = require('canvas-confetti');

const canvas = document.getElementById('confetti');

var myConfetti = confetti.create(canvas, {
  resize: true,
  useWorker: true
});

var colors = ['#bb0000', '#ffffff', '#D7BC4D', '#a864fd', '#29cdff'];

setTimeout(() => {
  let interval = setInterval(() => {
    myConfetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    });
    
    myConfetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    });
  }, 50);

  setTimeout(() => {
    clearInterval(interval);
  }, 4000);
}, 3000);