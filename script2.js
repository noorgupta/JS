const employees = [
  { name: 'John Doe', age: 30, salary: 50000 },
  { name: 'Jane Smith', age: 25, salary: 65000 },
  { name: 'Peter Jones', age: 40, salary: 35000 },
  { name: 'Mary Brown', age: 35, salary: 80000 },
  { name:  'Leanne Graham', age:36, salary:90000}  
];

const namesButton = document.getElementById('names');
const salaryButton = document.getElementById('salary');
const totalButton = document.getElementById('total');
const resultsDiv = document.getElementById('results');

// --- Show Names Button ---
namesButton.addEventListener("click", () => {
    resultsDiv.innerHTML = '';
    
    const employeeNames = employees.map(({ name }) => name);

    employeeNames.forEach(name => {
        const nameDiv = document.createElement('div');
        nameDiv.classList.add('result-item'); // New Line!
        nameDiv.textContent = name; 
        resultsDiv.appendChild(nameDiv);
    });
});

// --- Filter Salary Button ---
salaryButton.addEventListener('click', () => {
    resultsDiv.innerHTML = '';
    
    const highPaidEmployees = employees.filter(({ salary }) => salary > 40000);
    
    highPaidEmployees.forEach(employee => {
        const employeeDiv = document.createElement('div');
        employeeDiv.classList.add('result-item'); // New Line!
        employeeDiv.textContent = `${employee.name} - Salary: $${employee.salary}`;
        resultsDiv.appendChild(employeeDiv);
    });
});

// --- Total Salary Button ---
totalButton.addEventListener('click', () => {
  resultsDiv.innerHTML = '';

  const totalSalary = employees.reduce((total, employee) => {
    return total + employee.salary;
  }, 0);

  const totalDiv = document.createElement('div');
  totalDiv.classList.add('result-item', 'total-salary'); // New Line!
  totalDiv.textContent = `Total Salary Expense: $${totalSalary}`;
  resultsDiv.appendChild(totalDiv);
});