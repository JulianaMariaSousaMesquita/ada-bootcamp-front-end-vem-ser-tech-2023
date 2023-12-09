// Crie uma classe chamada "Casa" com os atributos endereço, número de quartos e área em metros quadrados. Adicione um construtor para inicializar esses atributos. Crie objetos de casas e imprima seus detalhes.
class Casa {
    constructor(endereco, quartos, area){
        this.endereco = endereco
        this.quartos = quartos
        this.area = area
    }
}

const casa01 = {
    endereco: "Rua das Hortencias, jardim arco iris - RJ",
    quartos: 2,
    area: 420
}

const minhaCasa01 = new Casa(casa01.endereco, casa01.quartos,casa01.area)
console.log(minhaCasa01)

const casa02 = {
    endereco: "Rua edna leite queiroz, arsenal - RJ",
    quartos: 1,
    area: 80
}

const minhaCasa02 = new Casa(casa02.endereco, casa02.quartos,casa02.area)
console.log(minhaCasa02)

const casa03 = {
    endereco: "Rua das Hortencias, jardim arco iris",
    quartos: 2,
    area: 420
}

const minhaCasa03 = new Casa(casa03.endereco, casa03.quartos,casa03.area)
console.log(minhaCasa03)
