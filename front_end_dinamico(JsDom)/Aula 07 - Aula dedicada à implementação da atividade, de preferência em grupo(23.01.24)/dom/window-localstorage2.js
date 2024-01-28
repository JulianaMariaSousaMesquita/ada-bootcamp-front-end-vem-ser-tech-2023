const usuario = {
    nome: "João",
    idade:25,
    email: "joao@gmail.com"
}

const usuarioStr = JSON.stringify(usuario);

localStorage.setItem("usuario", usuarioStr)




const usuarioCadastrado = JSON.parse(  localStorage.getItem("usuario")    ) 



console.log('usuarioCadastrado: ', usuarioCadastrado.idade)
