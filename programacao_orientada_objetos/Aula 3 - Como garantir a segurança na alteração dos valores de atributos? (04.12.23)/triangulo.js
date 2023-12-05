class Triangulo {
    // Atributos privados
    #base;
    #altura;
  
    constructor(base, altura) {
      this.#base = base;
      this.#altura = altura;
    }
  
    // Getter para obter a base
    get base() {
      return this.#base;
    }
  
    // Setter para definir a base com validação
    set base(novaBase) {
      if (novaBase > 0) {
        this.#base = novaBase;
      } else {
        console.error("A base deve ser um valor positivo.");
      }
    }
  
    // Getter para obter a altura
    get altura() {
      return this.#altura;
    }
  
    // Setter para definir a altura com validação
    set altura(novaAltura) {
      if (novaAltura > 0) {
        this.#altura = novaAltura;
      } else {
        console.error("A altura deve ser um valor positivo.");
      }
    }
  
    // Método para calcular a área do triângulo
    calcularArea() {
      return (this.#base * this.#altura) / 2;
    }
  }
  
  // Exemplo de uso da classe Triangulo
  const meuTriangulo = new Triangulo(5, 8);
  console.log("Base inicial:", meuTriangulo.base);
  console.log("Altura inicial:", meuTriangulo.altura);
  
  meuTriangulo.base = 6;
  meuTriangulo.altura = 10;
  
  console.log("Área do triângulo:", meuTriangulo.calcularArea());
  