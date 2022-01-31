const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const result = {};
    species.forEach((element) => {
      result[element.name] = element.residents.length;
    });
    return result;
  }
  const specie = species.find((element) => element.name === animal.specie);
  if (animal.sex !== undefined) {
    return specie.residents.filter((element) => element.sex === animal.sex).length;
  }
  return specie.residents.length;
}
module.exports = countAnimals;
