function geoFindMe() {

    var status = document.querySelector('#status');
    var mapLink = document.querySelector('#map-link');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      var latitude  = position.coords.latitude;
      var longitude = position.coords.longitude;
  
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }

      //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
      function calcCrow(lat1, lon1, lat2, lon2) 
      {
        var R = 6371; // km
        var dLat = toRad(lat2-lat1);
        var dLon = toRad(lon2-lon1);
        var lat1 = toRad(lat1);
        var lat2 = toRad(lat2);
  
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c;
        return d;
      }
  
      // Converts numeric degrees to radians
      function toRad(Value) 
      {
          return Value * Math.PI / 180;
      }
  
      /*setInterval(function(){
          geoFindMe();
      }, 3000);*/git 

      document.querySelector('#find-me').addEventListener('click', geoFindMe);

  var distanceRun = calcCrow(36,-86,35,-87);
  console.log(distanceRun + " miles");