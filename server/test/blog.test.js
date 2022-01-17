const axios = require('axios');
const basePath = 'http://localhost:3000/blog-api/v1';

test('Should get posts', async function () {
  const response = await axios({
    url: `${basePath}/posts`,
    method: 'get'
  });

  const posts = response.data;

  expect(posts).toHaveLength(3);

  const [firstPost] = posts;

  expect(firstPost.id).toBe(1);
  expect(firstPost.title).toBe('REST API: Métodos');
});
