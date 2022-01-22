const axios = require('axios');
const blogService = require('../service/blogService');
const crypto = require('crypto');

const generate = function () {
  return crypto.randomBytes(20).toString('hex')
}

const basePath = 'http://localhost:3000/blog-api/v1';

const request = function (url, method, data) {

  return axios({ url, method, data })
}

test('Should get posts', async function () {

  const post1 = await blogService.save({ title: generate(), content: generate() })
  const post2 = await blogService.save({ title: generate(), content: generate() })
  const post3 = await blogService.save({ title: generate(), content: generate() })

  const response = await request(`${basePath}/posts`, 'get');

  const posts = response.data;

  expect(posts).toHaveLength(3);

  await blogService.delete(post1.id);
  await blogService.delete(post2.id);
  await blogService.delete(post3.id);
});

test('Should save posts', async function () {

  const payload = { title: generate(), content: generate() };

  const response = await request(`${basePath}/posts`, 'post', payload);

  const post = response.data;

  expect(post).not.toBeNull()
  expect(post.title).toBe(payload.title)
  expect(post.content).toBe(payload.content)

  console.log(post.id);

  await blogService.delete(post.id);
});
