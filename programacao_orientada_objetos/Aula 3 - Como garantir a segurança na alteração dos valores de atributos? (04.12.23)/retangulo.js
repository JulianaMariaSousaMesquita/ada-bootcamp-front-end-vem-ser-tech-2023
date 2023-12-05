class Retangulo {
    // Atributos privados
    #largura;
    #altura;
  
    constructor(largura, altura) {
      this.#largura = largura;
      this.#altura = altura;
    }
  
    // Getter para obter a largura
    get largura() {
      return this.#largura;
    }
  
    // Setter para definir a largura com validação
    set largura(novaLargura) {
      if (novaLargura > 0) {
        this.#largura = novaLargura;
      } else {
        console.error("A largura deve ser um valor positivo.");
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
  
    // Método para calcular a área do retângulo
    calcularArea() {
      return this.#largura * this.#altura;
    }
  }
  
  // Exemplo de uso da classe Retangulo
  const meuRetangulo = new Retangulo(4, 6);
  console.log("Largura inicial:", meuRetangulo.largura);
  console.log("Altura inicial:", meuRetangulo.altura);
  
  meuRetangulo.largura = 8;
  meuRetangulo.altura = 10;
  
  console.log("Área do retângulo:", meuRetangulo.calcularArea());
  