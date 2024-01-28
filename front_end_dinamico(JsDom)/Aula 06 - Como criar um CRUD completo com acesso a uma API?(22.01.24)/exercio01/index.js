const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");

const listContainer = document.getElementById("listContainer");

let lista =  JSON.parse(  localStorage.getItem("lista")) || [];


renderizar();

addButton.addEventListener('click', onClickAdd)
removeButton.addEventListener('click', onClickRemove)


function renderizar(){
    listContainer.innerHTML = '';
    
    lista.forEach(item => {
        const elementP =   document.createElement('p');
        elementP.innerText = item;
        listContainer.appendChild(elementP);
    })
}

function onClickAdd(){
    
    const strPrompt = prompt('Add tarefa');
    
    if( strPrompt.trim() ){
        lista.push(strPrompt)
        salvar();
        renderizar();
    }
   
    console.log('strPrompt:', lista)
}

function onClickRemove(){
    const promptText = prompt("Qual o index deseja remover?");

    //const result = lista.indexOf(promptText )
    lista.splice(promptText,1);
    salvar();
    renderizar();
}

function salvar(){
    localStorage.setItem( 'lista',JSON.stringify(lista));
}