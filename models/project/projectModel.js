//importing mongoose
const mongoose = require("mongoose");

//define schema
const projectSchema = new mongoose.Schema({
    title : String,
    category: String,
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
    link: String,
});

module.exports = new mongoose.model("project", projectSchema);