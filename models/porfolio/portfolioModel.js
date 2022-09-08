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

module.exports = new mongoose.model("portfolio", portfolioSchema);