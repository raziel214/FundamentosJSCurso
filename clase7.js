var john={
  nombre:'John Fredy',
  apellido:'Quimbaya Orozco',
  edad:27
}
var ibeth={
  nombre:'ibeth leonor',
  apellido:'Pacheco de la Hostia',
  edad:27
}

function imprimirNombreEnMayusculas(persona) {

var {nombre}=persona
console.log(nombre.toUpperCase())

}
imprimirNombreEnMayusculas(john)
imprimirNombreEnMayusculas(ibeth)
//imprimirNombreEnMayusculas({nombre:'shakira'})
function imprimirNombreYedad(persona) {

var {nombre}=persona
var{edad}=persona
console.log(`hola me llamo ${nombre} y tengo  ${edad} años de edad `)

}
imprimirNombreYedad(john)
