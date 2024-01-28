const isLogin = localStorage.getItem( "login" )


if(isLogin){
    console.log('já existe');
}else{
    console.log('ainda não existe');
}


localStorage.setItem( "login" , "murilo flesch" );
localStorage.removeItem("login");



console.log(localStorage.getItem( "login" ));

