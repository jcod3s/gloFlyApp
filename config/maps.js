// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.DB_STRING, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false,
//       useCreateIndex: true,
//     });

//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

    
  
  function success(pos) {
    //coord vars
    const crd = pos.coords;
    const lat = crd.latitude;
    const long = crd.longitude;

    //map vars
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
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  const getMap = async () => {
    // https://{baseURL}/map/{versionNumber}/tile/{layer}/{style}/{zoom}/{X}/{Y}.{format}?key={Your_API_Key}&tileSize={tileSize}&view={geopoliticalView}&language={language}
    try {
        const getMap = await navigator.geolocation.getCurrentPosition(success, error, options)
    } catch (err) {
            console.error(err);
            process.exit(1);
          }
  }

  module.exports = maps;