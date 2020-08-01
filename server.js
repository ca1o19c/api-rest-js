const express = require('express');
const app = express();

app.get('/clients');
app.post('/clients');
app.put('/clients');
app.delete('/clients');

app.listen(3000, function () {
  console.log('Server is running');
});