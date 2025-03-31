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


//el while

let nombre = "Alberto";
if (nombre != "Alberto")
{
	console.log("klkkkk");
}
else
{
	console.log("kalikoelectro");
}

let age = 0;
while (age < 10)
{
	console.log(age);
	age++;
}

// el doWhile

let num = 0;
do
{
	if (num % 2 == 0)
	{
		console.log("es par --> " + num);
	}
	num++;//recordar siempre el incrementador
} while (num < 10);

// el For 
// usas la estructura -> (iniciador (puedes var); condicion; incremento)

let frutaFrutita = ["manzana", "pera", "fresita", "banano"];
for (let i = 0; i < frutaFrutita.length; i++)
{
	console.log(frutaFrutita[i]);
}

//el FOR OF

let animales = ["Hola", "Mundo", "Bicho"];
for(let animal of animales)//podemos crear una nueva var dentro de la anterior
{
	console.log(animal);
}

while (i < animales.length)//cuando usamos lenght busca entre numeros
{
	
}
