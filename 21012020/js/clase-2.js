//Clase del 21denero
var str1 = 'Mi Texto'
var str2 = "MI texto"
var str3 = `Mi texto`


str3 = `Algo nuevo mas ${str2}`
str5 = `Algo nuevo más` + str2

var accion = "Comprar"
var script = "alert('Saludar')"
var miClase = "button"

var nuevoBoton = `<button class="${miClase}" onclick="${script}"> ${accion}</button>`

var palabra = `prueba`
var cuenta = palabra.length; //Cuenta la longitud de la variable
    console.log(`Logintud de la variable: ` + cuenta);
var viejaPosicion = 0
var nuevaPosicion = 0
var nuevaPalabra = ""


for (var i = 0; i < cuenta; i++){
    if (i === viejaPosicion){
        nuevaPalabra += palabra.charAt(nuevaPosicion)
        nuevaPalabra = nuevaPalabra.toUpperCase()
    }
    else if (i === nuevaPosicion){
        nuevaPalabra += palabra.charAt(viejaPosicion)
    }
    else{
        nuevaPalabra += palabra.charAt(i)
    }
    console.log(nuevaPalabra)
}
console.log(`El resultado es: ${nuevaPalabra}`)


function cambiarCapitalize(nombre){
    console.log(nombre)
    nombre = nombre.charAt(0).toUpperCase() + nombre.substr(1).toLowerCase();
    console.log(nombre);
}
