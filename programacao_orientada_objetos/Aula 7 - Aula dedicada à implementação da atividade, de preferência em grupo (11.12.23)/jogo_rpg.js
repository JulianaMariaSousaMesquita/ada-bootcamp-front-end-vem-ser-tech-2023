class JogoRPG {
    constructor(pontuacao, nome){
        this.pontuacao = pontuacao + 1
        this.nome = nome
    }
    mostrar(){
        console.log(this.pontuacao)
    }
}

const personagem = new JogoRPG(10, 'teste')
personagem.mostrar()