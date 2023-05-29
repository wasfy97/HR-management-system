"use strict"

function Employee(fullName, department, level, imageURL) {
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;
  this.salary = 0;
  this.employeeID = null;
  this.card = null;
}
Employee.prototype.idCounter = 1000;

Employee.prototype.generateEmployeeID = function() {
  this.employeeID = Employee.prototype.idCounter++;
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
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = this.imageURL;
  card.appendChild(image);

  const nameElement = document.createElement("p");
  nameElement.textContent = "Name: " + this.fullName;
  card.appendChild(nameElement);

  const idElement = document.createElement("p");
  idElement.textContent = "Employee ID : " + this.employeeID;
  card.appendChild(idElement);

  const departmentElement = document.createElement("p");
  departmentElement.textContent = "Department : " + this.department + " - " + this.level;
  card.appendChild(departmentElement);

  const salaryElement = document.createElement("p");
  salaryElement.textContent = "Salary : " + this.salary.toFixed(2);
  card.appendChild(salaryElement);

  this.card = card;
};

const employees = [
  new Employee("Ghazi Samer", "Administration", "Senior", "Assets/Ghazi.jpg"),
  new Employee("Lana Ali", "Finance", "Senior", "Assets/Lana.jpg"),
  new Employee("Tamara Ayoub", "Marketing", "Senior", "Assets/Tamara.jpg"),
  new Employee("Safi Walid", "Administration", "Mid-Senior", "Assets/Safi.jpg"),
  new Employee("Omar Zaid", "Development", "Senior", "Assets/Omar.jpg"),
  new Employee("Rana Saleh", "Development", "Junior", "Assets/Rana.jpg"),
  new Employee("Hadi Ahmad", "Finance", "Mid-Senior", "Assets/Hadi.jpg")
];

const employeesByDepartment = {};

employees.forEach(function(employee) {
  if (!employeesByDepartment.hasOwnProperty(employee.department)) {
    employeesByDepartment[employee.department] = [];
  }
  employeesByDepartment[employee.department].push(employee);
});

for (const department in employeesByDepartment) {
  if (employeesByDepartment.hasOwnProperty(department)) {
    const departmentEmployees = employeesByDepartment[department];
    
    const section = document.createElement("section");
    section.classList.add("department-section");

    departmentEmployees.forEach(function(employee) {
      employee.generateEmployeeID();
      employee.calculateSalary();
      employee.render();
      section.appendChild(employee.card);
    });

    
    document.body.appendChild(section);
  }
}