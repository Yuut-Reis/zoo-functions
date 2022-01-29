const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const name = species.find((element) => element.name === animal);
  return name.residents.every((element) => element.age >= age);
}

module.exports = getAnimalsOlderThan;
