let CarModel = require('../models/cars');

module.exports.create = async function (req, res, next) {
    try {
        let newCar = new CarModel(req.body);

        let result = await CarModel.create(newCar);
        res.json({
            success: true,
            message: 'Car created successfully.'
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.list = async function (req, res, next) {
    try {
        // Fetch all cars from the database
        const cars = await CarModel.find({});
        
        // Return the list of cars in the response
        res.json({
            success: true,
            cars: cars // Return the array of cars
        });
    } catch (error) {
        console.log(error);
        next(error); // Pass the error to the next middleware
    }
}

module.exports.carGet = async function (req, res, next) {
    try {
        let uID = req.params.carID;

        req.car = await CarModel.findOne({ _id: uID });
        next();
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.carByID = async function (req, res, next) {
    res.json(req.car);
}

module.exports.update = async function (req, res, next) {
    try {
        let uID = req.params.carID;

        let updateCar = new CarModel(req.body);
        updateCar._id = uID;

        let result = await CarModel.updateOne({ _id: uID }, updateCar);
        console.log(result);

        if (result.modifiedCount > 0) {
            res.json({
                success: true,
                message: 'Car updated successfully.'
            });
        } else {
            // Express will catch this on its own.
            throw new Error('Car not updated. Are you sure it exists?');
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.remove = async function (req, res, next) {
    try {
        let uID = req.params.carID; // Get the car ID from the request parameters

        let result = await CarModel.deleteOne({ _id: uID });
        console.log(result);

        if (result.deletedCount > 0) {
            res.json({
                success: true,
                message: 'Car deleted successfully.'
            });
        } else {
            throw new Error('Car not deleted. Are you sure it exists?');
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}
