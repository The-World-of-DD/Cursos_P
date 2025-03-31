let camelCalese;

camelCalese = "Tus muertos"
camelCalese = 23;

const camelloCase = "string";

let nombrePj;
let sobreNombrePj;
let serieNombre;

//objeto literal
let serie = {
	nombrePj: "Agallas",
	sobreNombrePj: "El perro cobarde",
	serieNombre: "Miedoso, el dogo rachero"
};
console.log(serie.nombrePj);
console.log(serie['nombrePj']);

//cambio de propiedades de objeto 
serie.nombrePJ = "Brave";//mas usada
serie["sobreNombrePJ"] = "Perro miedoso";//usada si no conoces propiedad
delete serie.serie;//deletear propiedad

//arrays
let animales = ['Putos', 'Bichos'];
animales[10] = 'cosa'//nos indica los huecos anteriores estan vacios
console.log(typeof animales);//nos indica el tipo de datp
console.log(animales.length);

let vaca = "vaca";
let burro = "burro";
function StardewValley(vaca, burro)
{
	console.log(arguments);//es una funcion especial para ver los argumentos
	console.log ("eeeepaaaa");
}
StardewValley();//llamamos a la funcion
