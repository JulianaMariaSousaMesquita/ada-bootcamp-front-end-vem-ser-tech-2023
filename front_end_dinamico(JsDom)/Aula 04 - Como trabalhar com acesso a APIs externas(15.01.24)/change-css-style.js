const btLight = document.getElementById('btLight')
const btDark= document.getElementById('btDark')
const btPrimary = document.getElementById('btPrimary')

btLight.addEventListener('click', onClickBtLight)
btDark.addEventListener('click', onClickBtDark)
btPrimary.addEventListener('click', onClickBtPrimary)

function onClickBtLight(){
    // document.body.style.backgroundColor = "#ffffff"
    // document.body.style.color = "#000000"
    document.body.classList.remove('dark-mode', 'primary-mode');
    document.body.classList.add('light-mode');
}

function onClickBtDark(){
    // document.body.style.backgroundColor = "#000000"
    // document.body.style.color = "#ffffff"
    // document.body.style.borderColor = "#ffffff"
    document.body.classList.remove('light-mode', 'primary-mode');
    document.body.classList.add('dark-mode');
}

function onClickBtPrimary(){
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add('primary-mode');
}