"use strict";
var axios = require("axios");
var fs = require("fs");

// First convert image into base64
var buff = fs.readFileSync("../public/images/landscape.jpg"); // Will need to replace test image path with wherever users input a photo
var base64data = buff.toString("base64");
console.log("Image converted to base 64 is:\n\n" + base64data);

// Then send API POST request to Plant.ID to identify what's in the base64
module.exports = {
  sendPlantIDRequest: async function(lat, lng) {
    var promise = new Promise(function(resolve, reject){
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
      }).then(function(response){
        console.log(response.data);
        resolve(response.data);
      }).catch(function(error){
        reject(error);
      });
    });
    return promise;
  }
};

// Then take the "ID" value from the JSON response object and assign as a variable


// HOW TO MERGE WITH RESPONSE CALL?