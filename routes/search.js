const express = require("express");
const router = express.Router();
const searchController = require("../controllers/search");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/getSearch", ensureAuth, searchController.getSearch);

router.get("/getMap", searchController.getMap)

router.get("/getExperiences", searchController.getExperiences)

module.exports = router;
