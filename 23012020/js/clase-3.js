var alumno = 'Juan'
//var horaDeLLegada = prompt(`Ingrese la hora de llegada`)
var horaDeLLegada = 11
var horaLimiteDeLlegada = 10
var trajoExcusa = false

// if (condiciones a evaluar) {
//Nuestro codigo o sentencias a evaluar
//}

if (horaDeLLegada > horaLimiteDeLlegada) {

    if (trajoExcusa) {
        console.log(`${alumno} No tiene una falla!`)
    }
    else {
        console.log(`${alumno} tiene una falla`)
    }

}
else if (horaDeLLegada === horaLimiteDeLlegada) {
    console.log(`${alumno} casi se queda afuera`)
}
else if (horaDeLLegada <= 8) {
    console.log(`${alumno} llegó muy temprano`)
}
else {
    console.log(`${alumno} llegó a tiempo.`)
}

var galon = 1000
var totalAPagar = 0

function gasolina(cantidad, dia, hora) {
    cantidad = parseInt(cantidad)
    hora = parseInt(hora)
    if (dia === "lunes") {
        totalAPagar = cantidad * galon * 1.10
    } else if (dia === "miercoles") {
        totalAPagar = (cantidad * galon) - 100
    }
    else if (dia === "viernes" && (hora >= 15 && hora <= 18)) {
        totalAPagar = (cantidad * (galon * 150))
    }
    else if (dia === "sabado" || dia === "domingo") {
        totalAPagar = (cantidad * galon * 1.20)
    }
    else {
        totalAPagar = (cantidad * galon)
    }
    console.log(`Total a Pagar: ${totalAPagar}`)
}

function calcularValorGasolina(cantidadGalones, nombreDia, horaDeLLegada) {

    var valorGalon = 1000
    var valorTotal = 0

    switch (nombreDia) {
        case 'Lunes':
            valorGalon = valorGalon * 1.10
            break
        case 'Miercoles':
            valorGalon = valorGalon - 100
            break
        case 'Viernes':
            if (horaDeLLegada >= 15 && horaDeLLegada <= 18) {
                valorGalon = valorGalon - 150
            }
            break
        case 'Sabado':
        case 'Domingo':
            valorGalon = valorGalon + (valorGalon * 20 / 100)
            break
        default: //si la cantidad es numero par 
            //Si el numero es par %2 --> el residuo de la division
            if (cantidadGalones % 2 === 0) {

            }
    }
    return valorGalon * cantidadGalones
}



var inputCantidadGalones = document.querySelector('#cantidadGalones')
var inputDiaSemana = document.querySelector('#diaSemana')
var inputHoraDeLlegada = document.querySelector('#horaDeLlegada')

document.querySelector('form').addEventListener('submit', function (event) {

    event.preventDefault();//se detiene el funcionamiento por defecto (enlaces y formularios)

    if (esValido()) {
        var valorGasolina = calcularValorGasolina(parseFloat(inputCantidadGalones.value), inputDiaSemana.value, parseInt(inputHoraDeLlegada.value)
        )

        console.log('El valor de la gasolina es de $ ' + valorGasolina)

        var salida = document.querySelector('#salida')
        salida.innerHTML = `<h1>El valor de la gasolina es de <span style="color: red;">$ ${valorGasolina}</span></h1>`
    } else {
        console.error('Error: ', 'Por favor valide los parametros del formulario!!!')
    }
})

function esValido() {
    var cantidadGalones = parseFloat(inputCantidadGalones.value)
    if (cantidadGalones < 0) {
        return false
    }

    return true
}

var borrarTodo = function () {
    var salida = document.querySelector('#salida')
    salida.innerHTML = ''
}

document.querySelector('#borrarTodo').addEventListener('click', function (event) {
    borrarTodo()
    alert('Todo ha sido borrado!')
})