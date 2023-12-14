class Letra {
    constructor() {
    }
}

class Tabuleiro {
    constructor() {
    }
}

class Jogo {
    constructor() {
    }
}

class JogoDePalavras extends Jogo {
    constructor() {
      super()
    }
}

class WordQuest {
    jogar(modo) {
      if (modo === 'facil') {
      } else if (modo === 'intermediario') {
      } else if (modo === 'dificil') {
      } else if (modo === 'pesadelo') {
      } else {
        throw new Error('Modo de jogo desconhecido!');
      }
    }
  }

class DesafioDePalavras extends Puzzle {
    constructor() {
      super();
    }
  
    resolver() {
    }
}