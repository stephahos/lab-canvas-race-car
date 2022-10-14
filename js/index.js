/* gameArea-Canvas*/
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const gameIntro = document.querySelector('.game-intro');

const road = new Image();
road.src = '../images/road.png';
const car = new Image();
car.src = '../images/car.png';

let carMouvement = 0;
let startingCarPosition = (canvas.width / 2) - 35;
let carX = startingCarPosition;

window.onload = () => {
  ctx.drawImage(road, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(car, (canvas.width / 2) - 35, canvas.height - 150, 70, 120);
  document.getElementById('start-button').onclick = () => {
    startGame();
    gameIntro.style.display = 'none';
    canvas.style.display = 'block';
  };
}

const moveCar = () => {
  if (carX + carMouvement <= canvasWidth - 50 && carX + carMouvement >= 0) {
    carX += carMouvement;
  }
}

  function startGame() {

  document.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') {
       }  })
      }
