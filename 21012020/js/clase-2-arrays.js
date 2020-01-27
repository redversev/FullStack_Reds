// Arreglos
var arrayNumber = [0, 1, 2]
var arrayString = ['a', 'b', 'c']
var arrayMixto = ['a', 9, {}, function () { }]
//devuelve la cantidad de items
//console.log(arrayNumber.length)

//Agregar un nuevo elemento
arrayNumber.push(8)
//console.log(arrayNumber)
//console.log(arrayNumber.lengt
arrayNumber.unshift(3)//Lo agrega de primero

function leerArreglo() {
    //console.log(arrayGenerico)
}

var entrada = "Las frutas frutas Son muy RICAS ricas"
var entradaModificada = []
//var salida2  //Todas las palabras estén al revés
//var salida3  // buscar las veces que se repite cada palabra


var frase = entrada
var longitudFrase = null

function letrasMayusculas() {
    frase = entrada.split(' ')
    longitudFrase = frase.length

    for (var i = 0; i < longitudFrase; i++) {
        frase[i] = frase[i].toLowerCase()
        posUltimaLetra = frase[i].length - 1 //Devuelve el valor de la posición de la última letra
        var ultimaLetra = frase[i].charAt(posUltimaLetra) //Devuelve la última letra
        ultimaLetra = ultimaLetra.toUpperCase(); //Convierte a mayúscula a la última letra
        var nuevaPalabra = frase[i].replace(frase[i].charAt(posUltimaLetra), ultimaLetra) //Guarda el valor de la palabra sustituyendo el último valor por la letra en mayúscula
        //console.log(nuevaPalabra) //Imprime el valor de la palabra
        var nuevaEntrada = null
        entradaModificada.push(nuevaPalabra)
    }
    console.log("%cTexto Original:", "Color: red; background: white; padding: 2px 10px; border-radius: 2px")
    console.log(`${entrada}`) //Imprime el array
    //console.log(entradaModificada) //Imprime el array modificado
    var salida = entradaModificada.join(" ") //Imprime la frase modificada
    console.log("%cTexto Modificado:", "Color: blue; background: white; padding: 2px 10px; border-radius: 2px")
    console.log(`${salida}`)

    fraseInvertida()
}

function fraseInvertida() {
    var fraseInvertida = entradaModificada.reverse()
    fraseInvertida = fraseInvertida.join(" ")
    console.log("%cFrase Invertida:", "Color: green; background: white; padding: 2px 10px; border-radius: 2px")
    console.log(`${fraseInvertida}`)
}

letrasMayusculas()

console.log("%cBuscar Palabras:", "Color: black; background: white; padding: 2px 10px; border-radius: 2px")

var repetidos = []
function buscarRepetidos() {
    frase.forEach(function(cantidad){
      repetidos[cantidad] = (repetidos[cantidad] || 0) + 1
    });
    console.log(repetidos)
    
}
buscarRepetidos()