const express = require("express");
const User = require("../models/User");
const Meme = require("../models/Meme");
const requireAuth = require("../middlewares/requireAuth");
const router = express.Router();
const upload = require("../config/cloudinary");

//Get the User personnal Infos: Ok in Postman
router.get("/me", (req, res, next) => {
  User.findById(req.session.currentUser)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});

//Update the User personnal Infos: Ok in Postman
router.patch(
  "/me",
  requireAuth,
  upload.single("profileImg"),
  (req, res, next) => {
    if (req.file) {
      req.body.profileImg = req.file.path; //  ProfileImage key added to req.body
    }
    User.findByIdAndUpdate(req.session.currentUser, req.body, { new: true })
      .select("-password")
      .then((updatedDocument) => {
        res.status(200).json(updatedDocument);
      })
      .catch((error) => {
        res.status(404).json;
      });
  }
);

//Get the memes of the current User

router.get("/me/memes", requireAuth, (req, res, next) => {
  Meme.find({ creator: req.session.currentUser }) //get all the memes matching the creator field that matches the logged in users id
    .then((memeDocument) => {
      res.status(200).json(memeDocument);
    })
    .catch((error) => {
      res.status(404).json;
    });
});

module.exports = router;
