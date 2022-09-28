const map = async () => {
  try {
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
          key: process.env.TOM_TOM_API_KEY,
          container: "map",
          center: center,
          zoom: 20
      })
      map.on('load', () => {
          new tt.Marker().setLngLat(center).addTo(map)
      })
    }
    const map = await navigator.geolocation.getCurrentPosition(success, error, options)
  } catch (err) {
    console.error(err);
  }
};

module.exports = map;