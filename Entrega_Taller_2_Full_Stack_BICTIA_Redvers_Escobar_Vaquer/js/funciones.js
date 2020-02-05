const contenedor = document.querySelector('.contenedor')
const totalregistros = document.querySelector('.totalregistros')
const textoIngresado = document.querySelector('#palabra')
var urlProxima = ''
var urlAtras = ''
var total = ''
var totalPaginas = ''
var url = "https://rickandmortyapi.com/api/character/"

function buscar() {
    jQuery.ajax(url, {
        success: function (response) {
            console.log(response)
            urlProxima = response.info.next
            urlAtras = response.info.prev
            total = response.info.count
            totalPaginas = response.info.pages
            contenedor.innerHTML = ""
            response.results.forEach(function (personaje) {
                contenedor.innerHTML = contenedor.innerHTML + `<div class="personaje">
                <div class="imagen"><img src="${personaje.image}" alt="${personaje.name}"/></div>
                <div class="datos">
                    <div class="nombre">${personaje.name}</div>
                    <div class="especie">${personaje.species}</div>
                    <div class="otrosdatos">
                        <div class="estado">Estado: ${personaje.status}</div>
                        <div class="genero">Género: ${personaje.gender}</div>
                        <div class="genero">Origen: ${personaje.origin.name}</div>
                    </div>
                </div>
            </div>`
            })
            totalregistros.innerHTML = `Total Registros: ` + total + ` - Páginas: ` + totalPaginas
        },
        error: function(error) {
            console.error('No se encontraron registros, repita la búsqueda ', error)
            contenedor.innerHTML = `<div class="error">No se encontraron registros, repita la búsqueda.</div>`
          }
    })
}
buscar()


function buscarPersonaje() {
    url = "https://rickandmortyapi.com/api/character/?name=" + textoIngresado.value
    console.log("Próxima: " + urlProxima)
    console.log("Anterior: " + urlAtras)
    buscar()
}

function proxima() {
    if (urlProxima === '') {
        alert("No hay más páginas.")
        return
    }
    else {
        url = urlProxima
        console.log("Próxima: " + urlProxima)
        console.log("Anterior: " + urlAtras)
        buscar()
    }
}
function atras() {
    if (urlAtras === '') {
        alert("Esta es la primera página.")
        return
    } else {
        url = urlAtras
        console.log("Próxima: " + urlProxima)
        console.log("Anterior: " + urlAtras)
        buscar()
    }
}