
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
      .get(url, opts, function (data) {
        resolve(data)
      })
      .fail(() => reject(id))
  })
}

function onError(id) {
  console.log(`Sucedió un error al obtener el personaje ${id}`)
}


var ids = []//new Array(10)
for (let i = 1; i < 30; i++) {
    ids.push(i)
    
 }
 //ids=[1,2,3,4,5,6,7,8,9,10]

var promesas = ids.map(id => obtenerPersonaje(id))
    Promise
  .all(promesas)
  .then(personajes => cabecera(personajes))
  .catch(onError)

  

//   function persojepj(idpersonaje){
      
//     for (let i = 0; i < idpersonaje.length; i++) {
//         console.log(`Me llamo ${idpersonaje[i].name} y mido ${idpersonaje[i].height} cm`)

//     }
//   }

