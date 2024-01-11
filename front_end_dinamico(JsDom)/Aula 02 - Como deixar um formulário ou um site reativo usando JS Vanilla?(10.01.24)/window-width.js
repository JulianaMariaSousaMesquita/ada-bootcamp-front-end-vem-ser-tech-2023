alert("Ola mundo!")

let result
let result2

result = window.innerWidth
result2 = window.outerWidth

window.addEventListener('resize',function(){})

console.log('result: ',result)
console.log('result2: ',result2)

if(result < 900){
    console.log('mobile: ')
}else{
    console.log('desktop: ')
}
