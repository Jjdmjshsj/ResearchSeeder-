function lupa(){
let lupa = document.querySelector('.lupa');
lupa.addEventListener('click',action);
}

function action(){
let pesquisa = document.querySelector('.pesquisa');
let close = document.querySelector('.close');
let perfil = document.querySelector('.perfil');
let menu2 = document.querySelector('.menu2');
let caixa = document.querySelector('.caixa');
let titulo = document.querySelector('.titulo');
close.addEventListener('click',reset);
pesquisa.style.display = 'flex';
close.style.display = 'flex';
perfil.style.display = 'none';
menu2.style.display = 'flex';
caixa.style.display = 'flex';
titulo.style.display = 'none';
}

function reset(){
let pesquisa = document.querySelector('.pesquisa');
    pesquisa.value ='';
}


window.addEventListener('load',lupa);





function load(){
alert('');
}
captureEvents(load);
