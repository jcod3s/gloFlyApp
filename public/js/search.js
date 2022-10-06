//define get user location function
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    const crd = pos.coords;
    const lat = crd.latitude;
    const long = crd.longitude;

    let center = [long,lat]
    const map = tt.map({
        key: 't0p2tntCvwAXFp21RwqwKhUkUpgFVpbO',
        container: "map",
        center: center,
        zoom: 10
    })
    map.on('load', () => {
        new tt.Marker().setLngLat(center).addTo(map)
    })
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

navigator.geolocation.getCurrentPosition(success, error, options)
