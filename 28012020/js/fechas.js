var today = new Date()
var birthday = new Date('1981-05-05')
var operacion = "anos"
var diferencia = null



function calcularDiferenciasEnDias(today, birthday, operacion) {
    if (operacion === "anos"){
        diferencia = Math.abs(today - birthday)
        diferencia = Math.floor(diferencia / 1000 / 60 / 60 / 24 / 365)   
    }
    else if (operacion ==="dias"){
        diferencia = Math.abs(today - birthday)
        diferencia = Math.floor(diferencia / 1000 / 60 / 60 / 24)        
    }
    else if (operacion ==="horas"){
        diferencia = Math.abs(today - birthday)
        diferencia = Math.floor(diferencia / 1000 / 60)     

    }
    console.log(`La diferencia es de: ${diferencia} ${operacion}`)
}


document.querySelector('#calcular').addEventListener('click', function (event) {
    calcularDiferenciasEnDias(today, birthday, operacion)
})