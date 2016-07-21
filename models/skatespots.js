var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SkatespotsSchema = new Schema({
  name: String,
  location: String,
  security_guards: Boolean,
  difficulty_level: String,
  features: [ String ],
  pictures: [ String ],
  tips: String
});

var Skatespot = mongoose.model('Skatespot', SkatespotsSchema);

module.exports = Skatespot;
