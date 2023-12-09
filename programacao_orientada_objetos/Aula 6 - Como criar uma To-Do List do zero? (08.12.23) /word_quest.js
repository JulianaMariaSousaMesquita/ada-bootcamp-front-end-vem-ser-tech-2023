class JogoDePalavras {
    constructor() {
      this.palavrasCorretas = ["mágica", "feitiço", "encanto", "mistério"]
    }
  
    jogar(palavra) {
      return this.palavrasCorretas.includes(palavra)
    }
  }
  
  function verificarPalavra() {
    const palavraInserida = prompt("Insira uma palavra:").toLowerCase()
    const jogo = new JogoDePalavras()
  
    if (jogo.jogar(palavraInserida)) {
      console.log("Parabéns! Você encontrou a palavra mágica!")
    } else {
      console.log("Tente novamente! Essa não é a palavra correta.")
    }
  }

  verificarPalavra()
  