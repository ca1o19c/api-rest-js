const blogData = require('../data/blogData');

exports.findAll = function () {
  return blogData.findAll();
};

exports.save = function (post) {
  return blogData.save(post);
}

exports.delete = function (id) {
  return blogData.delete(id);
}
