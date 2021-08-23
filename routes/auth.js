const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const upload = require("../config/cloudinary");

const salt = 10;

//Ok in Postman
router.post("/signin", (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((userDocument) => {
      if (!userDocument) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const isValidPassword = bcrypt.compareSync(
        password,
        userDocument.password
      );
      if (!isValidPassword) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      req.session.currentUser = {
        // role: "userDocument.role",  // if you need to handle roles
        _id: userDocument._id,
      };

      res.redirect("/api/users/me");
    })
    .catch(next);
});


//Ok in Postman
router.post("/signup", (req, res, next) => {

  const { email, password, userName, zodiacSign, city, profileImg } = req.body;
console.log(req.body)
 

  User.findOne({ email })
    .then((userDocument) => {
      if (userDocument) {
        return res.status(400).json({ message: "Email already taken" });
      }

      const hashedPassword = bcrypt.hashSync(password, salt);
      const newUser = {
        email,
        userName,
        zodiacSign,
        city,
        profileImg,
        password: hashedPassword,
      };

      User.create(newUser)
        .then(() => {
          res.sendStatus(201);
        })
        .catch(next);
    })
    .catch(next);

});

//Ok in Postman
router.get("/logout", (req, res, next) => {
  req.session.destroy(function (error) {
    if (error) next(error);
    else res.status(200).json({ message: "Succesfully disconnected." });
  });
});

module.exports = router;
