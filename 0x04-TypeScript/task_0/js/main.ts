interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 15,
  location: "United State"
}

const student2: Student = {
  firstName: "Jonathan",
  lastName: "Wick",
  age: 20,
  location: "United State"
}
const studentList: Array<Student> = [student1, student2];

const htmlTable = document.createElement('table');


for (const student of studentList) {
  const row = document.createElement('tr');
  const data1 = document.createElement('td');
  const data2 = document.createElement('td');
  data1.textContent = student.firstName;
  data2.textContent = student.location;
  row.appendChild(data1);
  row.appendChild(data2);
  htmlTable.appendChild(row); 
}

console.log(htmlTable)
console.log(htmlTable.innerHTML)