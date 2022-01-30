const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (JSON.stringify(employeeName) === undefined) return {};

  return employees.find((element) => {
    if (element.firstName === employeeName) {
      return element;
    } if (element.lastName === employeeName) {
      return element.lastName;
    }
    return undefined;
  });
}
module.exports = getEmployeeByName;
