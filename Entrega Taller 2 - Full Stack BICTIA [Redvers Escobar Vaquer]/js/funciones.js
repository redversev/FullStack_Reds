const contenedor = document.querySelector('.contenedor')
const paginacion = document.querySelector('.paginacion')
const totalregistros = document.querySelector('.totalregistros')
const textoIngresado = document.querySelector('#palabra')
var Urlproxima = ''
var Urlanterior = ''
var total = ''
var url = "https://rickandmortyapi.com/api/character/"

function buscar(){
    jQuery.ajax(url, {
        success: function (response) {
            proxima = response.info.next
            anterior = response.info.prev
            total = response.info.count
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
        totalregistros.innerHTML = `Total Registros: ` + total
        }
    })
    
}

buscar()
function buscarPersonaje(){
    url ="https://rickandmortyapi.com/api/character/?name=" + textoIngresado.value
    console.log("Proxima: "+ proxima)
    console.log("Anterior: "+ atras)
    buscar()
}

function proxima(){
    var url = urlProxima
    console.log("Proxima: "+ urlProxima)
}