var db = require("../models");
var iNat = require("../apis/plantid.js");

module.exports = function(app) {
  // Get all examples
  app.get("/api/getNearSightings", function(req, res) {

    console.log(req.query.lat);
    console.log(req.query.lng);

    iNat.getNearSightings(req.query.lat, req.query.lng).then(function(data){
      res.send(data);
      res.end();
    });
  });

  app.get("/api/getCustomSightings", function(req, res){
    db.observation.findAll({}).then(function(dbExamples){
      res.json(dbExamples);
    });
  });

  app.post("/api/postCustomSighting", function(req, res){
    var obs = req.body;
    var keys = Object.keys(obs);
    var columns = ["name", "howMany", "lat", "lng"];

    columns.forEach(function(column){
      if(!keys.includes(column)){
        res.statusMessage = `Observation object is missing the ${column} value.`;
        res.status(400).end();
      }
    });

    obs.obsDt = new Date();

    db.observation.create(obs).then(function(){
      res.send("Added observation");
      res.end();
    });
  });
};
