const database = require('../infra/database');

exports.findAll = function () {
  return database.query('select * from blog.post');
}

exports.save = function (post) {
  return database.one(
    'insert into blog.post (title, content) values ($1, $2) returning *',
     [post.title, post.content])
}

exports.delete = function (id) {
  return database.none('delete from blog.post where id = $1', [id]);
}

exports.update = function (id, post) {
  return database.none('update blog.post set title = $1, content = $2 where id = $3',
   [post.title, post.content, id]);
}

exports.getUnique = function (id) {
  return database.oneOrNone('select * from blog.post where id = $1', [id]);
}
