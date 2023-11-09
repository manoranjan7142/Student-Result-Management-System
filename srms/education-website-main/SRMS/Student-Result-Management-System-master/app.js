
var students = [
    {
        name: 'Pratik',
        rollNumber: 2205112110094,
        wad: 89,
        mad: 95,
        fsw: 79,
        python: 83,
    },
    {
        name: 'Abdulrajak',
        rollNumber: 2205112110094,
        wad: 89,
        mad: 95,
        fsw: 79,
        python: 83,
    },
    {
	name: 'Manoranjan',
        rollNumber: 2205112110050,
        wad: 89,
        mad: 95,
        fsw: 79,
        python: 83,
    }
]
var main = document.getElementById('main')
var searched = document.getElementById("search")
function add() {
    for (var i = 0; i < students.length; i++) {
        main.innerHTML += `
<tr>
<td>${[i + 1]}</td>
<td>${students[i].name}</td>
<td>${students[i].rollNumber}</td>
<td>${students[i].wad}</td>
<td>${students[i].mad}</td>
<td>${students[i].fsw}</td>
<td>${students[i].python}</td>
<td>${students[i].wad + students[i].mad + students[i].fsw + students[i].python}</td>
<td>${((students[i].wad + students[i].mad + students[i].fsw + students[i].python ) * 100 / 400).toFixed(2)}%</td>
<td><input type="button" value="Delete" class="delBtn" onclick="deleteRow(this)"></td>
<tr>
`};
}
add();
function search() {
    var found = false;
    for (i = 0; i < students.length; i++) {
        if (searched.value.toLowerCase() == students[i].name.toLowerCase()) {
            found = true;
            Swal.fire({
                // title: `Student Found!`,
                title: `Name: ${students[i].name}`,
                text: ` WAD: ${students[i].wad} | MAD: ${students[i].mad} | FSW: ${students[i].fsw} | Python ${students[i].python}} | Total: ${students[i].wad + students[i].mad + students[i].fsw + students[i].python} | Percentage: ${((students[i].wad + students[i].mad + students[i].fsw + students[i].python) * 100 / 400).toFixed(2)}%`,
                icon: 'success',
                confirmButtonText: 'Done'
            });
            searched.value = ""
        }
    }            
    if (found === false) {
        Swal.fire({
            icon: 'error',
            title: 'Error Finding Student',
            text: searched.value + ' Is Not In This List',
        })
        searched.value = ""
    }
}
function newStudent() {
    Swal.fire({
      title: 'Enter Student Details',
      html:
      '<input id="swal-input1" class="swal2-input" placeholder="Name">' +
        '<input id="swal-input2" class="swal2-input" placeholder="Roll Number">' +
        '<input id="swal-input3" class="swal2-input" placeholder="Math">' +
        '<input id="swal-input4" class="swal2-input" placeholder="MAD">' +
        '<input id="swal-input5" class="swal2-input" placeholder="FSW">' +
        '<input id="swal-input6" class="swal2-input" placeholder="Python">', 
      focusConfirm: false,
      preConfirm: () => {
        const name = document.getElementById('swal-input1').value;
        const rollNumber = document.getElementById('swal-input2').value;
        const wad = parseInt(document.getElementById('swal-input3').value);
        const mad = parseInt(document.getElementById('swal-input4').value);
        const fsw = parseInt(document.getElementById('swal-input5').value);
        const python = parseInt(document.getElementById('swal-input6').value);
  
        if (isNaN(wad) || isNaN(mad) || isNaN(fsw) || isNaN(python)) {
          Swal.fire({
            icon: 'error',
            title: 'Invalid Input',
            text: 'Please enter numeric values for WAD, MAD, FSW, Python.',
          });
          return false; // Prevent closing the alert
        }
  
        return [name, rollNumber, wad, mad, fsw, python];
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const formValues = result.value;
  
        const student = {
          name: formValues[0],
          rollNumber: parseInt(formValues[1]),
          wad: parseInt(formValues[2]),
          mad: parseInt(formValues[3]),
          fsw: parseInt(formValues[4]),
          python: parseInt(formValues[5]),
        };
  
        students.push(student);
        const index = students.length - 1;
        main.innerHTML += `
          <tr>
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.rollNumber}</td>
            <td>${student.wad}</td>
            <td>${student.mad}</td>
            <td>${student.fsw}</td>
            <td>${student.python}</td>
            <td>${student.wad + student.mad + student.fsw + student.python}</td>
            <td>${((student.wad + student.mad + student.fsw + student.python) * 100 / 400).toFixed(2)}%</td>
            <td><input type="button" class="delBtn" value="Delete" onclick="deleteRow(this)"></td>
          </tr>
        `;
      }
    });
  }

  // Delete Function
function deleteRow(r) {
  if (confirm('Are you sure to delete this record ?')) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("table").deleteRow(i);
}}