// Crie uma classe chamada "Retângulo" com os atributos largura e altura. Adicione um construtor para inicializar esses atributos. Implemente um método para calcular a área do retângulo. Crie objetos de retângulos com diferentes dimensões e exiba suas áreas. 🟩📏
class Retangulo{
    constructor(largura, altura){
        this.largura = largura
        this.altura = altura
    }
    calcularArea() {
        return this.largura * this.altura;
      }
}

const retangulo01 = new Retangulo(4, 6);
retangulo01.calcularArea()

const retangulo02 = new Retangulo(24, 48);
retangulo02.calcularArea()