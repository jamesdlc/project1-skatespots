var db = require('../models');


// GET /api/skatespots
function index(req, res) {
    db.Cities.find({}, function(err, skatespot) {
        if (err) {
            res.send(err);
        }
        res.json(skatespot);
    });
}

//GET by id /api/skatespots/:id
function show(req, res) {
    db.Cities.findById(req.params.skatespotId, function(err, foundSkatespot) {
        if (err) {
            console.log('albumsSkatespot.show error', err);
        }
        console.log('albumsController.show responding with', foundSkatespot);
        res.json(foundSkatespot);
    });
}

// POST /api/skatespots create spot
function create(req, res) {
    db.Cities.create(req.body, function(err, skatespot) {
        var pictures = req.body.pictures.split(',').map(function(item) {
            return item.trim();
        });
        var features = req.body.features.split(',').map(function(item) {
            return item.trim();
        });
        if (err) {
            console.log("error", err);
        }
        res.json(skatespot);
    });
}
//PUT /api/skatespots/:id update existing spot
function update(req, res) {
    console.log('updating with data', req.body);
    var updateData = req.body;
    var id = req.params.cityId;
    console.log(id);
    db.Cities.findByIdAndUpdate(id, updateData, {new: true}, function(err, updatedCity) {
        if (err) {
            console.log('updatedCity error', err);
        }
        console.log(updatedCity);
        res.json(updatedCity);
    });
}

// Delete by ID
function destroy(req, res) {
    db.Cities.findOneAndRemove({
        _id: req.params.skatespotId
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
