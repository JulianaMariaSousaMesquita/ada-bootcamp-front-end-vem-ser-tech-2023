document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coleta os dados do formulário 1 a 1
    const email = document.getElementById('email').value;
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const cargo = document.getElementById('cargo').value;

    // Aqui você pode fazer algo com os dados, como enviar para um servidor
    console.log('Dados coletados:', { email, nome, idade, cargo });
});

// Adiciona um listener para o evento de clique no botão "Limpar Dados"
document.getElementById('limparDados').addEventListener('click', function() {
    // Obtém todos os campos do formulário
    const camposFormulario = document.querySelectorAll('#cadastroForm input, #cadastroForm select');

    // Reseta o valor de cada campo
    camposFormulario.forEach(campo => {
        campo.value = '';
    });    
});

function limparFormulario(){
    meuForm.reset();
}

function enviarFormulario(event){
    console.log('event: ',event)
    event.preventDefault()
    const thisForm = event.target

    const nome = thisForm.querySelector('#nome')
    const email = thisForm.querySelector('#email')
    const idade = thisForm.querySelector('#idade')
    const cargo = thisForm.querySelector('#cargo')

    console.log('Dados coletados:', { email, nome, idade, cargo });
}