//importing mongoose
const mongoose = require("mongoose");

//define schema
const feedbackSchema = new mongoose.Schema({
    title : String,
    description: String,
    image: String,
    author: String,
});

module.exports = new mongoose.model("feedback", feedbackSchema);