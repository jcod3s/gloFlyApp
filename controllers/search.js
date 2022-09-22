// import { useRef, useEffect, useState } from 'react'
// import * as tt from '@tomtom-international/web-sdk-maps'

module.exports = {

  getSearch: async (req, res) => {
      try {
        res.render("search.ejs");
      } catch (err) {
        console.log(err);
      }
    },
  getLocation: async (req, res) => {
    try {
        
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
      //use get experiences
    } catch (err) {
      //
    }
  }
};
