var ender = {
    nombre: "Ender",
    apellido: "Peña",
    altura: 1.82
}
var jesus = {
    nombre: "Jesus",
    apellido: "Gonzalez",
    altura: 1.79
}
var enmanuel = {
    nombre: "Enmanuel",
    apellido: "Fernandez",
    altura: 1.72
}
var maria = {
    nombre: "Maria",
    apellido: "Chirinos",
    altura: 1.90
}
var luis =  {
    nombre: "Luis",
    apellido: "Peña",
    altura: 1.81
}
const esAlta=({altura})=>altura>1.8
const esBaja=({altura})=>altura<=1.8

var personas = [ender, jesus, enmanuel, maria, luis]

/*
var personasAltas= personas.filter(function(persona){
    return persona.altura>1.8
})*/

var personasAltas=personas.filter(esAlta)
var personasBajas=personas.filter(esBaja)
console.log(personasAltas)
console.log(personasBajas)
