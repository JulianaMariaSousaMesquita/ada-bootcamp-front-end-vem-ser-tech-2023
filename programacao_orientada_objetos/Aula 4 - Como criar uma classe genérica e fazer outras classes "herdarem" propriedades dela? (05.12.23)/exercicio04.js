// Defina uma classe chamada "Círculo" que tenha um atributo raio e métodos para calcular a área e o perímetro do círculo. Crie objetos de círculos com diferentes raios e exiba suas áreas e perímetros. ⭕📏📐
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