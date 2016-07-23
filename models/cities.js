var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CitiesSchema = new Schema({
    name: String,
    state: String
});

var City = mongoose.model('City', CitiesSchema);

module.exports = City;
