const piedra = document.getElementById("Piedra")
const tijera = document.getElementById("Tijera")
const papel = document.getElementById("Papel")

const ganador = document.getElementById("ganador")

let valorPiedra = 1;
let valorTijera = 2;
let valorPapel = 3;

let eleccion = 0;
let cpu = 0;

piedra.addEventListener("click", eligePiedra)
tijera.addEventListener("click", eligeTijera)
papel.addEventListener("click", eligePapel)


function eligePiedra(){
  eleccion = valorPiedra
  cpu = Math.ceil(Math.random() * 3);

  if(eleccion == valorPiedra && cpu == valorPiedra){
    ganador.textContent = "EMPATE"
  }else if(eleccion == valorPiedra && cpu == valorTijera){
  ganador.textContent = "JUGADOR"
  }else if(eleccion == valorPiedra && cpu == valorPapel){
  ganador.textContent = "CPU"
  }
}
function eligeTijera(){
  eleccion = valorTijera
  cpu = Math.ceil(Math.random() * 3);

  if(eleccion == valorTijera && cpu == valorPiedra){
    ganador.textContent = "CPU"
    }else if(eleccion == valorTijera && cpu == valorTijera){
    ganador.textContent = "EMPATE"
    }else if(eleccion = valorTijera && cpu == valorPapel){
    ganador.textContent = "JUGADOR"
    }
}
function eligePapel(){
  eleccion = valorPapel
  cpu = Math.ceil(Math.random() * 3);

    if(eleccion == valorPapel && cpu == valorPiedra){
    ganador.textContent = "JUGADOR"
  
    }else if(eleccion == valorPapel && cpu == valorTijera){
    ganador.textContent = "CPU"

    }else if(eleccion == valorPapel && cpu == valorPapel){
    ganador.textContent = "EMPATE"
 
    }
}



