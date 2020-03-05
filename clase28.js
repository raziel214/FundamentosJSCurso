const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const PLANET_URL = 'planets/:id'


const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 4)}`
const lukeUrl2 = `${API_URL}${PLANET_URL.replace(':id', 5)}`
const opts = { crossDomain: true }


// const opts = { crossDomain: true }

const onPeopleResponse = function (persona) {
  console.log(`Hola yo soy, ${persona.name}  y mido ${persona.height},
   mi color de cabello es ${persona.hair_color},
   el color de mis ojos es ${persona.eye_color}
  `
  )
}

const onPeopleResponse2 = function (persona) {
    console.log(`Planeta, ${persona.name}`)
  }

$.get(lukeUrl, opts, onPeopleResponse)
$.get(lukeUrl2, opts, onPeopleResponse2)
