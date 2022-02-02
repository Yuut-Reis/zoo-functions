const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const everydays = Object.keys(hours);
const everyspecie = species.map((element) => element.name);

const dayExibi = (element) => {
  const result = {};
  if (typeof element === 'object') {
    element.forEach((day) => {
      if (day !== 'Monday') {
        result[day] = {
          officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
          exhibition: species.filter((days) =>
            days.availability.includes(day)).map((animal) => animal.name),
        };
      }
    });
  }
  result.Monday = {
    exhibition: 'The zoo will be closed!',
    officeHour: 'CLOSED',
  };
  return result;
};

const test = (parametro) => {
  let verificador = false;
  if (!everydays.includes(parametro) && !everyspecie.includes(parametro)) {
    verificador = true;
  }
  return verificador;
};

const test2 = (day) => {
  const result = {};
  result[day] = {
    officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
    exhibition: species.filter((days) =>
      days.availability.includes(day)).map((animal) => animal.name),
  };
  return result;
};

function getSchedule(schedu) {
  if (schedu === 'Monday') {
    return dayExibi('Monday');
  }
  if (schedu === undefined || test(schedu)) {
    return dayExibi(everydays);
  }

  if (everydays.includes(schedu)) {
    return test2(schedu);
  }
  return species.find((element) => element.name === schedu).availability;
}

console.log(getSchedule(''));

module.exports = getSchedule;
