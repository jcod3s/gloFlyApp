const Comment = require("../models/Comment");

module.exports = {
  getComments: async (req, res) => {
    try {
      const comments = await Comment.find();
      res.render("post.ejs", { comments: comments});
    } catch (err) {
      console.log(err);
    }
  },
  postComment: async (req, res) => {
    try {
      await Comment.create({
        comment: req.body.comment,
        postId: req.params.id,
        likes: 0,
        user: req.user.id,
        userName: req.user.userName
      });
      console.log("Comment has been added!");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  editComment: async(req,res) => {
    try {
        //jazz
    } catch (err) {
        console.log(err)
    }
  },
  likeComment: async (req, res) => {
    try {
      await Comment.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Liked comment");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deleteComment: async (req, res) => {
    try {
      // Find post by id
      let comment = await Comment.findById({ _id: req.params.id });
      // Delete image from cloudinary
     
      await Comment.remove({ _id: req.params.id });
      console.log("Deleted Comment");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      res.redirect(`/post/${req.params.id}`);
    }
  },
};
