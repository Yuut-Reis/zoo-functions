const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const visitante = { adult: 0, child: 0, senior: 0 };
  entrants.forEach((element) => {
    switch (true) {
    case element.age < 18:
      visitante.child += 1;
      break;
    case element.age < 50:
      visitante.adult += 1;
      break;
    default: visitante.senior += 1;
    }
  });
  return visitante;
}
function calculateEntry(entrants) {
  if (entrants === undefined || JSON.stringify(entrants) === '{}') {
    return 0;
  }
  const number = countEntrants(entrants);
  return number.child * prices.child + number.adult * prices.adult + number.senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
