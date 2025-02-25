let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo =10;


console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto) {
   let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarIntento() {
   let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  
   if (numeroDeUsuario === numeroSecreto) {
      asignarTextoElemento("p", acertaste el número en ${intentos} ${(intentos === 1) ? "vez"});
   } else {
      if (numeroDeUsuario > numeroSecreto) {
         asignarTextoElemento("p", "El número secreto es menor");
      } else {
         asignarTextoElemento("P", "El número secreto es mayor");

      }
      
   }

 return;  
}

function generarNumeroSecreto() {
   return Math.floor(Math.random()*10)+1;

   

}

asignarTextoElemento("h1", "juego del número secreto");
asignarTextoElemento("p", "Indica un número del 1 al 10");