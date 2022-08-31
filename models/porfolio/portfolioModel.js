//importing mongoose
const mongoose = require("mongoose");

//define schema
const portfolioSchema = new mongoose.Schema({
    brand_name: {
        type: String,
        required:true
    },
    catagory: {
        type: String,
        required:true
    },
    image: {
        type: String, 
        required:true
    },
    date:{
        type: String,
        default: Date.now()
    }
});

module.exports = new mongoose.model("portfolio", portfolioSchema);