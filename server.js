const express = require('express');
const app = express();
const data = require('./data.json');

app.use(express.json());

app.get('/clients', (req, res) => {
  res.json(data);
});

app.get('/clients/:id', (req, res) => {
  const { id } = req.params;
  const client = data.find((c) => c.id == id);

  if (!client) return res.status(204).json();

  res.json(client);
});

app.post('/clients', function (req, res) {
  const { name, email, username } = req.body;

  res.json({ name, email, username });
});

app.put('/clients/:id', function (req, res) {});

app.delete('/clients/:id', function (req, res) {});

app.listen(3000, function () {
  console.log('Server is running');
});
