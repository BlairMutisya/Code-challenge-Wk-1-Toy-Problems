function calculateNetSalary() {
    let basicSalary = parseFloat(document.getElementById('basic-salary').value);
    let benefits = parseFloat(document.getElementById('benefits').value);
    
    let payee = calculatePayee(basicSalary);
    let nhifDeductions = calculateNHIF(basicSalary);
    let nssfDeductions = calculateNSSF(basicSalary);
    
    let grossSalary = basicSalary + benefits;
    let netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
    
    document.getElementById('net-salary-output').innerHTML = `
      <p>Gross Salary: ${grossSalary}</p>
      <p>Payee (Tax): ${payee}</p>
      <p>NHIF Deductions: ${nhifDeductions}</p>
      <p>NSSF Deductions: ${nssfDeductions}</p>
      <p>Net Salary: ${netSalary}</p>
    `;
  }
  
  function calculatePayee(salary) {
    // Calculate payee based on KRA tax rates
    // Add your logic here
  }
  
  function calculateNHIF(salary) {
    // Calculate NHIF deductions
    // Add your logic here
  }
  
  function calculateNSSF(salary) {
    // Calculate NSSF deductions
    // Add your logic here
  }
  