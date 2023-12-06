// 8. Crie uma classe chamada "Triângulo" com os atributos lado1, lado2 e lado3. Adicione um construtor para inicializar esses atributos. Implemente um método para verificar se os lados formam um triângulo válido (a soma de dois lados deve ser maior que o terceiro) e outro método para calcular a área do triângulo. Teste com diferentes conjuntos de lados. 📐🔍
class triangulo{
    constructor(lado1, lado2, lado3){
        this.lado1 = lado1
        this.lado2 = lado2
        this.lado3 = lado3
    }
    verificarTriangulo() {
        return (
            this.lado1 + this.lado2 > this.lado3 &&
            this.lado1 + this.lado3 > this.lado2 &&
            this.lado2 + this.lado3 > this.lado1
        );
    }
    calcularArea() {
        if (this.verificarTriangulo()) {
            const s = (this.lado1 + this.lado2 + this.lado3) / 2;
            const area = Math.sqrt(s * (s - this.lado1) * (s - this.lado2) * (s - this.lado3));
            return area;
        } else {
            return 'Não é um triângulo válido (a soma de dois lados não é maior que o terceiro), não é possível calcular a área.';
        }
    }
}

const triangulo01 = new Triangulo(3, 4, 5);
console.log('É um triângulo válido?', triangulo01.verificarTriangulo());
console.log('Área:', triangulo01.calcularArea());