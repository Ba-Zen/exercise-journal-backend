exports.up = function(knex, Promise) {
  return knex.schema.createTable('exercises', tbl => {
    tbl.increments('id');
    tbl.string('name', 128).notNullable();
    tbl.integer('reps').notNullable();
    tbl.integer('sets').notNullable();
    tbl.string('weight', 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('exercises');
};
