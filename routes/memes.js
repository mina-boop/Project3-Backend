const express = require("express");
const User = require("../models/User");
const requireAuth = require("../middlewares/requireAuth");
const router = express.Router();
const Meme = require("../models/Meme");

//Post Items infos:

router.post("/create", (req, res, next) => {
  Meme.create(req.body)
  .then((memeDocument)=>{res.status(201).json(memeDocument);
  })
  .catch((e)=>console.log(e))
});

router.patch("/:id", requireAuth, (req,res,next)=>{
  Meme.findByIdAndUpdate(req.params.id, meme, {new:true})
  .then((updateDocument)=>{
    return res.status(200).json(updateDocument);
  })
  .catch((e)=>console.log(e))
})

router.delete("/:id", requireAuth, (req,res,next)=>{
  Meme.findByIdAndDelete(req.params.id)
  .then(()=> {return res.status(204);
  })
  .catch((error)=>console.log(error))
})





module.exports = Meme;
