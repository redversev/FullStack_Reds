console.log("el usuario no está logueado")

var contenedor = document.querySelector('#contenedor_cartelera')
var logueado = false
var boton_enviar = document.querySelector('.btn_enviar button')
var url = "https://api.themoviedb.org/3/movie/now_playing?api_key="
var apiKey = "93aa9d7f884d7b7192389c7eb1e714a5"
//var imagen = "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
var idGenero = {}
var contenido = {}


function buscar() {
    jQuery.ajax(url + apiKey + "&language=es-US&page=1", {
        success: function (response) {

            console.log(response)
            contenedor.innerHTML = ""

    
            if (i = 0, i < 5, i++){
                contenido = response[i]
                console.log(contenido)
        
            }


    response.results.forEach(function (peliculas) {

        contenedor.innerHTML = contenedor.innerHTML + `            <div class="pelicula">
                <div class="imagen"><img src="https://image.tmdb.org/t/p/w500${peliculas.backdrop_path}"></div>
                <div class="nombre">${peliculas.title}</div>
                <div class="sinopsis">${peliculas.overview}</div>
                <div class="fecha">${peliculas.release_date}</div>
            </div>`
    })
},
error: function(error) {
    console.error('No se encontraron registros, repita la búsqueda ', error)
    contenedor.innerHTML = `<div class="error">No se encontraron registros, repita la búsqueda.</div>`
}
    })
}
