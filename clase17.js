var ender = {
    nombre: "Ender",
    apellido: "Peña",
    estatura: 1.82
}
var jesus = {
    nombre: "Jesus",
    apellido: "Gonzalez",
    estatura: 1.79
}
var enmanuel = {
    nombre: "Enmanuel",
    apellido: "Fernandez",
    estatura: 1.72
}
var maria = {
    nombre: "Maria",
    apellido: "Chirinos",
    estatura: 1.69
}
var luis =  {
    nombre: "Luis",
    apellido: "Peña",
    estatura: 1.81
}

var persona = [ender, jesus, enmanuel, maria, luis]

for (var i = 0; i < persona.length; i++){
    console.log(`${persona[i].nombre}${persona[i].apellido} tiene una estatura de ${persona[i].estatura} mts.`)
}