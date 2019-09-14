//var db = require("../models");
var iNat = require("../apis/eBird.js");

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
};
