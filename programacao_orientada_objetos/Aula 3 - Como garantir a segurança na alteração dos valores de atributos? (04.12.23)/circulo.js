class Circulo {
    // Atributo privado
    #raio;
  
    constructor(raio) {
      this.#raio = raio;
    }
  
    // Getter para obter o valor do raio
    get raio() {
      return this.#raio;
    }
  
    // Setter para definir o valor do raio com validação
    set raio(novoRaio) {
      if (novoRaio > 0) {
        this.#raio = novoRaio;
      } else {
        console.error("O raio deve ser um valor positivo.");
      }
    }
  
    // Método para calcular a área do círculo
    calcularArea() {
      return Math.PI * Math.pow(this.#raio, 2);
    }
  }
  
  // Exemplo de uso da classe Circulo
  const meuCirculo = new Circulo(5);
  console.log("Raio inicial:", meuCirculo.raio); // Acesso usando o getter
  
  meuCirculo.raio = 7; // Modificação usando o setter
  console.log("Raio modificado:", meuCirculo.raio);
  
  console.log("Área do círculo:", meuCirculo.calcularArea());
  