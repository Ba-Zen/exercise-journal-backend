const db = require('../database/dbConfig.js');

module.exports = {
  find,
  findById,
  insert,
  remove,
  update
};

function find() {
  return db('exercises');
}

function findById(id) {
  return db('exercises').where({ id: id });
}

function insert(exercise) {
  return db('exercises')
    .insert(exercise)
    .then(ids => ids);
}

function update(id, changes) {
  return db('exercises')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('exercises')
    .where({ id })
    .del();
}
