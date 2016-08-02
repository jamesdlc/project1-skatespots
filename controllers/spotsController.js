var db = require('../models');

// GET /api/skatespots
function index(req, res) {
  db.Skatespot.find({}, function(err, skatespot) {
    if (err) {
      /* TODO: Consider logging the error to the server terminal instead of showing the user your db error. -jc */
      res.send(err);
    }
    res.json(skatespot);
  });
}

//GET by id /api/skatespots/:id
function show(req, res) {
  db.Skatespot.findById(req.params.skatespotId, function(err, foundSkatespot) {
    if (err) {
      /* TODO: Consider returning the console log. It looks weird, but the code below will show an error message then break out of the if statement and res.json an undefined object.  -jc */
      console.log('foundSkatespot.show error', err);
    }
    console.log('afoundSkatespot.show responding with', foundSkatespot);
    res.json(foundSkatespot);
  });
}

// create spot associated with cityId
function create(req,res){
  var cityId = req.params.cityId;
  var newSkatespot = new db.Skatespot({
    name: req.body.name,
    address: req.body.address,
    security_guards: req.body.security_guards,
    difficulty_level: req.body.difficulty_level,
    features: req.body.features,
    pictures: req.body.pictures,
    tips: req.body.tips
  });
  db.City.findById(cityId, function(err, city){
    if (err) {
      /* Excellent error handling! -jc */
      return console.log(err);
    }
    /* TODO: Please keep debugging code out of production versions of your project -jc */
    console.log(cityId + "test");
    newSkatespot.city = city;
    newSkatespot.save(function(err, skatespot){
      if (err) {
        return console.log("save error: " + err);
      }
      /* TODO: Please keep debugging code out of production versions of your project -jc */
      console.log("saved ", skatespot.city);
      // send back the book!
      res.json(skatespot);
  });
});
}

//PUT /api/skatespots/:id update existing spo
function update(req, res) {
  /* TODO: Please keep debugging code out of production versions of your project -jc */
  console.log('updating with data', req.body);
  var updateData = req.body;
  var id = req.params.skatespotId;
  /* TODO: Please keep debugging code out of production versions of your project -jc */
  console.log(id);
  db.Skatespot.findByIdAndUpdate(id, updateData, {new: true}, function(err, savedUpdatedSkatespot) {
    if (err) {
      /* TODO: return this console log to properly escape the db call after hitting an error -jc */
      console.log('skateSpotToUpdate error', err);
    }
    /* TODO: Please keep debugging code out of production versions of your project -jc */
    console.log(savedUpdatedSkatespot);
    res.json(savedUpdatedSkatespot);
  });
}

// Delete by ID
function destroy(req, res) {
  db.Skatespot.findOneAndRemove({_id: req.params.skatespotId}, function(err, skatespotToDelete) {
    if (err) {
      /* TODO: return this console log to properly escape the db call after hitting an error -jc */
      console.log(err, "unable to delete");
    }
    res.json(skatespotToDelete);
    /* TODO: Please keep debugging code out of production versions of your project -jc */
    /* Note: Code below a res.json call will never execute. Think of a res as a return call -jc */
    console.log("you did it!");
  });
}

//get skatespots by cityId
function spotsByCityId(req,res){
  var cityId = req.params.cityId;
  db.City.findById(cityId, function(err, city){
    if (err) {
      /* TODO: return this console log to properly escape the db call after hitting an error -jc */
      console.log(err);
    }
    db.Skatespot.find({city: city}, function (err, citySpots){
      if (err){
        /* TODO: return this console log to properly escape the db call after hitting an error -jc */
        console.log(citySpots + "test");
      }
      res.json(citySpots);
    });
  });
}

//create skatespot that DOESNT reference city ID

function createSkatespot(req, res) {
    db.Skatespot.create(req.body, function(err, createdSkatespot) {
        if (err) {
          /* TODO: return this console log to properly escape the db call after hitting an error -jc */
            console.log("error", err);
        }
        res.json(createdSkatespot);
    });
}


module.exports = {
  create: create,
  index: index,
  show: show,
  destroy: destroy,
  update: update,
  spotsByCityId: spotsByCityId,
  createSkatespot: createSkatespot
};
