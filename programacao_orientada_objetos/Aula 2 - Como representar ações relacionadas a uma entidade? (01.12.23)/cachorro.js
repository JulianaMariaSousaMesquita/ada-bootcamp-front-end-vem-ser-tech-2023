// Classe Cachorro com métodos
class Cachorro {
    constructor(nome, raca, idade) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }

    latir() {
        console.log(`${this.nome} está latindo!`);
    }

    dormir() {
        console.log(`${this.nome} está dormindo... Zzz...`);
    }
}

// Exemplo de uso da classe com métodos
const meuCachorro = new Cachorro("Buddy", "Golden Retriever", 3);
meuCachorro.latir();
meuCachorro.dormir();