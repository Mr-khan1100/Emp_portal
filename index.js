var selectedRow = null;
function onFormSubmit(){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
        
    }else{

    }
    formData.innerHTML = '';
}

// allow only alphabets
const alphabets = document.getElementById('EmpName');
alphabets.addEventListener('input',function(event){
    const inputValue = event.target.value;
    const sanitizedValue = inputValue.replace(/[^A-Za-z]/g, '');
    event.target.value= sanitizedValue;
});


function readFormData(){
    var ID = document.getElementById('Emp_id').value;
    var name = document.getElementById('EmpName').value;
    var age = document.getElementById('EmpAge').value;
    var gender = document.getElementById('Emp_gender').value;

    var formData = {
        Emp_id : ID,
        EmpName : name,
        EmpAge : age,
        Emp_gender : gender
    };
    // formData['Emp_id'] = document.getElementById('Emp_id').value;
    // formData['EmpName'] = document.getElementById('EmpName').value;
    // formData['EmpAge'] = document.getElementById('EmpAge').value;
    // formData['Emp_gender'] = document.getElementById('Emp_gender').value;
    // formData['Emp_id'] = ID;
    // formData['EmpName'] = name;
    // formData['EmpAge'] = age ;
    // formData['Emp_gender'] = gender;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById('emp_list').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.Emp_id;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.EmpName;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.EmpAge;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.Emp_gender;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button  onclick='onEdit()'>Edit</button> <button class='delete_btn'>Delete</button>`;
}

// function onEdit(td){
//     selectedRow = td.parentElement.parentElement;
//     document.getElementById('Ep_id').value = selectedRow.cells[0].innerHTML;
//     document.getElementById('EmpName').value = selectedRow.cells[1].innerHTML;
//     document.getElementById('EmpAge').value = selectedRow.cells[2].innerHTML;
//     document.getElementById('Emp_gender').value = selectedRow.cells[3].innerHTML;


// }

function onEdit(){
    
}