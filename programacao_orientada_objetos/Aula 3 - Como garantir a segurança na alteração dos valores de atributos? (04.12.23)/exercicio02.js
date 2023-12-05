// Crie um objeto literal representando um círculo com os atributos raio e calcularÁrea (um método que calcula a área do círculo).
const circuloObjetoLiteral = {
    raio : 6,
    calcularÁrea (){
        return Math.PI * Math.pow(this.raio, 2)
    }
   
}

console.log(circuloObjetoLiteral)
console.log(circuloObjetoLiteral.calcularÁrea())

//classe
class Circulo {
    constructor(raio) {
        this.raio = raio
    }
    calcularArea() {
        return Math.PI * Math.pow(this.raio, 2);
    }
}

const circulo01 = new Circulo(12)
console.log(circulo01.raio)
console.log(circulo01.calcularArea())