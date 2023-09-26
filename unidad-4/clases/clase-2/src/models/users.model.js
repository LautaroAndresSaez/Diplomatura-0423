const users = [
  {
    id: 1,
    nombre: "Lautaro",
  },
  {
    id: 2,
    nombre: "Fede",
  },
];

const add = (user) => {
  users.push(user);
  return true;
};

const findById = (id) => {
  const user = users.find((user) => user.id === Number(id));
  return user;
};

const getAll = () => users;

module.exports = {
  add,
  findById,
  getAll,
};
