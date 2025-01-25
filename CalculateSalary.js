// Question No 7
// Calculate and print Basic Salary, DA, HRA, PF, and Net Salary


function calculateSalary(basicSalary) {
    let da, hra, pf;
  
    if (basicSalary < 10000) {
      da = 0.25 * basicSalary;
      hra = 0.30 * basicSalary;
      pf = 0.08 * basicSalary;
    } else if (basicSalary >= 10000 && basicSalary < 20000) {
      da = 0.20 * basicSalary;
      hra = 0.25 * basicSalary;
      pf = 0.06 * basicSalary;
    } else if (basicSalary >= 20000 && basicSalary < 30000) {
      da = 0.15 * basicSalary;
      hra = 0.20 * basicSalary;
      pf = 0.04 * basicSalary;
    } else {
      da = 0.10 * basicSalary;
      hra = 0.15 * basicSalary;
      pf = 0.02 * basicSalary;
    }
  
    const netSalary = basicSalary + da + hra - pf;
  
    console.log(`Basic Salary: $${basicSalary.toFixed(2)}`);
    console.log(`DA: $${da.toFixed(2)}`);
    console.log(`HRA: $${hra.toFixed(2)}`);
    console.log(`PF: $${pf.toFixed(2)}`);
    console.log(`Net Salary: $${netSalary.toFixed(2)}`);
  }
  

  const basicSalaryInput = 35000; 
  calculateSalary(basicSalaryInput);