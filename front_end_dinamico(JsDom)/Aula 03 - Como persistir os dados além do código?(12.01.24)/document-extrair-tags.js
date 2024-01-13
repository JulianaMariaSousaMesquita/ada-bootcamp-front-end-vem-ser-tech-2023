let result

result = document.images
console.log('result: ', result)

result = document.images[0]
console.log('result: ', result)

result = document.images[1]
console.log('result: ', result)

result = document.links
console.log('result: ', result)

result = document.scripts
console.log('result: ', result)

result = document.getElementsByTagName('img') // Mesmo que result = document.images
console.log('result: ', result)

result = document.getElementsByClassName('borda')
console.log('result: ', result)

result = document.querySelectorAll('.borda') //mesmo que result = document.getElementsByClassName('borda'), porem gera um NodeList.
console.log('result: ', result)

const elemNodeList = document.querySelectorAll('.borda')
elemNodeList.forEach(element => {
    console.log('element elemNodeList',element)
})

const elemHTMLCollection = document.getElementsByClassName('borda')
// elemHTMLCollection.forEach(element => {
//     console.log('element elemHTMLCollection',element)
// }) //Não funciona, não tem forEach em HTMLCollection
const arrHTMLCollection = [...elemHTMLCollection]
arrHTMLCollection.forEach(element => {
    console.log('element arrHTMLCollection',element)
})