let result

result = window.scrollY
history.scrollRestoration = 'manual'
window.scrollTo(0,458)

window.addEventListener('scroll', function(){
    result = window.scrollY
    console.log('results: ',result)
})

console.log('results: ',result)