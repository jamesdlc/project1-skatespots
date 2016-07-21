var db = require('../models');

// GET /api/skatespots
function index(req, res) {
  db.Skatespot.find({}, function(err, skatespot){
    if(err){
      res.send(err);
    }
    res.json(skatespot);
  });
}

//GET by id /api/skatespots/:id
function show(req, res) {
  db.Skatespot.findById(req.params.skatespotId, function(err, foundSkatespot) {
    if(err) {
      console.log('albumsSkatespot.show error', err);
    }
    console.log('albumsController.show responding with', foundSkatespot);
    res.json(foundSkatespot);
  });}

// POST /api/skatespots
function create(req, res){
  db.Skatespot.create(req.body, function(err, skatespot){
    var pictures = req.body.pictures.split(',').map(function(item) {return item.trim(); } );
    var features = req.body.features.split(',').map(function(item) {return item.trim(); } );
    if (err){
      console.log ("error", err);
    }
    res.json(skatespot);
  });
}



module.exports = {
  create: create,
  index: index,
  show: show
};
