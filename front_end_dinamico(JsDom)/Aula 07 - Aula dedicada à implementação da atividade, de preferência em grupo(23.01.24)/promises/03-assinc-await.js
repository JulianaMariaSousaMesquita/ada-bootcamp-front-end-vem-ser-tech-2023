
const updateValue = (text) => {
    const elementP = document.createElement('p');

    const promise = new Promise(  (resolve,reject) => {
        setTimeout( ()=>{
            if(text === ''){
                reject('Está vazio!');
            }else{
                elementP.innerHTML += text;
                resolve(elementP);
            }
        } , 2000  ); 
    });

    return promise;
}



//const init2 = async ()=>{}
//IIFE
//(async()=>{})()
async function init(){
    const element1 = await updateValue("São Paulo");
    document.body.appendChild(element1);

    const element2= await updateValue("Rio");
    document.body.appendChild(element2);

    const element3 = await updateValue("Salvador");
    document.body.appendChild(element3);
}

init();


updateValue("São Paulo")
    .then( (element1)=> {
        document.body.appendChild(element1);
    })
    .then( (element2)=> {
        document.body.appendChild(element2);
    })



updateValue("São Paulo").then( (element1)=> {
    document.body.appendChild(element1);
})

updateValue("São Paulo").then( (element2)=> {
    document.body.appendChild(element2);
})











function mostrarErro(){
    document.body.innerHTML = '<p> Aconteceu um erro! </p>'
}
function mostrarCorreto(texto){
    document.body.innerHTML = `<p> ${texto} </p>`
}