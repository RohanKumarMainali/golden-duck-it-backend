//importing mongoose
const mongoose = require("mongoose");

//define schema
const projectSchema = new mongoose.Schema({
    title : String,
    category: String,
    image: String,
    link: String,
});

module.exports = new mongoose.model("project", projectSchema);