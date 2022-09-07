//importing mongoose
const mongoose = require("mongoose");

//define schema
const blogSchema = new mongoose.Schema({
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
    date:{
        type: Date,
        default: Date.now()
    }
});

module.exports = new mongoose.model("blog", blogSchema);