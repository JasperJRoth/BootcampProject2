// "use strict";

var axios = require("axios");
var fs = require("fs");

// First grab image from plant.handlebars field
var image = ("../../public/images/garlic_mustard_flowering.jpg");

// // Then convert image into base64
var buff = fs.readFileSync(image);
var base64data = buff.toString("base64");
console.log("Image converted to base 64 is:\n\n" + base64data);

// Send API POST request to Plant.ID to identify what's in the base64
module.exports = {
  sendPlantIDRequest: async function() {
    var promise = new Promise(function(resolve, reject) {
      axios.post("https://api.plant.id/identify", {
        key: "waFqlu35RJTHeWYESGUTx6uIvPKvet4VmWgSx7TTu3xt0RDYKt", // Need to hide the key first
        images: [base64data],
        // eslint-disable-next-line camelcase
        custom_id: 420,
        headers: {
          "Content-Type": "application/json"
        }
      // eslint-disable-next-line no-unused-vars
      }).then(function(response){
        return axios.post("https://api.plant.id/check_identifications", {
          key: "waFqlu35RJTHeWYESGUTx6uIvPKvet4VmWgSx7TTu3xt0RDYKt",  
          // eslint-disable-next-line camelcase
          custom_ids: [420],
          headers: {
            "Content-Type": "application/json"
          }
        }).then(function(response){
          console.log(response.data[1].suggestions[0].plant.common_name);
          resolve(response.data);
        }).catch(function(error){
          reject(error);
        });
      });
      return promise;
    });
  }
};

process.on("unhandledRejection", function(err) {
  console.log(err);
});