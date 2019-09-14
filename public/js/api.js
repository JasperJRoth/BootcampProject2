var api = {
  getNearSightings: function(){
    var lat;
    var lng;

    navigator.geolocation.getCurrentPosition(function(location) {
      lat = location.coords.latitude;
      lng = location.coords.longitude;

      console.log(`Latitude: ${lat}`);
      console.log(`Latitude: ${lng}`);

      $.get(`/api/getNearSightings?lat=${lat}&lng=${lng}`).then(function(res){
        console.log(res);
      });
    });
  },
  getCustomSightings: function(){
    $.get("/api/getCustomSightings").then(function(res){
      console.log(res);
    });
  },
  postCustomSighting: function(name, howMany, lat, lng){
    $.post("/api/postCustomSighting", {name: name, howMany: howMany, lat: lat, lng: lng}, function(res){
      console.log(res);
    })
  }
}