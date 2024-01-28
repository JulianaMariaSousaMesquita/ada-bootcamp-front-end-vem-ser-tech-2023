let result;
let result2;

window.addEventListener( 'resize' , function(){
    result = window.innerWidth;
    result2 = window.outerWidth;

    if(result < 900){
        console.log('mobile: ');
    }else{
        console.log('desktop: ');
    }
} );



