console.log("Arrancó la función")
var proximos_cont = document.querySelector('#proximosEstrenos')
var cartelera_cont = document.querySelector('#cartelera')
var boton_enviar = document.querySelector('.btn_enviar button')
var url = "https://api.themoviedb.org/3/movie/"
var urlImagen = "https://image.tmdb.org/t/p/w500"
var apiProximos = "popular"
var apiCartelera = "now_playing"
var apiKey = "93aa9d7f884d7b7192389c7eb1e714a5"
var contenido = {}
var idPelicula = ''
var contador = 0

function proximosEstrenos() {
    jQuery.ajax(url + apiProximos + "?api_key=" + apiKey + "&language=es-US&page=1", {
        success: function (response) {

            //console.log(response)
            proximos_cont.innerHTML = ""
            contador = 0
            response.results.forEach(function (peliculas) {
                contador++
                if (contador < 5) {
                    proximos_cont.innerHTML = proximos_cont.innerHTML + `<div class="pelicula">
                    <div class="imagen"><img src="${urlImagen}${peliculas.poster_path}"></div>
                    <div class="nombre_estreno">${peliculas.title}</div>
                    </div>`
                }
            })
        },
        error: function (error) {
            console.error('No se encontraron registros, repita la búsqueda ', error)
            contenedor.innerHTML = `<div class="error">No se encontraron registros, repita la búsqueda.</div>`
        }
    })
}

function cartelera() {
    jQuery.ajax(url + apiCartelera + "?api_key=" + apiKey + "&language=es-US&page=1", {
        success: function (responseCartelera) {

            //console.log(response)
            cartelera_cont.innerHTML = ""
            contador = 0
            responseCartelera.results.forEach(function (peliculasCartelera) {
                contador++
                if (contador < 9) {
                    cartelera_cont.innerHTML = cartelera_cont.innerHTML + `<div class="pelicula">
                    <div class="imagen"><img src="${urlImagen}${peliculasCartelera.backdrop_path}"></div>
                    <div class="nombre">${peliculasCartelera.title}</div>
                    <div class="sinopsis">${peliculasCartelera.overview}</div>
                    </div>`
                }
            })
        },
        error: function (error) {
            console.error('No se encontraron registros, repita la búsqueda ', error)
            contenedor.innerHTML = `<div class="error">No se encontraron registros, repita la búsqueda.</div>`
        }
    })
}

document.querySelector('.btn_enviar button').addEventListener('click', function (event) {
    alert('Se presionó enviar')
})
