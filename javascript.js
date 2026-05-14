// ARRAY TO STORE STUDENTS
const students = [];
function calculateGrade(marks){

  if(marks >= 80 && marks <= 100){
    return "A";
  }

  else if(marks >= 70){
    return "B";
  }

  else if(marks >= 60){
    return "C";
  }

  else if(marks >= 50){
    return "D";
  }

  else{
    return "F";
  }
}

function getStatus(marks){

  if(marks >= 50){
    return "Pass";
  }

  else{
    return "Fail";
  }
}

function addStudent(){

  // GET VALUES FROM INPUTS
  const name =
    document.getElementById("name").value;

  const course =
    document.getElementById("course").value;

  const marks =
    Number(document.getElementById("marks").value);

  const student = {
    name: name,
    course: course,
    marks: marks,
    grade: calculateGrade(marks),
    status: getStatus(marks)
  };

  students.push(student);

  // DISPLAY RESULTS
  displayResults();

  // CLEAR INPUTS
  document.getElementById("name").value = "";
  document.getElementById("course").value = "";
  document.getElementById("marks").value = "";
}

// FUNCTION TO DISPLAY RESULTS
function displayResults(){

  const resultBody =
    document.getElementById("resultBody");

  resultBody.innerHTML = "";

  // LOOP THROUGH ARRAY
  students.forEach(student => {

    resultBody.innerHTML += `
      <tr>
        <td>${student.name}</td>
        <td>${student.course}</td>
        <td>${student.marks}</td>
        <td>${student.grade}</td>
        <td>${student.status}</td>
      </tr>
    `;
  });
}