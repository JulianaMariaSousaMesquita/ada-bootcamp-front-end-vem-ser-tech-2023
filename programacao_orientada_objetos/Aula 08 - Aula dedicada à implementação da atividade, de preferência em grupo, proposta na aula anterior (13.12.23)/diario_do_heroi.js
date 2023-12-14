class DiarioDoHeroi {
    #segredos = []
    #missões = []
    #senhaCorreta = 'supersecreta'
  
    #verificarSenha(senha) {
      return senha === this.#senhaCorreta
    }
  
    adicionarSegredo(novoSegredo) {
      this.#segredos.push(novoSegredo)
      console.log('Novo segredo adicionado ao diário!')
    }
  
    adicionarMissao(novaMissao) {
      this.#missões.push(novaMissao)
      console.log('Nova missão adicionada ao diário!')
    }
  
    leiaDiario(senha) {
      if (this.#verificarSenha(senha)) {
        console.log('*** Diário do Herói ***')
        console.log('Segredos:')
        this.#segredos.forEach((segredo, index) => {
          console.log(`${index + 1}. ${segredo}`)
        })
        console.log('Missões:')
        this.#missões.forEach((missao, index) => {
          console.log(`${index + 1}. ${missao}`)
        })
      } else {
        console.log('Surpresa! Você não pode ler o diário sem a senha secreta!')
      }
    }
  }
  
  const diarioDoSuperHeroi = new DiarioDoHeroi()
  
  diarioDoSuperHeroi.adicionarSegredo('Tenho um fraqueza por cookies.')
  diarioDoSuperHeroi.adicionarMissao('Salvar o mundo pela milésima vez.')
  
  diarioDoSuperHeroi.leiaDiario('senhaErrada')

  diarioDoSuperHeroi.leiaDiario('supersecreta')