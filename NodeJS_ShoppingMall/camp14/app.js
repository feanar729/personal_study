const express = require('express');
const admin = require('./routes/admin.js');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('first app');
});

app.use('/admin', admin);

app.listen(port, (req, res) => {
  console.log('Express listening on port', port);
});
