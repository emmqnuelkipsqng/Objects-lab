// let employee;

// beforeEach(() => {
//     employee = {
//       name: "Alice",
//       streetAddress: "1234 Elm Street",
//     };
//   });

// function () {
//      let employeee = {
//         name: "Sam",
//         streetAdress: "1234 Elm Street"
//     }
    
// }

const employee =  {
    firstName: 'Emmanuel',
    lastName: 'Kipsang',
    role: 'Software Engineer',
    payPerHour: 35,
    timeInHours: 160,
    hiredDate: new Date('2022-08-01'),
    email: 'emmanuel@example.com',
    phoneNumber: '555-555-5555'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  
  
  
  
  