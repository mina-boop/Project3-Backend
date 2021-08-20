const mongoose = require("mongoose");
const User = require("../models/User");


const user = [
    {
        email: "toto@toto.fr",
        profileImg: "morty.png",
        userName: "Toto",
        password: "123",
        zodiacSign : "leo",
        city : "Nice",
        admin : false,
        // likes: [{ type: Schema.Types.ObjectId, ref:"Meme"}],
        // followers: [{ type: Schema.Types.ObjectId, ref:"User"}]
      },
      {
        email: "lola@lola.fr",
        profileImg: "morty.png",
        userName: "Lola",
        password: "123",
        zodiacSign : "Gemini",
        city : "Paris",
        admin : false,
        // likes: [{ type: Schema.Types.ObjectId, ref:"Meme"}],
        // followers: [{ type: Schema.Types.ObjectId, ref:"User"}]
      },
      {
        email: "mike@mike.fr",
        profileImg: "morty.png",
        userName: "Mike",
        password: "123",
        zodiacSign : "Libra",
        city : "Rio de Janeiro",
        admin : true,
        // likes: [{ type: Schema.Types.ObjectId, ref:"Meme"}],
        // followers: [{ type: Schema.Types.ObjectId, ref:"User"}]
      }
];

