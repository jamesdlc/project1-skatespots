var db = require("./models");


var skateSpotList =[
              {
                location: "Alaska",
                security_guards: "True",
                features: "five-stair, handrail, ledge"
              }
];


db.Skatespot.remove({}, function(err, skatespot) {
  if(err) {
    console.log('Error occured in remove', err);
  }
  else {
    console.log('removed all skatespots');
  db.Skatespot.create(skateSpotList, function(err, skatespot){
      if (err){ return console.log("Error: ", err); }
      console.log("Created new Skatespots", skatespot);
      process.exit();
    });
  }
});
