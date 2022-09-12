//importing mongoose
const mongoose = require("mongoose");

//define schema
const gallerySchema = new mongoose.Schema({
    image: {
        public_id :{
            type : String,
            requried: true,
        },
        url: {
            type: String,
            required: true,
        }
    },
    date:{
        type: Date,
        default: Date.now()
    }
});

module.exports = new mongoose.model("gallery", gallerySchema);