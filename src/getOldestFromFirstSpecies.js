const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const funcionario = employees.find((element) => element.id === id);
  const firstAnimal = species.find((element) => element.id === funcionario.responsibleFor[0]);
  const sortAnimal = firstAnimal.residents.sort((ord1, ord2) => ord2.age - ord1.age);
  return Object.values(sortAnimal[0]);
}

module.exports = getOldestFromFirstSpecies;
