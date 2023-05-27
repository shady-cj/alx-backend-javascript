const http = require('http');

const app = http.createServer((req, res) => {
  const responseText = 'Hello Holberton School!';
  res.writeHead(200, { 'Content-Type': 'text/plain', 'Content-Length': responseText.length });
  res.write(responseText);
  res.end();
}).listen(1245);

module.exports = app;
