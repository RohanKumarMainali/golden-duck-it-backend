//importing mongoose
const mongoose = require("mongoose");

//define schema
const blogSchema = new mongoose.Schema({
    title : String,
    description: String,
    image: String,
    catagory: String,
    date:{
        type: Date,
        default: Date.now()
    }
});

module.exports = new mongoose.model("blog", blogSchema);