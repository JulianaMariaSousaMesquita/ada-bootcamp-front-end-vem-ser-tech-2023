// Crie uma classe chamada "TriânguloRetângulo" com os atributos base e altura. Adicione um construtor para inicializar esses atributos. Implemente um método para calcular a hipotenusa do triângulo (Teorema de Pitágoras). Crie objetos de triângulos retângulos e calcule suas hipotenusas. 
class TrianguloRetangulo {
    constructor(base, altura) {
        this.base = base
        this.altura = altura
    }

    calcularHipotenusa() {
        const hipotenusa = Math.sqrt(Math.pow(this.base, 2) + Math.pow(this.altura, 2))
        return hipotenusa
    }
}

const triangulo1 = new TrianguloRetangulo(3, 4)
const hipotenusa1 = triangulo1.calcularHipotenusa()
console.log(`A hipotenusa do triângulo com base 3 e altura 4 é: ${hipotenusa1}`)

const triangulo2 = new TrianguloRetangulo(5, 12)
const hipotenusa2 = triangulo2.calcularHipotenusa()
console.log(`A hipotenusa do triângulo com base 5 e altura 12 é: ${hipotenusa2}`)
