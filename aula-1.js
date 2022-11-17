let imagemEstada;
let imagemAtor;
let imagemCarro;

//carro
let xCarro = 600;

//ator
let yAtor = 366;

function preload(){
  imagemEstada = loadImage("imagem/estrada.png");
  imagemAtor = loadImage("imagem/ator-1.png");
  imagemCarro = loadImage("imagem/carro-1.png")
}

function setup() {
    createCanvas(500, 400);
}

function draw() {
  background(imagemEstada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
}

function mostraAtor(){
  image(imagemAtor,100, yAtor,30,30);
}


function mostraCarro(){
  image(imagemCarro,xCarro,40,50,40);
}

function movimentaCarro(){
  xCarro = xCarro - 2;
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor = yAtor - 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor = yAtor + 3;
  }
}