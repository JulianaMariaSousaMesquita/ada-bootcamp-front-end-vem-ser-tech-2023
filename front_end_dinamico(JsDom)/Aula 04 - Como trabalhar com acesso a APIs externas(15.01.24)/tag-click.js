document.body.addEventListener('click', function(event){
    console.log(`evento: : `, event)
    console.log(`target: `, event.target)
    console.log(`currentTarget: `, event.currentTarget)
})

const btTop = document.getElementById('back-to-top')

// btTop.addEventListener('click', function(event){
//     console.log(`evento btTop: : `, event)
//     window.scrollTo(0,0);
// })

btTop.addEventListener('click', onclickBtTop.bind(this, 'meuTextop'))

function onclickBtTop(param, event){
    console.log('param: ', param)
    console.log('event: ', event)
    window.scrollTo(0,0)
}