class CaixaMagica {
    #itens = []
    #palavraMagica = 'abracadabra'
  
    #verificarPalavraMagica(palavra) {
      return palavra === this.#palavraMagica
    }
  
    adicionarItem(novoItem) {
      this.#itens.push(novoItem)
      console.log('Novo item adicionado à caixa mágica!')
    }
  
    abracadabra(palavra) {
      if (this.#verificarPalavraMagica(palavra)) {
        console.log('*** Itens Mágicos na Caixa ***')
        this.#itens.forEach((item, index) => {
          console.log(`${index + 1}. ${item}`)
        })
      } else {
        console.log('Ops! A palavra mágica está errada. A caixa faz uma dança divertida!')
      }
    }
  }
  
  const caixaMagica = new CaixaMagica()
  caixaMagica.adicionarItem('Varinha Mágica')
  caixaMagica.adicionarItem('Poção de Invisibilidade')  
  caixaMagica.abracadabra('palavraErrada')  
  caixaMagica.abracadabra('abracadabra')