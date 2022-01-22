const express = require('express');
const app = express();

app.use(express.json());
app.use('/blog-api/v1', require('./route/blogRoute'));
app.listen(3000);
