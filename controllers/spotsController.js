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

module.exports = {
  index: index
};
