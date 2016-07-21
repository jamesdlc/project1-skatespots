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
    db.Skatespot.findById(req.params.skatespotId, function(err, skateSpotToUpdate) {
        if (err) {
            console.log('skateSpotToUpdate error', err);
        }
        skateSpotToUpdate.name = req.body.name;
        skateSpotToUpdate.location = req.body.location;
        skateSpotToUpdate.security_guards = req.body.security_guards;
        skateSpotToUpdate.difficulty_level = req.body.difficulty_level;
        skateSpotToUpdate.features = req.body.features;
        skateSpotToUpdate.pictures = req.body.pictures;
        skateSpotToUpdate.tips = req.body.tips;
        skateSpotToUpdate.save(function(err, savedUpdatedSkatespot) {
            if (err) {
                console.log('saving edited Skatespot failed');
            }
            res.json(savedUpdatedSkatespot);
        });
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
