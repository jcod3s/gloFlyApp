const Search = require("../models/Post");

module.exports = {
  loadMap: async (req,res) => {
      

        let map = tt.map({
          key: process.env.TOM_TOM_API_KEY,
          container: mapElement,
        });
    },
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
