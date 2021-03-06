let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box,
};
let direction = "right";
let food = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box,
};

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

function drawFood() {
  context.fillStyle = "red";
  context.fillRect(food.x, food.y, box, box);
}
document.addEventListener("keydown", update);

function update(event) {
  if (event.keyCode == 37 && direction != "right") direction = "left";
  if (event.keyCode == 38 && direction != "down") direction = "up";
  if (event.keyCode == 39 && direction != "left") direction = "right";
  if (event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo() {
  if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
  if (snake[0].x < 0 * box && direction == "left") snake[0].x = 16 * box;
  if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
  if (snake[0].y < 0 * box && direction == "up") snake[0].y = 16 * box;

  for(i=1;i<snake.length;i++){
    if(snake[0].x  == snake[i].x && snake[0].y == snake[i].y){
      clearInterval(jogo);
      alert('Game Over :(');
    }
  }

  criarBG();
  criarCobrinha();
  drawFood();

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
  if(snakeX != food.x || snakeY != food.y){ 
  //  Remove o último elemento de uma matriz e o retorna. Se a matriz estiver vazia, undefined é retornado e a matriz não é modificada.
  //aumentando o tamanho da cobrinha
  snake.pop();
  }else{
    //alterar a posicao da comida apos colisao
    food.x = Math.floor(Math.random() * 15 + 1) * box;
    food.y = Math.floor(Math.random() * 15 + 1) * box;    
  }

  let newHead = {
    x: snakeX,
    y: snakeY,
  };
  //  Insere novos elementos no início de uma matriz e retorna o novo comprimento da matriz.
  snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);
