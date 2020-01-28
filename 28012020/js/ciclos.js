for (let contador = 0; contador < 10; contador++){
    console.log(`Primero `, contador)
}

let contador = 0
for (; contador < 10; contador++){
    console.log(`Segundo `, contador)
}

var diasDeLaSemana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']

console.log("for conociendo el valor del total de items")
for(let i = 0; i < 7; i++){
    console.log(diasDeLaSemana[i])
}

console.log("for .lenght -------")
var listaDeAmigos = ['Juan','Marta','Miguel','Sara','John','Viviana','Amparo','Paola', 'Kevin']
const totalNumeroAmigos = listaDeAmigos.length
for(let i = 0; i < totalNumeroAmigos; i++){
    console.log(listaDeAmigos[i])
}

console.log("forEach -------------")
listaDeAmigos.forEach(function (itemNombreAmigo){
    console.log(itemNombreAmigo)
})

console.log("for -------------")
for(let nombreAmigo of listaDeAmigos){
    console.log(nombreAmigo)
}

console.log("for en un indice-------------")
for(let i in listaDeAmigos){
    console.log(listaDeAmigos[i])
}
