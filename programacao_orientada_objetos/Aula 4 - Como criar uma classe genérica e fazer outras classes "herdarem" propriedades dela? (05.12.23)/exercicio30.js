// 30. Defina uma classe chamada "Casa" com os atributos endereço, número de quartos e valor. Implemente um construtor para esta classe. Crie um método para calcular o preço por metro quadrado da casa. Crie objetos de casas e teste o método de cálculo de preço.
class Casa {
    constructor(endereco, numeroQuartos, valor) {
        this.endereco = endereco
        this.numeroQuartos = numeroQuartos
        this.valor = valor
    }

    calcularPrecoPorMetroQuadrado(area) {
        const precoPorMetroQuadrado = this.valor / area
        return precoPorMetroQuadrado
    }
}

const casa1 = new Casa("Rua 25 de março, 123", 3, 300000)
const casa2 = new Casa("Avenida das Americas, 456", 4, 400000)

const areaCasa1 = 150
const areaCasa2 = 200

const precoPorMetroQuadradoCasa1 = casa1.calcularPrecoPorMetroQuadrado(areaCasa1)
const precoPorMetroQuadradoCasa2 = casa2.calcularPrecoPorMetroQuadrado(areaCasa2)

console.log(`O preço por metro quadrado da Casa 1 é R$ ${precoPorMetroQuadradoCasa1.toFixed(2)}`)
console.log(`O preço por metro quadrado da Casa 2 é R$ ${precoPorMetroQuadradoCasa2.toFixed(2)}`)
