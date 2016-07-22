var db = require('../models');

// GET /api/skatespots
function index(req, res) {
    db.Skatespot.find({}, function(err, skatespot) {
        if (err) {
            res.send(err);
        }
        res.json(skatespot);
    });
}

//GET by id /api/skatespots/:id
function show(req, res) {
    db.Skatespot.findById(req.params.skatespotId, function(err, foundSkatespot) {
        if (err) {
            console.log('albumsSkatespot.show error', err);
        }
        console.log('albumsController.show responding with', foundSkatespot);
        res.json(foundSkatespot);
    });
}

// POST /api/skatespots create spot
function create(req, res) {
    db.Skatespot.create(req.body, function(err, skatespot) {
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
    var id = req.params.skatespotId;
    console.log(id);
    db.Skatespot.findByIdAndUpdate(id, updateData, {new: true}, function(err, savedUpdatedSkatespot) {
        if (err) {
            console.log('skateSpotToUpdate error', err);
        }
        console.log(savedUpdatedSkatespot);
        res.json(savedUpdatedSkatespot);
    });
}

// Delete by ID
function destroy(req, res) {
    db.Skatespot.findOneAndRemove({
        _id: req.params.skatespotId
    }, function(err, skatespotToDelete) {
        if (err) {
            console.log(err, "unable to delete");
        }
        res.json(skatespotToDelete);
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
