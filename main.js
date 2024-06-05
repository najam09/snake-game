// board
var blockSize = 25;
var rows = 20;
var cols =  20;
var board;
var context;

//snake head
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;
var velocityX = 0;
var VelocityY = 0;

var snakeBody = [];

//food
var foodX;
var foodY;

window.onload = function(){
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");

    placeFood();
    document.addEventListener('keyup', changeDirection);
    //update();
    setInterval(update, 1000/10);
}

function update(){
    context.fillStyle = "black"; 
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "red"; 
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if(snakeX == foodX && snakeY == foodY){
        snakeBody.push([foodX, foodY])
        placeFood();
    }

    for(let i = snakeBody.length-1; i>0; i--){
        snakeBody[i] = snakeBody[i-1];
    }
    if(snakeBody.length){
        snakeBody[0] = [snakeX, snakeY];
    }
    context.fillStyle = "lime"; 
    snakeX += velocityX * blockSize;
    snakeY += VelocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for(let i = 0; i < snakeBody.length; i++){
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

}

function changeDirection(e){
    if(e.code == "ArrowUp" ){
        velocityX = 0;
        VelocityY = -1;
    }
    if(e.code == "ArrowDown" ){
        velocityX = 0;
        VelocityY = 1;
    }
    if(e.code == "ArrowLeft" ){
        velocityX = -1;
        VelocityY = 0;
    }
    if(e.code == "ArrowRight" ){
        velocityX = 1;
        VelocityY = 0;
    }

}

function placeFood(){

    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * cols) * blockSize;
}
