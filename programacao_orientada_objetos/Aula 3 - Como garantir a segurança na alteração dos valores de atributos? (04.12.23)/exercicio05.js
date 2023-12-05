// Crie uma classe chamada "Retângulo" com os atributos "largura" e "altura" e um método chamado "calcularÁrea" que retorna a área do retângulo.
class Retangulo{
    constructor(largura, altura){
        this.largura = largura
        this.altura = altura
    }
    calcularÁrea(){
        return this.altura * this.largura
    }
}

const retagunlo01 = new Retangulo(4,6)
console.log(retagunlo01.calcularÁrea())

const retagunlo02 = new Retangulo(12,24)
console.log(retagunlo02.calcularÁrea())
