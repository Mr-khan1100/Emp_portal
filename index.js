var EmployeeIDs = [];
var ID = document.getElementById('Emp_id').value;
var name = document.getElementById('EmpName').value;
var age = document.getElementById('EmpAge').value;
var gender = document.getElementById('Emp_gender').value;

var formData;

var selectedRow;

function VerifyId(formData){
    let isValid = true
    var i=0;
    for(i=0;i<=EmployeeIDs.length-1;i++){
    if(ID==EmployeeIDs[i].Emp_id){
        isValid=false;
        console.log('ds')
    }
    }
    return isValid
    
};

function insertNewRecord(formData){
    if(VerifyId(formData)){
    EmployeeIDs.push(formData);
    console.log(EmployeeIDs);
    var table = document.getElementById('emp_list').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    newRow.innerHTML = `<td>${formData.Emp_id}</td>
    <td>${formData.EmpName}</td>
    <td>${formData.EmpAge}</td>
    <td>${formData.Emp_gender}</td>
    <td>
    <button class="editButton" onclick='onEdit(${EmployeeIDs.length - 1})'>Edit</button>
    <button class="delete_btn">Delete</button>
    </td>`;
    tbody.appendChild(newRow);
    }else{
        console.log('fds')
    }
};



function validateForm(){
    event.preventDefault();
    var ID = document.getElementById('Emp_id').value;
    var name = document.getElementById('EmpName').value;
    var age = document.getElementById('EmpAge').value;
    var gender = document.getElementById('Emp_gender').value;


    var idError = document.getElementById('idError');
    var nameError = document.getElementById('nameError');
    var ageError = document.getElementById('ageError');
    var selectError = document.getElementById('selectError');

    idError.textContent  = '';
    nameError.textContent = '';
    ageError.textContent = '';
    selectError.textContent = '';   
    document.getElementById('Emp_id').value = '';
    document.getElementById('EmpName').value = '';
    document.getElementById('EmpAge').value = '';
    document.getElementById('Emp_gender').value= '';


    var isValid = true;
    
    var formData = {
        Emp_id : ID,
        EmpName : name,
        EmpAge : age,
        Emp_gender : gender
    };


    if(formData.Emp_id.trim() === ""){
        idError.textContent = "Employee ID is required"
        isValid = false;
    }else if(EmployeeIDs.some((emp)=>emp.Emp_id === formData.Emp_id)){
        idError.textContent = 'Id already exist'
        isValid =false;
    }
    
    if(formData.EmpName.trim() === ""){
        nameError.textContent = 'Name is required'
        isValid = false;
    }
    if(formData.EmpAge.trim()===""){
        ageError.textContent  = 'This field is Required'
        isValid = false;
    }
    if(formData.Emp_gender === ""){
        selectError.textContent = "select field"
        isValid = false;
    }
    if(isValid == true){
 
        insertNewRecord(formData);
    }
}


// allow only Alphabets as Name
function restrictToAlphabets(inputElement) {
    inputElement.addEventListener('input', function(event) {
        const inputValue = event.target.value;
        const sanitizedValue = inputValue.replace(/[^A-Za-z]/g, '');
        event.target.value = sanitizedValue;
    });
};

  // Assign the function to two input fields
const EmpName= document.getElementById('EmpName');
restrictToAlphabets(EmpName);

const editEmpName = document.getElementById('editEmpName');
restrictToAlphabets(editEmpName);


// only eligable Age group
function ageValidate(inputElement) {
    inputElement.addEventListener('input', function(event) {
    const age = parseInt(event.target.value);
    
    if (isNaN(age) || age < 18 ) {
        inputElement.setCustomValidity('Invalid age. Please enter an age between 18 and 59.');

    } else if(age >= 60){
        inputElement.setCustomValidity('EMployee too old')

    }else{
        inputElement.setCustomValidity('');
    }
    });
    };
    
    // Assign the function to two age input fields
    const EmpAge = document.getElementById('EmpAge');
    ageValidate(EmpAge);
    
    const editEmpAge = document.getElementById('editEmpAge');
    ageValidate(editEmpAge);


    function onEdit(index) {
        const employee = EmployeeIDs[index];
        document.getElementById('editEmpId').value = employee.Emp_id;
        document.getElementById('editEmpName').value = employee.EmpName;
        document.getElementById('editEmpAge').value = employee.EmpAge;
        document.getElementById('editEmpGender').value = employee.Emp_gender;
        selectedRow = index;
        document.getElementById('editPopup').style.display = 'block';
    }

    function saveChanges() {
        
        var editedEmpId = document.getElementById('editEmpId').value;
        var editedEmpName = document.getElementById('editEmpName').value;
        var editedEmpAge = document.getElementById('editEmpAge').value;
        var editedEmpGender = document.getElementById('editEmpGender').value;
      
        // Update the EmployeeIDs array with the edited values
        EmployeeIDs[selectedRow].Emp_id = editedEmpId;
        EmployeeIDs[selectedRow].EmpName = editedEmpName;
        EmployeeIDs[selectedRow].EmpAge = editedEmpAge;
        EmployeeIDs[selectedRow].Emp_gender = editedEmpGender;
      
        // Update the table row with the edited values
        var table = document.getElementById('emp_list');
        var row = table.rows[selectedRow + 2];
        row.cells[0].innerHTML = editedEmpId;
        row.cells[1].innerHTML = editedEmpName;
        row.cells[2].innerHTML = editedEmpAge;
        row.cells[3].innerHTML = editedEmpGender;
      
        // Hide the edit popup
        document.getElementById('editPopup').style.display = 'none';
      }
      


function onCancel(){
    document.getElementById('editPopup').style.display = 'none';
}
