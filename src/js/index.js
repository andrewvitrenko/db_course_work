const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8000;
const host = '0.0.0.0';

const connection = require('./db');

connection.connect();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', require('./controls'));

app.listen(port, host, () => {
  console.log(`Started server: ${host}/${port}`);
});
