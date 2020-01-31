/* var response
jQuery.ajax('https://rickandmortyapi.com/api', {
    success: function (response) {
        //Obteniendo Personajes
        console.log('Request 1')
        window.response = response
    }
})
jQuery.ajax('https://rickandmortyapi.com/api', {
    success: function (response) {
        //Obteniendo Personajes
        console.log('Request 2')
    }
})
console.log('Mensaje 1') */

const contenedor = document.querySelector('.contenedor')

jQuery.ajax('https://rickandmortyapi.com/api', {
    success: function (response) {
        //Obteniendo Personajes
        jQuery.ajax(response.characters, {
            success: function (response) {
                console.log('Lista de Personajes', response)
                console.log(response.next)
                response.results.forEach(function (personaje) {
                    contenedor.innerHTML = contenedor.innerHTML + `<div class="personaje">
                    <div class="imagen"><img src="${personaje.image}" alt="${personaje.name}"/></div>
                    <div class="datos">
                        <div class="nombre">${personaje.name}</div>
                        <div class="especie">${personaje.especies}</div>
                        <div class="otrosdatos">
                            <div class="estado">Estado: ${personaje.status}</div>
                            <div class="genero">Género: ${personaje.gender}</div>
                            <div class="origen">Origen: ${personaje.origin.name} </div>
                        </div>
                    </div>
                </div>`
                })

            }
        })
    }

})