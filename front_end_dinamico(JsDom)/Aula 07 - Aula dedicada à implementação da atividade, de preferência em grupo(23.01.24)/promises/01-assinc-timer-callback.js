const updateValue = (text,callback) => {
    const elementP = document.createElement('p');

    setTimeout( ()=>{
        elementP.innerHTML += text + ' ';
        callback(elementP)
    } , 2000)
}



updateValue('Porto Alegre', (element)=> {
    document.body.appendChild(element);
});












/* const logo = "logo"


sair(logo, () => {
    entrar("outroElemento");
 })


 function sair(element, callback){
    callback();
 } */