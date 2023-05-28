const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  let responseText = '';
  if (req.url === '/') {
    responseText += 'Hello Holberton School!';
    res.writeHead(200, { 'Content-Type': 'text/plain', 'Content-Length': responseText.length });
    res.write(responseText);
    res.end();
  } else if (req.url === '/students') {
    const path = process.argv[2];
    if (!fs.existsSync(path)) {
      responseText += 'Cannot load the database';
      res.writeHead(200, { 'Content-Type': 'text/plain', 'Content-Length': responseText.length });
      res.write(responseText);
      res.end();
      return;
    }
    responseText += 'This is the list of our students\n';
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
      responseText += `Number of students: ${NUMBER_OF_STUDENTS}\n`;
      Object.keys(mapFieldToStudents).forEach((field) => {
        const numOfStdInField = mapFieldToStudents[field];
        const len = numOfStdInField.length;
        responseText += `Number of students in ${field}: ${len}. List: ${numOfStdInField.join(', ')}\n`;
      });
      responseText = responseText.slice(0, -1);
      res.writeHead(200, { 'Content-Type': 'text/plain', 'Content-Length': responseText.length });
      res.write(responseText);
      res.end();
    });
  }
}).listen(1245);
module.exports = app;
