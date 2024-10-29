var express = require('express');
var router = express.Router();

let carsController = require('../controllers/cars');

/* GET cars listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

// List all cars
router.get('/list', carsController.list);

// Create a new car
router.post('/create', carsController.create);

// Get a specific car by ID
router.get('/get/:carID', carsController.carGet, carsController.carByID);

// Edit a car (update)
router.put('/edit/:carID', carsController.update); // Adding the edit route

// Delete a car
router.delete('/delete/:carID', carsController.remove);

module.exports = router;
