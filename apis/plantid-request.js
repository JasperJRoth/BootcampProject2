"use strict";
var axios = require("axios");

// Send API POST request to Plant.ID to identify what's in the base64
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