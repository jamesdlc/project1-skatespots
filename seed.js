var db = require("./models");

var skateSpotList =[
  {
    name:"anchorage park",
    city: "Milpitas",
    address: "Alaska",
    security_guards: "True",
    difficulty_level: "Intermediate",
    features: "five-stair, handrail, ledge",
    pictures:["/images/alaska1.jpg", "/images/alaska2.jpg","/images/alaska3.jpg"],
    tips:"Public park! Skate it allday!",
  },
  {
    name:"4th & Army",
    city: "Milpitas",
    address: "1698 Indiana St, San Francisco, CA 94124",
    security_guards: "False",
    difficulty_level: "Intermediate",
    features: "manual pads, hand rails, quarter pipe",
    pictures:["/images/3rdandarmy.jpg","/images/3rdandarmypipe.jpg","/images/3rdandarmyquarterpipe.jpg"],
    tips:"It gets cold towards the evening... bring a sweater",
  },
  {
    name:"3rd & Army",
    city: "Detroit",
    address: "1698 Indiana St, San Francisco, CA 94124",
    security_guards: "False",
    difficulty_level: "Intermediate",
    features: "manual pads, hand rails, quarter pipe",
    pictures:["/images/3rdandarmy.jpg","/images/3rdandarmypipe.jpg","/images/3rdandarmyquarterpipe.jpg"],
    tips:"It gets cold towards the evening... bring a sweater",
  },
  {
    name:"3rd & Army",
    city: "Detroit",
    address: "1698 Indiana St, San Francisco, CA 94124",
    security_guards: "False",
    difficulty_level: "Intermediate",
    features: "manual pads, hand rails, quarter pipe",
    pictures:["/images/3rdandarmy.jpg","/images/3rdandarmypipe.jpg","/images/3rdandarmyquarterpipe.jpg"],
    tips:"It gets cold towards the evening... bring a sweater",
  },
  {
    name:"3rd & Army",
    city: "Detroit",
    address: "1698 Indiana St, San Francisco, CA 94124",
    security_guards: "False",
    difficulty_level: "Intermediate",
    features: "manual pads, hand rails, quarter pipe",
    pictures:["/images/3rdandarmy.jpg","/images/3rdandarmypipe.jpg","/images/3rdandarmyquarterpipe.jpg"],
    tips:"It gets cold towards the evening... bring a sweater",
  },
  {
    name:"3rd & Army",
    city: "Detroit",
    address: "1698 Indiana St, San Francisco, CA 94124",
    security_guards: "False",
    difficulty_level: "Intermediate",
    features: "manual pads, hand rails, quarter pipe",
    pictures:["/images/3rdandarmy.jpg","/images/3rdandarmypipe.jpg","/images/3rdandarmyquarterpipe.jpg"],
    tips:"It gets cold towards the evening... bring a sweater",
  },
  {
    name:"3rd & Army",
    city: "Detroit",
    address: "1698 Indiana St, San Francisco, CA 94124",
    security_guards: "False",
    difficulty_level: "Intermediate",
    features: "manual pads, hand rails, quarter pipe",
    pictures:["/images/3rdandarmy.jpg","/images/3rdandarmypipe.jpg","/images/3rdandarmyquarterpipe.jpg"],
    tips:"It gets cold towards the evening... bring a sweater",
  },
  {
    name:"3rd & Army",
    city: "Detroit",
    address: "1698 Indiana St, San Francisco, CA 94124",
    security_guards: "False",
    difficulty_level: "Intermediate",
    features: "manual pads, hand rails, quarter pipe",
    pictures:["/images/3rdandarmy.jpg","/images/3rdandarmypipe.jpg","/images/3rdandarmyquarterpipe.jpg"],
    tips:"It gets cold towards the evening... bring a sweater",
  }
];
var cityList =[
  {
    city_name:"Milpitas",
    state: "California"
  },
  {
    city_name:"Detroit",
    state: "Michigan"
  }
];

db.City.remove({}, function(err, cities) {
  console.log("removed cities");
  db.City.create(cityList, function(err, cities) {
    if (err) {
      console.log(err);
      return;
    }
    db.Skatespot.remove({}, function(err, skatespots) {
      console.log("removed skatespots");
      skateSpotList.forEach(function(skateSpotValues) {
        var newSpot = new db.Skatespot({
          name: skateSpotValues.name,
          address:skateSpotValues.address,
          security_guards: skateSpotValues.security_guards,
          difficulty_level: skateSpotValues.difficulty_level,
          features: skateSpotValues.features,
          pictures:skateSpotValues.pictures,
          tips: skateSpotValues.tips
        });
        db.City.findOne({city_name: skateSpotValues.city}, function (err, cityId) {

          if (err) {
            console.log(err);
            return;
          }
          newSpot.city = cityId;
          newSpot.save(function(err, savedSpot) {
            if (err) {
              return console.log(err);
            }
            console.log(savedSpot);
            console.log("created", cities.length, "new cities and", skateSpotList.length, "new skatespots");
          });
        });
      });
    });

  });
});
