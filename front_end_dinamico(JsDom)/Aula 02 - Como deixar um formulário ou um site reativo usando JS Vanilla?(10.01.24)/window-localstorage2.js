const usuario = {
    nome: "Juliana",
    idade: 28,
    email: "mesquita.juliana1995@gmail.com"
}

localStorage.setItem("user", JSON.stringify(usuario))

const usuario2 = JSON.parse(localStorage.getItem("user"))

console.log(usuario)
console.log(JSON.stringify(usuario))
console.log(usuario2)