const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const commentsController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//comment routes
router.get("/getComments", commentsController.getComments);

router.post("/postComment/:id", commentsController.postComment);

router.put("/editComment", commentsController.editComment);

router.put("/likeComment", commentsController.likeComment);

router.delete("/deleteComment", commentsController.deleteComment);


module.exports = router;