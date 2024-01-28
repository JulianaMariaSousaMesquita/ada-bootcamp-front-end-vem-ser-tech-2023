/* document.body.addEventListener( 'click' ,  function(event){
    console.log('e: ', event)
    console.log('target: ', event.target)
    console.log('currentTarget: ', event.currentTarget)
} ); */


const btTop = document.getElementById('back-to-top');

/* btTop.addEventListener( 'click' ,  function(event){
    window.scrollTo(0,0);
} ); */

btTop.addEventListener( 'click' , onClickBtTop.bind(this,'meuTexto') );

function onClickBtTop(param,event){
    console.log('param: ', param);
    console.log('event: ', event);
    window.scrollTo(0,0);
}