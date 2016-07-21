var db = require('../models');


function index(req, res) {
    res.json({
        message: "Skatespots... where they at?!",
        documentation_url: "",
        base_url: "",
        endpoints: [{
            method: "GET",
            path: "/api",
            description: ""
        }]
    });
}
module.exports.index = index;
