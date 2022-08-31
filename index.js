require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoDB = require('./config/db');
mongoDB();

const app = express();

//middlewares
app.use(cors());

app.use(express.json());




const PORT =  process.env.PORT ||8000;

const server = app.listen(PORT, () =>{
    console.log(`I am listening at http://localhost:${PORT}`);
});

process.on('unhandledRejection',(error,promise)=>{
    console.log(`Logged in error : ${error}`);
    server.close(()=>process.exit(1));
})