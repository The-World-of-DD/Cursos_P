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
