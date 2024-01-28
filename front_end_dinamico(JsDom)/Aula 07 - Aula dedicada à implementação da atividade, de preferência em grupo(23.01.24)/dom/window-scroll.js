let result;

history.scrollRestoration = 'manual';

//window.scrollTo(0,458);

window.addEventListener('scroll' , function(){
    result = window.scrollY;
    console.log('result: ', result);
} );





