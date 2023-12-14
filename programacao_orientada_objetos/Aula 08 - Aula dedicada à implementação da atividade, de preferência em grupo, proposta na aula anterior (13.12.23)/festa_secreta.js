class FestaSecreta {
    #local
    #hora
    #senhaCorreta = 'abracadabra'
  
    constructor(local, hora) {
      this.#local = local
      this.#hora = hora
    }

    #verificarSenha(senha) {
      return senha === this.#senhaCorreta
    }
  
    obterLocal(senha) {
      if (this.#verificarSenha(senha)) {
        return this.#local
      } else {
        return 'Ops! Parece que você não conhece o feitiço secreto para entrar na festa.'
      }
    }
  
    obterHora(senha) {
      if (this.#verificarSenha(senha)) {
        return this.#hora
      } else {
        return 'Hocus Pocus! Senha errada, tente novamente para descobrir o horário da festa.'
      }
    }
  }

  const festaMagica = new FestaSecreta('Bosque Encantado', 'Meia-noite')
  
  console.log(festaMagica.obterLocal('senhaErrada'))
  console.log(festaMagica.obterHora('outraSenhaErrada'))

  console.log(festaMagica.obterLocal('abracadabra'))
  console.log(festaMagica.obterHora('abracadabra'))
  