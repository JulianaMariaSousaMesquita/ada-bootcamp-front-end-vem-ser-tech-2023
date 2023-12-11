// Definindo as classes
class GameController {
    constructor() {
      this.player = new Player();
      this.match = new Match();
      this.score = 0;
      this.theme = "Animais"; // Tema do jogo
    }
  
    startGame() {
      this.match.generateSecretWord();
      console.log(`Jogo iniciado. Tema: ${this.theme}`);
      this.displayGameState();
    }
  
    restartGame() {
      this.player = new Player();
      this.match = new Match();
      this.score = 0;
      console.log("Jogo reiniciado.");
      this.startGame();
    }
  
    displayGameState() {
      console.log(`Palavra: ${this.match.getRevealedWord()}`);
      console.log(`Tentativas Restantes: ${this.match.remainingAttempts}`);
      console.log(`Pontuação: ${this.score}`);
    }
  
    makeGuess() {
      this.player.makeGuess();
      this.match.revealLetter(this.player.guess);
      this.displayGameState();
  
      const gameState = this.match.checkGameState();
      if (gameState === "won") {
        this.score += 10;
        console.log("Parabéns! Você venceu!");
        this.restartGame();
      } else if (gameState === "lost") {
        console.log("Você perdeu! Tente novamente.");
        this.restartGame();
      }
    }
  }
  
  class Player {
    constructor() {
      this.guess = "";
    }
  
    makeGuess() {
      // Lógica para que o jogador faça um palpite (pode ser interação com o DOM em um projeto real)
      this.guess = prompt("Digite uma letra:");
    }
  }
  
  class Match {
    constructor() {
      this.secretWord = "";
      this.revealedLetters = [];
      this.remainingAttempts = 6;
    }
  
    generateSecretWord() {
      // Lógica para gerar a palavra secreta (pode buscar em uma API externa em um projeto real)
      this.secretWord = "elefante"; // Exemplo estático
      this.revealedLetters = new Array(this.secretWord.length).fill("_");
    }
  
    revealLetter(letter) {
      // Lógica para revelar uma letra correta
      if (this.secretWord.includes(letter)) {
        for (let i = 0; i < this.secretWord.length; i++) {
          if (this.secretWord[i] === letter) {
            this.revealedLetters[i] = letter;
          }
        }
      } else {
        this.remainingAttempts--;
      }
    }
  
    checkGameState() {
      // Lógica para verificar se o jogo foi vencido, perdido ou continua
      if (this.remainingAttempts === 0) {
        return "lost";
      } else if (!this.revealedLetters.includes("_")) {
        return "won";
      } else {
        return "continue";
      }
    }
  
    getRevealedWord() {
      return this.revealedLetters.join(" ");
    }
  }
  
  // Inicializando o jogo
  const gameController = new GameController();
  gameController.startGame();
  