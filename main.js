let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box,
};
let direction = "right";

function criarBG() {
  context.fillStyle = "lightgreen";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
  for (i = 0; i < snake.length; i++) {
    context.fillStyle = "green";
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

function iniciarJogo() {
  criarBG();
  criarCobrinha();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  switch (direction) {
    case "right":
      snakeX += box;
      break;

    case "left":
      snakeX -= box;
      break;

    case "up":
      snakeY -= box;
      break;
      
    case "down":
      snakeY += box;
      break;

    default:
      break;
  }
  //  Remove o último elemento de uma matriz e o retorna. Se a matriz estiver vazia, undefined é retornado e a matriz não é modificada.
   snake.pop();

   let newHead = {
     x: snakeX,
     y: snakeY
   }
  //  Insere novos elementos no início de uma matriz e retorna o novo comprimento da matriz.
   snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);
