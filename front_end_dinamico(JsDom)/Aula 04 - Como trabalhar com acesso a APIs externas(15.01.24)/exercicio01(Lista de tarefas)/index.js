const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");
const listContainer = document.getElementById("listContainer");
let lista = [];

addButton.addEventListener('click', onClickAdd);
removeButton.addEventListener('click', onClickRemove);
document.addEventListener('DOMContentLoaded', carregarLista);

function renderizar() {
    listContainer.innerHTML = '';
    lista.forEach((tarefa, index) => {
        const item = document.createElement('div');
        item.textContent = `${index + 1}. ${tarefa}`;
        listContainer.appendChild(item);
    });
}

function onClickAdd() {
    const strPrompt = prompt('Adicionar Tarefa');
    if (strPrompt && strPrompt.trim()) {
        lista.push(strPrompt);
        salvar();
        renderizar();
    }
}

function onClickRemove() {
    const tarefaToRemove = prompt('Digite o nome da tarefa que deseja remover');
    const indexToRemove = lista.findIndex(tarefa => tarefa.toLowerCase() === tarefaToRemove.toLowerCase());
    
    if (indexToRemove !== -1) {
        lista.splice(indexToRemove, 1);
        salvar();
        renderizar();
    } else {
        alert('Tarefa não encontrada. Certifique-se de digitar o nome corretamente.');
    }
}

function salvar() {
    localStorage.setItem('lista', JSON.stringify(lista));
}

function carregarLista() {
    const listaSalva = localStorage.getItem('lista');
    if (listaSalva) {
        lista = JSON.parse(listaSalva);
        renderizar();
    }
}

const btLight = document.getElementById('btLight')
const btDark= document.getElementById('btDark')
const btPrimary = document.getElementById('btPrimary')

btLight.addEventListener('click', onClickBtLight)
btDark.addEventListener('click', onClickBtDark)
btPrimary.addEventListener('click', onClickBtPrimary)

function onClickBtLight(){
    document.body.classList.remove('dark-mode', 'primary-mode');
    document.body.classList.add('light-mode');
}

function onClickBtDark(){
    document.body.classList.remove('light-mode', 'primary-mode');
    document.body.classList.add('dark-mode');
}

function onClickBtPrimary(){
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add('primary-mode');
}