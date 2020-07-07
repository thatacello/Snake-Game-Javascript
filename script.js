let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; //é o tamanho de cada pixel
let snake = [];
snake[0] ={
    x: 8 * box,
    y: 8 * box
}

function criarBG(){
    context.fillStyle = "black";
    context.fillRect(0, 0, 16 * box, 16 * box); //desenha o retângulo onde entará o jogo
}

function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "pink";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarBG();
criarCobrinha();