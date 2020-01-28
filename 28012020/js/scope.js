let contador = 0
while(contador < 10) {
  console.log(`Conteo: ${contador}`)
  contador++
}

let peso = 120 // kg
let meta = 70 // kg
let contadorDias = 0

while(peso > meta) {
  hacerEjercicio()
  contadorDias++
}

function hacerEjercicio() {
  peso = peso - Math.ceil(Math.random() * 2)
}

console.log(`Cantidad de días de ejercicio: ${contadorDias}`)
var respuesta = document.querySelector(".respuesta")
respuesta.innerHTML = "Cantidad de días de ejercicio: " + contadorDias