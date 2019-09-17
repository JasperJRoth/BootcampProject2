// SHOULD MERGE WITH FIRST PART OF FUNCTION

var axios = require("axios");

module.exports = {
  getPlantIDResponse: async function(key, ids) {
    var promise = new Promise(function(resolve, reject){
      axios.post("https://api.plant.id/check_identifications", {
        params: {
          key: "waFqlu35RJTHeWYESGUTx6uIvPKvet4VmWgSx7TTu3xt0RDYKt",  
          ids: ids
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
