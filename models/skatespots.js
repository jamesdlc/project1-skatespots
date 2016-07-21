var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SkatespotsSchema = new Schema({
  location: String,
  pictures: [ String ],
  security_guards: Boolean,
  difficulty_level: String,
  tips: String,
  features: [ String ]
});

var Skatespot = mongoose.model('Skatespot', SkatespotsSchema);

module.exports = Skatespot;
