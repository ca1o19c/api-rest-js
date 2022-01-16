const express = require('express');
const router = express.Router();

const basePath = '/blog-api/v1'

router.get(`${basePath}/posts`, async function (req, res) {});
router.get(`${basePath}/posts:id`, async function (req, res) {});
router.post(`${basePath}/posts`, async function (req, res) {});
router.put(`${basePath}/posts:id`, async function (req, res) {});
router.delete(`${basePath}/posts:id`, async function (req, res) {});

module.exports = router;
