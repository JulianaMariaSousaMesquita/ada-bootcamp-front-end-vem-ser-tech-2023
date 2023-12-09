// Crie uma classe chamada "Jogo" com os atributos nome, gênero e classificação etária. Implemente um construtor para esta classe. Crie objetos de jogos e exiba suas informações. 🎮🕹️📢
class Jogo {
    constructor(nome, genero, classificacaoEtaria) {
        this.nome = nome
        this.genero = genero
        this.classificacaoEtaria = classificacaoEtaria
    }
}

const jogo1 = new Jogo("The Legend of Zelda: Breath of the Wild", "Aventura", "E10+")
const jogo2 = new Jogo("FIFA 22", "Esportes", "E")

console.log(`Jogo 1: ${jogo1.nome}, Gênero: ${jogo1.genero}, Classificação: ${jogo1.classificacaoEtaria}`)
console.log(`Jogo 2: ${jogo2.nome}, Gênero: ${jogo2.genero}, Classificação: ${jogo2.classificacaoEtaria}`)
