const max = document.getElementById("aumentar");
const min = document.getElementById("diminuir");
const cont = document.getElementById("contador");

let numGeral = 0;

max.addEventListener('click', function(){

    numGeral++;
    cont.textContent = numGeral;
});

min.addEventListener('click', function(){
    numGeral--;
    cont.textContent = numGeral;
});


const botaoCorFundo = document.getElementById("mudarCorFundo");
const fundo = document.getElementById("geral")

botaoCorFundo.addEventListener('click', function() {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
   
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

});

const mudarCorTitulo = document.getElementById("mudarCorTitulo");
const titulo = document.getElementById("Titulo")

mudarCorTitulo.addEventListener('click', function() {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
   
    titulo.style.color= `rgb(${r}, ${g}, ${b})`;

});

const mudarCorP = document.getElementById("mudarCorP");
const paragrafo = document.getElementById("paragrafo")

mudarCorP.addEventListener('click', function() {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
   
    paragrafo.style.color= `rgb(${r}, ${g}, ${b})`;

});

