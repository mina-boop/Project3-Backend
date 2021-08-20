const express = require("express");
const User = require("../models/User");
const requireAuth = require("../middlewares/requireAuth");
const router = express.Router();
const Comment = require("../models/Comments");
const Meme = require("../models/Meme");


//Post Meme from the current user: OK
router.post("/:id/comment", requireAuth, (req, res, next) => {
    //add cuurentUser ObjectId
    User.findById(req.session.currentUser).then((userDocument) => {
        Meme.findById(req.params.id).then((memeDocument) => {
            if (!memeDocument) {
                return res.status(404).json({ message: "Meme not found" });
            }
            Comment.create({ creator: userDocument._id, text: req.body, meme: memeDocument._id })
                .then((memeDocument) => {
                    res.status(201).json(memeDocument);
                })
                .catch((error) => {
                    res.status(500).json(error);
                });
        }).catch((error) => console.log(error))

    }).catch((error) => console.log(error))

});
/* // Modified an Meme form the current user
router.patch("/:id", requireAuth, (req, res, next) => {
    User.findById(req.session.currentUser).then((userDocument) => {
        // Only the current user can modify an meme

        if (userDocument._id !== req.session.currentUser._id) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then((memeUpdatedDocument) => {
                res.status(201).json(memeUpdatedDocument);
            })
            .catch((error) => {
                res.status(500).json(error);
            });
    }).catch()

})
//OK delete sur Postman
router.delete("/:id", requireAuth, (req, res, next) => {
    Meme.findByIdAndDelete(req.params.id)
        .then(() => {
            return res.status(204);
        })
        .catch((error) => console.log(error))
})

router.get("/:memeId", (req, res, next) => {
    Meme.findById(req.params.id)
        .then((memeDocument) => {
            if (!memeDocument) {
                return res.status(404).json({ message: "Meme not found!" });
            } return res.status(204).json(memeDocument);
        })
        .catch((error) => console.log(error))

})
 */


module.exports = router;
