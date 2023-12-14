class ChefSecreto {
    #receita = []
    #ingredientesCorretos = ['ingrediente1', 'ingrediente2', 'ingrediente3']

    #verificarIngredientesCorretos() {
      return (
        this.#receita.length === this.#ingredientesCorretos.length &&
        this.#receita.every((ingrediente, index) => ingrediente === this.#ingredientesCorretos[index])
      )
    }
  
    adicionarIngrediente(novoIngrediente) {
      this.#receita.push(novoIngrediente)
      console.log('Novo ingrediente adicionado à receita secreta!')
    }
  
    revelarReceita() {
      if (this.#verificarIngredientesCorretos()) {
        console.log('*** Receita Secreta ***')
        console.log('Passos para o prato famoso:')
      } else {
        console.log('Haha! Você adicionou os ingredientes errados. Este não é o prato que procura!')
      }
    }
  }
  
  const chefMisterioso = new ChefSecreto()
  
  chefMisterioso.adicionarIngrediente('ingrediente1')
  chefMisterioso.adicionarIngrediente('ingrediente2')  
  chefMisterioso.revelarReceita() 
  chefMisterioso.adicionarIngrediente('ingrediente3')
  chefMisterioso.revelarReceita()