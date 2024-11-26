import Ball from './classes/Ball.js';
import Player from './classes/Player.js';

const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');

const ball = new Ball(320, 200, 10, "red");
const player1 = new Player(10, 200, 5, 80, "blue");
const player2 = new Player(630, 200, 5, 80, "blue");

let leftPlayerY = player1.y;
let rightPlayerY = player2.y;

canvas.addEventListener('mousemove', (event) => {

    const canvasRect = canvas.getBoundingClientRect();
    const mouseY = event.clientY - canvasRect.top;

    leftPlayerY = mouseY;
    rightPlayerY = mouseY;

    if (leftPlayerY < 0) leftPlayerY = 0;
    if (leftPlayerY + player1.height > canvas.height) leftPlayerY = canvas.height - player1.height;

    if (rightPlayerY < 0) rightPlayerY = 0;
    if (rightPlayerY + player2.height > canvas.height) rightPlayerY = canvas.height - player2.height;

    player1.y = leftPlayerY;
    player2.y = rightPlayerY;
});


function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    ball.move();
    player1.move(leftPlayerY, canvas.height);
    player2.move(rightPlayerY, canvas.height);

    ball.bounce(canvas.width, canvas.height);

    if (ball.x - ball.radius < player1.x + player1.width &&
        ball.y > player1.y &&
        ball.y < player1.y + player1.height) {
        ball.speedX = -ball.speedX;
    }
    
    if (ball.x + ball.radius > player2.x &&
        ball.y > player2.y &&
        ball.y < player2.y + player2.height) {
        ball.speedX = -ball.speedX;
    }

    ball.draw(context);
    player1.draw(context);
    player2.draw(context);

    requestAnimationFrame(gameLoop);
}

gameLoop();
