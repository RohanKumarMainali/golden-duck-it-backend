require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoDB = require('./config/index');
const  routes  = require('./routes/index.routes');
mongoDB();

const app = express();

//middlewares
app.use(cors());

app.use(express.json());


app.use('/api/v4',routes)
app.use(express.static(__dirname))


const PORT =  process.env.PORT ||8000;

const server = app.listen(PORT, () =>{
    console.log(`I am listening at http://localhost:${PORT}`);
});

process.on('unhandledRejection',(error,promise)=>{
    console.log(`Logged in error : ${error}`);
    server.close(()=>process.exit(1));
})