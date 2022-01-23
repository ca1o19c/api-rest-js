const axios = require('axios');
const blogService = require('../service/blogService');
const crypto = require('crypto');

beforeEach(() => {
  blogService.deleteAll();
});

const generate = function () {
  return crypto.randomBytes(20).toString('hex')
}

const basePath = 'http://localhost:3000/blog-api/v1';

const request = function (url, method, data) {

  return axios({ url, method, data })
}

test('Should get posts', async function () {

  const payload1 = await blogService.save({ title: generate(), content: generate() })
  const payload2 = await blogService.save({ title: generate(), content: generate() })
  const payload3 = await blogService.save({ title: generate(), content: generate() })

  const response = await request(`${basePath}/posts`, 'get');

  const posts = response.data;

  expect(response.status).toBe(200);
  expect(posts).not.toBeNull();
  expect(posts).toHaveLength(3);

  await blogService.delete(payload1.id);
  await blogService.delete(payload2.id);
  await blogService.delete(payload3.id);
});

test('Should save a post', async function () {

  const payload = { title: generate(), content: generate() };

  const response = await request(`${basePath}/posts`, 'post', payload);

  const post = response.data;

  expect(response.status).toBe(201);
  expect(post).not.toBeNull();
  expect(post.title).toBe(payload.title);
  expect(post.content).toBe(payload.content);

  await blogService.delete(post.id);
});

test('Should update a post', async function () {

  const payload = await blogService.save({ title: generate(), content: generate() })

  payload.title = "updated title";
  payload.content = "updated content";

  const response = await request(`${basePath}/posts/${payload.id}`, 'put', payload);

  const updatedPost = await blogService.getUnique(payload.id);

  expect(response.status).toBe(204);
  expect(updatedPost).not.toBeNull();
  expect(updatedPost.title).toBe(payload.title);
  expect(updatedPost.content).toBe(payload.content);

  await blogService.delete(payload.id);
});


test('Should delete a post', async function () {
  const payload = await blogService.save({ title: generate(), content: generate() })
  const id = payload.id;

  const response = await request(`${basePath}/posts/${payload.id}`, 'delete');

  const existsPost = await blogService.getUnique(id);

  expect(response.status).toBe(204);
  expect(existsPost).toBeNull();

  await blogService.delete(payload.id);
});

test('Should get unique post', async function () {
  const payload = await blogService.save({ title: generate(), content: generate() })

  const response = await request(`${basePath}/posts/${payload.id}`, 'get');

  const post = response.data;

  expect(response.status).toBe(200);
  expect(post).not.toBeNull();
  expect(post.id).toEqual(payload.id);

  await blogService.delete(payload.id);
});
