"use strict";

var axios = require("axios");
var fs = require("fs");

// First grab image from plant.handlebars field
// var image = $("plant.handlebars").getElementById(imageToBase64);

// Then convert image into base64
var buff = fs.readFileSync("../images/garlic_mustard_flowering.jpg");
var base64data = buff.toString("base64");
console.log("Image converted to base 64 is:\n\n" + base64data);

// Send API POST request to Plant.ID to identify what's in the base64
module.exports = {
  sendPlantIDRequest(lat, lng) {
    var promise = new Promise(function(resolve, reject) {
      axios.post("https://api.plant.id/identify", {
        params: {
          key: "waFqlu35RJTHeWYESGUTx6uIvPKvet4VmWgSx7TTu3xt0RDYKt", // Need to hide the key first
          lat: lat,
          lng: lng,
          images: base64data
        },
        headers: {
          "Content-Type": "application/json"
        }
      }).then((response) => {
        return axios.post("https://api.plant.id/check_identifications", {
          params: {
            key: "waFqlu35RJTHeWYESGUTx6uIvPKvet4VmWgSx7TTu3xt0RDYKt",  
            ids: response.id
          },
          headers: {
            "Content-Type": "application/json"
          }
        }).then(function(response){
          console.log(response.data);
          resolve(response.data);
        }).catch(function(error){
          reject(error);
        });
      });
      return promise;
    });
  }
};