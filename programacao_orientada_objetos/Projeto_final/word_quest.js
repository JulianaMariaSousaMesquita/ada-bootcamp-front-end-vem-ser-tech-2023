const frasesFacil = ["O sol está brilhando no céu azul.", "Eu gosto de comer pizza no jantar.", "Meu gato gosta de brincar com bolas coloridas."]
const frasesIntermediario = ["Apesar dos desafios, ela persistiu e alcançou seus objetivos.", "O filme, embora longo, foi incrivelmente envolvente e emocionante.", "A viagem proporcionou não apenas diversão, mas também oportunidades de aprendizado significativas."]
const frasesDificil = ["A intricada tessitura da realidade revela-se àqueles que contemplam as nuances da existência.", "A efemeridade da felicidade humana muitas vezes se manifesta nas efusões fugazes da alegria cotidiana.", "A sutil amalgama de melancolia e esperança permeia os recantos mais profundos da alma humana."]
const frasesPesadelo = ["No pálido crepúsculo dos horizontes metafísicos, as quimeras efêmeras entrelaçam-se na tessitura intricada do ser.", "A eflorescência da ephemeralidade sutiliza-se nas sinuosidades etéreas do inconsciente, desdobrando-se em miríades de significados furtivos.", "Sob a égide da efemeridade, o zéfiro sussurra enigmas nas dobras etéreas do continuum, desvelando uma cosmogonia insondável.l"]

class Letra {
  #letra

  constructor(letra) {
    this.#letra = letra
  }

  get letra() {
    return this.#letra
  }

  set letra(novaLetra) {
    this.#letra = novaLetra
  }
}

class Tabuleiro {
  #celulas

  constructor() {
    this.#celulas = []
  }

  get celulas() {
    return this.#celulas
  }

  adicionarCelula(celula) {
    this.#celulas.push(celula)
  }
}

class Jogo {
  #pontuacao

  constructor() {
    this.#pontuacao = 0
  }

  get pontuacao() {
    return this.#pontuacao
  }

  incrementarPontuacao() {
    this.#pontuacao += 10
  }
}

class JogoDePalavras extends Jogo {
  constructor() {
    super()
    this.palavrasEncontradas = []
  }

  adicionarPalavraEncontrada(palavra) {
    this.palavrasEncontradas.push(palavra)
    this.incrementarPontuacao()
  }

  verificarPalavraNoTabuleiro(palavra, tabuleiro) {
    return tabuleiro.includes(palavra)
  }
}

class WordQuest {
  constructor() {
    this.jogoAtual = null
  }

  jogarFacil() {

  }

  jogarIntermediario() {

  }

  jogarDificil() {

  }

  jogarPesadelo() {

  }

  jogar(modo) {
    if (modo === 'facil') {
      this.jogarFacil()
    } else if (modo === 'intermediario') {
      this.jogarIntermediario()
    } else if (modo === 'dificil') {
      this.jogarDificil()
    } else if (modo === 'pesadelo') {
      this.jogarPesadelo()
    } else {
      throw new Error('Modo de jogo desconhecido!')
    }
  }

  iniciarJogo(modo) {
    this.jogoAtual = new JogoDePalavras()
    this.jogoAtual.modo = modo
    this.exibirJogo()
  }

  exibirJogo() {
    document.getElementById('jogo-container').style.display = 'block'
    this.inicializarTabuleiro()
  }

  inicializarTabuleiro() {
    let frase;
    switch (this.jogoAtual.modo) {
      case 'facil':
        frase = frasesFacil[Math.floor(Math.random() * frasesFacil.length)];
        break;
      case 'intermediario':
        frase = frasesIntermediario[Math.floor(Math.random() * frasesIntermediario.length)];
        break;
      case 'dificil':
        frase = frasesDificil[Math.floor(Math.random() * frasesDificil.length)];
        break;
      case 'pesadelo':
        frase = frasesPesadelo[Math.floor(Math.random() * frasesPesadelo.length)];
        break;
      default:
        throw new Error('Modo de jogo desconhecido!');
    }
    const letrasFrase = frase.split('');
    console.log(letrasFrase);
  }

  tentarPalavra() {
    const letraInput = document.getElementById('letraInput').value
  }
}

class DesafioDePalavras extends Desafio {
  constructor() {
    super()
  }

  resolver() {
  }
}