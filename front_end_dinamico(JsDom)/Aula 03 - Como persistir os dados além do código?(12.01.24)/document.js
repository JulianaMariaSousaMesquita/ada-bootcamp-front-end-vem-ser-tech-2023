let result
result = document.body

result = document.getElementById("tabela1")
console.log('result: ', result)

result = document.querySelector("#tabela1")
console.log('result: ', result)

result = document.querySelector(".borda")
console.log('result: ', result)

result = document.querySelector("[target]")
console.log('result: ', result)

result = document.querySelector("[target='_blank']")
console.log('result: ', result)

result = document.querySelector("h1").innerText
console.log('result: ', result)

result = document.querySelector("h1").textContent
console.log('result: ', result)

result = document.querySelector("h1").textContent
console.log('result: ', result)

result = document.querySelector("h1")
result.innerText = 'Novo titulo' 
console.log('result: ', result)

const idade = 30
document.querySelector("tabela1").innerHTML += `
<tr>
<th> Nome <th>
<th> ${idade} <th>
</tr>`

document.createElement()

function criarConteudo(elemeStr){
    const elemP = document.createElement(elemeStr)
    elemP.innerText = "Texto dinamico"
    return elemP
}

result = criarConteudo('div')
result = criarConteudo('h1')
result = criarConteudo('p')
console.log('result: ', result)

const elementPai = document.body
elementPai.appendChild(result)
console.log('elementPai: ', elementPai)


