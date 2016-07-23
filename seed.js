var db = require("./models");

var skateSpotList =[
  {
    name:"anchorage park",
    location: "Alaska",
    security_guards: "True",
    difficulty_level: "Intermediate",
    features: "five-stair, handrail, ledge",
    pictures:["/images/alaska1.jpg", "/images/alaska2.jpg","/images/alaska3.jpg"],
    tips:"Public park! Skate it allday!"
  },
  {
    name:"3rd & Army",
    location: "1698 Indiana St, San Francisco, CA 94124",
    security_guards: "False",
    difficulty_level: "Intermediate",
    features: "manual pads, hand rails, quarter pipe",
    pictures:["/images/3rdandarmy.jpg","/images/3rdandarmypipe.jpg","/images/3rdandarmyquarterpipe.jpg"],
    tips:"It gets cold towards the evening... bring a sweater"
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
