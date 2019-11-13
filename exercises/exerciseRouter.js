const express = require('express');

const Exercises = require('./exerciseModel.js');

const router = express();

router.post('/', (req, res) => {
  const { name, reps, sets, weight } = req.body;
  const exercise = req.body;
  if (!name || !reps || !sets || !weight) {
    res.status(400).json({
      error: 'Please provide name, reps, sets, and weight for the exercise'
    });
  } else {
    Exercises.insert(exercise)
      .then(exercise => {
        res.status(201).json(req.body);
      })
      .catch(error => {
        res
          .status(500)
          .json({ error, message: 'Error saving exercise to database' });
      });
  }
});

router.get('/', (req, res) => {
  Exercises.find()
    .then(exercises => {
      res.status(200).json(exercises);
    })
    .catch(error => {
      res.status(500).json({
        error,
        err: 'the exercises could not be retrieved'
      });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Exercises.findById(id)
    .then(exercise => {
      if (exercise) {
        res.status(200).json(exercise);
      } else {
        res.status(404).json({
          message: 'The exercise with the specified id does not exist'
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        error,
        error: 'The exercise information could not be retrieved'
      });
    });
});

router.put('/:id', (req, res) => {
  const { name, reps, sets, weight } = req.body;
  const { id } = req.params;

  if (!name || !reps || !sets || !weight) {
    res.status(400).json({
      error: 'Please provide name, reps, sets, and weight for the exercise'
    });
  } else {
    Exercises.update(id, req.body)
      .then(exercise => {
        if (exercise) {
          res.status(200).json(req.body);
        } else {
          res.status(404).json({
            message: 'The exercise with the specified ID does not exist'
          });
        }
      })
      .catch(error => {
        res
          .status(500)
          .json({ error, error: 'The exercise could not be updated' });
      });
  }
});

module.exports = router;
