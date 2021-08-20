const express = require("express");
const User = require("../models/User");
const requireAuth = require("../middlewares/requireAuth");
const router = express.Router();
const Meme = require("../models/Meme");

//Post Items infos:

router.post("/create", requireAuth, (req, res, next) => {
  /*   console.log(req.body);
    if (req.file) {
      req.body.image = req.file.path;
    } else {
      req.body.image = undefined;
    } */
  User.findById(req.session.currentUser).then((userDocument) => {
    Meme.create(userDocument._id, req.body)
      .then((memeDocument) => {
        res.status(201).json(memeDocument);
      })
      .catch((error) => {
        res.status(500).json(error);
      });

  }).catch()

});

router.patch("/:id", requireAuth, (req, res, next) => {
  Meme.findByIdAndUpdate(req.params.id, meme, { new: true })
    .then((updateDocument) => {
      return res.status(200).json(updateDocument);
    })
    .catch((e) => console.log(e))
})






module.exports = router;
