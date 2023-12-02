// Classe FormaGeometrica com métodos
class FormaGeometrica {
    constructor(tipo, cor, lado1 = 0, lado2 = 0, lado3 = 0) {
        this.tipo = tipo;
        this.cor = cor;
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    calcularArea() {
        return 0; // Lógica para calcular a área da forma geométrica
    }

    calcularPerimetro() {
        return 0; // Lógica para calcular o perímetro da forma geométrica
    }
}

// Métodos adicionados à classe FormaGeometrica para calcular área e perímetro
class FormaGeometricaComMetodos extends FormaGeometrica {
    calcularArea() {
        if (this.tipo === "Triângulo") {
            // Lógica específica para calcular a área de um triângulo
            return (this.lado1 * this.lado2) / 2;
        } else {
            // Lógica para outras formas geométricas
            return 0;
        }
    }

    calcularPerimetro() {
        return this.lado1 + this.lado2 + this.lado3;
    }
}

// Exemplo de uso da classe com métodos
const meuTriangulo = new FormaGeometricaComMetodos("Triângulo", "Azul", 5, 7, 8);
console.log(`Área do triângulo: ${meuTriangulo.calcularArea()}`);
console.log(`Perímetro do triângulo: ${meuTriangulo.calcularPerimetro()}`);