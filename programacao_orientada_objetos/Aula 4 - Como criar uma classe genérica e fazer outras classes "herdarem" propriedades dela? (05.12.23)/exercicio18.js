// 18. Crie uma classe chamada "Celular" com os atributos marca, modelo e armazenamento interno. Implemente um construtor para esta classe. Crie métodos para adicionar aplicativos ao celular e verificar o espaço disponível. Crie objetos de celulares e teste os métodos.
class Celular {
    constructor(marca, modelo, armazenamentoInterno) {
        this.marca = marca
        this.modelo = modelo
        this.armazenamentoInterno = armazenamentoInterno
        this.espacoDisponivel = armazenamentoInterno
        this.aplicativosInstalados = []
    }

    adicionarAplicativo(nome, tamanho) {
        if (tamanho <= 0) {
            console.log("O tamanho do aplicativo deve ser maior que zero.")
            return
        }

        if (tamanho > this.espacoDisponivel) {
            console.log("Espaço insuficiente para instalar o aplicativo.")
        } else {
            this.aplicativosInstalados.push(nome)
            this.espacoDisponivel -= tamanho
            console.log(`Aplicativo "${nome}" instalado com sucesso. Espaço restante: ${this.espacoDisponivel} MB`)
        }
    }

    verificarEspacoDisponivel() {
        console.log(`Espaço disponível: ${this.espacoDisponivel} MB`)
    }
}

const meuCelular = new Celular("Samsung", "Galaxy S21", 128)

meuCelular.adicionarAplicativo("WhatsApp", 20)
meuCelular.adicionarAplicativo("Instagram", 30)
meuCelular.verificarEspacoDisponivel()

meuCelular.adicionarAplicativo("JogoLegal", 150)
