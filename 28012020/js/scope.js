let contador = 0
while(contador < 10){
    console.log(contador)
    contador++
}

let peso = 120
let meta = 70

while(peso > meta){
    hacerEjercicio()
    peso++
}

function hacerEjercicio(){
    peso = peso - Math.ceil(Math.random() * 2)
}
console.log(`Cantidad de dias de ejericio ${contador}`)