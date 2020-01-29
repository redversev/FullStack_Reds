console.log("Filtrar iniciado")
var articulos = null
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

var productos = [
    {
        nombre: 'Camisa',
        imagen: 'imagenes/camisa.jpg',
        datavalue: 'ropa',
        precio: 15000
    },
    {
        nombre: 'Computador',
        imagen: 'imagenes/computador.jpg',
        datavalue: 'tecno',
        precio: 1600000
    },
    {
        nombre: 'Celular',
        imagen: 'imagenes/celular.jpg',
        datavalue: 'cel',
        precio: 760000
    },
    {
        nombre: 'Pantalon',
        imagen: 'imagenes/pantalon.jpg',
        datavalue: 'ropa',
        precio: 70000
    },
    {
        nombre: 'Camisa',
        imagen: 'imagenes/camisa.jpg',
        datavalue: 'ropa',
        precio: 15000
    }
]


const contenedor = document.querySelector('#contenedor')

let contenido = ''
productos.forEach(function (producto) {
    // console.log(contenido)
    contenido += `<div class="articulo" data-value="${producto.datavalue}"><img src="${producto.imagen}" alt="${producto.nombre}">
  <div class="datos"><div class="nombre">${producto.nombre}</div><div class="precio">${producto.precio}</div></div></div>`
})

contenedor.innerHTML = contenido


var comparador = ''
let contenidoOrdenado = ''

function ordenar() {
    var productosOrdenados = []
    console.log("El ojetivo tiene: " +contenidoOrdenado)

    var ordenarPor = document.querySelector('#ordenar').value
    console.log(`Orden seleccionado: ${ordenarPor}`)

    for (let i in productos) {
        comparador = productos[i].datavalue

        if(comparador === ordenarPor){
            productosOrdenados.unshift(productos[i])
        }
        else{
            productosOrdenados.push(productos[i])
        }            
    }
    var total = productos.length
    console.log("Salio del for: "+ total)

    productosOrdenados.forEach(function (productoOrdenado) {
        contenidoOrdenado += `<div class="articulo" data-value="${productoOrdenado.datavalue}"><img src="${productoOrdenado.imagen}" alt="${productoOrdenado.nombre}">
      <div class="datos"><div class="nombre">${productoOrdenado.nombre}</div><div class="precio">${productoOrdenado.precio}</div></div></div>`
    })
    contenedor.innerHTML = contenidoOrdenado 
    contenidoOrdenado = ''
}