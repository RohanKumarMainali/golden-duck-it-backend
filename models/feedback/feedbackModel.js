//importing mongoose
const mongoose = require("mongoose");

//define schema
const feedbackSchema = new mongoose.Schema({
    title : String,
    description: String,
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
    author: String,
});

module.exports = new mongoose.model("feedback", feedbackSchema);