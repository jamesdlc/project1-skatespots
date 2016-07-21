var db = require('../models');

// GET /api/skatespots
function index(req, res) {
  // FILL ME IN !
  db.Skatespot.find({}, function(err, skatespot){
    if(err){
      res.send(err);
    }
    res.json(skatespot);
  });
}

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
  index: index
};
