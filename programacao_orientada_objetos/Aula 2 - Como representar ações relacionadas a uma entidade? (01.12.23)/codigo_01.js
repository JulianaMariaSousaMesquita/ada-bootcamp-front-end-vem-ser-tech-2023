//Refatorar para uma classe
let xCirculo = 50;  // Posição inicial do círculo no eixo X
let yCirculo = 100; // Posição inicial do círculo no eixo Y
let diametro = 30;  // Diâmetro do círculo

//função para iniciar as configurações e iniciar 
function setup() {
  createCanvas(400, 400);
}

// função para desenhar e iniciar a animação
function draw() {
  background(220);

  // Desenhar círculo
  ellipse(xCirculo, yCirculo, diametro);

  // Mover círculo
  xCirculo += 1;
  yCirculo += 1;

  // Condições para fazer as formas "quicarem" nas bordas da tela
  if (xCirculo > width || xCirculo < 0) {
    xCirculo = 50;
    yCirculo = 100;
  }

}