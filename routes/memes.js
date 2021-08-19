const express = require("express");
const User = require("../models/User");
const requireAuth = require("../middlewares/requireAuth");
const router = express.Router();
const Meme = require("../models/Meme");

//Post Items infos:

router.post("/", requireAuth, (req, res, next) => {
  Meme.create(req.body).then(createdDocument);
});

module.exports = Meme;
