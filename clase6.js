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

function imprimirNombreEnMayusculas({nombre}) {

console.log(nombre.toUpperCase())

}
imprimirNombreEnMayusculas(john)
imprimirNombreEnMayusculas(ibeth)
imprimirNombreEnMayusculas({nombre:'shakira'})
