// import { useRef, useEffect, useState } from 'react'
import * as tt from '@tomtom-international/web-sdk-maps'
const Post = require("../models/Post")

module.exports = {

  getSearch: async (req, res) => {
      // additions
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
            zoom: 10
        })
        map.on('load', () => {
            new tt.Marker().setLngLat(center).addTo(map)
        })
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      // end additions
        
      try {
          const posts = await Post.find().sort({ createdAt: "desc" }).lean();
          res.json(options, success, error)
          res.render('search.ejs', { posts: posts})
        } catch (err) {
          console.log(err);
        }
    },
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    getLocation: async (req, res) => {
    try {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
      async function success(pos) {
        const crd = await pos.coords;
        const lat = await crd.latitude;
        const long = await crd.longitude;
    
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
    
    navigator.geolocation.getCurrentPosition(success, error, options)
    } catch (err) {
      //
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
      const posts = await Post.find().sort({ createdAt: "desc" }).lean();
      res.render('search.ejs', { posts: posts})
    } catch (err) {
      //
    }
  }
};
