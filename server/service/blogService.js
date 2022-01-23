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

exports.update = function (id, post) {
  return blogData.update(id, post);
}

exports.getUnique = function (id) {
  return blogData.getUnique(id);
};

exports.deleteAll = function () {
  return blogData.deleteAll();
}
