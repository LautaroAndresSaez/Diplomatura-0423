
const numeros = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 3];

const resultadoEsperado = [4, 8, 12, 16, 20];

const eliminarImpares = (array) => array.filter((numero) => numero % 2 === 0);

const porDos = (array) => array.map((numero) => numero * 2);

/**
 * const resultado = []
 * for( let i = 0; i ... ){
 * }
 */

const resultado = porDos(eliminarImpares(numeros));
console.log(resultado);
/**
    numeros.filter( n => n % 2 === 0 ).map(n => n * 2)
*/

// HoF
const transformarPares = (numeros, transformacion) => {
  const pares = numeros.filter((n) => n % 2 === 0);
  return transformacion(pares);
};

transformarPares(numeros, (pares) =>
  console.log("Dentro de la funcion", pares)
);

console.log(head([2, 3, 4]))