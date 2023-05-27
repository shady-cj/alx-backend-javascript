const fs = require('fs');


async function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  const data = await fs.promises.readFile(path);
  const dataArray = data.toString().split('\n');
  const cleanedDataArray = dataArray.filter((data, index) => {
    if (index === 0 || data === '') return false;
    return true;
  });
  const NUMBER_OF_STUDENTS = cleanedDataArray.length;
  const mapFieldToStudents = {};
  cleanedDataArray.forEach((data) => {
    if (data === '') return;
    const splitData = data.split(',');
    const field = splitData[splitData.length - 1];
    const firstName = splitData[0];
    if (field in mapFieldToStudents) {
      mapFieldToStudents[field].push(firstName);
    } else {
      mapFieldToStudents[field] = [firstName];
    }
  });
  console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
  Object.keys(mapFieldToStudents).forEach((field) => {
    const numOfStdInField = mapFieldToStudents[field];
    const len = numOfStdInField.length;
    console.log(`Number of students in ${field}: ${len}. List: ${numOfStdInField.join(', ')}`);
  });
}

module.exports = countStudents;