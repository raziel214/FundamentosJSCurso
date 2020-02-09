var john ={
  nombre:'john',
  apellido:'Quimbaya',
  edad:28,
  ingeniero:true,
  cocinero:false,
  dj:false,
  gutarrista:false,
  drone:false,
  peso:98
}
var ibeth ={
  nombre:'ibeth',
  apellido:'pacheco',
  edad:17
}

console.log(`Al inicio del año ${john.nombre} pesa ${john.peso}kg`);

const INCREMENTO_PESO=0.2
const DIAS_DEL_ANIO=365
const aumentarDePeso=(persona)=>persona.peso+=INCREMENTO_PESO
const adelgazar=(persona)=>persona.peso-=INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = john.peso - 3
var dias = 0

// for (var i = 0; i <= DIAS_DEL_ANIO; i++) {
//
//   var random=Math.random()
//
//   if (random<0.25) {
//     aumentarDePeso(john)
//
//   }
//   else if (random<0.5) {
//     adelgazar(john)
//   }
//
//
//
// }

while (john.peso>META) {

    if (comeMucho()) {
      aumentarDePeso(john)
    }
    else if (realizaDeporte()) {
      adelgazar(john)
    }
    dias+=1
}



console.log(`pasaron ${dias} dias,Al final del año ${john.nombre} pesa ${john.peso.toFixed(1)}kg`);
