const blogData = require('../data/blogData');

exports.getPosts = function () {
  return blogData.getPosts();
};
