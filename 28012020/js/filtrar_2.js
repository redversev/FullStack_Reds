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

function ordenar() {
    contenido = ''
    var ordenarPor = document.querySelector('#ordenar').value
    console.log(`Orden seleccionado: ${ordenarPor}`)

    switch (ordenarPor) {
        case 'Todos':
            console.log("Caso Todos")
                productos.sort(function (ob1, ob2) {
                    if (ob1.datavalue > ob2.datavalue) {
                        return 1
                    }
                    else {
                        return -1
                    }
                })
            break
        case 'cel':
            console.log("Caso Cel")
            break
        case 'tecno':
            console.log("Caso Tecno")
            break
        default: 
            console.log("Caso por defecto")
    }


    var total = productos.length
    console.log("Salio del for: " + total)

    productos.forEach(function (producto) {
        contenido += `<div class="articulo" data-value="${producto.datavalue}"><img src="${producto.imagen}" alt="${producto.nombre}">
      <div class="datos"><div class="nombre">${producto.nombre}</div><div class="precio">${producto.precio}</div></div></div>`
    })
    contenedor.innerHTML = contenido
}