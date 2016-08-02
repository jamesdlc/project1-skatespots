var db = require('../models');


// GET /api/cities
function index(req, res) {
    db.City.find({}, function(err, city) {
        if (err) {
          /* TODO: return a console log of the err to properly escape the db call instead of exposing errors to the user -jc */

            res.send(err);
        }
        res.json(city);
    });
}

//GET by id /api/cities/:id
function show(req, res) {
    /* TODO: Consider assigning req.params.cityId to a variable then passing the variable into your db call. This makes your code cleaner. -jc */
    db.City.findById(req.params.cityId, function(err, foundCity) {
        if (err) {
          /* TODO: return this console log to properly escape the db call after hitting an error -jc */
            console.log('citiesController.show error', err);
        }
        /* TODO: Please keep debugging code out of production versions of your project -jc */
        console.log('citiesController.show responding with', foundCity);
        res.json(foundCity);
    });
}

// POST /api/cities create spot
function create(req, res) {
  /* TODO: Consider assigning req.body to a variable then passing the variable into your db call. This makes your code cleaner. -jc */
    db.City.create(req.body, function(err, createdCity) {
        if (err) {
          /* TODO: return this console log to properly escape the db call after hitting an error -jc */
            console.log("error", err);
        }
        res.json(createdCity);
    });
}
//PUT /api/cities/:id update existing spot
function update(req, res) {
  /* TODO: Please keep debugging code out of production versions of your project -jc */
    console.log('updating with data', req.body);
    var updateData = req.body;
    var id = req.params.cityId;
    /* TODO: Please keep debugging code out of production versions of your project -jc */
    console.log(id);
    db.City.findByIdAndUpdate(id, updateData, {new: true}, function(err, updatedCity) {
        if (err) {
          /* TODO: return this console log to properly escape the db call after hitting an error -jc */
            console.log('updatedCity error', err);
        }
        /* TODO: Please keep debugging code out of production versions of your project -jc */
        console.log(updatedCity);
        res.json(updatedCity);
    });
}

// Delete by ID
function destroy(req, res) {
  /* TODO: Consider assigning req.params.cityId to a variable then passing the variable into your db call. This makes your code cleaner. -jc */
    db.City.findOneAndRemove({
        _id: req.params.cityId
    }, function(err, cityToDelete) {
        if (err) {
          /* TODO: return this console log to properly escape the db call after hitting an error -jc */
            console.log(err, "unable to delete");
        }
        res.json(cityToDelete);
        /* TODO: Please keep debugging code out of production versions of your project -jc */
        /* Note: Code below a res.json call will never execute. Think of a res as a return call -jc */
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
