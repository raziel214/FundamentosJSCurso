var nombre='johnfredy';
var apellido='QuimbayaOrozco';
var nombreEnMayusculas=nombre.toUpperCase();
var apellidoEnMinusculas=apellido.toLocaleLowerCase();
var primeraLetraDelNombre=nombre.charAt(0);
var cantidadDeLetrasDelNombre=nombre.length;
var nombreCompleto=`${nombre} ${apellido.toUpperCase()}`;//Interpolacion
var nombrePequeño=`${nombre.substring(4,9)} ${apellido.toUpperCase()}`;//Interpolacion
