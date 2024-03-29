var db = require("./models");

var skateSpotList = [
  {
    name: "Anchorage Park",
    city: "Anchorage",
    address: "Alaska",
    security_guards: "false",
    difficulty_level: "Beginner",
    features: "five-stair, handrail, ledge",
    pictures: ["/images/alaska1.jpg", "/images/alaska2.jpg", "/images/alaska3.jpg"],
    tips: "Public park! Skate it allday!",
},
{
    name: "3rd & Army",
    city: "SanFrancisco",
    address: "1698 Indiana St, San Francisco, CA 94124",
    security_guards: "false",
    difficulty_level: "Intermediate",
    features: "manual pads, hand rails, quarter pipe",
    pictures: ["/images/3rdandarmy.jpg", "/images/3rdandarmypipe.jpg", "/images/3rdandarmyquarterpipe.jpg"],
    tips: "It gets cold towards the evening... bring a sweater",
},
{
    name: "Skate Park of Tampa",
    city: "Tampa",
    address: "4215 East Columbus Drive",
    security_guards: "false",
    difficulty_level: "Advanced",
    features: "constantly changing setup, but there are always pyramids, handrail, quarterpipes, ledges, flatbars, an outdoor vert ramp and banks",
    pictures: ["/images/skateparkoftampa.jpg"],
    tips: "helmets are required",
},
{
    name: "Louisville Extreme Park",
    city: "Louisville",
    address: "148 N. Clay St.",
    security_guards: "false",
    difficulty_level: "Advanced",
    features: "Full pipe, bowls, ledges, hubbas, quarterpipes, manual pads, vert ramp, handrails and pyramids",
    pictures: ["/images/louisvilleextremepark.jpg"],
    tips: "They close at 11pm",
}
];
var cityList = [{
        city_name: "Milpitas",
        state: "California"
    }, {
        city_name: "Birmingham",
        state: "Alabama"
    }, {
        city_name: "Montgomery",
        state: "Alabama"
    }, {
        city_name: "Mobile",
        state: "Alabama"
    }, {
        city_name: "Huntsville",
        state: "Alabama"
    }, {
        city_name: "Anchorage",
        state: "Alaska"
    }, {
        city_name: "Phoenix",
        state: "Arizona"
    }, {
        city_name: "Tucson",
        state: "Arizona"
    }, {
        city_name: "Mesa",
        state: "Arizona"
    }, {
        city_name: "Chandler",
        state: "Arizona"
    }, {
        city_name: "Gilbert",
        state: "Arizona"
    }, {
        city_name: "Glendale",
        state: "Arizona"
    }, {
        city_name: "Scottsdale",
        state: "Arizona"
    }, {
        city_name: "Tempe",
        state: "Arizona"
    }, {
        city_name: "Peoria",
        state: "Arizona"
    }, {
        city_name: "Surprise",
        state: "Arizona"
    }, {
        city_name: "LittleRock	",
        state: "Arkansas"
    }, {
        city_name: "LosAngeles",
        state: "California"
    }, {
        city_name: "SanDiego",
        state: "California"
    }, {
        city_name: "SanJose",
        state: "California"
    }, {
        city_name: "SanFrancisco",
        state: "California"
    }, {
        city_name: "Fresno",
        state: "California"
    }, {
        city_name: "Sacramento",
        state: "California"
    }, {
        city_name: "LongBeach",
        state: "California"
    }, {
        city_name: "Oakland",
        state: "California"
    }, {
        city_name: "Bakersfield",
        state: "California"
    }, {
        city_name: "Anaheim",
        state: "California"
    }, {
        city_name: "SantaAna",
        state: "California"
    }, {
        city_name: "Riverside",
        state: "California"
    }, {
        city_name: "Stockton",
        state: "California"
    }, {
        city_name: "ChulaVista",
        state: "California"
    }, {
        city_name: "Irvine",
        state: "California"
    }, {
        city_name: "Fremont",
        state: "California"
    }, {
        city_name: "SanBernardino",
        state: "California"
    }, {
        city_name: "Modesto",
        state: "California"
    }, {
        city_name: "Oxnard",
        state: "California"
    }, {
        city_name: "Fontana",
        state: "California"
    }, {
        city_name: "MorenoValley",
        state: "California"
    }, {
        city_name: "HuntingtonBeach",
        state: "California"
    }, {
        city_name: "Glendale",
        state: "California"
    }, {
        city_name: "SantaClarita",
        state: "California"
    }, {
        city_name: "GardenGrove",
        state: "California"
    }, {
        city_name: "Oceanside",
        state: "California"
    }, {
        city_name: "RanchoCucamonga",
        state: "California"
    }, {
        city_name: "SantaRosa",
        state: "California"
    }, {
        city_name: "Ontario",
        state: "California"
    }, {
        city_name: "ElkGrove",
        state: "California"
    }, {
        city_name: "Corona",
        state: "California"
    }, {
        city_name: "Lancaster",
        state: "California"
    }, {
        city_name: "Palmdale",
        state: "California"
    }, {
        city_name: "Salinas",
        state: "California"
    }, {
        city_name: "Hayward",
        state: "California"
    }, {
        city_name: "Pomona",
        state: "California"
    }, {
        city_name: "Escondido",
        state: "California"
    }, {
        city_name: "Sunnyvale",
        state: "California"
    }, {
        city_name: "Torrance",
        state: "California"
    }, {
        city_name: "Pasadena",
        state: "California"
    }, {
        city_name: "Orange",
        state: "California"
    }, {
        city_name: "Fullerton",
        state: "California"
    }, {
        city_name: "ThousandOaks",
        state: "California"
    }, {
        city_name: "Visalia",
        state: "California"
    }, {
        city_name: "Roseville",
        state: "California"
    }, {
        city_name: "Concord",
        state: "California"
    }, {
        city_name: "SimiValley",
        state: "California"
    }, {
        city_name: "SantaClara",
        state: "California"
    }, {
        city_name: "Victorville",
        state: "California"
    }, {
        city_name: "Vallejo",
        state: "California"
    }, {
        city_name: "Berkeley",
        state: "California"
    }, {
        city_name: "ElMonte",
        state: "California"
    }, {
        city_name: "Downey",
        state: "California"
    }, {
        city_name: "CostaMesa",
        state: "California"
    }, {
        city_name: "Carlsbad",
        state: "California"
    }, {
        city_name: "Inglewood",
        state: "California"
    }, {
        city_name: "Fairfield",
        state: "California"
    }, {
        city_name: "Ventura",
        state: "California"
    }, {
        city_name: "Temecula",
        state: "California"
    }, {
        city_name: "Antioch",
        state: "California"
    }, {
        city_name: "Richmond",
        state: "California"
    }, {
        city_name: "WestCovina",
        state: "California"
    }, {
        city_name: "Murrieta",
        state: "California"
    }, {
        city_name: "Norwalk	",
        state: "California"
    }, {
        city_name: "DalyCity",
        state: "California"
    }, {
        city_name: "Burbank	",
        state: "California"
    }, {
        city_name: "SantaMaria",
        state: "California"
    }, {
        city_name: "ElCajon",
        state: "California"
    }, {
        city_name: "SanMateo",
        state: "California"
    }, {
        city_name: "Rialto",
        state: "California"
    }, {
        city_name: "Clovis",
        state: "California"
    }, {
        city_name: "Denver",
        state: "Colorado"
    }, {
        city_name: "ColoradoSprings",
        state: "Colorado"
    }, {
        city_name: "Aurora",
        state: "Colorado"
    }, {
        city_name: "FortCollins",
        state: "Colorado"
    }, {
        city_name: "Lakewood",
        state: "Colorado"
    }, {
        city_name: "Thornton",
        state: "Colorado"
    }, {
        city_name: "Arvada",
        state: "Colorado"
    }, {
        city_name: "Westminster",
        state: "Colorado"
    }, {
        city_name: "Pueblo",
        state: "Colorado"
    }, {
        city_name: "Centennial	",
        state: "Colorado"
    }, {
        city_name: "Boulder",
        state: "Colorado"
    }, {
        city_name: "Bridgeport",
        state: "Connecticut"
    }, {
        city_name: "NewHaven",
        state: "Connecticut"
    }, {
        city_name: "Stamford",
        state: "Connecticut"
    }, {
        city_name: "Hartford",
        state: "Connecticut"
    }, {
        city_name: "Waterbury",
        state: "Connecticut"
    }, {
        city_name: "Washington",
        state: "DistrictofColumbia"
    }, {
        city_name: "Jacksonville",
        state: "Florida"
    }, {
        city_name: "Miami	",
        state: "Florida"
    }, {
        city_name: "Tampa",
        state: "Florida"
    }, {
        city_name: "Orlando",
        state: "Florida"
    }, {
        city_name: "St.Petersburg	",
        state: "Florida"
    }, {
        city_name: "Hialeah",
        state: "Florida"
    }, {
        city_name: "Tallahassee",
        state: "Florida"
    }, {
        city_name: "FortLauderdale",
        state: "Florida"
    }, {
        city_name: "PortSt.Lucie",
        state: "Florida"
    }, {
        city_name: "CapeCoral	",
        state: "Florida"
    }, {
        city_name: "PembrokePines",
        state: "Florida"
    }, {
        city_name: "Hollywood",
        state: "Florida"
    }, {
        city_name: "Miramar",
        state: "Florida"
    }, {
        city_name: "Gainesville",
        state: "Florida"
    }, {
        city_name: "CoralSprings",
        state: "Florida"
    }, {
        city_name: "MiamiGardens",
        state: "Florida"
    }, {
        city_name: "Clearwater",
        state: "Florida"
    }, {
        city_name: "PompanoBeach",
        state: "Florida"
    }, {
        city_name: "PalmBay",
        state: "Florida"
    }, {
        city_name: "WestPalmBeach",
        state: "Florida"
    }, {
        city_name: "Lakeland",
        state: "Florida"
    }, {
        city_name: "Atlanta",
        state: "Georgia"
    }, {
        city_name: "Columbus",
        state: "Georgia"
    }, {
        city_name: "Augusta",
        state: "Georgia"
    }, {
        city_name: "Macon",
        state: "Georgia"
    }, {
        city_name: "Savannah",
        state: "Georgia"
    }, {
        city_name: "Athens",
        state: "Georgia"
    }, {
        city_name: "SandySprings",
        state: "Georgia"
    }, {
        city_name: "Honolulu	",
        state: "Hawai'i	"
    }, {
        city_name: "Boise",
        state: "Idaho"
    }, {
        city_name: "Chicago",
        state: "Illinois"
    }, {
        city_name: "Aurora",
        state: "Illinois"
    }, {
        city_name: "Rockford",
        state: "Illinois"
    }, {
        city_name: "Joliet",
        state: "Illinois"
    }, {
        city_name: "Naperville",
        state: "Illinois"
    }, {
        city_name: "Springfield",
        state: "Illinois"
    }, {
        city_name: "Peoria",
        state: "Illinois"
    }, {
        city_name: "Elgin",
        state: "Illinois"
    }, {
        city_name: "Indianapolis",
        state: "Indiana"
    }, {
        city_name: "FortWayne",
        state: "Indiana"
    }, {
        city_name: "Evansville",
        state: "Indiana"
    }, {
        city_name: "SouthBend",
        state: "Indiana"
    }, {
        city_name: "DesMoines",
        state: "Iowa"
    }, {
        city_name: "CedarRapids",
        state: "Iowa"
    }, {
        city_name: "Davenport",
        state: "Iowa"
    }, {
        city_name: "Wichita",
        state: "Kansas"
    }, {
        city_name: "OverlandPark	",
        state: "Kansas"
    }, {
        city_name: "KansasCity",
        state: "Kansas"
    }, {
        city_name: "Olathe",
        state: "Kansas"
    }, {
        city_name: "Topeka",
        state: "Kansas"
    }, {
        city_name: "Louisville",
        state: "Kentucky"
    }, {
        city_name: "Lexington",
        state: "Kentucky"
    }, {
        city_name: "NewOrleans",
        state: "Louisiana"
    }, {
        city_name: "BatonRouge",
        state: "Louisiana"
    }, {
        city_name: "Shreveport",
        state: "Louisiana"
    }, {
        city_name: "Lafayette",
        state: "Louisiana"
    }, {
        city_name: "Baltimore",
        state: "Maryland"
    }, {
        city_name: "Boston",
        state: "Massachusetts"
    }, {
        city_name: "Worcester",
        state: "Massachusetts"
    }, {
        city_name: "Springfield",
        state: "Massachusetts"
    }, {
        city_name: "Lowell	",
        state: "Massachusetts"
    }, {
        city_name: "Cambridge",
        state: "Massachusetts"
    }, {
        city_name: "Detroit",
        state: "Michigan"
    }, {
        city_name: "GrandRapids",
        state: "Michigan"
    }, {
        city_name: "Warren",
        state: "Michigan"
    }, {
        city_name: "SterlingHeights",
        state: "Michigan"
    }, {
        city_name: "AnnArbor",
        state: "Michigan"
    }, {
        city_name: "Lansing	",
        state: "Michigan"
    }, {
        city_name: "Minneapolis",
        state: "Minnesota"
    }, {
        city_name: "SaintPaul	",
        state: "Minnesota"
    }, {
        city_name: "Rochester",
        state: "Minnesota"
    }, {
        city_name: "Jackson",
        state: "Mississippi	"
    }, {
        city_name: "KansasCity",
        state: "Missouri	"
    }, {
        city_name: "St.Louis",
        state: "Missouri	"
    }, {
        city_name: "Springfield",
        state: "Missouri	"
    }, {
        city_name: "Independence",
        state: "Missouri	"
    }, {
        city_name: "Columbia",
        state: "Missouri	"
    }, {
        city_name: "Billings",
        state: "Montana"
    }, {
        city_name: "Omaha",
        state: "Nebraska"
    }, {
        city_name: "Lincoln",
        state: "Nebraska"
    }, {
        city_name: "LasVegas",
        state: "Nevada"
    }, {
        city_name: "Henderson",
        state: "Nevada"
    }, {
        city_name: "Reno",
        state: "Nevada"
    }, {
        city_name: "NorthLasVegas",
        state: "Nevada"
    }, {
        city_name: "Manchester",
        state: "NewHampshire"
    }, {
        city_name: "Newark	",
        state: "NewJersey"
    }, {
        city_name: "JerseyCity",
        state: "NewJersey"
    }, {
        city_name: "Paterson",
        state: "NewJersey"
    }, {
        city_name: "Elizabeth",
        state: "NewJersey"
    }, {
        city_name: "Edison",
        state: "NewJersey"
    }, {
        city_name: "Woodbridge",
        state: "NewJersey"
    }, {
        city_name: "Albuquerque",
        state: "NewMexico"
    }, {
        city_name: "LasCruces",
        state: "NewMexico"
    }, {
        city_name: "NewYork	",
        state: "NewYork	"
    }, {
        city_name: "Buffalo",
        state: "NewYork	"
    }, {
        city_name: "Rochester",
        state: "NewYork	"
    }, {
        city_name: "Yonkers",
        state: "NewYork	"
    }, {
        city_name: "Syracuse",
        state: "NewYork	"
    }, {
        city_name: "Charlotte",
        state: "NorthCarolina"
    }, {
        city_name: "Raleigh",
        state: "NorthCarolina"
    }, {
        city_name: "Greensboro",
        state: "NorthCarolina"
    }, {
        city_name: "Durham",
        state: "NorthCarolina"
    }, {
        city_name: "Winston–Salem",
        state: "NorthCarolina"
    }, {
        city_name: "Fayetteville",
        state: "NorthCarolina"
    }, {
        city_name: "Cary",
        state: "NorthCarolina"
    }, {
        city_name: "Wilmington",
        state: "NorthCarolina"
    }, {
        city_name: "HighPoint",
        state: "NorthCarolina"
    }, {
        city_name: "Fargo",
        state: "NorthDakota"
    }, {
        city_name: "Columbus",
        state: "Ohio"
    }, {
        city_name: "Cleveland",
        state: "Ohio"
    }, {
        city_name: "Cincinnati	",
        state: "Ohio"
    }, {
        city_name: "Toledo",
        state: "Ohio"
    }, {
        city_name: "Akron",
        state: "Ohio"
    }, {
        city_name: "Dayton",
        state: "Ohio"
    }, {
        city_name: "OklahomaCity",
        state: "Oklahoma"
    }, {
        city_name: "Tulsa",
        state: "Oklahoma"
    }, {
        city_name: "Norman",
        state: "Oklahoma"
    }, {
        city_name: "BrokenArrow	",
        state: "Oklahoma"
    }, {
        city_name: "Portland",
        state: "Oregon"
    }, {
        city_name: "Salem",
        state: "Oregon"
    }, {
        city_name: "Eugene",
        state: "Oregon"
    }, {
        city_name: "Gresham",
        state: "Oregon"
    }, {
        city_name: "Philadelphia",
        state: "Pennsylvania"
    }, {
        city_name: "Pittsburgh",
        state: "Pennsylvania"
    }, {
        city_name: "Allentown",
        state: "Pennsylvania"
    }, {
        city_name: "Providence",
        state: "RhodeIsland"
    }, {
        city_name: "Columbia",
        state: "SouthCarolina"
    }, {
        city_name: "Charleston",
        state: "SouthCarolina"
    }, {
        city_name: "NorthCharleston",
        state: "SouthCarolina"
    }, {
        city_name: "SiouxFalls",
        state: "SouthDakota"
    }, {
        city_name: "Memphis",
        state: "Tennessee"
    }, {
        city_name: "Nashville",
        state: "Tennessee"
    }, {
        city_name: "Knoxville",
        state: "Tennessee"
    }, {
        city_name: "Chattanooga",
        state: "Tennessee"
    }, {
        city_name: "Clarksville",
        state: "Tennessee"
    }, {
        city_name: "Murfreesboro",
        state: "Tennessee"
    }, {
        city_name: "Houston",
        state: "Texas"
    }, {
        city_name: "SanAntonio",
        state: "Texas"
    }, {
        city_name: "Dallas",
        state: "Texas"
    }, {
        city_name: "Austin",
        state: "Texas"
    }, {
        city_name: "FortWorth",
        state: "Texas"
    }, {
        city_name: "ElPaso",
        state: "Texas"
    }, {
        city_name: "Arlington",
        state: "Texas"
    }, {
        city_name: "CorpusChristi	",
        state: "Texas"
    }, {
        city_name: "Plano",
        state: "Texas"
    }, {
        city_name: "Laredo",
        state: "Texas"
    }, {
        city_name: "Lubbock	",
        state: "Texas"
    }, {
        city_name: "Garland",
        state: "Texas"
    }, {
        city_name: "Irving	",
        state: "Texas"
    }, {
        city_name: "Amarillo",
        state: "Texas"
    }, {
        city_name: "GrandPrairie",
        state: "Texas"
    }, {
        city_name: "Brownsville",
        state: "Texas"
    }, {
        city_name: "McKinney",
        state: "Texas"
    }, {
        city_name: "Pasadena",
        state: "Texas"
    }, {
        city_name: "Frisco",
        state: "Texas"
    }, {
        city_name: "Mesquite",
        state: "Texas"
    }, {
        city_name: "McAllen",
        state: "Texas"
    }, {
        city_name: "Killeen",
        state: "Texas"
    }, {
        city_name: "Waco",
        state: "Texas"
    }, {
        city_name: "Carrollton",
        state: "Texas"
    }, {
        city_name: "Denton",
        state: "Texas"
    }, {
        city_name: "Midland",
        state: "Texas"
    }, {
        city_name: "Abilene",
        state: "Texas"
    }, {
        city_name: "Beaumont",
        state: "Texas"
    }, {
        city_name: "Odessa",
        state: "Texas"
    }, {
        city_name: "RoundRock	",
        state: "Texas"
    }, {
        city_name: "Richardson",
        state: "Texas"
    }, {
        city_name: "WichitaFalls",
        state: "Texas"
    }, {
        city_name: "CollegeStation",
        state: "Texas"
    }, {
        city_name: "Pearland",
        state: "Texas"
    }, {
        city_name: "Lewisville",
        state: "Texas"
    }, {
        city_name: "Tyler",
        state: "Texas"
    }, {
        city_name: "SaltLakeCity",
        state: "	Utah"
    }, {
        city_name: "WestValleyCity",
        state: "	Utah"
    }, {
        city_name: "Provo",
        state: "	Utah"
    }, {
        city_name: "WestJordan",
        state: "	Utah"
    }, {
        city_name: "VirginiaBeach",
        state: "Virginia"
    }, {
        city_name: "Norfolk	",
        state: "Virginia"
    }, {
        city_name: "Chesapeake",
        state: "Virginia"
    }, {
        city_name: "Richmond",
        state: "Virginia"
    }, {
        city_name: "NewportNews",
        state: "Virginia"
    }, {
        city_name: "Alexandria",
        state: "Virginia"
    }, {
        city_name: "Hampton",
        state: "Virginia"
    }, {
        city_name: "Seattle",
        state: "Washington"
    }, {
        city_name: "Spokane",
        state: "Washington"
    }, {
        city_name: "Tacoma",
        state: "Washington"
    }, {
        city_name: "Vancouver",
        state: "Washington"
    }, {
        city_name: "Bellevue",
        state: "Washington"
    }, {
        city_name: "Kent",
        state: "Washington"
    }, {
        city_name: "Everett",
        state: "Washington"
    }, {
        city_name: "Milwaukee",
        state: "Wisconsin"
    }, {
        city_name: "Madison",
        state: "Wisconsin"
    }, {
        city_name: "GreenBay",
        state: "Wisconsin"
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
                    address: skateSpotValues.address,
                    security_guards: skateSpotValues.security_guards,
                    difficulty_level: skateSpotValues.difficulty_level,
                    features: skateSpotValues.features,
                    pictures: skateSpotValues.pictures,
                    tips: skateSpotValues.tips
                });
                db.City.findOne({
                    city_name: skateSpotValues.city
                }, function(err, cityId) {

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
