const express = require('express');
const router = express.Router();
const blogService = require('../service/blogService');

router.get('/posts', async function (req, res) {
  const posts = await blogService.findAll();
  res.json(posts);
});

router.post('/posts', async function (req, res) {
  const payload = req.body;

  const save = await blogService.save(payload);
  res.json(save);
});

module.exports = router;
