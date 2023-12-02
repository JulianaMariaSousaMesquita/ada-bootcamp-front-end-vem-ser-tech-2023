// Classe Carro com métodos
class Carro {
    constructor(marca, modelo, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.velocidade = 0;
    }

    acelerar() {
        this.velocidade += 10;
        console.log(`${this.modelo} acelerou para ${this.velocidade} km/h.`);
    }

    frear() {
        this.velocidade -= 5;
        console.log(`${this.modelo} freou para ${this.velocidade} km/h.`);
    }
}

// Exemplo de uso da classe com métodos
const meuCarro = new Carro("Toyota", "Corolla", "Prata");
meuCarro.acelerar();
meuCarro.frear();