const express = require('express');
const router = express.Router();
const blogService = require('../service/blogService');

router.get('/posts', async function (req, res) {
  const posts = await blogService.findAll();
  res.status(200).json(posts);
});

router.post('/posts', async function (req, res) {
  const payload = req.body;

  const save = await blogService.save(payload);
  res.status(201).json(save);
});

router.get('/posts/:id', async function (req, res) {
  const id = req.params.id;

  const posts = await blogService.getUnique(id);
  res.status(200).json(posts);
});

router.put('/posts/:id', async function (req, res) {
  const payload = req.body;

  await blogService.update(req.params.id, payload);
  res.status(204).end();
});

router.delete('/posts/:id', async function (req, res) {
  const id = req.params.id;

  await blogService.delete(id);
  res.status(204).end();
});


module.exports = router;
