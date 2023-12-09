// 37. Desenvolva uma classe chamada "Câmera" com os atributos marca, modelo e resolução. Implemente um construtor para esta classe. Crie métodos para tirar fotos e gravar vídeos. Crie objetos de câmeras e teste os métodos.
class Camera {
    constructor(marca, modelo, resolucao) {
        this.marca = marca
        this.modelo = modelo
        this.resolucao = resolucao
        this.galeria = []
    }

    tirarFoto() {
        const foto = `Foto tirada com ${this.marca} ${this.modelo} (${this.resolucao})`
        this.galeria.push(foto)
        console.log(foto)
    }

    gravarVideo() {
        const video = `Vídeo gravado com ${this.marca} ${this.modelo} (${this.resolucao})`
        this.galeria.push(video)
        console.log(video)
    }

    exibirGaleria() {
        console.log(`Galeria de ${this.marca} ${this.modelo}:`)
        this.galeria.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`)
        })
    }
}

const camera1 = new Camera("Canon", "EOS Rebel T7", "24 MP")
const camera2 = new Camera("Sony", "Alpha A7III", "24.2 MP")

camera1.tirarFoto()
camera1.gravarVideo()
camera1.tirarFoto()

camera2.tirarFoto()
camera2.gravarVideo()
camera2.gravarVideo()
camera2.tirarFoto()

camera1.exibirGaleria()
camera2.exibirGaleria()
