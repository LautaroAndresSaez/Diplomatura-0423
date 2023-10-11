const fs = require("fs");

const read = () => {
  const petsString = fs.readFileSync("../data/test-pets.json");
  const pets = JSON.parse(petsString);
  return pets;
};

const write = (pets) => {
  fs.writeFileSync("../data/test-pets.json", JSON.stringify(pets));
};

const add = (pet) => {
  const pets = read();
  pets.push(pet);
  write(pets);
};

const edit = (name, newPet) => {
  const pets = read();
  const newPets = pets.map((pet) => {
    if (pet.name === name) {
      /*de esta manera sobrescribimos todos los parametros 
      que se encuentren en newPet 
      */
      return {
        ...pet,
        ...newPet,
      };
    }
    return pet;
  });
  write(newPets);
};

const findByEmployee = (employee) => {
  const pets = read();
  return pets.filter((pet) => {
    return pet.employee.includes(employee);
  });
};

const getNames = () => {
  const pets = read();
  return pets.map((pet) => pet.name);
};

module.exports = {
  add,
  read,
  edit,
  findByEmployee,
  getNames,
};
