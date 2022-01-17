const express = require('express');
const router = express.Router();
const blogService = require('../service/blogService');

router.get('/posts', async function (req, res) {
  const posts = await blogService.getPosts();
  res.json(posts);
});

router.get('/posts/:id', async function (req, res) {});
router.post('/posts', async function (req, res) {});
router.put('/posts/:id', async function (req, res) {});
router.delete('/posts/:id', async function (req, res) {});

module.exports = router;
