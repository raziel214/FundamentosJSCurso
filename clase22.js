
var  sacha  =  {
    nombre : 'Sacha' ,
    apellido : 'Lifszyc' ,
    altura : 1.72 ,
    cantidadDeLibros : 111
}

var  alan  =  {
    nombre : 'Alan' ,
    apellido : 'Pérez' ,
    altura : 1.86 ,
    cantidadDeLibros : 78
}

var  martin  =  {
    nombre : 'Martin' ,
    apellido : 'Gomez' ,
    altura : 1.85 ,
    cantidadDeLibros : 132
}

var  dario  =  {
    nombre : 'Dario' ,
    apellido : 'Juárez' ,
    altura : 1.71 ,
    cantidadDeLibros : 90
}

var  vicky  =  {
    nombre : 'Vicky' ,
    apellido : 'Zapata' ,
    altura : 1.56 ,
    cantidadDeLibros : 91
}

var  paula  =  {
    nombre : 'Paula' ,
    apellido : 'Barros' ,
    altura : 1.76 ,
    cantidadDeLibros : 182
}


function Persona(nombre, apellido,altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    
}

Persona.prototype.soyAlto=function(){
   
    //return this.altura>1.8
   
    if (this.altura >= 1.8){
        return console.log(`Soy ${this.nombre} y soy de estatura alta ${this.altura} `);
    }else{
        return console.log(`Soy ${this.nombre} y soy de estatura baja ${this.altura} `);
    }
}

var sacha = new Persona('Sacha', 'Lifszyc',1.80)
var erika = new Persona('Erika', 'Luna',1.60)
var arturo = new Persona('Arturo', 'Martinez',1.55)