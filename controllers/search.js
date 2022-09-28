// import { useRef, useEffect, useState } from 'react'
// import * as tt from '@tomtom-international/web-sdk-maps'

module.exports = {

  getSearch: async (req, res) => {
      try {
        const pos = await fetch(`https://api.geoapify.com/v1/ipinfo?&apiKey=${process.env.GEO_APIFY_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          console.log(result)

          const location = result.location
          const lat = location.latitude;
          const long = location.longitude;
        })
        .then(res => async (long,lat) =>{
          const map = await fetch(`https://api.tomtom.com/map/1/tile/basic/main/20/${long}/${lat}.png?tileSize=256&view=Unified&language=NGT&key=${process.env.TOM_TOM_API_KEY}`)
          res.render('search.ejs', {map: map})
        })          
      } catch (err) {
        console.log(err);
      }
    },
  getMap: async (req, res) => {
    try {
      //
    } catch (err) {
      //
    }
  },
  getExperiences: async (req, res) => {
    try {
      //use get experiences
    } catch (err) {
      //
    }
  }
};



// const map = async () => {
//   try {
//     const options = {
//       enableHighAccuracy: true,
//       timeout: 5000,
//       maximumAge: 0
//     };

//     function success(pos) {
//       const crd = pos.coords;
//       const lat = crd.latitude;
//       const long = crd.longitude;
  
//       let center = [long,lat]
//       const map = tt.map({
//           key: process.env.TOM_TOM_API_KEY,
//           container: "map",
//           center: center,
//           zoom: 20
//       })
//       map.on('load', () => {
//           new tt.Marker().setLngLat(center).addTo(map)
//       })
//     }
//     const map = await navigator.geolocation.getCurrentPosition(success, error, options)
//   } catch (err) {
//     console.error(err);
//   }
// };
