let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; //é o tamanho de cada pixel

function criarBG(){
    context.fillStyle = "lightpink";
    context.fillRect(0, 0, 16 * box, 16 * box); //desenha o retângulo onde entará o jogo
}

criarBG();