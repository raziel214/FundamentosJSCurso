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
var ibeth ={
  nombre:'ibeth',
  apellido:'pacheco',
  edad:17,
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

const MAYORIA_DE_EDAD=18

const esMayorDeEdad =({edad})=>edad>=MAYORIA_DE_EDAD
// function esMayorDeEdad(persona) {
//
//   return persona.edad >= mayoriaDeEdad
//
// }

function imptimirSiEsMayordeEdad(persona) {

    if (esMayorDeEdad(persona)) {

      console.log(`${persona.nombre} es mayor de edad`)

    }
    else{
      console.log(`${persona.nombre} es menor de edad`)
    }

}
function permitirAcceso(persona) {
  if (!esMayorDeEdad(persona)) {
    console.log('ACCESO DENEGADO')
  }

}
