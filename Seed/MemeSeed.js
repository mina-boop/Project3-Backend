const mongoose = require("mongoose");
const Meme = require("../models/Meme");

const meme = [

    {
    creator:"611f76aa8cbc57187918f258",
    caption1:"Friday",
    caption2: "Week-end is coming",

    },
    {
        timestamps: true, // show time
    },

    {creator:"611f76aa8cbc57187918f258",
    caption1: "Monday be like",
    caption2: "",
    },
    {  timestamps: true, // show time
    },
    {
    creator:"611f76aa8cbc57187918f258",
    caption1: "",
     caption2: "Dying inside",
    },
    {
        timestamps: true, // show time
      }
];

Meme.create(meme)
.then((memeDoc)=>{
    console.log(memeDoc)})
    .catch((e)=>console.log(e))
.catch((e)=>console.log(e))