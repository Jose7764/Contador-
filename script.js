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

function mudarFundo(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
   
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

botaoCorFundo.addEventListener('click', function() {
   mudarFundo();
});

const mudarCorTitulo = document.getElementById("mudarCorTitulo");
const titulo = document.getElementById("Titulo")

function mudarTituloCor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
   
    titulo.style.color= `rgb(${r}, ${g}, ${b})`;
}

mudarCorTitulo.addEventListener('click', function() {
  mudarTituloCor();
});

const mudarCorP = document.getElementById("mudarCorP");
const paragrafo = document.getElementById("paragrafo")

function mudarParagraCor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
   
    paragrafo.style.color= `rgb(${r}, ${g}, ${b})`;
}

mudarCorP.addEventListener('click', function() {
  mudarParagraCor();
});

    const fontes = [
      "Roboto", "Lato", "Montserrat", "Open Sans", "Oswald",
      "Raleway", "Poppins", "Merriweather", "Ubuntu", "Inconsolata",
      "PT Sans", "Dancing Script", "Rubik", "Playfair Display", "Fira Sans"
    ];

    const linkFonts = document.getElementById("googleFontsLink");

    function fonteAleatoria() {
      return fontes[Math.floor(Math.random() * fontes.length)];
    }

    function aplicarFonte(elemento, fonte) {
      linkFonts.href = `https://fonts.googleapis.com/css2?family=${fonte.replace(/ /g, '+')}&display=swap`;
      elemento.style.fontFamily = `'${fonte}', sans-serif`;
    }

    document.getElementById("btnTitulo").addEventListener("click", () => {
      aplicarFonte(titulo, fonteAleatoria());
    });

    document.getElementById("btnParagrafo").addEventListener("click", () => {
      aplicarFonte(paragrafo, fonteAleatoria());
    });

     document.getElementById("btnTudo").addEventListener("click", () => {
      mudarFundo();
      mudarParagraCor();
      mudarTituloCor();

    });
