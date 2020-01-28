console.log("Filtrar iniciado")
var articulos = null
var contenido = document.querySelector(".contenedor")
var mostrarse = null

function filtrar(event) {
    var valor = document.querySelector('#filtrar').value
    console.log(`Valor seleccionado: ${valor}`)

    var todos = document.querySelectorAll('.articulo')
    for (var i = 0; i < todos.length; i++) {
        todos[i].className = "articulo ocultar"
    }

    if (valor === "Ropa") {
        mostrarse = document.querySelectorAll('div[data-value="ropa"]')
    }
    else if (valor === "Celulares") {
        mostrarse = document.querySelectorAll('div[data-value="cel"]')
    }
    else if (valor === "Computadores") {
        mostrarse = document.querySelectorAll('div[data-value="tecno"]')
    }
    else {
        mostrarse = document.querySelectorAll('.articulo')
    }

    for (var i = 0; i < mostrarse.length; i++) {
        mostrarse[i].className = "articulo"
    }

}
