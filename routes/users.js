const express = require("express");
const User = require("../models/User");
const Meme = require("../models/Meme");
const requireAuth = require("../middlewares/requireAuth");
const router = express.Router();

//Get the User personnal Infos: Ok in Postman
router.get("/me", (req, res, next) => {
  User.findById(req.session.currentUser)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});

//Update the User personnal Infos: Ok in Postman
router.patch("/me", requireAuth, (req, res, next) => {
  User.findByIdAndUpdate(req.session.currentUser, req.body, { new: true })
    .select("-password")
    .then((updatedDocument) => {
      res.status(200).json(updatedDocument);
    })
    .catch((error) => {
      res.status(404).json;
    });
});

//Get the memes of the current User

router.get("/me/memes", requireAuth, (req, res, next) => {
  Meme.find(req.session.currentUser)
    .then((memeDocument) => {
      res.status(200).json(memeDocument);
    })
    .catch((error) => {
      res.status(404).json;
    });
});

module.exports = router;
