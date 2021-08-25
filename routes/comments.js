const express = require("express");
const User = require("../models/User");
const requireAuth = require("../middlewares/requireAuth");
const router = express.Router();
const Comment = require("../models/Comments");
const Meme = require("../models/Meme");



//Post comment on the meme and from the current user: OK
router.post("/:memeId/comment", requireAuth, (req, res, next) => {
    User.findById(req.session.currentUser).then((userDocument) => {
        Meme.findById(req.params.memeId).then((memeDocument) => {
            if (!memeDocument) {
                return res.status(404).json({ message: "Meme not found" });
            }
            Comment.create({ creator: userDocument._id, text: req.body.comment, meme: memeDocument._id })
                .then((memeDocument) => {
                    res.status(201).json(memeDocument);
                })
                .catch((error) => {
                    res.status(500).json(error);
                });
        }).catch((error) => console.log(error))

    }).catch((error) => console.log(error))

});
// Modify a comment of the current user
router.patch("/:memeId/:commentId", requireAuth, (req, res, next) => {
    User.findById(req.session.currentUser).then((userDocument) => {
        // check if the user loggin and commentor are the same 
        if (userDocument._id != req.session.currentUser._id) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        Comment.findByIdAndUpdate(req.params.commentId, req.body, { new: true })
            .then((memeUpdatedDocument) => {
                res.status(201).json(memeUpdatedDocument);
            })
            .catch((error) => {
                res.status(500).json(error);
            });
    }).catch()

})


//delete comment
router.delete("/:memeId/:commentId", requireAuth, (req, res, next) => {
    User.findById(req.session.currentUser).then((userDocument) => {
        if (userDocument._id != req.session.currentUser._id) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        Comment.findByIdAndDelete(req.params.commentId)
            .then(() => {
                res.status(204)
            })
            .catch((error) => {
                res.status(500).json(error);
            });
    }).catch()
})

router.get("/:memeId/allComments", (req, res, next) => {
    Comment.find({ meme: req.params.memeId }).populate()
        .then((commentDocument) => {
            console.log(commentDocument)
            res.status(201).json(commentDocument)
        })
        .catch((error) => console.log(error))
})


module.exports = router;
