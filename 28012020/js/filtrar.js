console.log("Filtrar iniciado")

function filtrar(event){
    var valor = document.querySelector('#filtrar').value
    console.log(valor)

    if (valor === "Ropa"){
        console.log("Entró en Ropa")
            articulos = document.querySelectorAll(".articulo")
            Array.prototype.forEach.call(articulos, function (articulos) {
                articulos.addClass("mostrar")
})
    }

})


}