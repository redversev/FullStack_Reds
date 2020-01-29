console.log("Cargo el archivo")

var objeto =
{
    clave: 'El valor',
    id: 1,
    funcion: function () {

    }
}

var persona = {
    nombre: 'Redvers',
    apellido: 'Escobar',
    edad: 38

}

persona.email = 'redversescobar@gmail.com'

function crearPersona(nombre, apellido, edad) {
    const persona = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        toString: function () {
            return `${this.nombre} ${this.apellido}`
            //Dentro de este objeto busque la proiedad nombre y apellido.
        }

    }
}

function cambiarNombre(persona, nuevoNombre){
    persona.nombre = nuevoNombre
}