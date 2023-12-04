
/* document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    var employeeName = document.getElementById('employeeName').value;
    var project = document.getElementById('project').value;
    var employeeList = document.getElementById('employeeList');
    
    // Create a new list item with the employee's name and project
    var listItem = document.createElement('li');
    listItem.textContent = employeeName + ' - ' + project;
    
    // Add the new list item to the list of employees
    employeeList.appendChild(listItem);
    
    // Clear the form fields
    document.getElementById('employeeName').value = '';
    document.getElementById('project').value = '';
  }); */



  document.getElementById('newEmployeeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    let employeeName = document.getElementById('newEmployeeName').value;
    let project = document.getElementById('NewProject').value;
    let employeeList = document.getElementById('newEmployeeList');
    
    // Create a new list item with the employee's name and project
    let listItem = document.createElement('li');
    listItem.classList.add("list-group-item");
    listItem.textContent = employeeName + ' - ' + project;
    
    // Add the new list item to the list of employees
    employeeList.appendChild(listItem);
    
    // Clear the form fields
    document.getElementById("newEmployeeForm").reset();
  });