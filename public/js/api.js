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
  }
}