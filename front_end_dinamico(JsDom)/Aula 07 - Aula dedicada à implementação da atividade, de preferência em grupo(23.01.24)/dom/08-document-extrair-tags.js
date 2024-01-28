let result;

result = document.images;
result = document.links;
result = document.scripts;

result = document.getElementsByTagName('img');
const elemHTMLCollection = document.getElementsByClassName('borda');
const arrHTMLCollection = [...elemHTMLCollection];

const elemNodeList = document.querySelectorAll('.borda');

arrHTMLCollection.forEach(element => {
    console.log('element elemHTMLCollection: ', element)
}); 

/* elemNodeList.forEach(element => {
    console.log('element elemNodeList: ', element)
}); */

//console.log('result: ', result);