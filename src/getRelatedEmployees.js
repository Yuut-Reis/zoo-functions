const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const funcionarios = employees.filter((element) => element.managers.includes(managerId));
    const result = funcionarios.map((element) => `${element.firstName} ${element.lastName}`);
    return result;
  }
}

module.exports = { isManager, getRelatedEmployees };

// Referencias: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// Referencias: https://www.youtube.com/watch?v=ReBK-5i66VY
// Referencias: https://www.youtube.com/watch?v=IjSSoC3DRrQ
