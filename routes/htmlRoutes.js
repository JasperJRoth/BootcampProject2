//var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/birdMap", function(req, res) {
    res.render("bird");
  });

  app.get("/plantMap", function(req, res) {
    res.render("plant");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
