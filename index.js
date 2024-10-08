const Person = require('./person.js');
const express = require('express');
const app = express();
const port = 3000;

console.log(Person);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
