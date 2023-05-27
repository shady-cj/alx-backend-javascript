const app = require('http');

app.createServer((req, res) => {
  const responseText = 'Hello Holberton School!';
  res.writeHead(200, {'Content-Type': 'text/plain', 'Content-Length': responseText.length})
  res.write(Buffer.from(responseText));
  res.end();
}).listen(1245);

module.exports = app;
