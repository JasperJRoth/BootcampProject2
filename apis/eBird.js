var axios = require("axios");

module.exports = {
  getNearSightings: async function(lat, lng){
    var promise = new Promise(function(resolve, reject){
      axios.get("https://api.ebird.org/v2/data/obs/geo/recent", {
        params: {
          lat: lat,
          lng: lng
        },
        headers: {
          "X-eBirdApiToken": process.env.eBirdToken
        }
      }).then(function(response){
        resolve(response.data);
      }).catch(function(error){
        reject(error);
      });
    });
    return promise;
  }
};