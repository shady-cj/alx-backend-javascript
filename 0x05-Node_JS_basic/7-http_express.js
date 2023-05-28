const express = require('express');

const fs = require('fs');

const app = express();

const PORT = 1245;
const path = process.argv[2];
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let responseText = '';
  responseText += 'This is the list of our students\n';
  if (!fs.existsSync(path)) {
    responseText += 'Cannot load the database';
    res.send(responseText);
    return;
  }
  const promData = fs.promises.readFile(path);
  promData.then((data) => {
    const dataArray = data.toString().split('\n');
    const cleanedDataArray = dataArray.filter((data, index) => {
      if (index === 0 || data === '') return false;
      return true;
    });
    const NUMBER_OF_STUDENTS = cleanedDataArray.length;
    const mapFieldToStudents = {};
    cleanedDataArray.forEach((data) => {
      const splitData = data.split(',');
      const field = splitData[splitData.length - 1];
      const firstName = splitData[0];
      if (field in mapFieldToStudents) {
        mapFieldToStudents[field].push(firstName);
      } else {
        mapFieldToStudents[field] = [firstName];
      }
    });
    responseText += `Number of students: ${NUMBER_OF_STUDENTS}\n`;
    Object.keys(mapFieldToStudents).forEach((field) => {
      const numOfStdInField = mapFieldToStudents[field];
      const len = numOfStdInField.length;
      responseText += `Number of students in ${field}: ${len}. List: ${numOfStdInField.join(', ')}\n`;
    });
    responseText = responseText.slice(0, -1);
    res.send(responseText);
});
})
app.listen(PORT);
module.exports = app;