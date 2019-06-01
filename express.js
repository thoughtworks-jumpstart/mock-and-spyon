const express = require('express');
const app = express();
const port = 3333;

const nameList = ['Peter', 'Lisa'];

app.get('/name', (req, res) => res.send(nameList[Math.round(Math.random())]));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
