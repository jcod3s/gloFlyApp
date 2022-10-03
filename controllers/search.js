// import { useRef, useEffect, useState } from 'react'
// import * as tt from '@tomtom-international/web-sdk-maps'
var fs = require('fs');
const { request } = require('http');
const Post = require("../models/Post");

module.exports = {
  
   getSearch:  async (req, res) => {
      try {
        //get user location
        const pos = await (await fetch(`https://api.geoapify.com/v1/ipinfo?&apiKey=${process.env.GEO_APIFY_API_KEY}`)).json()
        const location = pos.location
        const lat = location.latitude;
        const long = location.longitude;

        // legacy - doesn't result in error
        const map = await (await fetch(`https://a.api.tomtom.com/map/1/tile/basic/main/1/0/0.png?key=${process.env.TOM_TOM_API_KEY}`))
        const post = await Post.find().sort({createdAt: "desc"}).lean();
        console.log(map)

        res.render('search.ejs', {map: map, post: post}) 
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
