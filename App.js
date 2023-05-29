'use strict'
function Employee(fullName, department, level) {
  this.fullName = fullName;
    this.department = department;
    this.level = level;

  }


  Employee.prototype.generateEmployeeId = function() {
    this.id = Math.floor(Math.random() * 9000) + 1000;
  };


  Employee.prototype.calculateSalary = function() {
    let minSalary, maxSalary;
    switch (this.level) {
      case "Senior":
        minSalary = 1500;
        maxSalary = 2000;
        break;
      case "Mid-Senior":
        minSalary = 1000;
        maxSalary = 1500;
        break;
      case "Junior":
        minSalary = 500;
        maxSalary = 1000;
        break;
      default:
        minSalary = 0;
        maxSalary = 0;
    }
    const randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
    this.salary = randomSalary - (randomSalary * 7.5) / 100;
  };
  
  Employee.prototype.render = function() {
    document.write('Employee name: ' + this.fullName + '<br>');
    document.write('Department: ' + this.department + '<br>');
    document.write('Employee salary: ' + this.salary + '<br><br>');
  };


  let employees = [
    new Employee('Ghazi Samer', 'Administration', 'Senior'),
    new Employee('Lana Ali', 'Finance', 'Senior'),
    new Employee('Tamara Ayoub', 'Marketing', 'Senior'),
    new Employee('Safi Walid', 'Administration', 'Mid-Senior'),
    new Employee('Omar Zaid', 'Development', 'Senior'),
    new Employee('Rana Saleh', 'Development', 'Junior'),
    new Employee('Hadi Ahmad', 'Finance', 'Mid-Senior')
  ];


  for (var i = 0; i < employees.length; i++) {
    employees[i].generateEmployeeId();
    employees[i].calculateSalary();
  }


  for (var i = 0; i < employees.length; i++) {
    employees[i].render();
  }