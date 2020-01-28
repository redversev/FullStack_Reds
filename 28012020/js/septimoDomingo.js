let numeroDomingos = 0
let fecha = new Date(2019, 12, 0)
while (numeroDomingos < 7) {
    fecha.setDate(fecha.getDate() + 1)

    if (fecha.getDay() === 0) {
        numeroDomingos = numeroDomingos + 1
    }
}
console.log(fecha)