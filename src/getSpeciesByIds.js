const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids.length) return [];
  return ids.map((element) => species.find((el) => el.id === element));
}
getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce');
module.exports = getSpeciesByIds;
