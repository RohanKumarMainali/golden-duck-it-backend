//importing mongoose
const mongoose = require("mongoose");

//define schema
const contactSchema = new mongoose.Schema({
    name: {
        type: String
    },
    contact: {
        type: String
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please enter a valid email address",
        ],
    },
    services: {
        type: String
    },
    found: {
        type: String
    },
    message: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = new mongoose.model("contact", contactSchema);