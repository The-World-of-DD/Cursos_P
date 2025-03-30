//Comparadores 

//Sorprendentemente esto se usa
console.log(true && true);//las comparaciones son anexas
console.log(false && true);
let mayorEdad = true;
let suscrito = true;
console.log(mayorEdad && suscrito);

console.log(!mayorEdad);//compara con el valor de la variable
let catalogoInfantil = !mayorEdad;//podemos referenciar variables con otras variables

function fn1()
{
	console.log("soy fn 01");
	return (true);
}
function fn2()
{
	console.log("soy fn 02");
	return (false);
}
let x = fn1() && fn2();//cuando enganchas variables... si la primera no se cumple no entra la segunda

//Operador ternario ? "si es true" : si es falso
let edad = 25;
let acceso = edad > 17 ? "Ingreso permitido" : "No se puede ingresar";
console.log(acceso);
edad = 16;
acceso = edad > 17 ? "Ingreso permitido" : "No se puede ingresar";
console.log(acceso);
