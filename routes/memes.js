const express = require("express");
const User = require("../models/User");
const requireAuth = require("../middlewares/requireAuth");
const router = express.Router();
const Meme = require("../models/Meme");

//Post Meme from the current user: OK
router.post("/create", requireAuth, (req, res, next) => {
  //add cuurentUser ObjectId
  User.findById(req.session.currentUser).then((userDocument) => {
    const { caption1, caption2 } = req.body
    Meme.create({ creator: userDocument, caption1: caption1, caption2: caption2 })
      .then((memeDocument) => {
        res.status(201).json(memeDocument);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }).catch()

});
// Modified an Meme form the current user
router.patch("/:id", requireAuth, (req, res, next) => {
  User.findById(req.session.currentUser).then((userDocument) => {
    // Only the current user can modify an meme

    if (userDocument._id !== req.session.currentUser._id) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    Meme.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((memeUpdatedDocument) => {
        res.status(201).json(memeUpdatedDocument);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }).catch()

})

module.exports = router;
