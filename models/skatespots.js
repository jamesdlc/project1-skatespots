var mongoose = require("mongoose");
var City = require("./cities.js");
var Schema = mongoose.Schema;

var SkatespotsSchema = new Schema({
    name: String,
    /* TODO: Consider changing your city attribute to _city to let everyone know that it is the foregin key -jc */
    city: {type: Schema.Types.ObjectId, ref: 'City'},
    address: String,
    security_guards: Boolean,
    difficulty_level: String,
    features: [String],
    pictures: [String],
    tips: String
});

var Skatespot = mongoose.model('Skatespot', SkatespotsSchema);

module.exports = Skatespot;
