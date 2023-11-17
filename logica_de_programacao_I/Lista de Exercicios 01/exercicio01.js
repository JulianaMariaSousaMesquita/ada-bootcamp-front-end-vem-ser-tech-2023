// Exercício 1 - Crie uma função que receba como parâmetro a lista de hotifrutis abaixo que tem três tipos: frutas, legumes e verduras, faça com que essa função retorne o número de itens de cada um desses tipos.
// Sendo que:
// fruta → banana, maçã, abacaxi, melancia, laranja, limão.
// legume → cenoura, batata, brócolis, abóbora, tomate, alho-poró.
// verdura → alface, espinafre, rúcula, couve, agrião, acelga.
// const hotifrutis = ['banana', 'agrião', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão','cenoura', 'melancia', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró', 'alface', 'espinafre', 'rúcula', 'couve', 'acelga', 'maçã', 'batata' ];

function hotifrutis (lista){
  let fruta = ["banana", "maçã", "abacaxi", "melancia", "laranja", "limão"]
  let legume = ["cenoura", "batata", "brócolis", "abóbora", "tomate", "alho-poró"]
  let verdura  = ["alface", "espinafre", "rúcula", "couve", "agrião", "acelga"]
  let contadorFruta = 0
  let contadorLegume = 0
  let contadorVerdura = 0
  
  for(let i = 0; i < fruta.length; i++){
    if(lista.includes(fruta[i])){
      contadorFruta++
    }
  }

  for(let i = 0; i < legume.length; i++){
    if(lista.includes(fruta[i])){
      contadorLegume++
    }
  }

  for(let i = 0; i < verdura.length; i++){
    if(lista.includes(verdura[i])){
      contadorVerdura++
    }
  }

  return `Tem ${contadorFruta} frutas, ${contadorLegume} legumes e ${contadorVerdura} verduras.`
}

const listaCompras = ['banana', 'agrião', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão','cenoura', 'melancia', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró', 'alface', 'espinafre', 'rúcula', 'couve', 'acelga', 'maçã', 'batata' ];

console.log(hotifrutis(listaCompras))