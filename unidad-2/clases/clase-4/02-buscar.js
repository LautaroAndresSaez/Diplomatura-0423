const numeros = [15, 25, 150, 0, 8, 8, 15, 95, 8];
//indice: ubicacion en el array

const buscar = (array, value) => {
  let result = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value && result === -1) {
      result = i;
    }
  }
  return result;
};

const buscarPro = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
};

const buscarTodasLasCoincidencias = (array, value) => {
  const indices = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      indices.push(i);
    }
  }
  return indices;
};

console.log("Buscar 8: ", buscar(numeros, 8));
console.log("Buscar 25: ", buscar(numeros, 25));
console.log("Buscar 1: ", buscar(numeros, 1));

console.log("Buscar todos los 1: ", buscarTodasLasCoincidencias(numeros, 1));

console.log("Buscar todos los 8: ", buscarTodasLasCoincidencias(numeros, 8));
