exports.seed = function(knex, Promise) {
  return knex('exercises')
    .del()
    .then(function() {
      return knex('exercises').insert([
        {
          name: 'Arm Curls',
          sets: 3,
          reps: 10,
          weight: 40
        },
        {
          name: 'Bench Press',
          sets: 3,
          reps: 8,
          weight: 200
        },
        {
          name: 'Squats',
          sets: 5,
          reps: 10,
          weight: 150
        }
      ]);
    });
};
