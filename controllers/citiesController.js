var db = require('../models');


// GET /api/cities
function index(req, res) {
    db.City.find({}, function(err, city) {
        if (err) {
            res.send(err);
        }
        res.json(city);
    });
}

//GET by id /api/cities/:id
function show(req, res) {
    db.City.findById(req.params.cityId, function(err, foundCity) {
        if (err) {
            console.log('citiesController.show error', err);
        }
        console.log('citiesController.show responding with', foundCity);
        res.json(foundCity);
    });
}

// POST /api/cities create spot
function create(req, res) {
    db.City.create(req.body, function(err, createdCity) { 
        if (err) {
            console.log("error", err);
        }
        res.json(createdCity);
    });
}
//PUT /api/cities/:id update existing spot
function update(req, res) {
    console.log('updating with data', req.body);
    var updateData = req.body;
    var id = req.params.cityId;
    console.log(id);
    db.City.findByIdAndUpdate(id, updateData, {new: true}, function(err, updatedCity) {
        if (err) {
            console.log('updatedCity error', err);
        }
        console.log(updatedCity);
        res.json(updatedCity);
    });
}

// Delete by ID
function destroy(req, res) {
    db.City.findOneAndRemove({
        _id: req.params.cityId
    }, function(err, cityToDelete) {
        if (err) {
            console.log(err, "unable to delete");
        }
        res.json(cityToDelete);
        console.log("you did it!");
    });
}


module.exports = {
    create: create,
    index: index,
    show: show,
    destroy: destroy,
    update: update
};
