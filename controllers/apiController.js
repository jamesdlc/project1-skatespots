var db = require('../models');

/* TODO: If you want to have an api landing endpoint, populate the endpoints attribute with all of your routes for developers to see. -jc */
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
