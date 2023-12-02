class Circulo {
    constructor(x, y, diametro) {
        this.x = x;
        this.y = y;
        this.diametro = diametro;
    }

    // Mover círculo
    mover() {
        this.x -= 1;
        this.y += 1;

        // Condições para fazer as formas "quicarem" nas bordas da tela
        if (this.x > width || this.x < 0) {
            this.x = 50;
            this.y = 100;
        }
    }

    // Desenhar círculo
    desenhar () {
        ellipse(this.x, this.y, this.diametro);
    }    

}

const meuCirculo = new Circulo(50, 100, 30)

//função para iniciar as configurações e iniciar 
function setup() {
    createCanvas(400, 400);    
}

// função para desenhar e iniciar a animação
function draw() {
    background(220);    
    meuCirculo.desenhar();
    meuCirculo.mover();
}