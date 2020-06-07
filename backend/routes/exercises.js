const router = require('express').Router();
let Exercise = require('../models/exercise.model');


// Router to get all exercises
router.route('/').get((req, res) => {

    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error' + err));
});

// Router to add new exercises
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date(req.body.date);
    const newExercise = new Exercise({ username, description, duration, date });

    newExercise.save()
        .then(() => res.json('Exercises added !'))
        .catch(err => res.status(400).json('Error' + err));
});


// Router to get exercise by id 
router.route('/:id').get((req, res) => {

    Exercise.findById(req.param.id)
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error' + err));
});


// Router to delete exercise
router.route('/:id').delete((req, res) => {

    Exercise.findByIdAndDelete()
        .then(() => res.json('exercise deleted'))
        .catch(err => res.status(400).json('Error' + err));
});


// Router to update exercise
router.route('/update/:id').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date(req.body.date);
    const newExercise = new Exercise({ username, description, duration, date });

    newExercise.save()
        .then(() => res.json('Exercises updated !'))
        .catch(err => res.status(400).json('Error' + err));
});

module.exports = router;