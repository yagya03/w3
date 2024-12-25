function EmployeeInfo(name,Salary) 
{ 
console.log("Wellcome " + name+ ", Your monthly Salary is "+ Salary) 
} 
console.log ("This is my first progame") 
var EmpName="Yagya" 
var EmpSalary= 100000 
EmployeeInfo(EmpName,EmpSalary)
const EmpSkills= (skills)=> { 
  console.log("Expert in "+ skills) 
} 
EmpSkills("java") 

// Importing modules (ensure the files exist)
const student = require('./StudentInfo');
const person = require('./Person');

console.log("Student Name: " + student.getName());
console.log("Student Location: " + student.Location());
console.log("Student DOB: " + student.dob);
console.log("Student Grade: " + student.Studentgrade());
console.log("Grade is " + student.Studentgrade(55));

person1= new person("Sue","Nepal","yagyasharu@gmail.com") 
console.log("using Person Module",person1.getPersonInfo()) 
console.log("Programe ended")