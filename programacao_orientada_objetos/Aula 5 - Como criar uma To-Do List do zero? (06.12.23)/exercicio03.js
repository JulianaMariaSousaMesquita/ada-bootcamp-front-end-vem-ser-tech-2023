//🎮 Exercício 3: Console de Jogos Retro - Projete uma classe `ConsoleRetro` com atributos como nome, ano de lançamento e jogos disponíveis. Adicione métodos para `adicionarJogo()` e `jogar()`.
class ConsoleRetro {
    constructor(nome, anoLancamento) {
        this.nome = nome
        this.anoLancamento = anoLancamento
        this.jogosDisponiveis = []
    }

    adicionarJogo(nomeJogo) {
        this.jogosDisponiveis.push(nomeJogo)
        console.log(`Jogo "${nomeJogo}" adicionado ao console ${this.nome}.`)
    }

    jogar(nomeJogo) {
        if (this.jogosDisponiveis.includes(nomeJogo)) {
            console.log(`Iniciando o jogo "${nomeJogo}" no console ${this.nome}.`)
        } else {
            console.log(`O jogo "${nomeJogo}" não está disponível no console ${this.nome}.`)
        }
    }
}

const consoleRetro = new ConsoleRetro("Super RetroBox", 1990)

consoleRetro.adicionarJogo("Super Mario Bros")
consoleRetro.adicionarJogo("The Legend of Zelda")
consoleRetro.adicionarJogo("Street Fighter II")

consoleRetro.jogar("Super Mario Bros")
consoleRetro.jogar("Mega Man")
