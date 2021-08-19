const express = require("express");
const User = require("../models/User");
const requireAuth = require("../middlewares/requireAuth");
const router = express.Router();


//Get the User Infos:
router.get("/me", requireAuth, (req, res, next) => {
  User.findById(req.session.currentUser._id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});


//Update the User Infos:
router.patch("/me", requireAuth, (req, res, next) => {
  User.findByIdAndUpdate(req.session.currentUser, req.body, { new: true })
    .select("-password")
    .then((userDocument) => {
      res.status(200).json(userDocument);
    })
    .catch((error) => {
      res.status(404).json;
    });
});






module.exports = router;
