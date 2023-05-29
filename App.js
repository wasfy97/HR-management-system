// Define the employee objects
const employees = [
    {
      employeeID: 1000,
      fullName: "Ghazi Samer",
      department: "Administration",
      level: "Senior",
      imageURL: "https://example.com/ghazi-samer.jpg"
    },
    {
      employeeID: 1001,
      fullName: "Lana Ali",
      department: "Finance",
      level: "Senior",
      imageURL: "https://example.com/lana-ali.jpg"
    },
    {
      employeeID: 1002,
      fullName: "Tamara Ayoub",
      department: "Marketing",
      level: "Senior",
      imageURL: "https://example.com/tamara-ayoub.jpg"
    },
    {
      employeeID: 1003,
      fullName: "Safi Walid",
      department: "Administration",
      level: "Mid-Senior",
      imageURL: "https://example.com/safi-walid.jpg"
    },
    {
      employeeID: 1004,
      fullName: "Omar Zaid",
      department: "Development",
      level: "Senior",
      imageURL: "https://example.com/omar-zaid.jpg"
    },
    {
      employeeID: 1005,
      fullName: "Rana Saleh",
      department: "Development",
      level: "Junior",
      imageURL: "https://example.com/rana-saleh.jpg"
    },
    {
      employeeID: 1006,
      fullName: "Hadi Ahmad",
      department: "Finance",
      level: "Mid-Senior",
      imageURL: "https://example.com/hadi-ahmad.jpg"
    }
  ];
  
  // Calculate salary for each employee
  function calculateSalary(employee) {
    const levelSalary = {
      Senior: { min: 1500, max: 2000 },
      "Mid-Senior": { min: 1000, max: 1500 },
      Junior: { min: 500, max: 1000 }
    };
  
    const { min, max } = levelSalary[employee.level];
    const randomSalary = Math.floor(Math.random() * (max - min + 1)) + min;
    const netSalary = randomSalary - (randomSalary * 0.075); // 7.5% tax
  
    employee.salary = netSalary.toFixed(2);
  }
  
 // Render employees' names with their salaries
function renderEmployees() {
    employees.forEach(employee => {
      calculateSalary(employee);
  
      const employeeInfo = `Employee name: ${employee.fullName}<br>Employee salary: ${employee.salary}<br><br>`;
      document.write(employeeInfo);
    });
  }
  
  // Call the render function
  renderEmployees();
  
  