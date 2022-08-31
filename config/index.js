
require("dotenv").config()
const mongoose = require('mongoose')



const env = process.env.NODE_ENV || 'development';
const API_URL = "http;//localhost:8000";
const PORT = process.env.PORT || 8000;
const DB_URL = "mongodb+srv://rohan:admin@cluster0.8scrjcj.mongodb.net/test";



const mongoDB = async()=>{
    try{
        await mongoose.connect(DB_URL);
         console.log("Database connected");
    }
    catch(err){
        console.log(err.message);
    }
   
}

module.exports = mongoDB;