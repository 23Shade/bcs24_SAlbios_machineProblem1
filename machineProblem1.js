// ITCS227 Source Code Template for 2T AY 2022-2023
/*
    Program:     Computation of Grades using Function
    Programmer:  Shahid Albios
    Section:     BCS24
    Start Data:  May 5, 2023
    End Date:    May 5, 2023
*/
  
// Requirement 2 - use a for loop to read the grades of each student using the input 
// Function that prompts the user for enabling assessments and returns the rounded average
function computeClassParticipation(student) {
let enablingAssessments = [];

// Loop to prompt user for 5 enabling assessments and add them to an array
for (let i = 1; i <= 5; i++) {
    let score = prompt(`Student: ${student} \nEnter enabling assessment ${i}:`);
    enablingAssessments.push(parseInt(score));
}

// Returns the rounded average of enabling assessments
return parseFloat((enablingAssessments.reduce((sum, grade) => sum + grade) / enablingAssessments.length).toFixed(2));
}

// Function that prompts the user for summative assessments and returns the rounded average
function computeSummativeAssessments(student) {
let summativeAssessments = [];

// Loop to prompt user for 3 summative assessments and add them to an array
for (let i = 1; i <= 3; i++) {
    let score = prompt(`Student: ${student} \nEnter summative assessment ${i}:`);
    summativeAssessments.push(parseInt(score));
}

// Returns the rounded average of summative assessments
return parseFloat((summativeAssessments.reduce((sum, grade) => sum + grade) / summativeAssessments.length).toFixed(2));
}

// Requirement 3 - use if-elif-else statements to calculate the letter grade for each student based on the grading system
// function that returns the letter grade for a given grade score
function computeLetterGrade(grade) {
    if (grade >= 90) {
      return 'A';
    } else if (grade >= 80) {
      return 'B';
    } else if (grade >= 70) {
      return 'C';
    } else if (grade >= 60) {
      return 'D';
    } else {
      return 'F';
    }
}

// Function that adds a new row to the table with the specified values
// Requirement 5 - use formatted output to display the results
function addRowToTable(student, classParticipation, summativeAssessment, examGrade, gradeScore, letterGrade) {
  // HTML string as an array
  let row = [
      '<tr>',
      `<td>${student}</td>`,
      `<td>${classParticipation}</td>`,
      `<td>${summativeAssessment}</td>`,
      `<td>${examGrade}</td>`,
      `<th>${gradeScore}</th>`,
      `<th>${letterGrade}</th>`,
      '</tr>'
  ];

  // Joins the array elements into a single string
  let rowHTML = row.join('');

  // Creates a new table row element and sets its innerHTML to the row HTML
  let tr = document.createElement('tr');
  tr.innerHTML = rowHTML;

  // Appends the new row to the table
  document.querySelector('table').innerHTML += rowHTML;
}

/* Function that gets the name, class participation, summative assessments, exam grade, 
calculates the final grade and letter grade, and adds a row to the table */
function computeGrades() {
  let student = prompt('Enter the name of the student:');
  let classParticipation = computeClassParticipation(student);
  let summativeAssessment = computeSummativeAssessments(student);
  let examGrade = parseInt(prompt(`Student: ${student} \nEnter major exam grade:`));

  /* Requirement 4 - calculate the grade of the five students and display it along 
  with the corresponding letter grade based on the grading system */
  // calculate the final grade
  let gradeScore = Math.round(classParticipation * 0.3 + summativeAssessment * 0.3 + examGrade * 0.4);

  // Get the letter grade for the final grade
  let letterGrade = computeLetterGrade(gradeScore);
  
  // Add a new row to the table with the computed values
  addRowToTable(student, classParticipation, summativeAssessment, examGrade, gradeScore, letterGrade);
}

// Requirement 1 - prompt the user to enter the grades of five students
for (let i = 0; i < 5; i++) {
  computeGrades();
}