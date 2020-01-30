var john ={
  nombre:'john',
  apellido:'Quimbaya',
  edad:28,
  ingeniero:true,
  cocinero:false,
  dj:false,
  gutarrista:false,
  drone:false
}
function imprimirprofesiones(persona) {

  console.log(`${persona.nombre} es:`)

  if (persona.ingeniero) {
  console.log('Ingeniero')
} else {
  console.log('No es ingeniero')
}

if (persona.cocinero) {
  console.log('Cocinero')
}

if (persona.dj)
{
  console.log('DJ')
}

if (persona.cantante) {
  console.log('Cantante')
}

if (persona.guitarrista) {
  console.log('Gutiarrista')
}

if (persona.drone) {
  console.log('Piloto de drone')
}

}
//imprimirprofesiones(john)

function imptimirSiEsMayordeEdad(persona) {

  if (persona.edad>18) {

    console.log(`${persona.nombre} es mayor de edad`)

  }

}
