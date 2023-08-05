const letras = ["a", "b", "c", "d", "e"];
const numeros = [150, 1, 89, 4128, 5000, 1, 2, 7, -15, 22];
const ingredientes = ["sal", "comino", "harina"];

const ultimoIngrediente = ingredientes[ingredientes.length - 1];

//agregar un elemento al final del array -> push
ingredientes.push("azucar");
ingredientes.push("rueda");
console.log(ingredientes);

//agregar un elemento al principio del array -> unshift
ingredientes.unshift("paprika");
ingredientes.unshift("raton");
console.log(ingredientes);

//eliminar el ultimo elemento -> pop
const ultimoElemento = ingredientes.pop();
console.log(ultimoElemento);
console.log(ingredientes);

//eliminar el primer elemento -> shift
const primerElemento = ingredientes.shift();
console.log(primerElemento);
console.log(ingredientes);
