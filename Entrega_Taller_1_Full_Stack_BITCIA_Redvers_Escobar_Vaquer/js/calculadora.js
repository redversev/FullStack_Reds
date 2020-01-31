var resultado = 0
var pantalla = ""
var total = 0
var valor = 0
var valor1 = 0
var valor2 = 0
var operador = ""
var granTotal = 0


function conocerValor(event) {
    var boton = event.target // esto hace referencia al boton donde se inicio click
    var valor = boton.dataset.value
    total = total + valor
    total = parseFloat(total)
    // console.log(total)
    var pantalla = document.querySelector('.pantalla')
    pantalla.innerHTML = `${total}`
}

function conocerOperador(event) {
    var boton_operador = event.target // esto hace referencia al boton donde se inicio click
    operador = boton_operador.dataset.value
    var pantalla = document.querySelector('.pantalla')
    pantalla.innerHTML = `${operador}`
    valor1 = total
    total = 0
    // console.log("Se seleccionó el operador: "+operador)
    // console.log("Valor1: "+valor1)
    // console.log("Valor2: "+valor2)
}

function obtenerResultado(event) {
    valor2 = total
    total = 0
    // console.log("Resultado")
    // console.log("valor1: "+valor1)
    // console.log("Operador: "+operador)
    // console.log("Valor2: "+valor2)
    resultado = valor1 + operador + valor2
    granTotal = eval(resultado)
    var pantalla = document.querySelector('.pantalla')
    pantalla.innerHTML = `${granTotal}`
    total=granTotal
  }

function reiniciar(event) {
    total = 0
    valor = 0
    valor1 = 0
    valor2 = 0
    operador = ""
    granTotal = 0    
  }

  document.querySelector('.resultado').addEventListener('click', obtenerResultado)

  document.querySelector('.reiniciar').addEventListener('click', reiniciar)

//Le agrega la funcion a todos los botones que cumplan con la clase box
botones = document.querySelectorAll(".box")
Array.prototype.forEach.call(botones, function (boton) {
    boton.addEventListener('click', conocerValor)
})

//Le agrega la funcion a todos los botones que cumplan con la clase Operador
botones_operador = document.querySelectorAll(".operador")
Array.prototype.forEach.call(botones_operador, function (boton_operador) {
    boton_operador.addEventListener('click', conocerOperador)
})

